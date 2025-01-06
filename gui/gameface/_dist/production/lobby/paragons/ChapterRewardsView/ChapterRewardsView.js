(() => {
    var __webpack_modules__ = {
            3779: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => F });
                var r = t(6483),
                    n = t.n(r),
                    a = t(9887),
                    s = t.n(a),
                    i = t(3377),
                    o = t(6179),
                    l = t.n(o),
                    c = t(5026);
                const E = [
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                Object.keys(s());
                const _ = {
                        XL: { mt: c.Z.mt__XL, mr: c.Z.mr__XL, mb: c.Z.mb__XL, ml: c.Z.ml__XL },
                        LG: { mt: c.Z.mt__LG, mr: c.Z.mr__LG, mb: c.Z.mb__LG, ml: c.Z.ml__LG },
                        MDp: { mt: c.Z.mt__MDp, mr: c.Z.mr__MDp, mb: c.Z.mb__MDp, ml: c.Z.ml__MDp },
                        MD: { mt: c.Z.mt__MD, mr: c.Z.mr__MD, mb: c.Z.mb__MD, ml: c.Z.ml__MD },
                        SMp: { mt: c.Z.mt__SMp, mr: c.Z.mr__SMp, mb: c.Z.mb__SMp, ml: c.Z.ml__SMp },
                        SM: { mt: c.Z.mt__SM, mr: c.Z.mr__SM, mb: c.Z.mb__SM, ml: c.Z.ml__SM },
                        XS: { mt: c.Z.mt__XS, mr: c.Z.mr__XS, mb: c.Z.mb__XS, ml: c.Z.ml__XS },
                    },
                    A = (Object.keys(_), ['mt', 'mr', 'mb', 'ml']),
                    d = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    F = (0, i.ZP)((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            a = e.m,
                            s = e.mt,
                            i = void 0 === s ? a : s,
                            F = e.mr,
                            D = void 0 === F ? a : F,
                            B = e.mb,
                            C = void 0 === B ? a : B,
                            g = e.ml,
                            p = void 0 === g ? a : g,
                            h = e.column,
                            v = e.row,
                            f = e.flexDirection,
                            b = void 0 === f ? (h ? 'column' : v && 'row') || void 0 : f,
                            w = e.flexStart,
                            S = e.center,
                            R = e.flexEnd,
                            x = e.spaceBetween,
                            L = e.spaceAround,
                            T = e.justifyContent,
                            M =
                                void 0 === T
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (R && 'flex-end') ||
                                      (x && 'space-between') ||
                                      (L && 'space-around') ||
                                      void 0
                                    : T,
                            y = e.alignItems,
                            P = void 0 === y ? (w ? 'flex-start' : S && 'center') || (R && 'flex-end') || void 0 : y,
                            O = e.alignSelf,
                            N = e.wrap,
                            k = e.flexWrap,
                            I = void 0 === k ? (N ? 'wrap' : void 0) : k,
                            H = e.grow,
                            U = e.shrink,
                            G = e.flex,
                            W = void 0 === G ? (H || U ? `${H ? 1 : 0} ${U ? 1 : 0} auto` : void 0) : G,
                            $ = e.style,
                            j = e.children,
                            X = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, E);
                        const z = (0, o.useMemo)(() => {
                                const e = { mt: i, mr: D, mb: C, ml: p },
                                    u = ((e) =>
                                        A.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(_[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        A.reduce((u, t) => {
                                            const r = e[t];
                                            return 'number' == typeof r && (u[d[t]] = r + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, $, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: W,
                                        alignSelf: O,
                                        display: b || P ? 'flex' : void 0,
                                        flexDirection: b,
                                        flexWrap: I,
                                        justifyContent: M,
                                        alignItems: P,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, D, C, p, $, W, O, b, I, M, P]),
                            V = z.computedStyle,
                            q = z.computedClassNames;
                        return l().createElement('div', m({ className: n()(c.Z.base, ...q, u), style: V }, X), j);
                    });
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    s = t.n(a),
                    i = t(3649),
                    o = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: a = i.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              r.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  n().createElement(
                                      'div',
                                      { className: s()(o.Z.base, t), key: `${u}-${l}` },
                                      (0, i.Uw)(u, a, e).map((e, u) =>
                                          n().createElement(r.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    a = t(1043),
                    s = t(5262);
                const i = r.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, a.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6536),
                    s = t(3495),
                    i = t(1043),
                    o = t(5262),
                    l = t(3138);
                const c = (0, r.memo)(({ children: e }) => {
                    const u = (0, r.useContext)(s.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        E = t[1],
                        m = (0, r.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                r = l.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: r }, (0, o.T)(t, r, i.j)));
                        }, []);
                    (0, a.Z)(() => {
                        engine.on('clientResized', m);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', m), [m]);
                    const _ = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    a = t(3495);
                const s = ['children'];
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, s);
                    const i = (0, r.useContext)(a.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        E = i.small,
                        m = i.extraSmall,
                        _ = i.extraLargeWidth,
                        A = i.largeWidth,
                        d = i.mediumWidth,
                        F = i.smallWidth,
                        D = i.extraSmallWidth,
                        B = i.extraLargeHeight,
                        C = i.largeHeight,
                        g = i.mediumHeight,
                        p = i.smallHeight,
                        h = i.extraSmallHeight,
                        v = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && m) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, n.H)(u, t, v);
                        if (t.largeWidth && A) return (0, n.H)(u, t, v);
                        if (t.mediumWidth && d) return (0, n.H)(u, t, v);
                        if (t.smallWidth && F) return (0, n.H)(u, t, v);
                        if (t.extraSmallWidth && D) return (0, n.H)(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
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
                (0, r.memo)(i);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => r });
                const r = (e, u, t) =>
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
                t.d(u, { YN: () => n.Y, ZN: () => r.Z });
                t(6010);
                var r = t(1039),
                    n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var r;
                function n(e, u, t) {
                    const r = (function (e, u) {
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
                        n = (function (e, u) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                t.d(u, { T: () => n }),
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
                    })(r || (r = {}));
            },
            7613: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => f });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3779),
                    s = t(280),
                    i = t(3532),
                    o = t.n(i),
                    l = t(9887),
                    c = t.n(l),
                    E = t(3377),
                    m = t(6179),
                    _ = t.n(m),
                    A = t(3393);
                const d = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const D = Object.keys(o()),
                    B = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    C = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    g = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    p = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    h =
                        (Object.keys(p),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': B,
                            'heading-H36': B,
                            'heading-H28': C,
                            'heading-H24': C,
                            'heading-H24R': C,
                            'heading-H22': C,
                            'heading-H20R': C,
                            'heading-H18': C,
                            'heading-H15': g,
                            'heading-H14': g,
                            'paragraph-P24': C,
                            'paragraph-P18': C,
                            'paragraph-P16': C,
                            'paragraph-P14': g,
                            'paragraph-P12': g,
                            'paragraph-P10': g,
                        }),
                    v =
                        (Object.keys(h),
                        (e) =>
                            e
                                ? ((e) => D.includes(e))(e)
                                    ? { colorClassName: A.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    f = (0, E.ZP)((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            i = e.color,
                            o = e.m,
                            l = e.mt,
                            c = void 0 === l ? o : l,
                            E = e.mr,
                            D = void 0 === E ? o : E,
                            B = e.mb,
                            C = void 0 === B ? o : B,
                            g = e.ml,
                            p = void 0 === g ? o : g,
                            f = e.style,
                            b = e.format,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, d);
                        const S = (0, m.useMemo)(() => {
                                const e = v(i),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, f, r), colorClassName: u };
                            }, [f, i]),
                            R = S.computedStyle,
                            x = S.colorClassName;
                        return _().createElement(
                            a.ZP,
                            F(
                                {
                                    className: n()(A.Z.base, t && A.Z[t], x, r),
                                    style: R,
                                    mt: !0 === c ? h[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === D ? h[t || 'paragraph-P16'].mr : D,
                                    mb: !0 === C ? h[t || 'paragraph-P16'].mb : C,
                                    ml: !0 === p ? h[t || 'paragraph-P16'].ml : p,
                                },
                                w,
                            ),
                            void 0 !== b ? _().createElement(s.z, F({}, b, { text: u })) : u,
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
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => i, onResize: () => a });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const i = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        i = s[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    });
                var r = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => d,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
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
                function d() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
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
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
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
                const b = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? n : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            3377: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => c });
                var r = t(5415),
                    n = t(6179),
                    a = t.n(n);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    i = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    o = [r.cJ.ExtraLarge, r.cJ.Large, r.cJ.Medium, r.cJ.Small, r.cJ.ExtraSmall],
                    l = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (i(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = o.indexOf(u),
                                    i = (-1 !== a ? s.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = i ? e[i] : void 0;
                                return (t[n] = void 0 !== l ? l : e[n]), t;
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => s.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    c = (e, u = l) => {
                        const t = (
                            (e, u = l) =>
                            (t) => {
                                const s = (0, r.GS)().mediaSize,
                                    i = (0, n.useMemo)(() => u(t, s), [t, s]);
                                return a().createElement(e, i);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => i(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(6179);
                const n = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var r = t(6179),
                    n = t(7739),
                    a = t(1043);
                let s, i, o;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, r.useContext)(n.YN),
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
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
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
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
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
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
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
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(r || (r = {})),
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
                    })(n || (n = {}));
            },
            3649: (e, u, t) => {
                'use strict';
                let r;
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                t.d(u, { BN: () => n, Uw: () => E, v2: () => r }),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(r || (r = {}));
                const a = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    s = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    i = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? a : s, []),
                    o = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    l = ['zh_cn', 'zh_sg', 'zh_tw'],
                    c = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return l.includes(t)
                            ? o(e)
                            : ((e, u = r.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return i(a, /( )/, u).forEach((e) => (t = t.concat(i(e, n, r.left)))), t;
                              })(e, u);
                    },
                    E = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : c(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => l, Z5: () => s, B0: () => o, ry: () => B });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const d = ['args'];
                function F(e, u, t, r, n, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            F(a, r, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(a, r, n, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, d);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    g = () => C(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(7572);
                const v = n.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                m = i.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(m),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            5636: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => Ee,
                        Bar: () => oe,
                        DefaultScroll: () => ce,
                        Direction: () => z,
                        defaultSettings: () => V,
                        useHorizontalScrollApi: () => Y,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => xe, Bar: () => we, Default: () => Re, useVerticalScrollApi: () => me });
                var a = t(7739),
                    s = t(6179),
                    i = t.n(s),
                    o = t(6483),
                    l = t.n(o),
                    c = t(926),
                    E = t.n(c),
                    m = t(5415);
                const _ = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const d = {
                        [m.fd.ExtraSmall]: '',
                        [m.fd.Small]: E().SMALL_WIDTH,
                        [m.fd.Medium]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH}`,
                        [m.fd.Large]: `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH}`,
                        [m.fd.ExtraLarge]:
                            `${E().SMALL_WIDTH} ${E().MEDIUM_WIDTH} ${E().LARGE_WIDTH} ${E().EXTRA_LARGE_WIDTH}`,
                    },
                    F = {
                        [m.Aq.ExtraSmall]: '',
                        [m.Aq.Small]: E().SMALL_HEIGHT,
                        [m.Aq.Medium]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT}`,
                        [m.Aq.Large]: `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT}`,
                        [m.Aq.ExtraLarge]:
                            `${E().SMALL_HEIGHT} ${E().MEDIUM_HEIGHT} ${E().LARGE_HEIGHT} ${E().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [m.cJ.ExtraSmall]: '',
                        [m.cJ.Small]: E().SMALL,
                        [m.cJ.Medium]: `${E().SMALL} ${E().MEDIUM}`,
                        [m.cJ.Large]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE}`,
                        [m.cJ.ExtraLarge]: `${E().SMALL} ${E().MEDIUM} ${E().LARGE} ${E().EXTRA_LARGE}`,
                    },
                    B = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, _);
                        const n = (0, m.GS)(),
                            a = n.mediaWidth,
                            s = n.mediaHeight,
                            o = n.mediaSize;
                        return i().createElement('div', A({ className: l()(t, d[a], F[s], D[o]) }, r), u);
                    },
                    C = ['children'];
                const g = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, C);
                    return i().createElement(a.ZN, null, i().createElement(B, t, u));
                };
                var p = t(493),
                    h = t.n(p);
                function v(e) {
                    engine.call('PlaySound', e);
                }
                const f = {
                        playHighlight() {
                            v('highlight');
                        },
                        playClick() {
                            v('play');
                        },
                        playYes() {
                            v('yes1');
                        },
                    },
                    b = {
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
                    w = [
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
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                class x extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && v(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && v(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, w)),
                            A = l()(b.base, b[`base__${a}`], b[`base__${n}`], null == s ? void 0 : s.base),
                            d = l()(b.icon, b[`icon__${a}`], b[`icon__${n}`], null == s ? void 0 : s.icon),
                            F = l()(b.glow, null == s ? void 0 : s.glow),
                            D = l()(b.caption, b[`caption__${a}`], null == s ? void 0 : s.caption),
                            B = l()(b.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            S(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== a && i().createElement('div', { className: b.shine }),
                            i().createElement('div', { className: d }, i().createElement('div', { className: F })),
                            i().createElement('div', { className: D }, u),
                            r && i().createElement('div', { className: B }, r),
                        );
                    }
                }
                x.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var L = t(3138),
                    T = t(5521),
                    M = t(4179);
                const y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function P(e = T.n.NONE, u = y, t = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== T.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (L.O.view.isEventHandled()) return;
                                L.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var O = t(3403),
                    N = t(1112);
                const k = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    I = (e, u, t) => (t < e ? e : t > u ? u : t),
                    H = [];
                function U(e) {
                    const u = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, u.current)(...e), H)
                    );
                }
                function G(e, u, t = []) {
                    const r = (0, s.useRef)(0),
                        n = (0, s.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, s.useEffect)(() => n, [n]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, s.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, a),
                        n,
                    ];
                }
                function W(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return $(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return $(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function $(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                function j(e, u, t) {
                    const r = (0, s.useMemo)(
                        () =>
                            (function (e, u, t, r) {
                                let n,
                                    a = !1,
                                    s = 0;
                                function i() {
                                    n && clearTimeout(n);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        (s = Date.now()), t.apply(l, o);
                                    }
                                    a ||
                                        (r && !n && E(),
                                        i(),
                                        void 0 === r && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  r
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : E,
                                                  void 0 === r ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        i(), (a = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, s.useEffect)(() => r.cancel, [r]), r;
                }
                var X = t(7030);
                let z;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(z || (z = {}));
                const V = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    q = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const i = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return I(n, a, t);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? V : l,
                                E = (0, s.useRef)(null),
                                m = (0, s.useRef)(null),
                                _ = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var r, n = W(u(e).values()); !(r = n()).done; ) (0, r.value)(...t);
                                        };
                                    return (0, s.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = j(
                                    () => {
                                        L.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                d = (0, X.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), a && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = d[0],
                                D = d[1],
                                B = (0, s.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = F.scrollPosition.get(),
                                            a = (null != (r = F.scrollPosition.goal) ? r : 0) - n;
                                        return i(e, u * t + a + n);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            D.start({
                                                scrollPosition: i(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(r, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                g = (0, s.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = B(u, e, r);
                                        C(a);
                                    },
                                    [C, B, c.step],
                                ),
                                p = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && g(r(e)),
                                            E.current && _.trigger('mouseWheel', e, F.scrollPosition, u(E.current));
                                    },
                                    [F.scrollPosition, g, _],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, s.useRef)(),
                                        r = (0, s.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        k(() => {
                                            const e = E.current;
                                            e &&
                                                (C(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                v = U(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: p,
                                    applyScroll: C,
                                    applyStepTo: g,
                                    contentRef: E,
                                    wrapperRef: m,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, C, g, _.off, _.on, v, p, D, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Y = q({
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
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? z.Next : z.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Z = 'HorizontalBar_base_49',
                    K = 'HorizontalBar_base__nonActive_82',
                    Q = 'HorizontalBar_leftButton_5f',
                    J = 'HorizontalBar_rightButton_03',
                    ee = 'HorizontalBar_track_0d',
                    ue = 'HorizontalBar_thumb_fd',
                    te = 'HorizontalBar_rail_32',
                    re = 'disable',
                    ne = { pending: !1, offset: 0 },
                    ae = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    se = () => {},
                    ie = (e, u) => Math.max(20, e.offsetWidth * u),
                    oe = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ae, onDrag: r = se }) => {
                        const n = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(ne),
                            A = _[0],
                            d = _[1],
                            F = (0, s.useCallback)(
                                (e) => {
                                    d(e),
                                        E.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [r],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    l = I(0, 1, s / (n - r)),
                                    m = (u.offsetWidth - ie(u, i)) * l;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (a.current && o.current && c.current && E.current) {
                                            if (0 === e)
                                                return a.current.classList.add(re), void o.current.classList.remove(re);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(re), void o.current.classList.add(re);
                                            var u, t;
                                            a.current.classList.remove(re), o.current.classList.remove(re);
                                        }
                                    })(m);
                            },
                            B = U(() => {
                                (() => {
                                    const u = E.current,
                                        t = c.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    (u.style.width = `${ie(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(K) : n.current.classList.remove(K));
                                })(),
                                    D();
                            });
                        (0, s.useEffect)(() => k(B)),
                            (0, s.useEffect)(
                                () =>
                                    k(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = se;
                                        const r = () => {
                                            t(), (t = k(B));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = c.current,
                                            s = E.current;
                                        if (!n || !a || !s) return;
                                        const i = u.screenX - A.offset - a.getBoundingClientRect().x,
                                            o = (i / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), F(ne);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, A.offset, A.pending, r, F]);
                        const C = G((u) => e.applyStepTo(u), m, [e]),
                            g = C[0],
                            p = C[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (e) => {
                            e.target.classList.contains(re) || v('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(Z, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(Q, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(re) || 0 !== e.button || (v('play'), g(z.Next));
                                },
                                onMouseUp: p,
                                ref: a,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(ee, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if ((v('play'), u.target === r))
                                                F({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = E.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? z.Prev : z.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: E, className: l()(ue, u.thumb) }),
                                i().createElement('div', { className: l()(te, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(J, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(re) || 0 !== e.button || (v('play'), g(z.Prev));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    le = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ce = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: a,
                        scrollClassName: o,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const m = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: l()(le.base, e.base) });
                            }, [r]),
                            _ = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: l()(le.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(le.defaultScrollArea, n) },
                                i().createElement(Ee, { className: o, api: _, classNames: a }, e),
                            ),
                            i().createElement(oe, { getStepByRailClick: c, api: u, onDrag: E, classNames: m }),
                        );
                    },
                    Ee = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, s.useEffect)(() => k(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(le.base, u), style: n },
                            i().createElement(
                                'div',
                                {
                                    className: l()(le.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(le.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (Ee.Bar = oe),
                    (Ee.Default = ce),
                    (Ee.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, s.useEffect)(() => k(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(le.base, u) },
                            i().createElement(
                                'div',
                                { className: l()(le.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: l()(le.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const me = q({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? z.Next : z.Prev),
                    }),
                    _e = 'VerticalBar_base_f3',
                    Ae = 'VerticalBar_base__nonActive_42',
                    de = 'VerticalBar_topButton_d7',
                    Fe = 'VerticalBar_bottomButton_06',
                    De = 'VerticalBar_track_df',
                    Be = 'VerticalBar_thumb_32',
                    Ce = 'VerticalBar_rail_43',
                    ge = 'disable',
                    pe = () => {},
                    he = { pending: !1, offset: 0 },
                    ve = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    fe = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    be = (e, u) => Math.max(20, e.offsetHeight * u),
                    we = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ve, onDrag: r = pe }) => {
                        const n = (0, s.useRef)(null),
                            a = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            E = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            _ = (0, s.useState)(he),
                            A = _[0],
                            d = _[1],
                            F = (0, s.useCallback)(
                                (e) => {
                                    d(e),
                                        E.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [r],
                            ),
                            D = U(() => {
                                const u = E.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${be(t, s)}px`),
                                    u.classList.add(Be),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(Ae) : n.current.classList.remove(Ae)),
                                    s
                                );
                            }),
                            B = U(() => {
                                const u = c.current,
                                    t = E.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    l = I(0, 1, s / (n - r)),
                                    m = (u.offsetHeight - be(u, i)) * l;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (a.current && o.current && c.current && E.current) {
                                            if (0 === e)
                                                return a.current.classList.add(ge), void o.current.classList.remove(ge);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(ge), void o.current.classList.add(ge);
                                            var u, t;
                                            a.current.classList.remove(ge), o.current.classList.remove(ge);
                                        }
                                    })(m);
                            }),
                            C = U(() => {
                                fe(e, () => {
                                    D(), B();
                                });
                            });
                        (0, s.useEffect)(() => k(C)),
                            (0, s.useEffect)(() => {
                                const u = () => {
                                    fe(e, () => {
                                        B();
                                    });
                                };
                                let t = pe;
                                const r = () => {
                                    t(), (t = k(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!A.pending) return;
                                const u = (u) => {
                                        fe(e, (t) => {
                                            const n = c.current,
                                                a = E.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const i = u.screenY - A.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), F(he);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, A.offset, A.pending, r, F]);
                        const g = G((u) => e.applyStepTo(u), m, [e]),
                            p = g[0],
                            h = g[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(ge) || v('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(_e, u.base), ref: n, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(de, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ge) || 0 !== e.button || (v('play'), p(z.Next));
                                },
                                ref: a,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(De, u.track),
                                    onMouseDown: (u) => {
                                        const r = E.current;
                                        if (r && 0 === u.button)
                                            if ((v('play'), u.target === r))
                                                F({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        fe(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? z.Prev : z.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: E, className: u.thumb }),
                                i().createElement('div', { className: l()(Ce, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(Fe, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ge) || 0 !== e.button || (v('play'), p(z.Prev));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Se = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Re = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: a,
                        scrollClassNames: o,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const m = (0, s.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: l()(Se.base, e.base) });
                            }, [r]),
                            _ = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: l()(Se.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Se.area, n) },
                                i().createElement(xe, { className: a, classNames: o, api: _ }, e),
                            ),
                            i().createElement(we, { getStepByRailClick: c, api: u, onDrag: E, classNames: m }),
                        );
                    },
                    xe = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, s.useEffect)(() => k(r.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Se.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Se.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                xe.Default = Re;
                const Le = { Vertical: n, Horizontal: r },
                    Te = { type: 'idle' };
                const Me = 'LevelsRewards_base_35',
                    ye = 'LevelsRewards_header_88',
                    Pe = 'LevelsRewards_rewards_05',
                    Oe = 'LevelsRewards_scrollArea_6e',
                    Ne = 'LevelsRewards_rewardsWrapper_e8',
                    ke = 'LevelsRewards_scrollWrapper_42',
                    Ie = 'LevelsRewards_scrollContent_f8',
                    He = 'LevelsRewards_scrollBar_d3',
                    Ue = 'RewardsColumn_base_14',
                    Ge = 'RewardsColumn_particlesLine_dc',
                    We = 'RewardsColumn_particlesLine__right_d2',
                    $e = 'RewardsColumn_rewards_8c',
                    je = 'RewardsColumn_rewardItem_9b',
                    Xe = {
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
                let ze, Ve;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ze || (ze = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Ve || (Ve = {}));
                const qe = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: a,
                    soundHover: o,
                    soundClick: c,
                    onMouseEnter: E,
                    onMouseMove: m,
                    onMouseDown: _,
                    onMouseUp: A,
                    onMouseLeave: d,
                    onClick: F,
                }) => {
                    const D = (0, s.useRef)(null),
                        B = (0, s.useState)(t),
                        C = B[0],
                        g = B[1],
                        p = (0, s.useState)(!1),
                        h = p[0],
                        f = p[1],
                        b = (0, s.useState)(!1),
                        w = b[0],
                        S = b[1],
                        x = (0, s.useCallback)(() => {
                            n || (D.current && (D.current.focus(), g(!0)));
                        }, [n]),
                        L = (0, s.useCallback)(
                            (e) => {
                                C && null !== D.current && !D.current.contains(e.target) && g(!1);
                            },
                            [C],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                n || (F && F(e));
                            },
                            [n, F],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                n || (null !== o && v(o), E && E(e), S(!0));
                            },
                            [n, o, E],
                        ),
                        y = (0, s.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                n || (A && A(e), f(!1));
                            },
                            [n, A],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                n || (null !== c && v(c), _ && _(e), t && x(), f(!0));
                            },
                            [n, c, _, x, t],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                n || (d && d(e), f(!1));
                            },
                            [n, d],
                        ),
                        k = l()(
                            Xe.base,
                            Xe[`base__${r}`],
                            {
                                [Xe.base__disabled]: n,
                                [Xe[`base__${u}`]]: u,
                                [Xe.base__focus]: C,
                                [Xe.base__highlightActive]: h,
                                [Xe.base__firstHover]: w,
                            },
                            a,
                        ),
                        I = l()(Xe.state, Xe.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, s.useEffect)(() => {
                            g(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: D,
                                className: k,
                                onMouseEnter: M,
                                onMouseMove: y,
                                onMouseUp: P,
                                onMouseDown: O,
                                onMouseLeave: N,
                                onClick: T,
                            },
                            r !== ze.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: Xe.back }),
                                    i().createElement('span', { className: Xe.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: I },
                                i().createElement('span', { className: Xe.stateDisabled }),
                                i().createElement('span', { className: Xe.stateHighlightHover }),
                                i().createElement('span', { className: Xe.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: Xe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                qe.defaultProps = { type: ze.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ye = (0, s.memo)(qe);
                let Ze, Ke, Qe, Je, eu, uu, tu;
                !(function (e) {
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
                        (e.Currency = 'currency'),
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
                        (e.SelectableBonus = 'selectableBonus'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.Branch = 'branch'),
                        (e.VehicleSelect = 'vehicleSelect'),
                        (e.StyleProgress = 'styleProgress'),
                        (e.ParagonsUnlocks = 'paragonsUnlocks');
                })(Ze || (Ze = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(Ke || (Ke = {})),
                    (function (e) {
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
                            (e.S48x48 = 's48x48');
                    })(Qe || (Qe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Je || (Je = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(eu || (eu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(uu || (uu = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(tu || (tu = {}));
                class ru extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = M.B3.GOLD;
                        else e = M.B3.INTEGRAL;
                        const u = M.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ru.defaultProps = { format: 'integral' };
                const nu = [
                        Ze.Items,
                        Ze.Equipment,
                        Ze.Xp,
                        Ze.XpFactor,
                        Ze.Blueprints,
                        Ze.BlueprintsAny,
                        Ze.Goodies,
                        Ze.Berths,
                        Ze.Slots,
                        Ze.Tokens,
                        Ze.CrewSkins,
                        Ze.CrewBooks,
                        Ze.Customizations,
                        Ze.CreditsFactor,
                        Ze.TankmenXp,
                        Ze.TankmenXpFactor,
                        Ze.FreeXpFactor,
                        Ze.BattleToken,
                        Ze.PremiumUniversal,
                        Ze.NaturalCover,
                        Ze.BpCoin,
                        Ze.BattlePassSelectToken,
                        Ze.BattlaPassFinalAchievement,
                        Ze.BattleBadge,
                        Ze.BonusX5,
                        Ze.CrewBonusX3,
                        Ze.NewYearFillers,
                        Ze.NewYearInvoice,
                        Ze.EpicSelectToken,
                        Ze.Comp7TokenWeeklyReward,
                        Ze.Comp7TokenCouponReward,
                        Ze.BattleBoosterGift,
                        Ze.CosmicLootboxCommon,
                        Ze.CosmicLootboxSilver,
                        Ze.SelectableBonus,
                    ],
                    au = [Ze.Gold, Ze.Credits, Ze.Crystal, Ze.FreeXp],
                    su = [Ze.BattlePassPoints],
                    iu = [Ze.PremiumPlus, Ze.Premium],
                    ou = (e) =>
                        nu.includes(e)
                            ? Je.MULTI
                            : au.includes(e)
                              ? Je.CURRENCY
                              : su.includes(e)
                                ? Je.NUMBER
                                : iu.includes(e)
                                  ? Je.PREMIUM_PLUS
                                  : Je.STRING,
                    lu = ['engravings', 'backgrounds'],
                    cu = ['engraving', 'background'],
                    Eu = (e, u = Qe.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case Qe.S600x450:
                                        return 'c_600x450';
                                    case Qe.S400x300:
                                        return 'c_400x300';
                                    case Qe.S296x222:
                                        return 'c_296x222';
                                    case Qe.S232x174:
                                        return 'c_232x174';
                                    case Qe.Big:
                                        return 'c_80x80';
                                    case Qe.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case Qe.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Qe.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = lu[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(cu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${a}`;
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
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    mu = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    _u = [
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
                function Au(e) {
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
                const du = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: M.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Fu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            a = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            m = void 0 !== E && E,
                            _ = e.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            d = e.isEnabled,
                            F = void 0 === d || d,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, _u);
                        const h = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, s.useMemo)(
                                () =>
                                    B ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [B],
                            ),
                            f = (0, s.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (du(t, A, { isMouseEvent: !0, on: !0, arguments: Au(r) }, v),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, A, r, v, C]),
                            b = (0, s.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        du(t, A, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, A, v, g]),
                            w = (0, s.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return F
                            ? (0, s.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == a || a(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === m && b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === m && b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    Du = ['children'];
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                const Cu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Du);
                        return i().createElement(
                            Fu,
                            Bu(
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
                    },
                    gu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const hu = R.views.common.tooltip_window.simple_tooltip_content,
                    vu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            a = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, gu);
                        const c = (0, s.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: r, note: n, alert: a });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [a, t, r, n, o]);
                        return i().createElement(
                            Fu,
                            pu(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? hu.SimpleTooltipHtmlContent('resId') : hu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const bu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = i().createElement('div', { className: t }, e);
                        if (u.header || u.body) return i().createElement(vu, u, r);
                        const n = u.contentId,
                            a = u.args,
                            s = null == a ? void 0 : a.contentId;
                        return n || s
                            ? i().createElement(Fu, fu({}, u, { contentId: n || s }), r)
                            : i().createElement(Cu, u, r);
                    },
                    wu = {
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
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    Su = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = Qe.Big,
                        special: n,
                        value: a,
                        valueType: s,
                        style: o,
                        className: c,
                        classNames: E,
                        tooltipArgs: m,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case eu.BATTLE_BOOSTER:
                                    case eu.BATTLE_BOOSTER_REPLACE:
                                        return uu.BATTLE_BOOSTER;
                                }
                            })(n),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case eu.BATTLE_BOOSTER:
                                        return tu.BATTLE_BOOSTER;
                                    case eu.BATTLE_BOOSTER_REPLACE:
                                        return tu.BATTLE_BOOSTER_REPLACE;
                                    case eu.BUILT_IN_EQUIPMENT:
                                        return tu.BUILT_IN_EQUIPMENT;
                                    case eu.EQUIPMENT_PLUS:
                                        return tu.EQUIPMENT_PLUS;
                                    case eu.EQUIPMENT_TROPHY_BASIC:
                                        return tu.EQUIPMENT_TROPHY_BASIC;
                                    case eu.EQUIPMENT_TROPHY_UPGRADED:
                                        return tu.EQUIPMENT_TROPHY_UPGRADED;
                                    case eu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return tu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case eu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return tu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case eu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return tu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case eu.PROGRESSION_STYLE_UPGRADED_1:
                                        return tu.PROGRESSION_STYLE_UPGRADED_1;
                                    case eu.PROGRESSION_STYLE_UPGRADED_2:
                                        return tu.PROGRESSION_STYLE_UPGRADED_2;
                                    case eu.PROGRESSION_STYLE_UPGRADED_3:
                                        return tu.PROGRESSION_STYLE_UPGRADED_3;
                                    case eu.PROGRESSION_STYLE_UPGRADED_4:
                                        return tu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Je.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Je.CURRENCY:
                                    case Je.NUMBER:
                                        return i().createElement(ru, { format: 'integral', value: Number(e) });
                                    case Je.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, s);
                        return i().createElement(
                            'div',
                            { className: l()(wu.base, wu[`base__${r}`], c), style: o },
                            i().createElement(
                                bu,
                                { tooltipArgs: m, className: wu.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: l()(wu.image, null == E ? void 0 : E.image) },
                                        A &&
                                            i().createElement('div', {
                                                className: l()(wu.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${A}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            i().createElement('div', {
                                                className: l()(wu.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            i().createElement('div', {
                                                className: l()(wu.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    wu.info,
                                                    wu[`info__${e}`],
                                                    s === Je.MULTI && wu.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            F,
                                        ),
                                ),
                            ),
                            t &&
                                i().createElement(
                                    bu,
                                    { tooltipArgs: _ },
                                    i().createElement('div', {
                                        className: l()(wu.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var Ru = t(7613),
                    xu = t(5190);
                const Lu = 'RewardsList_base_7e',
                    Tu = 'RewardsList_base__vertical_9c',
                    Mu = 'RewardsList_reward_89',
                    yu = 'RewardsList_reward__vertical_ff',
                    Pu = 'RewardsList_reward__disabled_3f',
                    Ou = 'RewardsList_rewardSelect_d1',
                    Nu = 'RewardsList_btn_5a',
                    ku = 'RewardsList_label_66',
                    Iu = R.strings.paragons.allRewards,
                    Hu = i().memo(
                        ({
                            rewardsData: e,
                            isLevelAchieved: u,
                            currentLevel: t,
                            isVertical: r = !1,
                            classMix: n,
                            rewardItemClassMix: a,
                            onOpenOverlay: o,
                        }) => {
                            const c = (0, m.GS)().mediaSize,
                                E = c >= m.cJ.Large ? Qe.S180x135 : Qe.Big,
                                _ = l()(Lu, r && Tu, n),
                                A = l()(Mu, r && yu, a),
                                d = (0, s.useCallback)(
                                    (e, r) => {
                                        if (r)
                                            return i().createElement(
                                                'div',
                                                { className: Ou },
                                                u
                                                    ? i().createElement(
                                                          Ye,
                                                          {
                                                              size: Ve.small,
                                                              type: ze.main,
                                                              mixClass: Nu,
                                                              onClick: () => o(t, e.value),
                                                          },
                                                          i().createElement(Ru.ZP, { text: Iu.button.select() }),
                                                      )
                                                    : i().createElement(
                                                          Ye,
                                                          {
                                                              size: Ve.small,
                                                              type: ze.primary,
                                                              mixClass: Nu,
                                                              onClick: () => o(t, e.value),
                                                          },
                                                          i().createElement(Ru.ZP, { text: Iu.button.list() }),
                                                      ),
                                            );
                                        const n =
                                            e.name === Ze.Vehicles &&
                                            c >= m.cJ.Large &&
                                            i().createElement(xu.M2, {
                                                isElite: e.isElite,
                                                vehicleName: e.label,
                                                vehicleType: e.type,
                                                vehicleLvl: e.vehicleLvl,
                                                size: xu.uA.ExtraSmall,
                                            });
                                        return i().createElement('div', { className: ku }, n);
                                    },
                                    [t, u, c, o],
                                );
                            return i().createElement(
                                'div',
                                { className: _ },
                                e.map((e, t) =>
                                    ((e, t) => {
                                        const r = e.name === Ze.Vehicles,
                                            n = e.name === Ze.VehicleSelect,
                                            a = r && c < m.cJ.Large,
                                            s = u && !n;
                                        return i().createElement(
                                            'div',
                                            { key: t, className: l()(A, s && Pu) },
                                            i().createElement(Su, {
                                                size: E,
                                                name: e.name,
                                                image: e.image(E),
                                                value: a ? e.label : void 0,
                                                valueType: ou(e.name),
                                                tooltipArgs: e.tooltipArgs,
                                            }),
                                            d(e, n),
                                        );
                                    })(e, t),
                                ),
                            );
                        },
                    ),
                    Uu = [],
                    Gu = (0, s.memo)(
                        ({ isCompleted: e, rewards: u, isLastColumn: t, currentLevel: r, onOpenOverlay: n }) => {
                            const a = l()(Ge, !t && We);
                            return i().createElement(
                                'div',
                                { className: Ue },
                                i().createElement('div', { className: a }),
                                i().createElement(
                                    'div',
                                    { className: $e },
                                    i().createElement(Hu, {
                                        currentLevel: r,
                                        onOpenOverlay: n,
                                        rewardsData: u || Uu,
                                        rewardItemClassMix: je,
                                        isLevelAchieved: e,
                                        isVertical: !0,
                                    }),
                                ),
                            );
                        },
                    ),
                    Wu = 'RewardsHeader_base_92',
                    $u = 'RewardsHeader_level_55',
                    ju = 'RewardsHeader_level__achieved_30',
                    Xu = 'RewardsHeader_level__current_f0',
                    zu = 'RewardsHeader_numeral_8d',
                    Vu = 'RewardsHeader_numeral__disabled_af',
                    qu = 'RewardsHeader_achieved_8d',
                    Yu = 'RewardsHeader_backlight_53',
                    Zu = 'RewardsHeader_particles_0e',
                    Ku = 'RewardsHeader_particles__right_9c',
                    Qu = (0, s.memo)(({ isCompleted: e, currentLevel: u, stageLevel: t }) => {
                        const r = l()(zu, !e && u < t && Vu),
                            n = u === t && !e;
                        return i().createElement(
                            Fu,
                            {
                                contentId: R.views.lobby.paragons.tooltips.RewardsHeaderTooltip('resId'),
                                args: { isCompleted: e, isCurrentLevel: n },
                            },
                            i().createElement(
                                'div',
                                { className: Wu },
                                n &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('div', { className: Zu }),
                                        i().createElement('div', { className: Yu }),
                                        i().createElement('div', { className: l()(Zu, Ku) }),
                                    ),
                                i().createElement(
                                    'div',
                                    { className: l()($u, e && ju, n && Xu) },
                                    i().createElement('div', { className: r }, t),
                                ),
                                e && i().createElement('div', { className: qu }),
                            ),
                        );
                    }),
                    Ju = (0, s.memo)(({ currentLevel: e, allRewards: u, getLevelRewards: t, onOpenOverlay: r }) => {
                        const n = Y();
                        !(function (e, u) {
                            const t = e.contentRef,
                                r = e.wrapperRef,
                                n = e.scrollPosition,
                                a = e.clampPosition,
                                i = e.animationScroll,
                                o = e.events,
                                l = (0, s.useState)(Te),
                                c = l[0],
                                E = l[1];
                            (0, s.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                            }, [t, c.type]),
                                (0, s.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = L.O.client.events.mouse.move(([e, s]) => {
                                            const o = t.current,
                                                l = r.current;
                                            if (!o || !l) return;
                                            if ('inside' === s && e.clientX < 0) return;
                                            const E = 'inside' === s ? e.clientX : e.clientX - l.offsetLeft,
                                                m = c.positionFrom - E,
                                                _ = c.previousScrollPosition + m;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(o, _),
                                                        from: { scrollPosition: i.scrollPosition.get() },
                                                    },
                                                    u && { config: u },
                                                ),
                                            );
                                        }),
                                        s = L.O.client.events.mouse.up(function () {
                                            E({ type: 'scrollingToEnd' });
                                        });
                                    return () => {
                                        e(), s();
                                    };
                                }, [i.scrollPosition, a, t, c, n, r, u]),
                                (0, s.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        E(Te);
                                    };
                                    return i.scrollPosition.idle && e(), o.on('rest', e), () => o.off('rest', e);
                                }, [i.scrollPosition, c.type, o]),
                                (0, s.useEffect)(() => {
                                    const e = t.current;
                                    if (!e) return;
                                    const u = (e) => {
                                        E({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: i.scrollPosition.get(),
                                        });
                                    };
                                    return (
                                        e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u)
                                    );
                                }, [i.scrollPosition, t]);
                        })(Object.assign({}, n));
                        return i().createElement(
                            'div',
                            { className: Me },
                            i().createElement(
                                'div',
                                { className: Oe },
                                i().createElement(
                                    Le.Horizontal.Area.Default,
                                    {
                                        api: Object.assign({}, n, { handleMouseWheel: n.handleMouseWheel }),
                                        className: Ne,
                                        classNames: { content: Ie, wrapper: ke },
                                        barClassNames: { base: He },
                                    },
                                    i().createElement(
                                        'div',
                                        {
                                            className: Pe,
                                            onMouseEnter: () => {
                                                f.playHighlight();
                                            },
                                            onMouseDown: () => {
                                                f.playClick();
                                            },
                                        },
                                        u.map((n, a) =>
                                            i().createElement(
                                                'div',
                                                { key: a },
                                                i().createElement(
                                                    'div',
                                                    { className: ye },
                                                    i().createElement(Qu, {
                                                        currentLevel: e,
                                                        stageLevel: n.number,
                                                        isCompleted: n.isCompleted,
                                                    }),
                                                ),
                                                i().createElement(Gu, {
                                                    currentLevel: a + 1,
                                                    isCompleted: n.isCompleted,
                                                    isLastColumn: a === u.length - 1,
                                                    rewards: t && t(n.number),
                                                    onOpenOverlay: r,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                function et() {
                    return !1;
                }
                console.log;
                var ut = t(9174);
                function tt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return rt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return rt(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function rt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const nt = (e) => (0 === e ? window : window.subViews.get(e));
                function at(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var st = t(3946),
                    it = t(3649);
                const ot = [Ze.Branch, Ze.VehicleSelect, Ze.ParagonsUnlocks, Ze.StyleProgress],
                    lt = (e) => ({
                        name: e.name,
                        image: (u) =>
                            ((e, u = Qe.Small) => {
                                const t = (0, it.BN)(e.vehicleName || '');
                                if (e.name === Ze.Vehicles)
                                    switch (u) {
                                        case Qe.Mini:
                                        case Qe.Small:
                                        case Qe.S48x48:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                        case Qe.Big:
                                        case Qe.S80x80:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                        case Qe.S128x100:
                                        case Qe.S180x135:
                                            return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                        case Qe.S232x174:
                                        case Qe.S296x222:
                                            return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                        case Qe.S400x300:
                                        case Qe.S600x450:
                                            return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                        default:
                                            return (
                                                console.error('Unknown vehicle image size', u, e.vehicleName),
                                                'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                            );
                                    }
                                if (e.name === Ze.TmanToken)
                                    switch (u) {
                                        case Qe.Mini:
                                        case Qe.Small:
                                        case Qe.S48x48:
                                        case Qe.Big:
                                        case Qe.S80x80:
                                            return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                        case Qe.S128x100:
                                        case Qe.S180x135:
                                        case Qe.S232x174:
                                            return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                        case Qe.S296x222:
                                            return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                        case Qe.S400x300:
                                            return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                        case Qe.S600x450:
                                            return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                        default:
                                            return (
                                                console.error('Unknown image size', u),
                                                'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                            );
                                    }
                                if (e.name === Ze.CollectionItem)
                                    switch (u) {
                                        case Qe.Mini:
                                        case Qe.Small:
                                        case Qe.S48x48:
                                            return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                        case Qe.Big:
                                        case Qe.S80x80:
                                            return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                        case Qe.S128x100:
                                        case Qe.S180x135:
                                        case Qe.S232x174:
                                            return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                        case Qe.S296x222:
                                            return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                        case Qe.S400x300:
                                            return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                        case Qe.S600x450:
                                            return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                        default:
                                            console.error('Unknown image size', u);
                                    }
                                if (e.name === Ze.StyleProgress)
                                    switch (u) {
                                        case Qe.Small:
                                        case Qe.Big:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.progressionStyle`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                if (ot.includes(e.name))
                                    switch (e.name) {
                                        case 'branch':
                                        case 'vehicleSelect':
                                        case 'paragonsUnlocks':
                                            return `R.images.gui.maps.icons.paragons.allRewards.${u}.${e.icon}`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                return Eu(e, u);
                            })(e, u),
                        value: e.value,
                        valueType: ou(e.name),
                        label: e.label,
                        tooltipArgs: mu({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                        type: e.type,
                        vehicleNation: e.nationTag,
                        vehicleLvl: e.level,
                        vehicleName: e.vehicleName,
                        vehicleCD: e.vehicleCD,
                        isElite: e.isElite,
                        isRent: e.isRent,
                        rentBattles: e.rentBattles,
                        rentDays: e.rentDays,
                        isCompensation: e.isCompensation,
                        compensatedBonus: e.compensatedBonus,
                        icon: e.icon,
                        styleID: e.styleID,
                        banchID: e.branchID,
                        styleProgressLevel: e.progressLevel,
                    }),
                    ct = (e, u) => {
                        const t = [...u];
                        return e.length && t.splice(t.length - 1, 0, e[0]), t;
                    },
                    Et = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? at(e, (e) => ('object' == typeof e ? Et(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Et(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Et(u) : u]),
                                    )
                            : e,
                    mt = ((e, u) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: n, children: a, mocks: o }) {
                                const l = (0, s.useRef)([]),
                                    c = (t, r, n) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = nt,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
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
                                                            o = L.O.view.addModelObserver(i, u, !0);
                                                        return n.set(o, t), e && t(s(a)), o;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = tt(n.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            i =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(e)) : i.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            E = e({
                                                mode: t,
                                                readByPath: o,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const r = null != u ? u : o(e),
                                                            n = ut.LO.box(r, { equals: et });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, ut.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const r = null != u ? u : o(e),
                                                            n = ut.LO.box(r, { equals: et });
                                                        return (
                                                            'real' === t &&
                                                                i.subscribe(
                                                                    (0, ut.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const r = o(u);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, u) => ((e[u] = ut.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, ut.aD)((u) => {
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
                                                                a = Object.entries(n),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = ut.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    i.subscribe(
                                                                        (0, ut.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: t, model: E, externalModel: i, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === t && n ? n.controls(m) : u(m),
                                            externalModel: i,
                                            mode: t,
                                        };
                                    },
                                    E = (0, s.useRef)(!1),
                                    m = (0, s.useState)(r),
                                    _ = m[0],
                                    A = m[1],
                                    d = (0, s.useState)(() => c(r, n, o)),
                                    F = d[0],
                                    D = d[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        E.current ? D(c(_, n, o)) : (E.current = !0);
                                    }, [o, _, n]),
                                    (0, s.useEffect)(() => {
                                        A(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    i().createElement(t.Provider, { value: F }, a)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object('currentChapter'),
                                    allRewards: e.array('currentChapter.levels'),
                                },
                                t = (0, st.Om)((e) => at(e || [], (e) => lt(e)), { equals: et }),
                                r = (0, st.Om)(
                                    () => {
                                        return ((e = u.allRewards.get()), Et(e)).map(
                                            ({
                                                number: e,
                                                isCompleted: u,
                                                maxPoints: r,
                                                mainRewards: n,
                                                equalRewards: a,
                                            }) => ({
                                                number: e,
                                                isCompleted: u,
                                                maxPoints: r,
                                                rewards: ct(t(n), t(a)),
                                            }),
                                        );
                                        var e;
                                    },
                                    { equals: et },
                                ),
                                n = (0, st.Om)(
                                    (e) => {
                                        var u;
                                        return null == (u = r().find((u) => u.number === e)) ? void 0 : u.rewards;
                                    },
                                    { equals: et },
                                );
                            return Object.assign({}, u, { computes: { getAllRewards: r, getLevelRewardsByNumber: n } });
                        },
                        ({ externalModel: e }) => ({
                            onSelectVehicle: e.createCallback(
                                (e, u) => ({ levelID: e, entCode: u }),
                                'onSelectVehicle',
                            ),
                            onClose: e.createCallbackNoArgs('onClose'),
                        }),
                    ),
                    _t = mt[0],
                    At = mt[1],
                    dt = {
                        base: 'App_base_43',
                        fadeIn: 'App_fadeIn_42',
                        vignette: 'App_vignette_73',
                        button: 'App_button_b5',
                        close: 'App_close_86',
                        headerWrapper: 'App_headerWrapper_fb',
                        levelsWrapper: 'App_levelsWrapper_cd',
                    },
                    Ft = R.strings.paragons,
                    Dt = (0, O.Pi)(() => {
                        const e = At(),
                            u = e.controls,
                            t = e.model,
                            r = t.root.get().chapterLevel,
                            n = t.computes.getAllRewards();
                        var a;
                        return (
                            (a = u.onClose),
                            P(T.n.ESCAPE, a),
                            i().createElement(
                                'div',
                                { className: dt.base },
                                i().createElement('div', { className: dt.vignette }),
                                i().createElement(
                                    'div',
                                    { className: l()(dt.button, dt.close) },
                                    i().createElement(x, {
                                        caption: Ft.navigation.button.close(),
                                        side: 'right',
                                        type: 'close',
                                        onClick: u.onClose,
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: dt.headerWrapper },
                                    i().createElement(N.h, {
                                        topTitle: Ft.project.name(),
                                        mainTitle: Ft.allStageRewards.title(),
                                        subtitle: Ft.allStageRewards.subTitle(),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: dt.rewardsContainer },
                                    i().createElement(Ju, {
                                        allRewards: n,
                                        currentLevel: r,
                                        getLevelRewards: t.computes.getLevelRewardsByNumber,
                                        onOpenOverlay: u.onSelectVehicle,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    h().render(
                        i().createElement(_t, null, i().createElement(g, null, i().createElement(Dt, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1112: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => E });
                var r = t(280),
                    n = (t(3649), t(7613)),
                    a = t(6179),
                    s = t.n(a);
                const i = 'Header_base_37',
                    o = 'Header_textContainer_22',
                    l = 'Header_mainTitle_85',
                    c = 'Header_subTitle_fb',
                    E = (0, a.memo)(({ stage: e = 0, topTitle: u = '', mainTitle: t, subtitle: a = '' }) =>
                        s().createElement(
                            'div',
                            { className: i },
                            s().createElement(
                                'div',
                                { className: o },
                                u && s().createElement(n.ZP, { text: u, className: c }),
                                s().createElement(r.z, { text: t, binding: { level: e }, classMix: l }),
                                a && s().createElement(r.z, { text: a, classMix: c }),
                            ),
                        ),
                    );
            },
            5190: (e, u, t) => {
                'use strict';
                t.d(u, { M2: () => D, uA: () => A });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7613);
                const s = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    i = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    l = (e) =>
                        o
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = i.length - 1; t >= 0; t--) for (; e >= i[t]; ) (u += s[t]), (e -= i[t]);
                                  return u;
                              })(e);
                var c = t(3649),
                    E = t(6179),
                    m = t.n(E);
                const _ = {
                        base: 'VehicleName_base_f4',
                        base__white: 'VehicleName_base__white_3d',
                        base__whiteSpanish: 'VehicleName_base__whiteSpanish_90',
                        base__whiteOrange: 'VehicleName_base__whiteOrange_52',
                        nation: 'VehicleName_nation_8b',
                        base__colored: 'VehicleName_base__colored_f2',
                        level: 'VehicleName_level_7d',
                        type: 'VehicleName_type_12',
                        type__elite: 'VehicleName_type__elite_0d',
                        base__extraSmall: 'VehicleName_base__extraSmall_74',
                        base__medium: 'VehicleName_base__medium_16',
                        name: 'VehicleName_name_5c',
                    },
                    A = { ExtraSmall: 'extraSmall', Small: 'small', Medium: 'medium' },
                    d = 'whiteOrange',
                    F = 'R.images.gui.maps.icons',
                    D = m().memo(
                        ({
                            isElite: e = !0,
                            vehicleName: u,
                            vehicleShortName: t = u,
                            vehicleNation: r,
                            vehicleType: s,
                            vehicleLvl: i,
                            size: o = A.Small,
                            type: E = d,
                        }) => {
                            const D = n()(_.base, _[`base__${o}`], _[`base__${E}`]),
                                B = n()(_.type, e && _.type__elite);
                            return m().createElement(
                                'div',
                                { className: D },
                                r &&
                                    m().createElement('div', {
                                        className: _.nation,
                                        style: { backgroundImage: `url(${F}.flags.c_25x17.${r})` },
                                    }),
                                m().createElement(a.ZP, { text: l(i), className: _.level }),
                                m().createElement('div', {
                                    className: B,
                                    style: {
                                        backgroundImage: `url(${F}.vehicleTypes.c_60x54.${(0, c.BN)(s)}${e && '_elite'})`,
                                    },
                                }),
                                m().createElement(a.ZP, { text: t, className: _.name }),
                            );
                        },
                    );
            },
            5026: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            3393: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 84),
        (() => {
            var e = { 84: 0, 921: 0, 731: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, i] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (n = a[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [454], () => __webpack_require__(5636));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
