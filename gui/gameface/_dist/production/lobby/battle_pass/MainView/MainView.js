(() => {
    var __webpack_modules__ = {
            7109: (e, t, a) => {
                'use strict';
                a.d(t, { L$: () => c.L, qE: () => c.q, u5: () => d });
                var r = a(9849),
                    n = a.n(r),
                    s = a(4170),
                    i = a(4029),
                    o = a(7363),
                    u = a.n(o),
                    l = a(6290),
                    c = a(2262);
                const d = ({
                    children: e,
                    size: t,
                    disabled: a,
                    mixClass: r,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: b,
                    onMouseLeave: E,
                    onClick: p,
                    isFocused: g = !1,
                    type: v = c.L.primary,
                    soundHover: h = 'highlight',
                    soundClick: f = 'play',
                }) => {
                    const C = (0, o.useRef)(null),
                        A = (0, o.useState)(g),
                        w = A[0],
                        B = A[1],
                        D = (0, o.useState)(!1),
                        F = D[0],
                        y = D[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                w && null !== C.current && !C.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, o.useEffect)(() => {
                            B(g);
                        }, [g]),
                        u().createElement(
                            'div',
                            {
                                ref: C,
                                className: n()(
                                    l.Z.base,
                                    l.Z[`base__${v}`],
                                    a && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    w && l.Z.base__focus,
                                    F && l.Z.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    a || (null !== h && (0, i.G)(h), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    a || (b && b(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    if (a) return;
                                    const t = e.button === s.t.LEFT;
                                    (null !== f && t && (0, i.G)(f),
                                        m && m(e),
                                        g && (a || (C.current && (C.current.focus(), B(!0)))),
                                        t && y(!0));
                                },
                                onMouseLeave: function (e) {
                                    a || (E && E(e), y(!1));
                                },
                                onClick: function (e) {
                                    a || (p && p(e));
                                },
                            },
                            v !== c.L.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: l.Z.back }),
                                    u().createElement('span', { className: l.Z.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: n()(l.Z.state, l.Z.state__default) },
                                u().createElement('span', { className: l.Z.stateDisabled }),
                                u().createElement('span', { className: l.Z.stateHighlightHover }),
                                u().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            u().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2262: (e, t, a) => {
                'use strict';
                a.d(t, { L: () => r, q: () => n });
                let r = (function (e) {
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
            4579: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => c });
                var r = a(9849),
                    n = a.n(r),
                    s = a(1602),
                    i = a(7363),
                    o = a.n(i);
                const u = {
                    base: 'Currency_base_ed02c',
                    icon: 'Currency_icon_d34e3',
                    base__small: 'Currency_base__small_af876',
                    base__big: 'Currency_base__big_f6388',
                    base__large: 'Currency_base__large_fb228',
                    base__extraLarge: 'Currency_base__extraLarge_d0b11',
                    'icon__credits-small': 'Currency_icon__credits-small_cb645',
                    'icon__credits-big': 'Currency_icon__credits-big_bb614',
                    'icon__credits-large': 'Currency_icon__credits-large_b65af',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_a4a53',
                    'icon__gold-small': 'Currency_icon__gold-small_eee32',
                    'icon__gold-big': 'Currency_icon__gold-big_e419a',
                    'icon__gold-large': 'Currency_icon__gold-large_c3a99',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_f2852',
                    'icon__crystal-small': 'Currency_icon__crystal-small_d8644',
                    'icon__crystal-big': 'Currency_icon__crystal-big_f2873',
                    'icon__crystal-large': 'Currency_icon__crystal-large_cf068',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_a9843',
                    'icon__xp-small': 'Currency_icon__xp-small_f3b46',
                    'icon__xp-big': 'Currency_icon__xp-big_c984a',
                    'icon__xp-large': 'Currency_icon__xp-large_e9a09',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_f90f7',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_bcda1',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_eb64e',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_e46b0',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_e41b1',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_c4a51',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_eceb0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_e35ab',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_a17d5',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_d3b9a',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_c34e1',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_b1b5e',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_a7b90',
                    value: 'Currency_value_bb176',
                    value__freeXP: 'Currency_value__freeXP_db401',
                    value__credits: 'Currency_value__credits_c98c5',
                    value__gold: 'Currency_value__gold_b8214',
                    value__xp: 'Currency_value__xp_eda0a',
                    value__crystal: 'Currency_value__crystal_cf72e',
                    value__equipCoin: 'Currency_value__equipCoin_cb08d',
                    value__eliteXP: 'Currency_value__eliteXP_de450',
                    value__notEnough: 'Currency_value__notEnough_db10a',
                    stock: 'Currency_stock_bffbc',
                    stock__indent: 'Currency_stock__indent_c4c0d',
                    stock__interactive: 'Currency_stock__interactive_e78a9',
                    stockBackground: 'Currency_stockBackground_c8ab1',
                };
                var l = a(4585);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: a,
                        type: r,
                        value: i,
                        discountValue: c,
                        showPlus: d,
                        isEnough: _ = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: b,
                        classNames: E,
                    }) =>
                        o().createElement(
                            'span',
                            { className: n()(u.base, u[`base__${a}`], b) },
                            o().createElement(
                                'span',
                                {
                                    className: n()(
                                        u.value,
                                        u[`value__${r}`],
                                        !_ && u.value__notEnough,
                                        null == E ? void 0 : E.value,
                                    ),
                                },
                                d && i > 0 && '+',
                                o().createElement(s.A, { value: i, format: r === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: n()(u.icon, u[`icon__${r}-${a}`], null == E ? void 0 : E.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: n()(
                                            u.stock,
                                            c && u.stock__indent,
                                            t && u.stock__interactive,
                                            null == E ? void 0 : E.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: u.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            4585: (e, t, a) => {
                'use strict';
                a.d(t, { V2: () => n, et: () => r, we: () => s });
                let r = (function (e) {
                        return (
                            (e.small = 'small'),
                            (e.big = 'big'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'),
                            e
                        );
                    })({}),
                    n = (function (e) {
                        return (
                            (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'),
                            e
                        );
                    })({}),
                    s = (function (e) {
                        return ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'), e);
                    })({});
            },
            1602: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => n });
                var r = a(828);
                const n = ({ value: e, format: t = 'integral' }) => {
                    const a = (function (e) {
                            return 'gold' === e ? r.B3.GOLD : r.B3.INTEGRAL;
                        })(t),
                        n = r.Z5.getNumberFormat(e, a);
                    return void 0 !== e && void 0 !== n ? n : null;
                };
            },
            2616: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => l });
                var r = a(9849),
                    n = a.n(r),
                    s = a(6758),
                    i = a(7363),
                    o = a.n(i),
                    u = a(4880);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: a,
                    alignment: r = s.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, s.WU)(t, e) : t;
                    return o().createElement(
                        i.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            o().createElement(
                                'div',
                                { className: n()(u.Z.base, a), key: `${t}-${l}` },
                                (0, s.Uw)(t, r, e).map((e, t) =>
                                    o().createElement(i.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            5603: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => r.z });
                var r = a(2616);
                a(1749);
            },
            1749: (e, t, a) => {
                'use strict';
                a(6758);
            },
            7436: (e, t, a) => {
                'use strict';
                a.d(t, { h: () => m });
                var r = a(9849),
                    n = a.n(r);
                const s =
                    (e, t) =>
                    (...a) => {
                        if (e(...a)) return t(...a);
                    };
                var i = a(4170),
                    o = a(4029),
                    u = a(7363),
                    l = a.n(u);
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
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.type,
                        a = e.children,
                        r = e.className,
                        m = e.classNames,
                        b = e.disabled,
                        E = void 0 !== b && b,
                        p = e.isVisibleLabel,
                        g = void 0 !== p && p,
                        v = e.soundHover,
                        h = void 0 === v ? R.sounds.highlight() : v,
                        f = e.soundClick,
                        C = void 0 === f ? R.sounds.play() : f,
                        A = e.size,
                        w = void 0 === A ? 'normal' : A,
                        B = e.onClick,
                        D = e.onMouseEnter,
                        F = e.onMouseLeave,
                        y = e.onMouseDown,
                        P = e.onMouseUp,
                        S = e.onFocus,
                        N = e.onBlur,
                        k = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, d);
                    const x = (0, u.useState)(!1),
                        L = x[0],
                        I = x[1],
                        T = (0, u.useState)(!1),
                        O = T[0],
                        M = T[1],
                        $ = (0, u.useRef)(null),
                        H = () => !1 === E,
                        W = (e) => H() && ((e) => e.button === i.t.LEFT)(e),
                        z = s(H, (e) => {
                            null == B || B(e);
                        }),
                        G = s(W, (e) => {
                            (I(!0), null == y || y(e), C && (0, o.G)(C));
                        }),
                        U = s(W, (e) => {
                            (I(!1), null == P || P(e));
                        }),
                        V = s(H, (e) => {
                            (M(!0), null == D || D(e), h && (0, o.G)(h));
                        }),
                        j = s(H, (e) => {
                            null == S || S(e);
                        }),
                        q = s(H, (e) => {
                            null == N || N(e);
                        });
                    return l().createElement(
                        'div',
                        _(
                            {
                                ref: $,
                                className: n()(
                                    c.base,
                                    E && c.base__disabled,
                                    g && c.base__visibleLabel,
                                    !E && L && c.base__mouseDown,
                                    !E && O && c.base__hovered,
                                    r,
                                ),
                                onClick: z,
                                onMouseEnter: V,
                                onMouseLeave: (e) => {
                                    (M(!1), I(!1), null == F || F(e));
                                },
                                onMouseDown: G,
                                onMouseUp: U,
                                onFocus: j,
                                onBlur: q,
                            },
                            k,
                        ),
                        l().createElement('div', {
                            className: n()(c.icon, c[`icon__${w}`], c[`icon__${t}`], null == m ? void 0 : m.icon),
                        }),
                        a &&
                            l().createElement(
                                'div',
                                { className: n()(c.label, c[`label__${w}`], null == m ? void 0 : m.label) },
                                a,
                            ),
                    );
                };
            },
            397: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => o, Y: () => l });
                var r = a(7475),
                    n = a(7363),
                    s = a(1958),
                    i = a(9478);
                function o(e = r.O.client.getSize('rem')) {
                    const t = e.width,
                        a = e.height;
                    return Object.assign({ width: t, height: a }, (0, i.T)(t, a, s.j));
                }
                const u = o(),
                    l = (0, n.createContext)(u);
            },
            68: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => o });
                var r = a(7475),
                    n = a(7363),
                    s = a.n(n),
                    i = a(397);
                const o = ({ children: e }) => {
                    const t = (0, n.useState)(i.Q),
                        a = t[0],
                        o = t[1],
                        u = (0, n.useState)(!1),
                        l = u[0],
                        c = u[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                o((e) => {
                                    const t = r.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, i.Q)(t);
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
                        s().createElement(i.Y.Provider, { value: a }, l && e)
                    );
                };
            },
            5191: (e, t, a) => {
                'use strict';
                var r = a(7363),
                    n = a(3034),
                    s = a(397);
                const i = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, i);
                    const o = (0, r.useContext)(s.Y),
                        u = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        d = o.small,
                        _ = o.extraSmall,
                        m = o.extraLargeWidth,
                        b = o.largeWidth,
                        E = o.mediumWidth,
                        p = o.smallWidth,
                        g = o.extraSmallWidth,
                        v = o.extraLargeHeight,
                        h = o.largeHeight,
                        f = o.mediumHeight,
                        C = o.smallHeight,
                        A = o.extraSmallHeight,
                        w = { extraLarge: v, large: h, medium: f, small: C, extraSmall: A };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && u) return t;
                        if (a.large && l) return t;
                        if (a.medium && c) return t;
                        if (a.small && d) return t;
                        if (a.extraSmall && _) return t;
                    } else {
                        if (a.extraLargeWidth && m) return (0, n.H)(t, a, w);
                        if (a.largeWidth && b) return (0, n.H)(t, a, w);
                        if (a.mediumWidth && E) return (0, n.H)(t, a, w);
                        if (a.smallWidth && p) return (0, n.H)(t, a, w);
                        if (a.extraSmallWidth && g) return (0, n.H)(t, a, w);
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
            3034: (e, t, a) => {
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
            5579: (e, t, a) => {
                'use strict';
                a.d(t, { YN: () => n.Y, ZN: () => r.Z });
                a(5191);
                var r = a(68),
                    n = a(397);
            },
            1958: (e, t, a) => {
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
            9478: (e, t, a) => {
                'use strict';
                a.d(t, { T: () => n, u: () => r });
                var r = (function (e) {
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
                })(r || {});
                function n(e, t, a) {
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
                        s = Math.min(r, n);
                    return {
                        extraLarge: s === a.extraLarge.weight,
                        large: s === a.large.weight,
                        medium: s === a.medium.weight,
                        small: s === a.small.weight,
                        extraSmall: s === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
                    };
                }
            },
            5938: (e, t, a) => {
                'use strict';
                a.d(t, { ru: () => E.r, _e: () => f, uu: () => u.uu, MR: () => v });
                var r = a(9849),
                    n = a.n(r),
                    s = a(8463),
                    i = a(7363),
                    o = a.n(i),
                    u = a(3097),
                    l = a(5713),
                    c = a(2858);
                const d = 'OptimizedProgressBar_base_eb321',
                    _ = 'OptimizedProgressBar_wrapper_f28f4',
                    m = 'OptimizedProgressBar_backgroundWrapper_a8cba',
                    b = 'OptimizedProgressBar_background_e6342';
                var E = a(233);
                const p = ['api', 'value', 'maxValue', 'theme', 'className'];
                function g() {
                    return (
                        (g = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        g.apply(null, arguments)
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
                                var a = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        a[r] = e[r];
                                    }
                                return a;
                            })(e, p);
                        const w = (0, i.useRef)(null),
                            B = (0, i.useRef)(null),
                            D = (0, i.useRef)(null),
                            F = (0, s.u)(0, a, E) / E,
                            y = (0, i.useCallback)(
                                (e) => {
                                    (D.current &&
                                        w.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, a, r) => {
                                            const n = (e - h(a, t)) | 0,
                                                i = (0, s.u)(0, a.offsetWidth, n);
                                            r.style.transform = `translateX(${i}px)`;
                                        })(e, w.current, D.current),
                                        B.current &&
                                            w.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                a,
                                                { container: r, line: n },
                                            ) => {
                                                const i = Math.max(0, Math.floor(r.offsetWidth * a) - 8e3),
                                                    o = (e - h(r, t)) | 0,
                                                    u = (0, s.u)(0, i, o);
                                                n.style.transform = `translateX(${u}px)`;
                                            })(e, F, { line: B.current, container: w.current }));
                                },
                                [F],
                            ),
                            P = (0, i.useMemo)(() => (0, c.VQ)(f), [f]);
                        return (
                            (t.current.update = y),
                            o().createElement(
                                'div',
                                { className: n()(d, C), ref: w },
                                o().createElement(
                                    'div',
                                    { className: _ },
                                    o().createElement(
                                        'div',
                                        { className: m },
                                        o().createElement(
                                            'div',
                                            { style: P, className: b, ref: D },
                                            o().createElement(l.J, { size: A.size }),
                                        ),
                                    ),
                                    o().createElement(
                                        u.ko,
                                        g({}, A, {
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
            3097: (e, t, a) => {
                'use strict';
                a.d(t, { $u: () => d.$, ko: () => E, uH: () => m, uu: () => b });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(7947),
                    u = a(5713),
                    l = a(9536),
                    c = a(2858),
                    d = a(233),
                    _ = a(9859);
                a(6114);
                const m = c.Gh,
                    b = {
                        freezed: !1,
                        withStack: !1,
                        type: d.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    E = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = m,
                            size: a = d.$.Default,
                            animationSettings: r = b,
                            disabled: s = !1,
                            withoutBackground: E = !1,
                            value: p,
                            deltaFrom: g,
                            additionalKey: v,
                            lineRef: h,
                            onChangeAnimationState: f,
                            onEndAnimation: C,
                            onComplete: A,
                            className: w,
                        }) => {
                            const B = (0, _.S)(p, e, g);
                            return i().createElement(
                                'div',
                                { className: n()(o.Z.base, w, o.Z[`base__${a}`]), style: (0, c.VQ)(t) },
                                !E && i().createElement(u.J, { size: a }),
                                i().createElement(l.r, {
                                    size: a,
                                    lineRef: h,
                                    disabled: s,
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
            5713: (e, t, a) => {
                'use strict';
                a.d(t, { J: () => l });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(7947),
                    u = a(233);
                const l = ({ size: e = u.$.Default }) => {
                    const t = n()(o.Z.background, o.Z[`background__${e}`]);
                    return i().createElement('div', { className: t });
                };
            },
            8243: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => u });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(2234);
                const u = ({ size: e }) => {
                    const t = n()(o.Z.base, o.Z[`base__${e}`]);
                    return i().createElement('div', { className: t });
                };
            },
            9536: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => l });
                var r = a(7363),
                    n = a.n(r),
                    s = a(6145),
                    i = a(3107),
                    o = a(5586);
                function u() {
                    return (
                        (u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        u.apply(null, arguments)
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
                        onComplete: b,
                    }) => {
                        if (l === t)
                            return n().createElement(i.M, {
                                key: `${l}-${t}-${c}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: r,
                                onComplete: b,
                            });
                        const E = {
                            from: l,
                            to: t,
                            size: e,
                            additionalKey: c,
                            lineRef: a,
                            disabled: r,
                            animationSettings: d,
                            onComplete: b,
                            onEndAnimation: _,
                            onChangeAnimationState: m,
                        };
                        return d.withStack
                            ? n().createElement(o.F, E)
                            : n().createElement(s.H, u({ key: `${l}-${t}-${c}` }, E));
                    },
                );
            },
            2420: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => l });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(8243),
                    u = a(7760);
                const l = (0, s.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: r, isComplete: s, withoutBounce: l }) => {
                        const c = n()(
                                u.Z.base,
                                u.Z[`base__${e}`],
                                a && u.Z.base__disabled,
                                s && u.Z.base__finished,
                                l && u.Z.base__withoutBounce,
                            ),
                            d = !a && !s;
                        return i().createElement(
                            'div',
                            { className: c, style: r, ref: t },
                            i().createElement('div', { className: u.Z.pattern }),
                            i().createElement('div', { className: u.Z.gradient }),
                            d && i().createElement(o.$, { size: e }),
                        );
                    },
                );
            },
            2170: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => b });
                var r = a(9849),
                    n = a.n(r),
                    s = a(1652),
                    i = a(7363),
                    o = a.n(i),
                    u = a(8243),
                    l = a(6114),
                    c = a(5232);
                const d = (e) => (e ? { left: 0 } : { right: 0 }),
                    _ = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    m = (e) => ({ transitionDuration: `${e}ms` }),
                    b = (0, i.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: r,
                            size: b,
                            to: E,
                            onEndAnimation: p,
                            onChangeAnimationState: g,
                            className: v,
                        }) => {
                            const h = E < r,
                                f = (0, i.useState)(l.S.Idle),
                                C = f[0],
                                A = f[1],
                                w = C === l.S.End,
                                B = C === l.S.Idle,
                                D = C === l.S.Grow,
                                F = C === l.S.Shrink,
                                y = (0, i.useCallback)(
                                    (e) => {
                                        (A(e), g && g(e));
                                    },
                                    [g],
                                ),
                                P = (0, i.useCallback)(
                                    (e, t) =>
                                        (0, s.F)(() => {
                                            y(e);
                                        }, t),
                                    [y],
                                );
                            (0, i.useEffect)(() => {
                                if (!a)
                                    return B
                                        ? P(l.S.Grow, t)
                                        : D
                                          ? P(l.S.Shrink, e)
                                          : F
                                            ? P(l.S.End, e)
                                            : void (w && p && p());
                            }, [P, a, w, D, B, F, p, t, e]);
                            const S = (0, i.useMemo)(() => Object.assign({ width: '100%' }, m(e), d(h)), [h, e]),
                                N = (0, i.useMemo)(() => Object.assign({ width: '0%' }, m(e), d(h)), [h, e]),
                                k = (0, i.useMemo)(() => Object.assign({ width: '0%' }, _(h, r), m(e)), [r, h, e]),
                                R = (0, i.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(E - r)}%` }, _(h, r), m(e)),
                                    [r, h, E, e],
                                );
                            if (w) return null;
                            const x = n()(c.Z.base, v, h && 0 === E && c.Z.base__withoutBounce);
                            return o().createElement(
                                'div',
                                { style: B ? k : R, className: x },
                                o().createElement(
                                    'div',
                                    { style: F ? N : S, className: c.Z.glow },
                                    o().createElement(u.$, { size: b }),
                                ),
                            );
                        },
                    );
            },
            1530: (e, t, a) => {
                'use strict';
                a.d(t, { x: () => l });
                var r = a(1652),
                    n = a(7363),
                    s = a.n(n),
                    i = a(8243),
                    o = a(6114),
                    u = a(9822);
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
                        const b = d < l,
                            E = (0, n.useState)(o.V.Idle),
                            p = E[0],
                            g = E[1],
                            v = p === o.V.In,
                            h = p === o.V.End,
                            f = p === o.V.Idle,
                            C = (0, n.useCallback)(
                                (e) => {
                                    (g(e), m && m(e));
                                },
                                [m],
                            );
                        ((0, n.useEffect)(() => {
                            if (f && !a) {
                                const e = t;
                                return (0, r.F)(() => {
                                    C(o.V.In);
                                }, e);
                            }
                        }, [C, a, f, t]),
                            (0, n.useEffect)(() => {
                                if (v) {
                                    const a = e + t;
                                    return (0, r.F)(() => {
                                        (_ && _(), C(o.V.End));
                                    }, a);
                                }
                            }, [C, v, _, t, e]));
                        const A = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [b ? 'left' : 'right']: '0',
                                }),
                                [b, t, e],
                            ),
                            w = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [b ? 'left' : 'right']: '0',
                                }),
                                [b, t, e],
                            ),
                            B = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(l - d)}%`, left: `${b ? d : l}%` }),
                                [l, b, d],
                            );
                        return h
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: u.Z.base, style: B },
                                  s().createElement(
                                      'div',
                                      { style: f ? A : w, className: u.Z.delta },
                                      s().createElement(i.$, { size: c }),
                                  ),
                              );
                    },
                );
            },
            9143: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                var r = a(7363),
                    n = a.n(r),
                    s = a(2420),
                    i = a(2170),
                    o = a(6114);
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
                        const b = e < a,
                            E = (0, r.useState)(!1),
                            p = E[0],
                            g = E[1],
                            v = (0, r.useCallback)(
                                (e) => {
                                    (e === o.S.Shrink && g(!0), m && m(e));
                                },
                                [m],
                            ),
                            h = (0, r.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            f = (0, r.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${d.line.duration}ms` }),
                                [d.line.duration, e],
                            );
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(s.t, {
                                size: t,
                                lineRef: u,
                                disabled: l,
                                isComplete: c,
                                withoutBounce: b && 0 === e,
                                baseStyles: p ? f : h,
                            }),
                            a >= 0 &&
                                n().createElement(i.O, {
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
            1586: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => o });
                var r = a(7363),
                    n = a.n(r),
                    s = a(2420),
                    i = a(1530);
                const o = (0, r.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: o,
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
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(s.t, { size: t, lineRef: o, disabled: u, isComplete: l, baseStyles: m }),
                            a >= 0 &&
                                n().createElement(i.x, {
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
                'use strict';
                a.d(t, { H: () => c });
                var r = a(7363),
                    n = a.n(r),
                    s = a(233),
                    i = a(9143),
                    o = a(1586);
                const u = ['onComplete', 'onEndAnimation'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (0, r.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        c = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, u);
                    const d = (0, r.useState)(!1),
                        _ = d[0],
                        m = d[1],
                        b = (0, r.useCallback)(() => {
                            const e = 100 === c.to;
                            (e !== _ && m(e), e && t && t(), a && a());
                        }, [_, t, a, c.to]);
                    switch (c.animationSettings.type) {
                        case s.r.Simple:
                            return n().createElement(o.D, l({}, c, { onEndAnimation: b, isComplete: _ }));
                        case s.r.Growing:
                            return n().createElement(i.F, l({}, c, { onEndAnimation: b, isComplete: _ }));
                        default:
                            return null;
                    }
                });
            },
            6114: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => r, V: () => n });
                let r = (function (e) {
                        return ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'), e);
                    })({}),
                    n = (function (e) {
                        return ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'), e);
                    })({});
            },
            5586: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => u });
                var r = a(7363),
                    n = a.n(r),
                    s = a(6145);
                const i = ['onEndAnimation'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const u = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, i);
                    const u = (0, r.useRef)({}),
                        l = (0, r.useCallback)(() => {
                            ((u.current.from = void 0), t && t());
                        }, [t]),
                        c = 'number' == typeof u.current.from ? u.current.from : a.from;
                    return (
                        (u.current.from = c),
                        n().createElement(
                            s.H,
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
                'use strict';
                a.d(t, { M: () => i });
                var r = a(7363),
                    n = a.n(r),
                    s = a(2420);
                const i = ({ size: e, value: t, lineRef: a, disabled: i, onComplete: o }) => {
                    const u = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, r.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        n().createElement(s.t, { size: e, disabled: i, baseStyles: u, isComplete: l, lineRef: a })
                    );
                };
            },
            2858: (e, t, a) => {
                'use strict';
                a.d(t, { Gh: () => n, VQ: () => r, fV: () => s });
                const r = (e) => {
                        var t, a, r, n, s, i, o, u, l, c, d, _, m, b, E, p, g, v, h, f;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (a = e.bg) ? void 0 : a.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (r = null == (n = e.bg) ? void 0 : n.heightSmall) ? r : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (s = e.line.filter) ? s : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (i = e.pattern.size) ? i : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
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
                                null != (m = null == (b = e.glowSettings) ? void 0 : b.height) ? m : '100rem',
                            '--progress-glow-small-width':
                                null != (E = null == (p = e.glowSettings) ? void 0 : p.smallWidth) ? E : '44rem',
                            '--progress-glow-small-height':
                                null != (g = null == (v = e.glowSettings) ? void 0 : v.smallHeight) ? g : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (h = null == (f = e.glowSettings) ? void 0 : f.mixBlendMode) ? h : 'lighten',
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
                    s = {
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
                    i = {
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
                Object.assign({}, i, {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                    line: Object.assign({}, i.line, {
                        bgColorBase: '#83C6A5',
                        bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                    }),
                    pattern: Object.assign({}, i.pattern, {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                    }),
                });
            },
            233: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => r, r: () => n });
                let r = (function (e) {
                        return ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'), e);
                    })({}),
                    n = (function (e) {
                        return ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'), e);
                    })({});
            },
            9859: (e, t, a) => {
                'use strict';
                a.d(t, { S: () => i });
                var r = a(8463),
                    n = a(7363);
                const s = (e, t, a) => {
                    if ('number' == typeof a) {
                        return ((0, r.u)(0, t, a) / t) * 100;
                    }
                    return e;
                };
                function i(e, t, a) {
                    return (0, n.useMemo)(() => {
                        const n = ((0, r.u)(0, t, e) / t) * 100;
                        return { value: n, deltaFrom: s(n, t, a) };
                    }, [a, t, e]);
                }
            },
            3359: (e, t, a) => {
                'use strict';
                a.d(t, { Q: () => d });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(1672),
                    u = a(2486),
                    l = a(4692),
                    c = a(5261);
                const d = ({
                    name: e,
                    image: t,
                    isPeriodic: a = !1,
                    size: r = u.h2.Big,
                    special: s,
                    value: d,
                    valueType: _,
                    title: m,
                    style: b,
                    className: E,
                    classNames: p,
                    tooltipArgs: g,
                    periodicIconTooltipArgs: v,
                }) => {
                    const h = (0, l.c$)(r, s),
                        f = (0, l.i2)(s),
                        C = (0, l.m9)(d, _);
                    return i().createElement(
                        'div',
                        {
                            className: n()(c.Z.base, c.Z[`base__${r}`], u.oy.includes(e) && c.Z.base__normalize, E),
                            style: b,
                        },
                        i().createElement(
                            o.l,
                            { tooltipArgs: g, className: c.Z.tooltipWrapper },
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == p ? void 0 : p.image) },
                                    h &&
                                        i().createElement('div', {
                                            className: n()(c.Z.highlight, null == p ? void 0 : p.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${h}_highlight)`,
                                            },
                                        }),
                                    t &&
                                        i().createElement('div', {
                                            className: n()(c.Z.icon, null == p ? void 0 : p.rewardIcon),
                                            style: { backgroundImage: `url(${t})` },
                                        }),
                                    f &&
                                        i().createElement('div', {
                                            className: n()(c.Z.overlay, null == p ? void 0 : p.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${f}_overlay)`,
                                            },
                                        }),
                                ),
                                C &&
                                    i().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                _ === u.$h.MULTI && c.Z.info__multi,
                                                null == p ? void 0 : p.info,
                                            ),
                                        },
                                        C,
                                    ),
                                m && i().createElement('div', { className: c.Z.title }, m),
                            ),
                        ),
                        a &&
                            i().createElement(
                                o.l,
                                { tooltipArgs: v },
                                i().createElement('div', {
                                    className: n()(c.Z.timer, null == p ? void 0 : p.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2486: (e, t, a) => {
                'use strict';
                a.d(t, { $h: () => s, A2: () => o, E4: () => r, h2: () => n, kK: () => i, oy: () => l, sh: () => u });
                let r = (function (e) {
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
                    s = (function (e) {
                        return (
                            (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'),
                            e
                        );
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
                    })({}),
                    o = (function (e) {
                        return ((e.BATTLE_BOOSTER = 'battleBooster'), e);
                    })({}),
                    u = (function (e) {
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
                const l = [r.Attachment];
            },
            4692: (e, t, a) => {
                'use strict';
                a.d(t, { c$: () => g, i2: () => v, m9: () => h, p3: () => d, pI: () => E, ry: () => b });
                var r = a(1602),
                    n = a(7363),
                    s = a.n(n),
                    i = a(2486);
                const o = [
                        i.E4.Items,
                        i.E4.Equipment,
                        i.E4.Xp,
                        i.E4.XpFactor,
                        i.E4.Blueprints,
                        i.E4.BlueprintsAny,
                        i.E4.Goodies,
                        i.E4.Berths,
                        i.E4.Slots,
                        i.E4.Tokens,
                        i.E4.CrewSkins,
                        i.E4.CrewBooks,
                        i.E4.Customizations,
                        i.E4.CreditsFactor,
                        i.E4.TankmenXp,
                        i.E4.TankmenXpFactor,
                        i.E4.FreeXpFactor,
                        i.E4.BattleToken,
                        i.E4.LootBox,
                        i.E4.PremiumUniversal,
                        i.E4.NaturalCover,
                        i.E4.BpCoin,
                        i.E4.BattlePassSelectToken,
                        i.E4.BattlaPassFinalAchievement,
                        i.E4.BattleBadge,
                        i.E4.BattlePassTicket,
                        i.E4.BonusX5,
                        i.E4.CrewBonusX3,
                        i.E4.EpicSelectToken,
                        i.E4.Comp7TokenWeeklyReward,
                        i.E4.DeluxeGift,
                        i.E4.ModernizedDevicesT1Gift,
                        i.E4.ModernizedDevicesT2Gift,
                        i.E4.ModernizedDevicesT3Gift,
                        i.E4.BattleBoosterGift,
                        i.E4.OptionalDevice,
                        i.E4.Attachment,
                    ],
                    u = [i.E4.Gold, i.E4.Credits, i.E4.Crystal, i.E4.FreeXp],
                    l = [i.E4.BattlePassPoints, i.E4.EquipCoin],
                    c = [i.E4.PremiumPlus, i.E4.Premium],
                    d = (e) =>
                        o.includes(e)
                            ? i.$h.MULTI
                            : u.includes(e)
                              ? i.$h.CURRENCY
                              : l.includes(e)
                                ? i.$h.NUMBER
                                : c.includes(e)
                                  ? i.$h.PREMIUM_PLUS
                                  : i.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    m = ['engraving', 'background'],
                    b = (e, t = i.h2.Small) => {
                        const a = e.name,
                            r = e.type,
                            n = e.value,
                            s = e.icon,
                            o = e.item,
                            u = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case i.h2.S600x450:
                                        return 'c_600x450';
                                    case i.h2.S400x300:
                                        return 'c_400x300';
                                    case i.h2.S296x222:
                                        return 'c_296x222';
                                    case i.h2.S232x174:
                                        return 'c_232x174';
                                    case i.h2.Big:
                                        return 'c_80x80';
                                    case i.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const r = _[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            s = n.$dyn(a);
                                        return s ? `${s}` : `${n.$dyn(m[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(u, t, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${s}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${l}.${s}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${s}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${s}`;
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
                    p = [i.h2.Small, i.h2.Big],
                    g = (e, t) => {
                        if (void 0 === t || !p.includes(e)) return null;
                        switch (t) {
                            case i.kK.BATTLE_BOOSTER:
                            case i.kK.BATTLE_BOOSTER_REPLACE:
                                return i.A2.BATTLE_BOOSTER;
                        }
                    },
                    v = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case i.kK.BATTLE_BOOSTER:
                                return i.sh.BATTLE_BOOSTER;
                            case i.kK.BATTLE_BOOSTER_REPLACE:
                                return i.sh.BATTLE_BOOSTER_REPLACE;
                            case i.kK.BUILT_IN_EQUIPMENT:
                                return i.sh.BUILT_IN_EQUIPMENT;
                            case i.kK.EQUIPMENT_PLUS:
                                return i.sh.EQUIPMENT_PLUS;
                            case i.kK.EQUIPMENT_TROPHY_BASIC:
                                return i.sh.EQUIPMENT_TROPHY_BASIC;
                            case i.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return i.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_4;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_5:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_5;
                            case i.kK.PROGRESSION_STYLE_UPGRADED_6:
                                return i.sh.PROGRESSION_STYLE_UPGRADED_6;
                            case i.kK.ATTACHMENT_RARE:
                                return i.sh.ATTACHMENT_RARE;
                            case i.kK.ATTACHMENT_EPIC:
                                return i.sh.ATTACHMENT_EPIC;
                            case i.kK.ATTACHMENT_LEGENDARY:
                                return i.sh.ATTACHMENT_LEGENDARY;
                        }
                    },
                    h = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case i.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case i.$h.CURRENCY:
                            case i.$h.NUMBER:
                                return s().createElement(r.A, { format: 'integral', value: Number(e) });
                            case i.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            8656: (e, t, a) => {
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
            7925: (e, t, a) => {
                'use strict';
                a.d(t, { $Q: () => f });
                var r = a(9849),
                    n = a.n(r),
                    s = a(8463),
                    i = a(8978),
                    o = a(7475),
                    u = a(9659),
                    l = a(5239),
                    c = a(4029),
                    d = a(7363),
                    _ = a.n(d),
                    m = a(8718),
                    b = a(8823);
                const E = 'disable',
                    p = { pending: !1, offset: 0 },
                    g = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    v = () => {},
                    h = (e, t) => Math.max(20, e.offsetWidth * t),
                    f = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = g, onDrag: r = v }) => {
                        const f = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            w = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            D = e.stepTimeout || 100,
                            F = (0, d.useState)(p),
                            y = F[0],
                            P = F[1],
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
                                    n = e.getContainerSize();
                                if (!(r && t && a && n)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    u = (0, s.u)(0, 1, i / (n - r)),
                                    l = (t.offsetWidth - h(t, o)) * u;
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
                                        n = e.getContainerSize();
                                    if (!(n && t && r && a)) return;
                                    const s = Math.min(1, r / n);
                                    ((t.style.width = `${h(a, s)}px`),
                                        (t.style.display = 'flex'),
                                        f.current &&
                                            (1 !== s
                                                ? f.current.classList.add(b.Z.base__active)
                                                : f.current.classList.remove(b.Z.base__active)));
                                })(),
                                    N());
                            });
                        ((0, d.useEffect)(() => (0, i.v)(k)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            N();
                                        };
                                        let a = v;
                                        const r = () => {
                                            (a(), (a = (0, i.v)(k)));
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
                                if (!y.pending) return;
                                const t = o.O.client.events.mouse.move(([t, a]) => {
                                        var n;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const o = w.current,
                                            u = B.current;
                                        if (!o || !u) return;
                                        if ('inside' === a && t.clientX < 0) return;
                                        const l = t.clientX - y.offset - o.getBoundingClientRect().x,
                                            c = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: u, thumbOffset: l, contentOffset: c }));
                                    }),
                                    a = o.O.client.events.mouse.up(() => {
                                        (t(), S(p));
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, y.offset, y.pending, r, S]));
                        const R = (0, l.B)((t) => e.applyStepTo(t), D, [e]),
                            x = R[0],
                            L = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const I = (e) => {
                            e.target.classList.contains(E) || (0, c.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: n()(b.Z.base, t.base), ref: f, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: n()(b.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), x(m.Nm.Next));
                                },
                                onMouseUp: L,
                                ref: C,
                                onMouseEnter: I,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: n()(b.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = B.current;
                                        if (r && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === r))
                                                S({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = B.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const s = a(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: w,
                                    onMouseEnter: I,
                                },
                                _().createElement('div', { ref: B, className: n()(b.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: n()(b.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: n()(b.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(E) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), x(m.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: A,
                                onMouseEnter: I,
                            }),
                        );
                    });
            },
            2893: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(7925),
                    u = a(969),
                    l = a(4109);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: r,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: _,
                    getStepByRailClick: m,
                    onDrag: b,
                }) => {
                    const E = (0, s.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: n()(l.Z.base, e.base) });
                        }, [r]),
                        p = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: n()(l.Z.defaultScrollArea, c) },
                            i().createElement(u.Area, { className: _, api: p, classNames: d }, e),
                        ),
                        i().createElement(o.$Q, { getStepByRailClick: m, api: t, onDrag: b, classNames: E }),
                    );
                };
            },
            969: (e, t, a) => {
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
                var r = a(9849),
                    n = a.n(r),
                    s = a(8978),
                    i = a(7363),
                    o = a.n(i),
                    u = a(7925),
                    l = a(2893),
                    c = a(4109),
                    d = a(8718);
                const _ = ({ api: e, className: t, classNames: a, children: r }) => (
                    (0, i.useEffect)(() => (0, s.v)(e.recalculateContent)),
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
                                r,
                            ),
                        ),
                    )
                );
                ((_.Bar = u.$Q), (_.Default = l.K));
            },
            8718: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => n.Nm, T5: () => i, he: () => n.he });
                var r = a(7475),
                    n = a(4977);
                const s = {
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
                        forceTriggerMouseMove: r.O.view.forceTriggerMouseMove,
                    },
                    i = (0, n.EO)(s);
            },
            5154: (e, t, a) => {
                'use strict';
                a.d(t, { $Q: () => C });
                var r = a(9849),
                    n = a.n(r),
                    s = a(8463),
                    i = a(8978),
                    o = a(7475),
                    u = a(9659),
                    l = a(5239),
                    c = a(4029),
                    d = a(7363),
                    _ = a.n(d),
                    m = a(4222),
                    b = a(1905);
                const E = 'disable',
                    p = () => {},
                    g = { pending: !1, offset: 0 },
                    v = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    f = (e, t) => Math.max(20, e.offsetHeight * t),
                    C = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: a = v, onDrag: r = p }) => {
                        const C = (0, d.useRef)(null),
                            A = (0, d.useRef)(null),
                            w = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            D = (0, d.useRef)(null),
                            F = e.stepTimeout || 100,
                            y = (0, d.useState)(g),
                            P = y[0],
                            S = y[1],
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
                                    n = e.getContainerSize();
                                if (!(r && n && t && a)) return;
                                const s = Math.min(1, r / n);
                                return (
                                    (t.style.height = `${f(a, s)}px`),
                                    (t.style.display = 'flex'),
                                    C.current &&
                                        (1 !== s
                                            ? C.current.classList.add(b.Z.base__active)
                                            : C.current.classList.remove(b.Z.base__active)),
                                    s
                                );
                            }),
                            R = (0, u.z)(() => {
                                const t = B.current,
                                    a = D.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && t && a && n)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    u = (0, s.u)(0, 1, i / (n - r)),
                                    l = (t.offsetHeight - f(t, o)) * u;
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
                            x = (0, u.z)(() => {
                                h(e, () => {
                                    (k(), R());
                                });
                            });
                        ((0, d.useEffect)(() => (0, i.v)(x)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    h(e, () => {
                                        R();
                                    });
                                };
                                let a = p;
                                const r = () => {
                                    (a(), (a = (0, i.v)(x)));
                                };
                                return (
                                    e.events.on('recalculateContent', x),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (a(),
                                            e.events.off('recalculateContent', x),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!P.pending) return;
                                const t = o.O.client.events.mouse.up(() => {
                                        N(g);
                                    }),
                                    a = o.O.client.events.mouse.move(([t]) => {
                                        h(e, (a) => {
                                            const n = B.current,
                                                s = D.current,
                                                i = e.getContainerSize();
                                            if (!n || !s || !i) return;
                                            const o = t.screenY - P.offset - n.getBoundingClientRect().y,
                                                u = (o / n.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(a, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: a.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: u }));
                                        });
                                    });
                                return () => {
                                    (t(), a());
                                };
                            }, [e, P.offset, P.pending, r, N]));
                        const L = (0, l.B)((t) => e.applyStepTo(t), F, [e]),
                            I = L[0],
                            T = L[1];
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
                            { className: n()(b.Z.base, t.base), ref: C, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: n()(b.Z.topButton, t.topButton),
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
                                    className: n()(b.Z.track, t.track),
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
                                                            const n = a(e),
                                                                s = e.clampPosition(r, r.scrollTop + n * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? m.Nm.Prev : m.Nm.Next);
                                            }
                                    },
                                    ref: B,
                                    onMouseEnter: O,
                                },
                                _().createElement('div', { ref: D, className: n()(b.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: n()(b.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: n()(b.Z.bottomButton, t.bottomButton),
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
            4444: (e, t, a) => {
                'use strict';
                a.d(t, { K: () => c });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(5154),
                    u = a(3934),
                    l = a(2459);
                const c = ({
                    children: e,
                    api: t,
                    className: a,
                    barClassNames: r,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: _,
                    getStepByRailClick: m,
                    onDrag: b,
                }) => {
                    const E = (0, s.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: n()(l.Z.base, e.base) });
                        }, [r]),
                        p = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, a), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: n()(l.Z.area, c) },
                            i().createElement(u.Area, { className: d, classNames: _, api: p }, e),
                        ),
                        i().createElement(o.$Q, { getStepByRailClick: m, api: t, onDrag: b, classNames: E }),
                    );
                };
            },
            3934: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, { Area: () => _, Bar: () => u.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var r = a(9849),
                    n = a.n(r),
                    s = a(8978),
                    i = a(7363),
                    o = a.n(i),
                    u = a(5154),
                    l = a(4444),
                    c = a(4222),
                    d = a(2459);
                const _ = ({ className: e, classNames: t, children: a, api: r }) => (
                    (0, i.useEffect)(() => (0, s.v)(r.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: n()(d.Z.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: n()(d.Z.content, null == t ? void 0 : t.content), ref: r.contentRef },
                            a,
                        ),
                    )
                );
                _.Default = l.K;
            },
            4222: (e, t, a) => {
                'use strict';
                a.d(t, { Nm: () => r.Nm, c4: () => s });
                var r = a(4977);
                const n = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                    },
                    s = (0, r.EO)(n);
            },
            4977: (e, t, a) => {
                'use strict';
                a.d(t, { EO: () => m, Nm: () => d, he: () => _ });
                var r = a(8463),
                    n = a(8978),
                    s = a(7845),
                    i = a(603),
                    o = a(9659),
                    u = a(3024),
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
                        forceTriggerMouseMove: b,
                    }) => {
                        const E = (e, a) => {
                            const n = t(e),
                                s = n[0],
                                i = n[1];
                            return i <= s ? 0 : (0, r.u)(s, i, a);
                        };
                        return (r = {}) => {
                            const p = r.settings,
                                g = void 0 === p ? _ : p,
                                v = (0, l.useRef)(null),
                                h = (0, l.useRef)(null),
                                f = (0, l.useRef)(!1),
                                C = (0, i.q)(),
                                A = (0, u.f)(
                                    () => {
                                        b && b();
                                    },
                                    [],
                                    150,
                                ),
                                w = (0, c.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = v.current;
                                        t && (a(t, e), C.trigger('change', e), b && f.current && A());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                B = w[0],
                                D = w[1],
                                F = (0, l.useCallback)(
                                    (e, t, a) => {
                                        var r;
                                        const n = B.scrollPosition.get(),
                                            s = (null != (r = B.scrollPosition.goal) ? r : 0) - n;
                                        return E(e, t * a + s + n);
                                    },
                                    [B.scrollPosition],
                                ),
                                y = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: a = !0 } = {}) => {
                                        const r = v.current;
                                        r &&
                                            D.start({
                                                scrollPosition: E(r, e),
                                                immediate: t,
                                                reset: a,
                                                config: g.animationConfig,
                                                from: { scrollPosition: E(r, B.scrollPosition.get()) },
                                            });
                                    },
                                    [D, g.animationConfig, B.scrollPosition],
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
                                            })(a, g.step),
                                            n = F(t, e, r);
                                        y(n);
                                    },
                                    [y, F, g.step],
                                ),
                                S = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && P(d(e)),
                                            v.current && C.trigger('mouseWheel', e, B.scrollPosition, t(v.current)));
                                    },
                                    [B.scrollPosition, P, C],
                                ),
                                N = (0, s.M)(
                                    () =>
                                        (0, n.v)(() => {
                                            const e = v.current;
                                            e &&
                                                (y(E(e, B.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [y, B.scrollPosition.goal],
                                ),
                                k = (0, o.z)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const t = E(e, B.scrollPosition.goal);
                                    (t !== B.scrollPosition.goal && y(t, { immediate: !0 }),
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
                                    if (!e || !b) return;
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
                                    stepTimeout: g.step.clampedArrowStepTimeout,
                                    clampPosition: E,
                                    handleMouseWheel: S,
                                    applyScroll: y,
                                    applyStepTo: P,
                                    contentRef: v,
                                    wrapperRef: h,
                                    scrollPosition: D,
                                    animationScroll: B,
                                    recalculateContent: k,
                                    events: { on: C.on, off: C.off },
                                }),
                                [B.scrollPosition, y, P, C.off, C.on, k, S, D, g.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            2884: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => n });
                var r = a(969);
                const n = { Vertical: a(3934), Horizontal: r };
            },
            9279: (e, t, a) => {
                'use strict';
                a.d(t, { A: () => d });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7475),
                    i = a(7363),
                    o = a.n(i),
                    u = a(3242);
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
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.caption,
                        a = e.onClick,
                        r = e.goto,
                        d = e.classNames,
                        _ = e.onMouseEnter,
                        m = e.onMouseLeave,
                        b = e.onMouseDown,
                        E = e.onMouseUp,
                        p = e.side,
                        g = void 0 === p ? 'left' : p,
                        v = e.type,
                        h = void 0 === v ? 'back' : v,
                        f = e.soundHover,
                        C = void 0 === f ? 'highlight' : f,
                        A = e.soundClick,
                        w = void 0 === A ? 'play' : A,
                        B = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, l);
                    const D = (0, i.useCallback)(
                            (e) => {
                                (null == _ || _(e), s.O.sound.play.sound(C));
                            },
                            [_, C],
                        ),
                        F = (0, i.useCallback)(
                            (e) => {
                                null == m || m(e);
                            },
                            [m],
                        ),
                        y = (0, i.useCallback)(
                            (e) => {
                                (null == b || b(e), s.O.sound.play.sound(w));
                            },
                            [b, w],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                null == E || E(e);
                            },
                            [E],
                        );
                    return o().createElement(
                        'div',
                        c(
                            {
                                className: n()(
                                    u.Z.base,
                                    u.Z[`base__${h}`],
                                    u.Z[`base__${g}`],
                                    null == d ? void 0 : d.base,
                                ),
                                onMouseEnter: D,
                                onMouseLeave: F,
                                onMouseDown: y,
                                onMouseUp: P,
                                onClick: a,
                            },
                            B,
                        ),
                        'info' !== h && o().createElement('div', { className: u.Z.shine }),
                        o().createElement(
                            'div',
                            {
                                className: n()(
                                    u.Z.icon,
                                    u.Z[`icon__${h}`],
                                    u.Z[`icon__${g}`],
                                    null == d ? void 0 : d.icon,
                                ),
                            },
                            o().createElement('div', { className: n()(u.Z.glow, null == d ? void 0 : d.glow) }),
                        ),
                        o().createElement(
                            'div',
                            { className: n()(u.Z.caption, u.Z[`caption__${h}`], null == d ? void 0 : d.caption) },
                            t,
                        ),
                        r && o().createElement('div', { className: n()(u.Z.goto, null == d ? void 0 : d.goto) }, r),
                    );
                };
            },
            941: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => u });
                var r = a(7363),
                    n = a.n(r),
                    s = a(2278);
                const i = ['children'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const u = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, i);
                    return n().createElement(
                        s.u,
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
                'use strict';
                a.d(t, { l: () => l });
                var r = a(7363),
                    n = a.n(r),
                    s = a(941),
                    i = a(6485),
                    o = a(2278);
                function u() {
                    return (
                        (u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        u.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: a }) => {
                    if (!t) return e;
                    const r = n().createElement('div', { className: a }, e);
                    if (t.header || t.body) return n().createElement(i.i, t, r);
                    const l = t.contentId;
                    return l ? n().createElement(o.u, u({}, t, { contentId: l }), r) : n().createElement(s.t, t, r);
                };
            },
            6485: (e, t, a) => {
                'use strict';
                a.d(t, { i: () => l });
                var r = a(2278),
                    n = a(7363),
                    s = a.n(n);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
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
                                var a = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        a[r] = e[r];
                                    }
                                return a;
                            })(e, i);
                        const b = (0, n.useMemo)(() => {
                            const e = Object.assign({}, _, { body: a, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, a, l, c, _]);
                        return s().createElement(
                            r.u,
                            o(
                                {
                                    contentId:
                                        ((E = null == _ ? void 0 : _.hasHtmlContent),
                                        E ? u.SimpleTooltipHtmlContent('resId') : u.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: b,
                                },
                                m,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2278: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => l });
                var r = a(3485),
                    n = a(828),
                    s = a(7363);
                const i = [
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
                const u = (e, t, a = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
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
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            b = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            p = void 0 !== E && E,
                            g = e.decoratorId,
                            v = void 0 === g ? 0 : g,
                            h = e.isEnabled,
                            f = void 0 === h || h,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            w = e.onShow,
                            B = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        a[r] = e[r];
                                    }
                                return a;
                            })(e, i);
                        const F = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, s.useMemo)(() => A || (0, r.F)().resId, [A]),
                            P = (0, s.useCallback)(() => {
                                (F.current.isVisible && F.current.timeoutId) ||
                                    (u(a, v, { isMouseEvent: !0, on: !0, arguments: o(n) }, y),
                                    w && w(),
                                    (F.current.isVisible = !0));
                            }, [a, v, n, y, w]),
                            S = (0, s.useCallback)(() => {
                                if (F.current.isVisible || F.current.timeoutId) {
                                    const e = F.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (F.current.timeoutId = 0)),
                                        u(a, v, { on: !1 }, y),
                                        F.current.isVisible && B && B(),
                                        (F.current.isVisible = !1));
                                }
                            }, [a, v, y, B]),
                            N = (0, s.useCallback)((e) => {
                                F.current.isVisible &&
                                    ((F.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (F.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(F.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, s.useEffect)(() => {
                            const e = F.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', N, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', N, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return f
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(F.current.timeoutId),
                                                      (F.current.timeoutId = window.setTimeout(P, b ? 100 : 400)),
                                                      l && l(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === p && S(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === p && S(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var k;
                    };
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
            8463: (e, t, a) => {
                'use strict';
                a.d(t, { u: () => r });
                const r = (e, t, a) => (a < e ? e : a > t ? t : a);
            },
            8978: (e, t, a) => {
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
            1652: (e, t, a) => {
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
            9352: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => o });
                var r = a(7475);
                function n(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return s(e, t);
                                var a = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === a && e.constructor && (a = e.constructor.name),
                                    'Map' === a || 'Set' === a
                                        ? Array.from(e)
                                        : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                          ? s(e, t)
                                          : void 0
                                );
                            }
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
                    for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: t = 0, getRoot: a = i, context: s = 'model' } = {}) {
                    const o = new Map();
                    function u(e, t = 0) {
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
                        const r = a(t),
                            n = s.split('.').reduce((e, t) => e[t], r);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, t) => {
                                  const a = e[t];
                                  return 'function' == typeof a ? a.bind(e) : a;
                              }, n);
                    };
                    return {
                        subscribe: (a, n) => {
                            const i = 'string' == typeof n ? `${s}.${n}` : s,
                                u = r.O.view.addModelObserver(i, t, !0);
                            return (o.set(u, a), e && a(l(n)), u);
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
                                u(e.value, t);
                            }
                        },
                        unsubscribe: u,
                    };
                }
            },
            5090: (e, t, a) => {
                'use strict';
                a.d(t, { q3: () => u });
                var r = a(9723),
                    n = a(3305),
                    s = a(7363),
                    i = a.n(s),
                    o = a(9352);
                const u = () => (e, t) => {
                    const a = (0, s.createContext)({});
                    return [
                        function ({ mode: u = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, s.useRef)([]),
                                m = (a, s, i) => {
                                    var u;
                                    const l = o.U(s),
                                        c =
                                            'real' === a
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (u = null == i ? void 0 : i.getter) ? u : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === a ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        b = e({
                                            mode: a,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = d(e),
                                                        s = n.LO.box(t, { equals: r.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = n.LO.box(s, { equals: r.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = n.LO.box(s, { equals: r.jv });
                                                    return (
                                                        'real' === a &&
                                                            c.subscribe(
                                                                (0, n.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const r = d(t);
                                                    if (Array.isArray(e)) {
                                                        const s = e.reduce(
                                                            (e, t) => ((e[t] = n.LO.box(r[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            s[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                    {
                                                        const s = e,
                                                            i = Object.entries(s),
                                                            o = i.reduce(
                                                                (e, [t, a]) => ((e[a] = n.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === a &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        i.forEach(([t, a]) => {
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
                                        E = { mode: a, model: b, externalModel: c, cleanup: m };
                                    return {
                                        model: b,
                                        controls: 'mocks' === a && i ? i.controls(E) : t(E),
                                        externalModel: c,
                                        mode: a,
                                    };
                                },
                                b = (0, s.useRef)(!1),
                                E = (0, s.useState)(u),
                                p = E[0],
                                g = E[1],
                                v = (0, s.useState)(() => m(u, l, d)),
                                h = v[0],
                                f = v[1];
                            return (
                                (0, s.useEffect)(() => {
                                    b.current ? f(m(p, l, d)) : (b.current = !0);
                                }, [d, p, l]),
                                (0, s.useEffect)(() => {
                                    g(u);
                                }, [u]),
                                (0, s.useEffect)(
                                    () => () => {
                                        (h.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [h],
                                ),
                                i().createElement(a.Provider, { value: h }, c)
                            );
                        },
                        () => (0, s.useContext)(a),
                    ];
                };
            },
            873: (e, t, a) => {
                'use strict';
                a.d(t, { UI: () => l, f8: () => c, s_: () => s, wB: () => d, yR: () => i });
                var r = a(6758),
                    n = (a(828), a(6609));
                const s = 1e3,
                    i = 60,
                    o = 60 * i,
                    u = 24 * o,
                    l = (Date.now(), n.Ew.getRegionalDateTime);
                n.Ew.getFormattedDateTime;
                function c(e = 0) {
                    let t = e;
                    const a = Math.trunc(t / u);
                    t -= a * u;
                    const r = Math.trunc(t / o);
                    t -= r * o;
                    const n = Math.trunc(t / i);
                    return ((t -= n * i), { days: a, hours: r, minutes: n, seconds: t });
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
            5034: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        mouse: () => d,
                        off: () => l,
                        on: () => u,
                        onMinimize: () => o,
                        onResize: () => s,
                        onScaleUpdated: () => i,
                    }));
                var r = a(8277),
                    n = a(1708);
                const s = (0, r.E)('clientResized'),
                    i = (0, r.E)('self.onScaleUpdated'),
                    o = (0, r.E)('clientMinimized'),
                    u = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const s = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const s = `mouse${t}`,
                                        i = c[t]((e) => a([e, 'outside']));
                                    function o(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, o),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(s, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, s, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
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
                'use strict';
                (a.r(t),
                    a.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var r = a(5034),
                    n = a(9703);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1708: (e, t, a) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => r });
            },
            9703: (e, t, a) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((a) => {
                        console.error(`setRTPC('${e}', '${t}'): `, a);
                    });
                }
                a.d(t, { E: () => n, G: () => r });
            },
            8277: (e, t, a) => {
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
            7475: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => i });
                var r = a(3157),
                    n = a(8133),
                    s = a(3925);
                const i = { view: a(7553), client: r, sound: s.ZP, intl: n.N };
            },
            8133: (e, t, a) => {
                'use strict';
                a.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, t, a) => {
                'use strict';
                a.d(t, { ZP: () => o, hY: () => i });
                var r = a(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, r.playSound)(n[t])), e), {}),
                    i = Object.assign({}, s, { sound: r.playSound }),
                    o = { play: i, setRTPC: r.setRTPC };
            },
            5544: (e, t, a) => {
                'use strict';
                function r(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${r(e, t, a)})`;
                }
                (a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            3163: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var r = a(8277);
                const n = {
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
            7553: (e, t, a) => {
                'use strict';
                (a.r(t),
                    a.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => l,
                        arabic2roman: () => P,
                        children: () => n,
                        displayStatus: () => s.W,
                        displayStatusIs: () => N,
                        enableFullScreenModeSupported: () => x,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => F,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => y,
                        getScale: () => v,
                        getSize: () => b,
                        getViewGlobalPosition: () => p,
                        initExternalPaddings: () => L,
                        isEventHandled: () => B,
                        isFocused: () => A,
                        pxToRem: () => h,
                        remToPx: () => f,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => R,
                    }));
                var r = a(1308),
                    n = a(5544),
                    s = a(3163),
                    i = a(7576),
                    o = a(2319);
                const u = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, u);
                }
                function d(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function _(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, u);
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function w() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    P = r.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const N = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function x() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            a = t.top,
                            r = t.right,
                            n = t.bottom,
                            s = t.left;
                        (e.style.setProperty('--external-padding-top', `${a}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${s}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            2319: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    s = 16,
                    i = 32,
                    o = 64,
                    u = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== t.indexOf(r)) continue;
                                            a[r] = e[r];
                                        }
                                    return a;
                                })(t, r);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((n = s),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    l = {
                        close(e) {
                            u('popover' === e ? n : i);
                        },
                        minimize() {
                            u(o);
                        },
                        move(e) {
                            u(s, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            9723: (e, t, a) => {
                'use strict';
                function r() {}
                a.d(t, { ZT: () => r, jv: () => s, yR: () => n });
                function n(e) {
                    return e;
                }
                function s() {
                    return !1;
                }
                console.log;
            },
            3485: (e, t, a) => {
                'use strict';
                a.d(t, { F: () => r });
                const r = (e = 1) => {
                    const t = new Error().stack;
                    let a,
                        r = R.invalid('resId'),
                        n = '';
                    var s;
                    t &&
                        ((n = (null == (s = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : s[0]) || ''),
                        (a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== a &&
                            window.subViews[a] &&
                            (r = window.subViews[a].id));
                    return { callerUrl: n, caller: a, stack: t, resId: r };
                };
            },
            995: (e, t, a) => {
                'use strict';
                a.d(t, { au: () => n });
                var r = a(5129);
                (a(1453), a(4434), a(8291), a(6756), a(5609));
                const n = r.Z;
            },
            9314: (e, t, a) => {
                'use strict';
                a(7363);
            },
            7845: (e, t, a) => {
                'use strict';
                a.d(t, { M: () => n });
                var r = a(7363);
                const n = (e, t = []) => {
                    const a = (0, r.useRef)(),
                        n = (0, r.useCallback)((...t) => {
                            (a.current && a.current(), (a.current = e(...t)));
                        }, t);
                    return (
                        (0, r.useEffect)(
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
                'use strict';
                a.d(t, { Z: () => i });
                var r = a(873),
                    n = a(7363);
                const s = () => {},
                    i = (e = 0, t, a = 0, i = s) => {
                        const o = (0, n.useState)(e),
                            u = o[0],
                            l = o[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const n = Date.now(),
                                        s = t || (e > 2 * r.yR ? r.yR : 1),
                                        o = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - n) / r.s_);
                                            null !== a && t <= a ? (l(a), i && i(), clearInterval(o)) : l(t);
                                        }, s * r.s_);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }
                            }, [e, t, a, i]),
                            u
                        );
                    };
            },
            1453: (e, t, a) => {
                'use strict';
                a(7363);
            },
            603: (e, t, a) => {
                'use strict';
                a.d(t, { q: () => i });
                var r = a(7363);
                function n(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return s(e, t);
                                var a = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === a && e.constructor && (a = e.constructor.name),
                                    'Map' === a || 'Set' === a
                                        ? Array.from(e)
                                        : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                          ? s(e, t)
                                          : void 0
                                );
                            }
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
                    for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                const i = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        a = (e, a) => {
                            t(e).set(a, a);
                        },
                        s = (e, a) => {
                            t(e).delete(a);
                        },
                        i = (e, ...a) => {
                            for (var r, s = n(t(e).values()); !(r = s()).done; ) {
                                (0, r.value)(...a);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: a, off: s, trigger: i }), []);
                };
            },
            9659: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => s });
                var r = a(7363);
                const n = [];
                function s(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), n)
                    );
                }
            },
            8494: (e, t, a) => {
                'use strict';
                a.d(t, { gd: () => o });
                var r = a(7475),
                    n = a(4020),
                    s = (a(828), a(7363));
                const i = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function o(e = n.n.NONE, t = i, a = !1, o = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== n.n.NONE)
                            return (
                                window.addEventListener('keydown', s, a),
                                () => {
                                    window.removeEventListener('keydown', s, a);
                                }
                            );
                        function s(n) {
                            if (n.keyCode === e) {
                                if (!o && r.O.view.isEventHandled()) return;
                                (r.O.view.setEventHandled(), t(n), a && n.stopPropagation());
                            }
                        }
                    }, [t, e, a, o]);
                }
            },
            8925: (e, t, a) => {
                'use strict';
                a.d(t, { Aq: () => u, GS: () => l, cJ: () => i, fd: () => o });
                var r = a(7363),
                    n = a(5579),
                    s = a(1958);
                let i = (function (e) {
                        return (
                            (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.width)] = 'Small'),
                            (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                            (e[(e.Large = s.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    o = (function (e) {
                        return (
                            (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.width)] = 'Small'),
                            (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                            (e[(e.Large = s.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    u = (function (e) {
                        return (
                            (e[(e.ExtraSmall = s.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.height)] = 'Small'),
                            (e[(e.Medium = s.j.medium.height)] = 'Medium'),
                            (e[(e.Large = s.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
                const l = () => {
                    const e = (0, r.useContext)(n.YN),
                        t = e.width,
                        a = e.height,
                        s = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
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
                    return { mediaSize: s, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: a };
                };
            },
            6756: (e, t, a) => {
                'use strict';
                a(9314);
                var r = a(828);
                a(7363);
                r.Sw.instance;
            },
            5609: (e, t, a) => {
                'use strict';
                var r = a(828);
                a(7363);
                r.Sw.instance;
            },
            4434: (e, t, a) => {
                'use strict';
                a(7363);
            },
            5239: (e, t, a) => {
                'use strict';
                a.d(t, { B: () => n });
                var r = a(7363);
                function n(e, t, a = []) {
                    const n = (0, r.useRef)(0),
                        s = (0, r.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, a || []);
                    (0, r.useEffect)(() => s, [s]);
                    const i = (null != a ? a : []).concat([t]);
                    return [
                        (0, r.useCallback)((a) => {
                            (0 !== n.current && s(), (n.current = window.setInterval(() => e(a, !0), t)), e(a, !1));
                        }, i),
                        s,
                    ];
                }
            },
            1527: (e, t, a) => {
                'use strict';
                a.d(t, { V: () => s });
                var r = a(7363),
                    n = a(7475);
                const s = () => {
                    const e = (0, r.useState)(n.O.view.getScale()),
                        t = e[0],
                        a = e[1];
                    return (
                        (0, r.useEffect)(() => {
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
                'use strict';
                (a(7475), a(7363));
            },
            3024: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => s });
                var r = a(8658),
                    n = a(7363);
                function s(e, t, a) {
                    const s = (0, n.useMemo)(() => (0, r.Z)(a, e), t);
                    return ((0, n.useEffect)(() => s.cancel, [s]), s);
                }
            },
            4020: (e, t, a) => {
                'use strict';
                a.d(t, { n: () => r });
                let r = (function (e) {
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
                'use strict';
                a.d(t, {
                    DZ: () => m,
                    G: () => l,
                    MH: () => s,
                    U2: () => n,
                    UI: () => o,
                    hX: () => c,
                    kd: () => E,
                    sE: () => _,
                    tP: () => d,
                    u4: () => g,
                    v: () => b,
                    v_: () => p,
                    yW: () => u,
                });
                var r = a(6014);
                function n(e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                }
                const s = n;
                function i(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, r) => t(null == e ? void 0 : e.value, a, r));
                }
                function u(e, t) {
                    if (Array.isArray(e)) return e.every(t);
                    for (let a = 0; a < e.length; a++) {
                        if (!t(s(e, a), a, e)) return !1;
                    }
                    return !0;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let a = 0; a < e.length; a++) {
                        if (t(s(e, a), a, e)) return !0;
                    }
                    return !1;
                }
                function c(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const a = [];
                    for (let n = 0; n < e.length; n++) {
                        var r;
                        const s = null == (r = e[n]) ? void 0 : r.value;
                        t(s, n, e) && a.push(s);
                    }
                    return a;
                }
                function d(e, t = 0, a = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let r = Math.max(t, 0);
                            const n = Math.min(
                                a,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (r > n) return { done: !0, value: null };
                                    const t = e[r++];
                                    return t ? { value: i(t), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function _(e, t) {
                    for (let a = 0; a < e.length; a++) {
                        const r = i(e[a]);
                        if (t(r, a, e)) return r;
                    }
                }
                function m(e, t, a) {
                    const r = [];
                    for (let n = 0; n < e.length; n++) {
                        const i = s(e, n);
                        t(i, n, e) && r.push(a(i, n, e));
                    }
                    return r;
                }
                function b(e, t) {
                    return m(e, r.C, t);
                }
                function E(e, t) {
                    for (let a = e.length - 1; a >= 0; a--) {
                        if (t(s(e, a), a, e)) return a;
                    }
                }
                function p(e, t = ',') {
                    let a = '';
                    for (let r = 0; r < e.length; r++) {
                        r > 0 && (a += t);
                        const n = s(e, r);
                        a += null == n ? '' : String(n);
                    }
                    return a;
                }
                function g(e, t, a) {
                    if (Array.isArray(e)) return e.reduce(t, a);
                    let r = a;
                    for (let a = 0; a < e.length; a++) {
                        r = t(r, s(e, a), a, e);
                    }
                    return r;
                }
            },
            4170: (e, t, a) => {
                'use strict';
                a.d(t, { t: () => r });
                let r = (function (e) {
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
            6014: (e, t, a) => {
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
            1308: (e, t, a) => {
                'use strict';
                a.d(t, { HG: () => o, cg: () => s });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function s(e) {
                    let t = '';
                    for (let a = n.length - 1; a >= 0; a--) for (; e >= n[a]; ) ((t += r[a]), (e -= n[a]));
                    return t;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (i ? `${e}` : s(e));
            },
            4029: (e, t, a) => {
                'use strict';
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                a.d(t, { $: () => n, G: () => r });
                const n = {
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
            6758: (e, t, a) => {
                'use strict';
                a.d(t, { BN: () => o, Uw: () => p, WU: () => s, e: () => u, uF: () => i, v2: () => n, z4: () => l });
                var r = a(8354);
                let n = (function (e) {
                    return ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e);
                })({});
                function s(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const a = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(a, -a)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                function u(e) {
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
                    b = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, t = n.left) => {
                        const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (b.includes(a)) return m(e);
                        if ('ja' === a) {
                            return (0, r.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = n.left) => {
                            let a = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                s = l(e);
                            return (_(s, /( )/, t).forEach((e) => (a = a.concat(_(e, r, n.left)))), a);
                        })(e, t);
                    },
                    p = (e, t, a) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (a && e in a ? a[e] : E(e, t)));
            },
            8658: (e, t, a) => {
                'use strict';
                function r(e, t, a, r) {
                    let n,
                        s = !1,
                        i = 0;
                    function o() {
                        n && clearTimeout(n);
                    }
                    function u(...u) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            ((i = Date.now()), a.apply(l, u));
                        }
                        s ||
                            (r && !n && d(),
                            o(),
                            void 0 === r && c > e
                                ? d()
                                : !0 !== t &&
                                  (n = setTimeout(
                                      r
                                          ? function () {
                                                n = void 0;
                                            }
                                          : d,
                                      void 0 === r ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((r = a), (a = t), (t = void 0)),
                        (u.cancel = function () {
                            (o(), (s = !0));
                        }),
                        u
                    );
                }
                a.d(t, { Z: () => r });
            },
            8973: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => s });
                var r = a(7475);
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
                        const s = r.O.view.addModelObserver(e, a, n);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(s) : (this._views[a] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
                n.__instance = void 0;
                const s = n;
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
            828: (e, t, a) => {
                'use strict';
                a.d(t, { Sw: () => s.Z, B3: () => u, Z5: () => i.Z5, B0: () => o, ry: () => g, Eu: () => v });
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
                const n = r;
                var s = a(8973);
                var i = a(6609);
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
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = a(4020),
                    m = a(7475);
                const b = ['args'];
                function E(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (r, n) {
                                        var s = e.apply(t, a);
                                        function i(e) {
                                            E(s, r, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            E(s, r, n, i, o, 'throw', e);
                                        }
                                        i(void 0);
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
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== t.indexOf(r)) continue;
                                            a[r] = e[r];
                                        }
                                    return a;
                                })(t, b);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    f = () => h(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var A = a(5533);
                const w = n.instance,
                    B = {
                        DataTracker: s.Z,
                        ViewModel: A.Z,
                        ViewEventType: o,
                        NumberFormatType: u,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => h(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => h(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            h(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, n = R.invalid('resId'), s) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                u = a.getBoundingClientRect(),
                                l = u.x,
                                c = u.y,
                                d = u.width,
                                _ = u.height,
                                b = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: p(b),
                                on: !0,
                                args: s,
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
                        onBindingsReady: g,
                        onLayoutReady: v,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        a[r] = [];
                                        for (let t = 0; t < n.length; t++) a[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[r] = e(t[r]))
                                            : (a[r] = t[r]);
                                }
                            return a;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = B;
            },
            6609: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => s, Z5: () => r, cy: () => n });
                const r = {
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
                    s = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            9642: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => Ke });
                var r = a(7363),
                    n = a.n(r);
                var s = a(2041),
                    i = a(5090);
                const o = (0, i.q3)()(
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
                    u = o[0],
                    l = o[1];
                var c = a(4020),
                    d = a(1705),
                    _ = a(9994),
                    m = a(4343),
                    b = a(2317),
                    E = a(3346),
                    p = a(3317),
                    g = a(8862);
                const v = 'BuyLevelsContent_base_c574e',
                    h = 'BuyLevelsContent_background_a15e9',
                    f = 'BuyLevelsContent_shadow_f658f',
                    C = 'BuyLevelsContent_content_f625b',
                    A = 'BuyLevelsContent_footer_f2dd4',
                    w = 'BuyLevelsContent_divider_a6c1b',
                    B = 'BuyLevelsContent_title_c00cf',
                    D = 'BuyLevelsContent_buttons_fc423';
                var F = a(9849),
                    y = a.n(F),
                    P = a(7109),
                    S = a(5603),
                    N = a(1652),
                    k = a(9659),
                    x = a(8925),
                    L = a(9723),
                    I = a(5369);
                const T = (0, i.q3)()(
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
                                a = (0, I.Om)(() => t.rewards.get(), { equals: L.jv }),
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
                var $ = a(8463),
                    H = a(4029),
                    W = a(3097),
                    z = a(2858),
                    G = a(233);
                let U = (function (e) {
                    return (
                        (e.Passed = 'passed'),
                        (e.PossiblySelected = 'possiblySelected'),
                        (e.Selected = 'selected'),
                        (e.Available = 'available'),
                        e
                    );
                })({});
                const V = (e, t) => (e / t) * 100 + '%',
                    j = {
                        base: 'LevelProgressBar_base_b8cf8',
                        base__small: 'LevelProgressBar_base__small_d9d44',
                        glowWrapper: 'LevelProgressBar_glowWrapper_d6454',
                        glow: 'LevelProgressBar_glow_ba427',
                        glow__left: 'LevelProgressBar_glow__left_ec553',
                        glow__right: 'LevelProgressBar_glow__right_d4916',
                    },
                    q = Object.assign({}, W.uu, { freezed: !0, type: G.r.Simple }),
                    Z = (0, r.memo)(
                        ({ size: e = W.$u.Default, value: t, slideValue: a, maximum: r, theme: s = z.Gh }) => {
                            const i = t >= r ? r : t;
                            return n().createElement(
                                'div',
                                { className: y()(j.base, j[`base__${e}`]) },
                                n().createElement(W.ko, {
                                    value: t,
                                    maxValue: r,
                                    deltaFrom: a,
                                    animationSettings: q,
                                    theme: s,
                                }),
                                n().createElement(
                                    'div',
                                    { className: j.glowWrapper, style: { left: V(i, r) } },
                                    n().createElement('div', { className: y()(j.glow, j.glow__left) }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: j.glowWrapper, style: { left: V(a, r) } },
                                    n().createElement('div', { className: y()(j.glow, j.glow__right) }),
                                ),
                            );
                        },
                    ),
                    X = 'LevelSlider_base_b73c9',
                    Y = 'LevelSlider_base__locked_bcb4b',
                    K = 'LevelSlider_slider_fb0e5',
                    Q = 'LevelSlider_slider__down_d9aad',
                    J = {
                        base: 'Points_base_bb308',
                        labelSplitter: 'Points_labelSplitter_d18af',
                        label: 'Points_label_e225e',
                        label__passed: 'Points_label__passed_e9f9e',
                        label__selected: 'Points_label__selected_b72be',
                        label__possiblySelected: 'Points_label__possiblySelected_ed3d0',
                        label__available: 'Points_label__available_ed8cf',
                    },
                    ee = ({ start: e, total: t, passed: a, selected: r, possiblySelected: s, width: i }) =>
                        n().createElement(
                            'div',
                            { className: J.base },
                            ((e, t) => {
                                const a = [];
                                for (let r = 0; r < e; r++) a.push(t(r));
                                return a;
                            })(t, (o) => {
                                const u = ((e, t, a, r, n) =>
                                        e === t || e === a - 1 || (e + 1) % 5 == 0 || e === r || e === n - 1
                                            ? e + 1
                                            : '')(o, e, t, a, r),
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
                                    })(o, a, r, s),
                                    c = i - 1;
                                return n().createElement(
                                    'div',
                                    { className: J.labelSplitter, key: o },
                                    n().createElement(
                                        'div',
                                        {
                                            className: y()(J.label, J[`label__${l}`]),
                                            style: { width: `${o === t - 1 ? c : i}rem` },
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
                        selected: s = 0,
                        width: i = 22,
                        allowSlide: o = !0,
                        onChangeSelectedLevels: u,
                    }) => {
                        const l = (0, r.useState)(!1),
                            c = l[0],
                            d = l[1],
                            _ = (0, r.useState)(s),
                            m = _[0],
                            b = _[1],
                            E = (0, r.useState)(a + 1),
                            p = E[0],
                            g = E[1],
                            v = (0, r.useRef)(null),
                            h = (0, r.useCallback)(
                                (r) => {
                                    const n = v.current.getBoundingClientRect(),
                                        s = n.width / (t - e),
                                        i = (r - n.left) / (s || 1),
                                        o = e + Math.round(i),
                                        u = a + 1;
                                    return (0, $.u)(u, t, o);
                                },
                                [a, e, t],
                            );
                        ((0, r.useEffect)(() => {
                            (b(s), g(a + 1));
                        }, [s, a]),
                            (0, r.useEffect)(() => {
                                const e = (e) => {
                                        if (o && c) {
                                            const t = h(e.clientX);
                                            (b(t), d(!1), u({ count: t - a }));
                                        }
                                    },
                                    t = (e) => {
                                        if (o)
                                            if (c) {
                                                const t = h(e.clientX);
                                                m !== t && ((0, H.G)('bp_progress_bar_drag'), b(t), g(t));
                                            } else if (e.target === v.current) {
                                                const t = h(e.clientX);
                                                p !== t && g(t);
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
                            }, [o, m, h, c, u, a, p]));
                        const f = (e) => {
                                if (o && 0 === e.button) {
                                    (0, H.G)('bp_progress_bar_take');
                                    const t = h(e.clientX);
                                    (b(t), g(t), d(!0));
                                }
                            },
                            C = t - e,
                            A = 0 === a ? a : a - e,
                            w = m - e;
                        return n().createElement(
                            'div',
                            null,
                            n().createElement(
                                'div',
                                {
                                    className: y()(X, !o && Y),
                                    style: { width: i * C + 'rem' },
                                    ref: v,
                                    onMouseOut: () => {
                                        o && g(m);
                                    },
                                    onMouseDown: f,
                                },
                                n().createElement(ee, {
                                    start: e,
                                    total: t,
                                    passed: a,
                                    selected: m,
                                    possiblySelected: p,
                                    width: i,
                                }),
                                n().createElement(Z, { value: A, maximum: C, allowSlide: o, slideValue: w }),
                            ),
                            o &&
                                n().createElement('div', {
                                    className: y()(K, c && Q),
                                    style: { left: i * w + 1 + 'rem' },
                                    onMouseDown: f,
                                }),
                        );
                    };
                var ae = a(2486),
                    re = a(3359),
                    ne = a(8739),
                    se = a(5278),
                    ie = a(3975);
                const oe = 'RewardsList_base_f5b3b',
                    ue = 'RewardsList_base__disappearing_e2a65',
                    le = 'RewardsList_reward_e8e71',
                    ce = 'RewardsList_base__small_a1a92',
                    de = (e) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 400 + 100 * e,
                        config: { duration: 300 },
                        onStart: () => {
                            (0, H.G)('bp_reward');
                        },
                    }),
                    _e = (0, s.Pi)(({ rewards: e, isDisappearing: t }) => {
                        const a = (0, x.GS)().mediaSize <= x.cJ.Small;
                        return n().createElement(
                            'div',
                            { className: y()(oe, t && ue, a && ce) },
                            ne.DZ(
                                e,
                                (e, t) => t < 10,
                                (e, t) => {
                                    const r = a ? ae.h2.Small : ae.h2.Big;
                                    return n().createElement(
                                        ie.d,
                                        { key: `reward${t}`, animationConfig: de(t), className: le },
                                        n().createElement(re.Q, (0, se.$n)(e, r)),
                                    );
                                },
                            ),
                        );
                    }),
                    me = 'Content_base_b9b6c',
                    be = 'Content_buttonWrapper_d7414',
                    Ee = 'Content_base__active_a66a6',
                    pe = 'Content_base__hidden_ac3a3',
                    ge = 'Content_rewardBtn_b86df',
                    ve = R.strings.battle_pass.battlePassBuyView.confirmAnyNumber,
                    he = 10,
                    fe = 12,
                    Ce = 20,
                    Ae = 24,
                    we = 50,
                    Be = (0, s.Pi)(() => {
                        const e = M(),
                            t = e.model,
                            a = e.controls,
                            s = t.levels,
                            i = s.start,
                            o = s.passed,
                            u = s.total,
                            l = s.selected,
                            c = (0, r.useState)(!0),
                            d = c[0],
                            _ = c[1],
                            m = (0, r.useState)(0),
                            E = m[0],
                            p = m[1],
                            v = (0, x.GS)(),
                            h = v.mediaSize,
                            f = v.remScreenWidth,
                            C = h <= x.cJ.Small,
                            A = d ? t.computes.rewards() : [],
                            w = t.computes.rewardsLength(),
                            B = t.root.get().chapterID,
                            D = (0, g.tv)();
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
                                        p(w - 10);
                                    }, 0);
                            }, [d, w]));
                        const F = (0, k.z)(() => {
                                D.push(b._.battlePass.buyLevelsRewards, { chapterID: B });
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
                        return n().createElement(
                            'div',
                            { className: y()(me, !d && pe, E > 0 && Ee) },
                            n().createElement(te, {
                                start: i.get(),
                                total: u.get(),
                                passed: o.get(),
                                selected: l.get(),
                                width: R,
                                onChangeSelectedLevels: a.changeSelectedLevels,
                                allowSlide: !0,
                            }),
                            n().createElement(_e, { rewards: A, isDisappearing: !d }),
                            n().createElement(
                                'div',
                                { className: be },
                                n().createElement(
                                    P.u5,
                                    { type: P.L$.ghost, size: P.qE.medium, mixClass: ge, onClick: F },
                                    E > 0 && n().createElement(S.z, { text: ve.moreRewards(), binding: { count: E } }),
                                ),
                            ),
                        );
                    });
                var De = a(4579);
                const Fe = 'Footer_base_c246d',
                    ye = 'Footer_levelsBlock_d5eef',
                    Pe = 'Footer_priceBlock_e1942',
                    Se = 'Footer_levelsLabel_d4f2d',
                    Ne = 'Footer_footerLabel_bbea2',
                    ke = ({ levelsToBuy: e, price: t }) =>
                        n().createElement(
                            'div',
                            { className: Fe },
                            n().createElement(
                                'div',
                                { className: ye },
                                n().createElement(
                                    'div',
                                    { className: Ne },
                                    R.strings.battle_pass.battlePassBuyView.levelsSelected(),
                                ),
                                n().createElement('div', { className: Se }, e),
                            ),
                            n().createElement(
                                'div',
                                { className: Pe },
                                n().createElement(
                                    'div',
                                    { className: Ne },
                                    R.strings.battle_pass.battlePassBuyView.price(),
                                ),
                                n().createElement(De.F, { type: 'gold', size: 'big', value: t }),
                            ),
                        ),
                    Re = R.strings.battle_pass.battlePassBuyView,
                    xe = (0, s.Pi)(() => {
                        const e = l(),
                            t = e.model,
                            a = e.controls,
                            r = t.main.isWalletAvailable,
                            s = t.levels,
                            i = s.price,
                            o = s.levelsPassed,
                            u = s.levelsSelected,
                            F = s.chapterID,
                            y = u.get() - o.get(),
                            P = { context: 'model.confirmAnyNumber', rootId: R.aliases.battle_pass.BuyLevels('resId') },
                            S = (0, g.tv)();
                        ((0, m.d)(a.buy), _.N.useHandleKeydown(c.n.ESCAPE || c.n.SPACE, () => S.goBack()));
                        const N = {
                            backgroundImage: `url(${(0, d.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, F.get())})`,
                        };
                        return n().createElement(
                            'div',
                            { className: v },
                            n().createElement('div', { style: N, className: h }),
                            n().createElement('div', { className: f }),
                            n().createElement(
                                'div',
                                { className: C },
                                n().createElement(p.D, {
                                    chapter: F.get(),
                                    buyBP: Re.confirmAnyNumber.title(),
                                    subTitle: Re.confirmAnyNumber.descr(),
                                    className: B,
                                }),
                                n().createElement(O, { options: P }, n().createElement(Be, null)),
                                n().createElement(
                                    'div',
                                    { className: A },
                                    n().createElement('div', { className: w }),
                                    n().createElement(ke, { levelsToBuy: y, price: i.get() }),
                                    n().createElement(E._, {
                                        onAccept: a.buy,
                                        onCancel: () => S.push(b._.battlePass.progression, { chapterID: F.get() }),
                                        isWalletAvailable: r.get(),
                                        buttonAcceptText: R.strings.menu.boosterBuyWindow.buyButtonLabel(),
                                        className: D,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Le = (0, i.q3)()(({ observableModel: e }) => {
                        const t = {
                                rewardsInfo: e.primitives(['chapterID', 'packageState', 'toLevel', 'fromLevel']),
                                nowRewards: e.array('nowRewards.items'),
                            },
                            a = (0, I.Om)(() => t.nowRewards.get(), { equals: L.jv });
                        return Object.assign({}, t, { computes: { nowRewards: a } });
                    }, L.ZT),
                    Ie = Le[0],
                    Te = Le[1];
                var Oe = a(1158),
                    Me = a(2714),
                    $e = a(1820),
                    He = a(3287);
                const We = 'Content_base_d9261',
                    ze = 'Content_mainContent_b2861',
                    Ge = R.strings.battle_pass.battlePassBuyView.reward,
                    Ue = ({ fromLevel: e, toLevel: t, rewards: a }) => {
                        const r = ((e, t) =>
                                e < t
                                    ? { description: Ge.descriptionNowRewards(), completedSteps: `${e} – ${t}` }
                                    : { description: Ge.descriptionNowRewardsSingle(), completedSteps: `${t}` })(e, t),
                            s = r.description,
                            i = r.completedSteps;
                        return n().createElement(
                            'div',
                            { className: We },
                            n().createElement(
                                He.z,
                                null,
                                n().createElement($e.r, {
                                    title: Ge.titleNowRewards(),
                                    description: s,
                                    iconType: Me.Q.now,
                                    steps: i,
                                    rewards: a,
                                    className: ze,
                                }),
                            ),
                        );
                    },
                    Ve = 'RewardsViewContent_base_b794d',
                    je = 'RewardsViewContent_background_a3462',
                    qe = 'RewardsViewContent_shadow_ec3fb',
                    Ze = (0, s.Pi)(() => {
                        const e = Te().model,
                            t = e.rewardsInfo,
                            a = t.chapterID,
                            r = t.toLevel,
                            s = t.fromLevel,
                            i = (0, g.tv)();
                        _.N.useHandleKeydown(c.n.ESCAPE, () => i.goBack());
                        const o = {
                            backgroundImage: `url(${(0, d.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, a.get())})`,
                        };
                        return n().createElement(
                            'div',
                            { className: Ve },
                            n().createElement(
                                'div',
                                { className: je },
                                n().createElement(Oe.N, { chapter: a.get(), isCurrent: !0, customBackgroundStyle: o }),
                            ),
                            n().createElement('div', { className: qe }),
                            n().createElement(Ue, {
                                rewards: e.computes.nowRewards(),
                                toLevel: r.get(),
                                fromLevel: s.get(),
                            }),
                        );
                    }),
                    Xe = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyLevels('resId') },
                    Ye = (0, s.Pi)(() =>
                        'rewardsState' === l().model.main.state.get()
                            ? n().createElement(Ie, { options: Xe }, n().createElement(Ze, null))
                            : n().createElement(xe, null),
                    ),
                    Ke = () =>
                        n().createElement(
                            u,
                            { options: { rootId: R.aliases.battle_pass.BuyLevels('resId') } },
                            n().createElement(Ye, null),
                        );
            },
            1829: (e, t, a) => {
                'use strict';
                a.d(t, { G: () => Ba });
                var r = {};
                (a.r(r), a.d(r, { R: () => i, P: () => o }));
                var n = a(7363),
                    s = a.n(n);
                const i = 'buyState',
                    o = 'rewardsState';
                var u = a(2041),
                    l = a(8024),
                    c = a(8230);
                let d = (function (e) {
                        return (
                            (e[(e.Active = 0)] = 'Active'),
                            (e[(e.Paused = 1)] = 'Paused'),
                            (e[(e.Completed = 2)] = 'Completed'),
                            (e[(e.NotStarted = 3)] = 'NotStarted'),
                            e
                        );
                    })({}),
                    _ = (function (e) {
                        return ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'), e);
                    })({});
                var m = a(5090),
                    b = a(9723),
                    E = a(8739),
                    p = a(3305),
                    g = a(5369);
                const v = (0, m.q3)()(
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
                                a = p.LO.box(''),
                                r = {
                                    main: e.primitives([
                                        'state',
                                        'shopOfferDiscount',
                                        'isShopOfferAvailable',
                                        'isWalletAvailable',
                                    ]),
                                    confirm: t,
                                    rewards: e.array('rewards'),
                                    packages: e.array('packages.items'),
                                    compoundPrice: e.array('confirm.compoundPrice'),
                                    priceID: a,
                                },
                                n = (0, g.Om)(() => r.rewards.get().topPriorityRewards.items, { equals: b.jv }),
                                s = (0, g.Om)(() => r.rewards.get().prevTopPriorityRewards.items, { equals: b.jv }),
                                i = (0, g.Om)(() => r.rewards.get().nowRewards.items, { equals: b.jv }),
                                o = (0, g.Om)(() => r.rewards.get().futureRewards.items, { equals: b.jv }),
                                u = (0, g.Om)(() => r.packages.get(), { equals: b.jv }),
                                l = (0, g.Om)(() => E.U2(r.packages.get(), 0), { equals: b.jv }),
                                c = (0, g.Om)((e) => E.hX(r.packages.get(), (t) => t.chapterID === e)[0]),
                                d = (0, g.Om)((e) => {
                                    const t = c(e).compoundPrice;
                                    return 0 === t.prices.length
                                        ? []
                                        : E.v(t.prices, (e) => {
                                              const t = E.v(e.price, b.yR),
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
                                m = (0, g.Om)((e, t) => {
                                    var a;
                                    return null == (a = d(e).find((e) => e[t])) ? void 0 : a[t];
                                }),
                                v = (0, g.Om)((e) => {
                                    const t = E.sE(
                                        r.packages.get(),
                                        (t) => t.chapterID === e && t.chapterType === _.EXTRA,
                                    );
                                    return Boolean(t);
                                }),
                                h = (0, g.Om)((e) => {
                                    const t = E.sE(
                                        r.packages.get(),
                                        (t) => t.chapterID === e && t.chapterType === _.HOLIDAY,
                                    );
                                    return Boolean(t);
                                }),
                                f = (0, g.Om)(
                                    () =>
                                        E.UI(r.compoundPrice.get().prices, (e) => {
                                            var t, a;
                                            return Object.assign({}, e, {
                                                currencyType: null == (t = E.U2(e.price, 0)) ? void 0 : t.name,
                                                value: null == (a = E.U2(e.price, 0)) ? void 0 : a.value,
                                            });
                                        }),
                                    { equals: b.jv },
                                ),
                                C = (0, g.Om)(() => r.compoundPrice.get().prices.length > 1),
                                A = (0, g.Om)(() => E.G(r.packages.get(), ({ chapterType: e }) => e === _.EXTRA));
                            return Object.assign({}, r, {
                                computes: {
                                    topPriorityRewards: n,
                                    prevTopPriorityRewards: s,
                                    nowRewards: i,
                                    futureRewards: o,
                                    firstChapter: l,
                                    chapters: u,
                                    chapter: c,
                                    getChapterPrices: d,
                                    findCurrencyByType: m,
                                    isExtra: v,
                                    isHoliday: h,
                                    prices: f,
                                    isMulticurrency: C,
                                    hasExtra: A,
                                },
                            });
                        },
                        ({ model: e, externalModel: t }) => ({
                            setPriceID: (0, p.aD)((t) => {
                                e.priceID.set(t);
                            }),
                            shopOffer: t.createCallbackNoArgs('onShopOfferClick'),
                            buy: t.createCallback(() => ({ priceID: e.priceID.get() }), 'confirm.onBuyClick'),
                            togglePurchaseWithLevels: t.createCallbackNoArgs('confirm.onChangePurchaseWithLevels'),
                        }),
                    ),
                    h = v[0],
                    f = v[1];
                var C = a(9849),
                    A = a.n(C),
                    w = a(8978),
                    B = a(9994),
                    D = a(4020),
                    F = a(1158),
                    y = a(8862);
                const P = 'BattlePassBuyViewContent_base_f422a',
                    S = 'BattlePassBuyViewContent_background_e329d',
                    N = 'BattlePassBuyViewContent_background__visible_fb9e3',
                    k = 'BattlePassBuyViewContent_additionalBackground_ff94c',
                    x = 'BattlePassBuyViewContent_blackout_b7744',
                    L = 'BattlePassBuyViewContent_header_c6c65',
                    I = 'BattlePassBuyViewContent_title_f508a',
                    T = 'BattlePassBuyViewContent_subtitle_d2003';
                var O = a(4029),
                    M = a(1705);
                const $ = {
                    base: 'Illustration_base_df755',
                    imgWrapper: 'Illustration_imgWrapper_a05f9',
                    img: 'Illustration_img_ec58b',
                    base__hover: 'Illustration_base__hover_b5e83',
                    base__disabled: 'Illustration_base__disabled_d21ef',
                    vignette: 'Illustration_vignette_d49eb',
                    asset: 'Illustration_asset_da34c',
                    highlight: 'Illustration_highlight_d2d11',
                    highlight__default: 'Illustration_highlight__default_b47b3',
                    highlight__active: 'Illustration_highlight__active_bb012',
                    highlight__shine: 'Illustration_highlight__shine_deab8',
                };
                let H = (function (e) {
                    return ((e.Hover = 'hover'), (e.Disabled = 'disabled'), e);
                })({});
                const W = ({ className: e, isHighlight: t, isActive: a, chapterID: r, state: n }) =>
                        s().createElement(
                            'div',
                            { className: A()($.base, n && $[`base__${n}`], e) },
                            s().createElement(
                                'div',
                                { className: $.imgWrapper },
                                s().createElement(
                                    'div',
                                    {
                                        className: $.img,
                                        style: {
                                            backgroundImage: `url('${(0, M.wD)(R.images.gui.maps.icons.battlePass.buy.illustrations.commander, r)}')`,
                                        },
                                    },
                                    s().createElement('div', { className: $.vignette }),
                                ),
                            ),
                            s().createElement('div', { className: $.asset }),
                            s().createElement('div', { className: A()($.highlight, $.highlight__default) }),
                            t &&
                                s().createElement('div', {
                                    className: A()($.highlight, a ? $.highlight__active : $.highlight__shine),
                                }),
                        ),
                    z = 'State_base_a9a50',
                    G = 'State_bg_cf3f1',
                    U = 'State_content_d42db',
                    V = 'State_ico_bc4f5',
                    j = ({ className: e }) =>
                        s().createElement(
                            'div',
                            { className: A()(z, e) },
                            s().createElement('div', { className: G }),
                            s().createElement(
                                'div',
                                { className: U },
                                s().createElement('div', { className: V }),
                                R.strings.battle_pass.battlePassBuyView.card.purchased(),
                            ),
                        );
                var q = a(5278),
                    Z = a(2317);
                const X = {
                    base: 'BattlePassBuyExtraCard_base_f34dd',
                    base__small: 'BattlePassBuyExtraCard_base__small_fa7a8',
                    base__disabled: 'BattlePassBuyExtraCard_base__disabled_db2eb',
                    timer: 'BattlePassBuyExtraCard_timer_bcd70',
                    content: 'BattlePassBuyExtraCard_content_a74ba',
                    title: 'BattlePassBuyExtraCard_title_ab7be',
                    price: 'BattlePassBuyExtraCard_price_d8a75',
                    illustration: 'BattlePassBuyExtraCard_illustration_c9cc0',
                    state: 'BattlePassBuyExtraCard_state_c2bef',
                    chapterActiveText: 'BattlePassBuyExtraCard_chapterActiveText_e5da3',
                    fadeOut: 'BattlePassBuyExtraCard_fadeOut_c86c7',
                    fadeIn: 'BattlePassBuyExtraCard_fadeIn_f00da',
                    fadeInWithScale: 'BattlePassBuyExtraCard_fadeInWithScale_bef8f',
                    slideUp: 'BattlePassBuyExtraCard_slideUp_bde6f',
                    scale: 'BattlePassBuyExtraCard_scale_de359',
                    rotate: 'BattlePassBuyExtraCard_rotate_b6edb',
                };
                var Y = a(873),
                    K = a(995),
                    Q = a(6758);
                const J = 'CardTimer_base_b1d96',
                    ee = 'CardTimer_light_ebd18',
                    te = 'CardTimer_icon_ed0a2',
                    ae = 'CardTimer_value_abd60',
                    re = R.strings.battle_pass.battlePassBuyView.card.timer,
                    ne = ({ expireTime: e }) => {
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
                    se = 'CurrentLevel_base_a2596',
                    ie = 'CurrentLevel_base__isHovered_fb8c9',
                    oe = 'CurrentLevel_level_d7555',
                    ue = 'CurrentLevel_text_ebcb1',
                    le = R.strings.battle_pass.battlePassBuyView.card,
                    ce = ({ isHovered: e, currentLevel: t }) => {
                        const a = e ? le.currentLevelHovered.text() : le.currentLevel.text(),
                            r = A()(se, e && ie);
                        return s().createElement(
                            'div',
                            { className: r },
                            s().createElement('div', { className: ue }, a),
                            s().createElement('div', { className: oe }, t),
                        );
                    },
                    de = 'Description_base_d89ea',
                    _e = 'Description_base__disabled_acfdd',
                    me = 'Description_text_da623',
                    be = 'Description_text__hidden_cdbb5',
                    Ee = R.strings.battle_pass.battlePassBuyView.card.descr,
                    pe = ({ currentLevel: e, isLevelShow: t, isHovered: a, isBought: r }) => {
                        const n = r ? Ee.bought() : Ee.chapter();
                        return s().createElement(
                            'div',
                            { className: A()(de, r && _e) },
                            t && s().createElement(ce, { currentLevel: e, isHovered: a }),
                            s().createElement('div', { className: A()(me, !a && be) }, n),
                        );
                    };
                var ge = a(1652),
                    ve = a(8925);
                const he = 'Logo_base_b6c07',
                    fe = 'Logo_light_d61d7',
                    Ce = 'Logo_light__hovered_d3141',
                    Ae = 'Logo_lightAppear_be96d',
                    we = 'Logo_logoIcon_a4364',
                    Be = 'Logo_base__notAvailable_cc894',
                    De = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.buy.logo,
                            r = t <= ve.cJ.Small ? 'small' : '';
                        return (0, M.wD)(a, e, r);
                    },
                    Fe = ({ chapterID: e, animationOrder: t, isAvailable: a, isHovered: r, isActiveChapter: i }) => {
                        const o = 800 + 100 * t;
                        (0, n.useEffect)(() => {
                            if (a) return (0, ge.F)(() => (0, O.G)('bp_buy_pass_02'), o);
                        }, [a, o]);
                        const u = (0, ve.GS)().mediaSize,
                            l = { animationDelay: `${o}ms` };
                        return s().createElement(
                            'div',
                            { className: A()(he, !a && Be) },
                            i &&
                                s().createElement(
                                    'div',
                                    { style: l, className: Ae },
                                    s().createElement('div', { className: A()(fe, r && Ce) }),
                                ),
                            s().createElement('div', { className: we, style: { backgroundImage: `url(${De(e, u)})` } }),
                        );
                    };
                var ye = a(4579),
                    Pe = a(4585);
                const Se = 'Price_base_cb5eb',
                    Ne = 'Price_divider_cc34a',
                    ke = { left: Pe.V2.gold, right: Pe.V2.freeXP },
                    Re = R.strings.battle_pass.battlePassBuyView.card,
                    xe = (0, u.Pi)(({ chapterID: e, className: t }) => {
                        const a = f().model.computes,
                            r = a.findCurrencyByType(e, ke.left),
                            n = a.findCurrencyByType(e, ke.right);
                        return r || n
                            ? s().createElement(
                                  'div',
                                  { className: A()(Se, t) },
                                  r && s().createElement(ye.F, { type: ke.left, size: Pe.et.small, value: r.value }),
                                  r && n && s().createElement('div', { className: Ne }, Re.priceDivider()),
                                  n && s().createElement(ye.F, { type: ke.right, size: Pe.et.small, value: n.value }),
                              )
                            : null;
                    }),
                    Le = R.strings.battle_pass.battlePassBuyView.card,
                    Ie = (0, u.Pi)(
                        ({
                            chapterID: e = 1,
                            animationOrder: t = 0,
                            onMouseEnter: a,
                            onMouseLeave: r,
                            isShopOfferAvailable: i = !1,
                            expireTime: o = 0,
                        }) => {
                            const u = f().model.computes,
                                l = u.chapter(e),
                                c = l.isBought,
                                _ = l.chapterState,
                                m = l.currentLevel,
                                b = l.packageID,
                                E = u.isExtra(e),
                                p = (0, n.useState)(!1),
                                g = p[0],
                                v = p[1],
                                h = _ === d.Active,
                                C = _ === d.Paused,
                                w = i && !E,
                                B = (0, y.tv)();
                            return s().createElement(
                                'div',
                                {
                                    className: A()(
                                        X.base,
                                        w && X.base__small,
                                        h && X.base__activeChapter,
                                        c && X.base__disabled,
                                    ),
                                    onClick: () => {
                                        (O.$.playClick(), c || (b && B.push(Z._.battlePass.buyPass, { packageID: b })));
                                    },
                                    onMouseEnter: () => {
                                        ((0, O.G)('bp_highlight'), a && a(), c || v(!0));
                                    },
                                    onMouseLeave: () => {
                                        (r && r(), v(!1));
                                    },
                                },
                                s().createElement(W, {
                                    chapterID: e,
                                    isHighlight: h,
                                    isActive: c,
                                    state: c ? H.Disabled : g ? H.Hover : void 0,
                                    className: X.illustration,
                                }),
                                E &&
                                    o > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: X.timer },
                                        s().createElement(ne, { expireTime: o }),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: X.content },
                                    s().createElement(Fe, {
                                        chapterID: e,
                                        animationOrder: t,
                                        isAvailable: !c,
                                        isHovered: g,
                                        isActiveChapter: h,
                                    }),
                                    s().createElement('div', { className: X.title }, (0, q.pC)(e)),
                                    s().createElement(pe, {
                                        isHovered: g,
                                        currentLevel: m,
                                        isLevelShow: h || C,
                                        isBought: c,
                                    }),
                                ),
                                c
                                    ? s().createElement(j, { className: X.state })
                                    : s().createElement(xe, { chapterID: e, className: X.price }),
                                h &&
                                    s().createElement(
                                        'div',
                                        { className: X.chapterActiveText },
                                        Le.activeChapter.text(),
                                    ),
                            );
                        },
                    );
                var Te = a(9659),
                    Oe = a(1374);
                const Me = 'ShopOfferCard_base_e3830',
                    $e = 'ShopOfferCard_background_f7885',
                    He = 'ShopOfferCard_shopOfferBorder_aa65c',
                    We = 'ShopOfferCard_illustrationWrapper_bb955',
                    ze = 'ShopOfferCard_illustration_a4454',
                    Ge = 'ShopOfferCard_backgroundAsset_f264c',
                    Ue = 'ShopOfferCard_backgroundColor_f976e',
                    Ve = 'ShopOfferCard_shopOfferDiscount_ddc67',
                    je = 'ShopOfferCard_content_d89f8',
                    qe = 'ShopOfferCard_title_d646c',
                    Ze = 'ShopOfferCard_base__highlighted_fd12d',
                    Xe = 'ShopOfferCard_description_e4356',
                    Ye = 'ShopOfferCard_warningOverlay_a123c',
                    Ke = R.strings.battle_pass.battlePassBuyView.card,
                    Qe = (0, u.Pi)(({ isWarningHighlighted: e = !1 }) => {
                        const t = f().controls,
                            a = (0, Te.z)(() => {
                                (O.$.playClick(), t.shopOffer());
                            }),
                            r = (0, Te.z)(() => {
                                (0, O.G)('bp_highlight');
                            }),
                            n = (0, Oe.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: { duration: 200 },
                            });
                        return s().createElement(
                            'div',
                            { className: A()(Me, e && Ze), onClick: a, onMouseEnter: r },
                            s().createElement(
                                'div',
                                { className: $e },
                                s().createElement(
                                    'div',
                                    { className: We },
                                    s().createElement('div', { className: ze }),
                                ),
                                s().createElement('div', { className: He }),
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
                    Je = 'CardAppearTransition_base_f364a',
                    et = ({ animationOrder: e = 0, children: t }) => {
                        const a = 600 + 100 * e;
                        (0, n.useEffect)(() => (0, ge.F)(() => (0, O.G)('bp_buy_pass_01'), a), [a]);
                        const r = (0, n.useMemo)(() => ({ animationDelay: `${a}ms` }), [a]);
                        return s().createElement('div', { style: r, className: Je }, t);
                    },
                    tt = 'ExtraContent_base_a425a',
                    at = 'ExtraContent_cardsWrapper_eee2c',
                    rt = 'ExtraContent_cards_ce5a9',
                    nt = 'ExtraContent_card__isShopOfferAvailable_d689b',
                    st = 'ExtraContent_card_d6fc1',
                    it = 'ExtraContent_card__extra_d337a',
                    ot = (0, u.Pi)(() => {
                        const e = f().model,
                            t = e.main.isShopOfferAvailable.get(),
                            a = e.computes.chapters(),
                            r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1],
                            u = (0, n.useCallback)(() => {
                                o(!0);
                            }, []),
                            l = (0, n.useCallback)(() => {
                                o(!1);
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
                                        { className: A()(st, nt) },
                                        s().createElement(et, null, s().createElement(Qe, { isWarningHighlighted: i })),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: rt },
                                    E.DZ(
                                        a,
                                        (e) => e.chapterType !== _.EXTRA,
                                        (e, a) =>
                                            s().createElement(
                                                'div',
                                                { key: e.packageID, className: st },
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
                            E.DZ(
                                a,
                                (e) => e.chapterType === _.EXTRA,
                                (e) =>
                                    s().createElement(
                                        'div',
                                        { key: e.packageID, className: A()(st, it) },
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
                    lt = (0, u.Pi)(() => {
                        const e = (0, n.useState)(!1),
                            t = e[0],
                            a = e[1],
                            r = f().model,
                            i = r.computes.firstChapter(),
                            o = (0, y.tv)();
                        return (
                            B.N.useHandleKeydown(D.n.ESCAPE, () => o.goBack()),
                            (0, n.useEffect)(() => {
                                (0, w.v)(() => {
                                    a(!0);
                                });
                            }, []),
                            s().createElement(
                                'div',
                                { className: P },
                                s().createElement(
                                    'div',
                                    { className: A()(S, t && N) },
                                    s().createElement(F.N, { key: null == i ? void 0 : i.packageID, isCurrent: !0 }),
                                    r.computes.hasExtra() && s().createElement('div', { className: k }),
                                    s().createElement('div', { className: x }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: L },
                                    s().createElement('div', { className: I }, ut.title()),
                                    s().createElement('div', { className: T }, ut.descr()),
                                ),
                                s().createElement(ot, null),
                            )
                        );
                    });
                var ct = a(4170);
                let dt = (function (e) {
                        return (
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'),
                            e
                        );
                    })({}),
                    _t = (function (e) {
                        return ((e.primary = 'primary'), (e.main = 'main'), e);
                    })({}),
                    mt = (function (e) {
                        return ((e.Center = 'center'), (e.Bottom = 'bottom'), e);
                    })({});
                const bt = {
                        base: 'Checkbox_base_cffc9',
                        base__disabled: 'Checkbox_base__disabled_dc60b',
                        base__center: 'Checkbox_base__center_bcbc0',
                        base__bottom: 'Checkbox_base__bottom_b8113',
                        input: 'Checkbox_input_bdf00',
                        base__mouseDown: 'Checkbox_base__mouseDown_f0077',
                        base__small: 'Checkbox_base__small_deb05',
                        base__medium: 'Checkbox_base__medium_eeb1f',
                        base__large: 'Checkbox_base__large_e2605',
                        base__extraLarge: 'Checkbox_base__extraLarge_bec62',
                        alertOverlay: 'Checkbox_alertOverlay_a1e3f',
                        base__alert: 'Checkbox_base__alert_aa5f2',
                        blink: 'Checkbox_blink_f903e',
                        base__checked: 'Checkbox_base__checked_eac7a',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_f1bb9',
                        highlight: 'Checkbox_highlight_bdfa7',
                        base__main: 'Checkbox_base__main_dc26d',
                        base__primary: 'Checkbox_base__primary_a8575',
                        checkmark: 'Checkbox_checkmark_e1fc6',
                        fadeIn: 'Checkbox_fadeIn_c9675',
                        label: 'Checkbox_label_bd63c',
                        labelContent: 'Checkbox_labelContent_ae1ba',
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
                function pt() {
                    return (
                        (pt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        pt.apply(null, arguments)
                    );
                }
                const gt = (e) => {
                    let t = e.id,
                        a = e.isChecked,
                        r = void 0 !== a && a,
                        i = e.isDisabled,
                        o = void 0 !== i && i,
                        u = e.isAlert,
                        l = void 0 !== u && u,
                        c = e.size,
                        d = void 0 === c ? dt.medium : c,
                        _ = e.type,
                        m = void 0 === _ ? _t.primary : _,
                        b = e.soundHover,
                        E = void 0 === b ? 'highlight' : b,
                        p = e.soundClick,
                        g = void 0 === p ? 'play' : p,
                        v = e.onMouseEnter,
                        h = e.onMouseLeave,
                        f = e.onMouseUp,
                        C = e.onMouseDown,
                        w = e.onClick,
                        B = e.onChange,
                        D = e.onFocus,
                        F = e.onBlur,
                        y = e.text,
                        P = e.contentStyles,
                        S = e.children,
                        N = e.alignment,
                        k = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, Et);
                    const R = (0, n.useState)(!1),
                        x = R[0],
                        L = R[1],
                        I = (0, n.useState)(!1),
                        T = (I[0], I[1]),
                        M = (0, n.useCallback)(
                            (e) => {
                                o || (B && B(), w && w(e));
                            },
                            [o, B, w],
                        ),
                        $ = (0, n.useCallback)(
                            (e) => {
                                const t = e.button === ct.t.LEFT;
                                o || (t && L(!0), t && C && C(e), g && (0, O.G)(g));
                            },
                            [o, C, g],
                        ),
                        H = (0, n.useCallback)(
                            (e) => {
                                o || (L(!1), f && f(e));
                            },
                            [o, f],
                        ),
                        W = (0, n.useCallback)(
                            (e) => {
                                o || (v && v(e), E && (0, O.G)(E));
                            },
                            [o, v, E],
                        ),
                        z = (0, n.useCallback)(
                            (e) => {
                                o || (L(!1), h && h(e));
                            },
                            [o, h],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                o || (T(!0), D && D(e));
                            },
                            [o, D],
                        ),
                        U = (0, n.useCallback)(
                            (e) => {
                                o || (T(!1), F && F(e));
                            },
                            [o, F],
                        ),
                        V = s().createElement(
                            'div',
                            { className: bt.label },
                            s().createElement(
                                'div',
                                { className: A()(bt.labelContent, 's-labelContent'), style: P },
                                y || S,
                            ),
                        );
                    return s().createElement(
                        'div',
                        pt(
                            {
                                id: t,
                                className: A()(bt.base, bt[`base__${d}`], bt[`base__${m}`], {
                                    [bt.base__checked]: r,
                                    [bt.base__disabled]: o,
                                    [bt.base__mouseDown]: x,
                                    [bt.base__alert]: l,
                                    [bt.base__center]: N === mt.Center,
                                    [bt.base__bottom]: N === mt.Bottom,
                                }),
                                onClick: M,
                                onMouseEnter: W,
                                onMouseLeave: z,
                                onMouseDown: $,
                                onMouseUp: H,
                                onFocus: G,
                                onBlur: U,
                            },
                            k,
                        ),
                        s().createElement(
                            'div',
                            { className: bt.input },
                            s().createElement('div', { className: bt.alertOverlay }),
                            s().createElement('div', { className: bt.inputHoverOverlay }),
                            s().createElement('div', { className: bt.highlight }),
                        ),
                        s().createElement('div', { className: bt.checkmark }),
                        ((y || S) && V) || null,
                    );
                };
                var vt = a(5603),
                    ht = a(8494),
                    ft = a(4343),
                    Ct = a(3317),
                    At = a(7109);
                let wt = (function (e) {
                    return ((e.Small = 'small'), (e.Medium = 'medium'), e);
                })({});
                const Bt = {
                        base: 'RadioButton_base_ff08b',
                        base__disabled: 'RadioButton_base__disabled_bf8fb',
                        input: 'RadioButton_input_f534f',
                        base__small: 'RadioButton_base__small_c5c78',
                        base__medium: 'RadioButton_base__medium_a390a',
                        blank: 'RadioButton_blank_f51d4',
                        blankHover: 'RadioButton_blankHover_ad6a6',
                        blankMousedown: 'RadioButton_blankMousedown_c14de',
                        check: 'RadioButton_check_ada46',
                        checkHover: 'RadioButton_checkHover_d45af',
                        checkMousedown: 'RadioButton_checkMousedown_f86ba',
                        transition: 'RadioButton_transition_ce577',
                        base__blank: 'RadioButton_base__blank_b8f85',
                        base__blankHover: 'RadioButton_base__blankHover_bbf14',
                        base__blankMousedown: 'RadioButton_base__blankMousedown_cd193',
                        base__check: 'RadioButton_base__check_c0359',
                        base__checkHover: 'RadioButton_base__checkHover_cc598',
                        base__checkMousedown: 'RadioButton_base__checkMousedown_de781',
                        label: 'RadioButton_label_d16ec',
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
                function Ft() {
                    return (
                        (Ft = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        Ft.apply(null, arguments)
                    );
                }
                const yt = (0, n.memo)((e) => {
                        let t = e.children,
                            a = e.labelRenderer,
                            r = e.value,
                            i = e.currentValue,
                            o = e.autofocus,
                            u = void 0 !== o && o,
                            l = e.disabled,
                            c = void 0 !== l && l,
                            d = e.size,
                            _ = void 0 === d ? wt.Medium : d,
                            m = e.label,
                            b = e.soundHover,
                            E = void 0 === b ? 'highlight' : b,
                            p = e.soundClick,
                            g = void 0 === p ? 'play' : p,
                            v = e.onMouseEnter,
                            h = e.onMouseLeave,
                            f = e.onMouseUp,
                            C = e.onMouseDown,
                            B = e.onClick,
                            D = e.onChange,
                            F = e.onFocus,
                            y = e.onBlur,
                            P = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        a[r] = e[r];
                                    }
                                return a;
                            })(e, Dt);
                        const S = r === i,
                            N = (0, n.useState)(!1),
                            k = N[0],
                            R = N[1],
                            x = (0, n.useState)(!1),
                            L = x[0],
                            I = x[1],
                            T = (0, n.useState)(u),
                            M = T[0],
                            $ = T[1],
                            H = (0, n.useRef)(null),
                            W = (0, n.useCallback)(() => {
                                !c && H.current && (H.current.focus(), $(!0));
                            }, [c]),
                            z = (0, n.useCallback)(
                                (e) => {
                                    M && null !== H.current && !H.current.contains(e.target) && $(!1);
                                },
                                [M],
                            );
                        ((0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', z),
                                () => {
                                    document.removeEventListener('mousedown', z);
                                }
                            ),
                            [z],
                        ),
                            (0, n.useEffect)(() => {
                                $(u);
                            }, [u]));
                        const G = (0, n.useCallback)(
                                (e) => {
                                    c || (D && D(r), B && B(r, e));
                                },
                                [c, D, B, r],
                            ),
                            U = (0, n.useCallback)(
                                (e) => {
                                    if (!c) {
                                        const t = e.button === ct.t.LEFT;
                                        (t && R(!0), t && C && C(r, e), g && (0, O.G)(g), u && W());
                                    }
                                },
                                [u, c, C, W, g, r],
                            ),
                            V = (0, n.useCallback)(
                                (e) => {
                                    c || (R(!1), f && f(r, e));
                                },
                                [c, f, r],
                            ),
                            j = (0, n.useCallback)(
                                (e) => {
                                    c || (v && v(r, e), E && (0, O.G)(E), I(!0));
                                },
                                [c, v, E, r],
                            ),
                            q = (0, n.useCallback)(
                                (e) => {
                                    c || (R(!1), I(!1), h && h(r, e));
                                },
                                [c, h, r],
                            ),
                            Z = (0, n.useCallback)(
                                (e) => {
                                    c || ($(!0), F && F(r, e));
                                },
                                [c, F, r],
                            ),
                            X = (0, n.useCallback)(
                                (e) => {
                                    c || ($(!1), y && y(r, e));
                                },
                                [c, y, r],
                            ),
                            Y = A()(Bt.base, Bt[`base__${_}`], {
                                [Bt.base__blank]: !S && !L,
                                [Bt.base__blankHover]: !S && L && !k,
                                [Bt.base__blankMousedown]: !S && L && k,
                                [Bt.base__check]: S && !L,
                                [Bt.base__checkHover]: S && L && !k,
                                [Bt.base__checkMousedown]: S && L && k,
                                [Bt.base__focused]: M,
                                [Bt.base__disabled]: c,
                            }),
                            K = (0, n.useMemo)(
                                () => ({ isHovered: L, isMouseDown: k, isFocused: M, isChecked: S }),
                                [L, k, M, S],
                            ),
                            Q = (0, n.useRef)(Bt.blank),
                            J = (0, n.useRef)(Bt.blankHover),
                            ee = (0, n.useRef)(Bt.blankMousedown),
                            te = (0, n.useRef)(Bt.check),
                            ae = (0, n.useRef)(Bt.checkHover),
                            re = (0, n.useRef)(Bt.checkMousedown);
                        return (
                            (0, n.useEffect)(
                                (0, w.v)(() => {
                                    ((Q.current = A()(Bt.blank, Bt.transition)),
                                        (J.current = A()(Bt.blankHover, Bt.transition)),
                                        (ee.current = A()(Bt.blankMousedown, Bt.transition)),
                                        (te.current = A()(Bt.check, Bt.transition)),
                                        (ae.current = A()(Bt.checkHover, Bt.transition)),
                                        (re.current = A()(Bt.checkMousedown, Bt.transition)));
                                }),
                                [],
                            ),
                            s().createElement(
                                'div',
                                Ft(
                                    {
                                        ref: H,
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
                    Pt = 'CurrencyRadioButton_currency_ed541',
                    St = (0, u.Pi)(({ currencyType: e, value: t, priceID: a, currentPriceID: r, onClick: n }) =>
                        s().createElement(
                            yt,
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
                                s().createElement(ye.F, { type: e, size: Pe.et.big, value: t }),
                            ),
                        ),
                    ),
                    Nt = 'Price_base_ab47c',
                    kt = 'Price_priceDivider_aab91',
                    Rt = 'Price_button_c58f5',
                    xt = R.strings.battle_pass.battlePassBuyView,
                    Lt = { left: Pe.V2.gold, right: Pe.V2.freeXP },
                    It = (0, u.Pi)(({ className: e, price: t }) => {
                        const a = f(),
                            r = a.model,
                            i = a.controls,
                            o = r.main.isWalletAvailable.get(),
                            u = r.priceID.get(),
                            l = r.computes.prices(),
                            c = l.find((e) => e.currencyType === Lt.left),
                            d = l.find((e) => e.currencyType === Lt.right);
                        return (
                            (0, n.useEffect)(() => {
                                u || i.setPriceID(r.confirm.compoundPriceDefaultID.get());
                            }, [i, u, r.confirm.compoundPriceDefaultID]),
                            s().createElement(
                                'div',
                                { className: A()(Nt, e) },
                                c && d
                                    ? s().createElement(
                                          s().Fragment,
                                          null,
                                          s().createElement(St, {
                                              currencyType: Lt.left,
                                              value: c.value,
                                              priceID: c.priceID,
                                              currentPriceID: u,
                                              onClick: i.setPriceID,
                                          }),
                                          s().createElement('div', { className: kt }, xt.priceDivider()),
                                          s().createElement(St, {
                                              currencyType: Lt.right,
                                              value: d.value,
                                              priceID: d.priceID,
                                              currentPriceID: u,
                                              onClick: i.setPriceID,
                                          }),
                                      )
                                    : s().createElement(ye.F, { type: Pe.V2.gold, size: Pe.et.large, value: t }),
                                s().createElement(
                                    At.u5,
                                    {
                                        type: At.L$.main,
                                        size: At.qE.medium,
                                        disabled: !o,
                                        onClick: i.buy,
                                        mixClass: Rt,
                                    },
                                    xt.confirm.btnBuy(),
                                ),
                            )
                        );
                    }),
                    Tt = 'Footer_base_b1746',
                    Ot = 'Footer_divider_a6438',
                    Mt = 'Footer_base__isMulticurrency_f1d79',
                    $t = 'Footer_secondDivider_a3f20',
                    Ht = 'Footer_previousPrice_ec74d',
                    Wt = 'Footer_currentPrice_d61e5',
                    zt = 'Footer_base__priceUpdateAnimation_b5fa8',
                    Gt = 'Footer_label_fd55d',
                    Ut = 'Footer_price_c3bce',
                    Vt = R.strings.battle_pass.battlePassBuyView,
                    jt = (0, u.Pi)(({ isPriceUpdateAnimation: e }) => {
                        const t = f().model,
                            a = t.confirm,
                            r = a.price,
                            n = a.prevPrice,
                            i = a.isPurchaseWithLevels,
                            o = t.computes.isMulticurrency();
                        return s().createElement(
                            'div',
                            { className: A()(Tt, o && Mt, e && zt) },
                            s().createElement('div', { className: Ot }),
                            s().createElement('div', { className: $t }),
                            e &&
                                s().createElement(
                                    'div',
                                    { className: Ht },
                                    s().createElement(
                                        'div',
                                        { className: Gt },
                                        i.get() ? Vt.confirm.price() : Vt.confirm.priceWithLevels(),
                                    ),
                                    s().createElement(It, { price: n.get(), className: Ut }),
                                ),
                            s().createElement(
                                'div',
                                { className: Wt },
                                s().createElement(
                                    'div',
                                    { className: Gt },
                                    i.get() ? Vt.confirm.priceWithLevels() : Vt.confirm.price(),
                                ),
                                s().createElement(It, { price: r.get(), className: Ut }),
                            ),
                        );
                    });
                var qt = a(2486),
                    Zt = a(3359),
                    Xt = a(3975);
                const Yt = {
                    descriptionText: 'Rewards_descriptionText_e99f9',
                    priorityRewards: 'Rewards_priorityRewards_ac595',
                    priorityRewards__rewardsButtonVisible: 'Rewards_priorityRewards__rewardsButtonVisible_aadd0',
                    buttonWrapper: 'Rewards_buttonWrapper_c7990',
                    indentBlock: 'Rewards_indentBlock_f74b3',
                    rewardBtn: 'Rewards_rewardBtn_f0ba0',
                    indentBlock__currentRewardsAnimation: 'Rewards_indentBlock__currentRewardsAnimation_a762a',
                    rewardBtn__currentRewardsAnimation: 'Rewards_rewardBtn__currentRewardsAnimation_e1fdc',
                    'fade-in': 'Rewards_fade-in_f7be0',
                    fadeOut: 'Rewards_fadeOut_eb261',
                    fadeIn: 'Rewards_fadeIn_c9992',
                    fadeInWithScale: 'Rewards_fadeInWithScale_d19df',
                    slideUp: 'Rewards_slideUp_aad71',
                    scale: 'Rewards_scale_a50c2',
                    rotate: 'Rewards_rotate_ec417',
                    windowIn: 'Rewards_windowIn_e0536',
                    'fade-out': 'Rewards_fade-out_ec1d5',
                };
                function Kt() {
                    return (
                        (Kt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        Kt.apply(null, arguments)
                    );
                }
                const Qt = (e, t) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 100 * e,
                        config: { duration: 300 },
                        onStart: () => {
                            (0, O.G)(R.sounds.bp_reward());
                        },
                        reset: t,
                    }),
                    Jt = R.strings.battle_pass.battlePassBuyView,
                    ea = (0, u.Pi)(({ isCheckboxAnimationActive: e, isPrevious: t = !1, className: a }) => {
                        const r = f().model,
                            n = r.confirm.isPurchaseWithLevels.get(),
                            i = r.confirm.chapterID.get(),
                            o =
                                r.computes.nowRewards().length +
                                r.computes.futureRewards().length -
                                r.computes.topPriorityRewards().length,
                            u = r.computes.topPriorityRewards(),
                            l = r.computes.prevTopPriorityRewards(),
                            c = t ? l : u,
                            d = t ? !n : n,
                            _ = o > 0,
                            m = (0, Oe.useSpring)(Qt(4)),
                            b = (0, ve.GS)().mediaSize < ve.cJ.Medium ? qt.h2.Small : qt.h2.Big,
                            p = (0, y.tv)();
                        return s().createElement(
                            'div',
                            { className: A()(Yt.base, a) },
                            s().createElement(
                                'div',
                                { className: Yt.descriptionText },
                                d ? Jt.confirm.descriptionCheckboxChecked() : Jt.confirm.description(),
                            ),
                            s().createElement(
                                'div',
                                { className: A()(Yt.priorityRewards, _ && Yt.priorityRewards__rewardsButtonVisible) },
                                E.UI(c, (e, a) =>
                                    t
                                        ? s().createElement(
                                              Zt.Q,
                                              Kt({}, (0, q.$n)(e, b), { className: Yt.reward, key: `${e.name}_${a}` }),
                                          )
                                        : s().createElement(
                                              Xt.d,
                                              { animationConfig: Qt(a), key: `${e.name}_${a}` },
                                              s().createElement(
                                                  Zt.Q,
                                                  Kt({}, (0, q.$n)(e, b), { className: Yt.reward }),
                                              ),
                                          ),
                                ),
                            ),
                            _
                                ? s().createElement(
                                      Oe.animated.div,
                                      { style: m },
                                      s().createElement(
                                          'div',
                                          { className: Yt.buttonWrapper },
                                          s().createElement(
                                              At.u5,
                                              {
                                                  type: At.L$.ghost,
                                                  size: At.qE.medium,
                                                  mixClass: A()(
                                                      Yt.rewardBtn,
                                                      e && Yt.rewardBtn__currentRewardsAnimation,
                                                  ),
                                                  onClick: () =>
                                                      p.push(Z._.battlePass.buyPassRewards, { packageID: i }),
                                              },
                                              (0, Q.uF)(Jt.btnRewards(o), { count: o }),
                                          ),
                                      ),
                                  )
                                : s().createElement('div', { className: Yt.indentBlock }),
                        );
                    }),
                    ta = 'ShopOfferWarning_base_ef6ce',
                    aa = 'ShopOfferWarning_lip_c651b',
                    ra = 'ShopOfferWarning_glow_e6d6d',
                    na = 'ShopOfferWarning_message_aa454',
                    sa = 'ShopOfferWarning_shopOfferLink_aa85b',
                    ia = R.strings.battle_pass.battlePassBuyView.confirm,
                    oa = ({ className: e }) => {
                        const t = f().controls;
                        return s().createElement(
                            'div',
                            { className: A()(ta, e) },
                            s().createElement('div', { className: aa }),
                            s().createElement('div', { className: ra }),
                            s().createElement(vt.z, {
                                classMix: na,
                                text: R.strings.battle_pass.battlePassBuyView.confirm.shopOfferWarning(),
                                binding: {
                                    link: s().createElement(
                                        'div',
                                        { onClick: t.shopOffer, className: sa },
                                        ia.shopOfferLinkText(),
                                    ),
                                },
                            }),
                        );
                    },
                    ua = 'ConfirmBuyViewContent_base_f1e2b',
                    la = 'ConfirmBuyViewContent_background_dc7ea',
                    ca = 'ConfirmBuyViewContent_content_d6adf',
                    da = 'ConfirmBuyViewContent_backgroundCommander_d4fab',
                    _a = 'ConfirmBuyViewContent_title_ab060',
                    ma = 'ConfirmBuyViewContent_checkboxWrapper_e82d6',
                    ba = 'ConfirmBuyViewContent_content__rewardsUpdateAnimation_f423a',
                    Ea = 'ConfirmBuyViewContent_checkbox_c4791',
                    pa = 'ConfirmBuyViewContent_previousRewards_f51b0',
                    ga = 'ConfirmBuyViewContent_currentRewards_fdae4',
                    va = 'ConfirmBuyViewContent_checkboxLabel_c2b01',
                    ha = 'ConfirmBuyViewContent_shopOfferWarning_e5a34',
                    fa = R.strings.battle_pass.battlePassBuyView,
                    Ca = (0, u.Pi)(() => {
                        const e = f(),
                            t = e.model,
                            a = e.controls,
                            r = t.confirm,
                            i = r.chapterID,
                            o = r.isPurchaseWithLevels,
                            u = r.remainingLevelsCount,
                            l = t.main.isShopOfferAvailable,
                            c = t.computes.isExtra(i.get()),
                            d = t.computes.isHoliday(i.get()),
                            _ = t.computes.hasChapterLogoBg(i.get()),
                            m = (0, n.useState)(!1),
                            b = m[0],
                            E = m[1],
                            p = l.get() && !(c || d),
                            g = o.get(),
                            v = (0, n.useRef)(!1),
                            h = (0, ve.GS)().mediaSize,
                            C = ((e) => ({
                                backgroundImage: `url(${(0, M.wD)(R.images.gui.maps.icons.battlePass.backgrounds.ip_purchase_confirmation, e)})`,
                            }))(i.get()),
                            w = (0, y.tv)();
                        (B.N.useHandleKeydown(D.n.ESCAPE, () => w.goBack()),
                            (0, ft.d)(a.buy),
                            (0, ht.gd)(D.n.SPACE, a.buy),
                            (0, n.useEffect)(() => {
                                if (v.current)
                                    return (
                                        E(!0),
                                        (0, ge.F)(() => {
                                            E(!1);
                                        }, 800)
                                    );
                                v.current = !0;
                            }, [g, v]));
                        const F = h < ve.cJ.Medium ? dt.large : dt.extraLarge;
                        return s().createElement(
                            'div',
                            { className: ua },
                            s().createElement('div', { className: la, style: C }),
                            s().createElement(
                                'div',
                                { className: A()(ca, b && ba) },
                                !_ &&
                                    s().createElement('div', {
                                        className: da,
                                        style: {
                                            backgroundImage: `url(${(0, M.wD)(R.images.gui.maps.icons.battlePass.buy.confirm.commander, i.get())})`,
                                        },
                                    }),
                                s().createElement(Ct.D, {
                                    className: _a,
                                    chapter: i.get(),
                                    buyBP: fa.confirm.title(),
                                    type: Ct.x.TransparentChapterName,
                                }),
                                u.get() > 0 &&
                                    s().createElement(
                                        'div',
                                        { className: ma },
                                        s().createElement(
                                            'div',
                                            { className: Ea },
                                            s().createElement(
                                                gt,
                                                { size: F, isChecked: g, onClick: a.togglePurchaseWithLevels },
                                                s().createElement(vt.z, {
                                                    text: fa.confirm.checkbox.stage(u.get()),
                                                    binding: { stagesNumber: u.get() },
                                                    classMix: va,
                                                }),
                                            ),
                                        ),
                                    ),
                                b &&
                                    s().createElement(ea, {
                                        isCheckboxAnimationActive: b,
                                        className: pa,
                                        isPrevious: !0,
                                    }),
                                s().createElement(ea, { isCheckboxAnimationActive: b, className: ga }),
                                s().createElement(jt, { isPriceUpdateAnimation: b }),
                            ),
                            p && s().createElement(oa, { className: ha }),
                        );
                    }),
                    Aa = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyPass('resId') },
                    wa = (0, u.Pi)(() => {
                        const e = f(),
                            t = e.model,
                            a = e.controls,
                            u = t.main.state.get();
                        switch (
                            ((0, n.useEffect)(() => {
                                u === i && t.priceID.get() && a.setPriceID('');
                            }, [a, t.priceID, u]),
                            u)
                        ) {
                            case i:
                                return s().createElement(lt, null);
                            case r.CONFIRM_STATE:
                                return s().createElement(Ca, null);
                            case o:
                                return s().createElement(l.k, { options: Aa }, s().createElement(c.$, null));
                            default:
                                return s().createElement(lt, null);
                        }
                    }),
                    Ba = () =>
                        s().createElement(
                            h,
                            { options: { rootId: R.aliases.battle_pass.BuyPass('resId') } },
                            s().createElement(wa, null),
                        );
            },
            735: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => re });
                var r = a(7363),
                    n = a.n(r),
                    s = a(5090),
                    i = a(9723),
                    o = a(8739),
                    u = a(5369);
                const l = (0, s.q3)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), slides: e.array('slides') },
                                a = (0, u.Om)(() => o.UI(t.slides.get(), (e, t) => ({ id: t, value: e })), {
                                    equals: i.jv,
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
                var _ = a(4020),
                    m = a(2041),
                    b = a(9994),
                    E = a(9849),
                    p = a.n(E),
                    g = a(7109),
                    v = a(8978),
                    h = a(1652),
                    f = a(8925),
                    C = a(4029),
                    A = a(6758);
                const w = 'DescriptionBlock_base_a6ff1',
                    B = 'DescriptionBlock_icon_f07d0',
                    D = 'DescriptionBlock_title_cd65e',
                    F = 'DescriptionBlock_description_de866',
                    y = ({ icon: e, title: t, descr: a }) => {
                        const s = (0, r.useCallback)((e) => {
                            e.stopPropagation();
                        }, []);
                        return n().createElement(
                            'div',
                            { className: w, onClick: s },
                            n().createElement('div', { className: D }, t),
                            n().createElement('div', { className: B, style: { backgroundImage: `url(${e})` } }),
                            n().createElement('div', { className: F }, a && (0, A.z4)(a)),
                        );
                    };
                var P = a(828),
                    S = a(8494),
                    N = a(5579);
                const k = {
                    base: 'Slider_base_e3388',
                    base__carousel: 'Slider_base__carousel_d0a14',
                    trackWrapper: 'Slider_trackWrapper_e8d28',
                    track: 'Slider_track_d172f',
                    base__withoutAnimation: 'Slider_base__withoutAnimation_bebdb',
                    base__withoutPointer: 'Slider_base__withoutPointer_c52b0',
                    slide: 'Slider_slide_f8021',
                    slide__active: 'Slider_slide__active_f85e7',
                    slide__carousel: 'Slider_slide__carousel_bb08c',
                    slide__beforeActive: 'Slider_slide__beforeActive_a8a66',
                    slide__afterActive: 'Slider_slide__afterActive_cfe12',
                    slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_f3eaf',
                    slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_e18c3',
                    slide__leftEdge: 'Slider_slide__leftEdge_cff9a',
                    slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_eb3b3',
                    slide__rightEdge: 'Slider_slide__rightEdge_c4f97',
                    slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_fc218',
                    prev: 'Slider_prev_c0ac3',
                    next: 'Slider_next_c9187',
                    prev__disabled: 'Slider_prev__disabled_ed9dc',
                    next__disabled: 'Slider_next__disabled_f81f2',
                    counter: 'Slider_counter_e7a59',
                    base__large: 'Slider_base__large_bbf96',
                    counter__disabled: 'Slider_counter__disabled_e6a87',
                    counterDivider: 'Slider_counterDivider_c0d80',
                };
                function x(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                function L(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, n) {
                            var s = e.apply(t, a);
                            function i(e) {
                                x(s, r, n, i, o, 'next', e);
                            }
                            function o(e) {
                                x(s, r, n, i, o, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                const I = (0, r.createContext)({}),
                    T = (0, r.memo)(
                        ({
                            children: e,
                            arrowsTopPosition: t,
                            carouselMode: a,
                            disabled: s,
                            withCounter: i,
                            onPrevSlide: o,
                            onNextSlide: u,
                        }) => {
                            const l = (0, r.useRef)(null),
                                c = (0, r.useContext)(N.YN),
                                d = c.medium || c.large || c.extraLarge,
                                m = (0, r.useState)(e),
                                b = m[0],
                                E = m[1],
                                g = (0, r.useState)(0),
                                v = g[0],
                                h = g[1],
                                f = (0, r.useState)(0),
                                A = f[0],
                                w = f[1],
                                B = (0, r.useState)(a ? 3 : 1),
                                D = B[0],
                                F = B[1],
                                y = (0, r.useState)(!1),
                                R = y[0],
                                x = y[1],
                                T = (0, r.useState)(!1),
                                O = T[0],
                                M = T[1],
                                $ = b.length,
                                H = 1 === D && !a,
                                W = D === $ && !a,
                                z = 1 !== $,
                                G = (0, r.useMemo)(() => ({ isAnimationDisabled: R }), [R]),
                                U = (function () {
                                    var e = L(function* () {
                                        if (l && l.current) {
                                            (x(!0), yield (0, P.Eu)());
                                            const e = viewEnv.getScale();
                                            (h(l.current.offsetWidth / e),
                                                w(l.current.querySelector(`.${k.slide__active}`).offsetWidth / e),
                                                setTimeout(() => {
                                                    x(!1);
                                                }, 100));
                                        }
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                            ((0, r.useEffect)(() => {
                                const t = [];
                                (b.map((a) => {
                                    const r = e.find((e) => e.key === a.key);
                                    r && t.push(r);
                                }),
                                    E(t));
                            }, [e]),
                                (0, r.useEffect)(() => {
                                    if (a) {
                                        const e = b.concat();
                                        (e.unshift(...e.splice(-2, b.length)), E(e));
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
                                    L(function* () {
                                        H ||
                                            O ||
                                            s ||
                                            (a && M(!0),
                                            yield (0, P.Eu)(),
                                            o && o(),
                                            F(D - 1),
                                            a &&
                                                setTimeout(
                                                    L(function* () {
                                                        x(!0);
                                                        const e = b.concat();
                                                        (e.unshift(e.pop()),
                                                            E(e),
                                                            F(D),
                                                            yield (0, P.Eu)(),
                                                            x(!1),
                                                            M(!1));
                                                    }),
                                                    600,
                                                ),
                                            (0, C.G)('play'),
                                            (0, C.G)('bp_glide_01'));
                                    }),
                                    [D, F, H, a, o, b, O, s],
                                ),
                                j = (0, r.useCallback)(
                                    L(function* () {
                                        W ||
                                            O ||
                                            s ||
                                            (a && M(!0),
                                            yield (0, P.Eu)(),
                                            u && u(),
                                            F(D + 1),
                                            a &&
                                                setTimeout(
                                                    L(function* () {
                                                        x(!0);
                                                        const e = b.concat();
                                                        (e.push(e.shift()),
                                                            E(e),
                                                            F(D),
                                                            yield (0, P.Eu)(),
                                                            x(!1),
                                                            M(!1));
                                                    }),
                                                    600,
                                                ),
                                            (0, C.G)('play'),
                                            (0, C.G)('bp_glide_01'));
                                    }),
                                    [D, F, W, a, u, b, O, s],
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
                                K = p()(
                                    k.base,
                                    d && k.base__large,
                                    a && k.base__carousel,
                                    a && d && k.base__carouselLarge,
                                    R && k.base__withoutAnimation,
                                    O && k.base__withoutPointer,
                                ),
                                Q = p()(k.prev, H && k.prev__disabled),
                                J = p()(k.next, W && k.next__disabled),
                                ee = p()(k.counter, !z && k.counter__disabled);
                            return n().createElement(
                                'div',
                                { className: K },
                                z && n().createElement('div', { className: Q, onClick: V, onMouseEnter: q, style: Y }),
                                z && n().createElement('div', { className: J, onClick: j, onMouseEnter: q, style: Y }),
                                i &&
                                    n().createElement(
                                        'div',
                                        { className: ee },
                                        D,
                                        n().createElement('div', { className: k.counterDivider }, '/'),
                                        $,
                                    ),
                                n().createElement(
                                    'div',
                                    { className: k.trackWrapper, ref: l },
                                    n().createElement(
                                        'div',
                                        { className: k.track, style: X },
                                        b.map((e, t) => {
                                            const r = t + 2 === D,
                                                s = t === D;
                                            let i;
                                            s ? (i = j) : r && (i = V);
                                            let o = p()(k.slide, d && k.slide__large, t + 1 === D && k.slide__active);
                                            return (
                                                a &&
                                                    (o = p()(
                                                        k.slide,
                                                        k.slide__carousel,
                                                        d && k.slide__large,
                                                        t + 1 === D && k.slide__active,
                                                        r && k.slide__beforeActive,
                                                        r && d && k.slide__beforeActiveLarge,
                                                        s && k.slide__afterActive,
                                                        s && d && k.slide__afterActiveLarge,
                                                        t + 2 < D && k.slide__leftEdge,
                                                        t + 2 < D && d && k.slide__leftEdgeLarge,
                                                        t > D && k.slide__rightEdge,
                                                        t > D && d && k.slide__rightEdgeLarge,
                                                    )),
                                                n().createElement(
                                                    'div',
                                                    { className: o, key: `slide-${t}`, style: Z, onClick: i },
                                                    n().createElement(I.Provider, { value: G }, e),
                                                )
                                            );
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    O = 'IntroView_base_e9ade',
                    M = 'IntroView_title_cc66d',
                    $ = 'IntroView_base__video_b3c15',
                    H = 'IntroView_bg_caa1e',
                    W = 'IntroView_shadow_e6316',
                    z = 'IntroView_video_f715a',
                    G = 'IntroView_videoIcon_de7d6',
                    U = 'IntroView_videoText_dc1da',
                    V = 'IntroView_content_c64df',
                    j = 'IntroView_base__high_ff543',
                    q = 'IntroView_bottomContainer_f7caa',
                    Z = 'IntroView_buttonWrapper_bcb03',
                    X = 'IntroView_close_d8ef7',
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
                        slides: s,
                        onClose: i,
                        onVideo: o,
                        onViewLoaded: u,
                        backgroundLink: l = '',
                        isBlurred: c = !1,
                        classNames: d,
                    }) => {
                        const _ = (0, r.useState)(!1),
                            m = _[0],
                            b = _[1],
                            E = (0, r.useState)(!1),
                            A = E[0],
                            w = E[1],
                            B = (0, f.GS)(),
                            D = B.mediaSize,
                            F = B.mediaWidth,
                            P = B.mediaHeight,
                            S = Q[D],
                            N = P >= f.Aq.Medium && F <= f.fd.Small,
                            k = P <= f.Aq.Small ? g.qE.small : g.qE.medium,
                            R = p()(O, N && j, m && $);
                        (0, r.useEffect)(
                            () =>
                                (0, v.v)(() => {
                                    A || (u(), w(!0));
                                }),
                            [A, u],
                        );
                        const x = (0, r.useCallback)(() => {
                            i();
                        }, [i]);
                        (0, r.useEffect)(() => {
                            if (m)
                                return (0, h.F)(() => {
                                    (o(), b(!1));
                                }, 1e3);
                        }, [m, o]);
                        return n().createElement(
                            'div',
                            { className: R, style: { backgroundImage: `url(${l})` } },
                            c &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: H, style: { backgroundImage: `url(${l})` } }),
                                    n().createElement('div', { className: p()(W, null == d ? void 0 : d.shadow) }),
                                ),
                            n().createElement('span', { className: M }, e),
                            n().createElement(
                                'div',
                                {
                                    className: z,
                                    onClick: () => {
                                        ((0, C.G)('play'), b(!0));
                                    },
                                    onMouseEnter: C.$.playHighlight,
                                },
                                n().createElement('div', { className: G }),
                                n().createElement('div', { className: U }, t),
                            ),
                            n().createElement(
                                'div',
                                { className: V },
                                n().createElement(
                                    T,
                                    { arrowsTopPosition: S, withCounter: !0 },
                                    s.map(
                                        ({ value: e }, t) =>
                                            e &&
                                            n().createElement(y, {
                                                icon: e.icon,
                                                title: e.title,
                                                descr: e.description,
                                                key: t,
                                            }),
                                    ),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: q },
                                n().createElement(
                                    'div',
                                    { className: Z },
                                    n().createElement(
                                        g.u5,
                                        { type: g.L$.primary, size: k, mixClass: X, onClick: x },
                                        a,
                                    ),
                                ),
                            ),
                        );
                    };
                var ee = a(2317),
                    te = a(8862);
                const ae = (0, m.Pi)(() => {
                        const e = (0, te.tv)(),
                            t = d(),
                            a = t.model,
                            r = t.controls,
                            s = a.root.get(),
                            i = s.title,
                            o = s.about,
                            u = s.buttonLabel,
                            l = s.background,
                            c = a.computes.getSlides(),
                            m = l || 'R.images.gui.maps.icons.battlePass.backgrounds.common',
                            E = () => {
                                (r.confirm(), e.push(ee._.battlePass.chapterChoice));
                            };
                        return (
                            b.N.useHandleKeydown(_.n.ESCAPE, () => E()),
                            n().createElement(J, {
                                title: i,
                                about: o,
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
                        n().createElement(
                            c,
                            { options: { rootId: R.aliases.battle_pass.Intro('resId') } },
                            n().createElement(ae, null),
                        );
            },
            2016: (e, t, a) => {
                'use strict';
                a.d(t, { X: () => ls });
                var r = a(7363),
                    n = a.n(r),
                    s = a(8978),
                    i = a(4020),
                    o = a(4029),
                    u = a(2041),
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
                var b = a(5090),
                    E = a(9723),
                    p = a(8739),
                    g = a(5369),
                    v = a(5278);
                let h = (function (e) {
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
                    C = (function (e) {
                        return (
                            (e.UNLOCK_BIG = 'bp_unlock_big'),
                            (e.UNLOCK_SMALL = 'bp_unlock_small'),
                            (e.IMPROVED_REWARD = 'bp_improved_reward'),
                            e
                        );
                    })({}),
                    A = (function (e) {
                        return ((e.back = 'back'), (e.forward = 'forward'), e);
                    })({}),
                    w = (function (e) {
                        return ((e.Default = 'default'), (e.Gray = 'gray'), e);
                    })({});
                const B = [d.Active, d.Completed],
                    D = (0, b.q3)()(
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
                                a = (0, g.Om)(() => p.UI(t.freeFinalRewards.get(), E.yR), { equals: E.jv }),
                                r = (0, g.Om)(() => p.UI(t.paidFinalRewards.get(), E.yR), { equals: E.jv }),
                                n = (0, g.Om)(() => t.root.get().chapterType === m.HOLIDAY),
                                s = (0, g.Om)(() =>
                                    Object.assign(
                                        { freeFinalRewards: (0, v.at)(a()) },
                                        r().length && { paidFinalRewards: (0, v.at)(r()) },
                                    ),
                                ),
                                i = (0, g.Om)(() => {
                                    const e = s(),
                                        t = e.freeFinalRewards;
                                    return !(!e.paidFinalRewards && t.mainReward === v.Hj.progressiveStyle);
                                }),
                                o = (0, g.Om)(() => t.root.get().chapterType === m.EXTRA),
                                u = (0, g.Om)(() => !(n() || o()), { equals: E.jv }),
                                l = (0, g.Om)(() => t.price.get().prices.length > 1),
                                c = (0, g.Om)((e) => (e ? t.paidTankmanInfo.get() : t.freeTankmanInfo.get())),
                                _ = (0, g.Om)((e) => {
                                    const a = t.levels.get(),
                                        r = p.MH(a, e - 1);
                                    return (
                                        r || console.warn(`level info not found for number: ${e}`),
                                        Object.assign({}, r, { maxLevel: a.length })
                                    );
                                }),
                                b = (0, g.Om)((e, t) => {
                                    const a = _(e);
                                    return t
                                        ? p.UI(a.freeRewardItems.items, (e) => Object.assign({}, e))
                                        : p.UI(a.paidRewardItems.items, (e) => Object.assign({}, e));
                                }),
                                h = (0, g.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.freePointsInLevel,
                                        r = e.currentPointsInLevel,
                                        n = e.chapterState,
                                        s = e.hasExtra,
                                        i = B.includes(n) || s ? r : a,
                                        o = _(1);
                                    return { current: i, total: null == o ? void 0 : o.levelPoints };
                                }),
                                C = (0, g.Om)((e, a) => {
                                    const r = t.root.get(),
                                        n = r.chapterState,
                                        s = r.currentLevel,
                                        i = r.potentialLevel,
                                        o = r.currentPointsInChapter,
                                        u = r.freePointsInChapter,
                                        l = _(e),
                                        c = l.levelPoints,
                                        m = l.maxLevel,
                                        b = a ? u : o,
                                        E = a ? i : s;
                                    return e < E || (E === m && b === c * m)
                                        ? f.COMPLETED
                                        : e === E && (n !== d.NotStarted || b > 0)
                                          ? f.IN_PROGRESS
                                          : f.NOT_STARTED;
                                }),
                                A = (0, g.Om)((e, a, r, n) => {
                                    const s = t.root.get();
                                    return ((s.currentLevel - 1) * e + (s.currentPointsInLevel / n) * a) / r;
                                }),
                                w = (0, g.Om)(() => {
                                    const e = t.levels.get();
                                    return e[e.length - 1].value.levelPoints;
                                }),
                                D = (0, g.Om)((e, t) => {
                                    const a = _(e),
                                        r = a.needTakeFree,
                                        n = a.needTakePaid;
                                    return t ? n : r;
                                }),
                                F = (0, g.Om)((e, a) => {
                                    const r = t.root.get(),
                                        n = r.isBattlePassPurchased,
                                        s = r.chapterState,
                                        i = _(e),
                                        o = C(e, !1);
                                    return {
                                        cardStatus: { current: o, potential: C(e, !0) },
                                        isRare: i.isRare && o !== f.IN_PROGRESS,
                                        isDisabled: (a && !n) || (s !== d.Active && o === f.NOT_STARTED),
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
                                    levelRewardItems: b,
                                    getCurrentWidth: A,
                                    getTotalLevelPoints: w,
                                    isRewardNeedTake: D,
                                    cardStates: F,
                                    isLayoutWithExtraWidget: i,
                                    getFinalRewardsDescription: s,
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
                    F = D[0],
                    y = D[1];
                var P = a(9849),
                    S = a.n(P),
                    N = a(1705);
                const k = 'BattlePassProgressionsViewContent_base_b4bfc',
                    x = 'BattlePassProgressionsViewContent_base__extra_adca5',
                    L = 'BattlePassProgressionsViewContent_base__extraChapter_a7db9',
                    I = 'BattlePassProgressionsViewContent_header_eb2f2',
                    T = 'BattlePassProgressionsViewContent_progression_e83d6',
                    O = 'BattlePassProgressionsViewContent_progression__extraChapter_bdad6',
                    M = 'BattlePassProgressionsViewContent_extraChapterWidget_d53a9',
                    $ = 'BattlePassProgressionsViewContent_footer_e10f1';
                var H = a(5603),
                    W = a(7436),
                    z = a(6485),
                    G = a(2278),
                    U = a(1623);
                var V = a(6758),
                    j = a(828);
                const q = 'AdditionalRewardInfo_rewardText_d8769',
                    Z = 'AdditionalRewardInfo_subTitle_f6f8c',
                    X = 'AdditionalRewardInfo_subTitleTextWrapper_c0df5',
                    Y = 'AdditionalRewardInfo_subTitleText_f44dc',
                    K = 'AdditionalRewardInfo_subTitleText__truncated_ca484',
                    Q = 'AdditionalRewardInfo_infoIcon_af118';
                function J(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                function ee(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, n) {
                            var s = e.apply(t, a);
                            function i(e) {
                                J(s, r, n, i, o, 'next', e);
                            }
                            function o(e) {
                                J(s, r, n, i, o, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                const te = R.strings.battle_pass.progression.extraChapterWidget,
                    ae = (0, u.Pi)(({ additionalReward: e }) => {
                        const t = y().model,
                            a = t.widgetFinalRewards,
                            s = t.styleInfo,
                            i = t.vehicleInfo.get().vehicleName,
                            o = a.get().battleQuest,
                            u = (0, r.useState)(!1),
                            l = u[0],
                            c = u[1],
                            d = (0, r.useRef)(null),
                            _ = (0, r.useCallback)(
                                ee(function* () {
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
                            (0, r.useEffect)(m, []),
                            n().createElement(
                                n().Fragment,
                                null,
                                e === v.Hj.style &&
                                    n().createElement(H.z, {
                                        classMix: q,
                                        text: te.vehicleSubTitle(),
                                        binding: { styleName: s.get().styleName },
                                    }),
                                e === v.Hj.battleQuest &&
                                    n().createElement(
                                        G.u,
                                        {
                                            contentId: R.views.lobby.battle_pass.tooltips.RandomQuestTooltip('resId'),
                                            args: { tokenID: o },
                                        },
                                        n().createElement(
                                            'div',
                                            { className: Z },
                                            n().createElement(
                                                'div',
                                                { className: X },
                                                n().createElement(
                                                    'div',
                                                    { className: S()(Y, l && K), ref: d },
                                                    (0, V.uF)(te.styleSubTitle(), { vehicleName: i }),
                                                ),
                                            ),
                                            n().createElement('div', { className: Q }),
                                        ),
                                    ),
                            )
                        );
                    }),
                    re = 'StyleDescription_rewardTitle_fddf9',
                    ne = 'StyleDescription_rewardTitle__singleReward_b1406',
                    se = 'StyleDescription_title_f6096',
                    ie = 'StyleDescription_title__singleReward_deef2',
                    oe = 'StyleDescription_vehicleTitle_bad22',
                    ue = 'StyleDescription_vehicleName_d37ee',
                    le = 'StyleDescription_vehicleTypeIcon_ec0e1',
                    ce = 'StyleDescription_vehicleInHangar_dd569',
                    de = 'StyleDescription_remark_cbc89',
                    _e = 'StyleDescription_lockIcon_d6936';
                function me() {
                    return (
                        (me = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        me.apply(null, arguments)
                    );
                }
                const be = R.strings.battle_pass.progression.extraChapterWidget,
                    Ee = (0, u.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = y(),
                            r = a.model,
                            s = r.styleInfo,
                            i = r.vehicleInfoFromStyle,
                            o = r.root,
                            u = r.computes,
                            l = a.controls,
                            c = o.get().isBattlePassPurchased,
                            d = s.get(),
                            _ = d.styleName,
                            m = d.isVehicleInHangar,
                            b = u.getPaidFinalRewards().length;
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement(W.h, { type: 'preview', size: 'normal', onClick: l.openPreview }),
                            n().createElement(
                                'div',
                                { className: S()(re, !b && ne) },
                                b ? be.style3DTitle() : be.styleTitle(),
                            ),
                            n().createElement(H.z, {
                                classMix: S()(se, !b && ie),
                                text: be.styleName(),
                                binding: { styleName: _ },
                            }),
                            !b &&
                                n().createElement(
                                    'div',
                                    { className: oe },
                                    n().createElement(H.z, {
                                        text: be.forLabel(),
                                        binding: {
                                            vehicleName: n().createElement(
                                                U.U4,
                                                me({}, i.get(), {
                                                    type: U.b0.whiteOrange,
                                                    className: ue,
                                                    classNames: { typeIcon: le },
                                                }),
                                            ),
                                        },
                                    }),
                                    m &&
                                        n().createElement(
                                            z.i,
                                            { body: be.inHangarTooltip() },
                                            n().createElement('div', { className: ce }),
                                        ),
                                ),
                            e && n().createElement(ae, { additionalReward: e }),
                            t &&
                                !c &&
                                n().createElement(
                                    G.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: de },
                                        n().createElement('div', { className: _e }),
                                        n().createElement('div', null, be.styleRemark()),
                                    ),
                                ),
                        );
                    });
                var pe = a(7109),
                    ge = a(8803);
                const ve = 'TankmanDescription_title_d186e',
                    he = 'TankmanDescription_title__noVoice_ff9a1',
                    fe = 'TankmanDescription_name_cd527',
                    Ce = 'TankmanDescription_skills_f59f9',
                    Ae = 'TankmanDescription_skill_a894b',
                    we = 'TankmanDescription_skill__paidReward_ade21',
                    Be = 'TankmanDescription_description_b1972',
                    De = 'TankmanDescription_lockIcon_d2053',
                    Fe = 'TankmanDescription_lockText_f0e23',
                    ye = 'TankmanDescription_showCommander_ee53b',
                    Pe = 'TankmanDescription_close_a1d1c';
                var Se = a(1652),
                    Ne = a(7959);
                const ke = 'Voice_base_fa280',
                    Re = 'Voice_icon_fdd16',
                    xe = 'Voice_icon__speaker_b1b3a',
                    Le = 'Voice_icon__wave0_c5759',
                    Ie = 'Voice_base__animate_d775f',
                    Te = 'Voice_icon__wave1_aa782',
                    Oe = 'Voice_icon__wave2_cf111',
                    Me = R.strings.battle_pass.progression.extraChapterWidget,
                    $e = (() => {
                        const e = Math.ceil(Ne.k9 / 800);
                        return { duration: 800, iterationCount: e, totalDuration: 800 * e };
                    })(),
                    He = ({ groupName: e }) => {
                        const t = (0, r.useState)(!1),
                            a = t[0],
                            s = t[1],
                            i = (0, r.useCallback)(() => {
                                a || ((0, o.G)(R.sounds.play()), (0, o.G)(e), s(!0));
                            }, [a, e]);
                        return (
                            (0, r.useEffect)(() => {
                                a &&
                                    (0, Se.F)(() => {
                                        s(!1);
                                    }, $e.totalDuration);
                            }, [a]),
                            n().createElement(
                                z.i,
                                { body: Me.voiceoverTooltip() },
                                n().createElement(
                                    'div',
                                    {
                                        className: S()(ke, a && Ie),
                                        onClick: i,
                                        onMouseEnter: () => {
                                            (0, o.G)(R.sounds.bp_highlight());
                                        },
                                        style: {
                                            '--animation-duration': `${$e.duration}ms`,
                                            '--animation-iteration-count': $e.iterationCount,
                                        },
                                    },
                                    n().createElement('div', { className: S()(Re, xe) }),
                                    n().createElement('div', { className: S()(Re, Le) }),
                                    n().createElement('div', { className: S()(Re, Te) }),
                                    n().createElement('div', { className: S()(Re, Oe) }),
                                ),
                            )
                        );
                    },
                    We = R.strings.battle_pass.progression.extraChapterWidget,
                    ze = R.strings.battle_pass.awardsWidget.description.commander(),
                    Ge = (0, u.Pi)(({ isPaidReward: e }) => {
                        const t = y(),
                            a = t.model,
                            r = t.controls,
                            s = a.root.get(),
                            i = s.tankmenScreenID,
                            o = s.isBattlePassPurchased,
                            u = a.computes.getFinalRewardTankmanInfo(e),
                            l = u.tankman,
                            c = u.hasVoice,
                            d = u.skills,
                            _ = u.groupName,
                            m = a.computes.getFinalRewardsDescription(),
                            b = m.freeFinalRewards,
                            E = m.paidFinalRewards,
                            p = b.mainReward === v.Hj.tankman && (null == E ? void 0 : E.mainReward) === v.Hj.tankman;
                        return n().createElement(
                            n().Fragment,
                            null,
                            c && n().createElement(He, { groupName: _ }),
                            n().createElement('div', { className: S()(ve, !c && he) }, We.tankman()),
                            n().createElement('div', { className: fe }, l),
                            d.length > 0 &&
                                n().createElement(
                                    'div',
                                    { className: Ce },
                                    n().createElement(ge.C, { skills: d, className: S()(Ae, e && we) }),
                                ),
                            e &&
                                !o &&
                                n().createElement(
                                    G.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: Be },
                                        n().createElement('div', { className: De }),
                                        n().createElement('div', { className: Fe }, We.labelWithBP()),
                                    ),
                                ),
                            Boolean(i) &&
                                !p &&
                                n().createElement(
                                    z.i,
                                    { body: ze, isEnabled: Boolean(ze) },
                                    n().createElement(
                                        'div',
                                        { className: ye },
                                        n().createElement(
                                            pe.u5,
                                            {
                                                type: pe.L$.ghost,
                                                size: pe.qE.small,
                                                mixClass: Pe,
                                                onClick: r.showTankmen,
                                            },
                                            We.commanderVoices(),
                                        ),
                                    ),
                                ),
                        );
                    });
                var Ue = a(873),
                    Ve = a(995);
                const je = (e) => (e < 10 ? '0' + e : e),
                    qe = 'Timer_base_d6532',
                    Ze = 'Timer_light_bc7e9',
                    Xe = 'Timer_icon_d5ed6',
                    Ye = 'Timer_value_b3666',
                    Ke = ({ expireTime: e = 0 }) => {
                        const t = (0, Ve.au)(e, 1),
                            a = `${(r = (0, Ue.f8)(t)).days ? (0, V.WU)(R.strings.common.duration.days(), { days: r.days }) : ''} ${je(r.hours)} : ${je(r.minutes)} : ${je(r.seconds)}`;
                        var r;
                        return n().createElement(
                            z.i,
                            { body: R.strings.battle_pass.progression.extraChapterWidget.timer() },
                            n().createElement(
                                'div',
                                { className: qe },
                                n().createElement('div', { className: Xe }),
                                n().createElement('div', { className: Ye }, a),
                                n().createElement('div', { className: Ze }),
                                n().createElement('div', { className: Ze }),
                            ),
                        );
                    };
                var Qe = a(8925);
                const Je = {
                    vehicleBg: 'VehicleDescription_vehicleBg_b6750',
                    vehicleBg__description: 'VehicleDescription_vehicleBg__description_f2c68',
                    vehicleCaption: 'VehicleDescription_vehicleCaption_cc988',
                    description: 'VehicleDescription_description_b38b0',
                    rewardLabel: 'VehicleDescription_rewardLabel_b3ad2',
                    rewardDescription: 'VehicleDescription_rewardDescription_a88bc',
                    rewardLockIcon: 'VehicleDescription_rewardLockIcon_daee0',
                    rewardLockText: 'VehicleDescription_rewardLockText_cbb9b',
                };
                var et = a(1308);
                const tt = 'VehicleInfo_base_b33d9',
                    at = 'VehicleInfo_type_e1f52',
                    rt = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: r, classNames: s }) =>
                        n().createElement(
                            'div',
                            { className: S()(tt, null == s ? void 0 : s.base) },
                            (0, et.cg)(e),
                            n().createElement('div', {
                                className: S()(at, null == s ? void 0 : s.type),
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${(0, V.BN)(a)}${r ? '_elite' : ''}`)})`,
                                },
                            }),
                            t,
                        ),
                    nt = R.strings.battle_pass.progression.extraChapterWidget,
                    st = (0, u.Pi)(({ additionalReward: e, isPaidReward: t }) => {
                        const a = y(),
                            r = a.model,
                            s = r.vehicleInfo,
                            i = r.root,
                            o = r.computes,
                            u = a.controls,
                            l = s.get(),
                            c = l.vehicleType,
                            d = l.isElite,
                            _ = l.vehicleName,
                            m = l.vehicleShortName,
                            b = l.vehicleLvl,
                            E = l.vehicleNation,
                            p = (0, Qe.GS)().mediaSize,
                            g = i.get(),
                            v = g.isBattlePassPurchased,
                            h = g.seasonNum,
                            f = o.getPaidFinalRewards().length,
                            C = { backgroundImage: `url(R.images.gui.maps.icons.flags.c_600x450.${E})` },
                            A = p > Qe.cJ.Medium ? 14 : 12,
                            w = _.length > A ? m : _,
                            B = nt.tank.description.$num(h);
                        return n().createElement(
                            n().Fragment,
                            null,
                            n().createElement('div', {
                                className: S()(Je.vehicleBg, !f && Je.vehicleBg__description),
                                style: C,
                            }),
                            n().createElement(W.h, { type: 'preview', size: 'normal', onClick: u.openPreview }),
                            n().createElement('div', { className: Je.vehicleCaption }, nt.vehicleCaption()),
                            n().createElement(rt, {
                                classNames: { base: Je.vehicleInfo },
                                vehicleLvl: b,
                                vehicleName: w,
                                vehicleType: c,
                                isElite: d,
                            }),
                            !f &&
                                B &&
                                n().createElement(
                                    'div',
                                    { className: Je.description },
                                    n().createElement(H.z, { text: B }),
                                ),
                            e &&
                                n().createElement(
                                    'div',
                                    { className: Je.rewardLabel },
                                    n().createElement(ae, { additionalReward: e }),
                                ),
                            t &&
                                !v &&
                                n().createElement(
                                    G.u,
                                    {
                                        contentId:
                                            R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView('resId'),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: Je.rewardDescription },
                                        n().createElement('div', { className: Je.rewardLockIcon }),
                                        n().createElement('div', { className: Je.rewardLockText }, nt.labelWithBP()),
                                    ),
                                ),
                        );
                    }),
                    it = 'ExtraChapterWidget_base_b8ad4',
                    ot = 'ExtraChapterWidget_widgetWrapper_f315a',
                    ut = 'ExtraChapterWidget_base__styleReward_c2dbf',
                    lt = 'ExtraChapterWidget_glow_eb869',
                    ct = 'ExtraChapterWidget_glow__styleReward_b7662',
                    dt = 'ExtraChapterWidget_content_ce739',
                    _t = 'ExtraChapterWidget_content__left_e9784',
                    mt = 'ExtraChapterWidget_content__singleReward_fc56e',
                    bt = 'ExtraChapterWidget_separatorBg_dc707',
                    Et = 'ExtraChapterWidget_timer_fb615',
                    pt = 'Separator_base_f1a76',
                    gt = 'Separator_separatorBg_dc8e1',
                    vt = ({ classNames: e }) =>
                        n().createElement(
                            'div',
                            { className: S()(pt, null == e ? void 0 : e.base) },
                            n().createElement('div', { className: S()(gt, null == e ? void 0 : e.separatorBg) }),
                        );
                function ht() {
                    return (
                        (ht = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        ht.apply(null, arguments)
                    );
                }
                const ft = { [v.Hj.tankman]: Ge, [v.Hj.vehicle]: st, [v.Hj.style]: Ee },
                    Ct = ({ mainReward: e, additionalReward: t }, a) => {
                        const r = ft[e];
                        return r
                            ? n().createElement(r, ht({ additionalReward: t }, a))
                            : (console.warn('Unknown final reward type:', e), null);
                    },
                    At = (0, u.Pi)(() => {
                        const e = y().model,
                            t = e.root,
                            a = e.computes,
                            r = t.get().timeLeft,
                            s = a.getFinalRewardsDescription(),
                            i = s.freeFinalRewards,
                            o = s.paidFinalRewards,
                            u = a.regularBattlePass(),
                            l = !o && i.mainReward === v.Hj.style;
                        return n().createElement(
                            'div',
                            { className: S()(it, l && ut) },
                            n().createElement(
                                'div',
                                { className: ot },
                                n().createElement('div', { className: S()(lt, l && ct) }),
                                n().createElement('div', { className: S()(dt, !o && mt) }, Ct(i, { isPaidReward: !1 })),
                                o &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(vt, { classNames: { separatorBg: bt } }),
                                        n().createElement(
                                            'div',
                                            { className: S()(dt, _t) },
                                            Ct(o, { isPaidReward: !0 }),
                                        ),
                                    ),
                            ),
                            !u && n().createElement('div', { className: Et }, n().createElement(Ke, { expireTime: r })),
                        );
                    });
                var wt = a(2317);
                const Bt = {
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
                    Ft = R.strings.battle_pass.tooltips.footerBuyBtn,
                    yt = R.strings.battle_pass.tooltips.progression,
                    Pt = (e, t) =>
                        e
                            ? t
                                ? Dt.activatePausedExtraChapterDescr()
                                : Dt.activateExtraChapterDescr()
                            : Dt.activateChapterDescr();
                let St = (function (e) {
                    return ((e.Red = 'red'), (e.Green = 'green'), (e.None = ''), e);
                })({});
                const Nt = (0, u.Pi)(() => {
                    const e = y(),
                        t = e.model,
                        a = e.controls,
                        r = (0, c.tv)(),
                        s = t.root.get(),
                        i = s.actionType,
                        o = s.chapterType,
                        u = s.hasExtra,
                        l = s.isSeasonEndingSoon,
                        b = s.freePointsInChapter,
                        E = s.currentPointsInChapter,
                        p = s.chapterState,
                        g = s.timeLeft,
                        h = s.chapterID,
                        f = o === m.EXTRA,
                        C = o === m.HOLIDAY,
                        A = p === d.Paused,
                        w = b - E,
                        B = i === _.ActivateChapter && w > 0,
                        D = i !== _.ActivateChapter && l,
                        F = t.computes.isMulticurrency() && i === _.Buy,
                        P = ((e) => {
                            switch (e) {
                                case _.Buy:
                                    return {
                                        buyBtnLabel: Dt.battlePassBuyBtn(),
                                        tooltip: Ft.battlePass.descr(),
                                        label: C ? Dt.battlePassBuyHolidayDescr() : Dt.battlePassBuyDescr(),
                                        warning: Dt.seasonEndingDescr(),
                                        buttonType: pe.L$.main,
                                        lightColor: St.Red,
                                        route: C ? wt._.battlePass.buyPassConfirm : wt._.battlePass.buyPass,
                                        params: {},
                                    };
                                case _.BuyLevel:
                                    return {
                                        buyBtnLabel: Dt.episodeBuyBtn(),
                                        tooltip: C ? Ft.episode.holidayDescr() : Ft.episode.descr(),
                                        label: Dt.episodeBuyDescr(),
                                        warning: Dt.seasonEndingDescr(),
                                        buttonType: pe.L$.main,
                                        lightColor: St.None,
                                        route: wt._.battlePass.buyLevels,
                                        params: { chapterID: h },
                                    };
                                case _.ActivateChapter:
                                    return {
                                        buyBtnLabel: Dt.activateChapter(),
                                        tooltip: Ft.activateChapter.descr(),
                                        label: Pt(f, A),
                                        warning: Dt.footer.freePointsDescr(),
                                        buttonType: pe.L$.primary,
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
                                        buttonType: pe.L$.ghost,
                                        lightColor: St.Green,
                                        route: '',
                                        params: {},
                                    };
                            }
                        })(i),
                        N = P.buyBtnLabel,
                        k = P.tooltip,
                        R = P.label,
                        x = P.warning,
                        L = P.buttonType,
                        I = P.lightColor,
                        T = P.route,
                        O = P.params,
                        M = B || D ? x : R,
                        $ = (0, v.u6)(g);
                    return n().createElement(
                        'div',
                        { className: Bt.base },
                        n().createElement('div', { className: S()(Bt.light, Bt[`light__${I}`]) }),
                        n().createElement(
                            'div',
                            { className: Bt.labelContainer },
                            A && n().createElement('div', { className: Bt.status }, Dt.footer.status.paused()),
                            n().createElement('div', { className: Bt.label }, M),
                            D && n().createElement('div', { className: Bt.days }, $),
                            B &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Bt.points }, w),
                                    n().createElement(
                                        'div',
                                        { className: Bt.info },
                                        n().createElement(
                                            z.i,
                                            {
                                                header: yt.freePoints.header(),
                                                body: u ? yt.freePoints.bodyExceptExtra() : yt.freePoints.body(),
                                            },
                                            n().createElement('div', { className: Bt.infoHover }),
                                        ),
                                    ),
                                ),
                        ),
                        n().createElement(
                            'div',
                            { className: S()(Bt.buttonWrapper, F && Bt.buttonWrapper__multiCurrency) },
                            n().createElement(
                                z.i,
                                { body: k },
                                n().createElement(
                                    pe.u5,
                                    {
                                        type: L,
                                        size: pe.qE.medium,
                                        mixClass: Bt.button,
                                        onClick: () => {
                                            i === _.ActivateChapter
                                                ? a.chapterActivate()
                                                : T && r.push(T, { chapterID: O.chapterID || void 0, reset: O.reset });
                                        },
                                    },
                                    D && n().createElement('div', { className: Bt.blink }),
                                    N,
                                ),
                            ),
                            F &&
                                n().createElement(
                                    z.i,
                                    { body: Dt.footer.multicurrencyTooltip() },
                                    n().createElement('div', { className: Bt.multicurrencyIcon }),
                                ),
                        ),
                    );
                });
                var kt = a(8656),
                    Rt = a(9279),
                    xt = a(935),
                    Lt = a(3927),
                    It = a(4490),
                    Tt = a(5579),
                    Ot = a(9478);
                function Mt(e, t, a) {
                    const n = (0, r.useContext)(Tt.YN);
                    let s = Object.entries(n).filter(([e, t]) => !0 === t && e in Ot.u);
                    return (
                        a && (s = s.filter((e) => a.includes(e[0]))),
                        e.reduce((e, a) => {
                            const r = s.map((e) =>
                                S()(t[((e, t) => e + '__' + t)(a, e[0])], t[((e, t) => e + (0, V.e)(t))(a, e[0])]),
                            );
                            return ((e[a] = S()(t[a], ...r)), e);
                        }, {})
                    );
                }
                const $t = {
                    base: 'ViewDecorator_base_a8f2f',
                    container: 'ViewDecorator_container_ce6b5',
                    container__shown: 'ViewDecorator_container__shown_d156b',
                    leftBlock: 'ViewDecorator_leftBlock_fe537',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_a53f6',
                    rightBlock: 'ViewDecorator_rightBlock_a02eb',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_f6930',
                    view: 'ViewDecorator_view_aed70',
                };
                let Ht = (function (e) {
                    return ((e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info'), e);
                })({});
                (0, r.memo)(
                    ({
                        background: e,
                        rightText: t,
                        leftText: a,
                        children: s,
                        leftSubText: i,
                        leftButtonType: o,
                        onClose: u,
                        onLeftButtonClick: l,
                        isHideButtons: c = !1,
                    }) => {
                        const d = Mt(['leftBlock', 'rightBlock'], $t),
                            _ = (0, r.useState)(c),
                            m = _[0],
                            b = _[1];
                        (0, r.useEffect)(() => b(!c), [c]);
                        const E = (0, r.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                            p = S()($t.container, m && $t.container__shown);
                        return n().createElement(
                            'div',
                            { className: $t.base, style: E },
                            n().createElement(
                                'div',
                                { className: p },
                                Boolean(a) &&
                                    n().createElement(
                                        'div',
                                        { className: d.leftBlock },
                                        n().createElement(Rt.A, {
                                            caption: a || '',
                                            goto: i,
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
                                            onClick: u,
                                        }),
                                    ),
                            ),
                            n().createElement('div', { className: $t.view }, s),
                        );
                    },
                );
                var Wt = a(2215);
                const zt = 'Header_base_da7c9',
                    Gt = 'Header_labels_a1b58',
                    Ut = 'Header_title_d6d83',
                    Vt = 'Header_chapterWrapper_afd18',
                    jt = 'Header_chapterText_d8c70',
                    qt = 'Header_chapterText__overflow_bc87c',
                    Zt = 'Header_chapterStatus_a07c4',
                    Xt = 'Header_date_ec8aa',
                    Yt = 'Header_titleButtons_fb384',
                    Kt = 'Header_titleButton_ba478',
                    Qt = 'Header_logo_e9969',
                    Jt = 'Header_awards_a1b2b',
                    ea = 'Header_flag_fed5e',
                    ta = 'Header_flag__isChapterChosen_b1649',
                    aa = 'Header_flag__isChapterNotChosen_e32bf',
                    ra = 'Header_emblem_a859d',
                    na = 'Header_emblem__isChapterNotChosen_e4f53',
                    sa = 'Header_chapterLogoIcon_b8037';
                function ia(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                function oa(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, n) {
                            var s = e.apply(t, a);
                            function i(e) {
                                ia(s, r, n, i, o, 'next', e);
                            }
                            function o(e) {
                                ia(s, r, n, i, o, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                let ua = (function (e) {
                    return ((e[(e.Small = 170)] = 'Small'), (e[(e.Medium = 210)] = 'Medium'), e);
                })({});
                const la = R.strings.battle_pass,
                    ca = 'auto',
                    da = (0, u.Pi)(() => {
                        const e = y(),
                            t = e.controls,
                            a = e.model.root.get(),
                            s = a.chapterID,
                            i = a.chapterState,
                            o = a.seasonNum,
                            u = a.expireTime,
                            l = a.currentLevel,
                            c = a.isBattlePassPurchased,
                            _ = a.currentPointsInChapter,
                            b = a.timeLeft,
                            E = a.chapterType,
                            p = [d.NotStarted, d.Paused],
                            g = (0, r.useState)(!1),
                            h = g[0],
                            f = g[1],
                            C = (0, r.useState)(ca),
                            A = C[0],
                            w = C[1],
                            B = (0, Qe.GS)().mediaSize,
                            D = B <= Qe.cJ.Medium ? It.$u.Small : It.$u.Medium,
                            F = B <= Qe.cJ.Medium ? viewEnv.pxToRem(ua.Small) : viewEnv.pxToRem(ua.Medium),
                            P = (0, r.useRef)(null),
                            k = (0, r.useRef)(null),
                            x =
                                (L = i) === d.Paused
                                    ? la.progression.header.paused()
                                    : L === d.NotStarted
                                      ? la.progression.header.inactive()
                                      : void 0;
                        var L;
                        const I = (0, r.useRef)(0),
                            T = i === d.Completed,
                            O = E === m.EXTRA,
                            M = E === m.HOLIDAY,
                            $ = () => (T ? It.Bq.Completed : c ? It.Bq.Bought : It.Bq.Free),
                            H = { level: l, from: _ },
                            W = i === d.Active,
                            G = (0, v.UP)(H) || i !== d.NotStarted,
                            U = G && $() !== It.Bq.Completed,
                            q = $() === It.Bq.Bought,
                            Z = Math.trunc(b / 86400),
                            X = la.chapter.fullName.$num(s),
                            Y = (0, V.uF)(la.progression.seasonEndingTooltip(), { day: Z }),
                            K = (0, V.uF)(la.progression.header.chapter.status(), { chapterName: X }),
                            Q = (0, r.useCallback)(
                                (e) => {
                                    e > I.current && (I.current = e);
                                },
                                [I],
                            ),
                            J = (0, r.useCallback)(
                                oa(function* () {
                                    (yield (0, j.Eu)(), yield (0, kt.nS)());
                                    const e = P.current,
                                        t = k.current;
                                    e &&
                                        t &&
                                        (Q(t.offsetWidth),
                                        x
                                            ? (f(I.current >= e.offsetWidth - F),
                                              w(e.offsetWidth / viewEnv.getScale() - F + 'rem'))
                                            : (f(I.current >= e.offsetWidth), w(ca)));
                                }),
                                [Q, x, F],
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
                                [i],
                            ),
                            n().createElement(
                                'div',
                                { className: zt },
                                n().createElement(
                                    'div',
                                    { className: Qt },
                                    n().createElement('div', {
                                        className: S()(ea, U && ta, p.includes(i) && aa),
                                        style: (0, N.fW)(s, D),
                                    }),
                                    n().createElement(
                                        'div',
                                        { className: S()(ra, p.includes(i) && na) },
                                        n().createElement(Lt.G4, {
                                            progression: H,
                                            size: D,
                                            battlePassState: $(),
                                            hasBattlePass: c,
                                            isChapterChosen: W,
                                            isProgression: !0,
                                            chapterID: s,
                                            hasBeenActive: G,
                                            showProgressBar: !1,
                                            isOpen: U,
                                            isExtra: O || M,
                                            seasonNum: o,
                                        }),
                                        U && n().createElement('div', { className: sa, style: (0, N.cs)(s, q, D) }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Gt },
                                    n().createElement(
                                        'div',
                                        { className: Ut },
                                        n().createElement(
                                            z.i,
                                            { body: Y, isEnabled: Boolean(b) },
                                            n().createElement(
                                                'div',
                                                { className: Xt },
                                                O
                                                    ? (0, V.uF)(la.progression.season.end.special(), {
                                                          endTime: (0, Ue.UI)(u, xt.C.DayMonthFull),
                                                      })
                                                    : M
                                                      ? (0, V.uF)(la.progression.season.end.special(), {
                                                            endTime: (0, Ue.UI)(u, xt.C.DayMonthFullTime),
                                                        })
                                                      : (0, V.uF)(la.progression.season.end.normal(), {
                                                            seasonNum: (0, et.cg)(o),
                                                            seasonName: la.season.fullName.$num(o),
                                                            endDate: (0, Ue.UI)(u, xt.C.DayMonthFull),
                                                        }),
                                            ),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Vt, ref: P },
                                            n().createElement(
                                                'div',
                                                { style: { maxWidth: `${A}` } },
                                                n().createElement(
                                                    z.i,
                                                    { body: K, isEnabled: h },
                                                    n().createElement(
                                                        'div',
                                                        { className: S()(jt, h && qt), ref: k },
                                                        K,
                                                    ),
                                                ),
                                            ),
                                            x && n().createElement('div', { className: Zt }, x),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: Yt },
                                            n().createElement(
                                                'div',
                                                { className: Kt },
                                                n().createElement(Rt.A, {
                                                    caption:
                                                        O || M ? la.progression.aboutExtra() : la.progression.about(),
                                                    type: Ht.Info,
                                                    onClick: t.openAbout,
                                                }),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: Kt },
                                                n().createElement(Rt.A, {
                                                    caption: la.howToEarnPoints.title(),
                                                    type: Ht.Info,
                                                    onClick: t.openInfo,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: Jt },
                                    n().createElement(Wt.Z, {
                                        rootId: R.aliases.battle_pass.Progression('resId'),
                                        context: 'model.awardsWidget',
                                    }),
                                ),
                            )
                        );
                    }),
                    _a = {
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
                var ma = a(2884),
                    ba = a(8718);
                let Ea = (function (e) {
                    return ((e.Dragging = 'dragging'), (e.End = 'scrollingToEnd'), (e.Idle = 'idle'), e);
                })({});
                const pa = { type: Ea.Idle };
                let ga = (function (e) {
                    return (
                        (e[(e.MainButton = 0)] = 'MainButton'),
                        (e[(e.AuxiliaryButton = 1)] = 'AuxiliaryButton'),
                        (e[(e.SecondaryButton = 2)] = 'SecondaryButton'),
                        (e[(e.FourthButton = 3)] = 'FourthButton'),
                        (e[(e.FifthButton = 4)] = 'FifthButton'),
                        e
                    );
                })({});
                var va = a(7475);
                const ha = {
                        base: 'ArrowButton_base_b4f92',
                        base__gray: 'ArrowButton_base__gray_b816c',
                        icon: 'ArrowButton_icon_b4157',
                        icon__4k: 'ArrowButton_icon__4k_d0460',
                        icon__back: 'ArrowButton_icon__back_fa3f2',
                        icon__forward: 'ArrowButton_icon__forward_ecc0c',
                    },
                    fa = ({ onClick: e, direction: t, type: a = w.Default, className: s, tooltipBody: i }) => {
                        const u = (0, r.useCallback)(() => {
                                (0, o.G)('highlight');
                            }, []),
                            l = (0, r.useCallback)(() => {
                                ((0, o.G)('bp_slide'), e());
                            }, [e]);
                        return n().createElement(
                            z.i,
                            { body: i },
                            n().createElement(
                                'div',
                                { className: S()(ha.base, ha[`base__${a}`], s), onClick: l, onMouseEnter: u },
                                n().createElement('div', {
                                    className: S()(
                                        ha.icon,
                                        ha[`icon__${t}`],
                                        2 === va.O.view.getScale() && ha.icon__4k,
                                    ),
                                }),
                            ),
                        );
                    },
                    Ca = 'Bookmark_base_a8bd2',
                    Aa = 'Bookmark_container_e9af3',
                    wa = 'Bookmark_container__start_b278b',
                    Ba = 'Bookmark_container__wide_c9180',
                    Da = 'Bookmark_textWrapper_ed5dd',
                    Fa = 'Bookmark_withTooltip_aac7e',
                    ya = 'Bookmark_text_d272f',
                    Pa = 'Bookmark_text__basic_abd49',
                    Sa = 'Bookmark_text__premium_a0b87',
                    Na = 'Bookmark_text__single_e579a',
                    ka = 'Bookmark_text__wide_c36c2',
                    Ra = 'Bookmark_text__disappeared_e51d8',
                    xa = 'Bookmark_textInner_b04b4',
                    La = 'Bookmark_leftTextLine_d2774',
                    Ia = 'Bookmark_rightTextLine_dd0a0',
                    Ta = ({ isWide: e, isDecorated: t }) =>
                        n().createElement(
                            'div',
                            { className: S()(ya, Na, e && ka) },
                            t && n().createElement('div', { className: La }),
                            n().createElement(
                                'div',
                                { className: xa },
                                R.strings.battle_pass.progression.postProgressionDescr(),
                            ),
                            t && n().createElement('div', { className: Ia }),
                        ),
                    Oa = (0, r.forwardRef)(
                        (
                            {
                                isWide: e = !1,
                                isDisappeared: t = !1,
                                tooltipBody: a,
                                tooltipTitle: s,
                                chapterStep: i,
                                mixClass: o,
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
                            const c = (0, V.uF)(R.strings.battle_pass.tooltips.postProgress.body(), { chapterStep: i });
                            return n().createElement(
                                'div',
                                { className: S()(Ca, o), ref: l },
                                n().createElement(
                                    'div',
                                    { className: S()(Aa, e && Ba, !e && wa) },
                                    e
                                        ? n().createElement(
                                              z.i,
                                              { body: a, header: s, isEnabled: 'string' == typeof a },
                                              n().createElement(
                                                  'div',
                                                  { className: Fa },
                                                  n().createElement(Ta, { isWide: e, isDecorated: !0 }),
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
                                                      n().createElement(Ta, { isWide: e }),
                                                  ),
                                              ),
                                              n().createElement(
                                                  G.u,
                                                  {
                                                      contentId:
                                                          R.views.lobby.battle_pass.tooltips.BattlePassLockIconTooltipView(
                                                              'resId',
                                                          ),
                                                  },
                                                  n().createElement(
                                                      'div',
                                                      { className: S()(ya, Sa) },
                                                      R.strings.battle_pass.progression.premiumProgressionDescr(),
                                                  ),
                                              ),
                                              n().createElement(
                                                  'div',
                                                  { className: S()(ya, Pa, t && Ra) },
                                                  R.strings.battle_pass.progression.baseProgressionDescr(),
                                              ),
                                          ),
                                ),
                            );
                        },
                    );
                var Ma = a(5938),
                    $a = a(7927);
                const Ha = 'VehicleInfo_base_ed07f',
                    Wa = 'VehicleInfo_prefix_d23ec',
                    za = 'VehicleInfo_type_b5687',
                    Ga = R.strings.battle_pass.progression.widget3dStyle,
                    Ua = (0, r.memo)(({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: s }) => {
                        const i = (0, r.useMemo)(() => {
                            const e = (0, V.BN)(a);
                            return {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(`${e}${s ? '_elite' : ''}`)})`,
                            };
                        }, [a, s]);
                        return n().createElement(
                            'div',
                            { className: Ha },
                            n().createElement('div', { className: Wa }, Ga.forVehicle()),
                            (0, et.cg)(e),
                            n().createElement('div', { className: za, style: i }),
                            t,
                        );
                    }),
                    Va = 'Widget3dStyle_base_c5c20',
                    ja = 'Widget3dStyle_title_cde97',
                    qa = 'Widget3dStyle_base__closedChapter_a4545',
                    Za = 'Widget3dStyle_box_b94b5',
                    Xa = 'Widget3dStyle_light_b90e1',
                    Ya = 'Widget3dStyle_image_ec516',
                    Ka = 'Widget3dStyle_previewButton_bfc81',
                    Qa = 'Widget3dStyle_box__hovered_dc6b6',
                    Ja = 'Widget3dStyle_footer_b4eaa',
                    er = 'Widget3dStyle_caption_c09a9',
                    tr = R.strings.battle_pass.progression.widget3dStyle;
                let ar = (function (e) {
                    return ((e.None = ''), (e.Small = '_small'), (e.Medium = '_medium'), e);
                })({});
                const rr = (0, u.Pi)(({ widget3dStyleRef: e, level: t, isShowTitle: a }) => {
                    const s = (0, r.useState)(!1),
                        i = s[0],
                        o = s[1],
                        u = y(),
                        l = u.controls,
                        c = u.model,
                        _ = c.root.get(),
                        m = _.chapterState,
                        b = _.isStyleTaken,
                        E = c.widget3dStyle.get(),
                        p = E.styleName,
                        g = E.styleId,
                        h = ((e, t) => (2 !== t ? (e <= Qe.cJ.Small ? ar.Small : ar.Medium) : ar.None))(
                            (0, Qe.GS)().mediaSize,
                            viewEnv.getScale(),
                        ),
                        f = (0, v.uc)(t, g, h),
                        C = (0, V.uF)(tr.currentStyle(), { name: p }),
                        A = (0, r.useCallback)(() => {
                            l.open3dStylePreview(t);
                        }, [l, t]);
                    return n().createElement(
                        'div',
                        { className: S()(Va, m === d.Completed && qa), ref: e },
                        !b && a && n().createElement('div', { className: ja }, tr.titleNoChapterSelected()),
                        n().createElement(
                            'div',
                            { className: S()(Za, i && Qa), onMouseEnter: () => o(!0), onMouseLeave: () => o(!1) },
                            !b && t === Yn && n().createElement('div', { className: Xa }),
                            n().createElement('div', { className: Ya, style: f }),
                            n().createElement('div', { className: Ka }, n().createElement($a.k, { onClick: A })),
                        ),
                        n().createElement(
                            'div',
                            { className: Ja },
                            n().createElement('div', { className: er }, C),
                            n().createElement(Ua, c.widget3dStyleVehicleInfo.get()),
                        ),
                    );
                });
                var nr = a(2858),
                    sr = a(1527);
                const ir = ({
                        level: e,
                        levelWidth: t,
                        currentLevelWidth: a,
                        pointsInLevel: r,
                        totalPointsInLevel: n,
                        currentLevel: s,
                    }) => (e > s ? a + t * (e - 2) + t * (r / n) : (e - 1) * t + a * (r / n)),
                    or = (e) => e + 1,
                    ur = (0, u.Pi)(
                        ({
                            api: e,
                            progressChange: t,
                            levelWidth: a,
                            currentLevelWidth: i,
                            level: o,
                            previousLevel: u,
                            currentPointsInLevel: l,
                            previousPointsInLevel: c,
                            currentPointsInChapter: d,
                            previousPointsInChapter: _,
                            theme: m,
                        }) => {
                            const b = y().model,
                                E = b.root.get(),
                                p = E.isPaused,
                                g = E.showLevelsAnimations,
                                v = E.currentLevel,
                                h = b.levels.get(),
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
                                F = D.previousBaseEarnedPoints,
                                P = D.maxBasePoints,
                                S = D.baseProgressionSize,
                                N = B[1];
                            (0, r.useEffect)(() => {
                                if (p) return;
                                const e = w.current !== _,
                                    t = e ? u : o,
                                    r = i + (h.length - 1) * a,
                                    n = h[t - 1],
                                    s = o <= h.length ? o - 1 : h.length - 1,
                                    m = h[s].value.levelPoints,
                                    b = ir({
                                        level: o,
                                        levelWidth: a,
                                        currentLevelWidth: i,
                                        pointsInLevel: l,
                                        totalPointsInLevel: m,
                                        currentLevel: v,
                                    }),
                                    E = n ? n.value.levelPoints : 0,
                                    g = ir({
                                        level: t > o ? o : t,
                                        levelWidth: a,
                                        currentLevelWidth: t < v ? a : i,
                                        pointsInLevel: c,
                                        totalPointsInLevel: E,
                                        currentLevel: v,
                                    }),
                                    f = e && t <= o ? g : b;
                                (_ !== d && a && (w.current = _),
                                    N({ maxBasePoints: r, previousBaseEarnedPoints: f, baseProgressionSize: b }));
                            }, [p, a, i, o, u, d, c, l, _, v, h]);
                            const k = (0, r.useMemo)(
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
                                (0, r.useEffect)(() => {
                                    const e = v !== u || l !== c;
                                    if (!g && (e || d === _))
                                        return e && -1 === w.current
                                            ? (0, Se.F)(() => {
                                                  A(or);
                                              }, 700)
                                            : void 0;
                                    A(or);
                                }, [d, _, g]),
                                (0, r.useEffect)(() => {
                                    if (g)
                                        return (0, s.v)(() => {
                                            t && t();
                                        });
                                }, [t, g]),
                                n().createElement(Ma._e, {
                                    key: C,
                                    animationSettings: k,
                                    deltaFrom: F,
                                    value: S,
                                    maxValue: P || void 0,
                                    api: e,
                                    theme: m,
                                })
                            );
                        },
                    ),
                    lr = R.strings.battle_pass.tooltips.progression.freePoints,
                    cr = (0, u.Pi)(
                        ({
                            progressApi: e,
                            freePointsApi: t,
                            levelWidth: a,
                            currentLevelWidth: r,
                            progressChange: s,
                        }) => {
                            const i = y().model,
                                o = i.root.get(),
                                u = o.chapterState,
                                l = o.currentLevel,
                                c = o.previousLevel,
                                _ = o.currentPointsInLevel,
                                m = o.previousPointsInLevel,
                                b = o.currentPointsInChapter,
                                E = o.previousPointsInChapter,
                                p = o.freePointsInLevel,
                                g = o.freePointsInChapter,
                                v = o.previousFreePointsInChapter,
                                h = o.previousFreePointsInLevel,
                                f = o.potentialLevel,
                                C = o.previousPotentialLevel,
                                A = i.levels.get(),
                                w = (0, sr.V)(),
                                B = (u === d.NotStarted || u === d.Paused) && g - b > 0,
                                D = i.computes.getTotalLevelPoints(),
                                F = i.computes.getCurrentWidth(a, r, w, D),
                                P = b >= A.length * D,
                                N = {
                                    '--progress-line-base': nr.Gh.line.bgColorBase,
                                    '--progress-line-disabled': nr.Gh.line.bgColorDisabled,
                                    '--progress-line-finished': nr.Gh.line.bgColorFinished,
                                };
                            return n().createElement(
                                'div',
                                { className: _a.progressContainer },
                                B &&
                                    n().createElement(
                                        z.i,
                                        { header: lr.header(), body: lr.body() },
                                        n().createElement(
                                            'div',
                                            { className: _a.progress },
                                            n().createElement(ur, {
                                                api: t,
                                                progressChange: s,
                                                levelWidth: a,
                                                currentLevelWidth: r,
                                                level: f,
                                                previousLevel: C,
                                                currentPointsInLevel: p,
                                                previousPointsInLevel: h,
                                                currentPointsInChapter: g,
                                                previousPointsInChapter: v,
                                                theme: nr.fV,
                                            }),
                                        ),
                                    ),
                                n().createElement('div', {
                                    className: S()(_a.progressBackground, P && _a.progressBackground__finished),
                                    style: Object.assign({ width: `${F}rem` }, N),
                                }),
                                n().createElement(
                                    G.u,
                                    { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                    n().createElement(
                                        'div',
                                        { className: S()(_a.progress, B && _a.progress__inactive) },
                                        n().createElement(ur, {
                                            api: e,
                                            levelWidth: a,
                                            currentLevelWidth: r,
                                            level: l,
                                            previousLevel: c,
                                            currentPointsInLevel: _,
                                            previousPointsInLevel: m,
                                            currentPointsInChapter: b,
                                            previousPointsInChapter: E,
                                            progressChange: s,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    dr = 'Background_base_d177f',
                    _r = 'Background_default_cfec9',
                    mr = 'Background_base__premium_dfcd5',
                    br = 'Background_rare_fdd8d',
                    Er = 'Background_rareBg_bd92f',
                    pr = 'Background_pattern_e7668',
                    gr = 'Background_pattern__left_ed7af',
                    vr = 'Background_pattern__right_caafc',
                    hr = 'Background_pattern__leftIndent_dfcef',
                    fr = 'Background_pattern__rightIndent_de502',
                    Cr = 'Background_pattern__completed_dacc5',
                    Ar = 'Background_disabled_ece5d',
                    wr = 'Background_inProgress_fa440',
                    Br = 'Background_inProgressInner_e00bc',
                    Dr = 'Background_inProgressPart_c40e2',
                    Fr = 'Background_inProgressPart__left_d7f31',
                    yr = 'Background_inProgressPart__right_ef764',
                    Pr = (e) => `url(R.images.gui.maps.icons.battlePass.progression.pattern_rare_${e})`,
                    Sr = (0, u.Pi)(({ level: e, isPremium: t = !1 }) => {
                        const a = y().model.computes.cardStates(e, t),
                            r = a.cardStatus,
                            s = a.isRare,
                            i = a.isDisabled,
                            o =
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
                        return n().createElement(
                            'div',
                            { className: S()(dr, t && mr) },
                            n().createElement('div', { className: _r }),
                            i && n().createElement('div', { className: Ar }),
                            r.current === f.IN_PROGRESS &&
                                n().createElement(
                                    'div',
                                    { className: wr },
                                    n().createElement('div', { className: S()(Dr, Fr) }),
                                    !t && n().createElement('div', { className: Br }),
                                    n().createElement('div', { className: S()(Dr, yr) }),
                                ),
                            s &&
                                n().createElement(
                                    'div',
                                    { className: br },
                                    n().createElement('div', {
                                        className: S()(pr, gr, o && hr, r.current === f.COMPLETED && Cr),
                                        style: { backgroundImage: Pr('left') },
                                    }),
                                    n().createElement('div', {
                                        className: S()(pr, vr, !o && fr, r.current === f.COMPLETED && Cr),
                                        style: { backgroundImage: Pr('right') },
                                    }),
                                    r.current === f.NOT_STARTED && n().createElement('div', { className: Er }),
                                ),
                        );
                    });
                var Nr = a(9659),
                    kr = a(1374);
                const Rr = {
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
                    xr = R.strings.battle_pass.progression,
                    Lr = (0, u.Pi)(({ stepNumber: e, stageAnimationDelay: t, isRewardAnimationActive: a }) => {
                        const s = y(),
                            i = s.model,
                            u = s.controls,
                            l = i.root.get(),
                            c = l.chapterState,
                            _ = l.showLevelsAnimations,
                            m = (0, r.useState)(!1),
                            b = m[0],
                            E = m[1],
                            p = i.computes.cardStates(e, !1).cardStatus,
                            g = i.computes.isRewardNeedTake(e, !1) || i.computes.isRewardNeedTake(e, !0),
                            h = i.computes.levelInfo(e).maxLevel === e,
                            C = p.current === f.IN_PROGRESS,
                            A = c === d.NotStarted || c === d.Paused,
                            w = p.current === f.COMPLETED && !g && !a,
                            B = (0, kr.useSpring)({
                                from: { stageOpacity: b ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, o.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: v.ei },
                            }).stageOpacity,
                            D = (0, kr.useSpring)({
                                from: { sparkOpacity: b ? 1 : 0 },
                                to: { sparkOpacity: 0 },
                                delay: 1100,
                                onRest: () => E(!1),
                                config: { duration: 1500, easing: v.ei },
                            }).sparkOpacity;
                        return (
                            (0, r.useEffect)(() => {
                                if (_ && C)
                                    return (0, Se.F)(() => {
                                        (E(!0), u.finishLevelsAnimation());
                                    }, t + 100);
                            }, [_, C, t]),
                            n().createElement(
                                'div',
                                { className: S()(Rr.base, Rr[`base__${p.current}`], w && Rr.base__rewardTaken) },
                                C &&
                                    !A &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: Rr.glow }),
                                        n().createElement(kr.animated.div, {
                                            style: { opacity: D },
                                            className: Rr.animatedGlow,
                                        }),
                                    ),
                                h && n().createElement('div', { className: Rr.iconFinal }),
                                C
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          n().createElement(
                                              'div',
                                              { className: Rr.numberInProgress },
                                              e,
                                              n().createElement(
                                                  kr.animated.div,
                                                  {
                                                      style: {
                                                          opacity: B,
                                                          transform: B.to([0, 1], [2.5, 1]).to(
                                                              (e) => `translate(-50%, -50%) scale(${e})`,
                                                          ),
                                                      },
                                                      className: Rr.animatedNumber,
                                                  },
                                                  e,
                                              ),
                                          ),
                                          n().createElement(
                                              'div',
                                              { className: Rr.title },
                                              A ? xr.pausedStep() : xr.currentStep(),
                                          ),
                                      )
                                    : n().createElement('div', { className: Rr.number }, e),
                            )
                        );
                    });
                var Ir = a(5623);
                const Tr = 'ClosedStatus_base_a5589',
                    Or = 'ClosedStatus_icon_d3aa6',
                    Mr = 'ClosedStatus_icon__current_ab55b',
                    $r = 'ClosedStatus_icon__exit_ee3d9',
                    Hr = 'ClosedStatus_icon__exitActive_faeca',
                    Wr = 'ClosedStatus_icon__exitCurrentActive_d14fe',
                    zr = 'ClosedStatus_icon__exitDone_cb25e',
                    Gr = 'ClosedStatus_title_d4f18',
                    Ur = 'ClosedStatus_title__exit_f1750',
                    Vr = 'ClosedStatus_title__exitActive_b80d4',
                    jr = 'ClosedStatus_title__exitDone_e397e';
                function qr() {
                    return (
                        (qr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        qr.apply(null, arguments)
                    );
                }
                const Zr = (0, u.Pi)(
                        ({
                            level: e,
                            playUnlockAnimation: t = !1,
                            handleUnlockAnimationExited: a,
                            baseUnlockProps: r,
                        }) => {
                            const s = y().model,
                                i = s.root.get().isBattlePassPurchased,
                                o = s.computes.cardStates(e, !0).cardStatus.current === f.IN_PROGRESS,
                                u = { exit: $r, exitActive: o ? Wr : Hr, exitDone: zr },
                                l = { exit: Ur, exitActive: Vr, exitDone: jr },
                                c = !i || t,
                                d = o && c;
                            return n().createElement(
                                'div',
                                { className: Tr },
                                c &&
                                    n().createElement(
                                        Ir.Z,
                                        qr({}, r, { classNames: u, onExited: a }),
                                        n().createElement('div', { className: S()(Or, o && Mr) }),
                                    ),
                                d &&
                                    n().createElement(
                                        Ir.Z,
                                        qr({}, r, { classNames: c ? l : {} }),
                                        n().createElement(
                                            'div',
                                            { className: Gr },
                                            R.strings.battle_pass.progression.currentStepLocked(),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Xr = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_ee08f',
                        slideUp: 'CompletedStatus_slideUp_b504e',
                        iconGlow__completedEnter: 'CompletedStatus_iconGlow__completedEnter_e393f',
                        iconGlow__completedEnterActive: 'CompletedStatus_iconGlow__completedEnterActive_f8ba9',
                        showUp: 'CompletedStatus_showUp_b2604',
                        iconGlow__completedEnterDone: 'CompletedStatus_iconGlow__completedEnterDone_b580f',
                        icon: 'CompletedStatus_icon_cf0d0',
                    },
                    Yr = ({ completedIn: e, handleCompleteGlowAnimationExited: t, children: a }) => {
                        const r = {
                            exit: Xr.iconGlow__completedEnter,
                            exitActive: Xr.iconGlow__completedEnterActive,
                            exitDone: Xr.iconGlow__completedEnterDone,
                        };
                        return n().createElement(
                            'div',
                            { className: S()(Xr.base, e && Xr.base__showAnimation) },
                            n().createElement(Ir.Z, { in: !e, timeout: En, classNames: r, onExited: t }, a),
                            n().createElement(
                                z.i,
                                { body: pn.tooltips.completed.got() },
                                n().createElement('div', { className: Xr.icon }),
                            ),
                        );
                    },
                    Kr = {
                        base: 'CurrentPoints_base_d4d04',
                        value__current: 'CurrentPoints_value__current_b5908',
                        value__total: 'CurrentPoints_value__total_d6632',
                        divider: 'CurrentPoints_divider_a5bc2',
                        icon: 'CurrentPoints_icon_d53f3',
                    },
                    Qr = (0, u.Pi)(() => {
                        const e = y().model.computes.currentLevelPoints(),
                            t = e.current,
                            a = e.total;
                        return n().createElement(
                            G.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            n().createElement(
                                'div',
                                { className: Kr.base },
                                n().createElement('div', { className: S()(Kr.value, Kr.value__current) }, t),
                                n().createElement('div', { className: Kr.divider }, '/'),
                                n().createElement('div', { className: S()(Kr.value, Kr.value__total) }, a),
                                n().createElement('div', { className: Kr.icon }),
                            ),
                        );
                    }),
                    Jr = 'Effects_glowWrapper_db1a8',
                    en = 'Effects_glow_bb9d3',
                    tn = 'Effects_glow__active_e14ed',
                    an = 'Effects_dust_a7961',
                    rn = 'Effects_dust__active_f59e8';
                function nn() {
                    return (
                        (nn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        nn.apply(null, arguments)
                    );
                }
                const sn = ({ baseUnlockProps: e }) => {
                        const t = { exit: en, exitActive: tn, exitDone: en },
                            a = { exit: an, exitActive: rn, exitDone: an };
                        return n().createElement(
                            'div',
                            null,
                            n().createElement(
                                Ir.Z,
                                nn({}, e, { classNames: t }),
                                n().createElement(
                                    'div',
                                    { className: Jr },
                                    n().createElement('div', { className: en }),
                                ),
                            ),
                            n().createElement(
                                Ir.Z,
                                nn({}, e, { classNames: a }),
                                n().createElement(
                                    'div',
                                    { className: Jr },
                                    n().createElement('div', { className: an }),
                                ),
                            ),
                        );
                    },
                    on = 'Status_base_abcb2',
                    un = 'Status_base__inProgress_a7870',
                    ln = 'Status_iconContainer_b1172',
                    cn = 'Status_iconInner_dbb9d',
                    dn = 'Status_iconGlow_de32d',
                    _n = 'Status_iconGlow__completed_d97d5',
                    mn = 'Status_iconGlow__hidden_f10a3',
                    bn = 'Status_pointsWrapper_f7978',
                    En = 1500,
                    pn = R.strings.battle_pass,
                    gn = R.views.lobby.battle_pass,
                    vn = (0, u.Pi)(
                        ({
                            isPremium: e,
                            playCompleteAnimation: t,
                            playUnlockAnimation: a,
                            completeAnimationDelay: s = 0,
                            unlockAnimationDelay: i = 0,
                            baseTimeout: u = 0,
                            playUnlockAnimationSound: l = !0,
                            playCompleteAnimationSound: c = !0,
                            onAnimationDone: d,
                            initialAnimationDelay: _,
                            completedDuration: m,
                            level: b,
                        }) => {
                            const E = y().model,
                                p = E.computes.cardStates(b, e),
                                g = p.cardStatus,
                                v = p.isDisabled,
                                h = E.computes.isRewardNeedTake(b, e),
                                A = (0, r.useState)(!1),
                                w = A[0],
                                B = A[1],
                                D = (0, r.useState)(!1),
                                F = D[0],
                                P = D[1],
                                N = (0, r.useState)(!0),
                                k = N[0],
                                R = N[1],
                                x = (0, r.useState)(!1),
                                L = x[0],
                                I = x[1],
                                T = g.current === f.COMPLETED && !h && !v,
                                O = (v && e) || T || a,
                                M = !e && g.current === f.IN_PROGRESS && g.potential !== f.COMPLETED,
                                $ = () => {
                                    (c && (0, o.G)(C.IMPROVED_REWARD), B(!0));
                                };
                            ((0, r.useEffect)(
                                () =>
                                    a
                                        ? (0, Se.F)(() => {
                                              (R(!1),
                                                  l &&
                                                      !L &&
                                                      (g.current === f.IN_PROGRESS
                                                          ? (0, o.G)(C.UNLOCK_BIG)
                                                          : (0, o.G)(C.UNLOCK_SMALL)));
                                          }, _ + i)
                                        : t
                                          ? (P(!0),
                                            (0, Se.F)(() => {
                                                (P(!1), $());
                                            }, _ + s))
                                          : void (F && P(!1)),
                                [a, t, F],
                            ),
                                (0, r.useEffect)(() => {
                                    if (t && L)
                                        return (0, Se.F)(() => {
                                            $();
                                        }, s);
                                }, [t, L]));
                            const H = () => {
                                    (!t && d && d(), I(!0));
                                },
                                W = { in: k, timeout: En + u };
                            return n().createElement(
                                'div',
                                {
                                    className: S()(on, g.current === f.IN_PROGRESS && un),
                                    style: { '--animation-duration': `${m}ms` },
                                },
                                O &&
                                    n().createElement(
                                        'div',
                                        { className: ln },
                                        ((!t && T) || (w && !h)) &&
                                            n().createElement(
                                                Yr,
                                                {
                                                    completedIn: w,
                                                    handleCompleteGlowAnimationExited: () => {
                                                        F && P(!1);
                                                    },
                                                },
                                                n().createElement('div', { className: S()(dn, _n, F && mn) }),
                                            ),
                                        !t &&
                                            !a &&
                                            v &&
                                            e &&
                                            n().createElement(
                                                G.u,
                                                {
                                                    isEnabled: e,
                                                    contentId: gn.tooltips.BattlePassLockIconTooltipView('resId'),
                                                },
                                                n().createElement(
                                                    'div',
                                                    null,
                                                    n().createElement(Zr, {
                                                        level: b,
                                                        baseUnlockProps: W,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: H,
                                                    }),
                                                ),
                                            ),
                                        a &&
                                            !L &&
                                            n().createElement(
                                                G.u,
                                                { contentId: gn.tooltips.BattlePassLockIconTooltipView('resId') },
                                                n().createElement(
                                                    'div',
                                                    { className: cn },
                                                    n().createElement(Zr, {
                                                        level: b,
                                                        baseUnlockProps: W,
                                                        playUnlockAnimation: a,
                                                        handleUnlockAnimationExited: H,
                                                    }),
                                                    g.current === f.IN_PROGRESS &&
                                                        n().createElement(sn, { baseUnlockProps: W }),
                                                ),
                                            ),
                                    ),
                                M && n().createElement('div', { className: bn }, n().createElement(Qr, null)),
                            );
                        },
                    ),
                    hn = 'CardContent_base_ca1bb',
                    fn = 'CardContent_status_a8030',
                    Cn = 'CardContent_buttonHolder_ed05d',
                    An = 'CardContent_buttonLight_dc5a2',
                    wn = 'CardContent_buttonInner_e781b',
                    Bn = 'CardContent_buttonInner__disabled_ccd6c',
                    Dn = 'CardContent_button_feb73',
                    Fn = 'CardContent_button__disabled_db6e3',
                    yn = 'CardContent_buttonBlink_fc9d6',
                    Pn = 'CardContent_buttonText_f9bb4';
                var Sn = a(2486),
                    Nn = a(4692),
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
                function xn() {
                    return (
                        (xn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        xn.apply(null, arguments)
                    );
                }
                const Ln = (0, g.Om)((e) => {
                        const t = e.item,
                            a = e.name,
                            r = e.value,
                            n = e.overlayType,
                            s = e.tooltipId,
                            i = e.tooltipContentId;
                        return {
                            id: e.id,
                            icon: e.icon,
                            name: t || a,
                            smallImage: (0, Nn.ry)(e, Sn.h2.Big),
                            bigImage: (0, Nn.ry)(e, Sn.h2.S180x135),
                            special: n,
                            value: r,
                            valueType: (0, Nn.p3)(a),
                            tooltipArgs: (0, Nn.pI)({ tooltipId: s }, Number(i), { ignoreShowDelay: !0 }),
                        };
                    }),
                    In = (0, u.Pi)(({ isPremium: e, levelNum: t, hasAnimation: a }) => {
                        const s = (0, Qe.GS)().mediaSize,
                            i = y(),
                            o = i.model,
                            u = i.controls,
                            l = o.computes.cardStates(t, e).cardStatus,
                            c = o.computes.isRewardNeedTake(t, e),
                            d = o.computes.levelRewardItems(t, !0),
                            _ = o.computes.levelRewardItems(t, !1),
                            m = e ? _ : d,
                            b = (0, r.useState)(m),
                            E = b[0],
                            g = b[1],
                            h = l.current === f.IN_PROGRESS,
                            C = (0, r.useRef)(!1);
                        (0, r.useEffect)(() => {
                            if (C.current) return (0, Se.F)(() => g(m), 1e3);
                            C.current = !0;
                        }, [m, C]);
                        return n().createElement(
                            'div',
                            {
                                className: S()(
                                    Rn.base,
                                    h && Rn.base__inProgress,
                                    e && Rn.base__reverse,
                                    a && Rn.base__animated,
                                    1 === m.length && Rn.base__single,
                                    2 === m.length && Rn.base__column,
                                    3 === m.length && (h ? Rn.base__tripleInProgress : Rn.base__tripleDefault),
                                ),
                            },
                            p.UI(E, (e, t) => {
                                const r = Ln(e),
                                    i =
                                        r.name.includes(Sn.E4.StyleProgressToken) ||
                                        r.name.includes(Sn.E4.BattlePassSelectToken),
                                    o = (c && i) || a,
                                    l = ((e) => {
                                        const t = s < Qe.cJ.Medium;
                                        return m.length > 1
                                            ? t
                                                ? { size: Sn.h2.Small, image: e.smallImage }
                                                : { size: Sn.h2.Big, image: e.smallImage }
                                            : t
                                              ? { size: Sn.h2.Big, image: e.smallImage }
                                              : { size: Sn.h2.S180x135, image: e.bigImage };
                                    })(r),
                                    d = l.size,
                                    _ = l.image;
                                return n().createElement(
                                    'div',
                                    { key: `reward__${r.name}${t}`, className: S()(Rn.reward, Rn[`reward__${t}`]) },
                                    o && n().createElement('div', { className: Rn.shine }),
                                    a &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', { className: Rn.staticShine }),
                                            n().createElement('div', { className: Rn.explosion }),
                                        ),
                                    n().createElement(kn.Q, xn({ size: d, image: _, className: Rn.rewardInner }, r)),
                                    r.icon === v.Hj.style &&
                                        n().createElement(
                                            'div',
                                            { className: Rn.preview },
                                            n().createElement(W.h, {
                                                type: 'preview',
                                                size: 'normal',
                                                className: Rn.iconButton,
                                                onClick: () => u.onStyleBonusPreview(r.id),
                                            }),
                                        ),
                                );
                            }),
                        );
                    }),
                    Tn = 'CardRewards_base_aa62c',
                    On = 'CardRewards_base__completed_a37c7',
                    Mn = (0, u.Pi)(({ levelNum: e, isRewardAnimationActive: t, isPremium: a = !1 }) => {
                        const r = y().model,
                            s = r.computes.cardStates(e, a),
                            i = s.cardStatus,
                            o = s.isDisabled,
                            u = r.computes.isRewardNeedTake(e, a),
                            l = i.current === f.COMPLETED && !u && !o && !t;
                        return n().createElement(
                            'div',
                            { className: S()(Tn, l && On) },
                            n().createElement(In, { levelNum: e, isPremium: a, hasAnimation: t }),
                        );
                    });
                function $n() {
                    return (
                        ($n = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        $n.apply(null, arguments)
                    );
                }
                const Hn = 100,
                    Wn = 1800,
                    zn = R.strings.battle_pass.progression,
                    Gn = (0, u.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            onFinalAnimationDone: a,
                            maxVisibleCards: s,
                            showLevelsAnimations: i,
                            showBuyAnimations: o,
                        }) => {
                            const u = y(),
                                l = u.model,
                                c = u.controls,
                                d = c.finishAnimation,
                                _ = c.takeReward,
                                m = l.root.get(),
                                b = m.isBattlePassPurchased,
                                E = m.currentLevel,
                                p = m.previousLevel,
                                g = l.computes.levelInfo(t),
                                v = g.needTakePaid,
                                h = g.needTakeFree,
                                C = g.isFreeRewardChoiceEnabled,
                                A = g.isPaidRewardChoiceEnabled,
                                w = l.computes.cardStates(t, e).cardStatus,
                                B = l.computes.isRewardNeedTake(t, e),
                                D = w.current === f.IN_PROGRESS,
                                F = w.current === f.COMPLETED,
                                P = (0, r.useState)(!1),
                                N = P[0],
                                k = P[1],
                                R = (0, r.useState)(!1),
                                x = R[0],
                                L = R[1],
                                I = (0, Qe.GS)().mediaSize <= Qe.cJ.Small ? pe.qE.extraSmall : pe.qE.small,
                                T = (0, r.useRef)(B),
                                O = T.current;
                            ((0, r.useEffect)(() => {
                                T.current = B;
                            }),
                                (0, r.useEffect)(() => {
                                    if (O && !B) {
                                        const e = (0, Se.F)(() => {
                                                (k(!1), d());
                                            }, Wn),
                                            t = (0, Se.F)(() => {
                                                L(!1);
                                            }, 2300);
                                        return (
                                            k(!0),
                                            L(!0),
                                            () => {
                                                (e(), t());
                                            }
                                        );
                                    }
                                }, [B]));
                            const M = (() => {
                                    let r,
                                        n = 0,
                                        u = 0,
                                        l = 0,
                                        c = 0,
                                        d = !1,
                                        _ = !1,
                                        m = !1,
                                        g = 300 * Math.ceil(E / 25);
                                    if (s && o && b) {
                                        const e = Math.floor(0.5 * s);
                                        let a = E - e,
                                            r = E + e,
                                            i = 0;
                                        a <= 0 && ((i = 1 - a), (r += i), (a = 1));
                                        const o = t < E && t >= a,
                                            l = t > E && t <= r,
                                            b = t === a;
                                        (o ? (n = (t - a + 1) * Hn) : l && (n = (t - a) * Hn),
                                            (d = Boolean(D || o || l || b)),
                                            (_ = Boolean(D || b)),
                                            (m = Boolean(F && d)),
                                            (u = (s - i - 1) * Hn),
                                            D && (c = (t - a + 1) * Hn * 2.5));
                                    }
                                    if (s && i) {
                                        const n = Math.min(E - p, Math.floor(0.5 * s));
                                        let o = E - n;
                                        o <= 0 && (o = 1);
                                        const c = t < E && t >= o;
                                        (c && ((u = (t - o + 1) * Hn), e && (u += Hn)),
                                            (m = Boolean(F && c)),
                                            (l = n * Hn + Hn * Math.trunc(n / 2) + g),
                                            i && (r = a));
                                    }
                                    return (
                                        x && ((g = 0), (u = Wn), (m = Boolean(F))),
                                        t === E - 1 && (r = a),
                                        {
                                            baseTimeout: c,
                                            playCompleteAnimation: m,
                                            playCompleteAnimationSound: m,
                                            playUnlockAnimation: d,
                                            playUnlockAnimationSound: _,
                                            unlockAnimationDelay: n,
                                            onAnimationDone: r,
                                            completeAnimationDelay: u,
                                            stageAnimationDelay: l,
                                            initialAnimationDelay: g,
                                        }
                                    );
                                })(),
                                $ = (0, Nr.z)(() => {
                                    _({ level: t });
                                }),
                                H = h || v,
                                W = H && !(C || A);
                            return n().createElement(
                                'div',
                                { className: hn },
                                !e &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(Lr, {
                                            stepNumber: t,
                                            stageAnimationDelay: M.stageAnimationDelay,
                                            isRewardAnimationActive: N,
                                        }),
                                        H &&
                                            n().createElement(
                                                z.i,
                                                { isEnabled: W, body: zn.btnRewardsUnavailable() },
                                                n().createElement(
                                                    'div',
                                                    { className: Cn },
                                                    !W && n().createElement('div', { className: An }),
                                                    n().createElement(
                                                        'div',
                                                        { className: S()(wn, W && Bn) },
                                                        n().createElement(
                                                            pe.u5,
                                                            {
                                                                type: pe.L$.ghost,
                                                                size: I,
                                                                disabled: W,
                                                                onClick: $,
                                                                mixClass: S()(Dn, W && Fn),
                                                            },
                                                            !W && n().createElement('div', { className: yn }),
                                                            n().createElement(
                                                                'div',
                                                                { className: Pn },
                                                                zn.takeReward(),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                    ),
                                n().createElement(Mn, { levelNum: t, isPremium: e, isRewardAnimationActive: N }),
                                n().createElement(
                                    'div',
                                    { className: fn },
                                    n().createElement(
                                        vn,
                                        $n({ isPremium: Boolean(e), completedDuration: 500, level: t }, M),
                                    ),
                                ),
                            );
                        },
                    ),
                    Un = {
                        base: 'Divider_base_d00f8',
                        base__left: 'Divider_base__left_e2049',
                        base__right: 'Divider_base__right_a9feb',
                        base__rare: 'Divider_base__rare_b484e',
                        base__completed: 'Divider_base__completed_ef61e',
                        base__premium: 'Divider_base__premium_e6eae',
                        inner: 'Divider_inner_cbff9',
                    },
                    Vn = ({ position: e, isPremium: t = !1, isRare: a = !1, status: r }) =>
                        n().createElement(
                            'div',
                            {
                                className: S()(
                                    Un.base,
                                    Un[`base__${r}`],
                                    Un[`base__${e}`],
                                    a && Un.base__rare,
                                    t && Un.base__premium,
                                ),
                            },
                            n().createElement('div', { className: Un.inner }),
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
                    qn = (0, u.Pi)(
                        ({
                            isPremium: e,
                            stepNumber: t,
                            maxLevels: a,
                            maxVisibleCards: s,
                            showBuyAnimations: i,
                            showLevelsAnimations: o,
                            onAnimationDone: u,
                            levelRef: l,
                        }) => {
                            const c = y().model,
                                _ = c.root.get(),
                                m = _.currentPointsInLevel,
                                b = _.chapterState,
                                E = c.computes.cardStates(t, e),
                                p = E.cardStatus,
                                g = E.isRare,
                                v = c.computes.levelInfo(t).levelPoints,
                                C = !e && (p.current === f.COMPLETED || p.current === f.IN_PROGRESS),
                                A = 1 === t,
                                w = t === a,
                                B = A ? void 0 : c.computes.cardStates(t - 1, e),
                                D = w ? void 0 : c.computes.cardStates(t + 1, e),
                                F = (0, r.useRef)(null),
                                P = e ? (t - 1) * v : v;
                            (0, r.useImperativeHandle)(l, () => ({
                                width: () => {
                                    const e = F.current;
                                    return e ? e.offsetWidth : void 0;
                                },
                                offsetLeft: () => {
                                    const e = F.current;
                                    return e ? e.offsetLeft : void 0;
                                },
                                getOffsetLeftInArea: () => {
                                    const e = F.current;
                                    if (!e) return 0;
                                    const t = e.parentNode,
                                        a = t ? t.offsetLeft : 0;
                                    return e.offsetLeft + a;
                                },
                                getHTMLElement: () => F.current,
                            }));
                            const N =
                                    !A &&
                                    ((p.current === f.NOT_STARTED && !g) ||
                                        ((null == B ? void 0 : B.isRare) && p.current !== f.IN_PROGRESS) ||
                                        (null == B ? void 0 : B.cardStatus.current) === f.IN_PROGRESS),
                                k =
                                    !w &&
                                    ((p.current === f.COMPLETED && !g) ||
                                        ((null == D ? void 0 : D.isRare) && p.current !== f.IN_PROGRESS) ||
                                        (null == D ? void 0 : D.cardStatus.current) === f.IN_PROGRESS),
                                R = ((e, t, a, r) =>
                                    e === f.COMPLETED
                                        ? 100
                                        : e !== f.IN_PROGRESS || (t !== d.NotStarted && t !== d.Paused)
                                          ? 0
                                          : (100 * a) / r)(p.current, b, m, P),
                                x = { width: `${R}%` },
                                L = {
                                    '--small-card-width': '140rem',
                                    '--small-current-card-width': '224rem',
                                    '--big-card-width': '220rem',
                                    '--big-current-card-width': '340rem',
                                };
                            return n().createElement(
                                'div',
                                {
                                    className: S()(jn.base, jn[`base__${p.current}`], !e && jn.base__nonPremium),
                                    ref: F,
                                    style: L,
                                },
                                n().createElement(Sr, { level: t, isPremium: e }),
                                n().createElement(Gn, {
                                    isPremium: e,
                                    stepNumber: t,
                                    maxVisibleCards: s,
                                    showLevelsAnimations: o,
                                    showBuyAnimations: i,
                                    onFinalAnimationDone: u,
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
                                        w &&
                                            n().createElement(
                                                'div',
                                                { className: S()(jn.totalPoints, jn.totalPoints__final) },
                                                a * v,
                                            ),
                                    ),
                                C && n().createElement('div', { className: jn.progressShadow, style: x }),
                                !N &&
                                    n().createElement(Vn, {
                                        position: h.left,
                                        isPremium: e,
                                        isRare: g,
                                        status: p.current,
                                    }),
                                !k &&
                                    n().createElement(Vn, {
                                        position: h.right,
                                        isPremium: e,
                                        isRare: g,
                                        status: p.current,
                                    }),
                            );
                        },
                    ),
                    Zn = (0, u.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            isPremium: s,
                            sectionKey: i,
                            maxVisibleCards: o,
                        }) => {
                            const u = y().model,
                                l = u.root.get(),
                                c = l.chapterID,
                                d = l.currentLevel,
                                _ = l.potentialLevel,
                                m = l.showBuyAnimations,
                                b = l.showLevelsAnimations,
                                E = u.levels.get(),
                                g = (0, r.useState)(!1),
                                v = g[0],
                                h = g[1],
                                f = () => {
                                    h(!0);
                                },
                                C = Boolean(o && s && m),
                                A = Boolean(o && b),
                                w = (r, n, s) => (r === n ? e : r === s ? a : t);
                            return n().createElement(
                                'div',
                                { className: S()(_a.row, !s && _a.row__basic) },
                                p.UI(E, (e, t) =>
                                    n().createElement(qn, {
                                        key: `${c}_${i}_${t}`,
                                        showBuyAnimations: C && !v,
                                        showLevelsAnimations: A,
                                        levelRef: w(e.level, d, _),
                                        stepNumber: e.level,
                                        isPremium: s,
                                        maxLevels: E.length,
                                        maxVisibleCards: o,
                                        onAnimationDone: f,
                                    }),
                                ),
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
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        Xn.apply(null, arguments)
                    );
                }
                const Yn = 1,
                    Kn = (0, u.Pi)(
                        ({
                            currentCardRef: e,
                            freeProgressionCutCardRef: t,
                            potentialLevelCardRef: a,
                            onProgressChanged: s,
                            widget3dStyleLeftRef: i,
                            shadowLipRef: u,
                            api: l,
                        }) => {
                            const c = y().model,
                                d = c.root.get(),
                                _ = d.currentLevel,
                                m = d.currentPointsInLevel,
                                b = d.showLevelsAnimations,
                                E = c.computes.isLayoutWithExtraWidget(),
                                p = c.levels.get(),
                                g = (0, r.useRef)((0, Ma.MR)()),
                                v = (0, r.useRef)((0, Ma.MR)());
                            l.current.moveProgressBars = (e) => {
                                (g.current.update(e), v.current.update(e));
                            };
                            const h = (0, r.useState)({ levelWidth: 0, currentLevelWidth: 0, maxCardsShown: 0 }),
                                f = h[0],
                                C = h[1],
                                A = (0, r.useCallback)(() => {
                                    if (e.current) {
                                        const a = e.current,
                                            r = t.current,
                                            n = a ? a.width() : 0,
                                            s = r ? r.width() : 0;
                                        return !s && n
                                            ? { currentLevelWidth: n, levelWidth: 224 === n ? 140 : 220 }
                                            : { currentLevelWidth: n, levelWidth: s };
                                    }
                                }, [e, t]),
                                w = (0, Qe.GS)().mediaSize;
                            return (
                                (0, r.useEffect)(() => {
                                    (0, j.Eu)().then(() => {
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
                                }, [w, A, p.length, _, m]),
                                (0, r.useEffect)(() => {
                                    b && (0, o.G)(R.sounds.bp_progress_bar_start());
                                }, [b]),
                                (0, r.useEffect)(() => {
                                    s && s();
                                }, [_, m, s]),
                                n().createElement(
                                    'div',
                                    { className: _a.wrapper },
                                    !E &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement(rr, { widget3dStyleRef: i, level: Yn, isShowTitle: !0 }),
                                            n().createElement(
                                                'div',
                                                { className: S()(_a.decor, _a.decor__left) },
                                                n().createElement('div', { className: _a.decorBackground }),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: _a.bookmarkBackground, ref: u },
                                                n().createElement(Oa, {
                                                    isDisappeared: !0,
                                                    mixClass: _a.bookmarkLeftResponsive,
                                                }),
                                            ),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: _a.section },
                                        n().createElement(Zn, {
                                            sectionKey: 'baseCard',
                                            currentCardRef: e,
                                            freeProgressionCutCardRef: t,
                                            potentialLevelCardRef: a,
                                            maxVisibleCards: b ? f.maxCardsShown : 0,
                                            currentLevel: _,
                                        }),
                                        n().createElement(
                                            cr,
                                            Xn({ progressApi: g, freePointsApi: v, progressChange: s }, f),
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
                                    !E &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement(
                                                'div',
                                                { className: _a.decor },
                                                n().createElement('div', { className: _a.decorBackground }),
                                            ),
                                            n().createElement(rr, { level: 4 }),
                                        ),
                                )
                            );
                        },
                    );
                function Qn() {
                    return (
                        (Qn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        Qn.apply(null, arguments)
                    );
                }
                function Jn(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                const es = { allowedButtons: [ga.MainButton] },
                    ts = R.strings.battle_pass.progression;
                let as = (function (e) {
                    return (
                        (e.Hidden = 'hidden'),
                        (e.NavToCurrentLevel = 'navToCurrentLevel'),
                        (e.NavToPotentialLevel = 'navToPotentialLevel'),
                        e
                    );
                })({});
                const rs = ['dragStart', 'dragEnd', 'dragging'],
                    ns = (0, u.Pi)(({ onHorizontalScroll: e }) => {
                        const t = y().model,
                            a = t.levels.get(),
                            i = t.root.get(),
                            o = i.currentLevel,
                            u = i.isBattlePassPurchased,
                            l = i.showBuyAnimations,
                            c = (0, r.useRef)({ moveProgressBars: () => {} }),
                            d = (0, r.useRef)(null),
                            _ = (0, r.useRef)(null),
                            m = (0, r.useRef)(null),
                            b = (0, r.useRef)(null),
                            E = (0, r.useRef)(null),
                            p = (0, r.useRef)(null),
                            g = (0, r.useRef)(null),
                            v = (0, r.useRef)(0),
                            h = t.computes.isLayoutWithExtraWidget(),
                            f = (0, r.useState)(as.Hidden),
                            C = f[0],
                            B = f[1],
                            D = (0, r.useState)(as.Hidden),
                            F = D[0],
                            P = D[1],
                            N = (0, r.useState)(!1),
                            k = N[0],
                            R = N[1],
                            x = (0, r.useState)(void 0),
                            L = x[0],
                            I = x[1],
                            T = (0, ba.T5)(),
                            O = T.animationScroll.scrollPosition,
                            M = T.applyScroll,
                            $ = T.events,
                            H = T.handleMouseWheel,
                            W = T.getContainerSize,
                            z = T.getWrapperSize,
                            G = (function (e, t, a) {
                                const n = e.contentRef,
                                    s = e.wrapperRef,
                                    i = e.scrollPosition,
                                    o = e.clampPosition,
                                    u = e.animationScroll,
                                    l = e.events,
                                    c = (0, r.useState)(pa),
                                    d = c[0],
                                    _ = c[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = n.current;
                                        e && (e.style.cursor = d.type === Ea.Dragging ? 'move' : 'grab');
                                    }, [n, d.type]),
                                    (0, r.useEffect)(() => {
                                        if (d.type !== Ea.Dragging) return;
                                        const e = (e) => {
                                            const a = n.current,
                                                r = s.current;
                                            if (!a || !r) return;
                                            const l = d.positionFrom - e.screenX,
                                                c = d.previousScrollPosition + l;
                                            i.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: o(a, c),
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
                                    }, [u.scrollPosition, o, n, d, i, s, t, a]),
                                    (0, r.useEffect)(() => {
                                        if (d.type !== Ea.End) return;
                                        const e = () => {
                                            _(pa);
                                        };
                                        return (u.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e));
                                    }, [u.scrollPosition, d.type, l]),
                                    (0, r.useEffect)(() => {
                                        const e = n.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            (a &&
                                                a.allowedButtons &&
                                                -1 === a.allowedButtons.findIndex((t) => e.button === t)) ||
                                                _({
                                                    type: Ea.Dragging,
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: u.scrollPosition.get(),
                                                });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [u.scrollPosition, n, a]),
                                    [d, _]
                                );
                            })(T, void 0, es),
                            U = G[0],
                            V = G[1],
                            q = (e) => {
                                (U.type === Ea.Dragging && V({ type: Ea.End }), H(e));
                            },
                            Z = (0, r.useMemo)(() => Object.assign({}, T, { handleMouseWheel: q }), []),
                            X = (0, r.useCallback)(
                                (e) => {
                                    const t = b.current ? b.current.offsetWidth : 0,
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
                                const n = b.current ? b.current.offsetWidth : 0,
                                    s = E.current ? E.current.offsetWidth : 0;
                                t && ((a = t.width()), (r = t.offsetLeft() + n + s));
                                const i = d.current;
                                let o = 0;
                                if (a && i) {
                                    const t = 0.5 * i.offsetWidth;
                                    e && v.current
                                        ? (o = r + a - 0.5 * v.current - t)
                                        : ((o = r + 0.5 * a - t), (v.current = a));
                                }
                                return ((o = Math.round(o < 0 ? 0 : o)), o);
                            }, []),
                            K = () => {
                                const e = d.current,
                                    t = _ && _.current,
                                    a = m.current,
                                    r = b.current ? b.current.offsetWidth : 0,
                                    n = E.current ? E.current.offsetWidth : 0;
                                if (t) {
                                    const s = t.offsetLeft() + r + n,
                                        i = (null == a ? void 0 : a.offsetLeft()) + r + n,
                                        o =
                                            O.goal < s - e.offsetWidth
                                                ? as.NavToCurrentLevel
                                                : a && O.goal < i - e.offsetWidth
                                                  ? as.NavToPotentialLevel
                                                  : as.Hidden,
                                        u = (() => {
                                            switch (!0) {
                                                case a && O.goal > i + a.width():
                                                    return as.NavToPotentialLevel;
                                                case O.goal > s + t.width():
                                                    return as.NavToCurrentLevel;
                                                default:
                                                    return as.Hidden;
                                            }
                                        })();
                                    (B(o), P(u));
                                }
                            },
                            Q = (e) => {
                                const t = ((e) => {
                                    let t = 0;
                                    if (e && e.current && d && d.current) {
                                        const a = e.current,
                                            r = b.current ? b.current.offsetWidth : 0,
                                            n = E.current ? E.current.offsetWidth : 0;
                                        let s = 0,
                                            i = 0;
                                        a && ((s = a.width()), (i = a.offsetLeft() + r + n));
                                        const o = d.current;
                                        (s && o && (t = i + 0.5 * s - 0.5 * o.offsetWidth),
                                            (t = Math.round(t < 0 ? 0 : t)));
                                    }
                                    return t;
                                })(e);
                                (X(O.goal), M(t), K());
                            },
                            J = (e) => {
                                switch (e) {
                                    case as.NavToCurrentLevel:
                                        return Q(_);
                                    case as.NavToPotentialLevel:
                                        return Q(m);
                                }
                            },
                            ee = (e) => {
                                switch (e) {
                                    case as.NavToCurrentLevel:
                                        return { type: w.Default, tooltipBody: ts.backToCurrentStageArrow.descr() };
                                    case as.NavToPotentialLevel:
                                        return { type: w.Gray, tooltipBody: ts.backToPotentialStageArrow.descr() };
                                }
                            },
                            te = (e) => {
                                (X(O.goal), K(), I(null == e ? void 0 : e.type));
                            };
                        return (
                            (0, r.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        u && l && M(Y());
                                    }),
                                [M, Y, u, l],
                            ),
                            (0, r.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                const e = W(),
                                                    t = O.goal;
                                                (yield (0, j.Eu)(), yield (0, kt.nS)());
                                                const a = W(),
                                                    r = d.current,
                                                    n = T.getBounds()[1],
                                                    s = 0.25 * r.offsetWidth,
                                                    i = a && e && a !== e ? (t * a) / e : t;
                                                (X(i), M(i > n - s ? n : i));
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (r, n) {
                                                    var s = e.apply(t, a);
                                                    function i(e) {
                                                        Jn(s, r, n, i, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Jn(s, r, n, i, o, 'throw', e);
                                                    }
                                                    i(void 0);
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
                            (0, r.useEffect)(() => (0, Se.F)(() => Q(_), 700), [o]),
                            (0, r.useEffect)(() => {
                                if (((e = '') => rs.includes(e))(L)) return void e('dragStart' === L);
                                const t = () => {
                                        L || X(O.goal);
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
                            }, [$, X, e, O.goal, L]),
                            n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(
                                    'div',
                                    { className: S()(_a.bookmark, _a.bookmark__start) },
                                    n().createElement(Oa, {
                                        chapterStep: a.length,
                                        mixClass: S()(_a.bookmarkLeftFixed, k && _a.bookmarkLeftFixed__active),
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: _a.scrollWrapper, ref: d, onClick: te, onMouseLeave: K, onWheel: te },
                                    n().createElement(
                                        ma.X.Horizontal.Area.Default,
                                        { api: Z, barClassNames: { base: _a.scrollBarPosition }, onDrag: te },
                                        n().createElement(Kn, {
                                            api: c,
                                            currentCardRef: _,
                                            freeProgressionCutCardRef: p,
                                            potentialLevelCardRef: m,
                                            separatorRef: g,
                                            widget3dStyleLeftRef: b,
                                            shadowLipRef: E,
                                            onProgressChanged: te,
                                        }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        className: S()(
                                            _a.scrollToButton,
                                            _a.scrollToButton__backward,
                                            F !== as.Hidden && _a.scrollToButton__visible,
                                        ),
                                    },
                                    n().createElement(
                                        fa,
                                        Qn(
                                            { onClick: () => J(F), direction: A.back, className: _a.arrowButton },
                                            ee(F),
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    {
                                        className: S()(
                                            _a.scrollToButton,
                                            _a.scrollToButton__forward,
                                            C !== as.Hidden && _a.scrollToButton__visible,
                                        ),
                                    },
                                    n().createElement(
                                        fa,
                                        Qn(
                                            { onClick: () => J(C), direction: A.forward, className: _a.arrowButton },
                                            ee(C),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    ss = (0, u.Pi)(() => {
                        const e = y().model.computes.isLayoutWithExtraWidget(),
                            t = (0, r.useState)(!1),
                            a = t[0],
                            s = t[1],
                            i = S()(_a.additionalShadow, a && _a.additionalShadow__active);
                        return n().createElement(
                            'div',
                            { className: S()(_a.base, e && _a.base__isLayoutWithExtraWidget) },
                            n().createElement(
                                'div',
                                { className: S()(_a.shadow, _a.shadow__left) },
                                n().createElement('div', { className: i }),
                            ),
                            n().createElement(
                                'div',
                                { className: S()(_a.shadow, _a.shadow__right) },
                                n().createElement('div', { className: i }),
                            ),
                            n().createElement(ns, {
                                onHorizontalScroll: (e) => {
                                    s(e);
                                },
                            }),
                        );
                    }),
                    is = (0, u.Pi)(() => {
                        const e = y().model,
                            t = e.root,
                            a = e.computes,
                            r = t.get(),
                            s = r.chapterType,
                            i = r.chapterID,
                            o = r.actionType,
                            u = r.isPaused,
                            l = a.isLayoutWithExtraWidget(),
                            c = s === m.EXTRA,
                            d = o !== _.NoAction,
                            b = S()(T, l && O);
                        return n().createElement(
                            'div',
                            { className: S()(k, l && x, c && L), style: (0, N.W4)(i) },
                            !u && n().createElement('div', { className: b }, n().createElement(ss, null)),
                            n().createElement('div', { className: I }, n().createElement(da, null)),
                            n().createElement('div', { className: $ }, d && n().createElement(Nt, null)),
                            l && n().createElement('div', { className: M }, n().createElement(At, null)),
                        );
                    }),
                    os = 'BattlePassProgressionsViewApp_base_aafe6',
                    us = (0, u.Pi)(() => {
                        const e = y(),
                            t = e.model,
                            a = e.controls,
                            u = t.root.get().showReplaceRewardsAnimations,
                            d = (0, c.tv)();
                        return (
                            l.N.useHandleKeydown(i.n.ESCAPE, () => d.goBack()),
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
                                    (0, s.v)(() => {
                                        a.viewLoad();
                                    }),
                                [],
                            ),
                            (0, r.useEffect)(() => {
                                u && (0, o.G)(R.sounds.bp_pick_up_award());
                            }, [u]),
                            n().createElement('div', { className: os }, n().createElement(is, null))
                        );
                    }),
                    ls = () =>
                        n().createElement(
                            F,
                            { options: { rootId: R.aliases.battle_pass.Progression('resId') } },
                            n().createElement(us, null),
                        );
            },
            8218: (e, t, a) => {
                'use strict';
                a.d(t, { e: () => Re });
                var r = a(7363),
                    n = a.n(r),
                    s = a(768),
                    i = a(5090),
                    o = a(9723),
                    u = a(8739),
                    l = a(5369);
                const c = (0, i.q3)()(
                        ({ observableModel: e }) => {
                            const t = e.array('chapters'),
                                a = { root: e.object(), chapters: t },
                                r = (0, l.Om)(() => u.G(t.get(), ({ isExtra: e }) => e)),
                                n = (0, l.Om)(() => u.G(t.get(), ({ chapterState: e }) => e === s.l.Active)),
                                i = (0, l.Om)(() => u.yW(t.get(), ({ chapterState: e }) => e === s.l.Completed)),
                                c = (0, l.Om)((e) => u.sE(t.get(), (t) => t.chapterID === e), { equals: o.jv }),
                                d = (0, l.Om)((e) => {
                                    const a = u.sE(t.get(), (t) => t.chapterID === e);
                                    return {
                                        levelProgression: (null == a ? void 0 : a.levelProgression) || 0,
                                        currentLevel: (null == a ? void 0 : a.currentLevel) || 0,
                                    };
                                }),
                                _ = (0, l.Om)(() => u.hX(a.chapters.get(), (e) => !e.isExtra), { equals: o.jv }),
                                m = (0, l.Om)(() => u.hX(_(), (e) => e.chapterState === s.l.Completed).length, {
                                    equals: o.jv,
                                }),
                                b = (0, l.Om)(() => u.hX(a.chapters.get(), (e) => e.isExtra)),
                                E = [2];
                            return Object.assign({}, a, {
                                computes: {
                                    getChapterById: c,
                                    getProgressionInfoByChapterId: d,
                                    hasExtra: r,
                                    hasActive: n,
                                    isCompleted: i,
                                    regularChapters: _,
                                    extraChapters: b,
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
                var m = a(9279),
                    b = a(8978),
                    E = a(4020),
                    p = a(2041),
                    g = a(9994),
                    v = a(8862);
                const h = 'App_base_b06dc',
                    f = 'App_additionalBackground_b721c',
                    C = 'App_infoButtons_c3097',
                    A = 'App_header_d1475';
                var w = a(9849),
                    B = a.n(w),
                    D = a(8925),
                    F = a(5603),
                    y = a(7436),
                    P = a(6485),
                    S = a(9659),
                    N = a(4029),
                    k = a(1705),
                    x = a(1623),
                    L = a(5278),
                    I = a(4490),
                    T = a(3927);
                const O = 'Shield_base_ae9ae',
                    M = 'Shield_flag_e5ec5',
                    $ = 'Shield_flag__isChapterChosen_c8b0f',
                    H = 'Shield_flag__medium_de411',
                    W = 'Shield_emblem_c90b7',
                    z = 'Shield_chapterLogoIcon_e4a36',
                    G = (0, p.Pi)(({ size: e, chapterID: t = 0 }) => {
                        const a = _().model,
                            r = a.root.get().seasonNum,
                            i = a.computes.getChapterById(t);
                        if (!i) return null;
                        const o = i.isBought,
                            u = i.isExtra,
                            l = i.chapterState,
                            c = a.computes.getProgressionInfoByChapterId(t),
                            d = c.currentLevel,
                            m = c.levelProgression,
                            b = { level: d, to: m, from: m },
                            E = l === s.l.Completed ? I.Bq.Completed : o ? I.Bq.Bought : I.Bq.Free,
                            p = l === s.l.Active,
                            g = (0, L.UP)(b) || l !== s.l.NotStarted,
                            v = g && E !== I.Bq.Completed;
                        return n().createElement(
                            'div',
                            { className: O },
                            n().createElement('div', {
                                className: B()(M, e === I.$u.Medium && H, v && $),
                                style: (0, k.fW)(t, e),
                            }),
                            n().createElement(
                                'div',
                                { className: W },
                                n().createElement(T.G4, {
                                    progression: b,
                                    size: e,
                                    chapterID: t,
                                    seasonNum: r,
                                    battlePassState: E,
                                    hasBattlePass: o,
                                    hasBeenActive: g,
                                    isChapterSelection: !0,
                                    isOpen: v,
                                    isChapterChosen: p,
                                    showProgressBar: p,
                                    isExtra: u,
                                }),
                                v && n().createElement('div', { className: z, style: (0, k.cs)(t, o, e) }),
                            ),
                        );
                    }),
                    U = {
                        base: 'Chapter_base_b358b',
                        base__qHDSize: 'Chapter_base__qHDSize_bb6a7',
                        bg: 'Chapter_bg_ddaa3',
                        base__paused: 'Chapter_base__paused_d7bba',
                        base__notStarted: 'Chapter_base__notStarted_ac9a4',
                        base__completed: 'Chapter_base__completed_d3947',
                        bgHover: 'Chapter_bgHover_e90e3',
                        border: 'Chapter_border_dde17',
                        frame: 'Chapter_frame_ee243',
                        content: 'Chapter_content_adf51',
                        vehicleImg: 'Chapter_vehicleImg_e52e6',
                        shieldWrapper: 'Chapter_shieldWrapper_cb058',
                        shield: 'Chapter_shield_ef159',
                        shieldShine: 'Chapter_shieldShine_d13e4',
                        rotate: 'Chapter_rotate_c2563',
                        completedIcon: 'Chapter_completedIcon_a9a6e',
                        title: 'Chapter_title_eb8fe',
                        content__extraChapterContent: 'Chapter_content__extraChapterContent_ceaac',
                        base__active: 'Chapter_base__active_aedef',
                        vehicleStyle: 'Chapter_vehicleStyle_e804b',
                        preview: 'Chapter_preview_ac04f',
                        previewWrapper: 'Chapter_previewWrapper_a907e',
                        styleTitle: 'Chapter_styleTitle_ddc40',
                        vehicleTitle: 'Chapter_vehicleTitle_d4cba',
                        crewTitle: 'Chapter_crewTitle_a3ccc',
                        crewSubtitle: 'Chapter_crewSubtitle_c8510',
                        vehicleInHangar: 'Chapter_vehicleInHangar_ffa30',
                        extraLevel: 'Chapter_extraLevel_c209f',
                        extraName: 'Chapter_extraName_db0c8',
                        level: 'Chapter_level_a9c70',
                        name: 'Chapter_name_b1882',
                        fadeOut: 'Chapter_fadeOut_bea74',
                        fadeIn: 'Chapter_fadeIn_d2fe6',
                        fadeInWithScale: 'Chapter_fadeInWithScale_c05ca',
                        slideUp: 'Chapter_slideUp_fc3c8',
                        scale: 'Chapter_scale_bce33',
                    };
                var V = a(2317);
                function j() {
                    return (
                        (j = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        j.apply(null, arguments)
                    );
                }
                const q = R.strings.battle_pass,
                    Z = (0, p.Pi)(({ chapterID: e }) => {
                        const t = _(),
                            a = t.model,
                            i = t.controls,
                            o = a.computes.getChapterById(e);
                        if (!o) return null;
                        const l = (0, v.tv)(),
                            c = o.chapterState,
                            d = o.styleName,
                            m = o.isVehicleInHangar,
                            b = o.vehicleInfo,
                            E = o.finalRewardType,
                            p = o.tankmanNames,
                            g = o.isExtra,
                            h = (0, D.GS)(),
                            f = h.mediaSize,
                            C = h.remScreenWidth,
                            A = h.remScreenHeight,
                            w = (0, r.useCallback)(
                                (t) => {
                                    (i.openPreview(e), t.stopPropagation());
                                },
                                [e, i],
                            ),
                            R = (0, S.z)(() => {
                                (0, N.G)(L.r_.BP_HIGHLIGHT);
                            }),
                            T = f <= D.cJ.Medium ? I.$u.Small : I.$u.Medium,
                            O = C >= 2560 && A >= 1440,
                            M = c === s.l.Completed,
                            $ = c === s.l.Active,
                            H = q.chapter.fullNameUppercased.$num(e);
                        return n().createElement(
                            'div',
                            {
                                className: B()(U.base, U[`base__${c}`], O && U.base__qHDSize),
                                onMouseEnter: R,
                                onClick: () => {
                                    (N.$.playClick(), l.push(V._.battlePass.progression, { chapterID: e }));
                                },
                                style: { width: viewEnv.remToPx(ve[f]) },
                            },
                            n().createElement(
                                'div',
                                { className: U.bg, style: (0, k.TZ)(e) },
                                n().createElement('div', { className: U.vehicleImg, style: (0, k.OH)(e) }),
                                n().createElement('div', { className: U.bgHover }),
                                $ && n().createElement('div', { className: U.frame }),
                            ),
                            n().createElement(
                                'div',
                                { className: B()(U.content, g && U.content__extraChapterContent) },
                                n().createElement(
                                    'div',
                                    { className: U.shieldWrapper },
                                    $ && n().createElement('div', { className: U.shieldShine }),
                                    n().createElement(
                                        'div',
                                        { className: U.shield },
                                        n().createElement(G, { size: T, chapterID: e }),
                                    ),
                                ),
                                M && n().createElement('div', { className: U.completedIcon }),
                                n().createElement('div', { className: U.title }, H),
                                n().createElement(
                                    'div',
                                    { className: U.vehicleStyle },
                                    E !== s.E.Tankman &&
                                        n().createElement(
                                            'div',
                                            { className: U.preview },
                                            n().createElement(
                                                'div',
                                                { className: U.previewWrapper },
                                                n().createElement(y.h, {
                                                    type: 'preview',
                                                    onClick: w,
                                                    size: f < D.cJ.Medium ? 'small' : 'normal',
                                                }),
                                            ),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: U.styleTitle },
                                        ((e, t) => {
                                            switch (e) {
                                                case s.E.Style:
                                                    return n().createElement(F.z, {
                                                        text: q.chapterChoice.stylePreview.name(),
                                                        binding: { styleName: t },
                                                    });
                                                case s.E.Tankman:
                                                    return n().createElement(
                                                        'div',
                                                        { className: U.crewTitle },
                                                        n().createElement(F.z, {
                                                            text: q.chapterChoice.crewMember.reward(),
                                                        }),
                                                    );
                                                case s.E.Vehicle:
                                                    return n().createElement(F.z, {
                                                        text: q.chapterChoice.premiumVehicle.reward(),
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(E, d),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: U.vehicleTitle },
                                        ((e, t, a, r) => {
                                            const i = r
                                                ? { level: U.extraLevel, name: U.extraName }
                                                : { level: U.level, name: U.name };
                                            switch (e) {
                                                case s.E.Style:
                                                    return n().createElement(F.z, {
                                                        text: q.chapterChoice.stylePreview.forLabel(),
                                                        binding: {
                                                            vehicleName: n().createElement(
                                                                x.U4,
                                                                j({}, a, { classNames: i }),
                                                            ),
                                                        },
                                                    });
                                                case s.E.Tankman:
                                                    return n().createElement(F.z, {
                                                        classMix: U.crewSubtitle,
                                                        text: u.v_(t, q.common.comma()),
                                                    });
                                                case s.E.Vehicle:
                                                    return n().createElement(F.z, {
                                                        text: q.chapterChoice.stylePreview.extraLabel(),
                                                        binding: {
                                                            vehicleName: n().createElement(
                                                                x.U4,
                                                                j({}, a, { classNames: i }),
                                                            ),
                                                        },
                                                    });
                                                default:
                                                    return '';
                                            }
                                        })(E, p, b, g),
                                        E === s.E.Style &&
                                            m &&
                                            n().createElement(
                                                P.i,
                                                { body: q.chapterChoice.vehicleInHangar.tooltip.text() },
                                                n().createElement('div', { className: U.vehicleInHangar }),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    X = {
                        base: 'ChapterPostProgressionLine_base_d25a1',
                        circleShine: 'ChapterPostProgressionLine_circleShine_e8015',
                        base__hovered: 'ChapterPostProgressionLine_base__hovered_d0c77',
                        chapterLine: 'ChapterPostProgressionLine_chapterLine_a8450',
                        circle: 'ChapterPostProgressionLine_circle_d65e9',
                        circle__completed: 'ChapterPostProgressionLine_circle__completed_c5a4e',
                        verticalChapterLine: 'ChapterPostProgressionLine_verticalChapterLine_c1e5f',
                        verticalChapterLine__completed:
                            'ChapterPostProgressionLine_verticalChapterLine__completed_a3cb2',
                    },
                    Y = ({ chapterState: e, isButtonHovered: t }) => {
                        const a = (0, D.GS)().mediaSize,
                            r = viewEnv.remToPx(a <= D.cJ.Small ? 47 : 57),
                            i = e === s.l.Completed ? r + 1 : r,
                            o = viewEnv.remToPx(4);
                        return n().createElement(
                            'div',
                            { className: B()(X.base, t && X.base__hovered) },
                            e === s.l.Completed && n().createElement('div', { className: X.circleShine }),
                            n().createElement(
                                'svg',
                                {
                                    width: viewEnv.remToPx(8),
                                    height: i,
                                    viewBox: `0 0 ${viewEnv.remToPx(8)} ${i}`,
                                    className: X.chapterLine,
                                },
                                n().createElement('circle', {
                                    cx: o,
                                    cy: o,
                                    r: viewEnv.remToPx(3),
                                    strokeWidth: viewEnv.remToPx(1),
                                    className: B()(X.circle, X[`circle__${e}`]),
                                }),
                                n().createElement('line', {
                                    x1: o,
                                    x2: o,
                                    y1: viewEnv.remToPx(7),
                                    y2: i,
                                    strokeWidth: viewEnv.remToPx(e === s.l.Completed ? 2 : 1),
                                    className: B()(X.verticalChapterLine, X[`verticalChapterLine__${e}`]),
                                }),
                            ),
                        );
                    };
                var K = a(3925);
                const Q = {
                        base: 'SVGHorizontalLine_base_fbbc0',
                        horizontalChapterLine: 'SVGHorizontalLine_horizontalChapterLine_bd6ca',
                        base__active: 'SVGHorizontalLine_base__active_f2d22',
                        horizontalChapterLine__completed: 'SVGHorizontalLine_horizontalChapterLine__completed_d290b',
                    },
                    J = (0, p.Pi)(({ activateLine: e }) => {
                        const t = _().model.computes.chaptersLineInfo(),
                            a = (0, D.GS)().mediaSize;
                        return n().createElement(
                            'div',
                            { className: B()(Q.base, e && Q.base__active) },
                            n().createElement(
                                'svg',
                                { width: '100%', height: '100%', viewBox: '0 0 100% 100%' },
                                u.UI(t, ({ chapterID: e, chapterState: t }, r) =>
                                    n().createElement('line', {
                                        x1: te(a) * r + ae,
                                        x2: te(a) * (r + 1) + ae,
                                        y1: '0',
                                        y2: '0',
                                        strokeWidth: viewEnv.remToPx(t === s.l.Completed ? 4 : 2),
                                        key: `${e}_${r}`,
                                        className: B()(Q.horizontalChapterLine, Q[`horizontalChapterLine__${t}`]),
                                    }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        base: 'PostProgressionEntryPoint_base_e88f2',
                        buttonBlock: 'PostProgressionEntryPoint_buttonBlock_f50eb',
                        button: 'PostProgressionEntryPoint_button_db54f',
                        buttonText: 'PostProgressionEntryPoint_buttonText_a0226',
                        lockBlock: 'PostProgressionEntryPoint_lockBlock_c9b26',
                        lock: 'PostProgressionEntryPoint_lock_e36c2',
                        lockShine: 'PostProgressionEntryPoint_lockShine_ce692',
                        postProgressionText: 'PostProgressionEntryPoint_postProgressionText_ac1d7',
                        base__hovered: 'PostProgressionEntryPoint_base__hovered_d9a12',
                        completedChaptersCount: 'PostProgressionEntryPoint_completedChaptersCount_b352d',
                    },
                    te = (e) => viewEnv.remToPx(ve[e]),
                    ae = viewEnv.remToPx(4),
                    re = R.strings.battle_pass.chapterChoice.postProgression,
                    ne = (0, p.Pi)(({ setIsButtonHovered: e, isButtonHovered: t }) => {
                        const a = _().model,
                            r = (0, v.tv)(),
                            s = (0, D.GS)().mediaSize,
                            i = a.computes.regularChapters(),
                            o = a.computes.regularChaptersCompleteCount(),
                            u = o === i.length;
                        return n().createElement(
                            'div',
                            {
                                className: B()(ee.base, t && ee.base__hovered),
                                style: { width: (te(s) + ae) * (i.length - 1) },
                            },
                            n().createElement(J, { activateLine: t }),
                            n().createElement(
                                'div',
                                { className: ee.buttonBlock },
                                n().createElement(
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
                                            (r.push(V._.battlePass.postProgression), K.hY.sound('play'));
                                        },
                                    },
                                    n().createElement('div', { className: ee.buttonText }, re.button.text()),
                                    !u &&
                                        n().createElement(
                                            'div',
                                            { className: ee.lockBlock },
                                            n().createElement('div', { className: ee.lock }),
                                            n().createElement('div', { className: ee.lockShine }),
                                        ),
                                ),
                                o !== i.length &&
                                    n().createElement(
                                        'div',
                                        { className: ee.postProgressionText },
                                        n().createElement(F.z, {
                                            classMix: ee.text,
                                            text: re.text(),
                                            binding: {
                                                completedChaptersCount: n().createElement(
                                                    'span',
                                                    { className: ee.completedChaptersCount },
                                                    o,
                                                ),
                                                chaptersCount: i.length,
                                            },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    se = 'Separator_base_f234e',
                    ie = 'Separator_base__qHDSize_fc96c',
                    oe = 'Separator_line_d573c',
                    ue = 'Separator_line__top_d50f1',
                    le = 'Separator_line__bottom_c26a5',
                    ce = 'Separator_plus_de7af',
                    de = () => {
                        const e = (0, D.GS)(),
                            t = e.remScreenWidth,
                            a = e.remScreenHeight,
                            r = t >= 2560 && a >= 1440;
                        return n().createElement(
                            'div',
                            { className: B()(se, r && ie) },
                            n().createElement('div', { className: B()(oe, ue) }),
                            n().createElement('div', { className: ce }),
                            n().createElement('div', { className: B()(oe, le) }),
                        );
                    },
                    _e = 'Chapters_base_b3f7f',
                    me = 'Chapters_base__normal_c7055',
                    be = 'Chapters_base__extend_b7d8d',
                    Ee = 'Chapters_regular_dde08',
                    pe = 'Chapters_regularChapters_d8831',
                    ge = 'Chapters_chapterWrapper_b2435',
                    ve = {
                        [D.cJ.ExtraSmall]: 242,
                        [D.cJ.Small]: 242,
                        [D.cJ.Medium]: 376,
                        [D.cJ.Large]: 452,
                        [D.cJ.ExtraLarge]: 608,
                    },
                    he = (0, p.Pi)(() => {
                        const e = _().model,
                            t = e.computes.hasExtra(),
                            a = e.computes.regularChapters(),
                            s = e.computes.extraChapters(),
                            i = (0, r.useState)(!1),
                            o = i[0],
                            l = i[1];
                        return n().createElement(
                            'div',
                            { className: B()(_e, t ? be : me) },
                            n().createElement(
                                'div',
                                { className: Ee },
                                n().createElement(
                                    'div',
                                    { className: pe },
                                    u.UI(a, ({ chapterID: e, chapterState: t }, a) =>
                                        n().createElement(
                                            'div',
                                            { className: ge, key: a },
                                            n().createElement(Z, { chapterID: e }),
                                            n().createElement(Y, { chapterState: t, isButtonHovered: o }),
                                        ),
                                    ),
                                ),
                                n().createElement(ne, { isButtonHovered: o, setIsButtonHovered: l }),
                            ),
                            t && n().createElement(de, null),
                            u.UI(s, ({ chapterID: e }, t) =>
                                n().createElement(n().Fragment, { key: t }, n().createElement(Z, { chapterID: e })),
                            ),
                        );
                    }),
                    fe = 'Header_base_aca6d',
                    Ce = 'Header_title_bb612',
                    Ae = 'Header_base__qHDSize_a45c5',
                    we = 'Header_description_bb43d',
                    Be = 'Header_freePoints_a3e6e',
                    De = 'Header_freePointsInfo_cd5c9',
                    Fe = 'Header_freePointsCount_c3f13',
                    ye = 'Header_freePointsIcon_fe70c',
                    Pe = R.strings.battle_pass.chapterChoice.freePoints,
                    Se = (0, p.Pi)(({ title: e }) => {
                        const t = _().model,
                            a = t.root.get().freePoints,
                            r = !t.computes.isCompleted() && a > 0,
                            s = (0, D.GS)(),
                            i = s.remScreenWidth,
                            o = s.remScreenHeight,
                            u = i >= 2560 && o >= 1440;
                        return n().createElement(
                            'div',
                            { className: B()(fe, u && Ae) },
                            n().createElement('div', { className: Ce }, e),
                            n().createElement(
                                'div',
                                { className: we },
                                r &&
                                    n().createElement(
                                        'div',
                                        { className: Be },
                                        Pe.description(),
                                        n().createElement(
                                            P.i,
                                            { header: Pe.tooltip.title(), body: Pe.tooltip.description() },
                                            n().createElement(
                                                'div',
                                                { className: De },
                                                n().createElement('span', { className: Fe }, a),
                                                n().createElement('span', { className: ye }),
                                            ),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    Ne = R.strings.battle_pass,
                    ke = (0, p.Pi)(() => {
                        const e = _(),
                            t = e.model,
                            a = e.controls,
                            s = (0, v.tv)(),
                            i = a.openAbout,
                            o = a.openPointsInfo,
                            u = a.onViewLoaded,
                            l = t.computes.hasExtra(),
                            c = t.computes.hasActive(),
                            d = t.computes.isCompleted(),
                            p = (0, r.useState)(!1),
                            w = p[0],
                            B = p[1];
                        return (
                            g.N.useHandleKeydown(E.n.ESCAPE, () => {
                                s.goBack();
                            }),
                            (0, r.useEffect)(
                                () =>
                                    (0, b.v)(() => {
                                        w || (u(), B(!0));
                                    }),
                                [w, u],
                            ),
                            n().createElement(
                                'div',
                                { className: h },
                                l && n().createElement('div', { className: f }),
                                n().createElement(
                                    'div',
                                    { className: C },
                                    n().createElement(m.A, {
                                        caption: Ne.intro.aboutButton(),
                                        type: 'info',
                                        onClick: i,
                                    }),
                                    n().createElement(m.A, {
                                        caption: Ne.howToEarnPoints.title(),
                                        type: 'info',
                                        onClick: o,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: A },
                                    n().createElement(Se, {
                                        title: c || d ? Ne.chapterChoice.activeTitle() : Ne.chapterChoice.title(),
                                    }),
                                ),
                                n().createElement(he, null),
                            )
                        );
                    }),
                    Re = () =>
                        n().createElement(
                            d,
                            { options: { rootId: R.aliases.battle_pass.ChapterChoice('resId') } },
                            n().createElement(ke, null),
                        );
            },
            6734: (e, t, a) => {
                'use strict';
                a.d(t, { H: () => ke });
                var r = a(7363),
                    n = a.n(r),
                    s = a(5090),
                    i = a(9723),
                    o = a(5369);
                const u = (0, s.q3)()(
                        ({ observableModel: e }) => {
                            const t = { root: e.object(), nowRewards: e.array('rewards.nowRewards.items') },
                                a = (0, o.Om)(() => t.nowRewards.get(), { equals: i.jv });
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
                var d = a(9849),
                    _ = a.n(d),
                    m = a(5603),
                    b = a(8656),
                    E = a(4020),
                    p = a(828),
                    g = a(2041),
                    v = a(9994),
                    h = a(2215);
                const f = {
                        base: 'App_base_ceada',
                        base__rewardsState: 'App_base__rewardsState_c14da',
                        background: 'App_background_e3e87',
                        base__tankmenState: 'App_base__tankmenState_cb015',
                        additionalAnimation: 'App_additionalAnimation_b68c9',
                        fadeIn: 'App_fadeIn_b1da5',
                        header: 'App_header_a6469',
                        awards: 'App_awards_db6bf',
                        footer: 'App_footer_cb898',
                        base__buyState: 'App_base__buyState_d5a7f',
                        fadeOut: 'App_fadeOut_d703b',
                        fadeInWithScale: 'App_fadeInWithScale_eb97e',
                        slideUp: 'App_slideUp_ef029',
                        scale: 'App_scale_c5c53',
                        rotate: 'App_rotate_c1f05',
                    },
                    C = 'selectableRewardsState',
                    A = 'finalState';
                var w = a(7109),
                    B = a(768);
                const D = {
                        base: 'Final_base_c3951',
                        controls: 'Final_controls_b0c47',
                        label: 'Final_label_bfefc',
                        base__finalState: 'Final_base__finalState_bdc8b',
                        text: 'Final_text_f8c72',
                        buttonWrapper: 'Final_buttonWrapper_f1dfe',
                        button: 'Final_button_fa9d3',
                    },
                    F = 'FinalStateLabel_icon_c6f66',
                    y = 'FinalStateLabel_greenLight_c6404',
                    P = 'FinalStateLabel_text_b59f3',
                    S = () =>
                        n().createElement(
                            n().Fragment,
                            null,
                            n().createElement('div', { className: F }),
                            n().createElement('div', { className: y }),
                            n().createElement(
                                'div',
                                { className: P },
                                R.strings.battle_pass.holidayFinalScreen.finalState.label(),
                            ),
                        ),
                    N = R.strings.battle_pass.holidayFinalScreen,
                    k = (0, g.Pi)(() => {
                        const e = c(),
                            t = e.model,
                            a = e.controls,
                            r = a.takeRewards,
                            s = a.showHangar,
                            i = t.root.get(),
                            o = i.state,
                            u = i.finalRewardType,
                            l = o === C;
                        return n().createElement(
                            'div',
                            { className: _()(D.base, D[`base__${o}`]) },
                            n().createElement(
                                'div',
                                { className: D.controls },
                                n().createElement(
                                    'div',
                                    { className: D.label },
                                    l
                                        ? n().createElement(
                                              'div',
                                              { className: D.text },
                                              N.selectableRewardsState.label(),
                                          )
                                        : n().createElement(S, null),
                                ),
                                n().createElement(
                                    'div',
                                    { className: D.buttonWrapper },
                                    n().createElement(
                                        w.u5,
                                        {
                                            size: w.qE.medium,
                                            mixClass: D.button,
                                            onClick: () => {
                                                l ? r() : s();
                                            },
                                        },
                                        (() => {
                                            switch (o) {
                                                case C:
                                                    return N.selectableRewardsState.button();
                                                case A:
                                                    return u === B.E.Vehicle
                                                        ? N.finalState.button.showVehicle()
                                                        : N.finalState.button.showHangar();
                                                default:
                                                    return '';
                                            }
                                        })(),
                                    ),
                                ),
                            ),
                        );
                    });
                var x = a(7436),
                    L = a(2486),
                    I = a(3359),
                    T = a(8925),
                    O = a(8739),
                    M = a(4029),
                    $ = a(1374),
                    H = a(5278),
                    W = a(2317),
                    z = a(3975),
                    G = a(8862);
                const U = 'Divider_divider_d0267',
                    V = 'Divider_divider__right_e793f',
                    j = ({ isRight: e = !1 }) => n().createElement('div', { className: _()(U, e && V) }),
                    q = 'Title_base_cd641',
                    Z = 'Title_text_bdc4c',
                    X = ({ text: e }) =>
                        n().createElement(
                            'div',
                            { className: q },
                            n().createElement(j, null),
                            n().createElement('div', { className: Z }, e),
                            n().createElement(j, { isRight: !0 }),
                        ),
                    Y = {
                        base: 'Purchase_base_ace29',
                        content: 'Purchase_content_e042c',
                        preview: 'Purchase_preview_b11d3',
                        shadow: 'Purchase_shadow_fb996',
                        visibleRewards: 'Purchase_visibleRewards_d6a46',
                        title: 'Purchase_title_dbd80',
                        description: 'Purchase_description_b0181',
                        button: 'Purchase_button_b07a6',
                        button__active: 'Purchase_button__active_fbb47',
                        button__disappearing: 'Purchase_button__disappearing_e9c00',
                        rewardButton: 'Purchase_rewardButton_cde7f',
                    };
                function K() {
                    return (
                        (K = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        K.apply(null, arguments)
                    );
                }
                const Q = R.strings.battle_pass.holidayFinalScreen.buyState,
                    J = (e) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 400 + 100 * e,
                        config: { duration: 400 },
                        onStart: () => {
                            (0, M.G)(R.sounds.bp_reward());
                        },
                    }),
                    ee = (0, g.Pi)(() => {
                        const e = c(),
                            t = e.model,
                            a = e.controls,
                            r = (0, G.tv)(),
                            s = t.root.get(),
                            i = s.chapterID,
                            o = s.finalRewardType,
                            u = a.showPreviewVehicle,
                            l = t.computes.rewardList(),
                            d = o === B.E.Vehicle,
                            _ = (0, T.GS)().mediaSize <= T.cJ.Small ? L.h2.Small : L.h2.Big,
                            b = l.length > 9 ? [...O.tP(l, 0, 9)] : l,
                            E = (0, $.useSpring)(J(b.length)),
                            p = l.length - b.length;
                        return n().createElement(
                            'div',
                            { className: Y.base },
                            d &&
                                n().createElement(
                                    'div',
                                    { className: Y.preview },
                                    n().createElement(x.h, { type: 'preview', onClick: u }),
                                ),
                            n().createElement(
                                'div',
                                { className: Y.content },
                                n().createElement('div', { className: Y.shadow }),
                                n().createElement(
                                    'div',
                                    { className: Y.title },
                                    n().createElement(X, { text: Q.title() }),
                                ),
                                n().createElement('div', { className: Y.description }, Q.description()),
                                n().createElement(
                                    'div',
                                    { className: Y.visibleRewards },
                                    O.UI(b, (e, t) =>
                                        n().createElement(
                                            z.d,
                                            { animationConfig: J(t), key: `${e.item}_${t}` },
                                            n().createElement(I.Q, K({}, (0, H.$n)(e, _), { className: Y.reward })),
                                        ),
                                    ),
                                ),
                                p > 0 &&
                                    n().createElement(
                                        $.animated.div,
                                        { style: E },
                                        n().createElement(
                                            w.u5,
                                            {
                                                type: w.L$.ghost,
                                                size: w.qE.medium,
                                                mixClass: Y.rewardButton,
                                                onClick: () => {
                                                    r.push(W._.battlePass.buyPassRewards, { packageID: i });
                                                },
                                            },
                                            n().createElement(m.z, { text: Q.moreRewards(), binding: { count: p } }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var te = a(8230),
                    ae = a(8024);
                const re = 'Rewards_full_f8781',
                    ne = { context: 'model.rewards' },
                    se = (0, g.Pi)(() => {
                        const e = c().controls.close;
                        return n().createElement(
                            ae.k,
                            { options: ne },
                            n().createElement('div', { className: re }, n().createElement(te.$, { onBack: e })),
                        );
                    });
                var ie = a(2262);
                const oe = 'Tankmen_base_d288d',
                    ue = 'Tankmen_image_ada80',
                    le = 'Tankmen_title_b0d37',
                    ce = 'Tankmen_description_e8821',
                    de = 'Tankmen_tankmenBtn_ac6b8',
                    _e = 'Tankmen_button_a2cf1',
                    me = 'Tankmen_blink_f0aef',
                    be = R.strings.battle_pass.holidayFinalScreen.tankmenState,
                    Ee = (0, g.Pi)(() => {
                        const e = c().controls.showTankmen;
                        return n().createElement(
                            'div',
                            { className: oe },
                            n().createElement('div', { className: ue }),
                            n().createElement('div', { className: le }, n().createElement(X, { text: be.title() })),
                            n().createElement('div', { className: ce }, be.description()),
                            n().createElement(
                                'div',
                                { className: de },
                                n().createElement(
                                    w.u5,
                                    { type: ie.L.main, size: ie.q.medium, mixClass: _e, onClick: e },
                                    n().createElement('div', { className: me }),
                                    be.tankmenButton(),
                                ),
                            ),
                        );
                    }),
                    pe = (0, g.Pi)(() => {
                        const e = c().model.root.get().state;
                        switch (e) {
                            case 'buyState':
                                return n().createElement(ee, null);
                            case 'rewardsState':
                                return n().createElement(se, null);
                            case 'tankmenState':
                                return n().createElement(Ee, null);
                            case C:
                            case A:
                                return n().createElement(k, null);
                            default:
                                return (console.warn('Unknown state ', e), null);
                        }
                    }),
                    ge = 'Footer_base_e7ffc',
                    ve = 'Footer_light_d8352',
                    he = 'Footer_buttonWrapper_d2bc1',
                    fe = 'Footer_button_e4943',
                    Ce = 'Footer_blink_ee2c2',
                    Ae = R.strings.battle_pass.holidayFinalScreen.buyState,
                    we = (0, g.Pi)(() => {
                        const e = c().model.root.get(),
                            t = e.isSeasonEndingSoon,
                            a = e.chapterID,
                            r = (0, G.tv)();
                        return n().createElement(
                            'div',
                            { className: ge },
                            n().createElement('div', { className: ve }),
                            n().createElement(
                                'div',
                                { className: he },
                                n().createElement(
                                    w.u5,
                                    {
                                        type: w.L$.main,
                                        size: w.qE.medium,
                                        mixClass: fe,
                                        onClick: () => {
                                            r.push(W._.battlePass.buyPassConfirm, { packageID: a });
                                        },
                                    },
                                    t && n().createElement('div', { className: Ce }),
                                    Ae.buyButton(),
                                ),
                            ),
                        );
                    }),
                    Be = 'Header_base_a6593',
                    De = 'Header_title_b6bec',
                    Fe = 'Header_description_efc56',
                    ye = ({ title: e, description: t }) =>
                        n().createElement(
                            'div',
                            { className: Be },
                            n().createElement('div', { className: De }, e),
                            n().createElement('div', { className: Fe }, t),
                        );
                function Pe(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                const Se = R.strings.battle_pass,
                    Ne = (0, g.Pi)(() => {
                        const e = (0, r.useState)(!1),
                            t = e[0],
                            a = e[1],
                            s = c().model.root.get(),
                            i = s.state,
                            o = s.chapterID,
                            u = (0, G.tv)();
                        return (
                            (0, r.useEffect)(() => {
                                (function () {
                                    var e,
                                        t =
                                            ((e = function* () {
                                                (yield (0, p.Eu)(), yield (0, b.nS)(), a(!0));
                                            }),
                                            function () {
                                                var t = this,
                                                    a = arguments;
                                                return new Promise(function (r, n) {
                                                    var s = e.apply(t, a);
                                                    function i(e) {
                                                        Pe(s, r, n, i, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        Pe(s, r, n, i, o, 'throw', e);
                                                    }
                                                    i(void 0);
                                                });
                                            });
                                    return function () {
                                        return t.apply(this, arguments);
                                    };
                                })()();
                            }, []),
                            v.N.useHandleKeydown(E.n.ESCAPE, () => u.goBack()),
                            n().createElement(
                                'div',
                                { className: _()(f.base, f[`base__${i}`]) },
                                n().createElement('div', { className: f.background }),
                                t &&
                                    n().createElement(
                                        'div',
                                        { className: f.additionalAnimation },
                                        n().createElement(
                                            'div',
                                            { className: f.header },
                                            n().createElement(ye, {
                                                title: n().createElement(m.z, {
                                                    text: Se.holidayFinalScreen.chapter(),
                                                    binding: { chapterName: Se.chapter.fullNameUppercased.$num(o) },
                                                }),
                                                description: Se.holidayFinalScreen.completed(),
                                            }),
                                            n().createElement(
                                                'div',
                                                { className: f.awards },
                                                n().createElement(h.Z, {
                                                    rootId: R.aliases.battle_pass.HolidayFinal('resId'),
                                                    context: 'model.awardsWidget',
                                                }),
                                            ),
                                        ),
                                        n().createElement(pe, null),
                                        n().createElement('div', { className: f.footer }, n().createElement(we, null)),
                                    ),
                            )
                        );
                    }),
                    ke = () =>
                        n().createElement(
                            l,
                            { options: { rootId: R.aliases.battle_pass.HolidayFinal('resId') } },
                            n().createElement(Ne, null),
                        );
            },
            7885: (e, t, a) => {
                'use strict';
                var r = a(5579),
                    n = a(7363),
                    s = a.n(n),
                    i = a(9849),
                    o = a.n(i),
                    u = a(184),
                    l = a.n(u),
                    c = a(8925);
                const d = ['children', 'className'];
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
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
                    b = {
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
                    p = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== t.indexOf(r)) continue;
                                        a[r] = e[r];
                                    }
                                return a;
                            })(e, d);
                        const n = (0, c.GS)(),
                            i = n.mediaWidth,
                            u = n.mediaHeight,
                            l = n.mediaSize;
                        return s().createElement('div', _({ className: o()(a, m[i], b[u], E[l]) }, r), t);
                    },
                    g = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, g);
                    return s().createElement(r.ZN, null, s().createElement(p, a, t));
                };
                var h = a(1533),
                    f = a.n(h),
                    C = a(9994),
                    A = a(5278),
                    w = a(9352),
                    B = a(3305),
                    D = a(4053);
                const F = function (e, t) {
                    const a = (0, n.useState)(t),
                        r = a[0],
                        s = a[1];
                    return (
                        (0, n.useEffect)(() => {
                            function a() {
                                s(t());
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
                const y = ({ children: e, prefix: t = '', context: a, getRoot: r, initializer: i, rootId: o }) => {
                        const u = (0, n.useRef)([]),
                            l = (0, n.useRef)(null),
                            c = (0, n.useMemo)(
                                () => (0, w.U)({ context: a, getRoot: r, initializer: i, rootId: o }),
                                [a, r, i, o],
                            ),
                            d = (0, n.useCallback)(
                                (e) => {
                                    const t = c.subscribe(e);
                                    return () => c.unsubscribe(t);
                                },
                                [c],
                            ),
                            _ = (0, n.useCallback)(() => {
                                const e = c.readByPath(),
                                    a = {
                                        location: ((r = t + e.route), r.endsWith('/') ? r.slice(0, -1) : r),
                                        params: e.params,
                                    };
                                var r;
                                return l.current && B.p6.shallow(l.current, a) ? l.current : ((l.current = a), a);
                            }, [c, t]),
                            m = F(d, _);
                        (0, n.useEffect)(() => c.dispose, [c]);
                        const b = (0, n.useMemo)(() => {
                                const e = [...u.current, m];
                                return ((u.current = e), Object.assign({}, m, { history: e }));
                            }, [m]),
                            E = (0, n.useMemo)(() => {
                                const e = c.createCallback(
                                    (e, t) => Object.assign({ route: e }, Boolean(t) && { params: JSON.stringify(t) }),
                                    'navigateTo',
                                );
                                return { push: e, replace: e, goBack: c.createCallbackNoArgs('navigateBack') };
                            }, [c]),
                            p = (0, n.useMemo)(() => Object.assign({}, b, E), [E, b]);
                        return s().createElement(D._.Provider, { value: p }, e);
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
                        bezier: (e, t, a, r) => (n) =>
                            (1 - n) * (1 - n) * (1 - n) * e +
                            3 * (1 - n) * (1 - n) * n * t +
                            3 * (1 - n) * n * n * a +
                            n * n * n * r,
                    };
                var S = a(2041),
                    N = a(1374),
                    k = a(9642),
                    R = a(1829),
                    x = a(735),
                    L = a(2016),
                    I = a(8218),
                    T = a(6734),
                    O = a(5976),
                    M = a(8862),
                    $ = a(2317);
                const H = 'App_base_be37e',
                    W = 'App_mainView_d2521',
                    z = (0, S.Pi)(() => {
                        const e = (0, M.tv)().location,
                            t = (0, N.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1, config: { duration: 150, easing: P.easeInQuad }, delay: 150 },
                            });
                        return s().createElement(
                            n.Suspense,
                            { fallback: s().createElement('div', null) },
                            s().createElement(
                                'div',
                                { className: H },
                                t((e, t) =>
                                    s().createElement(
                                        N.animated.div,
                                        { className: W, style: e },
                                        s().createElement(
                                            M.rs,
                                            { location: t },
                                            s().createElement(M.AW, { path: $._.battlePass.intro, component: x.f }),
                                            s().createElement(M.AW, {
                                                path: $._.battlePass.progression,
                                                component: L.X,
                                            }),
                                            s().createElement(M.AW, {
                                                path: $._.battlePass.chapterChoice,
                                                component: I.e,
                                            }),
                                            s().createElement(M.AW, {
                                                path: $._.battlePass.postProgression,
                                                component: O.v,
                                            }),
                                            s().createElement(M.AW, { path: $._.battlePass.buyPass, component: R.G }),
                                            s().createElement(M.AW, {
                                                path: $._.battlePass.buyPassConfirm,
                                                component: R.G,
                                            }),
                                            s().createElement(M.AW, {
                                                path: $._.battlePass.buyPassRewards,
                                                component: R.G,
                                            }),
                                            s().createElement(M.AW, { path: $._.battlePass.buyLevels, component: k.U }),
                                            s().createElement(M.AW, {
                                                path: $._.battlePass.buyLevelsRewards,
                                                component: k.U,
                                            }),
                                            s().createElement(M.AW, {
                                                path: $._.battlePass.holidayFinal,
                                                component: T.H,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                const G = (0, a(5090).q3)()(
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
                            s().createElement(
                                C.N.Provider,
                                null,
                                s().createElement(
                                    y,
                                    { context: 'model.router' },
                                    s().createElement(U, null, s().createElement(v, null, s().createElement(z, null))),
                                ),
                            ),
                            document.getElementById('root'),
                        ));
                });
            },
            2317: (e, t, a) => {
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
            5976: (e, t, a) => {
                'use strict';
                a.d(t, { v: () => na });
                var r = a(7363),
                    n = a.n(r);
                let s = (function (e) {
                        return (
                            (e[(e.Active = 0)] = 'Active'),
                            (e[(e.Paused = 1)] = 'Paused'),
                            (e[(e.Completed = 2)] = 'Completed'),
                            (e[(e.NotStarted = 3)] = 'NotStarted'),
                            e
                        );
                    })({}),
                    i = (function (e) {
                        return (
                            (e[(e.Locked = 0)] = 'Locked'),
                            (e[(e.Unlocked = 1)] = 'Unlocked'),
                            (e[(e.Paused = 2)] = 'Paused'),
                            e
                        );
                    })({});
                var o = a(5090),
                    u = a(9723),
                    l = a(8739),
                    c = a(3305),
                    d = a(5369),
                    _ = a(3097),
                    m = a(2858),
                    b = a(233);
                const E = 1e3,
                    p = Object.assign({}, _.uu, {
                        withStack: !0,
                        type: b.r.Simple,
                        delta: { duration: 500, delay: 300 },
                        line: { duration: 500, delay: 300 },
                    }),
                    g = Object.assign({}, m.Gh, {
                        line: Object.assign({}, m.Gh.line, { bgColorFinished: '#000000' }),
                        pattern: Object.assign({}, m.Gh.pattern, { bgImageFinished: m.Gh.bgImageBase }),
                    });
                let v = (function (e) {
                    return (
                        (e.FillProgressMax = 'fillProgressMax'),
                        (e.RunCycle = 'runCycle'),
                        (e.ResetProgress = 'resetProgress'),
                        (e.RefillProgress = 'refillProgress'),
                        (e.Idle = 'idle'),
                        e
                    );
                })({});
                const h = {
                    [v.FillProgressMax]: { nextStep: v.RunCycle, delay: E },
                    [v.RunCycle]: { nextStep: v.ResetProgress, delay: 2200 },
                    [v.ResetProgress]: { nextStep: v.RefillProgress, delay: E },
                    [v.RefillProgress]: { nextStep: v.Idle, delay: E },
                };
                let f = (function (e) {
                        return (
                            (e.COMPLETED = 'completed'),
                            (e.IN_PROGRESS = 'inProgress'),
                            (e.NOT_STARTED = 'notStarted'),
                            e
                        );
                    })({}),
                    C = (function (e) {
                        return (
                            (e.NotAvailable = 'notAvailable'),
                            (e.PurchasingIP = 'purchasingIP'),
                            (e.ExtraChapter = 'extraChapter'),
                            e
                        );
                    })({}),
                    A = (function (e) {
                        return ((e.left = 'left'), (e.right = 'right'), e);
                    })({});
                var w = a(8925);
                const B = {
                        '--small-card-width': '140rem',
                        '--small-current-card-width': '224rem',
                        '--medium-card-width': '220rem',
                        '--medium-current-card-width': '340rem',
                        '--extra-large-card-width': '276rem',
                    },
                    D = (e, t = !1) =>
                        t ? (e < w.cJ.Medium ? 224 : 340) : e < w.cJ.Medium ? 140 : e < w.cJ.ExtraLarge ? 220 : 276,
                    F = (0, o.q3)()(
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
                                    const n = a.length;
                                    return Object.assign({}, r, {
                                        maxLevel: n,
                                        isFirstLevel: 1 === e,
                                        isLastLevel: e === n,
                                    });
                                }),
                                r = (0, d.Om)((e) => {
                                    const t = a(e);
                                    return l.UI(t.rewards, (e) => Object.assign({}, e));
                                }),
                                n = (0, d.Om)((e) => {
                                    const r = t.root.get(),
                                        n = r.currentLevel,
                                        s = r.currentLevelPoints,
                                        o = r.previousLevel,
                                        u = r.postProgressionStatus,
                                        l = t.animationStep.get();
                                    if ([v.FillProgressMax, v.RunCycle].includes(l))
                                        return e === o ? f.IN_PROGRESS : f.COMPLETED;
                                    const c = a(e),
                                        d = c.levelPoints,
                                        _ = c.maxLevel;
                                    return e < n || (n === _ && s === d * _)
                                        ? f.COMPLETED
                                        : e === n && (u !== i.Locked || s > 0)
                                          ? f.IN_PROGRESS
                                          : f.NOT_STARTED;
                                }),
                                o = (0, d.Om)((e) => {
                                    const a = t.root.get().postProgressionStatus,
                                        r = n(e);
                                    return { cardStatus: r, isDisabled: a !== i.Unlocked && r === f.NOT_STARTED };
                                }),
                                _ = (0, d.Om)(
                                    () =>
                                        E()
                                            ? g().length && h() && A()
                                                ? C.ExtraChapter
                                                : p()
                                                  ? C.PurchasingIP
                                                  : void 0
                                            : C.NotAvailable,
                                    { equals: u.jv },
                                ),
                                m = (0, d.Om)(() => l.hX(t.chapters.get(), (e) => e.isRegular), { equals: u.jv }),
                                b = (0, d.Om)(
                                    () =>
                                        l.hX(t.chapters.get(), (e) => e.isRegular && e.chapterStatus === s.Completed)
                                            .length,
                                    { equals: u.jv },
                                ),
                                E = (0, d.Om)(() => b() === m().length),
                                p = (0, d.Om)(() => l.G(t.chapters.get(), (e) => !e.isBattlePassPurchased)),
                                g = (0, d.Om)(() => l.hX(t.chapters.get(), (e) => !e.isRegular)),
                                h = (0, d.Om)(() => l.G(g(), (e) => e.chapterStatus !== s.Active)),
                                A = (0, d.Om)(() => l.G(g(), (e) => e.chapterStatus !== s.Completed)),
                                w = (0, d.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.currentLevel,
                                        r = e.currentLevelPoints,
                                        n = a - 1;
                                    return l.u4(
                                        t.levels.get(),
                                        (e, { levelPoints: t }, a) => (a < n ? e + t : a === n ? e + r : e),
                                        0,
                                    );
                                }),
                                B = (0, d.Om)(() => l.u4(t.levels.get(), (e, { levelPoints: t }) => e + t, 0)),
                                F = (0, d.Om)(() => {
                                    const e = t.root.get(),
                                        a = e.currentLevel,
                                        r = e.currentLevelPoints,
                                        n = e.previousLevel,
                                        s = e.previousLevelPoints;
                                    return a !== n || r !== s;
                                }),
                                y = (0, d.Om)(() => {
                                    const e = t.root.get();
                                    return e.cyclesCompletedCount > e.previousCyclesCompletedCount;
                                }),
                                P = (0, d.Om)((e) => {
                                    const r = t.root.get(),
                                        n = r.currentLevel,
                                        s = r.currentLevelPoints,
                                        o = r.previousLevel,
                                        u = r.previousLevelPoints,
                                        l = r.postProgressionStatus,
                                        c = t.animationStep.get(),
                                        d = a(n),
                                        _ = d.levelPoints,
                                        m = d.maxLevel,
                                        b = a(o).levelPoints,
                                        E = y(),
                                        p = ((e, t) => {
                                            const a = D(e),
                                                r = D(e, t);
                                            return [a, t ? r : a];
                                        })(e, l !== i.Locked),
                                        g = p[0],
                                        h = p[1],
                                        f = g * (m - 1) + h,
                                        C = (
                                            (e, t) =>
                                            (a, r, n, s = !1) =>
                                                e * (a - 1) + ((s ? e : t) / n) * r
                                        )(g, h),
                                        A = !E && o < n;
                                    return {
                                        progressValue: [v.FillProgressMax, v.RunCycle].includes(c) ? f : C(n, s, _),
                                        previousProgressValue: c === v.ResetProgress ? 0 : C(o, u, b, A),
                                        maxProgressValue: f,
                                    };
                                }),
                                S = (0, d.Om)(() => l.hX(t.chapters.get(), (e) => !e.isBattlePassPurchased));
                            return Object.assign({}, t, {
                                computes: {
                                    footerState: _,
                                    regularChapters: m,
                                    completedRegularChaptersCount: b,
                                    extraChapters: g,
                                    cardStates: o,
                                    levelInfo: a,
                                    levelRewards: r,
                                    currentPointsInChapter: w,
                                    totalPointsInChapter: B,
                                    progressChanged: F,
                                    cycleChanged: y,
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
                    y = F[0],
                    P = F[1];
                var S = a(1652),
                    N = a(4020),
                    k = a(2041),
                    x = a(1705),
                    L = a(2215),
                    I = a(9994),
                    T = a(8862),
                    O = a(9849),
                    M = a.n(O);
                const $ = {
                        base: 'Card_base_c14ca',
                        base__inProgress: 'Card_base__inProgress_b4bfd',
                        stage: 'Card_stage_cd3ee',
                        rewards: 'Card_rewards_b8a07',
                        status: 'Card_status_e03aa',
                        points: 'Card_points_c21eb',
                        points__initial: 'Card_points__initial_bdedb',
                        progressShadow: 'Card_progressShadow_dfa90',
                    },
                    H = 'Background_base_f2908',
                    W = 'Background_default_cb696',
                    z = 'Background_base__first_bf974',
                    G = 'Background_base__last_fc8fe',
                    U = 'Background_disabled_fa267',
                    V = 'Highlight_base_c24af',
                    j = 'Highlight_inner_afe9f',
                    q = 'Highlight_side_e0964',
                    Z = 'Highlight_side__left_c482c',
                    X = 'Highlight_side__right_e117d',
                    Y = (0, r.memo)(() =>
                        n().createElement(
                            'div',
                            { className: V },
                            n().createElement('div', { className: M()(q, Z) }),
                            n().createElement('div', { className: j }),
                            n().createElement('div', { className: M()(q, X) }),
                        ),
                    ),
                    K = (0, k.Pi)(({ level: e }) => {
                        const t = P().model,
                            a = t.computes.levelInfo(e),
                            r = a.isFirstLevel,
                            s = a.isLastLevel,
                            i = t.computes.cardStates(e),
                            o = i.cardStatus,
                            u = i.isDisabled;
                        return n().createElement(
                            'div',
                            { className: M()(H, r && z, s && G) },
                            n().createElement('div', { className: W }),
                            u && n().createElement('div', { className: U }),
                            o === f.IN_PROGRESS && n().createElement(Y, null),
                        );
                    });
                var Q = a(2486),
                    J = a(4692),
                    ee = a(3359);
                const te = {
                    base: 'CardRewards_base_fb388',
                    base__completed: 'CardRewards_base__completed_a7a41',
                    rewards: 'CardRewards_rewards_c9bdf',
                    rewards__2: 'CardRewards_rewards__2_b45ca',
                    base__inProgress: 'CardRewards_base__inProgress_bc9a5',
                    rewards__3: 'CardRewards_rewards__3_b1c97',
                    reward: 'CardRewards_reward_c9f7d',
                    rewards__1: 'CardRewards_rewards__1_eb5d1',
                };
                function ae() {
                    return (
                        (ae = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var a = arguments[t];
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        ae.apply(null, arguments)
                    );
                }
                const re = (0, d.Om)((e) => {
                        const t = e.item,
                            a = e.name,
                            r = e.value,
                            n = e.overlayType,
                            s = e.tooltipId,
                            i = e.tooltipContentId;
                        return {
                            name: t || a,
                            smallImage: (0, J.ry)(e, Q.h2.Big),
                            bigImage: (0, J.ry)(e, Q.h2.S180x135),
                            special: n,
                            value: r,
                            valueType: (0, J.p3)(a),
                            tooltipArgs: (0, J.pI)({ tooltipId: s }, Number(i), { ignoreShowDelay: !0 }),
                        };
                    }),
                    ne = (0, k.Pi)(({ level: e, className: t }) => {
                        const a = P().model,
                            r = a.computes.levelRewards(e),
                            s = a.computes.cardStates(e).cardStatus,
                            i = (0, w.GS)().mediaSize < w.cJ.Medium,
                            o = 1 === r.length,
                            u = ((e, t) => (t ? (e ? Q.h2.Big : Q.h2.S180x135) : e ? Q.h2.Small : Q.h2.Big))(i, o),
                            c = (e) => (i || !o ? e.smallImage : e.bigImage);
                        return n().createElement(
                            'div',
                            { className: M()(te.base, te[`base__${s}`], t) },
                            n().createElement(
                                'div',
                                { className: M()(te.rewards, te[`rewards__${r.length}`]) },
                                l.UI(r, (e, t) => {
                                    const a = re(e);
                                    return n().createElement(
                                        'div',
                                        { key: `reward__${a.name}${t}`, className: M()(te.reward) },
                                        n().createElement(ee.Q, ae({ size: u, image: c(a) }, a)),
                                    );
                                }),
                            ),
                        );
                    }),
                    se = {
                        base: 'Divider_base_f56a0',
                        base__left: 'Divider_base__left_dd520',
                        base__right: 'Divider_base__right_e2aad',
                        inner: 'Divider_inner_d4f00',
                    },
                    ie = ({ position: e }) =>
                        n().createElement(
                            'div',
                            { className: M()(se.base, se[`base__${e}`]) },
                            n().createElement('div', { className: se.inner }),
                        );
                var oe = a(4029),
                    ue = a(1374),
                    le = a(5278);
                const ce = {
                        base: 'Stage_base_e6b9b',
                        number: 'Stage_number_da650',
                        animatedNumber: 'Stage_animatedNumber_a90d1',
                        numberInProgress: 'Stage_numberInProgress_be9c3',
                        title: 'Stage_title_a871b',
                        glow: 'Stage_glow_f19f4',
                        base__inProgress: 'Stage_base__inProgress_bdf47',
                        animatedGlow: 'Stage_animatedGlow_fa1b6',
                    },
                    de = (0, k.Pi)(({ level: e, className: t }) => {
                        const a = P().model,
                            s = a.root.get().postProgressionStatus,
                            o = a.computes.cardStates(e).cardStatus,
                            u = (0, r.useState)(!1),
                            l = u[0],
                            c = u[1],
                            d = o === f.IN_PROGRESS,
                            _ = s === i.Unlocked,
                            m = (0, ue.useSpring)({
                                from: { stageOpacity: l ? 1 : 0 },
                                to: { stageOpacity: 0 },
                                delay: 0,
                                onStart: () => (0, oe.G)(R.sounds.bp_current_phase()),
                                config: { duration: 750, easing: le.ei },
                            }).stageOpacity,
                            b = (0, ue.useSpring)({
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
                            n().createElement(
                                'div',
                                { className: M()(ce.base, ce[`base__${o}`], t) },
                                d
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          _ &&
                                              n().createElement(
                                                  n().Fragment,
                                                  null,
                                                  n().createElement('div', { className: ce.glow }),
                                                  n().createElement(ue.animated.div, {
                                                      style: { opacity: b },
                                                      className: ce.animatedGlow,
                                                  }),
                                              ),
                                          n().createElement(
                                              'div',
                                              { className: ce.numberInProgress },
                                              e,
                                              n().createElement(
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
                                          n().createElement(
                                              'div',
                                              { className: ce.title },
                                              R.strings.battle_pass.postProgressionView.progression.currentStep(),
                                          ),
                                      )
                                    : n().createElement('div', { className: ce.number }, e),
                            )
                        );
                    });
                var _e = a(6485);
                const me = {
                        base__showAnimation: 'CompletedStatus_base__showAnimation_e7635',
                        slideUp: 'CompletedStatus_slideUp_d6b99',
                        fadeIn: 'CompletedStatus_fadeIn_c220c',
                        base__hideAnimation: 'CompletedStatus_base__hideAnimation_cb046',
                        slideDown: 'CompletedStatus_slideDown_c1d5b',
                        fadeOut: 'CompletedStatus_fadeOut_e8344',
                        icon: 'CompletedStatus_icon_aa61a',
                        iconGlow: 'CompletedStatus_iconGlow_c295f',
                        fadeInWithScale: 'CompletedStatus_fadeInWithScale_c6b98',
                        scale: 'CompletedStatus_scale_c7f90',
                        rotate: 'CompletedStatus_rotate_feccf',
                    },
                    be = ({ shouldAppear: e }) =>
                        n().createElement(
                            'div',
                            { className: M()(me.base, e ? me.base__showAnimation : me.base__hideAnimation) },
                            n().createElement('div', { className: me.iconGlow }),
                            n().createElement(
                                _e.i,
                                { body: R.strings.battle_pass.tooltips.completed.got() },
                                n().createElement('div', { className: me.icon }),
                            ),
                        );
                var Ee = a(2278);
                const pe = {
                        base: 'CurrentPoints_base_e1613',
                        base__appear: 'CurrentPoints_base__appear_d442e',
                        fadeIn: 'CurrentPoints_fadeIn_a12fa',
                        base__disappear: 'CurrentPoints_base__disappear_e455e',
                        fadeOut: 'CurrentPoints_fadeOut_b38d7',
                        value__current: 'CurrentPoints_value__current_c6a95',
                        value__total: 'CurrentPoints_value__total_dd06b',
                        divider: 'CurrentPoints_divider_e4492',
                        icon: 'CurrentPoints_icon_faacd',
                        fadeInWithScale: 'CurrentPoints_fadeInWithScale_efaaf',
                        slideUp: 'CurrentPoints_slideUp_c586a',
                        scale: 'CurrentPoints_scale_a460b',
                        rotate: 'CurrentPoints_rotate_e652b',
                    },
                    ge = (0, k.Pi)(({ totalLevelPoints: e, shouldAppear: t, shouldDisappear: a, className: r }) => {
                        const s = P().model.root.get(),
                            i = s.currentLevelPoints,
                            o = s.previousLevelPoints;
                        return n().createElement(
                            Ee.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId'),
                            },
                            n().createElement(
                                'div',
                                { className: M()(pe.base, t && pe.base__appear, a && pe.base__disappear, r) },
                                n().createElement('div', { className: M()(pe.value, pe.value__current) }, a ? o : i),
                                n().createElement('div', { className: pe.divider }, '/'),
                                n().createElement('div', { className: M()(pe.value, pe.value__total) }, e),
                                n().createElement('div', { className: pe.icon }),
                            ),
                        );
                    }),
                    ve = 'Status_base_b6695',
                    he = 'Status_pointsWrapper_e5e8b',
                    fe = (0, k.Pi)(({ level: e, className: t }) => {
                        const a = P().model,
                            s = a.computes.cardStates(e),
                            i = s.cardStatus,
                            o = s.isDisabled,
                            u = a.computes.levelInfo(e).levelPoints,
                            l = a.animationStep.get(),
                            c = [v.FillProgressMax, v.RunCycle].includes(l),
                            d = l === v.ResetProgress,
                            _ = i === f.COMPLETED && !o,
                            m = i === f.IN_PROGRESS,
                            b = (0, r.useState)(_),
                            E = b[0],
                            p = b[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (l === v.RunCycle) return void p(!1);
                                const t = l === v.FillProgressMax,
                                    a = l === v.ResetProgress;
                                return E
                                    ? void 0
                                    : (0, S.F)(
                                          () => {
                                              p(!!t || _);
                                          },
                                          (a ? 500 : 0) + 100 * e,
                                      );
                            }, [l, E, _, e]),
                            n().createElement(
                                'div',
                                { className: M()(ve, t) },
                                _ && E && n().createElement(be, { shouldAppear: E }),
                                m &&
                                    n().createElement(ge, {
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
                            s = a.isFirstLevel,
                            i = a.isLastLevel,
                            o = t.computes.cardStates(e).cardStatus,
                            u = !s && o === f.IN_PROGRESS,
                            l = !i && t.computes.cardStates(e + 1).cardStatus !== f.IN_PROGRESS;
                        return n().createElement(
                            'div',
                            { className: M()($.base, $[`base__${o}`]), style: B },
                            n().createElement(K, { level: e }),
                            n().createElement(de, { className: $.stage, level: e }),
                            n().createElement(ne, { className: $.rewards, level: e }),
                            n().createElement(fe, { className: $.status, level: e }),
                            n().createElement('div', { className: $.points }, e * r),
                            s && n().createElement('div', { className: M()($.points, $.points__initial) }, 0),
                            u && n().createElement(ie, { position: A.left }),
                            l && n().createElement(ie, { position: A.right }),
                        );
                    }),
                    Ae = 'Cards_base_dd91b',
                    we = (0, k.Pi)(() => {
                        const e = P().model,
                            t = e.levels.get(),
                            a = e.root.get().chapterID;
                        return n().createElement(
                            'div',
                            { className: Ae },
                            l.UI(t, ({ level: e }, t) => n().createElement(Ce, { key: `${a}_${t}`, level: e })),
                        );
                    }),
                    Be = 'Footer_base_f5d85';
                var De = a(3925);
                const Fe = 'ExtraChapter_base_c799b',
                    ye = 'ExtraChapter_wrapper_f0306',
                    Pe = 'ExtraChapter_border_f74cd',
                    Se = 'ExtraChapter_base__hover_f5f75',
                    Ne = 'ExtraChapter_bg_a8a2f',
                    ke = 'ExtraChapter_widget_df277',
                    Re = 'ExtraChapter_title_e5aea',
                    xe = 'ExtraChapter_description_c2f36',
                    Le = 'ExtraChapter_content_c9275';
                var Ie = a(2317);
                const Te = R.strings.battle_pass.postProgressionView.footer.extraChapter,
                    Oe = (0, k.Pi)(() => {
                        var e;
                        const t = null == (e = P().model.computes.extraChapters()[0]) ? void 0 : e.chapterID,
                            a = (0, r.useState)(!1),
                            s = a[0],
                            i = a[1],
                            o = (0, T.tv)();
                        return t
                            ? n().createElement(
                                  'div',
                                  {
                                      className: M()(Fe, s && Se),
                                      onMouseOver: (e) => {
                                          (e.stopPropagation(), i(!0), De.hY.sound('highlight'));
                                      },
                                      onMouseOut: () => {
                                          i(!1);
                                      },
                                      onClick: () => {
                                          (o.push(Ie._.battlePass.progression, { chapterID: t }), De.hY.sound('play'));
                                      },
                                  },
                                  n().createElement(
                                      'div',
                                      { className: ye },
                                      n().createElement('div', { className: Ne }),
                                      n().createElement(
                                          'div',
                                          { className: Le },
                                          n().createElement('div', { className: Re }, Te.title.text()),
                                          n().createElement('div', { className: xe }, Te.description.text()),
                                      ),
                                  ),
                                  n().createElement('div', { className: ke }),
                                  n().createElement('div', { className: Pe }),
                              )
                            : null;
                    });
                var Me = a(7109),
                    $e = a(5603);
                const He = 'NotAvailable_base_c3c6f',
                    We = 'NotAvailable_background_d918b',
                    ze = 'NotAvailable_content_cfb9f',
                    Ge = 'NotAvailable_button_cecf6',
                    Ue = 'NotAvailable_description_f72f4',
                    Ve = 'NotAvailable_completedCount_d02b0',
                    je = R.strings.battle_pass.postProgressionView.footer,
                    qe = (0, k.Pi)(() => {
                        const e = P().model,
                            t = (0, T.tv)(),
                            a = e.computes.completedRegularChaptersCount(),
                            r = e.computes.regularChapters().length;
                        return n().createElement(
                            'div',
                            { className: He },
                            n().createElement('div', { className: We }),
                            n().createElement(
                                'div',
                                { className: ze },
                                n().createElement($e.z, {
                                    classMix: Ue,
                                    text: je.description.text(),
                                    binding: {
                                        completedChapters: n().createElement('span', { className: Ve }, a),
                                        chaptersAmount: r,
                                    },
                                }),
                                n().createElement(
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
                var Ze = a(2262);
                const Xe = 'PurchasingIP_base_cfbcf',
                    Ye = 'PurchasingIP_wrapper_e48ff',
                    Ke = 'PurchasingIP_border_d07a9',
                    Qe = 'PurchasingIP_base__hover_f2c6a',
                    Je = 'PurchasingIP_bg_fb9ec',
                    et = 'PurchasingIP_blink_c2c02',
                    tt = 'PurchasingIP_text_b07d5',
                    at = 'PurchasingIP_button_d288d',
                    rt = 'PurchasingIP_content_ae1a9',
                    nt = R.strings.battle_pass.postProgressionView.footer.purchaseIP,
                    st = (0, k.Pi)(() => {
                        const e = P().model,
                            t = (0, T.tv)(),
                            a = (0, r.useState)(!1),
                            s = a[0],
                            i = a[1];
                        return n().createElement(
                            'div',
                            {
                                className: M()(Xe, s && Qe),
                                onMouseOver: (e) => {
                                    (e.stopPropagation(), i(!0), De.hY.sound('highlight'));
                                },
                                onMouseOut: () => {
                                    i(!1);
                                },
                                onClick: () => {
                                    const a = e.computes.chaptersForPurchase();
                                    (De.hY.sound('play'),
                                        1 === a.length
                                            ? t.push(Ie._.battlePass.buyPassConfirm, { packageID: a[0].chapterID })
                                            : t.push(Ie._.battlePass.buyPass));
                                },
                            },
                            n().createElement(
                                'div',
                                { className: Ye },
                                n().createElement('div', { className: Je }),
                                n().createElement('div', { className: et }),
                                n().createElement(
                                    'div',
                                    { className: rt },
                                    n().createElement(
                                        'div',
                                        { className: tt },
                                        R.strings.battle_pass.postProgressionView.footer.purchaseIP.banner.text(),
                                    ),
                                    n().createElement(
                                        Me.u5,
                                        { type: Ze.L.main, size: Ze.q.medium, mixClass: at },
                                        nt.button.text(),
                                    ),
                                ),
                            ),
                            n().createElement('div', { className: Ke }),
                        );
                    }),
                    it = (0, k.Pi)(({ className: e = '' }) => {
                        const t = P().model.computes.footerState();
                        return n().createElement(
                            'div',
                            { className: M()(Be, e) },
                            (() => {
                                switch (t) {
                                    case C.NotAvailable:
                                        return n().createElement(qe, null);
                                    case C.PurchasingIP:
                                        return n().createElement(st, null);
                                    case C.ExtraChapter:
                                        return n().createElement(Oe, null);
                                    default:
                                        return null;
                                }
                            })(),
                        );
                    });
                var ot = a(935),
                    ut = a(873);
                const lt = 'Header_base_ad6d6',
                    ct = 'Header_background_e0cbb',
                    dt = 'Header_headlineContainer_c8da1',
                    _t = 'Header_headline_b8147',
                    mt = 'Header_divider_b0e6b',
                    bt = 'Header_title_d68bd',
                    Et = 'Header_descriptionContainer_a6e66',
                    pt = 'Header_descriptionPaused_acd9b',
                    gt = 'Header_description_bdbe7',
                    vt = 'Header_icon_e0e99',
                    ht = 'Header_label_e4d58',
                    ft = R.strings.battle_pass.postProgressionView.header,
                    Ct = (0, k.Pi)(({ className: e }) => {
                        const t = P().model.root.get(),
                            a = t.postProgressionStatus,
                            r = t.endDate,
                            s = a === i.Locked,
                            o = a === i.Paused,
                            u = (0, ut.UI)(r, ot.C.DayMonthFull);
                        return n().createElement(
                            'div',
                            { className: M()(lt, e) },
                            n().createElement('div', { className: ct }),
                            n().createElement(
                                'div',
                                { className: dt },
                                !s &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('span', { className: _t }, ft.headline.unlocked()),
                                        n().createElement('div', { className: mt }),
                                    ),
                                n().createElement($e.z, {
                                    classMix: _t,
                                    text: ft.headline.deadline(),
                                    binding: { endDate: u },
                                }),
                            ),
                            n().createElement('span', { className: bt }, ft.title()),
                            n().createElement(
                                'div',
                                { className: Et },
                                o
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          n().createElement('div', { className: vt }),
                                          n().createElement(
                                              'span',
                                              { className: ht },
                                              ft.description.onPause.highlight(),
                                          ),
                                          n().createElement(
                                              'span',
                                              { className: pt },
                                              ft.description.onPause.regular(),
                                          ),
                                      )
                                    : n().createElement('span', { className: gt }, ft.description.active()),
                            ),
                        );
                    });
                var At = a(5938);
                var wt = a(1527);
                const Bt = 'Counter_base_b2da0',
                    Dt = 'Counter_infinityIconContainer_cb4a3',
                    Ft = 'Counter_infinityIcon_e17a2',
                    yt = 'Counter_label_c54a5',
                    Pt = 'Counter_cyclesCompleted_b4cd3',
                    St = 'Counter_cyclesNumber_b6b89',
                    Nt = 'Counter_cyclesNumber__animated_ca040',
                    kt = 'Counter_cyclesNumber__hidden_bc8ba',
                    Rt = R.strings.battle_pass.postProgressionView.progression,
                    xt = (0, k.Pi)(({ className: e, labelRef: t, shouldRun: a }) => {
                        const r = P().model,
                            s = r.root.get(),
                            i = s.cyclesCompletedCount,
                            o = s.previousCyclesCompletedCount,
                            u = r.animationStep.get(),
                            l = i !== o && [v.Idle, v.FillProgressMax].includes(u);
                        return n().createElement(
                            'div',
                            { className: M()(Bt, e), ref: t },
                            n().createElement('div', { className: Dt }, n().createElement('div', { className: Ft })),
                            n().createElement(
                                'div',
                                { className: yt },
                                i
                                    ? n().createElement(
                                          'div',
                                          { className: Pt },
                                          n().createElement('span', null, Rt.cyclesCompleted()),
                                          n().createElement(
                                              'span',
                                              {
                                                  key: `cyclesCompletedCount-${a}`,
                                                  className: M()(St, a && Nt, l && kt),
                                              },
                                              i,
                                          ),
                                      )
                                    : Rt.cyclicalProgression(),
                            ),
                        );
                    }),
                    Lt = {
                        base: 'Cycle_base_ec7bd',
                        labelContainer: 'Cycle_labelContainer_a517b',
                        contour: 'Cycle_contour_ffb2c',
                        border: 'Cycle_border_f27e6',
                        border__horizontal: 'Cycle_border__horizontal_b8864',
                        contour__2x: 'Cycle_contour__2x_a7d9c',
                        border__vertical: 'Cycle_border__vertical_dcb1a',
                        arrow: 'Cycle_arrow_b368f',
                        bar: 'Cycle_bar_bbd00',
                        bar__state1: 'Cycle_bar__state1_d5ccd',
                        state1: 'Cycle_state1_b8221',
                        bar__state2: 'Cycle_bar__state2_a3d8c',
                        state2: 'Cycle_state2_b02a3',
                        bar__state3: 'Cycle_bar__state3_b28e8',
                        state3: 'Cycle_state3_f3827',
                        bar__state4: 'Cycle_bar__state4_a0724',
                        state4: 'Cycle_state4_bbc59',
                        bar__state5: 'Cycle_bar__state5_a2c2d',
                        state5: 'Cycle_state5_ea895',
                    },
                    It = '--label-offset',
                    Tt = { left: 0, width: 0 },
                    Ot = (0, k.Pi)(({ className: e, shouldRun: t }) => {
                        const a = P().model.root.get().cyclesCompletedCount,
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            o = (0, w.GS)().mediaSize,
                            u = (0, wt.V)(),
                            l = (0, r.useState)({ [It]: '0%' }),
                            c = l[0],
                            d = l[1];
                        var _, m;
                        return (
                            (_ = () => {
                                var e, t, a, r;
                                const n =
                                        null != (e = null == (t = s.current) ? void 0 : t.getBoundingClientRect())
                                            ? e
                                            : Tt,
                                    o =
                                        null != (a = null == (r = i.current) ? void 0 : r.getBoundingClientRect().left)
                                            ? a
                                            : 0,
                                    l = 15 * u,
                                    c = (100 * (o - n.left - l)) / n.width;
                                d({ [It]: `${c}%` });
                            }),
                            (m = [s.current, i.current, o, u, a]),
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
                            n().createElement(
                                'div',
                                { className: M()(Lt.base, e), style: c },
                                n().createElement('div', { className: Lt.arrow }),
                                n().createElement(
                                    'div',
                                    { className: M()(Lt.contour, Lt[`contour__${u}x`]), ref: s },
                                    n().createElement('div', { className: M()(Lt.border, Lt.border__vertical) }),
                                    n().createElement('div', { className: M()(Lt.border, Lt.border__horizontal) }),
                                    t &&
                                        Array(5)
                                            .fill(void 0)
                                            .map((e, t) =>
                                                n().createElement('div', {
                                                    key: `bar-${t}`,
                                                    className: M()(Lt.bar, Lt[`bar__state${t + 1}`]),
                                                }),
                                            ),
                                ),
                                n().createElement(xt, { className: Lt.labelContainer, labelRef: i, shouldRun: t }),
                            )
                        );
                    }),
                    Mt = 'ProgressBar_base_f309a',
                    $t = 'ProgressBar_progressBackground_a69e7',
                    Ht = 'ProgressBar_progressBar_c0bb5',
                    Wt = 'ProgressBar_progressBar__disabled_ed3df',
                    zt = 'ProgressBar_cycle_e15fd',
                    Gt = (0, k.Pi)(() => {
                        const e = P(),
                            t = e.model,
                            a = e.controls,
                            s = t.root.get().postProgressionStatus,
                            o = t.animationStep.get(),
                            u = o === v.RunCycle,
                            l = s === i.Locked,
                            c = s === i.Paused,
                            d = l || c,
                            _ = (0, w.GS)().mediaSize,
                            m = t.computes.getProgressValues(_),
                            b = m.progressValue,
                            h = m.previousProgressValue,
                            f = m.maxProgressValue,
                            C = t.computes.progressChanged();
                        ((0, r.useEffect)(() => {
                            switch (o) {
                                case v.FillProgressMax:
                                case v.RefillProgress:
                                    return void a.handleProgressAchieved();
                                case v.RunCycle:
                                    return void a.handleCycleCompleted();
                            }
                        }, [o, a]),
                            (0, r.useEffect)(() => {
                                if (C && o === v.Idle)
                                    return (0, S.F)(() => {
                                        a.handleProgressAchieved();
                                    }, E);
                            }, [o, a, C]));
                        const A = (0, r.useRef)((0, At.MR)());
                        return n().createElement(
                            'div',
                            { className: Mt, style: { '--progress-line-width': `${f}rem` } },
                            n().createElement('div', { className: $t }),
                            n().createElement(
                                Ee.u,
                                { contentId: R.views.lobby.battle_pass.tooltips.BattlePassPointsView('resId') },
                                n().createElement(
                                    'div',
                                    { className: M()(Ht, d && Wt) },
                                    n().createElement(At._e, {
                                        api: A,
                                        value: b,
                                        deltaFrom: h,
                                        maxValue: f,
                                        disabled: d,
                                        animationSettings: p,
                                        theme: g,
                                    }),
                                ),
                            ),
                            n().createElement(Ot, { className: zt, shouldRun: u }),
                        );
                    });
                var Ut = a(9279);
                const Vt = 'Toolbar_infoButtons_e0a06',
                    jt = R.strings.battle_pass.postProgressionView.toolbar,
                    qt = (0, k.Pi)(({ className: e }) => {
                        const t = P().controls,
                            a = t.openInfoPage,
                            r = t.openPointsInfo;
                        return n().createElement(
                            'div',
                            { className: e },
                            n().createElement(
                                'div',
                                { className: Vt },
                                n().createElement(Ut.A, { caption: jt.aboutBattlePass(), type: 'info', onClick: a }),
                                n().createElement(Ut.A, { caption: jt.howToEarnPoints(), type: 'info', onClick: r }),
                            ),
                        );
                    }),
                    Zt = 'App_base_ad0d6',
                    Xt = 'App_toolbar_b1287',
                    Yt = 'App_awardsWidget_f4c66',
                    Kt = 'App_award_d5cc4',
                    Qt = 'App_content_d43be',
                    Jt = 'App_header_bd39c',
                    ea = 'App_progression_cecc4',
                    ta = 'App_footer_ef8d5',
                    aa = R.images.gui.maps.icons.battlePass.backgrounds.progression,
                    ra = (0, k.Pi)(() => {
                        const e = P(),
                            t = e.model,
                            a = e.controls,
                            s = t.root.get().chapterID,
                            i = t.animationStep.get(),
                            o = t.computes.cycleChanged(),
                            u = (0, T.tv)();
                        ((0, r.useEffect)(() => {
                            if (i !== v.Idle) {
                                const e = h[i],
                                    t = e.nextStep,
                                    r = e.delay;
                                return (0, S.F)(() => {
                                    a.setAnimationStep(t);
                                }, r);
                            }
                            o && a.setAnimationStep(v.FillProgressMax);
                        }, [i, a, o]),
                            I.N.useHandleKeydown(N.n.ESCAPE, () => u.goBack()));
                        const l = `url(${(0, x.wD)(aa, s)})`;
                        return n().createElement(
                            'div',
                            { className: Zt, style: { backgroundImage: l } },
                            n().createElement(qt, { className: Xt }),
                            n().createElement(L.Z, {
                                rootId: R.aliases.battle_pass.PostProgression('resId'),
                                context: 'model.awardsWidget',
                                classNames: { base: Yt, award: Kt },
                            }),
                            n().createElement(
                                'div',
                                { className: Qt },
                                n().createElement(Ct, { className: Jt }),
                                n().createElement(
                                    'div',
                                    { className: ea },
                                    n().createElement(we, null),
                                    n().createElement(Gt, null),
                                ),
                            ),
                            n().createElement(it, { className: ta }),
                        );
                    }),
                    na = () =>
                        n().createElement(
                            y,
                            { options: { rootId: R.aliases.battle_pass.PostProgression('resId') } },
                            n().createElement(ra, null),
                        );
            },
            8230: (e, t, a) => {
                'use strict';
                a.d(t, { $: () => S });
                var r = a(8656),
                    n = a(4020),
                    s = a(828),
                    i = a(2041),
                    o = a(7363),
                    u = a.n(o),
                    l = a(1705),
                    c = a(9994),
                    d = a(1158),
                    _ = a(8862),
                    m = a(9849),
                    b = a.n(m),
                    E = a(2714),
                    p = a(1820),
                    g = a(3287),
                    v = a(8024);
                const h = 'Content_base_ae5c4',
                    f = 'Content_mainContent_a092c',
                    C = 'Content_base__noScroll_ad6fe',
                    A = R.strings.battle_pass.battlePassBuyView.reward,
                    w = (0, i.Pi)(() => {
                        const e = (0, v.t)().model,
                            t = e.levels.get(),
                            a = t.fromLevel,
                            r = t.toLevel,
                            n = t.isPurchaseWithLevels,
                            s = e.computes.nowRewards(),
                            i = e.computes.futureRewards(),
                            l = ((e, t, a) =>
                                a
                                    ? { description: A.descriptionNowRewardsCheckbox() }
                                    : e < t
                                      ? { description: A.descriptionNowRewards(), completedSteps: `${e} - ${t}` }
                                      : { description: A.descriptionNowRewardsSingle(), completedSteps: `${t}` })(
                                a,
                                r,
                                n,
                            ),
                            c = l.description,
                            d = l.completedSteps,
                            _ = (0, o.useState)(!1),
                            m = _[0],
                            w = _[1];
                        return u().createElement(
                            g.z,
                            { className: b()(h, !m && C), setVisibleScroll: w },
                            u().createElement(
                                'div',
                                { className: f },
                                s.length > 0 &&
                                    u().createElement(p.r, {
                                        description: c,
                                        iconType: E.Q.now,
                                        rewards: s,
                                        steps: d,
                                        title: A.titleNowRewards(),
                                    }),
                                i.length > 0 &&
                                    u().createElement(p.r, {
                                        description: A.descriptionFutureRewards(),
                                        iconType: E.Q.future,
                                        rewards: i,
                                        title: A.titleFutureRewards(),
                                    }),
                            ),
                        );
                    }),
                    B = 'RewardsViewContent_base_c6578',
                    D = 'RewardsViewContent_content_b14ad',
                    F = 'RewardsViewContent_background_cc9fe',
                    y = 'RewardsViewContent_shadow_e76b8';
                function P(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                const S = (0, i.Pi)(() => {
                    const e = (0, v.t)().model.levels.get().chapterID,
                        t = (0, o.useState)(!1),
                        a = t[0],
                        i = t[1],
                        m = (0, _.tv)();
                    (c.N.useHandleKeydown(n.n.ESCAPE, () => m.goBack()),
                        (0, o.useEffect)(() => {
                            (function () {
                                var e,
                                    t =
                                        ((e = function* () {
                                            (yield (0, s.Eu)(), yield (0, r.nS)(), i(!0));
                                        }),
                                        function () {
                                            var t = this,
                                                a = arguments;
                                            return new Promise(function (r, n) {
                                                var s = e.apply(t, a);
                                                function i(e) {
                                                    P(s, r, n, i, o, 'next', e);
                                                }
                                                function o(e) {
                                                    P(s, r, n, i, o, 'throw', e);
                                                }
                                                i(void 0);
                                            });
                                        });
                                return function () {
                                    return t.apply(this, arguments);
                                };
                            })()();
                        }, []));
                    const b = {
                        backgroundImage: `url(${(0, l.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, e)})`,
                    };
                    return u().createElement(
                        'div',
                        { className: B },
                        u().createElement(
                            'div',
                            { className: F },
                            u().createElement(d.N, { chapter: e, isCurrent: !0, customBackgroundStyle: b }),
                        ),
                        u().createElement('div', { className: y }),
                        a && u().createElement('div', { className: D }, u().createElement(w, null)),
                    );
                });
            },
            8024: (e, t, a) => {
                'use strict';
                a.d(t, { k: () => o, t: () => u });
                var r = a(5090),
                    n = a(9723),
                    s = a(5369);
                const i = (0, r.q3)()(({ observableModel: e }) => {
                        const t = {
                                levels: e.object(),
                                nowRewards: e.array('nowRewards.items'),
                                futureRewards: e.array('futureRewards.items'),
                            },
                            a = (0, s.Om)(() => t.nowRewards.get(), { equals: n.jv }),
                            r = (0, s.Om)(() => t.futureRewards.get(), { equals: n.jv });
                        return Object.assign({}, t, { computes: { nowRewards: a, futureRewards: r } });
                    }, n.ZT),
                    o = i[0],
                    u = i[1];
            },
            7959: (e, t, a) => {
                'use strict';
                a.d(t, { jw: () => n, k9: () => r });
                const r = 3e3,
                    n = 'new_skill';
            },
            1705: (e, t, a) => {
                'use strict';
                a.d(t, { OH: () => c, TZ: () => l, W4: () => u, cs: () => i, fW: () => o, wD: () => s });
                var r = a(4490);
                const n = (e) => {
                        switch (e) {
                            case r.$u.Micro:
                                return 's';
                            case r.$u.Small:
                                return 'm';
                            default:
                                return 'l';
                        }
                    },
                    s = (e, t, a = '') => {
                        const r = a.length > 0 ? `_${a}` : a,
                            n = e.$dyn(`c_${t}${r}`),
                            s = String(t).slice(-1),
                            i = e.$dyn(`default_${s}${r}`);
                        return n || i;
                    },
                    i = (e, t, a) => {
                        const r = R.images.gui.maps.icons.battlePass.logo.chapterIcons,
                            i = t ? 'BP' : '',
                            o = `${n(a)}${i}`;
                        return { backgroundImage: `url(${s(r, e, o)})` };
                    },
                    o = (e, t) => {
                        const a = R.images.gui.maps.icons.battlePass.logo.flag,
                            r = n(t);
                        return { backgroundImage: `url(${s(a, e, r)})` };
                    },
                    u = (e) => {
                        const t = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${s(t.progression, e)})` }
                            : { backgroundImage: `url(${t.$dyn('common')})` };
                    },
                    l = (e) => ({
                        backgroundImage: `url(${s(R.images.gui.maps.icons.battlePass.chapter_choice.commander, e)})`,
                    }),
                    c = (e) => ({
                        backgroundImage: `url(${s(R.images.gui.maps.icons.battlePass.chapter_choice.tank, e)})`,
                    });
            },
            3245: (e, t, a) => {
                'use strict';
                let r = (function (e) {
                    return ((e.style = 'style'), (e.tankman = 'tankman'), e);
                })({});
                (r.style, r.tankman);
            },
            5278: (e, t, a) => {
                'use strict';
                a.d(t, {
                    $n: () => m,
                    CX: () => h,
                    Hj: () => l,
                    UP: () => d,
                    at: () => p,
                    ei: () => o,
                    pC: () => c,
                    r_: () => u,
                    u6: () => v,
                    uc: () => g,
                });
                var r = a(2486),
                    n = a(4692),
                    s = (a(768), a(873)),
                    i = a(6758);
                (a(4490), a(3245));
                const o = (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
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
                        const s = e.item,
                            i = e.name,
                            o = e.value,
                            u = e.overlayType,
                            l = e.tooltipId,
                            c = e.tooltipContentId;
                        return {
                            name: s || i,
                            image: (0, n.ry)(e, t),
                            special: u,
                            value: o,
                            valueType: (0, n.p3)(i),
                            title: a && _(e),
                            tooltipArgs: (0, n.pI)({ tooltipId: l }, Number(c), { ignoreShowDelay: !0 }),
                            size: t,
                        };
                    },
                    b = [l.battleQuest, l.tankman, l.style, l.progressiveStyle, l.vehicle],
                    E = (e, t) => b.indexOf(t) - b.indexOf(e),
                    p = (e) => {
                        const t = e.sort(E);
                        return { mainReward: t[0], additionalReward: t[1] };
                    },
                    g = (e, t, a) => {
                        const r = `style_3d_${e}_${t}${a}`;
                        return { backgroundImage: `url(${R.images.gui.maps.icons.battlePass.rewards.$dyn(r)})` };
                    },
                    v = (e) => {
                        const t = (0, s.f8)(e),
                            a = R.strings.battle_pass.status.timeLeft;
                        switch (!0) {
                            case t.days >= 1:
                                return (0, i.uF)(a.days(), { day: t.days });
                            case t.hours >= 1:
                                return (0, i.uF)(a.hours(), { hour: t.hours });
                            case t.minutes >= 1:
                                return (0, i.uF)(a.min(), { min: t.minutes });
                            default:
                                return a.lessMin();
                        }
                    },
                    h = (e) => {
                        const t = () => {
                            const t = viewEnv.getExternalPaddingsRem(),
                                a = t.top,
                                r = t.right,
                                n = t.bottom,
                                s = t.left;
                            (e.style.setProperty('--external-padding-top', `${a}rem`),
                                e.style.setProperty('--external-padding-right', `${r}rem`),
                                e.style.setProperty('--external-padding-bottom', `${n}rem`),
                                e.style.setProperty('--external-padding-left', `${s}rem`));
                        };
                        (t(), engine.on('self.onPaddingsUpdated', () => t()));
                    };
            },
            4343: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => i });
                var r = a(8494),
                    n = a(4020),
                    s = a(7363);
                const i = (e) => {
                    const t = (0, s.useCallback)(
                        (t) => {
                            t.altKey || e();
                        },
                        [e],
                    );
                    (0, r.gd)(n.n.ENTER, t);
                };
            },
            3975: (e, t, a) => {
                'use strict';
                a.d(t, { d: () => l });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(1374);
                const u = 'AnimatedReward_base_f60ec',
                    l = ({ children: e, animationConfig: t, className: a }) => {
                        const r = (0, o.useSpring)(t);
                        return i().createElement(o.animated.div, { style: r, className: n()(u, a) }, e);
                    };
            },
            2215: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => me });
                var r = a(7363),
                    n = a.n(r),
                    s = a(9849),
                    i = a.n(s),
                    o = a(8739),
                    u = a(2041),
                    l = a(6485),
                    c = a(4029),
                    d = a(8925);
                const _ = (e, t, a, r, n) => {
                    const s = R.images.gui.maps.icons.battlePass.awards_widget;
                    return n
                        ? `url(${s.$dyn(`${e.toLowerCase()}_${t}${a}_${r}_${n}`)})`
                        : `url(${s.$dyn(`${e.toLowerCase()}_${t}${a}_${r}`)})`;
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
                    b = (function (e) {
                        return ((e.Small = 'small'), (e.Big = 'big'), e);
                    })({}),
                    E = (function (e) {
                        return ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'), e);
                    })({}),
                    p = (function (e) {
                        return ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''), e);
                    })({}),
                    g = (function (e) {
                        return (
                            (e.Hover = 'Hover'),
                            (e.Disabled = 'Disabled'),
                            (e.Triggered = 'Triggered'),
                            (e.None = ''),
                            e
                        );
                    })({});
                const v = {
                        base: 'Background_base_f3073',
                        bg: 'Background_bg_a03fd',
                        bgDisabled: 'Background_bgDisabled_abb43',
                        bgHover: 'Background_bgHover_a39f3',
                        base__big: 'Background_base__big_a6d00',
                        base__hovered: 'Background_base__hovered_a74f9',
                    },
                    h = ({ size: e, isHover: t, disabled: a = !1, type: r = m.Coin }) => {
                        const s = (0, d.GS)().mediaSize >= d.cJ.Medium ? E.Medium : E.Small;
                        return n().createElement(
                            'div',
                            { className: i()(v.base, v[`base__${e}`], v[`base__${e}${r}`], t && v.base__hovered) },
                            a
                                ? n().createElement('div', {
                                      className: v.bgDisabled,
                                      style: { backgroundImage: _(r, p.Background, g.Disabled, e, s) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: v.bg,
                                          style: { backgroundImage: _(r, p.Background, g.None, e, s) },
                                      }),
                                      n().createElement('div', {
                                          className: v.bgHover,
                                          style: { backgroundImage: _(r, p.Background, g.Hover, e, s) },
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
                    C = ({ size: e, isHover: t, highlighted: a = !1, disabled: r = !1, type: s = m.Coin }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? E.Medium : E.Small;
                        return n().createElement(
                            'div',
                            { className: i()(f.base, f[`base__${e}`], t && f.base__hovered) },
                            r
                                ? n().createElement('div', {
                                      className: i()(f.borderDisabled, f[`borderDisabled__${e}`]),
                                      style: { backgroundImage: _(s, p.Border, g.Disabled, e, o) },
                                  })
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', {
                                          className: f.border,
                                          style: { backgroundImage: _(a ? m.Collection : s, p.Border, g.None, e, o) },
                                      }),
                                      n().createElement('div', {
                                          className: f.borderHover,
                                          style: { backgroundImage: _(s, p.Border, g.Hover, e, o) },
                                      }),
                                  ),
                        );
                    };
                var A = a(1602),
                    w = a(5603);
                const B = { base: 'CountValue_base_b47f3', base__big: 'CountValue_base__big_b1f00' },
                    D = ({ state: e, count: t, size: a, maxCount: r = 0 }) => {
                        switch (e) {
                            case y.InProgress:
                                return n().createElement(w.z, { text: `${t || 0} / ${r}` });
                            case y.Completed:
                                return n().createElement('div', { className: i()(B.base, B[`base__${a}`]) });
                            default:
                                return n().createElement(A.A, { format: 'integral', value: t });
                        }
                    },
                    F = {
                        base: 'Count_base_d2aba',
                        base__big: 'Count_base__big_fa81f',
                        base__locked: 'Count_base__locked_cb8f9',
                        base__disabled: 'Count_base__disabled_ac367',
                    };
                let y = (function (e) {
                    return ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'), e);
                })({});
                const P = ({
                        size: e,
                        count: t,
                        maxCount: a,
                        state: r = y.Default,
                        isLocked: s = !1,
                        disabled: o = !1,
                    }) =>
                        n().createElement(
                            'div',
                            { className: i()(F.base, F[`base__${e}`], s && F.base__locked, o && F.base__disabled) },
                            n().createElement(D, { state: r, size: e, count: t, maxCount: a }),
                        ),
                    S = {
                        base: 'Icon_base_be976',
                        base__big: 'Icon_base__big_b2756',
                        base__darkened: 'Icon_base__darkened_d968e',
                        base__hover: 'Icon_base__hover_e2ee8',
                        base__disabled: 'Icon_base__disabled_a1f6f',
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
                    k = ({ size: e, isHover: t, isDark: a = !0, disabled: r = !1, type: s }) => {
                        const o = (0, d.GS)().mediaSize >= d.cJ.Medium ? E.Medium : E.Small;
                        return n().createElement('div', {
                            className: i()(S.base, S[`base__${e}`], S[`base__${N(t, a, r)}`]),
                            style: { backgroundImage: _(s, p.Icon, g.None, e, s === m.Collection ? E.None : o) },
                        });
                    },
                    x = {
                        base: 'Label_base_f2adf',
                        base__big: 'Label_base__big_dbfd8',
                        base__gold: 'Label_base__gold_bb470',
                        base__hover: 'Label_base__hover_e4ce6',
                        base__disabled: 'Label_base__disabled_dad1b',
                    },
                    L = (e, t) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case t:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    I = ({ size: e, title: t, isHover: a, disabled: r = !1, isGold: s = !1 }) =>
                        n().createElement(
                            'div',
                            { className: i()(x.base, x[`base__${e}`], x[`base__${L(r, a)}`], s && x.base__gold) },
                            t,
                        ),
                    T = {
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
                    O = R.strings.battle_pass.awardsWidget,
                    M = ({ count: e, disabled: t = !1, onClick: a, size: s }) => {
                        const o = (0, r.useState)(!1),
                            u = o[0],
                            d = o[1],
                            _ = 1 === e ? O.title.awardSingle() : O.title.awardMultiple(),
                            b = t ? O.description.awardDisabled() : O.description.award(),
                            E = (0, r.useCallback)(() => {
                                t || (c.$.playClick(), a());
                            }, [t, a]);
                        return n().createElement(
                            l.i,
                            { body: b, isEnabled: Boolean(b) },
                            n().createElement(
                                'div',
                                {
                                    className: i()(
                                        T.base,
                                        T[`base__${s}`],
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
                                n().createElement(C, { size: s, isHover: u, type: m.Award, disabled: t }),
                                n().createElement(h, { size: s, isHover: u, type: m.Award, disabled: t }),
                                n().createElement(k, { size: s, isHover: u, type: m.Award, disabled: t, isDark: !1 }),
                                n().createElement(P, { size: s, count: e, disabled: t }),
                                n().createElement(I, { size: s, isHover: u, title: _, disabled: t, isGold: !0 }),
                                !t &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: i()(T.shine, T.shine__left) }),
                                        n().createElement('div', { className: i()(T.shine, T.shine__right) }),
                                        n().createElement('div', { className: T.arrow }),
                                        n().createElement(
                                            'div',
                                            { className: T.blinkShape },
                                            n().createElement('div', { className: T.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    $ = { base: 'CoinAward_base_eb565', base__big: 'CoinAward_base__big_ddf7f' },
                    H = R.strings.battle_pass.awardsWidget,
                    W = ({ count: e, onClick: t, size: a }) => {
                        const s = (0, r.useState)(!1),
                            o = s[0],
                            u = s[1];
                        return n().createElement(
                            l.i,
                            { body: H.description.coin(), isEnabled: Boolean(H.description.coin()) },
                            n().createElement(
                                'div',
                                {
                                    className: i()($.base, $[`base__${a}`]),
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
                                n().createElement(C, { size: a, isHover: o }),
                                n().createElement(h, { size: a, isHover: o }),
                                n().createElement(k, { size: a, isHover: o, type: m.Coin }),
                                n().createElement(P, { size: a, count: e }),
                                n().createElement(I, { size: a, isHover: o, title: H.title.coin() }),
                            ),
                        );
                    },
                    z = {
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
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        U.apply(null, arguments)
                    );
                }
                const V = (e) => {
                    let t = e.value,
                        a = e.isEmpty,
                        r = void 0 !== a && a,
                        s = e.className,
                        o = e.size,
                        u = void 0 === o ? 'normal' : o,
                        l = e.fadeInAnimation,
                        c = void 0 !== l && l,
                        d = e.hide,
                        _ = void 0 !== d && d,
                        m = e.maximumNumber,
                        b = void 0 === m ? 99 : m,
                        E = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    a[r] = e[r];
                                }
                            return a;
                        })(e, G);
                    const p = r ? null : t,
                        g = 'string' == typeof p;
                    if ((p && !g && p < 0) || 0 === p) return null;
                    const v = p && !g && p > b,
                        h = i()(
                            z.base,
                            z[`base__${u}`],
                            c && z.base__animated,
                            _ && z.base__hidden,
                            !p && z.base__pattern,
                            r && z.base__empty,
                            s,
                        );
                    return n().createElement(
                        'div',
                        U({ className: h }, E),
                        n().createElement('div', { className: z.bg }),
                        n().createElement('div', { className: z.pattern }),
                        n().createElement(
                            'div',
                            { className: i()(z.value, g && z.value__text) },
                            v ? b : p,
                            v && n().createElement('span', { className: z.plus }, '+'),
                        ),
                    );
                };
                var j = a(9659);
                const q = {
                        base: 'CollectionAward_base_f6b67',
                        base__big: 'CollectionAward_base__big_a4e03',
                        bubble: 'CollectionAward_bubble_c556b',
                    },
                    Z = R.strings.battle_pass.awardsWidget,
                    X = ({ count: e, maxCount: t, newItemsCount: a, hasTrigger: s, size: o, onClick: u }) => {
                        const d = (0, r.useState)(!1),
                            _ = d[0],
                            E = d[1],
                            p = t === e,
                            g = o === b.Small && s,
                            v = p ? Z.description.collectionCompleted() : Z.description.collection(),
                            f = (0, j.z)(() => {
                                (c.$.playClick(), u());
                            });
                        return n().createElement(
                            l.i,
                            { body: v, isEnabled: Boolean(v) },
                            n().createElement(
                                'div',
                                {
                                    className: i()(q.base, q[`base__${o}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), E(!0));
                                    },
                                    onMouseLeave: () => {
                                        E(!1);
                                    },
                                    onClick: f,
                                },
                                n().createElement(C, { size: o, isHover: _, type: m.Coin, highlighted: g }),
                                n().createElement(h, { size: o, isHover: _ }),
                                n().createElement(k, { size: o, isHover: _, type: m.Collection }),
                                n().createElement(P, {
                                    size: o,
                                    count: e,
                                    maxCount: t,
                                    state: p ? y.Completed : y.InProgress,
                                }),
                                n().createElement(I, { size: o, isHover: _, title: Z.title.collection() }),
                                a > 0 &&
                                    n().createElement(
                                        'div',
                                        { className: q.bubble },
                                        n().createElement(V, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var Y = a(3925);
                const K = {
                        base: 'CommanderAward_base_ad575',
                        icon: 'CommanderAward_icon_e1e10',
                        base__hover: 'CommanderAward_base__hover_cedd4',
                    },
                    Q = R.strings.battle_pass.awardsWidget,
                    J = ({ onClick: e, size: t, tankmenScreenID: a }) => {
                        const s = (0, r.useState)(!1),
                            o = s[0],
                            u = s[1],
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
                                    className: i()(K.base, K[`base__${t}`], o && K.base__hover),
                                    onMouseEnter: () => {
                                        (Y.hY.sound(R.sounds.bp_highlight_02()), u(!0));
                                    },
                                    onMouseLeave: () => u(!1),
                                    onClick: () => {
                                        (Y.hY.sound(R.sounds.play()), e());
                                    },
                                },
                                n().createElement(C, { size: t, isHover: o }),
                                n().createElement(h, { size: t, isHover: o }),
                                n().createElement(I, { size: t, isHover: o, title: Q.title.commander() }),
                                n().createElement('div', {
                                    className: K.icon,
                                    style: { backgroundImage: `url(${d})` },
                                }),
                            ),
                        );
                    },
                    ee = { base: 'TalerAward_base_bd8d2', base__big: 'TalerAward_base__big_e13b6' },
                    te = R.strings.battle_pass.awardsWidget,
                    ae = ({ count: e, onClick: t, size: a }) => {
                        const s = (0, r.useState)(!1),
                            o = s[0],
                            u = s[1];
                        return n().createElement(
                            l.i,
                            { body: te.description.taler() },
                            n().createElement(
                                'div',
                                {
                                    className: i()(ee.base, ee[`base__${a}`], o && ee.base__hover),
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
                                n().createElement(C, { size: a, isHover: o }),
                                n().createElement(h, { size: a, isHover: o }),
                                n().createElement(k, { size: a, isHover: o, type: m.Taler }),
                                n().createElement(P, { size: a, count: e }),
                                n().createElement(I, { size: a, isHover: o, title: te.title.taler() }),
                            ),
                        );
                    },
                    re = {
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
                    se = ({ count: e, onClick: t, size: a }) => {
                        const s = (0, r.useState)(!1),
                            o = s[0],
                            u = s[1],
                            c = Boolean(e),
                            d = c ? m.Ticket : void 0;
                        return n().createElement(
                            l.i,
                            { body: ne.description.ticket(), isEnabled: Boolean(ne.description.ticket()) },
                            n().createElement(
                                'div',
                                {
                                    className: i()(re.base, re[`base__${a}`], c && re.base__hasAppearAnimation),
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
                                n().createElement(C, { size: a, isHover: o, type: d }),
                                n().createElement(h, { size: a, isHover: o, type: d }),
                                n().createElement(k, { size: a, isHover: o, type: m.Ticket, isDark: !c }),
                                n().createElement(P, { size: a, count: e }),
                                n().createElement(I, { size: a, isHover: o, title: ne.title.ticket(), isGold: c }),
                                c &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: i()(re.shine, re.shine__left) }),
                                        n().createElement('div', { className: i()(re.shine, re.shine__right) }),
                                        n().createElement('div', { className: re.arrow }),
                                        n().createElement(
                                            'div',
                                            { className: re.blinkShape },
                                            n().createElement('div', { className: re.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var ie = a(5090),
                    oe = a(5369);
                const ue = (0, ie.q3)()(
                        ({ observableModel: e, externalModel: t }) => {
                            const a = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                r = (0, oe.Om)((e) => {
                                    const r = a.root.get(),
                                        n = r.talerCount,
                                        s = r.notChosenRewardCount,
                                        i = r.bpcoinCount,
                                        o = r.ticketsCount,
                                        u = r.isChooseRewardsEnabled,
                                        l = r.tankmenScreenID,
                                        c = r.isTalerEnabled,
                                        d = r.isBpCoinEnabled,
                                        _ = r.isTicketsEnabled,
                                        b = a.collectionEntryPoint.get(),
                                        E = b.collectionItemCount,
                                        p = b.newCollectionItemCount,
                                        g = b.maxCollectionItemCount,
                                        v = b.isFirstEnter,
                                        h = b.isCollectionsEnabled;
                                    return [
                                        {
                                            type: m.Award,
                                            props: {
                                                size: e,
                                                count: s,
                                                disabled: !u,
                                                onClick: t.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: s > 0,
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
                                                count: i,
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
                                                count: E,
                                                maxCount: g,
                                                newItemsCount: p,
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
                        base: 'AwardsWrapper_base_c2632',
                        award: 'AwardsWrapper_award_a5575',
                        base__big: 'AwardsWrapper_base__big_c4528',
                    },
                    _e = (0, u.Pi)(({ size: e, classNames: t }) => {
                        const a = ce().model;
                        return n().createElement(
                            'div',
                            { className: i()(de.base, de[`base__${e}`], null == t ? void 0 : t.base) },
                            o.UI(
                                a.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    n().createElement(
                                        'div',
                                        { key: e.type, className: i()(de.award, null == t ? void 0 : t.award) },
                                        ((e, t) => {
                                            switch (e) {
                                                case m.Award:
                                                    return n().createElement(M, t);
                                                case m.Ticket:
                                                    return n().createElement(se, t);
                                                case m.Coin:
                                                    return n().createElement(W, t);
                                                case m.Taler:
                                                    return n().createElement(ae, t);
                                                case m.Collection:
                                                    return n().createElement(X, t);
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
                    me = ({ rootId: e, size: t = b.Small, context: a = 'model', classNames: r }) =>
                        n().createElement(
                            le,
                            { options: { context: a, rootId: e } },
                            n().createElement(_e, { size: t, classNames: r }),
                        );
            },
            3346: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => d });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7109),
                    i = a(7363),
                    o = a.n(i);
                const u = 'BuyButtons_base_be140',
                    l = 'BuyButtons_button_dbfbe',
                    c = R.strings.battle_pass.battlePassBuyView,
                    d = ({
                        isWalletAvailable: e,
                        onAccept: t,
                        buttonAcceptText: a,
                        onCancel: r,
                        className: i,
                        isMulticurrency: d = !1,
                    }) =>
                        o().createElement(
                            'div',
                            { className: n()(u, i) },
                            o().createElement(
                                s.u5,
                                { type: s.L$.main, size: s.qE.medium, disabled: !e, onClick: t, mixClass: l },
                                a,
                            ),
                            !d &&
                                o().createElement(
                                    s.u5,
                                    { type: s.L$.primary, size: s.qE.medium, onClick: r, mixClass: l },
                                    c.btnCancel(),
                                ),
                        );
            },
            1158: (e, t, a) => {
                'use strict';
                a.d(t, { N: () => c });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(1705);
                const u = 'ChapterBackground_base_ec1b7',
                    l = 'ChapterBackground_base__current_d1211',
                    c = ({ chapter: e, isCurrent: t, customBackgroundStyle: a }) =>
                        i().createElement('div', { className: n()(u, t && l), style: a || (0, o.W4)(e) });
            },
            3927: (e, t, a) => {
                'use strict';
                a.d(t, { G4: () => D });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s);
                const o = (e, t) => {
                    const a = t.postfix ? `_${t.postfix}` : '';
                    return ((e) => {
                        const t = e.path.$dyn(`${e.name}_${e.id}`),
                            a = e.path.$dyn('default');
                        return t || a;
                    })(e).$dyn(`${t.name}${a}`);
                };
                let u = (function (e) {
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
                        isForRewardScreen: r,
                        curState: s,
                        isFirstLevel: o,
                        showProgressionCompleted: u,
                    }) => {
                        const l = n()(d.base, d[`base__${t}`]),
                            c = n()(
                                d.text,
                                d.text__filtered,
                                d[`text__${t}`],
                                d[`text__${s}`],
                                u && d.text__hideWithDelay,
                                o && d.text__new,
                                r && d.text__rewardScreen,
                            ),
                            _ = n()(
                                d.textWithBlend,
                                o && d.text__new,
                                u && d.text__hideWithDelay,
                                d[`textWithBlend__${s}`],
                            ),
                            m = n()(d.text, d.text__blended, d[`text__${t}`], r && d.text__rewardScreen),
                            b = n()(
                                d.textMask,
                                a && d.textMask__gold,
                                r && d.textMask__animated,
                                a && r && d.textMask__goldContrast,
                                d[`textMask__${t}`],
                            );
                        return i().createElement(
                            'div',
                            { className: l },
                            i().createElement('div', { className: c }, e),
                            i().createElement(
                                'div',
                                { className: _ },
                                i().createElement('div', { className: m }, e),
                                i().createElement('div', { className: b }),
                            ),
                        );
                    };
                var m = a(4490);
                const b = {
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
                    p = (0, s.memo)(
                        ({
                            newLevel: e,
                            level: t,
                            size: a,
                            battlePassState: r,
                            hasProgression: s,
                            isGolden: l,
                            labelAnimation: d,
                            newLabelAnimation: p,
                            isChapterChosen: g = !1,
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
                            const F = r === m.Bq.SwitchedChapterRightNow,
                                y = r === m.Bq.CompletedRightNow,
                                P = ((e, t, a, r, n) => (e || n ? t || !a : t || !r))(A, f, C, g, w),
                                S = !w && !A;
                            return i().createElement(
                                i().Fragment,
                                null,
                                P
                                    ? i().createElement('div', {
                                          className: n()(b.icon, D && b[`icon${D}`], y && b[`icon__animated${B}`]),
                                          style: {
                                              backgroundImage: `url(${(() => {
                                                  const e = R.images.gui.maps.icons.battlePass.logo,
                                                      t = E(l, a);
                                                  if (S) {
                                                      if (f) {
                                                          const a = { path: e.icon, name: u.Season, id: h };
                                                          return o(a, { name: 'icon', postfix: t });
                                                      }
                                                      if (!g) return e.$dyn('not_chosen');
                                                  }
                                                  return (0, c.wD)(e.chapterIcons, v, t);
                                              })()})`,
                                          },
                                      })
                                    : i().createElement(
                                          'div',
                                          {
                                              className: n()(
                                                  b.label,
                                                  b[`label${D}`],
                                                  F && b.label__new,
                                                  F && b[`label__new${B}`],
                                                  !y && f && b.label__disabled,
                                                  b[`label__${d}${B}`],
                                                  s && b[`label__hasProgress${B}`],
                                                  s && b[`label__hasProgress${B}${w ? 'Progression' : ''}`],
                                              ),
                                              lang: R.strings.settings.LANGUAGE_CODE(),
                                          },
                                          i().createElement(_, {
                                              level: t,
                                              size: a,
                                              isGold: l,
                                              isFirstLevel: F,
                                              curState: d,
                                              showProgressionCompleted: y,
                                              key: 'label',
                                          }),
                                      ),
                                e &&
                                    i().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                b.label,
                                                b[`label${D}`],
                                                F && b.label__new,
                                                F && b[`label__new${B}`],
                                                b[`label__${p}${B}`],
                                                s && b[`label__hasProgress${B}`],
                                            ),
                                        },
                                        i().createElement(_, {
                                            level: e,
                                            size: a,
                                            isGold: l,
                                            isFirstLevel: F,
                                            curState: p,
                                            key: 'newLabel',
                                        }),
                                    ),
                            );
                        },
                    );
                var g = a(3097);
                const v = {
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
                    h = (0, s.memo)(
                        ({
                            progression: e,
                            isNoVehicles: t = !1,
                            showProgressionCompleted: a,
                            isProgressionCompleted: r,
                            size: s,
                        }) => {
                            const o = n()(v.base, v[`base__${s}`], a && v.base__completed, !a && r && v.base__hidden);
                            return i().createElement(
                                'div',
                                { className: o },
                                i().createElement(g.ko, {
                                    key: e.to,
                                    size: g.$u.Small,
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
                                      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                  }
                                  return e;
                              }),
                        f.apply(null, arguments)
                    );
                }
                let C = (function (e) {
                        return ((e.Closed = 'closed'), (e.Open = 'open'), e);
                    })({}),
                    A = (function (e) {
                        return ((e.Gold = 'gold'), (e.Completed = 'completed'), (e.Initial = 'initial'), e);
                    })({});
                const w = (e, t, a, r, n) => {
                        const s = { path: R.images.gui.maps.icons.battlePass.logo.emblem, name: u.Chapter, id: r },
                            i = e ? C.Open : C.Closed,
                            l = ((e, t) =>
                                e
                                    ? A.Gold
                                    : t === m.Bq.Completed || t === m.Bq.CompletedRightNow
                                      ? A.Completed
                                      : A.Initial)(t, a),
                            c = n.length > 0 ? `_${n}` : '';
                        return { backgroundImage: `url(${o(s, { name: 'emblem', postfix: `${i}_${l}${c}` })})` };
                    },
                    B = (e, t) => {
                        const a = { path: R.images.gui.maps.icons.battlePass.logo.extra, name: u.Season, id: e };
                        return { backgroundImage: `url(${o(a, { name: 'extra', postfix: t })})` };
                    },
                    D = (0, s.memo)((e) => {
                        const t = e.progression,
                            a = e.size,
                            r = e.battlePassState,
                            s = e.hasBattlePass,
                            o = e.isChapterChosen,
                            u = e.hasBeenActive,
                            c = void 0 !== u && u,
                            d = e.isChapterSelection,
                            _ = void 0 !== d && d,
                            b = e.isOpen,
                            E = void 0 !== b && b,
                            g = e.isProgression,
                            v = void 0 !== g && g,
                            C = e.showProgressBar,
                            A = void 0 === C || C,
                            D = e.isExtra,
                            F = void 0 !== D && D,
                            y = e.chapterID,
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
                            x = s || r === m.Bq.Bought,
                            L = (r === m.Bq.Completed || R) && x,
                            I = (r === m.Bq.Completed || R) && !x,
                            T = L || I,
                            O = void 0 !== t.from,
                            M = A && ((O && o) || c);
                        return i().createElement(
                            'div',
                            { className: l.base },
                            F &&
                                i().createElement('div', {
                                    className: n()(l.extra, k && l[`extra__${k}`]),
                                    style: B(P, k),
                                }),
                            i().createElement(
                                'div',
                                {
                                    className: n()(l.image, k && l[`image__${k}`], N && l.image__clickable),
                                    style: w(E, x, r, y, k),
                                },
                                r !== m.Bq.AwaitSeason &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement(
                                            p,
                                            f(
                                                {
                                                    hasProgression: O,
                                                    isGolden: x,
                                                    isProgressionCompleted: T,
                                                    isChapterChosen: o,
                                                    hasBeenActive: c,
                                                    isChapterSelection: _,
                                                    isProgression: v,
                                                },
                                                e,
                                                t,
                                            ),
                                        ),
                                        M &&
                                            i().createElement(h, {
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
            4490: (e, t, a) => {
                'use strict';
                a.d(t, { $u: () => r, Bq: () => n });
                let r = (function (e) {
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
                'use strict';
                a.d(t, { k: () => _ });
                var r = a(7363),
                    n = a.n(r),
                    s = a(9849),
                    i = a.n(s),
                    o = a(4029);
                const u = 'LoupeButton_base_bb1aa',
                    l = 'LoupeButton_icon_f984f',
                    c = 'LoupeButton_iconHover_dc9e3',
                    d = 'LoupeButton_hoverArea_b1c43',
                    _ = ({ onClick: e, hoverAreaClasses: t }) => {
                        const a = (0, r.useCallback)(() => (0, o.G)('highlight'), []),
                            s = (0, r.useCallback)(() => {
                                ((0, o.G)('play'), e());
                            }, [e]),
                            _ = i()(d, t);
                        return n().createElement(
                            'div',
                            { className: u, onClick: s, onMouseEnter: a },
                            n().createElement('div', { className: l }),
                            n().createElement('div', { className: c }),
                            t && n().createElement('div', { className: _ }),
                        );
                    };
            },
            1820: (e, t, a) => {
                'use strict';
                a.d(t, { r: () => f });
                var r = a(9849),
                    n = a.n(r),
                    s = a(7363),
                    i = a.n(s),
                    o = a(2486),
                    u = a(3359),
                    l = a(8925),
                    c = a(8739),
                    d = a(5278);
                const _ = 'GroupRewards_base_aacb3',
                    m = 'GroupRewards_item_efa84',
                    b = ({ rewards: e, className: t }) => {
                        const a = (0, l.GS)().mediaSize < l.cJ.Medium ? o.h2.Small : o.h2.Big;
                        return i().createElement(
                            'div',
                            { className: n()(_, t) },
                            c.UI(e, (e, t) =>
                                i().createElement(
                                    'div',
                                    { key: `reward_${t}_${e.name}`, className: m },
                                    i().createElement(u.Q, (0, d.$n)(e, a, !0)),
                                ),
                            ),
                        );
                    };
                var E = a(2714);
                const p = 'RewardsBlock_base_de0ba',
                    g = 'RewardsBlock_groupTitle_a9848',
                    v = 'RewardsBlock_groupRewards_a539c',
                    h = 'RewardsBlock_groupRewards__future_c0a72',
                    f = ({
                        description: e,
                        iconType: t,
                        steps: a = '',
                        rewards: r,
                        className: s = '',
                        title: o = '',
                    }) =>
                        i().createElement(
                            'div',
                            { className: n()(p, s) },
                            i().createElement(E.p, { description: e, type: t, steps: a, className: g, title: o }),
                            i().createElement(b, { rewards: r, className: n()(v, t === E.Q.future && h) }),
                        );
            },
            2714: (e, t, a) => {
                'use strict';
                a.d(t, { p: () => c, Q: () => l });
                var r = a(9849),
                    n = a.n(r),
                    s = a(2616),
                    i = a(7363),
                    o = a.n(i);
                const u = {
                    base: 'GroupTitle_base_ffd14',
                    title: 'GroupTitle_title_ce668',
                    iconShadow: 'GroupTitle_iconShadow_b0e82',
                    base__now: 'GroupTitle_base__now_ba9ec',
                    base__future: 'GroupTitle_base__future_cec34',
                    icon: 'GroupTitle_icon_ce0f8',
                    titleText: 'GroupTitle_titleText_caeb2',
                    descriptionText: 'GroupTitle_descriptionText_fe55e',
                    steps: 'GroupTitle_steps_c10eb',
                };
                let l = (function (e) {
                    return ((e.now = 'now'), (e.future = 'future'), e);
                })({});
                const c = ({ description: e, type: t, steps: a = '', className: r = '', title: i = '' }) =>
                    o().createElement(
                        'div',
                        { className: n()(u.base, u[`base__${t}`], r) },
                        o().createElement('div', { className: u.iconShadow }),
                        o().createElement(
                            'div',
                            { className: u.title },
                            o().createElement('div', { className: u.icon }),
                            o().createElement('div', { className: u.titleText }, i),
                        ),
                        o().createElement(s.z, {
                            classMix: u.descriptionText,
                            text: e,
                            binding: { steps: o().createElement('span', { className: u.steps, key: a }, a) },
                        }),
                    );
            },
            3287: (e, t, a) => {
                'use strict';
                a.d(t, { z: () => F });
                var r = a(9849),
                    n = a.n(r),
                    s = a(2884),
                    i = a(3934),
                    o = a(7363),
                    u = a.n(o),
                    l = a(8656),
                    c = a(8978),
                    d = a(828);
                function _(e, t, a, r, n, s, i) {
                    try {
                        var o = e[s](i),
                            u = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(u) : Promise.resolve(u).then(r, n);
                }
                function m(e) {
                    return function () {
                        var t = this,
                            a = arguments;
                        return new Promise(function (r, n) {
                            var s = e.apply(t, a);
                            function i(e) {
                                _(s, r, n, i, o, 'next', e);
                            }
                            function o(e) {
                                _(s, r, n, i, o, 'throw', e);
                            }
                            i(void 0);
                        });
                    };
                }
                let b = (function (e) {
                    return (
                        (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End'),
                        e
                    );
                })({});
                const E = (e) => {
                        const t = (0, o.useState)(b.Idle),
                            a = t[0],
                            r = t[1],
                            n = e.animationScroll,
                            s = e.getContainerSize,
                            i = e.getWrapperSize,
                            u = e.events,
                            _ = (0, o.useCallback)(() => {
                                const e = n.scrollPosition.get(),
                                    t = s() - i();
                                switch (!0) {
                                    case !t:
                                        return r(b.Idle);
                                    case e <= 0:
                                        return r(b.Start);
                                    case e >= t:
                                        return r(b.End);
                                    default:
                                        r(b.Between);
                                }
                            }, [n.scrollPosition, s, i]);
                        return (
                            (0, o.useEffect)(
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
                            (0, o.useEffect)(() => {
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
                    p = { type: 'idle' };
                const g = 'ScrollWithLips_base_f5336',
                    v = 'ScrollWithLips_lip_d5315',
                    h = 'ScrollWithLips_lip__top_eb0da',
                    f = 'ScrollWithLips_lip__bottom_a8083',
                    C = 'ScrollWithLips_scroll_a3a48',
                    A = 'ScrollWithLips_scroll__loaded_c247e',
                    w = 'ScrollWithLips_topButton_a9553',
                    B = 'ScrollWithLips_bottomButton_e59e6',
                    D = 'ScrollWithLips_track_d9f05',
                    F = ({ className: e, children: t, setVisibleScroll: a }) => {
                        const r = (0, i.useVerticalScrollApi)();
                        !(function (e, t) {
                            const a = e.contentRef,
                                r = e.wrapperRef,
                                n = e.scrollPosition,
                                s = e.clampPosition,
                                i = e.animationScroll,
                                u = e.events,
                                l = e.getContainerSize,
                                c = e.getWrapperSize,
                                d = (0, o.useState)(p),
                                _ = d[0],
                                m = d[1],
                                b = (0, o.useState)(!1),
                                E = b[0],
                                g = b[1];
                            ((0, o.useEffect)(() => {
                                const e = a.current;
                                e && (e.style.cursor = E ? ('dragging' === _.type ? 'grabbing' : 'grab') : 'default');
                            }, [a, E, _.type]),
                                (0, o.useEffect)(() => {
                                    if ('dragging' !== _.type) return;
                                    const e = (e) => {
                                            const o = a.current,
                                                u = r.current;
                                            if (!o || !u) return;
                                            const l = _.positionFrom - e.screenY,
                                                c = _.previousScrollPosition + l;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: s(o, c),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    t && { config: t },
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
                                }, [i.scrollPosition, s, a, _, n, r, t]),
                                (0, o.useEffect)(() => {
                                    if ('scrollingToEnd' !== _.type) return;
                                    const e = () => {
                                        m(p);
                                    };
                                    return (i.scrollPosition.idle && e(), u.on('rest', e), () => u.off('rest', e));
                                }, [i.scrollPosition, _.type, u]),
                                (0, o.useEffect)(() => {
                                    const e = a.current;
                                    if (!e) return;
                                    const t = (e) => {
                                        0 === e.button &&
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: i.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        e.addEventListener('mousedown', t),
                                        () => e.removeEventListener('mousedown', t)
                                    );
                                }, [i.scrollPosition, a]),
                                (0, o.useEffect)(() => {
                                    const e = () => {
                                        var e, t;
                                        const a = null != (e = l()) ? e : 0,
                                            r = null != (t = c()) ? t : 0;
                                        g(a > r);
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
                            c = l !== b.Idle;
                        return (
                            (0, o.useEffect)(() => {
                                a && a(l !== b.Idle);
                            }, [a, l]),
                            u().createElement(
                                'div',
                                { className: n()(g, e) },
                                l !== b.Start && l !== b.Idle && u().createElement('div', { className: n()(v, h) }),
                                l !== b.End && l !== b.Idle && u().createElement('div', { className: n()(v, f) }),
                                u().createElement(
                                    s.X.Vertical.Area.Default,
                                    {
                                        api: r,
                                        barClassNames: {
                                            base: n()(C, c && A),
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
            8803: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => h });
                var r = a(9849),
                    n = a.n(r),
                    s = a(2278),
                    i = a(8739),
                    o = a(7363),
                    u = a.n(o),
                    l = a(7959);
                const c = 'TankmanSkills_base_e6387',
                    d = 'TankmanSkills_skill_fb3a8',
                    _ = 'TankmanSkills_zeroSkill_a5243',
                    m = 'TankmanSkills_glow_f8c3e',
                    b = 'TankmanSkills_zeroSkillIcon_c9c99',
                    E = 'TankmanSkills_skillIcon_a90e0',
                    p = 'TankmanSkills_skillIcon__specificPerk_b46ae',
                    g = 'TankmanSkills_divider_f3eec',
                    v = 'TankmanSkills_light_ab3d8',
                    h = ({ skills: e, className: t = '' }) => {
                        const a = i.kd(e, (e) => e.isZero);
                        return u().createElement(
                            'div',
                            { className: n()(c, t) },
                            i.UI(e, (e, t) =>
                                u().createElement(
                                    'div',
                                    { key: `${e.name}_${t}`, className: d },
                                    u().createElement(
                                        s.u,
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
                                                    u().createElement('div', { className: b }),
                                                ),
                                            u().createElement('div', {
                                                className: n()(E, e.name !== l.jw && p),
                                                style: {
                                                    backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${e.name}')`,
                                                },
                                            }),
                                        ),
                                    ),
                                    a === t && u().createElement('div', { className: g }),
                                ),
                            ),
                            u().createElement('div', { className: v }),
                        );
                    };
            },
            3317: (e, t, a) => {
                'use strict';
                a.d(t, { D: () => _, x: () => c });
                var r = a(9849),
                    n = a.n(r),
                    s = a(6758),
                    i = a(7363),
                    o = a.n(i),
                    u = a(5278);
                const l = {
                    base: 'Title_base_d6708',
                    chapter: 'Title_chapter_f1f86',
                    base__transparentChapterName: 'Title_base__transparentChapterName_aadf8',
                    buyBPTitle: 'Title_buyBPTitle_d1330',
                    subTitle: 'Title_subTitle_be156',
                };
                let c = (function (e) {
                    return ((e.Default = 'default'), (e.TransparentChapterName = 'transparentChapterName'), e);
                })({});
                const d = R.strings.battle_pass.battlePassBuyView.confirm,
                    _ = ({ chapter: e, buyBP: t, subTitle: a, className: r, type: i = c.Default }) => {
                        const _ = (0, s.uF)(d.chapter(), { name: (0, u.pC)(e) });
                        return o().createElement(
                            'div',
                            { className: n()(l.base, l[`base__${i}`], r) },
                            o().createElement('span', { className: l.chapter }, _),
                            o().createElement('span', { className: l.buyBPTitle }, t),
                            o().createElement('span', { className: l.subTitle }, a),
                        );
                    };
            },
            4053: (e, t, a) => {
                'use strict';
                a.d(t, { _: () => n, t: () => s });
                var r = a(7363);
                const n = (0, r.createContext)(void 0);
                function s() {
                    const e = (0, r.useContext)(n);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            9994: (e, t, a) => {
                'use strict';
                a.d(t, { N: () => r });
                var r = {};
                (a.r(r), a.d(r, { Provider: () => E, useApi: () => m, useHandleKeydown: () => b }));
                var n = a(7475),
                    s = a(9659),
                    i = a(7363),
                    o = a.n(i),
                    u = a(4020);
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
                                const n = t(e);
                                return (n.includes(r) || n.push(r), () => a(e, r));
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
                    _ = (0, i.createContext)(void 0);
                function m() {
                    const e = (0, i.useContext)(_);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function b(e, t, a) {
                    const r = (0, s.z)((e) => {
                            n.O.view.isEventHandled() || (t(e), n.O.view.setEventHandled(), a && e.stopPropagation());
                        }),
                        o = m(),
                        u = (0, i.useMemo)(() => o.keydown.register(e, r), [o, e, r]);
                    (0, i.useEffect)(() => u, [u]);
                }
                const E = (e) => {
                    const t = (0, i.useMemo)(d, []);
                    (0, i.useEffect)(() => {
                        function e(e) {
                            const a = t.takeCurrent(e.keyCode);
                            a && a(e);
                        }
                        return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
                    });
                    const a = (0, i.useMemo)(
                        () => ({ keydown: { register: t.register, unregister: t.unregister } }),
                        [t],
                    );
                    return o().createElement(_.Provider, { value: a }, e.children);
                };
            },
            8862: (e, t, a) => {
                'use strict';
                a.d(t, { AW: () => c, rs: () => l, tv: () => r.t });
                var r = a(4053),
                    n = a(7363),
                    s = a.n(n);
                class i extends n.Component {
                    constructor(...e) {
                        (super(...e), (this.state = { failure: !1, error: null }));
                    }
                    static getDerivedStateFromError(e) {
                        return { failure: !0, error: e };
                    }
                    render() {
                        return this.state.failure
                            ? s().createElement(
                                  'div',
                                  null,
                                  s().createElement('h1', null, 'Something went wrong.'),
                                  this.state.error && s().createElement('pre', null, this.state.error.toString()),
                              )
                            : this.props.children;
                    }
                }
                var o = a(5319);
                const u = (0, n.createContext)(void 0);
                const l = ({ children: e, route: t, fallback: a = null, location: r }) => {
                        let i;
                        return (
                            n.Children.forEach(e, (e) => {
                                if (!(0, n.isValidElement)(e))
                                    return void console.error('Switch children must be valid elements');
                                const a = t ? `${t}${e.props.path}` : e.props.path;
                                if (void 0 !== i) return;
                                const s = (0, o.L)(r, { paths: [a], exact: e.props.exact });
                                s && (i = { child: e, match: s });
                            }),
                            i ? s().createElement(u.Provider, { value: { match: i.match } }, i.child) : a
                        );
                    },
                    c = ({ component: e, exact: t }) => {
                        const a = (function () {
                                const e = (0, n.useContext)(u);
                                if (!e) throw new Error('useSwitch must be used within a SwitchProvider');
                                return e;
                            })(),
                            r = a.match;
                        return s().createElement(
                            i,
                            null,
                            s().createElement(e, {
                                path: r.path,
                                location: r.url,
                                params: r.params,
                                exact: null != t && t,
                            }),
                        );
                    };
            },
            5319: (e, t, a) => {
                'use strict';
                function r(e, t) {
                    var a = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (a) return (a = a.call(e)).next.bind(a);
                    if (
                        Array.isArray(e) ||
                        (a = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return n(e, t);
                                var a = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === a && e.constructor && (a = e.constructor.name),
                                    'Map' === a || 'Set' === a
                                        ? Array.from(e)
                                        : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                          ? n(e, t)
                                          : void 0
                                );
                            }
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
                    for (var a = 0, r = Array(t); a < t; a++) r[a] = e[a];
                    return r;
                }
                a.d(t, { L: () => i });
                const s = (e) => e.split('/').filter(Boolean);
                function i(e, t) {
                    const a = t.paths,
                        n = t.exact,
                        i = void 0 !== n && n,
                        o = s(e);
                    for (var u, l = r(a); !(u = l()).done; ) {
                        const t = u.value,
                            a = s(t);
                        if (i && o.length !== a.length) continue;
                        const r = {};
                        let n = !0;
                        for (let e = 0; e < a.length; e++) {
                            const t = a[e],
                                s = o[e];
                            if (!s) {
                                n = !1;
                                break;
                            }
                            if (t.startsWith(':')) {
                                r[t.slice(1)] = s;
                            } else if (t !== s) {
                                n = !1;
                                break;
                            }
                        }
                        if (n) {
                            const n = `/${o.slice(0, a.length).join('/')}`,
                                s = e === n;
                            if (i && !s) continue;
                            return { params: r, exact: s, path: t, url: n };
                        }
                    }
                    return null;
                }
            },
            1623: (e, t, a) => {
                'use strict';
                a.d(t, { U4: () => b, b0: () => m });
                var r = a(9849),
                    n = a.n(r),
                    s = a(5208),
                    i = a(1308),
                    o = a(6758),
                    u = a(7363),
                    l = a.n(u),
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
                const b = ({
                    isElite: e,
                    vehicleName: t,
                    vehicleShortName: a,
                    vehicleType: r,
                    vehicleLvl: u,
                    tags: b = '',
                    size: E = _.extraSmall,
                    type: p = m.colored,
                    className: g,
                    classNames: v,
                    isShortName: h = !1,
                }) => {
                    const f = `${(0, o.BN)(r)}${e ? '_elite' : ''}`,
                        C = R.images.gui.maps.icons.vehicleTypes.big.$dyn(f);
                    return l().createElement(
                        'div',
                        {
                            className: n()(
                                d.Z.base,
                                d.Z[`base__size${(0, o.e)(E)}`],
                                d.Z[`base__type${(0, o.e)(p)}`],
                                g,
                            ),
                        },
                        l().createElement(
                            'div',
                            { className: n()(d.Z.level, null == v ? void 0 : v.level) },
                            (0, i.HG)(u),
                        ),
                        l().createElement('div', {
                            className: n()(
                                d.Z.type,
                                e && d.Z[`type__elite${(0, o.e)(E)}`],
                                d.Z[`type__${E}`],
                                null == v ? void 0 : v.typeIcon,
                            ),
                            style: r ? { backgroundImage: `url(${C})` } : void 0,
                        }),
                        (0, c.f)(b, s.f3) && l().createElement('div', { className: d.Z.premiumIGR }),
                        l().createElement('div', { className: n()(d.Z.name, null == v ? void 0 : v.name) }, h ? a : t),
                    );
                };
            },
            9932: (e, t, a) => {
                'use strict';
                a.d(t, { f: () => r });
                const r = (e, t) => e.split(',').includes(t);
            },
            935: (e, t, a) => {
                'use strict';
                a.d(t, { C: () => r });
                let r = (function (e) {
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
            768: (e, t, a) => {
                'use strict';
                a.d(t, { E: () => n, l: () => r });
                let r = (function (e) {
                        return (
                            (e.Active = 'active'),
                            (e.Paused = 'paused'),
                            (e.Completed = 'completed'),
                            (e.NotStarted = 'notStarted'),
                            e
                        );
                    })({}),
                    n = (function (e) {
                        return (
                            (e.Vehicle = 'vehicle'),
                            (e.VehicleStyle = 'vehicleStyle'),
                            (e.Style = 'style'),
                            (e.Tankman = 'tankman'),
                            (e.PostProgression = 'postProgression'),
                            e
                        );
                    })({});
            },
            5208: (e, t, a) => {
                'use strict';
                a.d(t, { f3: () => r });
                const r = 'premiumIGR';
            },
            6290: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'FormatText_base_f27a4' };
            },
            7947: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'ProgressBar_base_c37bf',
                    base__small: 'ProgressBar_base__small_af6d6',
                    background: 'ProgressBar_background_a4e18',
                    background__small: 'ProgressBar_background__small_e2b95',
                    lineWrapper: 'ProgressBar_lineWrapper_e670c',
                };
            },
            2234: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'ProgressBarBlink_base_d7125', base__small: 'ProgressBarBlink_base__small_b92f8' };
            },
            7760: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'ProgressBarDeltaGrow_base_f4d46',
                    base__withoutBounce: 'ProgressBarDeltaGrow_base__withoutBounce_b1398',
                    glow: 'ProgressBarDeltaGrow_glow_c912d',
                };
            },
            9822: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = { base: 'ProgressBarDeltaSimple_base_cfcd3', delta: 'ProgressBarDeltaSimple_delta_dc2b6' };
            },
            5261: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_a33a9',
                    wrapper: 'HorizontalScroll_wrapper_b622e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a2315',
                };
            },
            1905: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
                    content: 'VerticalScroll_content_fe263',
                    defaultScroll: 'VerticalScroll_defaultScroll_e27f5',
                    bar: 'VerticalScroll_bar_b8700',
                    area: 'VerticalScroll_area_b5a82',
                };
            },
            3242: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                'use strict';
                a.d(t, { Z: () => r });
                const r = {
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
                var n = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, a, r] = deferred[u], s = !0, i = 0; i < t.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), r < n && (n = r));
                    if (s) {
                        deferred.splice(u--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
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
                        n,
                        [s, i, o] = a,
                        u = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(a); u < s.length; u++)
                        ((n = s[u]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(7885));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
