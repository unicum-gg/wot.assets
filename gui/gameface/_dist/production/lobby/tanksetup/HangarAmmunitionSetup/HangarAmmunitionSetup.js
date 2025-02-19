(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => l.L, qE: () => l.q, u5: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7727),
                    r = n(7363),
                    u = n.n(r),
                    o = n(6880),
                    l = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: _,
                    soundHover: d,
                    soundClick: m,
                    onMouseEnter: p,
                    onMouseMove: b,
                    onMouseDown: g,
                    onMouseUp: E,
                    onMouseLeave: h,
                    onClick: v,
                }) => {
                    const f = (0, r.useRef)(null),
                        C = (0, r.useState)(n),
                        A = C[0],
                        D = C[1],
                        S = (0, r.useState)(!1),
                        F = S[0],
                        y = S[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                A && null !== f.current && !f.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [A]),
                        (0, r.useEffect)(() => {
                            D(n);
                        }, [n]),
                        u().createElement(
                            'div',
                            {
                                ref: f,
                                className: s()(
                                    o.Z.base,
                                    o.Z[`base__${a}`],
                                    c && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    A && o.Z.base__focus,
                                    F && o.Z.base__highlightActive,
                                    _,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== d && (0, i.G)(d), p && p(e));
                                },
                                onMouseMove: function (e) {
                                    b && b(e);
                                },
                                onMouseUp: function (e) {
                                    c || (E && E(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, i.G)(m),
                                        g && g(e),
                                        n && (c || (f.current && (f.current.focus(), D(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (h && h(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (v && v(e));
                                },
                            },
                            a !== l.L.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: o.Z.back }),
                                    u().createElement('span', { className: o.Z.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: s()(o.Z.state, o.Z.state__default) },
                                u().createElement('span', { className: o.Z.stateDisabled }),
                                u().createElement('span', { className: o.Z.stateHighlightHover }),
                                u().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            u().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _ = c;
            },
            2106: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { L: () => a, q: () => s }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(a || (a = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(s || (s = {}));
            },
            2262: (e, t, n) => {
                'use strict';
                n.d(t, { Rh: () => l.Rh, XZ: () => m, yB: () => l.yB });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    u = n(7727),
                    o = n(1641),
                    l = n(8844),
                    c = n(4382);
                const _ = [
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
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const m = (e) => {
                    let t = e.id,
                        n = e.isChecked,
                        i = void 0 !== n && n,
                        m = e.isDisabled,
                        p = void 0 !== m && m,
                        b = e.isAlert,
                        g = void 0 !== b && b,
                        E = e.size,
                        h = void 0 === E ? l.yB.medium : E,
                        v = e.type,
                        f = void 0 === v ? l.Rh.primary : v,
                        C = e.soundHover,
                        A = void 0 === C ? 'highlight' : C,
                        D = e.soundClick,
                        S = void 0 === D ? 'play' : D,
                        F = e.onMouseEnter,
                        y = e.onMouseLeave,
                        w = e.onMouseUp,
                        B = e.onMouseDown,
                        k = e.onClick,
                        x = e.onChange,
                        T = e.onFocus,
                        I = e.onBlur,
                        N = e.text,
                        R = e.contentStyles,
                        L = e.children,
                        O = e.alignment,
                        M = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, _);
                    const P = (0, a.useState)(!1),
                        $ = P[0],
                        H = P[1],
                        z = (0, a.useState)(!1),
                        W = (z[0], z[1]),
                        j = (0, a.useCallback)(
                            (e) => {
                                p || (x && x(), k && k(e));
                            },
                            [p, x, k],
                        ),
                        G = (0, a.useCallback)(
                            (e) => {
                                const t = e.button === o.t.LEFT;
                                p || (t && H(!0), t && B && B(e), S && (0, u.G)(S));
                            },
                            [p, B, S],
                        ),
                        Z = (0, a.useCallback)(
                            (e) => {
                                p || (H(!1), w && w(e));
                            },
                            [p, w],
                        ),
                        V = (0, a.useCallback)(
                            (e) => {
                                p || (F && F(e), A && (0, u.G)(A));
                            },
                            [p, F, A],
                        ),
                        U = (0, a.useCallback)(
                            (e) => {
                                p || (H(!1), y && y(e));
                            },
                            [p, y],
                        ),
                        q = (0, a.useCallback)(
                            (e) => {
                                p || (W(!0), T && T(e));
                            },
                            [p, T],
                        ),
                        X = (0, a.useCallback)(
                            (e) => {
                                p || (W(!1), I && I(e));
                            },
                            [p, I],
                        ),
                        K = s().createElement(
                            'div',
                            { className: c.Z.label },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.labelContent, 's-labelContent'), style: R },
                                N || L,
                            ),
                        );
                    return s().createElement(
                        'div',
                        d(
                            {
                                id: t,
                                className: r()(c.Z.base, c.Z[`base__${h}`], c.Z[`base__${f}`], {
                                    [c.Z.base__checked]: i,
                                    [c.Z.base__disabled]: p,
                                    [c.Z.base__mouseDown]: $,
                                    [c.Z.base__alert]: g,
                                    [c.Z.base__center]: O === l.N3.Center,
                                    [c.Z.base__bottom]: O === l.N3.Bottom,
                                }),
                                onClick: j,
                                onMouseEnter: V,
                                onMouseLeave: U,
                                onMouseDown: G,
                                onMouseUp: Z,
                                onFocus: q,
                                onBlur: X,
                            },
                            M,
                        ),
                        s().createElement(
                            'div',
                            { className: c.Z.input },
                            s().createElement('div', { className: c.Z.alertOverlay }),
                            s().createElement('div', { className: c.Z.inputHoverOverlay }),
                            s().createElement('div', { className: c.Z.highlight }),
                        ),
                        s().createElement('div', { className: c.Z.checkmark }),
                        ((N || L) && K) || null,
                    );
                };
            },
            8844: (e, t, n) => {
                'use strict';
                let a, s, i;
                n.d(t, { N3: () => i, Rh: () => s, yB: () => a }),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(i || (i = {}));
            },
            7405: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => c });
                var a = n(6483),
                    s = n.n(a),
                    i = n(2372),
                    r = n(7363),
                    u = n.n(r),
                    o = n(8460),
                    l = n(329);
                const c = (0, r.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: n,
                        type: a,
                        value: r,
                        discountValue: c,
                        showPlus: _,
                        isEnough: d = !0,
                        stockBackgroundName: m = l.we.Red,
                        className: p,
                        classNames: b,
                    }) =>
                        u().createElement(
                            'span',
                            { className: s()(o.Z.base, o.Z[`base__${n}`], p) },
                            u().createElement(
                                'span',
                                {
                                    className: s()(
                                        o.Z.value,
                                        o.Z[`value__${a}`],
                                        !d && o.Z.value__notEnough,
                                        null == b ? void 0 : b.value,
                                    ),
                                },
                                _ && r > 0 && '+',
                                u().createElement(i.A, { value: r, format: a === l.V2.gold ? 'gold' : 'integral' }),
                            ),
                            u().createElement('span', {
                                className: s()(o.Z.icon, o.Z[`icon__${a}-${n}`], null == b ? void 0 : b.icon),
                            }),
                            e &&
                                u().createElement(
                                    'span',
                                    {
                                        className: s()(
                                            o.Z.stock,
                                            c && o.Z.stock__indent,
                                            t && o.Z.stock__interactive,
                                            null == b ? void 0 : b.stock,
                                        ),
                                    },
                                    u().createElement('span', {
                                        className: o.Z.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${m})` },
                                    }),
                                    Boolean(c) && c,
                                ),
                        ),
                );
            },
            329: (e, t, n) => {
                'use strict';
                let a, s, i;
                n.d(t, { V2: () => s, et: () => a, we: () => i }),
                    (function (e) {
                        (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'),
                            (e.stpCoin = 'stpcoin');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(i || (i = {}));
            },
            2372: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => r });
                var a = n(7363),
                    s = n.n(a),
                    i = n(9916);
                class r extends s().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = i.B3.GOLD;
                        else e = i.B3.INTEGRAL;
                        const t = i.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                r.defaultProps = { format: 'integral' };
            },
            280: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => l });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3649),
                    r = n(7363),
                    u = n.n(r),
                    o = n(5287);
                const l = ({
                    binding: e,
                    text: t = '',
                    classMix: n,
                    alignment: a = i.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, i.WU)(t, e) : t;
                    return u().createElement(
                        r.Fragment,
                        null,
                        c.split('\n').map((t, l) =>
                            u().createElement(
                                'div',
                                { className: s()(o.Z.base, n), key: `${t}-${l}` },
                                (0, i.Uw)(t, a, e).map((e, t) =>
                                    u().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    s = n(7363),
                    i = n(1043),
                    r = n(5262);
                const u = a.O.client.getSize('rem'),
                    o = u.width,
                    l = u.height,
                    c = Object.assign({ width: o, height: l }, (0, r.T)(o, l, i.j)),
                    _ = (0, s.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    s = n(6536),
                    i = n(7363),
                    r = n.n(i),
                    u = n(3495),
                    o = n(1043),
                    l = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, i.useContext)(u.Y),
                        n = (0, i.useState)(t),
                        c = n[0],
                        _ = n[1],
                        d = (0, i.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                s = a.O.view.pxToRem(t);
                            _(Object.assign({ width: n, height: s }, (0, l.T)(n, s, o.j)));
                        }, []),
                        m = (0, i.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, s.Z)(() => {
                        a.O.client.events.on('clientResized', d), a.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, i.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', d),
                                    a.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [d, m],
                        );
                    const p = (0, i.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(u.Y.Provider, { value: p }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(7363),
                    s = n(7382),
                    i = n(3495);
                const r = ['children'];
                const u = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, r);
                    const u = (0, a.useContext)(i.Y),
                        o = u.extraLarge,
                        l = u.large,
                        c = u.medium,
                        _ = u.small,
                        d = u.extraSmall,
                        m = u.extraLargeWidth,
                        p = u.largeWidth,
                        b = u.mediumWidth,
                        g = u.smallWidth,
                        E = u.extraSmallWidth,
                        h = u.extraLargeHeight,
                        v = u.largeHeight,
                        f = u.mediumHeight,
                        C = u.smallHeight,
                        A = u.extraSmallHeight,
                        D = { extraLarge: h, large: v, medium: f, small: C, extraSmall: A };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && l) return t;
                        if (n.medium && c) return t;
                        if (n.small && _) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, s.H)(t, n, D);
                        if (n.largeWidth && p) return (0, s.H)(t, n, D);
                        if (n.mediumWidth && b) return (0, s.H)(t, n, D);
                        if (n.smallWidth && g) return (0, s.H)(t, n, D);
                        if (n.extraSmallWidth && E) return (0, s.H)(t, n, D);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && C) return t;
                            if (n.extraSmallHeight && A) return t;
                        }
                    }
                    return null;
                };
                u.defaultProps = {
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
                (0, a.memo)(u);
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                n.d(t, { YN: () => s.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    s = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function s(e, t, n) {
                    const a = (function (e, t) {
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
                        })(e, n),
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
                        })(t, n),
                        i = Math.min(a, s);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: s === n.extraLarge.weight,
                        largeHeight: s === n.large.weight,
                        mediumHeight: s === n.medium.weight,
                        smallHeight: s === n.small.weight,
                        extraSmallHeight: s === n.extraSmall.weight,
                    };
                }
                n.d(t, { T: () => s, u: () => a }),
                    (function (e) {
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
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(a || (a = {}));
            },
            8089: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => _ });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    u = n(7727),
                    o = n(7476);
                const l = [
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
                function c() {
                    return (
                        (c = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                class _ extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, u.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, u.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            a = e.goto,
                            i = e.side,
                            u = e.type,
                            _ = e.classNames,
                            d = e.onMouseEnter,
                            m = e.onMouseLeave,
                            p = e.onMouseDown,
                            b = e.onMouseUp,
                            g =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(e, l)),
                            E = r()(o.Z.base, o.Z[`base__${u}`], o.Z[`base__${i}`], null == _ ? void 0 : _.base),
                            h = r()(o.Z.icon, o.Z[`icon__${u}`], o.Z[`icon__${i}`], null == _ ? void 0 : _.icon),
                            v = r()(o.Z.glow, null == _ ? void 0 : _.glow),
                            f = r()(o.Z.caption, o.Z[`caption__${u}`], null == _ ? void 0 : _.caption),
                            C = r()(o.Z.goto, null == _ ? void 0 : _.goto);
                        return s().createElement(
                            'div',
                            c(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(m),
                                    onMouseDown: this._onMouseDown(p),
                                    onMouseUp: this._onMouseUp(b),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                g,
                            ),
                            'info' !== u && s().createElement('div', { className: o.Z.shine }),
                            s().createElement('div', { className: h }, s().createElement('div', { className: v })),
                            s().createElement('div', { className: f }, t),
                            a && s().createElement('div', { className: C }, a),
                        );
                    }
                }
                _.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => o });
                var a = n(7363),
                    s = n.n(a),
                    i = n(2056);
                const r = ['children'];
                function u() {
                    return (
                        (u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        u.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, r);
                    return s().createElement(
                        i.u,
                        u(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => l });
                var a = n(2056),
                    s = n(7363),
                    i = n.n(s);
                const r = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function u() {
                    return (
                        (u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        u.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            n = e.body,
                            l = e.header,
                            c = e.note,
                            _ = e.alert,
                            d = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, r);
                        const p = (0, s.useMemo)(() => {
                            const e = Object.assign({}, d, { body: n, header: l, note: c, alert: _ });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [_, n, l, c, d]);
                        return i().createElement(
                            a.u,
                            u(
                                {
                                    contentId:
                                        ((b = null == d ? void 0 : d.hasHtmlContent),
                                        b ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: p,
                                },
                                m,
                            ),
                            t,
                        );
                        var b;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    s = n(9916),
                    i = n(7363);
                const r = [
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
                function u(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const o = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            s = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            b = e.ignoreMouseClick,
                            g = void 0 !== b && b,
                            E = e.decoratorId,
                            h = void 0 === E ? 0 : E,
                            v = e.isEnabled,
                            f = void 0 === v || v,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            D = e.onShow,
                            S = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, r);
                        const y = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, i.useMemo)(() => A || (0, a.F)().resId, [A]),
                            B = (0, i.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (o(n, h, { isMouseEvent: !0, on: !0, arguments: u(s) }, w),
                                    D && D(),
                                    (y.current.isVisible = !0));
                            }, [n, h, s, w, D]),
                            k = (0, i.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        o(n, h, { on: !1 }, w),
                                        y.current.isVisible && S && S(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, h, w, S]),
                            x = (0, i.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === f && k();
                            }, [f, k]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return f
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(B, p ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === g && k(), null == d || d(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === g && k(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      F,
                                  ),
                              )
                            : t;
                        var T;
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
            1856: (e, t, n) => {
                'use strict';
                n.d(t, { v: () => a });
                const a = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
            },
            8246: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => u });
                var a = n(3138);
                function s(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return i(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? i(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const r = (e) => (0 === e ? window : window.subViews.get(e));
                function u({ initializer: e = !0, rootId: t = 0, getRoot: n = r, context: i = 'model' } = {}) {
                    const u = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? u.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = u.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const a = n(t),
                            s = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? s
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, s);
                    };
                    return {
                        subscribe: (n, s) => {
                            const r = 'string' == typeof s ? `${i}.${s}` : i,
                                o = a.O.view.addModelObserver(r, t, !0);
                            return u.set(o, n), e && n(l(s)), o;
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const n = l(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = s(u.keys()); !(e = n()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q3: () => o });
                var a = n(4598),
                    s = n(9174),
                    i = n(7363),
                    r = n.n(i),
                    u = n(8246);
                const o = () => (e, t) => {
                    const n = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: _ }) {
                            const d = (0, i.useRef)([]),
                                m = (n, i, r) => {
                                    var o;
                                    const l = u.U(i),
                                        c =
                                            'real' === n
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == r ? void 0 : r.getter) ? o : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === n ? (null == r ? void 0 : r.getter(e)) : c.readByPath(e),
                                        m = (e) => d.current.push(e),
                                        p = e({
                                            mode: n,
                                            readByPath: _,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        r = s.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : _(e),
                                                        r = s.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, s.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = _(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = s.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            r = Object.entries(i),
                                                            u = r.reduce(
                                                                (e, [t, n]) => ((e[n] = s.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, s.aD)((e) => {
                                                                        r.forEach(([t, n]) => {
                                                                            u[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            u
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        b = { mode: n, model: p, externalModel: c, cleanup: m };
                                    return {
                                        model: p,
                                        controls: 'mocks' === n && r ? r.controls(b) : t(b),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                p = (0, i.useRef)(!1),
                                b = (0, i.useState)(o),
                                g = b[0],
                                E = b[1],
                                h = (0, i.useState)(() => m(o, l, _)),
                                v = h[0],
                                f = h[1];
                            return (
                                (0, i.useEffect)(() => {
                                    p.current ? f(m(g, l, _)) : (p.current = !0);
                                }, [_, g, l]),
                                (0, i.useEffect)(() => {
                                    E(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        v.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [v],
                                ),
                                r().createElement(n.Provider, { value: v }, c)
                            );
                        },
                        () => (0, i.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => o, on: () => u, onResize: () => i, onScaleUpdated: () => r });
                var a = n(2472),
                    s = n(1176);
                const i = (0, a.E)('clientResized'),
                    r = (0, a.E)('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, s.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, s.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, s.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const i = `mouse${t}`,
                                        r = l[t]((e) => n([e, 'outside']));
                                    function u(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, u),
                                        a(),
                                        () => {
                                            s &&
                                                (r(),
                                                window.removeEventListener(i, u),
                                                (e.listeners -= 1),
                                                a(),
                                                (s = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => u,
                        playSound: () => s.G,
                        setRTPC: () => s.E,
                    });
                var a = n(527),
                    s = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const u = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function s(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => s, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => i });
                var a = n(5959),
                    s = n(514);
                const i = { view: n(7641), client: a, sound: s.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => r });
                var a = n(5959);
                const s = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(s).reduce((e, t) => ((e[t] = () => (0, a.playSound)(s[t])), e), {}),
                    r = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function s(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => s, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => s });
                var a = n(2472);
                const s = {
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
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => s.W,
                        displayStatusIs: () => w,
                        events: () => i.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => F,
                        getFontNames: () => y,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => D,
                        isFocused: () => C,
                        pxToRem: () => h,
                        remToPx: () => v,
                        resize: () => p,
                        sendEvent: () => r.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => A,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var a = n(3722),
                    s = n(6112),
                    i = n(6538),
                    r = n(8566);
                const u = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, u);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function _(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, u);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
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
                function D() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function F() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    w = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => l });
                const a = ['args'];
                const s = 2,
                    i = 16,
                    r = 32,
                    u = 64,
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((s = i),
                                              Object.entries(s).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? s : r);
                        },
                        minimize() {
                            o(u);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                function a() {}
                n.d(t, { ZT: () => a, jv: () => i, yR: () => s });
                function s(e) {
                    return e;
                }
                function i() {
                    return !1;
                }
                console.log;
            },
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId'),
                        s = '';
                    var i;
                    t &&
                        ((s = (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
                        (n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== n &&
                            window.subViews[n] &&
                            (a = window.subViews[n].id));
                    return { callerUrl: s, caller: n, stack: t, resId: a };
                };
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => s });
                var a = n(7363);
                const s = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3815: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => i });
                var a = n(7363);
                const s = [];
                function i(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), s)
                    );
                }
            },
            8526: (e, t, n) => {
                'use strict';
                n.d(t, { gd: () => u });
                var a = n(3138),
                    s = n(5521),
                    i = (n(9916), n(7363));
                const r = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function u(e = s.n.NONE, t = r, n = !1, u = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== s.n.NONE)
                            return (
                                window.addEventListener('keydown', i, n),
                                () => {
                                    window.removeEventListener('keydown', i, n);
                                }
                            );
                        function i(s) {
                            if (s.keyCode === e) {
                                if (!u && a.O.view.isEventHandled()) return;
                                a.O.view.setEventHandled(), t(s), n && s.stopPropagation();
                            }
                        }
                    }, [t, e, n, u]);
                }
            },
            2039: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => s });
                var a = n(7363);
                const s = (e) => {
                    (0, a.useEffect)(() => e, []);
                };
            },
            1396: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => r });
                var a = n(7363),
                    s = n(2039);
                const i = 0;
                function r() {
                    const e = (0, a.useRef)(i);
                    return (
                        (0, s.k)(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, a.useMemo)(
                            () => ({
                                run: (t, n) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = i), t();
                                        }, n));
                                },
                                clear: () => {
                                    window.clearTimeout(e.current), (e.current = i);
                                },
                                get isRunning() {
                                    return e.current !== i;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { n: () => a }),
                    (function (e) {
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(a || (a = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(s || (s = {}));
            },
            9480: (e, t, n) => {
                'use strict';
                n.d(t, {
                    G: () => o,
                    MH: () => i,
                    U2: () => s,
                    UI: () => u,
                    dF: () => c,
                    hX: () => l,
                    u4: () => d,
                    v: () => _,
                });
                var a = n(8968);
                function s(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const i = s;
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function u(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function o(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let n = 0; n < e.length; n++) {
                        if (t(i(e, n), n, e)) return !0;
                    }
                    return !1;
                }
                function l(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let s = 0; s < e.length; s++) {
                        var a;
                        const i = null == (a = e[s]) ? void 0 : a.value;
                        t(i, s, e) && n.push(i);
                    }
                    return n;
                }
                function c(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function _(e, t) {
                    return (function (e, t, n) {
                        const a = [];
                        for (let s = 0; s < e.length; s++) {
                            const r = i(e, s);
                            t(r, s, e) && a.push(n(r, s, e));
                        }
                        return a;
                    })(e, a.C, t);
                }
                function d(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) {
                        a = t(a, i(e, n), n, e);
                    }
                    return a;
                }
            },
            1641: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { t: () => a }),
                    (function (e) {
                        (e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH');
                    })(a || (a = {}));
            },
            8968: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                n.d(t, { C: () => a });
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { $: () => s, G: () => a });
                const s = {
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
            3649: (e, t, n) => {
                'use strict';
                n.d(t, {
                    BN: () => u,
                    Eg: () => c,
                    Uw: () => E,
                    WU: () => i,
                    dL: () => h,
                    e: () => o,
                    uF: () => r,
                    v2: () => s,
                    z4: () => l,
                });
                var a = n(1281);
                let s;
                function i(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function u(e) {
                    return e.replace(/-/g, '_');
                }
                function o(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(s || (s = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    _ = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    d = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    m = (e, t, n = s.left) => e.split(t).reduce(n === s.left ? _ : d, []),
                    p = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    b = ['zh_cn', 'zh_sg', 'zh_tw'],
                    g = (e, t = s.left) => {
                        const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (b.includes(n)) return p(e);
                        if ('ja' === n) {
                            return (0, a.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = s.left) => {
                            let n = [];
                            const a =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                i = l(e);
                            return m(i, /( )/, t).forEach((e) => (n = n.concat(m(e, a, s.left)))), n;
                        })(e, t);
                    },
                    E = (e, t, n) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (n && e in n ? n[e] : g(e, t))),
                    h = (e) => i(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var a = n(3138);
                class s {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, n, s);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const i = s;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => i.Z,
                    B3: () => o,
                    Gr: () => l,
                    Z5: () => r.Z5,
                    B0: () => u,
                    c9: () => v,
                    ry: () => E,
                    Eu: () => h,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
                            this.removeMouseListener();
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
                const s = a;
                var i = n(1358);
                var r = n(8613);
                let u;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(u || (u = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = n(5521),
                    m = n(3138);
                const p = ['args'];
                function b(e, t, n, a, s, i, r) {
                    try {
                        var u = e[i](r),
                            o = u.value;
                    } catch (e) {
                        return void n(e);
                    }
                    u.done ? t(o) : Promise.resolve(o).then(a, s);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                        n = arguments;
                                    return new Promise(function (a, s) {
                                        var i = e.apply(t, n);
                                        function r(e) {
                                            b(i, a, s, r, u, 'next', e);
                                        }
                                        function u(e) {
                                            b(i, a, s, r, u, 'throw', e);
                                        }
                                        r(void 0);
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
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, p);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = s),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    f = () => v(u.CLOSE),
                    C = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var A = n(7572);
                const D = s.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: A.Z,
                        ViewEventType: u,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => v(u.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(u.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(u.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, s = R.invalid('resId'), i) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                o = n.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                p = {
                                    x: m.O.view.pxToRem(l) + r.x,
                                    y: m.O.view.pxToRem(c) + r.y,
                                    width: m.O.view.pxToRem(_),
                                    height: m.O.view.pxToRem(d),
                                };
                            v(u.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: g(p),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: E,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(u.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(u.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(u.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const s = Object.prototype.toString.call(t[a]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < s.length; t++) n[a].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: D,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => i, Z5: () => a, cy: () => s });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    },
                    i = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            7260: (e, t, n) => {
                'use strict';
                n.d(t, { B: () => c });
                var a = n(7363),
                    s = n.n(a),
                    i = n(280),
                    r = n(8852);
                const u = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    o = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, a.memo)(({ text: e, binding: t, classMix: n }) => {
                        const c = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            _ = (0, a.useMemo)(() => t || {}, [t]);
                        let d = u.exec(e),
                            m = e,
                            p = 0;
                        for (; d; ) {
                            const n = d[0],
                                a = o.exec(n),
                                b = l.exec(n),
                                g = d[1];
                            if (a && b) {
                                const e = a[0],
                                    u = e + p++ + e;
                                (m = m.replace(n, `%(${u})`)),
                                    (_[u] = r.Z[e]
                                        ? s().createElement(
                                              'span',
                                              { className: r.Z[e] },
                                              s().createElement(i.z, { text: g, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: c(e) },
                                              s().createElement(i.z, { text: g, binding: t }),
                                          ));
                            }
                            d = u.exec(e);
                        }
                        return s().createElement(i.z, { text: m, classMix: n, binding: _ });
                    });
            },
            3521: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return s(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? s(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                n.d(t, { WL: () => u, aR: () => o, jZ: () => i, yG: () => r });
                const i = (e, t = []) => {
                        const n = document.getElementById('root');
                        n && (n.style.cursor = e ? 'grabbing' : 'default');
                        for (var s, i = a(t); !(s = i()).done; ) {
                            const t = s.value,
                                n = document.getElementById(t);
                            n && (n.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    r = (e, t, n, a) => {
                        const s = n + t,
                            i = a - t;
                        return e < s ? s : e > i ? i : e;
                    },
                    u = (e, t, n) => {
                        let s = '',
                            i = 8e3;
                        for (var r, u = a(n); !(r = u()).done; ) {
                            const e = r.value,
                                n = Math.abs(e.centerX - t);
                            n < i && ((s = e.id), (i = n));
                        }
                        return s;
                    },
                    o = (e, t) => {
                        const n = t.find((t) => t.id === e);
                        return n ? n.centerX : 0;
                    };
            },
            1820: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { m: () => s }),
                    (function (e) {
                        (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                    })(a || (a = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(s || (s = {}));
            },
            4301: (e, t, n) => {
                'use strict';
                n.d(t, { iN: () => i, j2: () => s, s$: () => r });
                var a = n(4231);
                const s = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    i = (e) => e === a.w.Battle || e === a.w.Prebattle,
                    r = (e) => i(e) || e === a.w.Respawn;
            },
            7626: (e, t, n) => {
                'use strict';
                n.d(t, { YR: () => o, UW: () => c, Tu: () => l });
                var a = n(7363),
                    s = n(9152),
                    i = n(7727),
                    r = n(3521),
                    u = n(1820);
                const o = (e) => `panel-${e}-section`,
                    l = (e, t) => {
                        const n = o(e),
                            a = t.filter((e) => e !== n);
                        return { selfId: n, blockOnGrabIds: [s.yy, ...a] };
                    },
                    c = ({ baseId: e, slotsLength: t, handleSwap: n, setIsExitBlocked: s, syncInitiator: o }) => {
                        const l = ((e, t, n) => {
                                const s = (0, a.useRef)([]),
                                    o = (0, a.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    l = (0, a.useState)({ activeDragId: '', potentialDropId: '' }),
                                    c = l[0],
                                    _ = l[1],
                                    d = (0, a.useCallback)((e) => {
                                        o.current.dropId ||
                                            o.current.prevPotentialDropId ||
                                            ((o.current.prevPotentialDropId = e),
                                            _({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    m = (0, a.useCallback)((e, t) => {
                                        if (s.current) {
                                            const n = (0, r.WL)(e, t, s.current);
                                            n !== o.current.prevPotentialDropId &&
                                                ((o.current.prevPotentialDropId = n),
                                                _({ activeDragId: e, potentialDropId: n }));
                                        }
                                    }, []),
                                    p = (0, a.useCallback)((e, t) => {
                                        if (s.current && t) {
                                            const n = o.current,
                                                a = (0, r.WL)(e, t, s.current);
                                            (n.dropId = a),
                                                (n.dragId = e),
                                                (n.prevPotentialDropId = ''),
                                                _({ activeDragId: e, potentialDropId: '' }),
                                                a !== e && (0, i.G)('cons_equipment_swipe');
                                        }
                                    }, []),
                                    b = (0, a.useCallback)(() => {
                                        const e = o.current,
                                            t = e.dragId,
                                            n = e.dropId,
                                            a = e.prevPotentialDropId;
                                        (t || n || a) &&
                                            ((o.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            _({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    g = (0, a.useCallback)(
                                        (e) => {
                                            const t = o.current.dropId;
                                            t && t !== e ? n(e, t) : b();
                                        },
                                        [b, n],
                                    ),
                                    E = (0, a.useCallback)((e, t) => {
                                        const n = s.current.find((t) => t.id === e);
                                        n && t && (n.centerX = t);
                                    }, []),
                                    h = (0, a.useCallback)(
                                        (e, t) => {
                                            const n = t.dragId,
                                                a = t.currentCenterX;
                                            switch (e) {
                                                case u.m.Ready:
                                                    return E(n, a);
                                                case u.m.DragStart:
                                                    return d(n);
                                                case u.m.Drag:
                                                    return m(n, a);
                                                case u.m.Drop:
                                                    return p(n, a);
                                                case u.m.DropExit:
                                                    return g(n);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [d, m, p, g, E],
                                    );
                                return (
                                    (0, a.useEffect)(() => {
                                        if (e !== s.current.length) {
                                            const n = new Array(e).fill(null);
                                            s.current = n.map((e, n) => ({ id: `${t}-${n}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: c,
                                        handleGrabberAction: h,
                                        getForceCenterX: (0, a.useCallback)((e) => {
                                            const t = o.current,
                                                n = t.dragId,
                                                a = t.dropId;
                                            return e === n
                                                ? (0, r.aR)(a, s.current)
                                                : e === a
                                                  ? (0, r.aR)(n, s.current)
                                                  : 0;
                                        }, []),
                                        resetDragResults: b,
                                    }
                                );
                            })(t, e, n),
                            c = l.dragState,
                            _ = l.handleGrabberAction,
                            d = l.getForceCenterX,
                            m = l.resetDragResults,
                            p = (0, a.useCallback)(
                                (e, t) => {
                                    if (s)
                                        switch (e) {
                                            case u.m.DragStart:
                                            case u.m.Drag:
                                                s(!0);
                                                break;
                                            default:
                                                s(!1);
                                        }
                                    _(e, t);
                                },
                                [_, s],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                s && s(!1);
                            }, [s]),
                            (0, a.useEffect)(() => m, [o, m]),
                            { handleGrabberAction: p, dragState: c, getForceCenterX: d }
                        );
                    };
            },
            4231: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { w: () => a }),
                    (function (e) {
                        (e.Hangar = 'hangar'),
                            (e.Setup = 'setup'),
                            (e.Compare = 'compare'),
                            (e.Battle = 'battle'),
                            (e.Respawn = 'respawn'),
                            (e.Prebattle = 'prebattle');
                    })(a || (a = {}));
            },
            3220: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c, t: () => _ });
                var a = n(3215),
                    s = n(9480),
                    i = n(3946),
                    r = n(4598),
                    u = n(4301),
                    o = n(7626);
                const l = (0, a.q3)()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                n = (0, i.Om)(() => t.sectionGroups.get().length),
                                a = (0, i.Om)(
                                    (e) => {
                                        const n = s.U2(t.sectionGroups.get(), e);
                                        if (!n) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, n, {
                                            sections: s.UI(n.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: s.UI(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, n.setupSelector, {
                                                states: s.UI(n.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: r.jv },
                                ),
                                l = (0, i.Om)(() => s.u4(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                c = (0, i.Om)((e) => a(e).sections.length),
                                _ = (0, i.Om)(
                                    (e, t) => {
                                        const n = a(e),
                                            i = s.U2(n.sections, t);
                                        if (!i) throw Error(`No ammunition section found with index: ${t}`);
                                        return i;
                                    },
                                    { equals: r.jv },
                                ),
                                d = (0, i.Om)((e, t) => _(e, t).slots.length),
                                m = (0, i.Om)((e, t) => {
                                    const n = _(e, t).slots;
                                    return s.hX(n, (e) => Boolean(e) && !(0, u.j2)(e)).length;
                                }),
                                p = (0, i.Om)((e, t) => {
                                    const n = _(e, t).slots;
                                    return s.G(n, (e) => e.intCD > 0);
                                }),
                                b = (0, i.Om)(
                                    (e, t, n) => {
                                        const a = _(e, t),
                                            i = s.U2(a.slots, n);
                                        if (!i) throw Error(`No ammunition slot found with index: ${n}`);
                                        return i;
                                    },
                                    { equals: r.jv },
                                ),
                                g = (0, i.Om)(
                                    (e) => {
                                        const t = a(e).sections;
                                        return s.v(t, (e) => (0, o.YR)(e.type));
                                    },
                                    { equals: r.jv },
                                ),
                                E = (0, i.Om)(
                                    (e, t, n) => {
                                        const a = b(e, t, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        if (!a.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, a.specializations, {
                                            specializations: s.UI(a.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: r.jv },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: n, group: a },
                                    sections: { allSectionsLength: l, length: c, section: _, IDs: g },
                                    slots: { length: d, filteredLength: m, slot: b, existFilled: p },
                                    specializations: E,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
            },
            4031: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => ss,
                        Bar: () => ts,
                        DefaultScroll: () => as,
                        Direction: () => $a,
                        defaultSettings: () => Ha,
                        useHorizontalScrollApi: () => Wa,
                    });
                var s = {};
                n.r(s), n.d(s, { Area: () => As, Bar: () => vs, Default: () => Cs, useVerticalScrollApi: () => is });
                var i = n(3138),
                    r = n(7739),
                    u = n(7363),
                    o = n.n(u),
                    l = n(6483),
                    c = n.n(l),
                    _ = n(926),
                    d = n.n(_),
                    m = n(1043);
                let p, b, g;
                !(function (e) {
                    (e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = m.j.small.width)] = 'Small'),
                        (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                        (e[(e.Large = m.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = m.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.width)] = 'Small'),
                            (e[(e.Medium = m.j.medium.width)] = 'Medium'),
                            (e[(e.Large = m.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = m.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = m.j.small.height)] = 'Small'),
                            (e[(e.Medium = m.j.medium.height)] = 'Medium'),
                            (e[(e.Large = m.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = m.j.extraLarge.height)] = 'ExtraLarge');
                    })(g || (g = {}));
                const E = () => {
                        const e = (0, u.useContext)(r.YN),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return g.ExtraLarge;
                                    case e.largeHeight:
                                        return g.Large;
                                    case e.mediumHeight:
                                        return g.Medium;
                                    case e.smallHeight:
                                        return g.Small;
                                    case e.extraSmallHeight:
                                        return g.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), g.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: s, mediaHeight: i, remScreenWidth: t, remScreenHeight: n };
                    },
                    h = ['children', 'className'];
                function v() {
                    return (
                        (v = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        v.apply(null, arguments)
                    );
                }
                const f = {
                        [b.ExtraSmall]: '',
                        [b.Small]: d().SMALL_WIDTH,
                        [b.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [b.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [g.ExtraSmall]: '',
                        [g.Small]: d().SMALL_HEIGHT,
                        [g.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [g.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [g.ExtraLarge]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [p.ExtraSmall]: '',
                        [p.Small]: d().SMALL,
                        [p.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [p.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [p.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    D = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, h);
                        const s = E(),
                            i = s.mediaWidth,
                            r = s.mediaHeight,
                            u = s.mediaSize;
                        return o().createElement('div', v({ className: c()(n, f[i], C[r], A[u]) }, a), t);
                    },
                    S = ['children'];
                const F = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, S);
                    return o().createElement(r.ZN, null, o().createElement(D, n, t));
                };
                var y = n(1533),
                    w = n.n(y),
                    B = n(7383),
                    k = n(1856),
                    x = n(3403),
                    T = n(3815),
                    I = n(2039);
                const N = (0, u.createContext)(null);
                var L = n(5262),
                    O = n(3649);
                function M(e, t, n) {
                    const a = (0, u.useContext)(r.YN);
                    let s = Object.entries(a).filter(([e, t]) => !0 === t && e in L.u);
                    return (
                        n && (s = s.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = s.map((e) =>
                                c()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + (0, O.e)(t))(n, e[0])]),
                            );
                            return (e[n] = c()(t[n], ...a)), e;
                        }, {})
                    );
                }
                const P = (e, t = []) => {
                        const n = (0, u.useRef)(),
                            a = (0, u.useCallback)((...t) => {
                                n.current && n.current(), (n.current = e(...t));
                            }, t);
                        return (
                            (0, u.useEffect)(
                                () => () => {
                                    n.current && n.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    $ = (e, t, { listenResize: n = !0, intervalMs: a = 50, minStableTicks: s = 3 }, i) => {
                        const r = (0, u.useRef)(e()),
                            o = (0, u.useState)(0),
                            l = o[0],
                            c = o[1];
                        (0, u.useEffect)(() => {
                            let n = 0;
                            const i = setInterval(() => {
                                const a = e();
                                a !== r.current
                                    ? ((r.current = a), (n = 0), t(a))
                                    : (n++, n >= s && (t(a), clearInterval(i)));
                            }, a);
                            return () => {
                                clearInterval(i);
                            };
                        }, [e, t, l, a, s, ...i]),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    c((e) => e + 1);
                                };
                                if (n)
                                    return (
                                        engine.on('clientResized', e),
                                        () => {
                                            engine.off('clientResized', e);
                                        }
                                    );
                            }, [n]);
                    };
                var H = n(3220);
                const z = {
                        base: 'AmmoPanel_base_8d',
                        base__locked: 'AmmoPanel_base__locked_f8',
                        base__disabled: 'AmmoPanel_base__disabled_13',
                        base__hidden: 'AmmoPanel_base__hidden_14',
                        border: 'AmmoPanel_border_e6',
                        border__hidden: 'AmmoPanel_border__hidden_b1',
                        roleSkillSlot: 'AmmoPanel_roleSkillSlot_20',
                        roleSkillSlot__battle: 'AmmoPanel_roleSkillSlot__battle_b0',
                        roleSkillSlot__small: 'AmmoPanel_roleSkillSlot__small_a1',
                        roleSkillSlot__extraSmall: 'AmmoPanel_roleSkillSlot__extraSmall_a9',
                        roleSkillSlot__prebattle: 'AmmoPanel_roleSkillSlot__prebattle_b5',
                    },
                    W = 'Border_base_f9',
                    j = 'Border_border_83',
                    G = 'Border_wrapper_17',
                    Z = 'Border_active_e8',
                    V = (0, u.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: n }) => {
                        const a = (0, u.useRef)(null),
                            s = (0, u.useRef)(!1);
                        (0, u.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const i = (0, u.useCallback)(() => {
                            s.current && n(), (s.current = !1);
                        }, [n]);
                        (0, u.useEffect)(() => {
                            const e = a.current;
                            return (
                                e && e.addEventListener('transitionend', i),
                                () => {
                                    e && e.removeEventListener('transitionend', i);
                                }
                            );
                        }, [i]);
                        const r = (0, u.useMemo)(() => ({ left: e }), [e]),
                            l = (0, u.useMemo)(() => ({ width: t }), [t]);
                        return o().createElement(
                            'div',
                            { className: W },
                            o().createElement(
                                'div',
                                { ref: a, className: j, style: r },
                                o().createElement(
                                    'div',
                                    { className: G },
                                    o().createElement('div', { className: Z, style: l }),
                                ),
                            ),
                        );
                    }),
                    U = (e, t) => {
                        const n = [];
                        for (let a = 0; a < e; a++) n.push(t(a));
                        return n;
                    };
                var q = n(6373),
                    X = n(9344),
                    K = n(2558),
                    Y = n(8934);
                const J = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    Q = 'up',
                    ee = 'down',
                    te = ({ children: e, index: t, setSetupSwitching: n, disabled: a = !1 }) => {
                        const s = (0, u.useRef)(1 - t),
                            i = (0, u.useMemo)(() => {
                                const e = ((n = t), (i = s.current), n === i ? '' : n > i ? ee : Q);
                                var n, i;
                                const r = e && (0, O.e)(e);
                                return a ? {} : { enter: J[`base__enter${r}`], exit: J[`base__exit${r}`] };
                            }, [t, a]);
                        return (
                            (s.current = t),
                            o().createElement(
                                K.Z,
                                { className: J.base },
                                o().createElement(
                                    Y.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: i,
                                        onEnter: () => n(!0),
                                        onExited: () => n(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                var ne = n(4301);
                const ae = {
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
                    se = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function ie() {
                    return (
                        (ie = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ie.apply(null, arguments)
                    );
                }
                const re = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        s = e.fadeInAnimation,
                        i = e.hide,
                        r = e.maximumNumber,
                        u = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, se);
                    const _ = a ? null : n,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const m = _ && !d && _ > r,
                        p = c()(
                            ae.base,
                            ae[`base__${t}`],
                            s && ae.base__animated,
                            i && ae.base__hidden,
                            !_ && ae.base__pattern,
                            a && ae.base__empty,
                            u,
                        );
                    return o().createElement(
                        'div',
                        ie({ className: p }, l),
                        o().createElement('div', { className: ae.bg }),
                        o().createElement('div', { className: ae.pattern }),
                        o().createElement(
                            'div',
                            { className: c()(ae.value, d && ae.value__text) },
                            m ? r : _,
                            m && o().createElement('span', { className: ae.plus }, '+'),
                        ),
                    );
                };
                re.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var ue = n(280),
                    oe = n(7902);
                const le = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var ce = n(6536),
                    _e = n(9916);
                const de = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    me = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    pe = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = le(`${e}.${n}`, window);
                                return de(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    be = (e) => {
                        const t = ((e) => {
                                const t = (0, oe.F)(),
                                    n = t.caller,
                                    a = t.resId,
                                    s = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: s, modelPath: me(s, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const s = le(me(n, `${t}.${a}`), window);
                                    return de(s) ? (e.push(s.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    };
                const ge = () => (window.injected || (window.injected = new Map()), window.injected);
                const Ee = _e.Sw.instance;
                let he;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(he || (he = {}));
                const ve = (e = 'model', t = he.Deep) => {
                        const n = (0, u.useState)(0),
                            a = (n[0], n[1]),
                            s = (0, u.useMemo)(() => (0, oe.F)(), []),
                            i = s.callerUrl,
                            r = s.caller,
                            o = s.resId,
                            l = (0, u.useMemo)(() => {
                                const t = (function (e) {
                                    return ge().has(e);
                                })(i.replace('.js', '.html'));
                                return window.__feature && window.__feature !== r && !t ? `subViews.${r}.${e}` : e;
                            }, [i, r, e]),
                            c = (0, u.useState)(() =>
                                ((e) => {
                                    const t = le(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return de(t) ? t.value : t;
                                })(pe(l)),
                            ),
                            _ = c[0],
                            d = c[1],
                            m = (0, u.useRef)(-1);
                        return (
                            (0, ce.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? he.Deep : he.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== he.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === he.Deep
                                                ? (e === _ && a((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        s = be(e);
                                    m.current = Ee.addCallback(s, n, o, t === he.Deep);
                                }
                            }),
                            (0, u.useEffect)(() => {
                                if (t !== he.None)
                                    return () => {
                                        Ee.removeCallback(m.current, o);
                                    };
                            }, [o, t]),
                            _
                        );
                    },
                    fe = 'visible_change',
                    Ce = fe,
                    Ae = fe,
                    De = (e, t) => {
                        const n = ve('tutorialModel.triggers.items').filter((n) => {
                            if (!n) return !1;
                            const a = n.value,
                                s = a.triggers.filter((e) => e.value === t);
                            return a.componentId === e && s.length > 0;
                        });
                        if (0 === n.length) return null;
                        if (!window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e))
                            return null;
                        return {
                            trigger: n[0].value,
                            runTrigger: (n) => {
                                window.tutorialModel.onTriggerActivated({ componentId: e, triggerType: t, state: n });
                            },
                        };
                    };
                var Se = n(4231);
                const Fe = 'TopLabel_base_7f',
                    ye = 'TopLabel_base__ready_00',
                    we = 'TopLabel_text_d0',
                    Be = 'TopLabel_text__hangar_36',
                    ke = 'TopLabel_text__shown_25',
                    xe = 'TopLabel_text__hidden_79',
                    Te = 'TopLabel_text__truncated_29',
                    Ie = (0, u.memo)(({ panelType: e, text: t, parentRef: n, isTruncated: a = !1, show: s = !1 }) => {
                        const i = (0, u.useRef)(!1),
                            r = (0, u.useState)(!1),
                            l = r[0],
                            _ = r[1];
                        (0, u.useEffect)(() => {
                            n || (s && !i.current && (i.current = !0), _(s));
                        }, [s, n]);
                        const d = (0, u.useCallback)(() => {
                                (i.current = !0), _(!0);
                            }, []),
                            m = (0, u.useCallback)(() => {
                                _(!1);
                            }, []);
                        return (
                            (0, u.useEffect)(() => {
                                const e = n && n.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', d),
                                        e.addEventListener('mouseleave', m),
                                        () => {
                                            e.removeEventListener('mouseenter', d),
                                                e.removeEventListener('mouseleave', m);
                                        }
                                    );
                            }, [n, d, m]),
                            o().createElement(
                                'div',
                                { className: c()(Fe, i.current && ye) },
                                o().createElement(
                                    'div',
                                    { className: c()(we, e !== Se.w.Setup && Be, a && Te, s && l ? ke : xe) },
                                    t,
                                ),
                            )
                        );
                    }),
                    Ne = 'notUsableSection';
                var Re = n(7626);
                const Le = 'Section_base_8a',
                    Oe = 'Section_label_73',
                    Me = 'Section_counter_8a',
                    Pe = 'Section_configLabel_c9',
                    $e = 'Section_configText_eb',
                    He = 'Section_configVehicleIcon_20';
                let ze;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(ze || (ze = {}));
                const We = 'tooltip_watched';
                let je;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(je || (je = {}));
                const Ge = 'epic_battle';
                let Ze, Ve, Ue;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Ze || (Ze = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(Ve || (Ve = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Ue || (Ue = {}));
                const qe = ['action', 'timeLimit'];
                const Xe = 'metrics',
                    Ke = () => Date.now(),
                    Ye = ({ partnerID: e, item: t, parentScreen: n, itemState: a, info: s }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: n || null,
                        item_state: a || null,
                        additional_info: s || null,
                    }),
                    Je = (e, t) => {
                        const n = (0, u.useCallback)(
                            (n, a = ze.Info, s) => {
                                s || (s = {}),
                                    Object.keys(s).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: a,
                                            params: JSON.stringify(s),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, a) => n(e, t, a);
                    },
                    Qe = (e, t) => {
                        const n = Je(e, t),
                            a = (0, u.useRef)(new Map()),
                            s = (0, u.useRef)(new Map()),
                            i = (0, u.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, Ke());
                                },
                                [a],
                            ),
                            r = (0, u.useCallback)(() => {
                                a.current.clear(), s.current.clear();
                            }, [a, s]),
                            o = (0, u.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, Ke());
                                },
                                [a, s],
                            ),
                            l = (0, u.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = s.current.get(e);
                                    if (void 0 === n) return;
                                    s.current.delete(e);
                                    const i = Ke() - n;
                                    a.current.set(e, t + i);
                                },
                                [a, s],
                            ),
                            c = (0, u.useCallback)(
                                (e, t = 0, i, r) => {
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    void 0 !== s.current.get(e) && l(e), a.current.delete(e);
                                    const o = (Ke() - u) / 1e3;
                                    o <= t ||
                                        ((r = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(r, o)),
                                        n(e, i, r));
                                },
                                [a, s, n, l],
                            );
                        return [(e) => i(e), (e, t, n, a) => c(e, t, n, a), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    et = (e) => {
                        const t = Qe(e, Xe),
                            n = t[0],
                            a = t[1],
                            s = t[2],
                            i = t[3],
                            r = t[4],
                            o = (0, u.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        n = e.timeLimit,
                                        s = e.logLevel;
                                    a(t, n, s, Ye(e));
                                },
                                [a],
                            );
                        return [(e) => n(e), (e) => o(e), () => s(), (e) => i(e), (e) => r(e)];
                    },
                    tt = (e, t, n, a) => {
                        const s = et(Ge),
                            i = s[0],
                            r = s[1];
                        return [
                            (0, u.useCallback)(() => i(We), [i]),
                            (0, u.useCallback)(
                                () => r({ action: We, timeLimit: 2, item: e, parentScreen: t, itemState: n, info: a }),
                                [r, e, t, n, a],
                            ),
                        ];
                    };
                var nt = n(2056);
                const at = o().memo(function ({ className: e, children: t }) {
                    const n = tt(Ve.SkillOrderTooltip, Ze.SetupView),
                        a = n[0],
                        s = n[1];
                    return o().createElement(
                        nt.u,
                        {
                            contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                            onMouseEnter: a,
                            onMouseLeave: s,
                        },
                        o().createElement('div', { className: e }, t),
                    );
                });
                var st = n(7727);
                const it = 'SlotDivider_base_60',
                    rt = () => o().createElement('div', { className: it });
                var ut = n(3267),
                    ot = n(8253),
                    lt = n(3141);
                const ct = (e) => {
                    const t = (0, u.useRef)(-1),
                        n = (0, u.useCallback)(
                            (n) => {
                                if (-1 === t.current) {
                                    const a = e(n);
                                    a &&
                                        (t.current = window.setTimeout(() => {
                                            t.current = -1;
                                        }, a));
                                }
                            },
                            [e],
                        );
                    return (0, u.useEffect)(() => () => clearTimeout(t.current), []), n;
                };
                var _t = n(8526),
                    dt = n(5521);
                const mt = 'Grabber_base_cf',
                    pt = 'Grabber_base__enabled_b0',
                    bt = 'Grabber_base__waitingUpdate_1d',
                    gt = 'Grabber_base__updating_f1',
                    Et = 'Grabber_base__active_71',
                    ht = 'Grabber_base__exit_1f',
                    vt = 'Grabber_base__showAnimation_d9';
                var ft = n(3521),
                    Ct = n(1820);
                const At = ({
                    children: e,
                    id: t,
                    containerRef: n,
                    isEnabled: a = !0,
                    onClick: s,
                    forceCenterX: r,
                    isUpdateAvailable: l,
                    handleAction: _,
                    blockOnGrabIds: d = [],
                }) => {
                    const m = E().mediaSize,
                        p = (0, u.useRef)({
                            actualX: 0,
                            clickCenterOffset: 0,
                            dropCenterX: 0,
                            grabActivationPassed: !1,
                            isDragActive: !1,
                            id: t,
                        }),
                        b = (0, u.useRef)({
                            isValid: !1,
                            startX: 0,
                            startCenterX: 0,
                            minXRestriction: 0,
                            maxXRestriction: 8e3,
                        }),
                        g = (0, u.useRef)(null),
                        h = (0, u.useState)(!1),
                        v = h[0],
                        f = h[1],
                        C = (0, u.useState)(0),
                        A = C[0],
                        D = C[1],
                        S = (function () {
                            const e = (0, u.useRef)(0);
                            return (
                                (0, I.k)(() => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, u.useMemo)(
                                    () => ({
                                        run: (t) => {
                                            window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        t(), (e.current = 0);
                                                    });
                                                }));
                                        },
                                        clear: () => {
                                            window.cancelAnimationFrame(e.current), (e.current = 0);
                                        },
                                        get isRunning() {
                                            return 0 !== e.current;
                                        },
                                    }),
                                    [],
                                )
                            );
                        })(),
                        F = 0 !== r && a,
                        y = r ? r - b.current.startCenterX : A;
                    (0, u.useEffect)(() => {
                        if (((b.current.isValid = !1), t))
                            return (0, k.v)(() => {
                                const e = g.current,
                                    a = n.current;
                                if (a && e) {
                                    const n = e.getBoundingClientRect(),
                                        s = a.getBoundingClientRect(),
                                        i = n.left + 0.5 * n.width;
                                    (b.current = {
                                        isValid: !0,
                                        minXRestriction: s.left,
                                        maxXRestriction: s.left + s.width,
                                        startX: n.left,
                                        startCenterX: i,
                                    }),
                                        _(Ct.m.Ready, { dragId: t, currentCenterX: i });
                                }
                            });
                    }, [m]);
                    const w = (0, u.useCallback)(
                            (e) => {
                                (p.current.isDragActive = e),
                                    f(e),
                                    p.current.grabActivationPassed && !e && (0, ft.jZ)(!1, d);
                            },
                            [d],
                        ),
                        B = (0, u.useCallback)(() => {
                            _(Ct.m.DragStart, { dragId: p.current.id }),
                                (p.current.grabActivationPassed = !0),
                                (0, ft.jZ)(!0, d);
                        }, [_, d]),
                        x = (0, u.useCallback)((e) => {
                            const t = p.current,
                                n = b.current,
                                a = n.startX,
                                s = n.startCenterX,
                                i = n.minXRestriction,
                                r = n.maxXRestriction,
                                u = s - a,
                                o = e - t.clickCenterOffset;
                            t.dropCenterX = (0, ft.yG)(o, u, i, r);
                        }, []),
                        N = (0, u.useCallback)(
                            (e) => {
                                const t = p.current,
                                    n = b.current;
                                0 === e.button &&
                                    !t.isDragActive &&
                                    n.isValid &&
                                    a &&
                                    !l &&
                                    g.current &&
                                    ((t.actualX = e.clientX),
                                    (t.clickCenterOffset = t.actualX - n.startCenterX),
                                    w(!0));
                            },
                            [a, l, w],
                        ),
                        R = (0, u.useCallback)(() => {
                            !s || (a && b.current.isValid) || s();
                        }, [a, s]);
                    (0, _t.gd)(
                        v ? dt.n.ESCAPE : dt.n.NONE,
                        (0, T.z)(() => w(!1)),
                    ),
                        (0, u.useEffect)(() => {
                            a && r && D(0);
                        }, [r, a]);
                    const L = !v && p.current.grabActivationPassed;
                    (0, u.useLayoutEffect)(() => {
                        p.current.id = t;
                    }, [t]),
                        (0, u.useEffect)(() => {
                            if (L) {
                                const e = p.current;
                                _(Ct.m.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                    r === e.dropCenterX &&
                                        ((e.grabActivationPassed = !1),
                                        S.run(() => _(Ct.m.DropExit, { dragId: e.id })));
                            }
                        }, [L, S, r, _]),
                        (0, u.useEffect)(() => {
                            if (a && v && p.current.id) {
                                const e = i.O.client.events.mouse.up(([e, t]) => {
                                        if ('outside' === t) return w(!1);
                                        const n = p.current,
                                            a = e.clientX;
                                        a === n.actualX && 0 === e.button && !p.current.grabActivationPassed
                                            ? s && s()
                                            : p.current.grabActivationPassed && x(a),
                                            p.current.isDragActive && w(!1);
                                    }),
                                    t = i.O.client.events.mouse.move(([e]) => {
                                        const t = p.current;
                                        if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                        const n = e.clientX,
                                            a = t.grabActivationPassed;
                                        !a && B(),
                                            n !== t.actualX &&
                                                ((t.actualX = n),
                                                x(n),
                                                a && _(Ct.m.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                D(t.dropCenterX - b.current.startCenterX));
                                    });
                                return () => {
                                    t(), e();
                                };
                            }
                        }, [B, _, v, a, s, w, x]);
                    const O = a ? c()(mt, pt, v && Et, L && ht, F && bt, r && gt) : c()(mt, r && vt);
                    return o().createElement(
                        'div',
                        {
                            id: t,
                            ref: g,
                            onClick: R,
                            onMouseDown: N,
                            onTransitionEnd: (e) => {
                                const t = p.current;
                                e.target === g.current &&
                                    t.grabActivationPassed &&
                                    ((t.grabActivationPassed = !1), S.run(() => _(Ct.m.DropExit, { dragId: t.id })));
                            },
                            className: O,
                            style: { left: y },
                        },
                        e,
                    );
                };
                let Dt;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(Dt || (Dt = {}));
                const St = 'KeyLabel_base_ec',
                    Ft = 'KeyLabel_base__current_c2',
                    yt = 'KeyLabel_base__next_fa',
                    wt = ({ text: e, show: t, panelType: n, shellState: a, className: s }) => {
                        if (!e) return null;
                        const i = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return o().createElement(
                            'div',
                            { className: c()(St, a === Dt.Current && Ft, a === Dt.Next && yt, s) },
                            o().createElement(Ie, { isTruncated: !0, text: i, show: t, panelType: n }),
                        );
                    };
                var Bt = n(7078);
                const kt = ({ children: e, slotType: t, slotId: n, panelType: a, isEnabled: s = !0 }) => {
                        const i = (0, u.useMemo)(() => ({ slotType: t, slotId: n }), [t, n]);
                        return o().createElement(
                            Bt.t,
                            {
                                isEnabled: s,
                                args: i,
                                decoratorId: [Se.w.Battle, Se.w.Prebattle].includes(a)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            o().createElement('div', null, e),
                        );
                    },
                    xt = 'Close_base_f3',
                    Tt = 'Close_base__invisible_0e',
                    It = 'Close_base__shown_a2',
                    Nt = 'Close_base__hover_6d',
                    Rt = 'Close_base__down_2b',
                    Lt = (0, u.memo)(
                        ({ id: e, show: t = !0, onClick: n, soundHover: a = 'highlight', soundClick: s = 'play' }) => {
                            const i = (0, u.useState)(!1),
                                r = i[0],
                                l = i[1],
                                _ = (0, u.useState)(!1),
                                d = _[0],
                                m = _[1],
                                p = (0, u.useState)(!1),
                                b = p[0],
                                g = p[1],
                                E = (0, u.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                h = (0, u.useCallback)(() => {
                                    m(!0), a && (0, st.G)(a);
                                }, [a]),
                                v = (0, u.useCallback)(() => {
                                    l(!1), m(!1);
                                }, []),
                                f = (0, u.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && (0, st.G)(s));
                                    },
                                    [t, s],
                                ),
                                C = (0, u.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && n && n();
                                    },
                                    [t, n],
                                );
                            (0, u.useEffect)(
                                () =>
                                    (0, k.v)(() => {
                                        g(!0);
                                    }),
                                [],
                            );
                            const A = c()(xt, !b && Tt, b && t && It, r && Rt, d && Nt);
                            return o().createElement('div', {
                                id: e,
                                onMouseOver: h,
                                onMouseLeave: v,
                                onMouseDown: f,
                                onMouseUp: C,
                                className: A,
                                onClick: E,
                            });
                        },
                    ),
                    Ot = 'Slot_base_3a',
                    Mt = 'Slot_label_e6',
                    Pt = 'Slot_close_bb',
                    $t = 'Slot_disabled_5d',
                    Ht = 'Slot_shadow_a7',
                    zt = 'Slot_category_2c';
                var Wt = n(1641);
                const jt = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: i = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, u.useCallback)(() => {
                                (0, _e.c9)(_e.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    st.$.playYes();
                            }, [s, t, n, a]),
                            l = (0, u.useCallback)(() => {
                                (0, _e.c9)(_e.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, u.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Wt.t.RIGHT)(e) && o();
                                },
                                [r, o],
                            );
                        return (
                            (0, u.useEffect)(() => {
                                !1 === i && l();
                            }, [i, l]),
                            i ? (0, u.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Gt = ['children'];
                function Zt() {
                    return (
                        (Zt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Zt.apply(null, arguments)
                    );
                }
                const Vt = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Gt);
                    return o().createElement(
                        jt,
                        Zt({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                var Ut = n(1396),
                    qt = n(5918);
                const Xt = (0, x.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: a,
                            isInstalled: s,
                            isDisabled: i,
                            imageSource: r,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: p,
                        }) => {
                            const b = (0, H.t)().model.root.get().vehicleCD,
                                g = (0, u.useState)(!0),
                                E = g[0],
                                h = g[1],
                                v = (0, Ut.K)();
                            (0, u.useEffect)(() => {
                                h(!1), v.run(() => h(!0), 100);
                            }, [b]);
                            const f = (0, u.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: n,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: a,
                                }),
                                [e, _, t, n, s, a],
                            );
                            return E
                                ? o().createElement(
                                      qt.y,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: r,
                                          itemInstalledSetupIndex: n,
                                      },
                                      o().createElement(
                                          Vt,
                                          { isEnabled: !(m || d || i || l), args: f },
                                          o().createElement('div', null, p),
                                      ),
                                  )
                                : o().createElement('div', null, p);
                        },
                    ),
                    Kt = (0, x.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: n,
                            isSelected: a,
                            isSetupSwitching: s,
                            isSectionSelected: i,
                            onActiveSlotChanged: r,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: m = !1,
                            isBorderActive: p,
                            isIncompatible: b = !1,
                            grabberId: g,
                            containerRef: E,
                            activeDragId: h,
                            handleGrabberAction: v,
                            forceLeftUpdate: f,
                            potentialDropId: C,
                            blockOnGrabIds: A,
                            contextMenuDisabled: D,
                            groupIndex: S,
                            sectionIndex: F,
                        }) => {
                            const y = (0, H.t)().model.computes.slots.slot(S, F, t),
                                w = y.imageSource,
                                B = y.isInstalled,
                                x = y.itemInstalledSetupIdx,
                                T = y.isMountedMoreThanOne,
                                I = y.overlayType,
                                N = y.keyName,
                                R = y.categoryImgSource,
                                L = y.withAttention,
                                O = y.id,
                                M = y.intCD,
                                P = d === Se.w.Setup,
                                $ = !(0, ne.s$)(d),
                                z = !(0, ne.iN)(d),
                                W = d === Se.w.Compare,
                                j = P && i && $,
                                G = (0, u.useRef)(!1),
                                Z = (0, u.useRef)(null),
                                V = -1 === M;
                            (0, u.useEffect)(() => {
                                if (!G.current && i && a)
                                    return (0, k.v)(() => {
                                        r && r(Z, e, O), (G.current = !0);
                                    });
                                G.current = !0;
                            }, [O, i, a, r, e]),
                                (0, u.useEffect)(() => {
                                    a && c(Z);
                                }, [a, c]);
                            const U = (0, u.useCallback)(() => (!a && $ && !s && l(e, O), 500), [O, $, a, s, l, e]),
                                q = ct(U),
                                X = (0, u.useCallback)(() => {
                                    m || q('');
                                }, [q, m]),
                                K = (0, u.useCallback)(() => {
                                    z && !a && !h && !m && st.$.playHighlight();
                                }, [a, h, m, z]);
                            (0, u.useEffect)(() => {
                                C && st.$.playHighlight();
                            }, [C]);
                            const Y = (0, u.useCallback)(() => {
                                    null == _ || _(O, e);
                                }, [O, _, e]),
                                J = P && !B,
                                Q = Boolean(g && C === g),
                                ee = g && (j || W),
                                te = `${e}-slot-${O}`,
                                ae = R && R.length > 0,
                                se = ae ? { backgroundImage: `url(${R})` } : {},
                                ie = {
                                    id: g,
                                    containerRef: E,
                                    isEnabled: !V,
                                    onClick: X,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: v,
                                    forceCenterX: f,
                                    blockOnGrabIds: A,
                                },
                                re = {
                                    isEmpty: V,
                                    intCD: M,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: w,
                                    isDisabled: m,
                                    isInstalled: B,
                                    id: O,
                                    itemInstalledSetupIdx: x,
                                    isMountedMoreThanOne: T,
                                    contextMenuDisabled: D,
                                    isSetupSwitching: s,
                                };
                            return o().createElement(
                                'div',
                                { className: Ot, onMouseEnter: K, id: te },
                                (i || W) &&
                                    !B &&
                                    o().createElement(
                                        'div',
                                        { className: Pt },
                                        o().createElement(Lt, { id: `close-${te}`, show: !h, onClick: Y }),
                                    ),
                                o().createElement(
                                    kt,
                                    { slotType: e, slotId: O, isEnabled: !h, panelType: d },
                                    o().createElement(
                                        'div',
                                        { ref: Z },
                                        o().createElement(
                                            ot.W,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: a,
                                                isBorderActive: Boolean(p),
                                                panelType: d,
                                                isDisabled: m,
                                                isPotentialDrop: Q,
                                                onClick: ee ? void 0 : X,
                                            },
                                            $ &&
                                                o().createElement(
                                                    'div',
                                                    { className: Mt },
                                                    o().createElement(wt, { text: N, show: Boolean(i), panelType: d }),
                                                ),
                                            o().createElement(
                                                ut.J,
                                                { when: Boolean(ee), wrapper: At, withProps: ie },
                                                o().createElement(
                                                    ut.J,
                                                    { when: $, wrapper: Xt, withProps: re },
                                                    o().createElement(lt.c, {
                                                        imageSource: w,
                                                        isIncompatible: b,
                                                        overlayType: I,
                                                        level: n,
                                                        isTemporary: J,
                                                        withAttention: L,
                                                    }),
                                                ),
                                            ),
                                            ae &&
                                                o().createElement(
                                                    o().Fragment,
                                                    null,
                                                    o().createElement('span', { className: Ht }),
                                                    o().createElement('span', { className: zt, style: se }),
                                                ),
                                            m && o().createElement('div', { className: $t }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Yt = 'BattleAbilitySlot_base_74',
                    Jt = 'BattleAbilitySlot_rank_01',
                    Qt = ['rank'];
                const en = (e) => {
                    let t = e.rank,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Qt);
                    return o().createElement(
                        'div',
                        { className: Yt },
                        o().createElement(Kt, n),
                        t && o().createElement('div', { className: Jt, style: { backgroundImage: `url(${t})` } }),
                    );
                };
                var tn = n(4814);
                const nn = 'OptDeviceSlot_base_14',
                    an = 'OptDeviceSlot_specializations_c3',
                    sn = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function rn() {
                    return (
                        (rn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        rn.apply(null, arguments)
                    );
                }
                const un = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.activeSpecsMask,
                            i = e.isChangeSetupIndex,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, sn);
                        const u = (0, H.t)(),
                            l = u.controls,
                            _ = u.model.computes.specializations(t, n, a),
                            d = _.specializations.length,
                            m = r.panelType === Se.w.Setup || r.panelType === Se.w.Compare,
                            p = !(0, ne.s$)(r.panelType),
                            b = _.isDynamic;
                        return o().createElement(
                            'div',
                            { className: c()(nn, d && !b && !i && 'specializationsSlot') },
                            p &&
                                o().createElement(
                                    'div',
                                    { className: an },
                                    o().createElement(tn.G, {
                                        specializations: _.specializations,
                                        isDynamic: b,
                                        activeSpecsMask: s,
                                        isSpecializationActive: m,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: r.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            o().createElement(Kt, rn({}, r, { groupIndex: t, sectionIndex: n, slotIndex: a })),
                        );
                    }),
                    on = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    ln = ({ id: e, isSelected: t, isLocked: n, onSlotSelected: a, panelType: s }) => {
                        const i = B.yZ,
                            r = (0, u.useCallback)(() => {
                                a(i, e);
                            }, [e, a, i]),
                            l = c()(on.base, on[`base__${s}`], n && on.base__disabled, t && on.base__toggle),
                            _ = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            ),
                            m = `toggle-camouflage-slot-${e}`;
                        return o().createElement(
                            kt,
                            { slotType: i, slotId: e, panelType: s },
                            o().createElement(
                                'div',
                                { id: m, className: l, onClick: r, onMouseEnter: st.$.playHighlight },
                                t && o().createElement('div', { className: on.glow }),
                                o().createElement('div', { className: on.image, style: _ }),
                                o().createElement('div', { className: on.toggle, style: d }),
                            ),
                        );
                    },
                    cn = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function _n() {
                    return (
                        (_n = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        _n.apply(null, arguments)
                    );
                }
                const dn = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.sectionType,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, cn);
                        const r = (0, H.t)().model,
                            u = r.computes.slots.slot(t, n, a),
                            l = r.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === s ? _ : -1) === u.id;
                        switch (s) {
                            case B.zn: {
                                const e = u;
                                return o().createElement(
                                    un,
                                    _n({}, e, i, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            case B.yZ: {
                                const e = u;
                                return o().createElement(
                                    ln,
                                    _n({}, i, e, { groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                            }
                            case B.YN: {
                                const e = u;
                                return o().createElement(
                                    en,
                                    _n({}, i, e, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            default:
                                return o().createElement(
                                    Kt,
                                    _n({}, i, { isSelected: d, groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                        }
                    }),
                    mn = 'Slots_base_27',
                    pn = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function bn() {
                    return (
                        (bn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        bn.apply(null, arguments)
                    );
                }
                const gn = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.sectionType,
                            s = e.onActiveSlotChanged,
                            i = e.isDisabled,
                            r = e.blockOnGrabIds,
                            l = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, pn);
                        const m = (0, u.useRef)(null),
                            p = (0, u.useRef)(null),
                            b = (0, H.t)(),
                            g = b.model,
                            E = b.controls,
                            h = g.computes.slots.length(t, n),
                            v = g.ammunitionPanel.get(),
                            f = v.selectedSection,
                            C = v.selectedSlot,
                            A = v.syncInitiator,
                            D = (0, u.useCallback)(
                                (e, t) => {
                                    E.dragDropSwap({
                                        sectionType: a,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [E, a],
                            ),
                            S = f === a,
                            F = a === B.YN,
                            y = S ? C : -1,
                            w = `${a}-${h}slots`,
                            k = (0, Re.UW)({
                                baseId: w,
                                slotsLength: h,
                                handleSwap: D,
                                setIsExitBlocked: _,
                                syncInitiator: A,
                            }),
                            x = k.handleGrabberAction,
                            T = k.dragState,
                            I = k.getForceCenterX;
                        (0, u.useEffect)(() => {
                            S && -1 !== y && m.current && s(m, f, y);
                        }, [s, S, f, y]);
                        const N = (e, t) => {
                                if ((i || st.$.playClick(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                E.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            R = (e) => {
                                m.current = e ? e.current : null;
                            },
                            L = (e, t) => {
                                E.slotClear({ slotId: e, sectionType: t });
                            };
                        return o().createElement(
                            'div',
                            { id: w, ref: p, className: c()(mn, a) },
                            U(h, (e) => {
                                const c = !F && h > 1 ? `${w}-${e}` : '';
                                return o().createElement(
                                    u.Fragment,
                                    { key: `slot ${t}-${n}-${e}` },
                                    e > 0 && o().createElement(rt, null),
                                    o().createElement(
                                        dn,
                                        bn(
                                            {
                                                groupIndex: t,
                                                sectionIndex: n,
                                                slotIndex: e,
                                                sectionType: a,
                                                isSectionSelected: S,
                                                isDisabled: i,
                                                contextMenuDisabled: F,
                                                slotType: a,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: N,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: L,
                                                grabberId: c,
                                                containerRef: p,
                                                forceLeftUpdate: I(c),
                                                activeDragId: T.activeDragId,
                                                handleGrabberAction: x,
                                                potentialDropId: T.potentialDropId,
                                                blockOnGrabIds: r,
                                                isSetupSwitching: l,
                                                isChangeSetupIndex: l,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    En = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function hn() {
                    return (
                        (hn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        hn.apply(null, arguments)
                    );
                }
                const vn = (0, x.Pi)((e) => {
                    let t = e.groupIndex,
                        n = e.sectionIndex,
                        a = e.type,
                        s = e.newItemsCount,
                        i = e.panelType,
                        r = e.sectionsIds,
                        l = e.vehicle,
                        _ = e.vehicleType,
                        d = e.isSetupSwitching,
                        m = e.classMix,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, En);
                    const b = (0, H.t)().model,
                        g = (0, u.useRef)(null),
                        E = b.ammunitionPanel.get(),
                        h = E.selectedSection,
                        v = E.syncInitiator,
                        f = b.computes.slots.length(t, n),
                        C = b.computes.slots.existFilled(t, n),
                        A = De('AmmunitionPanelBattleAbilities', Ce);
                    (0, u.useEffect)(() => {
                        null == A || A.runTrigger(!0);
                    }, [A]);
                    const D = h === a,
                        S = (0, Re.Tu)(a, r),
                        F = S.selfId,
                        y = S.blockOnGrabIds,
                        w = ((l && l.length > 0) || (_ && _.length > 0)) && i !== Se.w.Battle && i !== Se.w.Respawn,
                        B = (0, u.useMemo)(
                            () => ({
                                icon: o().createElement('span', {
                                    className: He,
                                    style: {
                                        backgroundImage: _
                                            ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(_)})`
                                            : '',
                                    },
                                }),
                                vehicle: l,
                            }),
                            [l, _],
                        ),
                        k = f > 0 && i !== Se.w.Compare && i !== Se.w.Battle && i !== Se.w.Respawn,
                        x = R.strings.tank_setup.section.$dyn(a);
                    if ('string' != typeof x)
                        throw new Error(`No top label text for section type ${a} or it's not a string`);
                    return o().createElement(
                        'div',
                        {
                            id: d ? Ne : F,
                            ref: g,
                            className: c()(
                                Le,
                                m,
                                D && 'sectionSelected',
                                f > 1 && 'multiSlot',
                                v >= 0 && C && 'existFilledSlots',
                            ),
                        },
                        w &&
                            o().createElement(
                                at,
                                { className: Pe },
                                o().createElement(ue.z, {
                                    classMix: $e,
                                    text: R.strings.tank_setup.categories.reserves.config(),
                                    binding: B,
                                }),
                            ),
                        k &&
                            o().createElement(
                                'div',
                                { className: Oe },
                                o().createElement(Ie, { text: x, parentRef: g, show: !D, panelType: i }),
                            ),
                        o().createElement(
                            gn,
                            hn({ groupIndex: t, sectionIndex: n, sectionType: a, panelType: i, blockOnGrabIds: y }, p),
                        ),
                        Boolean(s) &&
                            o().createElement(
                                'div',
                                { className: Me },
                                o().createElement(re, { value: s, size: 'small', fadeInAnimation: !0 }),
                            ),
                    );
                });
                var fn = n(8598);
                const Cn = {
                        base: 'ShellsSlot_base_05',
                        base__grabbing: 'ShellsSlot_base__grabbing_2f',
                        shell: 'ShellsSlot_shell_ab',
                        shell__grabbing: 'ShellsSlot_shell__grabbing_98',
                        shell__active: 'ShellsSlot_shell__active_7e',
                        shell__potential: 'ShellsSlot_shell__potential_30',
                        label: 'ShellsSlot_label_da',
                        image: 'ShellsSlot_image_3f',
                        infinity: 'ShellsSlot_infinity_19',
                    },
                    An = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: n,
                        imageSource: a,
                        count: s,
                        isInfinity: i,
                        isSelected: r,
                        keyName: l,
                        panelType: _,
                        intCD: d,
                        slotIndex: m,
                        grabberId: p,
                        isSetupSwitching: b,
                        containerRef: g,
                        activeDragId: E,
                        handleGrabberAction: h,
                        forceLeftUpdate: v,
                        potentialDropId: f,
                        blockOnGrabIds: C,
                        shellState: A,
                        isDisabled: D,
                    }) => {
                        const S = !(0, ne.s$)(_),
                            F = (0, u.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            y = p && p === f,
                            w = p && p === E,
                            k = (0, u.useMemo)(() => {
                                const a = { slotType: B.g9, slotId: e, fieldType: 1, intCD: d };
                                return [
                                    a,
                                    Object.assign({}, a, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: n,
                                    }),
                                ];
                            }, [d, e, t, n]),
                            x = k[0],
                            T = k[1],
                            I = (0, u.useMemo)(
                                () => ({
                                    id: p,
                                    containerRef: g,
                                    isEnabled: Boolean(p) && r,
                                    isUpdateAvailable: Boolean(E),
                                    handleAction: h,
                                    forceCenterX: v,
                                    blockOnGrabIds: C,
                                }),
                                [E, C, g, v, p, h, r],
                            ),
                            N = (0, u.useMemo)(
                                () => ({ slotIndex: m, uniqueKey: d, slotType: B.g9, imageSource: null }),
                                [d, m],
                            );
                        return o().createElement(
                            Vt,
                            { isEnabled: S && !b && !D, args: T },
                            o().createElement(
                                Bt.t,
                                {
                                    args: x,
                                    decoratorId: [Se.w.Battle, Se.w.Prebattle].includes(_)
                                        ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                        : 0,
                                    isEnabled: !E,
                                },
                                o().createElement(
                                    'div',
                                    { id: `shell-slot-${m}`, className: Cn.base },
                                    l &&
                                        o().createElement(
                                            'div',
                                            { className: Cn.label },
                                            o().createElement(wt, {
                                                text: l,
                                                show: r || _ === Se.w.Battle || _ === Se.w.Respawn,
                                                shellState: A,
                                                panelType: _,
                                                className: c()(
                                                    0 === m && Cn.topLabel__first,
                                                    2 === m && Cn.topLabel__last,
                                                ),
                                            }),
                                        ),
                                    o().createElement(
                                        'div',
                                        {
                                            className: c()(
                                                Cn.shell,
                                                !E && S && !D && Cn.shell__active,
                                                w && Cn.shell__grabbing,
                                                !w && y && Cn.shell__potential,
                                            ),
                                        },
                                        o().createElement(
                                            ut.J,
                                            { when: S, wrapper: At, withProps: I },
                                            o().createElement(
                                                ut.J,
                                                { when: S, wrapper: qt.y, withProps: N },
                                                o().createElement('div', { className: Cn.image, style: F }),
                                                !i && o().createElement(fn.X, { count: s }),
                                                i && o().createElement('div', { className: Cn.infinity }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Dn = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Sn = ({ id: e, isSelected: t, imageSource: n, onSlotSelected: a, panelType: s }) => {
                        const i = (0, u.useCallback)(() => {
                                !t && a(e);
                            }, [e, t, a]),
                            r = c()(Dn.slot, !t && Dn.slot__active, Dn.slot__compare),
                            l = (0, u.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            _ = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return o().createElement(
                            kt,
                            { slotType: B.WI, slotId: e, panelType: s },
                            o().createElement(
                                'div',
                                { className: Dn.base },
                                o().createElement(
                                    'div',
                                    { className: r, onClick: i, id: `shell-slot-${e}` },
                                    t && o().createElement('div', { className: Dn.glow }),
                                    o().createElement('div', { className: Dn.image, style: l }),
                                    o().createElement('div', { className: Dn.toggle, style: _ }),
                                ),
                            ),
                        );
                    },
                    Fn = 'ShellContainer_base_46',
                    yn = 'ShellContainer_base__compressed_13',
                    wn = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                        'panelType',
                    ];
                function Bn() {
                    return (
                        (Bn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Bn.apply(null, arguments)
                    );
                }
                const kn = (0, x.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.isCompare,
                            i = e.handleSlotSelected,
                            r = e.baseId,
                            u = e.grabber,
                            l = e.panelType,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, wn);
                        const d = u.handleGrabberAction,
                            m = u.dragState,
                            p = u.getForceCenterX,
                            b = (0, H.t)().model,
                            g = b.computes.slots.length(t, n),
                            E = b.computes.slots.slot(t, n, a),
                            h = !s && g > 1 ? `${r}-${E.id}` : '';
                        return (0, ne.j2)(E)
                            ? null
                            : o().createElement(
                                  'div',
                                  { key: E.id, className: c()(Fn, !s && 0 !== a && yn) },
                                  s
                                      ? o().createElement(Sn, Bn({}, E, { onSlotSelected: i, panelType: l }))
                                      : o().createElement(
                                            An,
                                            Bn(
                                                {},
                                                E,
                                                {
                                                    slotIndex: a,
                                                    grabberId: h,
                                                    forceLeftUpdate: p(h),
                                                    activeDragId: m.activeDragId,
                                                    handleGrabberAction: d,
                                                    potentialDropId: m.potentialDropId,
                                                    panelType: l,
                                                },
                                                _,
                                            ),
                                        ),
                              );
                    }),
                    xn = 'Shells_base_f9',
                    Tn = (0, x.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: n,
                            isSelected: a,
                            syncInitiator: s,
                            blockOnGrabIds: i,
                            isDisabled: r,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            groupIndex: _,
                            sectionIndex: d,
                        }) => {
                            const m = (0, H.t)(),
                                p = m.model,
                                b = m.controls,
                                g = p.computes.slots.length(_, d),
                                E = (0, u.useRef)(!1),
                                h = (0, u.useRef)(null),
                                v = n ? B.WI : B.g9,
                                f = `${v}-${g}shells`,
                                C = !(0, ne.iN)(e),
                                A = (0, u.useCallback)(
                                    (e) => {
                                        b.sectionSelect({ selectedSlot: e, selectedSection: v }), C && st.$.playClick();
                                    },
                                    [b, v, C],
                                ),
                                D = (0, u.useCallback)(() => {
                                    a || n || r || l || A(0);
                                }, [a, n, l, r, A]),
                                S = (0, u.useCallback)(
                                    (e, t) => {
                                        b.dragDropSwap({
                                            sectionType: v,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [b, v],
                                ),
                                F = (0, Re.UW)({
                                    baseId: f,
                                    slotsLength: g,
                                    handleSwap: S,
                                    setIsExitBlocked: c,
                                    syncInitiator: s,
                                });
                            return (
                                (0, u.useEffect)(
                                    () =>
                                        (0, k.v)(() => {
                                            E.current = !0;
                                        }),
                                    [],
                                ),
                                (0, u.useEffect)(() => {
                                    if (a && e === Se.w.Setup) {
                                        if (!E.current)
                                            return (0, k.v)(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [a, e, t]),
                                o().createElement(
                                    'div',
                                    {
                                        id: f,
                                        ref: h,
                                        className: xn,
                                        onClick: D,
                                        onMouseEnter: () => {
                                            !r && C && st.$.playHighlight();
                                        },
                                    },
                                    U(g, (t) =>
                                        o().createElement(kn, {
                                            key: `${_} ${d} ${t}`,
                                            groupIndex: _,
                                            sectionIndex: d,
                                            slotIndex: t,
                                            isCompare: n,
                                            containerRef: h,
                                            handleSlotSelected: A,
                                            panelType: e,
                                            blockOnGrabIds: i,
                                            isSelected: a,
                                            isDisabled: r,
                                            isSetupSwitching: l,
                                            grabber: F,
                                            baseId: f,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    In = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    Nn = [Se.w.Hangar, Se.w.Battle, Se.w.Prebattle, Se.w.Respawn],
                    Rn = (0, x.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: n,
                            onActiveSlotChanged: a,
                            isDisabled: s,
                            isBorderActive: i,
                            classMix: r,
                            isSetupSwitching: l,
                            setIsExitBlocked: _,
                            newItemsCount: d,
                            groupIndex: m,
                            sectionIndex: p,
                        }) => {
                            const b = (0, H.t)().model,
                                g = b.ammunitionPanel.get(),
                                E = g.ammoNotFull,
                                h = g.selectedSection,
                                v = g.syncInitiator,
                                f = (0, u.useRef)(null),
                                C = n === Se.w.Compare,
                                A = n === Se.w.Prebattle && e === B.g9,
                                D = h === e || A,
                                S = (0, u.useCallback)(() => {
                                    a(f, h, 0);
                                }, [a, h]),
                                F = (0, Re.Tu)(e, t),
                                y = F.selfId,
                                w = F.blockOnGrabIds,
                                k = ((e) => Nn.includes(e))(n) && !s && E,
                                x = b.computes.slots.filteredLength(m, p),
                                T = !C && n !== Se.w.Battle && n !== Se.w.Respawn;
                            return o().createElement(
                                'div',
                                {
                                    id: l ? Ne : y,
                                    className: c()(
                                        In.base,
                                        r,
                                        In[`base__${n}`],
                                        !i && D && In.base__selected,
                                        C && In.base__compare,
                                        s && In.base__disabled,
                                    ),
                                    ref: f,
                                },
                                k && o().createElement('div', { className: In.attention }),
                                T &&
                                    o().createElement(
                                        'div',
                                        { className: In.label },
                                        o().createElement(Ie, {
                                            text: R.strings.tank_setup.section.shells(),
                                            parentRef: f,
                                            show: !D,
                                            panelType: n,
                                        }),
                                    ),
                                k &&
                                    o().createElement('div', {
                                        className: c()(
                                            In.border,
                                            2 === x && In.border__double,
                                            3 === x && In.border__triple,
                                        ),
                                    }),
                                o().createElement(Tn, {
                                    groupIndex: m,
                                    sectionIndex: p,
                                    panelType: n,
                                    onSelected: S,
                                    isSelected: D,
                                    isCompare: C,
                                    syncInitiator: v,
                                    blockOnGrabIds: w,
                                    isDisabled: s,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: _,
                                }),
                                Boolean(d) &&
                                    o().createElement(
                                        'div',
                                        { className: In.counter },
                                        o().createElement(re, { value: d, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && o().createElement('div', { className: In.disabled }),
                            );
                        },
                    ),
                    Ln = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function On() {
                    return (
                        (On = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        On.apply(null, arguments)
                    );
                }
                const Mn = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: n = !1,
                            onActiveSlotChanged: a,
                            isBorderActive: s,
                            isChangeSetupIndex: i,
                            setIsExitBlocked: r,
                        }) => {
                            const u = (0, H.t)().model,
                                l = M(['section'], Ln),
                                _ = u.computes.sections.IDs(e),
                                d = {
                                    panelType: t,
                                    isDisabled: n,
                                    onActiveSlotChanged: a,
                                    isBorderActive: s,
                                    sectionsIds: _,
                                    isChangeSetupIndex: i,
                                    setIsExitBlocked: r,
                                };
                            return o().createElement(
                                'div',
                                { className: Ln.base },
                                U(u.computes.sections.length(e), (n) => {
                                    const a = u.computes.sections.section(e, n);
                                    if (!a.slots || !a.slots.length) return null;
                                    const s = c()(
                                        l.section,
                                        0 !== n && (0, ne.s$)(t) && Ln.section__battle,
                                        0 === n && Ln.section__first,
                                    );
                                    if (a.type === B.g9 || a.type === B.WI) {
                                        const t = a;
                                        return o().createElement(
                                            Rn,
                                            On({}, t, d, {
                                                groupIndex: e,
                                                sectionIndex: n,
                                                isSetupSwitching: i,
                                                key: `${a.name}${e}${a.slots.length}`,
                                                classMix: s,
                                            }),
                                        );
                                    }
                                    return o().createElement(
                                        vn,
                                        On({}, a, d, {
                                            groupIndex: e,
                                            sectionIndex: n,
                                            isSetupSwitching: i,
                                            key: `${a.name}${e}${a.slots.length}`,
                                            classMix: s,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Pn = 'KeyboardKey_base_57',
                    $n = 'KeyboardKey_back_43',
                    Hn = o().memo(({ text: e }) =>
                        o().createElement('div', { className: Pn }, o().createElement('div', { className: $n }, e)),
                    ),
                    zn = 'SetupSwitchHotkey_base_4c',
                    Wn = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    jn = 'SetupSwitchHotkey_plusWrapper_f0',
                    Gn = 'SetupSwitchHotkey_plus_f0',
                    Zn = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Vn = 'SetupSwitchHotkey_plus__vertical_5b',
                    Un = o().memo(({ hotKeys: e }) =>
                        o().createElement(
                            'div',
                            { className: zn },
                            e.map((e, t) => {
                                if (!e) return null;
                                const n = e.value;
                                return 0 === t
                                    ? o().createElement(Hn, { key: t, text: n })
                                    : o().createElement(
                                          'div',
                                          { key: t, className: Wn },
                                          o().createElement(
                                              'div',
                                              { className: jn },
                                              o().createElement('div', { className: `${Gn} ${Zn}` }),
                                              o().createElement('div', { className: `${Gn} ${Vn}` }),
                                          ),
                                          o().createElement(Hn, { text: n }),
                                      );
                            }),
                        ),
                    ),
                    qn = {
                        base: 'Group_base_70',
                        wrapper: 'Group_wrapper_07',
                        switch: 'Group_switch_ff',
                        switch__battle: 'Group_switch__battle_c0',
                        switch__small: 'Group_switch__small_5e',
                        switch__extraSmall: 'Group_switch__extraSmall_ec',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_2e',
                        hint: 'Group_hint_99',
                        hint__disabled: 'Group_hint__disabled_6a',
                    };
                function Xn() {
                    return (
                        (Xn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Xn.apply(null, arguments)
                    );
                }
                const Kn = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Yn = (e) => e.setupSelector.hotKeys,
                    Jn = (0, x.Pi)(
                        ({
                            groupIndex: e,
                            sectionProps: t,
                            isSetupSwitching: n,
                            setSetupSwitching: a,
                            handleSetupSwitching: s,
                        }) => {
                            const i = M(['switch'], qn),
                                r = (0, H.t)().model,
                                u = r.root.get().isDisabled,
                                l = r.computes.groups.group(e);
                            return o().createElement(
                                'div',
                                { key: l.groupId, className: qn.base },
                                o().createElement(
                                    'div',
                                    { className: qn.wrapper },
                                    o().createElement(
                                        te,
                                        ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(l, a),
                                        o().createElement(Mn, Xn({}, t, { groupIndex: e, isChangeSetupIndex: n })),
                                    ),
                                    l.setupSelector.isSwitchEnabled &&
                                        o().createElement(
                                            'div',
                                            { className: c()(i.switch, (0, ne.iN)(t.panelType) && qn.switch__battle) },
                                            o().createElement(X._, {
                                                states: l.setupSelector.states,
                                                onClick: s,
                                                totalCount: l.totalCount,
                                                currentIndex: l.currentIndex,
                                                groupId: l.groupId,
                                                isDisabled: t.isDisabled,
                                            }),
                                            l.setupSelector.isPrebattleSwitchDisabled &&
                                                o().createElement(
                                                    q.i,
                                                    {
                                                        header: Kn.title(),
                                                        body: String(Kn.desc.$dyn(`c_${l.groupId}`)),
                                                    },
                                                    o().createElement('div', {
                                                        className: qn.prebattleSwitchIndicator,
                                                    }),
                                                ),
                                        ),
                                ),
                                ((_ = l),
                                ((d = t.panelType) === Se.w.Battle || d === Se.w.Respawn) &&
                                    _.setupSelector.isSwitchEnabled &&
                                    Yn(_) &&
                                    o().createElement(
                                        'div',
                                        { className: c()(qn.hint, u && qn.hint__disabled) },
                                        o().createElement(Un, { hotKeys: Yn(l) }),
                                    )),
                            );
                            var _, d;
                        },
                    ),
                    Qn = 'Groups_base_de',
                    ea = (0, x.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: n, setSetupSwitching: a, children: s }) => {
                            const i = (0, H.t)(),
                                r = i.model,
                                l = i.controls,
                                c = r.vehicleInfo.get(),
                                _ = l.changeSetupIndex,
                                d = null == c ? void 0 : c.vehicleName;
                            (0, u.useEffect)(() => {
                                (e.panelType !== Se.w.Hangar && e.panelType !== Se.w.Setup) || !n || a(!1);
                            }, [n, e.panelType, a]),
                                (0, u.useEffect)(() => {
                                    e.panelType === Se.w.Respawn && a(!1);
                                }, [d, e.panelType, a]);
                            const m = (0, u.useCallback)(
                                (t) => {
                                    e.panelType === Se.w.Respawn && a(!0), _(t);
                                },
                                [_, e.panelType, a],
                            );
                            return o().createElement(
                                'div',
                                { className: Qn },
                                U(r.computes.groups.length(), (n) =>
                                    o().createElement(Jn, {
                                        key: `group-${n}`,
                                        sectionProps: e,
                                        groupIndex: n,
                                        isSetupSwitching: t,
                                        setSetupSwitching: a,
                                        handleSetupSwitching: m,
                                    }),
                                ),
                                s,
                            );
                        },
                    );
                function ta() {
                    return (
                        (ta = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ta.apply(null, arguments)
                    );
                }
                const na = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const a = o().createElement('div', { className: n }, e);
                        if (t.header || t.body) return o().createElement(q.i, t, a);
                        const s = t.contentId;
                        return s
                            ? o().createElement(nt.u, ta({}, t, { contentId: s }), a)
                            : o().createElement(Bt.t, t, a);
                    },
                    aa = 'RoleSkillSlot_base_c4',
                    sa = 'RoleSkillSlot_icon_79',
                    ia = ({ roleSkill: e, tooltipId: t, tooltipHeader: n, tooltipBody: a, className: s }) => {
                        const i = (0, u.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: n, body: a, hasHtmlContent: !0 },
                                header: n,
                                body: a,
                                ignoreShowDelay: !0,
                            }),
                            [e, n, a, t],
                        );
                        return o().createElement(
                            na,
                            { tooltipArgs: i, className: c()(aa, s) },
                            o().createElement('div', {
                                className: sa,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    ra = 'SlotGlow_base_40',
                    ua = 'SlotGlow_glow_a9',
                    oa = 'SlotGlow_glow__initialized_8d',
                    la = 'SlotGlow_glow__shown_f2',
                    ca = 'SlotGlow_glow__hidden_94',
                    _a = (0, u.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: n }) => {
                        const a = (0, u.useState)({ offset: e, slotWidth: t }),
                            s = a[0],
                            r = a[1],
                            l = (0, u.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, u.useEffect)(() => {
                            let n = l.current.initialized;
                            !n && e && ((n = !0), r({ offset: e, slotWidth: t })),
                                (l.current = { initialized: n, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, u.useEffect)(() => {
                                n || r(l.current);
                            }, [n]);
                        const _ = (0, u.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${i.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            d = !n && s.offset === l.current.offset,
                            m = c()(ua, l.current.initialized && oa, d ? la : ca);
                        return o().createElement(
                            'div',
                            { className: ra },
                            o().createElement('div', { className: m, style: _ }),
                        );
                    }),
                    da = (0, x.Pi)(
                        ({
                            show: e = !0,
                            isReady: t = !0,
                            panelType: n,
                            isDisabled: a = !1,
                            onResize: s,
                            setIsExitBlocked: r,
                        }) => {
                            const l = (0, H.t)(),
                                _ = l.model,
                                d = l.controls,
                                m = _.ammunitionPanel.get(),
                                p = m.isSetupSwitchInProgress,
                                b = m.syncInitiator,
                                g = _.roleSkillSlot.get(),
                                E = (0, u.useState)(!1),
                                h = E[0],
                                v = E[1],
                                f = (0, u.useRef)(!1),
                                C = (0, u.useState)({ slotWidth: 0, slotOffset: 0 }),
                                A = C[0],
                                D = C[1],
                                S = (0, u.useState)(!1),
                                F = S[0],
                                y = S[1],
                                w = (0, u.useRef)(null),
                                B = (0, u.useContext)(N),
                                x = (0, u.useRef)({
                                    element: null,
                                    generation: 0,
                                    slotIndex: null,
                                    sectionIndex: null,
                                }),
                                T = (0, u.useCallback)(
                                    (e, t) => {
                                        if (h || p || n !== Se.w.Hangar) return;
                                        const a = t || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                        d.sectionResized(Object.assign({ sectionType: e }, a)),
                                            B && (B.freeze(), B.resize());
                                    },
                                    [h, p, n, d, B],
                                ),
                                I = (0, u.useCallback)(
                                    (e) => {
                                        T('main', e);
                                    },
                                    [T],
                                );
                            ((e, t, n, a = []) => {
                                const s = P(
                                    () =>
                                        (0, k.v)(() =>
                                            (0, k.v)(() => {
                                                if (e.current) {
                                                    const n = e.current.getBoundingClientRect(),
                                                        a = {
                                                            width: i.O.view.pxToRem(n.width),
                                                            height: i.O.view.pxToRem(n.height),
                                                            offsetX: i.O.view.pxToRem(n.left),
                                                            offsetY: i.O.view.pxToRem(n.top),
                                                        };
                                                    window.tutorialApi.updateComponents(), t(a);
                                                }
                                            }),
                                        ),
                                    [t, e],
                                );
                                (0, u.useEffect)(() => {
                                    s();
                                }, [s, ...a]),
                                    (0, u.useEffect)(() => {
                                        if (n)
                                            return (
                                                engine.on('clientResized', s),
                                                () => {
                                                    engine.off('clientResized', s);
                                                }
                                            );
                                    }, [n, s]);
                            })(w, I, !0, [b]),
                                (0, u.useEffect)(() => () => I(), [I]);
                            const R = (0, u.useCallback)(() => {
                                    y(!1);
                                }, []),
                                L = (0, u.useCallback)(() => {
                                    if (x.current.element && w.current) {
                                        const e = x.current.element.getBoundingClientRect(),
                                            t = w.current.getBoundingClientRect();
                                        D({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                    }
                                }, []),
                                O = (0, u.useCallback)(
                                    (e, t, n) => {
                                        if (e.current && w.current) {
                                            const a = ((e, t, n) =>
                                                e !== n.current.slotIndex || t !== n.current.sectionIndex)(n, t, x);
                                            (x.current.element = e.current),
                                                (x.current.slotIndex = n),
                                                (x.current.sectionIndex = t),
                                                f.current && a ? y(!0) : (f.current = !0),
                                                x.current.generation && L();
                                        }
                                    },
                                    [L],
                                ),
                                $ = (0, u.useCallback)(
                                    () =>
                                        (0, k.v)(() => {
                                            (x.current.generation += 1), L();
                                        }),
                                    [x, L],
                                );
                            (0, u.useEffect)(() => (0, k.v)($), [$]),
                                (0, u.useEffect)(
                                    () => (
                                        engine.on('clientResized', $),
                                        () => {
                                            engine.off('clientResized', $);
                                        }
                                    ),
                                    [$],
                                );
                            const W = A.slotWidth,
                                j = A.slotOffset,
                                G = c()(z.base, !t && z.base__locked, !e && z.base__hidden, a && z.base__disabled),
                                Z = c()(z.border, !F && z.border__hidden),
                                U = n === Se.w.Setup || n === Se.w.Compare,
                                q = {
                                    panelType: n,
                                    isDisabled: a,
                                    onActiveSlotChanged: O,
                                    isBorderActive: F,
                                    setIsExitBlocked: r,
                                };
                            (0, u.useEffect)(() => {
                                null == s || s();
                            }, [s, g.roleSkill]);
                            const X = M(['roleSkillSlot'], z);
                            return o().createElement(
                                'div',
                                { ref: w, className: G },
                                U &&
                                    o().createElement(_a, {
                                        key: x.current.generation,
                                        slotOffset: j,
                                        slotWidth: W,
                                        isAnimationRunning: F,
                                    }),
                                o().createElement(
                                    ea,
                                    { isSetupSwitching: p || h, sectionProps: q, isReady: t, setSetupSwitching: v },
                                    g.roleSkill &&
                                        o().createElement(ia, {
                                            roleSkill: g.roleSkill,
                                            tooltipId: g.tooltipId,
                                            tooltipHeader: g.tooltipHeader,
                                            tooltipBody: g.tooltipBody,
                                            className: c()(z.roleSkillSlot, z[`roleSkillSlot__${n}`], X.roleSkillSlot),
                                        }),
                                ),
                                U &&
                                    o().createElement(
                                        'div',
                                        { className: Z },
                                        o().createElement(V, { slotWidth: W, slotOffset: j, onAnimationEnd: R }),
                                    ),
                            );
                        },
                    );
                var ma = n(9152);
                const pa = (0, u.createContext)(null),
                    ba = () => {
                        const e = (0, u.useContext)(pa);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
                var ga = n(3028),
                    Ea = n(1922),
                    ha = n(2262),
                    va = n(5310),
                    fa = n(7198);
                const Ca = 'model.tankSetup.frontlineSetup',
                    Aa = {
                        base: 'AbilitiesActionsPanel_base_c0',
                        base__tiny: 'AbilitiesActionsPanel_base__tiny_b8',
                        toReservesBtn: 'AbilitiesActionsPanel_toReservesBtn_6b',
                        checkBox: 'AbilitiesActionsPanel_checkBox_77',
                        checkBoxZone: 'AbilitiesActionsPanel_checkBoxZone_49',
                        checkBoxLabel: 'AbilitiesActionsPanel_checkBoxLabel_2a',
                        vehicleIcon: 'AbilitiesActionsPanel_vehicleIcon_2f',
                    };
                var Da = n(3457);
                const Sa = {
                    base: 'Points_base_3e',
                    icon: 'Points_icon_15',
                    base__small: 'Points_base__small_ce',
                    base__normal: 'Points_base__normal_61',
                    base__big: 'Points_base__big_fb',
                    label: 'Points_label_1b',
                    base__brown: 'Points_base__brown_ea',
                    base__red: 'Points_base__red_b0',
                };
                let Fa, ya;
                !(function (e) {
                    (e.Small = 'small'), (e.Normal = 'normal'), (e.Big = 'big');
                })(Fa || (Fa = {})),
                    (function (e) {
                        (e.Brown = 'brown'), (e.Red = 'red');
                    })(ya || (ya = {}));
                const wa = o().memo(function ({ value: e, className: t, theme: n, size: a }) {
                        return o().createElement(
                            'div',
                            { className: c()(Sa.base, Sa[`base__${n}`], Sa[`base__${a}`], t) },
                            o().createElement('div', { className: Sa.label }, e),
                            o().createElement('div', { className: Sa.icon }),
                        );
                    }),
                    Ba = o().memo(function ({ pointsNeeded: e, isEnabled: t, children: n }) {
                        return o().createElement(
                            nt.u,
                            {
                                contentId: R.views.frontline.lobby.tooltips.NotEnoughPointsTooltip('resId'),
                                args: { points: e },
                                isEnabled: t,
                            },
                            o().createElement('div', null, n),
                        );
                    }),
                    ka = {
                        base: 'Purchase_base_b3',
                        priceContainer: 'Purchase_priceContainer_c3',
                        priceLabel: 'Purchase_priceLabel_da',
                        actions: 'Purchase_actions_62',
                        purchaseButton: 'Purchase_purchaseButton_c3',
                        button: 'Purchase_button_6e',
                    },
                    xa = o().memo(function ({ price: e, isAvailable: t, onPurchase: n, onCancel: a }) {
                        const s = { pointsNeeded: e - (0, u.useContext)(qu), isEnabled: !t };
                        return o().createElement(
                            'div',
                            { className: c()(ka.base, t && ka.base__isAvailable) },
                            o().createElement(
                                Ba,
                                s,
                                o().createElement(
                                    'div',
                                    { className: ka.priceContainer },
                                    o().createElement(
                                        'div',
                                        { className: ka.priceLabel },
                                        R.strings.tank_setup.dealPanel.toBePaid(),
                                    ),
                                    o().createElement(wa, { value: e, theme: t ? ya.Brown : ya.Red, size: Fa.Big }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: ka.actions },
                                o().createElement(
                                    Ba,
                                    s,
                                    o().createElement(
                                        Da.u5,
                                        {
                                            size: Da.qE.medium,
                                            disabled: !t,
                                            onClick: n,
                                            mixClass: c()(ka.purchaseButton, ka.button),
                                        },
                                        R.strings.tank_setup.dealPanel.button.purchase(),
                                    ),
                                ),
                                o().createElement(
                                    Da.u5,
                                    { size: Da.qE.medium, type: Da.L$.secondary, mixClass: ka.button, onClick: a },
                                    R.strings.tank_setup.dealPanel.button.cancel(),
                                ),
                            ),
                        );
                    });
                function Ta() {
                    return (
                        (Ta = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ta.apply(null, arguments)
                    );
                }
                const Ia = () => {
                        const e = (0, Ea.GS)(),
                            t = (0, u.useContext)(qu),
                            n = ve(Ca),
                            a = n.isTypeSelected,
                            s = n.vehicleType,
                            i = n.onChangeApplyAbilitiesToTypeSettings,
                            r = n.onDealConfirmed,
                            l = n.onDealCancelled,
                            _ = n.totalPurchasePrice,
                            d = n.purchaseSelectedAbilities,
                            m = ve(`${Ca}.dealPanel`),
                            p = m.isDisabled,
                            b = m.canAccept,
                            g = m.canCancel,
                            E = (0, O.BN)(s),
                            h = (0, u.useCallback)(() => i(), [i]),
                            v = (0, u.useCallback)(() => r(), [r]),
                            f = (0, u.useCallback)(() => l(), [l]),
                            C = (0, u.useCallback)(() => d(), [d]),
                            A = c()(Aa.base, e && Aa[`base__${e}`]),
                            D = c()(Aa.checkBox, 'applyAbilitiesToTypeCheckbox'),
                            S = (0, u.useMemo)(
                                () => ({
                                    backgroundImage: E
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.white.$dyn(E)})`
                                        : '',
                                }),
                                [E],
                            ),
                            F = (0, u.useMemo)(
                                () => ({
                                    icon: o().createElement('span', { className: Aa.vehicleIcon, style: S }),
                                    vehicle: R.strings.menu.classes.short.$dyn(E),
                                }),
                                [S, E],
                            ),
                            y = De('ShowAbilitiesButton', Ae),
                            w = (0, u.useRef)(_),
                            k = (0, u.useRef)(t);
                        (0, u.useEffect)(() => {
                            (w.current = _), (k.current = t);
                        }, [_, t]),
                            (0, u.useEffect)(() => {
                                y && y.runTrigger(!0);
                            }, [y]);
                        const x = De('ApplyAbilitiesToTypeCheckbox', Ae);
                        (0, u.useEffect)(() => {
                            x && x.runTrigger(!0);
                        }, [x]);
                        const T = ((e, t) => {
                                const n = et(e),
                                    a = n[0],
                                    s = n[1],
                                    i = t.action,
                                    r = t.timeLimit,
                                    o = (function (e, t) {
                                        if (null == e) return {};
                                        var n = {};
                                        for (var a in e)
                                            if ({}.hasOwnProperty.call(e, a)) {
                                                if (t.indexOf(a) >= 0) continue;
                                                n[a] = e[a];
                                            }
                                        return n;
                                    })(t, qe);
                                return (0, u.useMemo)(
                                    () => ({
                                        onShow: () => a(i || We),
                                        onHide: () => s(Object.assign({ action: i || We, timeLimit: r || 2 }, o)),
                                    }),
                                    [i, r, o, a, s],
                                );
                            })(Ge, { item: Ve.AbilitiesCheckboxTooltip, parentScreen: Ze.SetupView }),
                            I = _ || w.current,
                            N = I > 0 && t === k.current,
                            L = !N && b;
                        return o().createElement(
                            'div',
                            { className: A },
                            L &&
                                o().createElement(
                                    'div',
                                    { className: D },
                                    o().createElement(
                                        q.i,
                                        Ta(
                                            { body: R.strings.tank_setup.tooltips.abilities.actions.checkbox.$dyn(E) },
                                            T,
                                        ),
                                        o().createElement(
                                            'div',
                                            { className: Aa.checkBoxZone },
                                            o().createElement(
                                                ha.XZ,
                                                { isChecked: a, onChange: h, type: ha.Rh.main, size: ha.yB.medium },
                                                o().createElement(
                                                    'span',
                                                    { className: Aa.checkBoxLabel },
                                                    o().createElement(ue.z, {
                                                        text: R.strings.tank_setup.abilities.applyToType(),
                                                        binding: F,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            o().createElement(
                                va.f,
                                { when: !0, canAccept: N || L },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    N &&
                                        o().createElement(xa, {
                                            price: I,
                                            isAvailable: t >= I,
                                            onPurchase: C,
                                            onCancel: f,
                                        }),
                                    L &&
                                        o().createElement(fa.Z, {
                                            applyBtnString: a ? B.qZ : B.k4,
                                            isDisabled: p,
                                            canCancel: g,
                                            onCancel: f,
                                            onConfirm: v,
                                        }),
                                ),
                            ),
                        );
                    },
                    Na = (e, t, n) => (n < e ? e : n > t ? t : n);
                function Ra(e, t, n = []) {
                    const a = (0, u.useRef)(0),
                        s = (0, u.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, u.useEffect)(() => s, [s]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, u.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        s,
                    ];
                }
                function La(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Oa(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Oa(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Oa(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Ma(e, t, n) {
                    const a = (0, u.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let s,
                                    i = !1,
                                    r = 0;
                                function u() {
                                    s && clearTimeout(s);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - r;
                                    function _() {
                                        (r = Date.now()), n.apply(l, o);
                                    }
                                    i ||
                                        (a && !s && _(),
                                        u(),
                                        void 0 === a && c > e
                                            ? _()
                                            : !0 !== t &&
                                              (s = setTimeout(
                                                  a
                                                      ? function () {
                                                            s = void 0;
                                                        }
                                                      : _,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (o.cancel = function () {
                                        u(), (i = !0);
                                    }),
                                    o
                                );
                            })(n, e),
                        t,
                    );
                    return (0, u.useEffect)(() => a.cancel, [a]), a;
                }
                var Pa = n(7030);
                let $a;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })($a || ($a = {}));
                const Ha = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    za = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: s,
                        forceTriggerMouseMove: i,
                    }) => {
                        const r = (e, n) => {
                            const a = t(e),
                                s = a[0],
                                i = a[1];
                            return i <= s ? 0 : Na(s, i, n);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? Ha : l,
                                _ = (0, u.useRef)(null),
                                d = (0, u.useRef)(null),
                                m = (0, u.useRef)(!1),
                                p = (() => {
                                    const e = (0, u.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        s = (e, ...n) => {
                                            for (var a, s = La(t(e).values()); !(a = s()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, u.useMemo)(() => ({ on: n, off: a, trigger: s }), []);
                                })(),
                                b = Ma(
                                    () => {
                                        i && i();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Pa.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (n(t, e), p.trigger('change', e), i && m.current && b());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                E = g[0],
                                h = g[1],
                                v = (0, u.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const s = E.scrollPosition.get(),
                                            i = (null != (a = E.scrollPosition.goal) ? a : 0) - s;
                                        return r(e, t * n + i + s);
                                    },
                                    [E.scrollPosition],
                                ),
                                f = (0, u.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            h.start({
                                                scrollPosition: r(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: r(a, E.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, E.scrollPosition],
                                ),
                                C = (0, u.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            n = d.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            i = v(t, e, a);
                                        f(i);
                                    },
                                    [f, v, c.step],
                                ),
                                A = (0, u.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && C(a(e)),
                                            _.current && p.trigger('mouseWheel', e, E.scrollPosition, t(_.current));
                                    },
                                    [E.scrollPosition, C, p],
                                ),
                                D = P(
                                    () =>
                                        (0, k.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (f(r(e, E.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [f, E.scrollPosition.goal],
                                ),
                                S = (0, T.z)(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = r(e, E.scrollPosition.goal);
                                    t !== E.scrollPosition.goal && f(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('resize', D),
                                    () => {
                                        window.removeEventListener('resize', D);
                                    }
                                ),
                                [D],
                            ),
                                (0, u.useEffect)(() => {
                                    const e = _.current;
                                    if (!e || !i) return;
                                    const t = () => {
                                            m.current = !0;
                                        },
                                        n = () => {
                                            m.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', n),
                                        () => {
                                            e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n);
                                        }
                                    );
                                }, [_]);
                            return (0, u.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? s(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: r,
                                    handleMouseWheel: A,
                                    applyScroll: f,
                                    applyStepTo: C,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: h,
                                    animationScroll: E,
                                    recalculateContent: S,
                                    events: { on: p.on, off: p.off },
                                }),
                                [E.scrollPosition, f, C, p.off, p.on, S, A, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Wa = za({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $a.Next : $a.Prev),
                        forceTriggerMouseMove: i.O.view.forceTriggerMouseMove,
                    }),
                    ja = 'HorizontalBar_base_49',
                    Ga = 'HorizontalBar_base__nonActive_82',
                    Za = 'HorizontalBar_leftButton_5f',
                    Va = 'HorizontalBar_rightButton_03',
                    Ua = 'HorizontalBar_track_0d',
                    qa = 'HorizontalBar_thumb_fd',
                    Xa = 'HorizontalBar_rail_32',
                    Ka = 'disable',
                    Ya = { pending: !1, offset: 0 },
                    Ja = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qa = () => {},
                    es = (e, t) => Math.max(20, e.offsetWidth * t),
                    ts = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Ja, onDrag: a = Qa }) => {
                        const s = (0, u.useRef)(null),
                            r = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            _ = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, u.useState)(Ya),
                            b = p[0],
                            g = p[1],
                            E = (0, u.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = () => {
                                const t = _.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / s),
                                    o = Na(0, 1, i / (s - a)),
                                    c = (t.offsetWidth - es(t, u)) * o;
                                (n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (r.current && l.current && _.current && d.current) {
                                            if (0 === e)
                                                return r.current.classList.add(Ka), void l.current.classList.remove(Ka);
                                            if (
                                                ((t = _.current),
                                                (n = d.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return r.current.classList.remove(Ka), void l.current.classList.add(Ka);
                                            var t, n;
                                            r.current.classList.remove(Ka), l.current.classList.remove(Ka);
                                        }
                                    })(c);
                            },
                            v = (0, T.z)(() => {
                                (() => {
                                    const t = d.current,
                                        n = _.current,
                                        a = e.getWrapperSize(),
                                        i = e.getContainerSize();
                                    if (!(i && t && a && n)) return;
                                    const r = Math.min(1, a / i);
                                    (t.style.width = `${es(n, r)}px`),
                                        (t.style.display = 'flex'),
                                        s.current &&
                                            (1 === r ? s.current.classList.add(Ga) : s.current.classList.remove(Ga));
                                })(),
                                    h();
                            });
                        (0, u.useEffect)(() => (0, k.v)(v)),
                            (0, u.useEffect)(
                                () =>
                                    (0, k.v)(() => {
                                        const t = () => {
                                            h();
                                        };
                                        let n = Qa;
                                        const a = () => {
                                            n(), (n = (0, k.v)(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, u.useEffect)(() => {
                                if (!b.pending) return;
                                const t = i.O.client.events.mouse.move(([t, n]) => {
                                        var s;
                                        const i = e.contentRef.current,
                                            r = e.wrapperRef.current;
                                        if (!i || !r) return;
                                        const u = _.current,
                                            o = d.current;
                                        if (!u || !o) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - b.offset - u.getBoundingClientRect().x,
                                            c = (l / u.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(i, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                    }),
                                    n = i.O.client.events.mouse.up(() => {
                                        t(), E(Ya);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, b.offset, b.pending, a, E]);
                        const f = Ra((t) => e.applyStepTo(t), m, [e]),
                            C = f[0],
                            A = f[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', A, !0),
                                () => document.removeEventListener('mouseup', A, !0)
                            ),
                            [A],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ka) || (0, st.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(ja, t.base), ref: s, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(Za, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ka) ||
                                        0 !== e.button ||
                                        ((0, st.G)('play'), C($a.Next));
                                },
                                onMouseUp: A,
                                ref: r,
                                onMouseEnter: D,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(Ua, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, st.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = d.current,
                                                        s = e.contentRef.current;
                                                    if (!a || !s) return;
                                                    const i = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? $a.Prev : $a.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: D,
                                },
                                o().createElement('div', { ref: d, className: c()(qa, t.thumb) }),
                                o().createElement('div', { className: c()(Xa, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(Va, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ka) ||
                                        0 !== e.button ||
                                        ((0, st.G)('play'), C($a.Prev));
                                },
                                onMouseUp: A,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    ns = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    as = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: i,
                        scrollClassName: r,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(ns.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: c()(ns.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(ns.defaultScrollArea, s) },
                                o().createElement(ss, { className: r, api: m, classNames: i }, e),
                            ),
                            o().createElement(ts, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    ss = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, u.useEffect)(() => (0, k.v)(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(ns.base, t) },
                            o().createElement(
                                'div',
                                {
                                    className: c()(ns.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: c()(ns.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (ss.Bar = ts), (ss.Default = as);
                const is = za({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $a.Next : $a.Prev),
                    }),
                    rs = 'VerticalBar_base_f3',
                    us = 'VerticalBar_base__nonActive_42',
                    os = 'VerticalBar_topButton_d7',
                    ls = 'VerticalBar_bottomButton_06',
                    cs = 'VerticalBar_track_df',
                    _s = 'VerticalBar_thumb_32',
                    ds = 'VerticalBar_rail_43',
                    ms = 'disable',
                    ps = () => {},
                    bs = { pending: !1, offset: 0 },
                    gs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Es = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    hs = (e, t) => Math.max(20, e.offsetHeight * t),
                    vs = (0, u.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = gs, onDrag: a = ps }) => {
                        const s = (0, u.useRef)(null),
                            r = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            _ = (0, u.useRef)(null),
                            d = (0, u.useRef)(null),
                            m = e.stepTimeout || 100,
                            p = (0, u.useState)(bs),
                            b = p[0],
                            g = p[1],
                            E = (0, u.useCallback)(
                                (e) => {
                                    g(e),
                                        d.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [a],
                            ),
                            h = (0, T.z)(() => {
                                const t = d.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && i && t && n)) return;
                                const r = Math.min(1, a / i);
                                return (
                                    (t.style.height = `${hs(n, r)}px`),
                                    (t.style.display = 'flex'),
                                    s.current &&
                                        (1 === r ? s.current.classList.add(us) : s.current.classList.remove(us)),
                                    r
                                );
                            }),
                            v = (0, T.z)(() => {
                                const t = _.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / s),
                                    o = Na(0, 1, i / (s - a)),
                                    c = (t.offsetHeight - hs(t, u)) * o;
                                (n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (r.current && l.current && _.current && d.current) {
                                            if (0 === Math.round(e))
                                                return r.current.classList.add(ms), void l.current.classList.remove(ms);
                                            if (
                                                ((t = _.current),
                                                (n = d.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return r.current.classList.remove(ms), void l.current.classList.add(ms);
                                            var t, n;
                                            r.current.classList.remove(ms), l.current.classList.remove(ms);
                                        }
                                    })(c);
                            }),
                            f = (0, T.z)(() => {
                                Es(e, () => {
                                    h(), v();
                                });
                            });
                        (0, u.useEffect)(() => (0, k.v)(f)),
                            (0, u.useEffect)(() => {
                                const t = () => {
                                    Es(e, () => {
                                        v();
                                    });
                                };
                                let n = ps;
                                const a = () => {
                                    n(), (n = (0, k.v)(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => {
                                if (!b.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        E(bs);
                                    }),
                                    n = i.O.client.events.mouse.move(([t]) => {
                                        Es(e, (n) => {
                                            const s = _.current,
                                                i = d.current,
                                                r = e.getContainerSize();
                                            if (!s || !i || !r) return;
                                            const u = t.screenY - b.offset - s.getBoundingClientRect().y,
                                                o = (u / s.offsetHeight) * r;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: i, thumbOffset: u, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, b.offset, b.pending, a, E]);
                        const C = Ra((t) => e.applyStepTo(t), m, [e]),
                            A = C[0],
                            D = C[1];
                        (0, u.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const S = (e) => {
                            e.target.classList.contains(ms) || (0, st.G)('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: c()(rs, t.base), ref: s, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: c()(os, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ms) ||
                                        0 !== e.button ||
                                        ((0, st.G)('play'), A($a.Next));
                                },
                                ref: r,
                                onMouseEnter: S,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: c()(cs, t.track),
                                    onMouseDown: (t) => {
                                        const a = d.current;
                                        if (a && 0 === t.button)
                                            if (((0, st.G)('play'), t.target === a))
                                                E({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    d.current &&
                                                        Es(e, (a) => {
                                                            if (!a) return;
                                                            const s = n(e),
                                                                i = e.clampPosition(a, a.scrollTop + s * t);
                                                            e.applyScroll(i);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? $a.Prev : $a.Next);
                                            }
                                    },
                                    ref: _,
                                    onMouseEnter: S,
                                },
                                o().createElement('div', { ref: d, className: c()(_s, t.thumb) }),
                                o().createElement('div', { className: c()(ds, t.rail) }),
                            ),
                            o().createElement('div', {
                                className: c()(ls, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ms) ||
                                        0 !== e.button ||
                                        ((0, st.G)('play'), A($a.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: S,
                            }),
                        );
                    }),
                    fs = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Cs = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        scrollClassName: i,
                        scrollClassNames: r,
                        getStepByRailClick: l,
                        onDrag: _,
                    }) => {
                        const d = (0, u.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: c()(fs.base, e.base) });
                            }, [a]),
                            m = (0, u.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return o().createElement(
                            'div',
                            { className: c()(fs.defaultScroll, n), onWheel: t.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fs.area, s) },
                                o().createElement(As, { className: i, classNames: r, api: m }, e),
                            ),
                            o().createElement(vs, { getStepByRailClick: l, api: t, onDrag: _, classNames: d }),
                        );
                    },
                    As = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, u.useEffect)(() => (0, k.v)(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: c()(fs.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: c()(fs.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                As.Default = Cs;
                const Ds = { Vertical: s, Horizontal: a };
                var Ss = n(8045);
                const Fs = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let ys, ws, Bs;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(ys || (ys = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(ws || (ws = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Bs || (Bs = {}));
                const ks = { [Bs.NBSP]: ys.NoBreakSymbol, [Bs.ZWNBSP]: ys.NoBreakSymbol, [Bs.NEW_LINE]: ys.LineBreak },
                    xs = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ts = {
                        blackReal: 'colors_blackReal_fc',
                        whiteReal: 'colors_whiteReal_31',
                        white: 'colors_white_45',
                        whiteOrange: 'colors_whiteOrange_81',
                        whiteSpanish: 'colors_whiteSpanish_c3',
                        par: 'colors_par_5b',
                        parSecondary: 'colors_parSecondary_fd',
                        parTertiary: 'colors_parTertiary_97',
                        red: 'colors_red_79',
                        redDark: 'colors_redDark_73',
                        yellow: 'colors_yellow_76',
                        orange: 'colors_orange_cd',
                        cream: 'colors_cream_0f',
                        brown: 'colors_brown_82',
                        greenBright: 'colors_greenBright_68',
                        green: 'colors_green_fa',
                        greenDark: 'colors_greenDark_a9',
                        blueBooster: 'colors_blueBooster_26',
                        blueTeamkiller: 'colors_blueTeamkiller_86',
                        cred: 'colors_cred_35',
                        gold: 'colors_gold_c3',
                        bond: 'colors_bond_ce',
                        prom: 'colors_prom_83',
                    },
                    Is = 'renderers_noBreakWrapper_10',
                    Ns = 'renderers_lineBreak_b5',
                    Rs = 'renderers_newLine_bd',
                    Ls = 'renderers_word_f3',
                    Os = (e) => ({ color: `#${e}` }),
                    Ms = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Ts[a]
                                ? o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: c()(Ls, Ts[a]) },
                                      e,
                                  )
                                : o().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: Ls, style: Os(a) },
                                      e,
                                  )
                            : o().createElement('span', { key: n, 'data-block-type': t.blockType, className: Ls }, e);
                    },
                    Ps = {
                        [ys.Word]: Ms,
                        [ys.NoBreakSymbol]: Ms,
                        [ys.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            o().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => o().createElement(o().Fragment, { key: n }, e)),
                            ),
                        [ys.LineBreak]: ({ key: e }) =>
                            o().createElement('span', { key: e, 'data-block-type': ys.LineBreak, className: Ns }),
                        [ys.NewLine]: ({ elementList: e, key: t }) =>
                            o().createElement('span', { key: t, 'data-block-type': ys.NewLine, className: Rs }, e),
                        [ys.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            o().createElement(
                                'span',
                                { key: t, 'data-block-type': ys.NoBreakWrapper, className: Is },
                                e,
                            ),
                    },
                    $s = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((s, i) => {
                                const r = `${n}_${i}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        n = $s(e, Ps[t], r);
                                    a.push(...n);
                                } else a.push(t({ elementList: [s], textBlock: e, key: r }));
                            }),
                            a
                        );
                    },
                    Hs = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            s = Ps[a],
                                            i = $s(e, s, t);
                                        return (
                                            a === ys.NoBreakWrapper
                                                ? n.push(s({ elementList: i, textBlock: e, key: `${t}` }))
                                                : n.push(...i),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    zs = (e, t, n, a) => {
                        let s = t.exec(e),
                            i = 0;
                        for (; s; ) i !== s.index && n(e.slice(i, s.index)), a(s), (i = t.lastIndex), (s = t.exec(e));
                        i !== e.length && n(e.slice(i));
                    },
                    Ws = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    js = (e) => {
                        const t = [];
                        return (
                            zs(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(Ws) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Gs = xs
                        ? (e) => {
                              const t = [];
                              return (
                                  zs(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...js(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const s = [];
                              let i = 0;
                              for (; a; ) {
                                  const r = t.justifyContent === ws.FlexEnd ? a.index : n.lastIndex;
                                  s.push(e.slice(i, r)), (i = r), (a = n.exec(e));
                              }
                              return i !== e.length && s.push(e.slice(i)), s;
                          },
                    Zs = (e, t = '', n) => {
                        const a = [];
                        return (
                            zs(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: ys.Word, colorTag: t, childList: Gs(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        s = ks[n.charAt(0)];
                                    s === ys.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: ys.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: ys.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: s, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    Vs = (e, t, n = '', a) => {
                        const s = [];
                        return (
                            zs(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    s.push(...Zs(e, n, a));
                                },
                                (e) => {
                                    const i = e[1],
                                        r = void 0 === t[i] ? e[0] : t[i];
                                    'string' == typeof r || 'number' == typeof r
                                        ? s.push(...Zs(String(r), n, a))
                                        : s.push({ blockType: ys.Binding, colorTag: n, childList: [r] });
                                },
                            ),
                            s
                        );
                    },
                    Us = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === ys.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: ys.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    qs = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === ys.NoBreakSymbol
                                        ? ((n = !0), t.push(...Us(t.pop(), e)))
                                        : (n ? t.push(...Us(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    zs(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...Vs(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...Vs(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, O.Eg)((0, O.z4)(e)), t, n),
                        );
                        return Hs(a);
                    },
                    Xs = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Ks = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Ys = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = Ks(e, t),
                            s = e.textContent.length,
                            i = e.offsetWidth / s,
                            r = Math.ceil(a / i);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / i);
                            return a >= n ? [!0, n + r] : [!1, a];
                        }
                        const u = Math.max(n + r, 0);
                        return s < u ? [!1, 0] : [!0, u];
                    },
                    Js = (e, t, n, a, s, i) => {
                        let r = -1,
                            u = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === ys.LineBreak || c === ys.NewLine || c === ys.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = Ys(n, a, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + i,
                                    p = t[l];
                                (u = o().cloneElement(p, p.props, m)), (r = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = Js(e, d, e.length - 1, a, s, i),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (u = o().cloneElement(c, c.props, e, b)), (r = l);
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [r, u];
                    },
                    Qs = (e, t, n, a = '...') => {
                        const s = [...t],
                            i = e.current;
                        if (!i) return [s, !1];
                        const r = n.height,
                            u = n.width,
                            o = i.lastElementChild;
                        if (!Xs(o, r) && Ks(o, u) <= 0) return [s, !1];
                        const l = i.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const s = n + Math.ceil(0.5 * (a - n));
                                    Xs(e[s], t) ? (a = s - 1) : (n = s + 1);
                                }
                                return n - 1;
                            })(l, r);
                        if (c < 0) return [s, !1];
                        const _ = Js(l, s, c, u, a.length, a),
                            d = _[0],
                            m = _[1];
                        return m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0];
                    },
                    ei = o().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: r,
                            targetId: l,
                            justifyContent: _ = ws.FlexStart,
                            alignContent: d = ws.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const p = (0, u.useRef)(null),
                                b = (0, u.useRef)({ height: 0, width: 0 }),
                                g = (0, u.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                E = g[0],
                                h = g[1],
                                v = (0, u.useMemo)(() => qs(e, a, { justifyContent: _ }), [a, _, e]),
                                f = (0, u.useMemo)(() => {
                                    if (
                                        s &&
                                        E.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, r, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, s, l, e, r, E.isTruncated]),
                                C = (0, u.useCallback)(
                                    (e) => {
                                        (b.current.width = e.contentRect.width),
                                            (b.current.height = e.contentRect.height);
                                        const t = Qs(p, v, b.current, m),
                                            a = t[0],
                                            s = t[1];
                                        h({ elementList: a, isTruncated: s, isTruncateFinished: !0 }), n && n(s);
                                    },
                                    [n, m, v],
                                ),
                                A = (0, u.useMemo)(() => ({ justifyContent: _, alignContent: d }), [d, _]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, u.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, u.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Ss.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(p, C, i),
                                o().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            Fs.base,
                                            t,
                                            Fs.base__zeroPadding,
                                            i && Fs.base__isTruncationAvailable,
                                        ),
                                        style: A,
                                    },
                                    o().createElement('div', { className: Fs.unTruncated, ref: p }, v),
                                    o().createElement(
                                        na,
                                        {
                                            tooltipArgs: f,
                                            className: c()(
                                                Fs.tooltip,
                                                Fs[`tooltip__justify-${_}`],
                                                Fs[`tooltip__align-${d}`],
                                            ),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: c()(
                                                    Fs.truncated,
                                                    !E.isTruncateFinished && i && Fs.truncated__hide,
                                                ),
                                                style: A,
                                            },
                                            E.isTruncateFinished && i ? E.elementList : v,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    ti = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ni = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ai = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    si = (e) =>
                        ai
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = ni.length - 1; n >= 0; n--)
                                      for (; e >= ni[n]; ) (t += ti[n]), (e -= ni[n]);
                                  return t;
                              })(e),
                    ii = (e, t) => e.split(',').includes(t),
                    ri = {
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
                let ui, oi;
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(ui || (ui = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(oi || (oi = {}));
                const li = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: s,
                        tags: i = '',
                        size: r = ui.extraSmall,
                        type: u = oi.colored,
                        className: l,
                        classNames: _,
                        isShortName: d = !1,
                    }) => {
                        const m = `${(0, O.BN)(a)}${e ? '_elite' : ''}`,
                            p = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    ri.base,
                                    ri[`base__size${(0, O.e)(r)}`],
                                    ri[`base__type${(0, O.e)(u)}`],
                                    l,
                                ),
                            },
                            o().createElement('div', { className: c()(ri.level, null == _ ? void 0 : _.level) }, si(s)),
                            o().createElement('div', {
                                className: c()(
                                    ri.type,
                                    e && ri[`type__elite${(0, O.e)(r)}`],
                                    ri[`type__${r}`],
                                    null == _ ? void 0 : _.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${p})` } : void 0,
                            }),
                            ii(i, 'premiumIGR') && o().createElement('div', { className: ri.premiumIGR }),
                            o().createElement(
                                'div',
                                { className: c()(ri.name, null == _ ? void 0 : _.name) },
                                d ? n : t,
                            ),
                        );
                    },
                    ci = 'Aside_base_a5',
                    _i = 'Aside_content_24',
                    di = 'Aside_tankDetails_35',
                    mi = 'Aside_description_f0',
                    pi = 'Aside_title_6f',
                    bi = 'Aside_category_c0',
                    gi = 'Aside_text_ca',
                    Ei = 'Aside_status_91',
                    hi = 'Aside_status__activated_4e',
                    vi = 'Aside_statusDescrBlock_2c',
                    fi = 'Aside_statusDescription_75',
                    Ci = 'Aside_infoIcon_96',
                    Ai = 'CategoryTitle_base_f3',
                    Di = 'CategoryTitle_title_9d',
                    Si = 'CategoryTitle_icon_48';
                let Fi;
                !(function (e) {
                    (e.Common = 'common'), (e.Dark = 'dark'), (e.Small = 'small');
                })(Fi || (Fi = {}));
                const yi = (0, u.memo)(({ category: e, iconTheme: t = Fi.Small, className: n }) => {
                        const a = (0, u.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.epicBattles.category.${t}.${e}')`,
                            }),
                            [e, t],
                        );
                        return o().createElement(
                            'div',
                            { className: c()(Ai, n) },
                            o().createElement('div', { className: Si, style: a }),
                            o().createElement('div', { className: Di }, R.strings.epic_battle.skill.category.$dyn(e)),
                        );
                    }),
                    wi = 'InfoIcon_base_83',
                    Bi = 'InfoIcon_icon_47',
                    ki = (0, u.memo)(({ item: e, className: t }) => {
                        const n = tt(e, Ze.SetupView),
                            a = n[0],
                            s = n[1];
                        return o().createElement(
                            'div',
                            { className: c()(wi, t) },
                            o().createElement(
                                nt.u,
                                {
                                    contentId: R.views.frontline.lobby.tooltips.LevelReservesTooltip('resId'),
                                    ignoreShowDelay: !0,
                                    onMouseEnter: a,
                                    onMouseLeave: s,
                                },
                                o().createElement('div', { className: Bi }),
                            ),
                        );
                    }),
                    xi = {
                        base: 'LevelTab_base_92',
                        base__active: 'LevelTab_base__active_84',
                        label: 'LevelTab_label_c7',
                        arrow: 'LevelTab_arrow_5d',
                        arrow__active: 'LevelTab_arrow__active_b2',
                    };
                let Ti;
                !(function (e) {
                    (e.None = 'none'), (e.Default = 'default'), (e.Active = 'active');
                })(Ti || (Ti = {}));
                const Ii = (0, u.memo)(({ isActive: e, index: t, arrowType: n, onClick: a, classMix: s }) => {
                        const i = t + 1,
                            r = (0, u.useMemo)(() => si(i), [i]),
                            l = ((e) => {
                                const t = Je(e, Xe),
                                    n = (0, u.useCallback)(
                                        (e) => {
                                            t(e.action, e.logLevel, Ye(e));
                                        },
                                        [t],
                                    );
                                return (e) => n(e);
                            })(Ge),
                            _ = (0, u.useCallback)(() => {
                                a(t),
                                    st.$.playClick(),
                                    l({
                                        item: Ve.SkillLevelTab,
                                        action: Ue.Click,
                                        parentScreen: Ze.SetupView,
                                        info: String(i),
                                    });
                            }, [t, i, a, l]),
                            d = (0, u.useCallback)(() => st.$.playHighlight(), []);
                        return o().createElement(
                            'div',
                            { className: c()(xi.base, e && xi.base__active, s), onClick: _, onMouseEnter: d },
                            o().createElement('div', { className: xi.label }, r),
                            n !== Ti.None && o().createElement('div', { className: c()(xi.arrow, xi[`arrow__${n}`]) }),
                        );
                    }),
                    Ni = {
                        base: 'SkillParam_base_66',
                        valueWrapper: 'SkillParam_valueWrapper_96',
                        diff: 'SkillParam_diff_06',
                        diffValue: 'SkillParam_diffValue_9c',
                        labelWrapper: 'SkillParam_labelWrapper_60',
                        label: 'SkillParam_label_66',
                        progress: 'SkillParam_progress_2f',
                        progressDot: 'SkillParam_progressDot_28',
                        progressDot__end: 'SkillParam_progressDot__end_aa',
                        progressValue: 'SkillParam_progressValue_6d',
                        progressValueDot: 'SkillParam_progressValueDot_52',
                        progressDelta: 'SkillParam_progressDelta_1d',
                    },
                    Ri = (0, u.memo)(({ currentParam: e, firstParam: t, lastParam: n }) => {
                        const a = Number(e.value),
                            s = Number(t.value),
                            i = Number(n.value),
                            r = (0, u.useMemo)(() => s < i, [s, i]),
                            l = (0, u.useMemo)(() => {
                                if (!isNaN(a) && !isNaN(s)) {
                                    const e = a - s;
                                    return 0 === e ? null : e;
                                }
                                return null;
                            }, [s, a]),
                            _ = (0, u.useMemo)(() => {
                                if (!l) return {};
                                const t = (0, O.uF)(e.valueTemplate, {
                                    sign: l < 0 ? '-' : '+',
                                    value: _e.Z5.getRealFormat(Math.abs(l), _e.Gr.WO_ZERO_DIGITS),
                                });
                                return { diff: o().createElement('div', { className: Ni.diffValue }, t) };
                            }, [l, e.valueTemplate]),
                            d = (0, u.useMemo)(() => {
                                const e = !isNaN(s),
                                    n = e && s < 0 ? '-' : '';
                                return {
                                    sign: t.sign || n,
                                    value: e ? _e.Z5.getNumberFormat(Math.abs(s), _e.B3.GOLD) : t.value,
                                };
                            }, [t, s]),
                            m = (0, u.useMemo)(() => (r ? { width: ((100 * s) / i).toString() + '%' } : {}), [r, s, i]),
                            p = (0, u.useMemo)(
                                () => (r ? { width: ((100 * (a - s)) / i).toString() + '%' } : {}),
                                [r, s, a, i],
                            );
                        return o().createElement(
                            'div',
                            { className: Ni.base },
                            o().createElement(
                                'div',
                                { className: Ni.valueWrapper },
                                l &&
                                    o().createElement(ei, {
                                        binding: _,
                                        text: R.strings.tank_setup.abilities.details.paramDiff(),
                                        classMix: Ni.diff,
                                        alignContent: ws.FlexEnd,
                                    }),
                                o().createElement(ei, { text: e.valueTemplate, binding: d, classMix: Ni.value }),
                            ),
                            o().createElement(
                                'div',
                                { className: Ni.labelWrapper },
                                o().createElement('div', { className: Ni.label }, t.name),
                            ),
                            r &&
                                o().createElement(
                                    'div',
                                    { className: Ni.progress },
                                    o().createElement('div', { className: Ni.progressDot }),
                                    o().createElement(
                                        'div',
                                        { className: Ni.progressValue, style: m },
                                        o().createElement('div', { className: Ni.progressValueDot }),
                                    ),
                                    o().createElement('div', { className: Ni.progressDelta, style: p }),
                                    o().createElement('div', { className: c()(Ni.progressDot, Ni.progressDot__end) }),
                                ),
                        );
                    }),
                    Li = 'Levels_base_a9',
                    Oi = 'Levels_tabsWrapper_a0',
                    Mi = 'Levels_tabsBorder_cf',
                    Pi = 'Levels_tabsBorder__top_8f',
                    $i = 'Levels_tabsBorder__bottom_82',
                    Hi = 'Levels_tabsLabel_60',
                    zi = 'Levels_tabs_8f',
                    Wi = 'Levels_tab_c3',
                    ji = 'Levels_caret_7e',
                    Gi = 'Levels_params_d6',
                    Zi = 'Levels_infoIcon_68',
                    Vi = ({ onLevelChanged: e, selectedLevel: t, levelInfos: n }) => {
                        const a = n.length - 1,
                            s = n[0].value.params,
                            i = n[n.length - 1].value.params,
                            r = n[t].value,
                            l = (0, u.useMemo)(() => ({ left: 56 * t - 12 + 'rem' }), [t]),
                            _ = (0, u.useCallback)((t) => e(t), [e]);
                        return o().createElement(
                            'div',
                            { className: Li },
                            o().createElement(
                                'div',
                                { className: Oi },
                                o().createElement('div', { className: c()(Mi, Pi) }),
                                o().createElement('div', { className: c()(Mi, $i) }),
                                o().createElement(ki, { item: Ve.AbilityLevelsTooltip, className: Zi }),
                                o().createElement(
                                    'div',
                                    { className: Hi },
                                    R.strings.tank_setup.abilities.details.level(),
                                ),
                                o().createElement(
                                    'div',
                                    { className: zi },
                                    n.map(({ value: e }, n) => {
                                        const s = n < t ? Ti.Active : Ti.Default;
                                        return o().createElement(Ii, {
                                            key: e.id,
                                            index: n,
                                            isActive: n <= t,
                                            arrowType: n < a ? s : Ti.None,
                                            onClick: _,
                                            classMix: Wi,
                                        });
                                    }),
                                    o().createElement('div', { className: ji, style: l }),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: Gi },
                                r.params.map(({ value: e }, t) =>
                                    o().createElement(Ri, {
                                        key: e.id,
                                        firstParam: s[t].value,
                                        lastParam: i[t].value,
                                        currentParam: e,
                                    }),
                                ),
                            ),
                        );
                    },
                    Ui = (0, u.memo)(function ({ className: e }) {
                        const t = is(),
                            n = ve('model.vehicleInfo'),
                            a = ve(`${Ca}`).setCurrentSlotDetailsLevel,
                            s = ve(`${Ca}.details`),
                            i = s.name,
                            r = s.category,
                            l = s.selectedLevel,
                            _ = s.description,
                            d = s.levelInfos,
                            m = s.isActivated,
                            p = m
                                ? R.strings.tank_setup.abilities.details.status.unlocked()
                                : R.strings.tank_setup.abilities.details.status.locked(),
                            b = m
                                ? R.strings.tank_setup.abilities.details.description.unlocked()
                                : R.strings.tank_setup.abilities.details.description.locked(),
                            g = (0, u.useCallback)((e) => a({ level: e }), [a]);
                        return (
                            (0, u.useEffect)(() => (0, k.v)(() => (0, k.v)(t.recalculateContent)), [t]),
                            o().createElement(
                                'div',
                                { className: c()(ci, e) },
                                o().createElement(
                                    Ds.Vertical.Area.Default,
                                    { api: t },
                                    o().createElement(
                                        'div',
                                        { className: _i },
                                        o().createElement('div', { className: di }, o().createElement(li, n)),
                                        o().createElement(
                                            'div',
                                            { className: mi },
                                            o().createElement('div', { className: pi }, i),
                                            o().createElement(yi, { category: r, className: bi }),
                                            o().createElement('div', { className: gi }, _),
                                        ),
                                        o().createElement(Vi, { onLevelChanged: g, selectedLevel: l, levelInfos: d }),
                                        o().createElement('div', { className: c()(Ei, m && hi) }, p),
                                        o().createElement(
                                            'div',
                                            { className: vi },
                                            o().createElement('div', { className: Ci }),
                                            o().createElement(ei, { text: b, classMix: fi }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    qi = 'BattleAbilitiesSetup_aside_bd';
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                const Xi = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    Ki = (e) => {
                        const t = (0, u.useState)(Xi(e ? e.current : null)),
                            n = t[0],
                            a = t[1];
                        return (
                            (0, u.useEffect)(() => {
                                let t = 0;
                                const n = () => {
                                    t = requestAnimationFrame(() => {
                                        Xi(e ? e.current : null) ? a(!0) : n();
                                    });
                                };
                                return (
                                    n(),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, u.useEffect)(() => () => a(!1), [e]),
                            n
                        );
                    },
                    Yi = 'ScrollableCards_base_e0',
                    Ji = 'ScrollableCards_scroll_4b',
                    Qi = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const s = (0, u.useState)(!1),
                            i = s[0],
                            r = s[1],
                            l = (0, u.useRef)(null),
                            c = (0, u.useRef)(null),
                            _ = (0, u.useRef)(!1),
                            d = (0, u.useRef)(''),
                            m = Ki(l),
                            p = is();
                        (0, u.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const b = (0, T.z)(() => {
                                _.current && r(!0), p.events.off('rest', b);
                            }),
                            g = (0, u.useCallback)(() => {
                                _.current && r(!1);
                            }, []),
                            E = (0, u.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const n = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    p.events.on('rest', b), p.applyScroll(n);
                                }
                            }, [b, p]);
                        (0, u.useEffect)(() => {
                            (0, k.v)(() => {
                                m &&
                                    (d.current === n
                                        ? E()
                                        : ((d.current = n),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              E(), _.current || (_.current = !0);
                                          })));
                            });
                        }, [m, n, E, t]),
                            (0, u.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, a]);
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: i,
                            onFinalAnimationDone: g,
                        };
                        return o().createElement(
                            'div',
                            { className: Yi },
                            o().createElement(
                                'div',
                                { className: Ji, ref: l },
                                o().createElement(Ds.Vertical.Default, { key: n, api: p }, (0, u.cloneElement)(e, h)),
                            ),
                        );
                    };
                var er = n(8613);
                Date.now(), er.Ew.getRegionalDateTime, er.Ew.getFormattedDateTime;
                const tr = (e, t) => {
                        const n = (0, u.useRef)();
                        return (
                            (0, u.useEffect)(() => {
                                (t && !t(e)) || (n.current = e);
                            }, [t, e]),
                            n.current
                        );
                    },
                    nr = (_e.Sw.instance, tr);
                var ar = n(4888),
                    sr = n(1363);
                const ir = [
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
                    'onShow',
                    'onHide',
                ];
                function rr(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const ur = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _e.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    or = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            s = e.onMouseEnter,
                            i = e.onMouseLeave,
                            r = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            g = void 0 === b || b,
                            E = e.onShow,
                            h = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, ir);
                        const f = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            C = (0, u.useMemo)(() => (0, oe.F)(), []).resId,
                            A = (0, u.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (ur(n, p, { isMouseEvent: !0, on: !0, arguments: rr(a) }, C),
                                    E && E(),
                                    (f.current.isVisible = !0));
                            }, [n, p, a, C, E]),
                            D = (0, u.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        ur(n, p, { on: !1 }, C),
                                        f.current.isVisible && h && h(),
                                        (f.current.isVisible = !1);
                                }
                            }, [n, p, C, h]),
                            S = (0, u.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(f.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        (0, u.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        window.removeEventListener('mouseleave', D), D();
                                    }
                                ),
                                [D],
                            );
                        return g
                            ? (0, u.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((F = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(A, c ? 100 : 400)),
                                                      s && s(e),
                                                      F && F(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              D(), i && i(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !d && D(), o && o(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !d && D(), r && r(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
                        var F;
                    },
                    lr = ['children'];
                function cr() {
                    return (
                        (cr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        cr.apply(null, arguments)
                    );
                }
                const _r = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, lr);
                    return o().createElement(
                        or,
                        cr(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
                var dr = n(5282);
                const mr = {
                        base: 'BaseCard_base_17',
                        content: 'BaseCard_content_42',
                        content__large: 'BaseCard_content__large_be',
                        content__huge: 'BaseCard_content__huge_f3',
                        content__installed: 'BaseCard_content__installed_1b',
                        content__current: 'BaseCard_content__current_89',
                        content__nonclickable: 'BaseCard_content__nonclickable_75',
                        content__disabled: 'BaseCard_content__disabled_eb',
                        image: 'BaseCard_image_53',
                        types: 'BaseCard_types_09',
                        highlight: 'BaseCard_highlight_73',
                        overlay: 'BaseCard_overlay_ba',
                        highlight__battleBooster: 'BaseCard_highlight__battleBooster_49',
                        overlay__battleBooster: 'BaseCard_overlay__battleBooster_85',
                        overlay__battleBoosterReplace: 'BaseCard_overlay__battleBoosterReplace_53',
                        overlay__equipmentPlus: 'BaseCard_overlay__equipmentPlus_62',
                        overlay__builtInEquipment: 'BaseCard_overlay__builtInEquipment_68',
                        overlay__equipmentTrophyBasic: 'BaseCard_overlay__equipmentTrophyBasic_ae',
                        overlay__equipmentTrophyUpgraded: 'BaseCard_overlay__equipmentTrophyUpgraded_1b',
                        overlay__equipmentModernized: 'BaseCard_overlay__equipmentModernized_97',
                        specialization: 'BaseCard_specialization_62',
                        name: 'BaseCard_name_c3',
                        details: 'BaseCard_details_fc',
                        options: 'BaseCard_options_15',
                        actions: 'BaseCard_actions_95',
                        hover: 'BaseCard_hover_cf',
                        disabled: 'BaseCard_disabled_c8',
                        locked: 'BaseCard_locked_13',
                        category: 'BaseCard_category_5e',
                        category__tiny: 'BaseCard_category__tiny_03',
                        category__small: 'BaseCard_category__small_96',
                        category__medium: 'BaseCard_category__medium_11',
                        category__large: 'BaseCard_category__large_c1',
                        category__huge: 'BaseCard_category__huge_71',
                    },
                    pr = 'DisabledAbilities_base_1d',
                    br = 'DisabledAbilities_glow_75',
                    gr = 'DisabledAbilities_line_54',
                    Er = ({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: c()(pr, e) },
                            o().createElement('div', { className: br }),
                            o().createElement('div', { className: gr }),
                        );
                let hr;
                !(function (e) {
                    (e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.TooHeavy = 'too_heavy'),
                        (e.UselessBattleBooster = 'useless_battle_booster'),
                        (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster');
                })(hr || (hr = {}));
                const vr = 'Warning_base_4c',
                    fr = 'Warning_glow_79',
                    Cr = 'Warning_line_df',
                    Ar = 'Warning_icon_24',
                    Dr = (e) => Object.values(hr).includes(e),
                    Sr = ({ parentId: e, reason: t, isCritical: n }) => {
                        const a = (0, u.useMemo)(() => ({ reason: t, isCritical: n }), [t, n]);
                        return o().createElement(
                            'div',
                            { id: e, className: vr },
                            o().createElement('div', { className: fr }),
                            o().createElement('div', { className: Cr }),
                            o().createElement(
                                nt.u,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: a,
                                    isEnabled: Dr(t),
                                },
                                o().createElement('div', { className: Ar }),
                            ),
                        );
                    },
                    Fr = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: n,
                        contextMenuArgs: a,
                        imageSource: s,
                        overlayType: i,
                        highlightType: r,
                        isModernized: l,
                        level: _,
                        isDisabled: d,
                        isCurrent: m,
                        isActive: p,
                        isLocked: b,
                        isAbilitiesCard: g = !1,
                        isClickable: E = !0,
                        details: h,
                        options: v,
                        actions: f,
                        specializations: C,
                        extraImages: A,
                        onSlotClick: D,
                        shouldHandleMouseOver: S,
                        category: F,
                        onTooltipShow: y,
                        onTooltipHide: w,
                        lockReason: B,
                    }) => {
                        const k = (0, Ea.GS)(),
                            x = (0, u.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            T = x[0],
                            I = x[1],
                            N = (0, u.useState)(!1),
                            L = N[0],
                            O = N[1],
                            M = (0, u.useState)(!1),
                            P = M[0],
                            $ = M[1],
                            H = (0, u.useCallback)(() => {
                                !T.isActionsHovered && st.$.playHighlight(),
                                    I({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    S && O(!0);
                            }, [T.isActionsHovered, S]),
                            z = (0, u.useCallback)(() => {
                                S && O(!1);
                            }, [S]),
                            W = (0, u.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            j = (0, u.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            G = E && (!d || g),
                            Z = (0, u.useCallback)(() => {
                                G && D && (st.$.playClick(), D());
                            }, [D, G]),
                            V = T.isBaseHovered || T.isActionsHovered,
                            U = (0, u.useMemo)(() => {
                                let e = o().createElement(
                                    'div',
                                    {
                                        onMouseEnter: H,
                                        onMouseLeave: j,
                                        className: mr.hover,
                                        onMouseDown: (e) => {
                                            0 === e.nativeEvent.button && ($(!0), Z());
                                        },
                                        onMouseUp: (e) => {
                                            0 === e.nativeEvent.button && $(!1);
                                        },
                                    },
                                    d && g && o().createElement(Er, { className: mr.locked }),
                                );
                                return (
                                    n && (e = o().createElement(_r, { args: n, onShow: y, onHide: w }, e)),
                                    a && (e = o().createElement(Vt, { args: a }, e)),
                                    e
                                );
                            }, [d, g, H, j, Z, n, a, y, w, P]),
                            q = (0, u.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            X =
                                k === Ea.cJ.Large || k === Ea.cJ.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            K = (0, u.useMemo)(() => {
                                let e;
                                return (
                                    i && (e = l ? X.$dyn(`${i}_${_}_overlay`) : X.$dyn(`${i}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [X, i, l, _]),
                            Y = (0, u.useMemo)(() => {
                                let e;
                                return r && (e = X.$dyn(`${r}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [X, r]),
                            J = (0, u.useMemo)(() => {
                                const e =
                                        (k === Ea.cJ.Large || k === Ea.cJ.Huge ? Ea.cJ.Large : Ea.cJ.Medium) + '_' + F,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [F, k]);
                        return o().createElement(
                            'div',
                            { className: mr.base },
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(
                                        mr.content,
                                        mr[`content__${k}`],
                                        V && E && !d && mr.content__hovered,
                                        !V && mr.content__out,
                                        p && mr.content__installed,
                                        m && mr.content__current,
                                        d && mr.content__disabled,
                                        !G && mr.content__nonclickable,
                                    ),
                                    onMouseLeave: z,
                                },
                                Y &&
                                    o().createElement(
                                        'div',
                                        { className: mr.types },
                                        o().createElement('div', {
                                            className: c()(mr.highlight, mr[`highlight__${r}`]),
                                            style: Y,
                                        }),
                                    ),
                                o().createElement('div', { className: mr.image, style: q }, A),
                                d && o().createElement('div', { className: mr.disabled }),
                                J &&
                                    o().createElement('span', {
                                        className: c()(mr.category, mr[`category__${k}`]),
                                        style: J,
                                    }),
                                K &&
                                    o().createElement(
                                        'div',
                                        { className: mr.types },
                                        o().createElement('div', {
                                            className: c()(mr.overlay, mr[`overlay__${i}`]),
                                            style: K,
                                        }),
                                    ),
                                C && o().createElement('div', { className: mr.specialization }, C),
                                o().createElement(
                                    'div',
                                    { className: c()(mr.name, d && mr.name__disabled) },
                                    o().createElement(dr.n, {
                                        key: t,
                                        mediaSize: k,
                                        linesCount: 3,
                                        blocks: (0, dr.D)(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                h && o().createElement('div', { className: mr.details }, h),
                                o().createElement('div', { className: c()(mr.options, d && mr.options__disabled) }, v),
                                U,
                                o().createElement(
                                    'div',
                                    { onMouseEnter: W, onMouseLeave: j, className: mr.actions },
                                    S && f
                                        ? (0, u.cloneElement)(f, Object.assign({}, f.props, { isMouseOverCard: L }))
                                        : f,
                                ),
                            ),
                            b &&
                                o().createElement(
                                    'div',
                                    { className: mr.locked },
                                    o().createElement(Sr, { reason: B, isCritical: d, parentId: e }),
                                ),
                        );
                    };
                var yr = n(6391),
                    wr = n(8401);
                const Br = 'Availability_base_51',
                    kr = () => o().createElement('div', { className: Br }),
                    xr = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Tr = o().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: s = !0 }) => {
                            let i = null;
                            return (
                                (i = n
                                    ? o().createElement(kr, null)
                                    : e || (a && 0 === e)
                                      ? o().createElement(yr.Y, { location: 'storage', count: e })
                                      : t && o().createElement(wr.t, t)),
                                o().createElement(
                                    'div',
                                    {
                                        className: c()(
                                            xr.base,
                                            xr['base__' + (s ? 'shown' : 'hidden')],
                                            (n || e || (a && 0 === e)) && xr.base__visually,
                                        ),
                                    },
                                    i,
                                )
                            );
                        },
                    ),
                    Ir = {
                        base: 'AbilitiesCard_base_7c',
                        bonuses: 'AbilitiesCard_bonuses_d2',
                        unit: 'AbilitiesCard_unit_38',
                        unit__special: 'AbilitiesCard_unit__special_31',
                        points: 'AbilitiesCard_points_79',
                    };
                var Nr = n(8750);
                const Rr = {
                        base: 'AbilityLevel_base_63',
                        base__large: 'AbilityLevel_base__large_66',
                        base__huge: 'AbilityLevel_base__huge_3c',
                    },
                    Lr = ({ level: e }) => {
                        const t = (0, Ea.GS)();
                        if (!e) return null;
                        const n = c()(Rr.base, t && Rr[`base__${t}`]);
                        return o().createElement(
                            'div',
                            { className: n },
                            o().createElement(Nr.a, {
                                type: Nr.F.MEDIUM,
                                imageSource: R.images.gui.maps.icons.levels.$dyn(`tank_level_big_${e}`),
                            }),
                        );
                    },
                    Or = (0, u.memo)(
                        ({
                            name: e,
                            installedSlotId: t,
                            targetSlotId: n,
                            isCurrent: a,
                            imageName: s,
                            onSlotAction: i,
                            intCD: r,
                            level: l,
                            description: _,
                            overlayType: d,
                            isDisabled: m,
                            category: p,
                            isMounted: b,
                            cost: g,
                        }) => {
                            const E = (0, Ea.GS)(),
                                h = t > -1,
                                v = `${r}-ability`,
                                f = (0, u.useMemo)(() => ({ intCD: r, slotType: B.YN, fieldType: 0 }), [r]),
                                C = (0, u.useCallback)(
                                    (e) => {
                                        i({ actionType: e, intCD: r, currentSlotId: n, isAutoSelect: !1 });
                                    },
                                    [i, r, n],
                                ),
                                A = (0, u.useCallback)(() => {
                                    C(ar.eC);
                                }, [C]),
                                D = (0, u.useContext)(qu),
                                S = (0, u.useMemo)(() => {
                                    const e = c()(Ir.bonuses, E && Ir[`base__${E}`]),
                                        t = D >= g ? ya.Brown : ya.Red;
                                    return o().createElement(
                                        'div',
                                        { className: Ir.base },
                                        o().createElement(sr._, {
                                            parentId: v,
                                            mediaSize: E,
                                            classMix: e,
                                            classColorMix: Ir.unit,
                                            text: _,
                                            linesShown: 3,
                                        }),
                                        m &&
                                            o().createElement(wa, {
                                                value: g,
                                                theme: t,
                                                size: Fa.Small,
                                                className: Ir.points,
                                            }),
                                    );
                                }, [E, _, v, m, g, D]),
                                F =
                                    ((0, u.useMemo)(() => o().createElement(Lr, { level: l }), [l]),
                                    (0, u.useMemo)(
                                        () => R.images.gui.maps.icons.epicBattles.skills.c_176x176.$dyn(s),
                                        [s],
                                    ));
                            return o().createElement(Fr, {
                                parentId: v,
                                name: e,
                                tooltipArgs: f,
                                imageSource: F,
                                isCurrent: a,
                                isActive: h,
                                details: S,
                                isDisabled: m && D < g,
                                isAbilitiesCard: !0,
                                category: p,
                                extraImages: !1,
                                overlayType: d,
                                onSlotClick: A,
                                options: o().createElement(Tr, { show: b, isMounted: b }),
                            });
                        },
                    ),
                    Mr = {
                        base: 'AbilitiesList_base_bc',
                        base__large: 'AbilitiesList_base__large_a9',
                        base__huge: 'AbilitiesList_base__huge_7f',
                        base__disabled: 'AbilitiesList_base__disabled_ad',
                        card: 'AbilitiesList_card_e0',
                        card__large: 'AbilitiesList_card__large_e2',
                        card__huge: 'AbilitiesList_card__huge_ad',
                    };
                function Pr() {
                    return (
                        (Pr = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Pr.apply(null, arguments)
                    );
                }
                const $r = ({ currentCardRef: e, selectedSlot: t, isDisabled: n }) => {
                        const a = ve(Ca),
                            s = a.categoriesOrder,
                            i = a.onSlotAction,
                            r = a.slots,
                            l = ve('model.ammunitionPanel'),
                            _ = l.onSectionSelect,
                            d = l.selectedSection,
                            m = (0, Ea.GS)(),
                            p = s.map(({ value: e }) => e),
                            b = r.map(({ value: e }) => e),
                            g = (0, u.useMemo)(() => {
                                if (m === Ea.cJ.Tiny)
                                    return b.sort(
                                        (e, t) => p.indexOf(e.category) - p.indexOf(t.category) || e.cost - t.cost,
                                    );
                                const e = {};
                                b.map((t) => {
                                    t.category in e || (e[t.category] = []), e[t.category].push(t);
                                }),
                                    Object.keys(e).map((t) => {
                                        e[t].sort((e, t) => e.cost - t.cost);
                                    });
                                const t = [];
                                do {
                                    p.map((n) => {
                                        const a = e[n].shift();
                                        a && t.push(a);
                                    });
                                } while (t.length < b.length);
                                return t;
                            }, [b, p, m]),
                            E = (0, u.useCallback)(
                                (e) => {
                                    _({ selectedSlot: e.currentSlotId, selectedSection: d }), i(e);
                                },
                                [_, i, d],
                            ),
                            h = g.map((n) => {
                                if (!n) return null;
                                const a = n.installedSlotId,
                                    s = a > -1 && t === a;
                                return o().createElement(
                                    'div',
                                    { key: n.intCD, ref: s ? e : null, className: c()(Mr.card, m && Mr[`card__${m}`]) },
                                    o().createElement(Or, Pr({}, n, { isCurrent: s, onSlotAction: E })),
                                );
                            }),
                            v = c()(Mr.base, m && Mr[`base__${m}`], n && Mr.base__disabled);
                        return o().createElement('div', { className: v }, h);
                    },
                    Hr = 'BattleAbilitiesNoSelected_base_06',
                    zr = 'BattleAbilitiesNoSelected_noSelectedImage_85',
                    Wr = 'BattleAbilitiesNoSelected_noSelectedImage__small_d2',
                    jr = 'BattleAbilitiesNoSelected_title_20',
                    Gr = 'BattleAbilitiesNoSelected_title__small_65',
                    Zr = 'BattleAbilitiesNoSelected_subTitle_aa',
                    Vr = 'BattleAbilitiesNoSelected_button_bf',
                    Ur = R.strings.tank_setup.abilities.noSelected,
                    qr = () => {
                        const e = (0, Ea.GS)(),
                            t = ve(Ca, he.None).showInfoPage,
                            n = (0, u.useMemo)(() => e === Ea.cJ.Small || e === Ea.cJ.Tiny, [e]),
                            a = (0, u.useMemo)(() => (e === Ea.cJ.Tiny ? Da.qE.small : Da.qE.medium), [e]),
                            s = (0, u.useCallback)(() => t(), [t]),
                            i = c()(zr, n && Wr),
                            r = c()(jr, n && Gr);
                        return o().createElement(
                            'div',
                            { className: Hr, id: 'no-abilities-show-button' },
                            o().createElement('div', { className: i }),
                            o().createElement('div', { className: r }, Ur.title()),
                            o().createElement('div', { className: Zr }, Ur.subTitle()),
                            o().createElement(Da.u5, { size: a, mixClass: Vr, onClick: s }, Ur.toReserves()),
                        );
                    },
                    Xr = 'Content_base_d8',
                    Kr = o().memo(function ({ isLocked: e, selectedSlot: t }) {
                        return o().createElement(
                            'div',
                            { className: Xr },
                            e
                                ? o().createElement(
                                      Qi,
                                      { selectedSlotId: t },
                                      o().createElement($r, { selectedSlot: t }),
                                  )
                                : o().createElement(qr, null),
                        );
                    }),
                    Yr = 'Tabs_base_d9',
                    Jr = 'Tabs_base__vertical_c0',
                    Qr = 'Tabs_list_0a',
                    eu = 'Tabs_list__centered_dc',
                    tu = 'Tabs_wrapper_2d',
                    nu = 'Tabs_wrapper__centered_d8',
                    au = 'Tabs_wrapper__vertical_a5';
                function su() {
                    return (
                        (su = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        su.apply(null, arguments)
                    );
                }
                const iu = 'tabs-role';
                var ru;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(ru || (ru = {}));
                class uu extends u.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[ru.TAB]);
                                return t && t.props[ru.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = o().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[iu] === ru.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(o().Children.toArray(e[t].props.children));
                        (e[t] = o().cloneElement(e[t], {
                            children: o()
                                .Children.toArray(e[t].props.children)
                                .map((e) => o().cloneElement(e, { key: e.props[ru.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = o().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((i = this.tabsProps),
                                (r = a),
                                !(
                                    Object.keys(i).length === Object.keys(r).length &&
                                    Object.keys(i).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && i[e] === r[e],
                                    )
                                ));
                        var i, r;
                        const u = c()(
                                tu,
                                n.props.className,
                                this.props.isTabsCentered && nu,
                                this.props.isVerticalTabs && au,
                            ),
                            l = c()(Qr, this.props.isTabsCentered && eu);
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[iu] === ru.CONTENT)
                                        return e.props[ru.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                s = t[0].props.children,
                                i = s.map((e, t) =>
                                    o().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[ru.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][ru.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && (0, st.G)(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            (0, st.G)(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        o().createElement(
                                            'div',
                                            { className: l, key: ru.LIST },
                                            o().createElement('div', su({}, n.props, { className: u }), i),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = c()(Yr, this.props.isVerticalTabs && Jr);
                        return o().createElement('div', { className: t }, e);
                    }
                }
                uu.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const ou = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function lu() {
                    return (
                        (lu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        lu.apply(null, arguments)
                    );
                }
                const cu = (e) => {
                    let t = e.children,
                        n = e.className,
                        a = e.activeKey,
                        s = e.onClickSound,
                        i = e.onMouseEnterSound,
                        r = e.isTabsCentered,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, ou);
                    return o().createElement(
                        'div',
                        lu({ className: n }, u),
                        o().createElement(
                            uu,
                            { activeKey: a, onClickSound: s, onMouseEnterSound: i, isTabsCentered: r },
                            t,
                        ),
                    );
                };
                var _u = n(9480);
                const du = ({ children: e, component: t, props: n = {} }) =>
                        t ? o().createElement(t, n, e) : e || null,
                    mu = 'Tab_base_dd',
                    pu = 'Tab_base__first_4a',
                    bu = 'Tab_base__last_96',
                    gu = 'Tab_base__medium_ec',
                    Eu = 'Tab_base__active_5d',
                    hu = 'Tab_divider_ca',
                    vu = 'Tab_divider__show_62',
                    fu = 'Tab_state_6c',
                    Cu = 'Tab_stateHighlight_1e',
                    Au = 'Tab_stateBorder_64',
                    Du = 'Tab_stateBorder__positionLeft_e7',
                    Su = 'Tab_stateBorder__positionRight_db',
                    Fu = 'Tab_counter_e1',
                    yu = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function wu() {
                    return (
                        (wu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        wu.apply(null, arguments)
                    );
                }
                const Bu = (0, u.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            s = void 0 !== a && a,
                            i = e.isLast,
                            r = void 0 !== i && i,
                            u = e.isMedium,
                            l = void 0 !== u && u,
                            _ = e.isNotified,
                            d = void 0 !== _ && _,
                            m = e.children,
                            p = void 0 === m ? 'Tab' : m,
                            b = e.wrapper,
                            g = void 0 === b ? {} : b,
                            E = e.counter,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, yu);
                        return o().createElement(
                            du,
                            g,
                            o().createElement(
                                'div',
                                wu({ className: c()(mu, { [Eu]: n }, { [pu]: s }, { [bu]: r }, { [gu]: l }) }, h),
                                o().createElement(
                                    'span',
                                    { className: fu },
                                    o().createElement('span', { className: Cu }),
                                    o().createElement('span', { className: c()(Au, Du) }),
                                    o().createElement('span', { className: c()(Au, Su) }),
                                ),
                                p,
                                !r && !n && o().createElement('span', { className: c()(hu, vu) }),
                                (Boolean(E) || d) &&
                                    o().createElement(
                                        'div',
                                        { className: Fu },
                                        o().createElement(re, { value: E, isEmpty: d }),
                                    ),
                            ),
                        );
                    }),
                    ku = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    xu = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function Tu() {
                    return (
                        (Tu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Tu.apply(null, arguments)
                    );
                }
                const Iu = (e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.handleTabChanged,
                        s = e.isTooltipEnabled,
                        i = void 0 === s || s,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, xu);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, u.useCallback)(() => {
                            st.$.playClick(), a({ name: t });
                        }, [a, t]),
                        _ = (0, u.useMemo)(() => ({ name: t }), [t]),
                        d = M(['tab'], ku);
                    return o().createElement(
                        nt.u,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: i,
                        },
                        o().createElement(
                            'div',
                            null,
                            o().createElement(
                                Bu,
                                Tu({}, r, { isNotified: Boolean(n), onClick: c }),
                                o().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function Nu() {
                    return (
                        (Nu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Nu.apply(null, arguments)
                    );
                }
                const Ru = ({ tabs: e, selectedTabName: t, handleTabChanged: n, isTooltipEnabled: a = !0 }) => {
                        const s = De('ModernizedSetupTabHintZone', Ce);
                        return (
                            (0, u.useEffect)(() => {
                                s && s.runTrigger(!0);
                            }, [s]),
                            o().createElement(
                                cu,
                                { key: t, activeKey: t },
                                o().createElement(
                                    'div',
                                    { 'tabs-role': ru.LIST },
                                    _u.UI(e, (e) =>
                                        o().createElement(
                                            Iu,
                                            Nu(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: n,
                                                    'tabs-role': ru.TAB,
                                                    'tab-key': e.name,
                                                    isTooltipEnabled: a,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Lu = {
                        base: 'Header_base_fb',
                        base__small: 'Header_base__small_d1',
                        base__medium: 'Header_base__medium_66',
                        base__large: 'Header_base__large_63',
                        base__huge: 'Header_base__huge_45',
                        title: 'Header_title_64',
                        title__small: 'Header_title__small_fc',
                        title__tiny: 'Header_title__tiny_8e',
                        tabs: 'Header_tabs_73',
                        tabs__small: 'Header_tabs__small_5f',
                        tabs__tiny: 'Header_tabs__tiny_35',
                    },
                    Ou = ({ title: e, children: t, tabProps: n }) => {
                        const a = (0, Ea.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(Lu.base, a && Lu[`base__${a}`]) },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('div', { className: c()(Lu.title, a && Lu[`title__${a}`]) }, e),
                                n &&
                                    o().createElement(
                                        'div',
                                        { className: c()(Lu.tabs, a && Lu[`tabs__${a}`]) },
                                        o().createElement(Ru, n),
                                    ),
                            ),
                            t,
                        );
                    };
                var Mu = n(8089);
                const Pu = {
                    base: 'InfoButton_base_62',
                    base__standalone: 'InfoButton_base__standalone_e2',
                    base__onlyIcon: 'InfoButton_base__onlyIcon_bb',
                    hidden: 'InfoButton_hidden_7e',
                };
                let $u;
                !(function (e) {
                    (e.Standalone = 'standalone'), (e.OnlyIcon = 'onlyIcon');
                })($u || ($u = {}));
                const Hu = o().memo(function ({ id: e, theme: t, className: n }) {
                        const a = ve(Ca, he.None).showInfoPage;
                        return o().createElement(
                            'div',
                            { id: e, className: c()(Pu.base, Pu[`base__${t}`], n) },
                            o().createElement(Mu.A, {
                                caption:
                                    t === $u.Standalone ? R.strings.fl_common.ammunitionSetup.btn.info.label() : '',
                                type: 'info',
                                side: 'left',
                                onClick: () => a(),
                                classNames: { caption: t === $u.OnlyIcon ? Pu.hidden : '' },
                            }),
                        );
                    }),
                    zu = 'Header_base_aa',
                    Wu = 'Header_points_d5',
                    ju = 'Header_content_2c',
                    Gu = 'Header_textWrapper_63',
                    Zu = 'Header_text_dc',
                    Vu = 'Header_infoButton_5e',
                    Uu = o().memo(function () {
                        const e = E().mediaWidth,
                            t = (0, u.useContext)(qu),
                            n = (0, u.useMemo)(
                                () => ({
                                    points: o().createElement(wa, {
                                        theme: ya.Brown,
                                        size: Fa.Normal,
                                        value: t,
                                        className: Wu,
                                    }),
                                }),
                                [t],
                            ),
                            a = tt(Ve.SkillPointsTooltip, Ze.SetupView),
                            s = a[0],
                            i = a[1];
                        return o().createElement(
                            'div',
                            { className: zu },
                            o().createElement(
                                Ou,
                                { title: R.strings.tank_setup.section.battleAbilities() },
                                o().createElement(
                                    'div',
                                    { className: ju },
                                    e <= m.j.medium.width &&
                                        o().createElement(Hu, {
                                            id: 'scenarios_btn_small',
                                            theme: $u.OnlyIcon,
                                            className: Vu,
                                        }),
                                    o().createElement(
                                        q.i,
                                        {
                                            header: R.strings.tank_setup.tooltips.abilities.points.header(),
                                            body: R.strings.tank_setup.tooltips.abilities.points.body(),
                                            isEnabled: !0,
                                            onMouseEnter: s,
                                            onMouseLeave: i,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Gu },
                                            o().createElement(ei, {
                                                text: R.strings.tank_setup.abilities.pointsAmount(),
                                                binding: n,
                                                classMix: Zu,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    qu = o().createContext(0),
                    Xu = () => {
                        const e = ve(Ca),
                            t = e.isLocked,
                            n = e.pointsAmount,
                            a = ve('model.ammunitionPanel').selectedSlot;
                        return o().createElement(
                            qu.Provider,
                            { value: n },
                            o().createElement(Ea.Ar, {
                                header: o().createElement(Uu, null),
                                content: o().createElement(Kr, { isLocked: t, selectedSlot: a }),
                                aside: o().createElement(Ui, { className: qi }),
                                footer: o().createElement(Ia, null),
                            }),
                        );
                    };
                var Ku = n(8175),
                    Yu = n(3755),
                    Ju = n(8774);
                const Qu = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    eo = (0, u.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) =>
                        o().createElement(
                            'div',
                            { className: c()(Qu.base, Qu['base__' + (t.length ? 'shown' : 'hidden')]) },
                            o().createElement(Ju.a, {
                                parentId: `${e}-${ar.GV}`,
                                actionType: ar.GV,
                                onClick: n,
                                show: t.includes(ar.GV),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            o().createElement(Ju.a, {
                                parentId: `${e}-${ar.DA}`,
                                actionType: ar.DA,
                                onClick: n,
                                show: t.includes(ar.DA),
                            }),
                            o().createElement(Ju.a, {
                                parentId: `${e}-${ar.FR}`,
                                actionType: ar.FR,
                                onClick: n,
                                show: t.includes(ar.FR),
                            }),
                        ),
                    ),
                    to = 'Booster_base_e5',
                    no = 'Booster_unit_5e',
                    ao = (0, x.Pi)(({ isCurrent: e, compare: t, index: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge,
                            i = ba(),
                            r = i.model,
                            l = i.controls,
                            c = r.computes.boosters.booster(n),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            b = c.isMountedMoreThanOne,
                            g = c.imageName,
                            E = c.itemsInStorage,
                            h = c.price,
                            v = c.intCD,
                            f = c.isDisabled,
                            C = c.overlayType,
                            A = c.isLocked,
                            D = c.isMounted,
                            S = c.isMountedInOtherSetup,
                            F = c.description,
                            y = c.isBuyMoreVisible,
                            w = c.isBuyMoreDisabled,
                            k = c.highlightType,
                            x = c.lockReason,
                            T = d > -1,
                            I = `${v}-booster`,
                            N = (0, u.useMemo)(() => {
                                const e = [];
                                return (
                                    !f &&
                                        T &&
                                        (!t && y && e.push(ar.GV),
                                        (!Boolean(E) && !D) || S ? e.push(ar.FR) : e.push(ar.DA)),
                                    e
                                );
                            }, [f, T, t, y, E, D, S]),
                            L = (0, u.useCallback)(
                                (e) => (
                                    l.boosters.actSlot({ actionType: e, intCD: v, installedSlotId: d }),
                                    e === ar.GV ? 1e3 : 120
                                ),
                                [l, v, d],
                            ),
                            O = ct(L),
                            M = (0, u.useCallback)(() => {
                                N.includes(ar.FR) ? O(ar.FR) : N.includes(ar.DA) ? O(ar.DA) : O(ar.eC);
                            }, [N, O]),
                            P = (0, u.useMemo)(() => {
                                const e = { intCD: v, slotType: B.G$, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: b,
                                        isMounted: D,
                                        isDisabled: f,
                                    }),
                                ];
                            }, [v, d, m, p, D, b, f]),
                            $ = P[0],
                            H = P[1],
                            z = (0, u.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return o().createElement(Fr, {
                            parentId: I,
                            name: _,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: z,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: f,
                            isLocked: A,
                            options: o().createElement(Tr, {
                                isMounted: D || S,
                                itemsInStorage: E,
                                show: !N.length,
                                price: h,
                            }),
                            actions: o().createElement(eo, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: O,
                                isBuyMoreDisabled: w,
                            }),
                            details: o().createElement(sr._, {
                                key: F,
                                parentId: I,
                                classMix: to,
                                mediaSize: a,
                                classColorMix: no,
                                linesShown: s ? 4 : 3,
                                text: F,
                            }),
                            overlayType: C,
                            highlightType: k,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    so = {
                        base: 'Consumable_base_54',
                        unit: 'Consumable_unit_0d',
                        unit__special: 'Consumable_unit__special_14',
                    },
                    io = (0, x.Pi)(({ isCurrent: e, compare: t, index: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge,
                            i = ba(),
                            r = i.model,
                            l = i.controls,
                            _ = r.computes.consumables.consumable(n, t, a),
                            d = _.name,
                            m = _.installedSlotId,
                            p = _.itemInstalledSetupIdx,
                            b = _.itemInstalledSetupSlotIdx,
                            g = _.isMountedMoreThanOne,
                            E = _.imageName,
                            h = _.itemsInStorage,
                            v = _.price,
                            f = _.intCD,
                            C = _.isDisabled,
                            A = _.overlayType,
                            D = _.isLocked,
                            S = _.isMounted,
                            F = _.isMountedInOtherSetup,
                            y = _.isBuiltIn,
                            w = _.description,
                            k = _.isBuyMoreDisabled,
                            x = _.lockReason,
                            T = m > -1,
                            I = `${f}-consumable`,
                            N = (0, u.useMemo)(() => {
                                const n = [];
                                return (
                                    !C &&
                                        T &&
                                        (!e && n.push(ar.Xo),
                                        y ||
                                            (!t && n.push(ar.GV),
                                            (!Boolean(h) && !S) || F ? n.push(ar.FR) : n.push(ar.DA))),
                                    n
                                );
                            }, [C, T, e, y, t, h, S, F]),
                            L = (0, u.useCallback)(
                                (e) => (
                                    l.consumables.actSlot({ actionType: e, intCD: f, installedSlotId: m }),
                                    e === ar.GV ? 1e3 : 300
                                ),
                                [l, f, m],
                            ),
                            O = ct(L),
                            M = (0, u.useCallback)(() => {
                                N.includes(ar.Xo)
                                    ? O(ar.Xo)
                                    : N.includes(ar.FR)
                                      ? O(ar.FR)
                                      : N.includes(ar.DA)
                                        ? O(ar.DA)
                                        : O(ar.eC);
                            }, [N, O]),
                            P = (0, u.useMemo)(() => {
                                const e = { intCD: f, slotType: B.mH, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                        isMounted: S,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [f, m, p, b, g, S, C]),
                            $ = P[0],
                            H = P[1],
                            z = (0, u.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(E)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(E);
                                return String(e);
                            }, [s, E]),
                            W = (0, u.useMemo)(
                                () =>
                                    o().createElement(sr._, {
                                        parentId: I,
                                        mediaSize: a,
                                        classMix: c()(so.base, a && so[`base__${a}`]),
                                        classColorMix: so.unit,
                                        linesShown: s ? 4 : 3,
                                        text: w,
                                    }),
                                [a, s, w, I],
                            );
                        return o().createElement(Fr, {
                            parentId: I,
                            name: d,
                            tooltipArgs: $,
                            contextMenuArgs: H,
                            imageSource: z,
                            isCurrent: e,
                            isActive: T,
                            isDisabled: C,
                            isLocked: D,
                            isClickable: !y,
                            options: o().createElement(Tr, {
                                price: v,
                                isMounted: S || F,
                                itemsInStorage: h,
                                show: !N.length,
                            }),
                            actions: o().createElement(eo, {
                                parentId: I,
                                availableActions: N,
                                onActionClick: O,
                                isBuyMoreDisabled: k,
                            }),
                            details: W,
                            overlayType: A,
                            onSlotClick: M,
                            lockReason: x,
                        });
                    }),
                    ro = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    uo = ({ values: e, localeName: t }) => {
                        const n = _u.hX(e, ({ valueKey: e }) => e === t).pop();
                        if (!n) return ro;
                        const a = n.value,
                            s = 'mul' === n.valueType ? 100 * (a - 1) : a;
                        return { calcValue: s, isPositive: s > 0, valueKey: n.valueKey };
                    },
                    oo = 'Bonus_base_aa',
                    lo = 'Bonus_bonus_49',
                    co = 'Bonus_text_48',
                    _o = 'Unit_base_15',
                    mo = 'Unit_base__special_37',
                    po = 'Unit_glow_38',
                    bo = R.strings.tank_setup.kpi.bonus.valueTypes,
                    go = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    Eo = (0, x.Pi)(({ deviceID: e, bonusID: t }) => {
                        const n = ba().model,
                            a = n.computes.optDevices.device(e).activeSpecsMask,
                            s = n.computes.optDevices.bonusValue(e, t);
                        if (!s) return null;
                        const i = s.valueType,
                            r = s.value,
                            u = s.valueKey,
                            l = Boolean(a),
                            _ = 'mul' === i ? 100 * (r - 1) : r,
                            d = _ > 0 ? '+' : '',
                            m = _e.Z5.getRealFormat(_, _e.Gr.WO_ZERO_DIGITS),
                            p = bo.$dyn(u),
                            b = `${m}${p ? ` ${p}` : go}`;
                        return o().createElement(
                            'div',
                            { className: c()(_o, l && mo) },
                            o().createElement('span', null, o().createElement('span', { className: po }), d + b),
                        );
                    }),
                    ho = (0, x.Pi)(({ bonusID: e, compare: t, deviceID: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge ? 4 : 3,
                            i = ba().model,
                            r = i.computes.optDevices.bonusVisibleLinesCount(n, e, s),
                            l = ((e, t = !1) =>
                                t || uo(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                i.computes.optDevices.bonus(n, e),
                            ),
                            c = (0, u.useMemo)(() => (0, dr.D)(String(l)), [l]);
                        return r
                            ? o().createElement(
                                  'div',
                                  { className: oo },
                                  l &&
                                      o().createElement(
                                          'span',
                                          { className: lo },
                                          o().createElement(Eo, { compare: t, deviceID: n, bonusID: e }),
                                          ' ',
                                          r &&
                                              l &&
                                              o().createElement(
                                                  'span',
                                                  { className: co },
                                                  o().createElement(dr.n, { linesCount: r, blocks: c, mediaSize: a }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    vo = 'Bonuses_base_af',
                    fo = 'Bonuses_bonus_d1',
                    Co = 'Bonuses_text_37',
                    Ao = 'Bonuses_effect_f8',
                    Do = 'Bonuses_icon_40',
                    So = (0, x.Pi)(({ compare: e, deviceID: t }) => {
                        const n = (0, Ea.GS)(),
                            a = ba().model,
                            s = a.computes.optDevices.device(t),
                            i = s.intCD,
                            r = s.effect,
                            u = a.computes.optDevices.bonusesLength(t),
                            l = `${i}-device`,
                            c = a.computes.optDevices.bonusEffectLinesCount(t);
                        return o().createElement(
                            'div',
                            { id: `${l}-bonuses`, className: vo },
                            r &&
                                o().createElement(
                                    'div',
                                    { className: fo },
                                    o().createElement(
                                        'span',
                                        { className: Ao },
                                        o().createElement('span', { className: Do }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    o().createElement(
                                        'span',
                                        { className: Co },
                                        o().createElement(dr.n, { mediaSize: n, linesCount: c, blocks: (0, dr.D)(r) }),
                                    ),
                                ),
                            U(u, (n) =>
                                o().createElement(ho, { key: `${n}_${i}`, bonusID: n, deviceID: t, compare: e }),
                            ),
                        );
                    });
                var Fo = n(2106);
                const yo = 'DeviceActions_base_c0',
                    wo = 'DeviceActions_base__hidden_a6',
                    Bo = 'DeviceActions_base__shown_b0',
                    ko = (0, u.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: s,
                            isModernized: i,
                            isFreeToDemount: r,
                            destroyTooltipBodyPath: u,
                            level: l,
                        }) => {
                            const _ = (s || a) && t.includes(ar.Rs),
                                d = t.length && (t[0] !== ar.Rs || _),
                                m = c()(yo, d ? Bo : wo);
                            return o().createElement(
                                'div',
                                { className: m },
                                o().createElement(Ju.a, {
                                    parentId: `${e}-${ar.DA}`,
                                    actionType: ar.DA,
                                    onClick: n,
                                    show: t.includes(ar.DA),
                                }),
                                o().createElement(Ju.a, {
                                    parentId: `${e}-${ar.FR}`,
                                    actionType: ar.FR,
                                    onClick: n,
                                    show: t.includes(ar.FR),
                                }),
                                o().createElement(Ju.a, {
                                    parentId: `${e}-${ar.Rs}`,
                                    actionType: ar.Rs,
                                    onClick: n,
                                    show: _,
                                    isModernized: i,
                                    level: l,
                                }),
                                o().createElement(Ju.a, {
                                    parentId: `${e}-${ar.dZ}`,
                                    actionType: ar.dZ,
                                    onClick: n,
                                    show: t.includes(ar.dZ),
                                    isFreeToDemount: r,
                                }),
                                o().createElement(Ju.a, {
                                    parentId: `${e}-${ar.Fd}`,
                                    actionType: ar.Fd,
                                    onClick: n,
                                    show: t.includes(ar.Fd),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: r,
                                }),
                                o().createElement(Ju.a, {
                                    parentId: `${e}-${ar.sH}`,
                                    actionType: ar.sH,
                                    onClick: n,
                                    show: t.includes(ar.sH),
                                }),
                                o().createElement(Ju.a, {
                                    parentId: `${e}-${ar._2}`,
                                    actionType: ar._2,
                                    buttonType: Fo.L.secondary,
                                    onClick: n,
                                    show: (i || !r) && t.includes(ar._2),
                                    isModernized: i,
                                    tooltipBodyPath: u,
                                }),
                            );
                        },
                    );
                function xo() {
                    return (
                        (xo = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        xo.apply(null, arguments)
                    );
                }
                const To = (0, x.Pi)(({ compare: e, index: t, isCurrent: n }) => {
                        const a = (0, Ea.GS)(),
                            s = a === Ea.cJ.Large || a === Ea.cJ.Huge,
                            i = ba(),
                            r = i.model,
                            l = i.controls,
                            c = r.computes.optDevices.device(t),
                            _ = c.name,
                            d = c.installedSlotId,
                            m = c.itemInstalledSetupIdx,
                            p = c.itemInstalledSetupSlotIdx,
                            b = c.isMountedMoreThanOne,
                            g = c.imageName,
                            E = c.itemsInStorage,
                            h = c.price,
                            v = c.specializations,
                            f = c.intCD,
                            C = c.isMounted,
                            A = c.isMountedInOtherSetup,
                            D = c.isDisabled,
                            S = c.isFreeToDemount,
                            F = c.overlayType,
                            y = c.isLocked,
                            w = c.isUpgradable,
                            k = c.isTrophy,
                            x = c.activeSpecsMask,
                            T = c.isModernized,
                            I = c.level,
                            N = c.lockReason,
                            L = c.destroyTooltipBodyPath,
                            O = d > -1,
                            M = `${f}-device`,
                            P = (0, u.useMemo)(() => {
                                const t = [];
                                let a = !0;
                                return (
                                    O &&
                                        !D &&
                                        (n || t.push(ar.Xo),
                                        C && !e
                                            ? ((a = !n),
                                              t.push(...((e) => (e ? [ar.Fd, ar.sH] : [ar.dZ]))(b)),
                                              t.push(ar._2))
                                            : t.push(
                                                  ((e, t, n) => ((!Boolean(e) && !t) || n ? ar.FR : ar.DA))(E, C, A),
                                              )),
                                    !w || e || D || t.push(ar.Rs),
                                    { availableActions: t, isDeviceClickable: a }
                                );
                            }, [O, D, w, e, n, C, b, E, A]),
                            $ = P.availableActions,
                            H = P.isDeviceClickable,
                            z = (0, u.useCallback)(
                                (e) => {
                                    l.optDevices.actSlot({ actionType: e, intCD: f, installedSlotId: d });
                                },
                                [l, f, d],
                            ),
                            W = (0, u.useCallback)(() => {
                                $.length && $[0] !== ar.Rs ? z($[0]) : z(ar.eC);
                            }, [$, z]),
                            j = (0, u.useMemo)(() => {
                                const e = { intCD: f, slotType: B.zn, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: d,
                                        itemInstalledSetupIdx: m,
                                        itemInstalledSetupSlotIdx: p,
                                        isMountedMoreThanOne: b,
                                        isMounted: C,
                                        isDisabled: D,
                                    }),
                                ];
                            }, [f, d, m, p, b, C, D]),
                            G = j[0],
                            Z = j[1],
                            V = (0, u.useMemo)(() => {
                                const e = s
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(g)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(g);
                                return String(e);
                            }, [s, g]);
                        return o().createElement(Fr, {
                            parentId: M,
                            name: _,
                            tooltipArgs: G,
                            contextMenuArgs: Z,
                            imageSource: V,
                            isCurrent: n,
                            isActive: O,
                            isDisabled: D,
                            isLocked: y,
                            isClickable: H,
                            isModernized: T,
                            level: I,
                            specializations:
                                v && v.specializations.length
                                    ? o().createElement(tn.G, xo({}, v, { activeSpecsMask: x, mediaSize: a }))
                                    : null,
                            details: o().createElement(So, { compare: e, deviceID: t }),
                            options: e
                                ? null
                                : o().createElement(Tr, {
                                      isMounted: C || A,
                                      itemsInStorage: E,
                                      price: h,
                                      possibleZeroCount: k || T,
                                      show: !$.length || Boolean(E || C || A),
                                  }),
                            actions: o().createElement(ko, {
                                parentId: M,
                                availableActions: $,
                                onActionClick: z,
                                isInstalled: O,
                                isModernized: T,
                                level: I,
                                isFreeToDemount: S,
                                destroyTooltipBodyPath: L,
                            }),
                            overlayType: F,
                            onSlotClick: W,
                            shouldHandleMouseOver: !0,
                            lockReason: N,
                        });
                    }),
                    Io = { base: 'Card_base_48', base__large: 'Card_base__large_42', base__huge: 'Card_base__huge_55' },
                    No = (0, x.Pi)(
                        ({ index: e, type: t, compare: n = !1 }, a) => {
                            const s = (0, Ea.GS)(),
                                i = ba().model,
                                r = i.ammunitionPanel.get().selectedSlot,
                                u = (() => {
                                    switch (t) {
                                        case B.zn:
                                            return i.computes.optDevices.device(e);
                                        case B.mH:
                                            return i.computes.consumables.consumable(e, n, s);
                                        case B.G$:
                                            return i.computes.boosters.booster(e);
                                        default:
                                            return i.computes.optDevices.device(e);
                                    }
                                })(),
                                l = u.isVisible,
                                _ = u.installedSlotId,
                                d = _ > -1 && r === _;
                            return l
                                ? o().createElement(
                                      'div',
                                      { className: c()(Io.base, s && Io[`base__${s}`]), ref: d ? a : null },
                                      (() => {
                                          switch (t) {
                                              case B.G$:
                                                  return o().createElement(ao, { index: e, compare: n, isCurrent: d });
                                              case B.mH:
                                                  return o().createElement(io, { index: e, compare: n, isCurrent: d });
                                              case B.zn:
                                              default:
                                                  return o().createElement(To, { index: e, compare: n, isCurrent: d });
                                          }
                                      })(),
                                  )
                                : null;
                        },
                        { forwardRef: !0 },
                    ),
                    Ro = {
                        base: 'Cards_base_30',
                        base__large: 'Cards_base__large_33',
                        base__huge: 'Cards_base__huge_60',
                        base__disabled: 'Cards_base__disabled_28',
                    },
                    Lo = ({ isDisabled: e, compare: t = !1, currentCardRef: n, cardsAmount: a, type: s }) => {
                        const i = (0, Ea.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(Ro.base, i && Ro[`base__${i}`], e && Ro.base__disabled) },
                            U(a, (e) =>
                                o().createElement(No, { key: `${e}_${i}`, index: e, compare: t, ref: n, type: s }),
                            ),
                        );
                    };
                var Oo = n(3215),
                    Mo = n(3522);
                const Po = (0, Oo.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, Mo._)(e),
                                n = t.model,
                                a = t.computes,
                                s = e.object();
                            return Object.assign({}, n, { ammunitionPanel: s, computes: a });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    $o = (Po[0], Po[1]);
                var Ho = n(8586),
                    zo = n(3978);
                const Wo = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    jo = 'FilterItem_base_2e',
                    Go = ({ name: e }) =>
                        o().createElement('div', {
                            className: jo,
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let Zo;
                !(function (e) {
                    (e.BlackReal = 'blackReal'),
                        (e.WhiteReal = 'whiteReal'),
                        (e.White = 'white'),
                        (e.WhiteOrange = 'whiteOrange'),
                        (e.WhiteSpanish = 'whiteSpanish'),
                        (e.Par = 'par'),
                        (e.ParSecondary = 'parSecondary'),
                        (e.ParTertiary = 'parTertiary'),
                        (e.Red = 'red'),
                        (e.RedDark = 'redDark'),
                        (e.Yellow = 'yellow'),
                        (e.Orange = 'orange'),
                        (e.Cream = 'cream'),
                        (e.Brown = 'brown'),
                        (e.GreenBright = 'greenBright'),
                        (e.Green = 'green'),
                        (e.GreenDark = 'greenDark'),
                        (e.BlueBooster = 'blueBooster'),
                        (e.BlueTeamkiller = 'blueTeamkiller'),
                        (e.Cred = 'cred'),
                        (e.Gold = 'gold'),
                        (e.Bond = 'bond'),
                        (e.Prom = 'prom');
                })(Zo || (Zo = {}));
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let Vo;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(Vo || (Vo = {}));
                const Uo = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let qo;
                !(function (e) {
                    (e.CREW_FREEXP_HIGHLIGHT = 'crew_crewbook_freeexp_highlight'),
                        (e.CREW_POST_PROGRESSION_START = 'crew_pb_start'),
                        (e.CREW_POST_PROGRESSION_STOP = 'crew_pb_stop'),
                        (e.CREW_POST_PROGRESSION_REWARD = 'crew_postprog_reward'),
                        (e.CREW_RETRAIN_DOWN = 'crew_retrain_down'),
                        (e.CREW_RETRAIN_UP = 'crew_retrain_up'),
                        (e.CREW_PROFILE_UPGRADE = 'crew_profile_upgrade'),
                        (e.CREW_POSTPROG_WIDGET = 'crew_postprog_widget'),
                        (e.CREW_UNLOCK_MAJOR_PERK_START = 'crew_unlock_major_perk_start'),
                        (e.CREW_UNLOCK_MAJOR_PERK_STOP = 'crew_unlock_major_perk_stop'),
                        (e.CREW_SETTING_UP_MAJOR_PERK = 'crew_setting_up_major_perk'),
                        (e.SHOP_INFO = 'shop_info'),
                        (e.RUDY = 'rudy');
                })(qo || (qo = {}));
                let Xo;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(Xo || (Xo = {}));
                const Ko = 'ClearBtn_base_a6',
                    Yo = 'ClearBtn_stroke_09',
                    Jo = 'ClearBtn_background_61',
                    Qo = 'ClearBtn_base__hover_3b',
                    el = 'ClearBtn_base__down_60',
                    tl = 'ClearBtn_cross_1d',
                    nl = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const s = (0, u.useState)(!1),
                            i = s[0],
                            r = s[1],
                            l = (0, u.useState)(!1),
                            _ = l[0],
                            d = l[1],
                            m = (0, u.useCallback)(() => {
                                (0, st.G)(a), d(!1), r(!0);
                            }, [a]),
                            p = (0, u.useCallback)(() => {
                                (0, st.G)(n), d(!0);
                            }, [n]),
                            b = (0, u.useCallback)(() => {
                                d(!1), r(!1);
                            }, []);
                        return o().createElement(
                            q.i,
                            Uo,
                            o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: c()(Ko, _ && Qo, i && el),
                                    onMouseDown: m,
                                    onMouseOver: p,
                                    onMouseLeave: b,
                                    onClick: t,
                                },
                                o().createElement('div', { className: Jo }),
                                o().createElement('div', { className: Yo }),
                                o().createElement('div', { className: tl }),
                            ),
                        );
                    },
                    al = 'MatchDetails_base_a8',
                    sl = 'MatchDetails_count_d2',
                    il = 'MatchDetails_clear_21',
                    rl = 'MatchDetails_clear__shown_49',
                    ul = 'MatchDetails_separator_bc',
                    ol = 'MatchDetails_arrow_b0',
                    ll = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const s = (0, u.useCallback)(() => t(), [t]);
                        return o().createElement(
                            'div',
                            { className: al },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('span', { className: sl }, n),
                                    o().createElement(
                                        'span',
                                        { className: ul },
                                        '/',
                                        o().createElement('span', { className: ol }),
                                    ),
                                ),
                            o().createElement('span', { className: sl }, a),
                            o().createElement(
                                'span',
                                { className: c()(il, e && rl) },
                                o().createElement(nl, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    cl = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: s = !1,
                        onFilterChanged: i,
                        onFilterReset: r,
                        selectedSlotSpecialization: l,
                    }) => {
                        const _ = (0, Ea.GS)(),
                            d = De('FilterTutorialHintZone', Ce);
                        (0, u.useEffect)(() => {
                            d && d.runTrigger(true);
                        }, [d]);
                        const m = (0, _u.UI)(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: o().createElement(Go, { name: e }),
                            callback: (e, t) => {
                                i({ name: e }), (0, zo.d)(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: Fo.L.ghost,
                                mixClass: c()(Wo.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return o().createElement(
                            'div',
                            { className: c()(Wo.base, _ && Wo[`base__${_}`], s && Wo.base__detailed) },
                            s &&
                                o().createElement(ll, {
                                    isFilterActive: a,
                                    onFilterReset: r,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            o().createElement(
                                'div',
                                { className: Wo.buttons },
                                o().createElement(Ho.h, { ctaConfigs: m }),
                            ),
                        );
                    };
                var _l = n(2372);
                const dl = {
                        base: 'ExperimentalEquipCoinBlock_base_91',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_47',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_e7',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_02',
                        currency: 'ExperimentalEquipCoinBlock_currency_7c',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_d8',
                        button: 'ExperimentalEquipCoinBlock_button_fe',
                    },
                    ml = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    pl = (e) => (e ? ml.disabled.text() : ml.notDisabled.text()),
                    bl = (0, x.Pi)(({ disabled: e }) => {
                        const t = (0, Ea.GS)(),
                            n = (0, ga.t)(),
                            a = n.model,
                            s = n.controls,
                            i = a.optDevices.specialCurrency.get().value;
                        return o().createElement(
                            'div',
                            { className: c()(dl.base, t && dl[`base__${t}`]) },
                            o().createElement(
                                Bt.t,
                                { args: { tooltipId: B.$4 } },
                                o().createElement(
                                    'div',
                                    { className: dl.currency },
                                    o().createElement(_l.A, { value: i }),
                                    o().createElement('div', { className: dl.currencyIcon }),
                                ),
                            ),
                            o().createElement(
                                q.i,
                                { body: pl(e) },
                                o().createElement(
                                    'div',
                                    null,
                                    o().createElement(
                                        Da.u5,
                                        { onClick: s.moreCurrencyGot, mixClass: dl.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    gl = 'HeaderContent_base_cd';
                function El() {
                    return (
                        (El = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        El.apply(null, arguments)
                    );
                }
                const hl = (0, x.Pi)(({ compare: e }) => {
                        const t = ba(),
                            n = t.model,
                            a = t.controls,
                            s = n.optDevices.setup.get(),
                            i = s.withIntroduction,
                            r = s.hasUnfitItems,
                            u = n.optDevices.specialCurrency.get().value,
                            l = n.computes.optDevices.slotsLength(),
                            c = n.optDevices.tabs.get(),
                            _ = n.optDevices.filter.get(),
                            d = e ? void 0 : n.computes.selectedSlotSpecialization();
                        switch (c.selectedTabName) {
                            case B.S:
                                return o().createElement(
                                    'div',
                                    { className: gl },
                                    o().createElement(
                                        cl,
                                        El({}, _, {
                                            onFilterChanged: a.filterChanged,
                                            onFilterReset: a.filterReset,
                                            selectedSlotSpecialization: d,
                                        }),
                                    ),
                                );
                            case B.pi:
                                return e
                                    ? null
                                    : !i || (0 !== u && 0 === l)
                                      ? o().createElement(
                                            'div',
                                            { className: gl },
                                            o().createElement(bl, { disabled: i ? !r : l <= 0 }),
                                        )
                                      : null;
                            default:
                                return null;
                        }
                    }),
                    vl = {
                        base: 'CompareHeader_base_7a',
                        base__small: 'CompareHeader_base__small_ad',
                        base__medium: 'CompareHeader_base__medium_b7',
                        base__large: 'CompareHeader_base__large_6f',
                        base__huge: 'CompareHeader_base__huge_d0',
                        title: 'CompareHeader_title_59',
                        description: 'CompareHeader_description_1c',
                        controlsContainer: 'CompareHeader_controlsContainer_8b',
                    },
                    fl = R.strings.tank_setup.compare.section,
                    Cl = (0, x.Pi)(({ type: e, children: t, withContent: n }) => {
                        const a = $o().model.vehicleInfo.get(),
                            s = (0, Ea.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(vl.base, vl[`base__${s}`]) },
                            o().createElement(
                                'div',
                                { className: vl.title },
                                (0, O.WU)(String(fl.title.$dyn(e)), { name: a.vehicleName }),
                            ),
                            o().createElement('div', { className: vl.description }, fl.description.$dyn(e)),
                            o().createElement(
                                'div',
                                { className: vl.controlsContainer },
                                o().createElement('div', { className: vl.tabs }, null == t ? void 0 : t(a.vehicleLvl)),
                                n && o().createElement(hl, { compare: !0 }),
                            ),
                        );
                    });
                function Al() {
                    return (
                        (Al = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Al.apply(null, arguments)
                    );
                }
                const Dl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = ba(),
                            n = t.model,
                            a = t.controls,
                            s = (0, Ea.GS)(),
                            i = n.ammunitionPanel.get().selectedSlot,
                            r = n.boosters.tabs.get(),
                            u = n.computes.boosters.length();
                        return o().createElement(Ea.Ar, {
                            compare: e,
                            header: e
                                ? o().createElement(Cl, { type: B.G$ }, () =>
                                      o().createElement(
                                          Ru,
                                          Al({}, r, { handleTabChanged: a.boosters.changeTab, isTooltipEnabled: !1 }),
                                      ),
                                  )
                                : o().createElement(Ou, {
                                      title: R.strings.tank_setup.section.battleBoosters(),
                                      tabProps: Object.assign({}, r, {
                                          handleTabChanged: a.boosters.changeTab,
                                          isTooltipEnabled: !1,
                                      }),
                                  }),
                            content: o().createElement(
                                Qi,
                                { selectedSlotId: i, scrollAreaKey: r.selectedTabName, updateKey: u },
                                o().createElement(Lo, { compare: e, type: B.G$, cardsAmount: u }),
                            ),
                            footer:
                                !e &&
                                o().createElement(Yu.w, {
                                    withConfirmation: !0,
                                    renewalType: Ku.my.Boosters,
                                    parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                    onDealConfirmed: a.boosters.confirmDeal,
                                    onDealCancelled: a.boosters.cancelDeal,
                                    onAutoRenewalChanged: (e) => a.boosters.changeAutoRenewal(e),
                                    mediaSize: s,
                                }),
                        });
                    }),
                    Sl = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, Ea.GS)(),
                            n = ba(),
                            a = n.model,
                            s = n.controls,
                            i = a.ammunitionPanel.get().selectedSlot,
                            r = a.computes.consumables.length(e, t);
                        return o().createElement(Ea.Ar, {
                            header: e
                                ? o().createElement(Cl, { type: B.mH })
                                : o().createElement(Ou, { title: R.strings.tank_setup.section.consumables() }),
                            content: o().createElement(
                                Qi,
                                { selectedSlotId: i },
                                o().createElement(Lo, { compare: e, cardsAmount: r, type: B.mH }),
                            ),
                            footer:
                                !e &&
                                o().createElement(Yu.w, {
                                    withConfirmation: !0,
                                    renewalType: Ku.my.Consumables,
                                    mediaSize: t,
                                    parentModelPath: 'model.tankSetup.consumablesSetup',
                                    onDealConfirmed: s.consumables.confirmDeal,
                                    onDealCancelled: s.consumables.cancelDeal,
                                    onAutoRenewalChanged: s.consumables.changeAutoRenewal,
                                }),
                            compare: e,
                        });
                    });
                function Fl() {
                    return (
                        (Fl = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Fl.apply(null, arguments)
                    );
                }
                const yl = (0, x.Pi)(({ compare: e, hasIntroduction: t }) => {
                        const n = ba(),
                            a = n.model,
                            s = n.controls,
                            i = a.optDevices.tabs.get(),
                            r = i.tabs.length > 1;
                        return e
                            ? o().createElement(Cl, { type: B.zn, withContent: !0 }, (n) => {
                                  if (!r) return null;
                                  const a = e && !t && n <= 4,
                                      u = (function (e, t) {
                                          return t ? _u.hX(e, (e) => 'modernized' !== e.name) : e;
                                      })(i.tabs, a);
                                  return o().createElement(
                                      Ru,
                                      Fl({}, Object.assign({}, i, { tabs: u }), {
                                          handleTabChanged: s.optDevices.changeTab,
                                      }),
                                  );
                              })
                            : o().createElement(
                                  Ou,
                                  {
                                      title: R.strings.tank_setup.section.optDevices(),
                                      tabProps: r
                                          ? Object.assign({}, i, { handleTabChanged: s.optDevices.changeTab })
                                          : void 0,
                                      tabs:
                                          r &&
                                          o().createElement(
                                              Ru,
                                              Fl({}, i, { handleTabChanged: s.optDevices.changeTab }),
                                          ),
                                  },
                                  o().createElement(hl, { compare: e }),
                              );
                    }),
                    wl = {
                        base: 'Introduction_base_0e',
                        base__enter: 'Introduction_base__enter_93',
                        base__enterActive: 'Introduction_base__enterActive_e5',
                        base__exit: 'Introduction_base__exit_74',
                        base__exitActive: 'Introduction_base__exitActive_4e',
                        introduction: 'Introduction_introduction_b1',
                        image: 'Introduction_image_78',
                        base__large: 'Introduction_base__large_30',
                        base__huge: 'Introduction_base__huge_51',
                        image__deluxe: 'Introduction_image__deluxe_b6',
                        image__deluxeLarge: 'Introduction_image__deluxeLarge_ce',
                        image__trophy: 'Introduction_image__trophy_1f',
                        image__trophyLarge: 'Introduction_image__trophyLarge_58',
                        image__modernized: 'Introduction_image__modernized_f6',
                        image__modernizedLarge: 'Introduction_image__modernizedLarge_d7',
                        description: 'Introduction_description_f2',
                        title: 'Introduction_title_74',
                        message: 'Introduction_message_d3',
                        currency: 'Introduction_currency_60',
                        icon: 'Introduction_icon_0d',
                        'icon__currency-deluxe': 'Introduction_icon__currency-deluxe_5e',
                        'icon__currency-modernized': 'Introduction_icon__currency-modernized_09',
                    },
                    Bl = ({ introType: e }) => {
                        const t = c()(wl.icon, wl[`icon__currency-${e}`]),
                            n = (0, u.useMemo)(
                                () => ({
                                    currencyName: o().createElement(
                                        'span',
                                        { className: wl.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: o().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? o().createElement(ue.z, { binding: n, text: a, classMix: wl.message }) : null;
                    },
                    kl = (0, x.Pi)(() => {
                        const e = (0, Ea.GS)(),
                            t = e === Ea.cJ.Large || e === Ea.cJ.Huge,
                            n = (0, u.useState)(!0),
                            a = n[0],
                            s = n[1],
                            i = (0, ga.t)(),
                            r = i.model,
                            l = i.controls,
                            _ = r.optDevices.setup.get().introductionType,
                            d = r.computes.optDevices.slotsLength() > 0,
                            m = (0, u.useCallback)(() => {
                                s(!1);
                            }, []),
                            p = (0, u.useCallback)(() => {
                                l.introPassed(), s(!0);
                            }, [l]),
                            b = (0, u.useMemo)(
                                () => ({
                                    enter: wl.base__enter,
                                    enterActive: wl.base__enterActive,
                                    exit: wl.base__exit,
                                    exitActive: wl.base__exitActive,
                                }),
                                [],
                            ),
                            g = d
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(_)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(_);
                        return o().createElement(
                            Y.Z,
                            { in: a, classNames: b, timeout: 300, onExited: p },
                            o().createElement(
                                'div',
                                { className: c()(wl.base, e && wl[`base__${e}`]), id: 'introduction' },
                                o().createElement(
                                    'div',
                                    { className: wl.introduction },
                                    o().createElement('div', {
                                        className: c()(wl.image, t ? wl[`image__${_}Large`] : wl[`image__${_}`]),
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: wl.description },
                                        o().createElement('div', { className: wl.title }, g),
                                        o().createElement(Bl, { introType: _ }),
                                    ),
                                    d &&
                                        o().createElement(
                                            Da.u5,
                                            { type: Da.L$.secondary, size: Da.qE.medium, onClick: m },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    xl = 'OptDevicesSetup_intro_ae',
                    Tl = 'OptDevicesSetup_footer_e6',
                    Il = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = (0, Ea.GS)(),
                            n = ba().model,
                            a = (0, ga.t)().controls,
                            s = n.ammunitionPanel.get().selectedSlot,
                            i = n.optDevices.setup.get().withIntroduction,
                            r = n.computes.optDevices.slotsLength(),
                            u = n.optDevices.filter.get().selectedFilterCount,
                            l = n.optDevices.tabs.get().selectedTabName,
                            c = n.computes.optDevices.slotsLength();
                        return o().createElement(Ea.Ar, {
                            compare: e,
                            header: o().createElement(yl, { compare: e, hasIntroduction: i }),
                            content:
                                !e && i
                                    ? o().createElement(
                                          'div',
                                          { className: xl },
                                          o().createElement(Lo, {
                                              compare: !1,
                                              type: B.zn,
                                              cardsAmount: c,
                                              isDisabled: !0,
                                          }),
                                          o().createElement(kl, null),
                                      )
                                    : o().createElement(
                                          Qi,
                                          { selectedSlotId: s, scrollAreaKey: l, updateKey: `${u}:${r}` },
                                          o().createElement(Lo, {
                                              compare: e,
                                              type: B.zn,
                                              cardsAmount: c,
                                              isDisabled: i,
                                          }),
                                      ),
                            footer:
                                !e &&
                                o().createElement(
                                    'div',
                                    { className: Tl },
                                    o().createElement(Yu.w, {
                                        withConfirmation: !0,
                                        parentModelPath: 'model.tankSetup.optDevicesSetup',
                                        mediaSize: t,
                                        onDealConfirmed: a.optDevices.confirmDeal,
                                        onDealCancelled: a.optDevices.cancelDeal,
                                        onAutoRenewalChanged: a.optDevices.changeAutoRenewal,
                                    }),
                                ),
                        });
                    });
                let Nl, Rl, Ll, Ol;
                !(function (e) {
                    (e.Stereoscope = 'stereoscope'),
                        (e.Turbocharger = 'turbocharger'),
                        (e.EnhancedAimDrives = 'enhancedAimDrives'),
                        (e.CommandersView = 'commandersView'),
                        (e.Grousers = 'grousers'),
                        (e.AdditInvisibilityDevice = 'additInvisibilityDevice'),
                        (e.RadioCommunication = 'radioCommunication'),
                        (e.AntifragmentationLining = 'antifragmentationLining'),
                        (e.CamouflageNet = 'camouflageNet'),
                        (e.RotationMechanism = 'rotationMechanism'),
                        (e.Ventilation = 'ventilation'),
                        (e.HealthReserve = 'healthReserve'),
                        (e.ImprovedSights = 'improvedSights'),
                        (e.Rammer = 'rammer'),
                        (e.CoatedOptics = 'coatedOptics'),
                        (e.AimingStabilizer = 'aimingStabilizer'),
                        (e.ImprovedConfiguration = 'improvedConfiguration'),
                        (e.ModernizedExtraHealthReserveAntifragmentationLining =
                            'modernizedExtraHealthReserveAntifragmentationLining'),
                        (e.ModernizedTurbochargerRotationMechanism = 'modernizedTurbochargerRotationMechanism'),
                        (e.ModernizedAimDrivesAimingStabilizer = 'modernizedAimDrivesAimingStabilizer'),
                        (e.ModernizedImprovedSightsEnhancedAimDrives = 'modernizedImprovedSightsEnhancedAimDrives');
                })(Nl || (Nl = {})),
                    (function (e) {
                        (e.Visible = 'visible'),
                            (e.Hidden = 'hidden'),
                            (e.NotSuitableVehicle = 'notSuitableVehicle'),
                            (e.NoDataAtAll = 'noDataAtAll');
                    })(Rl || (Rl = {})),
                    (function (e) {
                        (e[(e.NoData = 0)] = 'NoData'),
                            (e[(e.Normal = 1)] = 'Normal'),
                            (e[(e.Linked = 2)] = 'Linked'),
                            (e[(e.Combined = 3)] = 'Combined');
                    })(Ll || (Ll = {})),
                    (function (e) {
                        (e.Unknown = 'unknown'), (e.Random = 'random'), (e.Comp7 = 'comp7');
                    })(Ol || (Ol = {}));
                var Ml = n(5344),
                    Pl = n(5959);
                const $l = {
                        base: 'PopularLoadouts_base_f1',
                        base__hidden: 'PopularLoadouts_base__hidden_2d',
                        base__legendary: 'PopularLoadouts_base__legendary_c4',
                        background: 'PopularLoadouts_background_be',
                        lipsIcon: 'PopularLoadouts_lipsIcon_e0',
                        base__linked: 'PopularLoadouts_base__linked_49',
                        lips: 'PopularLoadouts_lips_ab',
                        base__noDataLegendary: 'PopularLoadouts_base__noDataLegendary_fd',
                        row_empty: 'PopularLoadouts_row_empty_87',
                        noDataLegendary: 'PopularLoadouts_noDataLegendary_74',
                        noData: 'PopularLoadouts_noData_44',
                        vehicleNotAvailable: 'PopularLoadouts_vehicleNotAvailable_a1',
                        noData_text: 'PopularLoadouts_noData_text_d0',
                        vehicleNotAvailable_text: 'PopularLoadouts_vehicleNotAvailable_text_a8',
                        scrollWrapper: 'PopularLoadouts_scrollWrapper_30',
                        scroll: 'PopularLoadouts_scroll_73',
                        onslaughtBackground: 'PopularLoadouts_onslaughtBackground_82',
                        backgroundWrapper: 'PopularLoadouts_backgroundWrapper_4d',
                        backgroundWrapper__noData: 'PopularLoadouts_backgroundWrapper__noData_44',
                        animatedBackground: 'PopularLoadouts_animatedBackground_83',
                        shine1: 'PopularLoadouts_shine1_08',
                        shine2: 'PopularLoadouts_shine2_47',
                        border: 'PopularLoadouts_border_d5',
                        container: 'PopularLoadouts_container_33',
                        row: 'PopularLoadouts_row_8c',
                        row_images: 'PopularLoadouts_row_images_d8',
                        row_images__hovered: 'PopularLoadouts_row_images__hovered_29',
                        row_image: 'PopularLoadouts_row_image_a4',
                        row_emptySlot: 'PopularLoadouts_row_emptySlot_77',
                        popularity: 'PopularLoadouts_popularity_4e',
                        popularity__visible: 'PopularLoadouts_popularity__visible_b7',
                        footer: 'PopularLoadouts_footer_7b',
                        footer_wrapper: 'PopularLoadouts_footer_wrapper_8c',
                        footer_wrapper_title: 'PopularLoadouts_footer_wrapper_title_32',
                        footer_wrapper_pagination: 'PopularLoadouts_footer_wrapper_pagination_71',
                        dot1: 'PopularLoadouts_dot1_6e',
                        dot2: 'PopularLoadouts_dot2_fe',
                        dot1__active: 'PopularLoadouts_dot1__active_25',
                        dot2__active: 'PopularLoadouts_dot2__active_3a',
                        footer_arrowWrapper: 'PopularLoadouts_footer_arrowWrapper_48',
                        footer_arrowLeft: 'PopularLoadouts_footer_arrowLeft_79',
                        footer_arrowRight: 'PopularLoadouts_footer_arrowRight_37',
                    },
                    Hl = (e) =>
                        e in R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices
                            ? R.images.gui.maps.icons.tanksetup.popular_loadouts.optional_devices.$dyn(e)
                            : (console.error(`Optional device type ${e} is not supported`), null),
                    zl = (e) => {
                        const t = Number.isInteger(e) ? `${e}` : e.toFixed(2);
                        return (0, O.dL)(t);
                    },
                    Wl = ({ popularity: e, optionalDevice: t, isHovered: n }) => {
                        const a = (0, u.useMemo)(() => {
                                const e = t.map(Hl);
                                return [...e, ...Array.from({ length: 3 - e.length }, () => null)];
                            }, [t]),
                            s = 0 === t.length;
                        return o().createElement(
                            'div',
                            { className: c()($l.row, s && $l.row_empty) },
                            o().createElement(
                                'div',
                                { className: c()($l.popularity, n && $l.popularity__visible) },
                                o().createElement(ei, { text: zl(e) }),
                            ),
                            o().createElement(
                                'div',
                                { className: c()($l.row_images, n && $l.row_images__hovered) },
                                a.map((e, t) =>
                                    e
                                        ? o().createElement('img', { key: t, className: $l.row_image, src: e })
                                        : o().createElement('div', { key: t, className: $l.row_emptySlot }),
                                ),
                            ),
                        );
                    },
                    jl = (0, x.Pi)(({ isHidden: e = !1 }) => {
                        const t = (0, ga.t)(),
                            n = t.model,
                            a = t.controls,
                            s = (0, u.useState)(null),
                            i = s[0],
                            r = s[1],
                            l = (0, u.useRef)(null),
                            _ = (0, u.useState)(!0),
                            d = _[0],
                            m = _[1],
                            p = (0, u.useState)(!1),
                            b = p[0],
                            g = p[1],
                            E = (0, u.useState)(n.selectedPreset.get().mType || Ml.d.Common),
                            h = E[0],
                            v = E[1],
                            f = n.computes.getSortedCommonItems(),
                            C = n.computes.getSortedLegendaryItems(),
                            A = n.optionalDevicesAssistant.get().isHintShown,
                            D = n.optionalDevicesAssistant.get().state,
                            S = D === Rl.NotSuitableVehicle,
                            F = n.computes.getModeType() === Ol.Comp7,
                            y = n.computes.getOptionalDevicesResultTypeForPreset(h),
                            w = n.computes.getSourceVehicleCompDescrForPreset(h);
                        (0, u.useEffect)(
                            () => (
                                A ||
                                    (l.current = window.setInterval(() => {
                                        r((e) => ('shine1' === e ? 'shine2' : 'shine1'));
                                    }, 4e3)),
                                () => {
                                    l.current && window.clearInterval(l.current);
                                }
                            ),
                            [],
                        );
                        const B = () => {
                                l.current && window.clearInterval(l.current), A || a.onHintShown();
                            },
                            k = () => {
                                const e = h === Ml.d.Common ? Ml.d.Legendary : Ml.d.Common;
                                v(e), a.onPresetSelected(e);
                            },
                            x = h === Ml.d.Common ? f : C,
                            T =
                                h === Ml.d.Common
                                    ? R.strings.tank_setup.popularLoadouts.common()
                                    : R.strings.tank_setup.popularLoadouts.legendary(),
                            I = y === Ll.Linked,
                            N = y === Ll.NoData && Ml.d.Legendary,
                            L = D === Rl.NoDataAtAll,
                            O = y === Ll.Combined,
                            M = b && !O,
                            P = I || O,
                            H = is(),
                            z = (0, u.useRef)(null),
                            W = (0, u.useCallback)(() => {
                                var e;
                                const t = null == (e = z.current) ? void 0 : e.getBoundingClientRect();
                                return t ? `${t.width},${t.height}` : null;
                            }, []);
                        $(
                            W,
                            () => {
                                H.recalculateContent();
                                const e = H.getContainerSize() || 0,
                                    t = H.getWrapperSize() || 0;
                                m(e > t);
                            },
                            { intervalMs: 50, minStableTicks: 8, listenResize: !0 },
                            [],
                        );
                        const j = (0, u.useMemo)(
                            () =>
                                Array.from({ length: 3 }, (e, t) => {
                                    var n;
                                    return null != (n = x[t]) ? n : { popularity: 0, items: [] };
                                }),
                            [x],
                        );
                        return o().createElement(
                            'div',
                            {
                                className: c()(
                                    $l.base,
                                    e && $l.base__hidden,
                                    h === Ml.d.Legendary && $l.base__legendary,
                                    P && $l.base__linked,
                                    N && $l.base__noDataLegendary,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: c()($l.backgroundWrapper, { [$l.backgroundWrapper__noData]: L || S }) },
                                o().createElement('div', { className: c()($l.animatedBackground, i && $l[i]) }),
                            ),
                            S
                                ? o().createElement(
                                      'div',
                                      { className: $l.vehicleNotAvailable },
                                      o().createElement(
                                          'div',
                                          { className: $l.vehicleNotAvailable_text },
                                          R.strings.tank_setup.popularLoadouts.vehicleNotAvailable(),
                                      ),
                                  )
                                : L
                                  ? o().createElement(
                                        'div',
                                        { className: $l.noData },
                                        o().createElement(
                                            'div',
                                            { className: $l.noData_text },
                                            R.strings.tank_setup.popularLoadouts.noData(),
                                        ),
                                    )
                                  : o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', {
                                            className: c()([$l.border, d && $l.border_visible]),
                                        }),
                                        N &&
                                            o().createElement(
                                                'div',
                                                { className: $l.noDataLegendary },
                                                R.strings.tank_setup.popularLoadouts.noDataLegendary(),
                                            ),
                                        o().createElement(
                                            'div',
                                            { className: $l.scrollWrapper, onMouseEnter: B },
                                            o().createElement(
                                                Ds.Vertical.Default,
                                                { api: H, className: $l.scroll },
                                                o().createElement(
                                                    'div',
                                                    {
                                                        className: $l.container,
                                                        ref: z,
                                                        onMouseEnter: () => g(!0),
                                                        onMouseLeave: () => g(!1),
                                                    },
                                                    j.map((e, t) =>
                                                        o().createElement(Wl, {
                                                            key: t,
                                                            popularity: e.popularity,
                                                            optionalDevice: e.items,
                                                            isHovered: M,
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            o().createElement('div', { className: $l.background }),
                                            F && o().createElement('div', { className: $l.onslaughtBackground }),
                                        ),
                                        o().createElement('div', { className: $l.border }),
                                        o().createElement('div', { className: $l.lips }),
                                        o().createElement(
                                            'div',
                                            { className: $l.footer },
                                            o().createElement(
                                                'div',
                                                {
                                                    className: $l.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Pl.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Pl.playSound)('play');
                                                    },
                                                },
                                                o().createElement('div', {
                                                    className: $l.footer_arrowLeft,
                                                    onClick: k,
                                                }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: $l.footer_wrapper },
                                                o().createElement(
                                                    nt.u,
                                                    {
                                                        contentId:
                                                            R.views.lobby.tanksetup.tooltips.PopularLoadoutsTooltip(
                                                                'resId',
                                                            ),
                                                        args: {
                                                            sourceVehicleCompDescr: w,
                                                            optionalDevicesResultType: y,
                                                        },
                                                    },
                                                    o().createElement(
                                                        'div',
                                                        null,
                                                        o().createElement('div', { className: $l.lipsIcon }),
                                                        o().createElement(
                                                            'div',
                                                            { className: $l.footer_wrapper_title },
                                                            T,
                                                        ),
                                                    ),
                                                ),
                                                o().createElement(
                                                    'div',
                                                    { className: $l.footer_wrapper_pagination },
                                                    o().createElement('div', {
                                                        className: c()($l.dot1, 0 === h && $l.dot1__active),
                                                    }),
                                                    o().createElement('div', {
                                                        className: c()($l.dot2, 1 === h && $l.dot2__active),
                                                    }),
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: $l.footer_arrowWrapper,
                                                    onMouseEnter: () => {
                                                        (0, Pl.playSound)('highlight');
                                                    },
                                                    onClick: () => {
                                                        (0, Pl.playSound)('play');
                                                    },
                                                },
                                                o().createElement('div', {
                                                    className: $l.footer_arrowRight,
                                                    onClick: k,
                                                }),
                                            ),
                                        ),
                                    ),
                        );
                    }),
                    Gl = {
                        base__medium: 'TankName_base__medium_13',
                        base__small: 'TankName_base__small_f9',
                        base__tiny: 'TankName_base__tiny_2d',
                    },
                    Zl = (0, x.Pi)(() => {
                        const e = (0, ga.t)().model.vehicleInfo.get(),
                            t = (0, Ea.GS)();
                        return o().createElement(
                            'div',
                            { className: c()(Gl.base, t && Gl[`base__${t}`]) },
                            o().createElement(li, e),
                        );
                    }),
                    Vl = 'RightSideTankParameters_tankNamePosition_b3',
                    Ul = 'RightSideTankParameters_popularLoadoutsPosition_04',
                    ql = (0, x.Pi)(({ isBattleAbilities: e, arePopularLoadoutsHidden: t }) => {
                        const n = (0, ga.t)(),
                            a = n.controls,
                            s = n.model,
                            r = (0, u.useRef)(null),
                            l = (0, u.useRef)(null),
                            c = s.optionalDevicesAssistant.get().state === Rl.Hidden,
                            _ = !c,
                            d = (0, u.useCallback)(() => {
                                var e, t;
                                const n = null == (e = r.current) ? void 0 : e.getBoundingClientRect(),
                                    a = null == (t = l.current) ? void 0 : t.getBoundingClientRect();
                                return n && a ? `${n.left}-${n.width}-${a.top}` : null;
                            }, [r, l]),
                            m = (0, u.useCallback)(() => {
                                if (!r.current || !l.current) return;
                                const e = r.current.getBoundingClientRect(),
                                    t = l.current.getBoundingClientRect(),
                                    n = {
                                        width: i.O.view.pxToRem(e.width),
                                        height: i.O.view.pxToRem(e.height),
                                        offsetX: i.O.view.pxToRem(e.left),
                                        offsetY: i.O.view.pxToRem(e.top),
                                        bottomMargin: Math.round(i.O.view.pxToRem(window.outerHeight - t.top)),
                                    };
                                window.tutorialApi.updateComponents(), n.offsetX && n.width && a.resized(n);
                            }, [a]);
                        return (
                            $(d, m, { intervalMs: 50, minStableTicks: 8, listenResize: !0 }, [e, c]),
                            o().createElement(
                                o().Fragment,
                                null,
                                !e && o().createElement('div', { className: Vl, ref: r }, o().createElement(Zl, null)),
                                o().createElement(
                                    'div',
                                    { className: Ul, ref: l },
                                    _ && o().createElement(jl, { isHidden: t }),
                                ),
                            )
                        );
                    });
                var Xl = n(5096),
                    Kl = n(5958);
                const Yl = {
                        base__tiny: 'SectionsSwapTransition_base__tiny_fe',
                        base__enter: 'SectionsSwapTransition_base__enter_9c',
                        base__exitActive: 'SectionsSwapTransition_base__exitActive_c5',
                        base__exitFade: 'SectionsSwapTransition_base__exitFade_5d',
                        'animation-fade': 'SectionsSwapTransition_animation-fade_8e',
                        base__enterFade: 'SectionsSwapTransition_base__enterFade_d1',
                        base__exitLeft: 'SectionsSwapTransition_base__exitLeft_6c',
                        'animation-left': 'SectionsSwapTransition_animation-left_02',
                        base__exitRight: 'SectionsSwapTransition_base__exitRight_1e',
                        'animation-right': 'SectionsSwapTransition_animation-right_6c',
                        base__enterLeft: 'SectionsSwapTransition_base__enterLeft_5a',
                        base__enterRight: 'SectionsSwapTransition_base__enterRight_90',
                        base__exitTop: 'SectionsSwapTransition_base__exitTop_b5',
                        'animation-top': 'SectionsSwapTransition_animation-top_cc',
                        base__exitTopFade: 'SectionsSwapTransition_base__exitTopFade_3d',
                        'animation-top-fade': 'SectionsSwapTransition_animation-top-fade_ba',
                        base__exitBottom: 'SectionsSwapTransition_base__exitBottom_7c',
                        base__exitBottomFade: 'SectionsSwapTransition_base__exitBottomFade_fa',
                        'animation-bottom-fade': 'SectionsSwapTransition_animation-bottom-fade_c5',
                        base__enterTop: 'SectionsSwapTransition_base__enterTop_bd',
                        base__enterTopFade: 'SectionsSwapTransition_base__enterTopFade_48',
                        base__enterBottom: 'SectionsSwapTransition_base__enterBottom_0c',
                        'animation-bottom': 'SectionsSwapTransition_animation-bottom_c9',
                        base__enterBottomFade: 'SectionsSwapTransition_base__enterBottomFade_55',
                    },
                    Jl = (0, x.Pi)(
                        ({
                            children: e,
                            index: t,
                            mediaSize: n,
                            leftID: a,
                            rightID: s,
                            uniqueKey: i,
                            onTransitionEnd: r,
                        }) => {
                            const l = nr(i),
                                _ = n === Ea.cJ.Tiny,
                                d = a === t,
                                m = l && l !== i,
                                p = (0, u.useMemo)(
                                    () => (m ? (_ ? (d ? 'Bottom' : 'Top') : d ? 'Right' : 'Left') : ''),
                                    [d, _, m],
                                ),
                                b = (0, u.useMemo)(() => ((s - a > 1 && _) || !m ? 'Fade' : ''), [m, a, s, _]),
                                g = (0, u.useCallback)(
                                    (e) =>
                                        o().cloneElement(e, {
                                            classNames: {
                                                enterActive: Yl.base__enter,
                                                enterDone: Yl[`base__enter${p}${b}`],
                                                exit: Yl[`base__exit${p}${b}`],
                                                exitActive: Yl.base__exitActive,
                                            },
                                        }),
                                    [p, b],
                                ),
                                E = (0, u.useCallback)(
                                    (e) => {
                                        setTimeout(() => {
                                            (e.className = ''), r && r();
                                        }, Kl.PD);
                                    },
                                    [r],
                                ),
                                h = (0, u.useMemo)(() => ({ animationDuration: `${Kl.PD}ms` }), []);
                            return o().createElement(
                                K.Z,
                                { component: null, childFactory: g },
                                o().createElement(
                                    Y.Z,
                                    { key: i, timeout: Kl.PD, onEntered: E },
                                    o().createElement(
                                        'div',
                                        { className: c()(Yl.base, Yl[`base__${n}`]), style: h },
                                        e,
                                    ),
                                ),
                            );
                        },
                    );
                var Ql = n(2094);
                const ec = {
                        base: 'Shell_base_4d',
                        base__tiny: 'Shell_base__tiny_a9',
                        shell: 'Shell_shell_61',
                        icon: 'Shell_icon_55',
                        base__large: 'Shell_base__large_aa',
                        base__huge: 'Shell_base__huge_a8',
                        count: 'Shell_count_ed',
                        count__zero: 'Shell_count__zero_45',
                        name: 'Shell_name_29',
                        base__small: 'Shell_base__small_eb',
                        base__medium: 'Shell_base__medium_5e',
                        ammunition: 'Shell_ammunition_00',
                        specifications: 'Shell_specifications_33',
                    },
                    tc = {
                        base: 'Specification_base_e9',
                        base__medium: 'Specification_base__medium_2f',
                        base__large: 'Specification_base__large_47',
                        base__huge: 'Specification_base__huge_0b',
                        units: 'Specification_units_7e',
                        separator: 'Specification_separator_46',
                        separator__tiny: 'Specification_separator__tiny_11',
                        value: 'Specification_value_bf',
                    },
                    nc = (0, x.Pi)(({ shellID: e, specificationID: t }) => {
                        const n = (0, Ea.GS)(),
                            a = n === Ea.cJ.Tiny,
                            s = (0, ga.t)().model.computes.shells.specification(e, t),
                            i = s.paramName,
                            r = s.value,
                            l = s.metricValue,
                            _ = (0, u.useMemo)(() => {
                                if ('avgPiercingPower' === i) return R.strings.menu.tank_params.no_brackets.mm();
                            }, [i]);
                        return 'avgPiercingPower' === i || (!a && r)
                            ? o().createElement(
                                  'div',
                                  { className: c()(tc.base, n && tc[`base__${n}`]) },
                                  a
                                      ? o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.shortened.$dyn(i),
                                            ' ',
                                            o().createElement(
                                                'div',
                                                { className: tc.value },
                                                r || o().createElement('span', null, '—'),
                                            ),
                                            o().createElement('div', { className: tc.units }, _),
                                        )
                                      : o().createElement(
                                            o().Fragment,
                                            null,
                                            R.strings.menu.tank_params.$dyn(i),
                                            o().createElement('div', { className: tc.units }, l),
                                            o().createElement('div', {
                                                className: c()(tc.separator, n && tc[`separator__${n}`]),
                                            }),
                                            o().createElement(
                                                'div',
                                                { className: tc.value },
                                                r || o().createElement('span', null, '—'),
                                            ),
                                        ),
                              )
                            : null;
                    }),
                    ac = {
                        base: 'Specifications_base_1e',
                        base__tiny: 'Specifications_base__tiny_63',
                        base__medium: 'Specifications_base__medium_09',
                        base__large: 'Specifications_base__large_27',
                        overall: 'Specifications_overall_da',
                    };
                var sc = n(7405),
                    ic = n(329);
                const rc = {
                    base__tiny: 'TotalRow_base__tiny_c9',
                    row: 'TotalRow_row_f2',
                    row__medium: 'TotalRow_row__medium_fd',
                    row__large: 'TotalRow_row__large_44',
                    row__huge: 'TotalRow_row__huge_e2',
                    rowItem: 'TotalRow_rowItem_ff',
                    separator: 'TotalRow_separator_a2',
                    separator__tiny: 'TotalRow_separator__tiny_7a',
                    total: 'TotalRow_total_f7',
                    total__tiny: 'TotalRow_total__tiny_bf',
                    colored: 'TotalRow_colored_33',
                    overall: 'TotalRow_overall_09',
                    value: 'TotalRow_value_b8',
                    lowResolutionValue: 'TotalRow_lowResolutionValue_a2',
                    lowResolutionValue__tiny: 'TotalRow_lowResolutionValue__tiny_e6',
                    hiResolutionValue: 'TotalRow_hiResolutionValue_fa',
                    hiResolutionValue__tiny: 'TotalRow_hiResolutionValue__tiny_94',
                    price: 'TotalRow_price_4a',
                    price__final: 'TotalRow_price__final_d4',
                    indent: 'TotalRow_indent_0e',
                    divider: 'TotalRow_divider_94',
                };
                function uc() {
                    return (
                        (uc = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        uc.apply(null, arguments)
                    );
                }
                const oc = R.strings.tank_setup.shells,
                    lc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, Ea.GS)(),
                            n = t === Ea.cJ.Tiny,
                            a = (0, ga.t)().model,
                            s = a.computes.shells.shell(e),
                            i = s.buyCount,
                            r = s.itemsInStorage,
                            l = s.itemsInVehicle,
                            _ = s.totalPrice,
                            d = s.price,
                            m = a.computes.shells.defPriceLength(e),
                            p = a.computes.shells.priceLength(e) ? a.computes.shells.price(e, 0) : null,
                            b = m ? a.computes.shells.defPrice(e, 0) : null,
                            g = (0, u.useMemo)(() => oc[n ? 'shortSpecification' : 'specification'].inStorage(), [n]),
                            E = (0, u.useMemo)(() => oc[n ? 'shortSpecification' : 'specification'].inVehicle(), [n]),
                            h = (0, u.useMemo)(() => oc[n ? 'shortSpecification' : 'specification'].price(), [n]),
                            v = l >= 0,
                            f = m > 0,
                            C = (0, u.useMemo)(
                                () =>
                                    p && b
                                        ? {
                                              tooltip: 'priceDiscount',
                                              price: p.value,
                                              defPrice: b.value,
                                              currencyType: p.name,
                                          }
                                        : void 0,
                                [b, p],
                            );
                        return o().createElement(
                            'div',
                            { className: c()(rc.base, t && rc[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: c()(rc.row, t && rc[`row__${t}`]) },
                                o().createElement(
                                    'div',
                                    { className: rc.rowItem },
                                    o().createElement('div', { className: c()(rc.total, t && rc[`total__${t}`]) }, g),
                                    o().createElement(
                                        'div',
                                        { className: c()(rc.lowResolutionValue, t && rc[`lowResolutionValue__${t}`]) },
                                        o().createElement('span', { className: rc.indent }),
                                        r,
                                    ),
                                ),
                                v &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('span', { className: rc.divider }, '/'),
                                        o().createElement(
                                            'div',
                                            { className: rc.rowItem },
                                            o().createElement(
                                                'div',
                                                { className: c()(rc.total, t && rc[`total__${t}`]) },
                                                o().createElement(
                                                    'div',
                                                    { className: c()(rc.colored, t && rc[`colored__${t}`]) },
                                                    E,
                                                ),
                                            ),
                                            o().createElement(
                                                'div',
                                                {
                                                    className: c()(
                                                        rc.lowResolutionValue,
                                                        t && rc[`lowResolutionValue__${t}`],
                                                    ),
                                                },
                                                o().createElement('span', { className: rc.indent }),
                                                l,
                                            ),
                                        ),
                                    ),
                                o().createElement('div', { className: c()(rc.separator, t && rc[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: c()(rc.hiResolutionValue, t && rc[`hiResolutionValue__${t}`]) },
                                    r,
                                    v &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement('span', { className: rc.divider }, '/'),
                                            o().createElement(
                                                'div',
                                                { className: c()(rc.colored, t && rc[`colored__${t}`]) },
                                                l,
                                            ),
                                        ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: c()(rc.row, t && rc[`row__${t}`]) },
                                o().createElement('div', { className: c()(rc.total, t && rc[`total__${t}`]) }, h),
                                o().createElement('div', { className: c()(rc.separator, t && rc[`separator__${t}`]) }),
                                o().createElement(
                                    'div',
                                    { className: rc.value },
                                    o().createElement(
                                        'div',
                                        { className: rc.overall },
                                        '(',
                                        o().createElement('span', null, i),
                                        ' ×',
                                        o().createElement(
                                            Bt.t,
                                            { args: C, isEnabled: f },
                                            o().createElement(
                                                'span',
                                                { className: rc.price },
                                                o().createElement(wr.t, uc({ showZero: !0 }, d)),
                                            ),
                                        ),
                                        ')',
                                        o().createElement(
                                            'span',
                                            { className: c()(rc.price, rc.price__final) },
                                            i
                                                ? o().createElement(wr.t, uc({ showZero: !0, ignoreDiscount: !0 }, _))
                                                : o().createElement(sc.F, {
                                                      size: ic.et.small,
                                                      type: ic.V2.credits,
                                                      value: 0,
                                                  }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    cc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, Ea.GS)(),
                            n = (0, ga.t)().model.computes.shells.specificationsLength(e);
                        return o().createElement(
                            'div',
                            { className: c()(ac.base, t && ac[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: ac.overall },
                                U(n, (t) =>
                                    o().createElement(
                                        u.Fragment,
                                        { key: t },
                                        o().createElement(nc, { shellID: e, specificationID: t }),
                                    ),
                                ),
                            ),
                            o().createElement('div', { className: ac.total }, o().createElement(lc, { id: e })),
                        );
                    }),
                    _c = R.images.gui.maps.icons.shell,
                    dc = (0, x.Pi)(({ id: e }) => {
                        const t = (0, Ea.GS)(),
                            n = (0, ga.t)(),
                            a = n.model,
                            s = n.controls,
                            i = a.computes.shells.shell(e),
                            r = i.count,
                            l = i.type,
                            _ = i.intCD,
                            d = i.imageName,
                            m = i.installedSlotId,
                            p = i.itemInstalledSetupIdx,
                            b = i.itemInstalledSetupSlotIdx,
                            g = i.isMountedMoreThanOne,
                            E = a.shellsSetup.get(),
                            h = E.installedCount,
                            v = E.maxCount,
                            f = E.clipCount,
                            C = v - h + r,
                            A = (0, u.useCallback)(
                                (e) => {
                                    s.shells.updateSlot && s.shells.updateSlot({ intCD: _, newCount: e });
                                },
                                [s, _],
                            ),
                            D = (0, u.useMemo)(() => {
                                const e = { slotType: B.g9, fieldType: 0, intCD: _ };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: m,
                                        itemInstalledSetupIdx: p,
                                        itemInstalledSetupSlotIdx: b,
                                        isMountedMoreThanOne: g,
                                    }),
                                ];
                            }, [_, m, p, b, g]),
                            S = D[0],
                            F = D[1],
                            y = (0, u.useMemo)(() => {
                                const e = ((e) => {
                                    switch (e) {
                                        case Ea.cJ.Huge:
                                        case Ea.cJ.Large:
                                            return _c.large;
                                        default:
                                            return _c.big;
                                    }
                                })(t);
                                return { backgroundImage: `url(${e ? e.$dyn(d) : ''})` };
                            }, [d, t]),
                            w = R.strings.item_types.shell.kinds.$dyn(l),
                            k = systemLocale.toUpperCase(w);
                        return o().createElement(
                            'div',
                            { className: c()(ec.base, t && ec[`base__${t}`]) },
                            o().createElement(
                                'div',
                                { className: ec.shell },
                                o().createElement(
                                    Vt,
                                    { args: F },
                                    o().createElement(
                                        Bt.t,
                                        { args: S },
                                        o().createElement(
                                            'div',
                                            { className: ec.icon, style: y },
                                            o().createElement(
                                                'div',
                                                { className: c()(ec.count, !r && ec.count__zero) },
                                                r,
                                            ),
                                        ),
                                    ),
                                ),
                                o().createElement('div', { className: ec.name }, k),
                            ),
                            o().createElement(
                                'div',
                                { className: ec.ammunition },
                                o().createElement(Ql.i, {
                                    parentId: `${_}-slider`,
                                    currentValue: r,
                                    maximum: v,
                                    sliderMaximum: C,
                                    onUpdates: A,
                                    stepCount: f,
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: ec.specifications },
                                o().createElement(cc, { id: e }),
                            ),
                        );
                    }),
                    mc = { base: 'Swap_base_91', base__tiny: 'Swap_base__tiny_4f' },
                    pc = ({ id: e, onSwap: t, mediaSize: n, hoverSound: a = 'highlight', clickSound: s = 'play' }) => {
                        const i = (0, u.useCallback)(() => {
                                s && (0, st.G)(s), t(e);
                            }, [e, t, s]),
                            r = (0, u.useCallback)(() => {
                                a && (0, st.G)(a);
                            }, [a]);
                        return o().createElement('div', {
                            id: `swap-${e}`,
                            onClick: i,
                            onMouseEnter: r,
                            className: c()(mc.base, mc[`base__${n}`]),
                        });
                    },
                    bc = {
                        base: 'ShellContainer_base_d7',
                        base__tiny: 'ShellContainer_base__tiny_4b',
                        base__large: 'ShellContainer_base__large_10',
                        base__huge: 'ShellContainer_base__huge_74',
                        swap: 'ShellContainer_swap_14',
                        swap__noEvents: 'ShellContainer_swap__noEvents_e5',
                        swap__tiny: 'ShellContainer_swap__tiny_f2',
                        swap__large: 'ShellContainer_swap__large_60',
                        swap__huge: 'ShellContainer_swap__huge_b8',
                    },
                    gc = (0, x.Pi)(({ id: e, onTransitionEnd: t, onSwap: n, leftID: a, rightID: s }) => {
                        const i = (0, Ea.GS)(),
                            r = (0, ga.t)().model,
                            u = r.computes.shells.length(),
                            l = r.computes.shells.shell(e).intCD;
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                Jl,
                                { index: e, uniqueKey: l, leftID: a, rightID: s, mediaSize: i, onTransitionEnd: t },
                                o().createElement(
                                    'div',
                                    { className: c()(bc.base, i && bc[`base__${i}`]) },
                                    o().createElement(dc, { id: e }),
                                ),
                            ),
                            e !== u - 1 &&
                                o().createElement(
                                    'div',
                                    { className: c()(bc.swap, i && bc[`swap__${i}`]) },
                                    o().createElement(pc, { id: e, mediaSize: i, onSwap: n }),
                                ),
                        );
                    }),
                    Ec = {
                        base: 'Sections_base_c8',
                        base__tiny: 'Sections_base__tiny_71',
                        base__large: 'Sections_base__large_d0',
                    },
                    hc = (0, x.Pi)(() => {
                        const e = (0, ga.t)(),
                            t = e.model,
                            n = e.controls,
                            a = t.computes.shells.length(),
                            s = (0, u.useState)(!1),
                            i = s[0],
                            r = s[1],
                            l = (0, Ea.GS)(),
                            _ = t.computes.shells.ids(),
                            d = nr(_),
                            m = (0, u.useMemo)(() => {
                                const e = _.filter((e, t) => {
                                    if (d && d[t] !== e) return !0;
                                });
                                return e.length > 1
                                    ? { leftID: _.indexOf(e[0]), rightID: _.indexOf(e[1]) }
                                    : { leftID: -1, rightID: -1 };
                            }, [_, d]),
                            p = m.leftID,
                            b = m.rightID,
                            g = (0, u.useCallback)(
                                (e) => {
                                    i || n.shells.actSlot({ actionType: ar.Xo, leftID: e, rightID: e + 1 }), r(!0);
                                },
                                [n, i],
                            ),
                            E = (0, u.useCallback)(() => {
                                r(!1);
                            }, [r]);
                        return o().createElement(
                            'div',
                            { className: c()(Ec.base, Ec[`base__${l}`]) },
                            U(a, (e) =>
                                o().createElement(gc, {
                                    id: e,
                                    onTransitionEnd: E,
                                    onSwap: g,
                                    leftID: p,
                                    rightID: b,
                                    key: `shell-container-${e}`,
                                }),
                            ),
                        );
                    }),
                    vc = (0, x.Pi)(() => {
                        const e = (0, Ea.GS)(),
                            t = (0, ga.t)().controls;
                        return o().createElement(Ea.Ar, {
                            header: o().createElement(
                                Ou,
                                { title: R.strings.tank_setup.section.shells() },
                                o().createElement(Xl.k, { isShortened: !0 }),
                            ),
                            content: o().createElement(hc, null),
                            footer: o().createElement(Yu.w, {
                                withConfirmation: !0,
                                renewalType: Ku.my.Shells,
                                parentModelPath: 'model.tankSetup.shellsSetup',
                                mediaSize: e,
                                onDealConfirmed: t.shells.confirmDeal,
                                onDealCancelled: t.shells.cancelDeal,
                                onAutoRenewalChanged: t.shells.changeAutoRenewal,
                            }),
                        });
                    }),
                    fc = {
                        base: 'Animation_base_bf',
                        base__leftEnter: 'Animation_base__leftEnter_5f',
                        base__rightEnter: 'Animation_base__rightEnter_c1',
                        base__leftEntering: 'Animation_base__leftEntering_9c',
                        'animation-show-left': 'Animation_animation-show-left_24',
                        base__rightEntering: 'Animation_base__rightEntering_8d',
                        'animation-show-right': 'Animation_animation-show-right_bb',
                        base__exit: 'Animation_base__exit_b5',
                        base__previous: 'Animation_base__previous_09',
                        base__leftExit: 'Animation_base__leftExit_f1',
                        'animation-hide-left': 'Animation_animation-hide-left_df',
                        base__rightExit: 'Animation_base__rightExit_e3',
                        'animation-hide-right': 'Animation_animation-hide-right_fe',
                    },
                    Cc = [B.zn, B.g9, B.mH, B.G$, B.YN],
                    Ac = (e, t) => (t === e ? '' : Cc.indexOf(t) > Cc.indexOf(e) ? 'right' : 'left'),
                    Dc = ({ children: e, selectedSetup: t }) => {
                        const n = o().createRef(),
                            a = (0, u.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, u.useMemo)(() => {
                                const e = Ac(a.current.selectedSetup, t);
                                return { enter: fc[`base__${e}Enter`] };
                            }, [t]),
                            i = (0, u.useCallback)(
                                (e) => {
                                    const s = Ac(a.current.selectedSetup, t);
                                    (e.className = c()(fc.base, fc.base__exit)),
                                        e.classList.add(fc[`base__${s}Exit`]),
                                        (a.current.animatedElements[t] = n);
                                    Object.values(a.current.animatedElements).forEach((e) => {
                                        e.current && e.current.classList.remove(fc.base__previous);
                                    }),
                                        n.current && n.current.classList.add(fc.base__previous);
                                },
                                [n, t],
                            ),
                            r = (0, u.useCallback)(
                                (e) => {
                                    const n = Ac(a.current.previousSelectedSetup, t);
                                    (e.className = fc.base), e.classList.add(fc[`base__${n}Enter`]);
                                },
                                [t],
                            ),
                            l = (0, u.useCallback)(
                                (e) => {
                                    const n = Ac(a.current.previousSelectedSetup, t);
                                    e.classList.add(fc[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            _ = (0, u.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            o().createElement(
                                K.Z,
                                null,
                                o().createElement(
                                    Y.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: s,
                                        onExit: i,
                                        onEnter: r,
                                        onEntering: l,
                                    },
                                    o().createElement('div', { className: fc.base, ref: n }, _),
                                ),
                            )
                        );
                    },
                    Sc = (0, x.Pi)(({ compare: e = !1 }) => {
                        const t = ba().model.tankSetup.get().selectedSetup;
                        return o().createElement(
                            u.Fragment,
                            null,
                            o().createElement(
                                Dc,
                                { selectedSetup: t },
                                (() => {
                                    switch (t) {
                                        case B.zn:
                                            return o().createElement(Il, { compare: e });
                                        case B.g9:
                                            return o().createElement(vc, null);
                                        case B.mH:
                                            return o().createElement(Sl, { compare: e });
                                        case B.G$:
                                            return o().createElement(Dl, { compare: e });
                                        case B.YN:
                                            return o().createElement(Xu, null);
                                        default:
                                            return o().createElement(Il, { compare: e });
                                    }
                                })(),
                            ),
                            !e &&
                                o().createElement(ql, {
                                    isBattleAbilities: t === B.YN,
                                    arePopularLoadoutsHidden: t !== B.zn,
                                }),
                        );
                    }),
                    Fc = (0, x.Pi)(() => {
                        const e = (0, ga.t)(),
                            t = e.model,
                            n = e.controls,
                            a = t.tankSetup.get().selectedSetup,
                            s = E().mediaWidth,
                            i = (0, u.useState)(!1),
                            r = i[0],
                            l = i[1];
                        (0, u.useEffect)(() => (0, k.v)(n.viewRendered), [n]);
                        const c = (0, u.useCallback)(() => {
                            r || n.close();
                        }, [r, n]);
                        return o().createElement(
                            pa.Provider,
                            { value: e },
                            o().createElement(
                                ma.Sf,
                                {
                                    show: t.show.get(),
                                    panel: o().createElement(
                                        H.k,
                                        null,
                                        o().createElement(da, {
                                            show: t.show.get(),
                                            isReady: t.isReady.get(),
                                            panelType: Se.w.Setup,
                                            setIsExitBlocked: l,
                                        }),
                                    ),
                                    button:
                                        a === B.YN &&
                                        s > m.j.medium.width &&
                                        o().createElement(Hu, { id: 'scenarios_btn', theme: $u.Standalone }),
                                    onAnimationDone: n.animationEnded,
                                    onClose: c,
                                },
                                o().createElement(Sc, null),
                            ),
                        );
                    });
                i.O.view.whenTutorialReady.then(() => {
                    w().render(
                        o().createElement(ga.k, null, o().createElement(F, null, o().createElement(Fc, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1922: (e, t, n) => {
                'use strict';
                n.d(t, { Ar: () => _, GS: () => c, cJ: () => l });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7739),
                    r = n(7363),
                    u = n.n(r),
                    o = n(1960);
                let l;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(l || (l = {}));
                const c = () => {
                        const e = (0, r.useContext)(i.YN);
                        return e.extraSmall
                            ? l.Tiny
                            : e.small
                              ? l.Small
                              : e.medium || 1080 === e.height
                                ? l.Medium
                                : e.large
                                  ? l.Large
                                  : e.extraLarge
                                    ? l.Huge
                                    : l.None;
                    },
                    _ = ({ header: e, content: t, aside: n, footer: a, compare: i = !1 }) => {
                        const r = c(),
                            l = s()(o.Z.base, r && o.Z[`base__${r}`], i && o.Z.base__compare),
                            _ = s()(o.Z.header, r && o.Z[`header__${r}`]),
                            d = s()(o.Z.main),
                            m = s()(o.Z.content);
                        return u().createElement(
                            'div',
                            { className: l },
                            e && u().createElement('div', { className: _ }, e),
                            u().createElement(
                                'div',
                                { className: m },
                                u().createElement(
                                    'div',
                                    { className: d },
                                    u().createElement('div', { className: o.Z.inner }, t),
                                ),
                                n,
                            ),
                            a && u().createElement('div', { className: o.Z.footer }, a),
                        );
                    };
            },
            3522: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(4598),
                    s = n(9480),
                    i = n(3946),
                    r = n(1922);
                const u = [
                        'qualityFuel',
                        'excellentFuel',
                        'ration',
                        'chocolate',
                        'cocacola',
                        'hotCoffee',
                        'ration_uk',
                        'ration_czech',
                        'ration_china',
                        'ration_japan',
                        'ration_poland',
                        'ration_sweden',
                        'ration_italy',
                    ],
                    o = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...u,
                    ],
                    l = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...u,
                    ],
                    c = (e) =>
                        s.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: s.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: s.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: s.UI(e.price.discount, (e) => Object.assign({}, e)),
                                }),
                            }),
                        ),
                    _ = (e) => {
                        const t = {
                                root: e.object(),
                                tankSetup: e.object('tankSetup'),
                                vehicleInfo: e.object('vehicleInfo'),
                                lastSlotAction: e.object('lastSlotAction'),
                                optDevices: {
                                    slots: e.array('tankSetup.optDevicesSetup.slots'),
                                    setup: e.object('tankSetup.optDevicesSetup'),
                                    filter: e.array('tankSetup.optDevicesSetup.filter'),
                                    tabs: e.array('tankSetup.optDevicesSetup.tabs'),
                                    specialCurrency: e.array('tankSetup.optDevicesSetup.specialCurrency'),
                                },
                                consumables: {
                                    consumables: e.object('tankSetup.consumablesSetup'),
                                    slots: e.array('tankSetup.consumablesSetup.slots'),
                                },
                                boosters: {
                                    tabs: e.object('tankSetup.battleBoostersSetup.tabs'),
                                    slots: e.array('tankSetup.battleBoostersSetup.slots'),
                                },
                            },
                            n = (0, i.Om)(
                                () =>
                                    ((e) => {
                                        const t = c(e);
                                        return s.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: s.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: s.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: s.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: a.jv },
                            ),
                            u = (0, i.Om)(() => n().length),
                            _ = (0, i.Om)(
                                (e) => {
                                    const t = s.U2(n(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: a.jv },
                            ),
                            d = (0, i.Om)((e) => _(e).bonuses.items.length, { equals: a.jv }),
                            m = (0, i.Om)(
                                (e, t) => {
                                    const n = _(e),
                                        a = s.U2(n.bonuses.items, t);
                                    if (!a) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            p = (0, i.Om)((e) => {
                                const t = d(e);
                                return _(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            b = (0, i.Om)((e, t, n) => {
                                const a = d(e),
                                    s = p(e);
                                let i = s ? n - s : n,
                                    r = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!i) return null;
                                    (r = a > 2 ? 1 : 2 === a ? (i > 2 ? 2 : 1) : i), (i -= r);
                                }
                                return r;
                            }),
                            g = (0, i.Om)(
                                (e, t) => {
                                    const n = m(e, t);
                                    return s.dF(n.values, ({ valueKey: e }) => e === n.localeName);
                                },
                                { equals: a.jv },
                            ),
                            E = (0, i.Om)(
                                (e, n) =>
                                    ((e, t, n) => {
                                        const a = n !== r.cJ.Tiny || t ? o : l,
                                            i = c(e),
                                            u = s.u4(
                                                i,
                                                (e, t) => {
                                                    const n = a.indexOf(t.itemName);
                                                    return (e[-1 === n ? Math.max(e.length, l.length) : n] = t), e;
                                                },
                                                [],
                                            );
                                        return s.hX(u, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, n),
                                { equals: a.jv },
                            ),
                            h = (0, i.Om)((e, t) => E(e, t).length),
                            v = (0, i.Om)(
                                (e, t, n) => {
                                    const a = s.U2(E(t, n), e);
                                    if (!a) throw Error(`No consumable found with index: ${a}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            f = (0, i.Om)(
                                () => {
                                    return (e = t.boosters.slots.get()), c(e);
                                    var e;
                                },
                                { equals: a.jv },
                            ),
                            C = (0, i.Om)(() => f().length),
                            A = (0, i.Om)(
                                (e) => {
                                    const t = s.U2(f(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: a.jv },
                            );
                        return {
                            model: t,
                            computes: {
                                optDevices: {
                                    slotsLength: u,
                                    device: _,
                                    bonusesLength: d,
                                    bonus: m,
                                    bonusEffectLinesCount: p,
                                    bonusVisibleLinesCount: b,
                                    bonusValue: g,
                                },
                                consumables: { length: h, consumable: v },
                                boosters: { length: C, booster: A },
                            },
                        };
                    };
            },
            3028: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => c, t: () => _ });
                var a = n(5344),
                    s = n(3215),
                    i = n(4598),
                    r = n(9480),
                    u = n(3946),
                    o = n(3522);
                const l = (0, s.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, o._)(e),
                                n = t.model,
                                s = t.computes,
                                l = e.object('tankSetup.shellsSetup'),
                                c = e.array('tankSetup.shellsSetup.slots'),
                                _ = e.object('ammunitionPanel'),
                                d = e.array('ammunitionPanel.sectionGroups'),
                                m = e.object('optionalDevicesAssistant'),
                                p = e.array('optionalDevicesAssistant.optionalDevicesAssistantPresets'),
                                b = e.object('optionalDevicesAssistant.selectedPreset'),
                                g = () =>
                                    r.UI(p.get(), (e) =>
                                        Object.assign({}, e, {
                                            optionalDevicesAssistantItems: r.UI(e.optionalDevicesAssistantItems, (e) =>
                                                Object.assign({}, e, { items: r.UI(e.items, i.yR) }),
                                            ),
                                        }),
                                    ),
                                E = (e) =>
                                    r.u4(
                                        p.get(),
                                        (t, n) => {
                                            if (n.presetType.mType === e) {
                                                const e = r.UI(n.optionalDevicesAssistantItems, (e) =>
                                                    Object.assign({}, e, { items: r.UI(e.items, i.yR) }),
                                                );
                                                t.push(...e);
                                            }
                                            return t;
                                        },
                                        [],
                                    ),
                                h = (0, u.Om)(() => E(0).sort((e, t) => t.popularity - e.popularity)),
                                v = (0, u.Om)(() => E(1).sort((e, t) => t.popularity - e.popularity)),
                                f = (0, u.Om)(
                                    (e) => {
                                        const t = r.U2(c.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: i.jv },
                                ),
                                C = (0, u.Om)(() => c.get().length),
                                A = (0, u.Om)(() => r.UI(c.get(), (e) => e.intCD), { equals: i.jv }),
                                D = (0, u.Om)((e) => f(e).specifications.length),
                                S = (0, u.Om)(
                                    (e, t) => {
                                        const n = f(e),
                                            a = r.U2(n.specifications, t);
                                        if (!a) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: i.jv },
                                ),
                                F = (0, u.Om)(
                                    (e, t) => {
                                        const n = f(e),
                                            a = r.U2(n.price.price, t);
                                        if (!a) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: i.jv },
                                ),
                                y = (0, u.Om)(
                                    (e, t) => {
                                        const n = f(e),
                                            a = r.U2(n.price.defPrice, t);
                                        if (!a) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: i.jv },
                                ),
                                w = (0, u.Om)((e) => f(e).price.price.length),
                                B = (0, u.Om)((e) => f(e).price.defPrice.length),
                                k = (0, u.Om)(() => {
                                    const e = _.get().selectedSlot,
                                        t = r.U2(d.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const n = r.U2(t.sections, 0);
                                    if (!n) throw Error('No section found');
                                    const a = r.U2(n.slots, e);
                                    if (!a) throw Error(`No slot found with index: ${e}`);
                                    const s = r.U2(a.specializations.specializations, 0);
                                    return null == s ? void 0 : s.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), n, {
                                shellsSetup: l,
                                shellsSlots: c,
                                ammunitionPanel: _,
                                sectionGroups: d,
                                optionalDevicesAssistant: m,
                                selectedPreset: b,
                                computes: Object.assign({}, s, {
                                    getOptionalDevicesAssistantItemsByType: E,
                                    getSortedCommonItems: h,
                                    getSortedLegendaryItems: v,
                                    getOptionalDevicesAssistantPresets: g,
                                    getSourceVehicleCompDescrForPreset: (e) => {
                                        const t = g().find((t) => t.presetType.mType === e);
                                        return t ? t.sourceVehicleCompDescr : null;
                                    },
                                    getOptionalDevicesResultTypeForPreset: (e) => {
                                        const t = g().find((t) => t.presetType.mType === e);
                                        return t ? t.optionalDevicesResultType : 0;
                                    },
                                    getModeType: () => {
                                        var e;
                                        const t = a.d.Common || a.d.Legendary;
                                        return null == (e = g().find((e) => e.presetType.mType === t))
                                            ? void 0
                                            : e.modeType;
                                    },
                                    shells: {
                                        length: C,
                                        shell: f,
                                        specificationsLength: D,
                                        specification: S,
                                        price: F,
                                        priceLength: w,
                                        defPriceLength: B,
                                        defPrice: y,
                                        ids: A,
                                    },
                                    selectedSlotSpecialization: k,
                                }),
                            });
                        },
                        ({ externalModel: e }) => ({
                            onHintShown: e.createCallback(
                                () => ({ value: !0 }),
                                'optionalDevicesAssistant.onHintShown',
                            ),
                            onPresetSelected: e.createCallback(
                                (e) => ({ presetType: e }),
                                'optionalDevicesAssistant.onPresetSelected',
                            ),
                            close: e.createCallbackNoArgs('onClose'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            moreCurrencyGot: e.createCallbackNoArgs(
                                'tankSetup.optDevicesSetup.specialCurrency.onGetMoreCurrency',
                            ),
                            introPassed: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onIntroPassed'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                                confirmDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.optDevicesSetup.onAutoRenewalChanged',
                                ),
                            },
                            shells: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.shellsSetup.onAutoRenewalChanged',
                                ),
                                updateSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onShellUpdate',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onSlotAction',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    c = l[0],
                    _ = l[1];
            },
            8774: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => C });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3457),
                    r = n(2106),
                    u = n(6373),
                    o = n(7363),
                    l = n.n(o);
                const c = 'Action_base_bf',
                    _ = 'Action_base__hidden_4b',
                    d = 'Action_base__shown_9f',
                    m = 'Action_base__cut_26',
                    p = 'Action_action_b5',
                    b = 'Action_image_e9',
                    g = 'Action_button_74',
                    E = R.strings.tank_setup.tooltips.action,
                    h = ['cancel', 'undo'],
                    v = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var f;
                !(function (e) {
                    (e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn');
                })(f || (f = {}));
                const C = ({
                    parentId: e,
                    actionType: t,
                    imageSource: n = '',
                    show: a = !1,
                    disabled: C = !1,
                    disabledTooltipText: A,
                    tooltipBodyPath: D,
                    buttonType: S = r.L.primary,
                    isModernized: F,
                    isFreeToDemount: y,
                    level: w,
                    onClick: B,
                }) => {
                    const k = (0, o.useRef)(null),
                        x = (0, o.useRef)(f.Hidden),
                        T = (0, o.useRef)(!1),
                        I = (0, o.useState)(!a),
                        N = I[0],
                        L = I[1],
                        O = (0, o.useState)(!1),
                        M = O[0],
                        P = O[1],
                        $ = (0, o.useState)(),
                        H = $[0],
                        z = $[1],
                        W = (0, o.useCallback)(() => {
                            const e = x.current;
                            e === f.FadeIn
                                ? ((x.current = f.Hidden), L(!0))
                                : e === f.FadeOut && (x.current = f.Visible);
                        }, []);
                    (0, o.useEffect)(() => {
                        const e = k.current;
                        if (e)
                            return (
                                e.addEventListener('animationend', W),
                                () => {
                                    e.removeEventListener('animationend', W);
                                }
                            );
                    }, [W]),
                        (0, o.useEffect)(() => {
                            a !== T.current &&
                                (a ? ((x.current = f.FadeOut), L(!1)) : (x.current = f.FadeIn), (T.current = a));
                        }, [a]),
                        (0, o.useEffect)(() => {
                            if (M) {
                                const e = setTimeout(() => P(!1), 200);
                                return () => clearTimeout(e);
                            }
                        }, [M]),
                        (0, o.useEffect)(() => () => H && clearTimeout(H), [H]);
                    const j = (0, o.useCallback)(() => {
                            M || (P(!0), x.current === f.Visible && z(setTimeout(() => B(t), 200)));
                        }, [t, B, M]),
                        G = F ? v(t, w) : t,
                        Z = (0, o.useMemo)(() => {
                            if (C) return { body: A, isEnabled: Boolean(A) };
                            const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? v(e, t) : e))(t, w, y, F);
                            return {
                                header: E.title.$dyn(e),
                                body: h.includes(e) ? void 0 : E.description.$dyn(D || e),
                            };
                        }, [t, C, A, y, F, w, D]),
                        V = (0, o.useMemo)(
                            () => ({
                                backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(G)})`,
                            }),
                            [G, n],
                        );
                    return l().createElement(
                        'div',
                        { id: e, ref: k, className: s()(c, a ? d : _, N && m) },
                        l().createElement(
                            u.i,
                            Z,
                            l().createElement(
                                'div',
                                { className: p },
                                l().createElement(
                                    i.u5,
                                    { onClick: j, type: S, mixClass: g, disabled: C },
                                    l().createElement('div', { className: b, style: V }),
                                ),
                            ),
                        ),
                    );
                };
            },
            8586: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => h });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i),
                    u = n(3457),
                    o = n(6373);
                const l = 'CtaButtons_base_4c',
                    c = 'CtaButtons_content_9b',
                    _ = 'CtaButtons_substrate_2d',
                    d = 'CtaButtons_indicator_e9',
                    m = 'CtaButtons_toggle_64',
                    p = 'CtaButtons_toggle__on_40';
                function b() {
                    return (
                        (b = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        b.apply(null, arguments)
                    );
                }
                const g = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: i,
                    withToggle: l = !1,
                    toggle: g,
                    buttonProps: E,
                }) => {
                    const h = (0, a.useCallback)(() => {
                            i(t, g);
                        }, [t, i, g]),
                        v = (0, a.useMemo)(() => {
                            if (l) {
                                const t = r()(m, g && p);
                                return s().createElement(
                                    'div',
                                    { className: c },
                                    s().createElement('div', { className: _ }),
                                    g && s().createElement('div', { className: d }),
                                    s().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [l, e, g]);
                    return s().createElement(o.i, n, s().createElement(u.u5, b({}, E, { onClick: h }), v));
                };
                function E() {
                    return (
                        (E = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        E.apply(null, arguments)
                    );
                }
                const h = ({ ctaConfigs: e }) =>
                    s().createElement(
                        'div',
                        { className: l },
                        e.map((e) => s().createElement(g, E({ key: e.ctaType }, e))),
                    );
            },
            5310: (e, t, n) => {
                'use strict';
                n.d(t, { f: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(9916),
                    r = n(7363),
                    u = n.n(r),
                    o = n(2558),
                    l = n(8934),
                    c = n(8529);
                const _ = ({ children: e, when: t, canAccept: n }) => {
                    const a = (0, r.useCallback)((e, t) => {
                            (0, i.Eu)().then(() => {
                                (e.className = ''), e.classList.add(c.Z.base), e.classList.add(t);
                            });
                        }, []),
                        _ = (0, r.useCallback)(
                            (e) => {
                                a(e, c.Z.base__enter);
                            },
                            [a],
                        ),
                        d = (0, r.useCallback)(
                            (e) => {
                                a(e, c.Z.base__exit);
                            },
                            [a],
                        );
                    return t
                        ? u().createElement(
                              o.Z,
                              null,
                              u().createElement(
                                  l.Z,
                                  { in: n, timeout: 500, onEnter: _, onExit: d, key: `index-${n}` },
                                  u().createElement('div', { className: s()(c.Z.base, c.Z.base__withAnimation) }, e),
                              ),
                          )
                        : u().createElement('div', { className: c.Z.base }, e);
                };
            },
            8175: (e, t, n) => {
                'use strict';
                n.d(t, { my: () => v, sF: () => A });
                var a = n(6483),
                    s = n.n(a),
                    i = n(6373),
                    r = n(9480),
                    u = n(3403),
                    o = n(7363),
                    l = n.n(o),
                    c = n(1922),
                    _ = n(6391),
                    d = n(5310),
                    m = n(5851),
                    p = n(2306),
                    b = n(7198),
                    g = n(5178),
                    E = n(6826),
                    h = n(628);
                let v, f;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(v || (v = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(f || (f = {}));
                const C = R.strings.tank_setup.dealPanel,
                    A = (0, u.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: n = c.cJ.Medium,
                            panelType: a = f.Row,
                            priceLabel: u = C.toBePaid(),
                            autoRenewalLabel: v,
                            onAutoRenewalChanged: A,
                            onDealConfirmed: D,
                            onDealCancelled: S,
                            priceSeparator: F,
                            ignoreDiscount: y = !0,
                            discountTooltipEnabled: w = !1,
                            plusIconShown: B = !0,
                        }) => {
                            const k = (0, g.t)(),
                                x = k.model,
                                T = (0, o.useRef)(null),
                                I = n === c.cJ.Tiny || n === c.cJ.Small,
                                N = x.totalItemsInstalled.get(),
                                R = Boolean(x.totalItemsInStorage.get()),
                                L = Boolean(x.demountKitsCount.get()),
                                O = r.G(x.price.get(), (e) => e.value > 0) || L,
                                M = I && R && O && B;
                            return l().createElement(
                                p.h.Provider,
                                { value: k },
                                l().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            h.Z.base,
                                            n && h.Z[`base__${n}`],
                                            e && h.Z.base__renewal,
                                            a !== f.Row && h.Z.base__dialog,
                                        ),
                                    },
                                    e &&
                                        l().createElement(
                                            'div',
                                            { className: s()(h.Z.renewal, a !== f.Row && h.Z.renewal__dialog) },
                                            l().createElement(m.Y, { renewType: e, onValueChanged: A, label: v }),
                                        ),
                                    l().createElement(
                                        d.f,
                                        { when: a === f.Row, canAccept: x.canAccept.get() },
                                        l().createElement(
                                            l().Fragment,
                                            null,
                                            Boolean(N) &&
                                                l().createElement(
                                                    i.i,
                                                    { body: C.tooltip.fromVehicle(), isEnabled: I },
                                                    l().createElement(
                                                        'div',
                                                        { className: s()(h.Z.storage, n && h.Z[`storage__${n}`]) },
                                                        !I &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                C.fromVehicle(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'vehicle',
                                                            count: N,
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            R &&
                                                l().createElement(
                                                    i.i,
                                                    { body: C.tooltip.fromStorage(), isEnabled: I },
                                                    l().createElement(
                                                        'div',
                                                        { className: s()(h.Z.storage, n && h.Z[`storage__${n}`]) },
                                                        !I &&
                                                            l().createElement(
                                                                'div',
                                                                { className: h.Z.from },
                                                                C.fromStorage(),
                                                            ),
                                                        l().createElement(_.Y, {
                                                            location: 'storage',
                                                            count: x.totalItemsInStorage.get(),
                                                            countFirst: !0,
                                                        }),
                                                    ),
                                                ),
                                            M && l().createElement('div', { className: h.Z.plus }),
                                            O &&
                                                l().createElement(
                                                    'div',
                                                    { className: s()(h.Z.totalPrice, M && h.Z.totalPrice__mixed) },
                                                    l().createElement(E.M, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: u,
                                                        messageHidden: I && a === f.Row,
                                                        ignoreDiscount: y,
                                                        discountTooltipEnabled: w,
                                                        priceSeparator: F,
                                                    }),
                                                ),
                                            t &&
                                                x.canAccept.get() &&
                                                l().createElement(
                                                    'div',
                                                    { className: h.Z.control },
                                                    l().createElement(b.Z, {
                                                        isDisabled: x.isDisabled.get(),
                                                        canCancel: x.canCancel.get(),
                                                        onCancel: () => S && S(),
                                                        onConfirm: () => D && D(),
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
            5851: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => c });
                var a = n(2262),
                    s = n(6373),
                    i = n(3403),
                    r = n(7363),
                    u = n.n(r),
                    o = n(8175),
                    l = n(2306);
                const c = (0, i.Pi)(
                    ({
                        label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                        onValueChanged: t,
                        renewType: n = o.my.General,
                    }) => {
                        const i = (0, l.o)(),
                            c = i.model,
                            _ = i.controls,
                            d = c.dealPanel.get().isAutoRenewalEnabled,
                            m = (0, r.useCallback)(() => {
                                _.changeAutoRenewal(!d), t && t(!d);
                            }, [_, d, t]),
                            p = (0, r.useMemo)(() => {
                                const e = R.strings.tank_setup.tooltip.autoRenewal,
                                    t = e.header.$dyn(n),
                                    a = n === o.my.General ? '' : e.body.$dyn(n);
                                return { header: String(t || e.header.general()), body: a ? String(a) : void 0 };
                            }, [n]);
                        return u().createElement(
                            s.i,
                            p,
                            u().createElement(a.XZ, {
                                id: 'renewal-setup-checkbox',
                                isChecked: d,
                                text: e,
                                onChange: m,
                            }),
                        );
                    },
                );
            },
            1957: (e, t, n) => {
                'use strict';
                n.d(t, { p: () => u });
                var a = n(3457),
                    s = n(7363),
                    i = n.n(s),
                    r = n(2527);
                const u = i().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: s }) =>
                    i().createElement(
                        'div',
                        { ref: s, className: r.Z.base, id: 'deal-panel-confirm' },
                        i().createElement(
                            a.u5,
                            { size: a.qE.medium, disabled: t, onClick: () => n && n() },
                            R.strings.tank_setup.dealPanel.button.$dyn(e),
                        ),
                    ),
                );
            },
            7198: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3457),
                    s = n(6373),
                    i = n(7383),
                    r = n(7363),
                    u = n.n(r),
                    o = n(1957),
                    l = n(8099);
                const c = u().memo(
                    ({
                        applyBtnString: e = i.YR,
                        isDisabled: t,
                        canCancel: n,
                        onCancel: r,
                        onConfirm: c,
                        confirmButtonRef: _,
                    }) => {
                        const d = R.strings.tank_setup.dealPanel,
                            m = u().createElement(o.p, {
                                applyBtnString: e,
                                isDisabled: t,
                                onConfirm: c,
                                confirmButtonRef: _,
                            });
                        return u().createElement(
                            'div',
                            { className: l.Z.base },
                            t
                                ? u().createElement(
                                      s.i,
                                      { body: d.tooltip.notEnough() },
                                      u().createElement('div', null, m),
                                  )
                                : m,
                            u().createElement(
                                'div',
                                { id: 'deal-panel-cancel' },
                                u().createElement(
                                    a.u5,
                                    {
                                        size: a.qE.medium,
                                        type: a.L$.secondary,
                                        mixClass: l.Z.button,
                                        disabled: !n,
                                        onClick: r,
                                    },
                                    d.button.cancel(),
                                ),
                            ),
                        );
                    },
                );
            },
            3755: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => l });
                var a = n(3403),
                    s = n(7363),
                    i = n.n(s),
                    r = n(8175),
                    u = n(5178);
                const o = ['parentModelPath'];
                const l = (0, a.Pi)((e) => {
                    let t = e.parentModelPath,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, o);
                    const a = `${t}.dealPanel`;
                    return i().createElement(u.k, { options: { context: a } }, i().createElement(r.sF, n));
                });
            },
            6826: (e, t, n) => {
                'use strict';
                n.d(t, { M: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7363),
                    r = n.n(i),
                    u = n(9683),
                    o = n(8401),
                    l = n(5178),
                    c = n(1523);
                const _ = ({
                    parentId: e,
                    messageHidden: t,
                    ignoreDiscount: n,
                    discountTooltipEnabled: a,
                    priceLabel: i,
                    priceSeparator: _,
                }) => {
                    const d = (0, l.t)().model,
                        m = d.demountKitsCount.get();
                    return r().createElement(
                        'div',
                        { id: `${e}-total-price`, className: c.Z.base },
                        r().createElement('div', { className: s()(c.Z.message, t && c.Z.message__hidden) }, i),
                        Boolean(m) &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(u.k, { value: m, size: 'large' }),
                                null != _ ? _ : r().createElement('div', { className: c.Z.plus }),
                            ),
                        r().createElement(o.t, {
                            ignoreDiscount: n,
                            tooltipEnabled: a,
                            bigSize: !0,
                            price: d.price.get(),
                            defPrice: d.defPrice.get(),
                            discount: d.discount.get(),
                            priceSeparator: null != _ ? _ : r().createElement('div', { className: c.Z.plus }),
                        }),
                    );
                };
            },
            2306: (e, t, n) => {
                'use strict';
                n.d(t, { h: () => s, o: () => i });
                var a = n(7363);
                const s = (0, a.createContext)(null),
                    i = () => {
                        const e = (0, a.useContext)(s);
                        if (!e)
                            throw Error(
                                'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                            );
                        return e;
                    };
            },
            5178: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => s, t: () => i });
                const a = (0, n(3215).q3)()(
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
                    s = a[0],
                    i = a[1];
            },
            9683: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => o });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7363),
                    r = n.n(i);
                const u = {
                        base: 'DemountKit_base_b5',
                        icon: 'DemountKit_icon_27',
                        base__large: 'DemountKit_base__large_e1',
                        value: 'DemountKit_value_cd',
                    },
                    o = ({ value: e, size: t = 'small', className: n }) =>
                        0 === e
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: s()(u.base, u[`base__${t}`], n) },
                                  r().createElement('div', { className: u.value }, e),
                                  r().createElement('div', { className: u.icon }),
                              );
            },
            8750: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => l, F: () => o });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const u = {
                    base: 'ExtraImage_base_78',
                    base__medium: 'ExtraImage_base__medium_07',
                    base__big: 'ExtraImage_base__big_86',
                };
                let o;
                !(function (e) {
                    (e.SMALL = 'small'), (e.MEDIUM = 'medium'), (e.BIG = 'big');
                })(o || (o = {}));
                const l = ({ type: e = o.SMALL, imageSource: t }) => {
                    const n = r()(u.base, e !== o.SMALL && u[`base__${e}`]),
                        i = (0, a.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                    return s().createElement('div', { className: n, style: i });
                };
            },
            1363: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3649),
                    r = n(7363),
                    u = n.n(r),
                    o = n(5282);
                const l = 'FormatColorTagText_base_10',
                    c = 'FormatColorTagText_text_85',
                    _ = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: a,
                        classColorMix: _,
                        linesShown: d,
                        withOffset: m = !0,
                    }) => {
                        const p = (0, i.z4)(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? u().createElement(
                                              'span',
                                              { key: t, className: s()(l, _) },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          u().createElement(
                                              'span',
                                              { key: t, className: c },
                                              u().createElement(o.n, {
                                                  mediaSize: n,
                                                  blocks: (0, o.D)(e),
                                                  linesCount: d,
                                              }),
                                          ),
                                ),
                            b = (0, r.useMemo)(
                                () =>
                                    t
                                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                        .flatMap((e) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' '),
                                        )
                                        .filter((e) => Boolean(e))
                                        .map((e, t) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                                ? u().createElement(
                                                      'span',
                                                      { key: t, className: s()(l, _) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : u().createElement('span', { key: t }, `${e} `),
                                        ),
                                [_, t],
                            );
                        return u().createElement(
                            'div',
                            { id: `${e}-details`, className: s()(l, a) },
                            m ? p : u().createElement(o.n, { mediaSize: n, blocks: b, linesCount: d }),
                        );
                    };
            },
            6391: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => o });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7363),
                    r = n.n(i);
                const u = {
                        base: 'Location_base_44',
                        base__countFirst: 'Location_base__countFirst_60',
                        icon: 'Location_icon_7f',
                        base__storage: 'Location_base__storage_bf',
                        base__vehicle: 'Location_base__vehicle_a9',
                        count: 'Location_count_45',
                        count__zero: 'Location_count__zero_f5',
                    },
                    o = ({ countFirst: e = !1, location: t, count: n }) =>
                        r().createElement(
                            'div',
                            { className: s()(u.base, u[`base__${t}`], e && u.base__countFirst) },
                            r().createElement('div', { className: u.icon }),
                            r().createElement('div', { className: s()(u.count, 0 === n && u.count__zero) }, n),
                        );
            },
            3267: (e, t, n) => {
                'use strict';
                n.d(t, { J: () => i });
                var a = n(7363),
                    s = n.n(a);
                const i = ({ wrapper: e, children: t, when: n, withProps: a }) =>
                    n ? s().createElement(e, a, t) : s().createElement(s().Fragment, null, t);
            },
            8401: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => b });
                var a = n(6483),
                    s = n.n(a),
                    i = n(7405),
                    r = n(329),
                    u = n(7078),
                    o = n(5475),
                    l = n(9480),
                    c = n(7363),
                    _ = n.n(c);
                const d = 'Price_base_61',
                    m = 'Price_currency_ae',
                    p = 'Price_currency__discounted_a7',
                    b = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n,
                        showZero: a = !1,
                        bigSize: b = !1,
                        ignoreDiscount: g = !1,
                        tooltipEnabled: E = !1,
                        className: h,
                        classNames: v,
                    }) => {
                        const f = (0, c.useMemo)(
                            () => ({ stock: null == v ? void 0 : v.discount }),
                            [null == v ? void 0 : v.discount],
                        );
                        return _().createElement(
                            'div',
                            { className: s()(d, h) },
                            l.UI(e, (e, d) => {
                                var h;
                                const C = null == (h = l.U2(t, d)) ? void 0 : h.value,
                                    A = !(g || ((D = e.value), (S = C), void 0 === S || D === S));
                                var D, S;
                                return (
                                    (a || Boolean(e.value)) &&
                                    _().createElement(
                                        c.Fragment,
                                        { key: `${e.value}-${e.name}-${e.isEnough}` },
                                        d > 0 && n,
                                        _().createElement(
                                            u.t,
                                            {
                                                args: {
                                                    tooltipId: o.e1,
                                                    currencyType: e.name,
                                                    price: e.value,
                                                    defPrice: C,
                                                },
                                                isEnabled: E && A,
                                            },
                                            _().createElement(
                                                'div',
                                                { className: s()(m, A && p, null == v ? void 0 : v.currency) },
                                                _().createElement(i.F, {
                                                    isDiscount: A,
                                                    size: b ? r.et.big : r.et.small,
                                                    type: e.name,
                                                    value: e.value,
                                                    isEnough: e.isEnough,
                                                    classNames: f,
                                                }),
                                            ),
                                        ),
                                    )
                                );
                            }),
                        );
                    };
            },
            9152: (e, t, n) => {
                'use strict';
                n.d(t, { Sf: () => g, yy: () => b });
                var a = n(6483),
                    s = n.n(a),
                    i = n(8089),
                    r = n(4598),
                    u = n(3815),
                    o = n(8526),
                    l = n(5521),
                    c = n(7727),
                    _ = n(7363),
                    d = n.n(_),
                    m = n(1922);
                const p = {
                        base: 'SetupApp_base_7b',
                        base__shown: 'SetupApp_base__shown_a0',
                        base__compare: 'SetupApp_base__compare_9d',
                        base__setup: 'SetupApp_base__setup_92',
                        close: 'SetupApp_close_da',
                        close__hidden: 'SetupApp_close__hidden_5a',
                        close__small: 'SetupApp_close__small_61',
                        content: 'SetupApp_content_65',
                        content__compare: 'SetupApp_content__compare_6e',
                        content__invisible: 'SetupApp_content__invisible_9a',
                        content__shown: 'SetupApp_content__shown_dd',
                        'show-app': 'SetupApp_show-app_00',
                        content__hidden: 'SetupApp_content__hidden_78',
                        'hide-app': 'SetupApp_hide-app_29',
                        panel: 'SetupApp_panel_42',
                        back: 'SetupApp_back_20',
                    },
                    b = 'setup-content',
                    g = ({
                        backgroundImage: e,
                        children: t,
                        panel: n,
                        button: a,
                        show: g = !0,
                        onAnimationDone: E = r.ZT,
                        type: h = 'setup',
                        onClose: v,
                    }) => {
                        const f = (0, m.GS)(),
                            C = (0, _.useRef)(null),
                            A = (0, _.useRef)(!1);
                        (0, o.gd)(l.n.ESCAPE, v),
                            (0, _.useEffect)(() => {
                                g && (A.current = !0), A.current && (0, c.G)('cons_select_view');
                            }, [g]);
                        const D = (0, u.z)(E);
                        return (
                            (0, _.useEffect)(() => {
                                const e = C.current;
                                if (e) {
                                    function t(e) {
                                        e.target === C.current && D();
                                    }
                                    return (
                                        e.addEventListener('animationend', t),
                                        () => {
                                            e.removeEventListener('animationend', t);
                                        }
                                    );
                                }
                            }, [D]),
                            d().createElement(
                                'div',
                                { className: s()(p.base, g && p.base__shown, p[`base__${h}`]) },
                                e &&
                                    d().createElement('div', {
                                        className: p.back,
                                        style: { backgroundImage: `url(${e})` },
                                    }),
                                a,
                                d().createElement(
                                    'div',
                                    { className: s()(p.close, f && p[`close__${f}`], !g && p.close__hidden) },
                                    d().createElement(i.A, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: v,
                                    }),
                                ),
                                d().createElement(
                                    'div',
                                    {
                                        id: b,
                                        ref: C,
                                        className: s()(
                                            p.content,
                                            p[`content__${h}`],
                                            !g && !A.current && p.content__invisible,
                                            p['content__' + (g ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    t,
                                ),
                                n && d().createElement('div', { className: p.panel }, n),
                            )
                        );
                    };
            },
            5282: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => b, D: () => p });
                var a = n(6483),
                    s = n.n(a),
                    i = n(1856),
                    r = n(3138),
                    u = n(9916),
                    o = n(7363),
                    l = n.n(o),
                    c = n(6605);
                const _ = 'ShortenedText_base_fe',
                    d = 'ShortenedText_base__shown_af';
                var m = n(7260);
                const p = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => l().createElement(m.B, { key: t, text: `${e} ` })),
                    b = ({ blocks: e, linesCount: t = 2, mediaSize: n }) => {
                        const a = (0, o.useState)(e),
                            m = a[0],
                            p = a[1],
                            b = (0, o.useState)({ width: 0, height: 0 }),
                            g = b[0],
                            E = b[1],
                            h = (0, o.useRef)(null),
                            v = (0, o.useRef)({ shortened: !1 }),
                            f = (0, o.useCallback)(() => {
                                (0, u.Eu)().then(() => {
                                    const e = (0, c.D)(h);
                                    if (e) {
                                        const n = Number(e.split('rem')[0]),
                                            a = h.current;
                                        if (a && isFinite(n)) {
                                            const e = r.O.view.remToPx(t * n);
                                            E({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, o.useEffect)(() => {
                            if (e.length) return v.current.shortened && ((v.current.shortened = !1), p(e)), (0, i.v)(f);
                        }, [e, n, f]),
                            (0, o.useEffect)(() => {
                                if (g.height && !v.current.shortened) {
                                    const e = (0, c.M)(h, g.height);
                                    if (-1 !== e) {
                                        const t = m.slice(0, e);
                                        t.push(l().createElement('span', { key: e }, '...')),
                                            p(t),
                                            (v.current.shortened = !0);
                                    }
                                }
                            }, [m, g, n]);
                        const C = (0, o.useMemo)(() => (g.height ? { maxHeight: `${g.height}rem` } : {}), [g.height]);
                        return l().createElement('div', { ref: h, className: s()(_, g.height && d), style: C }, m);
                    };
            },
            6605: (e, t, n) => {
                'use strict';
                n.d(t, { D: () => a, M: () => i });
                const a = (e) => {
                        const t = e.current;
                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                    },
                    s = (e, t) => e.getBoundingClientRect().top >= t,
                    i = (e, t) => {
                        const n = e.current;
                        if (n) {
                            const e = n.getBoundingClientRect(),
                                a = e.top + t,
                                i = Array.from(n.children);
                            if (i.length) {
                                const t = ((e, t) => {
                                    const n = e.length - 1;
                                    if (!s(e[n], t)) return -1;
                                    let a = 0,
                                        i = n - 1,
                                        r = !1;
                                    for (; i - a > 1; ) {
                                        const n = a + Math.floor(0.5 * (i - a + 1));
                                        (r = s(e[n], t)), r ? (i = n) : (a = n);
                                    }
                                    return r || s(e[i], t) ? a : i;
                                })(i, a);
                                if (t > 0) {
                                    const n = i[t].getBoundingClientRect();
                                    return e.right - n.right < 16 ? t : t + 1;
                                }
                            }
                        }
                        return -1;
                    };
            },
            2094: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => y });
                var a = n(6483),
                    s = n.n(a),
                    i = n(8526),
                    r = n(5521),
                    u = n(7727),
                    o = n(7363),
                    l = n.n(o),
                    c = n(3978);
                const _ = {
                        base: 'EditableProgress_base_3a',
                        base__small: 'EditableProgress_base__small_e2',
                        glow: 'EditableProgress_glow_2d',
                        glow__left: 'EditableProgress_glow__left_8f',
                        glow__right: 'EditableProgress_glow__right_2d',
                        base__disabled: 'EditableProgress_base__disabled_44',
                        base__finished: 'EditableProgress_base__finished_32',
                        picker: 'EditableProgress_picker_41',
                        progressBar: 'EditableProgress_progressBar_9f',
                        line: 'EditableProgress_line_11',
                        pattern: 'EditableProgress_pattern_79',
                        delta: 'EditableProgress_delta_05',
                        gradient: 'EditableProgress_gradient_e7',
                    },
                    d = {
                        bgImageBase: '#ffffff19',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: { bgImageBase: '#ffb266', bgImageDisabled: '#ffffff33', bgImageFinished: '#c5ff51a6' },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: { color: 'rgba(249,249,249,0.17)', shadow: '0 0 1rem 0 #ffffff33' },
                    },
                    m = ({
                        size: e = 'normal',
                        value: t,
                        availableMaximum: n,
                        maximum: a,
                        picker: i,
                        allowSlide: r,
                        theme: u = d,
                    }) => {
                        const o = {
                            '--progress-base': u.bgImageBase,
                            '--progress-line-base': u.line.bgColorBase,
                            '--progress-line-disabled': u.line.bgColorDisabled,
                            '--progress-line-finished': u.line.bgColorFinished,
                            '--progress-pattern-base': u.pattern.bgImageBase,
                            '--progress-pattern-disabled': u.pattern.bgImageDisabled,
                            '--progress-pattern-finished': u.pattern.bgImageFinished,
                            '--progress-glow': `url('${u.glow}')`,
                            '--progress-glow-small': `url('${u.glowSmall}')`,
                            '--progress-delta-color': u.delta.color,
                            '--progress-delta-shadow': u.delta.shadow,
                        };
                        return l().createElement(
                            'div',
                            { className: s()(_.progressBar, _.base, _[`base__${e}`]), style: o },
                            l().createElement(
                                'div',
                                { className: _.delta, style: { width: (n / a) * 100 + '%' } },
                                !r && l().createElement('div', { className: s()(_.glow, _.glow__right) }),
                            ),
                            l().createElement(
                                'div',
                                { className: _.line, style: { width: (t / a) * 100 + '%' } },
                                l().createElement('div', { className: _.pattern }),
                                l().createElement('div', { className: _.gradient }),
                                i && l().createElement('div', { className: _.picker }, i),
                            ),
                        );
                    },
                    p = 'SlideControl_base_c8',
                    b = 'SlideControl_image_61',
                    g = 'SlideControl_image__hover_eb',
                    E = 'SlideControl_image__active_70',
                    h = ({ parentId: e, isActive: t, isHovered: n }) => {
                        const a = s()(b, n && g, t && E);
                        return l().createElement(
                            'div',
                            { id: `${e}-slide-control`, className: p },
                            l().createElement('div', { className: a }),
                        );
                    },
                    v = 'Slider_base_2c',
                    f = 'Slider_slideArea_dd',
                    C = 'Slider_editor_5c',
                    A = 'Slider_editor__minus_e1',
                    D = 'Slider_editor__plus_b5',
                    S = {
                        base: 'StepEditor_base_f5',
                        base__enabled: 'StepEditor_base__enabled_f4',
                        base__minusOff: 'StepEditor_base__minusOff_19',
                        base__minusOn: 'StepEditor_base__minusOn_9c',
                        base__plusOff: 'StepEditor_base__plusOff_af',
                        base__plusOn: 'StepEditor_base__plusOn_71',
                    },
                    F = ({ parentId: e, type: t, isEnabled: n, onClick: a }) => {
                        const i = s()(S.base, n && S.base__enabled, S[`base__${t}${n ? 'On' : 'Off'}`]);
                        return l().createElement('div', { id: `${e}-step-editor-${t}`, className: i, onClick: a });
                    },
                    y = ({
                        parentId: e,
                        currentValue: t,
                        maximum: n,
                        sliderMaximum: a,
                        sliderMinimum: _ = 0,
                        isDisabled: d = !1,
                        onUpdates: p,
                        withStepEditors: b = !0,
                        stepCount: g = 1,
                    }) => {
                        const E = (0, o.useRef)(null),
                            S = (0, o.useRef)({ down: !1, move: !1, over: !1 }),
                            y = (0, o.useRef)({ currentValue: t, maximum: n, sliderMaximum: a, sliderMinimum: _ }),
                            w = (0, o.useState)(t),
                            B = w[0],
                            k = w[1],
                            x = (0, o.useState)(!1),
                            T = x[0],
                            I = x[1],
                            N = (0, o.useState)(!1),
                            R = N[0],
                            L = N[1],
                            O = (0, o.useCallback)(
                                (e) => {
                                    let t = e ? 1 : -1,
                                        n = y.current.currentValue;
                                    if (g > 1) {
                                        t *= g;
                                        const e = n % g;
                                        t < 0 && e ? (n -= e) : (n += t - e);
                                    } else n += t;
                                    return n;
                                },
                                [g],
                            ),
                            M = (0, o.useCallback)(
                                (e, t) => {
                                    if (!E.current) return 0;
                                    const n = E.current.getBoundingClientRect(),
                                        a = y.current.maximum,
                                        s = n.width / a,
                                        i = e - n.left,
                                        r = Math.floor(s > 0 ? i / s : i);
                                    if (r > a) return a;
                                    if (r <= 0) return 0;
                                    if (g > 1) {
                                        let e = r - (r % g);
                                        const n = r - e;
                                        return (
                                            n > 0 && ((t && r > y.current.currentValue) || n > 0.5 * g) && (e += g), e
                                        );
                                    }
                                    return r;
                                },
                                [g],
                            ),
                            P = (0, o.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.sliderMaximum,
                                        a = t.sliderMinimum;
                                    e < a ? (e = a) : e > n && (e = n),
                                        y.current.currentValue !== e && (k(e), (y.current.currentValue = e), p && p(e));
                                },
                                [p],
                            ),
                            $ = t < a,
                            H = t > 0,
                            z = (0, o.useCallback)(() => {
                                if ($ && S.current.over) {
                                    const e = O(!0);
                                    P(e);
                                }
                            }, [$, O, P]),
                            W = (0, o.useCallback)(() => {
                                if (H && S.current.over) {
                                    const e = O(!1);
                                    P(e);
                                }
                            }, [H, O, P]),
                            j = (0, o.useCallback)(() => {
                                (S.current.down = !1), L(!1);
                            }, []),
                            G = (0, o.useCallback)(
                                (e) => {
                                    if (!(e.clientX < 1 && e.clientY < 1) && S.current.down) {
                                        S.current.move = !0;
                                        const t = M(e.clientX);
                                        P(t);
                                    } else j();
                                },
                                [j, M, P],
                            );
                        (0, i.gd)(r.n.ARROW_UP, z, !1, !0),
                            (0, i.gd)(r.n.ARROW_RIGHT, z, !1, !0),
                            (0, i.gd)(r.n.ARROW_DOWN, W, !1, !0),
                            (0, i.gd)(r.n.ARROW_LEFT, W, !1, !0),
                            (0, o.useEffect)(() => {
                                y.current.maximum = n;
                            }, [n]),
                            (0, o.useEffect)(() => {
                                if (R)
                                    return (
                                        document.addEventListener('mouseup', j),
                                        document.addEventListener('mousemove', G),
                                        () => {
                                            document.removeEventListener('mouseup', j),
                                                document.removeEventListener('mousemove', G);
                                        }
                                    );
                            }, [R, G, j]),
                            (0, o.useEffect)(() => {
                                (y.current.sliderMaximum = a), (y.current.sliderMinimum = _);
                            }, [a, _]),
                            (0, o.useEffect)(() => {
                                t !== y.current.currentValue && ((y.current.currentValue = t), k(t));
                            }, [t]);
                        const Z = (0, o.useCallback)(
                                (e) => {
                                    d || 0 !== e.button || ((S.current.down = !0), L(!0));
                                },
                                [d],
                            ),
                            V = (0, o.useCallback)(
                                (e) => {
                                    if (d || 0 !== e.button) return;
                                    const t = M(e.clientX, !S.current.move),
                                        n = y.current,
                                        a = n.currentValue,
                                        s = n.sliderMaximum,
                                        i = n.sliderMinimum;
                                    P(t), (0, c.u)(a, t, s, i), (S.current.move = !1);
                                },
                                [M, d, P],
                            ),
                            U = (0, o.useCallback)(() => {
                                (S.current.over = !0), I(!0), (0, u.G)('highlight');
                            }, []),
                            q = (0, o.useCallback)(() => {
                                (S.current.over = !1), I(!1);
                            }, []),
                            X = (0, o.useCallback)(
                                (e) => {
                                    const t = y.current,
                                        n = t.currentValue,
                                        a = t.sliderMaximum,
                                        s = t.sliderMinimum,
                                        i = O(e.deltaY > 0);
                                    P(i), (0, c.u)(n, i, a, s);
                                },
                                [O, P],
                            );
                        return l().createElement(
                            'div',
                            { ref: E, onMouseEnter: U, onMouseLeave: q, onWheel: X, className: v },
                            b &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement(
                                        'div',
                                        { className: s()(C, A) },
                                        l().createElement(F, { parentId: e, type: 'minus', isEnabled: H, onClick: W }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: s()(C, D) },
                                        l().createElement(F, { parentId: e, type: 'plus', isEnabled: $, onClick: z }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { id: `${e}-progress-wrapper`, onClick: V, onMouseDown: Z, className: f },
                                l().createElement(m, {
                                    allowSlide: !0,
                                    maximum: n,
                                    value: B,
                                    availableMaximum: a,
                                    picker: l().createElement(h, { parentId: e, isActive: R, isHovered: T }),
                                }),
                            ),
                        );
                    };
            },
            906: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => o });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const u = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    o = s().memo(({ isTemporary: e, overlayType: t, overlaySource: n }) => {
                        const i = r()(u.base, e && u.base__fitting),
                            o = r()(u.icon, u[`icon__${t}`]),
                            l = (0, a.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]);
                        return s().createElement(
                            'div',
                            { className: i },
                            s().createElement('div', { className: o, style: l }),
                        );
                    });
            },
            8253: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => o });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const u = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    o = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: n,
                        isBorderActive: a,
                        children: i,
                        panelType: o,
                        isDisabled: l,
                        isPotentialDrop: c,
                        onClick: _,
                    }) => {
                        const d = r()(
                            u.base,
                            !e && u[`base__${o}`],
                            t && u[`base__${t}`],
                            n && !c && !a && u.base__selected,
                            c && u['base__dragIn' + (n ? 'Active' : '')],
                            l && u.base__disabled,
                        );
                        return s().createElement('div', { className: d, onClick: _ }, i);
                    };
            },
            8598: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => l });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const u = 'Count_base_e4',
                    o = 'Count_base__zero_64',
                    l = ({ count: e }) => {
                        const t = r()(u, !e && o);
                        return s().createElement('div', { className: t }, e);
                    };
            },
            3141: (e, t, n) => {
                'use strict';
                n.d(t, { c: () => p });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3977),
                    r = n(7363),
                    u = n.n(r),
                    o = n(906),
                    l = n(4105);
                const c = 'Inside_image_e5',
                    _ = 'Inside_image__fitting_11',
                    d = 'Inside_warning_e4',
                    m = 'Inside_change_5a',
                    p = ({
                        level: e,
                        overlayType: t,
                        isTemporary: n,
                        withAttention: a,
                        imageSource: p,
                        isIncompatible: b,
                    }) => {
                        const g = (0, r.useMemo)(() => {
                                const n = t === i.qm ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(n);
                            }, [t, e]),
                            E = (0, r.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                            h = !g && Boolean(t) && e;
                        return u().createElement(
                            'div',
                            null,
                            h && u().createElement(l.a, { level: e }),
                            u().createElement('div', { className: s()(c, (n || a) && _), style: E }),
                            a && u().createElement('div', { className: d }),
                            b && u().createElement('div', { className: m }),
                            g && u().createElement(o.r, { isTemporary: n, overlaySource: g, overlayType: t }),
                        );
                    };
            },
            4105: (e, t, n) => {
                'use strict';
                n.d(t, { a: () => o });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                const u = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    o = ({ level: e }) => {
                        const t = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            n = r()(u.base, u[`base__level${e}`]);
                        return s().createElement('div', { style: t, className: n });
                    };
            },
            4814: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => b });
                var a = n(9480),
                    s = n(7363),
                    i = n.n(s),
                    r = n(1922),
                    u = n(6483),
                    o = n.n(u),
                    l = n(3457),
                    c = n(7078);
                const _ = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    d = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: n = !0,
                        isDynamic: a,
                        mediaSize: u,
                        isClickable: d,
                        onSpecializationClick: m,
                        index: p,
                    }) => {
                        const b = u !== r.cJ.None,
                            g = (0, s.useCallback)(() => {
                                d && n && m && m(p);
                            }, [p, d, n, m]),
                            E = (0, s.useMemo)(() => {
                                let n = '';
                                b && (n = (u === r.cJ.Large || u === r.cJ.Huge ? r.cJ.Large : r.cJ.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    s = R.images.gui.maps.icons.specialization.$dyn(a);
                                return s && { backgroundImage: `url(${s})` };
                            }, [e, t, u, b]),
                            h = (0, s.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: d, tooltip: 'hangarSlotSpec' }),
                                [e, a, d],
                            );
                        if (!E) return null;
                        const v = o()(
                                `specialization-${e}`,
                                _.base,
                                b && _[`base__${u}`],
                                n && _.base__setup,
                                t && _.base__correct,
                            ),
                            f = o()(_.icon, b && _[`icon__${u}`]),
                            C = b ? '' : _.specializationWrapper,
                            A = i().createElement(
                                'div',
                                { key: e, className: v },
                                i().createElement('div', { className: _.glow }),
                                i().createElement('div', { className: f, style: E }),
                            );
                        return i().createElement(
                            c.t,
                            { args: h },
                            d && n
                                ? i().createElement(
                                      l.u5,
                                      {
                                          size: l.qE.small,
                                          type: l.L$.ghost,
                                          mixClass: _.specializationButton,
                                          onClick: g,
                                      },
                                      A,
                                  )
                                : i().createElement('div', { className: C }, A),
                        );
                    },
                    m = 'Specializations_base_ab';
                function p() {
                    return (
                        (p = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        p.apply(null, arguments)
                    );
                }
                const b = ({
                    specializations: e,
                    isSpecializationActive: t = !0,
                    isDynamic: n,
                    mediaSize: s = r.cJ.None,
                    activeSpecsMask: u,
                    onSpecializationClick: o,
                }) =>
                    e.length
                        ? i().createElement(
                              'div',
                              { className: m, key: u },
                              a.UI(e, (e, a) =>
                                  i().createElement(
                                      d,
                                      p({ index: a, key: e.name }, e, {
                                          isSpecializationActive: t,
                                          isDynamic: n,
                                          mediaSize: s,
                                          onSpecializationClick: o,
                                      }),
                                  ),
                              ),
                          )
                        : null;
            },
            9605: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => h });
                var a = n(7363),
                    s = n.n(a),
                    i = n(6483),
                    r = n.n(i);
                let u;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(u || (u = {}));
                const o = 'SwitchButton_base_23',
                    l = 'SwitchButton_base__active_31',
                    c = 'SwitchButton_base__warning_71',
                    _ = 'SwitchButton_buttonBack_ce',
                    d = 'SwitchButton_buttonBackHovered_45',
                    m = 'SwitchButton_base__hovered_b4',
                    p = 'SwitchButton_buttonGlow_4c',
                    b = 'SwitchButton_buttonIcon_d3',
                    g = 'SwitchButton_buttonWarning_3f',
                    E = 'SwitchButton_number_8a',
                    h = ({ id: e, state: t, currentIndex: n, isHovered: i }) => {
                        const h = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            v = e === n,
                            f = !v && t === u.WARNING;
                        return s().createElement(
                            'div',
                            { className: r()(o, { [l]: v, [c]: f, [m]: i }) },
                            s().createElement('div', { className: _ }),
                            s().createElement('div', { className: d }),
                            s().createElement('div', { className: b }),
                            s().createElement('div', { className: p }),
                            s().createElement('div', { className: g }),
                            s().createElement('div', { style: h, className: E }),
                        );
                    };
            },
            9344: (e, t, n) => {
                'use strict';
                n.d(t, { _: () => m });
                var a = n(6483),
                    s = n.n(a),
                    i = n(9480),
                    r = n(7727),
                    u = n(7363),
                    o = n.n(u),
                    l = n(9605);
                const c = 'SwitchEquipment_base_1a',
                    _ = 'SwitchEquipment_base__disabled_73',
                    d = 'SwitchEquipment_cover_b3',
                    m = ({ onClick: e, totalCount: t, currentIndex: n, states: a, isDisabled: m, groupId: p }) => {
                        const b = (0, u.useRef)(null),
                            g = (0, u.useState)(!1),
                            E = g[0],
                            h = g[1],
                            v = (n + 1) % t,
                            f = (0, u.useCallback)(() => {
                                m || e({ groupId: p, currentIndex: v });
                            }, [p, m, v, e]),
                            C = (0, u.useCallback)(() => {
                                m || (h(!0), r.$.playHighlight());
                            }, [m]),
                            A = (0, u.useCallback)(() => {
                                m || h(!1);
                            }, [m]),
                            D = s()(c, m && _);
                        return o().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${p}`,
                                className: D,
                                onClick: f,
                                onMouseEnter: C,
                                onMouseLeave: A,
                                ref: b,
                            },
                            Array.from({ length: t }, (e, t) =>
                                o().createElement(l.U, {
                                    key: t,
                                    id: t,
                                    state: i.MH(a, t),
                                    currentIndex: n,
                                    isHovered: E,
                                }),
                            ),
                            m && o().createElement('div', { className: d }),
                        );
                    };
            },
            5918: (e, t, n) => {
                'use strict';
                n.d(t, { y: () => B });
                var a = n(4888),
                    s = n(7383),
                    i = n(1396),
                    r = n(3403),
                    u = n(7363),
                    o = n.n(u),
                    l = n(2558),
                    c = n(8934),
                    _ = n(3220),
                    d = n(5958);
                const m = 'BackEffects_shine_f6',
                    p = 'BackEffects_sparks_55',
                    b = 'BackEffects_nut_79',
                    g = 'BackEffects_wrench_5a',
                    E = { enterActive: 'BackEffects_shine__enterActive_54' },
                    h = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    v = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    f = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    C = [a.dZ, a.sH],
                    A = o().memo(({ in: e, actionType: t }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.Dp, classNames: E },
                                o().createElement('div', { className: m }),
                            ),
                            o().createElement(
                                c.Z,
                                { in: e, timeout: d.IG, classNames: h },
                                o().createElement('div', { className: p }),
                            ),
                            C.includes(t) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.wx, classNames: v },
                                        o().createElement('div', { className: b }),
                                    ),
                                    o().createElement(
                                        c.Z,
                                        { in: e, timeout: d.Kz, classNames: f },
                                        o().createElement('div', { className: g }),
                                    ),
                                ),
                        ),
                    ),
                    D = 'ColorMask_base_60',
                    S = 'ColorMask_base__enterActive_62',
                    F = ({ inProp: e, maskImage: t }) =>
                        o().createElement(
                            c.Z,
                            { in: e, timeout: d.Qj, classNames: { enterActive: S } },
                            o().createElement('div', { className: D, style: { maskImage: `url(${t})` } }),
                        ),
                    y = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    w = { enter: y.base__enter, exit: y.base__enter },
                    B = (0, r.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: r,
                            isEmpty: m = !1,
                            imageSource: p,
                            itemInstalledSetupIndex: b,
                        }) => {
                            const g = (0, _.t)().model.lastSlotAction.get(),
                                E = g.leftID,
                                h = g.rightID,
                                v = g.leftIntCD,
                                f = g.rightIntCD,
                                C = g.actionType,
                                D = g.intCD,
                                S = (0, u.useState)(!0),
                                B = S[0],
                                k = S[1],
                                x = (0, u.useState)(!0),
                                T = x[0],
                                I = x[1],
                                N = (0, u.useState)(p),
                                R = N[0],
                                L = N[1],
                                O = (0, u.useState)(n),
                                M = O[0],
                                P = O[1],
                                $ = (0, u.useState)(b),
                                H = $[0],
                                z = $[1],
                                W = (0, i.K)(),
                                j = (0, i.K)(),
                                G = [a._2, a.dZ, a.sH],
                                Z = (D === n || D === M) && H !== b && G.includes(C),
                                V = -1 === v || -1 === f,
                                U = r ? `base${r[0].toUpperCase() + r.slice(1)}` : 'base',
                                q = d.Sr[C] || 0;
                            (0, u.useEffect)(() => {
                                m || L(p);
                            }, [m, p]);
                            const X = (0, u.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, w);
                                        switch (C) {
                                            case a.Xo: {
                                                const e = E === t ? d.mI.RIGHT : d.mI.LEFT,
                                                    a = h - E != 1 ? d.mI.SWAP : '';
                                                (n.enterDone = y[`${U}__enter${e}${a}`]),
                                                    (n.exit = y[`${U}__exit${e}${a}`]),
                                                    V &&
                                                        (m
                                                            ? (n.enterDone = y[`${U}__enter${d.mI.FADE}`])
                                                            : (n.exit = y[`${U}__exit${d.mI.FADE}`]));
                                                break;
                                            }
                                            case a._2:
                                                (n.enterDone = y[`${U}__enter${d.mI.DESTROY}`]),
                                                    (n.exit = y[`${U}__exit${d.mI.DESTROY}`]),
                                                    W.run(() => k(!0), d.YJ),
                                                    I(!0);
                                                break;
                                            case a.sH:
                                            case a.dZ:
                                                (n.enter = y[`${U}__enter${d.mI.DEMOUNT}${d.mI.FADE}`]),
                                                    (n.exit = y[`${U}__exit${d.mI.DEMOUNT}`]),
                                                    W.run(() => k(!0), d.Ij);
                                                break;
                                            case a.eC:
                                            case a.FR:
                                                if (r !== s.g9) {
                                                    const e = C === a.eC ? d.mI.FITTING : d.mI.FITTING_REMOVE;
                                                    (n.enter = y[`${U}__enter${e}`]),
                                                        (n.exit = y[`${U}__exit${e}`]),
                                                        (n.exitActive = y[`${U}__exitActive${d.mI.FITTING}`]);
                                                } else
                                                    (n.enterDone = y[`${U}__enter${d.mI.FADE}`]),
                                                        (n.exit = y[`${U}__exit${d.mI.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return o().cloneElement(e, { classNames: n, timeout: q });
                                    },
                                    [C, q, E, t, h, U, V, m, W, r],
                                ),
                                K = (0, u.useCallback)(
                                    (e) => {
                                        j.run(() => {
                                            (e.className = ''), e.classList.add(y.base), P(n), z(b);
                                        }, q);
                                    },
                                    [j, q, n, b],
                                ),
                                Y = (0, u.useCallback)(() => {
                                    k(!1), I(!1);
                                }, []);
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    l.Z,
                                    { component: null, childFactory: X },
                                    o().createElement(
                                        c.Z,
                                        {
                                            key: n,
                                            timeout: q,
                                            classNames: w,
                                            onEntered: K,
                                            onExiting: Y,
                                            unmountOnExit: !0,
                                        },
                                        o().createElement('div', { className: y.base }, e),
                                    ),
                                ),
                                Z &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement(A, { in: B, actionType: C }),
                                        o().createElement(F, { inProp: T, maskImage: R }),
                                    ),
                            );
                        },
                    );
            },
            5958: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Dp: () => o,
                    IG: () => l,
                    Ij: () => r,
                    Kz: () => _,
                    PD: () => s,
                    Qj: () => d,
                    Sr: () => p,
                    YJ: () => u,
                    mI: () => m,
                    wx: () => c,
                });
                var a = n(4888);
                const s = 200,
                    i = 1600,
                    r = 900,
                    u = 900,
                    o = 200,
                    l = 400,
                    c = 600,
                    _ = 600,
                    d = 1200;
                let m;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(m || (m = {}));
                const p = { [a.Xo]: s, [a.FR]: 250, [a.eC]: 250, [a._2]: 1400, [a.dZ]: i, [a.sH]: i, [a.Fd]: i };
            },
            5096: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => _ });
                var a = n(6483),
                    s = n.n(a),
                    i = n(3403),
                    r = n(7363),
                    u = n.n(r),
                    o = n(1922),
                    l = n(3028);
                const c = {
                        base: 'WeaponOccupancy_base_19',
                        base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                        tip: 'WeaponOccupancy_tip_18',
                        occupancy: 'WeaponOccupancy_occupancy_6e',
                        occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                        occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                        occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                    },
                    _ = (0, i.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                        const n = (0, o.GS)(),
                            a = (0, l.t)().model.shellsSetup.get(),
                            i = a.installedCount,
                            r = a.maxCount,
                            _ = i === r,
                            d = R.strings.tank_setup.shells,
                            m = _ ? d.ammunitionFull() : d.ammunitionIncomplete();
                        return u().createElement(
                            'div',
                            { className: s()(c.base, !_ && c.base__incomplete) },
                            !t && u().createElement('div', { className: c.tip }, m),
                            e
                                ? `${i}/${r}`
                                : u().createElement(
                                      'div',
                                      {
                                          className: s()(
                                              c.occupancy,
                                              !_ && c.occupancy__incomplete,
                                              c[`occupancy__${n}`],
                                          ),
                                      },
                                      `${i}/${r}`,
                                  ),
                        );
                    });
            },
            3978: (e, t, n) => {
                'use strict';
                n.d(t, { d: () => s, u: () => i });
                var a = n(7727);
                const s = (e, t) => {
                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                        t ? (0, a.G)(n + '_' + e) : (0, a.G)(n);
                    },
                    i = (e, t, n, s) => {
                        t > n ||
                            t < s ||
                            (t > e ? (0, a.G)('cons_ammo_roll_plus') : t < e && (0, a.G)('cons_ammo_roll_minus'));
                    };
            },
            3977: (e, t, n) => {
                'use strict';
                n.d(t, { qm: () => a });
                const a = 'equipmentModernized';
            },
            5475: (e, t, n) => {
                'use strict';
                n.d(t, { e1: () => a });
                const a = 'priceDiscount';
            },
            4888: (e, t, n) => {
                'use strict';
                n.d(t, {
                    DA: () => i,
                    FR: () => s,
                    Fd: () => o,
                    GV: () => d,
                    Rs: () => _,
                    Xo: () => r,
                    _2: () => c,
                    dZ: () => u,
                    eC: () => a,
                    sH: () => l,
                });
                const a = 'select',
                    s = 'undo',
                    i = 'cancel',
                    r = 'swap',
                    u = 'demount',
                    o = 'demount_from_setup',
                    l = 'demount_from_setups',
                    c = 'destroy',
                    _ = 'upgrade',
                    d = 'add_one';
            },
            5344: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { d: () => a }),
                    (function (e) {
                        (e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary');
                    })(a || (a = {}));
            },
            7383: (e, t, n) => {
                'use strict';
                n.d(t, {
                    $4: () => m,
                    G$: () => r,
                    S: () => p,
                    WI: () => o,
                    YN: () => u,
                    YR: () => c,
                    g9: () => s,
                    k4: () => _,
                    mH: () => i,
                    pi: () => b,
                    qZ: () => d,
                    yZ: () => l,
                    zn: () => a,
                });
                const a = 'optDevices',
                    s = 'shells',
                    i = 'consumables',
                    r = 'battleBoosters',
                    u = 'battleAbilities',
                    o = 'toggleShells',
                    l = 'toggleCamouflage',
                    c = 'apply',
                    _ = 'applyVehicle',
                    d = 'applyType',
                    m = 'equipCoinInfo',
                    p = 'simple',
                    b = 'modernized';
            },
            6880: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
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
            4382: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8460: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                    'icon__stpCoin-small': 'Currency_icon__stpCoin-small_6b',
                    'icon__stpCoin-big': 'Currency_icon__stpCoin-big_da',
                    'icon__stpCoin-large': 'Currency_icon__stpCoin-large_ee',
                    'icon__stpCoin-extraLarge': 'Currency_icon__stpCoin-extraLarge_fa',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__stpCoin: 'Currency_value__stpCoin_38',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
            },
            5287: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            7476: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
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
            8852: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
                };
            },
            1960: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Layout_base_81',
                    base__small: 'Layout_base__small_cb',
                    base__medium: 'Layout_base__medium_df',
                    base__large: 'Layout_base__large_f6',
                    base__huge: 'Layout_base__huge_d2',
                    header: 'Layout_header_46',
                    base__compare: 'Layout_base__compare_56',
                    header__small: 'Layout_header__small_cb',
                    header__tiny: 'Layout_header__tiny_4b',
                    content: 'Layout_content_79',
                    main: 'Layout_main_df',
                    inner: 'Layout_inner_3e',
                    footer: 'Layout_footer_f4',
                };
            },
            8529: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Animation_base_ab',
                    base__withAnimation: 'Animation_base__withAnimation_41',
                    'action-show': 'Animation_action-show_f8',
                    base__enter: 'Animation_base__enter_1e',
                    base__exit: 'Animation_base__exit_88',
                    'action-hide': 'Animation_action-hide_44',
                };
            },
            628: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            2527: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'ConfirmButton_base_75' };
            },
            8099: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'Controls_base_d3', button: 'Controls_button_f8' };
            },
            1523: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var s = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, a] = deferred[o], i = !0, r = 0; r < t.length; r++)
                        (!1 & a || s >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((i = !1), a < s && (s = a));
                    if (i) {
                        deferred.splice(o--, 1);
                        var u = n();
                        void 0 !== u && (e = u);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 336),
        (() => {
            var e = {
                336: 0,
                26: 0,
                301: 0,
                826: 0,
                225: 0,
                130: 0,
                418: 0,
                376: 0,
                927: 0,
                745: 0,
                490: 0,
                62: 0,
                884: 0,
                754: 0,
                803: 0,
                761: 0,
                833: 0,
                795: 0,
                723: 0,
                287: 0,
                975: 0,
                197: 0,
                553: 0,
            };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        s,
                        [i, r, u] = n,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in r) __webpack_require__.o(r, a) && (__webpack_require__.m[a] = r[a]);
                        if (u) var l = u(__webpack_require__);
                    }
                    for (t && t(n); o < i.length; o++)
                        (s = i[o]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(4031));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
