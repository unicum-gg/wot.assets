(() => {
    var __webpack_modules__ = {
            3779: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => p });
                var o = u(6483),
                    n = u.n(o),
                    r = u(9887),
                    a = u.n(r),
                    i = u(3377),
                    s = u(6179),
                    l = u.n(s),
                    c = u(5026);
                const d = [
                    'className',
                    'width',
                    'height',
                    'm',
                    'mt',
                    'mr',
                    'mb',
                    'ml',
                    'column',
                    'row',
                    'flexDirection',
                    'flexStart',
                    'center',
                    'flexEnd',
                    'spaceBetween',
                    'spaceAround',
                    'justifyContent',
                    'alignItems',
                    'alignSelf',
                    'wrap',
                    'flexWrap',
                    'grow',
                    'shrink',
                    'flex',
                    'style',
                    'children',
                ];
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                Object.keys(a());
                const _ = {
                        XL: { mt: c.Z.mt__XL, mr: c.Z.mr__XL, mb: c.Z.mb__XL, ml: c.Z.ml__XL },
                        LG: { mt: c.Z.mt__LG, mr: c.Z.mr__LG, mb: c.Z.mb__LG, ml: c.Z.ml__LG },
                        MDp: { mt: c.Z.mt__MDp, mr: c.Z.mr__MDp, mb: c.Z.mb__MDp, ml: c.Z.ml__MDp },
                        MD: { mt: c.Z.mt__MD, mr: c.Z.mr__MD, mb: c.Z.mb__MD, ml: c.Z.ml__MD },
                        SMp: { mt: c.Z.mt__SMp, mr: c.Z.mr__SMp, mb: c.Z.mb__SMp, ml: c.Z.ml__SMp },
                        SM: { mt: c.Z.mt__SM, mr: c.Z.mr__SM, mb: c.Z.mb__SM, ml: c.Z.ml__SM },
                        XS: { mt: c.Z.mt__XS, mr: c.Z.mr__XS, mb: c.Z.mb__XS, ml: c.Z.ml__XS },
                    },
                    E = (Object.keys(_), ['mt', 'mr', 'mb', 'ml']),
                    A = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    p = (0, i.ZP)((e) => {
                        let t = e.className,
                            u = e.width,
                            o = e.height,
                            r = e.m,
                            a = e.mt,
                            i = void 0 === a ? r : a,
                            p = e.mr,
                            B = void 0 === p ? r : p,
                            g = e.mb,
                            F = void 0 === g ? r : g,
                            D = e.ml,
                            b = void 0 === D ? r : D,
                            C = e.column,
                            h = e.row,
                            v = e.flexDirection,
                            f = void 0 === v ? (C ? 'column' : h && 'row') || void 0 : v,
                            x = e.flexStart,
                            w = e.center,
                            S = e.flexEnd,
                            y = e.spaceBetween,
                            T = e.spaceAround,
                            R = e.justifyContent,
                            k =
                                void 0 === R
                                    ? (x ? 'flex-start' : w && 'center') ||
                                      (S && 'flex-end') ||
                                      (y && 'space-between') ||
                                      (T && 'space-around') ||
                                      void 0
                                    : R,
                            N = e.alignItems,
                            L = void 0 === N ? (x ? 'flex-start' : w && 'center') || (S && 'flex-end') || void 0 : N,
                            O = e.alignSelf,
                            M = e.wrap,
                            I = e.flexWrap,
                            P = void 0 === I ? (M ? 'wrap' : void 0) : I,
                            H = e.grow,
                            G = e.shrink,
                            W = e.flex,
                            U = void 0 === W ? (H || G ? `${H ? 1 : 0} ${G ? 1 : 0} auto` : void 0) : W,
                            V = e.style,
                            z = e.children,
                            j = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, d);
                        const $ = (0, s.useMemo)(() => {
                                const e = { mt: i, mr: B, mb: F, ml: b },
                                    t = ((e) =>
                                        E.reduce((t, u) => {
                                            const o = e[u];
                                            return o && 'number' != typeof o ? t.concat(_[!0 === o ? 'MD' : o][u]) : t;
                                        }, []))(e),
                                    n = ((e) =>
                                        E.reduce((t, u) => {
                                            const o = e[u];
                                            return ('number' == typeof o && (t[A[u]] = o + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, V, n, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== o && 'number' == typeof o ? o + 'rem' : o,
                                        flex: U,
                                        alignSelf: O,
                                        display: f || L ? 'flex' : void 0,
                                        flexDirection: f,
                                        flexWrap: P,
                                        justifyContent: k,
                                        alignItems: L,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, o, i, B, F, b, V, U, O, f, P, k, L]),
                            K = $.computedStyle,
                            X = $.computedClassNames;
                        return l().createElement('div', m({ className: n()(c.Z.base, ...X, t), style: K }, j), z);
                    });
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var o = u(6179),
                    n = u.n(o),
                    r = u(6483),
                    a = u.n(r),
                    i = u(3649),
                    s = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: r = i.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              o.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  n().createElement(
                                      'div',
                                      { className: a()(s.Z.base, u), key: `${t}-${l}` },
                                      (0, i.Uw)(t, r, e).map((e, t) =>
                                          n().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => d });
                var o = u(3138),
                    n = u(6179),
                    r = u(1043),
                    a = u(5262);
                const i = o.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, a.T)(s, l, r.j)),
                    d = (0, n.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var o = u(6179),
                    n = u.n(o),
                    r = u(6536),
                    a = u(3495),
                    i = u(1043),
                    s = u(5262),
                    l = u(3138);
                const c = (0, o.memo)(({ children: e }) => {
                    const t = (0, o.useContext)(a.Y),
                        u = (0, o.useState)(t),
                        c = u[0],
                        d = u[1],
                        m = (0, o.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                o = l.O.view.pxToRem(t);
                            d(Object.assign({ width: u, height: o }, (0, s.T)(u, o, i.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, o.useEffect)(() => () => engine.off('clientResized', m), [m]));
                    const _ = (0, o.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(a.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var o = u(6179),
                    n = u(7382),
                    r = u(3495);
                const a = ['children'],
                    i = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, a);
                        const i = (0, o.useContext)(r.Y),
                            s = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            d = i.small,
                            m = i.extraSmall,
                            _ = i.extraLargeWidth,
                            E = i.largeWidth,
                            A = i.mediumWidth,
                            p = i.smallWidth,
                            B = i.extraSmallWidth,
                            g = i.extraLargeHeight,
                            F = i.largeHeight,
                            D = i.mediumHeight,
                            b = i.smallHeight,
                            C = i.extraSmallHeight,
                            h = { extraLarge: g, large: F, medium: D, small: b, extraSmall: C };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && s) return t;
                            if (u.large && l) return t;
                            if (u.medium && c) return t;
                            if (u.small && d) return t;
                            if (u.extraSmall && m) return t;
                        } else {
                            if (u.extraLargeWidth && _) return (0, n.H)(t, u, h);
                            if (u.largeWidth && E) return (0, n.H)(t, u, h);
                            if (u.mediumWidth && A) return (0, n.H)(t, u, h);
                            if (u.smallWidth && p) return (0, n.H)(t, u, h);
                            if (u.extraSmallWidth && B) return (0, n.H)(t, u, h);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && g) return t;
                                if (u.largeHeight && F) return t;
                                if (u.mediumHeight && D) return t;
                                if (u.smallHeight && b) return t;
                                if (u.extraSmallHeight && C) return t;
                            }
                        }
                        return null;
                    };
                ((i.defaultProps = {
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
                }),
                    (0, o.memo)(i));
            },
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => o });
                const o = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, u) => {
                'use strict';
                (u.d(t, { YN: () => n.Y, ZN: () => o.Z }), u(6010));
                var o = u(1039),
                    n = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => o });
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var o;
                function n(e, t, u) {
                    const o = (function (e, t) {
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
                        })(e, u),
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
                        })(t, u),
                        r = Math.min(o, n);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: o === u.extraLarge.weight,
                        largeWidth: o === u.large.weight,
                        mediumWidth: o === u.medium.weight,
                        smallWidth: o === u.small.weight,
                        extraSmallWidth: o === u.extraSmall.weight,
                        extraLargeHeight: n === u.extraLarge.weight,
                        largeHeight: n === u.large.weight,
                        mediumHeight: n === u.medium.weight,
                        smallHeight: n === u.small.weight,
                        extraSmallHeight: n === u.extraSmall.weight,
                    };
                }
                (u.d(t, { T: () => n }),
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
                    })(o || (o = {})));
            },
            7613: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => h });
                var o = u(6483),
                    n = u.n(o),
                    r = u(3779),
                    a = u(280),
                    i = u(3532),
                    s = u.n(i),
                    l = u(9887),
                    c = u.n(l),
                    d = u(3377),
                    m = u(6179),
                    _ = u.n(m),
                    E = u(3393);
                const A = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const B = Object.keys(s()),
                    g = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    F = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    D = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    b =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': g,
                            'heading-H36': g,
                            'heading-H28': F,
                            'heading-H24': F,
                            'heading-H24R': F,
                            'heading-H22': F,
                            'heading-H20R': F,
                            'heading-H18': F,
                            'heading-H15': D,
                            'heading-H14': D,
                            'paragraph-P24': F,
                            'paragraph-P18': F,
                            'paragraph-P16': F,
                            'paragraph-P14': D,
                            'paragraph-P12': D,
                            'paragraph-P10': D,
                        }),
                    C =
                        (Object.keys(b),
                        (e) =>
                            e
                                ? ((e) => B.includes(e))(e)
                                    ? { colorClassName: E.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    h = (0, d.ZP)((e) => {
                        let t = e.text,
                            u = e.variant,
                            o = e.className,
                            i = e.color,
                            s = e.m,
                            l = e.mt,
                            c = void 0 === l ? s : l,
                            d = e.mr,
                            B = void 0 === d ? s : d,
                            g = e.mb,
                            F = void 0 === g ? s : g,
                            D = e.ml,
                            h = void 0 === D ? s : D,
                            v = e.style,
                            f = e.format,
                            x = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, A);
                        const w = (0, m.useMemo)(() => {
                                const e = C(i),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    o = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, v, o), colorClassName: t };
                            }, [v, i]),
                            S = w.computedStyle,
                            y = w.colorClassName;
                        return _().createElement(
                            r.ZP,
                            p(
                                {
                                    className: n()(E.Z.base, u && E.Z[u], y, o),
                                    style: S,
                                    mt: !0 === c ? b[u || 'paragraph-P16'].mt : c,
                                    mr: !0 === B ? b[u || 'paragraph-P16'].mr : B,
                                    mb: !0 === F ? b[u || 'paragraph-P16'].mb : F,
                                    ml: !0 === h ? b[u || 'paragraph-P16'].ml : h,
                                },
                                x,
                            ),
                            void 0 !== f ? _().createElement(a.z, p({}, f, { text: t })) : t,
                        );
                    });
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
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            7515: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => o });
                const o = (e, t, u) => (u < e ? e : u > t ? t : u);
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t), u.d(t, { mouse: () => i, onResize: () => r }));
                var o = u(2472),
                    n = u(1176);
                const r = (0, o.E)('clientResized'),
                    a = { down: (0, o.E)('mousedown'), up: (0, o.E)('mouseup'), move: (0, o.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function o() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${t}`,
                                            i = a[t]((e) => u([e, 'outside']));
                                        function s(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            o(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    o(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((e.enabled = !1), o());
                            },
                            enable() {
                                ((e.enabled = !0), o());
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => o,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => a,
                    }));
                var o = u(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => o });
            },
            2472: (e, t, u) => {
                'use strict';
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => o });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => n });
                var o = u(5959);
                const n = { view: u(7641), client: o };
            },
            3722: (e, t, u) => {
                'use strict';
                function o(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function n(e, t, u) {
                    return `url(${o(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => n, getTextureUrl: () => o }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => o });
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => n });
                var o = u(2472);
                const n = {
                    onTextureFrozen: (0, o.E)('self.onTextureFrozen'),
                    onTextureReady: (0, o.E)('self.onTextureReady'),
                    onDomBuilt: (0, o.E)('self.onDomBuilt'),
                    onLoaded: (0, o.E)('self.onLoaded'),
                    onDisplayChanged: (0, o.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, o.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, o.E)('children.onAdded'),
                        onLoaded: (0, o.E)('children.onLoaded'),
                        onRemoved: (0, o.E)('children.onRemoved'),
                        onAttached: (0, o.E)('children.onAttached'),
                        onTextureReady: (0, o.E)('children.onTextureReady'),
                        onRequestPosition: (0, o.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => o,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => D,
                        pxToRem: () => B,
                        remToPx: () => g,
                        resize: () => _,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
                    }));
                var o = u(3722),
                    n = u(6112),
                    r = u(6538),
                    a = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, o);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    x = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => r });
                const o = ['args'],
                    n = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        o,
                                        n = {},
                                        r = Object.keys(e);
                                    for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, o);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    r = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            3377: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => c });
                var o = u(5415),
                    n = u(6179),
                    r = u.n(n);
                const a = ['xl', 'lg', 'md', 'sm', 'xs'],
                    i = (e) => e.includes('_') && ((e) => a.includes(e))(e.split('_').at(-1)),
                    s = [o.cJ.ExtraLarge, o.cJ.Large, o.cJ.Medium, o.cJ.Small, o.cJ.ExtraSmall],
                    l = (e, t) =>
                        Object.keys(e).reduce((u, o) => {
                            if (o in u) return u;
                            if (i(o)) {
                                const n = o.split('_').slice(0, -1).join('_');
                                if (n in u) return u;
                                const r = s.indexOf(t),
                                    i = (-1 !== r ? a.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    l = i ? e[i] : void 0;
                                return ((u[n] = void 0 !== l ? l : e[n]), u);
                            }
                            const n = e[o];
                            return (
                                void 0 === n ||
                                    ((e, t) => a.some((u) => void 0 !== t[`${e}_${u}`]))(o, e) ||
                                    (u[o] = n),
                                u
                            );
                        }, {}),
                    c = (e, t = l) => {
                        const u = (
                            (e, t = l) =>
                            (u) => {
                                const a = (0, o.GS)().mediaSize,
                                    i = (0, n.useMemo)(() => t(u, a), [u, a]);
                                return r().createElement(e, i);
                            }
                        )(e, t);
                        return r().memo((t) =>
                            Object.keys(t).some((e) => i(e) && void 0 !== t[e])
                                ? r().createElement(u, t)
                                : r().createElement(e, t),
                        );
                    };
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                var o = u(6179);
                const n = (e) => {
                    const t = (0, o.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => s, GS: () => l, cJ: () => a, fd: () => i });
                var o = u(6179),
                    n = u(7739),
                    r = u(1043);
                let a, i, s;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                })(a || (a = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'));
                    })(s || (s = {})));
                const l = () => {
                    const e = (0, o.useContext)(n.YN),
                        t = e.width,
                        u = e.height,
                        r = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return a.ExtraLarge;
                                case e.large:
                                    return a.Large;
                                case e.medium:
                                    return a.Medium;
                                case e.small:
                                    return a.Small;
                                case e.extraSmall:
                                    return a.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), a.ExtraSmall);
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
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5521: (e, t, u) => {
                'use strict';
                let o, n;
                (u.d(t, { n: () => o }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
                    })(o || (o = {})),
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
                    })(n || (n = {})));
            },
            7727: (e, t, u) => {
                'use strict';
                function o(e) {
                    engine.call('PlaySound', e);
                }
                u.d(t, { $: () => n, G: () => o });
                const n = {
                    playHighlight() {
                        o('highlight');
                    },
                    playClick() {
                        o('play');
                    },
                    playYes() {
                        o('yes1');
                    },
                };
            },
            3649: (e, t, u) => {
                'use strict';
                let o;
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                (u.d(t, { BN: () => n, Uw: () => d, v2: () => o, z4: () => r }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(o || (o = {})));
                const r = (e) => e.replace(/&nbsp;/g, ' '),
                    a = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    i = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    s = (e, t, u = o.left) => e.split(t).reduce(u === o.left ? a : i, []),
                    l = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, t, u) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            u && e in u
                                ? u[e]
                                : ((e, t = o.left) => {
                                      const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return c.includes(u)
                                          ? l(e)
                                          : ((e, t = o.left) => {
                                                let u = [];
                                                const n =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = r(e);
                                                return (
                                                    s(a, /( )/, t).forEach((e) => (u = u.concat(s(e, n, o.left)))),
                                                    u
                                                );
                                            })(e, t);
                                  })(e, t),
                        );
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var o = u(3138);
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
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = o.O.view.addModelObserver(e, u, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const o = this._callbacks[u];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, { kH: () => _, B3: () => c, Z5: () => a, lf: () => m, cy: () => i, B0: () => s, ry: () => F });
                class o {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (o.__instance || (o.__instance = new o()), o.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            o = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== o)),
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
                o.__instance = void 0;
                const n = o;
                var r = u(1358);
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let s;
                var l;
                (((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    A = u(3138);
                const p = ['args'];
                function B(e, t, u, o, n, r, a) {
                    try {
                        var i = e[r](a),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(o, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                        u = arguments;
                                    return new Promise(function (o, n) {
                                        var r = e.apply(t, u);
                                        function a(e) {
                                            B(r, o, n, a, i, 'next', e);
                                        }
                                        function i(e) {
                                            B(r, o, n, a, i, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    D = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        o,
                                        n = {},
                                        r = Object.keys(e);
                                    for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, p);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((o = n),
                                              Object.entries(o).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var o;
                    },
                    b = () => D(s.CLOSE),
                    C = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var h = u(7572);
                const v = n.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => D(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => D(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            D(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, o, n = R.invalid('resId'), r) => {
                            const a = A.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                m = i.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + a.x,
                                    y: A.O.view.pxToRem(c) + a.y,
                                    width: A.O.view.pxToRem(d),
                                    height: A.O.view.pxToRem(m),
                                };
                            D(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: g(_),
                                on: !0,
                                args: r,
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
                            C(e, b);
                        },
                        handleViewEvent: D,
                        onBindingsReady: F,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const n = Object.prototype.toString.call(t[o]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[o];
                                        u[o] = [];
                                        for (let t = 0; t < n.length; t++) u[o].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[o] = e(t[o]))
                                            : (u[o] = t[o]);
                                }
                            return u;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: a,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            1976: (e, t, u) => {
                'use strict';
                var o = {};
                (u.r(o),
                    u.d(o, {
                        Area: () => Wt,
                        Bar: () => Pt,
                        DefaultScroll: () => Gt,
                        Direction: () => St,
                        defaultSettings: () => yt,
                        useHorizontalScrollApi: () => Rt,
                    }));
                var n = {};
                (u.r(n), u.d(n, { Area: () => Qt, Bar: () => qt, Default: () => Jt, useVerticalScrollApi: () => Ut }));
                var r = u(7739),
                    a = u(6179),
                    i = u.n(a),
                    s = u(6483),
                    l = u.n(s),
                    c = u(926),
                    d = u.n(c),
                    m = u(5415);
                const _ = ['children', 'className'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const A = {
                        [m.fd.ExtraSmall]: '',
                        [m.fd.Small]: d().SMALL_WIDTH,
                        [m.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [m.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [m.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [m.Aq.ExtraSmall]: '',
                        [m.Aq.Small]: d().SMALL_HEIGHT,
                        [m.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [m.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [m.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    B = {
                        [m.cJ.ExtraSmall]: '',
                        [m.cJ.Small]: d().SMALL,
                        [m.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [m.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [m.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            u = e.className,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, _);
                        const n = (0, m.GS)(),
                            r = n.mediaWidth,
                            a = n.mediaHeight,
                            s = n.mediaSize;
                        return i().createElement('div', E({ className: l()(u, A[r], p[a], B[s]) }, o), t);
                    },
                    F = ['children'],
                    D = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, F);
                        return i().createElement(r.ZN, null, i().createElement(g, u, t));
                    };
                var b = u(493),
                    C = u.n(b),
                    h = u(7727);
                const v = {
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
                    f = [
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
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                class w extends i().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, h.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, h.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            o = e.goto,
                            n = e.side,
                            r = e.type,
                            a = e.classNames,
                            s = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        o,
                                        n = {},
                                        r = Object.keys(e);
                                    for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(e, f)),
                            E = l()(v.base, v[`base__${r}`], v[`base__${n}`], null == a ? void 0 : a.base),
                            A = l()(v.icon, v[`icon__${r}`], v[`icon__${n}`], null == a ? void 0 : a.icon),
                            p = l()(v.glow, null == a ? void 0 : a.glow),
                            B = l()(v.caption, v[`caption__${r}`], null == a ? void 0 : a.caption),
                            g = l()(v.goto, null == a ? void 0 : a.goto);
                        return i().createElement(
                            'div',
                            x(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== r && i().createElement('div', { className: v.shine }),
                            i().createElement('div', { className: A }, i().createElement('div', { className: p })),
                            i().createElement('div', { className: B }, t),
                            o && i().createElement('div', { className: g }, o),
                        );
                    }
                }
                w.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const S = (e, t) => {
                    let u;
                    const o = setTimeout(() => {
                        u = e();
                    }, t);
                    return () => {
                        ('function' == typeof u && u(), clearTimeout(o));
                    };
                };
                var y = u(3138),
                    T = u(5521),
                    k = u(4179);
                const N = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function L(e = T.n.NONE, t = N, u = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== T.n.NONE)
                            return (
                                window.addEventListener('keydown', o, u),
                                () => {
                                    window.removeEventListener('keydown', o, u);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (y.O.view.isEventHandled()) return;
                                (y.O.view.setEventHandled(), t(o), u && o.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                var O = u(3282),
                    M = u(4999),
                    I = u(3649);
                let P;
                (!(function (e) {
                    ((e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year'));
                })(P || (P = {})),
                    Date.now());
                const H = (0, a.memo)(({ datetime: e, format: t = P.SHORT_DATE, localize: u = !0 }) =>
                    ((e, t, u) => {
                        switch (t) {
                            case P.SHORT_DATE:
                                return u
                                    ? k.Z5.getDateFormat(e, k.kH.SHORT_FORMAT)
                                    : k.cy.getTimeFormat('%d.%m.%y', e, !0);
                            case P.SHORT_TIME:
                                return u
                                    ? k.Z5.getTimeFormat(e, k.lf.SHORT_FORMAT)
                                    : k.cy.getTimeFormat('%I:%M %p', e, !0);
                            case P.SHORT_DATE_TIME:
                                return u
                                    ? `${k.Z5.getDateFormat(e, k.kH.SHORT_FORMAT)}, ${k.Z5.getTimeFormat(e, k.lf.SHORT_FORMAT)}`
                                    : k.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                            case P.FULL_DATE:
                                return u
                                    ? k.Z5.getDateFormat(e, k.kH.LONG_FORMAT)
                                    : k.cy.getTimeFormat('%B %d, %Y', e, !0);
                            case P.FULL_DATE_TIME:
                                return u
                                    ? `${k.Z5.getDateFormat(e, k.kH.LONG_FORMAT)}, ${k.Z5.getTimeFormat(e, k.lf.SHORT_FORMAT)}`
                                    : k.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                            case P.MONTH:
                                return k.cy.getTimeFormat('%B', e, !0);
                            case P.MONTH_DATE:
                                return k.cy.getTimeFormat('%B %e', e, !0);
                            case P.DATE_MONTH:
                                return k.cy.getTimeFormat('%e %B', e, !0);
                            case P.MONTH_YEAR:
                                return k.cy.getTimeFormat('%B %Y', e, !0);
                            case P.WEEK_DAY:
                                return k.cy.getTimeFormat('%A', e, !0);
                            case P.WEEK_DAY_TIME:
                                return u
                                    ? `${k.cy.getTimeFormat('%A', e, !0)} ${k.Z5.getTimeFormat(e, k.lf.SHORT_FORMAT)}`
                                    : k.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                            case P.YEAR:
                                return k.cy.getTimeFormat('%Y', e, !0);
                            case P.DATE_YEAR:
                                return k.cy.getTimeFormat('%d, %Y', e, !0);
                        }
                    })(e, t, u),
                );
                var G = u(7613);
                const W = {
                        base: 'BoxDescription_base_17',
                        headerHolder: 'BoxDescription_headerHolder_27',
                        headerName: 'BoxDescription_headerName_c9',
                        headerDescription: 'BoxDescription_headerDescription_42',
                        boxIcon: 'BoxDescription_boxIcon_d3',
                        boxIcon__tier1: 'BoxDescription_boxIcon__tier1_85',
                        boxIcon__tier2: 'BoxDescription_boxIcon__tier2_10',
                        boxIcon__tier3: 'BoxDescription_boxIcon__tier3_4d',
                        boxIcon__tier4: 'BoxDescription_boxIcon__tier4_53',
                        infoBoxes: 'BoxDescription_infoBoxes_32',
                        headerDescriptionDivider: 'BoxDescription_headerDescriptionDivider_c9',
                        autoOpenContainer: 'BoxDescription_autoOpenContainer_97',
                        autoOpenText: 'BoxDescription_autoOpenText_a8',
                        icon: 'BoxDescription_icon_72',
                        description: 'BoxDescription_description_32',
                    },
                    U = R.strings.gui_lootboxes,
                    V = R.strings.lootboxes,
                    z = R.images.gui.maps.icons.components.countdown.big.clock(),
                    j = i().memo(
                        ({ userName: e, tier: t, count: u, descriptionKey: o, autoOpenTime: n, isInfinite: r }) =>
                            i().createElement(
                                'div',
                                { className: W.base },
                                V.userName.$dyn(e) &&
                                    i().createElement(
                                        'div',
                                        { className: W.headerHolder },
                                        i().createElement(G.ZP, {
                                            text: V.userName.$dyn(e) || '',
                                            format: { classMix: W.headerName },
                                        }),
                                    ),
                                i().createElement(
                                    'div',
                                    { className: W.headerDescription },
                                    i().createElement('div', { className: l()(W.boxIcon, W[`boxIcon__tier${t}`]) }),
                                    U.tier.$dyn(`tier_${t}`) &&
                                        i().createElement(G.ZP, {
                                            text: U.tier.$dyn(`tier_${t}`) || '',
                                            format: { classMix: W.infoBoxes },
                                        }),
                                    u > 0 &&
                                        !r &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: W.headerDescriptionDivider }),
                                            i().createElement(G.ZP, {
                                                text: U.optional.count(),
                                                format: { binding: { count: u }, classMix: W.infoBoxes },
                                            }),
                                        ),
                                ),
                                n > 0 &&
                                    i().createElement(
                                        'div',
                                        { className: W.autoOpenContainer },
                                        i().createElement('div', {
                                            className: W.icon,
                                            style: { backgroundImage: `url('${z}')` },
                                        }),
                                        i().createElement(G.ZP, {
                                            text: V.autoOpenView.dateOpen(),
                                            format: {
                                                binding: {
                                                    date: i().createElement(H, {
                                                        datetime: n,
                                                        format: P.FULL_DATE_TIME,
                                                    }),
                                                },
                                                classMix: W.autoOpenText,
                                            },
                                        }),
                                    ),
                                V.desctiptions.$dyn(o) &&
                                    i().createElement(G.ZP, {
                                        text: V.desctiptions.$dyn(o) || '',
                                        format: { classMix: W.description },
                                    }),
                            ),
                    ),
                    $ = {
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
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let K, X;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(K || (K = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(X || (X = {})));
                const Z = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: o,
                    disabled: n,
                    mixClass: r,
                    soundHover: s,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: m,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: A,
                    onClick: p,
                }) => {
                    const B = (0, a.useRef)(null),
                        g = (0, a.useState)(u),
                        F = g[0],
                        D = g[1],
                        b = (0, a.useState)(!1),
                        C = b[0],
                        v = b[1],
                        f = (0, a.useState)(!1),
                        x = f[0],
                        w = f[1],
                        S = (0, a.useCallback)(() => {
                            n || (B.current && (B.current.focus(), D(!0)));
                        }, [n]),
                        y = (0, a.useCallback)(
                            (e) => {
                                F && null !== B.current && !B.current.contains(e.target) && D(!1);
                            },
                            [F],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                n || (p && p(e));
                            },
                            [n, p],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                n || (null !== s && (0, h.G)(s), d && d(e), w(!0));
                            },
                            [n, s, d],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                n || (E && E(e), v(!1));
                            },
                            [n, E],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                n || (null !== c && (0, h.G)(c), _ && _(e), u && S(), v(!0));
                            },
                            [n, c, _, S, u],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                n || (A && A(e), v(!1));
                            },
                            [n, A],
                        ),
                        I = l()(
                            $.base,
                            $[`base__${o}`],
                            {
                                [$.base__disabled]: n,
                                [$[`base__${t}`]]: t,
                                [$.base__focus]: F,
                                [$.base__highlightActive]: C,
                                [$.base__firstHover]: x,
                            },
                            r,
                        ),
                        P = l()($.state, $.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            D(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: B,
                                className: I,
                                onMouseEnter: k,
                                onMouseMove: N,
                                onMouseUp: L,
                                onMouseDown: O,
                                onMouseLeave: M,
                                onClick: T,
                            },
                            o !== K.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: $.back }),
                                    i().createElement('span', { className: $.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: P },
                                i().createElement('span', { className: $.stateDisabled }),
                                i().createElement('span', { className: $.stateHighlightHover }),
                                i().createElement('span', { className: $.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: $.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Z.defaultProps = { type: K.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const q = (0, a.memo)(Z),
                    Y = 'BoxRadioButtons_base_7a',
                    J = 'BoxRadioButtons_button_27';
                let Q, ee, te;
                (!(function (e) {
                    ((e.Simple = 'simpleKey'), (e.Lockpick = 'lockpick'));
                })(Q || (Q = {})),
                    (function (e) {
                        ((e.One = 'one'), (e.All = 'all'));
                    })(ee || (ee = {})),
                    (function (e) {
                        ((e.Normal = 'normal'), (e.Key = 'key'), (e.MasterKey = 'masterKey'));
                    })(te || (te = {})));
                const ue = { keyID: 0, keyType: Q.Simple, count: 1, iconName: '', userName: '', openProbability: 0 },
                    oe = (e, t) => {
                        const u = {};
                        return (
                            e.forEach((e) => {
                                const o = t.find((t) => t.keyID === e);
                                o && (u[o.keyID] = Object.assign({}, o));
                            }),
                            u
                        );
                    },
                    ne = (e) => {
                        var t, u;
                        return (
                            (null == (t = e.find((e) => e.count > 0)) ? void 0 : t.keyID) ||
                            (null == (u = e[0]) ? void 0 : u.keyID)
                        );
                    };
                var re = u(280);
                const ae = [
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
                function ie(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const se = (e, t, u = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: k.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                u,
                            ),
                        );
                    },
                    le = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            o = e.args,
                            n = e.onMouseEnter,
                            r = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            p = void 0 === A || A,
                            B = e.targetId,
                            g = void 0 === B ? 0 : B,
                            F = e.onShow,
                            D = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, ae);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, a.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            o = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (o = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: o }
                                        );
                                    })().resId,
                                [g],
                            ),
                            v = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (se(u, E, { isMouseEvent: !0, on: !0, arguments: ie(o) }, h),
                                    F && F(),
                                    (C.current.isVisible = !0));
                            }, [u, E, o, h, F]),
                            f = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        se(u, E, { on: !1 }, h),
                                        C.current.isVisible && D && D(),
                                        (C.current.isVisible = !1));
                                }
                            }, [u, E, h, D]),
                            x = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === p && f();
                            }, [p, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            p
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (f(), null == r || r(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && f(), null == s || s(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && f(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : t
                        );
                        var w;
                    },
                    ce = ['children'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const me = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, ce);
                        return i().createElement(
                            le,
                            de(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                u,
                            ),
                            t,
                        );
                    },
                    _e = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const Ae = R.views.common.tooltip_window.simple_tooltip_content,
                    pe = (e) => {
                        let t = e.children,
                            u = e.body,
                            o = e.header,
                            n = e.note,
                            r = e.alert,
                            s = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, _e);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: o, note: n, alert: r });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [r, u, o, n, s]);
                        return i().createElement(
                            le,
                            Ee(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Ae.SimpleTooltipHtmlContent('resId') : Ae.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    };
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                const ge = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const o = i().createElement('div', { className: u }, e);
                        if (t.header || t.body) return i().createElement(pe, t, o);
                        const n = t.contentId,
                            r = t.args,
                            a = null == r ? void 0 : r.contentId;
                        return n || a
                            ? i().createElement(le, Be({}, t, { contentId: n || a }), o)
                            : i().createElement(me, t, o);
                    },
                    Fe = {
                        base: 'CheckButton_base_48',
                        base__disabled: 'CheckButton_base__disabled_9f',
                        border: 'CheckButton_border_74',
                        border__normal: 'CheckButton_border__normal_25',
                        'button-hover': 'CheckButton_button-hover_86',
                        border__checked: 'CheckButton_border__checked_c6',
                        bg: 'CheckButton_bg_67',
                        bg__normal: 'CheckButton_bg__normal_59',
                        bg__checked: 'CheckButton_bg__checked_2b',
                        bg__disabled: 'CheckButton_bg__disabled_b2',
                        content__disabled: 'CheckButton_content__disabled_52',
                        check: 'CheckButton_check_36',
                    };
                var De;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Checked = 'checked'), (e.Disabled = 'disabled'));
                })(De || (De = {}));
                const be = i().memo(
                        ({
                            content: e = '',
                            isDisabled: t = !1,
                            isChecked: u = !1,
                            classNames: o = '',
                            handleButtonClick: n,
                        }) => {
                            if (t)
                                return i().createElement(
                                    'div',
                                    { className: l()(Fe.base, Fe.base__disabled, o) },
                                    i().createElement('div', { className: l()(Fe.bg, Fe.bg__disabled) }),
                                    i().createElement('div', { className: l()(Fe.content, Fe.content__disabled) }, e),
                                );
                            const r = u ? De.Checked : De.Normal;
                            return i().createElement(
                                'div',
                                { className: l()(Fe.base, o), onClick: n },
                                i().createElement('div', { className: l()(Fe.bg, Fe[`bg__${r}`]) }),
                                i().createElement('div', { className: l()(Fe.border, Fe[`border__${r}`]) }),
                                r === De.Checked ? i().createElement('div', { className: Fe.check }) : '',
                                i().createElement('div', { className: l()(Fe.content) }, e),
                            );
                        },
                    ),
                    Ce = {
                        base: 'MasterKeyButtonGroup_base_be',
                        divider: 'MasterKeyButtonGroup_divider_76',
                        divider__second: 'MasterKeyButtonGroup_divider__second_1d',
                        openButton: 'MasterKeyButtonGroup_openButton_b9',
                        openButton__single: 'MasterKeyButtonGroup_openButton__single_38',
                        buttonsGroup: 'MasterKeyButtonGroup_buttonsGroup_aa',
                        keyIcon: 'MasterKeyButtonGroup_keyIcon_73',
                    },
                    he = R.strings.gui_lootboxes,
                    ve = ({
                        onOpenBox: e,
                        handleBuyKeys: t,
                        availableKeys: u,
                        isOpenBoxDisabled: o = !1,
                        isBuyAvailable: n = !1,
                        customButtonClassName: r = '',
                        customWrapperClassName: s = '',
                    }) => {
                        var c;
                        const d = (0, a.useMemo)(() => Object.values(u), [u]),
                            m = (0, a.useState)(ee.One),
                            _ = m[0],
                            E = m[1],
                            A = (0, a.useState)(ne(d)),
                            p = A[0],
                            B = A[1],
                            g = (0, a.useState)(1),
                            F = g[0],
                            D = g[1],
                            b = ((e) => {
                                const t = {};
                                return (
                                    e.forEach((e) => {
                                        t[e.keyID] = {
                                            itemsCount: e.count,
                                            itemsMinCount: 1,
                                            itemsMaxCount: 1 === e.keyID ? 15 : 20,
                                        };
                                    }),
                                    t
                                );
                            })(d.length ? d : [ue]),
                            C = !d.length || d.every((e) => !e.count);
                        ((0, a.useEffect)(() => {
                            (D(
                                ((e, t, u) => {
                                    switch (e) {
                                        case ee.One:
                                            return t[u].itemsMinCount;
                                        case ee.All:
                                            return t[u].itemsCount >= t[u].itemsMaxCount
                                                ? t[u].itemsMaxCount
                                                : t[u].itemsCount;
                                        default:
                                            return t[u].itemsMinCount;
                                    }
                                })(_, b, u[p].keyID),
                            ),
                                b[p].itemsCount || B(ne(d)));
                        }, [u, d, b, _, p]),
                            (0, a.useEffect)(() => {
                                b[p].itemsCount <= 1 && E(ee.One);
                            }, [b, p]));
                        const h = (0, a.useCallback)(() => {
                            (e(F, p), u[p].count - 1 <= 0 && B(ne(d)));
                        }, [u, d, e, p, F]);
                        return i().createElement(
                            'div',
                            { className: l()(Ce.base, s) },
                            i().createElement('div', { className: Ce.divider }),
                            i().createElement(
                                'div',
                                { className: l()(Ce.buttonsGroup, Ce.openTypeButtonsGroup) },
                                d.map((e) => {
                                    return i().createElement(
                                        ge,
                                        {
                                            key: `currency-key-tooltip-${e.keyID}`,
                                            tooltipArgs: {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxKeyTooltip(
                                                        'resId',
                                                    ),
                                                args: { keyID: e.keyID, isActionTooltip: !0 },
                                            },
                                        },
                                        i().createElement(be, {
                                            key: e.keyID,
                                            content:
                                                ((t = e.iconName),
                                                i().createElement('div', {
                                                    className: Ce.keyIcon,
                                                    style: {
                                                        backgroundImage: `url(R.images.gui_lootboxes.gui.maps.storage.currencyKey.${t})`,
                                                    },
                                                })),
                                            classNames: r,
                                            handleButtonClick: () => {
                                                return ((t = e.keyID), void B(t));
                                                var t;
                                            },
                                            isChecked: p === e.keyID,
                                            isDisabled: !e.count,
                                        }),
                                    );
                                    var t;
                                }),
                            ),
                            i().createElement('div', { className: l()(Ce.divider, Ce.divider__second) }),
                            i().createElement(
                                'div',
                                { className: l()(Ce.buttonsGroup, Ce.countButtonsGroup) },
                                i().createElement(be, {
                                    content: i().createElement(re.z, {
                                        text: he.optional.openCount.numberCount(),
                                        binding: { count: b[p].itemsMinCount },
                                    }),
                                    classNames: r,
                                    handleButtonClick: () => {
                                        E(ee.One);
                                    },
                                    isChecked: _ === ee.One,
                                    isDisabled: !u[p].count,
                                }),
                                i().createElement(be, {
                                    content:
                                        (null == (c = b[p]) ? void 0 : c.itemsCount) < b[p].itemsMaxCount
                                            ? i().createElement(re.z, { text: he.optional.openCount.all() })
                                            : i().createElement(re.z, {
                                                  text: he.optional.openCount.numberCount(),
                                                  binding: { count: b[p].itemsMaxCount },
                                              }),
                                    classNames: r,
                                    handleButtonClick: () => {
                                        E(ee.All);
                                    },
                                    isChecked: _ === ee.All,
                                    isDisabled: b[p].itemsCount <= 1,
                                }),
                            ),
                            i().createElement(
                                q,
                                {
                                    mixClass: Ce.openButton,
                                    size: X.medium,
                                    type: K.main,
                                    onClick: C ? t : h,
                                    disabled: C ? !n : o,
                                },
                                i().createElement(re.z, { text: C ? he.optional.buyBox() : he.optional.openBox() }),
                            ),
                        );
                    },
                    fe = {
                        base: 'NormalButtonGroup_base_17',
                        divider: 'NormalButtonGroup_divider_78',
                        divider__second: 'NormalButtonGroup_divider__second_58',
                        openButton: 'NormalButtonGroup_openButton_85',
                        buttonsGroup: 'NormalButtonGroup_buttonsGroup_39',
                    },
                    xe = R.strings.gui_lootboxes,
                    we = i().memo(
                        ({
                            boxCount: e,
                            onOpenBox: t,
                            isOpenBoxDisabled: u = !1,
                            customButtonClassName: o = '',
                            customWrapperClassName: n = '',
                            manualMaxOpenCount: r = 0,
                        }) => {
                            const s = (0, a.useState)(ee.One),
                                c = s[0],
                                d = s[1],
                                m = (0, a.useState)(1),
                                _ = m[0],
                                E = m[1],
                                A = r || 10;
                            ((0, a.useEffect)(() => {
                                E(Math.min(_, A));
                            }, [_, A]),
                                (0, a.useEffect)(() => {
                                    switch (c) {
                                        case ee.One:
                                            E(1);
                                            break;
                                        case ee.All:
                                            E(e >= A ? A : e);
                                            break;
                                        default:
                                            E(1);
                                    }
                                }, [e, c, A]));
                            const p = (0, a.useCallback)(() => {
                                t(_);
                            }, [t, _]);
                            return i().createElement(
                                'div',
                                { className: l()(fe.base, n) },
                                A > 1 &&
                                    e > 1 &&
                                    i().createElement(
                                        'div',
                                        { className: l()(fe.buttonsGroup, fe.countButtonsGroup) },
                                        i().createElement(be, {
                                            content: i().createElement(re.z, {
                                                text: xe.optional.openCount.numberCount(),
                                                binding: { count: 1 },
                                            }),
                                            classNames: o,
                                            handleButtonClick: () => {
                                                d(ee.One);
                                            },
                                            isChecked: c === ee.One,
                                        }),
                                        i().createElement(be, {
                                            content:
                                                e < A
                                                    ? i().createElement(re.z, { text: xe.optional.openCount.all() })
                                                    : i().createElement(re.z, {
                                                          text: xe.optional.openCount.numberCount(),
                                                          binding: { count: A },
                                                      }),
                                            classNames: o,
                                            handleButtonClick: () => {
                                                d(ee.All);
                                            },
                                            isChecked: c === ee.All,
                                            isDisabled: e <= 1,
                                        }),
                                    ),
                                i().createElement(
                                    q,
                                    {
                                        mixClass: fe.openButton,
                                        size: X.medium,
                                        type: K.main,
                                        onClick: p,
                                        disabled: u || !e,
                                    },
                                    i().createElement(re.z, { text: xe.optional.openBox() }),
                                ),
                            );
                        },
                    ),
                    Se = R.strings.gui_lootboxes,
                    ye = i().memo(
                        ({
                            onOpenBox: e,
                            onOpenShopByBoxID: t,
                            onBuyBox: u,
                            count: o,
                            disabled: n,
                            isOpenBoxDisabled: r,
                            isBuyAvailable: s = !1,
                            allKeys: c = [],
                            currentLootboxKeysIDs: d = [],
                            hasUniqueURL: m = !1,
                            manualMaxOpenCount: _ = 0,
                        }) => {
                            const E = 0 === o,
                                A = (0, a.useState)(oe(d, c)),
                                p = A[0],
                                B = A[1],
                                g = (0, a.useCallback)(() => {
                                    u && u();
                                }, [u]),
                                F = (0, a.useCallback)(
                                    (t, u) => {
                                        e(t, u);
                                    },
                                    [e],
                                ),
                                D = (0, a.useCallback)(
                                    (t) => {
                                        e(t);
                                    },
                                    [e],
                                ),
                                b = (0, a.useCallback)(() => {
                                    t();
                                }, [t]);
                            return (
                                (0, a.useEffect)(() => {
                                    B(oe(d, c));
                                }, [c, d]),
                                n
                                    ? i().createElement(
                                          'div',
                                          { className: Y },
                                          i().createElement(
                                              'div',
                                              { className: 'BoxRadioButtons_warningText_71' },
                                              Se.entryPointWidget.disabledTooltip.body(),
                                          ),
                                      )
                                    : i().createElement(
                                          'div',
                                          { className: Y },
                                          d.length
                                              ? ((e) =>
                                                    Object.keys(e).length
                                                        ? i().createElement(ve, {
                                                              availableKeys: e,
                                                              customButtonClassName: J,
                                                              isOpenBoxDisabled: r,
                                                              onOpenBox: F,
                                                              handleBuyKeys: g,
                                                              isBuyAvailable: s,
                                                          })
                                                        : i().createElement(
                                                              q,
                                                              {
                                                                  size: X.medium,
                                                                  type: K.main,
                                                                  onClick: g,
                                                                  disabled: !s,
                                                              },
                                                              i().createElement(G.ZP, { text: Se.optional.buyBox() }),
                                                          ))(p)
                                              : i().createElement(
                                                    'div',
                                                    null,
                                                    E &&
                                                        m &&
                                                        i().createElement(
                                                            q,
                                                            {
                                                                mixClass: l()(J, 'BoxRadioButtons_buyButton_a7'),
                                                                size: X.medium,
                                                                type: K.main,
                                                                onClick: b,
                                                                disabled: !s,
                                                            },
                                                            i().createElement(G.ZP, { text: Se.optional.buyBox() }),
                                                        ),
                                                    !E &&
                                                        i().createElement(we, {
                                                            boxCount: o,
                                                            customButtonClassName: J,
                                                            isOpenBoxDisabled: r,
                                                            onOpenBox: D,
                                                            manualMaxOpenCount: _,
                                                        }),
                                                ),
                                      )
                            );
                        },
                    );
                let Te;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(Te || (Te = {}));
                const Re = 'tooltip_watched';
                let ke;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(ke || (ke = {}));
                const Ne = ['action', 'timeLimit'],
                    Le = 'metrics',
                    Oe = () => Date.now(),
                    Me = ({ partnerID: e, item: t, parentScreen: u, itemState: o, info: n }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: o || null,
                        additional_info: n || null,
                    }),
                    Ie = (e, t) => {
                        const u = (0, a.useCallback)(
                            (u, o = Te.Info, n) => {
                                (n || (n = {}),
                                    Object.keys(n).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: u,
                                            logLevel: o,
                                            params: JSON.stringify(n),
                                        }));
                            },
                            [e, t],
                        );
                        return (e, t, o) => u(e, t, o);
                    },
                    Pe = (e) => {
                        const t = ((e, t) => {
                                const u = Ie(e, t),
                                    o = (0, a.useRef)(new Map()),
                                    n = (0, a.useRef)(new Map()),
                                    r = (0, a.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const t = o.current.get(e);
                                            (void 0 !== t && t > 0) || o.current.set(e, Oe());
                                        },
                                        [o],
                                    ),
                                    i = (0, a.useCallback)(() => {
                                        (o.current.clear(), n.current.clear());
                                    }, [o, n]),
                                    s = (0, a.useCallback)(
                                        (e) => {
                                            e &&
                                                void 0 !== o.current.get(e) &&
                                                void 0 === n.current.get(e) &&
                                                n.current.set(e, Oe());
                                        },
                                        [o, n],
                                    ),
                                    l = (0, a.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const t = o.current.get(e);
                                            if (void 0 === t) return;
                                            const u = n.current.get(e);
                                            if (void 0 === u) return;
                                            n.current.delete(e);
                                            const r = Oe() - u;
                                            o.current.set(e, t + r);
                                        },
                                        [o, n],
                                    ),
                                    c = (0, a.useCallback)(
                                        (e, t = 0, r, a) => {
                                            const i = o.current.get(e);
                                            if (void 0 === i) return;
                                            (void 0 !== n.current.get(e) && l(e), o.current.delete(e));
                                            const s = (Oe() - i) / 1e3;
                                            s <= t ||
                                                ((a = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(
                                                    a,
                                                    s,
                                                )),
                                                u(e, r, a));
                                        },
                                        [o, n, u, l],
                                    );
                                return [
                                    (e) => r(e),
                                    (e, t, u, o) => c(e, t, u, o),
                                    () => i(),
                                    (e) => s(e),
                                    (e) => l(e),
                                ];
                            })(e, Le),
                            u = t[0],
                            o = t[1],
                            n = t[2],
                            r = t[3],
                            i = t[4],
                            s = (0, a.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        u = e.timeLimit,
                                        n = e.logLevel;
                                    o(t, u, n, Me(e));
                                },
                                [o],
                            );
                        return [(e) => u(e), (e) => s(e), () => n(), (e) => r(e), (e) => i(e)];
                    },
                    He = (e, t) => {
                        const u = Pe(e),
                            o = u[0],
                            n = u[1],
                            r = t.action,
                            i = t.timeLimit,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(t, Ne);
                        return (0, a.useMemo)(
                            () => ({
                                onShow: () => o(r || Re),
                                onHide: () => n(Object.assign({ action: r || Re, timeLimit: i || 2 }, s)),
                            }),
                            [r, i, s, o, n],
                        );
                    };
                let Ge, We, Ue, Ve;
                (!(function (e) {
                    e.Lootbox = 'lootbox';
                })(Ge || (Ge = {})),
                    (function (e) {
                        ((e.TooltipWatched = 'tooltip_watched'),
                            (e.Click = 'click'),
                            (e.VideoStarted = 'video_started'),
                            (e.Show = 'show'));
                    })(We || (We = {})),
                    (function (e) {
                        ((e.Storage = 'storage'),
                            (e.Probability = 'probability'),
                            (e.Rewards = 'rewards'),
                            (e.LoseRewards = 'lose_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.Welcome = 'welcome'),
                            (e.LootBoxesShortStats = 'lootboxes_short_stats'),
                            (e.LootBoxesFullStats = 'lootboxes_full_stats'));
                    })(Ue || (Ue = {})),
                    (function (e) {
                        ((e.IconPossibleRewardGroup = 'icon_possible_reward_group'),
                            (e.CarouselLootbox = 'carousel_lootbox'),
                            (e.InfoIcon = 'info_icon'),
                            (e.ESCButton = 'esc_button'),
                            (e.BackButton = 'back_button'),
                            (e.ProbabilityPercent = 'probability_percent'),
                            (e.ProbabilityPercentWithGarant = 'probability_percent_with_garant'),
                            (e.ProbabilityReward = 'probability_reward'),
                            (e.MinorRewards = 'minor_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.RewardToopltip = 'reward_tooltip'),
                            (e.RewardRotationToopltip = 'reward_totation_tooltip'),
                            (e.ContinueButton = 'continue_button'),
                            (e.OpenOneMoreButton = 'open_one_more_button'),
                            (e.OpenMultiButton = 'open_multi_button'),
                            (e.OpenInHangarButton = 'open_in_hangar_button'),
                            (e.OKButton = 'ok_button'),
                            (e.CloseButton = 'close_button'),
                            (e.StatisticButton = 'statistic_button'),
                            (e.StatisticESCButton = 'statistic_esc_button'),
                            (e.statisticOutsideClick = 'statistic_outside_click'),
                            (e.DeadlineWidget = 'deadline_widget'),
                            (e.LootBoxesShortStatsTabs = 'lootboxes_short_stats_tabs'),
                            (e.LootBoxesShortStatsGroup = 'lootboxes_short_stats_group'),
                            (e.LootBoxesFullStatsSidebar = 'lootboxes_full_stats_sidebar'),
                            (e.lootBoxesFullStatsSelectAll = 'lootboxes_full_stats_select_all'),
                            (e.lootBoxesFullStatsSelect = 'lootboxes_full_stats_select'),
                            (e.lootBoxesFullStatsReward = 'lootboxes_full_stats_reward'));
                    })(Ve || (Ve = {})));
                const ze = (e) => {
                    const t = ((e) => {
                            const t = Ie(e, Le),
                                u = (0, a.useCallback)(
                                    (e) => {
                                        t(e.action, e.logLevel, Me(e));
                                    },
                                    [t],
                                );
                            return (e) => u(e);
                        })(Ge.Lootbox),
                        u = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.RewardToopltip,
                            parentScreen: Ue.Probability,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        }),
                        o = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.InfoIcon,
                            parentScreen: Ue.Storage,
                            timeLimit: 1,
                        }),
                        n = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.ProbabilityPercent,
                            parentScreen: Ue.Probability,
                            timeLimit: 1,
                        }),
                        r = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.ProbabilityPercentWithGarant,
                            parentScreen: Ue.Probability,
                            timeLimit: 1,
                        }),
                        i = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.RewardToopltip,
                            parentScreen: Ue.Probability,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        }),
                        s = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.MinorRewards,
                            parentScreen: Ue.Rewards,
                            timeLimit: 1,
                        }),
                        l = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.RewardToopltip,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        }),
                        c = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.IconPossibleRewardGroup,
                            parentScreen: Ue.Storage,
                            timeLimit: 1,
                        }),
                        d = He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.RewardRotationToopltip,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: 1,
                            info: null == e ? void 0 : e.info,
                        });
                    return {
                        rewardToopltipWatched: u,
                        infoIconToopltipWatched: o,
                        probabilityPercentToopltipWatched: n,
                        probabilityPercentWithGarantToopltipWatched: r,
                        rewardVehicleToopltipWatched: i,
                        minorRewardsToopltipWatched: s,
                        rewardSharedToopltipWatched: l,
                        iconPossibleRewardGroupToopltipWatched: c,
                        carouselLootboxToopltipWatched: He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.CarouselLootbox,
                            parentScreen: Ue.Storage,
                            timeLimit: 2,
                        }),
                        rewardToopltipWatchedWithRotation: d,
                        statisticButtonToopltipWatched: He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.StatisticButton,
                            parentScreen: Ue.LootBoxesShortStats,
                            timeLimit: 1,
                        }),
                        deadlineWidgetToopltipWatched: He(Ge.Lootbox, {
                            action: We.TooltipWatched,
                            item: Ve.DeadlineWidget,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: 1,
                        }),
                        probabilityPercentWithGarantClick: () => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.Probability,
                                item: Ve.ProbabilityPercentWithGarant,
                            });
                        },
                        probabilityPercentClick: () => {
                            t({ action: We.Click, parentScreen: Ue.Probability, item: Ve.ProbabilityPercent });
                        },
                        showLoseRewardsViewButton: (e, u) => {
                            t({
                                action: We.Show,
                                parentScreen: Ue.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: u }),
                            });
                        },
                        loseRewardsViewButtonClick: (e, u) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: u }),
                            });
                        },
                        showLoseRewardsViewCloseButton: (e) => {
                            t({
                                action: We.Show,
                                parentScreen: Ue.LoseRewards,
                                item: Ve.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewCloseButtonClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LoseRewards,
                                item: Ve.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewESCButtonClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LoseRewards,
                                item: Ve.ESCButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        showRewardsViewCloseButton: (e) => {
                            t({
                                action: We.Show,
                                parentScreen: Ue.Rewards,
                                item: Ve.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewCloseButtonClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.Rewards,
                                item: Ve.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewESCButtonClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.Rewards,
                                item: Ve.ESCButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewMinorRewardsShow: () => {
                            t({ action: We.Show, parentScreen: Ue.Rewards, item: Ve.MinorRewards });
                        },
                        showRewardsViewButton: (e, u) => {
                            t({
                                action: We.Show,
                                parentScreen: Ue.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: u }),
                            });
                        },
                        rewardsViewButtonClick: (e, u) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: u }),
                            });
                        },
                        rewardsVideoCloseClick: (e, u, o, n) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.RewardVideo,
                                item: Ve.CloseButton,
                                info: JSON.stringify({ duration: e, lootboxType: u, lootboxID: o, reward: n }),
                            });
                        },
                        rewardsVideoESCClick: (e, u, o, n) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.RewardVideo,
                                item: Ve.ESCButton,
                                info: JSON.stringify({ duration: e, lootboxType: u, lootboxID: o, reward: n }),
                            });
                        },
                        rewardsVideoStarted: (e, u, o) => {
                            t({
                                action: We.VideoStarted,
                                parentScreen: Ue.RewardVideo,
                                item: Ve.RewardVideo,
                                info: JSON.stringify({ lootboxID: u, lootboxType: e, reward: o }),
                            });
                        },
                        storageViewESCButtonClick: () => {
                            t({ action: We.Click, parentScreen: Ue.Storage, item: Ve.ESCButton });
                        },
                        iconPossibleRewardGroupClick: () => {
                            t({ action: We.Click, parentScreen: Ue.Storage, item: Ve.IconPossibleRewardGroup });
                        },
                        lootBoxesShortStatsViewESCButtonClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesShortStats,
                                item: Ve.StatisticESCButton,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsOutsideClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesShortStats,
                                item: Ve.statisticOutsideClick,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsTabsClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesShortStats,
                                item: Ve.LootBoxesShortStatsTabs,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsGroupClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesShortStats,
                                item: Ve.LootBoxesShortStatsGroup,
                                info: JSON.stringify({ category: e }),
                            });
                        },
                        lootBoxesFullStatsSidebarClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesFullStats,
                                item: Ve.LootBoxesFullStatsSidebar,
                                info: JSON.stringify({ category: e }),
                            });
                        },
                        lootBoxesFullStatsSelectAllClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesFullStats,
                                item: Ve.lootBoxesFullStatsSelectAll,
                                info: JSON.stringify({ isButtonActive: e }),
                            });
                        },
                        lootBoxesFullStatsSelectLootboxClick: (e, u) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesFullStats,
                                item: Ve.lootBoxesFullStatsSelect,
                                info: JSON.stringify({ lootboxID: e, isButtonActive: u }),
                            });
                        },
                        lootBoxesFullStatsRewardClick: (e) => {
                            t({
                                action: We.Click,
                                parentScreen: Ue.LootBoxesFullStats,
                                item: Ve.lootBoxesFullStatsReward,
                                info: JSON.stringify({ rewardType: e }),
                            });
                        },
                        storageViewBackButtonClick: () => {
                            t({ action: We.Click, parentScreen: Ue.Storage, item: Ve.BackButton });
                        },
                    };
                };
                var je = u(7635);
                const $e = 'lootboxStageRotation',
                    Ke = 'vehicle',
                    Xe = 'bonus',
                    Ze = 'R.images.gui_lootboxes.gui.maps.storage.bg_unique',
                    qe = {
                        show: { startTime: 0, endTime: 1.2 },
                        idle: { startTime: 1.3, endTime: 4.3 },
                        hide: { startTime: 4.8, endTime: 5.2 },
                        open: { startTime: 5.5, endTime: 8.5 },
                        open_glow: { startTime: 8.6, endTime: 11.6 },
                        lose: { startTime: 15.1, endTime: 16 },
                        zero_state: { startTime: 0, endTime: 0 },
                        in: { startTime: 0, endTime: 1.35 },
                        out: { startTime: 1.65, endTime: 3 },
                    },
                    Ye = R.sounds.lootboxes_drop(),
                    Je = R.sounds.lootboxes_christmas_background_out(),
                    Qe = R.sounds.lootboxes_christmas_background_in(),
                    et = R.sounds.researches_premium_panel_slide_in(),
                    tt =
                        (R.sounds.researches_premium_panel_slide_out(),
                        R.sounds.lootboxes_statistics_slide(),
                        R.sounds.tabs(),
                        {
                            1: R.sounds.lootboxes_open_standart(),
                            2: R.sounds.lootboxes_open_bronze(),
                            3: R.sounds.lootboxes_open_silver(),
                            4: R.sounds.lootboxes_open_gold(),
                            5: R.sounds.lootboxes_open_layer_gold(),
                        });
                function ut(e) {
                    return e;
                }
                function ot() {
                    return !1;
                }
                console.log;
                var nt = u(3915);
                function rt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, o = new Array(t); u < t; u++) o[u] = e[u];
                    return o;
                }
                const at = (e) => (0 === e ? window : window.subViews.get(e));
                function it(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function st(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, o) => t(null == e ? void 0 : e.value, u, o));
                }
                var lt = u(6517);
                const ct = ((e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: o, children: n, mocks: r }) {
                                const s = (0, a.useRef)([]),
                                    l = (e, u, o) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = at,
                                                context: o = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const n = u(t),
                                                        r = o.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const i = 'string' == typeof r ? `${o}.${r}` : o,
                                                            s = y.O.view.addModelObserver(i, t, !0);
                                                        return (n.set(s, u), e && u(a(r)), s);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const u = a(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                u = (function (e, t) {
                                                                    var u =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (u) return (u = u.call(e)).next.bind(u);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (u = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return rt(e, t);
                                                                                var u = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === u &&
                                                                                        e.constructor &&
                                                                                        (u = e.constructor.name),
                                                                                    'Map' === u || 'Set' === u
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === u ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                u,
                                                                                            )
                                                                                          ? rt(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
                                                                        var o = 0;
                                                                        return function () {
                                                                            return o >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[o++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = u()).done;

                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(u),
                                            a =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == o ? void 0 : o.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (t) =>
                                                'mocks' === e ? (null == o ? void 0 : o.getter(t)) : a.readByPath(t),
                                            l = (e) => s.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const t = Object.assign({}, e.primitives(['isShowTriggerHint']), {
                                                        root: e.object(),
                                                        lootboxes: e.array('lootboxes'),
                                                        lootboxKeys: e.array('lootboxKeys'),
                                                    }),
                                                    u = (0, lt.computedFn)(
                                                        () =>
                                                            st(t.lootboxes.get(), (e) =>
                                                                Object.assign({}, e, {
                                                                    bonusGroups: st(e.bonusGroups, ut),
                                                                }),
                                                            ),
                                                        { equals: ot },
                                                    ),
                                                    o = (0, lt.computedFn)(
                                                        () => {
                                                            const e = (function (e, t) {
                                                                for (let u = 0; u < e.length; u++) {
                                                                    const o = it(e[u]);
                                                                    if (t(o, u, e)) return o;
                                                                }
                                                            })(
                                                                t.lootboxes.get(),
                                                                (e) => e.boxID === t.root.get().currentLootboxID,
                                                            );
                                                            return e
                                                                ? Object.assign({}, e, {
                                                                      bonusGroups: st(e.bonusGroups, (t) => ({
                                                                          value: t,
                                                                          stage: t === $e ? e.progressionStage : 0,
                                                                      })),
                                                                      unlockKeyIDs: st(e.unlockKeyIDs, (e) => e),
                                                                  })
                                                                : void 0;
                                                        },
                                                        { equals: ot },
                                                    ),
                                                    n = (0, lt.computedFn)(() => t.lootboxKeys.get().length);
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getLootboxes: u,
                                                        getCurrentLootbox: o,
                                                        getLootboxKeys: () => st(t.lootboxKeys.get(), (e) => e),
                                                        getLootboxKeysLength: n,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (t, u) => {
                                                        const o = null != u ? u : i(t),
                                                            n = nt.observable.box(o, { equals: ot });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, nt.action)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const o = null != u ? u : i(t),
                                                            n = nt.observable.box(o, { equals: ot });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, nt.action)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const o = i(u);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = nt.observable.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, nt.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => (
                                                                        (e[u] = nt.observable.box(o[t], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, nt.action)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: c, externalModel: a, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && o ? o.controls(d) : t(d),
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    m = d[0],
                                    _ = d[1],
                                    E = (0, a.useState)(() => l(e, o, r)),
                                    A = E[0],
                                    p = E[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? p(l(m, o, r)) : (c.current = !0);
                                    }, [r, m, o]),
                                    (0, a.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (A.externalModel.dispose(), s.current.forEach((e) => e()));
                                        },
                                        [A],
                                    ),
                                    i().createElement(u.Provider, { value: A }, n)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        openLootBoxes: e.createCallback((e) => e, 'openLootBoxes'),
                        close: e.createCallbackNoArgs('onClose'),
                        closeEsc: e.createCallbackNoArgs('onCloseEsc'),
                        onError: e.createCallback((e) => ({ errorFilePath: e }), 'onError'),
                        buyBox: e.createCallback((e) => e, 'buyBox'),
                        showBonusProbabilities: e.createCallbackNoArgs('showBonusProbabilities'),
                        openningFinished: e.createCallbackNoArgs('openningFinished'),
                        lootboxSelected: e.createCallback((e) => e, 'onLootboxSelected'),
                        changeAnimationEnabledSetting: e.createCallback((e) => e, 'changeAnimationEnabledSetting'),
                        hideTriggerHint: e.createCallbackNoArgs('hideTriggerHint'),
                        showLootBoxInfoPage: e.createCallbackNoArgs('showLootBoxInfoPage'),
                        showStatistic: e.createCallback((e) => e, 'showStatistic'),
                    })),
                    dt = ct[0],
                    mt = ct[1],
                    _t = {
                        base: 'BoxRewards_base_05',
                        content: 'BoxRewards_content_b6',
                        frame: 'BoxRewards_frame_30',
                        frame__bottom: 'BoxRewards_frame__bottom_4e',
                        frameContent: 'BoxRewards_frameContent_f1',
                        buttonsWrapper: 'BoxRewards_buttonsWrapper_89',
                        statisticButton: 'BoxRewards_statisticButton_5c',
                        statisticGlareAnimation: 'BoxRewards_statisticGlareAnimation_1c',
                        slide: 'BoxRewards_slide_63',
                        chanceButton: 'BoxRewards_chanceButton_7c',
                        statButton: 'BoxRewards_statButton_5e',
                        corner: 'BoxRewards_corner_88',
                        corner__topLeft: 'BoxRewards_corner__topLeft_e5',
                        corner__topRight: 'BoxRewards_corner__topRight_dd',
                        corner__bottomLeft: 'BoxRewards_corner__bottomLeft_11',
                        corner__bottomRight: 'BoxRewards_corner__bottomRight_7a',
                        possibleRewardsInfoWrapper: 'BoxRewards_possibleRewardsInfoWrapper_8e',
                        possibleRewardsHeader: 'BoxRewards_possibleRewardsHeader_42',
                        possibleRewardsImagesWrapper: 'BoxRewards_possibleRewardsImagesWrapper_d8',
                        reward: 'BoxRewards_reward_a7',
                        noMarginRight: 'BoxRewards_noMarginRight_ec',
                        rewardIcon: 'BoxRewards_rewardIcon_18',
                        rewardIcon__vehicle: 'BoxRewards_rewardIcon__vehicle_5d',
                        rewardIcon__premium: 'BoxRewards_rewardIcon__premium_91',
                        rewardIcon__currency: 'BoxRewards_rewardIcon__currency_8e',
                        rewardIcon__vehicleCustomizations: 'BoxRewards_rewardIcon__vehicleCustomizations_ca',
                        rewardIcon__crew: 'BoxRewards_rewardIcon__crew_53',
                        rewardIcon__boosters: 'BoxRewards_rewardIcon__boosters_cd',
                        rewardIcon__equipments: 'BoxRewards_rewardIcon__equipments_17',
                        rewardIcon__accountCustomizations: 'BoxRewards_rewardIcon__accountCustomizations_8d',
                        rewardIcon__featureItems: 'BoxRewards_rewardIcon__featureItems_a3',
                        rewardIcon__lootboxStageRotation: 'BoxRewards_rewardIcon__lootboxStageRotation_db',
                        rewardIcon__lootboxes: 'BoxRewards_rewardIcon__lootboxes_46',
                        rewardName: 'BoxRewards_rewardName_19',
                        stage: 'BoxRewards_stage_ae',
                        stage__1: 'BoxRewards_stage__1_51',
                        stage__2: 'BoxRewards_stage__2_9d',
                        stage__3: 'BoxRewards_stage__3_2e',
                        probability: 'BoxRewards_probability_fb',
                    };
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const At = R.strings.gui_lootboxes,
                    pt = (e, t) =>
                        e === $e
                            ? {
                                  contentId:
                                      R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxRotationTooltip(
                                          'resId',
                                      ),
                                  args: { lootBoxID: t },
                              }
                            : {
                                  contentId:
                                      R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.BonusGroupTooltip('resId'),
                                  args: { bonusGroup: e, lootBoxID: t },
                              },
                    Bt = (0, O.observer)(({ bonusGroups: e, lootBoxID: t }) => {
                        const u = mt(),
                            o = u.model,
                            n = u.controls,
                            r = o.root.get(),
                            s = r.isShowStatisticHint,
                            c = r.isShowStatistic,
                            d = ze(),
                            m = d.statisticButtonToopltipWatched,
                            _ = d.iconPossibleRewardGroupToopltipWatched,
                            E = d.iconPossibleRewardGroupClick,
                            A = (0, a.useCallback)(
                                (e) => {
                                    (s && n.hideTriggerHint(), (0, h.G)(et), n.showStatistic({ buttonID: e }));
                                },
                                [n, s],
                            );
                        return i().createElement(
                            'div',
                            { className: _t.base },
                            i().createElement(
                                'div',
                                { className: _t.possibleRewardsInfoWrapper },
                                i().createElement(
                                    'div',
                                    { className: _t.frame },
                                    i().createElement('div', { className: l()(_t.corner, _t.corner__topLeft) }),
                                    i().createElement(
                                        'div',
                                        { className: _t.frameContent },
                                        i().createElement(G.ZP, {
                                            text: At.optional.possibleRewardsTitle(),
                                            format: { classMix: _t.possibleRewardsHeader },
                                        }),
                                    ),
                                    i().createElement('div', { className: l()(_t.corner, _t.corner__topRight) }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: _t.possibleRewardsImagesWrapper },
                                    e.map(({ value: e, stage: u }, o) => {
                                        var n;
                                        return i().createElement(
                                            ge,
                                            { key: `${e}_${o}`, tooltipArgs: Object.assign({}, pt(e, t), _) },
                                            i().createElement(
                                                'div',
                                                {
                                                    className: l()(_t.reward, (o + 1) % 3 == 0 && _t.noMarginRight),
                                                    onClick: E,
                                                },
                                                i().createElement(
                                                    'div',
                                                    { className: l()(_t.rewardIcon, _t[`rewardIcon__${e}`]) },
                                                    u > 0 &&
                                                        i().createElement('div', {
                                                            className: l()(_t.stage, _t[`stage__${u}`]),
                                                        }),
                                                ),
                                                i().createElement(G.ZP, {
                                                    text: null != (n = At.possibleRewards.$dyn(e)) ? n : '',
                                                    format: { classMix: _t.rewardName },
                                                }),
                                            ),
                                        );
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: l()(_t.frame, _t.frame__bottom) },
                                    i().createElement('div', { className: l()(_t.corner, _t.corner__bottomLeft) }),
                                    i().createElement(
                                        'div',
                                        { className: _t.frameContent },
                                        i().createElement(
                                            'div',
                                            { className: _t.buttonsWrapper },
                                            i().createElement(
                                                le,
                                                {
                                                    contentId:
                                                        R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.ProbabilityButtonTooltip(
                                                            'resId',
                                                        ),
                                                },
                                                i().createElement(
                                                    'div',
                                                    null,
                                                    i().createElement(je.N, {
                                                        title: c
                                                            ? R.strings.gui_lootboxes.optional.openProbabilityOverlay.short()
                                                            : R.strings.gui_lootboxes.optional.openProbabilityOverlay.long(),
                                                        onClick: n.showBonusProbabilities,
                                                        iconArgs: {
                                                            defaultIcon:
                                                                R.images.gui_lootboxes.gui.maps.storage.cube_default(),
                                                            hoveredIcon:
                                                                R.images.gui_lootboxes.gui.maps.storage.cube_hovered(),
                                                            pressedIcon:
                                                                R.images.gui_lootboxes.gui.maps.storage.cube_hovered(),
                                                        },
                                                        classNames: c ? '' : _t.probability,
                                                    }),
                                                ),
                                            ),
                                            c &&
                                                i().createElement(
                                                    le,
                                                    Et(
                                                        {
                                                            contentId:
                                                                R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.StatisticButtonTooltip(
                                                                    'resId',
                                                                ),
                                                        },
                                                        m,
                                                    ),
                                                    i().createElement(
                                                        'div',
                                                        { className: _t.statisticButton },
                                                        s &&
                                                            i().createElement('div', {
                                                                className: _t.statisticGlareAnimation,
                                                            }),
                                                        i().createElement(je.N, {
                                                            onClick: () => A(0),
                                                            title: R.strings.gui_lootboxes.optional.statistic(),
                                                            iconArgs: {
                                                                defaultIcon:
                                                                    R.images.gui_lootboxes.gui.maps.storage.statistic_btn_icon_default(),
                                                                hoveredIcon:
                                                                    R.images.gui_lootboxes.gui.maps.storage.statistic_btn_icon_hovered(),
                                                                pressedIcon:
                                                                    R.images.gui_lootboxes.gui.maps.storage.statistic_btn_icon_hovered(),
                                                            },
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                    i().createElement('div', { className: l()(_t.corner, _t.corner__bottomRight) }),
                                ),
                            ),
                        );
                    }),
                    gt = i().memo(Bt),
                    Ft = R.strings.gui_lootboxes,
                    Dt = i().memo(({ buyBox: e }) => {
                        const t = (0, a.useState)(!1),
                            u = t[0],
                            o = t[1];
                        return i().createElement(
                            'div',
                            {
                                className: 'BuyButton_base_ac',
                                onMouseEnter: () => {
                                    (o(!0), h.$.playHighlight());
                                },
                                onMouseLeave: () => {
                                    o(!1);
                                },
                                onClick: () => {
                                    (h.$.playClick(), e());
                                },
                            },
                            i().createElement('div', {
                                className: l()(
                                    'BuyButton_buyButtonIcon_84',
                                    u && 'BuyButton_buyButtonIcon__hovered_61',
                                ),
                            }),
                            i().createElement(G.ZP, {
                                text: Ft.optional.buy(),
                                format: {
                                    classMix: l()(
                                        'BuyButton_buyButtonText_9d',
                                        u && 'BuyButton_buyButtonText__hovered_3e',
                                    ),
                                },
                            }),
                        );
                    }),
                    bt = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    ((u = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                            }
                        );
                    };
                var Ct = u(7515);
                const ht = [];
                function vt(e) {
                    const t = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, t.current)(...e), ht)
                    );
                }
                function ft(e, t, u = []) {
                    const o = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(o.current), u || []);
                    (0, a.useEffect)(() => n, [n]);
                    const r = (null != u ? u : []).concat([t]);
                    return [
                        (0, a.useCallback)((u) => {
                            ((o.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, r),
                        n,
                    ];
                }
                function xt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, o = new Array(t); u < t; u++) o[u] = e[u];
                    return o;
                }
                var wt = u(8552);
                let St;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(St || (St = {}));
                const yt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Tt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: o,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const i = (e, u) => {
                            const o = t(e),
                                n = o[0],
                                r = o[1];
                            return (0, Ct.u)(n, r, u);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? yt : l,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        o = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        n = (e, ...u) => {
                                            for (
                                                var o,
                                                    n = (function (e, t) {
                                                        var u =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (u) return (u = u.call(e)).next.bind(u);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (u = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return xt(e, t);
                                                                    var u = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === u &&
                                                                            e.constructor &&
                                                                            (u = e.constructor.name),
                                                                        'Map' === u || 'Set' === u
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === u ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    u,
                                                                                )
                                                                              ? xt(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            u && (e = u);
                                                            var o = 0;
                                                            return function () {
                                                                return o >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[o++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(t(e).values());
                                                !(o = n()).done;

                                            )
                                                (0, o.value)(...u);
                                        };
                                    return (0, a.useMemo)(() => ({ on: u, off: o, trigger: n }), []);
                                })(),
                                E = (function (e, t, u) {
                                    const o = (0, a.useMemo)(
                                        () =>
                                            (function (e, t, u, o) {
                                                let n,
                                                    r = !1,
                                                    a = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - a;
                                                    function d() {
                                                        ((a = Date.now()), u.apply(l, s));
                                                    }
                                                    r ||
                                                        (o && !n && d(),
                                                        i(),
                                                        void 0 === o && c > e
                                                            ? d()
                                                            : !0 !== t &&
                                                              (n = setTimeout(
                                                                  o
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === o ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((o = u), (u = t), (t = void 0)),
                                                    (s.cancel = function () {
                                                        (i(), (r = !0));
                                                    }),
                                                    s
                                                );
                                            })(u, e),
                                        t,
                                    );
                                    return ((0, a.useEffect)(() => o.cancel, [o]), o);
                                })(
                                    () => {
                                        y.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, wt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), _.trigger('change', e), r && E());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                p = A[0],
                                B = A[1],
                                g = (0, a.useCallback)(
                                    (e, t, u) => {
                                        var o;
                                        const n = p.scrollPosition.get(),
                                            r = (null != (o = p.scrollPosition.goal) ? o : 0) - n;
                                        return i(e, t * u + r + n);
                                    },
                                    [p.scrollPosition],
                                ),
                                F = (0, a.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const o = d.current;
                                        o &&
                                            B.start({
                                                scrollPosition: i(o, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(o, p.scrollPosition.get()) },
                                            });
                                    },
                                    [B, c.animationConfig, p.scrollPosition],
                                ),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const o = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return n(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = g(t, e, o);
                                        F(r);
                                    },
                                    [F, g, c.step],
                                ),
                                b = (0, a.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && D(o(e)),
                                            d.current && _.trigger('mouseWheel', e, p.scrollPosition, t(d.current)));
                                    },
                                    [p.scrollPosition, D, _],
                                ),
                                C = ((e, t = []) => {
                                    const u = (0, a.useRef)(),
                                        o = (0, a.useCallback)((...t) => {
                                            (u.current && u.current(), (u.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [o],
                                        ),
                                        o
                                    );
                                })(
                                    () =>
                                        bt(() => {
                                            const e = d.current;
                                            e &&
                                                (F(i(e, p.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [F, p.scrollPosition.goal],
                                ),
                                h = vt(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = i(e, p.scrollPosition.goal);
                                    (t !== p.scrollPosition.goal && F(t, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            );
                            const v = (0, a.useCallback)((e) => _.trigger('isThumbDraggingChanged', e), [_]);
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: b,
                                    applyScroll: F,
                                    applyStepTo: D,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: B,
                                    animationScroll: p,
                                    recalculateContent: h,
                                    handleIsThumbDragging: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [p.scrollPosition, F, D, v, _.off, _.on, h, b, B, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Rt = Tt({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? St.Next : St.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    kt = 'HorizontalBar_base__nonActive_82',
                    Nt = 'disable',
                    Lt = { pending: !1, offset: 0 },
                    Ot = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Mt = () => {},
                    It = (e, t) => Math.max(20, e.offsetWidth * t),
                    Pt = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ot, onDrag: o = Mt }) => {
                        const n = (0, a.useRef)(null),
                            r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)(Lt),
                            E = _[0],
                            A = _[1],
                            p = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            o({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [o],
                            ),
                            B = () => {
                                const t = c.current,
                                    u = d.current,
                                    o = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(o && t && u && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, o / n),
                                    l = (0, Ct.u)(0, 1, a / (n - o)),
                                    m = (t.offsetWidth - It(t, i)) * l;
                                ((u.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (r.current && s.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(Nt),
                                                    void s.current.classList.remove(Nt)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(Nt),
                                                    void s.current.classList.add(Nt)
                                                );
                                            var t, u;
                                            (r.current.classList.remove(Nt), s.current.classList.remove(Nt));
                                        }
                                    })(m));
                            },
                            g = vt(() => {
                                ((() => {
                                    const t = d.current,
                                        u = c.current,
                                        o = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && o && u)) return;
                                    const a = Math.min(1, o / r);
                                    ((t.style.width = `${It(u, a)}px`),
                                        (t.style.display = 'flex'),
                                        n.current &&
                                            (1 === a ? n.current.classList.add(kt) : n.current.classList.remove(kt)));
                                })(),
                                    B());
                            });
                        ((0, a.useEffect)(() => bt(g)),
                            (0, a.useEffect)(
                                () =>
                                    bt(() => {
                                        const t = () => {
                                            B();
                                        };
                                        let u = Mt;
                                        const o = () => {
                                            (u(), (u = bt(g)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', o),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', o));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        var u;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const r = c.current,
                                            a = d.current;
                                        if (!n || !r || !a) return;
                                        const i = t.screenX - E.offset - r.getBoundingClientRect().x,
                                            s = (i / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            o({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), p(Lt));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, E.offset, E.pending, o, p]));
                        const F = ft((t) => e.applyStepTo(t), m, [e]),
                            D = F[0],
                            b = F[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Nt) || (0, h.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()('HorizontalBar_base_49', t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Nt) || 0 !== e.button || ((0, h.G)('play'), D(St.Next));
                                },
                                onMouseUp: b,
                                ref: r,
                                onMouseEnter: C,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const o = d.current;
                                        o &&
                                            0 === t.button &&
                                            ((0, h.G)('play'),
                                            t.target === o
                                                ? p({ pending: !0, offset: t.screenX - o.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const o = d.current,
                                                          n = e.contentRef.current;
                                                      if (!o || !n) return;
                                                      const r = u(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                  })(t.screenX > o.getBoundingClientRect().x ? St.Prev : St.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: C,
                                },
                                i().createElement('div', { ref: d, className: l()('HorizontalBar_thumb_fd', t.thumb) }),
                                i().createElement('div', { className: l()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Nt) || 0 !== e.button || ((0, h.G)('play'), D(St.Prev));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Ht = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Gt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: o,
                        areaClassName: n,
                        classNames: r,
                        scrollClassName: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = o || {};
                                return Object.assign({}, e, { base: l()(Ht.base, e.base) });
                            }, [o]),
                            _ = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Ht.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Ht.defaultScrollArea, n) },
                                i().createElement(Wt, { className: s, api: _, classNames: r }, e),
                            ),
                            i().createElement(Pt, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    Wt = ({ api: e, className: t, classNames: u, children: o, style: n }) => (
                        (0, a.useEffect)(() => bt(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Ht.base, t), style: n },
                            i().createElement(
                                'div',
                                {
                                    className: l()(Ht.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(Ht.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    o,
                                ),
                            ),
                        )
                    );
                ((Wt.Bar = Pt),
                    (Wt.Default = Gt),
                    (Wt.SeniorityAwards = ({ api: e, className: t, classNames: u, children: o }) => (
                        (0, a.useEffect)(() => bt(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Ht.base, t) },
                            i().createElement(
                                'div',
                                { className: l()(Ht.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: l()(Ht.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    o,
                                ),
                            ),
                        )
                    )));
                const Ut = Tt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? St.Next : St.Prev),
                    }),
                    Vt = 'VerticalBar_base__nonActive_42',
                    zt = 'disable',
                    jt = () => {},
                    $t = { pending: !1, offset: 0 },
                    Kt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Xt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Zt = (e, t) => Math.max(20, e.offsetHeight * t),
                    qt = (0, a.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Kt, onDrag: o = jt }) => {
                        const n = (0, a.useRef)(null),
                            r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, a.useState)($t),
                            E = _[0],
                            A = _[1],
                            p = (0, a.useCallback)(
                                (e) => {
                                    (A(e),
                                        d.current &&
                                            o({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current }));
                                },
                                [o],
                            ),
                            B = vt(() => {
                                const t = d.current,
                                    u = c.current,
                                    o = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(o && r && t && u)) return;
                                const a = Math.min(1, o / r);
                                return (
                                    (t.style.height = `${Zt(u, a)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === a ? n.current.classList.add(Vt) : n.current.classList.remove(Vt)),
                                    a
                                );
                            }),
                            g = vt(() => {
                                const t = c.current,
                                    u = d.current,
                                    o = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(o && t && u && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, o / n),
                                    l = (0, Ct.u)(0, 1, a / (n - o)),
                                    m = (t.offsetHeight - Zt(t, i)) * l;
                                ((u.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (r.current && s.current && c.current && d.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(zt),
                                                    void s.current.classList.remove(zt)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = d.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(zt),
                                                    void s.current.classList.add(zt)
                                                );
                                            var t, u;
                                            (r.current.classList.remove(zt), s.current.classList.remove(zt));
                                        }
                                    })(m));
                            }),
                            F = vt(() => {
                                Xt(e, () => {
                                    (B(), g());
                                });
                            });
                        ((0, a.useEffect)(() => bt(F)),
                            (0, a.useEffect)(() => {
                                const t = () => {
                                    Xt(e, () => {
                                        g();
                                    });
                                };
                                let u = jt;
                                const o = () => {
                                    (u(), (u = bt(F)));
                                };
                                return (
                                    e.events.on('recalculateContent', F),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', o),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', F),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', o));
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        Xt(e, (u) => {
                                            const n = c.current,
                                                r = d.current,
                                                a = e.getContainerSize();
                                            if (!n || !r || !a) return;
                                            const i = t.screenY - E.offset - n.getBoundingClientRect().y,
                                                s = (i / n.offsetHeight) * a;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                o({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: s }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            p($t));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, E.offset, E.pending, o, p]));
                        const D = ft((t) => e.applyStepTo(t), m, [e]),
                            b = D[0],
                            C = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const v = (e) => {
                            e.target.classList.contains(zt) || (0, h.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()('VerticalBar_base_f3', t.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zt) || 0 !== e.button || ((0, h.G)('play'), b(St.Next));
                                },
                                ref: r,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const o = d.current;
                                        var n;
                                        o &&
                                            0 === t.button &&
                                            ((0, h.G)('play'),
                                            t.target === o
                                                ? (e.handleIsThumbDragging(!0),
                                                  p({ pending: !0, offset: t.screenY - o.getBoundingClientRect().y }))
                                                : ((n = t.screenY > o.getBoundingClientRect().y ? St.Prev : St.Next),
                                                  d.current &&
                                                      Xt(e, (t) => {
                                                          if (!t) return;
                                                          const o = u(e),
                                                              r = e.clampPosition(t, t.scrollTop + o * n);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: d, className: t.thumb }),
                                i().createElement('div', { className: l()('VerticalBar_rail_43', t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zt) || 0 !== e.button || ((0, h.G)('play'), b(St.Prev));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Yt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Jt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: o,
                        areaClassName: n,
                        scrollClassName: r,
                        scrollClassNames: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, a.useMemo)(() => {
                                const e = o || {};
                                return Object.assign({}, e, { base: l()(Yt.base, e.base) });
                            }, [o]),
                            _ = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Yt.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Yt.area, n) },
                                i().createElement(Qt, { className: r, classNames: s, api: _ }, e),
                            ),
                            i().createElement(qt, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    Qt = ({ className: e, classNames: t, children: u, api: o }) => (
                        (0, a.useEffect)(() => bt(o.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Yt.base, e), ref: o.wrapperRef, onWheel: o.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Yt.content, null == t ? void 0 : t.content), ref: o.contentRef },
                                u,
                            ),
                        )
                    );
                Qt.Default = Jt;
                const eu = { Vertical: n, Horizontal: o },
                    tu = { type: 'idle' },
                    uu = {
                        base: 'Carousel_base_51',
                        prev: 'Carousel_prev_37',
                        next: 'Carousel_next_a6',
                        prev__disabled: 'Carousel_prev__disabled_3e',
                        next__disabled: 'Carousel_next__disabled_c0',
                        carousel: 'Carousel_carousel_2d',
                        horizontalWrapper: 'Carousel_horizontalWrapper_fa',
                        horizontalContent: 'Carousel_horizontalContent_49',
                        scroll: 'Carousel_scroll_8a',
                    },
                    ou = ({ count: e, customFontSize: t, maximum: u }) => {
                        const o = 0.6 * (null != t ? t : 16) + 'rem';
                        return i().createElement(
                            'div',
                            { className: 'FormatCount_base_01', style: { fontSize: `${null != t ? t : 16}rem` } },
                            u && e >= u.maxCount
                                ? i().createElement('div', null, null == u ? void 0 : u.maxCountText)
                                : i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement('div', { style: { width: o } }, '×'),
                                      e,
                                  ),
                        );
                    },
                    nu = {
                        from: { x: 0, opacity: 0 },
                        to: { x: 0, opacity: 1 },
                        delay: 0,
                        config: {
                            duration: 300,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    ru = 'LootboxCard_disabledOverlay_e8',
                    au = R.strings.lootboxes,
                    iu = i().memo(
                        ({
                            descriptionKey: e,
                            iconName: t,
                            isOpenEnabled: u,
                            count: o,
                            boxID: n,
                            isSelected: r = !1,
                            isInfinite: s = !1,
                            isDisabled: c = !1,
                            onSelect: d,
                        }) => {
                            var _;
                            const E = (0, a.useState)(!1),
                                A = E[0],
                                p = E[1],
                                B = (0, a.useState)(''),
                                g = B[0],
                                F = B[1],
                                D = (0, a.useState)(!1),
                                b = D[0],
                                C = D[1],
                                v = (0, m.GS)().mediaSize,
                                f = null != (_ = au.userName.$dyn(e)) ? _ : au.userName.default(),
                                x = ze().carouselLootboxToopltipWatched,
                                w = v < m.cJ.Medium ? 'c_96x64' : 'c_160x106',
                                S = (0, wt.useSpring)(Object.assign({}, nu));
                            (0, a.useEffect)(() => {
                                C(!u || c);
                            }, [u, c]);
                            const y = (0, a.useCallback)(
                                    (e, t) =>
                                        t
                                            ? i().createElement('div', { className: 'LootboxCard_infinite_85' })
                                            : e > 0
                                              ? i().createElement(
                                                    'div',
                                                    { className: 'LootboxCard_count_f7' },
                                                    i().createElement(ou, { count: e }),
                                                )
                                              : '',
                                    [],
                                ),
                                T = (0, a.useCallback)(
                                    (e) => {
                                        e
                                            ? F(
                                                  `url('R.images.gui_lootboxes.gui.maps.lootboxes.${w}.${t}') no-repeat center / 100%`,
                                              )
                                            : (F(
                                                  `url('R.images.gui_lootboxes.gui.maps.lootboxes.${w}.default') no-repeat center / 100%`,
                                              ),
                                              console.warn('No resource icon for lootbox', t));
                                    },
                                    [t, w],
                                );
                            var k, N;
                            return (
                                (k = `R.images.gui_lootboxes.gui.maps.lootboxes.${w}.${t}`),
                                (N = T),
                                (0, a.useEffect)(() => {
                                    const e = () => N(!0),
                                        t = () => N(!1),
                                        u = new Image();
                                    return (
                                        u.addEventListener('load', e),
                                        u.addEventListener('error', t),
                                        (u.src = k),
                                        () => {
                                            (u.removeEventListener('load', e), u.removeEventListener('error', t));
                                        }
                                    );
                                }, [k, N]),
                                i().createElement(
                                    'div',
                                    {
                                        className: l()(
                                            'LootboxCard_base_54',
                                            r && 'LootboxCard_base__selected_1b',
                                            (!u || c) && 'LootboxCard_base__disabled_9a',
                                        ),
                                        onClick: () => {
                                            u && (d(n), (0, h.G)(R.sounds.tabs()));
                                        },
                                        onMouseEnter: () => {
                                            p(!0);
                                        },
                                        onMouseLeave: () => {
                                            p(!1);
                                        },
                                    },
                                    i().createElement('div', { className: 'LootboxCard_border_a8' }),
                                    b &&
                                        i().createElement(
                                            'div',
                                            { className: ru },
                                            i().createElement('div', {
                                                className: l()(ru, 'LootboxCard_disabledOverlay__layout_d9'),
                                            }),
                                            i().createElement('div', {
                                                className: l()(ru, 'LootboxCard_disabledOverlay__img_12'),
                                            }),
                                        ),
                                    i().createElement(
                                        ge,
                                        {
                                            tooltipArgs: Object.assign(
                                                {
                                                    contentId:
                                                        R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxTooltip(
                                                            'resId',
                                                        ),
                                                    args: { lootBoxID: n },
                                                },
                                                x,
                                            ),
                                        },
                                        i().createElement('div', {
                                            className: 'LootboxCard_icon_a4',
                                            style: { background: g },
                                        }),
                                    ),
                                    y(o, s),
                                    i().createElement(
                                        'div',
                                        { className: 'LootboxCard_text_fc' },
                                        i().createElement(G.ZP, {
                                            text: f,
                                            format: { classMix: 'LootboxCard_innerText_fc' },
                                        }),
                                    ),
                                    u &&
                                        !r &&
                                        i().createElement('div', {
                                            className: l()(
                                                'LootboxCard_hoverBlock_92',
                                                A && 'LootboxCard_hoverBlock__visible_91',
                                            ),
                                        }),
                                    !u &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: 'LootboxCard_hover_da' }),
                                            i().createElement('div', { className: 'LootboxCard_disabled_db' }),
                                        ),
                                    r && i().createElement('div', { className: 'LootboxCard_check_4f', style: S }),
                                )
                            );
                        },
                    );
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const lu = (0, O.observer)(({ selectedLootboxID: e, isDisabled: t, onChange: u }) => {
                    const o = Rt();
                    !(function (e, t) {
                        const u = e.contentRef,
                            o = e.wrapperRef,
                            n = e.scrollPosition,
                            r = e.clampPosition,
                            i = e.animationScroll,
                            s = e.events,
                            l = (0, a.useState)(tu),
                            c = l[0],
                            d = l[1];
                        ((0, a.useEffect)(() => {
                            const e = u.current;
                            e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                        }, [u, c.type]),
                            (0, a.useEffect)(() => {
                                if ('dragging' !== c.type) return;
                                const e = y.O.client.events.mouse.move(([e, a]) => {
                                        const s = u.current,
                                            l = o.current;
                                        if (!s || !l) return;
                                        if ('inside' === a && e.clientX < 0) return;
                                        const d = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                            m = c.positionFrom - d,
                                            _ = c.previousScrollPosition + m;
                                        n.start(
                                            Object.assign(
                                                {
                                                    scrollPosition: r(s, _),
                                                    from: { scrollPosition: i.scrollPosition.get() },
                                                },
                                                t,
                                            ),
                                        );
                                    }),
                                    a = y.O.client.events.mouse.up(function () {
                                        d({ type: 'scrollingToEnd' });
                                    });
                                return () => {
                                    (e(), a());
                                };
                            }, [i.scrollPosition, r, u, c, n, o, t]),
                            (0, a.useEffect)(() => {
                                if ('scrollingToEnd' !== c.type) return;
                                const e = () => {
                                    d(tu);
                                };
                                return (i.scrollPosition.idle && e(), s.on('rest', e), () => s.off('rest', e));
                            }, [i.scrollPosition, c.type, s]),
                            (0, a.useEffect)(() => {
                                const e = u.current;
                                if (!e) return;
                                const t = (e) => {
                                    d({
                                        type: 'dragging',
                                        positionFrom: e.screenX,
                                        previousScrollPosition: i.scrollPosition.get(),
                                    });
                                };
                                return (
                                    e.addEventListener('mousedown', t),
                                    () => e.removeEventListener('mousedown', t)
                                );
                            }, [i.scrollPosition, u]));
                    })(o);
                    const n = mt().model.computes.getLootboxes(),
                        r = ft((e) => o.applyStepTo(e), o.stepTimeout, [o]),
                        s = r[0],
                        c = r[1],
                        d = (0, a.useCallback)(
                            (e) => {
                                t || u(e);
                            },
                            [t, u],
                        ),
                        m = n.length > 4,
                        _ = (0, a.useState)(!1),
                        E = _[0],
                        A = _[1],
                        p = (0, a.useState)(!0),
                        B = p[0],
                        g = p[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                const t = o.getContainerSize() - o.getWrapperSize();
                                (A(e.value.scrollPosition > 0), g(e.value.scrollPosition < t));
                            };
                            return (
                                o.events.on('rest', e),
                                () => {
                                    o.events.off('rest', e);
                                }
                            );
                        }, [o, o.events]),
                        i().createElement(
                            'div',
                            { className: uu.base },
                            m &&
                                i().createElement('div', {
                                    className: l()(uu.prev, !E && uu.prev__disabled),
                                    onMouseDown: () => {
                                        E && s(St.Next);
                                    },
                                    onMouseUp: c,
                                }),
                            i().createElement(
                                'div',
                                { className: uu.carousel },
                                i().createElement(
                                    eu.Horizontal.Area,
                                    {
                                        api: o,
                                        classNames: {
                                            content: uu.horizontalContent,
                                            wrapper: m ? '' : uu.horizontalWrapper,
                                        },
                                        className: uu.scroll,
                                    },
                                    st(n, (u) =>
                                        i().createElement(
                                            'div',
                                            { key: u.boxID, className: uu.lootboxCard },
                                            i().createElement(
                                                iu,
                                                su({}, u, { isSelected: u.boxID === e, onSelect: d, isDisabled: t }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            m &&
                                i().createElement('div', {
                                    className: l()(uu.next, !B && uu.next__disabled),
                                    onMouseDown: () => {
                                        B && s(St.Prev);
                                    },
                                    onMouseUp: c,
                                }),
                        )
                    );
                });
                var cu = u(6620);
                const du = (0, O.observer)(({ keysWidth: e }) => {
                    const t = mt().controls,
                        u = (0, a.useState)(!1),
                        o = u[0],
                        n = u[1],
                        r = (0, a.useCallback)(() => {
                            (t.hideTriggerHint(), n(!0));
                        }, [t]);
                    return i().createElement(
                        'div',
                        {
                            className: l()('TriggerHint_base_e5', o && 'TriggerHint_base__hidden_4e'),
                            style: { width: `${Math.max(e, 220)}rem` },
                        },
                        i().createElement('div', { className: 'TriggerHint_selection_13', onMouseEnter: r }),
                        i().createElement(
                            'div',
                            { className: 'TriggerHint_info_36' },
                            i().createElement(
                                'div',
                                { className: 'TriggerHint_arrowHolder_c0' },
                                i().createElement('div', { className: 'TriggerHint_arrow_6c' }),
                            ),
                            i().createElement(
                                'div',
                                null,
                                i().createElement(G.ZP, {
                                    text: R.strings.gui_lootboxes.triggerHint.title(),
                                    format: { classMix: 'TriggerHint_text_59' },
                                }),
                            ),
                        ),
                    );
                });
                var mu;
                !(function (e) {
                    ((e[(e.HUNDRED = 2)] = 'HUNDRED'),
                        (e[(e.THOUSAND = 6)] = 'THOUSAND'),
                        (e[(e.TEN_THOUSAND = 15)] = 'TEN_THOUSAND'),
                        (e[(e.HUNDRED_THOUSAND = 20)] = 'HUNDRED_THOUSAND'));
                })(mu || (mu = {}));
                const _u = (0, O.observer)(() => {
                        const e = mt().model,
                            t = e.root.get().isShowTriggerHint,
                            u = e.computes.getLootboxKeys(),
                            o = ((e) => {
                                let t = 0;
                                return (
                                    e.forEach((e) => {
                                        t += ((e) => {
                                            const t = 60,
                                                u = t + mu.HUNDRED,
                                                o = t + mu.THOUSAND,
                                                n = t + mu.TEN_THOUSAND,
                                                r = t + mu.HUNDRED_THOUSAND;
                                            return e < 10
                                                ? t
                                                : e < 100
                                                  ? u
                                                  : e < 1e3
                                                    ? o
                                                    : e < 1e4
                                                      ? n
                                                      : e < 1e5
                                                        ? r
                                                        : t;
                                        })(e.count);
                                    }),
                                    t
                                );
                            })(u);
                        return i().createElement(
                            'div',
                            { className: 'CurrencyKeyList_base_2d' },
                            i().createElement(
                                'div',
                                { className: 'CurrencyKeyList_wrapper_1e' },
                                u.map((e) => {
                                    const t = R.images.gui_lootboxes.gui.maps.storage.currencyKey.$dyn(
                                        `${(0, I.BN)(e.iconName)}`,
                                    );
                                    return i().createElement(
                                        'div',
                                        { key: `currency-key-${e.keyID}` },
                                        i().createElement(
                                            ge,
                                            {
                                                tooltipArgs: {
                                                    contentId:
                                                        R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxKeyTooltip(
                                                            'resId',
                                                        ),
                                                    args: { keyID: e.keyID, isShowCount: !1 },
                                                },
                                            },
                                            i().createElement(cu.s, { icon: t, count: e.count }),
                                        ),
                                    );
                                }),
                            ),
                            t && i().createElement(du, { keysWidth: o }),
                        );
                    }),
                    Eu = {
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
                    },
                    Au = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    pu = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Bu = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    gu = (0, a.memo)(({ text: e, binding: t, classMix: u }) => {
                        const o = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => t || {}, [t]);
                        let r = Au.exec(e),
                            s = e,
                            l = 0;
                        for (; r; ) {
                            const u = r[0],
                                a = pu.exec(u),
                                c = Bu.exec(u),
                                d = r[1];
                            if (a && c) {
                                const e = a[0],
                                    r = e + l++ + e;
                                ((s = s.replace(u, `%(${r})`)),
                                    (n[r] = Eu[e]
                                        ? i().createElement(
                                              'span',
                                              { className: Eu[e] },
                                              i().createElement(re.z, { text: d, binding: t }),
                                          )
                                        : i().createElement(
                                              'span',
                                              { style: o(e) },
                                              i().createElement(re.z, { text: d, binding: t }),
                                          )));
                            }
                            r = Au.exec(e);
                        }
                        return i().createElement(re.z, { text: s, classMix: u, binding: n });
                    });
                let Fu;
                var Du;
                (((Du = Fu || (Fu = {})).Heavy = 'heavyTank'),
                    (Du.Medium = 'mediumTank'),
                    (Du.Light = 'lightTank'),
                    (Du.Spg = 'SPG'),
                    (Du.AtSpg = 'AT-SPG'),
                    R.strings.gui_lootboxes.time.days(),
                    R.strings.gui_lootboxes.time.hours(),
                    R.strings.gui_lootboxes.time.minutes(),
                    R.strings.gui_lootboxes.time.seconds());
                const bu = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    Cu = (e) => {
                        const t = [...new Set(st(e, (e) => ((e) => bu[e] || '')(e)))];
                        return t.length > 1 ? `${t[0]}-${t[1]}` : `${t[0]}`;
                    },
                    hu = ({ value: e, className: t }) =>
                        i().createElement(
                            'div',
                            { className: l()('Counter_base_82', t) },
                            i().createElement('div', { className: 'Counter_text_79' }, e),
                        ),
                    vu = ({ onClick: e }) =>
                        i().createElement('div', {
                            className: l()('InfoIcon_base_6d', e && 'InfoIcon_base__clickable_f2'),
                            onClick: e,
                        }),
                    fu = 'GuaranteedRewardCount_text_94',
                    xu = R.strings.gui_lootboxes.guaranteedReward.boxesLeft,
                    wu = ({ onInfoClick: e, boxesCount: t, levelsRange: u, progressionStage: o, vehiclesOnly: n }) =>
                        i().createElement(
                            'div',
                            { className: 'GuaranteedRewardCount_base_6e' },
                            i().createElement(
                                'div',
                                { className: fu },
                                o
                                    ? i().createElement(gu, { text: xu.progressionStage(), binding: { stage: o } })
                                    : i().createElement(G.ZP, {
                                          text: xu.$dyn(n ? Ke : Xe),
                                          format: { binding: { level: Cu(u) } },
                                      }),
                            ),
                            i().createElement(hu, { value: t }),
                            i().createElement(
                                'div',
                                { className: fu },
                                i().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardCount_icon_e8' },
                                    i().createElement(vu, { onClick: e }),
                                ),
                            ),
                        ),
                    Su = R.strings.gui_lootboxes.guaranteedReward.next,
                    yu = ({ levelsRange: e, vehiclesOnly: t, onInfoClick: u }) =>
                        i().createElement(
                            'div',
                            { className: 'GuaranteedRewardNext_base_da' },
                            i().createElement(
                                'div',
                                { className: 'GuaranteedRewardNext_text_f7' },
                                i().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardNext_shineContainer_46' },
                                    i().createElement('div', { className: 'GuaranteedRewardNext_shine_02' }),
                                ),
                                i().createElement(G.ZP, {
                                    text: Su.$dyn(t ? Ke : Xe),
                                    format: { binding: { level: Cu(e) } },
                                }),
                                i().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardNext_icon_23' },
                                    i().createElement(vu, { onClick: u }),
                                ),
                            ),
                        );
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                let Ru;
                !(function (e) {
                    ((e[(e.Hidden = 0)] = 'Hidden'),
                        (e[(e.NextGuaranteed = 1)] = 'NextGuaranteed'),
                        (e[(e.CountBeforeGuaranteed = 2)] = 'CountBeforeGuaranteed'));
                })(Ru || (Ru = {}));
                const ku = i().memo(function ({
                        boxesCount: e,
                        levelsRange: t,
                        vehiclesOnly: u,
                        lootBoxID: o,
                        progressionStage: n,
                        onInfoClick: r,
                    }) {
                        const a = ze().infoIconToopltipWatched,
                            s = e < 1 ? Ru.Hidden : 1 === e ? Ru.NextGuaranteed : Ru.CountBeforeGuaranteed;
                        return i().createElement(
                            'div',
                            null,
                            s === Ru.CountBeforeGuaranteed &&
                                i().createElement('div', { className: 'GuaranteedReward_shine_c9' }),
                            i().createElement(
                                le,
                                Tu(
                                    {
                                        contentId:
                                            R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.GuaranteedRewardTooltip(
                                                'resId',
                                            ),
                                        args: { lootBoxID: o },
                                        isEnabled: s !== Ru.Hidden,
                                    },
                                    a,
                                ),
                                i().createElement(
                                    'div',
                                    null,
                                    ((o) => {
                                        switch (o) {
                                            case Ru.CountBeforeGuaranteed:
                                                return i().createElement(wu, {
                                                    boxesCount: e,
                                                    levelsRange: t,
                                                    vehiclesOnly: u,
                                                    progressionStage: n,
                                                    onInfoClick: r,
                                                });
                                            case Ru.NextGuaranteed:
                                                return i().createElement(yu, {
                                                    levelsRange: t,
                                                    vehiclesOnly: u,
                                                    onInfoClick: r,
                                                });
                                            default:
                                                return null;
                                        }
                                    })(s),
                                ),
                            ),
                        );
                    }),
                    Nu = 'NoBoxes_noBoxBuyButton_c3',
                    Lu = (0, O.observer)(() =>
                        i().createElement(
                            'div',
                            { className: 'TriggerHint_base_0b' },
                            i().createElement('div', { className: 'TriggerHint_selection_4d' }),
                            i().createElement(
                                'div',
                                { className: 'TriggerHint_info_38' },
                                i().createElement(
                                    'div',
                                    { className: 'TriggerHint_arrowHolder_7d' },
                                    i().createElement('div', { className: 'TriggerHint_arrow_5a' }),
                                ),
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(G.ZP, {
                                        text: R.strings.gui_lootboxes.triggerHint.statistic(),
                                        format: { classMix: 'TriggerHint_text_a1' },
                                    }),
                                ),
                            ),
                        ),
                    ),
                    Ou = R.strings.gui_lootboxes,
                    Mu = R.strings.lootboxes,
                    Iu = i().memo(
                        ({
                            hasCurrentLootbox: e,
                            isShopAvailable: t,
                            isShowStatistic: u,
                            currentLootboxType: o,
                            handleToHangar: n,
                            handleToShop: r,
                            handleToStatistic: s,
                        }) => {
                            const c = e
                                    ? Ou.openBoxScreen.noCurrentLootboxesMain()
                                    : Ou.openBoxScreen.noLootboxesMain(),
                                d = t
                                    ? Ou.openBoxScreen.noLootboxesShopSecondary()
                                    : Ou.openBoxScreen.noLootboxesSecondary(),
                                m = (0, a.useMemo)(() => {
                                    const t = Mu.noBoxes.$dyn(o) || Mu.noBoxes.default();
                                    return e ? t : d;
                                }, [o, d, e]),
                                _ = mt().model.root.get().isShowStatisticHintNoBoxes,
                                E = l()('NoBoxes_noBox_22', e && 'NoBoxes_noBox__withCurrentLootbox_bf');
                            return i().createElement(
                                'div',
                                { className: 'NoBoxes_base_a6' },
                                i().createElement('div', { className: 'NoBoxes_noBoxVignette_e2' }),
                                i().createElement(
                                    'div',
                                    { className: E },
                                    i().createElement(G.ZP, { text: c, className: 'NoBoxes_noBoxHeader_e2' }),
                                    i().createElement(G.ZP, {
                                        text: (0, I.z4)(m),
                                        className: 'NoBoxes_noBoxSubText_2d',
                                    }),
                                    !e &&
                                        i().createElement(
                                            'div',
                                            { className: 'NoBoxes_buttonsWrapper_7d' },
                                            t
                                                ? i().createElement(
                                                      q,
                                                      { mixClass: Nu, size: X.medium, type: K.main, onClick: r },
                                                      i().createElement(G.ZP, { text: Ou.footer.button.buy() }),
                                                  )
                                                : i().createElement(
                                                      q,
                                                      {
                                                          mixClass: 'NoBoxes_noBoxButton_cc',
                                                          size: X.medium,
                                                          type: K.primary,
                                                          onClick: n,
                                                      },
                                                      i().createElement(G.ZP, { text: Ou.openBoxScreen.backBtnMain() }),
                                                  ),
                                            u &&
                                                i().createElement(
                                                    'div',
                                                    { className: 'NoBoxes_buttonHolder_0c' },
                                                    _ && i().createElement(Lu, null),
                                                    i().createElement(
                                                        q,
                                                        { mixClass: Nu, size: X.medium, type: K.primary, onClick: s },
                                                        i().createElement('div', {
                                                            className: 'NoBoxes_noBoxBuyButtonIcon_f1',
                                                        }),
                                                        i().createElement(G.ZP, {
                                                            text: R.strings.gui_lootboxes.optional.statistic(),
                                                        }),
                                                    ),
                                                ),
                                        ),
                                ),
                            );
                        },
                    );
                let Pu, Hu, Gu;
                (!(function (e) {
                    ((e.STORAGE_VIEWING = 'STORAGE_VIEWING'),
                        (e.REQUEST_TO_OPEN = 'REQUEST_TO_OPEN'),
                        (e.OPENING = 'OPENING'),
                        (e.LOSE_OPENING = 'LOSE_OPENING'),
                        (e.OPENING_ERROR = 'OPENING_ERROR'),
                        (e.UNIQUE_REWARDING = 'UNIQUE_REWARDING'),
                        (e.REWARDING = 'REWARDING'));
                })(Pu || (Pu = {})),
                    (function (e) {
                        ((e[(e.TO_HANGAR = 0)] = 'TO_HANGAR'),
                            (e[(e.TO_SHOP = 1)] = 'TO_SHOP'),
                            (e[(e.TO_NY_CUSTOMIZATION = 2)] = 'TO_NY_CUSTOMIZATION'),
                            (e[(e.TO_SHARDS = 3)] = 'TO_SHARDS'),
                            (e[(e.TO_REFERRAL = 4)] = 'TO_REFERRAL'),
                            (e[(e.TO_FIR = 5)] = 'TO_FIR'),
                            (e[(e.TO_LIGHTS = 6)] = 'TO_LIGHTS'),
                            (e[(e.TO_INSTALLATIONS = 7)] = 'TO_INSTALLATIONS'),
                            (e[(e.TO_FAIR = 8)] = 'TO_FAIR'),
                            (e[(e.TO_SKATING = 9)] = 'TO_SKATING'),
                            (e[(e.TO_ATTRACTION = 10)] = 'TO_ATTRACTION'),
                            (e[(e.TO_PET = 11)] = 'TO_PET'));
                    })(Hu || (Hu = {})),
                    (function (e) {
                        ((e.DEFAULT = 'DEFAULT'), (e.UNIQUE = 'UNIQUE'));
                    })(Gu || (Gu = {})));
                const Wu = {
                        StorageViewing: Pu.STORAGE_VIEWING,
                        RequestToOpen: Pu.REQUEST_TO_OPEN,
                        Opening: Pu.OPENING,
                        OpeningError: Pu.OPENING_ERROR,
                        UniqueRewarding: Pu.UNIQUE_REWARDING,
                        Rewarding: Pu.REWARDING,
                        LoseOpening: Pu.LOSE_OPENING,
                    },
                    Uu = 'zero_state';
                let Vu;
                !(function (e) {
                    ((e[(e.Key = 0)] = 'Key'), (e[(e.Lockpick = 1)] = 'Lockpick'));
                })(Vu || (Vu = {}));
                const zu = 'UNIQUE';
                var ju = u(2557);
                function $u(e, t, u, o, n, r, a) {
                    try {
                        var i = e[r](a),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(o, n);
                }
                function Ku(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (o, n) {
                            var r = e.apply(t, u);
                            function a(e) {
                                $u(r, o, n, a, i, 'next', e);
                            }
                            function i(e) {
                                $u(r, o, n, a, i, 'throw', e);
                            }
                            a(void 0);
                        });
                    };
                }
                let Xu = 0;
                const Zu = (e, t, u) => {
                        const o = u.onBackgroundHideEnd,
                            n = u.onBackgroundHideStart,
                            r = u.onBackgroundShowStart,
                            a = u.onBackgroundShowEnd,
                            i = u.onLootboxOpenEnd,
                            s = u.onLootboxHideEnd,
                            l = u.onLootboxShowStart,
                            c = u.onLootboxShowEnd;
                        let d = !1,
                            m = 0,
                            _ = null;
                        const E = () => !d && m === Xu,
                            A = (function () {
                                var u = Ku(function* (u) {
                                    const o = qe[u];
                                    if (!o) throw new Error(`Unknown state "${u}"`);
                                    Yu && console.log(`[FSM${e}] ▶ Play segment:`, u, JSON.stringify(o), new Date());
                                    const n = 1e3 * (o.endTime - o.startTime + 1);
                                    if (o.endTime <= o.startTime)
                                        return (
                                            Yu &&
                                                console.log(
                                                    `[FSM${e}] Zero-length segment "${u}" — skipping playback`,
                                                    new Date(),
                                                ),
                                            (t.currentTime = o.startTime),
                                            void (yield Promise.resolve())
                                        );
                                    let r = null,
                                        a = !1;
                                    const i = ((e, t, u, o) =>
                                            new Promise((n, r) => {
                                                if (!e || 'function' != typeof e.play)
                                                    return r(new Error('Invalid video element'));
                                                let a;
                                                const i = () => {
                                                        (cancelAnimationFrame(a), e.pause());
                                                    },
                                                    s = () => {
                                                        if (!o())
                                                            return (
                                                                i(),
                                                                void r(
                                                                    new Error(
                                                                        'Segment aborted: invalidated by newer FSM',
                                                                    ),
                                                                )
                                                            );
                                                        e.currentTime >= u - 0.05
                                                            ? (i(), n())
                                                            : (a = requestAnimationFrame(s));
                                                    };
                                                try {
                                                    e.currentTime = t;
                                                    const u = e.play();
                                                    u && 'function' == typeof u.then
                                                        ? u
                                                              .then(() => {
                                                                  a = requestAnimationFrame(s);
                                                              })
                                                              .catch((e) => {
                                                                  (i(), r(e));
                                                              })
                                                        : (a = requestAnimationFrame(s));
                                                } catch (e) {
                                                    (i(), r(e));
                                                }
                                            }))(t, o.startTime, o.endTime, E)
                                            .then(() => {
                                                a ||
                                                    ((a = !0),
                                                    r && (clearTimeout(r), (r = null)),
                                                    Yu &&
                                                        console.log(
                                                            `[FSM${e}] ✅ Segment "${u}" completed normally`,
                                                            new Date(),
                                                        ));
                                            })
                                            .catch((e) => {
                                                throw (!a && r && (clearTimeout(r), (r = null)), e);
                                            }),
                                        s = new Promise((o) => {
                                            r = setTimeout(() => {
                                                if (!a) {
                                                    ((a = !0),
                                                        (r = null),
                                                        Yu &&
                                                            console.warn(
                                                                `[FSM${e}] Play timeout on segment "${u}" — moving on.`,
                                                                new Date(),
                                                            ));
                                                    try {
                                                        t.pause();
                                                    } catch (e) {}
                                                    o();
                                                }
                                            }, n);
                                        });
                                    (yield Promise.race([i, s]), r && (clearTimeout(r), (r = null)));
                                });
                                return function (e) {
                                    return u.apply(this, arguments);
                                };
                            })(),
                            p = (function () {
                                var t = Ku(function* (t) {
                                    if (_) {
                                        d = !0;
                                        try {
                                            yield _;
                                        } catch (e) {}
                                    }
                                    return (
                                        (d = !1),
                                        (m = ++Xu),
                                        (_ = Ku(function* () {
                                            try {
                                                yield t();
                                            } catch (t) {
                                                (t instanceof Error && t.message.includes('invalidated')) ||
                                                    (Yu && console.error(`[FSM${e}] Task error:`, t));
                                            } finally {
                                                _ = null;
                                            }
                                        })()),
                                        _
                                    );
                                });
                                return function (e) {
                                    return t.apply(this, arguments);
                                };
                            })(),
                            B = (function () {
                                var e = Ku(function* () {
                                    E() && (yield A('idle'), E() && (yield B()));
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })();
                        return {
                            showBackground: () => (
                                Yu && console.log('[FSM] Show background', new Date()),
                                p(
                                    Ku(function* () {
                                        (r && r(), yield A('in'), E() && a && a());
                                    }),
                                )
                            ),
                            hideBackground: () => (
                                Yu && console.log('[FSM] Hide background', new Date()),
                                p(
                                    Ku(function* () {
                                        (n && n(), yield A('out'), E() && o && o());
                                    }),
                                )
                            ),
                            startIdle: () => (
                                Yu && console.log('[FSM] Start idle', new Date()),
                                p(
                                    Ku(function* () {
                                        yield B();
                                    }),
                                )
                            ),
                            openLootbox: () => (
                                Yu && console.log('[FSM] Open lootbox', new Date()),
                                p(
                                    Ku(function* () {
                                        (yield A('open'), E() && i && i());
                                    }),
                                )
                            ),
                            openLootboxWithGlow: () => (
                                Yu && console.log('[FSM] Open lootbox with glow', new Date()),
                                p(
                                    Ku(function* () {
                                        (yield A('open_glow'), E() && i && i());
                                    }),
                                )
                            ),
                            loseOpening: () => (
                                Yu && console.log('[FSM] Lose opening', new Date()),
                                p(
                                    Ku(function* () {
                                        (yield A('lose'), E());
                                    }),
                                )
                            ),
                            hideLootbox: () => (
                                Yu && console.log('[FSM] Hide lootbox', new Date()),
                                p(
                                    Ku(function* () {
                                        (yield A('hide'), E() && s && s());
                                    }),
                                )
                            ),
                            showLootbox: () => (
                                Yu && console.log('[FSM] Show lootbox', new Date()),
                                p(
                                    Ku(function* () {
                                        const e = setTimeout(() => {
                                            (c && c(), clearTimeout(e));
                                        }, 350);
                                        (l && l(), yield A('show'), E() && (yield B()));
                                    }),
                                )
                            ),
                            showUniqueBackgroundVideoCoverFrame() {
                                if ((Yu && console.log('[FSM] Show unique background frame', new Date()), !t))
                                    return new Error('Invalid video element');
                                t.currentTime = qe.out.startTime;
                            },
                            showNoLootboxState: () => (
                                Yu && console.log('[FSM] Show no lootbox state', new Date()),
                                p(
                                    Ku(function* () {
                                        const e = setTimeout(() => {
                                            (c && c(), clearTimeout(e));
                                        }, 350);
                                        (l && l(), yield A(Uu), E());
                                    }),
                                )
                            ),
                            hideNoLootboxState: () => (
                                Yu && console.log('[FSM] Hide no lootbox state', new Date()),
                                p(
                                    Ku(function* () {
                                        const e = setTimeout(() => {
                                            (s && s(), clearTimeout(e));
                                        }, 150);
                                        (yield A(Uu), E());
                                    }),
                                )
                            ),
                            cancel() {
                                d = !0;
                            },
                        };
                    },
                    qu = 'VideoBg_player_84',
                    Yu = !1,
                    Ju = ({
                        currentLootbox: e,
                        currentOpenState: t,
                        glowType: u,
                        isLootboxChangeInitiated: o,
                        isLootboxOpenInitiated: n,
                        isLootboxShowInitiated: r,
                        isIdleContinueInitiated: s,
                        isZeroCountStateInitiated: c,
                        transitionContext: d,
                        onBackgroundHideStart: m,
                        onBackgroundShowStart: _,
                        onBackgroundHideEnd: E,
                        onLootboxOpenEnd: A,
                        onLootboxShowStart: p,
                        onLootboxShowEnd: B,
                        isUniqueBackgroundEnabled: g,
                        onError: F,
                        isAppInitialized: D,
                        isZeroCountBox: b,
                    }) => {
                        const C = (0, ju.nn)(),
                            h = C[0],
                            v = C[1],
                            f = (0, ju.nn)(),
                            x = f[0],
                            w = f[1],
                            S = (0, a.useRef)(Object.assign({}, d)),
                            y = (0, a.useState)(''),
                            T = y[0],
                            k = y[1],
                            N = (0, a.useState)(!1),
                            L = N[0],
                            O = N[1],
                            M = (0, a.useState)(!1),
                            I = M[0],
                            P = M[1],
                            H = (0, a.useRef)(),
                            G = (0, a.useRef)(),
                            W = (0, a.useRef)(b),
                            U = (0, a.useRef)({
                                onBackgroundHideEnd: E,
                                onBackgroundHideStart: m,
                                onBackgroundShowStart: _,
                                onLootboxOpenEnd: A,
                                onLootboxShowStart: p,
                                onLootboxShowEnd: B,
                            });
                        (0, a.useEffect)(() => {
                            ((U.current = {
                                onBackgroundHideEnd: E,
                                onBackgroundHideStart: m,
                                onBackgroundShowStart: _,
                                onLootboxOpenEnd: A,
                                onLootboxShowStart: p,
                                onLootboxShowEnd: B,
                            }),
                                (W.current = b));
                        }, [E, m, _, A, p, B, b]);
                        const V = (0, a.useCallback)(() => {
                                var e;
                                g && S.current.shouldAnimateBackgroundExit
                                    ? null == (e = G.current) || e.hideBackground()
                                    : U.current.onBackgroundHideEnd();
                            }, [g]),
                            z = (0, a.useCallback)(() => {
                                F && F(`[Lootbox] ${null == e ? void 0 : e.iconName}`);
                            }, [null == e ? void 0 : e.iconName, F]);
                        return (
                            (0, a.useEffect)(() => {
                                S.current = d;
                            }, [d]),
                            (0, a.useEffect)(() => {
                                var e;
                                null == (e = H.current) || e.startIdle();
                            }, [s]),
                            (0, a.useEffect)(() => {
                                var e;
                                null == (e = H.current) || e.showNoLootboxState();
                            }, [c]),
                            (0, a.useEffect)(() => {
                                var e;
                                null == (e = H.current) || e.showLootbox();
                            }, [r]),
                            (0, a.useEffect)(() => {
                                var e, t;
                                W.current
                                    ? null == (e = H.current) || e.hideNoLootboxState()
                                    : null == (t = H.current) || t.hideLootbox();
                            }, [o]),
                            (0, a.useEffect)(() => {
                                var e;
                                G.current = Zu('_BG', null == (e = x.current) ? void 0 : e.domRef, {
                                    onBackgroundHideEnd: () => {
                                        (null == U.current.onBackgroundHideEnd || U.current.onBackgroundHideEnd(),
                                            O(!1));
                                    },
                                    onBackgroundHideStart: () => {
                                        (null == U.current.onBackgroundHideStart || U.current.onBackgroundHideStart(),
                                            O(!0));
                                    },
                                    onBackgroundShowStart: () => {
                                        (null == U.current.onBackgroundShowStart || U.current.onBackgroundShowStart(),
                                            O(!0));
                                    },
                                    onBackgroundShowEnd: () => {
                                        var e, t;
                                        (W.current
                                            ? null == (e = H.current) || e.showNoLootboxState()
                                            : null == (t = H.current) || t.showLootbox(),
                                            O(!1));
                                    },
                                });
                            }, []),
                            (0, a.useEffect)(() => {
                                var t;
                                D &&
                                    null != e &&
                                    e.hasUniqueBack &&
                                    (null == (t = G.current) || t.showUniqueBackgroundVideoCoverFrame());
                            }, [D]),
                            (0, a.useEffect)(() => {
                                var e, t;
                                if ('' !== T && I && null != (e = h.current) && e.domRef) {
                                    var u, o, n;
                                    if (
                                        ((H.current = Zu('_Main', null == (t = h.current) ? void 0 : t.domRef, {
                                            onLootboxOpenEnd: U.current.onLootboxOpenEnd,
                                            onLootboxHideEnd: () => {
                                                (V(), k(''));
                                            },
                                            onLootboxShowStart: U.current.onLootboxShowStart,
                                            onLootboxShowEnd: U.current.onLootboxShowEnd,
                                        })),
                                        !g || !S.current.shouldAnimateBackgroundEnter)
                                    )
                                        return (
                                            W.current
                                                ? null == (u = H.current) || u.showNoLootboxState()
                                                : null == (o = H.current) || o.showLootbox(),
                                            () => {
                                                var e;
                                                (Yu && console.log('Effect cleanup: cancelling FSM'),
                                                    null == (e = H.current) || e.cancel());
                                            }
                                        );
                                    null == (n = G.current) || n.showBackground();
                                }
                            }, [I, T]),
                            (0, a.useEffect)(() => {
                                var e, o, n;
                                t !== Wu.LoseOpening
                                    ? u !== zu
                                        ? null == (e = H.current) || e.openLootbox()
                                        : null == (o = H.current) || o.openLootboxWithGlow()
                                    : null == (n = H.current) || n.loseOpening();
                            }, [n, u]),
                            (0, a.useEffect)(() => {
                                let t;
                                const u = performance.now();
                                let o = 0;
                                P(!1);
                                const n = () => {
                                    ((o = performance.now() - u),
                                        o < 50
                                            ? (k(''), (t = requestAnimationFrame(n)))
                                            : (k(null == e ? void 0 : e.videoRes), cancelAnimationFrame(t)));
                                };
                                return (
                                    (t = requestAnimationFrame(n)),
                                    () => {
                                        cancelAnimationFrame(t);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                var e;
                                const t = null == (e = h.current) ? void 0 : e.domRef;
                                if ('' === T || !t) return;
                                P(!1);
                                const u = () => {
                                    (P(!0), t.removeEventListener('durationchange', u));
                                };
                                return (
                                    t.addEventListener('durationchange', u),
                                    () => {
                                        t.removeEventListener('durationchange', u);
                                    }
                                );
                            }, [T]),
                            i().createElement(
                                'div',
                                { className: 'VideoBg_base_60' },
                                g &&
                                    i().createElement(ju.nk, {
                                        className: qu,
                                        src: R.videos.event_loot_boxes.$dyn('bg_unique'),
                                        autoplay: !1,
                                        loop: !1,
                                        setPlayer: w,
                                        videoWidth: 1920,
                                        videoHeight: 1080,
                                    }),
                                '' !== T &&
                                    i().createElement(ju.nk, {
                                        className: l()(qu, L && 'VideoBg_player__hidden_81'),
                                        src: T,
                                        autoplay: !1,
                                        loop: !1,
                                        setPlayer: v,
                                        videoWidth: 1920,
                                        videoHeight: 1080,
                                        onError: z,
                                    }),
                            )
                        );
                    },
                    Qu = 'App_imageBox_fd',
                    eo = 'App_imageBox__visible_fe',
                    to = 'subViews.onChanged',
                    uo = '.html',
                    oo = /^coui:\/\/gui\/.*/,
                    no = (() => {
                        const e = [];
                        let t = !1;
                        const u = () => {
                            if (!e.length) return void (t = !1);
                            const o = e.shift();
                            o && ((t = !0), o().then(() => u()));
                        };
                        return {
                            add: (o) => {
                                (e.push(o), t || u());
                            },
                        };
                    })(),
                    ro = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    },
                    ao = (0, a.memo)(({ id: e, mixClass: t, children: u }) => {
                        const o = (0, a.useRef)(null),
                            n = (0, a.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            r = (0, a.useState)(!1),
                            s = r[0],
                            c = r[1],
                            d = (0, a.useState)(!0),
                            m = d[0],
                            _ = d[1],
                            E = (0, a.useCallback)(
                                (e) => {
                                    e.includes(n) &&
                                        (c(!0), engine.off(to, E), window.subViews.removeChildChangedCallback(n));
                                },
                                [n],
                            ),
                            A = (0, a.useCallback)((e) => {
                                no.add(
                                    () =>
                                        new Promise((t) => {
                                            const u = new MutationObserver(() => {
                                                (_(!1), u.disconnect(), t());
                                            });
                                            if (o.current) {
                                                const t = document.getElementById('root');
                                                (t && t.setAttribute('id', 'bugSubView'),
                                                    o.current.setAttribute('id', 'root'));
                                                const n = document.createElement('link');
                                                ((n.href = e.replace(uo, '.css')),
                                                    (n.rel = 'stylesheet'),
                                                    document.head.appendChild(n),
                                                    oo.test(e) &&
                                                        ro(
                                                            e
                                                                .split('/')
                                                                .slice(0, -3)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    ro(e.replace(uo, '.js')),
                                                    u.observe(o.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                if (window.subViews.ids().includes(e)) {
                                    const t = window.subViews.get(e),
                                        u = t.path;
                                    let o = u.split('/').pop();
                                    if (o)
                                        return (
                                            (o = o.split('.')[0]),
                                            (window.subViews[o] = Object.assign({ id: e }, t)),
                                            A(u),
                                            () => {
                                                (o && window.subViews[o] && delete window.subViews[o],
                                                    engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(e),
                                                    console.info(`Sub view ${o} is destroyed: ${u}`));
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(to, E);
                            }, [E, A, e, s]),
                            i().createElement(
                                'div',
                                { className: l()('SubView_base_52', t) },
                                m && u,
                                i().createElement('div', { ref: o, 'data-root-id': e }),
                            )
                        );
                    }),
                    io = R.strings.menu,
                    so = R.strings.gui_lootboxes.lootboxesWithKeys.about,
                    lo = R.strings.gui_lootboxes.openBoxScreen,
                    co = 'R.images.gui_lootboxes.gui.maps.storage',
                    mo = (0, O.observer)(() => {
                        const e = mt(),
                            t = e.model,
                            u = e.controls,
                            o = (0, m.GS)().mediaSize,
                            n = ze().storageViewBackButtonClick,
                            r = t.root.get(),
                            s = r.currentLootboxID,
                            c = r.currentState,
                            d = r.isAnimationEnabled,
                            _ = r.isBuyAvailable,
                            E = r.returnPlace,
                            A = r.isShowInfoButton,
                            p = r.isShowStatistic,
                            B = r.isShowZeroStateStatistic,
                            g = r.ifHasUniqueURL,
                            F = r.glowType,
                            D = t.computes.getLootboxKeys(),
                            b = t.computes.getCurrentLootbox(),
                            C = t.computes.getLootboxes(),
                            v = Boolean(t.computes.getLootboxKeysLength()),
                            f = Boolean(C.find((e) => (null == e ? void 0 : e.hasUniqueBack))),
                            x = t.root.get().isShowStatisticHint,
                            k = so.$dyn((null == b ? void 0 : b.userName) || '') || so.default(),
                            N = (0, a.useState)(0),
                            O = N[0],
                            I = N[1],
                            P = (0, a.useState)(d),
                            H = P[0],
                            G = P[1],
                            W = (0, a.useState)(!1),
                            U = W[0],
                            V = W[1],
                            z = (0, a.useState)(Boolean(0 === (null == b ? void 0 : b.count))),
                            $ = z[0],
                            K = z[1],
                            X = (0, a.useState)(Wu.Opening),
                            Z = X[0],
                            q = X[1],
                            Y = (0, a.useState)(null),
                            J = Y[0],
                            Q = Y[1],
                            ee = (0, a.useState)(0),
                            te = ee[0],
                            ue = ee[1],
                            oe = (0, a.useState)(0),
                            ne = oe[0],
                            re = oe[1],
                            ae = (0, a.useState)(0),
                            ie = ae[0],
                            se = ae[1],
                            le = (0, a.useState)(0),
                            ce = le[0],
                            de = le[1],
                            me = (0, a.useState)(0),
                            _e = me[0],
                            Ee = me[1],
                            Ae = (0, a.useState)(!0),
                            pe = Ae[0],
                            Be = Ae[1],
                            ge = (0, a.useState)(!1),
                            Fe = ge[0],
                            De = ge[1],
                            be = (0, a.useState)(!1),
                            Ce = be[0],
                            he = be[1],
                            ve = (0, a.useState)(!1),
                            fe = ve[0],
                            xe = ve[1],
                            we = (0, a.useState)({ shouldAnimateBackgroundExit: !1, shouldAnimateBackgroundEnter: !1 }),
                            Se = we[0],
                            Te = we[1],
                            Re = (0, a.useRef)(O),
                            ke = (0, a.useMemo)(() => {
                                if (!b) return;
                                let e = '';
                                return (
                                    o >= m.cJ.Large ? (e = '_1920') : o >= m.cJ.Medium && (e = '_1600'),
                                    { backgroundImage: `url('${co}.eventBanner.${b.category}${e}')` }
                                );
                            }, [b, o]),
                            Ne = (0, a.useCallback)(() => {
                                (n(), u.close());
                            }, [u, n]),
                            Le = (0, a.useCallback)(
                                (e, t) => {
                                    void 0 !== t
                                        ? u.openLootBoxes({ lootBoxID: s, count: e, keyID: t })
                                        : u.openLootBoxes({ lootBoxID: s, count: e });
                                },
                                [u, s],
                            ),
                            Oe = (0, a.useCallback)(() => {
                                u.buyBox({ lootBoxID: s, buttonID: 2 });
                            }, [u, s]),
                            Me = (e) => u.buyBox({ lootBoxID: null, buttonID: e }),
                            Ie = (0, a.useCallback)(() => {
                                (Se.shouldAnimateBackgroundExit && De(!1),
                                    u.lootboxSelected({ lootBoxID: Re.current }));
                            }, [u, Se]),
                            Pe = (0, a.useCallback)(() => {
                                (0, h.G)(Qe);
                            }, []),
                            He = (0, a.useCallback)(() => {
                                (0, h.G)(Je);
                            }, []),
                            Ge = (0, a.useCallback)(() => {
                                (0, h.G)(Ye);
                            }, []),
                            We = (0, a.useCallback)(() => {
                                (Be(!1), De((null == b ? void 0 : b.hasUniqueBack) || !1), fe || xe(!0));
                            }, [fe, b]),
                            Ue = (0, a.useCallback)(
                                (e) => {
                                    if (e === s) return;
                                    const t = C.find((t) => t.boxID === e),
                                        o =
                                            (null == b ? void 0 : b.hasUniqueBack) !==
                                            (null == t ? void 0 : t.hasUniqueBack);
                                    (Te({
                                        shouldAnimateBackgroundExit: Boolean(
                                            (null == b ? void 0 : b.hasUniqueBack) && o,
                                        ),
                                        shouldAnimateBackgroundEnter: Boolean(
                                            (null == t ? void 0 : t.hasUniqueBack) && o,
                                        ),
                                    }),
                                        H
                                            ? (Be(!0),
                                              ue((e) => e + 1),
                                              De((null == b ? void 0 : b.hasUniqueBack) || !1))
                                            : (De((null == t ? void 0 : t.hasUniqueBack) || !1),
                                              u.lootboxSelected({ lootBoxID: e })),
                                        I(e));
                                },
                                [u, C, s, b, H],
                            ),
                            Ve = (0, a.useCallback)(() => {
                                (G(!H),
                                    H ? Te(Object.assign({}, Se, { shouldAnimateBackgroundEnter: !1 })) : xe(!1),
                                    u.changeAnimationEnabledSetting({ enabled: !H, autoSwitch: !1 }));
                            }, [H, Se, u]),
                            je = (0, a.useCallback)(
                                (e) => {
                                    (u.onError(e), G(!1));
                                },
                                [u],
                            ),
                            $e = (0, a.useCallback)(
                                (e) => {
                                    (x && u.hideTriggerHint(), u.showStatistic({ buttonID: e }));
                                },
                                [u, x],
                            );
                        return (
                            (function ({
                                key: e = T.n.ESCAPE,
                                callback: t = () => y.O.view.sendEvent.close(),
                                preventPropagation: u = !0,
                            } = {}) {
                                L(e, t, u);
                            })({
                                callback: (0, a.useCallback)(() => {
                                    u.closeEsc();
                                }, [u]),
                            }),
                            (0, a.useEffect)(() => {
                                H || De((null == b ? void 0 : b.hasUniqueBack) || !1);
                            }, []),
                            (0, a.useEffect)(() => {
                                Re.current = O;
                            }, [O]),
                            (0, a.useEffect)(() => {
                                he(c === Wu.StorageViewing && !pe);
                            }, [c, pe]),
                            (0, a.useEffect)(() => {
                                (null == b ? void 0 : b.boxID) !== (null == J ? void 0 : J.boxID) &&
                                    c === Wu.StorageViewing &&
                                    b &&
                                    (K(0 === (null == b ? void 0 : b.count)),
                                    Q(b),
                                    H || Be(!1),
                                    b.videoRes ||
                                        (G(!1), u.changeAnimationEnabledSetting({ enabled: !1, autoSwitch: !0 })));
                            }, [u, b, c, H, J]),
                            (0, a.useEffect)(() => {
                                ((c !== Wu.Opening && c !== Wu.LoseOpening) || (q(c), re((e) => e + 1)),
                                    (c !== Wu.RequestToOpen && c !== Wu.StorageViewing) || V(!1));
                            }, [c]),
                            (0, a.useEffect)(
                                () =>
                                    (c !== Wu.Opening && c !== Wu.LoseOpening) || H
                                        ? c === Wu.Rewarding || c === Wu.UniqueRewarding
                                            ? S(() => {
                                                  H && de((e) => e + 1);
                                              }, 350)
                                            : void 0
                                        : (V(!0),
                                          S(() => {
                                              u.openningFinished();
                                          }, 350)),
                                [u, c, H, b],
                            ),
                            (0, a.useEffect)(() => {
                                if (
                                    (null == b ? void 0 : b.boxID) === (null == J ? void 0 : J.boxID) &&
                                    c === Wu.StorageViewing
                                ) {
                                    const e = 0 === (null == b ? void 0 : b.count);
                                    ($ && !e && (K(!1), se((e) => e + 1)), e && (K(!0), Ee((e) => e + 1)));
                                }
                            }, [null == b ? void 0 : b.count]),
                            (0, a.useEffect)(() => {
                                (c === Wu.Opening || c === Wu.LoseOpening) &&
                                    b &&
                                    H &&
                                    ((0, h.G)(tt[b.tier]), F === zu && (0, h.G)(tt[5]));
                            }, [b, c, F, H]),
                            i().createElement(
                                'div',
                                { className: 'App_base_10' },
                                i().createElement('div', {
                                    className: 'App_bg_10',
                                    style: { backgroundImage: Fe ? `url(${Ze})` : '' },
                                }),
                                i().createElement(
                                    'div',
                                    { className: 'App_close_4b' },
                                    i().createElement(w, {
                                        caption: io.viewHeader.backBtn.label(),
                                        type: 'back',
                                        side: 'left',
                                        goto: lo.backBtn.$num(E),
                                        onClick: Ne,
                                    }),
                                ),
                                b
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(
                                              'div',
                                              { className: l()('App_lootboxWrapper_9e') },
                                              H && null != b && b.videoRes
                                                  ? i().createElement(
                                                        'div',
                                                        { className: 'App_videoWrapper_22' },
                                                        i().createElement(Ju, {
                                                            currentLootbox: J,
                                                            glowType: F,
                                                            onError: je,
                                                            currentOpenState: Z,
                                                            onBackgroundHideEnd: Ie,
                                                            onBackgroundShowStart: Pe,
                                                            onBackgroundHideStart: He,
                                                            onLootboxOpenEnd: () => u.openningFinished(),
                                                            onLootboxShowStart: Ge,
                                                            onLootboxShowEnd: We,
                                                            isLootboxChangeInitiated: te,
                                                            isLootboxOpenInitiated: ne,
                                                            isLootboxShowInitiated: ie,
                                                            isIdleContinueInitiated: ce,
                                                            isZeroCountStateInitiated: _e,
                                                            transitionContext: Se,
                                                            isUniqueBackgroundEnabled: f,
                                                            isAppInitialized: fe,
                                                            isZeroCountBox: $,
                                                        }),
                                                    )
                                                  : i().createElement(
                                                        'div',
                                                        { className: 'App_imagesWrapper_af' },
                                                        C.map(({ iconName: e, boxID: t }) =>
                                                            i().createElement(
                                                                i().Fragment,
                                                                { key: t },
                                                                i().createElement('div', {
                                                                    className: l()(Qu, s === t && !$ && eo),
                                                                    style: {
                                                                        backgroundImage: `url('${co}.boxes.${e}')`,
                                                                    },
                                                                }),
                                                                i().createElement('div', {
                                                                    className: l()(Qu, s === t && U && eo),
                                                                    style: {
                                                                        backgroundImage:
                                                                            F === zu
                                                                                ? `url('${co}.boxes.${e}_open_unique')`
                                                                                : `url('${co}.boxes.${e}_open')`,
                                                                    },
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                          ),
                                          i().createElement('div', {
                                              className: l()(
                                                  'App_bgVideoInit_e4',
                                                  (!H || fe) && 'App_bgVideoInit__hidden_a0',
                                              ),
                                              style: {
                                                  backgroundImage: null != b && b.hasUniqueBack ? `url(${Ze})` : '',
                                              },
                                          }),
                                          i().createElement('div', { className: 'App_vignette_b8' }),
                                          i().createElement(
                                              'div',
                                              {
                                                  className: l()(
                                                      'App_descriptionWrapper_c6',
                                                      !Ce && 'App_descriptionWrapper__hide_91',
                                                  ),
                                              },
                                              i().createElement(j, b),
                                          ),
                                          b.category &&
                                              i().createElement('div', {
                                                  className: l()('App_eventImage_77', !Ce && 'App_eventImage__hide_b8'),
                                                  style: ke,
                                              }),
                                          i().createElement(
                                              'div',
                                              {
                                                  className: l()(
                                                      'App_possibleRewardsWrapper_6e',
                                                      !Ce && 'App_possibleRewardsWrapper__hide_46',
                                                  ),
                                              },
                                              i().createElement(gt, {
                                                  bonusGroups: b.bonusGroups,
                                                  lootBoxID: String(s),
                                              }),
                                          ),
                                          i().createElement(
                                              'div',
                                              {
                                                  className: l()(
                                                      'App_guaranteedReward_b0',
                                                      !Ce && 'App_guaranteedReward__hide_b7',
                                                  ),
                                              },
                                              i().createElement(ku, {
                                                  boxesCount: b.guaranteedReward.boxesUntilGuaranteedReward,
                                                  levelsRange: b.guaranteedReward.levelsRange,
                                                  vehiclesOnly: b.guaranteedReward.vehiclesOnly,
                                                  lootBoxID: s,
                                                  progressionStage: b.progressionStage,
                                              }),
                                          ),
                                          i().createElement(
                                              'div',
                                              {
                                                  className: l()(
                                                      'App_openButtonsWrapper_fc',
                                                      !Ce && 'App_openButtonsWrapper__hide_6a',
                                                  ),
                                              },
                                              i().createElement(ye, {
                                                  onOpenBox: Le,
                                                  onOpenShopByBoxID: Oe,
                                                  onBuyBox: () => Me(2),
                                                  count: null == b ? void 0 : b.count,
                                                  disabled: !(null != b && b.isOpenEnabled),
                                                  isOpenBoxDisabled:
                                                      c !== Wu.StorageViewing || !(null != b && b.isOpenEnabled),
                                                  allKeys: D,
                                                  currentLootboxKeysIDs: b.unlockKeyIDs,
                                                  isBuyAvailable: _,
                                                  hasUniqueURL: g,
                                                  manualMaxOpenCount: null == b ? void 0 : b.manualMaxOpenCount,
                                              }),
                                          ),
                                          A &&
                                              k &&
                                              i().createElement(
                                                  'div',
                                                  { className: l()('App_info_5d', !Ce && 'App_info__hide_ba') },
                                                  i().createElement(w, {
                                                      caption: k,
                                                      type: 'info',
                                                      side: 'left',
                                                      onClick: u.showLootBoxInfoPage,
                                                  }),
                                              ),
                                          i().createElement(
                                              'div',
                                              {
                                                  className: l()(
                                                      'App_noBoxesWrapper_b2',
                                                      (!$ || pe) && 'App_noBoxesWrapper__hidden_23',
                                                  ),
                                              },
                                              i().createElement(Iu, {
                                                  currentLootboxType: b.boxType,
                                                  hasCurrentLootbox: !0,
                                                  isShopAvailable: _,
                                                  isShowStatistic: p,
                                                  handleToHangar: u.close,
                                                  handleToShop: () => Me(3),
                                                  handleToStatistic: () => $e(1),
                                              }),
                                          ),
                                          Boolean(C.length) &&
                                              i().createElement(
                                                  'div',
                                                  {
                                                      className: l()(
                                                          'App_carousel_53',
                                                          c !== Wu.StorageViewing && 'App_carousel__hide_17',
                                                      ),
                                                  },
                                                  i().createElement(lu, {
                                                      selectedLootboxID: O || (null == J ? void 0 : J.boxID),
                                                      onChange: Ue,
                                                      isDisabled: H && pe,
                                                  }),
                                              ),
                                          i().createElement(M.E, {
                                              mixClass: 'App_animationControl_ba',
                                              isActiveAnimation: H,
                                              onClick: Ve,
                                              disabled: c !== Wu.StorageViewing || pe,
                                          }),
                                          v &&
                                              i().createElement(
                                                  'div',
                                                  { className: 'App_currencyWrapper_bb' },
                                                  i().createElement(_u, null),
                                              ),
                                      )
                                    : i().createElement(Iu, {
                                          hasCurrentLootbox: !1,
                                          isShopAvailable: _,
                                          isShowStatistic: B,
                                          handleToHangar: u.close,
                                          handleToShop: () => Me(3),
                                          handleToStatistic: () => $e(1),
                                      }),
                                _ &&
                                    i().createElement(
                                        'div',
                                        { className: 'App_buyButtonWrapper_6b' },
                                        i().createElement(Dt, { buyBox: () => Me(1) }),
                                    ),
                                i().createElement(ao, {
                                    id: R.views.gui_lootboxes.lobby.gui_lootboxes.LootBoxesShortStatsView('resId'),
                                    mixClass: 'App_sub_23',
                                }),
                            )
                        );
                    }),
                    _o = {
                        getter:
                            ((Eo = {
                                lootboxes: [
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/referral/standart.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 8,
                                        boxType: 'event_premium',
                                        boxID: 230315,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/standart',
                                        descriptionKey: 'tanks_birthday_2023_VI',
                                        userName: 'tanks_birthday_2023_VI',
                                        iconName: 'tanks_birthday_2023_VI',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 66,
                                        boxType: 'tanks_birthday_2023_VI',
                                        boxID: 310004,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/standart',
                                        descriptionKey: 'tanks_birthday_2023_IX',
                                        userName: 'tanks_birthday_2023_IX',
                                        iconName: 'tanks_birthday_2023_IX',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 55,
                                        boxType: 'tanks_birthday_2023_IX',
                                        boxID: 310003,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/bronze',
                                        descriptionKey: 'tanks_birthday_2023_X',
                                        userName: 'tanks_birthday_2023_X',
                                        iconName: 'tanks_birthday_2023_X',
                                        isOpenEnabled: !0,
                                        tier: 2,
                                        count: 44,
                                        boxType: 'tanks_birthday_2023_X',
                                        boxID: 310002,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/silver',
                                        descriptionKey: 'tanks_birthday_2023_premium',
                                        userName: 'tanks_birthday_2023_premium',
                                        iconName: 'tanks_birthday_2023_premium',
                                        isOpenEnabled: !0,
                                        tier: 3,
                                        count: 33,
                                        boxType: 'tanks_birthday_2023_premium',
                                        boxID: 310001,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/silver.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !1,
                                        tier: 3,
                                        count: 19,
                                        boxType: 'event_premium',
                                        boxID: 230316,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/bronze.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 2,
                                        count: 9,
                                        boxType: 'event_premium',
                                        boxID: 230317,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/gold.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !1,
                                        tier: 1,
                                        count: 5,
                                        boxType: 'event_premium',
                                        boxID: 230318,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/standart.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 200,
                                        boxType: 'event_premium',
                                        boxID: 230319,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/referral/gold.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 1234,
                                        boxType: 'event_premium',
                                        boxID: 230314,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/lootbox_prem.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 1,
                                        boxType: 'event_premium',
                                        boxID: 230313,
                                    },
                                ],
                                groupRewards: [],
                                currentState: Wu.StorageViewing,
                                currentLootboxID: 230315,
                                isAnimationEnabled: !0,
                                isBuyAvailable: !0,
                            }),
                            (e) => (e ? e.split('.').reduce((e, t) => e[t], Eo) : Eo)),
                        controls: ({ model: e }) =>
                            (function (e) {
                                const t = {};
                                for (const u in e)
                                    if (Object.prototype.hasOwnProperty.call(e, u)) {
                                        const o = e[u];
                                        t[u] = (0, nt.action)(o);
                                    }
                                return t;
                            })({
                                openLootBoxes: (e) => {
                                    console.log('Call openLootBoxes() with', JSON.stringify(e));
                                },
                                close: () => {
                                    console.log('Call close()');
                                },
                                buyBox: () => {
                                    console.log('Call buyBox()');
                                },
                                openningFinished: () => {
                                    console.log('Call openningFinished()');
                                },
                                lootboxSelected: (t) => {
                                    (console.log('Call lootboxSelected() with', JSON.stringify(t)),
                                        e.root.set(Object.assign({}, e.root.get(), { currentLootboxID: t.lootBoxID })));
                                },
                            }),
                    };
                var Eo;
                engine.whenReady.then(() => {
                    C().render(
                        i().createElement(
                            dt,
                            { mocks: _o, mode: 'real' },
                            i().createElement(D, null, i().createElement(mo, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            4999: (e, t, u) => {
                'use strict';
                u.d(t, { E: () => l });
                var o = u(6483),
                    n = u.n(o),
                    r = u(7727),
                    a = u(6179),
                    i = u.n(a);
                const s = 'AnimationControls_flexColumnCenter_62',
                    l = ({
                        mixClass: e,
                        isActiveAnimation: t,
                        onClick: u,
                        soundHover: o = R.sounds.highlight(),
                        soundClick: a = R.sounds.play(),
                        disabled: l = !1,
                    }) => {
                        const c = n()(
                            'AnimationControls_base_71',
                            s,
                            e,
                            !t && 'AnimationControls_base__disabledAnimadion_89',
                            l && 'AnimationControls_base__disabled_ec',
                            !t && l && 'AnimationControls_base__disabledAnimadionButton_c5',
                        );
                        return i().createElement(
                            'div',
                            {
                                className: c,
                                onClick: () => {
                                    l || ((0, r.G)(a), u());
                                },
                                onMouseEnter: () => {
                                    l || (0, r.G)(o);
                                },
                            },
                            i().createElement(
                                'div',
                                { className: s },
                                i().createElement('div', { className: 'AnimationControls_icon_05' }),
                                i().createElement(
                                    'div',
                                    { className: 'AnimationControls_text_20' },
                                    t
                                        ? R.strings.gui_lootboxes.shared.animationControlsOffText()
                                        : R.strings.gui_lootboxes.shared.animationControlsText(),
                                ),
                            ),
                        );
                    };
            },
            7635: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => _ });
                var o = u(6483),
                    n = u.n(o),
                    r = u(7613),
                    a = u(7727),
                    i = u(6179),
                    s = u.n(i);
                const l = 'BacklitTransparentButton_corners_4b',
                    c = 'BacklitTransparentButton_corners__top_99',
                    d = 'BacklitTransparentButton_corners__bottom_2c';
                var m;
                !(function (e) {
                    ((e.Default = 'default'), (e.Hovered = 'hovered'), (e.Pressed = 'pressed'));
                })(m || (m = {}));
                const _ = ({ title: e, onClick: t, iconArgs: u, classNames: o }) => {
                    const _ = (0, i.useState)(m.Default),
                        E = _[0],
                        A = _[1],
                        p = (0, i.useCallback)(
                            (e) => {
                                (t && t(e), a.$.playClick());
                            },
                            [t],
                        ),
                        B = {
                            [m.Default]: null == u ? void 0 : u.defaultIcon,
                            [m.Hovered]: null == u ? void 0 : u.hoveredIcon,
                            [m.Pressed]: null == u ? void 0 : u.pressedIcon,
                        };
                    return s().createElement(
                        'div',
                        {
                            className: n()('BacklitTransparentButton_base_ec', o),
                            onClick: p,
                            onMouseEnter: () => {
                                (A(m.Hovered), a.$.playHighlight());
                            },
                            onMouseLeave: () => {
                                A(m.Default);
                            },
                            onMouseDown: () => {
                                A(m.Pressed);
                            },
                        },
                        s().createElement('div', {
                            className: n()('BacklitTransparentButton_background_13', {
                                BacklitTransparentButton_background__pressed_f4: E === m.Pressed,
                            }),
                        }),
                        s().createElement(
                            'div',
                            { className: 'BacklitTransparentButton_content_f5' },
                            s().createElement('div', {
                                className: 'BacklitTransparentButton_icon_e6',
                                style: { backgroundImage: u ? `url(${B[E]})` : void 0 },
                            }),
                            s().createElement(r.ZP, { text: e, className: 'BacklitTransparentButton_title_29' }),
                        ),
                        s().createElement(
                            'div',
                            { className: 'BacklitTransparentButton_cornersHolder_67' },
                            s().createElement(
                                'div',
                                { className: l },
                                s().createElement('div', { className: c }),
                                s().createElement('div', { className: d }),
                            ),
                            s().createElement(
                                'div',
                                { className: n()(l, 'BacklitTransparentButton_corners__right_96') },
                                s().createElement('div', { className: c }),
                                s().createElement('div', { className: d }),
                            ),
                        ),
                    );
                };
            },
            6620: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => R });
                var o = u(6179),
                    n = u.n(o);
                let r, a, i, s, l, c, d;
                var m, _, E, A, p;
                (((p = r || (r = {})).Items = 'items'),
                    (p.Equipment = 'equipment'),
                    (p.Xp = 'xp'),
                    (p.XpFactor = 'xpFactor'),
                    (p.Blueprints = 'blueprints'),
                    (p.BlueprintsAny = 'blueprintsAny'),
                    (p.Goodies = 'goodies'),
                    (p.Berths = 'berths'),
                    (p.Slots = 'slots'),
                    (p.Tokens = 'tokens'),
                    (p.CrewSkins = 'crewSkins'),
                    (p.CrewBooks = 'crewBooks'),
                    (p.Customizations = 'customizations'),
                    (p.CreditsFactor = 'creditsFactor'),
                    (p.Currency = 'currency'),
                    (p.TankmenXp = 'tankmenXP'),
                    (p.TankmenXpFactor = 'tankmenXPFactor'),
                    (p.FreeXpFactor = 'freeXPFactor'),
                    (p.BattleToken = 'battleToken'),
                    (p.PremiumUniversal = 'premium_universal'),
                    (p.Gold = 'gold'),
                    (p.Credits = 'credits'),
                    (p.Crystal = 'crystal'),
                    (p.FreeXp = 'freeXP'),
                    (p.Premium = 'premium'),
                    (p.PremiumPlus = 'premium_plus'),
                    (p.BattlePassPoints = 'battlePassPoints'),
                    (p.BattlePassSelectToken = 'battlePassSelectToken'),
                    (p.SelectableBonus = 'selectableBonus'),
                    (p.StyleProgressToken = 'styleProgressToken'),
                    (p.TmanToken = 'tmanToken'),
                    (p.NaturalCover = 'naturalCover'),
                    (p.BpCoin = 'bpcoin'),
                    (p.BattlaPassFinalAchievement = 'dossier_achievement'),
                    (p.BattleBadge = 'dossier_badge'),
                    (p.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                    (p.NewYearFillers = 'ny22Fillers'),
                    (p.NewYearInvoice = 'newYearInvoice'),
                    (p.NewYearToyFragments = 'ny22ToyFragments'),
                    (p.NewYearSlot = 'newYearSlot'),
                    (p.BonusX5 = 'battle_bonus_x5'),
                    (p.CrewBonusX3 = 'crew_bonus_x3'),
                    (p.Vehicles = 'vehicles'),
                    (p.EpicSelectToken = 'epicSelectToken'),
                    (p.CollectionItem = 'collectionItem'),
                    (p.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                    (p.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                    (p.BattleBoosterGift = 'battleBooster_gift'),
                    (p.CosmicLootboxSilver = 'lootBoxToken'),
                    (p.CosmicLootboxCommon = 'cosmic_2024_2'),
                    (p.Branch = 'branch'),
                    (p.VehicleSelect = 'vehicleSelect'),
                    (p.StyleProgress = 'styleProgress'),
                    (p.ParagonsUnlocks = 'paragonsUnlocks'),
                    (p.LootBoxToken = 'lootBoxToken'),
                    (p.GoldenTicket = 'birthday2025_golden_ticket'),
                    (p.PostStamp = 'giftsystem_4_stamp'),
                    (p.Quests = 'quests'),
                    (p.ArmoryCoin = 'armory_coin'),
                    (p.PremiumPlusUniversal = 'premium_plus_universal'),
                    (p.DogTagType = 'dogTagComponents'),
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
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(a || (a = {})),
                    ((A = i || (i = {})).Big = 'big'),
                    (A.Small = 'small'),
                    (A.Mini = 'mini'),
                    (A.S600x450 = 's600x450'),
                    (A.S400x300 = 's400x300'),
                    (A.S296x222 = 's296x222'),
                    (A.S232x174 = 's232x174'),
                    (A.S180x135 = 's180x135'),
                    (A.S128x100 = 's128x100'),
                    (A.S80x80 = 's80x80'),
                    (A.S48x48 = 's48x48'),
                    ((E = s || (s = {})).MULTI = 'multi'),
                    (E.CURRENCY = 'currency'),
                    (E.PREMIUM_PLUS = 'premium_plus'),
                    (E.NUMBER = 'number'),
                    (E.STRING = 'string'),
                    ((_ = l || (l = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (_.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (_.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (_.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (_.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (_.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (_.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (_.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (_.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (_.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (_.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (_.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (_.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((c || (c = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((m = d || (d = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (m.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (m.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (m.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (m.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (m.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (m.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (m.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (m.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (m.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (m.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                var B = u(4179);
                class g extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? B.B3.GOLD : B.B3.INTEGRAL;
                        const t = B.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                let F, D, b, C, h, v, f, x, w;
                var S, y, T;
                ((g.defaultProps = { format: 'integral' }),
                    r.Items,
                    r.Equipment,
                    r.Xp,
                    r.XpFactor,
                    r.Blueprints,
                    r.BlueprintsAny,
                    r.Goodies,
                    r.Berths,
                    r.Slots,
                    r.Tokens,
                    r.CrewSkins,
                    r.CrewBooks,
                    r.Customizations,
                    r.CreditsFactor,
                    r.TankmenXp,
                    r.TankmenXpFactor,
                    r.FreeXpFactor,
                    r.BattleToken,
                    r.PremiumUniversal,
                    r.NaturalCover,
                    r.BpCoin,
                    r.BattlePassSelectToken,
                    r.BattlaPassFinalAchievement,
                    r.BattleBadge,
                    r.BonusX5,
                    r.CrewBonusX3,
                    r.NewYearFillers,
                    r.NewYearInvoice,
                    r.EpicSelectToken,
                    r.Comp7TokenWeeklyReward,
                    r.Comp7TokenCouponReward,
                    r.BattleBoosterGift,
                    r.CosmicLootboxCommon,
                    r.CosmicLootboxSilver,
                    r.SelectableBonus,
                    r.GoldenTicket,
                    r.PostStamp,
                    r.PremiumPlusUniversal,
                    r.Gold,
                    r.Credits,
                    r.Crystal,
                    r.FreeXp,
                    r.BattlePassPoints,
                    r.PremiumPlus,
                    r.Premium,
                    (function (e) {
                        ((e.s16 = '16'),
                            (e.s32 = '32'),
                            (e.s48 = '48'),
                            (e.s66 = '66'),
                            (e.s80 = '80'),
                            (e.s116 = '116'),
                            (e.s296 = '296'),
                            (e.s360 = '360'),
                            (e.s400 = '400'),
                            (e.s600 = '600'));
                    })(F || (F = {})),
                    ((T = D || (D = {})).Active = 'active'),
                    (T.Paused = 'paused'),
                    (T.Completed = 'completed'),
                    (T.NotStarted = 'notStarted'),
                    (T.Disabled = 'disabled'),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(b || (b = {})),
                    (function (e) {
                        ((e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(C || (C = {})),
                    (function (e) {
                        ((e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen'));
                    })(h || (h = {})),
                    ((y = v || (v = {})).AwaitSeason = 'awaitSeason'),
                    (y.Bought = 'bought'),
                    (y.Free = 'free'),
                    (y.Completed = 'completed'),
                    (y.CompletedRightNow = 'completedRightNow'),
                    (y.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                    (y.NoVehiclesBase = 'noVehiclesBase'),
                    (y.ChapterNotChosen = 'chapterNotChosen'),
                    (function (e) {
                        ((e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay'));
                    })(f || (f = {})),
                    ((S = x || (x = {})).style = 'style'),
                    (S.tankman = 'tankman'),
                    (S.vehicle = 'vehicle'),
                    (S.mixed = 'mixed'),
                    (function (e) {
                        ((e.Default = 'default'), (e.Marathon = 'marathon'), (e.Resource = 'resource'));
                    })(w || (w = {})),
                    x.style,
                    x.tankman);
                const R = ({ icon: e, count: t }) =>
                    n().createElement(
                        'div',
                        { className: 'CurrencyKey_base_53' },
                        n().createElement('div', {
                            className: 'CurrencyKey_icon_85',
                            style: { backgroundImage: `url(${e})` },
                        }),
                        n().createElement(
                            'div',
                            { className: 'CurrencyKey_value_29' },
                            ((e = 0) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))(t),
                        ),
                    );
            },
            2557: (e, t, u) => {
                'use strict';
                u.d(t, { nk: () => c, nn: () => l });
                var o = u(7515),
                    n = u(5415),
                    r = u(6179),
                    a = u.n(r);
                const i = ['src', 'className', 'autoplay', 'loop', 'setPlayer', 'onClick', 'videoWidth', 'videoHeight'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = () => {
                        const e = (0, r.useRef)(),
                            t = (0, r.useCallback)((t) => (e.current = t), []);
                        return (
                            (0, r.useEffect)(
                                () => () => {
                                    var t;
                                    null == (t = e.current) || t.cleanup();
                                },
                                [],
                            ),
                            [e, t]
                        );
                    },
                    c = a().memo(function (e) {
                        let t = e.src,
                            u = e.className,
                            l = e.autoplay,
                            c = e.loop,
                            d = void 0 !== c && c,
                            m = e.setPlayer,
                            _ = e.onClick,
                            E = e.videoWidth,
                            A = e.videoHeight,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    o,
                                    n = {},
                                    r = Object.keys(e);
                                for (o = 0; o < r.length; o++) ((u = r[o]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, i);
                        const B = (0, r.useRef)(null),
                            g = (0, n.GS)(),
                            F = g.remScreenWidth,
                            D = g.remScreenHeight,
                            b = (0, r.useMemo)(() => {
                                const e = ((e, t, u, o) => {
                                    const n = e / t;
                                    return u / o > n
                                        ? { width: u, height: Math.round(u / n) }
                                        : { width: Math.round(o * n), height: o };
                                })(E, A, F, D);
                                return e ? { width: `${e.width}rem`, height: `${e.height}rem` } : {};
                            }, [D, F, A, E]);
                        return (
                            (0, r.useEffect)(() => {
                                if (m && B.current) {
                                    const e = () => {
                                            let e = 0;
                                            const u = (function (u) {
                                                    let o = 0;
                                                    return [
                                                        function u() {
                                                            ((() => {
                                                                if (B.current) {
                                                                    const u = B.current,
                                                                        o = u.currentTime,
                                                                        n = u.duration;
                                                                    e !== o &&
                                                                        (t.changeTimeHandlers.forEach((e) =>
                                                                            e({ currentTime: o, duration: n }),
                                                                        ),
                                                                        (e = o));
                                                                }
                                                            })(),
                                                                (o = requestAnimationFrame(u)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(o);
                                                        },
                                                    ];
                                                })(),
                                                o = u[0],
                                                n = u[1];
                                            return (o(), n);
                                        },
                                        t = { changeTimeHandlers: [], changeTimeLoop: e() },
                                        u = (e) => (
                                            t.changeTimeHandlers.push(e),
                                            () => {
                                                const u = t.changeTimeHandlers,
                                                    o = u.indexOf(e);
                                                o < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : u.splice(o, 1);
                                            }
                                        ),
                                        n = (e) => {
                                            B.current && (B.current.currentTime = (0, o.u)(0, B.current.duration, e));
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = B.current) ? void 0 : e.pause();
                                        },
                                        a = () => {
                                            (r(), n(0));
                                        },
                                        i = () => {
                                            ((t.changeTimeHandlers = []),
                                                null == t.changeTimeLoop || t.changeTimeLoop());
                                        };
                                    return (
                                        m({
                                            on: (e, t) => {
                                                var u;
                                                return (
                                                    null == (u = B.current) || u.addEventListener(e, t),
                                                    () => {
                                                        var u;
                                                        return null == (u = B.current)
                                                            ? void 0
                                                            : u.removeEventListener(e, t);
                                                    }
                                                );
                                            },
                                            off: (e, t) => {
                                                var u;
                                                return (
                                                    null == (u = B.current) || u.removeEventListener(e, t),
                                                    () => {
                                                        var u;
                                                        return null == (u = B.current)
                                                            ? void 0
                                                            : u.removeEventListener(e, t);
                                                    }
                                                );
                                            },
                                            play: () => {
                                                var e;
                                                return null == (e = B.current) ? void 0 : e.play();
                                            },
                                            pause: r,
                                            stop: a,
                                            cleanup: i,
                                            getCurrentTime: () => {
                                                var e;
                                                return null == (e = B.current) ? void 0 : e.currentTime;
                                            },
                                            getDuration: () => {
                                                var e;
                                                return null == (e = B.current) ? void 0 : e.duration;
                                            },
                                            setCurrentTime: n,
                                            domRef: B.current,
                                            onChangeTime: u,
                                        }),
                                        () => {
                                            (i(), m(void 0));
                                        }
                                    );
                                }
                            }, [m]),
                            (0, r.useEffect)(() => {
                                if (B.current)
                                    return (
                                        l && B.current.play(),
                                        () => {
                                            B.current && B.current.pause();
                                        }
                                    );
                            }, []),
                            a().createElement(
                                'video',
                                s({ src: t, className: u, loop: d, ref: B, onClick: _, style: b }, p, {
                                    onError: p.onError,
                                }),
                            )
                        );
                    });
            },
            5026: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                const o = {
                    mt__XS: 'Box_mt__XS_0c',
                    mt__SM: 'Box_mt__SM_eb',
                    mt__SMp: 'Box_mt__SMp_cf',
                    mt__MD: 'Box_mt__MD_25',
                    mt__MDp: 'Box_mt__MDp_49',
                    mt__LG: 'Box_mt__LG_e8',
                    mt__XL: 'Box_mt__XL_83',
                    mr__XS: 'Box_mr__XS_7c',
                    mr__SM: 'Box_mr__SM_08',
                    mr__SMp: 'Box_mr__SMp_06',
                    mr__MD: 'Box_mr__MD_4a',
                    mr__MDp: 'Box_mr__MDp_b6',
                    mr__LG: 'Box_mr__LG_d0',
                    mr__XL: 'Box_mr__XL_db',
                    mb__XS: 'Box_mb__XS_bb',
                    mb__SM: 'Box_mb__SM_83',
                    mb__SMp: 'Box_mb__SMp_04',
                    mb__MD: 'Box_mb__MD_ed',
                    mb__MDp: 'Box_mb__MDp_65',
                    mb__LG: 'Box_mb__LG_c8',
                    mb__XL: 'Box_mb__XL_f8',
                    ml__XS: 'Box_ml__XS_8a',
                    ml__SM: 'Box_ml__SM_e6',
                    ml__SMp: 'Box_ml__SMp_fb',
                    ml__MD: 'Box_ml__MD_2b',
                    ml__MDp: 'Box_ml__MDp_c7',
                    ml__LG: 'Box_ml__LG_39',
                    ml__XL: 'Box_ml__XL_4a',
                };
            },
            5287: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                const o = { base: 'FormatText_base_d0' };
            },
            3393: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                const o = {
                    'paragraph-P10': 'Text_paragraph-P10_2c',
                    'paragraph-P12': 'Text_paragraph-P12_22',
                    'paragraph-P14': 'Text_paragraph-P14_a7',
                    'paragraph-P16': 'Text_paragraph-P16_90',
                    'paragraph-P18': 'Text_paragraph-P18_50',
                    'paragraph-P24': 'Text_paragraph-P24_33',
                    'heading-H14': 'Text_heading-H14_8b',
                    'heading-H15': 'Text_heading-H15_9e',
                    'heading-H18': 'Text_heading-H18_b7',
                    'heading-H20R': 'Text_heading-H20R_f6',
                    'heading-H22': 'Text_heading-H22_27',
                    'heading-H24R': 'Text_heading-H24R_be',
                    'heading-H24': 'Text_heading-H24_0c',
                    'heading-H28': 'Text_heading-H28_78',
                    'heading-H36': 'Text_heading-H36_32',
                    'heading-H56': 'Text_heading-H56_c3',
                    'heading-H73': 'Text_heading-H73_8f',
                    'heading-H144': 'Text_heading-H144_a9',
                    BLACK_REAL: 'Text_BLACK_REAL_30',
                    WHITE_REAL: 'Text_WHITE_REAL_bc',
                    WHITE: 'Text_WHITE_62',
                    WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                    WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                    PAR: 'Text_PAR_15',
                    PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                    PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                    INFO_RED: 'Text_INFO_RED_30',
                    RED: 'Text_RED_66',
                    RED_DARK: 'Text_RED_DARK_d8',
                    YELLOW: 'Text_YELLOW_ed',
                    ORANGE: 'Text_ORANGE_be',
                    CREAM: 'Text_CREAM_57',
                    BROWN: 'Text_BROWN_18',
                    GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                    GREEN: 'Text_GREEN_e3',
                    GREEN_DARK: 'Text_GREEN_DARK_f1',
                    BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                    BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                    CRED: 'Text_CRED_f7',
                    GOLD: 'Text_GOLD_28',
                    BOND: 'Text_BOND_be',
                    PROM: 'Text_PROM_65',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(u.exports, u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, o) => {
            if (!t) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, o] = deferred[s], r = !0, a = 0; a < t.length; a++)
                        (!1 & o || n >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((r = !1), o < n && (n = o));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > o; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, o];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (() => {
            var e = { 334: 0, 989: 0, 578: 0, 251: 0, 897: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var o,
                        n,
                        [r, a, i] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (o in a) __webpack_require__.o(a, o) && (__webpack_require__.m[o] = a[o]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        ((n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(1976));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
