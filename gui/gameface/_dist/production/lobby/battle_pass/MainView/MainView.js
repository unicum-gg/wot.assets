(() => {
    var __webpack_modules__ = {
            3457: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => l.L, qE: () => l.q, u5: () => c });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7727),
                    o = a(7363),
                    i = a.n(o),
                    u = a(6880),
                    l = a(2106);
                const c = ({
                    children: e,
                    size: t,
                    disabled: a,
                    mixClass: r,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: p,
                    onClick: E,
                    isFocused: g = !1,
                    type: b = l.L.primary,
                    soundHover: v = 'highlight',
                    soundClick: h = 'play',
                }) => {
                    const f = (0, o.useRef)(null),
                        C = (0, o.useState)(g),
                        A = C[0],
                        w = C[1],
                        B = (0, o.useState)(!1),
                        D = B[0],
                        y = B[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                A && null !== f.current && !f.current.contains(e.target) && w(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, o.useEffect)(() => {
                            w(g);
                        }, [g]),
                        i().createElement(
                            'div',
                            {
                                ref: f,
                                className: s()(
                                    u.Z.base,
                                    u.Z[`base__${b}`],
                                    a && u.Z.base__disabled,
                                    t && u.Z[`base__${t}`],
                                    A && u.Z.base__focus,
                                    D && u.Z.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== v && (0, n.G)(v), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    a || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    a ||
                                        (null !== h && (0, n.G)(h),
                                        _ && _(e),
                                        g && (a || (f.current && (f.current.focus(), w(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (p && p(e), y(!1));
                                },
                                onClick: function (e) {
                                    a || (E && E(e));
                                },
                            },
                            b !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: u.Z.back }),
                                    i().createElement('span', { className: u.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: s()(u.Z.state, u.Z.state__default) },
                                i().createElement('span', { className: u.Z.stateDisabled }),
                                i().createElement('span', { className: u.Z.stateHighlightHover }),
                                i().createElement('span', { className: u.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, t, a) => {
                'use strict';
                let r, s;
                (a.d(t, { L: () => r, q: () => s }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'));
                    })(s || (s = {})));
            },
            918: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => c });
                var r = a(6483),
                    s = a.n(r),
                    n = a(2372),
                    o = a(7363),
                    i = a.n(o);
                const u = {
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
                var l = a(329);
                const c = (0, o.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: a,
                        type: r,
                        value: o,
                        discountValue: c,
                        showPlus: d,
                        isEnough: _ = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: E,
                    }) =>
                        i().createElement(
                            'span',
                            { className: s()(u.base, u[`base__${a}`], p) },
                            i().createElement(
                                'span',
                                {
                                    className: s()(
                                        u.value,
                                        u[`value__${r}`],
                                        !_ && u.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                d && o > 0 && '+',
                                i().createElement(n.A, { value: o, format: r === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', {
                                className: s()(u.icon, u[`icon__${r}-${a}`], null == E ? void 0 : E.icon),
                            }),
                            e &&
                                i().createElement(
                                    'span',
                                    {
                                        className: s()(
                                            u.stock,
                                            c && u.stock__indent,
                                            t && u.stock__interactive,
                                            null == E ? void 0 : E.stock,
                                        ),
                                    },
                                    i().createElement('span', {
                                        className: u.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, t, a) => {
                'use strict';
                let r, s, n;
                (a.d(t, { V2: () => s, et: () => r, we: () => n }),
                    (function (e) {
                        ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(n || (n = {})));
            },
            2372: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => s });
                var r = a(9916);
                const s = ({ value: e, format: t = 'integral' }) => {
                    const a = (function (e) {
                            return 'gold' === e ? r.B3.GOLD : r.B3.INTEGRAL;
                        })(t),
                        s = r.Z5.getNumberFormat(e, a);
                    return void 0 !== e && void 0 !== s ? s : null;
                };
            },
            280: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var r = a(6483),
                    s = a.n(r),
                    n = a(3649),
                    o = a(7363),
                    i = a.n(o),
                    u = a(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: r = n.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, n.WU)(t, e) : t;
                    return i().createElement(
                        o.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            i().createElement(
                                'div',
                                { className: s()(u.Z.base, a), key: `${t}-${l}` },
                                (0, n.Uw)(t, r, e).map((e, t) =>
                                    i().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => r.z });
                var r = a(280);
                a(8082);
            },
            8082: (e, t, a) => {
                'use strict';
                a(3649);
            },
            2828: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => m });
                var r = a(6483),
                    s = a.n(r);
                const n =
                    (e, t) =>
                    (...a) => {
                        if (e(...a)) return t(...a);
                    };
                var o = a(1641),
                    i = a(7727),
                    u = a(7363),
                    l = a.n(u);
                const c = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
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
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.type,
                        a = e.children,
                        r = e.className,
                        m = e.classNames,
                        p = e.disabled,
                        E = void 0 !== p && p,
                        g = e.isVisibleLabel,
                        b = void 0 !== g && g,
                        v = e.soundHover,
                        h = void 0 === v ? R.sounds.highlight() : v,
                        f = e.soundClick,
                        C = void 0 === f ? R.sounds.play() : f,
                        A = e.size,
                        w = void 0 === A ? 'normal' : A,
                        B = e.onClick,
                        D = e.onMouseEnter,
                        y = e.onMouseLeave,
                        F = e.onMouseDown,
                        P = e.onMouseUp,
                        S = e.onFocus,
                        N = e.onBlur,
                        k = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, d);
                    const L = (0, u.useState)(!1),
                        x = L[0],
                        I = L[1],
                        T = (0, u.useState)(!1),
                        O = T[0],
                        M = T[1],
                        $ = (0, u.useRef)(null),
                        W = () => !1 === E,
                        H = (e) => W() && ((e) => e.button === o.t.LEFT)(e),
                        z = n(W, (e) => {
                            null == B || B(e);
                        }),
                        G = n(H, (e) => {
                            (I(!0), null == F || F(e), C && (0, i.G)(C));
                        }),
                        U = n(H, (e) => {
                            (I(!1), null == P || P(e));
                        }),
                        V = n(W, (e) => {
                            (M(!0), null == D || D(e), h && (0, i.G)(h));
                        }),
                        j = n(W, (e) => {
                            null == S || S(e);
                        }),
                        q = n(W, (e) => {
                            null == N || N(e);
                        });
                    return l().createElement(
                        'div',
                        _(
                            {
                                ref: $,
                                className: s()(
                                    c.base,
                                    E && c.base__disabled,
                                    b && c.base__visibleLabel,
                                    !E && x && c.base__mouseDown,
                                    !E && O && c.base__hovered,
                                    r,
                                ),
                                onClick: z,
                                onMouseEnter: V,
                                onMouseLeave: (e) => {
                                    (M(!1), I(!1), null == y || y(e));
                                },
                                onMouseDown: G,
                                onMouseUp: U,
                                onFocus: j,
                                onBlur: q,
                            },
                            k,
                        ),
                        l().createElement('div', {
                            className: s()(c.icon, c[`icon__${w}`], c[`icon__${t}`], null == m ? void 0 : m.icon),
                        }),
                        a &&
                            l().createElement(
                                'div',
                                { className: s()(c.label, c[`label__${w}`], null == m ? void 0 : m.label) },
                                a,
                            ),
                    );
                };
            },
            3495: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => i, Y: () => l });
                var r = a(3138),
                    s = a(7363),
                    n = a(1043),
                    o = a(5262);
                function i(e = r.O.client.getSize('rem')) {
                    const t = e.width,
                        a = e.height;
                    return Object.assign({ width: t, height: a }, (0, o.T)(t, a, n.j));
                }
                const u = i(),
                    l = (0, s.createContext)(u);
            },
            1039: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => i });
                var r = a(3138),
                    s = a(7363),
                    n = a.n(s),
                    o = a(3495);
                const i = ({ children: e }) => {
                    const t = (0, s.useState)(o.Q),
                        a = t[0],
                        i = t[1],
                        u = (0, s.useState)(!1),
                        l = u[0],
                        c = u[1];
                    return (
                        (0, s.useLayoutEffect)(() => {
                            function e() {
                                i((e) => {
                                    const t = r.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, o.Q)(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                r.O.client.events.on('clientResized', e),
                                r.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (r.O.client.events.off('clientResized', e),
                                        r.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        n().createElement(o.Y.Provider, { value: a }, l && e)
                    );
                };
            },
            6010: (e, t, a) => {
                'use strict';
                var r = a(7363),
                    s = a(7382),
                    n = a(3495);
                const o = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, o);
                    const i = (0, r.useContext)(n.Y),
                        u = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        d = i.small,
                        _ = i.extraSmall,
                        m = i.extraLargeWidth,
                        p = i.largeWidth,
                        E = i.mediumWidth,
                        g = i.smallWidth,
                        b = i.extraSmallWidth,
                        v = i.extraLargeHeight,
                        h = i.largeHeight,
                        f = i.mediumHeight,
                        C = i.smallHeight,
                        A = i.extraSmallHeight,
                        w = { extraLarge: v, large: h, medium: f, small: C, extraSmall: A };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && u) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && d) return t;
                        if (a.extraSmall && _) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, s.H)(t, a, w);
                        if (a.largeWidth && p) return (0, s.H)(t, a, w);
                        if (a.mediumWidth && E) return (0, s.H)(t, a, w);
                        if (a.smallWidth && g) return (0, s.H)(t, a, w);
                        if (a.extraSmallWidth && b) return (0, s.H)(t, a, w);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && v) return t;
                            if (a.largeHeight && h) return t;
                            if (a.mediumHeight && f) return t;
                            if (a.smallHeight && C) return t;
                            if (a.extraSmallHeight && A) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => r });
                const r = (e, t, a) =>
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
            7739: (e, t, a) => {
                'use strict';
                a.d(t, { YN: () => s.Y, ZN: () => r.Z });
                a(6010);
                var r = a(1039),
                    s = a(3495);
            },
            1043: (e, t, a) => {
                'use strict';
                a.d(t, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, a) => {
                'use strict';
                var r;
                function s(e, t, a) {
                    const r = (function (e, t) {
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
                        s = (function (e, t) {
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
                        n = Math.min(r, s);
                    return {
                        extraLarge: n === a.extraLarge.weight,
                        large: n === a.large.weight,
                        medium: n === a.medium.weight,
                        small: n === a.small.weight,
                        extraSmall: n === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: s === a.extraLarge.weight,
                        largeHeight: s === a.large.weight,
                        mediumHeight: s === a.medium.weight,
                        smallHeight: s === a.small.weight,
                        extraSmallHeight: s === a.extraSmall.weight,
                    };
                }
                (a.d(t, { T: () => s, u: () => r }),
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
                    })(r || (r = {})));
            },
            8910: (e, t, a) => {
                'use strict';
                a.d(t, { ru: () => E.r, _e: () => f, uu: () => u.uu, MR: () => v });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7515),
                    o = a(7363),
                    i = a.n(o),
                    u = a(1975),
                    l = a(7442),
                    c = a(156);
                const d = 'OptimizedProgressBar_base_1f',
                    _ = 'OptimizedProgressBar_wrapper_ab',
                    m = 'OptimizedProgressBar_backgroundWrapper_b6',
                    p = 'OptimizedProgressBar_background_ce';
                var E = a(7736);
                const g = ['api', 'value', 'maxValue', 'theme', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const v = () => ({ update: () => {} }),
                    h = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    f = (e) => {
                        let t = e.api,
                            a = e.value,
                            r = e.maxValue,
                            E = void 0 === r ? 100 : r,
                            v = e.theme,
                            f = void 0 === v ? u.uH : v,
                            C = e.className,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    s = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                                return s;
                            })(e, g);
                        const w = (0, o.useRef)(null),
                            B = (0, o.useRef)(null),
                            D = (0, o.useRef)(null),
                            y = (0, n.u)(0, a, E) / E,
                            F = (0, o.useCallback)(
                                (e) => {
                                    (D.current &&
                                        w.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, r) => {
                                            const s = (e - h(a, t)) | 0,
                                                o = (0, n.u)(0, a.offsetWidth, s);
                                            r.style.transform = `translateX(${o}px)`;
                                        })(e, w.current, D.current),
                                        B.current &&
                                            w.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: r, line: s },
                                            ) => {
                                                const o = Math.max(0, Math.floor(r.offsetWidth * a) - 8e3),
                                                    i = (e - h(r, t)) | 0,
                                                    u = (0, n.u)(0, o, i);
                                                s.style.transform = `translateX(${u}px)`;
                                            })(e, y, { line: B.current, container: w.current }));
                                },
                                [y],
                            ),
                            P = (0, o.useMemo)(() => (0, c.VQ)(f), [f]);
                        return (
                            (t.current.update = F),
                            i().createElement(
                                'div',
                                { className: s()(d, C), ref: w },
                                i().createElement(
                                    'div',
                                    { className: _ },
                                    i().createElement(
                                        'div',
                                        { className: m },
                                        i().createElement(
                                            'div',
                                            { style: P, className: p, ref: D },
                                            i().createElement(l.J, { size: A.size }),
                                        ),
                                    ),
                                    i().createElement(
                                        u.ko,
                                        b({}, A, {
                                            lineRef: B,
                                            value: a,
                                            theme: f,
                                            maxValue: E,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
            },
            1975: (e, t, a) => {
                'use strict';
                a.d(t, { $u: () => d.$, ko: () => E, uH: () => m, uu: () => p });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(2468),
                    u = a(7442),
                    l = a(2407),
                    c = a(156),
                    d = a(7736),
                    _ = a(1635);
                a(6823);
                const m = c.Gh,
                    p = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    E = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = m,
                            size: a = d.$.Default,
                            animationSettings: r = p,
                            disabled: n = !1,
                            withoutBackground: E = !1,
                            value: g,
                            deltaFrom: b,
                            additionalKey: v,
                            lineRef: h,
                            onChangeAnimationState: f,
                            onEndAnimation: C,
                            onComplete: A,
                            className: w,
                        }) => {
                            const B = (0, _.S)(g, e, b);
                            return o().createElement(
                                'div',
                                { className: s()(i.Z.base, w, i.Z[`base__${a}`]), style: (0, c.VQ)(t) },
                                !E && o().createElement(u.J, { size: a }),
                                o().createElement(l.r, {
                                    size: a,
                                    lineRef: h,
                                    disabled: n,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    additionalKey: v,
                                    animationSettings: r,
                                    onEndAnimation: C,
                                    onChangeAnimationState: f,
                                    onComplete: A,
                                }),
                            );
                        },
                    );
            },
            7442: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => l });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(2468),
                    u = a(7736);
                const l = ({ size: e = u.$.Default }) => {
                    const t = s()(i.Z.background, i.Z[`background__${e}`]);
                    return o().createElement('div', { className: t });
                };
            },
            8150: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => u });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(8804);
                const u = ({ size: e }) => {
                    const t = s()(i.Z.base, i.Z[`base__${e}`]);
                    return o().createElement('div', { className: t });
                };
            },
            2407: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => l });
                var r = a(7363),
                    s = a.n(r),
                    n = a(6736),
                    o = a(5680),
                    i = a(2386);
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = (0, r.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: r,
                        deltaFrom: l,
                        additionalKey: c,
                        animationSettings: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                        onComplete: p,
                    }) => {
                        if (l === t)
                            return s().createElement(o.M, {
                                key: `${l}-${t}-${c}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: r,
                                onComplete: p,
                            });
                        const E = {
                            from: l,
                            to: t,
                            size: e,
                            additionalKey: c,
                            lineRef: a,
                            disabled: r,
                            animationSettings: d,
                            onComplete: p,
                            onEndAnimation: _,
                            onChangeAnimationState: m,
                        };
                        return d.withStack
                            ? s().createElement(i.F, E)
                            : s().createElement(n.H, u({ key: `${l}-${t}-${c}` }, E));
                    },
                );
            },
            1848: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => l });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(8150),
                    u = a(6664);
                const l = (0, n.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: r, isComplete: n, withoutBounce: l }) => {
                        const c = s()(
                                u.Z.base,
                                u.Z[`base__${e}`],
                                a && u.Z.base__disabled,
                                n && u.Z.base__finished,
                                l && u.Z.base__withoutBounce,
                            ),
                            d = !a && !n;
                        return o().createElement(
                            'div',
                            { className: c, style: r, ref: t },
                            o().createElement('div', { className: u.Z.pattern }),
                            o().createElement('div', { className: u.Z.gradient }),
                            d && o().createElement(i.$, { size: e }),
                        );
                    },
                );
            },
            2434: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => p });
                var r = a(6483),
                    s = a.n(r),
                    n = a(122),
                    o = a(7363),
                    i = a.n(o),
                    u = a(8150),
                    l = a(6823),
                    c = a(6147);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    _ = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    p = (0, o.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: r,
                            size: p,
                            to: E,
                            onEndAnimation: g,
                            onChangeAnimationState: b,
                            className: v,
                        }) => {
                            const h = E < r,
                                f = (0, o.useState)(l.S.Idle),
                                C = f[0],
                                A = f[1],
                                w = C === l.S.End,
                                B = C === l.S.Idle,
                                D = C === l.S.Grow,
                                y = C === l.S.Shrink,
                                F = (0, o.useCallback)(
                                    (e) => {
                                        (A(e), b && b(e));
                                    },
                                    [b],
                                ),
                                P = (0, o.useCallback)(
                                    (e, t) =>
                                        (0, n.F)(() => {
                                            F(e);
                                        }, t),
                                    [F],
                                );
                            (0, o.useEffect)(() => {
                                if (!a)
                                    return B
                                        ? P(l.S.Grow, t)
                                        : D
                                          ? P(l.S.Shrink, e)
                                          : y
                                            ? P(l.S.End, e)
                                            : void (w && g && g());
                            }, [P, a, w, D, B, y, g, t, e]);
                            const S = (0, o.useMemo)(() => Object.assign({ width: '100%' }, m(e), d(h)), [h, e]),
                                N = (0, o.useMemo)(() => Object.assign({ width: '0%' }, m(e), d(h)), [h, e]),
                                k = (0, o.useMemo)(() => Object.assign({ width: '0%' }, _(h, r), m(e)), [r, h, e]),
                                R = (0, o.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(E - r)}%` }, _(h, r), m(e)),
                                    [r, h, E, e],
                                );
                            if (w) return null;
                            const L = s()(c.Z.base, v, h && 0 === E && c.Z.base__withoutBounce);
                            return i().createElement(
                                'div',
                                { style: B ? k : R, className: L },
                                i().createElement(
                                    'div',
                                    { style: y ? N : S, className: c.Z.glow },
                                    i().createElement(u.$, { size: p }),
                                ),
                            );
                        },
                    );
            },
            5913: (e, t, a) => {
                'use strict';
                a.d(t, { x: () => l });
                var r = a(122),
                    s = a(7363),
                    n = a.n(s),
                    o = a(8150),
                    i = a(6823),
                    u = a(9919);
                const l = (0, s.memo)(
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
                        const p = d < l,
                            E = (0, s.useState)(i.V.Idle),
                            g = E[0],
                            b = E[1],
                            v = g === i.V.In,
                            h = g === i.V.End,
                            f = g === i.V.Idle,
                            C = (0, s.useCallback)(
                                (e) => {
                                    (b(e), m && m(e));
                                },
                                [m],
                            );
                        ((0, s.useEffect)(() => {
                            if (f && !a) {
                                const e = t;
                                return (0, r.F)(() => {
                                    C(i.V.In);
                                }, e);
                            }
                        }, [C, a, f, t]),
                            (0, s.useEffect)(() => {
                                if (v) {
                                    const a = e + t;
                                    return (0, r.F)(() => {
                                        (_ && _(), C(i.V.End));
                                    }, a);
                                }
                            }, [C, v, _, t, e]));
                        const A = (0, s.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [p ? 'left' : 'right']: '0',
                                }),
                                [p, t, e],
                            ),
                            w = (0, s.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [p ? 'left' : 'right']: '0',
                                }),
                                [p, t, e],
                            ),
                            B = (0, s.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${p ? d : l}%` }),
                                [l, p, d],
                            );
                        return h
                            ? null
                            : n().createElement(
                                  'div',
                                  { className: u.Z.base, style: B },
                                  n().createElement(
                                      'div',
                                      { style: f ? A : w, className: u.Z.delta },
                                      n().createElement(o.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                var r = a(7363),
                    s = a.n(r),
                    n = a(1848),
                    o = a(2434),
                    i = a(6823);
                const u = (0, r.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: u,
                        disabled: l,
                        isComplete: c,
                        animationSettings: d,
                        onEndAnimation: _,
                        onChangeAnimationState: m,
                    }) => {
                        const p = e < a,
                            E = (0, r.useState)(!1),
                            g = E[0],
                            b = E[1],
                            v = (0, r.useCallback)(
                                (e) => {
                                    (e === i.S.Shrink && b(!0), m && m(e));
                                },
                                [m],
                            ),
                            h = (0, r.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            f = (0, r.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(n.t, {
                                size: t,
                                lineRef: u,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: p && 0 === e,
                                baseStyles: g ? f : h,
                            }),
                            a >= 0 &&
                                s().createElement(o.O, {
                                    transitionDuration: d.delta.duration,
                                    transitionDelay: d.delta.delay,
                                    onChangeAnimationState: v,
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
            828: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => i });
                var r = a(7363),
                    s = a.n(r),
                    n = a(1848),
                    o = a(5913);
                const i = (0, r.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: i,
                        disabled: u,
                        isComplete: l,
                        animationSettings: c,
                        onChangeAnimationState: d,
                        onEndAnimation: _,
                    }) => {
                        const m = (0, r.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(n.t, { size: t, lineRef: i, disabled: u, isComplete: l, baseStyles: m }),
                            a >= 0 &&
                                s().createElement(o.x, {
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
            6736: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => c });
                var r = a(7363),
                    s = a.n(r),
                    n = a(7736),
                    o = a(538),
                    i = a(828);
                const u = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = (0, r.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, u);
                    const d = (0, r.useState)(!1),
                        _ = d[0],
                        m = d[1],
                        p = (0, r.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== _ && m(e), e && t && t(), a && a());
                        }, [_, t, a, c.to]);
                    switch (c.animationSettings.type) {
                        case n.r.Simple:
                            return s().createElement(i.D, l({}, c, { onEndAnimation: p, isComplete: _ }));
                        case n.r.Growing:
                            return s().createElement(o.F, l({}, c, { onEndAnimation: p, isComplete: _ }));
                        default:
                            return null;
                    }
                });
            },
            6823: (e, t, a) => {
                'use strict';
                let r, s;
                (a.d(t, { S: () => r, V: () => s }),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(s || (s = {})));
            },
            2386: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                var r = a(7363),
                    s = a.n(r),
                    n = a(6736);
                const o = ['onEndAnimation'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const u = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, o);
                    const u = (0, r.useRef)({}),
                        l = (0, r.useCallback)(() => {
                            ((u.current.from = void 0), t && t());
                        }, [t]),
                        c = 'number' == typeof u.current.from ? u.current.from : a.from;
                    return (
                        (u.current.from = c),
                        s().createElement(
                            n.H,
                            i({}, a, {
                                onEndAnimation: l,
                                key: `${c}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                                from: c,
                            }),
                        )
                    );
                });
            },
            5680: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => o });
                var r = a(7363),
                    s = a.n(r),
                    n = a(1848);
                const o = ({ size: e, value: t, lineRef: a, disabled: o, onComplete: i }) => {
                    const u = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, r.useEffect)(() => {
                            l && i && i();
                        }, [l, i]),
                        s().createElement(n.t, { size: e, disabled: o, baseStyles: u, isComplete: l, lineRef: a })
                    );
                };
            },
            156: (e, t, a) => {
                'use strict';
                a.d(t, { Gh: () => s, VQ: () => r, fV: () => n });
                const r = (e) => {
                        var t, a, r, s, n, o, i, u, l, c, d, _, m, p, E, g, b, v, h, f;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (a = e.bg) ? void 0 : a.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (r = null == (s = e.bg) ? void 0 : s.heightSmall) ? r : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (n = e.line.filter) ? n : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                            '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                            '--progress-pattern-gradient':
                                null != (u = e.pattern.gradient)
                                    ? u
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
                                null != (m = null == (p = e.glowSettings) ? void 0 : p.height) ? m : '100rem',
                            '--progress-glow-small-width':
                                null != (E = null == (g = e.glowSettings) ? void 0 : g.smallWidth) ? E : '44rem',
                            '--progress-glow-small-height':
                                null != (b = null == (v = e.glowSettings) ? void 0 : v.smallHeight) ? b : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (h = null == (f = e.glowSettings) ? void 0 : f.mixBlendMode) ? h : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    s = {
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
                    };
            },
            7736: (e, t, a) => {
                'use strict';
                let r, s;
                (a.d(t, { $: () => r, r: () => s }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(s || (s = {})));
            },
            1635: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => o });
                var r = a(7515),
                    s = a(7363);
                const n = (e, t, a) => {
                    if ('number' == typeof a) {
                        return ((0, r.u)(0, t, a) / t) * 100;
                    }
                    return e;
                };
                function o(e, t, a) {
                    return (0, s.useMemo)(() => {
                        const s = ((0, r.u)(0, t, e) / t) * 100;
                        return { value: s, deltaFrom: n(s, t, a) };
                    }, [a, t, e]);
                }
            },
            5739: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => d });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(3415),
                    u = a(2862),
                    l = a(729),
                    c = a(1609);
                const d = ({
                    name: e,
                    image: t,
                    isPeriodic: a = !1,
                    size: r = u.h2.Big,
                    special: n,
                    value: d,
                    valueType: _,
                    title: m,
                    style: p,
                    className: E,
                    classNames: g,
                    tooltipArgs: b,
                    periodicIconTooltipArgs: v,
                }) => {
                    const h = (0, l.c$)(r, n),
                        f = (0, l.i2)(n),
                        C = (0, l.m9)(d, _);
                    return o().createElement(
                        'div',
                        {
                            className: s()(c.Z.base, c.Z[`base__${r}`], u.oy.includes(e) && c.Z.base__normalize, E),
                            style: p,
                        },
                        o().createElement(
                            i.l,
                            { tooltipArgs: b, className: c.Z.tooltipWrapper },
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    'div',
                                    { className: s()(c.Z.image, null == g ? void 0 : g.image) },
                                    h &&
                                        o().createElement('div', {
                                            className: s()(c.Z.highlight, null == g ? void 0 : g.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${h}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        o().createElement('div', {
                                            className: s()(c.Z.icon, null == g ? void 0 : g.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    f &&
                                        o().createElement('div', {
                                            className: s()(c.Z.overlay, null == g ? void 0 : g.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${f}_overlay)`,
                                            },
                                        }),
                                ),
                                C &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                _ === u.$h.MULTI && c.Z.info__multi,
                                                null == g ? void 0 : g.info,
                                            ),
                                        },
                                        C,
                                    ),
                                m && o().createElement('div', { className: c.Z.title }, m),
                            ),
                        ),
                        a &&
                            o().createElement(
                                i.l,
                                { tooltipArgs: v },
                                o().createElement('div', {
                                    className: s()(c.Z.timer, null == g ? void 0 : g.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, t, a) => {
                'use strict';
                let r, s, n, o, i, u, l, c;
                (a.d(t, { $h: () => o, A2: () => u, E4: () => r, h2: () => n, kK: () => i, oy: () => d, sh: () => l }),
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
                    })(r || (r = {})),
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
                    })(s || (s = {})),
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
                    })(i || (i = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(u || (u = {})),
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
                const d = [r.Attachment];
            },
            729: (e, t, a) => {
                'use strict';
                a.d(t, { c$: () => b, i2: () => v, m9: () => h, p3: () => d, pI: () => E, ry: () => p });
                var r = a(2372),
                    s = a(7363),
                    n = a.n(s),
                    o = a(2862);
                const i = [
                        o.E4.Items,
                        o.E4.Equipment,
                        o.E4.Xp,
                        o.E4.XpFactor,
                        o.E4.Blueprints,
                        o.E4.BlueprintsAny,
                        o.E4.Goodies,
                        o.E4.Berths,
                        o.E4.Slots,
                        o.E4.Tokens,
                        o.E4.CrewSkins,
                        o.E4.CrewBooks,
                        o.E4.Customizations,
                        o.E4.CreditsFactor,
                        o.E4.TankmenXp,
                        o.E4.TankmenXpFactor,
                        o.E4.FreeXpFactor,
                        o.E4.BattleToken,
                        o.E4.LootBox,
                        o.E4.PremiumUniversal,
                        o.E4.NaturalCover,
                        o.E4.BpCoin,
                        o.E4.BattlePassSelectToken,
                        o.E4.BattlaPassFinalAchievement,
                        o.E4.BattleBadge,
                        o.E4.BattlePassTicket,
                        o.E4.BonusX5,
                        o.E4.CrewBonusX3,
                        o.E4.EpicSelectToken,
                        o.E4.Comp7TokenWeeklyReward,
                        o.E4.DeluxeGift,
                        o.E4.ModernizedDevicesT1Gift,
                        o.E4.ModernizedDevicesT2Gift,
                        o.E4.ModernizedDevicesT3Gift,
                        o.E4.BattleBoosterGift,
                        o.E4.OptionalDevice,
                        o.E4.Attachment,
                    ],
                    u = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    l = [o.E4.BattlePassPoints, o.E4.EquipCoin],
                    c = [o.E4.PremiumPlus, o.E4.Premium],
                    d = (e) =>
                        i.includes(e)
                            ? o.$h.MULTI
                            : u.includes(e)
                              ? o.$h.CURRENCY
                              : l.includes(e)
                                ? o.$h.NUMBER
                                : c.includes(e)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    m = ['engraving', 'background'],
                    p = (e, t = o.h2.Small) => {
                        const a = e.name,
                            r = e.type,
                            s = e.value,
                            n = e.icon,
                            i = e.item,
                            u = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case o.h2.S600x450:
                                        return 'c_600x450';
                                    case o.h2.S400x300:
                                        return 'c_400x300';
                                    case o.h2.S296x222:
                                        return 'c_296x222';
                                    case o.h2.S232x174:
                                        return 'c_232x174';
                                    case o.h2.Big:
                                        return 'c_80x80';
                                    case o.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${s}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${s}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${n}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${n}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const r = _[e];
                                    if (r) {
                                        const s = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            n = s.$dyn(a);
                                        return n ? `${n}` : `${s.$dyn(m[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(u, t, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${n}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${l}.${n}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${n}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    E = (e, t, a) => {
                        const r = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            r,
                            a,
                        );
                    },
                    g = [o.h2.Small, o.h2.Big],
                    b = (e, t) => {
                        if (void 0 === t || !g.includes(e)) return null;
                        switch (t) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    v = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                                return o.sh.BATTLE_BOOSTER;
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.sh.BATTLE_BOOSTER_REPLACE;
                            case o.kK.BUILT_IN_EQUIPMENT:
                                return o.sh.BUILT_IN_EQUIPMENT;
                            case o.kK.EQUIPMENT_PLUS:
                                return o.sh.EQUIPMENT_PLUS;
                            case o.kK.EQUIPMENT_TROPHY_BASIC:
                                return o.sh.EQUIPMENT_TROPHY_BASIC;
                            case o.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return o.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_4;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_5:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_5;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_6:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_6;
                            case o.kK.ATTACHMENT_RARE:
                                return o.sh.ATTACHMENT_RARE;
                            case o.kK.ATTACHMENT_EPIC:
                                return o.sh.ATTACHMENT_EPIC;
                            case o.kK.ATTACHMENT_LEGENDARY:
                                return o.sh.ATTACHMENT_LEGENDARY;
                        }
                    },
                    h = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case o.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return n().createElement(r.A, { format: 'integral', value: Number(e) });
                            case o.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            6724: (e, t, a) => {
                'use strict';
                a.d(t, { nS: () => r });
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
                function r() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
            },
            2773: (e, t, a) => {
                'use strict';
                a.d(t, { $Q: () => f });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7515),
                    o = a(1856),
                    i = a(3138),
                    u = a(3815),
                    l = a(560),
                    c = a(7727),
                    d = a(7363),
                    _ = a.n(d),
                    m = a(6358),
                    p = a(372);
                const E = 'disable',
                    g = { pending: !1, offset: 0 },
                    b = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    v = () => {},
                    h = (e, t) => Math.max(20, e.offsetWidth * t),
                    f = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = b, onDrag: r = v }) => {
                        const f = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            w = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            D = e.stepTimeout || 100,
                            y = (0, d.useState)(g),
                            F = y[0],
                            P = y[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    (P(e),
                                        B.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: B.current }));
                                },
                                [r],
                            ),
                            N = () => {
                                const t = w.current,
                                    a = B.current,
                                    r = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(r && t && a && s)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / s),
                                    u = (0, n.u)(0, 1, o / (s - r)),
                                    l = (t.offsetWidth - h(t, i)) * u;
                                ((a.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && A.current && w.current && B.current) {
                                            if (0 === e)
                                                return (C.current.classList.add(E), void A.current.classList.remove(E));
                                            if (
                                                ((t = w.current),
                                                (a = B.current),
                                                e - (t.offsetWidth - a.offsetWidth) >= -0.5)
                                            )
                                                return (C.current.classList.remove(E), void A.current.classList.add(E));
                                            var t, a;
                                            (C.current.classList.remove(E), A.current.classList.remove(E));
                                        }
                                    })(l));
                            },
                            k = (0, u.z)(() => {
                                ((() => {
                                    const t = B.current,
                                        a = w.current,
                                        r = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && r && a)) return;
                                    const n = Math.min(1, r / s);
                                    ((t.style.width = `${h(a, n)}px`),
                                        (t.style.display = 'flex'),
                                        f.current &&
                                            (1 !== n
                                                ? f.current.classList.add(p.Z.base__active)
                                                : f.current.classList.remove(p.Z.base__active)));
                                })(),
                                    N());
                            });
                        ((0, d.useEffect)(() => (0, o.v)(k)),
                            (0, d.useEffect)(
                                () =>
                                    (0, o.v)(() => {
                                        const t = () => {
                                            N();
                                        };
                                        let a = v;
                                        const r = () => {
                                            (a(), (a = (0, o.v)(k)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', k),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (a(),
                                                    e.events.off('recalculateContent', k),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!F.pending) return;
                                const t = i.O.client.events.mouse.move(([t, a]) => {
                                        var s;
                                        const n = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!n || !o) return;
                                        const i = w.current,
                                            u = B.current;
                                        if (!i || !u) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - F.offset - i.getBoundingClientRect().x,
                                            c = (l / i.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: c }));
                                    }),
                                    a = i.O.client.events.mouse.up(() => {
                                        (t(), S(g));
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, F.offset, F.pending, r, S]));
                        const R = (0, l.B)((t) => e.applyStepTo(t), D, [e]),
                            L = R[0],
                            x = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', x, !0),
                                () => document.removeEventListener('mouseup', x, !0)
                            ),
                            [x],
                        );
                        const I = (e) => {
                            e.target.classList.contains(E) || (0, c.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: s()(p.Z.base, t.base), ref: f, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: s()(p.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Next));
                                },
                                onMouseUp: x,
                                ref: C,
                                onMouseEnter: I,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: s()(p.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = B.current;
                                        if (r && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === r))
                                                S({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = B.current,
                                                        s = e.contentRef.current;
                                                    if (!r || !s) return;
                                                    const n = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + n * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: w,
                                    onMouseEnter: I,
                                },
                                _().createElement('div', { ref: B, className: s()(p.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: s()(p.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: s()(p.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(m.Nm.Prev));
                                },
                                onMouseUp: x,
                                ref: A,
                                onMouseEnter: I,
                            }),
                        );
                    });
            },
            2840: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(2773),
                    u = a(7950),
                    l = a(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: r,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: _,
                    getStepByRailClick: m,
                    onDrag: p,
                }) => {
                    const E = (0, n.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: s()(l.Z.base, e.base) });
                        }, [r]),
                        g = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return o().createElement(
                        'div',
                        { className: s()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: s()(l.Z.defaultScrollArea, c) },
                            o().createElement(u.Area, { className: _, api: g, classNames: d }, e),
                        ),
                        o().createElement(i.$Q, { getStepByRailClick: m, api: t, onDrag: p, classNames: E }),
                    );
                };
            },
            7950: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        Area: () => _,
                        Bar: () => u.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    }));
                var r = a(6483),
                    s = a.n(r),
                    n = a(1856),
                    o = a(7363),
                    i = a.n(o),
                    u = a(2773),
                    l = a(2840),
                    c = a(4682),
                    d = a(6358);
                const _ = ({ api: e, className: t, classNames: a, children: r }) => (
                    (0, o.useEffect)(() => (0, n.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: s()(c.Z.base, t) },
                        i().createElement(
                            'div',
                            {
                                className: s()(c.Z.wrapper, null == a ? void 0 : a.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: s()(c.Z.content, null == a ? void 0 : a.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
                ((_.Bar = u.$Q), (_.Default = l.K));
            },
            6358: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => s.Nm, T5: () => o, he: () => s.he });
                var r = a(3138),
                    s = a(7308);
                const n = {
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
                        getDirection: (e) => (e.deltaY > 1 ? s.Nm.Next : s.Nm.Prev),
                        forceTriggerMouseMove: r.O.view.forceTriggerMouseMove,
                    },
                    o = (0, s.EO)(n);
            },
            6225: (e, t, a) => {
                'use strict';
                a.d(t, { $Q: () => C });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7515),
                    o = a(1856),
                    i = a(3138),
                    u = a(3815),
                    l = a(560),
                    c = a(7727),
                    d = a(7363),
                    _ = a.n(d),
                    m = a(7701),
                    p = a(9168);
                const E = 'disable',
                    g = () => {},
                    b = { pending: !1, offset: 0 },
                    v = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    f = (e, t) => Math.max(20, e.offsetHeight * t),
                    C = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = v, onDrag: r = g }) => {
                        const C = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            w = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            y = e.stepTimeout || 100,
                            F = (0, d.useState)(b),
                            P = F[0],
                            S = F[1],
                            N = (0, d.useCallback)(
                                (e) => {
                                    (S(e),
                                        D.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current }));
                                },
                                [r],
                            ),
                            k = (0, u.z)(() => {
                                const t = D.current,
                                    a = B.current,
                                    r = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(r && s && t && a)) return;
                                const n = Math.min(1, r / s);
                                return (
                                    (t.style.height = `${f(a, n)}px`),
                                    (t.style.display = 'flex'),
                                    C.current &&
                                        (1 !== n
                                            ? C.current.classList.add(p.Z.base__active)
                                            : C.current.classList.remove(p.Z.base__active)),
                                    n
                                );
                            }),
                            R = (0, u.z)(() => {
                                const t = B.current,
                                    a = D.current,
                                    r = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(r && t && a && s)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / s),
                                    u = (0, n.u)(0, 1, o / (s - r)),
                                    l = (t.offsetHeight - f(t, i)) * u;
                                ((a.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (A.current && w.current && B.current && D.current) {
                                            if (0 === Math.round(e))
                                                return (A.current.classList.add(E), void w.current.classList.remove(E));
                                            if (
                                                ((t = B.current),
                                                (a = D.current),
                                                e - (t.offsetHeight - a.offsetHeight) >= -0.5)
                                            )
                                                return (A.current.classList.remove(E), void w.current.classList.add(E));
                                            var t, a;
                                            (A.current.classList.remove(E), w.current.classList.remove(E));
                                        }
                                    })(l));
                            }),
                            L = (0, u.z)(() => {
                                h(e, () => {
                                    (k(), R());
                                });
                            });
                        ((0, d.useEffect)(() => (0, o.v)(L)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    h(e, () => {
                                        R();
                                    });
                                };
                                let a = g;
                                const r = () => {
                                    (a(), (a = (0, o.v)(L)));
                                };
                                return (
                                    e.events.on('recalculateContent', L),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', L),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!P.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        N(b);
                                    }),
                                    a = i.O.client.events.mouse.move(([t]) => {
                                        h(e, (a) => {
                                            const s = B.current,
                                                n = D.current,
                                                o = e.getContainerSize();
                                            if (!s || !n || !o) return;
                                            const i = t.screenY - P.offset - s.getBoundingClientRect().y,
                                                u = (i / s.offsetHeight) * o;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: n, thumbOffset: i, contentOffset: u }));
                                        });
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, P.offset, P.pending, r, N]));
                        const x = (0, l.B)((t) => e.applyStepTo(t), y, [e]),
                            I = x[0],
                            T = x[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', T, !0),
                                () => document.removeEventListener('mouseup', T, !0)
                            ),
                            [T],
                        );
                        const O = (e) => {
                            e.target.classList.contains(E) || (0, c.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: s()(p.Z.base, t.base), ref: C, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: s()(p.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), I(m.Nm.Next));
                                },
                                ref: A,
                                onMouseEnter: O,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: s()(p.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = D.current;
                                        if (r && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === r))
                                                N({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    D.current &&
                                                        h(e, (r) => {
                                                            if (!r) return;
                                                            const s = a(e),
                                                                n = e.clampPosition(r, r.scrollTop + s * t);
                                                            e.applyScroll(n);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: B,
                                    onMouseEnter: O,
                                },
                                _().createElement('div', { ref: D, className: s()(p.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: s()(p.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: s()(p.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), I(m.Nm.Prev));
                                },
                                onMouseUp: T,
                                ref: w,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            1158: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(6225),
                    u = a(9605),
                    l = a(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: r,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: _,
                    getStepByRailClick: m,
                    onDrag: p,
                }) => {
                    const E = (0, n.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: s()(l.Z.base, e.base) });
                        }, [r]),
                        g = (0, n.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return o().createElement(
                        'div',
                        { className: s()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: s()(l.Z.area, c) },
                            o().createElement(u.Area, { className: d, classNames: _, api: g }, e),
                        ),
                        o().createElement(i.$Q, { getStepByRailClick: m, api: t, onDrag: p, classNames: E }),
                    );
                };
            },
            9605: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, { Area: () => _, Bar: () => u.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var r = a(6483),
                    s = a.n(r),
                    n = a(1856),
                    o = a(7363),
                    i = a.n(o),
                    u = a(6225),
                    l = a(1158),
                    c = a(7701),
                    d = a(5636);
                const _ = ({ className: e, classNames: t, children: a, api: r }) => (
                    (0, o.useEffect)(() => (0, n.v)(r.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: s()(d.Z.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: s()(d.Z.content, null == t ? void 0 : t.content), ref: r.contentRef },
                            a,
                        ),
                    )
                );
                _.Default = l.K;
            },
            7701: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => r.Nm, c4: () => n });
                var r = a(7308);
                const s = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                    },
                    n = (0, r.EO)(s);
            },
            7308: (e, t, a) => {
                'use strict';
                a.d(t, { EO: () => m, Nm: () => d, he: () => _ });
                var r = a(7515),
                    s = a(1856),
                    n = a(4532),
                    o = a(9653),
                    i = a(3815),
                    u = a(4489),
                    l = a(7363),
                    c = a(7030);
                let d;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(d || (d = {}));
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
                        forceTriggerMouseMove: p,
                    }) => {
                        const E = (e, a) => {
                            const s = t(e),
                                n = s[0],
                                o = s[1];
                            return o <= n ? 0 : (0, r.u)(n, o, a);
                        };
                        return (r = {}) => {
                            const g = r.settings,
                                b = void 0 === g ? _ : g,
                                v = (0, l.useRef)(null),
                                h = (0, l.useRef)(null),
                                f = (0, l.useRef)(!1),
                                C = (0, o.q)(),
                                A = (0, u.f)(
                                    () => {
                                        p && p();
                                    },
                                    [],
                                    150,
                                ),
                                w = (0, c.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = v.current;
                                        t && (a(t, e), C.trigger('change', e), p && f.current && A());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                B = w[0],
                                D = w[1],
                                y = (0, l.useCallback)(
                                    (e, t, a) => {
                                        var r;
                                        const s = B.scrollPosition.get(),
                                            n = (null != (r = B.scrollPosition.goal) ? r : 0) - s;
                                        return E(e, t * a + n + s);
                                    },
                                    [B.scrollPosition],
                                ),
                                F = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const r = v.current;
                                        r &&
                                            D.start({
                                                scrollPosition: E(r, e),
                                                immediate: t,
                                                reset: a,
                                                config: b.animationConfig,
                                                from: { scrollPosition: E(r, B.scrollPosition.get()) },
                                            });
                                    },
                                    [D, b.animationConfig, B.scrollPosition],
                                ),
                                P = (0, l.useCallback)(
                                    (e) => {
                                        const t = v.current,
                                            a = h.current;
                                        if (!t || !a) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return m(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(a, b.step),
                                            s = y(t, e, r);
                                        F(s);
                                    },
                                    [F, y, b.step],
                                ),
                                S = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && P(d(e)),
                                            v.current && C.trigger('mouseWheel', e, B.scrollPosition, t(v.current)));
                                    },
                                    [B.scrollPosition, P, C],
                                ),
                                N = (0, n.M)(
                                    () =>
                                        (0, s.v)(() => {
                                            const e = v.current;
                                            e &&
                                                (F(E(e, B.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [F, B.scrollPosition.goal],
                                ),
                                k = (0, i.z)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const t = E(e, B.scrollPosition.goal);
                                    (t !== B.scrollPosition.goal && F(t, { immediate: !0 }),
                                        C.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', N),
                                    () => {
                                        window.removeEventListener('resize', N);
                                    }
                                ),
                                [N],
                            ),
                                (0, l.useEffect)(() => {
                                    const e = v.current;
                                    if (!e || !p) return;
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
                                }, [v]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (h.current ? m(h.current) : void 0),
                                    getContainerSize: () => (v.current ? e(v.current) : void 0),
                                    getBounds: () =>
                                        v.current
                                            ? t(v.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: b.step.clampedArrowStepTimeout,
                                    clampPosition: E,
                                    handleMouseWheel: S,
                                    applyScroll: F,
                                    applyStepTo: P,
                                    contentRef: v,
                                    wrapperRef: h,
                                    scrollPosition: D,
                                    animationScroll: B,
                                    recalculateContent: k,
                                    events: { on: C.on, off: C.off },
                                }),
                                [B.scrollPosition, F, P, C.off, C.on, k, S, D, b.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => s });
                var r = a(7950);
                const s = { Vertical: a(9605), Horizontal: r };
            },
            8089: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => d });
                var r = a(6483),
                    s = a.n(r),
                    n = a(3138),
                    o = a(7363),
                    i = a.n(o),
                    u = a(7476);
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.caption,
                        a = e.onClick,
                        r = e.goto,
                        d = e.classNames,
                        _ = e.onMouseEnter,
                        m = e.onMouseLeave,
                        p = e.onMouseDown,
                        E = e.onMouseUp,
                        g = e.side,
                        b = void 0 === g ? 'left' : g,
                        v = e.type,
                        h = void 0 === v ? 'back' : v,
                        f = e.soundHover,
                        C = void 0 === f ? 'highlight' : f,
                        A = e.soundClick,
                        w = void 0 === A ? 'play' : A,
                        B = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, l);
                    const D = (0, o.useCallback)(
                            (e) => {
                                (null == _ || _(e), n.O.sound.play.sound(C));
                            },
                            [_, C],
                        ),
                        y = (0, o.useCallback)(
                            (e) => {
                                null == m || m(e);
                            },
                            [m],
                        ),
                        F = (0, o.useCallback)(
                            (e) => {
                                (null == p || p(e), n.O.sound.play.sound(w));
                            },
                            [p, w],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return i().createElement(
                        'div',
                        c(
                            {
                                className: s()(
                                    u.Z.base,
                                    u.Z[`base__${h}`],
                                    u.Z[`base__${b}`],
                                    null == d ? void 0 : d.base,
                                ),
                                onMouseEnter: D,
                                onMouseLeave: y,
                                onMouseDown: F,
                                onMouseUp: P,
                                onClick: a,
                            },
                            B,
                        ),
                        'info' !== h && i().createElement('div', { className: u.Z.shine }),
                        i().createElement(
                            'div',
                            {
                                className: s()(
                                    u.Z.icon,
                                    u.Z[`icon__${h}`],
                                    u.Z[`icon__${b}`],
                                    null == d ? void 0 : d.icon,
                                ),
                            },
                            i().createElement('div', { className: s()(u.Z.glow, null == d ? void 0 : d.glow) }),
                        ),
                        i().createElement(
                            'div',
                            { className: s()(u.Z.caption, u.Z[`caption__${h}`], null == d ? void 0 : d.caption) },
                            t,
                        ),
                        r && i().createElement('div', { className: s()(u.Z.goto, null == d ? void 0 : d.goto) }, r),
                    );
                };
            },
            7078: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => u });
                var r = a(7363),
                    s = a.n(r),
                    n = a(2056);
                const o = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const u = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, o);
                    return s().createElement(
                        n.u,
                        i(
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
            3415: (e, t, a) => {
                'use strict';
                a.d(t, { l: () => l });
                var r = a(7363),
                    s = a.n(r),
                    n = a(7078),
                    o = a(6373),
                    i = a(2056);
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const r = s().createElement('div', { className: a }, e);
                    if (t.header || t.body) return s().createElement(o.i, t, r);
                    const l = t.contentId;
                    return l ? s().createElement(i.u, u({}, t, { contentId: l }), r) : s().createElement(n.t, t, r);
                };
            },
            6373: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var r = a(2056),
                    s = a(7363),
                    n = a.n(s);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const u = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            a = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    s = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                                return s;
                            })(e, o);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, _, { body: a, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, a, l, c, _]);
                        return n().createElement(
                            r.u,
                            i(
                                {
                                    contentId:
                                        ((E = null == _ ? void 0 : _.hasHtmlContent),
                                        E ? u.SimpleTooltipHtmlContent('resId') : u.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: p,
                                },
                                m,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2056: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var r = a(7902),
                    s = a(9916),
                    n = a(7363);
                const o = [
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
                const u = (e, t, a = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                a,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            s = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            g = void 0 !== E && E,
                            b = e.decoratorId,
                            v = void 0 === b ? 0 : b,
                            h = e.isEnabled,
                            f = void 0 === h || h,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            w = e.onShow,
                            B = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    s = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                                return s;
                            })(e, o);
                        const y = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, n.useMemo)(() => A || (0, r.F)().resId, [A]),
                            P = (0, n.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (u(a, v, { isMouseEvent: !0, on: !0, arguments: i(s) }, F),
                                    w && w(),
                                    (y.current.isVisible = !0));
                            }, [a, v, s, F, w]),
                            S = (0, n.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        u(a, v, { on: !1 }, F),
                                        y.current.isVisible && B && B(),
                                        (y.current.isVisible = !1));
                                }
                            }, [a, v, F, B]),
                            N = (0, n.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, n.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return f
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(y.current.timeoutId),
                                                      (y.current.timeoutId = window.setTimeout(P, p ? 100 : 400)),
                                                      l && l(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === g && S(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === g && S(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var k;
                    };
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
            7515: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => r });
                const r = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            1856: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => r });
                const r = (e) => {
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
            122: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => r });
                const r = (e, t) => {
                    let a;
                    const r = setTimeout(() => {
                        a = e();
                    }, t);
                    return () => {
                        ('function' == typeof a && a(), clearTimeout(r));
                    };
                };
            },
            8246: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => i });
                var r = a(3138);
                function s(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return n(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return n(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: t = 0, getRoot: a = o, context: n = 'model' } = {}) {
                    const i = new Map();
                    function u(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, a) => {
                            a.forEach((t) => {
                                const a = i.get(t);
                                void 0 !== a && a(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const r = a(t),
                            s = n.split('.').reduce((e, t) => e[t], r);
                        return 'string' != typeof e || 0 === e.length
                            ? s
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, s);
                    };
                    return {
                        subscribe: (a, s) => {
                            const o = 'string' == typeof s ? `${n}.${s}` : n,
                                u = r.O.view.addModelObserver(o, t, !0);
                            return (i.set(u, a), e && a(l(s)), u);
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
                            for (var e, a = s(i.keys()); !(e = a()).done; ) {
                                u(e.value, t);
                            }
                        },
                        unsubscribe: u,
                    };
                }
            },
            3215: (e, t, a) => {
                'use strict';
                a.d(t, { q3: () => u });
                var r = a(4598),
                    s = a(9174),
                    n = a(7363),
                    o = a.n(n),
                    i = a(8246);
                const u = () => (e, t) => {
                    const a = (0, n.createContext)({});
                    return [
                        function ({ mode: u = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, n.useRef)([]),
                                m = (a, n, o) => {
                                    var u;
                                    const l = i.U(n),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (u = null == o ? void 0 : o.getter) ? u : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === a ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        p = e({
                                            mode: a,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = d(e),
                                                        n = s.LO.box(t, { equals: r.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const n = null != t ? t : d(e),
                                                        o = s.LO.box(n, { equals: r.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const n = null != t ? t : d(e),
                                                        o = s.LO.box(n, { equals: r.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const r = d(t);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, t) => ((e[t] = s.LO.box(r[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, s.aD)((t) => {
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
                                                            o = Object.entries(n),
                                                            i = o.reduce(
                                                                (e, [t, a]) => ((e[a] = s.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, s.aD)((e) => {
                                                                        o.forEach(([t, a]) => {
                                                                            i[a].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        E = { mode: a, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === a && o ? o.controls(E) : t(E),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                p = (0, n.useRef)(!1),
                                E = (0, n.useState)(u),
                                g = E[0],
                                b = E[1],
                                v = (0, n.useState)(() => m(u, l, d)),
                                h = v[0],
                                f = v[1];
                            return (
                                (0, n.useEffect)(() => {
                                    p.current ? f(m(g, l, d)) : (p.current = !0);
                                }, [d, g, l]),
                                (0, n.useEffect)(() => {
                                    b(u);
                                }, [u]),
                                (0, n.useEffect)(
                                    () => () => {
                                        (h.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [h],
                                ),
                                o().createElement(a.Provider, { value: h }, c)
                            );
                        },
                        () => (0, n.useContext)(a),
                    ];
                };
            },
            7044: (e, t, a) => {
                'use strict';
                a.d(t, { UI: () => l, f8: () => c, s_: () => n, wB: () => d, yR: () => o });
                var r = a(3649),
                    s = (a(9916), a(8613));
                const n = 1e3,
                    o = 60,
                    i = 60 * o,
                    u = 24 * i,
                    l = (Date.now(), s.Ew.getRegionalDateTime);
                s.Ew.getFormattedDateTime;
                function c(e = 0) {
                    let t = e;
                    const a = Math.trunc(t / u);
                    t -= a * u;
                    const r = Math.trunc(t / i);
                    t -= r * i;
                    const s = Math.trunc(t / o);
                    return ((t -= s * o), { days: a, hours: r, minutes: s, seconds: t });
                }
                const d = (e, t = !0) =>
                    e.days > 7 && t
                        ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, r.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, { mouse: () => c, off: () => u, on: () => i, onResize: () => n, onScaleUpdated: () => o }));
                var r = a(2472),
                    s = a(1176);
                const n = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, s.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, s.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, s.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const n = `mouse${t}`,
                                        o = l[t]((e) => a([e, 'outside']));
                                    function i(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, i),
                                        r(),
                                        () => {
                                            s &&
                                                (o(),
                                                window.removeEventListener(n, i),
                                                (e.listeners -= 1),
                                                r(),
                                                (s = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && (0, s.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, s.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => n,
                        graphicsQuality: () => i,
                        playSound: () => s.G,
                        setRTPC: () => s.E,
                    }));
                var r = a(527),
                    s = a(2493);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, a) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => r });
            },
            2493: (e, t, a) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function s(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => s, G: () => r });
            },
            2472: (e, t, a) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => r });
            },
            3138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => o });
                var r = a(5959),
                    s = a(7698),
                    n = a(514);
                const o = { view: a(7641), client: r, sound: n.ZP, intl: s.N };
            },
            7698: (e, t, a) => {
                'use strict';
                a.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => i, hY: () => o });
                var r = a(5959);
                const s = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    n = Object.keys(s).reduce((e, t) => ((e[t] = () => (0, r.playSound)(s[t])), e), {}),
                    o = Object.assign({}, n, { sound: r.playSound }),
                    i = { play: o, setRTPC: r.setRTPC };
            },
            3722: (e, t, a) => {
                'use strict';
                function r(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function s(e, t, a) {
                    return `url(${r(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => s, getTextureUrl: () => r }));
            },
            6112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => s });
                var r = a(2472);
                const s = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => u,
                        arabic2roman: () => F,
                        children: () => s,
                        displayStatus: () => n.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => R,
                        events: () => o.U,
                        extraSize: () => N,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => D,
                        getExternalPaddingsRem: () => P,
                        getFontNames: () => y,
                        getScale: () => b,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        initExternalPaddings: () => L,
                        isEventHandled: () => w,
                        isFocused: () => C,
                        pxToRem: () => v,
                        remToPx: () => h,
                        resize: () => p,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => k,
                    }));
                var r = a(9690),
                    s = a(3722),
                    n = a(6112),
                    o = a(6538),
                    i = a(8566);
                function u(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function d(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function A() {
                    return viewEnv.setEventHandled();
                }
                function w() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function D() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    F = r.cg;
                function P() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    N = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function R() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            a = t.top,
                            r = t.right,
                            s = t.bottom,
                            n = t.left;
                        (e.style.setProperty('--external-padding-top', `${a}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${s}rem`),
                            e.style.setProperty('--external-padding-left', `${n}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const r = ['args'];
                const s = 2,
                    n = 16,
                    o = 32,
                    i = 64,
                    u = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        s = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                                    return s;
                                })(t, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, o, {
                                          arguments:
                                              ((s = n),
                                              Object.entries(s).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            u('popover' === e ? s : o);
                        },
                        minimize() {
                            u(i);
                        },
                        move(e) {
                            u(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, a) => {
                'use strict';
                function r() {}
                a.d(t, { ZT: () => r, jv: () => n, yR: () => s });
                function s(e) {
                    return e;
                }
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => r });
                const r = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        r = R.invalid('resId'),
                        s = '';
                    var n;
                    t &&
                        ((s = (null == (n = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : n[0]) || ''),
                        (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== a &&
                            window.subViews[a] &&
                            (r = window.subViews[a].id));
                    return { callerUrl: s, caller: a, stack: t, resId: r };
                };
            },
            2344: (e, t, a) => {
                'use strict';
                a.d(t, { au: () => s });
                var r = a(3469);
                (a(2133), a(2790), a(579), a(5360), a(9056));
                const s = r.Z;
            },
            6536: (e, t, a) => {
                'use strict';
                a(7363);
            },
            4532: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => s });
                var r = a(7363);
                const s = (e, t = []) => {
                    const a = (0, r.useRef)(),
                        s = (0, r.useCallback)((...t) => {
                            (a.current && a.current(), (a.current = e(...t)));
                        }, t);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                a.current && a.current();
                            },
                            [s],
                        ),
                        s
                    );
                };
            },
            3469: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                var r = a(7044),
                    s = a(7363);
                const n = () => {},
                    o = (e = 0, t, a = 0, o = n) => {
                        const i = (0, s.useState)(e),
                            u = i[0],
                            l = i[1];
                        return (
                            (0, s.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const s = Date.now(),
                                        n = t || (e > 2 * r.yR ? r.yR : 1),
                                        i = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - s) / r.s_);
                                            null !== a && t <= a ? (l(a), o && o(), clearInterval(i)) : l(t);
                                        }, n * r.s_);
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [e, t, a, o]),
                            u
                        );
                    };
            },
            2133: (e, t, a) => {
                'use strict';
                a(7363);
            },
            9653: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => o });
                var r = a(7363);
                function s(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return n(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return n(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const o = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        a = (e, a) => {
                            t(e).set(a, a);
                        },
                        n = (e, a) => {
                            t(e).delete(a);
                        },
                        o = (e, ...a) => {
                            for (var r, n = s(t(e).values()); !(r = n()).done; ) {
                                (0, r.value)(...a);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: a, off: n, trigger: o }), []);
                };
            },
            3815: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => n });
                var r = a(7363);
                const s = [];
                function n(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), s)
                    );
                }
            },
            8526: (e, t, a) => {
                'use strict';
                a.d(t, { gd: () => i });
                var r = a(3138),
                    s = a(5521),
                    n = (a(9916), a(7363));
                const o = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = s.n.NONE, t = o, a = !1, i = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', n, a),
                                () => {
                                    window.removeEventListener('keydown', n, a);
                                }
                            );
                        function n(s) {
                            if (s.keyCode === e) {
                                if (!i && r.O.view.isEventHandled()) return;
                                (r.O.view.setEventHandled(), t(s), a && s.stopPropagation());
                            }
                        }
                    }, [t, e, a, i]);
                }
            },
            5415: (e, t, a) => {
                'use strict';
                a.d(t, { Aq: () => u, GS: () => l, cJ: () => o, fd: () => i });
                var r = a(7363),
                    s = a(7739),
                    n = a(1043);
                let o, i, u;
                (!(function (e) {
                    ((e[(e.ExtraSmall = n.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = n.j.small.width)] = 'Small'),
                        (e[(e.Medium = n.j.medium.width)] = 'Medium'),
                        (e[(e.Large = n.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = n.j.extraLarge.width)] = 'ExtraLarge'));
                })(o || (o = {})),
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
                    })(u || (u = {})));
                const l = () => {
                    const e = (0, r.useContext)(s.YN),
                        t = e.width,
                        a = e.height,
                        n = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
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
                                    return u.ExtraLarge;
                                case e.largeHeight:
                                    return u.Large;
                                case e.mediumHeight:
                                    return u.Medium;
                                case e.smallHeight:
                                    return u.Small;
                                case e.extraSmallHeight:
                                    return u.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), u.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: n, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: a };
                };
            },
            5360: (e, t, a) => {
                'use strict';
                a(6536);
                var r = a(9916);
                a(7363);
                r.Sw.instance;
                let s;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(s || (s = {}));
            },
            9056: (e, t, a) => {
                'use strict';
                var r = a(9916);
                a(7363);
                r.Sw.instance;
            },
            2039: (e, t, a) => {
                'use strict';
                a.d(t, { b: () => s });
                var r = a(7363);
                const s = (e) => {
                    (0, r.useEffect)(e, []);
                };
            },
            2790: (e, t, a) => {
                'use strict';
                a(7363);
            },
            560: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => s });
                var r = a(7363);
                function s(e, t, a = []) {
                    const s = (0, r.useRef)(0),
                        n = (0, r.useCallback)(() => window.clearInterval(s.current), a || []);
                    (0, r.useEffect)(() => n, [n]);
                    const o = (null != a ? a : []).concat([t]);
                    return [
                        (0, r.useCallback)((a) => {
                            ((s.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, o),
                        n,
                    ];
                }
            },
            3112: (e, t, a) => {
                'use strict';
                a.d(t, { V: () => n });
                var r = a(7363),
                    s = a(3138);
                const n = () => {
                    const e = (0, r.useState)(s.O.view.getScale()),
                        t = e[0],
                        a = e[1];
                    return (
                        (0, r.useEffect)(() => {
                            const e = () => {
                                a(s.O.view.getScale());
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
            579: (e, t, a) => {
                'use strict';
                (a(3138), a(7363));
            },
            4489: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => n });
                var r = a(5139),
                    s = a(7363);
                function n(e, t, a) {
                    const n = (0, s.useMemo)(() => (0, r.Z)(a, e), t);
                    return ((0, s.useEffect)(() => n.cancel, [n]), n);
                }
            },
            5521: (e, t, a) => {
                'use strict';
                let r, s;
                (a.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(s || (s = {})));
            },
            9480: (e, t, a) => {
                'use strict';
                a.d(t, {
                    DZ: () => p,
                    G: () => l,
                    MH: () => n,
                    U2: () => s,
                    UI: () => i,
                    hX: () => c,
                    kd: () => g,
                    q9: () => m,
                    sE: () => _,
                    tP: () => d,
                    u4: () => v,
                    v: () => E,
                    v_: () => b,
                    yW: () => u,
                });
                var r = a(8968);
                function s(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const n = s;
                function o(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, r) => t(null == e ? void 0 : e.value, a, r));
                }
                function u(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let a = 0; a < e.length; a++) {
                        if (!t(n(e, a), a, e)) return !1;
                    }
                    return !0;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let a = 0; a < e.length; a++) {
                        if (t(n(e, a), a, e)) return !0;
                    }
                    return !1;
                }
                function c(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let s = 0; s < e.length; s++) {
                        var r;
                        const n = null == (r = e[s]) ? void 0 : r.value;
                        t(n, s, e) && a.push(n);
                    }
                    return a;
                }
                function d(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let r = Math.max(t, 0);
                            const s = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (r > s) return { done: !0, value: null };
                                    const t = e[r++];
                                    return t ? { value: o(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function _(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const r = o(e[a]);
                        if (t(r, a, e)) return r;
                    }
                }
                function m(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        if (n(e, a) === t) return !0;
                    }
                    return !1;
                }
                function p(e, t, a) {
                    const r = [];
                    for (let s = 0; s < e.length; s++) {
                        const o = n(e, s);
                        t(o, s, e) && r.push(a(o, s, e));
                    }
                    return r;
                }
                function E(e, t) {
                    return p(e, r.C, t);
                }
                function g(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(n(e, a), a, e)) return a;
                    }
                }
                function b(e, t = ',') {
                    let a = '';
                    for (let r = 0; r < e.length; r++) {
                        r > 0 && (a += t);
                        const s = n(e, r);
                        a += null == s ? '' : String(s);
                    }
                    return a;
                }
                function v(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let r = a;
                    for (let a = 0; a < e.length; a++) {
                        r = t(r, n(e, a), a, e);
                    }
                    return r;
                }
            },
            1641: (e, t, a) => {
                'use strict';
                let r;
                (a.d(t, { t: () => r }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(r || (r = {})));
            },
            8968: (e, t, a) => {
                'use strict';
                function r(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                a.d(t, { C: () => r });
            },
            9690: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => i, cg: () => n });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    s = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function n(e) {
                    let t = '';
                    for (let a = s.length - 1; a >= 0; a--) for (; e >= s[a]; ) ((t += r[a]), (e -= s[a]));
                    return t;
                }
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) => (o ? `${e}` : n(e));
            },
            7727: (e, t, a) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { $: () => s, G: () => r });
                const s = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            3649: (e, t, a) => {
                'use strict';
                a.d(t, { BN: () => i, Uw: () => g, WU: () => n, e: () => u, uF: () => o, v2: () => s, z4: () => l });
                var r = a(1281);
                let s;
                function n(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function o(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function u(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(s || (s = {}));
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
                    _ = (e, t, a = s.left) => e.split(t).reduce(a === s.left ? c : d, []),
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
                    p = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, t = s.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (p.includes(a)) return m(e);
                        if ('ja' === a) {
                            return (0, r.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = s.left) => {
                            let a = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = l(e);
                            return (_(n, /( )/, t).forEach((e) => (a = a.concat(_(e, r, s.left)))), a);
                        })(e, t);
                    },
                    g = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : E(e, t)));
            },
            5139: (e, t, a) => {
                'use strict';
                function r(e, t, a, r) {
                    let s,
                        n = !1,
                        o = 0;
                    function i() {
                        s && clearTimeout(s);
                    }
                    function u(...u) {
                        const l = this,
                            c = Date.now() - o;
                        function d() {
                            ((o = Date.now()), a.apply(l, u));
                        }
                        n ||
                            (r && !s && d(),
                            i(),
                            void 0 === r && c > e
                                ? d()
                                : !0 !== t &&
                                  (s = setTimeout(
                                      r
                                          ? function () {
                                                s = void 0;
                                            }
                                          : d,
                                      void 0 === r ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((r = a), (a = t), (t = void 0)),
                        (u.cancel = function () {
                            (i(), (n = !0));
                        }),
                        u
                    );
                }
                a.d(t, { Z: () => r });
            },
            1358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var r = a(3138);
                class s {
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
                        return (window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, a = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = r.O.view.addModelObserver(e, a, s);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(n) : (this._views[a] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const r = this._callbacks[a];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const n = s;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
            9916: (e, t, a) => {
                'use strict';
                a.d(t, { Sw: () => n.Z, B3: () => u, Z5: () => o.Z5, B0: () => i, ry: () => b, Eu: () => v });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    a();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const a = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== r)),
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
                r.__instance = void 0;
                const s = r;
                var n = a(1358);
                var o = a(8613);
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
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(5521),
                    m = a(3138);
                const p = ['args'];
                function E(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        a = arguments;
                                    return new Promise(function (r, s) {
                                        var n = e.apply(t, a);
                                        function o(e) {
                                            E(n, r, s, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            E(n, r, s, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    h = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        s = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                                    return s;
                                })(t, p);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((r = s),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    f = () => h(i.CLOSE),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var A = a(7572);
                const w = s.instance,
                    B = {
                        DataTracker: n.Z,
                        ViewModel: A.Z,
                        ViewEventType: i,
                        NumberFormatType: u,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, s = R.invalid('resId'), n) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                u = a.getBoundingClientRect(),
                                l = u.x,
                                c = u.y,
                                d = u.width,
                                _ = u.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(p),
                                on: !0,
                                args: n,
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
                            C(e, f);
                        },
                        handleViewEvent: h,
                        onBindingsReady: b,
                        onLayoutReady: v,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const s = Object.prototype.toString.call(t[r]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[r];
                                        a[r] = [];
                                        for (let t = 0; t < s.length; t++) a[r].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[r] = e(t[r]))
                                            : (a[r] = t[r]);
                                }
                            return a;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = B;
            },
            8613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => n, Z5: () => r, cy: () => s });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
                    },
                    n = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            1425: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => Ke });
                var r = a(7363),
                    s = a.n(r);
                var n = a(3403),
                    o = a(3215);
                const i = (0, o.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
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
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            showRewards: e.createCallback(() => ({}), 'showRewards'),
                            buy: e.createCallbackNoArgs('confirmAnyNumber.onBuyClick'),
                        }),
                    ),
                    u = i[0],
                    l = i[1];
                var c = a(5521),
                    d = a(9485),
                    _ = a(8030),
                    m = a(3290),
                    p = a(5831),
                    E = a(9525),
                    g = a(3942),
                    b = a(6444);
                const v = 'BuyLevelsContent_base_63',
                    h = 'BuyLevelsContent_background_be',
                    f = 'BuyLevelsContent_shadow_fb',
                    C = 'BuyLevelsContent_content_f7',
                    A = 'BuyLevelsContent_footer_f1',
                    w = 'BuyLevelsContent_divider_af',
                    B = 'BuyLevelsContent_title_1e',
                    D = 'BuyLevelsContent_buttons_8b';
                var y = a(6483),
                    F = a.n(y),
                    P = a(3457),
                    S = a(9766),
                    N = a(122),
                    k = a(3815),
                    L = a(5415),
                    x = a(4598),
                    I = a(3946);
                const T = (0, o.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    levels: e.primitives({
                                        levelsStart: 'start',
                                        levelsPassed: 'passed',
                                        levelsTotal: 'total',
                                        levelsSelected: 'selected',
                                    }),
                                    root: e.object(),
                                    rewards: e.array('rewards.items'),
                                },
                                a = (0, I.Om)(() => t.rewards.get(), { equals: x.jv }),
                                r = (0, I.Om)(() => t.rewards.get().length);
                            return Object.assign({}, t, { computes: { rewards: a, rewardsLength: r } });
                        },
                        ({ externalModel: e }) => ({
                            changeSelectedLevels: e.createCallback(
                                (e) => (e ? { count: null == e ? void 0 : e.count } : {}),
                                'onChangeSelectedLevels',
                            ),
                        }),
                    ),
                    O = T[0],
                    M = T[1];
                var $ = a(7515),
                    W = a(7727),
                    H = a(1975),
                    z = a(156),
                    G = a(7736);
                let U;
                !(function (e) {
                    ((e.Passed = 'passed'),
                        (e.PossiblySelected = 'possiblySelected'),
                        (e.Selected = 'selected'),
                        (e.Available = 'available'));
                })(U || (U = {}));
                const V = (e, t) => (e / t) * 100 + '%',
                    j = {
                        base: 'LevelProgressBar_base_8b',
                        base__small: 'LevelProgressBar_base__small_c2',
                        glowWrapper: 'LevelProgressBar_glowWrapper_34',
                        glow: 'LevelProgressBar_glow_8f',
                        glow__left: 'LevelProgressBar_glow__left_e4',
                        glow__right: 'LevelProgressBar_glow__right_55',
                    },
                    q = Object.assign({}, H.uu, { freezed: !0, type: G.r.Simple }),
                    Z = (0, r.memo)(
                        ({ size: e = H.$u.Default, value: t, slideValue: a, maximum: r, theme: n = z.Gh }) => {
                            const o = t >= r ? r : t;
                            return s().createElement(
                                'div',
                                { className: F()(j.base, j[`base__${e}`]) },
                                s().createElement(H.ko, {
                                    value: t,
                                    maxValue: r,
                                    deltaFrom: a,
                                    animationSettings: q,
                                    theme: n,
                                }),
                                s().createElement(
                                    'div',
                                    { className: j.glowWrapper, style: { left: V(o, r) } },
                                    s().createElement('div', { className: F()(j.glow, j.glow__left) }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: j.glowWrapper, style: { left: V(a, r) } },
                                    s().createElement('div', { className: F()(j.glow, j.glow__right) }),
                                ),
                            );
                        },
                    ),
                    X = 'LevelSlider_base_d5',
                    Y = 'LevelSlider_base__locked_05',
                    K = 'LevelSlider_slider_e4',
                    Q = 'LevelSlider_slider__down_92',
                    J = {
                        base: 'Points_base_ce',
                        labelSplitter: 'Points_labelSplitter_c3',
                        label: 'Points_label_1c',
                        label__passed: 'Points_label__passed_4a',
                        label__selected: 'Points_label__selected_2c',
                        label__possiblySelected: 'Points_label__possiblySelected_bf',
                        label__available: 'Points_label__available_30',
                    },
                    ee = ({ start: e, total: t, passed: a, selected: r, possiblySelected: n, width: o }) =>
                        s().createElement(
                            'div',
                            { className: J.base },
                            ((e, t) => {
                                const a = [];
                                for (let r = 0; r < e; r++) a.push(t(r));
                                return a;
                            })(t, (i) => {
                                const u = ((e, t, a, r, s) =>
                                        e === t || e === a - 1 || (e + 1) % 5 == 0 || e === r || e === s - 1
                                            ? e + 1
                                            : '')(i, e, t, a, r),
                                    l = ((e, t, a, r) => {
                                        switch (!0) {
                                            case e >= a && e < r:
                                                return U.PossiblySelected;
                                            case e < t:
                                                return U.Passed;
                                            case e >= t && e < a:
                                                return U.Selected;
                                            default:
                                                return U.Available;
                                        }
                                    })(i, a, r, n),
                                    c = o - 1;
                                return s().createElement(
                                    'div',
                                    { className: J.labelSplitter, key: i },
                                    s().createElement(
                                        'div',
                                        {
                                            className: F()(J.label, J[`label__${l}`]),
                                            style: { width: `${i === t - 1 ? c : o}rem` },
                                        },
                                        u,
                                    ),
                                );
                            }),
                        ),
                    te = ({
                        start: e = 0,
                        total: t = 0,
                        passed: a = 0,
                        selected: n = 0,
                        width: o = 22,
                        allowSlide: i = !0,
                        onChangeSelectedLevels: u,
                    }) => {
                        const l = (0, r.useState)(!1),
                            c = l[0],
                            d = l[1],
                            _ = (0, r.useState)(n),
                            m = _[0],
                            p = _[1],
                            E = (0, r.useState)(a + 1),
                            g = E[0],
                            b = E[1],
                            v = (0, r.useRef)(null),
                            h = (0, r.useCallback)(
                                (r) => {
                                    const s = v.current.getBoundingClientRect(),
                                        n = s.width / (t - e),
                                        o = (r - s.left) / (n || 1),
                                        i = e + Math.round(o),
                                        u = a + 1;
                                    return (0, $.u)(u, t, i);
                                },
                                [a, e, t],
                            );
                        ((0, r.useEffect)(() => {
                            (p(n), b(a + 1));
                        }, [n, a]),
                            (0, r.useEffect)(() => {
                                const e = (e) => {
                                        if (i && c) {
                                            const t = h(e.clientX);
                                            (p(t), d(!1), u({ count: t - a }));
                                        }
                                    },
                                    t = (e) => {
                                        if (i)
                                            if (c) {
                                                const t = h(e.clientX);
                                                m !== t && ((0, W.G)('bp_progress_bar_drag'), p(t), b(t));
                                            } else if (e.target === v.current) {
                                                const t = h(e.clientX);
                                                g !== t && b(t);
                                            }
                                    };
                                return (
                                    document.addEventListener('mouseup', e),
                                    document.addEventListener('mousemove', t),
                                    () => {
                                        (document.removeEventListener('mouseup', e),
                                            document.removeEventListener('mousemove', t));
                                    }
                                );
                            }, [i, m, h, c, u, a, g]));
                        const f = (e) => {
                                if (i && 0 === e.button) {
                                    (0, W.G)('bp_progress_bar_take');
                                    const t = h(e.clientX);
                                    (p(t), b(t), d(!0));
                                }
                            },
                            C = t - e,
                            A = 0 === a ? a : a - e,
                            w = m - e;
                        return s().createElement(
                            'div',
                            null,
                            s().createElement(
                                'div',
                                {
                                    className: F()(X, !i && Y),
                                    style: { width: o * C + 'rem' },
                                    ref: v,
                                    onMouseOut: () => {
                                        i && b(m);
                                    },
                                    onMouseDown: f,
                                },
                                s().createElement(ee, {
                                    start: e,
                                    total: t,
                                    passed: a,
                                    selected: m,
                                    possiblySelected: g,
                                    width: o,
                                }),
                                s().createElement(Z, { value: A, maximum: C, allowSlide: i, slideValue: w }),
                            ),
                            i &&
                                s().createElement('div', {
                                    className: F()(K, c && Q),
                                    style: { left: o * w + 1 + 'rem' },
                                    onMouseDown: f,
                                }),
                        );
                    };
                var ae = a(2862),
                    re = a(5739),
                    se = a(9480),
                    ne = a(2893),
                    oe = a(7264);
                const ie = 'RewardsList_base_9f',
                    ue = 'RewardsList_base__disappearing_19',
                    le = 'RewardsList_reward_22',
                    ce = 'RewardsList_base__small_ad',
                    de = (e) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 400 + 100 * e,
                        config: { duration: 300 },
                        onStart: () => {
                            (0, W.G)('bp_reward');
                        },
                    }),
                    _e = (0, n.Pi)(({ rewards: e, isDisappearing: t }) => {
                        const a = (0, L.GS)().mediaSize <= L.cJ.Small;
                        return s().createElement(
                            'div',
                            { className: F()(ie, t && ue, a && ce) },
                            se.DZ(
                                e,
                                (e, t) => t < 10,
                                (e, t) => {
                                    const r = a ? ae.h2.Small : ae.h2.Big;
                                    return s().createElement(
                                        oe.d,
                                        { key: `reward${t}`, animationConfig: de(t), className: le },
                                        s().createElement(re.Q, (0, ne.$n)(e, r)),
                                    );
                                },
                            ),
                        );
                    }),
                    me = 'Content_base_a8',
                    pe = 'Content_buttonWrapper_c2',
                    Ee = 'Content_base__active_92',
                    ge = 'Content_base__hidden_c7',
                    be = 'Content_rewardBtn_36',
                    ve = R.strings.battle_pass.battlePassBuyView.confirmAnyNumber,
                    he = 10,
                    fe = 12,
                    Ce = 20,
                    Ae = 24,
                    we = 50,
                    Be = (0, n.Pi)(() => {
                        const e = M(),
                            t = e.model,
                            a = e.controls,
                            n = t.levels,
                            o = n.start,
                            i = n.passed,
                            u = n.total,
                            l = n.selected,
                            c = (0, r.useState)(!0),
                            d = c[0],
                            _ = c[1],
                            m = (0, r.useState)(0),
                            E = m[0],
                            g = m[1],
                            v = (0, L.GS)(),
                            h = v.mediaSize,
                            f = v.remScreenWidth,
                            C = h <= L.cJ.Small,
                            A = d ? t.computes.rewards() : [],
                            w = t.computes.rewardsLength(),
                            B = t.root.get().chapterID,
                            D = (0, b.tv)();
                        ((0, r.useEffect)(
                            () => (
                                _(!1),
                                (0, N.F)(() => {
                                    _(!0);
                                }, 400)
                            ),
                            [l],
                        ),
                            (0, r.useEffect)(() => {
                                if (d)
                                    return (0, N.F)(() => {
                                        g(w - 10);
                                    }, 0);
                            }, [d, w]));
                        const y = (0, k.z)(() => {
                                D.push(p._.battlePass.buyLevelsRewards, { chapterID: B });
                            }),
                            R = (() => {
                                const e = C ? Ce : Ae;
                                if (u.get() <= we) return e;
                                const t = f - 2 * he,
                                    a = Math.floor(t / u.get()),
                                    r = Math.min(a, e);
                                return (
                                    r < fe &&
                                        console.warn(
                                            `BuyLevelSlider is so big. Current size is ${r * u.get()}, max size is ${t}`,
                                        ),
                                    r
                                );
                            })();
                        return s().createElement(
                            'div',
                            { className: F()(me, !d && ge, E > 0 && Ee) },
                            s().createElement(te, {
                                start: o.get(),
                                total: u.get(),
                                passed: i.get(),
                                selected: l.get(),
                                width: R,
                                onChangeSelectedLevels: a.changeSelectedLevels,
                                allowSlide: !0,
                            }),
                            s().createElement(_e, { rewards: A, isDisappearing: !d }),
                            s().createElement(
                                'div',
                                { className: pe },
                                s().createElement(
                                    P.u5,
                                    { type: P.L$.ghost, size: P.qE.medium, mixClass: be, onClick: y },
                                    E > 0 && s().createElement(S.z, { text: ve.moreRewards(), binding: { count: E } }),
                                ),
                            ),
                        );
                    });
                var De = a(918);
                const ye = 'Footer_base_31',
                    Fe = 'Footer_levelsBlock_f7',
                    Pe = 'Footer_priceBlock_98',
                    Se = 'Footer_levelsLabel_ab',
                    Ne = 'Footer_footerLabel_a8',
                    ke = ({ levelsToBuy: e, price: t }) =>
                        s().createElement(
                            'div',
                            { className: ye },
                            s().createElement(
                                'div',
                                { className: Fe },
                                s().createElement(
                                    'div',
                                    { className: Ne },
                                    R.strings.battle_pass.battlePassBuyView.levelsSelected(),
                                ),
                                s().createElement('div', { className: Se }, e),
                            ),
                            s().createElement(
                                'div',
                                { className: Pe },
                                s().createElement(
                                    'div',
                                    { className: Ne },
                                    R.strings.battle_pass.battlePassBuyView.price(),
                                ),
                                s().createElement(De.F, { type: 'gold', size: 'big', value: t }),
                            ),
                        ),
                    Re = R.strings.battle_pass.battlePassBuyView,
                    Le = (0, n.Pi)(() => {
                        const e = l(),
                            t = e.model,
                            a = e.controls,
                            r = t.main.isWalletAvailable,
                            n = t.levels,
                            o = n.price,
                            i = n.levelsPassed,
                            u = n.levelsSelected,
                            y = n.chapterID,
                            F = u.get() - i.get(),
                            P = { context: 'model.confirmAnyNumber', rootId: R.aliases.battle_pass.BuyLevels('resId') },
                            S = (0, b.tv)();
                        ((0, m.d)(a.buy), _.N.useHandleKeydown(c.n.ESCAPE || c.n.SPACE, () => S.goBack()));
                        const N = {
                            backgroundImage: `url(${(0, d.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, y.get())})`,
                        };
                        return s().createElement(
                            'div',
                            { className: v },
                            s().createElement('div', { style: N, className: h }),
                            s().createElement('div', { className: f }),
                            s().createElement(
                                'div',
                                { className: C },
                                s().createElement(g.D, {
                                    chapter: y.get(),
                                    buyBP: Re.confirmAnyNumber.title(),
                                    subTitle: Re.confirmAnyNumber.descr(),
                                    className: B,
                                }),
                                s().createElement(O, { options: P }, s().createElement(Be, null)),
                                s().createElement(
                                    'div',
                                    { className: A },
                                    s().createElement('div', { className: w }),
                                    s().createElement(ke, { levelsToBuy: F, price: o.get() }),
                                    s().createElement(E._, {
                                        onAccept: a.buy,
                                        onCancel: () => S.push(p._.battlePass.progression, { chapterID: y.get() }),
                                        isWalletAvailable: r.get(),
                                        buttonAcceptText: R.strings.menu.boosterBuyWindow.buyButtonLabel(),
                                        className: D,
                                    }),
                                ),
                            ),
                        );
                    }),
                    xe = (0, o.q3)()(({ observableModel: e }) => {
                        const t = {
                                rewardsInfo: e.primitives(['chapterID', 'packageState', 'toLevel', 'fromLevel']),
                                nowRewards: e.array('nowRewards.items'),
                            },
                            a = (0, I.Om)(() => t.nowRewards.get(), { equals: x.jv });
                        return Object.assign({}, t, { computes: { nowRewards: a } });
                    }, x.ZT),
                    Ie = xe[0],
                    Te = xe[1];
                var Oe = a(4420),
                    Me = a(3862),
                    $e = a(9430),
                    We = a(1307);
                const He = 'Content_base_80',
                    ze = 'Content_mainContent_23',
                    Ge = R.strings.battle_pass.battlePassBuyView.reward,
                    Ue = ({ fromLevel: e, toLevel: t, rewards: a }) => {
                        const r = ((e, t) =>
                                e < t
                                    ? { description: Ge.descriptionNowRewards(), completedSteps: `${e} – ${t}` }
                                    : { description: Ge.descriptionNowRewardsSingle(), completedSteps: `${t}` })(e, t),
                            n = r.description,
                            o = r.completedSteps;
                        return s().createElement(
                            'div',
                            { className: He },
                            s().createElement(
                                We.z,
                                null,
                                s().createElement($e.r, {
                                    title: Ge.titleNowRewards(),
                                    description: n,
                                    iconType: Me.Q.now,
                                    steps: o,
                                    rewards: a,
                                    className: ze,
                                }),
                            ),
                        );
                    },
                    Ve = 'RewardsViewContent_base_ac',
                    je = 'RewardsViewContent_background_ee',
                    qe = 'RewardsViewContent_shadow_dc',
                    Ze = (0, n.Pi)(() => {
                        const e = Te().model,
                            t = e.rewardsInfo,
                            a = t.chapterID,
                            r = t.toLevel,
                            n = t.fromLevel,
                            o = (0, b.tv)();
                        _.N.useHandleKeydown(c.n.ESCAPE, () => o.goBack());
                        const i = {
                            backgroundImage: `url(${(0, d.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, a.get())})`,
                        };
                        return s().createElement(
                            'div',
                            { className: Ve },
                            s().createElement(
                                'div',
                                { className: je },
                                s().createElement(Oe.N, { chapter: a.get(), isCurrent: !0, customBackgroundStyle: i }),
                            ),
                            s().createElement('div', { className: qe }),
                            s().createElement(Ue, {
                                rewards: e.computes.nowRewards(),
                                toLevel: r.get(),
                                fromLevel: n.get(),
                            }),
                        );
                    }),
                    Xe = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyLevels('resId') },
                    Ye = (0, n.Pi)(() =>
                        'rewardsState' === l().model.main.state.get()
                            ? s().createElement(Ie, { options: Xe }, s().createElement(Ze, null))
                            : s().createElement(Le, null),
                    ),
                    Ke = () =>
                        s().createElement(
                            u,
                            { options: { rootId: R.aliases.battle_pass.BuyLevels('resId') } },
                            s().createElement(Ye, null),
                        );
            },
            404: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => Ba });
                var r = a(7363),
                    s = a.n(r);
                const n = 'buyState';
                var o = a(2039),
                    i = a(3403),
                    u = a(9485),
                    l = a(2893),
                    c = a(2189),
                    d = a(2640);
                let _, m, p;
                (!(function (e) {
                    ((e[(e.Active = 0)] = 'Active'),
                        (e[(e.Paused = 1)] = 'Paused'),
                        (e[(e.Completed = 2)] = 'Completed'),
                        (e[(e.NotStarted = 3)] = 'NotStarted'));
                })(_ || (_ = {})),
                    (function (e) {
                        ((e[(e.BattlePass = 0)] = 'BattlePass'),
                            (e[(e.AnyLevels = 1)] = 'AnyLevels'),
                            (e[(e.ShopOffer = 2)] = 'ShopOffer'));
                    })(m || (m = {})),
                    (function (e) {
                        ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'));
                    })(p || (p = {})));
                var E = a(3215),
                    g = a(4598),
                    b = a(9480),
                    v = a(9174),
                    h = a(3946);
                const f = (0, E.q3)()(
                        ({ observableModel: e }) => {
                            const t = e.primitives(
                                    [
                                        'price',
                                        'prevPrice',
                                        'chapterID',
                                        'isActive',
                                        'compoundPriceDefaultID',
                                        'isPurchaseWithLevels',
                                        'remainingLevelsCount',
                                    ],
                                    'confirm',
                                ),
                                a = v.LO.box(''),
                                r = {
                                    main: e.primitives([
                                        'state',
                                        'shopOfferDiscount',
                                        'isShopOfferAvailable',
                                        'isWalletAvailable',
                                        'isSeasonWithAdditionalBackground',
                                    ]),
                                    confirm: t,
                                    rewards: e.array('rewards'),
                                    packages: e.array('packages.items'),
                                    compoundPrice: e.array('confirm.compoundPrice'),
                                    chaptersWithLogoBg: e.array('chaptersWithLogoBg'),
                                    priceID: a,
                                },
                                s = (0, h.Om)(() => r.rewards.get().topPriorityRewards.items, { equals: g.jv }),
                                n = (0, h.Om)(() => r.rewards.get().prevTopPriorityRewards.items, { equals: g.jv }),
                                o = (0, h.Om)(() => r.rewards.get().nowRewards.items, { equals: g.jv }),
                                i = (0, h.Om)(() => r.rewards.get().futureRewards.items, { equals: g.jv }),
                                u = (0, h.Om)(() => r.packages.get(), { equals: g.jv }),
                                l = (0, h.Om)(() => b.U2(r.packages.get(), 0), { equals: g.jv }),
                                c = (0, h.Om)((e) => b.hX(r.packages.get(), (t) => t.chapterID === e)[0]),
                                d = (0, h.Om)((e) => {
                                    const t = c(e).compoundPrice;
                                    return 0 === t.prices.length
                                        ? []
                                        : b.v(t.prices, (e) => {
                                              const t = b.v(e.price, g.yR),
                                                  a = { isMultiPrice: t.length > 1, isEnough: !0 };
                                              return t.reduce(
                                                  (e, { name: t, value: a, isEnough: r }) => (
                                                      (e[t] = { value: a, isEnough: r }),
                                                      (e.isEnough = e.isEnough && r),
                                                      e
                                                  ),
                                                  a,
                                              );
                                          });
                                }),
                                _ = (0, h.Om)((e, t) => {
                                    var a;
                                    return null == (a = d(e).find((e) => e[t])) ? void 0 : a[t];
                                }),
                                m = (0, h.Om)((e) => {
                                    const t = b.sE(
                                        r.packages.get(),
                                        (t) => t.chapterID === e && t.chapterType === p.EXTRA,
                                    );
                                    return Boolean(t);
                                }),
                                E = (0, h.Om)((e) => b.q9(r.chaptersWithLogoBg.get(), e)),
                                f = (0, h.Om)((e) => {
                                    const t = b.sE(
                                        r.packages.get(),
                                        (t) => t.chapterID === e && t.chapterType === p.HOLIDAY,
                                    );
                                    return Boolean(t);
                                }),
                                C = (0, h.Om)(
                                    () =>
                                        b.UI(r.compoundPrice.get().prices, (e) => {
                                            var t, a;
                                            return Object.assign({}, e, {
                                                currencyType: null == (t = b.U2(e.price, 0)) ? void 0 : t.name,
                                                value: null == (a = b.U2(e.price, 0)) ? void 0 : a.value,
                                            });
                                        }),
                                    { equals: g.jv },
                                ),
                                A = (0, h.Om)(() => r.compoundPrice.get().prices.length > 1),
                                w = (0, h.Om)(() => b.G(r.packages.get(), ({ chapterType: e }) => e === p.EXTRA));
                            return Object.assign({}, r, {
                                computes: {
                                    topPriorityRewards: s,
                                    prevTopPriorityRewards: n,
                                    nowRewards: o,
                                    futureRewards: i,
                                    firstChapter: l,
                                    chapters: u,
                                    chapter: c,
                                    getChapterPrices: d,
                                    findCurrencyByType: _,
                                    isExtra: m,
                                    isHoliday: f,
                                    hasChapterLogoBg: E,
                                    prices: C,
                                    isMulticurrency: A,
                                    hasExtra: w,
                                },
                            });
                        },
                        ({ model: e, externalModel: t }) => ({
                            setPriceID: (0, v.aD)((t) => {
                                e.priceID.set(t);
                            }),
                            shopOffer: t.createCallbackNoArgs('onShopOfferClick'),
                            buy: t.createCallback(() => ({ priceID: e.priceID.get() }), 'confirm.onBuyClick'),
                            togglePurchaseWithLevels: t.createCallbackNoArgs('confirm.onChangePurchaseWithLevels'),
                        }),
                    ),
                    C = f[0],
                    A = f[1];
                var w = a(6483),
                    B = a.n(w),
                    D = a(1856),
                    y = a(8030),
                    F = a(5521),
                    P = a(4420),
                    S = a(6444);
                const N = 'BattlePassBuyViewContent_base_85',
                    k = 'BattlePassBuyViewContent_background_15',
                    L = 'BattlePassBuyViewContent_background__visible_66',
                    x = 'BattlePassBuyViewContent_additionalBackground_1d',
                    I = 'BattlePassBuyViewContent_blackout_3d',
                    T = 'BattlePassBuyViewContent_header_50',
                    O = 'BattlePassBuyViewContent_title_8a',
                    M = 'BattlePassBuyViewContent_subtitle_72';
                var $ = a(7727);
                const W = {
                    base: 'Illustration_base_d3',
                    imgWrapper: 'Illustration_imgWrapper_61',
                    img: 'Illustration_img_44',
                    base__hover: 'Illustration_base__hover_70',
                    base__disabled: 'Illustration_base__disabled_a8',
                    vignette: 'Illustration_vignette_e0',
                    asset: 'Illustration_asset_e2',
                    highlight: 'Illustration_highlight_36',
                    highlight__default: 'Illustration_highlight__default_2b',
                    highlight__active: 'Illustration_highlight__active_f1',
                    highlight__shine: 'Illustration_highlight__shine_b0',
                };
                let H;
                !(function (e) {
                    ((e.Hover = 'hover'), (e.Disabled = 'disabled'));
                })(H || (H = {}));
                const z = ({ className: e, isHighlight: t, isActive: a, chapterID: r, state: n }) =>
                        s().createElement(
                            'div',
                            { className: B()(W.base, n && W[`base__${n}`], e) },
                            s().createElement(
                                'div',
                                { className: W.imgWrapper },
                                s().createElement(
                                    'div',
                                    {
                                        className: W.img,
                                        style: {
                                            backgroundImage: `url('${(0, u.wD)(R.images.gui.maps.icons.battlePass.buy.illustrations.commander, r)}')`,
                                        },
                                    },
                                    s().createElement('div', { className: W.vignette }),
                                ),
                            ),
                            s().createElement('div', { className: W.asset }),
                            s().createElement('div', { className: B()(W.highlight, W.highlight__default) }),
                            t &&
                                s().createElement('div', {
                                    className: B()(W.highlight, a ? W.highlight__active : W.highlight__shine),
                                }),
                        ),
                    G = 'State_base_b0',
                    U = 'State_bg_49',
                    V = 'State_content_d1',
                    j = 'State_ico_5b',
                    q = ({ className: e }) =>
                        s().createElement(
                            'div',
                            { className: B()(G, e) },
                            s().createElement('div', { className: U }),
                            s().createElement(
                                'div',
                                { className: V },
                                s().createElement('div', { className: j }),
                                R.strings.battle_pass.battlePassBuyView.card.purchased(),
                            ),
                        );
                var Z = a(5831);
                const X = {
                    base: 'BattlePassBuyExtraCard_base_cf',
                    base__small: 'BattlePassBuyExtraCard_base__small_d2',
                    base__disabled: 'BattlePassBuyExtraCard_base__disabled_a5',
                    timer: 'BattlePassBuyExtraCard_timer_8f',
                    content: 'BattlePassBuyExtraCard_content_1a',
                    title: 'BattlePassBuyExtraCard_title_6c',
                    price: 'BattlePassBuyExtraCard_price_8a',
                    illustration: 'BattlePassBuyExtraCard_illustration_6b',
                    state: 'BattlePassBuyExtraCard_state_9a',
                    chapterActiveText: 'BattlePassBuyExtraCard_chapterActiveText_70',
                    fadeOut: 'BattlePassBuyExtraCard_fadeOut_bb',
                    fadeIn: 'BattlePassBuyExtraCard_fadeIn_c8',
                    fadeInWithScale: 'BattlePassBuyExtraCard_fadeInWithScale_df',
                    slideUp: 'BattlePassBuyExtraCard_slideUp_da',
                    scale: 'BattlePassBuyExtraCard_scale_5a',
                    rotate: 'BattlePassBuyExtraCard_rotate_06',
                };
                var Y = a(7044),
                    K = a(2344),
                    Q = a(3649);
                const J = 'CardTimer_base_84',
                    ee = 'CardTimer_light_ae',
                    te = 'CardTimer_icon_e1',
                    ae = 'CardTimer_value_eb',
                    re = R.strings.battle_pass.battlePassBuyView.card.timer,
                    se = ({ expireTime: e }) => {
                        const t = (0, K.au)(e),
                            a = t <= 60 ? re.lessMinute() : (0, Q.uF)(re.time(), { time: (0, Y.wB)((0, Y.f8)(t), !1) });
                        return s().createElement(
                            'div',
                            { className: J },
                            s().createElement('div', { className: ee }),
                            s().createElement('div', { className: te }),
                            s().createElement('div', { className: ae }, a),
                        );
                    },
                    ne = 'CurrentLevel_base_5e',
                    oe = 'CurrentLevel_base__isHovered_d1',
                    ie = 'CurrentLevel_level_fb',
                    ue = 'CurrentLevel_text_7b',
                    le = R.strings.battle_pass.battlePassBuyView.card,
                    ce = ({ isHovered: e, currentLevel: t }) => {
                        const a = e ? le.currentLevelHovered.text() : le.currentLevel.text(),
                            r = B()(ne, e && oe);
                        return s().createElement(
                            'div',
                            { className: r },
                            s().createElement('div', { className: ue }, a),
                            s().createElement('div', { className: ie }, t),
                        );
                    },
                    de = 'Description_base_af',
                    _e = 'Description_base__disabled_35',
                    me = 'Description_text_ee',
                    pe = 'Description_text__hidden_51',
                    Ee = R.strings.battle_pass.battlePassBuyView.card.descr,
                    ge = ({ currentLevel: e, isLevelShow: t, isHovered: a, isBought: r }) => {
                        const n = r ? Ee.bought() : Ee.chapter();
                        return s().createElement(
                            'div',
                            { className: B()(de, r && _e) },
                            t && s().createElement(ce, { currentLevel: e, isHovered: a }),
                            s().createElement('div', { className: B()(me, !a && pe) }, n),
                        );
                    };
                var be = a(122),
                    ve = a(5415);
                const he = 'Logo_base_8b',
                    fe = 'Logo_light_62',
                    Ce = 'Logo_light__hovered_29',
                    Ae = 'Logo_lightAppear_e4',
                    we = 'Logo_logoIcon_60',
                    Be = 'Logo_base__notAvailable_23',
                    De = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.buy.logo,
                            r = t <= ve.cJ.Small ? 'small' : '';
                        return (0, u.wD)(a, e, r);
                    },
                    ye = ({ chapterID: e, animationOrder: t, isAvailable: a, isHovered: n, isActiveChapter: o }) => {
                        const i = 800 + 100 * t;
                        (0, r.useEffect)(() => {
                            if (a) return (0, be.F)(() => (0, $.G)('bp_buy_pass_02'), i);
                        }, [a, i]);
                        const u = (0, ve.GS)().mediaSize,
                            l = { animationDelay: `${i}ms` };
                        return s().createElement(
                            'div',
                            { className: B()(he, !a && Be) },
                            o &&
                                s().createElement(
                                    'div',
                                    { style: l, className: Ae },
                                    s().createElement('div', { className: B()(fe, n && Ce) }),
                                ),
                            s().createElement('div', { className: we, style: { backgroundImage: `url(${De(e, u)})` } }),
                        );
                    };
                var Fe = a(918),
                    Pe = a(329);
                const Se = 'Price_base_d1',
                    Ne = 'Price_divider_2d',
                    ke = { left: Pe.V2.gold, right: Pe.V2.freeXP },
                    Re = R.strings.battle_pass.battlePassBuyView.card,
                    Le = (0, i.Pi)(({ chapterID: e, className: t }) => {
                        const a = A().model.computes,
                            r = a.findCurrencyByType(e, ke.left),
                            n = a.findCurrencyByType(e, ke.right);
                        return r || n
                            ? s().createElement(
                                  'div',
                                  { className: B()(Se, t) },
                                  r && s().createElement(Fe.F, { type: ke.left, size: Pe.et.small, value: r.value }),
                                  r && n && s().createElement('div', { className: Ne }, Re.priceDivider()),
                                  n && s().createElement(Fe.F, { type: ke.right, size: Pe.et.small, value: n.value }),
                              )
                            : null;
                    }),
                    xe = R.strings.battle_pass.battlePassBuyView.card,
                    Ie = (0, i.Pi)(
                        ({
                            chapterID: e = 1,
                            animationOrder: t = 0,
                            onMouseEnter: a,
                            onMouseLeave: n,
                            isShopOfferAvailable: o = !1,
                            expireTime: i = 0,
                        }) => {
                            const u = A().model.computes,
                                c = u.chapter(e),
                                d = c.isBought,
                                m = c.chapterState,
                                p = c.currentLevel,
                                E = c.packageID,
                                g = u.isExtra(e),
                                b = (0, r.useState)(!1),
                                v = b[0],
                                h = b[1],
                                f = m === _.Active,
                                C = m === _.Paused,
                                w = o && !g,
                                D = (0, S.tv)();
                            return s().createElement(
                                'div',
                                {
                                    className: B()(
                                        X.base,
                                        w && X.base__small,
                                        f && X.base__activeChapter,
                                        d && X.base__disabled,
                                    ),
                                    onClick: () => {
                                        ($.$.playClick(),
                                            d || (E && D.push(Z._.battlePass.buyPassConfirm, { packageID: E })));
                                    },
                                    onMouseEnter: () => {
                                        ((0, $.G)('bp_highlight'), a && a(), d || h(!0));
                                    },
                                    onMouseLeave: () => {
                                        (n && n(), h(!1));
                                    },
                                },
                                s().createElement(z, {
                                    chapterID: e,
                                    isHighlight: f,
                                    isActive: d,
                                    state: d ? H.Disabled : v ? H.Hover : void 0,
                                    className: X.illustration,
                                }),
                                g &&
                                    i > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: X.timer },
                                        s().createElement(se, { expireTime: i }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: X.content },
                                    s().createElement(ye, {
                                        chapterID: e,
                                        animationOrder: t,
                                        isAvailable: !d,
                                        isHovered: v,
                                        isActiveChapter: f,
                                    }),
                                    s().createElement('div', { className: X.title }, (0, l.pC)(e)),
                                    s().createElement(ge, {
                                        isHovered: v,
                                        currentLevel: p,
                                        isLevelShow: f || C,
                                        isBought: d,
                                    }),
                                ),
                                d
                                    ? s().createElement(q, { className: X.state })
                                    : s().createElement(Le, { chapterID: e, className: X.price }),
                                f &&
                                    s().createElement(
                                        'div',
                                        { className: X.chapterActiveText },
                                        xe.activeChapter.text(),
                                    ),
                            );
                        },
                    );
                var Te = a(3815),
                    Oe = a(7030);
                const Me = 'ShopOfferCard_base_3a',
                    $e = 'ShopOfferCard_background_44',
                    We = 'ShopOfferCard_shopOfferBorder_25',
                    He = 'ShopOfferCard_illustrationWrapper_94',
                    ze = 'ShopOfferCard_illustration_0c',
                    Ge = 'ShopOfferCard_backgroundAsset_a4',
                    Ue = 'ShopOfferCard_backgroundColor_45',
                    Ve = 'ShopOfferCard_shopOfferDiscount_a1',
                    je = 'ShopOfferCard_content_ce',
                    qe = 'ShopOfferCard_title_4d',
                    Ze = 'ShopOfferCard_base__highlighted_42',
                    Xe = 'ShopOfferCard_description_1c',
                    Ye = 'ShopOfferCard_warningOverlay_90',
                    Ke = R.strings.battle_pass.battlePassBuyView.card,
                    Qe = (0, i.Pi)(({ isWarningHighlighted: e = !1 }) => {
                        const t = A().controls,
                            a = (0, Te.z)(() => {
                                ($.$.playClick(), t.shopOffer());
                            }),
                            r = (0, Te.z)(() => {
                                (0, $.G)('bp_highlight');
                            }),
                            n = (0, Oe.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: { duration: 200 },
                            });
                        return s().createElement(
                            'div',
                            { className: B()(Me, e && Ze), onClick: a, onMouseEnter: r },
                            s().createElement(
                                'div',
                                { className: $e },
                                s().createElement(
                                    'div',
                                    { className: He },
                                    s().createElement('div', { className: ze }),
                                ),
                                s().createElement('div', { className: We }),
                                s().createElement('div', { className: Ge }),
                                s().createElement('div', { className: Ue }),
                                s().createElement('div', { className: Ve }),
                                n((e, t) => t && s().createElement(Oe.animated.div, { style: e, className: Ye })),
                            ),
                            s().createElement(
                                'div',
                                { className: je },
                                s().createElement('div', { className: qe }, Ke.title.shopOffer()),
                                s().createElement(
                                    'div',
                                    { className: Xe },
                                    e ? Ke.shopOfferWaning() : Ke.descr.shopOffer(),
                                ),
                            ),
                        );
                    }),
                    Je = 'CardAppearTransition_base_2e',
                    et = ({ animationOrder: e = 0, children: t }) => {
                        const a = 600 + 100 * e;
                        (0, r.useEffect)(() => (0, be.F)(() => (0, $.G)('bp_buy_pass_01'), a), [a]);
                        const n = (0, r.useMemo)(() => ({ animationDelay: `${a}ms` }), [a]);
                        return s().createElement('div', { style: n, className: Je }, t);
                    },
                    tt = 'ExtraContent_base_4d',
                    at = 'ExtraContent_cardsWrapper_31',
                    rt = 'ExtraContent_cards_b2',
                    st = 'ExtraContent_card__isShopOfferAvailable_25',
                    nt = 'ExtraContent_card_4c',
                    ot = 'ExtraContent_card__extra_fe',
                    it = (0, i.Pi)(() => {
                        const e = A().model,
                            t = e.main.isShopOfferAvailable.get(),
                            a = e.computes.chapters(),
                            n = (0, r.useState)(!1),
                            o = n[0],
                            i = n[1],
                            u = (0, r.useCallback)(() => {
                                i(!0);
                            }, []),
                            l = (0, r.useCallback)(() => {
                                i(!1);
                            }, []);
                        return s().createElement(
                            'div',
                            { className: tt },
                            s().createElement(
                                'div',
                                { className: at },
                                t &&
                                    s().createElement(
                                        'div',
                                        { className: B()(nt, st) },
                                        s().createElement(et, null, s().createElement(Qe, { isWarningHighlighted: o })),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: rt },
                                    b.DZ(
                                        a,
                                        (e) => e.chapterType !== p.EXTRA,
                                        (e, a) =>
                                            s().createElement(
                                                'div',
                                                { key: e.packageID, className: nt },
                                                s().createElement(
                                                    et,
                                                    { animationOrder: a + 1 },
                                                    s().createElement(Ie, {
                                                        chapterID: e.chapterID,
                                                        isShopOfferAvailable: t,
                                                        animationOrder: a + 1,
                                                        onMouseEnter: u,
                                                        onMouseLeave: l,
                                                    }),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                            b.DZ(
                                a,
                                (e) => e.chapterType === p.EXTRA,
                                (e) =>
                                    s().createElement(
                                        'div',
                                        { key: e.packageID, className: B()(nt, ot) },
                                        s().createElement(
                                            et,
                                            { animationOrder: a.length + 1 },
                                            s().createElement(Ie, {
                                                chapterID: e.chapterID,
                                                isShopOfferAvailable: !1,
                                                expireTime: e.expireTime,
                                                animationOrder: a.length + 1,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    ut = R.strings.battle_pass.battlePassBuyView,
                    lt = (0, i.Pi)(() => {
                        const e = (0, r.useState)(!1),
                            t = e[0],
                            a = e[1],
                            n = A().model,
                            o = n.computes.firstChapter(),
                            i = n.main.isSeasonWithAdditionalBackground.get() && n.computes.hasExtra(),
                            u = (0, S.tv)();
                        return (
                            y.N.useHandleKeydown(F.n.ESCAPE, () => u.goBack()),
                            (0, r.useEffect)(() => {
                                (0, D.v)(() => {
                                    a(!0);
                                });
                            }, []),
                            s().createElement(
                                'div',
                                { className: N },
                                s().createElement(
                                    'div',
                                    { className: B()(k, t && L) },
                                    s().createElement(P.N, { key: null == o ? void 0 : o.packageID, isCurrent: !0 }),
                                    i && s().createElement('div', { className: x }),
                                    s().createElement('div', { className: I }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: T },
                                    s().createElement('div', { className: O }, ut.title()),
                                    s().createElement('div', { className: M }, ut.descr()),
                                ),
                                s().createElement(it, null),
                            )
                        );
                    });
                var ct = a(1641);
                let dt, _t, mt;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(dt || (dt = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(_t || (_t = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(mt || (mt = {})));
                const pt = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    Et = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                const bt = (e) => {
                    let t = e.id,
                        a = e.isChecked,
                        n = void 0 !== a && a,
                        o = e.isDisabled,
                        i = void 0 !== o && o,
                        u = e.isAlert,
                        l = void 0 !== u && u,
                        c = e.size,
                        d = void 0 === c ? dt.medium : c,
                        _ = e.type,
                        m = void 0 === _ ? _t.primary : _,
                        p = e.soundHover,
                        E = void 0 === p ? 'highlight' : p,
                        g = e.soundClick,
                        b = void 0 === g ? 'play' : g,
                        v = e.onMouseEnter,
                        h = e.onMouseLeave,
                        f = e.onMouseUp,
                        C = e.onMouseDown,
                        A = e.onClick,
                        w = e.onChange,
                        D = e.onFocus,
                        y = e.onBlur,
                        F = e.text,
                        P = e.contentStyles,
                        S = e.children,
                        N = e.alignment,
                        k = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, Et);
                    const R = (0, r.useState)(!1),
                        L = R[0],
                        x = R[1],
                        I = (0, r.useState)(!1),
                        T = (I[0], I[1]),
                        O = (0, r.useCallback)(
                            (e) => {
                                i || (w && w(), A && A(e));
                            },
                            [i, w, A],
                        ),
                        M = (0, r.useCallback)(
                            (e) => {
                                const t = e.button === ct.t.LEFT;
                                i || (t && x(!0), t && C && C(e), b && (0, $.G)(b));
                            },
                            [i, C, b],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                i || (x(!1), f && f(e));
                            },
                            [i, f],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                i || (v && v(e), E && (0, $.G)(E));
                            },
                            [i, v, E],
                        ),
                        z = (0, r.useCallback)(
                            (e) => {
                                i || (x(!1), h && h(e));
                            },
                            [i, h],
                        ),
                        G = (0, r.useCallback)(
                            (e) => {
                                i || (T(!0), D && D(e));
                            },
                            [i, D],
                        ),
                        U = (0, r.useCallback)(
                            (e) => {
                                i || (T(!1), y && y(e));
                            },
                            [i, y],
                        ),
                        V = s().createElement(
                            'div',
                            { className: pt.label },
                            s().createElement(
                                'div',
                                { className: B()(pt.labelContent, 's-labelContent'), style: P },
                                F || S,
                            ),
                        );
                    return s().createElement(
                        'div',
                        gt(
                            {
                                id: t,
                                className: B()(pt.base, pt[`base__${d}`], pt[`base__${m}`], {
                                    [pt.base__checked]: n,
                                    [pt.base__disabled]: i,
                                    [pt.base__mouseDown]: L,
                                    [pt.base__alert]: l,
                                    [pt.base__center]: N === mt.Center,
                                    [pt.base__bottom]: N === mt.Bottom,
                                }),
                                onClick: O,
                                onMouseEnter: H,
                                onMouseLeave: z,
                                onMouseDown: M,
                                onMouseUp: W,
                                onFocus: G,
                                onBlur: U,
                            },
                            k,
                        ),
                        s().createElement(
                            'div',
                            { className: pt.input },
                            s().createElement('div', { className: pt.alertOverlay }),
                            s().createElement('div', { className: pt.inputHoverOverlay }),
                            s().createElement('div', { className: pt.highlight }),
                        ),
                        s().createElement('div', { className: pt.checkmark }),
                        ((F || S) && V) || null,
                    );
                };
                var vt = a(9766),
                    ht = a(8526),
                    ft = a(3290),
                    Ct = a(3942),
                    At = a(3457);
                let wt;
                !(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'));
                })(wt || (wt = {}));
                const Bt = {
                        base: 'RadioButton_base_d9',
                        base__disabled: 'RadioButton_base__disabled_84',
                        input: 'RadioButton_input_24',
                        base__small: 'RadioButton_base__small_71',
                        base__medium: 'RadioButton_base__medium_d8',
                        blank: 'RadioButton_blank_b5',
                        blankHover: 'RadioButton_blankHover_5e',
                        blankMousedown: 'RadioButton_blankMousedown_0e',
                        check: 'RadioButton_check_f2',
                        checkHover: 'RadioButton_checkHover_c6',
                        checkMousedown: 'RadioButton_checkMousedown_a7',
                        transition: 'RadioButton_transition_b3',
                        base__blank: 'RadioButton_base__blank_46',
                        base__blankHover: 'RadioButton_base__blankHover_9a',
                        base__blankMousedown: 'RadioButton_base__blankMousedown_cd',
                        base__check: 'RadioButton_base__check_fe',
                        base__checkHover: 'RadioButton_base__checkHover_2f',
                        base__checkMousedown: 'RadioButton_base__checkMousedown_83',
                        label: 'RadioButton_label_7f',
                    },
                    Dt = [
                        'children',
                        'labelRenderer',
                        'value',
                        'currentValue',
                        'autofocus',
                        'disabled',
                        'size',
                        'label',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                    ];
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const Ft = (0, r.memo)((e) => {
                        let t = e.children,
                            a = e.labelRenderer,
                            n = e.value,
                            o = e.currentValue,
                            i = e.autofocus,
                            u = void 0 !== i && i,
                            l = e.disabled,
                            c = void 0 !== l && l,
                            d = e.size,
                            _ = void 0 === d ? wt.Medium : d,
                            m = e.label,
                            p = e.soundHover,
                            E = void 0 === p ? 'highlight' : p,
                            g = e.soundClick,
                            b = void 0 === g ? 'play' : g,
                            v = e.onMouseEnter,
                            h = e.onMouseLeave,
                            f = e.onMouseUp,
                            C = e.onMouseDown,
                            A = e.onClick,
                            w = e.onChange,
                            y = e.onFocus,
                            F = e.onBlur,
                            P = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    s = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                                return s;
                            })(e, Dt);
                        const S = n === o,
                            N = (0, r.useState)(!1),
                            k = N[0],
                            R = N[1],
                            L = (0, r.useState)(!1),
                            x = L[0],
                            I = L[1],
                            T = (0, r.useState)(u),
                            O = T[0],
                            M = T[1],
                            W = (0, r.useRef)(null),
                            H = (0, r.useCallback)(() => {
                                !c && W.current && (W.current.focus(), M(!0));
                            }, [c]),
                            z = (0, r.useCallback)(
                                (e) => {
                                    O && null !== W.current && !W.current.contains(e.target) && M(!1);
                                },
                                [O],
                            );
                        ((0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', z),
                                () => {
                                    document.removeEventListener('mousedown', z);
                                }
                            ),
                            [z],
                        ),
                            (0, r.useEffect)(() => {
                                M(u);
                            }, [u]));
                        const G = (0, r.useCallback)(
                                (e) => {
                                    c || (w && w(n), A && A(n, e));
                                },
                                [c, w, A, n],
                            ),
                            U = (0, r.useCallback)(
                                (e) => {
                                    if (!c) {
                                        const t = e.button === ct.t.LEFT;
                                        (t && R(!0), t && C && C(n, e), b && (0, $.G)(b), u && H());
                                    }
                                },
                                [u, c, C, H, b, n],
                            ),
                            V = (0, r.useCallback)(
                                (e) => {
                                    c || (R(!1), f && f(n, e));
                                },
                                [c, f, n],
                            ),
                            j = (0, r.useCallback)(
                                (e) => {
                                    c || (v && v(n, e), E && (0, $.G)(E), I(!0));
                                },
                                [c, v, E, n],
                            ),
                            q = (0, r.useCallback)(
                                (e) => {
                                    c || (R(!1), I(!1), h && h(n, e));
                                },
                                [c, h, n],
                            ),
                            Z = (0, r.useCallback)(
                                (e) => {
                                    c || (M(!0), y && y(n, e));
                                },
                                [c, y, n],
                            ),
                            X = (0, r.useCallback)(
                                (e) => {
                                    c || (M(!1), F && F(n, e));
                                },
                                [c, F, n],
                            ),
                            Y = B()(Bt.base, Bt[`base__${_}`], {
                                [Bt.base__blank]: !S && !x,
                                [Bt.base__blankHover]: !S && x && !k,
                                [Bt.base__blankMousedown]: !S && x && k,
                                [Bt.base__check]: S && !x,
                                [Bt.base__checkHover]: S && x && !k,
                                [Bt.base__checkMousedown]: S && x && k,
                                [Bt.base__focused]: O,
                                [Bt.base__disabled]: c,
                            }),
                            K = (0, r.useMemo)(
                                () => ({ isHovered: x, isMouseDown: k, isFocused: O, isChecked: S }),
                                [x, k, O, S],
                            ),
                            Q = (0, r.useRef)(Bt.blank),
                            J = (0, r.useRef)(Bt.blankHover),
                            ee = (0, r.useRef)(Bt.blankMousedown),
                            te = (0, r.useRef)(Bt.check),
                            ae = (0, r.useRef)(Bt.checkHover),
                            re = (0, r.useRef)(Bt.checkMousedown);
                        return (
                            (0, r.useEffect)(
                                (0, D.v)(() => {
                                    ((Q.current = B()(Bt.blank, Bt.transition)),
                                        (J.current = B()(Bt.blankHover, Bt.transition)),
                                        (ee.current = B()(Bt.blankMousedown, Bt.transition)),
                                        (te.current = B()(Bt.check, Bt.transition)),
                                        (ae.current = B()(Bt.checkHover, Bt.transition)),
                                        (re.current = B()(Bt.checkMousedown, Bt.transition)));
                                }),
                                [],
                            ),
                            s().createElement(
                                'div',
                                yt(
                                    {
                                        ref: W,
                                        className: Y,
                                        onClick: G,
                                        onMouseEnter: j,
                                        onMouseLeave: q,
                                        onMouseDown: U,
                                        onMouseUp: V,
                                        onFocus: Z,
                                        onBlur: X,
                                    },
                                    P,
                                ),
                                s().createElement(
                                    'div',
                                    { className: Bt.input },
                                    s().createElement('div', { className: Q.current }),
                                    s().createElement('div', { className: J.current }),
                                    s().createElement('div', { className: ee.current }),
                                    s().createElement('div', { className: te.current }),
                                    s().createElement('div', { className: ae.current }),
                                    s().createElement('div', { className: re.current }),
                                ),
                                s().createElement('div', { className: Bt.label }, m || t || (a && a(K))),
                            )
                        );
                    }),
                    Pt = 'CurrencyRadioButton_currency_80',
                    St = (0, i.Pi)(({ currencyType: e, value: t, priceID: a, currentPriceID: r, onClick: n }) =>
                        s().createElement(
                            Ft,
                            {
                                value: a,
                                currentValue: r,
                                onClick: () => {
                                    n(a);
                                },
                            },
                            s().createElement(
                                'div',
                                { className: Pt },
                                s().createElement(Fe.F, { type: e, size: Pe.et.big, value: t }),
                            ),
                        ),
                    ),
                    Nt = 'Price_base_70',
                    kt = 'Price_priceDivider_b4',
                    Rt = 'Price_button_a5',
                    Lt = R.strings.battle_pass.battlePassBuyView,
                    xt = { left: Pe.V2.gold, right: Pe.V2.freeXP },
                    It = (0, i.Pi)(({ className: e, price: t }) => {
                        const a = A(),
                            n = a.model,
                            o = a.controls,
                            i = n.main.isWalletAvailable.get(),
                            u = n.priceID.get(),
                            l = n.computes.prices(),
                            c = l.find((e) => e.currencyType === xt.left),
                            d = l.find((e) => e.currencyType === xt.right);
                        return (
                            (0, r.useEffect)(() => {
                                u || o.setPriceID(n.confirm.compoundPriceDefaultID.get());
                            }, [o, u, n.confirm.compoundPriceDefaultID]),
                            s().createElement(
                                'div',
                                { className: B()(Nt, e) },
                                c && d
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(St, {
                                              currencyType: xt.left,
                                              value: c.value,
                                              priceID: c.priceID,
                                              currentPriceID: u,
                                              onClick: o.setPriceID,
                                          }),
                                          s().createElement('div', { className: kt }, Lt.priceDivider()),
                                          s().createElement(St, {
                                              currencyType: xt.right,
                                              value: d.value,
                                              priceID: d.priceID,
                                              currentPriceID: u,
                                              onClick: o.setPriceID,
                                          }),
                                      )
                                    : s().createElement(Fe.F, { type: Pe.V2.gold, size: Pe.et.large, value: t }),
                                s().createElement(
                                    At.u5,
                                    {
                                        type: At.L$.main,
                                        size: At.qE.medium,
                                        disabled: !i,
                                        onClick: o.buy,
                                        mixClass: Rt,
                                    },
                                    Lt.confirm.btnBuy(),
                                ),
                            )
                        );
                    }),
                    Tt = 'Footer_base_9a',
                    Ot = 'Footer_divider_5e',
                    Mt = 'Footer_base__isMulticurrency_33',
                    $t = 'Footer_secondDivider_ad',
                    Wt = 'Footer_previousPrice_59',
                    Ht = 'Footer_currentPrice_07',
                    zt = 'Footer_base__priceUpdateAnimation_5a',
                    Gt = 'Footer_label_78',
                    Ut = 'Footer_price_b6',
                    Vt = R.strings.battle_pass.battlePassBuyView,
                    jt = (0, i.Pi)(({ isPriceUpdateAnimation: e }) => {
                        const t = A().model,
                            a = t.confirm,
                            r = a.price,
                            n = a.prevPrice,
                            o = a.isPurchaseWithLevels,
                            i = t.computes.isMulticurrency();
                        return s().createElement(
                            'div',
                            { className: B()(Tt, i && Mt, e && zt) },
                            s().createElement('div', { className: Ot }),
                            s().createElement('div', { className: $t }),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: Wt },
                                    s().createElement(
                                        'div',
                                        { className: Gt },
                                        o.get() ? Vt.confirm.price() : Vt.confirm.priceWithLevels(),
                                    ),
                                    s().createElement(It, { price: n.get(), className: Ut }),
                                ),
                            s().createElement(
                                'div',
                                { className: Ht },
                                s().createElement(
                                    'div',
                                    { className: Gt },
                                    o.get() ? Vt.confirm.priceWithLevels() : Vt.confirm.price(),
                                ),
                                s().createElement(It, { price: r.get(), className: Ut }),
                            ),
                        );
                    });
                var qt = a(2862),
                    Zt = a(5739),
                    Xt = a(7264);
                const Yt = {
                    descriptionText: 'Rewards_descriptionText_4e',
                    priorityRewards: 'Rewards_priorityRewards_df',
                    priorityRewards__rewardsButtonVisible: 'Rewards_priorityRewards__rewardsButtonVisible_24',
                    buttonWrapper: 'Rewards_buttonWrapper_50',
                    indentBlock: 'Rewards_indentBlock_b5',
                    rewardBtn: 'Rewards_rewardBtn_77',
                    indentBlock__currentRewardsAnimation: 'Rewards_indentBlock__currentRewardsAnimation_b5',
                    rewardBtn__currentRewardsAnimation: 'Rewards_rewardBtn__currentRewardsAnimation_a5',
                    'fade-in': 'Rewards_fade-in_59',
                    fadeOut: 'Rewards_fadeOut_88',
                    fadeIn: 'Rewards_fadeIn_33',
                    fadeInWithScale: 'Rewards_fadeInWithScale_e1',
                    slideUp: 'Rewards_slideUp_1c',
                    scale: 'Rewards_scale_59',
                    rotate: 'Rewards_rotate_36',
                    windowIn: 'Rewards_windowIn_9e',
                    'fade-out': 'Rewards_fade-out_25',
                };
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                const Qt = (e, t) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 100 * e,
                        config: { duration: 300 },
                        onStart: () => {
                            (0, $.G)(R.sounds.bp_reward());
                        },
                        reset: t,
                    }),
                    Jt = R.strings.battle_pass.battlePassBuyView,
                    ea = (0, i.Pi)(({ isCheckboxAnimationActive: e, isPrevious: t = !1, className: a }) => {
                        const r = A().model,
                            n = r.confirm.isPurchaseWithLevels.get(),
                            o = r.confirm.chapterID.get(),
                            i =
                                r.computes.nowRewards().length +
                                r.computes.futureRewards().length -
                                r.computes.topPriorityRewards().length,
                            u = r.computes.topPriorityRewards(),
                            c = r.computes.prevTopPriorityRewards(),
                            d = t ? c : u,
                            _ = t ? !n : n,
                            m = i > 0,
                            p = (0, Oe.useSpring)(Qt(4)),
                            E = (0, ve.GS)().mediaSize < ve.cJ.Medium ? qt.h2.Small : qt.h2.Big,
                            g = (0, S.tv)();
                        return s().createElement(
                            'div',
                            { className: B()(Yt.base, a) },
                            s().createElement(
                                'div',
                                { className: Yt.descriptionText },
                                _ ? Jt.confirm.descriptionCheckboxChecked() : Jt.confirm.description(),
                            ),
                            s().createElement(
                                'div',
                                { className: B()(Yt.priorityRewards, m && Yt.priorityRewards__rewardsButtonVisible) },
                                b.UI(d, (e, a) =>
                                    t
                                        ? s().createElement(
                                              Zt.Q,
                                              Kt({}, (0, l.$n)(e, E), { className: Yt.reward, key: `${e.name}_${a}` }),
                                          )
                                        : s().createElement(
                                              Xt.d,
                                              { animationConfig: Qt(a), key: `${e.name}_${a}` },
                                              s().createElement(
                                                  Zt.Q,
                                                  Kt({}, (0, l.$n)(e, E), { className: Yt.reward }),
                                              ),
                                          ),
                                ),
                            ),
                            m
                                ? s().createElement(
                                      Oe.animated.div,
                                      { style: p },
                                      s().createElement(
                                          'div',
                                          { className: Yt.buttonWrapper },
                                          s().createElement(
                                              At.u5,
                                              {
                                                  type: At.L$.ghost,
                                                  size: At.qE.medium,
                                                  mixClass: B()(
                                                      Yt.rewardBtn,
                                                      e && Yt.rewardBtn__currentRewardsAnimation,
                                                  ),
                                                  onClick: () =>
                                                      g.push(Z._.battlePass.buyPassRewards, { packageID: o }),
                                              },
                                              (0, Q.uF)(Jt.btnRewards(i), { count: i }),
                                          ),
                                      ),
                                  )
                                : s().createElement('div', { className: Yt.indentBlock }),
                        );
                    }),
                    ta = 'ShopOfferWarning_base_b5',
                    aa = 'ShopOfferWarning_lip_8c',
                    ra = 'ShopOfferWarning_glow_d4',
                    sa = 'ShopOfferWarning_message_b8',
                    na = 'ShopOfferWarning_shopOfferLink_a5',
                    oa = R.strings.battle_pass.battlePassBuyView.confirm,
                    ia = ({ className: e }) => {
                        const t = A().controls;
                        return s().createElement(
                            'div',
                            { className: B()(ta, e) },
                            s().createElement('div', { className: aa }),
                            s().createElement('div', { className: ra }),
                            s().createElement(vt.z, {
                                classMix: sa,
                                text: R.strings.battle_pass.battlePassBuyView.confirm.shopOfferWarning(),
                                binding: {
                                    link: s().createElement(
                                        'div',
                                        { onClick: t.shopOffer, className: na },
                                        oa.shopOfferLinkText(),
                                    ),
                                },
                            }),
                        );
                    },
                    ua = 'ConfirmBuyViewContent_base_e3',
                    la = 'ConfirmBuyViewContent_background_73',
                    ca = 'ConfirmBuyViewContent_content_9d',
                    da = 'ConfirmBuyViewContent_backgroundCommander_19',
                    _a = 'ConfirmBuyViewContent_title_d6',
                    ma = 'ConfirmBuyViewContent_checkboxWrapper_23',
                    pa = 'ConfirmBuyViewContent_content__rewardsUpdateAnimation_fa',
                    Ea = 'ConfirmBuyViewContent_checkbox_cd',
                    ga = 'ConfirmBuyViewContent_previousRewards_f3',
                    ba = 'ConfirmBuyViewContent_currentRewards_57',
                    va = 'ConfirmBuyViewContent_checkboxLabel_01',
                    ha = 'ConfirmBuyViewContent_shopOfferWarning_a7',
                    fa = R.strings.battle_pass.battlePassBuyView,
                    Ca = (0, i.Pi)(() => {
                        const e = A(),
                            t = e.model,
                            a = e.controls,
                            n = t.confirm,
                            o = n.chapterID,
                            i = n.isPurchaseWithLevels,
                            l = n.remainingLevelsCount,
                            c = t.main.isShopOfferAvailable,
                            d = t.computes.isExtra(o.get()),
                            _ = t.computes.isHoliday(o.get()),
                            m = t.computes.hasChapterLogoBg(o.get()),
                            p = (0, r.useState)(!1),
                            E = p[0],
                            g = p[1],
                            b = c.get() && !(d || _),
                            v = i.get(),
                            h = (0, r.useRef)(!1),
                            f = (0, ve.GS)().mediaSize,
                            C = ((e) => ({
                                backgroundImage: `url(${(0, u.wD)(R.images.gui.maps.icons.battlePass.backgrounds.ip_purchase_confirmation, e)})`,
                            }))(o.get()),
                            w = (0, S.tv)();
                        (y.N.useHandleKeydown(F.n.ESCAPE, () => w.goBack()),
                            (0, ft.d)(a.buy),
                            (0, ht.gd)(F.n.SPACE, a.buy),
                            (0, r.useEffect)(() => {
                                if (h.current)
                                    return (
                                        g(!0),
                                        (0, be.F)(() => {
                                            g(!1);
                                        }, 800)
                                    );
                                h.current = !0;
                            }, [v, h]));
                        const D = f < ve.cJ.Medium ? dt.large : dt.extraLarge;
                        return s().createElement(
                            'div',
                            { className: ua },
                            s().createElement('div', { className: la, style: C }),
                            s().createElement(
                                'div',
                                { className: B()(ca, E && pa) },
                                !m &&
                                    s().createElement('div', {
                                        className: da,
                                        style: {
                                            backgroundImage: `url(${(0, u.wD)(R.images.gui.maps.icons.battlePass.buy.confirm.commander, o.get())})`,
                                        },
                                    }),
                                s().createElement(Ct.D, {
                                    className: _a,
                                    chapter: o.get(),
                                    buyBP: fa.confirm.title(),
                                    type: Ct.x.TransparentChapterName,
                                }),
                                l.get() > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: ma },
                                        s().createElement(
                                            'div',
                                            { className: Ea },
                                            s().createElement(
                                                bt,
                                                { size: D, isChecked: v, onClick: a.togglePurchaseWithLevels },
                                                s().createElement(vt.z, {
                                                    text: fa.confirm.checkbox.stage(l.get()),
                                                    binding: { stagesNumber: l.get() },
                                                    classMix: va,
                                                }),
                                            ),
                                        ),
                                    ),
                                E &&
                                    s().createElement(ea, {
                                        isCheckboxAnimationActive: E,
                                        className: ga,
                                        isPrevious: !0,
                                    }),
                                s().createElement(ea, { isCheckboxAnimationActive: E, className: ba }),
                                s().createElement(jt, { isPriceUpdateAnimation: E }),
                            ),
                            b && s().createElement(ia, { className: ha }),
                        );
                    }),
                    Aa = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyPass('resId') },
                    wa = (0, i.Pi)(() => {
                        const e = A(),
                            t = e.model,
                            a = e.controls,
                            i = t.main.state.get(),
                            _ = t.chaptersWithLogoBg
                                .get()
                                .map(
                                    (e) =>
                                        `${(0, u.wD)(R.images.gui.maps.icons.battlePass.backgrounds.ip_purchase_confirmation, e.value)}`,
                                );
                        switch (
                            ((0, o.b)(() => {
                                (0, l.ab)(_);
                            }),
                            (0, r.useEffect)(() => {
                                i === n && (t.priceID.get() && a.setPriceID(''), (0, l.ab)(_));
                            }, [a, t.priceID, i, _]),
                            i)
                        ) {
                            case n:
                                return s().createElement(lt, null);
                            case 'confirmState':
                                return s().createElement(Ca, null);
                            case 'rewardsState':
                                return s().createElement(c.k, { options: Aa }, s().createElement(d.$, null));
                            default:
                                return s().createElement(lt, null);
                        }
                    }),
                    Ba = () =>
                        s().createElement(
                            C,
                            { options: { rootId: R.aliases.battle_pass.BuyPass('resId') } },
                            s().createElement(wa, null),
                        );
            },
            666: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => re });
                var r = a(7363),
                    s = a.n(r),
                    n = a(3215),
                    o = a(4598),
                    i = a(9480),
                    u = a(3946);
                const l = (0, n.q3)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), slides: e.array('slides') },
                                a = (0, u.Om)(() => i.UI(t.slides.get(), (e, t) => ({ id: t, value: e })), {
                                    equals: o.jv,
                                });
                            return Object.assign({}, t, { computes: { getSlides: a } });
                        },
                        ({ externalModel: e }) => ({
                            confirm: e.createCallbackNoArgs('onClose'),
                            onVideo: e.createCallbackNoArgs('onVideo'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                        }),
                    ),
                    c = l[0],
                    d = l[1];
                var _ = a(5521),
                    m = a(3403),
                    p = a(8030),
                    E = a(6483),
                    g = a.n(E),
                    b = a(3457),
                    v = a(1856),
                    h = a(122),
                    f = a(5415),
                    C = a(7727),
                    A = a(3649);
                const w = 'DescriptionBlock_base_74',
                    B = 'DescriptionBlock_icon_bc',
                    D = 'DescriptionBlock_title_41',
                    y = 'DescriptionBlock_description_cf',
                    F = ({ icon: e, title: t, descr: a }) => {
                        const n = (0, r.useCallback)((e) => {
                            e.stopPropagation();
                        }, []);
                        return s().createElement(
                            'div',
                            { className: w, onClick: n },
                            s().createElement('div', { className: D }, t),
                            s().createElement('div', { className: B, style: { backgroundImage: `url(${e})` } }),
                            s().createElement('div', { className: y }, a && (0, A.z4)(a)),
                        );
                    };
                var P = a(9916),
                    S = a(8526),
                    N = a(7739);
                const k = {
                    base: 'Slider_base_31',
                    base__carousel: 'Slider_base__carousel_7b',
                    trackWrapper: 'Slider_trackWrapper_70',
                    track: 'Slider_track_6d',
                    base__withoutAnimation: 'Slider_base__withoutAnimation_51',
                    base__withoutPointer: 'Slider_base__withoutPointer_2b',
                    slide: 'Slider_slide_aa',
                    slide__active: 'Slider_slide__active_ef',
                    slide__carousel: 'Slider_slide__carousel_05',
                    slide__beforeActive: 'Slider_slide__beforeActive_06',
                    slide__afterActive: 'Slider_slide__afterActive_fb',
                    slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_e2',
                    slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_f6',
                    slide__leftEdge: 'Slider_slide__leftEdge_62',
                    slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_d9',
                    slide__rightEdge: 'Slider_slide__rightEdge_2e',
                    slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_e2',
                    prev: 'Slider_prev_0e',
                    next: 'Slider_next_fd',
                    prev__disabled: 'Slider_prev__disabled_82',
                    next__disabled: 'Slider_next__disabled_6d',
                    counter: 'Slider_counter_3a',
                    base__large: 'Slider_base__large_74',
                    counter__disabled: 'Slider_counter__disabled_26',
                    counterDivider: 'Slider_counterDivider_26',
                };
                function L(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                function x(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, s) {
                            var n = e.apply(t, a);
                            function o(e) {
                                L(n, r, s, o, i, 'next', e);
                            }
                            function i(e) {
                                L(n, r, s, o, i, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const I = (0, r.createContext)({}),
                    T = (0, r.memo)(
                        ({
                            children: e,
                            arrowsTopPosition: t,
                            carouselMode: a,
                            disabled: n,
                            withCounter: o,
                            onPrevSlide: i,
                            onNextSlide: u,
                        }) => {
                            const l = (0, r.useRef)(null),
                                c = (0, r.useContext)(N.YN),
                                d = c.medium || c.large || c.extraLarge,
                                m = (0, r.useState)(e),
                                p = m[0],
                                E = m[1],
                                b = (0, r.useState)(0),
                                v = b[0],
                                h = b[1],
                                f = (0, r.useState)(0),
                                A = f[0],
                                w = f[1],
                                B = (0, r.useState)(a ? 3 : 1),
                                D = B[0],
                                y = B[1],
                                F = (0, r.useState)(!1),
                                R = F[0],
                                L = F[1],
                                T = (0, r.useState)(!1),
                                O = T[0],
                                M = T[1],
                                $ = p.length,
                                W = 1 === D && !a,
                                H = D === $ && !a,
                                z = 1 !== $,
                                G = (0, r.useMemo)(() => ({ isAnimationDisabled: R }), [R]),
                                U = (function () {
                                    var e = x(function* () {
                                        if (l && l.current) {
                                            (L(!0), yield (0, P.Eu)());
                                            const e = viewEnv.getScale();
                                            (h(l.current.offsetWidth / e),
                                                w(l.current.querySelector(`.${k.slide__active}`).offsetWidth / e),
                                                setTimeout(() => {
                                                    L(!1);
                                                }, 100));
                                        }
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                            ((0, r.useEffect)(() => {
                                const t = [];
                                (p.map((a) => {
                                    const r = e.find((e) => e.key === a.key);
                                    r && t.push(r);
                                }),
                                    E(t));
                            }, [e]),
                                (0, r.useEffect)(() => {
                                    if (a) {
                                        const e = p.concat();
                                        (e.unshift(...e.splice(-2, p.length)), E(e));
                                    }
                                }, []),
                                (0, r.useEffect)(
                                    () => (
                                        U(),
                                        window.addEventListener('resize', U),
                                        () => {
                                            window.removeEventListener('resize', U);
                                        }
                                    ),
                                    [],
                                ));
                            const V = (0, r.useCallback)(
                                    x(function* () {
                                        W ||
                                            O ||
                                            n ||
                                            (a && M(!0),
                                            yield (0, P.Eu)(),
                                            i && i(),
                                            y(D - 1),
                                            a &&
                                                setTimeout(
                                                    x(function* () {
                                                        L(!0);
                                                        const e = p.concat();
                                                        (e.unshift(e.pop()),
                                                            E(e),
                                                            y(D),
                                                            yield (0, P.Eu)(),
                                                            L(!1),
                                                            M(!1));
                                                    }),
                                                    600,
                                                ),
                                            (0, C.G)('play'),
                                            (0, C.G)('bp_glide_01'));
                                    }),
                                    [D, y, W, a, i, p, O, n],
                                ),
                                j = (0, r.useCallback)(
                                    x(function* () {
                                        H ||
                                            O ||
                                            n ||
                                            (a && M(!0),
                                            yield (0, P.Eu)(),
                                            u && u(),
                                            y(D + 1),
                                            a &&
                                                setTimeout(
                                                    x(function* () {
                                                        L(!0);
                                                        const e = p.concat();
                                                        (e.push(e.shift()),
                                                            E(e),
                                                            y(D),
                                                            yield (0, P.Eu)(),
                                                            L(!1),
                                                            M(!1));
                                                    }),
                                                    600,
                                                ),
                                            (0, C.G)('play'),
                                            (0, C.G)('bp_glide_01'));
                                    }),
                                    [D, y, H, a, u, p, O, n],
                                ),
                                q = () => (0, C.G)('highlight');
                            ((0, S.gd)(_.n.ARROW_LEFT, V), (0, S.gd)(_.n.ARROW_RIGHT, j));
                            const Z = (0, r.useMemo)(() => (a ? { width: 'auto' } : { width: `${v}rem` }), [v, a]),
                                X = (0, r.useMemo)(
                                    () =>
                                        a
                                            ? { transform: `translateX(${-A * D + v / 2 + A / 2}rem)` }
                                            : { transform: `translateX(-${v * (D - 1)}rem)` },
                                    [v, A, D, a],
                                ),
                                Y = (0, r.useMemo)(() => (t ? { top: t } : {}), [t]),
                                K = g()(
                                    k.base,
                                    d && k.base__large,
                                    a && k.base__carousel,
                                    a && d && k.base__carouselLarge,
                                    R && k.base__withoutAnimation,
                                    O && k.base__withoutPointer,
                                ),
                                Q = g()(k.prev, W && k.prev__disabled),
                                J = g()(k.next, H && k.next__disabled),
                                ee = g()(k.counter, !z && k.counter__disabled);
                            return s().createElement(
                                'div',
                                { className: K },
                                z && s().createElement('div', { className: Q, onClick: V, onMouseEnter: q, style: Y }),
                                z && s().createElement('div', { className: J, onClick: j, onMouseEnter: q, style: Y }),
                                o &&
                                    s().createElement(
                                        'div',
                                        { className: ee },
                                        D,
                                        s().createElement('div', { className: k.counterDivider }, '/'),
                                        $,
                                    ),
                                s().createElement(
                                    'div',
                                    { className: k.trackWrapper, ref: l },
                                    s().createElement(
                                        'div',
                                        { className: k.track, style: X },
                                        p.map((e, t) => {
                                            const r = t + 2 === D,
                                                n = t === D;
                                            let o;
                                            n ? (o = j) : r && (o = V);
                                            let i = g()(k.slide, d && k.slide__large, t + 1 === D && k.slide__active);
                                            return (
                                                a &&
                                                    (i = g()(
                                                        k.slide,
                                                        k.slide__carousel,
                                                        d && k.slide__large,
                                                        t + 1 === D && k.slide__active,
                                                        r && k.slide__beforeActive,
                                                        r && d && k.slide__beforeActiveLarge,
                                                        n && k.slide__afterActive,
                                                        n && d && k.slide__afterActiveLarge,
                                                        t + 2 < D && k.slide__leftEdge,
                                                        t + 2 < D && d && k.slide__leftEdgeLarge,
                                                        t > D && k.slide__rightEdge,
                                                        t > D && d && k.slide__rightEdgeLarge,
                                                    )),
                                                s().createElement(
                                                    'div',
                                                    { className: i, key: `slide-${t}`, style: Z, onClick: o },
                                                    s().createElement(I.Provider, { value: G }, e),
                                                )
                                            );
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    O = 'IntroView_base_b9',
                    M = 'IntroView_title_6a',
                    $ = 'IntroView_base__video_bb',
                    W = 'IntroView_bg_d1',
                    H = 'IntroView_shadow_d5',
                    z = 'IntroView_video_c4',
                    G = 'IntroView_videoIcon_b2',
                    U = 'IntroView_videoText_0b',
                    V = 'IntroView_content_cc',
                    j = 'IntroView_base__high_98',
                    q = 'IntroView_bottomContainer_1f',
                    Z = 'IntroView_buttonWrapper_bb',
                    X = 'IntroView_close_2d',
                    Y = '220rem',
                    K = '300rem',
                    Q = {
                        [f.cJ.ExtraSmall]: Y,
                        [f.cJ.Small]: Y,
                        [f.cJ.Medium]: '250rem',
                        [f.cJ.Large]: K,
                        [f.cJ.ExtraLarge]: K,
                    },
                    J = ({
                        title: e,
                        about: t,
                        buttonLabel: a,
                        slides: n,
                        onClose: o,
                        onVideo: i,
                        onViewLoaded: u,
                        backgroundLink: l = '',
                        isBlurred: c = !1,
                        classNames: d,
                    }) => {
                        const _ = (0, r.useState)(!1),
                            m = _[0],
                            p = _[1],
                            E = (0, r.useState)(!1),
                            A = E[0],
                            w = E[1],
                            B = (0, f.GS)(),
                            D = B.mediaSize,
                            y = B.mediaWidth,
                            P = B.mediaHeight,
                            S = Q[D],
                            N = P >= f.Aq.Medium && y <= f.fd.Small,
                            k = P <= f.Aq.Small ? b.qE.small : b.qE.medium,
                            R = g()(O, N && j, m && $);
                        (0, r.useEffect)(
                            () =>
                                (0, v.v)(() => {
                                    A || (u(), w(!0));
                                }),
                            [A, u],
                        );
                        const L = (0, r.useCallback)(() => {
                            o();
                        }, [o]);
                        (0, r.useEffect)(() => {
                            if (m)
                                return (0, h.F)(() => {
                                    (i(), p(!1));
                                }, 1e3);
                        }, [m, i]);
                        return s().createElement(
                            'div',
                            { className: R, style: { backgroundImage: `url(${l})` } },
                            c &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: W, style: { backgroundImage: `url(${l})` } }),
                                    s().createElement('div', { className: g()(H, null == d ? void 0 : d.shadow) }),
                                ),
                            s().createElement('span', { className: M }, e),
                            s().createElement(
                                'div',
                                {
                                    className: z,
                                    onClick: () => {
                                        ((0, C.G)('play'), p(!0));
                                    },
                                    onMouseEnter: C.$.playHighlight,
                                },
                                s().createElement('div', { className: G }),
                                s().createElement('div', { className: U }, t),
                            ),
                            s().createElement(
                                'div',
                                { className: V },
                                s().createElement(
                                    T,
                                    { arrowsTopPosition: S, withCounter: !0 },
                                    n.map(
                                        ({ value: e }, t) =>
                                            e &&
                                            s().createElement(F, {
                                                icon: e.icon,
                                                title: e.title,
                                                descr: e.description,
                                                key: t,
                                            }),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: q },
                                s().createElement(
                                    'div',
                                    { className: Z },
                                    s().createElement(
                                        b.u5,
                                        { type: b.L$.primary, size: k, mixClass: X, onClick: L },
                                        a,
                                    ),
                                ),
                            ),
                        );
                    };
                var ee = a(5831),
                    te = a(6444);
                const ae = (0, m.Pi)(() => {
                        const e = (0, te.tv)(),
                            t = d(),
                            a = t.model,
                            r = t.controls,
                            n = a.root.get(),
                            o = n.title,
                            i = n.about,
                            u = n.buttonLabel,
                            l = n.background,
                            c = a.computes.getSlides(),
                            m = l || 'R.images.gui.maps.icons.battlePass.backgrounds.common',
                            E = () => {
                                (r.confirm(), e.push(ee._.battlePass.chapterChoice));
                            };
                        return (
                            p.N.useHandleKeydown(_.n.ESCAPE, () => E()),
                            s().createElement(J, {
                                title: o,
                                about: i,
                                buttonLabel: u,
                                slides: c,
                                onClose: E,
                                onVideo: r.onVideo,
                                onViewLoaded: r.onViewLoaded,
                                backgroundLink: m,
                                isBlurred: !0,
                            })
                        );
                    }),
                    re = () =>
                        s().createElement(
                            c,
                            { options: { rootId: R.aliases.battle_pass.Intro('resId') } },
                            s().createElement(ae, null),
                        );
            },
            8046: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => cn });
                var r = a(7363),
                    s = a.n(r),
                    n = a(1856),
                    o = a(5521),
                    i = a(7727),
                    u = a(3403),
                    l = a(8030),
                    c = a(6444);
                let d, _, m;
                (!(function (e) {
                    ((e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted'));
                })(d || (d = {})),
                    (function (e) {
                        ((e.NoAction = 'noAction'),
                            (e.Buy = 'buy'),
                            (e.BuyLevel = 'buyLevel'),
                            (e.ActivateChapter = 'activateChapter'));
                    })(_ || (_ = {})),
                    (function (e) {
                        ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'));
                    })(m || (m = {})));
                var p = a(3215),
                    E = a(4598),
                    g = a(9480),
                    b = a(3946),
                    v = a(2893);
                let h, f, C, A, w;
                (!(function (e) {
                    ((e.left = 'left'), (e.right = 'right'));
                })(h || (h = {})),
                    (function (e) {
                        ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'));
                    })(f || (f = {})),
                    (function (e) {
                        ((e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward'));
                    })(C || (C = {})),
                    (function (e) {
                        ((e.back = 'back'), (e.forward = 'forward'));
                    })(A || (A = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Gray = 'gray'));
                    })(w || (w = {})));
                const B = [d.Active, d.Completed],
                    D = (0, p.q3)()(
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
                                a = (0, b.Om)(() => g.UI(t.freeFinalRewards.get(), E.yR), { equals: E.jv }),
                                r = (0, b.Om)(() => g.UI(t.paidFinalRewards.get(), E.yR), { equals: E.jv }),
                                s = (0, b.Om)(() => t.root.get().chapterType === m.HOLIDAY),
                                n = (0, b.Om)(() =>
                                    Object.assign(
                                        { freeFinalRewards: (0, v.at)(a()) },
                                        r().length && { paidFinalRewards: (0, v.at)(r()) },
                                    ),
                                ),
                                o = (0, b.Om)(() => {
                                    const e = n(),
                                        t = e.freeFinalRewards;
                                    return !(!e.paidFinalRewards && t.mainReward === v.Hj.progressiveStyle);
                                }),
                                i = (0, b.Om)(() => t.root.get().chapterType === m.EXTRA),
                                u = (0, b.Om)(() => !(s() || i()), { equals: E.jv }),
                                l = (0, b.Om)(() => t.price.get().prices.length > 1),
                                c = (0, b.Om)((e) => (e ? t.paidTankmanInfo.get() : t.freeTankmanInfo.get())),
                                _ = (0, b.Om)((e) => {
                                    const a = t.levels.get(),
                                        r = g.MH(a, e - 1);
                                    return (
                                        r || console.warn(`level info not found for number: ${e}`),
                                        Object.assign({}, r, { maxLevel: a.length })
                                    );
                                }),
                                p = (0, b.Om)((e, t) => {
                                    const a = _(e);
                                    return t
                                        ? g.UI(a.freeRewardItems.items, (e) => Object.assign({}, e))
                                        : g.UI(a.paidRewardItems.items, (e) => Object.assign({}, e));
                                }),
                                h = (0, b.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.freePointsInLevel,
                                        r = e.currentPointsInLevel,
                                        s = e.chapterState,
                                        n = e.hasExtra,
                                        o = B.includes(s) || n ? r : a,
                                        i = _(1);
                                    return { current: o, total: null == i ? void 0 : i.levelPoints };
                                }),
                                C = (0, b.Om)((e, a) => {
                                    const r = t.root.get(),
                                        s = r.chapterState,
                                        n = r.currentLevel,
                                        o = r.potentialLevel,
                                        i = r.currentPointsInChapter,
                                        u = r.freePointsInChapter,
                                        l = _(e),
                                        c = l.levelPoints,
                                        m = l.maxLevel,
                                        p = a ? u : i,
                                        E = a ? o : n;
                                    return e < E || (E === m && p === c * m)
                                        ? f.COMPLETED
                                        : e === E && (s !== d.NotStarted || p > 0)
                                          ? f.IN_PROGRESS
                                          : f.NOT_STARTED;
                                }),
                                A = (0, b.Om)((e, a, r, s) => {
                                    const n = t.root.get();
                                    return ((n.currentLevel - 1) * e + (n.currentPointsInLevel / s) * a) / r;
                                }),
                                w = (0, b.Om)(() => {
                                    const e = t.levels.get();
                                    return e[e.length - 1].value.levelPoints;
                                }),
                                D = (0, b.Om)((e, t) => {
                                    const a = _(e),
                                        r = a.needTakeFree,
                                        s = a.needTakePaid;
                                    return t ? s : r;
                                }),
                                y = (0, b.Om)((e, a) => {
                                    const r = t.root.get(),
                                        s = r.isBattlePassPurchased,
                                        n = r.chapterState,
                                        o = _(e),
                                        i = C(e, !1);
                                    return {
                                        cardStatus: { current: i, potential: C(e, !0) },
                                        isRare: o.isRare && i !== f.IN_PROGRESS,
                                        isDisabled: (a && !s) || (n !== d.Active && i === f.NOT_STARTED),
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    isMulticurrency: l,
                                    getFreeFinalRewards: a,
                                    getPaidFinalRewards: r,
                                    regularBattlePass: u,
                                    getFinalRewardTankmanInfo: c,
                                    currentLevelPoints: h,
                                    levelInfo: _,
                                    levelRewardItems: p,
                                    getCurrentWidth: A,
                                    getTotalLevelPoints: w,
                                    isRewardNeedTake: D,
                                    cardStates: y,
                                    isLayoutWithExtraWidget: o,
                                    getFinalRewardsDescription: n,
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
                    y = D[0],
                    F = D[1];
                var P = a(6483),
                    S = a.n(P),
                    N = a(9485);
                const k = 'BattlePassProgressionsViewContent_base_67',
                    L = 'BattlePassProgressionsViewContent_base__extra_e2',
                    x = 'BattlePassProgressionsViewContent_base__extraChapter_17',
                    I = 'BattlePassProgressionsViewContent_header_76',
                    T = 'BattlePassProgressionsViewContent_progression_7c',
                    O = 'BattlePassProgressionsViewContent_progression__extraChapter_01',
                    M = 'BattlePassProgressionsViewContent_extraChapterWidget_e2',
                    $ = 'BattlePassProgressionsViewContent_footer_13';
                var W = a(9766),
                    H = a(2828),
                    z = a(6373),
                    G = a(2056),
                    U = a(7994),
                    V = a(2039),
                    j = a(3649),
                    q = a(9916);
                const Z = 'AdditionalRewardInfo_rewardText_6f',
                    X = 'AdditionalRewardInfo_subTitle_89',
                    Y = 'AdditionalRewardInfo_subTitleTextWrapper_cf',
                    K = 'AdditionalRewardInfo_subTitleText_bb',
                    Q = 'AdditionalRewardInfo_subTitleText__truncated_9f',
                    J = 'AdditionalRewardInfo_infoIcon_33';
                function ee(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                function te(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, s) {
                            var n = e.apply(t, a);
                            function o(e) {
                                ee(n, r, s, o, i, 'next', e);
                            }
                            function i(e) {
                                ee(n, r, s, o, i, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                const ae = R.strings.battle_pass.progression.extraChapterWidget,
                    re = (0, u.Pi)(({ additionalReward: e }) => {
                        const t = F().model,
                            a = t.widgetFinalRewards,
                            n = t.styleInfo,
                            o = t.vehicleInfo.get().vehicleName,
                            i = a.get().battleQuest,
                            u = (0, r.useState)(!1),
                            l = u[0],
                            c = u[1],
                            d = (0, r.useRef)(null),
                            _ = (0, r.useCallback)(
                                te(function* () {
                                    yield (0, q.Eu)();
                                    const e = d.current;
                                    e && c(e.scrollWidth > e.offsetWidth);
                                }),
                                [],
                            );
                        return (
                            (0, V.b)(
                                () => (
                                    _(),
                                    engine.on('clientResized', _),
                                    () => {
                                        engine.off('clientResized', _);
                                    }
                                ),
                            ),
                            s().createElement(
                                s().Fragment,
                                null,
                                e === v.Hj.style &&
                                    s().createElement(W.z, {
                                        classMix: Z,
                                        text: ae.vehicleSubTitle(),
                                        binding: { styleName: n.get().styleName },
                                    }),
                                e === v.Hj.battleQuest &&
                                    s().createElement(
                                        G.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: i },
                                        },
                                        s().createElement(
                                            'div',
                                            { className: X },
                                            s().createElement(
                                                'div',
                                                { className: Y },
                                                s().createElement(
                                                    'div',
                                                    { className: S()(K, l && Q), ref: d },
                                                    (0, j.uF)(ae.styleSubTitle(), { vehicleName: o }),
                                                ),
                                            ),
                                            s().createElement('div', { className: J }),
                                        ),
                                    ),
                            )
                        );
                    }),
                    se = 'StyleDescription_rewardTitle_81',
                    ne = 'StyleDescription_rewardTitle__singleReward_e6',
                    oe = 'StyleDescription_title_60',
                    ie = 'StyleDescription_title__singleReward_4b',
                    ue = 'StyleDescription_vehicleTitle_f3',
                    le = 'StyleDescription_vehicleName_42',
                    ce = 'StyleDescription_vehicleTypeIcon_f7',
                    de = 'StyleDescription_vehicleInHangar_7a',
                    _e = 'StyleDescription_remark_0e',
                    me = 'StyleDescription_lockIcon_35';
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const Ee = R.strings.battle_pass.progression.extraChapterWidget,
                    ge = (0, u.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = F(),
                            r = a.model,
                            n = r.styleInfo,
                            o = r.vehicleInfoFromStyle,
                            i = r.root,
                            u = r.computes,
                            l = a.controls,
                            c = i.get().isBattlePassPurchased,
                            d = n.get(),
                            _ = d.styleName,
                            m = d.isVehicleInHangar,
                            p = u.getPaidFinalRewards().length;
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(H.h, { type: 'preview', size: 'normal', onClick: l.openPreview }),
                            s().createElement(
                                'div',
                                { className: S()(se, !p && ne) },
                                p ? Ee.style3DTitle() : Ee.styleTitle(),
                            ),
                            s().createElement(W.z, {
                                classMix: S()(oe, !p && ie),
                                text: Ee.styleName(),
                                binding: { styleName: _ },
                            }),
                            !p &&
                                s().createElement(
                                    'div',
                                    { className: ue },
                                    s().createElement(W.z, {
                                        text: Ee.forLabel(),
                                        binding: {
                                            vehicleName: s().createElement(
                                                U.U4,
                                                pe({}, o.get(), {
                                                    type: U.b0.whiteOrange,
                                                    className: le,
                                                    classNames: { typeIcon: ce },
                                                }),
                                            ),
                                        },
                                    }),
                                    m &&
                                        s().createElement(
                                            z.i,
                                            { body: Ee.inHangarTooltip() },
                                            s().createElement('div', { className: de }),
                                        ),
                                ),
                            e && s().createElement(re, { additionalReward: e }),
                            t &&
                                !c &&
                                s().createElement(
                                    G.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: _e },
                                        s().createElement('div', { className: me }),
                                        s().createElement('div', null, Ee.styleRemark()),
                                    ),
                                ),
                        );
                    });
                var be = a(3457),
                    ve = a(734);
                const he = 'TankmanDescription_title_56',
                    fe = 'TankmanDescription_title__noVoice_6e',
                    Ce = 'TankmanDescription_name_8a',
                    Ae = 'TankmanDescription_skills_11',
                    we = 'TankmanDescription_skill_2d',
                    Be = 'TankmanDescription_skill__paidReward_6e',
                    De = 'TankmanDescription_description_78',
                    ye = 'TankmanDescription_lockIcon_88',
                    Fe = 'TankmanDescription_lockText_99',
                    Pe = 'TankmanDescription_showCommander_56',
                    Se = 'TankmanDescription_close_71';
                var Ne = a(122),
                    ke = a(5689);
                const Re = 'Voice_base_7e',
                    Le = 'Voice_icon_41',
                    xe = 'Voice_icon__speaker_d2',
                    Ie = 'Voice_icon__wave0_6b',
                    Te = 'Voice_base__animate_82',
                    Oe = 'Voice_icon__wave1_a6',
                    Me = 'Voice_icon__wave2_32',
                    $e = R.strings.battle_pass.progression.extraChapterWidget,
                    We = (() => {
                        const e = Math.ceil(ke.k9 / 800);
                        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
                    })(),
                    He = ({ groupName: e }) => {
                        const t = (0, r.useState)(!1),
                            a = t[0],
                            n = t[1],
                            o = (0, r.useCallback)(() => {
                                a || ((0, i.G)(R.sounds.play()), (0, i.G)(e), n(!0));
                            }, [a, e]);
                        return (
                            (0, r.useEffect)(() => {
                                a &&
                                    (0, Ne.F)(() => {
                                        n(!1);
                                    }, We.totalDuration);
                            }, [a]),
                            s().createElement(
                                z.i,
                                { body: $e.voiceoverTooltip() },
                                s().createElement(
                                    'div',
                                    {
                                        className: S()(Re, a && Te),
                                        onClick: o,
                                        onMouseEnter: () => {
                                            (0, i.G)(R.sounds.bp_highlight());
                                        },
                                        style: {
                                            '--animation-duration': `${We.duration}ms`,
                                            '--animation-iteration-count': We.iterationCount,
                                        },
                                    },
                                    s().createElement('div', { className: S()(Le, xe) }),
                                    s().createElement('div', { className: S()(Le, Ie) }),
                                    s().createElement('div', { className: S()(Le, Oe) }),
                                    s().createElement('div', { className: S()(Le, Me) }),
                                ),
                            )
                        );
                    },
                    ze = R.strings.battle_pass.progression.extraChapterWidget,
                    Ge = R.strings.battle_pass.awardsWidget.description.commander(),
                    Ue = (0, u.Pi)(({ isPaidReward: e }) => {
                        const t = F(),
                            a = t.model,
                            r = t.controls,
                            n = a.root.get(),
                            o = n.tankmenScreenID,
                            i = n.isBattlePassPurchased,
                            u = a.computes.getFinalRewardTankmanInfo(e),
                            l = u.tankman,
                            c = u.hasVoice,
                            d = u.skills,
                            _ = u.groupName,
                            m = a.computes.getFinalRewardsDescription(),
                            p = m.freeFinalRewards,
                            E = m.paidFinalRewards,
                            g = p.mainReward === v.Hj.tankman && (null == E ? void 0 : E.mainReward) === v.Hj.tankman;
                        return s().createElement(
                            s().Fragment,
                            null,
                            c && s().createElement(He, { groupName: _ }),
                            s().createElement('div', { className: S()(he, !c && fe) }, ze.tankman()),
                            s().createElement('div', { className: Ce }, l),
                            d.length > 0 &&
                                s().createElement(
                                    'div',
                                    { className: Ae },
                                    s().createElement(ve.C, { skills: d, className: S()(we, e && Be) }),
                                ),
                            e &&
                                !i &&
                                s().createElement(
                                    G.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: De },
                                        s().createElement('div', { className: ye }),
                                        s().createElement('div', { className: Fe }, ze.labelWithBP()),
                                    ),
                                ),
                            Boolean(o) &&
                                !g &&
                                s().createElement(
                                    z.i,
                                    { body: Ge, isEnabled: Boolean(Ge) },
                                    s().createElement(
                                        'div',
                                        { className: Pe },
                                        s().createElement(
                                            be.u5,
                                            {
                                                type: be.L$.ghost,
                                                size: be.qE.small,
                                                mixClass: Se,
                                                onClick: r.showTankmen,
                                            },
                                            ze.commanderVoices(),
                                        ),
                                    ),
                                ),
                        );
                    });
                var Ve = a(7044),
                    je = a(2344);
                const qe = (e) => (e < 10 ? '0' + e : e),
                    Ze = 'Timer_base_0c',
                    Xe = 'Timer_light_02',
                    Ye = 'Timer_icon_c5',
                    Ke = 'Timer_value_1c',
                    Qe = ({ expireTime: e = 0 }) => {
                        const t = (0, je.au)(e, 1),
                            a = `${(r = (0, Ve.f8)(t)).days ? (0, j.WU)(R.strings.common.duration.days(), { days: r.days }) : ''} ${qe(r.hours)} : ${qe(r.minutes)} : ${qe(r.seconds)}`;
                        var r;
                        return s().createElement(
                            z.i,
                            { body: R.strings.battle_pass.progression.extraChapterWidget.timer() },
                            s().createElement(
                                'div',
                                { className: Ze },
                                s().createElement('div', { className: Ye }),
                                s().createElement('div', { className: Ke }, a),
                                s().createElement('div', { className: Xe }),
                                s().createElement('div', { className: Xe }),
                            ),
                        );
                    };
                var Je = a(5415);
                const et = {
                    vehicleBg: 'VehicleDescription_vehicleBg_26',
                    vehicleBg__description: 'VehicleDescription_vehicleBg__description_96',
                    vehicleCaption: 'VehicleDescription_vehicleCaption_d5',
                    description: 'VehicleDescription_description_58',
                    rewardLabel: 'VehicleDescription_rewardLabel_95',
                    rewardDescription: 'VehicleDescription_rewardDescription_26',
                    rewardLockIcon: 'VehicleDescription_rewardLockIcon_b5',
                    rewardLockText: 'VehicleDescription_rewardLockText_b3',
                };
                var tt = a(9690);
                const at = 'VehicleInfo_base_ef',
                    rt = 'VehicleInfo_type_40',
                    st = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: r, classNames: n }) =>
                        s().createElement(
                            'div',
                            { className: S()(at, null == n ? void 0 : n.base) },
                            (0, tt.cg)(e),
                            s().createElement('div', {
                                className: S()(rt, null == n ? void 0 : n.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, j.BN)(a)}${r ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    nt = R.strings.battle_pass.progression.extraChapterWidget,
                    ot = (0, u.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = F(),
                            r = a.model,
                            n = r.vehicleInfo,
                            o = r.root,
                            i = r.computes,
                            u = a.controls,
                            l = n.get(),
                            c = l.vehicleType,
                            d = l.isElite,
                            _ = l.vehicleName,
                            m = l.vehicleShortName,
                            p = l.vehicleLvl,
                            E = l.vehicleNation,
                            g = (0, Je.GS)().mediaSize,
                            b = o.get(),
                            v = b.isBattlePassPurchased,
                            h = b.seasonNum,
                            f = i.getPaidFinalRewards().length,
                            C = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${E})` },
                            A = g > Je.cJ.Medium ? 14 : 12,
                            w = _.length > A ? m : _,
                            B = nt.tank.description.$num(h);
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement('div', {
                                className: S()(et.vehicleBg, !f && et.vehicleBg__description),
                                style: C,
                            }),
                            s().createElement(H.h, { type: 'preview', size: 'normal', onClick: u.openPreview }),
                            s().createElement('div', { className: et.vehicleCaption }, nt.vehicleCaption()),
                            s().createElement(st, {
                                classNames: { base: et.vehicleInfo },
                                vehicleLvl: p,
                                vehicleName: w,
                                vehicleType: c,
                                isElite: d,
                            }),
                            !f &&
                                B &&
                                s().createElement(
                                    'div',
                                    { className: et.description },
                                    s().createElement(W.z, { text: B }),
                                ),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: et.rewardLabel },
                                    s().createElement(re, { additionalReward: e }),
                                ),
                            t &&
                                !v &&
                                s().createElement(
                                    G.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    s().createElement(
                                        'div',
                                        { className: et.rewardDescription },
                                        s().createElement('div', { className: et.rewardLockIcon }),
                                        s().createElement('div', { className: et.rewardLockText }, nt.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    it = 'ExtraChapterWidget_base_61',
                    ut = 'ExtraChapterWidget_widgetWrapper_00',
                    lt = 'ExtraChapterWidget_base__styleReward_78',
                    ct = 'ExtraChapterWidget_glow_e7',
                    dt = 'ExtraChapterWidget_glow__styleReward_40',
                    _t = 'ExtraChapterWidget_content_a7',
                    mt = 'ExtraChapterWidget_content__left_be',
                    pt = 'ExtraChapterWidget_content__singleReward_5f',
                    Et = 'ExtraChapterWidget_separatorBg_ab',
                    gt = 'ExtraChapterWidget_timer_9b',
                    bt = 'Separator_base_c5',
                    vt = 'Separator_separatorBg_28',
                    ht = ({ classNames: e }) =>
                        s().createElement(
                            'div',
                            { className: S()(bt, null == e ? void 0 : e.base) },
                            s().createElement('div', { className: S()(vt, null == e ? void 0 : e.separatorBg) }),
                        );
                function ft() {
                    return (
                        (ft =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ft.apply(this, arguments)
                    );
                }
                const Ct = { [v.Hj.tankman]: Ue, [v.Hj.vehicle]: ot, [v.Hj.style]: ge },
                    At = ({ mainReward: e, additionalReward: t }, a) => {
                        const r = Ct[e];
                        return r
                            ? s().createElement(r, ft({ additionalReward: t }, a))
                            : (console.warn('Unknown final reward type:', e), null);
                    },
                    wt = (0, u.Pi)(() => {
                        const e = F().model,
                            t = e.root,
                            a = e.computes,
                            r = t.get().timeLeft,
                            n = a.getFinalRewardsDescription(),
                            o = n.freeFinalRewards,
                            i = n.paidFinalRewards,
                            u = a.regularBattlePass(),
                            l = !i && o.mainReward === v.Hj.style;
                        return s().createElement(
                            'div',
                            { className: S()(it, l && lt) },
                            s().createElement(
                                'div',
                                { className: ut },
                                s().createElement('div', { className: S()(ct, l && dt) }),
                                s().createElement('div', { className: S()(_t, !i && pt) }, At(o, { isPaidReward: !1 })),
                                i &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(ht, { classNames: { separatorBg: Et } }),
                                        s().createElement(
                                            'div',
                                            { className: S()(_t, mt) },
                                            At(i, { isPaidReward: !0 }),
                                        ),
                                    ),
                            ),
                            !u && s().createElement('div', { className: gt }, s().createElement(Qe, { expireTime: r })),
                        );
                    });
                var Bt = a(5831);
                const Dt = {
                        base: 'Footer_base_5e',
                        light: 'Footer_light_19',
                        light__red: 'Footer_light__red_67',
                        light__green: 'Footer_light__green_ec',
                        buttonWrapper: 'Footer_buttonWrapper_fc',
                        buttonWrapper__multiCurrency: 'Footer_buttonWrapper__multiCurrency_df',
                        multicurrencyIcon: 'Footer_multicurrencyIcon_bc',
                        button: 'Footer_button_80',
                        labelContainer: 'Footer_labelContainer_43',
                        label: 'Footer_label_2a',
                        days: 'Footer_days_5e',
                        points: 'Footer_points_af',
                        status: 'Footer_status_b0',
                        info: 'Footer_info_a4',
                        infoHover: 'Footer_infoHover_81',
                        blink: 'Footer_blink_bc',
                        move: 'Footer_move_b0',
                    },
                    yt = R.strings.battle_pass.progression,
                    Ft = R.strings.battle_pass.tooltips.footerBuyBtn,
                    Pt = R.strings.battle_pass.tooltips.progression,
                    St = (e, t) =>
                        e
                            ? t
                                ? yt.activatePausedExtraChapterDescr()
                                : yt.activateExtraChapterDescr()
                            : yt.activateChapterDescr();
                let Nt;
                !(function (e) {
                    ((e.Red = 'red'), (e.Green = 'green'), (e.None = ''));
                })(Nt || (Nt = {}));
                const kt = (0, u.Pi)(() => {
                    const e = F(),
                        t = e.model,
                        a = e.controls,
                        r = (0, c.tv)(),
                        n = t.root.get(),
                        o = n.actionType,
                        i = n.chapterType,
                        u = n.hasExtra,
                        l = n.isSeasonEndingSoon,
                        p = n.freePointsInChapter,
                        E = n.currentPointsInChapter,
                        g = n.chapterState,
                        b = n.timeLeft,
                        h = n.chapterID,
                        f = i === m.EXTRA,
                        C = i === m.HOLIDAY,
                        A = g === d.Paused,
                        w = p - E,
                        B = o === _.ActivateChapter && w > 0,
                        D = o !== _.ActivateChapter && l,
                        y = t.computes.isMulticurrency() && o === _.Buy,
                        P = ((e) => {
                            switch (e) {
                                case _.Buy:
                                    return {
                                        buyBtnLabel: yt.battlePassBuyBtn(),
                                        tooltip: Ft.battlePass.descr(),
                                        label: C ? yt.battlePassBuyHolidayDescr() : yt.battlePassBuyDescr(),
                                        warning: yt.seasonEndingDescr(),
                                        buttonType: be.L$.main,
                                        lightColor: Nt.Red,
                                        route: C ? Bt._.battlePass.buyPassConfirm : Bt._.battlePass.buyPass,
                                        params: {},
                                    };
                                case _.BuyLevel:
                                    return {
                                        buyBtnLabel: yt.episodeBuyBtn(),
                                        tooltip: C ? Ft.episode.holidayDescr() : Ft.episode.descr(),
                                        label: yt.episodeBuyDescr(),
                                        warning: yt.seasonEndingDescr(),
                                        buttonType: be.L$.main,
                                        lightColor: Nt.None,
                                        route: Bt._.battlePass.buyLevels,
                                        params: { chapterID: h },
                                    };
                                case _.ActivateChapter:
                                    return {
                                        buyBtnLabel: yt.activateChapter(),
                                        tooltip: Ft.activateChapter.descr(),
                                        label: St(f, A),
                                        warning: yt.footer.freePointsDescr(),
                                        buttonType: be.L$.primary,
                                        lightColor: Nt.Green,
                                        route: '',
                                        params: {},
                                    };
                                default:
                                    return {
                                        buyBtnLabel: '',
                                        tooltip: '',
                                        label: '',
                                        warning: '',
                                        buttonType: be.L$.ghost,
                                        lightColor: Nt.Green,
                                        route: '',
                                        params: {},
                                    };
                            }
                        })(o),
                        N = P.buyBtnLabel,
                        k = P.tooltip,
                        R = P.label,
                        L = P.warning,
                        x = P.buttonType,
                        I = P.lightColor,
                        T = P.route,
                        O = P.params,
                        M = B || D ? L : R,
                        $ = (0, v.u6)(b);
                    return s().createElement(
                        'div',
                        { className: Dt.base },
                        s().createElement('div', { className: S()(Dt.light, Dt[`light__${I}`]) }),
                        s().createElement(
                            'div',
                            { className: Dt.labelContainer },
                            A && s().createElement('div', { className: Dt.status }, yt.footer.status.paused()),
                            s().createElement('div', { className: Dt.label }, M),
                            D && s().createElement('div', { className: Dt.days }, $),
                            B &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Dt.points }, w),
                                    s().createElement(
                                        'div',
                                        { className: Dt.info },
                                        s().createElement(
                                            z.i,
                                            {
                                                header: Pt.freePoints.header(),
                                                body: u ? Pt.freePoints.bodyExceptExtra() : Pt.freePoints.body(),
                                            },
                                            s().createElement('div', { className: Dt.infoHover }),
                                        ),
                                    ),
                                ),
                        ),
                        s().createElement(
                            'div',
                            { className: S()(Dt.buttonWrapper, y && Dt.buttonWrapper__multiCurrency) },
                            s().createElement(
                                z.i,
                                { body: k },
                                s().createElement(
                                    be.u5,
                                    {
                                        type: x,
                                        size: be.qE.medium,
                                        mixClass: Dt.button,
                                        onClick: () => {
                                            o === _.ActivateChapter
                                                ? a.chapterActivate()
                                                : T && r.push(T, { chapterID: O.chapterID || void 0, reset: O.reset });
                                        },
                                    },
                                    D && s().createElement('div', { className: Dt.blink }),
                                    N,
                                ),
                            ),
                            y &&
                                s().createElement(
                                    z.i,
                                    { body: yt.footer.multicurrencyTooltip() },
                                    s().createElement('div', { className: Dt.multicurrencyIcon }),
                                ),
                        ),
                    );
                });
                var Rt = a(6724),
                    Lt = a(8089),
                    xt = a(615),
                    It = a(8596),
                    Tt = a(8546),
                    Ot = a(7739),
                    Mt = a(5262);
                function $t(e, t, a) {
                    const s = (0, r.useContext)(Ot.YN);
                    let n = Object.entries(s).filter(([e, t]) => !0 === t && e in Mt.u);
                    return (
                        a && (n = n.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const r = n.map((e) =>
                                S()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, j.e)(t))(a, e[0])]),
                            );
                            return ((e[a] = S()(t[a], ...r)), e);
                        }, {})
                    );
                }
                const Wt = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let Ht;
                !(function (e) {
                    ((e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info'));
                })(Ht || (Ht = {}));
                (0, r.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: a,
                        children: n,
                        leftSubText: o,
                        leftButtonType: i,
                        onClose: u,
                        onLeftButtonClick: l,
                        isHideButtons: c = !1,
                    }) => {
                        const d = $t(['leftBlock', 'rightBlock'], Wt),
                            _ = (0, r.useState)(c),
                            m = _[0],
                            p = _[1];
                        (0, r.useEffect)(() => p(!c), [c]);
                        const E = (0, r.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            g = S()(Wt.container, m && Wt.container__shown);
                        return s().createElement(
                            'div',
                            { className: Wt.base, style: E },
                            s().createElement(
                                'div',
                                { className: g },
                                Boolean(a) &&
                                    s().createElement(
                                        'div',
                                        { className: d.leftBlock },
                                        s().createElement(Lt.A, {
                                            caption: a || '',
                                            goto: o,
                                            type: i,
                                            side: 'left',
                                            onClick: l,
                                        }),
                                    ),
                                Boolean(t) &&
                                    s().createElement(
                                        'div',
                                        { className: d.rightBlock },
                                        s().createElement(Lt.A, {
                                            caption: t || '',
                                            type: 'close',
                                            side: 'right',
                                            onClick: u,
                                        }),
                                    ),
                            ),
                            s().createElement('div', { className: Wt.view }, n),
                        );
                    },
                );
                var zt = a(2432);
                const Gt = 'Header_base_6a',
                    Ut = 'Header_labels_ec',
                    Vt = 'Header_title_3d',
                    jt = 'Header_chapterWrapper_6c',
                    qt = 'Header_chapterText_57',
                    Zt = 'Header_chapterText__overflow_ce',
                    Xt = 'Header_chapterStatus_2e',
                    Yt = 'Header_date_f2',
                    Kt = 'Header_titleButtons_e8',
                    Qt = 'Header_titleButton_5f',
                    Jt = 'Header_logo_84',
                    ea = 'Header_awards_92',
                    ta = 'Header_flag_3d',
                    aa = 'Header_flag__isChapterChosen_ea',
                    ra = 'Header_flag__isChapterNotChosen_d8',
                    sa = 'Header_emblem_56',
                    na = 'Header_emblem__isChapterNotChosen_fd',
                    oa = 'Header_chapterLogoIcon_6b';
                function ia(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                function ua(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, s) {
                            var n = e.apply(t, a);
                            function o(e) {
                                ia(n, r, s, o, i, 'next', e);
                            }
                            function i(e) {
                                ia(n, r, s, o, i, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                let la;
                !(function (e) {
                    ((e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium'));
                })(la || (la = {}));
                const ca = R.strings.battle_pass,
                    da = 'auto',
                    _a = (0, u.Pi)(() => {
                        const e = F(),
                            t = e.controls,
                            a = e.model.root.get(),
                            n = a.chapterID,
                            o = a.chapterState,
                            i = a.seasonNum,
                            u = a.expireTime,
                            l = a.currentLevel,
                            c = a.isBattlePassPurchased,
                            _ = a.currentPointsInChapter,
                            p = a.timeLeft,
                            E = a.chapterType,
                            g = [d.NotStarted, d.Paused],
                            b = (0, r.useState)(!1),
                            h = b[0],
                            f = b[1],
                            C = (0, r.useState)(da),
                            A = C[0],
                            w = C[1],
                            B = (0, Je.GS)().mediaSize,
                            D = B <= Je.cJ.Medium ? Tt.$u.Small : Tt.$u.Medium,
                            y = B <= Je.cJ.Medium ? viewEnv.pxToRem(la.Small) : viewEnv.pxToRem(la.Medium),
                            P = (0, r.useRef)(null),
                            k = (0, r.useRef)(null),
                            L =
                                (x = o) === d.Paused
                                    ? ca.progression.header.paused()
                                    : x === d.NotStarted
                                      ? ca.progression.header.inactive()
                                      : void 0;
                        var x;
                        const I = (0, r.useRef)(0),
                            T = o === d.Completed,
                            O = E === m.EXTRA,
                            M = E === m.HOLIDAY,
                            $ = () => (T ? Tt.Bq.Completed : c ? Tt.Bq.Bought : Tt.Bq.Free),
                            W = { level: l, from: _ },
                            H = o === d.Active,
                            G = (0, v.UP)(W) || o !== d.NotStarted,
                            U = G && $() !== Tt.Bq.Completed,
                            V = $() === Tt.Bq.Bought,
                            Z = Math.trunc(p / 86400),
                            X = ca.chapter.fullName.$num(n),
                            Y = (0, j.uF)(ca.progression.seasonEndingTooltip(), { day: Z }),
                            K = (0, j.uF)(ca.progression.header.chapter.status(), { chapterName: X }),
                            Q = (0, r.useCallback)(
                                (e) => {
                                    e > I.current && (I.current = e);
                                },
                                [I],
                            ),
                            J = (0, r.useCallback)(
                                ua(function* () {
                                    (yield (0, q.Eu)(), yield (0, Rt.nS)());
                                    const e = P.current,
                                        t = k.current;
                                    e &&
                                        t &&
                                        (Q(t.offsetWidth),
                                        L
                                            ? (f(I.current >= e.offsetWidth - y),
                                              w(e.offsetWidth / viewEnv.getScale() - y + 'rem'))
                                            : (f(I.current >= e.offsetWidth), w(da)));
                                }),
                                [Q, L, y],
                            );
                        return (
                            (0, r.useEffect)(
                                () => (
                                    J(),
                                    engine.on('clientResized', J),
                                    () => {
                                        engine.off('clientResized', J);
                                    }
                                ),
                                [o],
                            ),
                            s().createElement(
                                'div',
                                { className: Gt },
                                s().createElement(
                                    'div',
                                    { className: Jt },
                                    s().createElement('div', {
                                        className: S()(ta, U && aa, g.includes(o) && ra),
                                        style: (0, N.fW)(n, D),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: S()(sa, g.includes(o) && na) },
                                        s().createElement(It.G4, {
                                            progression: W,
                                            size: D,
                                            battlePassState: $(),
                                            hasBattlePass: c,
                                            isChapterChosen: H,
                                            isProgression: !0,
                                            chapterID: n,
                                            hasBeenActive: G,
                                            showProgressBar: !1,
                                            isOpen: U,
                                            isExtra: O || M,
                                            seasonNum: i,
                                        }),
                                        U && s().createElement('div', { className: oa, style: (0, N.cs)(n, V, D) }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: Ut },
                                    s().createElement(
                                        'div',
                                        { className: Vt },
                                        s().createElement(
                                            z.i,
                                            { body: Y, isEnabled: Boolean(p) },
                                            s().createElement(
                                                'div',
                                                { className: Yt },
                                                O
                                                    ? (0, j.uF)(ca.progression.season.end.special(), {
                                                          endTime: (0, Ve.UI)(u, xt.C.DayMonthFull),
                                                      })
                                                    : M
                                                      ? (0, j.uF)(ca.progression.season.end.special(), {
                                                            endTime: (0, Ve.UI)(u, xt.C.DayMonthFullTime),
                                                        })
                                                      : (0, j.uF)(ca.progression.season.end.normal(), {
                                                            seasonNum: (0, tt.cg)(i),
                                                            seasonName: ca.season.fullName.$num(i),
                                                            endDate: (0, Ve.UI)(u, xt.C.DayMonthFull),
                                                        }),
                                            ),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: jt, ref: P },
                                            s().createElement(
                                                'div',
                                                { style: { maxWidth: `${A}` } },
                                                s().createElement(
                                                    z.i,
                                                    { body: K, isEnabled: h },
                                                    s().createElement(
                                                        'div',
                                                        { className: S()(qt, h && Zt), ref: k },
                                                        K,
                                                    ),
                                                ),
                                            ),
                                            L && s().createElement('div', { className: Xt }, L),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Kt },
                                            s().createElement(
                                                'div',
                                                { className: Qt },
                                                s().createElement(Lt.A, {
                                                    caption:
                                                        O || M ? ca.progression.aboutExtra() : ca.progression.about(),
                                                    type: Ht.Info,
                                                    onClick: t.openAbout,
                                                }),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: Qt },
                                                s().createElement(Lt.A, {
                                                    caption: ca.howToEarnPoints.title(),
                                                    type: Ht.Info,
                                                    onClick: t.openInfo,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ea },
                                    s().createElement(zt.Z, {
                                        rootId: R.aliases.battle_pass.Progression('resId'),
                                        context: 'model.awardsWidget',
                                    }),
                                ),
                            )
                        );
                    }),
                    ma = {
                        base: 'Progression_base_52',
                        base__isLayoutWithExtraWidget: 'Progression_base__isLayoutWithExtraWidget_53',
                        scrollWrapper: 'Progression_scrollWrapper_3a',
                        wrapper: 'Progression_wrapper_0f',
                        section__last: 'Progression_section__last_4d',
                        divider: 'Progression_divider_4e',
                        dividerContent: 'Progression_dividerContent_82',
                        dividerText: 'Progression_dividerText_8c',
                        progressContainer: 'Progression_progressContainer_7f',
                        progress: 'Progression_progress_c8',
                        progress__inactive: 'Progression_progress__inactive_b8',
                        progressBackground: 'Progression_progressBackground_8c',
                        progressBackground__disabled: 'Progression_progressBackground__disabled_0b',
                        progressBackground__finished: 'Progression_progressBackground__finished_0e',
                        decor: 'Progression_decor_7f',
                        decorBackground: 'Progression_decorBackground_4c',
                        decor__left: 'Progression_decor__left_4e',
                        row: 'Progression_row_2c',
                        row__basic: 'Progression_row__basic_05',
                        bookmark: 'Progression_bookmark_78',
                        bookmark__start: 'Progression_bookmark__start_e7',
                        bookmarkLeftFixed: 'Progression_bookmarkLeftFixed_6c',
                        bookmarkLeftFixed__active: 'Progression_bookmarkLeftFixed__active_3b',
                        bookmarkLeftResponsive: 'Progression_bookmarkLeftResponsive_c3',
                        bookmarkBackground: 'Progression_bookmarkBackground_d6',
                        scrollToButton: 'Progression_scrollToButton_38',
                        scrollToButton__visible: 'Progression_scrollToButton__visible_47',
                        scrollToButton__forward: 'Progression_scrollToButton__forward_18',
                        scrollToButton__backward: 'Progression_scrollToButton__backward_1f',
                        arrowButton: 'Progression_arrowButton_ad',
                        progressionToButton: 'Progression_progressionToButton_3b',
                        progressionToButton__hidden: 'Progression_progressionToButton__hidden_29',
                        progressionToButton__back: 'Progression_progressionToButton__back_a8',
                        progressionToButton__forward: 'Progression_progressionToButton__forward_ce',
                        shadow: 'Progression_shadow_4a',
                        shadow__left: 'Progression_shadow__left_e1',
                        shadow__right: 'Progression_shadow__right_f8',
                        additionalShadow: 'Progression_additionalShadow_69',
                        additionalShadow__active: 'Progression_additionalShadow__active_80',
                        scrollBarPosition: 'Progression_scrollBarPosition_40',
                        fadeOut: 'Progression_fadeOut_7c',
                        fadeIn: 'Progression_fadeIn_1d',
                        fadeInWithScale: 'Progression_fadeInWithScale_74',
                        slideUp: 'Progression_slideUp_a2',
                        scale: 'Progression_scale_a8',
                        rotate: 'Progression_rotate_1c',
                    };
                var pa = a(794),
                    Ea = a(6358);
                let ga;
                !(function (e) {
                    ((e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle'));
                })(ga || (ga = {}));
                const ba = { type: ga.Idle };
                let va;
                !(function (e) {
                    ((e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton'));
                })(va || (va = {}));
                var ha = a(3138);
                const fa = {
                        base: 'ArrowButton_base_8c',
                        base__gray: 'ArrowButton_base__gray_bd',
                        icon: 'ArrowButton_icon_af',
                        icon__4k: 'ArrowButton_icon__4k_23',
                        icon__back: 'ArrowButton_icon__back_28',
                        icon__forward: 'ArrowButton_icon__forward_ff',
                    },
                    Ca = ({ onClick: e, direction: t, type: a = w.Default, className: n, tooltipBody: o }) => {
                        const u = (0, r.useCallback)(() => {
                                (0, i.G)('highlight');
                            }, []),
                            l = (0, r.useCallback)(() => {
                                ((0, i.G)('bp_slide'), e());
                            }, [e]);
                        return s().createElement(
                            z.i,
                            { body: o },
                            s().createElement(
                                'div',
                                { className: S()(fa.base, fa[`base__${a}`], n), onClick: l, onMouseEnter: u },
                                s().createElement('div', {
                                    className: S()(
                                        fa.icon,
                                        fa[`icon__${t}`],
                                        2 === ha.O.view.getScale() && fa.icon__4k,
                                    ),
                                }),
                            ),
                        );
                    },
                    Aa = 'Bookmark_base_cc',
                    wa = 'Bookmark_container_72',
                    Ba = 'Bookmark_container__start_b1',
                    Da = 'Bookmark_container__wide_14',
                    ya = 'Bookmark_textWrapper_46',
                    Fa = 'Bookmark_withTooltip_58',
                    Pa = 'Bookmark_text_6f',
                    Sa = 'Bookmark_text__basic_01',
                    Na = 'Bookmark_text__premium_b8',
                    ka = 'Bookmark_text__single_a0',
                    Ra = 'Bookmark_text__wide_4c',
                    La = 'Bookmark_text__disappeared_f2',
                    xa = 'Bookmark_textInner_b4',
                    Ia = 'Bookmark_leftTextLine_0a',
                    Ta = 'Bookmark_rightTextLine_37',
                    Oa = ({ isWide: e, isDecorated: t }) =>
                        s().createElement(
                            'div',
                            { className: S()(Pa, ka, e && Ra) },
                            t && s().createElement('div', { className: Ia }),
                            s().createElement(
                                'div',
                                { className: xa },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && s().createElement('div', { className: Ta }),
                        ),
                    Ma = (0, r.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: a,
                                tooltipTitle: n,
                                chapterStep: o,
                                mixClass: i,
                            },
                            u,
                        ) => {
                            const l = (0, r.useRef)(null);
                            (0, r.useImperativeHandle)(u, () => ({
                                width: () => {
                                    const e = l.current;
                                    if (e) {
                                        const t = window.getComputedStyle(e, null).getPropertyValue('width');
                                        return Number(t.split('rem')[0]);
                                    }
                                    return 0;
                                },
                            }));
                            const c = (0, j.uF)(R.strings.battle_pass.tooltips.postProgress.body(), { chapterStep: o });
                            return s().createElement(
                                'div',
                                { className: S()(Aa, i), ref: l },
                                s().createElement(
                                    'div',
                                    { className: S()(wa, e && Da, !e && Ba) },
                                    e
                                        ? s().createElement(
                                              z.i,
                                              { body: a, header: n, isEnabled: 'string' == typeof a },
                                              s().createElement(
                                                  'div',
                                                  { className: Fa },
                                                  s().createElement(Oa, { isWide: e, isDecorated: !0 }),
                                              ),
                                          )
                                        : s().createElement(
                                              s().Fragment,
                                              null,
                                              s().createElement(
                                                  'div',
                                                  { className: ya },
                                                  s().createElement(
                                                      z.i,
                                                      {
                                                          header: R.strings.battle_pass.tooltips.postProgress.header(),
                                                          body: c,
                                                      },
                                                      s().createElement(Oa, { isWide: e }),
                                                  ),
                                              ),
                                              s().createElement(
                                                  G.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  s().createElement(
                                                      'div',
                                                      { className: S()(Pa, Na) },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              s().createElement(
                                                  'div',
                                                  { className: S()(Pa, Sa, t && La) },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                var $a = a(8910),
                    Wa = a(1481);
                const Ha = 'VehicleInfo_base_b3',
                    za = 'VehicleInfo_prefix_f6',
                    Ga = 'VehicleInfo_type_1b',
                    Ua = R.strings.battle_pass.progression.widget3dStyle,
                    Va = (0, r.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: n }) => {
                        const o = (0, r.useMemo)(() => {
                            const e = (0, j.BN)(a);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${n ? '_elite' : ''}`)})`,
                            };
                        }, [a, n]);
                        return s().createElement(
                            'div',
                            { className: Ha },
                            s().createElement('div', { className: za }, Ua.forVehicle()),
                            (0, tt.cg)(e),
                            s().createElement('div', { className: Ga, style: o }),
                            t,
                        );
                    }),
                    ja = 'Widget3dStyle_base_ae',
                    qa = 'Widget3dStyle_title_20',
                    Za = 'Widget3dStyle_base__closedChapter_d4',
                    Xa = 'Widget3dStyle_box_f8',
                    Ya = 'Widget3dStyle_light_82',
                    Ka = 'Widget3dStyle_image_f7',
                    Qa = 'Widget3dStyle_previewButton_03',
                    Ja = 'Widget3dStyle_box__hovered_c3',
                    er = 'Widget3dStyle_footer_b9',
                    tr = 'Widget3dStyle_caption_2b',
                    ar = R.strings.battle_pass.progression.widget3dStyle;
                let rr;
                !(function (e) {
                    ((e.None = ''), (e.Small = '_small'), (e.Medium = '_medium'));
                })(rr || (rr = {}));
                const sr = (0, u.Pi)(({ widget3dStyleRef: e, level: t, isShowTitle: a }) => {
                    const n = (0, r.useState)(!1),
                        o = n[0],
                        i = n[1],
                        u = F(),
                        l = u.controls,
                        c = u.model,
                        _ = c.root.get(),
                        m = _.chapterState,
                        p = _.isStyleTaken,
                        E = c.widget3dStyle.get(),
                        g = E.styleName,
                        b = E.styleId,
                        h = ((e, t) => (2 !== t ? (e <= Je.cJ.Small ? rr.Small : rr.Medium) : rr.None))(
                            (0, Je.GS)().mediaSize,
                            viewEnv.getScale(),
                        ),
                        f = (0, v.uc)(t, b, h),
                        C = (0, j.uF)(ar.currentStyle(), { name: g }),
                        A = (0, r.useCallback)(() => {
                            l.open3dStylePreview(t);
                        }, [l, t]);
                    return s().createElement(
                        'div',
                        { className: S()(ja, m === d.Completed && Za), ref: e },
                        !p && a && s().createElement('div', { className: qa }, ar.titleNoChapterSelected()),
                        s().createElement(
                            'div',
                            { className: S()(Xa, o && Ja), onMouseEnter: () => i(!0), onMouseLeave: () => i(!1) },
                            !p && t === Ys && s().createElement('div', { className: Ya }),
                            s().createElement('div', { className: Ka, style: f }),
                            s().createElement('div', { className: Qa }, s().createElement(Wa.k, { onClick: A })),
                        ),
                        s().createElement(
                            'div',
                            { className: er },
                            s().createElement('div', { className: tr }, C),
                            s().createElement(Va, c.widget3dStyleVehicleInfo.get()),
                        ),
                    );
                });
                var nr = a(156),
                    or = a(3112);
                const ir = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: a,
                        pointsInLevel: r,
                        totalPointsInLevel: s,
                        currentLevel: n,
                    }) => (e > n ? a + t * (e - 2) + t * (r / s) : (e - 1) * t + a * (r / s)),
                    ur = (e) => e + 1,
                    lr = (0, u.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: a,
                            currentLevelWidth: o,
                            level: i,
                            previousLevel: u,
                            currentPointsInLevel: l,
                            previousPointsInLevel: c,
                            currentPointsInChapter: d,
                            previousPointsInChapter: _,
                            theme: m,
                        }) => {
                            const p = F().model,
                                E = p.root.get(),
                                g = E.isPaused,
                                b = E.showLevelsAnimations,
                                v = E.currentLevel,
                                h = p.levels.get(),
                                f = (0, r.useState)(0),
                                C = f[0],
                                A = f[1],
                                w = (0, r.useRef)(-1),
                                B = (0, r.useState)({
                                    previousBaseEarnedPoints: 0,
                                    maxBasePoints: 0,
                                    baseProgressionSize: 0,
                                }),
                                D = B[0],
                                y = D.previousBaseEarnedPoints,
                                P = D.maxBasePoints,
                                S = D.baseProgressionSize,
                                N = B[1];
                            (0, r.useEffect)(() => {
                                if (g) return;
                                const e = w.current !== _,
                                    t = e ? u : i,
                                    r = o + (h.length - 1) * a,
                                    s = h[t - 1],
                                    n = i <= h.length ? i - 1 : h.length - 1,
                                    m = h[n].value.levelPoints,
                                    p = ir({
                                        level: i,
                                        levelWidth: a,
                                        currentLevelWidth: o,
                                        pointsInLevel: l,
                                        totalPointsInLevel: m,
                                        currentLevel: v,
                                    }),
                                    E = s ? s.value.levelPoints : 0,
                                    b = ir({
                                        level: t > i ? i : t,
                                        levelWidth: a,
                                        currentLevelWidth: t < v ? a : o,
                                        pointsInLevel: c,
                                        totalPointsInLevel: E,
                                        currentLevel: v,
                                    }),
                                    f = e && t <= i ? b : p;
                                (_ !== d && a && (w.current = _),
                                    N({ maxBasePoints: r, previousBaseEarnedPoints: f, baseProgressionSize: p }));
                            }, [g, a, o, i, u, d, c, l, _, v, h]);
                            const k = (0, r.useMemo)(
                                () =>
                                    Object.assign({}, $a.uu, {
                                        withStack: !0,
                                        type: $a.ru.Simple,
                                        delta: { duration: 400, delay: 300 },
                                        line: { duration: 400, delay: 300 },
                                    }),
                                [],
                            );
                            return (
                                (0, r.useEffect)(() => {
                                    const e = v !== u || l !== c;
                                    if (!b && (e || d === _))
                                        return e && -1 === w.current
                                            ? (0, Ne.F)(() => {
                                                  A(ur);
                                              }, 700)
                                            : void 0;
                                    A(ur);
                                }, [d, _, b]),
                                (0, r.useEffect)(() => {
                                    if (b)
                                        return (0, n.v)(() => {
                                            t && t();
                                        });
                                }, [t, b]),
                                s().createElement($a._e, {
                                    key: C,
                                    animationSettings: k,
                                    deltaFrom: y,
                                    value: S,
                                    maxValue: P || void 0,
                                    api: e,
                                    theme: m,
                                })
                            );
                        },
                    ),
                    cr = R.strings.battle_pass.tooltips.progression.freePoints,
                    dr = (0, u.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: a,
                            currentLevelWidth: r,
                            progressChange: n,
                        }) => {
                            const o = F().model,
                                i = o.root.get(),
                                u = i.chapterState,
                                l = i.currentLevel,
                                c = i.previousLevel,
                                _ = i.currentPointsInLevel,
                                m = i.previousPointsInLevel,
                                p = i.currentPointsInChapter,
                                E = i.previousPointsInChapter,
                                g = i.freePointsInLevel,
                                b = i.freePointsInChapter,
                                v = i.previousFreePointsInChapter,
                                h = i.previousFreePointsInLevel,
                                f = i.potentialLevel,
                                C = i.previousPotentialLevel,
                                A = o.levels.get(),
                                w = (0, or.V)(),
                                B = (u === d.NotStarted || u === d.Paused) && b - p > 0,
                                D = o.computes.getTotalLevelPoints(),
                                y = o.computes.getCurrentWidth(a, r, w, D),
                                P = p >= A.length * D,
                                N = {
                                    '--progress-line-base': nr.Gh.line.bgColorBase,
                                    '--progress-line-disabled': nr.Gh.line.bgColorDisabled,
                                    '--progress-line-finished': nr.Gh.line.bgColorFinished,
                                };
                            return s().createElement(
                                'div',
                                { className: ma.progressContainer },
                                B &&
                                    s().createElement(
                                        z.i,
                                        { header: cr.header(), body: cr.body() },
                                        s().createElement(
                                            'div',
                                            { className: ma.progress },
                                            s().createElement(lr, {
                                                api: t,
                                                progressChange: n,
                                                levelWidth: a,
                                                currentLevelWidth: r,
                                                level: f,
                                                previousLevel: C,
                                                currentPointsInLevel: g,
                                                previousPointsInLevel: h,
                                                currentPointsInChapter: b,
                                                previousPointsInChapter: v,
                                                theme: nr.fV,
                                            }),
                                        ),
                                    ),
                                s().createElement('div', {
                                    className: S()(ma.progressBackground, P && ma.progressBackground__finished),
                                    style: Object.assign({ width: `${y}rem` }, N),
                                }),
                                s().createElement(
                                    G.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    s().createElement(
                                        'div',
                                        { className: S()(ma.progress, B && ma.progress__inactive) },
                                        s().createElement(lr, {
                                            api: e,
                                            levelWidth: a,
                                            currentLevelWidth: r,
                                            level: l,
                                            previousLevel: c,
                                            currentPointsInLevel: _,
                                            previousPointsInLevel: m,
                                            currentPointsInChapter: p,
                                            previousPointsInChapter: E,
                                            progressChange: n,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    _r = 'Background_base_f7',
                    mr = 'Background_default_c1',
                    pr = 'Background_base__premium_e1',
                    Er = 'Background_rare_b6',
                    gr = 'Background_rareBg_ee',
                    br = 'Background_pattern_81',
                    vr = 'Background_pattern__left_86',
                    hr = 'Background_pattern__right_c6',
                    fr = 'Background_pattern__leftIndent_14',
                    Cr = 'Background_pattern__rightIndent_48',
                    Ar = 'Background_pattern__completed_20',
                    wr = 'Background_disabled_ba',
                    Br = 'Background_inProgress_68',
                    Dr = 'Background_inProgressInner_0d',
                    yr = 'Background_inProgressPart_68',
                    Fr = 'Background_inProgressPart__left_76',
                    Pr = 'Background_inProgressPart__right_5b',
                    Sr = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
                    Nr = (0, u.Pi)(({ level: e, isPremium: t = !1 }) => {
                        const a = F().model.computes.cardStates(e, t),
                            r = a.cardStatus,
                            n = a.isRare,
                            o = a.isDisabled,
                            i =
                                r.current !== f.IN_PROGRESS &&
                                ((e, t) => {
                                    switch (e) {
                                        case f.NOT_STARTED:
                                            return t;
                                        case f.COMPLETED:
                                            return !t;
                                        default:
                                            return (console.warn(`Unsupported status for isIndent: ${e}`), !1);
                                    }
                                })(r.current, t);
                        return s().createElement(
                            'div',
                            { className: S()(_r, t && pr) },
                            s().createElement('div', { className: mr }),
                            o && s().createElement('div', { className: wr }),
                            r.current === f.IN_PROGRESS &&
                                s().createElement(
                                    'div',
                                    { className: Br },
                                    s().createElement('div', { className: S()(yr, Fr) }),
                                    !t && s().createElement('div', { className: Dr }),
                                    s().createElement('div', { className: S()(yr, Pr) }),
                                ),
                            n &&
                                s().createElement(
                                    'div',
                                    { className: Er },
                                    s().createElement('div', {
                                        className: S()(br, vr, i && fr, r.current === f.COMPLETED && Ar),
                                        style: { backgroundImage: Sr('left') },
                                    }),
                                    s().createElement('div', {
                                        className: S()(br, hr, !i && Cr, r.current === f.COMPLETED && Ar),
                                        style: { backgroundImage: Sr('right') },
                                    }),
                                    r.current === f.NOT_STARTED && s().createElement('div', { className: gr }),
                                ),
                        );
                    });
                var kr = a(3815),
                    Rr = a(7030);
                const Lr = {
                        base: 'Stage_base_46',
                        base__rewardTaken: 'Stage_base__rewardTaken_fc',
                        number: 'Stage_number_1f',
                        animatedNumber: 'Stage_animatedNumber_5b',
                        numberInProgress: 'Stage_numberInProgress_69',
                        title: 'Stage_title_ee',
                        glow: 'Stage_glow_9e',
                        base__inProgress: 'Stage_base__inProgress_d9',
                        animatedGlow: 'Stage_animatedGlow_11',
                        iconFinal: 'Stage_iconFinal_70',
                    },
                    xr = R.strings.battle_pass.progression,
                    Ir = (0, u.Pi)(({ stepNumber: e, stageAnimationDelay: t, isRewardAnimationActive: a }) => {
                        const n = F(),
                            o = n.model,
                            u = n.controls,
                            l = o.root.get(),
                            c = l.chapterState,
                            _ = l.showLevelsAnimations,
                            m = (0, r.useState)(!1),
                            p = m[0],
                            E = m[1],
                            g = o.computes.cardStates(e, !1).cardStatus,
                            b = o.computes.isRewardNeedTake(e, !1) || o.computes.isRewardNeedTake(e, !0),
                            h = o.computes.levelInfo(e).maxLevel === e,
                            C = g.current === f.IN_PROGRESS,
                            A = c === d.NotStarted || c === d.Paused,
                            w = g.current === f.COMPLETED && !b && !a,
                            B = (0, Rr.useSpring)({
                                from: { stageOpacity: p ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, i.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: v.ei },
                            }).stageOpacity,
                            D = (0, Rr.useSpring)({
                                from: { sparkOpacity: p ? 1 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => E(!1),
                                config: { duration: 1500, easing: v.ei },
                            }).sparkOpacity;
                        return (
                            (0, r.useEffect)(() => {
                                if (_ && C)
                                    return (0, Ne.F)(() => {
                                        (E(!0), u.finishLevelsAnimation());
                                    }, t + 100);
                            }, [_, C, t]),
                            s().createElement(
                                'div',
                                { className: S()(Lr.base, Lr[`base__${g.current}`], w && Lr.base__rewardTaken) },
                                C &&
                                    !A &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: Lr.glow }),
                                        s().createElement(Rr.animated.div, {
                                            style: { opacity: D },
                                            className: Lr.animatedGlow,
                                        }),
                                    ),
                                h && s().createElement('div', { className: Lr.iconFinal }),
                                C
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(
                                              'div',
                                              { className: Lr.numberInProgress },
                                              e,
                                              s().createElement(
                                                  Rr.animated.div,
                                                  {
                                                      style: {
                                                          opacity: B,
                                                          transform: B.to([0, 1], [2.5, 1]).to(
                                                              (e) => `translate(-50%, -50%) scale(${e})`,
                                                          ),
                                                      },
                                                      className: Lr.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          s().createElement(
                                              'div',
                                              { className: Lr.title },
                                              A ? xr.pausedStep() : xr.currentStep(),
                                          ),
                                      )
                                    : s().createElement('div', { className: Lr.number }, e),
                            )
                        );
                    });
                var Tr = a(8664);
                const Or = 'ClosedStatus_base_8a',
                    Mr = 'ClosedStatus_icon_18',
                    $r = 'ClosedStatus_icon__current_44',
                    Wr = 'ClosedStatus_icon__exit_fd',
                    Hr = 'ClosedStatus_icon__exitActive_65',
                    zr = 'ClosedStatus_icon__exitCurrentActive_4d',
                    Gr = 'ClosedStatus_icon__exitDone_b2',
                    Ur = 'ClosedStatus_title_a3',
                    Vr = 'ClosedStatus_title__exit_16',
                    jr = 'ClosedStatus_title__exitActive_44',
                    qr = 'ClosedStatus_title__exitDone_51';
                function Zr() {
                    return (
                        (Zr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Zr.apply(this, arguments)
                    );
                }
                const Xr = (0, u.Pi)(
                        ({
                            level: e,
                            playUnlockAnimation: t = !1,
                            handleUnlockAnimationExited: a,
                            baseUnlockProps: r,
                        }) => {
                            const n = F().model,
                                o = n.root.get().isBattlePassPurchased,
                                i = n.computes.cardStates(e, !0).cardStatus.current === f.IN_PROGRESS,
                                u = { exit: Wr, exitActive: i ? zr : Hr, exitDone: Gr },
                                l = { exit: Vr, exitActive: jr, exitDone: qr },
                                c = !o || t,
                                d = i && c;
                            return s().createElement(
                                'div',
                                { className: Or },
                                c &&
                                    s().createElement(
                                        Tr.Z,
                                        Zr({}, r, { classNames: u, onExited: a }),
                                        s().createElement('div', { className: S()(Mr, i && $r) }),
                                    ),
                                d &&
                                    s().createElement(
                                        Tr.Z,
                                        Zr({}, r, { classNames: c ? l : {} }),
                                        s().createElement(
                                            'div',
                                            { className: Ur },
                                            R.strings.battle_pass.progression.currentStepLocked(),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Yr = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_3f',
                        slideUp: 'CompletedStatus_slideUp_d2',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_03',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_19',
                        showUp: 'CompletedStatus_showUp_a2',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_d8',
                        icon: 'CompletedStatus_icon_b1',
                    },
                    Kr = ({ completedIn: e, handleCompleteGlowAnimationExited: t, children: a }) => {
                        const r = {
                            exit: Yr.iconGlow__completedEnter,
                            exitActive: Yr.iconGlow__completedEnterActive,
                            exitDone: Yr.iconGlow__completedEnterDone,
                        };
                        return s().createElement(
                            'div',
                            { className: S()(Yr.base, e && Yr.base__showAnimation) },
                            s().createElement(Tr.Z, { in: !e, timeout: Es, classNames: r, onExited: t }, a),
                            s().createElement(
                                z.i,
                                { body: gs.tooltips.completed.got() },
                                s().createElement('div', { className: Yr.icon }),
                            ),
                        );
                    },
                    Qr = {
                        base: 'CurrentPoints_base_98',
                        value__current: 'CurrentPoints_value__current_73',
                        value__total: 'CurrentPoints_value__total_b4',
                        divider: 'CurrentPoints_divider_dc',
                        icon: 'CurrentPoints_icon_08',
                    },
                    Jr = (0, u.Pi)(() => {
                        const e = F().model.computes.currentLevelPoints(),
                            t = e.current,
                            a = e.total;
                        return s().createElement(
                            G.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            s().createElement(
                                'div',
                                { className: Qr.base },
                                s().createElement('div', { className: S()(Qr.value, Qr.value__current) }, t),
                                s().createElement('div', { className: Qr.divider }, '/'),
                                s().createElement('div', { className: S()(Qr.value, Qr.value__total) }, a),
                                s().createElement('div', { className: Qr.icon }),
                            ),
                        );
                    }),
                    es = 'Effects_glowWrapper_94',
                    ts = 'Effects_glow_f7',
                    as = 'Effects_glow__active_d4',
                    rs = 'Effects_dust_5a',
                    ss = 'Effects_dust__active_b4';
                function ns() {
                    return (
                        (ns =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ns.apply(this, arguments)
                    );
                }
                const os = ({ baseUnlockProps: e }) => {
                        const t = { exit: ts, exitActive: as, exitDone: ts },
                            a = { exit: rs, exitActive: ss, exitDone: rs };
                        return s().createElement(
                            'div',
                            null,
                            s().createElement(
                                Tr.Z,
                                ns({}, e, { classNames: t }),
                                s().createElement(
                                    'div',
                                    { className: es },
                                    s().createElement('div', { className: ts }),
                                ),
                            ),
                            s().createElement(
                                Tr.Z,
                                ns({}, e, { classNames: a }),
                                s().createElement(
                                    'div',
                                    { className: es },
                                    s().createElement('div', { className: rs }),
                                ),
                            ),
                        );
                    },
                    is = 'Status_base_1f',
                    us = 'Status_base__inProgress_b8',
                    ls = 'Status_iconContainer_2f',
                    cs = 'Status_iconInner_30',
                    ds = 'Status_iconGlow_c5',
                    _s = 'Status_iconGlow__completed_b9',
                    ms = 'Status_iconGlow__hidden_24',
                    ps = 'Status_pointsWrapper_e8',
                    Es = 1500,
                    gs = R.strings.battle_pass,
                    bs = R.views.lobby.battle_pass,
                    vs = (0, u.Pi)(
                        ({
                            isPremium: e,
                            playCompleteAnimation: t,
                            playUnlockAnimation: a,
                            completeAnimationDelay: n = 0,
                            unlockAnimationDelay: o = 0,
                            baseTimeout: u = 0,
                            playUnlockAnimationSound: l = !0,
                            playCompleteAnimationSound: c = !0,
                            onAnimationDone: d,
                            initialAnimationDelay: _,
                            completedDuration: m,
                            level: p,
                        }) => {
                            const E = F().model,
                                g = E.computes.cardStates(p, e),
                                b = g.cardStatus,
                                v = g.isDisabled,
                                h = E.computes.isRewardNeedTake(p, e),
                                A = (0, r.useState)(!1),
                                w = A[0],
                                B = A[1],
                                D = (0, r.useState)(!1),
                                y = D[0],
                                P = D[1],
                                N = (0, r.useState)(!0),
                                k = N[0],
                                R = N[1],
                                L = (0, r.useState)(!1),
                                x = L[0],
                                I = L[1],
                                T = b.current === f.COMPLETED && !h && !v,
                                O = (v && e) || T || a,
                                M = !e && b.current === f.IN_PROGRESS && b.potential !== f.COMPLETED,
                                $ = () => {
                                    (c && (0, i.G)(C.IMPROVED_REWARD), B(!0));
                                };
                            ((0, r.useEffect)(
                                () =>
                                    a
                                        ? (0, Ne.F)(() => {
                                              (R(!1),
                                                  l &&
                                                      !x &&
                                                      (b.current === f.IN_PROGRESS
                                                          ? (0, i.G)(C.UNLOCK_BIG)
                                                          : (0, i.G)(C.UNLOCK_SMALL)));
                                          }, _ + o)
                                        : t
                                          ? (P(!0),
                                            (0, Ne.F)(() => {
                                                (P(!1), $());
                                            }, _ + n))
                                          : void (y && P(!1)),
                                [a, t, y],
                            ),
                                (0, r.useEffect)(() => {
                                    if (t && x)
                                        return (0, Ne.F)(() => {
                                            $();
                                        }, n);
                                }, [t, x]));
                            const W = () => {
                                    (!t && d && d(), I(!0));
                                },
                                H = { in: k, timeout: Es + u };
                            return s().createElement(
                                'div',
                                {
                                    className: S()(is, b.current === f.IN_PROGRESS && us),
                                    style: { '--animation-duration': `${m}ms` },
                                },
                                O &&
                                    s().createElement(
                                        'div',
                                        { className: ls },
                                        ((!t && T) || (w && !h)) &&
                                            s().createElement(
                                                Kr,
                                                {
                                                    completedIn: w,
                                                    handleCompleteGlowAnimationExited: () => {
                                                        y && P(!1);
                                                    },
                                                },
                                                s().createElement('div', { className: S()(ds, _s, y && ms) }),
                                            ),
                                        !t &&
                                            !a &&
                                            v &&
                                            e &&
                                            s().createElement(
                                                G.u,
                                                {
                                                    isEnabled: e,
                                                    contentId: bs.tooltips.BattlePassLockIconTooltipView('resId'),
                                                },
                                                s().createElement(
                                                    'div',
                                                    null,
                                                    s().createElement(Xr, {
                                                        level: p,
                                                        baseUnlockProps: H,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: W,
                                                    }),
                                                ),
                                            ),
                                        a &&
                                            !x &&
                                            s().createElement(
                                                G.u,
                                                { contentId: bs.tooltips.BattlePassLockIconTooltipView('resId') },
                                                s().createElement(
                                                    'div',
                                                    { className: cs },
                                                    s().createElement(Xr, {
                                                        level: p,
                                                        baseUnlockProps: H,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: W,
                                                    }),
                                                    b.current === f.IN_PROGRESS &&
                                                        s().createElement(os, { baseUnlockProps: H }),
                                                ),
                                            ),
                                    ),
                                M && s().createElement('div', { className: ps }, s().createElement(Jr, null)),
                            );
                        },
                    ),
                    hs = 'CardContent_base_aa',
                    fs = 'CardContent_status_6f',
                    Cs = 'CardContent_buttonHolder_a0',
                    As = 'CardContent_buttonLight_95',
                    ws = 'CardContent_buttonInner_27',
                    Bs = 'CardContent_buttonInner__disabled_b1',
                    Ds = 'CardContent_button_3a',
                    ys = 'CardContent_button__disabled_a8',
                    Fs = 'CardContent_buttonBlink_db',
                    Ps = 'CardContent_buttonText_fc';
                var Ss = a(2862),
                    Ns = a(729),
                    ks = a(5739);
                const Rs = {
                    base: 'Rewards_base_46',
                    base__column: 'Rewards_base__column_5d',
                    base__inProgress: 'Rewards_base__inProgress_a5',
                    reward: 'Rewards_reward_1f',
                    base__tripleDefault: 'Rewards_base__tripleDefault_fd',
                    reward__0: 'Rewards_reward__0_7c',
                    reward__2: 'Rewards_reward__2_e3',
                    base__reverse: 'Rewards_base__reverse_14',
                    base__tripleInProgress: 'Rewards_base__tripleInProgress_85',
                    reward__1: 'Rewards_reward__1_11',
                    base__single: 'Rewards_base__single_f9',
                    shine: 'Rewards_shine_3f',
                    base__animated: 'Rewards_base__animated_6a',
                    fade: 'Rewards_fade_96',
                    rewardInner: 'Rewards_rewardInner_ac',
                    changeReward: 'Rewards_changeReward_ee',
                    staticShine: 'Rewards_staticShine_e4',
                    explosion: 'Rewards_explosion_f6',
                    preview: 'Rewards_preview_2f',
                    iconButton: 'Rewards_iconButton_6d',
                };
                function Ls() {
                    return (
                        (Ls =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Ls.apply(this, arguments)
                    );
                }
                const xs = (0, b.Om)((e) => {
                        const t = e.item,
                            a = e.name,
                            r = e.value,
                            s = e.overlayType,
                            n = e.tooltipId,
                            o = e.tooltipContentId;
                        return {
                            id: e.id,
                            icon: e.icon,
                            name: t || a,
                            smallImage: (0, Ns.ry)(e, Ss.h2.Big),
                            bigImage: (0, Ns.ry)(e, Ss.h2.S180x135),
                            special: s,
                            value: r,
                            valueType: (0, Ns.p3)(a),
                            tooltipArgs: (0, Ns.pI)({ tooltipId: n }, Number(o), { ignoreShowDelay: !0 }),
                        };
                    }),
                    Is = (0, u.Pi)(({ isPremium: e, levelNum: t, hasAnimation: a }) => {
                        const n = (0, Je.GS)().mediaSize,
                            o = F(),
                            i = o.model,
                            u = o.controls,
                            l = i.computes.cardStates(t, e).cardStatus,
                            c = i.computes.isRewardNeedTake(t, e),
                            d = i.computes.levelRewardItems(t, !0),
                            _ = i.computes.levelRewardItems(t, !1),
                            m = e ? _ : d,
                            p = (0, r.useState)(m),
                            E = p[0],
                            b = p[1],
                            h = l.current === f.IN_PROGRESS,
                            C = (0, r.useRef)(!1);
                        (0, r.useEffect)(() => {
                            if (C.current) return (0, Ne.F)(() => b(m), 1e3);
                            C.current = !0;
                        }, [m, C]);
                        return s().createElement(
                            'div',
                            {
                                className: S()(
                                    Rs.base,
                                    h && Rs.base__inProgress,
                                    e && Rs.base__reverse,
                                    a && Rs.base__animated,
                                    1 === m.length && Rs.base__single,
                                    2 === m.length && Rs.base__column,
                                    3 === m.length && (h ? Rs.base__tripleInProgress : Rs.base__tripleDefault),
                                ),
                            },
                            g.UI(E, (e, t) => {
                                const r = xs(e),
                                    o =
                                        r.name.includes(Ss.E4.StyleProgressToken) ||
                                        r.name.includes(Ss.E4.BattlePassSelectToken),
                                    i = (c && o) || a,
                                    l = ((e) => {
                                        const t = n < Je.cJ.Medium;
                                        return m.length > 1
                                            ? t
                                                ? { size: Ss.h2.Small, image: e.smallImage }
                                                : { size: Ss.h2.Big, image: e.smallImage }
                                            : t
                                              ? { size: Ss.h2.Big, image: e.smallImage }
                                              : { size: Ss.h2.S180x135, image: e.bigImage };
                                    })(r),
                                    d = l.size,
                                    _ = l.image;
                                return s().createElement(
                                    'div',
                                    { key: `reward__${r.name}${t}`, className: S()(Rs.reward, Rs[`reward__${t}`]) },
                                    i && s().createElement('div', { className: Rs.shine }),
                                    a &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement('div', { className: Rs.staticShine }),
                                            s().createElement('div', { className: Rs.explosion }),
                                        ),
                                    s().createElement(ks.Q, Ls({ size: d, image: _, className: Rs.rewardInner }, r)),
                                    r.icon === v.Hj.style &&
                                        s().createElement(
                                            'div',
                                            { className: Rs.preview },
                                            s().createElement(H.h, {
                                                type: 'preview',
                                                size: 'normal',
                                                className: Rs.iconButton,
                                                onClick: () => u.onStyleBonusPreview(r.id),
                                            }),
                                        ),
                                );
                            }),
                        );
                    }),
                    Ts = 'CardRewards_base_d6',
                    Os = 'CardRewards_base__completed_56',
                    Ms = (0, u.Pi)(({ levelNum: e, isRewardAnimationActive: t, isPremium: a = !1 }) => {
                        const r = F().model,
                            n = r.computes.cardStates(e, a),
                            o = n.cardStatus,
                            i = n.isDisabled,
                            u = r.computes.isRewardNeedTake(e, a),
                            l = o.current === f.COMPLETED && !u && !i && !t;
                        return s().createElement(
                            'div',
                            { className: S()(Ts, l && Os) },
                            s().createElement(Is, { levelNum: e, isPremium: a, hasAnimation: t }),
                        );
                    });
                function $s() {
                    return (
                        ($s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        $s.apply(this, arguments)
                    );
                }
                const Ws = 100,
                    Hs = 1800,
                    zs = R.strings.battle_pass.progression,
                    Gs = (0, u.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            onFinalAnimationDone: a,
                            maxVisibleCards: n,
                            showLevelsAnimations: o,
                            showBuyAnimations: i,
                        }) => {
                            const u = F(),
                                l = u.model,
                                c = u.controls,
                                d = c.finishAnimation,
                                _ = c.takeReward,
                                m = l.root.get(),
                                p = m.isBattlePassPurchased,
                                E = m.currentLevel,
                                g = m.previousLevel,
                                b = l.computes.levelInfo(t),
                                v = b.needTakePaid,
                                h = b.needTakeFree,
                                C = b.isFreeRewardChoiceEnabled,
                                A = b.isPaidRewardChoiceEnabled,
                                w = l.computes.cardStates(t, e).cardStatus,
                                B = l.computes.isRewardNeedTake(t, e),
                                D = w.current === f.IN_PROGRESS,
                                y = w.current === f.COMPLETED,
                                P = (0, r.useState)(!1),
                                N = P[0],
                                k = P[1],
                                R = (0, r.useState)(!1),
                                L = R[0],
                                x = R[1],
                                I = (0, Je.GS)().mediaSize <= Je.cJ.Small ? be.qE.extraSmall : be.qE.small,
                                T = (0, r.useRef)(B),
                                O = T.current;
                            ((0, r.useEffect)(() => {
                                T.current = B;
                            }),
                                (0, r.useEffect)(() => {
                                    if (O && !B) {
                                        const e = (0, Ne.F)(() => {
                                                (k(!1), d());
                                            }, Hs),
                                            t = (0, Ne.F)(() => {
                                                x(!1);
                                            }, 2300);
                                        return (
                                            k(!0),
                                            x(!0),
                                            () => {
                                                (e(), t());
                                            }
                                        );
                                    }
                                }, [B]));
                            const M = (() => {
                                    let r,
                                        s = 0,
                                        u = 0,
                                        l = 0,
                                        c = 0,
                                        d = !1,
                                        _ = !1,
                                        m = !1,
                                        b = 300 * Math.ceil(E / 25);
                                    if (n && i && p) {
                                        const e = Math.floor(0.5 * n);
                                        let a = E - e,
                                            r = E + e,
                                            o = 0;
                                        a <= 0 && ((o = 1 - a), (r += o), (a = 1));
                                        const i = t < E && t >= a,
                                            l = t > E && t <= r,
                                            p = t === a;
                                        (i ? (s = (t - a + 1) * Ws) : l && (s = (t - a) * Ws),
                                            (d = Boolean(D || i || l || p)),
                                            (_ = Boolean(D || p)),
                                            (m = Boolean(y && d)),
                                            (u = (n - o - 1) * Ws),
                                            D && (c = (t - a + 1) * Ws * 2.5));
                                    }
                                    if (n && o) {
                                        const s = Math.min(E - g, Math.floor(0.5 * n));
                                        let i = E - s;
                                        i <= 0 && (i = 1);
                                        const c = t < E && t >= i;
                                        (c && ((u = (t - i + 1) * Ws), e && (u += Ws)),
                                            (m = Boolean(y && c)),
                                            (l = s * Ws + Ws * Math.trunc(s / 2) + b),
                                            o && (r = a));
                                    }
                                    return (
                                        L && ((b = 0), (u = Hs), (m = Boolean(y))),
                                        t === E - 1 && (r = a),
                                        {
                                            baseTimeout: c,
                                            playCompleteAnimation: m,
                                            playCompleteAnimationSound: m,
                                            playUnlockAnimation: d,
                                            playUnlockAnimationSound: _,
                                            unlockAnimationDelay: s,
                                            onAnimationDone: r,
                                            completeAnimationDelay: u,
                                            stageAnimationDelay: l,
                                            initialAnimationDelay: b,
                                        }
                                    );
                                })(),
                                $ = (0, kr.z)(() => {
                                    _({ level: t });
                                }),
                                W = h || v,
                                H = W && !(C || A);
                            return s().createElement(
                                'div',
                                { className: hs },
                                !e &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(Ir, {
                                            stepNumber: t,
                                            stageAnimationDelay: M.stageAnimationDelay,
                                            isRewardAnimationActive: N,
                                        }),
                                        W &&
                                            s().createElement(
                                                z.i,
                                                { isEnabled: H, body: zs.btnRewardsUnavailable() },
                                                s().createElement(
                                                    'div',
                                                    { className: Cs },
                                                    !H && s().createElement('div', { className: As }),
                                                    s().createElement(
                                                        'div',
                                                        { className: S()(ws, H && Bs) },
                                                        s().createElement(
                                                            be.u5,
                                                            {
                                                                type: be.L$.ghost,
                                                                size: I,
                                                                disabled: H,
                                                                onClick: $,
                                                                mixClass: S()(Ds, H && ys),
                                                            },
                                                            !H && s().createElement('div', { className: Fs }),
                                                            s().createElement(
                                                                'div',
                                                                { className: Ps },
                                                                zs.takeReward(),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                    ),
                                s().createElement(Ms, { levelNum: t, isPremium: e, isRewardAnimationActive: N }),
                                s().createElement(
                                    'div',
                                    { className: fs },
                                    s().createElement(
                                        vs,
                                        $s({ isPremium: Boolean(e), completedDuration: 500, level: t }, M),
                                    ),
                                ),
                            );
                        },
                    ),
                    Us = {
                        base: 'Divider_base_8f',
                        base__left: 'Divider_base__left_bd',
                        base__right: 'Divider_base__right_1e',
                        base__rare: 'Divider_base__rare_89',
                        base__completed: 'Divider_base__completed_ed',
                        base__premium: 'Divider_base__premium_82',
                        inner: 'Divider_inner_40',
                    },
                    Vs = ({ position: e, isPremium: t = !1, isRare: a = !1, status: r }) =>
                        s().createElement(
                            'div',
                            {
                                className: S()(
                                    Us.base,
                                    Us[`base__${r}`],
                                    Us[`base__${e}`],
                                    a && Us.base__rare,
                                    t && Us.base__premium,
                                ),
                            },
                            s().createElement('div', { className: Us.inner }),
                        ),
                    js = {
                        base: 'Card_base_5f',
                        base__inProgress: 'Card_base__inProgress_ad',
                        base__nonPremium: 'Card_base__nonPremium_ee',
                        totalPoints: 'Card_totalPoints_51',
                        totalPoints__default: 'Card_totalPoints__default_db',
                        totalPoints__final: 'Card_totalPoints__final_ee',
                        progressShadow: 'Card_progressShadow_ca',
                    },
                    qs = (0, u.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            maxLevels: a,
                            maxVisibleCards: n,
                            showBuyAnimations: o,
                            showLevelsAnimations: i,
                            onAnimationDone: u,
                            levelRef: l,
                        }) => {
                            const c = F().model,
                                _ = c.root.get(),
                                m = _.currentPointsInLevel,
                                p = _.chapterState,
                                E = c.computes.cardStates(t, e),
                                g = E.cardStatus,
                                b = E.isRare,
                                v = c.computes.levelInfo(t).levelPoints,
                                C = !e && (g.current === f.COMPLETED || g.current === f.IN_PROGRESS),
                                A = 1 === t,
                                w = t === a,
                                B = A ? void 0 : c.computes.cardStates(t - 1, e),
                                D = w ? void 0 : c.computes.cardStates(t + 1, e),
                                y = (0, r.useRef)(null),
                                P = e ? (t - 1) * v : v;
                            (0, r.useImperativeHandle)(l, () => ({
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
                            const N =
                                    !A &&
                                    ((g.current === f.NOT_STARTED && !b) ||
                                        ((null == B ? void 0 : B.isRare) && g.current !== f.IN_PROGRESS) ||
                                        (null == B ? void 0 : B.cardStatus.current) === f.IN_PROGRESS),
                                k =
                                    !w &&
                                    ((g.current === f.COMPLETED && !b) ||
                                        ((null == D ? void 0 : D.isRare) && g.current !== f.IN_PROGRESS) ||
                                        (null == D ? void 0 : D.cardStatus.current) === f.IN_PROGRESS),
                                R = ((e, t, a, r) =>
                                    e === f.COMPLETED
                                        ? 100
                                        : e !== f.IN_PROGRESS || (t !== d.NotStarted && t !== d.Paused)
                                          ? 0
                                          : (100 * a) / r)(g.current, p, m, P),
                                L = { width: `${R}%` },
                                x = {
                                    '--small-card-width': '140rem',
                                    '--small-current-card-width': '224rem',
                                    '--big-card-width': '220rem',
                                    '--big-current-card-width': '340rem',
                                };
                            return s().createElement(
                                'div',
                                {
                                    className: S()(js.base, js[`base__${g.current}`], !e && js.base__nonPremium),
                                    ref: y,
                                    style: x,
                                },
                                s().createElement(Nr, { level: t, isPremium: e }),
                                s().createElement(Gs, {
                                    isPremium: e,
                                    stepNumber: t,
                                    maxVisibleCards: n,
                                    showLevelsAnimations: i,
                                    showBuyAnimations: o,
                                    onFinalAnimationDone: u,
                                }),
                                e &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement(
                                            'div',
                                            { className: S()(js.totalPoints, js.totalPoints__default) },
                                            P,
                                        ),
                                        w &&
                                            s().createElement(
                                                'div',
                                                { className: S()(js.totalPoints, js.totalPoints__final) },
                                                a * v,
                                            ),
                                    ),
                                C && s().createElement('div', { className: js.progressShadow, style: L }),
                                !N &&
                                    s().createElement(Vs, {
                                        position: h.left,
                                        isPremium: e,
                                        isRare: b,
                                        status: g.current,
                                    }),
                                !k &&
                                    s().createElement(Vs, {
                                        position: h.right,
                                        isPremium: e,
                                        isRare: b,
                                        status: g.current,
                                    }),
                            );
                        },
                    ),
                    Zs = (0, u.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            isPremium: n,
                            sectionKey: o,
                            maxVisibleCards: i,
                        }) => {
                            const u = F().model,
                                l = u.root.get(),
                                c = l.chapterID,
                                d = l.currentLevel,
                                _ = l.potentialLevel,
                                m = l.showBuyAnimations,
                                p = l.showLevelsAnimations,
                                E = u.levels.get(),
                                b = (0, r.useState)(!1),
                                v = b[0],
                                h = b[1],
                                f = () => {
                                    h(!0);
                                },
                                C = Boolean(i && n && m),
                                A = Boolean(i && p),
                                w = (r, s, n) => (r === s ? e : r === n ? a : t);
                            return s().createElement(
                                'div',
                                { className: S()(ma.row, !n && ma.row__basic) },
                                g.UI(E, (e, t) =>
                                    s().createElement(qs, {
                                        key: `${c}_${o}_${t}`,
                                        showBuyAnimations: C && !v,
                                        showLevelsAnimations: A,
                                        levelRef: w(e.level, d, _),
                                        stepNumber: e.level,
                                        isPremium: n,
                                        maxLevels: E.length,
                                        maxVisibleCards: i,
                                        onAnimationDone: f,
                                    }),
                                ),
                            );
                        },
                    );
                function Xs() {
                    return (
                        (Xs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Xs.apply(this, arguments)
                    );
                }
                const Ys = 1,
                    Ks = (0, u.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            onProgressChanged: n,
                            widget3dStyleLeftRef: o,
                            shadowLipRef: u,
                            api: l,
                        }) => {
                            const c = F().model,
                                d = c.root.get(),
                                _ = d.currentLevel,
                                m = d.currentPointsInLevel,
                                p = d.showLevelsAnimations,
                                E = c.computes.isLayoutWithExtraWidget(),
                                g = c.levels.get(),
                                b = (0, r.useRef)((0, $a.MR)()),
                                v = (0, r.useRef)((0, $a.MR)());
                            l.current.moveProgressBars = (e) => {
                                (b.current.update(e), v.current.update(e));
                            };
                            const h = (0, r.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                f = h[0],
                                C = h[1],
                                A = (0, r.useCallback)(() => {
                                    if (e.current) {
                                        const a = e.current,
                                            r = t.current,
                                            s = a ? a.width() : 0,
                                            n = r ? r.width() : 0;
                                        return !n && s
                                            ? { currentLevelWidth: s, levelWidth: 224 === s ? 140 : 220 }
                                            : { currentLevelWidth: s, levelWidth: n };
                                    }
                                }, [e, t]),
                                w = (0, Je.GS)().mediaSize;
                            return (
                                (0, r.useEffect)(() => {
                                    (0, q.Eu)().then(() => {
                                        const e = A();
                                        if (e) {
                                            const t =
                                                Math.floor(
                                                    (viewEnv.getClientSizeRem().width - e.currentLevelWidth) /
                                                        e.levelWidth,
                                                ) + 1;
                                            C({
                                                levelWidth: e.levelWidth,
                                                currentLevelWidth: e.currentLevelWidth,
                                                maxCardsShown: t,
                                            });
                                        }
                                    });
                                }, [w, A, g.length, _, m]),
                                (0, r.useEffect)(() => {
                                    p && (0, i.G)(R.sounds.bp_progress_bar_start());
                                }, [p]),
                                (0, r.useEffect)(() => {
                                    n && n();
                                }, [_, m, n]),
                                s().createElement(
                                    'div',
                                    { className: ma.wrapper },
                                    !E &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(sr, { widget3dStyleRef: o, level: Ys, isShowTitle: !0 }),
                                            s().createElement(
                                                'div',
                                                { className: S()(ma.decor, ma.decor__left) },
                                                s().createElement('div', { className: ma.decorBackground }),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: ma.bookmarkBackground, ref: u },
                                                s().createElement(Ma, {
                                                    isDisappeared: !0,
                                                    mixClass: ma.bookmarkLeftResponsive,
                                                }),
                                            ),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: ma.section },
                                        s().createElement(Zs, {
                                            sectionKey: 'baseCard',
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: a,
                                            maxVisibleCards: p ? f.maxCardsShown : 0,
                                            currentLevel: _,
                                        }),
                                        s().createElement(
                                            dr,
                                            Xs({ progressApi: b, freePointsApi: v, progressChange: n }, f),
                                        ),
                                        s().createElement(Zs, {
                                            sectionKey: 'basePremiumCard',
                                            isPremium: !0,
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: a,
                                            maxVisibleCards: f.maxCardsShown,
                                            currentLevel: _,
                                        }),
                                    ),
                                    !E &&
                                        s().createElement(
                                            s().Fragment,
                                            null,
                                            s().createElement(
                                                'div',
                                                { className: ma.decor },
                                                s().createElement('div', { className: ma.decorBackground }),
                                            ),
                                            s().createElement(sr, { level: 4 }),
                                        ),
                                )
                            );
                        },
                    );
                function Qs() {
                    return (
                        (Qs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        Qs.apply(this, arguments)
                    );
                }
                function Js(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                const en = { allowedButtons: [va.MainButton] },
                    tn = R.strings.battle_pass.progression;
                let an;
                !(function (e) {
                    ((e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel'));
                })(an || (an = {}));
                const rn = ['dragStart', 'dragEnd', 'dragging'],
                    sn = (0, u.Pi)(({ onHorizontalScroll: e }) => {
                        const t = F().model,
                            a = t.levels.get(),
                            o = t.root.get(),
                            i = o.currentLevel,
                            u = o.isBattlePassPurchased,
                            l = o.showBuyAnimations,
                            c = (0, r.useRef)({ moveProgressBars: () => {} }),
                            d = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            p = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            g = (0, r.useRef)(null),
                            b = (0, r.useRef)(null),
                            v = (0, r.useRef)(0),
                            h = t.computes.isLayoutWithExtraWidget(),
                            f = (0, r.useState)(an.Hidden),
                            C = f[0],
                            B = f[1],
                            D = (0, r.useState)(an.Hidden),
                            y = D[0],
                            P = D[1],
                            N = (0, r.useState)(!1),
                            k = N[0],
                            R = N[1],
                            L = (0, r.useState)(void 0),
                            x = L[0],
                            I = L[1],
                            T = (0, Ea.T5)(),
                            O = T.animationScroll.scrollPosition,
                            M = T.applyScroll,
                            $ = T.events,
                            W = T.handleMouseWheel,
                            H = T.getContainerSize,
                            z = T.getWrapperSize,
                            G = (function (e, t, a) {
                                const s = e.contentRef,
                                    n = e.wrapperRef,
                                    o = e.scrollPosition,
                                    i = e.clampPosition,
                                    u = e.animationScroll,
                                    l = e.events,
                                    c = (0, r.useState)(ba),
                                    d = c[0],
                                    _ = c[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = s.current;
                                        e && (e.style.cursor = d.type === ga.Dragging ? 'move' : 'grab');
                                    }, [s, d.type]),
                                    (0, r.useEffect)(() => {
                                        if (d.type !== ga.Dragging) return;
                                        const e = (e) => {
                                            const a = s.current,
                                                r = n.current;
                                            if (!a || !r) return;
                                            const l = d.positionFrom - e.screenX,
                                                c = d.previousScrollPosition + l;
                                            o.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: i(a, c),
                                                        from: { scrollPosition: u.scrollPosition.get() },
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
                                    }, [u.scrollPosition, i, s, d, o, n, t, a]),
                                    (0, r.useEffect)(() => {
                                        if (d.type !== ga.End) return;
                                        const e = () => {
                                            _(ba);
                                        };
                                        return (u.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                                    }, [u.scrollPosition, d.type, l]),
                                    (0, r.useEffect)(() => {
                                        const e = s.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (a &&
                                                a.allowedButtons &&
                                                -1 === a.allowedButtons.findIndex((t) => e.button === t)) ||
                                                _({
                                                    type: ga.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: u.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [u.scrollPosition, s, a]),
                                    [d, _]
                                );
                            })(T, void 0, en),
                            U = G[0],
                            V = G[1],
                            j = (e) => {
                                (U.type === ga.Dragging && V({ type: ga.End }), W(e));
                            },
                            Z = (0, r.useMemo)(() => Object.assign({}, T, { handleMouseWheel: j }), []),
                            X = (0, r.useCallback)(
                                (e) => {
                                    const t = p.current ? p.current.offsetWidth : 0,
                                        a = E.current ? E.current.offsetWidth : 0;
                                    if (d.current) {
                                        const r = z();
                                        (c.current.moveProgressBars({
                                            viewPort: d.current,
                                            horizontalScrollPosition: r ? e - r : e,
                                            leftOffset: t + a,
                                        }),
                                            R(h || e > t + 0.5 * a));
                                    }
                                },
                                [z, h],
                            ),
                            Y = (0, r.useCallback)((e = !1) => {
                                const t = _.current;
                                let a = 0,
                                    r = 0;
                                const s = p.current ? p.current.offsetWidth : 0,
                                    n = E.current ? E.current.offsetWidth : 0;
                                t && ((a = t.width()), (r = t.offsetLeft() + s + n));
                                const o = d.current;
                                let i = 0;
                                if (a && o) {
                                    const t = 0.5 * o.offsetWidth;
                                    e && v.current
                                        ? (i = r + a - 0.5 * v.current - t)
                                        : ((i = r + 0.5 * a - t), (v.current = a));
                                }
                                return ((i = Math.round(i < 0 ? 0 : i)), i);
                            }, []),
                            K = () => {
                                const e = d.current,
                                    t = _ && _.current,
                                    a = m.current,
                                    r = p.current ? p.current.offsetWidth : 0,
                                    s = E.current ? E.current.offsetWidth : 0;
                                if (t) {
                                    const n = t.offsetLeft() + r + s,
                                        o = (null == a ? void 0 : a.offsetLeft()) + r + s,
                                        i =
                                            O.goal < n - e.offsetWidth
                                                ? an.NavToCurrentLevel
                                                : a && O.goal < o - e.offsetWidth
                                                  ? an.NavToPotentialLevel
                                                  : an.Hidden,
                                        u = (() => {
                                            switch (!0) {
                                                case a && O.goal > o + a.width():
                                                    return an.NavToPotentialLevel;
                                                case O.goal > n + t.width():
                                                    return an.NavToCurrentLevel;
                                                default:
                                                    return an.Hidden;
                                            }
                                        })();
                                    (B(i), P(u));
                                }
                            },
                            Q = (e) => {
                                const t = ((e) => {
                                    let t = 0;
                                    if (e && e.current && d && d.current) {
                                        const a = e.current,
                                            r = p.current ? p.current.offsetWidth : 0,
                                            s = E.current ? E.current.offsetWidth : 0;
                                        let n = 0,
                                            o = 0;
                                        a && ((n = a.width()), (o = a.offsetLeft() + r + s));
                                        const i = d.current;
                                        (n && i && (t = o + 0.5 * n - 0.5 * i.offsetWidth),
                                            (t = Math.round(t < 0 ? 0 : t)));
                                    }
                                    return t;
                                })(e);
                                (X(O.goal), M(t), K());
                            },
                            J = (e) => {
                                switch (e) {
                                    case an.NavToCurrentLevel:
                                        return Q(_);
                                    case an.NavToPotentialLevel:
                                        return Q(m);
                                }
                            },
                            ee = (e) => {
                                switch (e) {
                                    case an.NavToCurrentLevel:
                                        return { type: w.Default, tooltipBody: tn.backToCurrentStageArrow.descr() };
                                    case an.NavToPotentialLevel:
                                        return { type: w.Gray, tooltipBody: tn.backToPotentialStageArrow.descr() };
                                }
                            },
                            te = (e) => {
                                (X(O.goal), K(), I(null == e ? void 0 : e.type));
                            };
                        return (
                            (0, r.useEffect)(
                                () =>
                                    (0, n.v)(() => {
                                        u && l && M(Y());
                                    }),
                                [M, Y, u, l],
                            ),
                            (0, r.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = H(),
                                                    t = O.goal;
                                                (yield (0, q.Eu)(), yield (0, Rt.nS)());
                                                const a = H(),
                                                    r = d.current,
                                                    s = T.getBounds()[1],
                                                    n = 0.25 * r.offsetWidth,
                                                    o = a && e && a !== e ? (t * a) / e : t;
                                                (X(o), M(o > s - n ? s : o));
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (r, s) {
                                                    var n = e.apply(t, a);
                                                    function o(e) {
                                                        Js(n, r, s, o, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        Js(n, r, s, o, i, 'throw', e);
                                                    }
                                                    o(void 0);
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
                            (0, r.useEffect)(() => (0, Ne.F)(() => Q(_), 700), [i]),
                            (0, r.useEffect)(() => {
                                if (((e = '') => rn.includes(e))(x)) return void e('dragStart' === x);
                                const t = () => {
                                        x || X(O.goal);
                                    },
                                    a = () => {
                                        (e(!1), X(O.goal));
                                    },
                                    r = () => {
                                        (e(!0), X(O.goal));
                                    };
                                return (
                                    $.on('change', t),
                                    $.on('rest', a),
                                    $.on('start', r),
                                    () => {
                                        ($.off('change', t), $.off('rest', a), $.off('start', r));
                                    }
                                );
                            }, [$, X, e, O.goal, x]),
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: S()(ma.bookmark, ma.bookmark__start) },
                                    s().createElement(Ma, {
                                        chapterStep: a.length,
                                        mixClass: S()(ma.bookmarkLeftFixed, k && ma.bookmarkLeftFixed__active),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: ma.scrollWrapper, ref: d, onClick: te, onMouseLeave: K, onWheel: te },
                                    s().createElement(
                                        pa.X.Horizontal.Area.Default,
                                        { api: Z, barClassNames: { base: ma.scrollBarPosition }, onDrag: te },
                                        s().createElement(Ks, {
                                            api: c,
                                            currentCardRef: _,
                                            freeProgressionCutCardRef: g,
                                            potentialLevelCardRef: m,
                                            separatorRef: b,
                                            widget3dStyleLeftRef: p,
                                            shadowLipRef: E,
                                            onProgressChanged: te,
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    {
                                        className: S()(
                                            ma.scrollToButton,
                                            ma.scrollToButton__backward,
                                            y !== an.Hidden && ma.scrollToButton__visible,
                                        ),
                                    },
                                    s().createElement(
                                        Ca,
                                        Qs(
                                            { onClick: () => J(y), direction: A.back, className: ma.arrowButton },
                                            ee(y),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    {
                                        className: S()(
                                            ma.scrollToButton,
                                            ma.scrollToButton__forward,
                                            C !== an.Hidden && ma.scrollToButton__visible,
                                        ),
                                    },
                                    s().createElement(
                                        Ca,
                                        Qs(
                                            { onClick: () => J(C), direction: A.forward, className: ma.arrowButton },
                                            ee(C),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    nn = (0, u.Pi)(() => {
                        const e = F().model.computes.isLayoutWithExtraWidget(),
                            t = (0, r.useState)(!1),
                            a = t[0],
                            n = t[1],
                            o = S()(ma.additionalShadow, a && ma.additionalShadow__active);
                        return s().createElement(
                            'div',
                            { className: S()(ma.base, e && ma.base__isLayoutWithExtraWidget) },
                            s().createElement(
                                'div',
                                { className: S()(ma.shadow, ma.shadow__left) },
                                s().createElement('div', { className: o }),
                            ),
                            s().createElement(
                                'div',
                                { className: S()(ma.shadow, ma.shadow__right) },
                                s().createElement('div', { className: o }),
                            ),
                            s().createElement(sn, {
                                onHorizontalScroll: (e) => {
                                    n(e);
                                },
                            }),
                        );
                    }),
                    on = (0, u.Pi)(() => {
                        const e = F().model,
                            t = e.root,
                            a = e.computes,
                            r = t.get(),
                            n = r.chapterType,
                            o = r.chapterID,
                            i = r.actionType,
                            u = r.isPaused,
                            l = a.isLayoutWithExtraWidget(),
                            c = n === m.EXTRA,
                            d = i !== _.NoAction,
                            p = S()(T, l && O);
                        return s().createElement(
                            'div',
                            { className: S()(k, l && L, c && x), style: (0, N.W4)(o) },
                            !u && s().createElement('div', { className: p }, s().createElement(nn, null)),
                            s().createElement('div', { className: I }, s().createElement(_a, null)),
                            s().createElement('div', { className: $ }, d && s().createElement(kt, null)),
                            l && s().createElement('div', { className: M }, s().createElement(wt, null)),
                        );
                    }),
                    un = 'BattlePassProgressionsViewApp_base_40',
                    ln = (0, u.Pi)(() => {
                        const e = F(),
                            t = e.model,
                            a = e.controls,
                            u = t.root.get().showReplaceRewardsAnimations,
                            d = (0, c.tv)();
                        return (
                            l.N.useHandleKeydown(o.n.ESCAPE, () => d.goBack()),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    document.body.style.height = window.innerHeight - (innerHeight % 2) + 'px';
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    e(),
                                    () => {
                                        (window.removeEventListener('resize', e),
                                            (document.body.style.height = 'auto'));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(
                                () =>
                                    (0, n.v)(() => {
                                        a.viewLoad();
                                    }),
                                [],
                            ),
                            (0, r.useEffect)(() => {
                                u && (0, i.G)(R.sounds.bp_pick_up_award());
                            }, [u]),
                            s().createElement('div', { className: un }, s().createElement(on, null))
                        );
                    }),
                    cn = () =>
                        s().createElement(
                            y,
                            { options: { rootId: R.aliases.battle_pass.Progression('resId') } },
                            s().createElement(ln, null),
                        );
            },
            2765: (e, t, a) => {
                'use strict';
                a.d(t, { e: () => Re });
                var r = a(7363),
                    s = a.n(r),
                    n = a(5216),
                    o = a(3215),
                    i = a(4598),
                    u = a(9480),
                    l = a(3946);
                const c = (0, o.q3)()(
                        ({ observableModel: e }) => {
                            const t = e.array('chapters'),
                                a = { root: e.object(), chapters: t },
                                r = (0, l.Om)(() => u.G(t.get(), ({ isExtra: e }) => e)),
                                s = (0, l.Om)(() => u.G(t.get(), ({ chapterState: e }) => e === n.l.Active)),
                                o = (0, l.Om)(() => u.yW(t.get(), ({ chapterState: e }) => e === n.l.Completed)),
                                c = (0, l.Om)((e) => u.sE(t.get(), (t) => t.chapterID === e), { equals: i.jv }),
                                d = (0, l.Om)((e) => {
                                    const a = u.sE(t.get(), (t) => t.chapterID === e);
                                    return {
                                        levelProgression: (null == a ? void 0 : a.levelProgression) || 0,
                                        currentLevel: (null == a ? void 0 : a.currentLevel) || 0,
                                    };
                                }),
                                _ = (0, l.Om)(() => u.hX(a.chapters.get(), (e) => !e.isExtra), { equals: i.jv }),
                                m = (0, l.Om)(() => u.hX(_(), (e) => e.chapterState === n.l.Completed).length, {
                                    equals: i.jv,
                                }),
                                p = (0, l.Om)(() => u.hX(a.chapters.get(), (e) => e.isExtra)),
                                E = [2];
                            return Object.assign({}, a, {
                                computes: {
                                    getChapterById: c,
                                    getProgressionInfoByChapterId: d,
                                    hasExtra: r,
                                    hasActive: s,
                                    isCompleted: o,
                                    regularChapters: _,
                                    extraChapters: p,
                                    regularChaptersCompleteCount: m,
                                    chaptersLineInfo: () =>
                                        u.u4(
                                            _(),
                                            (e, { chapterID: t, chapterState: a }, r) => (
                                                E.includes(r + 1) || e.push({ chapterID: t, chapterState: a }),
                                                e
                                            ),
                                            [],
                                        ),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            openPreview: e.createCallback((e) => ({ chapterID: e }), 'onPreviewClick'),
                            openAbout: e.createCallbackNoArgs('onAboutClick'),
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            onViewLoaded: e.createCallbackNoArgs('onViewLoaded'),
                        }),
                    ),
                    d = c[0],
                    _ = c[1];
                var m = a(8089),
                    p = a(1856),
                    E = a(5521),
                    g = a(3403),
                    b = a(8030),
                    v = a(5831),
                    h = a(6444);
                const f = 'App_base_26',
                    C = 'App_additionalBackground_c6',
                    A = 'App_infoButtons_78',
                    w = 'App_header_41';
                var B = a(6483),
                    D = a.n(B),
                    y = a(5415),
                    F = a(9766),
                    P = a(2828),
                    S = a(6373),
                    N = a(3815),
                    k = a(7727),
                    L = a(9485),
                    x = a(7994),
                    I = a(2893),
                    T = a(8546),
                    O = a(8596);
                const M = 'Shield_base_ec',
                    $ = 'Shield_flag_a2',
                    W = 'Shield_flag__isChapterChosen_81',
                    H = 'Shield_flag__medium_78',
                    z = 'Shield_emblem_59',
                    G = 'Shield_chapterLogoIcon_4b',
                    U = (0, g.Pi)(({ size: e, chapterID: t = 0 }) => {
                        const a = _().model,
                            r = a.root.get().seasonNum,
                            o = a.computes.getChapterById(t);
                        if (!o) return null;
                        const i = o.isBought,
                            u = o.isExtra,
                            l = o.chapterState,
                            c = a.computes.getProgressionInfoByChapterId(t),
                            d = c.currentLevel,
                            m = c.levelProgression,
                            p = { level: d, to: m, from: m },
                            E = l === n.l.Completed ? T.Bq.Completed : i ? T.Bq.Bought : T.Bq.Free,
                            g = l === n.l.Active,
                            b = (0, I.UP)(p) || l !== n.l.NotStarted,
                            v = b && E !== T.Bq.Completed;
                        return s().createElement(
                            'div',
                            { className: M },
                            s().createElement('div', {
                                className: D()($, e === T.$u.Medium && H, v && W),
                                style: (0, L.fW)(t, e),
                            }),
                            s().createElement(
                                'div',
                                { className: z },
                                s().createElement(O.G4, {
                                    progression: p,
                                    size: e,
                                    chapterID: t,
                                    seasonNum: r,
                                    battlePassState: E,
                                    hasBattlePass: i,
                                    hasBeenActive: b,
                                    isChapterSelection: !0,
                                    isOpen: v,
                                    isChapterChosen: g,
                                    showProgressBar: g,
                                    isExtra: u,
                                }),
                                v && s().createElement('div', { className: G, style: (0, L.cs)(t, i, e) }),
                            ),
                        );
                    }),
                    V = {
                        base: 'Chapter_base_f0',
                        base__qHDSize: 'Chapter_base__qHDSize_da',
                        bg: 'Chapter_bg_2e',
                        base__paused: 'Chapter_base__paused_ff',
                        base__notStarted: 'Chapter_base__notStarted_9b',
                        base__completed: 'Chapter_base__completed_88',
                        bgHover: 'Chapter_bgHover_ac',
                        border: 'Chapter_border_5c',
                        frame: 'Chapter_frame_58',
                        content: 'Chapter_content_61',
                        vehicleImg: 'Chapter_vehicleImg_b1',
                        shieldWrapper: 'Chapter_shieldWrapper_27',
                        shield: 'Chapter_shield_bc',
                        shieldShine: 'Chapter_shieldShine_3f',
                        rotate: 'Chapter_rotate_78',
                        completedIcon: 'Chapter_completedIcon_f2',
                        title: 'Chapter_title_57',
                        content__extraChapterContent: 'Chapter_content__extraChapterContent_02',
                        base__active: 'Chapter_base__active_e5',
                        vehicleStyle: 'Chapter_vehicleStyle_85',
                        preview: 'Chapter_preview_1d',
                        previewWrapper: 'Chapter_previewWrapper_74',
                        styleTitle: 'Chapter_styleTitle_0d',
                        vehicleTitle: 'Chapter_vehicleTitle_10',
                        crewTitle: 'Chapter_crewTitle_71',
                        crewSubtitle: 'Chapter_crewSubtitle_f3',
                        vehicleInHangar: 'Chapter_vehicleInHangar_61',
                        extraLevel: 'Chapter_extraLevel_b2',
                        extraName: 'Chapter_extraName_4c',
                        level: 'Chapter_level_e1',
                        name: 'Chapter_name_f0',
                        fadeOut: 'Chapter_fadeOut_82',
                        fadeIn: 'Chapter_fadeIn_f7',
                        fadeInWithScale: 'Chapter_fadeInWithScale_4c',
                        slideUp: 'Chapter_slideUp_71',
                        scale: 'Chapter_scale_96',
                    };
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                const q = R.strings.battle_pass,
                    Z = (0, g.Pi)(({ chapterID: e }) => {
                        const t = _(),
                            a = t.model,
                            o = t.controls,
                            i = a.computes.getChapterById(e);
                        if (!i) return null;
                        const l = (0, h.tv)(),
                            c = i.chapterState,
                            d = i.styleName,
                            m = i.isVehicleInHangar,
                            p = i.vehicleInfo,
                            E = i.finalRewardType,
                            g = i.tankmanNames,
                            b = i.isExtra,
                            f = (0, y.GS)(),
                            C = f.mediaSize,
                            A = f.remScreenWidth,
                            w = f.remScreenHeight,
                            B = (0, r.useCallback)(
                                (t) => {
                                    (o.openPreview(e), t.stopPropagation());
                                },
                                [e, o],
                            ),
                            R = (0, N.z)(() => {
                                (0, k.G)(I.r_.BP_HIGHLIGHT);
                            }),
                            O = C <= y.cJ.Medium ? T.$u.Small : T.$u.Medium,
                            M = A >= 2560 && w >= 1440,
                            $ = c === n.l.Completed,
                            W = c === n.l.Active,
                            H = q.chapter.fullNameUppercased.$num(e);
                        return s().createElement(
                            'div',
                            {
                                className: D()(V.base, V[`base__${c}`], M && V.base__qHDSize),
                                onMouseEnter: R,
                                onClick: () => {
                                    (k.$.playClick(), l.push(v._.battlePass.progression, { chapterID: e }));
                                },
                                style: { width: viewEnv.remToPx(ve[C]) },
                            },
                            s().createElement(
                                'div',
                                { className: V.bg, style: (0, L.TZ)(e) },
                                s().createElement('div', { className: V.vehicleImg, style: (0, L.OH)(e) }),
                                s().createElement('div', { className: V.bgHover }),
                                W && s().createElement('div', { className: V.frame }),
                            ),
                            s().createElement(
                                'div',
                                { className: D()(V.content, b && V.content__extraChapterContent) },
                                s().createElement(
                                    'div',
                                    { className: V.shieldWrapper },
                                    W && s().createElement('div', { className: V.shieldShine }),
                                    s().createElement(
                                        'div',
                                        { className: V.shield },
                                        s().createElement(U, { size: O, chapterID: e }),
                                    ),
                                ),
                                $ && s().createElement('div', { className: V.completedIcon }),
                                s().createElement('div', { className: V.title }, H),
                                s().createElement(
                                    'div',
                                    { className: V.vehicleStyle },
                                    E !== n.E.Tankman &&
                                        s().createElement(
                                            'div',
                                            { className: V.preview },
                                            s().createElement(
                                                'div',
                                                { className: V.previewWrapper },
                                                s().createElement(P.h, {
                                                    type: 'preview',
                                                    onClick: B,
                                                    size: C < y.cJ.Medium ? 'small' : 'normal',
                                                }),
                                            ),
                                        ),
                                    s().createElement(
                                        'div',
                                        { className: V.styleTitle },
                                        ((e, t) => {
                                            switch (e) {
                                                case n.E.Style:
                                                    return s().createElement(F.z, {
                                                        text: q.chapterChoice.stylePreview.name(),
                                                        binding: { styleName: t },
                                                    });
                                                case n.E.Tankman:
                                                    return s().createElement(
                                                        'div',
                                                        { className: V.crewTitle },
                                                        s().createElement(F.z, {
                                                            text: q.chapterChoice.crewMember.reward(),
                                                        }),
                                                    );
                                                case n.E.Vehicle:
                                                    return s().createElement(F.z, {
                                                        text: q.chapterChoice.premiumVehicle.reward(),
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(E, d),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: V.vehicleTitle },
                                        ((e, t, a, r) => {
                                            const o = r
                                                ? { level: V.extraLevel, name: V.extraName }
                                                : { level: V.level, name: V.name };
                                            switch (e) {
                                                case n.E.Style:
                                                    return s().createElement(F.z, {
                                                        text: q.chapterChoice.stylePreview.forLabel(),
                                                        binding: {
                                                            vehicleName: s().createElement(
                                                                x.U4,
                                                                j({}, a, { classNames: o }),
                                                            ),
                                                        },
                                                    });
                                                case n.E.Tankman:
                                                    return s().createElement(F.z, {
                                                        classMix: V.crewSubtitle,
                                                        text: u.v_(t, q.common.comma()),
                                                    });
                                                case n.E.Vehicle:
                                                    return s().createElement(F.z, {
                                                        text: q.chapterChoice.stylePreview.extraLabel(),
                                                        binding: {
                                                            vehicleName: s().createElement(
                                                                x.U4,
                                                                j({}, a, { classNames: o }),
                                                            ),
                                                        },
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(E, g, p, b),
                                        E === n.E.Style &&
                                            m &&
                                            s().createElement(
                                                S.i,
                                                { body: q.chapterChoice.vehicleInHangar.tooltip.text() },
                                                s().createElement('div', { className: V.vehicleInHangar }),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    X = {
                        base: 'ChapterPostProgressionLine_base_d0',
                        circleShine: 'ChapterPostProgressionLine_circleShine_6b',
                        base__hovered: 'ChapterPostProgressionLine_base__hovered_8c',
                        chapterLine: 'ChapterPostProgressionLine_chapterLine_00',
                        circle: 'ChapterPostProgressionLine_circle_2c',
                        circle__completed: 'ChapterPostProgressionLine_circle__completed_c2',
                        verticalChapterLine: 'ChapterPostProgressionLine_verticalChapterLine_0e',
                        verticalChapterLine__completed: 'ChapterPostProgressionLine_verticalChapterLine__completed_7c',
                    },
                    Y = ({ chapterState: e, isButtonHovered: t }) => {
                        const a = (0, y.GS)().mediaSize,
                            r = viewEnv.remToPx(a <= y.cJ.Small ? 47 : 57),
                            o = e === n.l.Completed ? r + 1 : r,
                            i = viewEnv.remToPx(4);
                        return s().createElement(
                            'div',
                            { className: D()(X.base, t && X.base__hovered) },
                            e === n.l.Completed && s().createElement('div', { className: X.circleShine }),
                            s().createElement(
                                'svg',
                                {
                                    width: viewEnv.remToPx(8),
                                    height: o,
                                    viewBox: `0 0 ${viewEnv.remToPx(8)} ${o}`,
                                    className: X.chapterLine,
                                },
                                s().createElement('circle', {
                                    cx: i,
                                    cy: i,
                                    r: viewEnv.remToPx(3),
                                    className: D()(X.circle, X[`circle__${e}`]),
                                }),
                                s().createElement('line', {
                                    x1: i,
                                    x2: i,
                                    y1: viewEnv.remToPx(7),
                                    y2: o,
                                    className: D()(X.verticalChapterLine, X[`verticalChapterLine__${e}`]),
                                }),
                            ),
                        );
                    };
                var K = a(514);
                const Q = {
                        base: 'SVGHorizontalLine_base_8f',
                        horizontalChapterLine: 'SVGHorizontalLine_horizontalChapterLine_a7',
                        horizontalChapterLine__completed: 'SVGHorizontalLine_horizontalChapterLine__completed_70',
                        base__active: 'SVGHorizontalLine_base__active_96',
                    },
                    J = (0, g.Pi)(({ activateLine: e }) => {
                        const t = _().model.computes.chaptersLineInfo(),
                            a = (0, y.GS)().mediaSize;
                        return s().createElement(
                            'div',
                            { className: D()(Q.base, e && Q.base__active) },
                            s().createElement(
                                'svg',
                                { width: '100%', height: '100%', viewBox: '0 0 100% 100%' },
                                u.UI(t, ({ chapterID: e, chapterState: t }, r) =>
                                    s().createElement('line', {
                                        x1: te(a) * r + ae,
                                        x2: te(a) * (r + 1) + ae,
                                        y1: '0',
                                        y2: '0',
                                        key: `${e}_${r}`,
                                        className: D()(Q.horizontalChapterLine, Q[`horizontalChapterLine__${t}`]),
                                    }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        base: 'PostProgressionEntryPoint_base_5a',
                        buttonBlock: 'PostProgressionEntryPoint_buttonBlock_5a',
                        button: 'PostProgressionEntryPoint_button_d3',
                        buttonText: 'PostProgressionEntryPoint_buttonText_28',
                        lockBlock: 'PostProgressionEntryPoint_lockBlock_6c',
                        lock: 'PostProgressionEntryPoint_lock_c4',
                        lockShine: 'PostProgressionEntryPoint_lockShine_07',
                        postProgressionText: 'PostProgressionEntryPoint_postProgressionText_b7',
                        base__hovered: 'PostProgressionEntryPoint_base__hovered_13',
                        completedChaptersCount: 'PostProgressionEntryPoint_completedChaptersCount_32',
                    },
                    te = (e) => viewEnv.remToPx(ve[e]),
                    ae = viewEnv.remToPx(4),
                    re = R.strings.battle_pass.chapterChoice.postProgression,
                    se = (0, g.Pi)(({ setIsButtonHovered: e, isButtonHovered: t }) => {
                        const a = _().model,
                            r = (0, h.tv)(),
                            n = (0, y.GS)().mediaSize,
                            o = a.computes.regularChapters(),
                            i = a.computes.regularChaptersCompleteCount(),
                            u = i === o.length;
                        return s().createElement(
                            'div',
                            {
                                className: D()(ee.base, t && ee.base__hovered),
                                style: { width: (te(n) + ae) * (o.length - 1) },
                            },
                            s().createElement(J, { activateLine: t }),
                            s().createElement(
                                'div',
                                { className: ee.buttonBlock },
                                s().createElement(
                                    'div',
                                    {
                                        className: ee.button,
                                        onMouseEnter: () => {
                                            (e(!0), K.hY.sound('highlight'));
                                        },
                                        onMouseLeave: () => {
                                            e(!1);
                                        },
                                        onClick: () => {
                                            (r.push(v._.battlePass.postProgression), K.hY.sound('play'));
                                        },
                                    },
                                    s().createElement('div', { className: ee.buttonText }, re.button.text()),
                                    !u &&
                                        s().createElement(
                                            'div',
                                            { className: ee.lockBlock },
                                            s().createElement('div', { className: ee.lock }),
                                            s().createElement('div', { className: ee.lockShine }),
                                        ),
                                ),
                                i !== o.length &&
                                    s().createElement(
                                        'div',
                                        { className: ee.postProgressionText },
                                        s().createElement(F.z, {
                                            classMix: ee.text,
                                            text: re.text(),
                                            binding: {
                                                completedChaptersCount: s().createElement(
                                                    'span',
                                                    { className: ee.completedChaptersCount },
                                                    i,
                                                ),
                                                chaptersCount: o.length,
                                            },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    ne = 'Separator_base_8a',
                    oe = 'Separator_base__qHDSize_bb',
                    ie = 'Separator_line_97',
                    ue = 'Separator_line__top_a6',
                    le = 'Separator_line__bottom_a0',
                    ce = 'Separator_plus_41',
                    de = () => {
                        const e = (0, y.GS)(),
                            t = e.remScreenWidth,
                            a = e.remScreenHeight,
                            r = t >= 2560 && a >= 1440;
                        return s().createElement(
                            'div',
                            { className: D()(ne, r && oe) },
                            s().createElement('div', { className: D()(ie, ue) }),
                            s().createElement('div', { className: ce }),
                            s().createElement('div', { className: D()(ie, le) }),
                        );
                    },
                    _e = 'Chapters_base_81',
                    me = 'Chapters_base__normal_49',
                    pe = 'Chapters_base__extend_cb',
                    Ee = 'Chapters_regular_4d',
                    ge = 'Chapters_regularChapters_e9',
                    be = 'Chapters_chapterWrapper_51',
                    ve = {
                        [y.cJ.ExtraSmall]: 242,
                        [y.cJ.Small]: 242,
                        [y.cJ.Medium]: 376,
                        [y.cJ.Large]: 452,
                        [y.cJ.ExtraLarge]: 608,
                    },
                    he = (0, g.Pi)(() => {
                        const e = _().model,
                            t = e.computes.hasExtra(),
                            a = e.computes.regularChapters(),
                            n = e.computes.extraChapters(),
                            o = (0, r.useState)(!1),
                            i = o[0],
                            l = o[1];
                        return s().createElement(
                            'div',
                            { className: D()(_e, t ? pe : me) },
                            s().createElement(
                                'div',
                                { className: Ee },
                                s().createElement(
                                    'div',
                                    { className: ge },
                                    u.UI(a, ({ chapterID: e, chapterState: t }, a) =>
                                        s().createElement(
                                            'div',
                                            { className: be, key: a },
                                            s().createElement(Z, { chapterID: e }),
                                            s().createElement(Y, { chapterState: t, isButtonHovered: i }),
                                        ),
                                    ),
                                ),
                                s().createElement(se, { isButtonHovered: i, setIsButtonHovered: l }),
                            ),
                            t && s().createElement(de, null),
                            u.UI(n, ({ chapterID: e }, t) =>
                                s().createElement(s().Fragment, { key: t }, s().createElement(Z, { chapterID: e })),
                            ),
                        );
                    }),
                    fe = 'Header_base_71',
                    Ce = 'Header_title_af',
                    Ae = 'Header_base__qHDSize_a9',
                    we = 'Header_description_cc',
                    Be = 'Header_freePoints_05',
                    De = 'Header_freePointsInfo_f3',
                    ye = 'Header_freePointsCount_a8',
                    Fe = 'Header_freePointsIcon_be',
                    Pe = R.strings.battle_pass.chapterChoice.freePoints,
                    Se = (0, g.Pi)(({ title: e }) => {
                        const t = _().model,
                            a = t.root.get().freePoints,
                            r = !t.computes.isCompleted() && a > 0,
                            n = (0, y.GS)(),
                            o = n.remScreenWidth,
                            i = n.remScreenHeight,
                            u = o >= 2560 && i >= 1440;
                        return s().createElement(
                            'div',
                            { className: D()(fe, u && Ae) },
                            s().createElement('div', { className: Ce }, e),
                            s().createElement(
                                'div',
                                { className: we },
                                r &&
                                    s().createElement(
                                        'div',
                                        { className: Be },
                                        Pe.description(),
                                        s().createElement(
                                            S.i,
                                            { header: Pe.tooltip.title(), body: Pe.tooltip.description() },
                                            s().createElement(
                                                'div',
                                                { className: De },
                                                s().createElement('span', { className: ye }, a),
                                                s().createElement('span', { className: Fe }),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ne = R.strings.battle_pass,
                    ke = (0, g.Pi)(() => {
                        const e = _(),
                            t = e.model,
                            a = e.controls,
                            n = a.openAbout,
                            o = a.openPointsInfo,
                            i = a.onViewLoaded,
                            u = t.root.get().isSeasonWithAdditionalBackground,
                            l = t.computes.hasExtra(),
                            c = t.computes.hasActive(),
                            d = t.computes.isCompleted(),
                            g = l && u,
                            B = (0, r.useState)(!1),
                            D = B[0],
                            y = B[1],
                            F = (0, h.tv)();
                        return (
                            b.N.useHandleKeydown(E.n.ESCAPE, () => {
                                F.push(v._.root, void 0);
                            }),
                            (0, r.useEffect)(
                                () =>
                                    (0, p.v)(() => {
                                        D || (i(), y(!0));
                                    }),
                                [D, i],
                            ),
                            s().createElement(
                                'div',
                                { className: f },
                                g && s().createElement('div', { className: C }),
                                s().createElement(
                                    'div',
                                    { className: A },
                                    s().createElement(m.A, {
                                        caption: Ne.intro.aboutButton(),
                                        type: 'info',
                                        onClick: n,
                                    }),
                                    s().createElement(m.A, {
                                        caption: Ne.howToEarnPoints.title(),
                                        type: 'info',
                                        onClick: o,
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: w },
                                    s().createElement(Se, {
                                        title: c || d ? Ne.chapterChoice.activeTitle() : Ne.chapterChoice.title(),
                                    }),
                                ),
                                s().createElement(he, null),
                            )
                        );
                    }),
                    Re = () =>
                        s().createElement(
                            d,
                            { options: { rootId: R.aliases.battle_pass.ChapterChoice('resId') } },
                            s().createElement(ke, null),
                        );
            },
            9287: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => Le });
                var r = a(7363),
                    s = a.n(r),
                    n = a(3215),
                    o = a(4598),
                    i = a(3946);
                const u = (0, n.q3)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), nowRewards: e.array('rewards.nowRewards.items') },
                                a = (0, i.Om)(() => t.nowRewards.get(), { equals: o.jv });
                            return Object.assign({}, t, { computes: { rewardList: a } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            showPreviewVehicle: e.createCallbackNoArgs('onPreviewVehicle'),
                            showTankmen: e.createCallbackNoArgs('showTankmen'),
                            showHangar: e.createCallbackNoArgs('showHangar'),
                        }),
                    ),
                    l = u[0],
                    c = u[1];
                var d = a(6483),
                    _ = a.n(d),
                    m = a(9766),
                    p = a(6724),
                    E = a(5521),
                    g = a(9916),
                    b = a(3403),
                    v = a(8030),
                    h = a(2432);
                const f = {
                        base: 'App_base_31',
                        base__rewardsState: 'App_base__rewardsState_39',
                        background: 'App_background_74',
                        base__tankmenState: 'App_base__tankmenState_c9',
                        additionalAnimation: 'App_additionalAnimation_0a',
                        fadeIn: 'App_fadeIn_02',
                        header: 'App_header_70',
                        awards: 'App_awards_34',
                        footer: 'App_footer_2f',
                        base__buyState: 'App_base__buyState_ad',
                        fadeOut: 'App_fadeOut_8f',
                        fadeInWithScale: 'App_fadeInWithScale_d3',
                        slideUp: 'App_slideUp_ae',
                        scale: 'App_scale_25',
                        rotate: 'App_rotate_ef',
                    },
                    C = 'selectableRewardsState',
                    A = 'finalState';
                let w, B;
                (!(function (e) {
                    ((e[(e.Active = 0)] = 'Active'),
                        (e[(e.Paused = 1)] = 'Paused'),
                        (e[(e.Completed = 2)] = 'Completed'),
                        (e[(e.NotStarted = 3)] = 'NotStarted'));
                })(w || (w = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(B || (B = {})));
                var D = a(3457),
                    y = a(5216);
                const F = {
                        base: 'Final_base_62',
                        controls: 'Final_controls_3e',
                        label: 'Final_label_e0',
                        base__finalState: 'Final_base__finalState_92',
                        text: 'Final_text_d2',
                        buttonWrapper: 'Final_buttonWrapper_be',
                        button: 'Final_button_f4',
                    },
                    P = 'FinalStateLabel_icon_60',
                    S = 'FinalStateLabel_greenLight_ce',
                    N = 'FinalStateLabel_text_7f',
                    k = () =>
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement('div', { className: P }),
                            s().createElement('div', { className: S }),
                            s().createElement(
                                'div',
                                { className: N },
                                R.strings.battle_pass.holidayFinalScreen.finalState.label(),
                            ),
                        ),
                    L = R.strings.battle_pass.holidayFinalScreen,
                    x = (0, b.Pi)(() => {
                        const e = c(),
                            t = e.model,
                            a = e.controls,
                            r = a.takeRewards,
                            n = a.showHangar,
                            o = t.root.get(),
                            i = o.state,
                            u = o.finalRewardType,
                            l = i === C;
                        return s().createElement(
                            'div',
                            { className: _()(F.base, F[`base__${i}`]) },
                            s().createElement(
                                'div',
                                { className: F.controls },
                                s().createElement(
                                    'div',
                                    { className: F.label },
                                    l
                                        ? s().createElement(
                                              'div',
                                              { className: F.text },
                                              L.selectableRewardsState.label(),
                                          )
                                        : s().createElement(k, null),
                                ),
                                s().createElement(
                                    'div',
                                    { className: F.buttonWrapper },
                                    s().createElement(
                                        D.u5,
                                        {
                                            size: D.qE.medium,
                                            mixClass: F.button,
                                            onClick: () => {
                                                l ? r() : n();
                                            },
                                        },
                                        (() => {
                                            switch (i) {
                                                case C:
                                                    return L.selectableRewardsState.button();
                                                case A:
                                                    return u === y.E.Vehicle
                                                        ? L.finalState.button.showVehicle()
                                                        : L.finalState.button.showHangar();
                                                default:
                                                    return '';
                                            }
                                        })(),
                                    ),
                                ),
                            ),
                        );
                    });
                var I = a(2828),
                    T = a(2862),
                    O = a(5739),
                    M = a(5415),
                    $ = a(9480),
                    W = a(7727),
                    H = a(7030),
                    z = a(2893),
                    G = a(5831),
                    U = a(7264),
                    V = a(6444);
                const j = 'Divider_divider_48',
                    q = 'Divider_divider__right_96',
                    Z = ({ isRight: e = !1 }) => s().createElement('div', { className: _()(j, e && q) }),
                    X = 'Title_base_65',
                    Y = 'Title_text_7d',
                    K = ({ text: e }) =>
                        s().createElement(
                            'div',
                            { className: X },
                            s().createElement(Z, null),
                            s().createElement('div', { className: Y }, e),
                            s().createElement(Z, { isRight: !0 }),
                        ),
                    Q = {
                        base: 'Purchase_base_43',
                        content: 'Purchase_content_1a',
                        preview: 'Purchase_preview_30',
                        shadow: 'Purchase_shadow_4c',
                        visibleRewards: 'Purchase_visibleRewards_84',
                        title: 'Purchase_title_b0',
                        description: 'Purchase_description_b9',
                        button: 'Purchase_button_1a',
                        button__active: 'Purchase_button__active_05',
                        button__disappearing: 'Purchase_button__disappearing_cb',
                        rewardButton: 'Purchase_rewardButton_fe',
                    };
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = R.strings.battle_pass.holidayFinalScreen.buyState,
                    te = (e) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 400 + 100 * e,
                        config: { duration: 400 },
                        onStart: () => {
                            (0, W.G)(R.sounds.bp_reward());
                        },
                    }),
                    ae = (0, b.Pi)(() => {
                        const e = c(),
                            t = e.model,
                            a = e.controls,
                            r = (0, V.tv)(),
                            n = t.root.get(),
                            o = n.chapterID,
                            i = n.finalRewardType,
                            u = a.showPreviewVehicle,
                            l = t.computes.rewardList(),
                            d = i === y.E.Vehicle,
                            _ = (0, M.GS)().mediaSize <= M.cJ.Small ? T.h2.Small : T.h2.Big,
                            p = l.length > 9 ? [...$.tP(l, 0, 9)] : l,
                            E = (0, H.useSpring)(te(p.length)),
                            g = l.length - p.length;
                        return s().createElement(
                            'div',
                            { className: Q.base },
                            d &&
                                s().createElement(
                                    'div',
                                    { className: Q.preview },
                                    s().createElement(I.h, { type: 'preview', onClick: u }),
                                ),
                            s().createElement(
                                'div',
                                { className: Q.content },
                                s().createElement('div', { className: Q.shadow }),
                                s().createElement(
                                    'div',
                                    { className: Q.title },
                                    s().createElement(K, { text: ee.title() }),
                                ),
                                s().createElement('div', { className: Q.description }, ee.description()),
                                s().createElement(
                                    'div',
                                    { className: Q.visibleRewards },
                                    $.UI(p, (e, t) =>
                                        s().createElement(
                                            U.d,
                                            { animationConfig: te(t), key: `${e.item}_${t}` },
                                            s().createElement(O.Q, J({}, (0, z.$n)(e, _), { className: Q.reward })),
                                        ),
                                    ),
                                ),
                                g > 0 &&
                                    s().createElement(
                                        H.animated.div,
                                        { style: E },
                                        s().createElement(
                                            D.u5,
                                            {
                                                type: D.L$.ghost,
                                                size: D.qE.medium,
                                                mixClass: Q.rewardButton,
                                                onClick: () => {
                                                    r.push(G._.battlePass.buyPassRewards, { packageID: o });
                                                },
                                            },
                                            s().createElement(m.z, { text: ee.moreRewards(), binding: { count: g } }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var re = a(2640),
                    se = a(2189);
                const ne = 'Rewards_full_ea',
                    oe = { context: 'model.rewards' },
                    ie = (0, b.Pi)(() => {
                        const e = c().controls.close;
                        return s().createElement(
                            se.k,
                            { options: oe },
                            s().createElement('div', { className: ne }, s().createElement(re.$, { onBack: e })),
                        );
                    });
                var ue = a(2106);
                const le = 'Tankmen_base_21',
                    ce = 'Tankmen_image_2b',
                    de = 'Tankmen_title_82',
                    _e = 'Tankmen_description_b6',
                    me = 'Tankmen_tankmenBtn_5e',
                    pe = 'Tankmen_button_77',
                    Ee = 'Tankmen_blink_25',
                    ge = R.strings.battle_pass.holidayFinalScreen.tankmenState,
                    be = (0, b.Pi)(() => {
                        const e = c().controls.showTankmen;
                        return s().createElement(
                            'div',
                            { className: le },
                            s().createElement('div', { className: ce }),
                            s().createElement('div', { className: de }, s().createElement(K, { text: ge.title() })),
                            s().createElement('div', { className: _e }, ge.description()),
                            s().createElement(
                                'div',
                                { className: me },
                                s().createElement(
                                    D.u5,
                                    { type: ue.L.main, size: ue.q.medium, mixClass: pe, onClick: e },
                                    s().createElement('div', { className: Ee }),
                                    ge.tankmenButton(),
                                ),
                            ),
                        );
                    }),
                    ve = (0, b.Pi)(() => {
                        const e = c().model.root.get().state;
                        switch (e) {
                            case 'buyState':
                                return s().createElement(ae, null);
                            case 'rewardsState':
                                return s().createElement(ie, null);
                            case 'tankmenState':
                                return s().createElement(be, null);
                            case C:
                            case A:
                                return s().createElement(x, null);
                            default:
                                return (console.warn('Unknown state ', e), null);
                        }
                    }),
                    he = 'Footer_base_fe',
                    fe = 'Footer_light_1b',
                    Ce = 'Footer_buttonWrapper_e5',
                    Ae = 'Footer_button_0a',
                    we = 'Footer_blink_f2',
                    Be = R.strings.battle_pass.holidayFinalScreen.buyState,
                    De = (0, b.Pi)(() => {
                        const e = c().model.root.get(),
                            t = e.isSeasonEndingSoon,
                            a = e.chapterID,
                            r = (0, V.tv)();
                        return s().createElement(
                            'div',
                            { className: he },
                            s().createElement('div', { className: fe }),
                            s().createElement(
                                'div',
                                { className: Ce },
                                s().createElement(
                                    D.u5,
                                    {
                                        type: D.L$.main,
                                        size: D.qE.medium,
                                        mixClass: Ae,
                                        onClick: () => {
                                            r.push(G._.battlePass.buyPassConfirm, { packageID: a });
                                        },
                                    },
                                    t && s().createElement('div', { className: we }),
                                    Be.buyButton(),
                                ),
                            ),
                        );
                    }),
                    ye = 'Header_base_a7',
                    Fe = 'Header_title_0e',
                    Pe = 'Header_description_d3',
                    Se = ({ title: e, description: t }) =>
                        s().createElement(
                            'div',
                            { className: ye },
                            s().createElement('div', { className: Fe }, e),
                            s().createElement('div', { className: Pe }, t),
                        );
                function Ne(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                const ke = R.strings.battle_pass,
                    Re = (0, b.Pi)(() => {
                        const e = (0, r.useState)(!1),
                            t = e[0],
                            a = e[1],
                            n = c().model.root.get(),
                            o = n.state,
                            i = n.chapterID,
                            u = (0, V.tv)();
                        return (
                            (0, r.useEffect)(() => {
                                (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                (yield (0, g.Eu)(), yield (0, p.nS)(), a(!0));
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (r, s) {
                                                    var n = e.apply(t, a);
                                                    function o(e) {
                                                        Ne(n, r, s, o, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        Ne(n, r, s, o, i, 'throw', e);
                                                    }
                                                    o(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })()();
                            }, []),
                            v.N.useHandleKeydown(E.n.ESCAPE, () => u.goBack()),
                            s().createElement(
                                'div',
                                { className: _()(f.base, f[`base__${o}`]) },
                                s().createElement('div', { className: f.background }),
                                t &&
                                    s().createElement(
                                        'div',
                                        { className: f.additionalAnimation },
                                        s().createElement(
                                            'div',
                                            { className: f.header },
                                            s().createElement(Se, {
                                                title: s().createElement(m.z, {
                                                    text: ke.holidayFinalScreen.chapter(),
                                                    binding: { chapterName: ke.chapter.fullNameUppercased.$num(i) },
                                                }),
                                                description: ke.holidayFinalScreen.completed(),
                                            }),
                                            s().createElement(
                                                'div',
                                                { className: f.awards },
                                                s().createElement(h.Z, {
                                                    rootId: R.aliases.battle_pass.HolidayFinal('resId'),
                                                    context: 'model.awardsWidget',
                                                }),
                                            ),
                                        ),
                                        s().createElement(ve, null),
                                        s().createElement('div', { className: f.footer }, s().createElement(De, null)),
                                    ),
                            )
                        );
                    }),
                    Le = () =>
                        s().createElement(
                            l,
                            { options: { rootId: R.aliases.battle_pass.HolidayFinal('resId') } },
                            s().createElement(Re, null),
                        );
            },
            1606: (e, t, a) => {
                'use strict';
                var r = a(7739),
                    s = a(7363),
                    n = a.n(s),
                    o = a(6483),
                    i = a.n(o),
                    u = a(926),
                    l = a.n(u),
                    c = a(5415);
                const d = ['children', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const m = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    E = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    s = {},
                                    n = Object.keys(e);
                                for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                                return s;
                            })(e, d);
                        const s = (0, c.GS)(),
                            o = s.mediaWidth,
                            u = s.mediaHeight,
                            l = s.mediaSize;
                        return n().createElement('div', _({ className: i()(a, m[o], p[u], E[l]) }, r), t);
                    },
                    b = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, b);
                    return n().createElement(r.ZN, null, n().createElement(g, a, t));
                };
                var h = a(1533),
                    f = a.n(h),
                    C = a(8030),
                    A = a(2893),
                    w = a(8246),
                    B = a(9174),
                    D = a(8470);
                const y = function (e, t) {
                    const a = (0, s.useState)(t),
                        r = a[0],
                        n = a[1];
                    return (
                        (0, s.useEffect)(() => {
                            function a() {
                                n(t());
                            }
                            const r = e(a);
                            return (
                                a(),
                                () => {
                                    r && r();
                                }
                            );
                        }, [e, t]),
                        r
                    );
                };
                const F = ({ children: e, prefix: t = '', context: a, getRoot: r, initializer: o, rootId: i }) => {
                        const u = (0, s.useRef)([]),
                            l = (0, s.useRef)(null),
                            c = (0, s.useMemo)(
                                () => (0, w.U)({ context: a, getRoot: r, initializer: o, rootId: i }),
                                [a, r, o, i],
                            ),
                            d = (0, s.useCallback)(
                                (e) => {
                                    const t = c.subscribe(e);
                                    return () => c.unsubscribe(t);
                                },
                                [c],
                            ),
                            _ = (0, s.useCallback)(() => {
                                const e = c.readByPath(),
                                    a = {
                                        location: ((r = t + e.route), r.endsWith('/') ? r.slice(0, -1) : r),
                                        params: e.params,
                                    };
                                var r;
                                return l.current && B.p6.shallow(l.current, a) ? l.current : ((l.current = a), a);
                            }, [c, t]),
                            m = y(d, _);
                        (0, s.useEffect)(() => c.dispose, [c]);
                        const p = (0, s.useMemo)(() => {
                                const e = [...u.current, m];
                                return ((u.current = e), Object.assign({}, m, { history: e }));
                            }, [m]),
                            E = (0, s.useMemo)(() => {
                                const e = c.createCallback(
                                    (e, t) => Object.assign({ route: e }, Boolean(t) && { params: JSON.stringify(t) }),
                                    'navigateTo',
                                );
                                return { push: e, replace: e, goBack: c.createCallbackNoArgs('navigateBack') };
                            }, [c]),
                            g = (0, s.useMemo)(() => Object.assign({}, p, E), [E, p]);
                        return n().createElement(D._.Provider, { value: g }, e);
                    },
                    P = {
                        linear: (e) => e,
                        easeInQuad: (e) => e * e,
                        easeOutQuad: (e) => e * (2 - e),
                        easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                        easeInCubic: (e) => e * e * e,
                        easeOutCubic: (e) => --e * e * e + 1,
                        easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        easeInQuart: (e) => e * e * e * e,
                        easeOutQuart: (e) => 1 - --e * e * e * e,
                        easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                        easeInQuint: (e) => e * e * e * e * e,
                        easeOutQuint: (e) => 1 + --e * e * e * e * e,
                        easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                        easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                        easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                        easeInOutCirc(e) {
                            const t = Math.sqrt,
                                a = Math.pow;
                            return e < 0.5 ? (1 - t(1 - a(2 * e, 2))) / 2 : (t(1 - a(-2 * e + 2, 2)) + 1) / 2;
                        },
                        easeOutBack(e) {
                            const t = 1.70158;
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                        },
                        bezier: (e, t, a, r) => (s) =>
                            (1 - s) * (1 - s) * (1 - s) * e +
                            3 * (1 - s) * (1 - s) * s * t +
                            3 * (1 - s) * s * s * a +
                            s * s * s * r,
                    };
                var S = a(3403),
                    N = a(7030),
                    k = a(1425),
                    R = a(404),
                    L = a(666),
                    x = a(8046),
                    I = a(2765),
                    T = a(9287),
                    O = a(9574),
                    M = a(6444),
                    $ = a(5831);
                const W = 'App_base_13',
                    H = 'App_mainView_e5',
                    z = (0, S.Pi)(() => {
                        const e = (0, M.tv)().location,
                            t = (0, N.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1, config: { duration: 150, easing: P.easeInQuad }, delay: 150 },
                            });
                        return n().createElement(
                            s.Suspense,
                            { fallback: n().createElement('div', null) },
                            n().createElement(
                                'div',
                                { className: W },
                                t((e, t) =>
                                    n().createElement(
                                        N.animated.div,
                                        { className: H, style: e },
                                        n().createElement(
                                            M.rs,
                                            { location: t },
                                            n().createElement(M.AW, { path: $._.battlePass.intro, component: L.f }),
                                            n().createElement(M.AW, {
                                                path: $._.battlePass.progression,
                                                component: x.X,
                                            }),
                                            n().createElement(M.AW, {
                                                path: $._.battlePass.chapterChoice,
                                                component: I.e,
                                            }),
                                            n().createElement(M.AW, {
                                                path: $._.battlePass.postProgression,
                                                component: O.v,
                                            }),
                                            n().createElement(M.AW, { path: $._.battlePass.buyPass, component: R.G }),
                                            n().createElement(M.AW, {
                                                path: $._.battlePass.buyPassConfirm,
                                                component: R.G,
                                            }),
                                            n().createElement(M.AW, {
                                                path: $._.battlePass.buyPassRewards,
                                                component: R.G,
                                            }),
                                            n().createElement(M.AW, { path: $._.battlePass.buyLevels, component: k.U }),
                                            n().createElement(M.AW, {
                                                path: $._.battlePass.buyLevelsRewards,
                                                component: k.U,
                                            }),
                                            n().createElement(M.AW, {
                                                path: $._.battlePass.holidayFinal,
                                                component: T.H,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                const G = (0, a(3215).q3)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t, { computes: {} });
                        },
                        ({ externalModel: e }) => ({}),
                    ),
                    U = G[0];
                G[1];
                engine.whenReady.then(() => {
                    ((0, A.CX)(document.getElementById('root')),
                        viewEnv.setFullscreenModeSupported(!0),
                        f().render(
                            n().createElement(
                                C.N.Provider,
                                null,
                                n().createElement(
                                    F,
                                    { context: 'model.router' },
                                    n().createElement(U, null, n().createElement(v, null, n().createElement(z, null))),
                                ),
                            ),
                            document.getElementById('root'),
                        ));
                });
            },
            5831: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => r });
                const r = {
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
            9574: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => sa });
                var r = a(7363),
                    s = a.n(r);
                let n, o;
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
                    })(o || (o = {})));
                var i = a(3215),
                    u = a(4598),
                    l = a(9480),
                    c = a(9174),
                    d = a(3946),
                    _ = a(1975),
                    m = a(156),
                    p = a(7736);
                const E = 1e3,
                    g = Object.assign({}, _.uu, {
                        withStack: !0,
                        type: p.r.Simple,
                        delta: { duration: 500, delay: 300 },
                        line: { duration: 500, delay: 300 },
                    }),
                    b = Object.assign({}, m.Gh, {
                        line: Object.assign({}, m.Gh.line, { bgColorFinished: '#000000' }),
                        pattern: Object.assign({}, m.Gh.pattern, { bgImageFinished: m.Gh.bgImageBase }),
                    });
                let v;
                !(function (e) {
                    ((e.FillProgressMax = 'fillProgressMax'),
                        (e.RunCycle = 'runCycle'),
                        (e.ResetProgress = 'resetProgress'),
                        (e.RefillProgress = 'refillProgress'),
                        (e.Idle = 'idle'));
                })(v || (v = {}));
                const h = {
                    [v.FillProgressMax]: { nextStep: v.RunCycle, delay: E },
                    [v.RunCycle]: { nextStep: v.ResetProgress, delay: 2200 },
                    [v.ResetProgress]: { nextStep: v.RefillProgress, delay: E },
                    [v.RefillProgress]: { nextStep: v.Idle, delay: E },
                };
                let f, C, A;
                (!(function (e) {
                    ((e.COMPLETED = 'completed'), (e.IN_PROGRESS = 'inProgress'), (e.NOT_STARTED = 'notStarted'));
                })(f || (f = {})),
                    (function (e) {
                        ((e.NotAvailable = 'notAvailable'),
                            (e.PurchasingIP = 'purchasingIP'),
                            (e.ExtraChapter = 'extraChapter'));
                    })(C || (C = {})),
                    (function (e) {
                        ((e.left = 'left'), (e.right = 'right'));
                    })(A || (A = {})));
                var w = a(5415);
                const B = {
                        '--small-card-width': '140rem',
                        '--small-current-card-width': '224rem',
                        '--medium-card-width': '220rem',
                        '--medium-current-card-width': '340rem',
                        '--extra-large-card-width': '276rem',
                    },
                    D = (e, t = !1) =>
                        t ? (e < w.cJ.Medium ? 224 : 340) : e < w.cJ.Medium ? 140 : e < w.cJ.ExtraLarge ? 220 : 276,
                    y = (0, i.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    levels: e.array('levels'),
                                    chapters: e.array('chapters'),
                                    animationStep: c.LO.box(v.Idle),
                                },
                                a = (0, d.Om)((e) => {
                                    const a = t.levels.get(),
                                        r = l.MH(a, e - 1);
                                    r || console.warn(`level info not found for number: ${e}`);
                                    const s = a.length;
                                    return Object.assign({}, r, {
                                        maxLevel: s,
                                        isFirstLevel: 1 === e,
                                        isLastLevel: e === s,
                                    });
                                }),
                                r = (0, d.Om)((e) => {
                                    const t = a(e);
                                    return l.UI(t.rewards, (e) => Object.assign({}, e));
                                }),
                                s = (0, d.Om)((e) => {
                                    const r = t.root.get(),
                                        s = r.currentLevel,
                                        n = r.currentLevelPoints,
                                        i = r.previousLevel,
                                        u = r.postProgressionStatus,
                                        l = t.animationStep.get();
                                    if ([v.FillProgressMax, v.RunCycle].includes(l))
                                        return e === i ? f.IN_PROGRESS : f.COMPLETED;
                                    const c = a(e),
                                        d = c.levelPoints,
                                        _ = c.maxLevel;
                                    return e < s || (s === _ && n === d * _)
                                        ? f.COMPLETED
                                        : e === s && (u !== o.Locked || n > 0)
                                          ? f.IN_PROGRESS
                                          : f.NOT_STARTED;
                                }),
                                i = (0, d.Om)((e) => {
                                    const a = t.root.get().postProgressionStatus,
                                        r = s(e);
                                    return { cardStatus: r, isDisabled: a !== o.Unlocked && r === f.NOT_STARTED };
                                }),
                                _ = (0, d.Om)(
                                    () =>
                                        E()
                                            ? b().length && h() && A()
                                                ? C.ExtraChapter
                                                : g()
                                                  ? C.PurchasingIP
                                                  : void 0
                                            : C.NotAvailable,
                                    { equals: u.jv },
                                ),
                                m = (0, d.Om)(() => l.hX(t.chapters.get(), (e) => e.isRegular), { equals: u.jv }),
                                p = (0, d.Om)(
                                    () =>
                                        l.hX(t.chapters.get(), (e) => e.isRegular && e.chapterStatus === n.Completed)
                                            .length,
                                    { equals: u.jv },
                                ),
                                E = (0, d.Om)(() => p() === m().length),
                                g = (0, d.Om)(() => l.G(t.chapters.get(), (e) => !e.isBattlePassPurchased)),
                                b = (0, d.Om)(() => l.hX(t.chapters.get(), (e) => !e.isRegular)),
                                h = (0, d.Om)(() => l.G(b(), (e) => e.chapterStatus !== n.Active)),
                                A = (0, d.Om)(() => l.G(b(), (e) => e.chapterStatus !== n.Completed)),
                                w = (0, d.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.currentLevel,
                                        r = e.currentLevelPoints,
                                        s = a - 1;
                                    return l.u4(
                                        t.levels.get(),
                                        (e, { levelPoints: t }, a) => (a < s ? e + t : a === s ? e + r : e),
                                        0,
                                    );
                                }),
                                B = (0, d.Om)(() => l.u4(t.levels.get(), (e, { levelPoints: t }) => e + t, 0)),
                                y = (0, d.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.currentLevel,
                                        r = e.currentLevelPoints,
                                        s = e.previousLevel,
                                        n = e.previousLevelPoints;
                                    return a !== s || r !== n;
                                }),
                                F = (0, d.Om)(() => {
                                    const e = t.root.get();
                                    return e.cyclesCompletedCount > e.previousCyclesCompletedCount;
                                }),
                                P = (0, d.Om)((e) => {
                                    const r = t.root.get(),
                                        s = r.currentLevel,
                                        n = r.currentLevelPoints,
                                        i = r.previousLevel,
                                        u = r.previousLevelPoints,
                                        l = r.postProgressionStatus,
                                        c = t.animationStep.get(),
                                        d = a(s),
                                        _ = d.levelPoints,
                                        m = d.maxLevel,
                                        p = a(i).levelPoints,
                                        E = F(),
                                        g = ((e, t) => {
                                            const a = D(e),
                                                r = D(e, t);
                                            return [a, t ? r : a];
                                        })(e, l !== o.Locked),
                                        b = g[0],
                                        h = g[1],
                                        f = b * (m - 1) + h,
                                        C = (
                                            (e, t) =>
                                            (a, r, s, n = !1) =>
                                                e * (a - 1) + ((n ? e : t) / s) * r
                                        )(b, h),
                                        A = !E && i < s;
                                    return {
                                        progressValue: [v.FillProgressMax, v.RunCycle].includes(c) ? f : C(s, n, _),
                                        previousProgressValue: c === v.ResetProgress ? 0 : C(i, u, p, A),
                                        maxProgressValue: f,
                                    };
                                }),
                                S = (0, d.Om)(() => l.hX(t.chapters.get(), (e) => !e.isBattlePassPurchased));
                            return Object.assign({}, t, {
                                computes: {
                                    footerState: _,
                                    regularChapters: m,
                                    completedRegularChaptersCount: p,
                                    extraChapters: b,
                                    cardStates: i,
                                    levelInfo: a,
                                    levelRewards: r,
                                    currentPointsInChapter: w,
                                    totalPointsInChapter: B,
                                    progressChanged: y,
                                    cycleChanged: F,
                                    getProgressValues: P,
                                    chaptersForPurchase: S,
                                },
                            });
                        },
                        ({ model: e, externalModel: t }) => ({
                            openPointsInfo: t.createCallbackNoArgs('onOpenPointsInfo'),
                            openInfoPage: t.createCallbackNoArgs('onOpenInfoPage'),
                            setAnimationStep: (0, c.aD)((t) => e.animationStep.set(t)),
                            handleProgressAchieved: t.createCallbackNoArgs('onProgressAchieved'),
                            handleCycleCompleted: t.createCallbackNoArgs('onCycleCompleted'),
                        }),
                    ),
                    F = y[0],
                    P = y[1];
                var S = a(122),
                    N = a(5521),
                    k = a(3403),
                    L = a(9485),
                    x = a(2432),
                    I = a(8030),
                    T = a(6444),
                    O = a(6483),
                    M = a.n(O);
                const $ = {
                        base: 'Card_base_5d',
                        base__inProgress: 'Card_base__inProgress_e1',
                        stage: 'Card_stage_92',
                        rewards: 'Card_rewards_f5',
                        status: 'Card_status_65',
                        points: 'Card_points_ed',
                        points__initial: 'Card_points__initial_e9',
                        progressShadow: 'Card_progressShadow_4c',
                    },
                    W = 'Background_base_1d',
                    H = 'Background_default_66',
                    z = 'Background_base__first_70',
                    G = 'Background_base__last_59',
                    U = 'Background_disabled_e9',
                    V = 'Highlight_base_af',
                    j = 'Highlight_inner_67',
                    q = 'Highlight_side_19',
                    Z = 'Highlight_side__left_1c',
                    X = 'Highlight_side__right_ed',
                    Y = (0, r.memo)(() =>
                        s().createElement(
                            'div',
                            { className: V },
                            s().createElement('div', { className: M()(q, Z) }),
                            s().createElement('div', { className: j }),
                            s().createElement('div', { className: M()(q, X) }),
                        ),
                    ),
                    K = (0, k.Pi)(({ level: e }) => {
                        const t = P().model,
                            a = t.computes.levelInfo(e),
                            r = a.isFirstLevel,
                            n = a.isLastLevel,
                            o = t.computes.cardStates(e),
                            i = o.cardStatus,
                            u = o.isDisabled;
                        return s().createElement(
                            'div',
                            { className: M()(W, r && z, n && G) },
                            s().createElement('div', { className: H }),
                            u && s().createElement('div', { className: U }),
                            i === f.IN_PROGRESS && s().createElement(Y, null),
                        );
                    });
                var Q = a(2862),
                    J = a(729),
                    ee = a(5739);
                const te = {
                    base: 'CardRewards_base_f2',
                    base__completed: 'CardRewards_base__completed_08',
                    rewards: 'CardRewards_rewards_0a',
                    rewards__2: 'CardRewards_rewards__2_ee',
                    base__inProgress: 'CardRewards_base__inProgress_7c',
                    rewards__3: 'CardRewards_rewards__3_f9',
                    reward: 'CardRewards_reward_0e',
                    rewards__1: 'CardRewards_rewards__1_10',
                };
                function ae() {
                    return (
                        (ae =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        ae.apply(this, arguments)
                    );
                }
                const re = (0, d.Om)((e) => {
                        const t = e.item,
                            a = e.name,
                            r = e.value,
                            s = e.overlayType,
                            n = e.tooltipId,
                            o = e.tooltipContentId;
                        return {
                            name: t || a,
                            smallImage: (0, J.ry)(e, Q.h2.Big),
                            bigImage: (0, J.ry)(e, Q.h2.S180x135),
                            special: s,
                            value: r,
                            valueType: (0, J.p3)(a),
                            tooltipArgs: (0, J.pI)({ tooltipId: n }, Number(o), { ignoreShowDelay: !0 }),
                        };
                    }),
                    se = (0, k.Pi)(({ level: e, className: t }) => {
                        const a = P().model,
                            r = a.computes.levelRewards(e),
                            n = a.computes.cardStates(e).cardStatus,
                            o = (0, w.GS)().mediaSize < w.cJ.Medium,
                            i = 1 === r.length,
                            u = ((e, t) => (t ? (e ? Q.h2.Big : Q.h2.S180x135) : e ? Q.h2.Small : Q.h2.Big))(o, i),
                            c = (e) => (o || !i ? e.smallImage : e.bigImage);
                        return s().createElement(
                            'div',
                            { className: M()(te.base, te[`base__${n}`], t) },
                            s().createElement(
                                'div',
                                { className: M()(te.rewards, te[`rewards__${r.length}`]) },
                                l.UI(r, (e, t) => {
                                    const a = re(e);
                                    return s().createElement(
                                        'div',
                                        { key: `reward__${a.name}${t}`, className: M()(te.reward) },
                                        s().createElement(ee.Q, ae({ size: u, image: c(a) }, a)),
                                    );
                                }),
                            ),
                        );
                    }),
                    ne = {
                        base: 'Divider_base_a2',
                        base__left: 'Divider_base__left_a0',
                        base__right: 'Divider_base__right_91',
                        inner: 'Divider_inner_c8',
                    },
                    oe = ({ position: e }) =>
                        s().createElement(
                            'div',
                            { className: M()(ne.base, ne[`base__${e}`]) },
                            s().createElement('div', { className: ne.inner }),
                        );
                var ie = a(7727),
                    ue = a(7030),
                    le = a(2893);
                const ce = {
                        base: 'Stage_base_4c',
                        number: 'Stage_number_f6',
                        animatedNumber: 'Stage_animatedNumber_90',
                        numberInProgress: 'Stage_numberInProgress_e0',
                        title: 'Stage_title_1e',
                        glow: 'Stage_glow_9b',
                        base__inProgress: 'Stage_base__inProgress_e1',
                        animatedGlow: 'Stage_animatedGlow_7f',
                    },
                    de = (0, k.Pi)(({ level: e, className: t }) => {
                        const a = P().model,
                            n = a.root.get().postProgressionStatus,
                            i = a.computes.cardStates(e).cardStatus,
                            u = (0, r.useState)(!1),
                            l = u[0],
                            c = u[1],
                            d = i === f.IN_PROGRESS,
                            _ = n === o.Unlocked,
                            m = (0, ue.useSpring)({
                                from: { stageOpacity: l ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, ie.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: le.ei },
                            }).stageOpacity,
                            p = (0, ue.useSpring)({
                                from: { sparkOpacity: l ? 0.7 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => c(!1),
                                config: { duration: 300, easing: le.ei },
                            }).sparkOpacity;
                        return (
                            (0, r.useEffect)(() => {
                                if (d)
                                    return (0, S.F)(() => {
                                        c(!0);
                                    }, 100);
                            }, [d]),
                            s().createElement(
                                'div',
                                { className: M()(ce.base, ce[`base__${i}`], t) },
                                d
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          _ &&
                                              s().createElement(
                                                  s().Fragment,
                                                  null,
                                                  s().createElement('div', { className: ce.glow }),
                                                  s().createElement(ue.animated.div, {
                                                      style: { opacity: p },
                                                      className: ce.animatedGlow,
                                                  }),
                                              ),
                                          s().createElement(
                                              'div',
                                              { className: ce.numberInProgress },
                                              e,
                                              s().createElement(
                                                  ue.animated.div,
                                                  {
                                                      style: {
                                                          opacity: m,
                                                          transform: m
                                                              .to([0, 1], [2.5, 1])
                                                              .to((e) => `translate(-50%, -50%) scale(${e})`),
                                                      },
                                                      className: ce.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          s().createElement(
                                              'div',
                                              { className: ce.title },
                                              R.strings.battle_pass.postProgressionView.progression.currentStep(),
                                          ),
                                      )
                                    : s().createElement('div', { className: ce.number }, e),
                            )
                        );
                    });
                var _e = a(6373);
                const me = {
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
                    pe = ({ shouldAppear: e }) =>
                        s().createElement(
                            'div',
                            { className: M()(me.base, e ? me.base__showAnimation : me.base__hideAnimation) },
                            s().createElement('div', { className: me.iconGlow }),
                            s().createElement(
                                _e.i,
                                { body: R.strings.battle_pass.tooltips.completed.got() },
                                s().createElement('div', { className: me.icon }),
                            ),
                        );
                var Ee = a(2056);
                const ge = {
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
                    be = (0, k.Pi)(({ totalLevelPoints: e, shouldAppear: t, shouldDisappear: a, className: r }) => {
                        const n = P().model.root.get(),
                            o = n.currentLevelPoints,
                            i = n.previousLevelPoints;
                        return s().createElement(
                            Ee.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            s().createElement(
                                'div',
                                { className: M()(ge.base, t && ge.base__appear, a && ge.base__disappear, r) },
                                s().createElement('div', { className: M()(ge.value, ge.value__current) }, a ? i : o),
                                s().createElement('div', { className: ge.divider }, '/'),
                                s().createElement('div', { className: M()(ge.value, ge.value__total) }, e),
                                s().createElement('div', { className: ge.icon }),
                            ),
                        );
                    }),
                    ve = 'Status_base_76',
                    he = 'Status_pointsWrapper_26',
                    fe = (0, k.Pi)(({ level: e, className: t }) => {
                        const a = P().model,
                            n = a.computes.cardStates(e),
                            o = n.cardStatus,
                            i = n.isDisabled,
                            u = a.computes.levelInfo(e).levelPoints,
                            l = a.animationStep.get(),
                            c = [v.FillProgressMax, v.RunCycle].includes(l),
                            d = l === v.ResetProgress,
                            _ = o === f.COMPLETED && !i,
                            m = o === f.IN_PROGRESS,
                            p = (0, r.useState)(_),
                            E = p[0],
                            g = p[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (l === v.RunCycle) return void g(!1);
                                const t = l === v.FillProgressMax,
                                    a = l === v.ResetProgress;
                                return E
                                    ? void 0
                                    : (0, S.F)(
                                          () => {
                                              g(!!t || _);
                                          },
                                          (a ? 500 : 0) + 100 * e,
                                      );
                            }, [l, E, _, e]),
                            s().createElement(
                                'div',
                                { className: M()(ve, t) },
                                _ && s().createElement(pe, { key: `statusCompleted-${e}`, shouldAppear: E }),
                                m &&
                                    s().createElement(be, {
                                        className: he,
                                        totalLevelPoints: u,
                                        shouldAppear: d,
                                        shouldDisappear: c,
                                    }),
                            )
                        );
                    }),
                    Ce = (0, k.Pi)(({ level: e }) => {
                        const t = P().model,
                            a = t.computes.levelInfo(e),
                            r = a.levelPoints,
                            n = a.isFirstLevel,
                            o = a.isLastLevel,
                            i = t.computes.cardStates(e).cardStatus,
                            u = !n && i === f.IN_PROGRESS,
                            l = !o && t.computes.cardStates(e + 1).cardStatus !== f.IN_PROGRESS;
                        return s().createElement(
                            'div',
                            { className: M()($.base, $[`base__${i}`]), style: B },
                            s().createElement(K, { level: e }),
                            s().createElement(de, { className: $.stage, level: e }),
                            s().createElement(se, { className: $.rewards, level: e }),
                            s().createElement(fe, { className: $.status, level: e }),
                            s().createElement('div', { className: $.points }, e * r),
                            n && s().createElement('div', { className: M()($.points, $.points__initial) }, 0),
                            u && s().createElement(oe, { position: A.left }),
                            l && s().createElement(oe, { position: A.right }),
                        );
                    }),
                    Ae = 'Cards_base_3e',
                    we = (0, k.Pi)(() => {
                        const e = P().model,
                            t = e.levels.get(),
                            a = e.root.get().chapterID;
                        return s().createElement(
                            'div',
                            { className: Ae },
                            l.UI(t, ({ level: e }, t) => s().createElement(Ce, { key: `${a}_${t}`, level: e })),
                        );
                    }),
                    Be = 'Footer_base_0b';
                var De = a(514);
                const ye = 'ExtraChapter_base_37',
                    Fe = 'ExtraChapter_wrapper_f7',
                    Pe = 'ExtraChapter_border_a2',
                    Se = 'ExtraChapter_base__hover_bf',
                    Ne = 'ExtraChapter_bg_25',
                    ke = 'ExtraChapter_widget_71',
                    Re = 'ExtraChapter_title_1c',
                    Le = 'ExtraChapter_description_33',
                    xe = 'ExtraChapter_content_9d';
                var Ie = a(5831);
                const Te = R.strings.battle_pass.postProgressionView.footer.extraChapter,
                    Oe = (0, k.Pi)(() => {
                        var e;
                        const t = null == (e = P().model.computes.extraChapters()[0]) ? void 0 : e.chapterID,
                            a = (0, r.useState)(!1),
                            n = a[0],
                            o = a[1],
                            i = (0, T.tv)();
                        return t
                            ? s().createElement(
                                  'div',
                                  {
                                      className: M()(ye, n && Se),
                                      onMouseOver: (e) => {
                                          (e.stopPropagation(), o(!0), De.hY.sound('highlight'));
                                      },
                                      onMouseOut: () => {
                                          o(!1);
                                      },
                                      onClick: () => {
                                          (i.push(Ie._.battlePass.progression, { chapterID: t }), De.hY.sound('play'));
                                      },
                                  },
                                  s().createElement(
                                      'div',
                                      { className: Fe },
                                      s().createElement('div', { className: Ne }),
                                      s().createElement(
                                          'div',
                                          { className: xe },
                                          s().createElement('div', { className: Re }, Te.title.text()),
                                          s().createElement('div', { className: Le }, Te.description.text()),
                                      ),
                                  ),
                                  s().createElement('div', { className: ke }),
                                  s().createElement('div', { className: Pe }),
                              )
                            : null;
                    });
                var Me = a(3457),
                    $e = a(9766);
                const We = 'NotAvailable_base_54',
                    He = 'NotAvailable_background_c6',
                    ze = 'NotAvailable_content_53',
                    Ge = 'NotAvailable_button_7a',
                    Ue = 'NotAvailable_description_9b',
                    Ve = 'NotAvailable_completedCount_12',
                    je = R.strings.battle_pass.postProgressionView.footer,
                    qe = (0, k.Pi)(() => {
                        const e = P().model,
                            t = (0, T.tv)(),
                            a = e.computes.completedRegularChaptersCount(),
                            r = e.computes.regularChapters().length;
                        return s().createElement(
                            'div',
                            { className: We },
                            s().createElement('div', { className: He }),
                            s().createElement(
                                'div',
                                { className: ze },
                                s().createElement($e.z, {
                                    classMix: Ue,
                                    text: je.description.text(),
                                    binding: {
                                        completedChapters: s().createElement('span', { className: Ve }, a),
                                        chaptersAmount: r,
                                    },
                                }),
                                s().createElement(
                                    Me.u5,
                                    {
                                        type: Me.L$.ghost,
                                        size: Me.qE.medium,
                                        mixClass: Ge,
                                        onClick: () => t.push(Ie._.battlePass.chapterChoice),
                                    },
                                    je.button.text(),
                                ),
                            ),
                        );
                    });
                var Ze = a(2106);
                const Xe = 'PurchasingIP_base_a7',
                    Ye = 'PurchasingIP_wrapper_66',
                    Ke = 'PurchasingIP_border_3f',
                    Qe = 'PurchasingIP_base__hover_da',
                    Je = 'PurchasingIP_bg_fa',
                    et = 'PurchasingIP_blink_ce',
                    tt = 'PurchasingIP_text_35',
                    at = 'PurchasingIP_button_f8',
                    rt = 'PurchasingIP_content_53',
                    st = R.strings.battle_pass.postProgressionView.footer.purchaseIP,
                    nt = (0, k.Pi)(() => {
                        const e = P().model,
                            t = (0, T.tv)(),
                            a = (0, r.useState)(!1),
                            n = a[0],
                            o = a[1];
                        return s().createElement(
                            'div',
                            {
                                className: M()(Xe, n && Qe),
                                onMouseOver: (e) => {
                                    (e.stopPropagation(), o(!0), De.hY.sound('highlight'));
                                },
                                onMouseOut: () => {
                                    o(!1);
                                },
                                onClick: () => {
                                    const a = e.computes.chaptersForPurchase();
                                    (De.hY.sound('play'),
                                        1 === a.length
                                            ? t.push(Ie._.battlePass.buyPassConfirm, { packageID: a[0].chapterID })
                                            : t.push(Ie._.battlePass.buyPass));
                                },
                            },
                            s().createElement(
                                'div',
                                { className: Ye },
                                s().createElement('div', { className: Je }),
                                s().createElement('div', { className: et }),
                                s().createElement(
                                    'div',
                                    { className: rt },
                                    s().createElement(
                                        'div',
                                        { className: tt },
                                        R.strings.battle_pass.postProgressionView.footer.purchaseIP.banner.text(),
                                    ),
                                    s().createElement(
                                        Me.u5,
                                        { type: Ze.L.main, size: Ze.q.medium, mixClass: at },
                                        st.button.text(),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: Ke }),
                        );
                    }),
                    ot = (0, k.Pi)(({ className: e = '' }) => {
                        const t = P().model.computes.footerState();
                        return s().createElement(
                            'div',
                            { className: M()(Be, e) },
                            (() => {
                                switch (t) {
                                    case C.NotAvailable:
                                        return s().createElement(qe, null);
                                    case C.PurchasingIP:
                                        return s().createElement(nt, null);
                                    case C.ExtraChapter:
                                        return s().createElement(Oe, null);
                                    default:
                                        return null;
                                }
                            })(),
                        );
                    });
                var it = a(615),
                    ut = a(7044);
                const lt = 'Header_base_07',
                    ct = 'Header_background_b8',
                    dt = 'Header_headlineContainer_53',
                    _t = 'Header_headline_16',
                    mt = 'Header_divider_87',
                    pt = 'Header_title_14',
                    Et = 'Header_descriptionContainer_9b',
                    gt = 'Header_descriptionPaused_28',
                    bt = 'Header_description_c0',
                    vt = 'Header_icon_1b',
                    ht = 'Header_label_b2',
                    ft = R.strings.battle_pass.postProgressionView.header,
                    Ct = (0, k.Pi)(({ className: e }) => {
                        const t = P().model.root.get(),
                            a = t.postProgressionStatus,
                            r = t.endDate,
                            n = a === o.Locked,
                            i = a === o.Paused,
                            u = (0, ut.UI)(r, it.C.DayMonthFull);
                        return s().createElement(
                            'div',
                            { className: M()(lt, e) },
                            s().createElement('div', { className: ct }),
                            s().createElement(
                                'div',
                                { className: dt },
                                !n &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('span', { className: _t }, ft.headline.unlocked()),
                                        s().createElement('div', { className: mt }),
                                    ),
                                s().createElement($e.z, {
                                    classMix: _t,
                                    text: ft.headline.deadline(),
                                    binding: { endDate: u },
                                }),
                            ),
                            s().createElement('span', { className: pt }, ft.title()),
                            s().createElement(
                                'div',
                                { className: Et },
                                i
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement('div', { className: vt }),
                                          s().createElement(
                                              'span',
                                              { className: ht },
                                              ft.description.onPause.highlight(),
                                          ),
                                          s().createElement(
                                              'span',
                                              { className: gt },
                                              ft.description.onPause.regular(),
                                          ),
                                      )
                                    : s().createElement('span', { className: bt }, ft.description.active()),
                            ),
                        );
                    });
                var At = a(8910);
                var wt = a(3112);
                const Bt = 'Counter_base_8f',
                    Dt = 'Counter_infinityIconContainer_2c',
                    yt = 'Counter_infinityIcon_12',
                    Ft = 'Counter_label_db',
                    Pt = 'Counter_cyclesCompleted_a0',
                    St = 'Counter_cyclesNumber_5c',
                    Nt = 'Counter_cyclesNumber__animated_d8',
                    kt = 'Counter_cyclesNumber__hidden_c1',
                    Rt = R.strings.battle_pass.postProgressionView.progression,
                    Lt = (0, k.Pi)(({ className: e, labelRef: t, shouldRun: a }) => {
                        const r = P().model,
                            n = r.root.get(),
                            o = n.cyclesCompletedCount,
                            i = n.previousCyclesCompletedCount,
                            u = r.animationStep.get(),
                            l = o !== i && [v.Idle, v.FillProgressMax].includes(u);
                        return s().createElement(
                            'div',
                            { className: M()(Bt, e), ref: t },
                            s().createElement('div', { className: Dt }, s().createElement('div', { className: yt })),
                            s().createElement(
                                'div',
                                { className: Ft },
                                o
                                    ? s().createElement(
                                          'div',
                                          { className: Pt },
                                          s().createElement('span', null, Rt.cyclesCompleted()),
                                          s().createElement(
                                              'span',
                                              {
                                                  key: `cyclesCompletedCount-${a}`,
                                                  className: M()(St, a && Nt, l && kt),
                                              },
                                              o,
                                          ),
                                      )
                                    : Rt.cyclicalProgression(),
                            ),
                        );
                    }),
                    xt = {
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
                    It = '--label-offset',
                    Tt = { left: 0, width: 0 },
                    Ot = (0, k.Pi)(({ className: e, shouldRun: t }) => {
                        const a = P().model.root.get().cyclesCompletedCount,
                            n = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            i = (0, w.GS)().mediaSize,
                            u = (0, wt.V)(),
                            l = (0, r.useState)({ [It]: '0%' }),
                            c = l[0],
                            d = l[1];
                        var _, m;
                        return (
                            (_ = () => {
                                var e, t, a, r;
                                const s =
                                        null != (e = null == (t = n.current) ? void 0 : t.getBoundingClientRect())
                                            ? e
                                            : Tt,
                                    i =
                                        null != (a = null == (r = o.current) ? void 0 : r.getBoundingClientRect().left)
                                            ? a
                                            : 0,
                                    l = 15 * u,
                                    c = (100 * (i - s.left - l)) / s.width;
                                d({ [It]: `${c}%` });
                            }),
                            (m = [n.current, o.current, i, u, a]),
                            (0, r.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            ((e = null), _());
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, m),
                            s().createElement(
                                'div',
                                { className: M()(xt.base, e), style: c },
                                s().createElement('div', { className: xt.arrow }),
                                s().createElement(
                                    'div',
                                    { className: M()(xt.contour, xt[`contour__${u}x`]), ref: n },
                                    s().createElement('div', { className: M()(xt.border, xt.border__vertical) }),
                                    s().createElement('div', { className: M()(xt.border, xt.border__horizontal) }),
                                    t &&
                                        Array(5)
                                            .fill(void 0)
                                            .map((e, t) =>
                                                s().createElement('div', {
                                                    key: `bar-${t}`,
                                                    className: M()(xt.bar, xt[`bar__state${t + 1}`]),
                                                }),
                                            ),
                                ),
                                s().createElement(Lt, { className: xt.labelContainer, labelRef: o, shouldRun: t }),
                            )
                        );
                    }),
                    Mt = 'ProgressBar_base_11',
                    $t = 'ProgressBar_progressBackground_20',
                    Wt = 'ProgressBar_progressBar_b0',
                    Ht = 'ProgressBar_progressBar__disabled_21',
                    zt = 'ProgressBar_cycle_49',
                    Gt = (0, k.Pi)(() => {
                        const e = P(),
                            t = e.model,
                            a = e.controls,
                            n = t.root.get().postProgressionStatus,
                            i = t.animationStep.get(),
                            u = i === v.RunCycle,
                            l = n === o.Locked,
                            c = n === o.Paused,
                            d = l || c,
                            _ = (0, w.GS)().mediaSize,
                            m = t.computes.getProgressValues(_),
                            p = m.progressValue,
                            h = m.previousProgressValue,
                            f = m.maxProgressValue,
                            C = t.computes.progressChanged();
                        ((0, r.useEffect)(() => {
                            switch (i) {
                                case v.FillProgressMax:
                                case v.RefillProgress:
                                    return void a.handleProgressAchieved();
                                case v.RunCycle:
                                    return void a.handleCycleCompleted();
                            }
                        }, [i, a]),
                            (0, r.useEffect)(() => {
                                if (C && i === v.Idle)
                                    return (0, S.F)(() => {
                                        a.handleProgressAchieved();
                                    }, E);
                            }, [i, a, C]));
                        const A = (0, r.useRef)((0, At.MR)());
                        return s().createElement(
                            'div',
                            { className: Mt, style: { '--progress-line-width': `${f}rem` } },
                            s().createElement('div', { className: $t }),
                            s().createElement(
                                Ee.u,
                                { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                s().createElement(
                                    'div',
                                    { className: M()(Wt, d && Ht) },
                                    s().createElement(At._e, {
                                        api: A,
                                        value: p,
                                        deltaFrom: h,
                                        maxValue: f,
                                        disabled: d,
                                        animationSettings: g,
                                        theme: b,
                                    }),
                                ),
                            ),
                            s().createElement(Ot, { className: zt, shouldRun: u }),
                        );
                    });
                var Ut = a(8089);
                const Vt = 'Toolbar_infoButtons_d0',
                    jt = R.strings.battle_pass.postProgressionView.toolbar,
                    qt = (0, k.Pi)(({ className: e }) => {
                        const t = P().controls,
                            a = t.openInfoPage,
                            r = t.openPointsInfo;
                        return s().createElement(
                            'div',
                            { className: e },
                            s().createElement(
                                'div',
                                { className: Vt },
                                s().createElement(Ut.A, { caption: jt.aboutBattlePass(), type: 'info', onClick: a }),
                                s().createElement(Ut.A, { caption: jt.howToEarnPoints(), type: 'info', onClick: r }),
                            ),
                        );
                    }),
                    Zt = 'App_base_21',
                    Xt = 'App_toolbar_de',
                    Yt = 'App_awardsWidget_e1',
                    Kt = 'App_award_6a',
                    Qt = 'App_content_c6',
                    Jt = 'App_header_a1',
                    ea = 'App_progression_75',
                    ta = 'App_footer_8e',
                    aa = R.images.gui.maps.icons.battlePass.backgrounds.progression,
                    ra = (0, k.Pi)(() => {
                        const e = P(),
                            t = e.model,
                            a = e.controls,
                            n = t.root.get().chapterID,
                            o = t.animationStep.get(),
                            i = t.computes.cycleChanged(),
                            u = (0, T.tv)();
                        ((0, r.useEffect)(() => {
                            if (o !== v.Idle) {
                                const e = h[o],
                                    t = e.nextStep,
                                    r = e.delay;
                                return (0, S.F)(() => {
                                    a.setAnimationStep(t);
                                }, r);
                            }
                            i && a.setAnimationStep(v.FillProgressMax);
                        }, [o, a, i]),
                            I.N.useHandleKeydown(N.n.ESCAPE, () => u.goBack()));
                        const l = `url(${(0, L.wD)(aa, n)})`;
                        return s().createElement(
                            'div',
                            { className: Zt, style: { backgroundImage: l } },
                            s().createElement(qt, { className: Xt }),
                            s().createElement(x.Z, {
                                rootId: R.aliases.battle_pass.PostProgression('resId'),
                                context: 'model.awardsWidget',
                                classNames: { base: Yt, award: Kt },
                            }),
                            s().createElement(
                                'div',
                                { className: Qt },
                                s().createElement(Ct, { className: Jt }),
                                s().createElement(
                                    'div',
                                    { className: ea },
                                    s().createElement(we, null),
                                    s().createElement(Gt, null),
                                ),
                            ),
                            s().createElement(ot, { className: ta }),
                        );
                    }),
                    sa = () =>
                        s().createElement(
                            F,
                            { options: { rootId: R.aliases.battle_pass.PostProgression('resId') } },
                            s().createElement(ra, null),
                        );
            },
            2640: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => S });
                var r = a(6724),
                    s = a(5521),
                    n = a(9916),
                    o = a(3403),
                    i = a(7363),
                    u = a.n(i),
                    l = a(9485),
                    c = a(8030),
                    d = a(4420),
                    _ = a(6444),
                    m = a(6483),
                    p = a.n(m),
                    E = a(3862),
                    g = a(9430),
                    b = a(1307),
                    v = a(2189);
                const h = 'Content_base_94',
                    f = 'Content_mainContent_d4',
                    C = 'Content_base__noScroll_d3',
                    A = R.strings.battle_pass.battlePassBuyView.reward,
                    w = () => {
                        const e = (0, v.t)().model,
                            t = e.levels.get(),
                            a = t.fromLevel,
                            r = t.toLevel,
                            s = t.isPurchaseWithLevels,
                            n = e.computes.nowRewards(),
                            o = e.computes.futureRewards(),
                            l = ((e, t, a) =>
                                a
                                    ? { description: A.descriptionNowRewardsCheckbox() }
                                    : e < t
                                      ? { description: A.descriptionNowRewards(), completedSteps: `${e} - ${t}` }
                                      : { description: A.descriptionNowRewardsSingle(), completedSteps: `${t}` })(
                                a,
                                r,
                                s,
                            ),
                            c = l.description,
                            d = l.completedSteps,
                            _ = (0, i.useState)(!1),
                            m = _[0],
                            w = _[1];
                        return u().createElement(
                            b.z,
                            { className: p()(h, !m && C), setVisibleScroll: w },
                            u().createElement(
                                'div',
                                { className: f },
                                n.length > 0 &&
                                    u().createElement(g.r, {
                                        description: c,
                                        iconType: E.Q.now,
                                        rewards: n,
                                        steps: d,
                                        title: A.titleNowRewards(),
                                    }),
                                o.length > 0 &&
                                    u().createElement(g.r, {
                                        description: A.descriptionFutureRewards(),
                                        iconType: E.Q.future,
                                        rewards: o,
                                        title: A.titleFutureRewards(),
                                    }),
                            ),
                        );
                    },
                    B = 'RewardsViewContent_base_42',
                    D = 'RewardsViewContent_content_64',
                    y = 'RewardsViewContent_background_37',
                    F = 'RewardsViewContent_shadow_2a';
                function P(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                const S = (0, o.Pi)(() => {
                    const e = (0, v.t)().model.levels.get().chapterID,
                        t = (0, i.useState)(!1),
                        a = t[0],
                        o = t[1],
                        m = (0, _.tv)();
                    (c.N.useHandleKeydown(s.n.ESCAPE, () => m.goBack()),
                        (0, i.useEffect)(() => {
                            (function () {
                                var e,
                                    t =
                                        ((e = function* () {
                                            (yield (0, n.Eu)(), yield (0, r.nS)(), o(!0));
                                        }),
                                        function () {
                                            var t = this,
                                                a = arguments;
                                            return new Promise(function (r, s) {
                                                var n = e.apply(t, a);
                                                function o(e) {
                                                    P(n, r, s, o, i, 'next', e);
                                                }
                                                function i(e) {
                                                    P(n, r, s, o, i, 'throw', e);
                                                }
                                                o(void 0);
                                            });
                                        });
                                return function () {
                                    return t.apply(this, arguments);
                                };
                            })()();
                        }, []));
                    const p = {
                        backgroundImage: `url(${(0, l.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, e)})`,
                    };
                    return u().createElement(
                        'div',
                        { className: B },
                        u().createElement(
                            'div',
                            { className: y },
                            u().createElement(d.N, { chapter: e, isCurrent: !0, customBackgroundStyle: p }),
                        ),
                        u().createElement('div', { className: F }),
                        a && u().createElement('div', { className: D }, u().createElement(w, null)),
                    );
                });
            },
            2189: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => i, t: () => u });
                var r = a(3215),
                    s = a(4598),
                    n = a(3946);
                const o = (0, r.q3)()(({ observableModel: e }) => {
                        const t = {
                                levels: e.object(),
                                nowRewards: e.array('nowRewards.items'),
                                futureRewards: e.array('futureRewards.items'),
                            },
                            a = (0, n.Om)(() => t.nowRewards.get(), { equals: s.jv }),
                            r = (0, n.Om)(() => t.futureRewards.get(), { equals: s.jv });
                        return Object.assign({}, t, { computes: { nowRewards: a, futureRewards: r } });
                    }, s.ZT),
                    i = o[0],
                    u = o[1];
            },
            5689: (e, t, a) => {
                'use strict';
                a.d(t, { jw: () => s, k9: () => r });
                const r = 3e3,
                    s = 'new_skill';
            },
            9485: (e, t, a) => {
                'use strict';
                a.d(t, { OH: () => c, TZ: () => l, W4: () => u, cs: () => o, fW: () => i, wD: () => n });
                var r = a(8546);
                const s = (e) => {
                        switch (e) {
                            case r.$u.Micro:
                                return 's';
                            case r.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    n = (e, t, a = '') => {
                        const r = a.length > 0 ? `_${a}` : a,
                            s = e.$dyn(`c_${t}${r}`),
                            n = String(t).slice(-1),
                            o = e.$dyn(`default_${n}${r}`);
                        return s || o;
                    },
                    o = (e, t, a) => {
                        const r = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            o = t ? 'BP' : '',
                            i = `${s(a)}${o}`;
                        return { backgroundImage: `url(${n(r, e, i)})` };
                    },
                    i = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.flag,
                            r = s(t);
                        return { backgroundImage: `url(${n(a, e, r)})` };
                    },
                    u = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${n(t.progression, e)})` }
                            : { backgroundImage: `url(${t.$dyn('common')})` };
                    },
                    l = (e) => ({
                        backgroundImage: `url(${n(R.images.gui.maps.icons.battlePass.chapter_choice.commander, e)})`,
                    }),
                    c = (e) => ({
                        backgroundImage: `url(${n(R.images.gui.maps.icons.battlePass.chapter_choice.tank, e)})`,
                    });
            },
            930: (e, t, a) => {
                'use strict';
                let r;
                !(function (e) {
                    ((e.style = 'style'), (e.tankman = 'tankman'));
                })(r || (r = {}));
                (r.style, r.tankman);
            },
            2893: (e, t, a) => {
                'use strict';
                a.d(t, {
                    $n: () => m,
                    CX: () => f,
                    Hj: () => l,
                    UP: () => d,
                    ab: () => b,
                    at: () => g,
                    ei: () => i,
                    pC: () => c,
                    r_: () => u,
                    u6: () => h,
                    uc: () => v,
                });
                var r = a(2862),
                    s = a(729),
                    n = (a(5216), a(7044)),
                    o = a(3649);
                (a(8546), a(930));
                const i = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    u = { BP_HIGHLIGHT: 'bp_highlight' },
                    l = {
                        progressiveStyle: 'progressiveStyle',
                        style: 'style',
                        tankman: 'tankman',
                        vehicle: 'vehicle',
                        battleQuest: 'battleQuest',
                    },
                    c = (e) => R.strings.battle_pass.chapter.fullNameUppercased.$dyn(`c_${e}`),
                    d = (e) => void 0 !== e.from && (e.level > 1 || e.from > 0),
                    _ = (e) =>
                        e.bigIcon.includes('vehicle')
                            ? e.vehicleName
                            : e.bigIcon.includes('style_3d')
                              ? e.userName
                              : void 0,
                    m = (e, t = r.h2.Big, a = !1) => {
                        const n = e.item,
                            o = e.name,
                            i = e.value,
                            u = e.overlayType,
                            l = e.tooltipId,
                            c = e.tooltipContentId;
                        return {
                            name: n || o,
                            image: (0, s.ry)(e, t),
                            special: u,
                            value: i,
                            valueType: (0, s.p3)(o),
                            title: a && _(e),
                            tooltipArgs: (0, s.pI)({ tooltipId: l }, Number(c), { ignoreShowDelay: !0 }),
                            size: t,
                        };
                    },
                    p = [l.battleQuest, l.tankman, l.style, l.progressiveStyle, l.vehicle],
                    E = (e, t) => p.indexOf(t) - p.indexOf(e),
                    g = (e) => {
                        const t = e.sort(E);
                        return { mainReward: t[0], additionalReward: t[1] };
                    },
                    b = (e) => {
                        e.map((e) => {
                            new Image().src = e;
                        });
                    },
                    v = (e, t, a) => {
                        const r = `style_3d_${e}_${t}${a}`;
                        return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(r)})` };
                    },
                    h = (e) => {
                        const t = (0, n.f8)(e),
                            a = R.strings.battle_pass.status.timeLeft;
                        switch (!0) {
                            case t.days >= 1:
                                return (0, o.uF)(a.days(), { day: t.days });
                            case t.hours >= 1:
                                return (0, o.uF)(a.hours(), { hour: t.hours });
                            case t.minutes >= 1:
                                return (0, o.uF)(a.min(), { min: t.minutes });
                            default:
                                return a.lessMin();
                        }
                    },
                    f = (e) => {
                        const t = () => {
                            const t = viewEnv.getExternalPaddingsRem(),
                                a = t.top,
                                r = t.right,
                                s = t.bottom,
                                n = t.left;
                            (e.style.setProperty('--external-padding-top', `${a}rem`),
                                e.style.setProperty('--external-padding-right', `${r}rem`),
                                e.style.setProperty('--external-padding-bottom', `${s}rem`),
                                e.style.setProperty('--external-padding-left', `${n}rem`));
                        };
                        (t(), engine.on('self.onPaddingsUpdated', () => t()));
                    };
            },
            3290: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => o });
                var r = a(8526),
                    s = a(5521),
                    n = a(7363);
                const o = (e) => {
                    const t = (0, n.useCallback)(
                        (t) => {
                            t.altKey || e();
                        },
                        [e],
                    );
                    (0, r.gd)(s.n.ENTER, t);
                };
            },
            7264: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => l });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(7030);
                const u = 'AnimatedReward_base_f0',
                    l = ({ children: e, animationConfig: t, className: a }) => {
                        const r = (0, i.useSpring)(t);
                        return o().createElement(i.animated.div, { style: r, className: s()(u, a) }, e);
                    };
            },
            2432: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => me });
                var r = a(7363),
                    s = a.n(r),
                    n = a(6483),
                    o = a.n(n),
                    i = a(9480),
                    u = a(3403),
                    l = a(6373),
                    c = a(7727),
                    d = a(5415);
                const _ = (e, t, a, r, s) => {
                    const n = R.images.gui.maps.icons.battlePass.awards_widget;
                    return s
                        ? `url(${n.$dyn(`${e.toLowerCase()}_${t}${a}_${r}_${s}`)})`
                        : `url(${n.$dyn(`${e.toLowerCase()}_${t}${a}_${r}`)})`;
                };
                let m, p, E, g, b;
                (!(function (e) {
                    ((e.Award = 'Award'),
                        (e.Ticket = 'Ticket'),
                        (e.Coin = 'Coin'),
                        (e.Taler = 'Taler'),
                        (e.Collection = 'Collection'),
                        (e.Commander = 'Commander'));
                })(m || (m = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Big = 'big'));
                    })(p || (p = {})),
                    (function (e) {
                        ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'));
                    })(E || (E = {})),
                    (function (e) {
                        ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''));
                    })(g || (g = {})),
                    (function (e) {
                        ((e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = ''));
                    })(b || (b = {})));
                const v = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    h = ({ size: e, isHover: t, disabled: a = !1, type: r = m.Coin }) => {
                        const n = (0, d.GS)().mediaSize >= d.cJ.Medium ? E.Medium : E.Small;
                        return s().createElement(
                            'div',
                            { className: o()(v.base, v[`base__${e}`], v[`base__${e}${r}`], t && v.base__hovered) },
                            a
                                ? s().createElement('div', {
                                      className: v.bgDisabled,
                                      style: { backgroundImage: _(r, g.Background, b.Disabled, e, n) },
                                  })
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement('div', {
                                          className: v.bg,
                                          style: { backgroundImage: _(r, g.Background, b.None, e, n) },
                                      }),
                                      s().createElement('div', {
                                          className: v.bgHover,
                                          style: { backgroundImage: _(r, g.Background, b.Hover, e, n) },
                                      }),
                                  ),
                        );
                    },
                    f = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    C = ({ size: e, isHover: t, highlighted: a = !1, disabled: r = !1, type: n = m.Coin }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? E.Medium : E.Small;
                        return s().createElement(
                            'div',
                            { className: o()(f.base, f[`base__${e}`], t && f.base__hovered) },
                            r
                                ? s().createElement('div', {
                                      className: o()(f.borderDisabled, f[`borderDisabled__${e}`]),
                                      style: { backgroundImage: _(n, g.Border, b.Disabled, e, i) },
                                  })
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement('div', {
                                          className: f.border,
                                          style: { backgroundImage: _(a ? m.Collection : n, g.Border, b.None, e, i) },
                                      }),
                                      s().createElement('div', {
                                          className: f.borderHover,
                                          style: { backgroundImage: _(n, g.Border, b.Hover, e, i) },
                                      }),
                                  ),
                        );
                    };
                var A = a(2372),
                    w = a(9766);
                const B = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    D = ({ state: e, count: t, size: a, maxCount: r = 0 }) => {
                        switch (e) {
                            case F.InProgress:
                                return s().createElement(w.z, { text: `${t || 0} / ${r}` });
                            case F.Completed:
                                return s().createElement('div', { className: o()(B.base, B[`base__${a}`]) });
                            default:
                                return s().createElement(A.A, { format: 'integral', value: t });
                        }
                    },
                    y = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let F;
                !(function (e) {
                    ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'));
                })(F || (F = {}));
                const P = ({
                        size: e,
                        count: t,
                        maxCount: a,
                        state: r = F.Default,
                        isLocked: n = !1,
                        disabled: i = !1,
                    }) =>
                        s().createElement(
                            'div',
                            { className: o()(y.base, y[`base__${e}`], n && y.base__locked, i && y.base__disabled) },
                            s().createElement(D, { state: r, size: e, count: t, maxCount: a }),
                        ),
                    S = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
                    },
                    N = (e, t, a) => {
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
                    k = ({ size: e, isHover: t, isDark: a = !0, disabled: r = !1, type: n }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? E.Medium : E.Small;
                        return s().createElement('div', {
                            className: o()(S.base, S[`base__${e}`], S[`base__${N(t, a, r)}`]),
                            style: { backgroundImage: _(n, g.Icon, b.None, e, n === m.Collection ? E.None : i) },
                        });
                    },
                    L = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
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
                    I = ({ size: e, title: t, isHover: a, disabled: r = !1, isGold: n = !1 }) =>
                        s().createElement(
                            'div',
                            { className: o()(L.base, L[`base__${e}`], L[`base__${x(r, a)}`], n && L.base__gold) },
                            t,
                        ),
                    T = {
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
                    O = R.strings.battle_pass.awardsWidget,
                    M = ({ count: e, disabled: t = !1, onClick: a, size: n }) => {
                        const i = (0, r.useState)(!1),
                            u = i[0],
                            d = i[1],
                            _ = 1 === e ? O.title.awardSingle() : O.title.awardMultiple(),
                            p = t ? O.description.awardDisabled() : O.description.award(),
                            E = (0, r.useCallback)(() => {
                                t || (c.$.playClick(), a());
                            }, [t, a]);
                        return s().createElement(
                            l.i,
                            { body: p, isEnabled: Boolean(p) },
                            s().createElement(
                                'div',
                                {
                                    className: o()(
                                        T.base,
                                        T[`base__${n}`],
                                        t ? T.base__disabled : T.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), d(!0));
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: E,
                                },
                                s().createElement(C, { size: n, isHover: u, type: m.Award, disabled: t }),
                                s().createElement(h, { size: n, isHover: u, type: m.Award, disabled: t }),
                                s().createElement(k, { size: n, isHover: u, type: m.Award, disabled: t, isDark: !1 }),
                                s().createElement(P, { size: n, count: e, disabled: t }),
                                s().createElement(I, { size: n, isHover: u, title: _, disabled: t, isGold: !0 }),
                                !t &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: o()(T.shine, T.shine__left) }),
                                        s().createElement('div', { className: o()(T.shine, T.shine__right) }),
                                        s().createElement('div', { className: T.arrow }),
                                        s().createElement(
                                            'div',
                                            { className: T.blinkShape },
                                            s().createElement('div', { className: T.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    $ = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    W = R.strings.battle_pass.awardsWidget,
                    H = ({ count: e, onClick: t, size: a }) => {
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            u = n[1];
                        return s().createElement(
                            l.i,
                            { body: W.description.coin(), isEnabled: Boolean(W.description.coin()) },
                            s().createElement(
                                'div',
                                {
                                    className: o()($.base, $[`base__${a}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), u(!0));
                                    },
                                    onMouseLeave: () => {
                                        u(!1);
                                    },
                                    onClick: () => {
                                        (c.$.playClick(), t());
                                    },
                                },
                                s().createElement(C, { size: a, isHover: i }),
                                s().createElement(h, { size: a, isHover: i }),
                                s().createElement(k, { size: a, isHover: i, type: m.Coin }),
                                s().createElement(P, { size: a, count: e }),
                                s().createElement(I, { size: a, isHover: i, title: W.title.coin() }),
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
                    G = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                const V = (e) => {
                    let t = e.value,
                        a = e.isEmpty,
                        r = e.className,
                        n = e.size,
                        i = void 0 === n ? 'normal' : n,
                        u = e.fadeInAnimation,
                        l = void 0 !== u && u,
                        c = e.hide,
                        d = void 0 !== c && c,
                        _ = e.maximumNumber,
                        m = void 0 === _ ? 99 : _,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                s = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) ((a = n[r]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, G);
                    const E = a ? null : t,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const b = E && !g && E > m,
                        v = o()(
                            z.base,
                            z[`base__${i}`],
                            l && z.base__animated,
                            d && z.base__hidden,
                            !E && z.base__pattern,
                            a && z.base__empty,
                            r,
                        );
                    return s().createElement(
                        'div',
                        U({ className: v }, p),
                        s().createElement('div', { className: z.bg }),
                        s().createElement('div', { className: z.pattern }),
                        s().createElement(
                            'div',
                            { className: o()(z.value, g && z.value__text) },
                            b ? m : E,
                            b && s().createElement('span', { className: z.plus }, '+'),
                        ),
                    );
                };
                var j = a(3815);
                const q = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    Z = R.strings.battle_pass.awardsWidget,
                    X = ({ count: e, maxCount: t, newItemsCount: a, hasTrigger: n, size: i, onClick: u }) => {
                        const d = (0, r.useState)(!1),
                            _ = d[0],
                            E = d[1],
                            g = t === e,
                            b = i === p.Small && n,
                            v = g ? Z.description.collectionCompleted() : Z.description.collection(),
                            f = (0, j.z)(() => {
                                (c.$.playClick(), u());
                            });
                        return s().createElement(
                            l.i,
                            { body: v, isEnabled: Boolean(v) },
                            s().createElement(
                                'div',
                                {
                                    className: o()(q.base, q[`base__${i}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), E(!0));
                                    },
                                    onMouseLeave: () => {
                                        E(!1);
                                    },
                                    onClick: f,
                                },
                                s().createElement(C, { size: i, isHover: _, type: m.Coin, highlighted: b }),
                                s().createElement(h, { size: i, isHover: _ }),
                                s().createElement(k, { size: i, isHover: _, type: m.Collection }),
                                s().createElement(P, {
                                    size: i,
                                    count: e,
                                    maxCount: t,
                                    state: g ? F.Completed : F.InProgress,
                                }),
                                s().createElement(I, { size: i, isHover: _, title: Z.title.collection() }),
                                a > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: q.bubble },
                                        s().createElement(V, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var Y = a(514);
                const K = {
                        base: 'CommanderAward_base_11',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    Q = R.strings.battle_pass.awardsWidget,
                    J = ({ onClick: e, size: t, tankmenScreenID: a }) => {
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            u = n[1],
                            c = Q.description.commander(),
                            d =
                                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${a}`) ||
                                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
                        return s().createElement(
                            l.i,
                            { body: c, isEnabled: Boolean(c) },
                            s().createElement(
                                'div',
                                {
                                    className: o()(K.base, K[`base__${t}`], i && K.base__hover),
                                    onMouseEnter: () => {
                                        (Y.hY.sound(R.sounds.bp_highlight_02()), u(!0));
                                    },
                                    onMouseLeave: () => u(!1),
                                    onClick: () => {
                                        (Y.hY.sound(R.sounds.play()), e());
                                    },
                                },
                                s().createElement(C, { size: t, isHover: i }),
                                s().createElement(h, { size: t, isHover: i }),
                                s().createElement(I, { size: t, isHover: i, title: Q.title.commander() }),
                                s().createElement('div', {
                                    className: K.icon,
                                    style: { backgroundImage: `url(${d})` },
                                }),
                            ),
                        );
                    },
                    ee = { base: 'TalerAward_base_ef', base__big: 'TalerAward_base__big_6b' },
                    te = R.strings.battle_pass.awardsWidget,
                    ae = ({ count: e, onClick: t, size: a }) => {
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            u = n[1];
                        return s().createElement(
                            l.i,
                            { body: te.description.taler() },
                            s().createElement(
                                'div',
                                {
                                    className: o()(ee.base, ee[`base__${a}`], i && ee.base__hover),
                                    onMouseEnter: () => {
                                        (Y.hY.sound(R.sounds.bp_highlight_02()), u(!0));
                                    },
                                    onMouseLeave: () => {
                                        u(!1);
                                    },
                                    onClick: () => {
                                        (Y.hY.click(), t());
                                    },
                                },
                                s().createElement(C, { size: a, isHover: i }),
                                s().createElement(h, { size: a, isHover: i }),
                                s().createElement(k, { size: a, isHover: i, type: m.Taler }),
                                s().createElement(P, { size: a, count: e }),
                                s().createElement(I, { size: a, isHover: i, title: te.title.taler() }),
                            ),
                        );
                    },
                    re = {
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
                    se = R.strings.battle_pass.awardsWidget,
                    ne = ({ count: e, onClick: t, size: a }) => {
                        const n = (0, r.useState)(!1),
                            i = n[0],
                            u = n[1],
                            c = Boolean(e),
                            d = c ? m.Ticket : void 0;
                        return s().createElement(
                            l.i,
                            { body: se.description.ticket(), isEnabled: Boolean(se.description.ticket()) },
                            s().createElement(
                                'div',
                                {
                                    className: o()(re.base, re[`base__${a}`], c && re.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        (Y.hY.sound('bp_highlight_02'), u(!0));
                                    },
                                    onMouseLeave: () => {
                                        u(!1);
                                    },
                                    onClick: () => {
                                        (Y.hY.sound('play'), t());
                                    },
                                },
                                s().createElement(C, { size: a, isHover: i, type: d }),
                                s().createElement(h, { size: a, isHover: i, type: d }),
                                s().createElement(k, { size: a, isHover: i, type: m.Ticket, isDark: !c }),
                                s().createElement(P, { size: a, count: e }),
                                s().createElement(I, { size: a, isHover: i, title: se.title.ticket(), isGold: c }),
                                c &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: o()(re.shine, re.shine__left) }),
                                        s().createElement('div', { className: o()(re.shine, re.shine__right) }),
                                        s().createElement('div', { className: re.arrow }),
                                        s().createElement(
                                            'div',
                                            { className: re.blinkShape },
                                            s().createElement('div', { className: re.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var oe = a(3215),
                    ie = a(3946);
                const ue = (0, oe.q3)()(
                        ({ observableModel: e, externalModel: t }) => {
                            const a = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                r = (0, ie.Om)((e) => {
                                    const r = a.root.get(),
                                        s = r.talerCount,
                                        n = r.notChosenRewardCount,
                                        o = r.bpcoinCount,
                                        i = r.ticketsCount,
                                        u = r.isChooseRewardsEnabled,
                                        l = r.tankmenScreenID,
                                        c = r.isTalerEnabled,
                                        d = r.isBpCoinEnabled,
                                        _ = r.isTicketsEnabled,
                                        p = a.collectionEntryPoint.get(),
                                        E = p.collectionItemCount,
                                        g = p.newCollectionItemCount,
                                        b = p.maxCollectionItemCount,
                                        v = p.isFirstEnter,
                                        h = p.isCollectionsEnabled;
                                    return [
                                        {
                                            type: m.Award,
                                            props: {
                                                size: e,
                                                count: n,
                                                disabled: !u,
                                                onClick: t.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: n > 0,
                                        },
                                        {
                                            type: m.Ticket,
                                            props: {
                                                size: e,
                                                count: i,
                                                onClick: t.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: _,
                                        },
                                        {
                                            type: m.Coin,
                                            props: {
                                                size: e,
                                                count: o,
                                                onClick: t.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: m.Taler,
                                            props: { size: e, count: s, onClick: t.createCallbackNoArgs('showTalers') },
                                            condition: c,
                                        },
                                        {
                                            type: m.Collection,
                                            props: {
                                                size: e,
                                                count: E,
                                                maxCount: b,
                                                newItemsCount: g,
                                                hasTrigger: v,
                                                onClick: t.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: h,
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
                            return Object.assign({}, a, { computes: { awardsList: r } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpTalers: e.createCallbackNoArgs('showTalers'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    le = ue[0],
                    ce = ue[1],
                    de = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        base__big: 'AwardsWrapper_base__big_6b',
                    },
                    _e = (0, u.Pi)(({ size: e, classNames: t }) => {
                        const a = ce().model;
                        return s().createElement(
                            'div',
                            { className: o()(de.base, de[`base__${e}`], null == t ? void 0 : t.base) },
                            i.UI(
                                a.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    s().createElement(
                                        'div',
                                        { key: e.type, className: o()(de.award, null == t ? void 0 : t.award) },
                                        ((e, t) => {
                                            switch (e) {
                                                case m.Award:
                                                    return s().createElement(M, t);
                                                case m.Ticket:
                                                    return s().createElement(ne, t);
                                                case m.Coin:
                                                    return s().createElement(H, t);
                                                case m.Taler:
                                                    return s().createElement(ae, t);
                                                case m.Collection:
                                                    return s().createElement(X, t);
                                                case m.Commander:
                                                    return s().createElement(J, t);
                                                default:
                                                    return (console.warn('Unknown award type: ', e), null);
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    me = ({ rootId: e, size: t = p.Small, context: a = 'model', classNames: r }) =>
                        s().createElement(
                            le,
                            { options: { context: a, rootId: e } },
                            s().createElement(_e, { size: t, classNames: r }),
                        );
            },
            9525: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => d });
                var r = a(6483),
                    s = a.n(r),
                    n = a(3457),
                    o = a(7363),
                    i = a.n(o);
                const u = 'BuyButtons_base_4b',
                    l = 'BuyButtons_button_32',
                    c = R.strings.battle_pass.battlePassBuyView,
                    d = ({
                        isWalletAvailable: e,
                        onAccept: t,
                        buttonAcceptText: a,
                        onCancel: r,
                        className: o,
                        isMulticurrency: d = !1,
                    }) =>
                        i().createElement(
                            'div',
                            { className: s()(u, o) },
                            i().createElement(
                                n.u5,
                                { type: n.L$.main, size: n.qE.medium, disabled: !e, onClick: t, mixClass: l },
                                a,
                            ),
                            !d &&
                                i().createElement(
                                    n.u5,
                                    { type: n.L$.primary, size: n.qE.medium, onClick: r, mixClass: l },
                                    c.btnCancel(),
                                ),
                        );
            },
            4420: (e, t, a) => {
                'use strict';
                a.d(t, { N: () => c });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(9485);
                const u = 'ChapterBackground_base_fa',
                    l = 'ChapterBackground_base__current_7a',
                    c = ({ chapter: e, isCurrent: t, customBackgroundStyle: a }) =>
                        o().createElement('div', { className: s()(u, t && l), style: a || (0, i.W4)(e) });
            },
            8596: (e, t, a) => {
                'use strict';
                a.d(t, { G4: () => D });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n);
                const i = (e, t) => {
                    const a = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            a = e.path.$dyn('default');
                        return t || a;
                    })(e).$dyn(`${t.name}${a}`);
                };
                let u;
                !(function (e) {
                    ((e.Season = 'season'), (e.Chapter = 'chapter'));
                })(u || (u = {}));
                const l = {
                    base: 'Emblem_base_be',
                    progress: 'Emblem_progress_37',
                    progress__small: 'Emblem_progress__small_42',
                    progress__completed: 'Emblem_progress__completed_69',
                    hideProgress: 'Emblem_hideProgress_b4',
                    progress__hidden: 'Emblem_progress__hidden_6d',
                    image: 'Emblem_image_dc',
                    image__clickable: 'Emblem_image__clickable_b7',
                    image__micro: 'Emblem_image__micro_aa',
                    image__small: 'Emblem_image__small_ce',
                    extra: 'Emblem_extra_d4',
                    extra__micro: 'Emblem_extra__micro_f7',
                    extra__small: 'Emblem_extra__small_28',
                    hideLevel: 'Emblem_hideLevel_f2',
                    showLevel: 'Emblem_showLevel_c5',
                    hideLevelSmall: 'Emblem_hideLevelSmall_cc',
                    showLevelSmall: 'Emblem_showLevelSmall_31',
                    hideLevelMicro: 'Emblem_hideLevelMicro_15',
                    showLevelMicro: 'Emblem_showLevelMicro_bc',
                    showIcon: 'Emblem_showIcon_c2',
                    showIconSmall: 'Emblem_showIconSmall_1d',
                    showIconMicro: 'Emblem_showIconMicro_f8',
                };
                var c = a(9485);
                const d = {
                        base: 'Label_base_85',
                        textWithBlend: 'Label_textWithBlend_07',
                        textWithBlend__show: 'Label_textWithBlend__show_fa',
                        show: 'Label_show_69',
                        textWithBlend__new: 'Label_textWithBlend__new_4a',
                        textWithBlend__hide: 'Label_textWithBlend__hide_f1',
                        hide: 'Label_hide_33',
                        textMask: 'Label_textMask_7f',
                        textMask__gold: 'Label_textMask__gold_71',
                        textMask__goldContrast: 'Label_textMask__goldContrast_05',
                        textMask__animated: 'Label_textMask__animated_38',
                        maskAppearance: 'Label_maskAppearance_26',
                        textMask__micro: 'Label_textMask__micro_37',
                        textMask__small: 'Label_textMask__small_54',
                        textMask__medium: 'Label_textMask__medium_eb',
                        textMask__large: 'Label_textMask__large_0a',
                        textMask__extraLarge: 'Label_textMask__extraLarge_4c',
                        text: 'Label_text_67',
                        text__micro: 'Label_text__micro_a4',
                        text__small: 'Label_text__small_e0',
                        text__large: 'Label_text__large_65',
                        text__extraLarge: 'Label_text__extraLarge_22',
                        text__blended: 'Label_text__blended_67',
                        text__filtered: 'Label_text__filtered_86',
                        text__rewardScreen: 'Label_text__rewardScreen_68',
                        textAppearance: 'Label_textAppearance_31',
                        text__show: 'Label_text__show_95',
                        text__hide: 'Label_text__hide_37',
                        text__hideWithDelay: 'Label_text__hideWithDelay_53',
                        text__new: 'Label_text__new_a0',
                        hideLevel: 'Label_hideLevel_61',
                        showLevel: 'Label_showLevel_55',
                        hideLevelSmall: 'Label_hideLevelSmall_9d',
                        showLevelSmall: 'Label_showLevelSmall_96',
                        hideLevelMicro: 'Label_hideLevelMicro_9e',
                        showLevelMicro: 'Label_showLevelMicro_50',
                        showIcon: 'Label_showIcon_0f',
                        showIconSmall: 'Label_showIconSmall_96',
                        hideProgress: 'Label_hideProgress_0c',
                        showIconMicro: 'Label_showIconMicro_1e',
                    },
                    _ = ({
                        level: e,
                        size: t,
                        isGold: a,
                        isForRewardScreen: r,
                        curState: n,
                        isFirstLevel: i,
                        showProgressionCompleted: u,
                    }) => {
                        const l = s()(d.base, d[`base__${t}`]),
                            c = s()(
                                d.text,
                                d.text__filtered,
                                d[`text__${t}`],
                                d[`text__${n}`],
                                u && d.text__hideWithDelay,
                                i && d.text__new,
                                r && d.text__rewardScreen,
                            ),
                            _ = s()(
                                d.textWithBlend,
                                i && d.text__new,
                                u && d.text__hideWithDelay,
                                d[`textWithBlend__${n}`],
                            ),
                            m = s()(d.text, d.text__blended, d[`text__${t}`], r && d.text__rewardScreen),
                            p = s()(
                                d.textMask,
                                a && d.textMask__gold,
                                r && d.textMask__animated,
                                a && r && d.textMask__goldContrast,
                                d[`textMask__${t}`],
                            );
                        return o().createElement(
                            'div',
                            { className: l },
                            o().createElement('div', { className: c }, e),
                            o().createElement(
                                'div',
                                { className: _ },
                                o().createElement('div', { className: m }, e),
                                o().createElement('div', { className: p }),
                            ),
                        );
                    };
                var m = a(8546);
                const p = {
                        label: 'EmblemLabels_label_14',
                        label__small: 'EmblemLabels_label__small_a3',
                        label__micro: 'EmblemLabels_label__micro_4b',
                        label__hasProgress: 'EmblemLabels_label__hasProgress_26',
                        label__hasProgressProgression: 'EmblemLabels_label__hasProgressProgression_77',
                        label__hasProgressSmall: 'EmblemLabels_label__hasProgressSmall_c1',
                        label__show: 'EmblemLabels_label__show_3d',
                        showLevel: 'EmblemLabels_showLevel_04',
                        label__showSmall: 'EmblemLabels_label__showSmall_7e',
                        showLevelSmall: 'EmblemLabels_showLevelSmall_2f',
                        label__hide: 'EmblemLabels_label__hide_28',
                        hideLevel: 'EmblemLabels_hideLevel_be',
                        label_hideSmall: 'EmblemLabels_label_hideSmall_65',
                        hideLevelSmall: 'EmblemLabels_hideLevelSmall_c1',
                        label__hideWithDelay: 'EmblemLabels_label__hideWithDelay_68',
                        label__hideWithDelaySmall: 'EmblemLabels_label__hideWithDelaySmall_36',
                        label__new: 'EmblemLabels_label__new_d7',
                        label__newSmall: 'EmblemLabels_label__newSmall_c1',
                        label__disabled: 'EmblemLabels_label__disabled_b6',
                        icon: 'EmblemLabels_icon_40',
                        icon__small: 'EmblemLabels_icon__small_f3',
                        icon__micro: 'EmblemLabels_icon__micro_cf',
                        icon__animated: 'EmblemLabels_icon__animated_09',
                        showIcon: 'EmblemLabels_showIcon_d3',
                        icon__animatedSmall: 'EmblemLabels_icon__animatedSmall_e4',
                        icon__animatedMicro: 'EmblemLabels_icon__animatedMicro_10',
                        showIconSmall: 'EmblemLabels_showIconSmall_cb',
                        hideLevelMicro: 'EmblemLabels_hideLevelMicro_65',
                        showLevelMicro: 'EmblemLabels_showLevelMicro_ab',
                        hideProgress: 'EmblemLabels_hideProgress_7f',
                        showIconMicro: 'EmblemLabels_showIconMicro_5c',
                    },
                    E = (e, t) => {
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
                    g = (0, n.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: r,
                            hasProgression: n,
                            isGolden: l,
                            labelAnimation: d,
                            newLabelAnimation: g,
                            isChapterChosen: b = !1,
                            chapterID: v = 0,
                            seasonNum: h = -1,
                            isProgressionCompleted: f = !1,
                            hasBeenActive: C = !1,
                            isChapterSelection: A = !1,
                            isProgression: w = !1,
                        }) => {
                            let B = '',
                                D = '';
                            a === m.$u.Small
                                ? ((B = 'Small'), (D = '__small'))
                                : a === m.$u.Micro && ((B = 'Micro'), (D = '__micro'));
                            const y = r === m.Bq.SwitchedChapterRightNow,
                                F = r === m.Bq.CompletedRightNow,
                                P = ((e, t, a, r, s) => (e || s ? t || !a : t || !r))(A, f, C, b, w),
                                S = !w && !A;
                            return o().createElement(
                                o().Fragment,
                                null,
                                P
                                    ? o().createElement('div', {
                                          className: s()(p.icon, D && p[`icon${D}`], F && p[`icon__animated${B}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = E(l, a);
                                                  if (S) {
                                                      if (f) {
                                                          const a = { path: e.icon, name: u.Season, id: h };
                                                          return i(a, { name: 'icon', postfix: t });
                                                      }
                                                      if (!b) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, v, t);
                                              })()})`,
                                          },
                                      })
                                    : o().createElement(
                                          'div',
                                          {
                                              className: s()(
                                                  p.label,
                                                  p[`label${D}`],
                                                  y && p.label__new,
                                                  y && p[`label__new${B}`],
                                                  !F && f && p.label__disabled,
                                                  p[`label__${d}${B}`],
                                                  n && p[`label__hasProgress${B}`],
                                                  n && p[`label__hasProgress${B}${w ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          o().createElement(_, {
                                              level: t,
                                              size: a,
                                              isGold: l,
                                              isFirstLevel: y,
                                              curState: d,
                                              showProgressionCompleted: F,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                p.label,
                                                p[`label${D}`],
                                                y && p.label__new,
                                                y && p[`label__new${B}`],
                                                p[`label__${g}${B}`],
                                                n && p[`label__hasProgress${B}`],
                                            ),
                                        },
                                        o().createElement(_, {
                                            level: e,
                                            size: a,
                                            isGold: l,
                                            isFirstLevel: y,
                                            curState: g,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var b = a(1975);
                const v = {
                        base: 'EmblemProgressBar_base_5c',
                        base__small: 'EmblemProgressBar_base__small_6c',
                        base__completed: 'EmblemProgressBar_base__completed_6d',
                        hideProgress: 'EmblemProgressBar_hideProgress_18',
                        base__completePostProgression: 'EmblemProgressBar_base__completePostProgression_20',
                        base__hidden: 'EmblemProgressBar_base__hidden_8b',
                        hideLevel: 'EmblemProgressBar_hideLevel_1e',
                        showLevel: 'EmblemProgressBar_showLevel_5d',
                        hideLevelSmall: 'EmblemProgressBar_hideLevelSmall_ae',
                        showLevelSmall: 'EmblemProgressBar_showLevelSmall_df',
                        hideLevelMicro: 'EmblemProgressBar_hideLevelMicro_13',
                        showLevelMicro: 'EmblemProgressBar_showLevelMicro_ae',
                        showIcon: 'EmblemProgressBar_showIcon_55',
                        showIconSmall: 'EmblemProgressBar_showIconSmall_26',
                        showIconMicro: 'EmblemProgressBar_showIconMicro_78',
                    },
                    h = (0, n.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: r,
                            size: n,
                        }) => {
                            const i = s()(v.base, v[`base__${n}`], a && v.base__completed, !a && r && v.base__hidden);
                            return o().createElement(
                                'div',
                                { className: i },
                                o().createElement(b.ko, {
                                    key: e.to,
                                    size: b.$u.Small,
                                    value: e.to || 0,
                                    deltaFrom: e.from || 0,
                                    disabled: t,
                                }),
                            );
                        },
                    );
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                let C, A;
                (!(function (e) {
                    ((e.Closed = 'closed'), (e.Open = 'open'));
                })(C || (C = {})),
                    (function (e) {
                        ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'));
                    })(A || (A = {})));
                const w = (e, t, a, r, s) => {
                        const n = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: u.Chapter, id: r },
                            o = e ? C.Open : C.Closed,
                            l = ((e, t) =>
                                e
                                    ? A.Gold
                                    : t === m.Bq.Completed || t === m.Bq.CompletedRightNow
                                      ? A.Completed
                                      : A.Initial)(t, a),
                            c = s.length > 0 ? `_${s}` : '';
                        return { backgroundImage: `url(${i(n, { name: 'emblem', postfix: `${o}_${l}${c}` })})` };
                    },
                    B = (e, t) => {
                        const a = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: u.Season, id: e };
                        return { backgroundImage: `url(${i(a, { name: 'extra', postfix: t })})` };
                    },
                    D = (0, n.memo)((e) => {
                        const t = e.progression,
                            a = e.size,
                            r = e.battlePassState,
                            n = e.hasBattlePass,
                            i = e.isChapterChosen,
                            u = e.hasBeenActive,
                            c = void 0 !== u && u,
                            d = e.isChapterSelection,
                            _ = void 0 !== d && d,
                            p = e.isOpen,
                            E = void 0 !== p && p,
                            b = e.isProgression,
                            v = void 0 !== b && b,
                            C = e.showProgressBar,
                            A = void 0 === C || C,
                            D = e.isExtra,
                            y = void 0 !== D && D,
                            F = e.chapterID,
                            P = e.seasonNum,
                            S = e.clickable,
                            N = void 0 === S || S,
                            k = ((e) => {
                                switch (e) {
                                    case m.$u.Small:
                                        return 'small';
                                    case m.$u.Micro:
                                        return 'micro';
                                    default:
                                        return '';
                                }
                            })(a),
                            R = r === m.Bq.CompletedRightNow,
                            L = n || r === m.Bq.Bought,
                            x = (r === m.Bq.Completed || R) && L,
                            I = (r === m.Bq.Completed || R) && !L,
                            T = x || I,
                            O = void 0 !== t.from,
                            M = A && ((O && i) || c);
                        return o().createElement(
                            'div',
                            { className: l.base },
                            y &&
                                o().createElement('div', {
                                    className: s()(l.extra, k && l[`extra__${k}`]),
                                    style: B(P, k),
                                }),
                            o().createElement(
                                'div',
                                {
                                    className: s()(l.image, k && l[`image__${k}`], N && l.image__clickable),
                                    style: w(E, L, r, F, k),
                                },
                                r !== m.Bq.AwaitSeason &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(
                                            g,
                                            f(
                                                {
                                                    hasProgression: O,
                                                    isGolden: L,
                                                    isProgressionCompleted: T,
                                                    isChapterChosen: i,
                                                    hasBeenActive: c,
                                                    isChapterSelection: _,
                                                    isProgression: v,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        M &&
                                            o().createElement(h, {
                                                key: t.to,
                                                progression: t,
                                                showProgressionCompleted: R,
                                                isProgressionCompleted: T,
                                                size: a,
                                            }),
                                    ),
                            ),
                        );
                    });
            },
            8546: (e, t, a) => {
                'use strict';
                let r, s, n, o;
                (a.d(t, { $u: () => r, Bq: () => n }),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(s || (s = {})),
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
                    })(o || (o = {})));
            },
            1481: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => _ });
                var r = a(7363),
                    s = a.n(r),
                    n = a(6483),
                    o = a.n(n),
                    i = a(7727);
                const u = 'LoupeButton_base_ba',
                    l = 'LoupeButton_icon_44',
                    c = 'LoupeButton_iconHover_91',
                    d = 'LoupeButton_hoverArea_d0',
                    _ = ({ onClick: e, hoverAreaClasses: t }) => {
                        const a = (0, r.useCallback)(() => (0, i.G)('highlight'), []),
                            n = (0, r.useCallback)(() => {
                                ((0, i.G)('play'), e());
                            }, [e]),
                            _ = o()(d, t);
                        return s().createElement(
                            'div',
                            { className: u, onClick: n, onMouseEnter: a },
                            s().createElement('div', { className: l }),
                            s().createElement('div', { className: c }),
                            t && s().createElement('div', { className: _ }),
                        );
                    };
            },
            9430: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => f });
                var r = a(6483),
                    s = a.n(r),
                    n = a(7363),
                    o = a.n(n),
                    i = a(2862),
                    u = a(5739),
                    l = a(5415),
                    c = a(9480),
                    d = a(2893);
                const _ = 'GroupRewards_base_70',
                    m = 'GroupRewards_item_af',
                    p = ({ rewards: e, className: t }) => {
                        const a = (0, l.GS)().mediaSize < l.cJ.Medium ? i.h2.Small : i.h2.Big;
                        return o().createElement(
                            'div',
                            { className: s()(_, t) },
                            c.UI(e, (e, t) =>
                                o().createElement(
                                    'div',
                                    { key: `reward_${t}_${e.name}`, className: m },
                                    o().createElement(u.Q, (0, d.$n)(e, a, !0)),
                                ),
                            ),
                        );
                    };
                var E = a(3862);
                const g = 'RewardsBlock_base_0e',
                    b = 'RewardsBlock_groupTitle_2f',
                    v = 'RewardsBlock_groupRewards_38',
                    h = 'RewardsBlock_groupRewards__future_b9',
                    f = ({
                        description: e,
                        iconType: t,
                        steps: a = '',
                        rewards: r,
                        className: n = '',
                        title: i = '',
                    }) =>
                        o().createElement(
                            'div',
                            { className: s()(g, n) },
                            o().createElement(E.p, { description: e, type: t, steps: a, className: b, title: i }),
                            o().createElement(p, { rewards: r, className: s()(v, t === E.Q.future && h) }),
                        );
            },
            3862: (e, t, a) => {
                'use strict';
                a.d(t, { p: () => c, Q: () => l });
                var r = a(6483),
                    s = a.n(r),
                    n = a(280),
                    o = a(7363),
                    i = a.n(o);
                const u = {
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
                const c = ({ description: e, type: t, steps: a = '', className: r = '', title: o = '' }) =>
                    i().createElement(
                        'div',
                        { className: s()(u.base, u[`base__${t}`], r) },
                        i().createElement('div', { className: u.iconShadow }),
                        i().createElement(
                            'div',
                            { className: u.title },
                            i().createElement('div', { className: u.icon }),
                            i().createElement('div', { className: u.titleText }, o),
                        ),
                        i().createElement(n.z, {
                            classMix: u.descriptionText,
                            text: e,
                            binding: { steps: i().createElement('span', { className: u.steps, key: a }, a) },
                        }),
                    );
            },
            1307: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => y });
                var r = a(6483),
                    s = a.n(r),
                    n = a(794),
                    o = a(9605),
                    i = a(7363),
                    u = a.n(i),
                    l = a(6724),
                    c = a(1856),
                    d = a(9916);
                function _(e, t, a, r, s, n, o) {
                    try {
                        var i = e[n](o),
                            u = i.value;
                    } catch (e) {
                        return void a(e);
                    }
                    i.done ? t(u) : Promise.resolve(u).then(r, s);
                }
                function m(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, s) {
                            var n = e.apply(t, a);
                            function o(e) {
                                _(n, r, s, o, i, 'next', e);
                            }
                            function i(e) {
                                _(n, r, s, o, i, 'throw', e);
                            }
                            o(void 0);
                        });
                    };
                }
                let p;
                !(function (e) {
                    ((e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End'));
                })(p || (p = {}));
                const E = (e) => {
                        const t = (0, i.useState)(p.Idle),
                            a = t[0],
                            r = t[1],
                            s = e.animationScroll,
                            n = e.getContainerSize,
                            o = e.getWrapperSize,
                            u = e.events,
                            _ = (0, i.useCallback)(() => {
                                const e = s.scrollPosition.get(),
                                    t = n() - o();
                                switch (!0) {
                                    case !t:
                                        return r(p.Idle);
                                    case e <= 0:
                                        return r(p.Start);
                                    case e >= t:
                                        return r(p.End);
                                    default:
                                        r(p.Between);
                                }
                            }, [s.scrollPosition, n, o]);
                        return (
                            (0, i.useEffect)(
                                () => (
                                    (function () {
                                        var e = m(function* () {
                                            yield (0, c.v)(_);
                                        });
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()(),
                                    u.on('change', _),
                                    () => u.off('change', _)
                                ),
                                [u, _],
                            ),
                            (0, i.useEffect)(() => {
                                const e = (function () {
                                    var e = m(function* () {
                                        (yield (0, d.Eu)(), yield (0, l.nS)(), _());
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
                            }, [_]),
                            a
                        );
                    },
                    g = { type: 'idle' };
                const b = 'ScrollWithLips_base_69',
                    v = 'ScrollWithLips_lip_90',
                    h = 'ScrollWithLips_lip__top_ab',
                    f = 'ScrollWithLips_lip__bottom_17',
                    C = 'ScrollWithLips_scroll_7e',
                    A = 'ScrollWithLips_scroll__loaded_b2',
                    w = 'ScrollWithLips_topButton_4e',
                    B = 'ScrollWithLips_bottomButton_1e',
                    D = 'ScrollWithLips_track_4f',
                    y = ({ className: e, children: t, setVisibleScroll: a }) => {
                        const r = (0, o.useVerticalScrollApi)();
                        !(function (e, t) {
                            const a = e.contentRef,
                                r = e.wrapperRef,
                                s = e.scrollPosition,
                                n = e.clampPosition,
                                o = e.animationScroll,
                                u = e.events,
                                l = e.getContainerSize,
                                c = e.getWrapperSize,
                                d = (0, i.useState)(g),
                                _ = d[0],
                                m = d[1],
                                p = (0, i.useState)(!1),
                                E = p[0],
                                b = p[1];
                            ((0, i.useEffect)(() => {
                                const e = a.current;
                                e && (e.style.cursor = E ? ('dragging' === _.type ? 'grabbing' : 'grab') : 'default');
                            }, [a, E, _.type]),
                                (0, i.useEffect)(() => {
                                    if ('dragging' !== _.type) return;
                                    const e = (e) => {
                                            const i = a.current,
                                                u = r.current;
                                            if (!i || !u) return;
                                            const l = _.positionFrom - e.screenY,
                                                c = _.previousScrollPosition + l;
                                            s.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: n(i, c),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
                                                ),
                                            );
                                        },
                                        i = () => {
                                            (window.removeEventListener('mousemove', e), m({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', i),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', i));
                                        }
                                    );
                                }, [o.scrollPosition, n, a, _, s, r, t]),
                                (0, i.useEffect)(() => {
                                    if ('scrollingToEnd' !== _.type) return;
                                    const e = () => {
                                        m(g);
                                    };
                                    return (o.scrollPosition.idle && e(), u.on('rest', e), () => u.off('rest', e));
                                }, [o.scrollPosition, _.type, u]),
                                (0, i.useEffect)(() => {
                                    const e = a.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        0 === e.button &&
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        e.addEventListener('mousedown', t),
                                        () => e.removeEventListener('mousedown', t)
                                    );
                                }, [o.scrollPosition, a]),
                                (0, i.useEffect)(() => {
                                    const e = () => {
                                        var e, t;
                                        const a = null != (e = l()) ? e : 0,
                                            r = null != (t = c()) ? t : 0;
                                        b(a > r);
                                    };
                                    return (
                                        u.on('resizeHandled', e),
                                        u.on('recalculateContent', e),
                                        () => {
                                            (u.off('resizeHandled', e), u.off('recalculateContent', e));
                                        }
                                    );
                                }, [u, l, c]));
                        })(r);
                        const l = E(r),
                            c = l !== p.Idle;
                        return (
                            (0, i.useEffect)(() => {
                                a && a(l !== p.Idle);
                            }, [a, l]),
                            u().createElement(
                                'div',
                                { className: s()(b, e) },
                                l !== p.Start && l !== p.Idle && u().createElement('div', { className: s()(v, h) }),
                                l !== p.End && l !== p.Idle && u().createElement('div', { className: s()(v, f) }),
                                u().createElement(
                                    n.X.Vertical.Area.Default,
                                    {
                                        api: r,
                                        barClassNames: {
                                            base: s()(C, c && A),
                                            topButton: w,
                                            bottomButton: B,
                                            track: D,
                                        },
                                    },
                                    t,
                                ),
                            )
                        );
                    };
            },
            734: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => h });
                var r = a(6483),
                    s = a.n(r),
                    n = a(2056),
                    o = a(9480),
                    i = a(7363),
                    u = a.n(i),
                    l = a(5689);
                const c = 'TankmanSkills_base_59',
                    d = 'TankmanSkills_skill_2d',
                    _ = 'TankmanSkills_zeroSkill_e7',
                    m = 'TankmanSkills_glow_b1',
                    p = 'TankmanSkills_zeroSkillIcon_f8',
                    E = 'TankmanSkills_skillIcon_9c',
                    g = 'TankmanSkills_skillIcon__specificPerk_23',
                    b = 'TankmanSkills_divider_38',
                    v = 'TankmanSkills_light_6b',
                    h = ({ skills: e, className: t = '' }) => {
                        const a = o.kd(e, (e) => e.isZero);
                        return u().createElement(
                            'div',
                            { className: s()(c, t) },
                            o.UI(e, (e, t) =>
                                u().createElement(
                                    'div',
                                    { key: `${e.name}_${t}`, className: d },
                                    u().createElement(
                                        n.u,
                                        {
                                            contentId:
                                                R.views.lobby.battle_pass.tooltips.CrewMemberSkillTooltip('resId'),
                                            args: { name: e.name, isZero: e.isZero, hasZeroPerk: void 0 !== a },
                                        },
                                        u().createElement(
                                            'div',
                                            null,
                                            e.isZero &&
                                                e.name === l.jw &&
                                                u().createElement(
                                                    'div',
                                                    { className: _ },
                                                    u().createElement('div', { className: m }),
                                                    u().createElement('div', { className: p }),
                                                ),
                                            u().createElement('div', {
                                                className: s()(E, e.name !== l.jw && g),
                                                style: {
                                                    backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${e.name}')`,
                                                },
                                            }),
                                        ),
                                    ),
                                    a === t && u().createElement('div', { className: b }),
                                ),
                            ),
                            u().createElement('div', { className: v }),
                        );
                    };
            },
            3942: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => _, x: () => c });
                var r = a(6483),
                    s = a.n(r),
                    n = a(3649),
                    o = a(7363),
                    i = a.n(o),
                    u = a(2893);
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
                const d = R.strings.battle_pass.battlePassBuyView.confirm,
                    _ = ({ chapter: e, buyBP: t, subTitle: a, className: r, type: o = c.Default }) => {
                        const _ = (0, n.uF)(d.chapter(), { name: (0, u.pC)(e) });
                        return i().createElement(
                            'div',
                            { className: s()(l.base, l[`base__${o}`], r) },
                            i().createElement('span', { className: l.chapter }, _),
                            i().createElement('span', { className: l.buyBPTitle }, t),
                            i().createElement('span', { className: l.subTitle }, a),
                        );
                    };
            },
            8470: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => s, t: () => n });
                var r = a(7363);
                const s = (0, r.createContext)(void 0);
                function n() {
                    const e = (0, r.useContext)(s);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            8030: (e, t, a) => {
                'use strict';
                a.d(t, { N: () => r });
                var r = {};
                (a.r(r), a.d(r, { Provider: () => E, useApi: () => m, useHandleKeydown: () => p }));
                var s = a(3138),
                    n = a(3815),
                    o = a(7363),
                    i = a.n(o),
                    u = a(5521);
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
                var c = a(4598);
                const d = () => {
                        const e = new Map();
                        function t(t) {
                            const a = e.get(t);
                            if (a) return a;
                            const r = new l();
                            return (e.set(t, r), r);
                        }
                        function a(t, a) {
                            const r = e.get(t);
                            return !!r && r.remove(a);
                        }
                        return {
                            handlers: e,
                            obtain: t,
                            register: function (e, r) {
                                if (e === u.n.NONE) return c.jv;
                                const s = t(e);
                                return (s.includes(r) || s.push(r), () => a(e, r));
                            },
                            unregister: a,
                            takeCurrent: function (t) {
                                const a = e.get(t);
                                if (!a) return;
                                const r = a.peek();
                                return r || void 0;
                            },
                        };
                    },
                    _ = (0, o.createContext)(void 0);
                function m() {
                    const e = (0, o.useContext)(_);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function p(e, t, a) {
                    const r = (0, n.z)((e) => {
                            s.O.view.isEventHandled() || (t(e), s.O.view.setEventHandled(), a && e.stopPropagation());
                        }),
                        i = m(),
                        u = (0, o.useMemo)(() => i.keydown.register(e, r), [i, e, r]);
                    (0, o.useEffect)(() => u, [u]);
                }
                const E = (e) => {
                    const t = (0, o.useMemo)(d, []);
                    (0, o.useEffect)(() => {
                        function e(e) {
                            const a = t.takeCurrent(e.keyCode);
                            a && a(e);
                        }
                        return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
                    });
                    const a = (0, o.useMemo)(
                        () => ({ keydown: { register: t.register, unregister: t.unregister } }),
                        [t],
                    );
                    return i().createElement(_.Provider, { value: a }, e.children);
                };
            },
            6444: (e, t, a) => {
                'use strict';
                a.d(t, { AW: () => c, rs: () => l, tv: () => r.t });
                var r = a(8470),
                    s = a(7363),
                    n = a.n(s);
                class o extends s.Component {
                    constructor(...e) {
                        (super(...e), (this.state = { failure: !1, error: null }));
                    }
                    static getDerivedStateFromError(e) {
                        return { failure: !0, error: e };
                    }
                    render() {
                        return this.state.failure
                            ? n().createElement(
                                  'div',
                                  null,
                                  n().createElement('h1', null, 'Something went wrong.'),
                                  this.state.error && n().createElement('pre', null, this.state.error.toString()),
                              )
                            : this.props.children;
                    }
                }
                var i = a(4190);
                const u = (0, s.createContext)(void 0);
                const l = ({ children: e, route: t, fallback: a = null, location: r }) => {
                        let o;
                        return (
                            s.Children.forEach(e, (e) => {
                                if (!(0, s.isValidElement)(e))
                                    return void console.error('Switch children must be valid elements');
                                const a = t ? `${t}${e.props.path}` : e.props.path;
                                if (void 0 !== o) return;
                                const n = (0, i.L)(r, { paths: [a], exact: e.props.exact });
                                n && (o = { child: e, match: n });
                            }),
                            o ? n().createElement(u.Provider, { value: { match: o.match } }, o.child) : a
                        );
                    },
                    c = ({ component: e, exact: t }) => {
                        const a = (function () {
                                const e = (0, s.useContext)(u);
                                if (!e) throw new Error('useSwitch must be used within a SwitchProvider');
                                return e;
                            })(),
                            r = a.match;
                        return n().createElement(
                            o,
                            null,
                            n().createElement(e, {
                                path: r.path,
                                location: r.url,
                                params: r.params,
                                exact: null != t && t,
                            }),
                        );
                    };
            },
            4190: (e, t, a) => {
                'use strict';
                function r(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return s(e, t);
                            var a = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === a && e.constructor && (a = e.constructor.name);
                            if ('Map' === a || 'Set' === a) return Array.from(e);
                            if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return s(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        a && (e = a);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                a.d(t, { L: () => o });
                const n = (e) => e.split('/').filter(Boolean);
                function o(e, t) {
                    const a = t.paths,
                        s = t.exact,
                        o = void 0 !== s && s,
                        i = n(e);
                    for (var u, l = r(a); !(u = l()).done; ) {
                        const t = u.value,
                            a = n(t);
                        if (o && i.length !== a.length) continue;
                        const r = {};
                        let s = !0;
                        for (let e = 0; e < a.length; e++) {
                            const t = a[e],
                                n = i[e];
                            if (!n) {
                                s = !1;
                                break;
                            }
                            if (t.startsWith(':')) {
                                r[t.slice(1)] = n;
                            } else if (t !== n) {
                                s = !1;
                                break;
                            }
                        }
                        if (s) {
                            const s = `/${i.slice(0, a.length).join('/')}`,
                                n = e === s;
                            if (o && !n) continue;
                            return { params: r, exact: n, path: t, url: s };
                        }
                    }
                    return null;
                }
            },
            7994: (e, t, a) => {
                'use strict';
                a.d(t, { U4: () => p, b0: () => m });
                var r = a(6483),
                    s = a.n(r),
                    n = a(5716),
                    o = a(9690),
                    i = a(3649),
                    u = a(7363),
                    l = a.n(u),
                    c = a(8032),
                    d = a(1960);
                let _, m;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(_ || (_ = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(m || (m = {})));
                const p = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleShortName: a,
                    vehicleType: r,
                    vehicleLvl: u,
                    tags: p = '',
                    size: E = _.extraSmall,
                    type: g = m.colored,
                    className: b,
                    classNames: v,
                    isShortName: h = !1,
                }) => {
                    const f = `${(0, i.BN)(r)}${e ? '_elite' : ''}`,
                        C = R.images.gui.maps.icons.vehicleTypes.big.$dyn(f);
                    return l().createElement(
                        'div',
                        {
                            className: s()(
                                d.Z.base,
                                d.Z[`base__size${(0, i.e)(E)}`],
                                d.Z[`base__type${(0, i.e)(g)}`],
                                b,
                            ),
                        },
                        l().createElement(
                            'div',
                            { className: s()(d.Z.level, null == v ? void 0 : v.level) },
                            (0, o.HG)(u),
                        ),
                        l().createElement('div', {
                            className: s()(
                                d.Z.type,
                                e && d.Z[`type__elite${(0, i.e)(E)}`],
                                d.Z[`type__${E}`],
                                null == v ? void 0 : v.typeIcon,
                            ),
                            style: r ? { backgroundImage: `url(${C})` } : void 0,
                        }),
                        (0, c.f)(p, n.f3) && l().createElement('div', { className: d.Z.premiumIGR }),
                        l().createElement('div', { className: s()(d.Z.name, null == v ? void 0 : v.name) }, h ? a : t),
                    );
                };
            },
            8032: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => r });
                const r = (e, t) => e.split(',').includes(t);
            },
            615: (e, t, a) => {
                'use strict';
                let r;
                (a.d(t, { C: () => r }),
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
                    })(r || (r = {})));
            },
            5216: (e, t, a) => {
                'use strict';
                let r, s;
                (a.d(t, { E: () => s, l: () => r }),
                    (function (e) {
                        ((e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman'));
                    })(s || (s = {})));
            },
            5716: (e, t, a) => {
                'use strict';
                a.d(t, { f3: () => r });
                const r = 'premiumIGR';
            },
            6880: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
            5287: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            2468: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
            },
            8804: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' };
            },
            6664: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
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
            6147: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'ProgressBarDeltaGrow_base_7e',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    glow: 'ProgressBarDeltaGrow_glow_68',
                };
            },
            9919: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'ProgressBarDeltaSimple_base_6c', delta: 'ProgressBarDeltaSimple_delta_99' };
            },
            1609: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
            372: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalBar_base_49',
                    base__active: 'HorizontalBar_base__active_5e',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'VerticalBar_base_f3',
                    base__active: 'VerticalBar_base__active_72',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            7476: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
            1960: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'TankName_base_f1',
                    base__sizeMedium: 'TankName_base__sizeMedium_3a',
                    base__sizBig: 'TankName_base__sizBig_a9',
                    base__typeWhite: 'TankName_base__typeWhite_32',
                    base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_e2',
                    base__typeWhiteOrange: 'TankName_base__typeWhiteOrange_ac',
                    base__typeColored: 'TankName_base__typeColored_bc',
                    level: 'TankName_level_bb',
                    type: 'TankName_type_3c',
                    type__extraSmall: 'TankName_type__extraSmall_80',
                    type__medium: 'TankName_type__medium_ff',
                    type__big: 'TankName_type__big_9a',
                    type__eliteExtraSmall: 'TankName_type__eliteExtraSmall_74',
                    type__eliteMedium: 'TankName_type__eliteMedium_10',
                    type__eliteBig: 'TankName_type__eliteBig_ac',
                    name: 'TankName_name_56',
                    premiumIGR: 'TankName_premiumIGR_25',
                };
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](a, a.exports, __webpack_require__), a.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, r) => {
            if (!t) {
                var s = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, a, r] = deferred[u], n = !0, o = 0; o < t.length; o++)
                        (!1 & r || s >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((n = !1), r < s && (s = r));
                    if (n) {
                        deferred.splice(u--, 1);
                        var i = a();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > r; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, a, r];
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
        (__webpack_require__.j = 4685),
        (() => {
            var e = {
                4685: 0,
                9819: 0,
                4217: 0,
                5912: 0,
                1488: 0,
                1201: 0,
                9258: 0,
                4051: 0,
                2155: 0,
                8872: 0,
                7737: 0,
                1523: 0,
                8805: 0,
                1730: 0,
                8363: 0,
                6488: 0,
                2670: 0,
                6660: 0,
                3132: 0,
            };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var r,
                        s,
                        [n, o, i] = a,
                        u = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(a); u < n.length; u++)
                        ((s = n[u]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(1606));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
