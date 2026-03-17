(() => {
    var __webpack_modules__ = {
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { L$: () => c.L, qE: () => c.q, u5: () => m });
                var n = t(6483),
                    a = t.n(n),
                    r = t(1641),
                    i = t(7727),
                    o = t(7363),
                    s = t.n(o),
                    l = t(6880),
                    c = t(2106);
                const m = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: n,
                    onMouseEnter: m,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: g,
                    onClick: p,
                    isFocused: A = !1,
                    type: F = c.L.primary,
                    soundHover: D = 'highlight',
                    soundClick: h = 'play',
                }) => {
                    const C = (0, o.useRef)(null),
                        b = (0, o.useState)(A),
                        B = b[0],
                        v = b[1],
                        f = (0, o.useState)(!1),
                        y = f[0],
                        w = f[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                B && null !== C.current && !C.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, o.useEffect)(() => {
                            v(A);
                        }, [A]),
                        s().createElement(
                            'div',
                            {
                                ref: C,
                                className: a()(
                                    l.Z.base,
                                    l.Z[`base__${F}`],
                                    t && l.Z.base__disabled,
                                    u && l.Z[`base__${u}`],
                                    B && l.Z.base__focus,
                                    y && l.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== D && (0, i.G)(D), m && m(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    t || (E && E(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    if (t) return;
                                    const u = e.button === r.t.LEFT;
                                    (null !== h && u && (0, i.G)(h),
                                        d && d(e),
                                        A && (t || (C.current && (C.current.focus(), v(!0)))),
                                        u && w(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (g && g(e), w(!1));
                                },
                                onClick: function (e) {
                                    t || (p && p(e));
                                },
                            },
                            F !== c.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: l.Z.back }),
                                    s().createElement('span', { className: l.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: a()(l.Z.state, l.Z.state__default) },
                                s().createElement('span', { className: l.Z.stateDisabled }),
                                s().createElement('span', { className: l.Z.stateHighlightHover }),
                                s().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { L: () => n, q: () => a }),
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
                    })(a || (a = {})));
            },
            2262: (e, u, t) => {
                'use strict';
                t.d(u, { XZ: () => d });
                var n = t(7363),
                    a = t.n(n),
                    r = t(6483),
                    i = t.n(r),
                    o = t(7727),
                    s = t(1641),
                    l = t(8844),
                    c = t(4382);
                const m = [
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
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const d = (e) => {
                    let u = e.id,
                        t = e.isChecked,
                        r = void 0 !== t && t,
                        d = e.isDisabled,
                        E = void 0 !== d && d,
                        g = e.isAlert,
                        p = void 0 !== g && g,
                        A = e.size,
                        F = void 0 === A ? l.yB.medium : A,
                        D = e.type,
                        h = void 0 === D ? l.Rh.primary : D,
                        C = e.soundHover,
                        b = void 0 === C ? 'highlight' : C,
                        B = e.soundClick,
                        v = void 0 === B ? 'play' : B,
                        f = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        x = e.onMouseDown,
                        S = e.onClick,
                        k = e.onChange,
                        P = e.onFocus,
                        T = e.onBlur,
                        I = e.text,
                        N = e.contentStyles,
                        R = e.children,
                        M = e.alignment,
                        O = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, m);
                    const L = (0, n.useState)(!1),
                        $ = L[0],
                        W = L[1],
                        j = (0, n.useState)(!1),
                        H = (j[0], j[1]),
                        U = (0, n.useCallback)(
                            (e) => {
                                E || (k && k(), S && S(e));
                            },
                            [E, k, S],
                        ),
                        V = (0, n.useCallback)(
                            (e) => {
                                const u = e.button === s.t.LEFT;
                                E || (u && W(!0), u && x && x(e), v && (0, o.G)(v));
                            },
                            [E, x, v],
                        ),
                        Z = (0, n.useCallback)(
                            (e) => {
                                E || (W(!1), w && w(e));
                            },
                            [E, w],
                        ),
                        z = (0, n.useCallback)(
                            (e) => {
                                E || (f && f(e), b && (0, o.G)(b));
                            },
                            [E, f, b],
                        ),
                        q = (0, n.useCallback)(
                            (e) => {
                                E || (W(!1), y && y(e));
                            },
                            [E, y],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                E || (H(!0), P && P(e));
                            },
                            [E, P],
                        ),
                        K = (0, n.useCallback)(
                            (e) => {
                                E || (H(!1), T && T(e));
                            },
                            [E, T],
                        ),
                        X = a().createElement(
                            'div',
                            { className: c.Z.label },
                            a().createElement(
                                'div',
                                { className: i()(c.Z.labelContent, 's-labelContent'), style: N },
                                I || R,
                            ),
                        );
                    return a().createElement(
                        'div',
                        _(
                            {
                                id: u,
                                className: i()(c.Z.base, c.Z[`base__${F}`], c.Z[`base__${h}`], {
                                    [c.Z.base__checked]: r,
                                    [c.Z.base__disabled]: E,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: p,
                                    [c.Z.base__center]: M === l.N3.Center,
                                    [c.Z.base__bottom]: M === l.N3.Bottom,
                                }),
                                onClick: U,
                                onMouseEnter: z,
                                onMouseLeave: q,
                                onMouseDown: V,
                                onMouseUp: Z,
                                onFocus: G,
                                onBlur: K,
                            },
                            O,
                        ),
                        a().createElement(
                            'div',
                            { className: c.Z.input },
                            a().createElement('div', { className: c.Z.alertOverlay }),
                            a().createElement('div', { className: c.Z.inputHoverOverlay }),
                            a().createElement('div', { className: c.Z.highlight }),
                        ),
                        a().createElement('div', { className: c.Z.checkmark }),
                        ((I || R) && X) || null,
                    );
                };
            },
            8844: (e, u, t) => {
                'use strict';
                let n, a, r;
                (t.d(u, { N3: () => r, Rh: () => a, yB: () => n }),
                    (function (e) {
                        ((e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(r || (r = {})));
            },
            7405: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(2372),
                    i = t(7363),
                    o = t.n(i),
                    s = t(8460),
                    l = t(329);
                const c = (0, i.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: n,
                        value: i,
                        discountValue: c,
                        showPlus: m,
                        isEnough: _ = !0,
                        stockBackgroundName: d = l.we.Red,
                        className: E,
                        classNames: g,
                    }) =>
                        o().createElement(
                            'span',
                            { className: a()(s.Z.base, s.Z[`base__${t}`], E) },
                            o().createElement(
                                'span',
                                {
                                    className: a()(
                                        s.Z.value,
                                        s.Z[`value__${n}`],
                                        !_ && s.Z.value__notEnough,
                                        null == g ? void 0 : g.value,
                                    ),
                                },
                                m && i > 0 && '+',
                                o().createElement(r.A, { value: i, format: n === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', {
                                className: a()(s.Z.icon, s.Z[`icon__${n}-${t}`], null == g ? void 0 : g.icon),
                            }),
                            e &&
                                o().createElement(
                                    'span',
                                    {
                                        className: a()(
                                            s.Z.stock,
                                            c && s.Z.stock__indent,
                                            u && s.Z.stock__interactive,
                                            null == g ? void 0 : g.stock,
                                        ),
                                    },
                                    o().createElement('span', {
                                        className: s.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${d})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, u, t) => {
                'use strict';
                let n, a, r;
                (t.d(u, { V2: () => a, et: () => n, we: () => r }),
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
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(r || (r = {})));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => a });
                var n = t(9916);
                const a = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? n.B3.GOLD : n.B3.INTEGRAL;
                        })(u),
                        a = n.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== a ? a : null;
                };
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => s });
                var n = t(3138),
                    a = t(7363),
                    r = t(1043),
                    i = t(5262);
                const o = (function (e = n.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, i.T)(u, t, r.j));
                    })(),
                    s = (0, a.createContext)(o);
            },
            1039: (e, u, t) => {
                'use strict';
                (t(3138), t(7363), t(3495));
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(7363),
                    a = t(7382),
                    r = t(3495);
                const i = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, i);
                    const o = (0, n.useContext)(r.Y),
                        s = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        m = o.small,
                        _ = o.extraSmall,
                        d = o.extraLargeWidth,
                        E = o.largeWidth,
                        g = o.mediumWidth,
                        p = o.smallWidth,
                        A = o.extraSmallWidth,
                        F = o.extraLargeHeight,
                        D = o.largeHeight,
                        h = o.mediumHeight,
                        C = o.smallHeight,
                        b = o.extraSmallHeight,
                        B = { extraLarge: F, large: D, medium: h, small: C, extraSmall: b };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && m) return u;
                        if (t.extraSmall && _) return u;
                    } else {
                        if (t.extraLargeWidth && d) return (0, a.H)(u, t, B);
                        if (t.largeWidth && E) return (0, a.H)(u, t, B);
                        if (t.mediumWidth && g) return (0, a.H)(u, t, B);
                        if (t.smallWidth && p) return (0, a.H)(u, t, B);
                        if (t.extraSmallWidth && A) return (0, a.H)(u, t, B);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && F) return u;
                            if (t.largeHeight && D) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && b) return u;
                        }
                    }
                    return null;
                });
            },
            7382: (e, u, t) => {
                'use strict';
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
                'use strict';
                (t(6010), t(1039), t(3495));
            },
            1043: (e, u, t) => {
                'use strict';
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
                'use strict';
                var n;
                function a(e, u, t) {
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
                (t.d(u, { T: () => a }),
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
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => s });
                var n = t(7363),
                    a = t.n(n),
                    r = t(2056);
                const i = ['children'];
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
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, i);
                    return a().createElement(
                        r.u,
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
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    a = t(7363),
                    r = t.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            m = e.alert,
                            _ = e.args,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, i);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, _, { body: t, header: l, note: c, alert: m });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [m, t, l, c, _]);
                        return r().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((g = null == _ ? void 0 : _.hasHtmlContent),
                                        g ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                d,
                            ),
                            u,
                        );
                        var g;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(9916),
                    r = t(7363);
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
                const s = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
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
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            _ = e.onClick,
                            d = e.ignoreShowDelay,
                            E = void 0 !== d && d,
                            g = e.ignoreMouseClick,
                            p = void 0 !== g && g,
                            A = e.decoratorId,
                            F = void 0 === A ? 0 : A,
                            D = e.isEnabled,
                            h = void 0 === D || D,
                            C = e.targetId,
                            b = void 0 === C ? 0 : C,
                            B = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, i);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => b || (0, n.F)().resId, [b]),
                            x = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (s(t, F, { isMouseEvent: !0, on: !0, arguments: o(a) }, w),
                                    B && B(),
                                    (y.current.isVisible = !0));
                            }, [t, F, a, w, B]),
                            S = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        s(t, F, { on: !1 }, w),
                                        y.current.isVisible && v && v(),
                                        (y.current.isVisible = !1));
                                }
                            }, [t, F, w, v]),
                            k = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && S();
                            }, [h, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return h
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((P = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(y.current.timeoutId),
                                                      (y.current.timeoutId = window.setTimeout(x, E ? 100 : 400)),
                                                      l && l(e),
                                                      P && P(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (S(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === p && S(), null == _ || _(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === p && S(), null == m || m(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var P;
                    };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => o });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(e, u);
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
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function o({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: r = 'model' } = {}) {
                    const o = new Map();
                    function s(e, u = 0) {
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
                            a = r.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const i = 'string' == typeof a ? `${r}.${a}` : r,
                                s = n.O.view.addModelObserver(i, u, !0);
                            return (o.set(s, t), e && t(l(a)), s);
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
                            for (var e, t = a(o.keys()); !(e = t()).done; ) {
                                s(e.value, u);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q3: () => s });
                var n = t(4598),
                    a = t(9174),
                    r = t(7363),
                    i = t.n(r),
                    o = t(8246);
                const s = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: m }) {
                            const _ = (0, r.useRef)([]),
                                d = (t, r, i) => {
                                    var s;
                                    const l = o.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == i ? void 0 : i.getter) ? s : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        d = (e) => _.current.push(e),
                                        E = e({
                                            mode: t,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = m(e),
                                                        r = a.LO.box(u, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const r = null != u ? u : m(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : m(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = m(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            i = Object.entries(r),
                                                            o = i.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
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
                                            cleanup: d,
                                        }),
                                        g = { mode: t, model: E, externalModel: c, cleanup: d };
                                    return {
                                        model: E,
                                        controls: 'mocks' === t && i ? i.controls(g) : u(g),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(s),
                                p = g[0],
                                A = g[1],
                                F = (0, r.useState)(() => d(s, l, m)),
                                D = F[0],
                                h = F[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? h(d(p, l, m)) : (E.current = !0);
                                }, [m, p, l]),
                                (0, r.useEffect)(() => {
                                    A(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (D.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [D],
                                ),
                                i().createElement(t.Provider, { value: D }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    s = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
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
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
                function r(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { O: () => i });
                var n = t(5959),
                    a = t(7698),
                    r = t(514);
                const i = { view: t(7641), client: n, sound: r.ZP, intl: a.N };
            },
            7698: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
                const a = {
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
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => m,
                        addPreloadTexture: () => s,
                        arabic2roman: () => w,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => T,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getExternalPaddingsRem: () => x,
                        getFontNames: () => y,
                        getScale: () => A,
                        getSize: () => d,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => I,
                        isEventHandled: () => B,
                        isFocused: () => C,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => E,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => P,
                    }));
                var n = t(9690),
                    a = t(3722),
                    r = t(6112),
                    i = t(6538),
                    o = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function m(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function g(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = n.cg;
                function x() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
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
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function T() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function I(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            a = u.bottom,
                            r = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                    return a;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                t.d(u, { ZT: () => n, jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId'),
                        a = '';
                    var r;
                    u &&
                        ((a = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (n = window.subViews[t].id));
                    return { callerUrl: a, caller: t, stack: u, resId: n };
                };
            },
            5521: (e, u, t) => {
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
                    })(a || (a = {})));
            },
            9480: (e, u, t) => {
                'use strict';
                function n(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                t.d(u, { G: () => i, U2: () => n, UI: () => r });
                const a = n;
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function i(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(a(e, t), t, e)) return !0;
                    }
                    return !1;
                }
            },
            3368: () => {
                (!(function () {
                    let e,
                        u,
                        t,
                        n,
                        a,
                        r,
                        i,
                        o = -1;
                    (document.addEventListener('mousedown', (t) => {
                        (document.getSelection().empty(),
                            t.target.select &&
                                -1 === o &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === o && t.target.select && t.target === e && (o = e.selectionStart), o > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    a = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                (r.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r));
                                const i = e.selectionEnd;
                                i > o ? e.setSelectionRange(o, i, 'forward') : e.setSelectionRange(i, o, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            ((e = null), (o = -1));
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (n = e.target.value),
                                (a = t.selectionStart),
                                (r = -1 !== n.lastIndexOf(' ', a) ? n.lastIndexOf(' ', a) + 1 : 0),
                                (i = -1 !== n.indexOf(' ', a) ? n.indexOf(' ', a) : n.length),
                                t.setSelectionRange(r, i, 'forward'));
                        }));
                })(),
                    (function () {
                        let e = null;
                        (document.addEventListener('mousedown', (u) => {
                            (document.getSelection().empty(),
                                0 !== u.button ||
                                    u.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(u.x, u.y)));
                        }),
                            document.addEventListener('mousemove', (u) => {
                                if (0 === u.button && !u.target.select && e) {
                                    const t = document.caretPositionFromPoint(u.x, u.y);
                                    if (!t.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            }));
                    })());
            },
            1641: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { t: () => n }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(n || (n = {})));
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => o, cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) => (i ? `${e}` : r(e));
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { G: () => n });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => r.Z, B3: () => s, Z5: () => i.Z5, B0: () => o, ry: () => A, Eu: () => F });
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
                var r = t(1358);
                var i = t(8613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    d = t(3138);
                const E = ['args'];
                function g(e, u, t, n, a, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    A = (function () {
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
                                        function i(e) {
                                            g(r, n, a, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, n, a, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    F = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    D = (e, u) => {
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
                                })(u, E);
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
                    h = () => D(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var b = t(7572);
                const B = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: m,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                m = s.width,
                                _ = s.height,
                                E = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(c) + i.y,
                                    width: d.O.view.pxToRem(m),
                                    height: d.O.view.pxToRem(_),
                                };
                            D(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: p(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, h);
                        },
                        handleViewEvent: D,
                        onBindingsReady: A,
                        onLayoutReady: F,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: B,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u, t = 2) => systemLocale.getRealFormat(e, u, t),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            1922: (e, u, t) => {
                'use strict';
                t.d(u, { cJ: () => n });
                (t(6483), t(7739), t(7363), t(1960));
                let n;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(n || (n = {}));
            },
            5310: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => m });
                var n = t(6483),
                    a = t.n(n),
                    r = t(9916),
                    i = t(7363),
                    o = t.n(i),
                    s = t(2558),
                    l = t(8934),
                    c = t(8529);
                const m = ({ children: e, when: u, canAccept: t }) => {
                    const n = (0, i.useCallback)((e, u) => {
                            (0, r.Eu)().then(() => {
                                ((e.className = ''), e.classList.add(c.Z.base), e.classList.add(u));
                            });
                        }, []),
                        m = (0, i.useCallback)(
                            (e) => {
                                n(e, c.Z.base__enter);
                            },
                            [n],
                        ),
                        _ = (0, i.useCallback)(
                            (e) => {
                                n(e, c.Z.base__exit);
                            },
                            [n],
                        );
                    return u
                        ? o().createElement(
                              s.Z,
                              null,
                              o().createElement(
                                  l.Z,
                                  { in: t, timeout: 500, onEnter: m, onExit: _, key: `index-${t}` },
                                  o().createElement('div', { className: a()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : o().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, u, t) => {
                'use strict';
                t.d(u, { D0: () => h, my: () => D, sF: () => b });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6373),
                    i = t(9480),
                    o = t(3403),
                    s = t(7363),
                    l = t.n(s),
                    c = t(1922),
                    m = t(6391),
                    _ = t(5310),
                    d = t(5851),
                    E = t(2306),
                    g = t(7198),
                    p = t(5178),
                    A = t(6826),
                    F = t(628);
                let D, h;
                (!(function (e) {
                    ((e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair'));
                })(D || (D = {})),
                    (function (e) {
                        ((e.Column = 'column'), (e.Row = 'row'));
                    })(h || (h = {})));
                const C = R.strings.tank_setup.dealPanel,
                    b = (0, o.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: u = !1,
                            mediaSize: t = c.cJ.Medium,
                            panelType: n = h.Row,
                            priceLabel: o = C.toBePaid(),
                            autoRenewalLabel: D,
                            onAutoRenewalChanged: b,
                            onDealConfirmed: B,
                            onDealCancelled: v,
                            priceSeparator: f,
                            ignoreDiscount: y = !0,
                            discountTooltipEnabled: w = !1,
                            plusIconShown: x = !0,
                            totalPriceClassName: S,
                        }) => {
                            const k = (0, p.t)(),
                                P = k.model,
                                T = (0, s.useRef)(null),
                                I = t === c.cJ.Tiny || t === c.cJ.Small,
                                N = P.totalItemsInstalled.get(),
                                R = Boolean(P.totalItemsInStorage.get()),
                                M = Boolean(P.demountKitsCount.get()),
                                O = i.G(P.price.get(), (e) => e.value > 0) || M,
                                L = I && R && O && x;
                            return l().createElement(
                                E.h.Provider,
                                { value: k },
                                l().createElement(
                                    'div',
                                    {
                                        className: a()(
                                            F.Z.base,
                                            t && F.Z[`base__${t}`],
                                            e && F.Z.base__renewal,
                                            n !== h.Row && F.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        l().createElement(
                                            'div',
                                            { className: a()(F.Z.renewal, n !== h.Row && F.Z.renewal__dialog) },
                                            l().createElement(d.Y, { renewType: e, onValueChanged: b, label: D }),
                                        ),
                                    l().createElement(
                                        _.f,
                                        { when: n === h.Row, canAccept: P.canAccept.get() },
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            Boolean(N) &&
                                                l().createElement(
                                                    r.i,
                                                    { body: C.tooltip.fromVehicle(), isEnabled: I },
                                                    l().createElement(
                                                        'div',
                                                        { className: a()(F.Z.storage, t && F.Z[`storage__${t}`]) },
                                                        !I &&
                                                            l().createElement(
                                                                'div',
                                                                { className: F.Z.from },
                                                                C.fromVehicle(),
                                                            ),
                                                        l().createElement(m.Y, {
                                                            location: 'vehicle',
                                                            count: N,
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            R &&
                                                l().createElement(
                                                    r.i,
                                                    { body: C.tooltip.fromStorage(), isEnabled: I },
                                                    l().createElement(
                                                        'div',
                                                        { className: a()(F.Z.storage, t && F.Z[`storage__${t}`]) },
                                                        !I &&
                                                            l().createElement(
                                                                'div',
                                                                { className: F.Z.from },
                                                                C.fromStorage(),
                                                            ),
                                                        l().createElement(m.Y, {
                                                            location: 'storage',
                                                            count: P.totalItemsInStorage.get(),
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            L && l().createElement('div', { className: F.Z.plus }),
                                            O &&
                                                l().createElement(
                                                    'div',
                                                    { className: a()(F.Z.totalPrice, L && F.Z.totalPrice__mixed, S) },
                                                    l().createElement(A.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: o,
                                                        messageHidden: I && n === h.Row,
                                                        ignoreDiscount: y,
                                                        discountTooltipEnabled: w,
                                                        priceSeparator: f,
                                                    }),
                                                ),
                                            u &&
                                                P.canAccept.get() &&
                                                l().createElement(
                                                    'div',
                                                    { className: F.Z.control },
                                                    l().createElement(g.Z, {
                                                        isDisabled: P.isDisabled.get(),
                                                        canCancel: P.canCancel.get(),
                                                        onCancel: () => v && v(),
                                                        onConfirm: () => B && B(),
                                                        confirmButtonRef: T,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
            },
            5851: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => c });
                var n = t(2262),
                    a = t(6373),
                    r = t(3403),
                    i = t(7363),
                    o = t.n(i),
                    s = t(8175),
                    l = t(2306);
                const c = (0, r.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: u,
                        renewType: t = s.my.General,
                    }) => {
                        const r = (0, l.o)(),
                            c = r.model,
                            m = r.controls,
                            _ = c.dealPanel.get().isAutoRenewalEnabled,
                            d = (0, i.useCallback)(() => {
                                (m.changeAutoRenewal(!_), u && u(!_));
                            }, [m, _, u]),
                            E = (0, i.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    u = e.header.$dyn(t),
                                    n = t === s.my.General ? '' : e.body.$dyn(t);
                                return { header: String(u || e.header.general()), body: n ? String(n) : void 0 };
                            }, [t]);
                        return o().createElement(
                            a.i,
                            E,
                            o().createElement(n.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: _,
                                text: e,
                                onChange: d,
                            }),
                        );
                    },
                );
            },
            1957: (e, u, t) => {
                'use strict';
                t.d(u, { p: () => o });
                var n = t(3457),
                    a = t(7363),
                    r = t.n(a),
                    i = t(2527);
                const o = r().memo(({ applyBtnString: e, isDisabled: u, onConfirm: t, confirmButtonRef: a }) =>
                    r().createElement(
                        'div',
                        { ref: a, className: i.Z.base, id: 'deal-panel-confirm' },
                        r().createElement(
                            n.u5,
                            { size: n.qE.medium, disabled: u, onClick: () => t && t() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3457),
                    a = t(6373),
                    r = t(7383),
                    i = t(7363),
                    o = t.n(i),
                    s = t(1957),
                    l = t(8099);
                const c = o().memo(
                    ({
                        applyBtnString: e = r.YR,
                        isDisabled: u,
                        canCancel: t,
                        onCancel: i,
                        onConfirm: c,
                        confirmButtonRef: m,
                    }) => {
                        const _ = R.strings.tank_setup.dealPanel,
                            d = o().createElement(s.p, {
                                applyBtnString: e,
                                isDisabled: u,
                                onConfirm: c,
                                confirmButtonRef: m,
                            });
                        return o().createElement(
                            'div',
                            { className: l.Z.base },
                            u
                                ? o().createElement(
                                      a.i,
                                      { body: _.tooltip.notEnough() },
                                      o().createElement('div', null, d),
                                  )
                                : d,
                            o().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                o().createElement(
                                    n.u5,
                                    {
                                        size: n.qE.medium,
                                        type: n.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !t,
                                        onClick: i,
                                    },
                                    _.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => l });
                var n = t(3403),
                    a = t(7363),
                    r = t.n(a),
                    i = t(8175),
                    o = t(5178);
                const s = ['parentModelPath'];
                const l = (0, n.Pi)((e) => {
                    let u = e.parentModelPath,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, s);
                    const n = `${u}.dealPanel`;
                    return r().createElement(o.k, { options: { context: n } }, r().createElement(i.sF, t));
                });
            },
            6826: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => m });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7363),
                    i = t.n(r),
                    o = t(9683),
                    s = t(8401),
                    l = t(5178),
                    c = t(1523);
                const m = ({
                    parentId: e,
                    messageHidden: u,
                    ignoreDiscount: t,
                    discountTooltipEnabled: n,
                    priceLabel: r,
                    priceSeparator: m,
                }) => {
                    const _ = (0, l.t)().model,
                        d = _.demountKitsCount.get();
                    return i().createElement(
                        'div',
                        { id: `${e}-total-price`, className: c.Z.base },
                        i().createElement('div', { className: a()(c.Z.message, u && c.Z.message__hidden) }, r),
                        Boolean(d) &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(o.k, { value: d, size: 'large' }),
                                null != m ? m : i().createElement('div', { className: c.Z.plus }),
                            ),
                        i().createElement(s.t, {
                            ignoreDiscount: t,
                            tooltipEnabled: n,
                            bigSize: !0,
                            price: _.price.get(),
                            defPrice: _.defPrice.get(),
                            discount: _.discount.get(),
                            priceSeparator: null != m ? m : i().createElement('div', { className: c.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => a, o: () => r });
                var n = t(7363);
                const a = (0, n.createContext)(null),
                    r = () => {
                        const e = (0, n.useContext)(a);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => a, t: () => r });
                const n = (0, t(3215).q3)()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives([
                                    'totalItemsInStorage',
                                    'isDisabled',
                                    'canAccept',
                                    'canCancel',
                                    'totalItemsInstalled',
                                    'demountKitsCount',
                                ]),
                                {
                                    root: e.object(),
                                    dealPanel: e.object(),
                                    price: e.array('price'),
                                    defPrice: e.array('defPrice'),
                                    discount: e.array('discount'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            changeAutoRenewal: e.createCallback((e) => ({ value: e }), 'onAutoRenewalChanged'),
                        }),
                    ),
                    a = n[0],
                    r = n[1];
            },
            9683: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => s });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7363),
                    i = t.n(r);
                const o = {
                        base: 'DemountKit_base_b5',
                        icon: 'DemountKit_icon_27',
                        base__large: 'DemountKit_base__large_e1',
                        value: 'DemountKit_value_cd',
                    },
                    s = ({ value: e, size: u = 'small', className: t }) =>
                        0 === e
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: a()(o.base, o[`base__${u}`], t) },
                                  i().createElement('div', { className: o.value }, e),
                                  i().createElement('div', { className: o.icon }),
                              );
            },
            6391: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => s });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7363),
                    i = t.n(r);
                const o = {
                        base: 'Location_base_44',
                        base__countFirst: 'Location_base__countFirst_60',
                        icon: 'Location_icon_7f',
                        base__storage: 'Location_base__storage_bf',
                        base__vehicle: 'Location_base__vehicle_a9',
                        count: 'Location_count_45',
                        count__zero: 'Location_count__zero_f5',
                    },
                    s = ({ countFirst: e = !1, location: u, count: t }) =>
                        i().createElement(
                            'div',
                            { className: a()(o.base, o[`base__${u}`], e && o.base__countFirst) },
                            i().createElement('div', { className: o.icon }),
                            i().createElement('div', { className: a()(o.count, 0 === t && o.count__zero) }, t),
                        );
            },
            8401: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => g });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7405),
                    i = t(329),
                    o = t(7078),
                    s = t(5475),
                    l = t(9480),
                    c = t(7363),
                    m = t.n(c);
                const _ = 'Price_base_61',
                    d = 'Price_currency_ae',
                    E = 'Price_currency__discounted_a7',
                    g = ({
                        price: e,
                        defPrice: u,
                        priceSeparator: t,
                        showZero: n = !1,
                        bigSize: g = !1,
                        ignoreDiscount: p = !1,
                        tooltipEnabled: A = !1,
                        className: F,
                        classNames: D,
                    }) => {
                        const h = (0, c.useMemo)(
                            () => ({ stock: null == D ? void 0 : D.discount }),
                            [null == D ? void 0 : D.discount],
                        );
                        return m().createElement(
                            'div',
                            { className: a()(_, F) },
                            l.UI(e, (e, _) => {
                                var F;
                                const C = null == (F = l.U2(u, _)) ? void 0 : F.value,
                                    b = !(p || ((B = e.value), (v = C), void 0 === v || B === v));
                                var B, v;
                                return (
                                    (n || Boolean(e.value)) &&
                                    m().createElement(
                                        c.Fragment,
                                        { key: `${e.value}-${e.name}-${e.isEnough}` },
                                        _ > 0 && t,
                                        m().createElement(
                                            o.t,
                                            {
                                                args: {
                                                    tooltipId: s.e1,
                                                    currencyType: e.name,
                                                    price: e.value,
                                                    defPrice: C,
                                                },
                                                isEnabled: A && b,
                                            },
                                            m().createElement(
                                                'div',
                                                { className: a()(d, b && E, null == D ? void 0 : D.currency) },
                                                m().createElement(r.F, {
                                                    isDiscount: b,
                                                    size: g ? i.et.big : i.et.small,
                                                    type: e.name,
                                                    value: e.value,
                                                    isEnough: e.isEnough,
                                                    classNames: h,
                                                }),
                                            ),
                                        ),
                                    )
                                );
                            }),
                        );
                    };
            },
            1559: (e, u, t) => {
                'use strict';
                var n = t(7363),
                    a = t.n(n),
                    r = t(1533),
                    i = t.n(r);
                const o = 'postProgressionPairModification',
                    s = 'dealPanel';
                var l = t(3138);
                let c;
                !(function (e) {
                    ((e[(e.Space = 32)] = 'Space'),
                        (e[(e.Enter = 13)] = 'Enter'),
                        (e[(e.A = 65)] = 'A'),
                        (e[(e.B = 66)] = 'B'),
                        (e[(e.C = 67)] = 'C'),
                        (e[(e.D = 68)] = 'D'),
                        (e[(e.E = 69)] = 'E'),
                        (e[(e.F = 70)] = 'F'),
                        (e[(e.G = 71)] = 'G'),
                        (e[(e.H = 72)] = 'H'),
                        (e[(e.I = 73)] = 'I'),
                        (e[(e.J = 74)] = 'J'),
                        (e[(e.K = 75)] = 'K'),
                        (e[(e.L = 76)] = 'L'),
                        (e[(e.M = 77)] = 'M'),
                        (e[(e.N = 78)] = 'N'),
                        (e[(e.O = 79)] = 'O'),
                        (e[(e.P = 80)] = 'P'),
                        (e[(e.Q = 81)] = 'Q'),
                        (e[(e.R = 82)] = 'R'),
                        (e[(e.S = 83)] = 'S'),
                        (e[(e.T = 84)] = 'T'),
                        (e[(e.U = 85)] = 'U'),
                        (e[(e.V = 86)] = 'V'),
                        (e[(e.W = 87)] = 'W'),
                        (e[(e.X = 88)] = 'X'),
                        (e[(e.Y = 89)] = 'Y'),
                        (e[(e.Z = 90)] = 'Z'));
                })(c || (c = {}));
                const m = (e = {}) => {
                    (0, n.useEffect)(() => {
                        const u = (u) => {
                            if (!u.altKey && !u.ctrlKey && !u.shiftKey) {
                                const t = e[u.keyCode];
                                'function' == typeof t && t(u);
                            }
                        };
                        return (
                            window.addEventListener('keyup', u),
                            () => {
                                window.removeEventListener('keyup', u);
                            }
                        );
                    }, [e]);
                };
                var _ = t(5521),
                    d = t(3403),
                    E = t(6483),
                    g = t.n(E),
                    p = t(3457);
                const A = {
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
                    F = [
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
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        D.apply(this, arguments)
                    );
                }
                const h = (e) => {
                    let u = e.caption,
                        t = e.onClick,
                        r = e.goto,
                        i = e.classNames,
                        o = e.onMouseEnter,
                        s = e.onMouseLeave,
                        c = e.onMouseDown,
                        m = e.onMouseUp,
                        _ = e.side,
                        d = void 0 === _ ? 'left' : _,
                        E = e.type,
                        p = void 0 === E ? 'back' : E,
                        h = e.soundHover,
                        C = void 0 === h ? 'highlight' : h,
                        b = e.soundClick,
                        B = void 0 === b ? 'play' : b,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, F);
                    const f = (0, n.useCallback)(
                            (e) => {
                                (null == o || o(e), l.O.sound.play.sound(C));
                            },
                            [o, C],
                        ),
                        y = (0, n.useCallback)(
                            (e) => {
                                null == s || s(e);
                            },
                            [s],
                        ),
                        w = (0, n.useCallback)(
                            (e) => {
                                (null == c || c(e), l.O.sound.play.sound(B));
                            },
                            [c, B],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                null == m || m(e);
                            },
                            [m],
                        );
                    return a().createElement(
                        'div',
                        D(
                            {
                                className: g()(A.base, A[`base__${p}`], A[`base__${d}`], null == i ? void 0 : i.base),
                                onMouseEnter: f,
                                onMouseLeave: y,
                                onMouseDown: w,
                                onMouseUp: x,
                                onClick: t,
                            },
                            v,
                        ),
                        'info' !== p && a().createElement('div', { className: A.shine }),
                        a().createElement(
                            'div',
                            { className: g()(A.icon, A[`icon__${p}`], A[`icon__${d}`], null == i ? void 0 : i.icon) },
                            a().createElement('div', { className: g()(A.glow, null == i ? void 0 : i.glow) }),
                        ),
                        a().createElement(
                            'div',
                            { className: g()(A.caption, A[`caption__${p}`], null == i ? void 0 : i.caption) },
                            u,
                        ),
                        r && a().createElement('div', { className: g()(A.goto, null == i ? void 0 : i.goto) }, r),
                    );
                };
                var C = t(6373),
                    b = t(1281);
                let B;
                function v(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(B || (B = {}));
                const f = (e) => e.replace(/&nbsp;/g, ' '),
                    y = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    w = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    x = (e, u, t = B.left) => e.split(u).reduce(t === B.left ? y : w, []),
                    S = (() => {
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
                    k = ['zh_cn', 'zh_sg', 'zh_tw'],
                    P = (e, u = B.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (k.includes(t)) return S(e);
                        if ('ja' === t) {
                            return (0, b.D4)()
                                .parse(e)
                                .map((e) => f(e));
                        }
                        return ((e, u = B.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = f(e);
                            return (x(a, /( )/, u).forEach((e) => (t = t.concat(x(e, n, B.left)))), t);
                        })(e, u);
                    };
                var T = t(9916),
                    I = t(8613);
                (Date.now(), I.Ew.getRegionalDateTime, I.Ew.getFormattedDateTime);
                const N = (e, u) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
                var M = t(7902);
                const O = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    L = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    $ = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    W = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    j = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = O(`${e}.${t}`, window);
                                return $(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    H = (e) => {
                        const u = ((e) => {
                                const u = (0, M.F)(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: W(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = O(W(t, `${u}.${n}`), window);
                                    return $(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    };
                const U = () => (window.injected || (window.injected = new Map()), window.injected);
                const V = T.Sw.instance;
                let Z;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Z || (Z = {}));
                const z = (e = 'model', u = Z.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            r = (0, n.useMemo)(() => (0, M.F)(), []),
                            i = r.callerUrl,
                            o = r.caller,
                            s = r.resId,
                            l = (0, n.useMemo)(() => {
                                const u = (function (e) {
                                    return U().has(e);
                                })(i.replace('.js', '.html'));
                                return window.__feature && window.__feature !== o && !u ? `subViews.${o}.${e}` : e;
                            }, [i, o, e]),
                            c = (0, n.useState)(() =>
                                ((e) => {
                                    const u = O(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return $(u) ? u.value : u;
                                })(j(l)),
                            ),
                            m = c[0],
                            _ = c[1],
                            d = (0, n.useRef)(-1);
                        return (
                            L(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? Z.Deep : Z.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== Z.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === Z.Deep
                                                ? (e === m && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = H(e);
                                    d.current = V.addCallback(n, t, s, u === Z.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== Z.None)
                                    return () => {
                                        V.removeCallback(d.current, s);
                                    };
                            }, [s, u]),
                            m
                        );
                    },
                    q = (T.Sw.instance, N);
                var G = t(329),
                    K = t(2056),
                    X = t(2372);
                let Y;
                !(function (e) {
                    ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'));
                })(Y || (Y = {}));
                const J = {
                        currency: 'CurrencyItem_currency_b6',
                        currency__credits: 'CurrencyItem_currency__credits_eb',
                        currency__gold: 'CurrencyItem_currency__gold_af',
                        currency__crystal: 'CurrencyItem_currency__crystal_fc',
                        currency__freeXP: 'CurrencyItem_currency__freeXP_36',
                    },
                    Q = ({ value: e, currencyType: u, isWalletAvailable: t }) => {
                        const r = u === G.V2.gold ? 'gold' : 'integral',
                            i = (0, n.useMemo)(() => {
                                return (
                                    (e = Y.backport),
                                    (t = { currency: u }),
                                    {
                                        isEnabled: e !== Y.absent,
                                        args: t,
                                        contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                        decoratorId:
                                            e === Y.normal
                                                ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                                : void 0,
                                        ignoreShowDelay: e === Y.backport,
                                        ignoreMouseClick: !0,
                                    }
                                );
                                var e, t;
                            }, [u]);
                        return a().createElement(
                            K.u,
                            i,
                            a().createElement(
                                'span',
                                { className: g()(J.currency, J[`currency__${u}`]) },
                                t ? a().createElement(X.A, { value: e, format: r }) : R.strings.common.common.dashes(),
                            ),
                        );
                    },
                    ee = 'CurrencyBalance_base_97',
                    ue = ({ credits: e, golds: u, crystals: t, freexp: n, isWalletAvailable: r }) =>
                        a().createElement(
                            'div',
                            { className: ee },
                            a().createElement(Q, { value: t, currencyType: G.V2.crystal, isWalletAvailable: r }),
                            a().createElement(Q, { value: u, currencyType: G.V2.gold, isWalletAvailable: r }),
                            a().createElement(Q, { value: e, currencyType: G.V2.credits, isWalletAvailable: r }),
                            a().createElement(Q, { value: n, currencyType: G.V2.freeXP, isWalletAvailable: r }),
                        ),
                    te = 'DialogTemplate_base_bb',
                    ne = 'DialogTemplate_control_3e',
                    ae = 'DialogTemplate_closeButton_2c',
                    re = 'DialogTemplate_view_78',
                    ie = 'DialogTemplate_view__show_51',
                    oe = 'DialogTemplate_content_dc',
                    se = 'DialogTemplate_line_af',
                    le = 'DialogTemplate_divider_cb',
                    ce = 'DialogTemplate_footer_2b',
                    me = 'DialogTemplate_buttons_f5',
                    _e = 'DialogTemplate_buttonWrapper_d9',
                    de = 'DialogTemplate_button_f0';
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const ge = ({
                    parentId: e,
                    content: u,
                    footer: t,
                    type: r = 'simple',
                    buttonAccept: i,
                    buttonAcceptText: o,
                    buttonCancel: s,
                    buttonCancelText: c,
                    disabledAcceptTooltipText: d = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                    showPayInfo: E = !1,
                    isShowTooltip: A = !0,
                }) => {
                    const F = z('model'),
                        D = F.credits,
                        b = F.golds,
                        B = F.crystals,
                        v = F.freexp,
                        f = F.onAcceptClicked,
                        y = F.onCancelClicked,
                        w = F.onExit,
                        x = F.isWalletAvailable,
                        S = (0, n.useCallback)(() => {
                            f();
                        }, [f]),
                        k = (0, n.useCallback)(() => {
                            y();
                        }, [y]),
                        P = (0, n.useCallback)(() => {
                            w();
                        }, [w]);
                    m({ [_.n.ESCAPE]: P });
                    const T = (0, n.useCallback)(
                        (e) => {
                            (e.keyCode in _.n &&
                                e.keyCode !== _.n.BACKSPACE &&
                                e.keyCode !== _.n.DELETE &&
                                (e.preventDefault(), l.O.view.setEventHandled()),
                                e.keyCode !== _.n.ENTER ||
                                    e.altKey ||
                                    window.model.isAcceptDisabled ||
                                    i.disabled ||
                                    S());
                        },
                        [i.disabled, S],
                    );
                    (0, n.useEffect)(
                        () => (
                            document.addEventListener('keydown', T),
                            () => document.removeEventListener('keydown', T)
                        ),
                        [T],
                    );
                    const I = g()(se, le),
                        N =
                            E &&
                            'simple' === r &&
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(ue, {
                                    credits: D,
                                    golds: b,
                                    crystals: B,
                                    freexp: v,
                                    isWalletAvailable: x,
                                }),
                                a().createElement('div', { className: se }),
                            ),
                        M =
                            i &&
                            a().createElement(
                                C.i,
                                { body: d || '', isEnabled: Boolean(d) && A && i.disabled },
                                a().createElement(
                                    'div',
                                    { id: `${e}-accept`, className: _e },
                                    a().createElement(p.u5, Ee({ onClick: S, mixClass: de }, i), o),
                                ),
                            ),
                        O =
                            s &&
                            a().createElement(
                                'div',
                                { id: `${e}-cancel`, className: _e },
                                a().createElement(p.u5, Ee({ onClick: k, mixClass: de }, s), c),
                            );
                    return a().createElement(
                        'div',
                        { className: te },
                        a().createElement(
                            'div',
                            { className: ne },
                            N,
                            a().createElement(
                                'div',
                                { id: `${e}-close-button`, className: ae },
                                a().createElement(h, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: P,
                                }),
                            ),
                        ),
                        a().createElement(
                            'div',
                            { className: g()(re, ie) },
                            a().createElement('div', { className: oe }, u),
                            a().createElement('div', { className: I }),
                            t && a().createElement('div', { className: ce }, t),
                            a().createElement('div', { className: me }, M, O),
                            a().createElement('div', { id: 'dialog-template-footer' }),
                        ),
                    );
                };
                var pe = t(2106);
                const Ae = 'confirm-app',
                    Fe = { size: pe.q.medium },
                    De = { size: pe.q.medium, type: pe.L.secondary, soundClick: 'cancelcloseno' };
                let he;
                !(function (e) {
                    ((e.Payment = 'payment'), (e.Setup = 'setup'), (e.Modification = 'modification'));
                })(he || (he = {}));
                const Ce = (0, n.createContext)(null),
                    be = () => {
                        const e = (0, n.useContext)(Ce);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var Be = t(3215),
                    ve = t(4598),
                    fe = t(9480),
                    ye = t(3946);
                const we = (0, Be.q3)()(({ observableModel: e }) => {
                        const u = ((e) => {
                                const u = {
                                        root: e.object(),
                                        exchangePanel: e.object('exchangePanel'),
                                        fromItem: e.object('exchangePanel.fromItem'),
                                        toItem: e.object('exchangePanel.toItem'),
                                        exchangeRate: e.object('exchangePanel.exchangeRate'),
                                        discount: e.object('exchangePanel.exchangeRate.discount'),
                                        discountRate: e.object('exchangePanel.exchangeRate.discount.exchangeRate'),
                                        lacksMoney: e.object('lacksMoney'),
                                        mainContent: e.object('mainContent'),
                                        confirmedItems: e.array('mainContent.confirmedItems'),
                                        lacksItem: e.array('mainContent.lacksItem'),
                                        needRepairContent: e.object('needRepairContent'),
                                    },
                                    t = (0, ye.Om)(
                                        (e) => {
                                            const t = fe.U2(u.confirmedItems.get(), e);
                                            if (!t) throw Error(`No confirmed item found with index: ${e}`);
                                            return Object.assign({}, t);
                                        },
                                        { equals: ve.jv },
                                    ),
                                    n = (0, ye.Om)(() => u.confirmedItems.get().length),
                                    a = (0, ye.Om)(() => u.lacksItem.get().length),
                                    r = (0, ye.Om)(
                                        () => {
                                            const e = t(0);
                                            return (e && fe.U2(e.demountPrice.price, 0)) || null;
                                        },
                                        { equals: ve.jv },
                                    );
                                return {
                                    model: u,
                                    computes: {
                                        confirmedItemsLength: n,
                                        lacksItemsLength: a,
                                        confirmedPrice: r,
                                        confirmedItem: t,
                                    },
                                };
                            })(e),
                            t = u.model,
                            n = u.computes;
                        return Object.assign({}, t, {
                            price: e.array('dealPanel.price'),
                            dealPanel: e.object('dealPanel'),
                            computes: n,
                        });
                    }, ve.ZT),
                    xe = we[0],
                    Se = we[1],
                    ke = (e, u) => {
                        const t = [];
                        for (let n = 0; n < e; n++) t.push(u(n));
                        return t;
                    };
                var Pe = t(9690);
                const Te = {
                        base: 'Item_base_2f',
                        highlight: 'Item_highlight_ab',
                        highlight__optionalDevice: 'Item_highlight__optionalDevice_2d',
                        highlight__battleBoosterReplace: 'Item_highlight__battleBoosterReplace_3f',
                        highlight__battleBooster: 'Item_highlight__battleBooster_09',
                        highlight__builtInEquipment: 'Item_highlight__builtInEquipment_21',
                        highlight__battleAbility: 'Item_highlight__battleAbility_2b',
                        highlight__postProgressionModification: 'Item_highlight__postProgressionModification_5e',
                        highlight__equipmentPlus: 'Item_highlight__equipmentPlus_f1',
                        highlight__equipmentTrophyBasic: 'Item_highlight__equipmentTrophyBasic_4b',
                        highlight__equipmentTrophyUpgraded: 'Item_highlight__equipmentTrophyUpgraded_90',
                        highlight__equipmentModernized: 'Item_highlight__equipmentModernized_a2',
                        overlay: 'Item_overlay_ee',
                        overlay__battleBooster: 'Item_overlay__battleBooster_4e',
                        overlay__battleBoosterReplace: 'Item_overlay__battleBoosterReplace_e0',
                        overlay__equipmentPlus: 'Item_overlay__equipmentPlus_a6',
                        overlay__equipmentTrophyBasic: 'Item_overlay__equipmentTrophyBasic_ac',
                        overlay__equipmentTrophyUpgraded: 'Item_overlay__equipmentTrophyUpgraded_32',
                        overlay__equipmentModernized_1: 'Item_overlay__equipmentModernized_1_fd',
                        overlay__equipmentModernized_2: 'Item_overlay__equipmentModernized_2_70',
                        overlay__equipmentModernized_3: 'Item_overlay__equipmentModernized_3_f1',
                        level: 'Item_level_90',
                        postProgressionLevel: 'Item_postProgressionLevel_ad',
                        image: 'Item_image_8d',
                        image__postProgression: 'Item_image__postProgression_ca',
                    },
                    Ie = (0, d.Pi)(({ index: e, itemsType: u }) => {
                        const t = be().model;
                        if (!('computes' in t)) return null;
                        const n = t.computes.confirmedItem(e);
                        if (!n || !n.imageSource) return null;
                        const r = n.highlightType,
                            i = n.level,
                            s = n.overlayType,
                            l = n.imageSource,
                            c = u === o;
                        return a().createElement(
                            'div',
                            { className: Te.base },
                            a().createElement('div', { className: g()(Te.highlight, Te[`highlight__${r}`]) }),
                            a().createElement('div', {
                                className: g()(Te.image, c && Te.image__postProgression),
                                style: { backgroundImage: `url(${l})` },
                            }),
                            i && c
                                ? a().createElement('div', { className: Te.postProgressionLevel }, (0, Pe.HG)(i))
                                : Boolean(i) &&
                                      a().createElement('div', {
                                          style: {
                                              backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${i}`)})`,
                                          },
                                          className: Te.level,
                                      }),
                            a().createElement('div', { className: g()(Te.overlay, Te[`overlay__${s}`]) }),
                        );
                    }),
                    Ne = 'Items_base_b1',
                    Re = (0, d.Pi)(({ itemsType: e }) => {
                        const u = be().model;
                        return 'computes' in u
                            ? a().createElement(
                                  'div',
                                  { className: Ne },
                                  ke(u.computes.confirmedItemsLength(), (u) =>
                                      a().createElement(Ie, { key: u, index: u, itemsType: e }),
                                  ),
                              )
                            : null;
                    });
                var Me = t(7405);
                const Oe = 'FormatText_base_d0',
                    Le = ({ binding: e, text: u = '', classMix: t, alignment: r = B.left, formatWithBrackets: i }) => {
                        if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                        const o = i && e ? v(u, e) : u;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((u, i) =>
                                a().createElement(
                                    'div',
                                    { className: g()(Oe, t), key: `${u}-${i}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : P(e, u))))(
                                        u,
                                        r,
                                        e,
                                    ).map((e, u) => a().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    $e = {
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
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    We = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    je = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    He = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Ue = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => u || {}, [u]);
                        let o = We.exec(e),
                            s = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                n = je.exec(t),
                                c = He.exec(t),
                                m = o[1];
                            if (n && c) {
                                const e = n[0],
                                    o = e + l++ + e;
                                ((s = s.replace(t, `%(${o})`)),
                                    (i[o] = $e[e]
                                        ? a().createElement(
                                              'span',
                                              { className: $e[e] },
                                              a().createElement(Le, { text: m, binding: u }),
                                          )
                                        : a().createElement(
                                              'span',
                                              { style: r(e) },
                                              a().createElement(Le, { text: m, binding: u }),
                                          )));
                            }
                            o = We.exec(e);
                        }
                        return a().createElement(Le, { text: s, classMix: t, binding: i });
                    }),
                    Ve = 'Names_base_96',
                    Ze = (0, d.Pi)(() => {
                        const e = be().model;
                        if (!('computes' in e)) return null;
                        const u = e.computes.confirmedItemsLength();
                        return u <= 1
                            ? null
                            : a().createElement(
                                  'div',
                                  { className: Ve },
                                  ke(u, (t) => {
                                      const r = u - 2,
                                          i = e.computes.confirmedItem(t);
                                      if (!i) return null;
                                      let o;
                                      return (
                                          (o =
                                              t < r
                                                  ? a().createElement('span', null, ', ')
                                                  : t === r
                                                    ? a().createElement(
                                                          'span',
                                                          null,
                                                          ' ',
                                                          R.strings.tank_setup.dialogs.confirm.message.lastSeparation(),
                                                      )
                                                    : null),
                                          a().createElement(
                                              n.Fragment,
                                              { key: i.name },
                                              a().createElement(
                                                  'span',
                                                  null,
                                                  R.strings.common.common.open_quotes(),
                                                  f(i.name),
                                                  R.strings.common.common.close_quotes(),
                                              ),
                                              o,
                                          )
                                      );
                                  }),
                              );
                    }),
                    ze = 'DemountKit_base_af',
                    qe = 'DemountKit_icon_c4',
                    Ge = 'DemountKit_value_79',
                    Ke = ({ value: e }) =>
                        a().createElement(
                            'span',
                            { className: ze },
                            a().createElement('span', { className: Ge }, e),
                            a().createElement('span', { className: qe }),
                        ),
                    Xe = 'Description_base_08',
                    Ye = 'Description_warning_cf',
                    Je = 'Description_doesNotWork_99',
                    Qe = 'Description_demountPairModification_6f',
                    eu = 'Description_warningIcon_98',
                    uu = R.strings.tank_setup.dialogs.confirm,
                    tu = (0, d.Pi)(() => {
                        const e = Se().model,
                            u = e.lacksItem.get(),
                            t = e.computes.lacksItemsLength(),
                            r = e.mainContent.get(),
                            i = r.demountPairModification,
                            o = r.itemsType,
                            s = e.computes.confirmedItem(0),
                            l = e.computes.confirmedItemsLength() > 1,
                            c = 'optionalDevice' === o,
                            m = 'battleBooster' === o && t > 0,
                            _ = e.computes.confirmedPrice(),
                            d = t - 1;
                        if (!(l || c || m || i)) return null;
                        if (!s) return null;
                        const E = uu.warning().replace(`%(devices)s${R.strings.common.common.dot()}`, '%(devices)s'),
                            g = l ? 'items' : s.optItemDescKey;
                        return a().createElement(
                            'div',
                            { className: Xe },
                            a().createElement(Ze, null),
                            c &&
                                a().createElement(Ue, {
                                    text: String(uu.demount.$dyn(g)),
                                    binding:
                                        c && _
                                            ? {
                                                  demountKit: a().createElement(Ke, { value: 1 }),
                                                  price: a().createElement(Me.F, {
                                                      size: G.et.small,
                                                      type: _.name,
                                                      value: _.value,
                                                  }),
                                              }
                                            : {},
                                }),
                            m &&
                                a().createElement(Le, {
                                    text: E,
                                    binding: m
                                        ? {
                                              devices: fe.UI(u, (e, u) =>
                                                  a().createElement(
                                                      n.Fragment,
                                                      { key: e },
                                                      a().createElement(
                                                          'span',
                                                          null,
                                                          R.strings.common.common.open_quotes(),
                                                          R.strings.artefacts.$dyn(e).name(),
                                                          R.strings.common.common.close_quotes(),
                                                          u === d ? R.strings.common.common.dot() : ', ',
                                                      ),
                                                  ),
                                              ),
                                              doesNotWork: a().createElement(
                                                  'span',
                                                  { className: Je },
                                                  uu.doesNotWork(),
                                              ),
                                          }
                                        : {},
                                    classMix: Ye,
                                }),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: Qe },
                                    a().createElement('div', { className: eu }),
                                    uu.item.demountPairModification(),
                                ),
                        );
                    }),
                    nu = 'DialogContent_base_09',
                    au = 'DialogContent_list_8e',
                    ru = 'DialogContent_description_c2',
                    iu = 'DialogContent_title_8f',
                    ou = 'DialogContent_vehicleContainer_1c',
                    su = 'DialogContent_vehicleIcon_e8',
                    lu = R.strings.common.common,
                    cu = (0, d.Pi)(({ name: e, title: u, items: t, description: n }) => {
                        const r = Se().model.root.get().vehicleType,
                            i = r && r.replace(/-/g, '_');
                        return a().createElement(
                            'div',
                            { className: nu },
                            t && a().createElement('div', { className: au }, t),
                            a().createElement(Le, {
                                text: u,
                                binding: {
                                    vehicle:
                                        i &&
                                        a().createElement(
                                            'div',
                                            { className: ou },
                                            a().createElement('div', {
                                                className: su,
                                                style: {
                                                    backgroundImage: i
                                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.c_36x36.$dyn(i)})`
                                                        : '',
                                                },
                                            }),
                                            a().createElement(
                                                'span',
                                                null,
                                                R.strings.tank_setup.dialogs.confirm.vehicleType.$dyn(i),
                                            ),
                                        ),
                                    name: `${lu.open_quotes()}${f(e || '')}${lu.close_quotes()}`,
                                },
                                classMix: iu,
                                formatWithBrackets: !0,
                            }),
                            n && a().createElement('div', { className: ru }, n),
                        );
                    });
                var mu = t(8175),
                    _u = t(3755);
                const du = 'DialogFooter_base_52',
                    Eu = () =>
                        a().createElement(
                            'div',
                            { className: du },
                            a().createElement(_u.w, { panelType: mu.D0.Column, parentModelPath: 'model' }),
                        ),
                    gu = R.strings.tank_setup.dialogs.confirm,
                    pu = (0, d.Pi)(({ isPaymentDeal: e, actionType: u }) => {
                        var t;
                        const n = Se().model,
                            r = n.computes.confirmedItemsLength() > 1,
                            i = n.mainContent.get().itemsType,
                            o = n.root.get(),
                            s = o.withRollback,
                            l = o.applyForAllVehiclesByType,
                            c = r ? gu.title.itemsForAllVehiclesByType : gu.title.itemForAllVehiclesByType,
                            m = r ? gu.title.items : gu.title.item,
                            _ = r ? gu.items : gu.item,
                            d = l ? c : m,
                            E = n.dealPanel.get().isDisabled;
                        return a().createElement(ge, {
                            parentId: Ae,
                            buttonAccept: Object.assign({}, Fe, { disabled: E }),
                            buttonAcceptText: String(gu.confirm.$dyn(u)),
                            buttonCancel: De,
                            buttonCancelText: s && e ? gu.cancel.withRollback() : String(gu.cancel.$dyn(u)),
                            content: a().createElement(cu, {
                                name: null == (t = n.computes.confirmedItem(0)) ? void 0 : t.name,
                                title: v(String(d.$dyn(u)), { type: _.$dyn(i) }),
                                items: a().createElement(Re, { itemsType: i }),
                                description: a().createElement(tu, null),
                            }),
                            footer: 'battleAbility' !== i && a().createElement(Eu, null),
                            showPayInfo: e,
                        });
                    }),
                    Au = 'default',
                    Fu = 'notRequired';
                var Du = t(9174),
                    hu = t(7078);
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const bu = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(C.i, u, n);
                    const r = u.contentId;
                    return r ? a().createElement(K.u, Cu({}, u, { contentId: r }), n) : a().createElement(hu.t, u, n);
                };
                let Bu, vu;
                (!(function (e) {
                    ((e.Limited = 'limited'), (e.Unlimited = 'unlimited'));
                })(Bu || (Bu = {})),
                    (function (e) {
                        ((e.Coefficient = 'coefficient'),
                            (e.Integer = 'integer'),
                            (e.Temporary = 'temporary'),
                            (e.Limited = 'limited'));
                    })(vu || (vu = {})));
                const fu = 'ExchangeRate_base_76',
                    yu = 'ExchangeRate_baseHidden_12',
                    wu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeRateTooltip('resId') },
                    xu = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Su = ({
                        fromItem: e,
                        toItem: u,
                        defaultRate: t,
                        discount: r,
                        amountOfPersonalDiscounts: i,
                        discountRate: o,
                    }) => {
                        const s = r.isDiscountAvailable && 'limited' === r.discountType && r.amountOfDiscount < e.value;
                        let l;
                        r && r.isDiscountAvailable && (l = r.discountType === Bu.Limited ? (i <= 5 ? xu : void 0) : wu);
                        const c = (0, n.useMemo)(
                            () => ({
                                gold: a().createElement(Me.F, {
                                    key: e.name,
                                    size: G.et.small,
                                    type: G.V2.gold,
                                    value: 1,
                                }),
                                credits: a().createElement(Me.F, {
                                    key: u.name,
                                    size: G.et.small,
                                    type: G.V2.credits,
                                    value: r.isDiscountAvailable ? o.resourceRateValue : t,
                                    isDiscount: r.isDiscountAvailable,
                                }),
                            }),
                            [t, o.resourceRateValue, r.isDiscountAvailable, e.name, u.name],
                        );
                        return a().createElement(
                            'div',
                            { className: g()(fu, s && yu) },
                            a().createElement(
                                bu,
                                { tooltipArgs: l },
                                a().createElement(Le, {
                                    text: R.strings.tank_setup.dialogs.goldExchange.default.status(),
                                    binding: c,
                                }),
                            ),
                        );
                    },
                    ku = 'EasyTankEquipHeader_base_ee',
                    Pu = 'EasyTankEquipHeader_highlight_8c',
                    Tu = 'EasyTankEquipHeader_highlight__warning_1b',
                    Iu = ({ bottomContentType: e }) =>
                        a().createElement(
                            'div',
                            { className: ku },
                            a().createElement('div', { className: g()(Pu, e === s && Tu) }),
                        ),
                    Nu = (0, Be.q3)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            needRepairContent: e.object('needRepairContent'),
                        }),
                        ve.ZT,
                    ),
                    Ru = Nu[0],
                    Mu = Nu[1],
                    Ou = 'Alert_base_42',
                    Lu = 'Alert_highlight_f2',
                    $u = 'Alert_highlight__warning_13',
                    Wu = ({ warning: e }) => {
                        const u = g()(Lu, e && $u);
                        return a().createElement('div', { className: Ou }, a().createElement('div', { className: u }));
                    },
                    ju = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Hu, Uu;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(Hu || (Hu = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(Uu || (Uu = {})));
                const Vu = ({ size: e = Hu.Default }) => {
                        const u = g()(ju.background, ju[`background__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    Zu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    zu = ({ size: e }) => {
                        const u = g()(Zu.base, Zu[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    qu = {
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
                    Gu = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                            const o = g()(
                                    qu.base,
                                    qu[`base__${e}`],
                                    t && qu.base__disabled,
                                    r && qu.base__finished,
                                    i && qu.base__withoutBounce,
                                ),
                                s = !t && !r;
                            return a().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                a().createElement('div', { className: qu.pattern }),
                                a().createElement('div', { className: qu.gradient }),
                                s && a().createElement(zu, { size: e }),
                            );
                        },
                    ),
                    Ku = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(n));
                        };
                    };
                let Xu, Yu;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Xu || (Xu = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Yu || (Yu = {})));
                const Ju = 'ProgressBarDeltaGrow_base_7e',
                    Qu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    et = 'ProgressBarDeltaGrow_glow_68',
                    ut = (e) => (e ? { left: 0 } : { right: 0 }),
                    tt = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    nt = (e) => ({ transitionDuration: `${e}ms` }),
                    at = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const m = o < r,
                                _ = (0, n.useState)(Xu.Idle),
                                d = _[0],
                                E = _[1],
                                p = d === Xu.End,
                                A = d === Xu.Idle,
                                F = d === Xu.Grow,
                                D = d === Xu.Shrink,
                                h = (0, n.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                C = (0, n.useCallback)(
                                    (e, u) =>
                                        Ku(() => {
                                            h(e);
                                        }, u),
                                    [h],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return A
                                        ? C(Xu.Grow, u)
                                        : F
                                          ? C(Xu.Shrink, e)
                                          : D
                                            ? C(Xu.End, e)
                                            : void (p && s && s());
                            }, [C, t, p, F, A, D, s, u, e]);
                            const b = (0, n.useMemo)(() => Object.assign({ width: '100%' }, nt(e), ut(m)), [m, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, nt(e), ut(m)), [m, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, tt(m, r), nt(e)), [r, m, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, tt(m, r), nt(e)),
                                    [r, m, o, e],
                                );
                            if (p) return null;
                            const y = g()(Ju, c, m && 0 === o && Qu);
                            return a().createElement(
                                'div',
                                { style: A ? v : f, className: y },
                                a().createElement(
                                    'div',
                                    { style: D ? B : b, className: et },
                                    a().createElement(zu, { size: i }),
                                ),
                            );
                        },
                    ),
                    rt = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < t,
                                _ = (0, n.useState)(!1),
                                d = _[0],
                                E = _[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (e === Xu.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                A = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Gu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? A : p,
                                }),
                                t >= 0 &&
                                    a().createElement(at, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    it = 'ProgressBarDeltaSimple_base_6c',
                    ot = 'ProgressBarDeltaSimple_delta_99',
                    st = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: i,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                m = (0, n.useState)(Yu.Idle),
                                _ = m[0],
                                d = m[1],
                                E = _ === Yu.In,
                                g = _ === Yu.End,
                                p = _ === Yu.Idle,
                                A = (0, n.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (p && !t) {
                                    return Ku(() => {
                                        A(Yu.In);
                                    }, u);
                                }
                            }, [A, t, p, u]),
                                (0, n.useEffect)(() => {
                                    if (E) {
                                        return Ku(() => {
                                            (s && s(), A(Yu.End));
                                        }, e + u);
                                    }
                                }, [A, E, s, u, e]));
                            const F = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return g
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: it, style: h },
                                      a().createElement(
                                          'div',
                                          { style: p ? F : D, className: ot },
                                          a().createElement(zu, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    lt = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: i,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(Gu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: i,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    a().createElement(st, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    ct = ['onComplete', 'onEndAnimation'];
                function mt() {
                    return (
                        (mt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        mt.apply(this, arguments)
                    );
                }
                const _t = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, ct);
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            s = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && s(e), e && u && u(), t && t());
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Uu.Simple:
                                return a().createElement(lt, mt({}, r, { onEndAnimation: l, isComplete: o }));
                            case Uu.Growing:
                                return a().createElement(rt, mt({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    dt = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: i }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                s && i && i();
                            }, [s, i]),
                            a().createElement(Gu, { size: e, disabled: r, baseStyles: o, isComplete: s, lineRef: t })
                        );
                    },
                    Et = ['onEndAnimation'];
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                const pt = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                            return a;
                        })(e, Et);
                    const r = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            ((r.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        a().createElement(
                            _t,
                            gt({}, t, {
                                onEndAnimation: i,
                                key: `${o}-${t.to}-${null == t ? void 0 : t.additionalKey}`,
                                from: o,
                            }),
                        )
                    );
                });
                function At() {
                    return (
                        (At =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        At.apply(this, arguments)
                    );
                }
                const Ft = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            additionalKey: i,
                            animationSettings: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === u)
                                return a().createElement(dt, {
                                    key: `${r}-${u}-${i}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const m = {
                                from: r,
                                to: u,
                                size: e,
                                additionalKey: i,
                                lineRef: t,
                                disabled: n,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? a().createElement(pt, m)
                                : a().createElement(_t, At({ key: `${r}-${u}-${i}` }, m));
                        },
                    ),
                    Dt = (e) => {
                        var u, t, n, a, r, i, o, s, l, c, m, _, d, E, g, p, A, F, D, h;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (u = null == (t = e.bg) ? void 0 : t.height) ? u : '12rem',
                            '--progress-bg-height-small':
                                null != (n = null == (a = e.bg) ? void 0 : a.heightSmall) ? n : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (i = e.pattern.size) ? i : '3rem 10rem',
                            '--progress-pattern-border-size': null != (o = e.pattern.borderSize) ? o : '1rem',
                            '--progress-pattern-gradient':
                                null != (s = e.pattern.gradient)
                                    ? s
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (m = null == (_ = e.glowSettings) ? void 0 : _.width) ? m : '60rem',
                            '--progress-glow-height':
                                null != (d = null == (E = e.glowSettings) ? void 0 : E.height) ? d : '100rem',
                            '--progress-glow-small-width':
                                null != (g = null == (p = e.glowSettings) ? void 0 : p.smallWidth) ? g : '44rem',
                            '--progress-glow-small-height':
                                null != (A = null == (F = e.glowSettings) ? void 0 : F.smallHeight) ? A : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (D = null == (h = e.glowSettings) ? void 0 : h.mixBlendMode) ? D : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    ht = {
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
                    },
                    Ct =
                        (Object.assign({}, ht, {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                            line: Object.assign({}, ht.line, {
                                bgColorBase: '#83C6A5',
                                bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                            }),
                            pattern: Object.assign({}, ht.pattern, {
                                bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                                bgImageDisabled:
                                    'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                                bgImageFinished:
                                    'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                            }),
                        }),
                        (e, u, t) => (t < e ? e : t > u ? u : t)),
                    bt = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (Ct(0, u, t) / u) * 100;
                        }
                        return e;
                    };
                const Bt = {
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
                    vt = {
                        freezed: !1,
                        withStack: !1,
                        type: Uu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ft = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Bt,
                            size: t = Hu.Default,
                            animationSettings: r = vt,
                            disabled: i = !1,
                            withoutBackground: o = !1,
                            value: s,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: m,
                            onChangeAnimationState: _,
                            onEndAnimation: d,
                            onComplete: E,
                            className: p,
                        }) => {
                            const A = (function (e, u, t) {
                                return (0, n.useMemo)(() => {
                                    const n = (Ct(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: bt(n, u, t) };
                                }, [t, u, e]);
                            })(s, e, l);
                            return a().createElement(
                                'div',
                                { className: g()(ju.base, p, ju[`base__${t}`]), style: Dt(u) },
                                !o && a().createElement(Vu, { size: t }),
                                a().createElement(Ft, {
                                    size: t,
                                    lineRef: m,
                                    disabled: i,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: _,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    yt = 'Durability_base_8c',
                    wt = 'Durability_label_02',
                    xt = 'Durability_bar_73',
                    St = 'Durability_percentage_a7',
                    kt = R.strings.tank_setup.dialogs.needRepair,
                    Pt = ({ value: e }) =>
                        a().createElement(
                            'div',
                            { className: yt },
                            a().createElement('div', { className: wt }, kt.durability()),
                            a().createElement(
                                'div',
                                { className: xt },
                                a().createElement(ft, { size: Hu.Medium, value: e }),
                            ),
                            a().createElement(Le, {
                                text: kt.durabilityPercentage(),
                                binding: { value: e },
                                classMix: St,
                            }),
                        ),
                    Tt = 'RepairHeaderApp_base_b0',
                    It = 'RepairHeaderApp_durability_69',
                    Nt = (0, d.Pi)(() => {
                        const e = Mu().model,
                            u = e.needRepairContent.get().repairPercentage,
                            t = e.root.get().bottomContentType;
                        return a().createElement(
                            'div',
                            { className: Tt },
                            a().createElement(Wu, { warning: t === s }),
                            t === s && a().createElement('div', { className: It }, a().createElement(Pt, { value: u })),
                        );
                    }),
                    Rt = () => a().createElement(Ru, null, a().createElement(Nt, null)),
                    Mt = {
                        base: 'ExchangeDialogContent_base_ef',
                        description: 'ExchangeDialogContent_description_6e',
                        status: 'ExchangeDialogContent_status_33',
                        status__notPossible: 'ExchangeDialogContent_status__notPossible_e1',
                        status__notRequired: 'ExchangeDialogContent_status__notRequired_8a',
                        items: 'ExchangeDialogContent_items_72',
                        title: 'ExchangeDialogContent_title_9f',
                        titleCurrency: 'ExchangeDialogContent_titleCurrency_88',
                    },
                    Ot = R.strings.tank_setup.dialogs.goldExchange.notRequired.action,
                    Lt = R.strings.common.common,
                    $t = (e) => (e === he.Modification ? Ot.modification() : Ot.buy()),
                    Wt = (0, d.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            exchangeState: n,
                            items: r,
                            actionType: i,
                            description: o,
                            exchangeType: s = Gn.Basic,
                        }) => {
                            const l = be().model,
                                c = l.root.get().bottomContentType,
                                m = l.fromItem.get(),
                                _ = l.lacksMoney.get(),
                                d = l.toItem.get(),
                                E = l.exchangeRate.get(),
                                p =
                                    s === Gn.Upgrade
                                        ? R.strings.tank_setup.dialogs.exchangeToUpgrade
                                        : R.strings.tank_setup.dialogs.goldExchange,
                                A = v(p.notRequired.title(), { action: $t(i) });
                            return a().createElement(
                                'div',
                                { className: Mt.base },
                                s === Gn.Repair && a().createElement(Rt, null),
                                s === Gn.EasyTankEquip && a().createElement(Iu, { bottomContentType: c }),
                                r && a().createElement('div', { className: Mt.items }, r),
                                a().createElement(Le, {
                                    text: n === Fu ? A : e,
                                    binding: Object.assign(
                                        {
                                            name: t && `${Lt.open_quotes()}${f(t)}${Lt.close_quotes()}`,
                                            credits: a().createElement(
                                                'div',
                                                { className: Mt.titleCurrency },
                                                a().createElement(Me.F, {
                                                    key: _.name,
                                                    size: G.et.large,
                                                    type: G.V2.credits,
                                                    value: _.value,
                                                }),
                                            ),
                                        },
                                        u,
                                    ),
                                    formatWithBrackets: Boolean(Object.keys(u || {}).length),
                                    classMix: Mt.title,
                                }),
                                o && a().createElement('div', { className: Mt.description }, o),
                                a().createElement(
                                    'div',
                                    { className: g()(Mt.status, Mt[`status__${n}`]) },
                                    n === Au &&
                                        a().createElement(Su, {
                                            fromItem: m,
                                            toItem: d,
                                            defaultRate: E.default,
                                            discount: l.discount.get(),
                                            discountRate: l.discountRate.get(),
                                            amountOfPersonalDiscounts: E.amountOfPersonalDiscounts,
                                        }),
                                    'notPossible' === n &&
                                        a().createElement(Le, {
                                            text: p.notPossible.status(),
                                            binding: {
                                                gold: a().createElement(Me.F, {
                                                    type: G.V2.gold,
                                                    size: G.et.small,
                                                    value: m.value,
                                                }),
                                            },
                                        }),
                                    n === Fu && p.notRequired.status(),
                                ),
                            );
                        },
                    ),
                    jt = (e) => {
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
                    },
                    Ht = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    Ut = (e) => e instanceof HTMLElement,
                    Vt = (e) => {
                        e.focus();
                    },
                    Zt = (e) => {
                        if (e.keyCode === _.n.TAB) {
                            const u = Array.from(document.body.querySelectorAll('input')).filter(Ut);
                            if (!u.length) return;
                            (e.preventDefault(), l.O.view.setEventHandled());
                            const t = document.activeElement,
                                n = u[0],
                                a = u[u.length - 1];
                            if (e.shiftKey && t === n) Vt(a);
                            else if (e.shiftKey || t !== a) {
                                const n = u.findIndex((e) => e === t),
                                    a = u[n + (e.shiftKey ? -1 : 1)];
                                a && Vt(a);
                            } else Vt(n);
                        }
                    };
                function zt(e) {
                    const u = new KeyboardEvent('keydown', {
                        view: window,
                        bubbles: !0,
                        key: 'Tab',
                        charCode: _.n.TAB,
                        keyCode: _.n.TAB,
                        shiftKey: e,
                    });
                    document.body.dispatchEvent(u);
                }
                function qt(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function o() {
                        a && clearTimeout(a);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - i;
                        function m() {
                            ((i = Date.now()), t.apply(l, s));
                        }
                        r ||
                            (n && !a && m(),
                            o(),
                            void 0 === n && c > e
                                ? m()
                                : !0 !== u &&
                                  (a = setTimeout(
                                      n
                                          ? function () {
                                                a = void 0;
                                            }
                                          : m,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (s.cancel = function () {
                            (o(), (r = !0));
                        }),
                        s
                    );
                }
                function Gt(e, u, t, a = !1) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, u, t) {
                                return void 0 === t ? qt(e, u, !1) : qt(e, t, !1 !== u);
                            })(t, a, e),
                        u,
                    );
                    return ((0, n.useEffect)(() => r.cancel, [r]), r);
                }
                var Kt = t(2558),
                    Xt = t(8934);
                const Yt = (e, u = T.B3.INTEGRAL) => T.Z5.getNumberFormat(e, u);
                t(3368);
                let Jt;
                !(function (e) {
                    ((e[(e.ZERO = 48)] = 'ZERO'),
                        (e[(e.ONE = 49)] = 'ONE'),
                        (e[(e.TWO = 50)] = 'TWO'),
                        (e[(e.THREE = 51)] = 'THREE'),
                        (e[(e.FOUR = 52)] = 'FOUR'),
                        (e[(e.FIVE = 53)] = 'FIVE'),
                        (e[(e.SIX = 54)] = 'SIX'),
                        (e[(e.SEVEN = 55)] = 'SEVEN'),
                        (e[(e.EIGHT = 56)] = 'EIGHT'),
                        (e[(e.NINE = 57)] = 'NINE'),
                        (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                        (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                        (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                        (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                        (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                        (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                        (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                        (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                        (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                        (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'));
                })(Jt || (Jt = {}));
                var Qt = t(7727);
                const en = {
                    base: 'NumericStepper_base_98',
                    base__small: 'NumericStepper_base__small_e3',
                    base__medium: 'NumericStepper_base__medium_7f',
                    base__large: 'NumericStepper_base__large_87',
                    base__isFocus: 'NumericStepper_base__isFocus_d0',
                    base__isDisabled: 'NumericStepper_base__isDisabled_06',
                    inputContainer: 'NumericStepper_inputContainer_87',
                    input: 'NumericStepper_input_ef',
                    'base__withCurrency-small': 'NumericStepper_base__withCurrency-small_a3',
                    'base__withCurrency-medium': 'NumericStepper_base__withCurrency-medium_28',
                    'base__withCurrency-large': 'NumericStepper_base__withCurrency-large_2b',
                    input__disabled: 'NumericStepper_input__disabled_83',
                    input__credits: 'NumericStepper_input__credits_d6',
                    'input__credits-disabled': 'NumericStepper_input__credits-disabled_57',
                    input__gold: 'NumericStepper_input__gold_21',
                    'input__gold-disabled': 'NumericStepper_input__gold-disabled_1c',
                    input__xp: 'NumericStepper_input__xp_df',
                    input__freeXP: 'NumericStepper_input__freeXP_53',
                    input__crystal: 'NumericStepper_input__crystal_64',
                    'input__xp-disabled': 'NumericStepper_input__xp-disabled_4a',
                    'input__freeXP-disabled': 'NumericStepper_input__freeXP-disabled_29',
                    'input__crystal-disabled': 'NumericStepper_input__crystal-disabled_52',
                    input__withCurrency: 'NumericStepper_input__withCurrency_81',
                    'input__xp-medium': 'NumericStepper_input__xp-medium_4c',
                    'input__xp-large': 'NumericStepper_input__xp-large_5e',
                    'input__freeXP-medium': 'NumericStepper_input__freeXP-medium_ee',
                    'input__freeXP-large': 'NumericStepper_input__freeXP-large_05',
                    'input__crystal-medium': 'NumericStepper_input__crystal-medium_ef',
                    'input__crystal-large': 'NumericStepper_input__crystal-large_28',
                    input__error: 'NumericStepper_input__error_d8',
                    currency: 'NumericStepper_currency_31',
                    'currency__xp-medium': 'NumericStepper_currency__xp-medium_1d',
                    'currency__xp-large': 'NumericStepper_currency__xp-large_e1',
                    'currency__freeXP-medium': 'NumericStepper_currency__freeXP-medium_fa',
                    'currency__freeXP-large': 'NumericStepper_currency__freeXP-large_6d',
                    'currency__crystal-medium': 'NumericStepper_currency__crystal-medium_15',
                    'currency__crystal-large': 'NumericStepper_currency__crystal-large_02',
                    currencyIcon: 'NumericStepper_currencyIcon_5a',
                    'currencyIcon__credits-small': 'NumericStepper_currencyIcon__credits-small_05',
                    'currencyIcon__credits-medium': 'NumericStepper_currencyIcon__credits-medium_ec',
                    'currencyIcon__credits-large': 'NumericStepper_currencyIcon__credits-large_d4',
                    'currencyIcon__gold-small': 'NumericStepper_currencyIcon__gold-small_52',
                    'currencyIcon__gold-medium': 'NumericStepper_currencyIcon__gold-medium_77',
                    'currencyIcon__gold-large': 'NumericStepper_currencyIcon__gold-large_c1',
                    'currencyIcon__crystal-small': 'NumericStepper_currencyIcon__crystal-small_69',
                    'currencyIcon__crystal-medium': 'NumericStepper_currencyIcon__crystal-medium_20',
                    'currencyIcon__crystal-large': 'NumericStepper_currencyIcon__crystal-large_fa',
                    'currencyIcon__freeXP-small': 'NumericStepper_currencyIcon__freeXP-small_5c',
                    'currencyIcon__freeXP-medium': 'NumericStepper_currencyIcon__freeXP-medium_27',
                    'currencyIcon__freeXP-large': 'NumericStepper_currencyIcon__freeXP-large_27',
                    'currencyIcon__xp-small': 'NumericStepper_currencyIcon__xp-small_e9',
                    'currencyIcon__xp-medium': 'NumericStepper_currencyIcon__xp-medium_20',
                    'currencyIcon__xp-large': 'NumericStepper_currencyIcon__xp-large_8e',
                    dummyValue: 'NumericStepper_dummyValue_0c',
                    control: 'NumericStepper_control_b0',
                    buttonIncrement: 'NumericStepper_buttonIncrement_48',
                    buttonDecrement: 'NumericStepper_buttonDecrement_e6',
                    buttonIncrement__small: 'NumericStepper_buttonIncrement__small_a8',
                    buttonDecrement__small: 'NumericStepper_buttonDecrement__small_25',
                    buttonIncrement__medium: 'NumericStepper_buttonIncrement__medium_2e',
                    buttonDecrement__medium: 'NumericStepper_buttonDecrement__medium_b0',
                    buttonIncrement__large: 'NumericStepper_buttonIncrement__large_37',
                    buttonDecrement__large: 'NumericStepper_buttonDecrement__large_f9',
                    buttonIncrement__isDisabled: 'NumericStepper_buttonIncrement__isDisabled_6b',
                    buttonDecrement__isDisabled: 'NumericStepper_buttonDecrement__isDisabled_a3',
                    'buttonIncrement__isActive-small': 'NumericStepper_buttonIncrement__isActive-small_6e',
                    'buttonIncrement__isActive-medium': 'NumericStepper_buttonIncrement__isActive-medium_cd',
                    'buttonIncrement__isActive-large': 'NumericStepper_buttonIncrement__isActive-large_8b',
                    'buttonDecrement__isActive-small': 'NumericStepper_buttonDecrement__isActive-small_a0',
                    'buttonDecrement__isActive-medium': 'NumericStepper_buttonDecrement__isActive-medium_df',
                    'buttonDecrement__isActive-large': 'NumericStepper_buttonDecrement__isActive-large_ac',
                };
                class un extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.timer = null),
                            (this.validationTimer = null),
                            (this.numericalStepper = (0, n.createRef)()),
                            (this.input = (0, n.createRef)()),
                            (this.state = {
                                value: this.props.value,
                                isFocused: this.props.isFocused,
                                activeDecrement: !1,
                                activeIncrement: !1,
                            }),
                            (this.setFocusOnInput = () => {
                                this.props.isDisabled ||
                                    (this.input.current &&
                                        (this.input.current.focus(),
                                        this.setState({ isFocused: !0 }),
                                        this.setCursorPosition(
                                            this.formattedValue.length,
                                            this.formattedValue.length,
                                        )));
                            }),
                            (this.blurInput = () => {
                                this.input.current && (this.input.current.blur(), this.setState({ isFocused: !1 }));
                            }),
                            (this.componentDidMount = () => {
                                (this.state.isFocused &&
                                    (this.setFocusOnInput(),
                                    setTimeout(() => {
                                        const e = this.formattedValue.length;
                                        this.input.current && this.input.current.setSelectionRange(e, e);
                                    }, 0)),
                                    document.addEventListener('click', this.handleClickOutside),
                                    document.addEventListener('mouseup', this.handleMouseUp));
                            }),
                            (this.componentWillUnmount = () => {
                                (this.stop(),
                                    document.removeEventListener('click', this.handleClickOutside),
                                    document.removeEventListener('mouseup', this.handleMouseUp));
                            }),
                            (this.formatValue = (e) =>
                                this.props.currencyType ? T.Z5.getNumberFormat(e, T.B3.GOLD) : e.toString()),
                            (this.getValidValue = (e) => {
                                const u = Math.min(this.props.maximum, Math.max(this.props.minimum, e));
                                return this.props.onValidValue
                                    ? this.props.onValidValue(u)
                                    : Math.round(u / this.props.stepSize) * this.props.stepSize;
                            }),
                            (this.changeValue = (e) => {
                                e !== this.state.value && (this.setState({ value: e }), this.props.onChange(e));
                            }),
                            (this.setCursorPosition = (e, u) => {
                                (this.input.current && this.input.current.setSelectionRange(e, u),
                                    setTimeout(() => {
                                        this.input.current && this.input.current.setSelectionRange(e, u);
                                    }));
                            }),
                            (this.handleChange = () => {
                                this.props.isDisabled || this.updateInput();
                            }),
                            (this.updateInput = (e = 0) => {
                                const u = e === _.n.BACKSPACE,
                                    t = e === _.n.DELETE,
                                    n = this.input.current,
                                    a = n.selectionStart || 0,
                                    r = n.selectionEnd || 0;
                                let i = n.value;
                                const o = Math.max(a, r),
                                    s = o;
                                (t && (i = i.substring(0, o) + i.substring(o + 1, i.length)),
                                    u && 1 === a && 1 === i.length && (i = '0'));
                                const l = Number(i.trim().replace(/\D/g, '')),
                                    c = Number.isSafeInteger(l) ? l : Number.MAX_SAFE_INTEGER,
                                    m = this.props.currencyType ? T.Z5.getNumberFormat(c, T.B3.GOLD) : c.toString(),
                                    d = !isNaN(Number(i.replace(' ', '')));
                                n.value = m;
                                const E = new RegExp(/\d/g);
                                let g = 0;
                                for (let e = 0; e < s; e++) {
                                    const u = i[e] || '',
                                        t = m[g] || '';
                                    if (u.match(E) || u === t) {
                                        for (; u !== m[g] && g < m.length; ) g++;
                                        g++;
                                    }
                                }
                                ('' === i ? (g = 1) : d || (g = i.length),
                                    this.input.current && this.input.current.setSelectionRange(0, 0),
                                    this.setCursorPosition(g, g),
                                    this.changeValue(c),
                                    this.validationTimer && clearTimeout(this.validationTimer),
                                    (this.validationTimer = setTimeout(() => {
                                        this.getValidValue(c) !== c &&
                                            this.state.isFocused &&
                                            (this.changeValue(this.getValidValue(c)),
                                            this.setCursorPosition(0, this.formatValue(c).length));
                                    }, 1e3)));
                            }),
                            (this.handleDelete = (e) => {
                                const u = e.keyCode === _.n.BACKSPACE,
                                    t = e.keyCode === _.n.DELETE,
                                    n = e.target,
                                    a = n.selectionStart,
                                    r = n.selectionEnd,
                                    i = n.value,
                                    o = a !== r,
                                    s = new RegExp(/\D/),
                                    l = u && a ? a - 1 : a || 0;
                                if (o) return;
                                let c = l;
                                const m = s.test(i[l]);
                                if (t && m) for (; s.test(i[c]) && c < i.length; ) c++;
                                if (u && m) for (; s.test(i[c]) && c > 0; ) c--;
                                if (c !== l || (u && m))
                                    return (e.preventDefault(), (c = c < 0 ? 0 : c), void this.setCursorPosition(c, c));
                                ((u && 1 === a && 1 === i.length) || t) &&
                                    (e.preventDefault(), this.updateInput(e.keyCode));
                            }),
                            (this.handleClickOutside = (e) => {
                                const u = document.activeElement;
                                this.state.isFocused &&
                                    u !== this.input.current &&
                                    null !== this.numericalStepper.current &&
                                    !this.numericalStepper.current.contains(e.target) &&
                                    this.setState({ isFocused: !1 });
                            }),
                            (this.handleBlur = () => {
                                if (this.props.isDisabled) return;
                                const e = this.getValidValue(this.state.value);
                                e !== this.state.value && this.changeValue(e);
                            }),
                            (this.handleWheel = (e) => {
                                if (this.props.isDisabled || !this.state.isFocused) return;
                                e.preventDefault();
                                e.deltaY < 0 ? this.decrement() : this.increment();
                            }),
                            (this.handleMouseUp = () => {
                                (this.stop(), this.setState({ activeIncrement: !1, activeDecrement: !1 }));
                            }),
                            (this.handleMouseLeave = () => {
                                this.stop();
                            }),
                            (this.incrementHandleMouseEnter = (e) => {
                                (this.state.activeIncrement && this.incrementHandleMouseDown(e, !0),
                                    this.buttonIncrementIsDisabled || this.playHoverSound());
                            }),
                            (this.decrementHandleMouseEnter = (e) => {
                                (this.state.activeDecrement && this.decrementHandleMouseDown(e, !0),
                                    this.buttonDecrementIsDisabled || this.playHoverSound());
                            }),
                            (this.handleKeyDown = (e) => {
                                if (!this.props.isDisabled) {
                                    switch (
                                        (e.keyCode in _.n &&
                                            e.keyCode !== _.n.BACKSPACE &&
                                            e.keyCode !== _.n.DELETE &&
                                            e.preventDefault(),
                                        e.keyCode)
                                    ) {
                                        case _.n.ARROW_UP:
                                        case _.n.NUM_PLUS:
                                        case _.n.PLUS:
                                            (this.state.activeIncrement || this.setState({ activeIncrement: !0 }),
                                                this.increment());
                                            break;
                                        case _.n.ARROW_DOWN:
                                        case _.n.NUM_MINUS:
                                        case _.n.MINUS:
                                            (this.state.activeDecrement || this.setState({ activeDecrement: !0 }),
                                                this.decrement());
                                            break;
                                        case _.n.HOME:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case _.n.END:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case _.n.ENTER:
                                            if (
                                                (e.nativeEvent.stopImmediatePropagation(),
                                                this.state.value >= this.props.maximum)
                                            ) {
                                                const e = this.formatValue(this.props.maximum).length;
                                                (this.changeValue(this.props.maximum), this.setCursorPosition(0, e));
                                            }
                                            break;
                                        case _.n.PAGE_UP:
                                            this.changeValue(this.props.maximum);
                                            break;
                                        case _.n.PAGE_DOWN:
                                            this.changeValue(this.props.minimum);
                                            break;
                                        case _.n.BACKSPACE:
                                        case _.n.DELETE:
                                            this.handleDelete(e);
                                    }
                                    this.props.onKeyDown(e);
                                }
                            }),
                            (this.handleKeyUp = (e) => {
                                if (!this.props.isDisabled)
                                    switch (e.keyCode) {
                                        case _.n.ARROW_UP:
                                        case _.n.NUM_PLUS:
                                        case _.n.PLUS:
                                            this.setState({ activeIncrement: !1 });
                                            break;
                                        case _.n.ARROW_DOWN:
                                        case _.n.NUM_MINUS:
                                        case _.n.MINUS:
                                            this.setState({ activeDecrement: !1 });
                                    }
                            }),
                            (this.allowOnlyNumbers = (e) => {
                                e.which in Jt || e.preventDefault();
                            }),
                            (this.increment = () => {
                                const e = this.props.onIncrement ? this.props.onIncrement() : this.props.stepSize,
                                    u = Math.min(this.getValidValue(this.state.value) + e, this.props.maximum);
                                this.changeValue(u);
                            }),
                            (this.decrement = () => {
                                const e = this.props.onDecrement ? this.props.onDecrement() : this.props.stepSize,
                                    u = Math.max(this.getValidValue(this.state.value) - e, this.props.minimum);
                                this.changeValue(u);
                            }),
                            (this.incrementHandleMouseDown = (e, u = !1) => {
                                this.buttonIncrementIsDisabled ||
                                    (e.persist(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value < this.props.maximum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.increment(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.incrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeIncrement: !0 }))));
                            }),
                            (this.decrementHandleMouseDown = (e, u = !1) => {
                                this.buttonDecrementIsDisabled ||
                                    (e.persist(),
                                    this.stop(),
                                    this.setFocusOnInput(),
                                    this.state.value > this.props.minimum &&
                                        (!u && this.playClickSound(),
                                        (0 === e.button || u) &&
                                            (this.decrement(),
                                            (this.timer = setTimeout(
                                                () => {
                                                    this.decrementHandleMouseDown(e, !0);
                                                },
                                                u ? 50 : 300,
                                            )),
                                            this.setState({ activeDecrement: !0 }))));
                            }),
                            (this.playHoverSound = () => {
                                this.props.isDisabled || (0, Qt.G)('highlight');
                            }),
                            (this.playClickSound = () => {
                                this.props.isDisabled || (0, Qt.G)('yes');
                            }),
                            (this.stop = () => {
                                (this.timer && clearTimeout(this.timer), (this.timer = null));
                            }));
                    }
                    componentDidUpdate(e, u) {
                        const t = this.state,
                            n = t.value,
                            a = t.isFocused;
                        if (n !== u.value && a) {
                            const e = this.formattedValue.length,
                                u = this.input.current && this.input.current.selectionStart,
                                t = this.input.current && this.input.current.selectionEnd,
                                n = u === t ? e : u || 0;
                            0 === u && t === e
                                ? this.input.current && this.input.current.setSelectionRange(e, e)
                                : this.input.current && this.input.current.setSelectionRange(n, e);
                        }
                    }
                    componentWillReceiveProps({ value: e, isFocused: u }) {
                        (this.setState({ value: e }),
                            u !== this.props.isFocused &&
                                (this.setState({ isFocused: u }),
                                u
                                    ? (this.setFocusOnInput(), this.setCursorPosition(0, this.formattedValue.length))
                                    : this.blurInput()));
                    }
                    get formattedValue() {
                        return this.props.currencyType
                            ? T.Z5.getNumberFormat(this.state.value, T.B3.GOLD)
                            : this.state.value.toString();
                    }
                    get buttonIncrementIsDisabled() {
                        return this.state.value >= this.props.maximum || this.props.isDisabled;
                    }
                    get buttonDecrementIsDisabled() {
                        return this.state.value <= this.props.minimum || this.props.isDisabled;
                    }
                    render() {
                        const e = this.props,
                            u = e.isDisabled,
                            t = e.size,
                            n = e.currencyType,
                            r = g()(
                                en.base,
                                en[`base__${t}`],
                                n && en[`base__withCurrency-${t}`],
                                u && en.base__isDisabled,
                                this.state.isFocused && en.base__isFocus,
                            ),
                            i = g()(
                                en.buttonIncrement,
                                en[`buttonIncrement__${t}`],
                                this.buttonIncrementIsDisabled && en.buttonIncrement__isDisabled,
                                this.state.activeIncrement &&
                                    !this.buttonIncrementIsDisabled &&
                                    en[`buttonIncrement__isActive-${this.props.size}`],
                            ),
                            o = g()(
                                en.buttonDecrement,
                                en[`buttonDecrement__${t}`],
                                this.buttonDecrementIsDisabled && en.buttonDecrement__isDisabled,
                                this.state.activeDecrement &&
                                    !this.buttonDecrementIsDisabled &&
                                    en[`buttonDecrement__isActive-${this.props.size}`],
                            ),
                            s = g()(
                                en.input,
                                u && en.input__disabled,
                                n && en.input__withCurrency,
                                n && en[`input__${n}-${t}`],
                                n && en[`input__${n}`],
                                !1 === this.props.isValid && en.input__error,
                                n && u && en[`input__${n}-disabled`],
                            ),
                            l = g()(en.currencyIcon, n && en[`currencyIcon__${n}-${t}`]),
                            c = g()(en.currency, n && en[`currency__${n}`], n && en[`currency__${n}-${t}`]);
                        return a().createElement(
                            'div',
                            {
                                className: r,
                                ref: this.numericalStepper,
                                style: ((m = this.props.width), m ? { width: `${m}rem` } : {}),
                            },
                            a().createElement(
                                'div',
                                { className: en.inputContainer },
                                n &&
                                    a().createElement(
                                        'div',
                                        { className: c },
                                        a().createElement('span', { className: en.dummyValue }, this.formattedValue),
                                        a().createElement('span', { className: l }),
                                    ),
                                a().createElement('input', {
                                    ref: this.input,
                                    className: s,
                                    type: 'text',
                                    value: this.formattedValue,
                                    disabled: u,
                                    onWheel: this.handleWheel,
                                    onChange: this.handleChange,
                                    onKeyPress: this.allowOnlyNumbers,
                                    onKeyDown: this.handleKeyDown,
                                    onKeyUp: this.handleKeyUp,
                                    onBlur: this.handleBlur,
                                    onFocus: this.setFocusOnInput,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: en.control },
                                a().createElement('div', {
                                    className: i,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.incrementHandleMouseEnter,
                                    onMouseDown: this.incrementHandleMouseDown,
                                }),
                                a().createElement('div', {
                                    className: o,
                                    onClick: this.setFocusOnInput,
                                    onMouseUp: this.handleMouseUp,
                                    onMouseLeave: this.handleMouseLeave,
                                    onMouseEnter: this.decrementHandleMouseEnter,
                                    onMouseDown: this.decrementHandleMouseDown,
                                }),
                            ),
                        );
                        var m;
                    }
                }
                un.defaultProps = {
                    value: 1,
                    stepSize: 1,
                    minimum: 0,
                    maximum: 0,
                    size: 'medium',
                    isFocused: !0,
                    isDisabled: !1,
                    onChange: () => null,
                    onKeyDown: () => null,
                };
                const tn = 'CurrencyStepper_base_8f',
                    nn = 'CurrencyStepper_label_9b',
                    an = 'CurrencyStepper_limit_7c',
                    rn = 'CurrencyStepper_limitIcon_bf',
                    on = 'CurrencyStepper_limit__exceeded_5d',
                    sn = 'CurrencyStepper_limit__right_08',
                    ln = 'CurrencyStepper_limitWrapper__enter_90',
                    cn = 'CurrencyStepper_limitWrapper__exit_15',
                    mn = 'CurrencyStepper_restriction_67',
                    _n = 'CurrencyStepper_restrictionIcon_6f',
                    dn = 'CurrencyStepper_restrictionIconGlow_02',
                    En = ['label', 'limit', 'limitPosition', 'onLimitClick', 'onChange'];
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const pn = R.strings.personal_exchange_rates.common,
                    An = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    Fn = { enter: ln, exit: cn },
                    Dn = (e) => {
                        let u = e.label,
                            t = e.limit,
                            r = e.limitPosition,
                            i = e.onLimitClick,
                            o = e.onChange,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]));
                                return a;
                            })(e, En);
                        const l = t && s.value > t,
                            c = (0, n.useState)(!1)[1],
                            m = Gt(
                                (e) => {
                                    (o(e), jt(() => c((e) => !e)));
                                },
                                [o],
                                1e3,
                            );
                        return a().createElement(
                            'div',
                            { className: tn },
                            u && a().createElement('div', { className: nn }, u),
                            a().createElement(un, gn({ size: 'large', width: 210, onChange: m }, s)),
                            t &&
                                !i &&
                                a().createElement(
                                    Kt.Z,
                                    { component: a().Fragment },
                                    a().createElement(
                                        Xt.Z,
                                        { key: String(l), timeout: 250, classNames: Fn },
                                        a().createElement(
                                            bu,
                                            { tooltipArgs: An, className: g()(an, 'right' === r && sn, l && on) },
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                l
                                                    ? a().createElement(Le, { text: pn.limitExceeded() })
                                                    : a().createElement(Le, {
                                                          text: pn.limit(),
                                                          binding: { value: Yt(t) },
                                                      }),
                                                a().createElement('div', { className: rn }),
                                            ),
                                        ),
                                    ),
                                ),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: g()(an, 'right' === r && sn) },
                                    a().createElement(h, {
                                        caption: pn.limitRestrictions(),
                                        type: 'close',
                                        side: 'left',
                                        onClick: i,
                                        classNames: { base: mn, icon: _n, glow: dn },
                                    }),
                                ),
                        );
                    },
                    hn = 'ExceededMessage_wrapper_0d',
                    Cn = 'ExceededMessage_base_1b',
                    bn = 'ExceededMessage_limitIcon_46',
                    Bn = 'ExceededMessage_hidden_4b',
                    vn = 'ExceededMessage_limitWrapper__enter_0a',
                    fn = 'ExceededMessage_limitWrapper__exit_bc',
                    yn = 'ExceededMessage_restriction_33',
                    wn = 'ExceededMessage_restrictionIcon_f1',
                    xn = 'ExceededMessage_restrictionIconGlow_04',
                    Sn = { contentId: R.views.lobby.personal_exchange_rates.tooltips.ExchangeLimitTooltip('resId') },
                    kn = { enter: vn, exit: fn },
                    Pn = ({ className: e, exceeded: u, amountOfPersonalDiscounts: t, onClick: n }) =>
                        a().createElement(
                            Kt.Z,
                            { className: g()(e, hn) },
                            a().createElement(
                                Xt.Z,
                                { key: String(`${u}${t > 5}`), timeout: 350, classNames: kn },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    u
                                        ? t > 5
                                            ? a().createElement(
                                                  'div',
                                                  { className: g()(Cn) },
                                                  a().createElement(
                                                      'div',
                                                      null,
                                                      R.strings.personal_exchange_rates.common.limitOverExceeded(),
                                                  ),
                                                  a().createElement(h, {
                                                      caption:
                                                          R.strings.personal_exchange_rates.common.limitRestrictions(),
                                                      type: 'close',
                                                      side: 'right',
                                                      onClick: n,
                                                      classNames: { base: yn, icon: wn, glow: xn },
                                                  }),
                                              )
                                            : a().createElement(
                                                  bu,
                                                  { tooltipArgs: Sn, className: g()(Cn) },
                                                  a().createElement(
                                                      a().Fragment,
                                                      null,
                                                      a().createElement(
                                                          'div',
                                                          null,
                                                          R.strings.personal_exchange_rates.common.limitExceeded(),
                                                      ),
                                                      a().createElement('div', { className: bn }),
                                                  ),
                                              )
                                        : a().createElement(
                                              'div',
                                              { className: g()(Cn, Bn) },
                                              a().createElement(
                                                  'div',
                                                  null,
                                                  R.strings.personal_exchange_rates.common.limitExceeded(),
                                              ),
                                          ),
                                ),
                            ),
                        ),
                    Tn = 'ExchangePanel_base_bd',
                    In = 'ExchangePanel_arrow_62',
                    Nn = 'ExchangePanel_arrow__small_30',
                    Rn = 'ExchangePanel_excluded_02',
                    Mn = (0, Be.q3)()(
                        ({ observableModel: e, externalModel: u, readByPath: t }) => {
                            function n() {
                                return ((e) => {
                                    if (e.isDiscountAvailable)
                                        return {
                                            format: e.showFormat,
                                            exchangeRate: e.exchangeRate,
                                            type: e.discountType,
                                            availableAmount: {
                                                gold: e.amountOfDiscount,
                                                resource:
                                                    (e.amountOfDiscount / e.exchangeRate.goldRateValue) *
                                                    e.exchangeRate.resourceRateValue,
                                            },
                                            endDate: new Date(1e3 * e.discountLifetime),
                                            percent: e.discountPercent,
                                        };
                                })(t('exchangePanel.exchangeRate.discount'));
                            }
                            const a = Object.assign(
                                {
                                    discount: Du.LO.box(n()),
                                    exchangeRate: e.object('exchangePanel.exchangeRate'),
                                    fromItem: e.object('exchangePanel.fromItem'),
                                    toItem: e.object('exchangePanel.toItem'),
                                },
                                e.primitives({ golds: 'goldBalance', credits: 'creditBalance' }),
                            );
                            u.subscribe(
                                (0, Du.aD)(() => a.discount.set(n())),
                                'exchangePanel.exchangeRate.discount',
                            );
                            const r = (0, ye.Om)(() => a.exchangeRate.get().maxGoldAmountForExchange),
                                i = (0, ye.Om)(() => {
                                    const e = a.discount.get();
                                    return (
                                        !(!e || 'limited' !== e.type) && e.availableAmount.gold < a.fromItem.get().value
                                    );
                                });
                            return Object.assign({}, a, { computes: { maximumGold: r, exceeded: i } });
                        },
                        ({ externalModel: e, model: u }) => ({
                            openAllDiscounts: e.createCallbackNoArgs(
                                'exchangePanel.exchangeRate.onOpenAllDiscountsWindow',
                            ),
                            setGold: e.createCallback(
                                (e) => ({ gold: Math.min(e, u.computes.maximumGold()) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                            setCredits: e.createCallback(
                                (e) => ({ currency: Math.min(e, u.exchangeRate.get().maxResourceAmountForExchange) }),
                                'exchangePanel.exchangeRate.onSelectedValueUpdated',
                            ),
                        }),
                    ),
                    On = Mn[0],
                    Ln = Mn[1],
                    $n = (0, d.Pi)(({ setGoldToChange: e, isSmall: u = !1 }) => {
                        Ht(
                            () => (
                                jt(() => {
                                    (zt(!1),
                                        jt(() => {
                                            zt(!0);
                                        }));
                                }),
                                document.body.addEventListener('keydown', Zt),
                                () => {
                                    document.body.removeEventListener('keydown', Zt);
                                }
                            ),
                        );
                        const t = (0, n.useState)(null),
                            i = t[0],
                            o = t[1],
                            s = Ln(),
                            l = s.model,
                            c = s.controls,
                            m = l.fromItem.get().value,
                            _ = l.computes.maximumGold(),
                            d = q(_),
                            E = 0 === _,
                            p = u ? 'small' : 'medium';
                        return (
                            a().useEffect(() => {
                                d && d !== _ && c.setGold(m);
                            }, [_, m]),
                            a().useEffect(() => {
                                e(m);
                            }, [e, m]),
                            Ht(() => {
                                o(document.querySelector('#dialog-template-footer'));
                            }),
                            a().createElement(
                                'div',
                                { className: Tn },
                                a().createElement(Dn, {
                                    value: l.fromItem.get().value,
                                    maximum: _,
                                    currencyType: G.V2.gold,
                                    onChange: c.setGold,
                                    width: 170,
                                    size: p,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (c.setGold(l.fromItem.get().value + 1), 0),
                                    onDecrement: () => (c.setGold(l.fromItem.get().value - 1), 0),
                                    isDisabled: E,
                                    isFocused: !1,
                                }),
                                a().createElement('div', { className: g()(In, u && Nn) }),
                                a().createElement(Dn, {
                                    value: l.toItem.get().value,
                                    maximum: l.exchangeRate.get().maxResourceAmountForExchange,
                                    currencyType: G.V2.credits,
                                    onChange: c.setCredits,
                                    width: 170,
                                    limitPosition: 'right',
                                    size: p,
                                    onValidValue: (e) => e,
                                    onIncrement: () => (c.setGold(l.fromItem.get().value + 1), 0),
                                    onDecrement: () => (c.setGold(l.fromItem.get().value - 1), 0),
                                    isDisabled: E,
                                    isFocused: !0,
                                }),
                                i &&
                                    (0, r.createPortal)(
                                        a().createElement(Pn, {
                                            className: Rn,
                                            exceeded: l.computes.exceeded(),
                                            amountOfPersonalDiscounts: l.exchangeRate.get().amountOfPersonalDiscounts,
                                            onClick: c.openAllDiscounts,
                                        }),
                                        i,
                                    ),
                            )
                        );
                    });
                var Wn = t(5851),
                    jn = t(2306);
                const Hn = (0, Be.q3)()(
                        ({ observableModel: e }) => ({
                            root: e.object(),
                            needRepairContent: e.object('needRepairContent'),
                            dealPanel: e.object('dealPanel'),
                            exchangePanel: e.object('exchangePanel'),
                            lacksMoney: e.object('lacksMoney'),
                            fromItem: e.object('exchangePanel.fromItem'),
                            toItem: e.object('exchangePanel.toItem'),
                            exchangeRate: e.object('exchangePanel.exchangeRate'),
                            discount: e.object('exchangePanel.exchangeRate.discount'),
                            discountRate: e.object('exchangePanel.exchangeRate.discount.exchangeRate'),
                        }),
                        ({ externalModel: e }) => ({
                            changeAutoRenewal: e.createCallback(
                                (e) => ({ value: e }),
                                'dealPanel.onAutoRenewalChanged',
                            ),
                        }),
                    ),
                    Un = (Hn[0], Hn[1]),
                    Vn = 'ExchangeDialogFooter_base_45',
                    Zn = 'ExchangeDialogFooter_exchange_11',
                    zn = 'ExchangeDialogFooter_renewal_e2',
                    qn = (0, d.Pi)(({ goldToChange: e, setGoldToChange: u, exchangeType: t = Gn.Basic }) => {
                        const n = Un();
                        return a().createElement(
                            'div',
                            { className: Vn },
                            a().createElement(
                                'div',
                                { className: Zn },
                                a().createElement(
                                    On,
                                    null,
                                    a().createElement($n, { goldToChange: e, setGoldToChange: u }),
                                ),
                            ),
                            t === Gn.Repair &&
                                a().createElement(
                                    jn.h.Provider,
                                    { value: n },
                                    a().createElement(
                                        'div',
                                        { className: zn },
                                        a().createElement(Wn.Y, {
                                            renewType: mu.my.Repair,
                                            label: R.strings.tank_setup.dialogs.needRepair.autoRepair(),
                                        }),
                                    ),
                                ),
                        );
                    });
                let Gn;
                !(function (e) {
                    ((e.Basic = 'basic'),
                        (e.Repair = 'repair'),
                        (e.EasyTankEquip = 'easyTankEquip'),
                        (e.Upgrade = 'upgrade'));
                })(Gn || (Gn = {}));
                const Kn = R.strings.tank_setup.dialogs,
                    Xn = (0, d.Pi)(
                        ({
                            title: e,
                            titleBinding: u,
                            name: t,
                            actionType: r,
                            withInfo: i = !0,
                            type: o = Gn.Basic,
                            withRollback: s = !1,
                            disabledAcceptTooltipText: l = R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                        }) => {
                            const c = (0, n.useState)(0),
                                m = c[0],
                                _ = c[1],
                                d = be().model,
                                E = d.root.get().exchangeState,
                                g = d.lacksMoney.get(),
                                p = d.toItem.get(),
                                A = E === Au;
                            return (
                                (0, n.useLayoutEffect)(
                                    () =>
                                        (0, Du.EH)(() => {
                                            _(d.fromItem.get().value);
                                        }),
                                    [d],
                                ),
                                a().createElement(ge, {
                                    parentId: 'exchange-dialog',
                                    content: a().createElement(Wt, {
                                        title: e,
                                        titleBinding: u,
                                        name: t,
                                        exchangeState: E,
                                        items: i && a().createElement(Re, null),
                                        actionType: r,
                                        description: i && a().createElement(Ze, null),
                                        exchangeType: o,
                                    }),
                                    footer:
                                        A &&
                                        a().createElement(qn, { goldToChange: m, setGoldToChange: _, exchangeType: o }),
                                    showPayInfo: !0,
                                    buttonAccept: Object.assign({}, Fe, {
                                        type: pe.L.main,
                                        disabled: !A || g.value > p.value,
                                    }),
                                    buttonCancel: De,
                                    buttonAcceptText:
                                        o === Gn.Upgrade ? Kn.exchangeToUpgrade.confirm() : Kn.goldExchange.confirm(),
                                    buttonCancelText: s
                                        ? Kn.confirm.cancel.withRollback()
                                        : R.strings.dialogs.common.cancel(),
                                    disabledAcceptTooltipText: l,
                                    isShowTooltip: E !== Fu,
                                })
                            );
                        },
                    ),
                    Yn = R.strings.tank_setup.dialogs.goldExchange,
                    Jn = (0, d.Pi)(({ actionType: e, itemsType: u }) => {
                        const t = Se(),
                            n = t.model,
                            r = n.root.get().withRollback,
                            i = n.computes.confirmedItemsLength() > 1,
                            o = i ? Yn.items : Yn.item,
                            s = e === he.Modification ? Yn.action.modification() : Yn.action.buy();
                        return a().createElement(
                            Ce.Provider,
                            { value: t },
                            a().createElement(Xn, {
                                title: i ? Yn.items.title() : Yn.item.title(),
                                name: n.computes.confirmedItem(0).name,
                                titleBinding: { action: s, type: o.$dyn(u) },
                                actionType: e,
                                withRollback: r,
                            }),
                        );
                    }),
                    Qn = R.strings.tank_setup.dialogs.confirm,
                    ea = (0, d.Pi)(() => {
                        const e = Se(),
                            u = e.model,
                            t = u.mainContent.get().itemsType,
                            n = u.root.get().bottomContentType,
                            r = u.price.get(),
                            i = u.dealPanel.get().isDisabled,
                            s = Boolean(r.length),
                            c = ((e, u) => (e === o ? he.Modification : u ? he.Payment : he.Setup))(t, s);
                        switch (
                            (m({
                                [_.n.ESCAPE]: () => {
                                    l.O.view.sendEvent.close();
                                },
                            }),
                            n)
                        ) {
                            case 'exchangePanel':
                                return a().createElement(Jn, { actionType: c, itemsType: t });
                            case 'saveSlotsContent':
                                return a().createElement(
                                    Ce.Provider,
                                    { value: e },
                                    a().createElement(ge, {
                                        parentId: Ae,
                                        buttonAccept: Object.assign({}, Fe, { disabled: i }),
                                        buttonAcceptText: Qn.confirm.changeSlots(),
                                        buttonCancel: De,
                                        buttonCancelText: Qn.cancel.changeSlots(),
                                        content: a().createElement(cu, { title: String(Qn.title.changeSlots.$dyn(t)) }),
                                        showPayInfo: s,
                                    }),
                                );
                            default:
                                return a().createElement(
                                    Ce.Provider,
                                    { value: e },
                                    a().createElement(pu, { isPaymentDeal: s, actionType: c }),
                                );
                        }
                    });
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(xe, null, a().createElement(ea, null)),
                        document.getElementById('root'),
                    );
                });
            },
            5475: (e, u, t) => {
                'use strict';
                t.d(u, { e1: () => n });
                const n = 'priceDiscount';
            },
            7383: (e, u, t) => {
                'use strict';
                t.d(u, { YR: () => n });
                const n = 'apply';
            },
            6880: (e, u, t) => {
                'use strict';
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
            4382: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                };
            },
            8460: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
            },
            1960: () => {
                'use strict';
            },
            8529: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'App_base_44',
                    base__dialog: 'App_base__dialog_fa',
                    storage: 'App_storage_d5',
                    from: 'App_from_a4',
                    plus: 'App_plus_04',
                    renewal: 'App_renewal_06',
                    renewal__dialog: 'App_renewal__dialog_ba',
                    control: 'App_control_fc',
                    totalPrice: 'App_totalPrice_87',
                    totalPrice__mixed: 'App_totalPrice__mixed_cc',
                };
            },
            2527: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'TotalPrice_base_d9',
                    message: 'TotalPrice_message_66',
                    message__hidden: 'TotalPrice_message__hidden_29',
                    plus: 'TotalPrice_plus_f0',
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 107),
        (() => {
            var e = { 107: 0, 826: 0, 225: 0, 376: 0, 745: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        ((a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(1559));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
