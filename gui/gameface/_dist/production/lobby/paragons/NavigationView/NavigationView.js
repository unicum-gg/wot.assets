(() => {
    var __webpack_modules__ = {
            3779: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => p });
                var a = u(6483),
                    r = u.n(a),
                    n = u(9887),
                    s = u.n(n),
                    i = u(3377),
                    o = u(6179),
                    l = u.n(o),
                    c = u(5026);
                const m = [
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
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
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
                    E = (Object.keys(_), ['mt', 'mr', 'mb', 'ml']),
                    g = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    p = (0, i.ZP)((e) => {
                        let t = e.className,
                            u = e.width,
                            a = e.height,
                            n = e.m,
                            s = e.mt,
                            i = void 0 === s ? n : s,
                            p = e.mr,
                            A = void 0 === p ? n : p,
                            F = e.mb,
                            C = void 0 === F ? n : F,
                            D = e.ml,
                            h = void 0 === D ? n : D,
                            b = e.column,
                            v = e.row,
                            B = e.flexDirection,
                            f = void 0 === B ? (b ? 'column' : v && 'row') || void 0 : B,
                            w = e.flexStart,
                            S = e.center,
                            x = e.flexEnd,
                            R = e.spaceBetween,
                            P = e.spaceAround,
                            y = e.justifyContent,
                            L =
                                void 0 === y
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (x && 'flex-end') ||
                                      (R && 'space-between') ||
                                      (P && 'space-around') ||
                                      void 0
                                    : y,
                            N = e.alignItems,
                            M = void 0 === N ? (w ? 'flex-start' : S && 'center') || (x && 'flex-end') || void 0 : N,
                            T = e.alignSelf,
                            k = e.wrap,
                            O = e.flexWrap,
                            I = void 0 === O ? (k ? 'wrap' : void 0) : O,
                            H = e.grow,
                            U = e.shrink,
                            $ = e.flex,
                            z = void 0 === $ ? (H || U ? `${H ? 1 : 0} ${U ? 1 : 0} auto` : void 0) : $,
                            W = e.style,
                            G = e.children,
                            j = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, m);
                        const V = (0, o.useMemo)(() => {
                                const e = { mt: i, mr: A, mb: C, ml: h },
                                    t = ((e) =>
                                        E.reduce((t, u) => {
                                            const a = e[u];
                                            return a && 'number' != typeof a ? t.concat(_[!0 === a ? 'MD' : a][u]) : t;
                                        }, []))(e),
                                    r = ((e) =>
                                        E.reduce((t, u) => {
                                            const a = e[u];
                                            return ('number' == typeof a && (t[g[u]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, W, r, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: z,
                                        alignSelf: T,
                                        display: f || M ? 'flex' : void 0,
                                        flexDirection: f,
                                        flexWrap: I,
                                        justifyContent: L,
                                        alignItems: M,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, a, i, A, C, h, W, z, T, f, I, L, M]),
                            X = V.computedStyle,
                            q = V.computedClassNames;
                        return l().createElement('div', d({ className: r()(c.Z.base, ...q, t), style: X }, j), G);
                    });
            },
            280: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => l });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6483),
                    s = u.n(n),
                    i = u(3649),
                    o = u(5287);
                const l = ({ binding: e, text: t = '', classMix: u, alignment: n = i.v2.left }) =>
                    null === t
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              a.Fragment,
                              null,
                              t.split('\n').map((t, l) =>
                                  r().createElement(
                                      'div',
                                      { className: s()(o.Z.base, u), key: `${t}-${l}` },
                                      (0, i.Uw)(t, n, e).map((e, t) =>
                                          r().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => m });
                var a = u(3138),
                    r = u(6179),
                    n = u(1043),
                    s = u(5262);
                const i = a.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, n.j)),
                    m = (0, r.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var a = u(6179),
                    r = u.n(a),
                    n = u(6536),
                    s = u(3495),
                    i = u(1043),
                    o = u(5262),
                    l = u(3138);
                const c = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(s.Y),
                        u = (0, a.useState)(t),
                        c = u[0],
                        m = u[1],
                        d = (0, a.useCallback)((e, t) => {
                            const u = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(t);
                            m(Object.assign({ width: u, height: a }, (0, o.T)(u, a, i.j)));
                        }, []);
                    ((0, n.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const _ = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    r = u(7382),
                    n = u(3495);
                const s = ['children'];
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, s);
                    const i = (0, a.useContext)(n.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        m = i.small,
                        d = i.extraSmall,
                        _ = i.extraLargeWidth,
                        E = i.largeWidth,
                        g = i.mediumWidth,
                        p = i.smallWidth,
                        A = i.extraSmallWidth,
                        F = i.extraLargeHeight,
                        C = i.largeHeight,
                        D = i.mediumHeight,
                        h = i.smallHeight,
                        b = i.extraSmallHeight,
                        v = { extraLarge: F, large: C, medium: D, small: h, extraSmall: b };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && m) return t;
                        if (u.extraSmall && d) return t;
                    } else {
                        if (u.extraLargeWidth && _) return (0, r.H)(t, u, v);
                        if (u.largeWidth && E) return (0, r.H)(t, u, v);
                        if (u.mediumWidth && g) return (0, r.H)(t, u, v);
                        if (u.smallWidth && p) return (0, r.H)(t, u, v);
                        if (u.extraSmallWidth && A) return (0, r.H)(t, u, v);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && F) return t;
                            if (u.largeHeight && C) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && h) return t;
                            if (u.extraSmallHeight && b) return t;
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
                (0, a.memo)(i);
            },
            7382: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => a });
                const a = (e, t, u) =>
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
                u.d(t, { YN: () => r.Y, ZN: () => a.Z });
                u(6010);
                var a = u(1039),
                    r = u(3495);
            },
            1043: (e, t, u) => {
                'use strict';
                u.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, u) => {
                'use strict';
                var a;
                function r(e, t, u) {
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
                        })(e, u),
                        r = (function (e, t) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === u.extraLarge.weight,
                        large: n === u.large.weight,
                        medium: n === u.medium.weight,
                        small: n === u.small.weight,
                        extraSmall: n === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: r === u.extraLarge.weight,
                        largeHeight: r === u.large.weight,
                        mediumHeight: r === u.medium.weight,
                        smallHeight: r === u.small.weight,
                        extraSmallHeight: r === u.extraSmall.weight,
                    };
                }
                (u.d(t, { T: () => r }),
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
            7613: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => B });
                var a = u(6483),
                    r = u.n(a),
                    n = u(3779),
                    s = u(280),
                    i = u(3532),
                    o = u.n(i),
                    l = u(9887),
                    c = u.n(l),
                    m = u(3377),
                    d = u(6179),
                    _ = u.n(d),
                    E = u(3393);
                const g = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const A = Object.keys(o()),
                    F = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    C = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    D = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    h = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    b =
                        (Object.keys(h),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': F,
                            'heading-H36': F,
                            'heading-H28': C,
                            'heading-H24': C,
                            'heading-H24R': C,
                            'heading-H22': C,
                            'heading-H20R': C,
                            'heading-H18': C,
                            'heading-H15': D,
                            'heading-H14': D,
                            'paragraph-P24': C,
                            'paragraph-P18': C,
                            'paragraph-P16': C,
                            'paragraph-P14': D,
                            'paragraph-P12': D,
                            'paragraph-P10': D,
                        }),
                    v =
                        (Object.keys(b),
                        (e) =>
                            e
                                ? ((e) => A.includes(e))(e)
                                    ? { colorClassName: E.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    B = (0, m.ZP)((e) => {
                        let t = e.text,
                            u = e.variant,
                            a = e.className,
                            i = e.color,
                            o = e.m,
                            l = e.mt,
                            c = void 0 === l ? o : l,
                            m = e.mr,
                            A = void 0 === m ? o : m,
                            F = e.mb,
                            C = void 0 === F ? o : F,
                            D = e.ml,
                            h = void 0 === D ? o : D,
                            B = e.style,
                            f = e.format,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, g);
                        const S = (0, d.useMemo)(() => {
                                const e = v(i),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    a = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, B, a), colorClassName: t };
                            }, [B, i]),
                            x = S.computedStyle,
                            R = S.colorClassName;
                        return _().createElement(
                            n.ZP,
                            p(
                                {
                                    className: r()(E.Z.base, u && E.Z[u], R, a),
                                    style: x,
                                    mt: !0 === c ? b[u || 'paragraph-P16'].mt : c,
                                    mr: !0 === A ? b[u || 'paragraph-P16'].mr : A,
                                    mb: !0 === C ? b[u || 'paragraph-P16'].mb : C,
                                    ml: !0 === h ? b[u || 'paragraph-P16'].ml : h,
                                },
                                w,
                            ),
                            void 0 !== f ? _().createElement(s.z, p({}, f, { text: t })) : t,
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
            527: (e, t, u) => {
                'use strict';
                (u.r(t), u.d(t, { mouse: () => i, onResize: () => n }));
                var a = u(2472),
                    r = u(1176);
                const n = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const i = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, r.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const n = `mouse${t}`,
                                        i = s[t]((e) => u([e, 'outside']));
                                    function o(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, o),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(n, o),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var a = u(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
            },
            2472: (e, t, u) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => a });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => r });
                var a = u(5959);
                const r = { view: u(7641), client: a };
            },
            3722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function r(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => r });
                var a = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => n.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => p,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => b,
                        isFocused: () => D,
                        pxToRem: () => A,
                        remToPx: () => F,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    }));
                var a = u(3722),
                    r = u(6112),
                    n = u(6538),
                    s = u(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function D() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const a = ['args'];
                const r = 2,
                    n = 16,
                    s = 32,
                    i = 64,
                    o = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
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
            3377: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => c });
                var a = u(5415),
                    r = u(6179),
                    n = u.n(r);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    i = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    o = [a.cJ.ExtraLarge, a.cJ.Large, a.cJ.Medium, a.cJ.Small, a.cJ.ExtraSmall],
                    l = (e, t) =>
                        Object.keys(e).reduce((u, a) => {
                            if (a in u) return u;
                            if (i(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in u) return u;
                                const n = o.indexOf(t),
                                    i = (-1 !== n ? s.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    l = i ? e[i] : void 0;
                                return ((u[r] = void 0 !== l ? l : e[r]), u);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, t) => s.some((u) => void 0 !== t[`${e}_${u}`]))(a, e) ||
                                    (u[a] = r),
                                u
                            );
                        }, {}),
                    c = (e, t = l) => {
                        const u = (
                            (e, t = l) =>
                            (u) => {
                                const s = (0, a.GS)().mediaSize,
                                    i = (0, r.useMemo)(() => t(u, s), [u, s]);
                                return n().createElement(e, i);
                            }
                        )(e, t);
                        return n().memo((t) =>
                            Object.keys(t).some((e) => i(e) && void 0 !== t[e])
                                ? n().createElement(u, t)
                                : n().createElement(e, t),
                        );
                    };
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(6179);
                const r = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var a = u(6179),
                    r = u(7739),
                    n = u(1043);
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
                        t = e.width,
                        u = e.height,
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
                    return { mediaSize: n, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5521: (e, t, u) => {
                'use strict';
                let a, r;
                (u.d(t, { n: () => a }),
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
            3649: (e, t, u) => {
                'use strict';
                let a;
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                (u.d(t, { BN: () => r, Uw: () => m, v2: () => a }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(a || (a = {})));
                const n = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    s = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    i = (e, t, u = a.left) => e.split(t).reduce(u === a.left ? n : s, []),
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    l = ['zh_cn', 'zh_sg', 'zh_tw'],
                    c = (e, t = a.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return l.includes(u)
                            ? o(e)
                            : ((e, t = a.left) => {
                                  let u = [];
                                  const r =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      n = e.replace(/&nbsp;/g, ' ');
                                  return (i(n, /( )/, t).forEach((e) => (u = u.concat(i(e, r, a.left)))), u);
                              })(e, t);
                    },
                    m = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : c(e, t)));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                var a = u(3138);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, u, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(n) : (this._views[u] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
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
                u.d(t, { B3: () => l, Z5: () => s, B0: () => o, ry: () => F });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                var n = u(1358);
                const s = {
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    E = u(3138);
                const g = ['args'];
                function p(e, t, u, a, r, n, s) {
                    try {
                        var i = e[n](s),
                            o = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(o) : Promise.resolve(o).then(a, r);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(t, u);
                                        function s(e) {
                                            p(n, a, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            p(n, a, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    C = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    D = () => C(o.CLOSE),
                    h = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = u(7572);
                const v = r.instance,
                    B = {
                        DataTracker: n.Z,
                        ViewModel: b.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => C(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, r = R.invalid('resId'), n) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                i = u.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                m = i.width,
                                d = i.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(d),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: A(_),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, D);
                        },
                        handleViewEvent: C,
                        onBindingsReady: F,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const r = Object.prototype.toString.call(t[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < r.length; t++) u[a].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = B;
            },
            8779: (e, t, u) => {
                'use strict';
                var a = {};
                (u.r(a),
                    u.d(a, {
                        Area: () => ru,
                        Bar: () => tu,
                        DefaultScroll: () => au,
                        Direction: () => Ht,
                        defaultSettings: () => Ut,
                        useHorizontalScrollApi: () => zt,
                    }));
                var r = {};
                (u.r(r), u.d(r, { Area: () => bu, Bar: () => Cu, Default: () => hu, useVerticalScrollApi: () => nu }));
                var n = u(7739),
                    s = u(6179),
                    i = u.n(s),
                    o = u(6483),
                    l = u.n(o),
                    c = u(926),
                    m = u.n(c),
                    d = u(5415);
                const _ = ['children', 'className'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = {
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: m().SMALL_WIDTH,
                        [d.fd.Medium]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH} ${m().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: m().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT} ${m().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: m().SMALL,
                        [d.cJ.Medium]: `${m().SMALL} ${m().MEDIUM}`,
                        [d.cJ.Large]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE}`,
                        [d.cJ.ExtraLarge]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE} ${m().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, _);
                        const r = (0, d.GS)(),
                            n = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return i().createElement('div', E({ className: l()(u, g[n], p[s], A[o]) }, a), t);
                    },
                    C = ['children'];
                const D = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, C);
                    return i().createElement(n.ZN, null, i().createElement(F, u, t));
                };
                var h = u(493),
                    b = u.n(h);
                function v() {}
                function B() {
                    return !1;
                }
                console.log;
                var f = u(9174),
                    w = u(3138);
                function S(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return x(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return x(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function x(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                const P = (e) => (0 === e ? window : window.subViews.get(e));
                const y = () => (e, t) => {
                    const u = (0, s.createContext)({});
                    return [
                        function ({ mode: a = 'real', options: r, children: n, mocks: o }) {
                            const l = (0, s.useRef)([]),
                                c = (u, a, r) => {
                                    var n;
                                    const s = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: u = P,
                                            context: a = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function n(e, t = 0) {
                                                viewEnv.removeDataChangedCallback(e, t)
                                                    ? r.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                    u.forEach((t) => {
                                                        const u = r.get(t);
                                                        void 0 !== u && u(e);
                                                    });
                                                });
                                            });
                                            const s = (e) => {
                                                const r = u(t),
                                                    n = a.split('.').reduce((e, t) => e[t], r);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? n
                                                    : e.split('.').reduce((e, t) => {
                                                          const u = e[t];
                                                          return 'function' == typeof u ? u.bind(e) : u;
                                                      }, n);
                                            };
                                            return {
                                                subscribe: (u, n) => {
                                                    const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                        o = w.O.view.addModelObserver(i, t, !0);
                                                    return (r.set(o, u), e && u(s(n)), o);
                                                },
                                                readByPath: s,
                                                createCallback: (e, t) => {
                                                    const u = s(t);
                                                    return (...t) => {
                                                        u(e(...t));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const t = s(e);
                                                    return () => {
                                                        t();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, u = S(r.keys()); !(e = u()).done; ) n(e.value, t);
                                                },
                                                unsubscribe: n,
                                            };
                                        })(a),
                                        i =
                                            'real' === u
                                                ? s
                                                : Object.assign({}, s, {
                                                      readByPath:
                                                          null != (n = null == r ? void 0 : r.getter) ? n : () => {},
                                                  }),
                                        o = (e) =>
                                            'mocks' === u ? (null == r ? void 0 : r.getter(e)) : i.readByPath(e),
                                        c = (e) => l.current.push(e),
                                        m = e({
                                            mode: u,
                                            readByPath: o,
                                            externalModel: i,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const a = null != t ? t : o(e),
                                                        r = f.LO.box(a, { equals: B });
                                                    return (
                                                        'real' === u &&
                                                            i.subscribe(
                                                                (0, f.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const a = null != t ? t : o(e),
                                                        r = f.LO.box(a, { equals: B });
                                                    return (
                                                        'real' === u &&
                                                            i.subscribe(
                                                                (0, f.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = o(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = f.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, f.aD)((t) => {
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
                                                            n = Object.entries(r),
                                                            s = n.reduce(
                                                                (e, [t, u]) => ((e[u] = f.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                i.subscribe(
                                                                    (0, f.aD)((e) => {
                                                                        n.forEach(([t, u]) => {
                                                                            s[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: c,
                                        }),
                                        d = { mode: u, model: m, externalModel: i, cleanup: c };
                                    return {
                                        model: m,
                                        controls: 'mocks' === u && r ? r.controls(d) : t(d),
                                        externalModel: i,
                                        mode: u,
                                    };
                                },
                                m = (0, s.useRef)(!1),
                                d = (0, s.useState)(a),
                                _ = d[0],
                                E = d[1],
                                g = (0, s.useState)(() => c(a, r, o)),
                                p = g[0],
                                A = g[1];
                            return (
                                (0, s.useEffect)(() => {
                                    m.current ? A(c(_, r, o)) : (m.current = !0);
                                }, [o, _, r]),
                                (0, s.useEffect)(() => {
                                    E(a);
                                }, [a]),
                                (0, s.useEffect)(
                                    () => () => {
                                        (p.externalModel.dispose(), l.current.forEach((e) => e()));
                                    },
                                    [p],
                                ),
                                i().createElement(u.Provider, { value: p }, n)
                            );
                        },
                        () => (0, s.useContext)(u),
                    ];
                };
                var L = u(3946);
                let N, M, T, k;
                (!(function (e) {
                    ((e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded'));
                })(N || (N = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed'));
                    })(M || (M = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed'));
                    })(T || (T = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded'));
                    })(k || (k = {})));
                (N.Initialization, M.Initialization);
                const O = (e) => e > 0,
                    I = (e) => !O(e);
                function H(e, t) {
                    var u;
                    if (I(e)) return void console.warn('Invalid id, should be greater than zero', e);
                    const a = 0 === t.scale ? 1e-5 : null != (u = t.scale) ? u : 1;
                    return w.O.view.getBrowserTexturePath(e, Math.max(t.width, 1), Math.max(t.height, 1), a);
                }
                const U = y()(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                u = (0, L.Om)(() =>
                                    (function ({ pageState: e, browserState: t, texState: u }) {
                                        return t === N.Initialization
                                            ? k.Initialization
                                            : t === N.ForceLoading
                                              ? k.ForceLoading
                                              : t === N.Loading
                                                ? k.BrowserLoading
                                                : e === M.Loaded && t === N.Loaded && u === T.Loaded
                                                  ? k.Loaded
                                                  : u === T.Failed
                                                    ? k.TextureFailed
                                                    : e === M.Failed
                                                      ? k.PageFailed
                                                      : k.PageLoading;
                                    })(t.get()),
                                );
                            return { root: t, getState: u };
                        },
                        ({ externalModel: e }) => ({
                            blur: e.createCallbackNoArgs('unfocus'),
                            focus: e.createCallbackNoArgs('focus'),
                            createWebView: e.createCallbackNoArgs('createWebView'),
                        }),
                    ),
                    $ = U[0],
                    z = U[1],
                    W = (e) => {
                        (0, s.useEffect)(e, []);
                    };
                var G = u(3403);
                function j() {
                    const e = (0, s.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => t, []),
                        (0, s.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (t(), (e.current = 0));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const V = 'BrowserView_base_6b',
                    X = 'BrowserView_texture_17',
                    q = 'Spinner_base_87',
                    Z = 'Spinner_caption_cf',
                    Y = 'Spinner_gear_c4',
                    J = 'Spinner_logo_bf',
                    K = ({ message: e, className: t, classNames: u }) =>
                        i().createElement(
                            'div',
                            { className: l()(q, t) },
                            e && i().createElement('div', { className: l()(Z, null == u ? void 0 : u.caption) }, e),
                            i().createElement('div', { className: l()(Y, null == u ? void 0 : u.gear) }),
                            i().createElement('div', { className: l()(J, null == u ? void 0 : u.logo) }),
                        );
                function Q(e) {
                    engine.call('PlaySound', e);
                }
                const ee = {
                        playHighlight() {
                            Q('highlight');
                        },
                        playClick() {
                            Q('play');
                        },
                        playYes() {
                            Q('yes1');
                        },
                    },
                    te = {
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
                let ue, ae;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(ue || (ue = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(ae || (ae = {})));
                const re = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: a,
                    disabled: r,
                    mixClass: n,
                    soundHover: o,
                    soundClick: c,
                    onMouseEnter: m,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: g,
                    onClick: p,
                }) => {
                    const A = (0, s.useRef)(null),
                        F = (0, s.useState)(u),
                        C = F[0],
                        D = F[1],
                        h = (0, s.useState)(!1),
                        b = h[0],
                        v = h[1],
                        B = (0, s.useState)(!1),
                        f = B[0],
                        w = B[1],
                        S = (0, s.useCallback)(() => {
                            r || (A.current && (A.current.focus(), D(!0)));
                        }, [r]),
                        x = (0, s.useCallback)(
                            (e) => {
                                C && null !== A.current && !A.current.contains(e.target) && D(!1);
                            },
                            [C],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                r || (p && p(e));
                            },
                            [r, p],
                        ),
                        y = (0, s.useCallback)(
                            (e) => {
                                r || (null !== o && Q(o), m && m(e), w(!0));
                            },
                            [r, o, m],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                r || (E && E(e), v(!1));
                            },
                            [r, E],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                r || (null !== c && Q(c), _ && _(e), u && S(), v(!0));
                            },
                            [r, c, _, S, u],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                r || (g && g(e), v(!1));
                            },
                            [r, g],
                        ),
                        k = l()(
                            te.base,
                            te[`base__${a}`],
                            {
                                [te.base__disabled]: r,
                                [te[`base__${t}`]]: t,
                                [te.base__focus]: C,
                                [te.base__highlightActive]: b,
                                [te.base__firstHover]: f,
                            },
                            n,
                        ),
                        O = l()(te.state, te.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, s.useEffect)(() => {
                            D(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: A,
                                className: k,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: N,
                                onMouseDown: M,
                                onMouseLeave: T,
                                onClick: P,
                            },
                            a !== ue.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: te.back }),
                                    i().createElement('span', { className: te.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: O },
                                i().createElement('span', { className: te.stateDisabled }),
                                i().createElement('span', { className: te.stateHighlightHover }),
                                i().createElement('span', { className: te.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: te.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                re.defaultProps = { type: ue.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ne = (0, s.memo)(re),
                    se = 'Error_base_46',
                    ie = 'Error_alertIcon_04',
                    oe = 'Error_errorCaption_f2',
                    le = 'Error_button_cd',
                    ce = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: u }) =>
                        i().createElement(
                            'div',
                            { className: se },
                            i().createElement('div', { className: ie }),
                            i().createElement('div', { className: oe }, u),
                            i().createElement(ne, { size: ae.medium, mixClass: le, onClick: t }, e),
                        );
                ce.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const me = 'Waiting_base_c5',
                    de = 'Waiting_blackOverlay_55',
                    _e = ({
                        message: e,
                        isError: t,
                        errorMessage: u,
                        errorBtnLabel: a,
                        errorBtnClickHandler: r,
                        overlayAlpha: n,
                    }) => {
                        const o = i().createRef();
                        return (
                            (0, s.useEffect)(() => {
                                const e = o.current;
                                e && n && (e.style.opacity = n);
                            }, [o, n]),
                            i().createElement(
                                'div',
                                { className: me },
                                i().createElement('div', { className: de, ref: o }),
                                t
                                    ? i().createElement(ce, {
                                          errorBtnLabel: a,
                                          errorMessage: u,
                                          errorBtnClickHandler: r,
                                      })
                                    : i().createElement(K, { message: e }),
                            )
                        );
                    };
                _e.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                const Ee = 'DisplayBrowserState_base_e7',
                    ge = 'DisplayBrowserState_error_4e',
                    pe = 'DisplayBrowserState_alertIcon_c4',
                    Ae = 'DisplayBrowserState_errorCaption_dd',
                    Fe = ({ waitingText: e, className: t }) =>
                        i().createElement(
                            'div',
                            { className: l()(Ee, t) },
                            i().createElement(_e, { errorBtnClickHandler: v, message: e }),
                        ),
                    Ce = () =>
                        i().createElement(
                            'div',
                            { className: ge },
                            i().createElement('div', { className: pe }),
                            i().createElement(
                                'div',
                                { className: Ae },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    De = () =>
                        i().createElement(
                            'div',
                            { className: ge },
                            i().createElement('div', { className: pe }),
                            i().createElement(
                                'div',
                                { className: Ae },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            i().createElement(
                                'div',
                                { className: Ae },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function he(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (function (e) {
                            return e !== k.BrowserLoading && e !== k.PageLoading;
                        })(e) && (t.current = e),
                        t.current
                    );
                }
                function be(e) {
                    const t = (function (e) {
                            const t = (0, s.useRef)(!1);
                            return (
                                (e !== k.Loaded && e !== k.PageFailed && e !== k.TextureFailed) || (t.current = !0),
                                t.current
                            );
                        })(e),
                        u = he(e);
                    return t ? u : e;
                }
                const ve = ({ viewState: e, waitingText: t, waitingClassName: u }) => {
                        switch (be(e)) {
                            case k.BrowserLoading:
                            case k.PageLoading:
                            case k.ForceLoading:
                                return i().createElement(Fe, { waitingText: t, className: u });
                            case k.PageFailed:
                                return i().createElement(Ce, null);
                            case k.TextureFailed:
                                return i().createElement(De, null);
                            default:
                                return null;
                        }
                    },
                    Be = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function fe(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function we(e) {
                    const t = (0, s.useState)(fe(e.scale)),
                        u = t[0],
                        a = t[1],
                        r = (function (e) {
                            return Be(e) ? H(e.id, e) : void 0;
                        })(Object.assign({}, e, { scale: u })),
                        n = (0, s.useState)(r),
                        i = n[0],
                        o = n[1],
                        l = (0, s.useRef)(!1),
                        c = 'width' in e ? e.width : 0,
                        m = 'height' in e ? e.height : 0,
                        d = j();
                    return (
                        (0, s.useEffect)(() => {
                            const t = () => {
                                a(fe(e.scale));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    window.removeEventListener('resize', t);
                                }
                            );
                        }, [e.scale]),
                        (0, s.useEffect)(() => {
                            if (void 0 === r || 0 === c || 0 === m || r === i) return;
                            const e = () => {
                                o(r);
                            };
                            if (!1 === l.current) return ((l.current = !0), void e());
                            const t = new Image(),
                                u = () => {
                                    d.run(e);
                                };
                            return (
                                t.addEventListener('load', u),
                                (t.src = r),
                                () => {
                                    (t.removeEventListener('load', u), (t.src = ''));
                                }
                            );
                        }, [r, i]),
                        i
                    );
                }
                const Se = i().memo(function (e) {
                        const t = e.id,
                            u = e.className,
                            a = e.classNameTexture,
                            r = e.waitingClassName,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseWheel,
                            c = e.onMouseMove,
                            m = e.onMouseDown,
                            d = e.onMouseUp,
                            _ = e.renderStateDisplay,
                            E = e.viewState,
                            g = e.statusCode,
                            p = e.waitingText,
                            A = e.scrollSpeed,
                            F = void 0 === A ? 20 : A,
                            C = we(e);
                        return i().createElement(
                            'div',
                            { className: l()(V, u), onMouseEnter: n, onMouseLeave: s },
                            C &&
                                i().createElement('div', {
                                    onWheel: o,
                                    onMouseMove: c,
                                    onMouseDown: m,
                                    onMouseUp: d,
                                    className: l()(V, X, a),
                                    'data-browser-id': t,
                                    'data-browser-scroll-speed': F,
                                    style: { backgroundImage: `url(${C})` },
                                }),
                            'function' == typeof _
                                ? _({ viewState: E, statusCode: g, waitingText: p, waitingClassName: r })
                                : i().createElement(ve, {
                                      viewState: E,
                                      statusCode: g,
                                      waitingText: p,
                                      waitingClassName: r,
                                  }),
                        );
                    }),
                    xe = (e) => {
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
                    },
                    Re = (e, t = []) => {
                        const u = (0, s.useRef)(),
                            a = (0, s.useCallback)((...t) => {
                                (u.current && u.current(), (u.current = e(...t)));
                            }, t);
                        return (
                            (0, s.useEffect)(
                                () => () => {
                                    u.current && u.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    Pe = 'none-ref',
                    ye = 'measured',
                    Le = { type: 'measuring' };
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Me = i().memo(function (e) {
                    const t = (function () {
                            const e = (0, s.useRef)(null),
                                t = (0, s.useState)(Le),
                                u = t[0],
                                a = t[1],
                                r = Re(
                                    () => (
                                        a(Le),
                                        xe(() => {
                                            e.current
                                                ? a({
                                                      type: ye,
                                                      size: {
                                                          width: e.current.offsetWidth,
                                                          height: e.current.offsetHeight,
                                                      },
                                                  })
                                                : a({ type: Pe });
                                        })
                                    ),
                                    [],
                                );
                            return (
                                (0, s.useEffect)(
                                    () => (
                                        window.addEventListener('resize', r),
                                        r(),
                                        () => window.removeEventListener('resize', r)
                                    ),
                                    [r],
                                ),
                                [e, u, r]
                            );
                        })(),
                        u = t[0],
                        a = t[1];
                    return i().createElement(
                        'div',
                        { ref: u, className: V },
                        i().createElement(
                            Se,
                            Ne(
                                {},
                                e,
                                (function (e, t = {}) {
                                    return 'measured' === e.type ? Object.assign({}, e.size, t) : t;
                                })(a),
                            ),
                        ),
                    );
                });
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                const ke = (0, G.Pi)(function (e) {
                        const t = e.defaultWaitingText,
                            u = e.className,
                            a = e.waitingClassName,
                            r = e.isLazy,
                            n = void 0 === r || r,
                            o = e.displayContentWhenLoading,
                            l = void 0 === o || o,
                            c = e.renderStateDisplay,
                            m = e.onMouseEnter,
                            d = e.onMouseLeave,
                            _ = e.onMouseMove,
                            E = e.onMouseWheel,
                            g = e.onMouseDown,
                            p = e.onMouseUp,
                            A = z(),
                            F = A.model,
                            C = A.controls,
                            D = F.root.get(),
                            h = D.id,
                            b = D.httpStatusCode,
                            v = D.waitingMessage,
                            B = F.getState(),
                            f = l || B === k.Loaded;
                        (W(() => {
                            n && I(h) && C.createWebView();
                        }),
                            (0, s.useEffect)(() => {
                                O(h) && C.focus();
                            }, [h, C]),
                            W(
                                () => (
                                    window.addEventListener('mouseleave', C.blur),
                                    window.addEventListener('mouseenter', C.focus),
                                    () => {
                                        (window.removeEventListener('mouseleave', C.blur),
                                            window.removeEventListener('mouseenter', C.focus));
                                    }
                                ),
                            ));
                        const w = (0, s.useMemo)(() => {
                            const e = {
                                onMouseEnter: m,
                                onMouseLeave: d,
                                onMouseMove: _,
                                onMouseWheel: E,
                                onMouseDown: g,
                                onMouseUp: p,
                            };
                            return f
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          (C.focus(), null == m || m(e));
                                      },
                                      onMouseLeave: (e) => {
                                          (C.blur(), null == d || d(e));
                                      },
                                  })
                                : e;
                        }, [f, C, g, m, d, _, p, E]);
                        if (I(h)) return null;
                        const S = Be(e)
                                ? (function (e, t) {
                                      const u = {};
                                      return (
                                          t.forEach((t) => {
                                              u[t] = e[t];
                                          }),
                                          u
                                      );
                                  })(e, ['width', 'height'])
                                : {},
                            x = v.length > 0 ? v : t;
                        return e.isFullSize
                            ? i().createElement(
                                  Me,
                                  Te({}, w, {
                                      id: h,
                                      className: u,
                                      waitingClassName: a,
                                      statusCode: b,
                                      viewState: B,
                                      waitingText: x,
                                      renderStateDisplay: c,
                                  }),
                              )
                            : i().createElement(
                                  Se,
                                  Te({}, w, S, {
                                      id: h,
                                      className: u,
                                      waitingClassName: a,
                                      statusCode: b,
                                      viewState: B,
                                      waitingText: x,
                                      renderStateDisplay: c,
                                  }),
                              );
                    }),
                    Oe = ['options', 'mocks', 'mode'];
                const Ie = (0, s.memo)(function (e) {
                        let t = e.options,
                            u = e.mocks,
                            a = e.mode,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Oe);
                        return i().createElement($, { options: t, mocks: u, mode: a }, i().createElement(ke, r));
                    }),
                    He = {
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
                    Ue = [
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
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                class ze extends i().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Q(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Q(this.props.soundClick));
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
                            a = e.goto,
                            r = e.side,
                            n = e.type,
                            s = e.classNames,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                    return r;
                                })(e, Ue)),
                            E = l()(He.base, He[`base__${n}`], He[`base__${r}`], null == s ? void 0 : s.base),
                            g = l()(He.icon, He[`icon__${n}`], He[`icon__${r}`], null == s ? void 0 : s.icon),
                            p = l()(He.glow, null == s ? void 0 : s.glow),
                            A = l()(He.caption, He[`caption__${n}`], null == s ? void 0 : s.caption),
                            F = l()(He.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            $e(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                _,
                            ),
                            'info' !== n && i().createElement('div', { className: He.shine }),
                            i().createElement('div', { className: g }, i().createElement('div', { className: p })),
                            i().createElement('div', { className: A }, t),
                            a && i().createElement('div', { className: F }, a),
                        );
                    }
                }
                let We;
                ((ze.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e[(e.progress = 0)] = 'progress'),
                            (e[(e.rewards = 1)] = 'rewards'),
                            (e[(e.chapters = 2)] = 'chapters'),
                            (e[(e.about = 3)] = 'about'));
                    })(We || (We = {})));
                var Ge = u(5521),
                    je = u(4179);
                const Ve = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Xe(e = Ge.n.NONE, t = Ve, u = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== Ge.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (w.O.view.isEventHandled()) return;
                                (w.O.view.setEventHandled(), t(a), u && a.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                var qe = u(1112);
                let Ze;
                !(function (e) {
                    ((e.DEFAULT = 'default'),
                        (e.DISABLED = 'disabled'),
                        (e.ACTIVE = 'active'),
                        (e.FINISHED = 'finished'),
                        (e.ANNOUNCEMENT = 'announcement'));
                })(Ze || (Ze = {}));
                function Ye(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, a) => t(null == e ? void 0 : e.value, u, a));
                }
                let Je, Ke, Qe, et, tt, ut, at;
                (!(function (e) {
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
                        (e.PortalEventDiscount25 = 'portalEventDiscountToken'),
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
                        (e.ParagonsUnlocks = 'paragonsUnlocks'),
                        (e.LootBoxToken = 'lootBoxToken'),
                        (e.GoldenTicket = 'birthday2025_golden_ticket'),
                        (e.PostStamp = 'giftsystem_4_stamp'),
                        (e.Quests = 'quests'),
                        (e.BlankPersonalMissions_1 = 'freeTokens_0'),
                        (e.BlankPersonalMissions_2 = 'freeTokens_2'),
                        (e.SACoin = 'sacoin'));
                })(Je || (Je = {})),
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
                    })(Ke || (Ke = {})),
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
                            (e.S48x48 = 's48x48'));
                    })(Qe || (Qe = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(et || (et = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(tt || (tt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ut || (ut = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(at || (at = {})));
                class rt extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = je.B3.GOLD;
                        else e = je.B3.INTEGRAL;
                        const t = je.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                rt.defaultProps = { format: 'integral' };
                const nt = [
                        Je.Items,
                        Je.Equipment,
                        Je.Xp,
                        Je.XpFactor,
                        Je.Blueprints,
                        Je.BlueprintsAny,
                        Je.Goodies,
                        Je.Berths,
                        Je.Slots,
                        Je.Tokens,
                        Je.CrewSkins,
                        Je.CrewBooks,
                        Je.Customizations,
                        Je.CreditsFactor,
                        Je.TankmenXp,
                        Je.TankmenXpFactor,
                        Je.FreeXpFactor,
                        Je.BattleToken,
                        Je.PremiumUniversal,
                        Je.NaturalCover,
                        Je.BpCoin,
                        Je.BattlePassSelectToken,
                        Je.BattlaPassFinalAchievement,
                        Je.BattleBadge,
                        Je.BonusX5,
                        Je.CrewBonusX3,
                        Je.NewYearFillers,
                        Je.NewYearInvoice,
                        Je.EpicSelectToken,
                        Je.Comp7TokenWeeklyReward,
                        Je.Comp7TokenCouponReward,
                        Je.BattleBoosterGift,
                        Je.CosmicLootboxCommon,
                        Je.CosmicLootboxSilver,
                        Je.SelectableBonus,
                        Je.GoldenTicket,
                        Je.PostStamp,
                        Je.BlankPersonalMissions_1,
                        Je.BlankPersonalMissions_2,
                        Je.SACoin,
                    ],
                    st = [Je.Gold, Je.Credits, Je.Crystal, Je.FreeXp],
                    it = [Je.BattlePassPoints],
                    ot = [Je.PremiumPlus, Je.Premium],
                    lt = (e) =>
                        nt.includes(e)
                            ? et.MULTI
                            : st.includes(e)
                              ? et.CURRENCY
                              : it.includes(e)
                                ? et.NUMBER
                                : ot.includes(e)
                                  ? et.PREMIUM_PLUS
                                  : et.STRING,
                    ct = ['engravings', 'backgrounds'],
                    mt = ['engraving', 'background'],
                    dt = (e, t = Qe.Small) => {
                        const u = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
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
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case Qe.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Qe.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${n}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const a = ct[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            n = r.$dyn(u);
                                        return n ? `${n}` : `${r.$dyn(mt[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case Qe.S600x450:
                                            return 'c_600x450';
                                        case Qe.S400x300:
                                            return 'c_400x300';
                                        case Qe.S296x222:
                                            return 'c_296x222';
                                        case Qe.S232x174:
                                            return 'c_232x174';
                                        case Qe.S180x135:
                                            return 'big';
                                        case Qe.Big:
                                        case Qe.S80x80:
                                            return 'c_80x80';
                                        case Qe.Small:
                                        case Qe.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t)}.${n}`;
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
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${o}.${n}`;
                            case 'portal':
                                return `R.images.gui.maps.icons.rewards.${t}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    _t = (e, t, u) => {
                        const a = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            a,
                            u,
                        );
                    },
                    Et = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case et.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case et.CURRENCY:
                            case et.NUMBER:
                                return i().createElement(rt, { format: 'integral', value: Number(e) });
                            case et.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
                var gt = u(3649);
                const pt = [Je.Branch, Je.VehicleSelect, Je.ParagonsUnlocks, Je.StyleProgress],
                    At = (e) => ({
                        name: e.name,
                        image: (t) =>
                            ((e, t = Qe.Small) => {
                                const u = (0, gt.BN)(e.vehicleName || '');
                                if (e.name === Je.Vehicles)
                                    switch (t) {
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
                                            return `R.images.gui.maps.shop.vehicles.c_180x135.${u}`;
                                        case Qe.S232x174:
                                        case Qe.S296x222:
                                            return `R.images.gui.maps.shop.vehicles.c_360x270.${u}`;
                                        case Qe.S400x300:
                                        case Qe.S600x450:
                                            return `R.images.gui.maps.shop.vehicles.c_600x450.${u}`;
                                        default:
                                            return (
                                                console.error('Unknown vehicle image size', t, e.vehicleName),
                                                'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                            );
                                    }
                                if (e.name === Je.TmanToken)
                                    switch (t) {
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
                                                console.error('Unknown image size', t),
                                                'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                            );
                                    }
                                if (e.name === Je.CollectionItem)
                                    switch (t) {
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
                                            console.error('Unknown image size', t);
                                    }
                                if (e.name === Je.StyleProgress)
                                    switch (t) {
                                        case Qe.Small:
                                        case Qe.Big:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.progressionStyle`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                if (pt.includes(e.name))
                                    switch (e.name) {
                                        case 'branch':
                                        case 'vehicleSelect':
                                        case 'paragonsUnlocks':
                                            return `R.images.gui.maps.icons.paragons.allRewards.${t}.${e.icon}`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                return dt(e, t);
                            })(e, t),
                        value: e.value,
                        valueType: lt(e.name),
                        label: e.label,
                        tooltipArgs: _t({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
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
                    Ft = (e, t) => {
                        const u = [...t];
                        return (e.length && u.splice(u.length - 1, 0, e[0]), u);
                    },
                    Ct = (e) => je.Z5.getNumberFormat(e, je.B3.INTEGRAL),
                    Dt = (e, t) => (t < 0 ? 0 : e[t].maxPoints),
                    ht = (e, t, u) => {
                        let a = 0;
                        const r = Dt(u, t - 2),
                            n = Dt(u, u.length - 1) / u.length;
                        return (
                            u.forEach((u, s) => {
                                s < t &&
                                    (a += ((e, t, u, a) => (e >= t ? a : (a / (t - u)) * (e - u)))(
                                        e,
                                        u.maxPoints,
                                        r,
                                        n,
                                    ));
                            }),
                            a
                        );
                    },
                    bt = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? Ye(e, (e) => ('object' == typeof e ? bt(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? bt(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? bt(t) : t]),
                                    )
                            : e,
                    vt = (e) => bt(e),
                    Bt = y()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    progression: e.object('progression'),
                                    currentChapter: e.object('allRewards.currentChapter'),
                                    currentChapterLevels: e.array('allRewards.currentChapter.levels'),
                                    stages: e.array('progression.stages'),
                                },
                                u = (0, L.Om)(() => vt(t.stages.get()), { equals: B }),
                                a = (0, L.Om)(() => u().length, { equals: B }),
                                r = (0, L.Om)(() => vt(t.currentChapterLevels.get()), { equals: B }),
                                n = (0, L.Om)(() => u().filter((e) => e.isCompleted).length, { equals: B }),
                                s = (0, L.Om)(() => u().find((e) => e.id === t.progression.get().currentStage), {
                                    equals: B,
                                }),
                                i = (0, L.Om)(() => vt(t.currentChapter.get()), { equals: B }),
                                o = (0, L.Om)(
                                    () => {
                                        var e;
                                        return Ye((null == (e = s()) ? void 0 : e.levels) || [], (e) =>
                                            Object.assign({}, e),
                                        );
                                    },
                                    { equals: B },
                                ),
                                l = (0, L.Om)((e) => o().find((t) => t.number === e), { equals: B }),
                                c = (0, L.Om)(
                                    () => {
                                        var e;
                                        return l((null == (e = s()) ? void 0 : e.chapterLevel) || 1);
                                    },
                                    { equals: B },
                                ),
                                m = (0, L.Om)(() => o().length, { equals: B }),
                                d = (0, L.Om)(
                                    () => {
                                        var e;
                                        return (null == (e = o()[m() - 1]) ? void 0 : e.maxPoints) || 0;
                                    },
                                    { equals: B },
                                ),
                                _ = (0, L.Om)(
                                    () => {
                                        var e;
                                        return null == (e = o()[m() - 1]) ? void 0 : e.isCompleted;
                                    },
                                    { equals: B },
                                ),
                                E = (0, L.Om)((e) => Ye(e || [], (e) => At(e)), { equals: B }),
                                g = (0, L.Om)(
                                    () =>
                                        o().map(({ mainRewards: e, equalRewards: t, number: u, isCompleted: a }) => ({
                                            number: u,
                                            isCompleted: a,
                                            hasMainRewards: e.length > 0,
                                            rewards: Ft(E(e), E(t)),
                                        })),
                                    { equals: B },
                                ),
                                p = (0, L.Om)(
                                    () =>
                                        r().map(
                                            ({
                                                number: e,
                                                isCompleted: t,
                                                maxPoints: u,
                                                mainRewards: a,
                                                equalRewards: r,
                                            }) => ({
                                                number: e,
                                                isCompleted: t,
                                                maxPoints: u,
                                                rewards: Ft(E(a), E(r)),
                                            }),
                                        ),
                                    { equals: B },
                                ),
                                A = (0, L.Om)(
                                    (e) => {
                                        var t, u;
                                        return null == (t = p()) || null == (u = t.find((t) => t.number === e))
                                            ? void 0
                                            : u.rewards;
                                    },
                                    { equals: B },
                                ),
                                F = (0, L.Om)((e) => u().filter((t) => t.status === e).length, { equals: B }),
                                C = (0, L.Om)(() => u().length - F(Ze.ANNOUNCEMENT), { equals: B }),
                                D = (0, L.Om)(
                                    () => u().length - F(Ze.FINISHED) + F(Ze.DISABLED) + F(Ze.ANNOUNCEMENT) === 0,
                                    { equals: B },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    getMainRewards: (e) => {
                                        var t;
                                        return E(null == (t = l(e)) ? void 0 : t.mainRewards);
                                    },
                                    getEqualRewards: (e) => {
                                        var t;
                                        return E(null == (t = l(e)) ? void 0 : t.equalRewards);
                                    },
                                    getCurrentStage: s,
                                    getLevels: o,
                                    getLevelsCount: m,
                                    getMaxPointsCount: d,
                                    getLevelByNumber: l,
                                    getCurrentLevel: c,
                                    getStagesCount: a,
                                    getCompletedStagesCount: n,
                                    getAllLevelsRewards: g,
                                    getAllRewards: p,
                                    getLevelRewardsByNumber: A,
                                    getStages: u,
                                    hasActiveChapter: () => F(Ze.ACTIVE),
                                    isAllAvailableChaptersCompleted: D,
                                    getAvailableChaptersCount: C,
                                    getCurrentChapter: i,
                                    isAllProgressionCompleted: _,
                                },
                            });
                        },
                        ({ externalModel: e, cleanup: t }) => {
                            const u = window.subViews.addChildChangedCallback(We.about);
                            return (
                                t(() => {
                                    window.subViews.removeChildChangedCallback(u);
                                }),
                                {
                                    onBack: e.createCallbackNoArgs('onBack'),
                                    onClose: e.createCallbackNoArgs('onClose'),
                                    onToStagesView: e.createCallbackNoArgs('onToChaptersView'),
                                    onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                                    onPreviewVehicle: e.createCallback(
                                        (e) => ({ vehicleCD: e }),
                                        'progression.onPreviewVehicle',
                                    ),
                                    onCompareVehicle: e.createCallback(
                                        (e) => ({ vehicleCD: e }),
                                        'progression.onCompareVehicle',
                                    ),
                                    onSelectVehicle: e.createCallback(
                                        (e, t) => ({ chapterLevel: e, entCode: t }),
                                        'progression.onSelectVehicle',
                                    ),
                                    onSelectVehicleReward: e.createCallback(
                                        (e, t) => ({ levelID: e, entCode: t }),
                                        'allRewards.onSelectVehicle',
                                    ),
                                    onSelectChapter: e.createCallback(
                                        (e) => ({ id: e }),
                                        'allChapters.onSelectChapter',
                                    ),
                                    onToChapterRewards: e.createCallback(
                                        (e) => ({ id: e }),
                                        'allChapters.onToChapterRewards',
                                    ),
                                    onPreviewStyle: e.createCallback(
                                        (e, t, u) => ({ styleID: e, group: t, styleLevel: u }),
                                        'progression.onPreviewStyle',
                                    ),
                                }
                            );
                        },
                    ),
                    ft = Bt[0],
                    wt = Bt[1],
                    St = 'AllRewardsView_base_d7',
                    xt = 'AllRewardsView_vignette_41',
                    Rt = 'AllRewardsView_headerWrapper_7a',
                    Pt = 'AllRewardsView_levelsWrapper_1d',
                    yt = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Lt = [];
                function Nt(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), Lt)
                    );
                }
                function Mt(e, t, u = []) {
                    const a = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => window.clearInterval(a.current), u || []);
                    (0, s.useEffect)(() => r, [r]);
                    const n = (null != u ? u : []).concat([t]);
                    return [
                        (0, s.useCallback)((u) => {
                            ((a.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, n),
                        r,
                    ];
                }
                function Tt(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return kt(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return kt(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function kt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                function Ot(e, t, u) {
                    const a = (0, s.useMemo)(
                        () =>
                            (function (e, t, u, a) {
                                let r,
                                    n = !1,
                                    s = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function m() {
                                        ((s = Date.now()), u.apply(l, o));
                                    }
                                    n ||
                                        (a && !r && m(),
                                        i(),
                                        void 0 === a && c > e
                                            ? m()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  a
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : m,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = u), (u = t), (t = void 0)),
                                    (o.cancel = function () {
                                        (i(), (n = !0));
                                    }),
                                    o
                                );
                            })(u, e),
                        t,
                    );
                    return ((0, s.useEffect)(() => a.cancel, [a]), a);
                }
                var It = u(7030);
                let Ht;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Ht || (Ht = {}));
                const Ut = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    $t = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: n = !1,
                    }) => {
                        const i = (e, u) => {
                            const a = t(e),
                                r = a[0],
                                n = a[1];
                            return yt(r, n, u);
                        };
                        return (o = {}) => {
                            const l = o.settings,
                                c = void 0 === l ? Ut : l,
                                m = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                _ = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        a = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var a, r = Tt(t(e).values()); !(a = r()).done; ) (0, a.value)(...u);
                                        };
                                    return (0, s.useMemo)(() => ({ on: u, off: a, trigger: r }), []);
                                })(),
                                E = Ot(
                                    () => {
                                        w.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, It.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = m.current;
                                        t && (u(t, e), _.trigger('change', e), n && E());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                p = g[0],
                                A = g[1],
                                F = (0, s.useCallback)(
                                    (e, t, u) => {
                                        var a;
                                        const r = p.scrollPosition.get(),
                                            n = (null != (a = p.scrollPosition.goal) ? a : 0) - r;
                                        return i(e, t * u + n + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            A.start({
                                                scrollPosition: i(a, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [A, c.animationConfig, p.scrollPosition],
                                ),
                                D = (0, s.useCallback)(
                                    (e) => {
                                        const t = m.current,
                                            u = d.current;
                                        if (!t || !u) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            n = F(t, e, a);
                                        C(n);
                                    },
                                    [C, F, c.step],
                                ),
                                h = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && D(a(e)),
                                            m.current && _.trigger('mouseWheel', e, p.scrollPosition, t(m.current)));
                                    },
                                    [p.scrollPosition, D, _],
                                ),
                                b = Re(
                                    () =>
                                        xe(() => {
                                            const e = m.current;
                                            e &&
                                                (C(i(e, p.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, p.scrollPosition.goal],
                                ),
                                v = Nt(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const t = i(e, p.scrollPosition.goal);
                                    (t !== p.scrollPosition.goal && C(t, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            const B = (0, s.useCallback)((e) => _.trigger('isThumbDraggingChanged', e), [_]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? t(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: D,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: A,
                                    animationScroll: p,
                                    recalculateContent: v,
                                    handleIsThumbDragging: B,
                                    events: { on: _.on, off: _.off },
                                }),
                                [p.scrollPosition, C, D, B, _.off, _.on, v, h, A, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    zt = $t({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ht.Next : Ht.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Wt = 'HorizontalBar_base_49',
                    Gt = 'HorizontalBar_base__nonActive_82',
                    jt = 'HorizontalBar_leftButton_5f',
                    Vt = 'HorizontalBar_rightButton_03',
                    Xt = 'HorizontalBar_track_0d',
                    qt = 'HorizontalBar_thumb_fd',
                    Zt = 'HorizontalBar_rail_32',
                    Yt = 'disable',
                    Jt = { pending: !1, offset: 0 },
                    Kt = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qt = () => {},
                    eu = (e, t) => Math.max(20, e.offsetWidth * t),
                    tu = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Kt, onDrag: a = Qt }) => {
                        const r = (0, s.useRef)(null),
                            n = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, s.useState)(Jt),
                            E = _[0],
                            g = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    (g(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            A = () => {
                                const t = c.current,
                                    u = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    l = yt(0, 1, s / (r - a)),
                                    d = (t.offsetWidth - eu(t, i)) * l;
                                ((u.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (n.current && o.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    n.current.classList.add(Yt),
                                                    void o.current.classList.remove(Yt)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    n.current.classList.remove(Yt),
                                                    void o.current.classList.add(Yt)
                                                );
                                            var t, u;
                                            (n.current.classList.remove(Yt), o.current.classList.remove(Yt));
                                        }
                                    })(d));
                            },
                            F = Nt(() => {
                                ((() => {
                                    const t = m.current,
                                        u = c.current,
                                        a = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && t && a && u)) return;
                                    const s = Math.min(1, a / n);
                                    ((t.style.width = `${eu(u, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(Gt) : r.current.classList.remove(Gt)));
                                })(),
                                    A());
                            });
                        ((0, s.useEffect)(() => xe(F)),
                            (0, s.useEffect)(
                                () =>
                                    xe(() => {
                                        const t = () => {
                                            A();
                                        };
                                        let u = Qt;
                                        const a = () => {
                                            (u(), (u = xe(F)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        var u;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const n = c.current,
                                            s = m.current;
                                        if (!r || !n || !s) return;
                                        const i = t.screenX - E.offset - n.getBoundingClientRect().x,
                                            o = (i / n.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o }));
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t), p(Jt));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, E.offset, E.pending, a, p]));
                        const C = Mt((t) => e.applyStepTo(t), d, [e]),
                            D = C[0],
                            h = C[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Yt) || Q('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(Wt, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(jt, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Yt) || 0 !== e.button || (Q('play'), D(Ht.Next));
                                },
                                onMouseUp: h,
                                ref: n,
                                onMouseEnter: b,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(Xt, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((Q('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = m.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const n = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + n * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Ht.Prev : Ht.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                i().createElement('div', { ref: m, className: l()(qt, t.thumb) }),
                                i().createElement('div', { className: l()(Zt, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(Vt, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Yt) || 0 !== e.button || (Q('play'), D(Ht.Prev));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    uu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    au = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: n,
                        scrollClassName: o,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(uu.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(uu.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(uu.defaultScrollArea, r) },
                                i().createElement(ru, { className: o, api: _, classNames: n }, e),
                            ),
                            i().createElement(tu, { getStepByRailClick: c, api: t, onDrag: m, classNames: d }),
                        );
                    },
                    ru = ({ api: e, className: t, classNames: u, children: a, style: r }) => (
                        (0, s.useEffect)(() => xe(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(uu.base, t), style: r },
                            i().createElement(
                                'div',
                                {
                                    className: l()(uu.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(uu.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((ru.Bar = tu),
                    (ru.Default = au),
                    (ru.SeniorityAwards = ({ api: e, className: t, classNames: u, children: a }) => (
                        (0, s.useEffect)(() => xe(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(uu.base, t) },
                            i().createElement(
                                'div',
                                { className: l()(uu.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: l()(uu.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const nu = $t({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ht.Next : Ht.Prev),
                    }),
                    su = 'VerticalBar_base_f3',
                    iu = 'VerticalBar_base__nonActive_42',
                    ou = 'VerticalBar_topButton_d7',
                    lu = 'VerticalBar_bottomButton_06',
                    cu = 'VerticalBar_track_df',
                    mu = 'VerticalBar_thumb_32',
                    du = 'VerticalBar_rail_43',
                    _u = 'disable',
                    Eu = () => {},
                    gu = { pending: !1, offset: 0 },
                    pu = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Au = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Fu = (e, t) => Math.max(20, e.offsetHeight * t),
                    Cu = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = pu, onDrag: a = Eu }) => {
                        const r = (0, s.useRef)(null),
                            n = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, s.useState)(gu),
                            E = _[0],
                            g = _[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    (g(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            A = Nt(() => {
                                const t = m.current,
                                    u = c.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && n && t && u)) return;
                                const s = Math.min(1, a / n);
                                return (
                                    (t.style.height = `${Fu(u, s)}px`),
                                    t.classList.add(mu),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(iu) : r.current.classList.remove(iu)),
                                    s
                                );
                            }),
                            F = Nt(() => {
                                const t = c.current,
                                    u = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && u && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    l = yt(0, 1, s / (r - a)),
                                    d = (t.offsetHeight - Fu(t, i)) * l;
                                ((u.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (n.current && o.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    n.current.classList.add(_u),
                                                    void o.current.classList.remove(_u)
                                                );
                                            if (
                                                ((t = c.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    n.current.classList.remove(_u),
                                                    void o.current.classList.add(_u)
                                                );
                                            var t, u;
                                            (n.current.classList.remove(_u), o.current.classList.remove(_u));
                                        }
                                    })(d));
                            }),
                            C = Nt(() => {
                                Au(e, () => {
                                    (A(), F());
                                });
                            });
                        ((0, s.useEffect)(() => xe(C)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Au(e, () => {
                                        F();
                                    });
                                };
                                let u = Eu;
                                const a = () => {
                                    (u(), (u = xe(C)));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = (t) => {
                                        Au(e, (u) => {
                                            const r = c.current,
                                                n = m.current,
                                                s = e.getContainerSize();
                                            if (!r || !n || !s) return;
                                            const i = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                o = (i / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: i, contentOffset: o }));
                                        });
                                    },
                                    u = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            p(gu));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u));
                                    }
                                );
                            }, [e, E.offset, E.pending, a, p]));
                        const D = Mt((t) => e.applyStepTo(t), d, [e]),
                            h = D[0],
                            b = D[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const v = (e) => {
                            e.target.classList.contains(_u) || Q('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()(su, t.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()(ou, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_u) || 0 !== e.button || (Q('play'), h(Ht.Next));
                                },
                                ref: n,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()(cu, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((Q('play'), t.target === a))
                                                (e.handleIsThumbDragging(!0),
                                                    p({
                                                        pending: !0,
                                                        offset: t.screenY - a.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        Au(e, (a) => {
                                                            if (!a) return;
                                                            const r = u(e),
                                                                n = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(n);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Ht.Prev : Ht.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: m, className: t.thumb }),
                                i().createElement('div', { className: l()(du, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()(lu, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(_u) || 0 !== e.button || (Q('play'), h(Ht.Prev));
                                },
                                onMouseUp: b,
                                ref: o,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    Du = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    hu = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: n,
                        scrollClassNames: o,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(Du.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: l()(Du.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Du.area, r) },
                                i().createElement(bu, { className: n, classNames: o, api: _ }, e),
                            ),
                            i().createElement(Cu, { getStepByRailClick: c, api: t, onDrag: m, classNames: d }),
                        );
                    },
                    bu = ({ className: e, classNames: t, children: u, api: a }) => (
                        (0, s.useEffect)(() => xe(a.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(Du.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(Du.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                u,
                            ),
                        )
                    );
                bu.Default = hu;
                const vu = { Vertical: r, Horizontal: a },
                    Bu = { type: 'idle' };
                function fu(e, t) {
                    const u = e.contentRef,
                        a = e.wrapperRef,
                        r = e.scrollPosition,
                        n = e.clampPosition,
                        i = e.animationScroll,
                        o = e.events,
                        l = (0, s.useState)(Bu),
                        c = l[0],
                        m = l[1];
                    return (
                        (0, s.useEffect)(() => {
                            const e = u.current;
                            e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                        }, [u, c.type]),
                        (0, s.useEffect)(() => {
                            if ('dragging' !== c.type) return;
                            const e = w.O.client.events.mouse.move(([e, s]) => {
                                const o = u.current,
                                    l = a.current;
                                if (!o || !l) return;
                                if ('inside' === s && e.clientX < 0) return;
                                const m = 'inside' === s ? e.clientX : e.clientX - l.offsetLeft,
                                    d = c.positionFrom - m,
                                    _ = c.previousScrollPosition + d;
                                r.start(
                                    Object.assign(
                                        { scrollPosition: n(o, _), from: { scrollPosition: i.scrollPosition.get() } },
                                        t && { config: t },
                                    ),
                                );
                            });
                            const s = w.O.client.events.mouse.up(function () {
                                m({ type: 'scrollingToEnd' });
                            });
                            return () => {
                                (e(), s());
                            };
                        }, [i.scrollPosition, n, u, c, r, a, t]),
                        (0, s.useEffect)(() => {
                            if ('scrollingToEnd' !== c.type) return;
                            const e = () => {
                                m(Bu);
                            };
                            return (i.scrollPosition.idle && e(), o.on('rest', e), () => o.off('rest', e));
                        }, [i.scrollPosition, c.type, o]),
                        (0, s.useEffect)(() => {
                            const e = u.current;
                            if (!e) return;
                            const t = (e) => {
                                m({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: i.scrollPosition.get(),
                                });
                            };
                            return (e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t));
                        }, [i.scrollPosition, u]),
                        c
                    );
                }
                const wu = 'LevelsRewards_base_35',
                    Su = 'LevelsRewards_base__centered_05',
                    xu = 'LevelsRewards_header_88',
                    Ru = 'LevelsRewards_rewards_05',
                    Pu = 'LevelsRewards_scrollArea_6e',
                    yu = 'LevelsRewards_rewardsWrapper_e8',
                    Lu = 'LevelsRewards_scrollWrapper_42',
                    Nu = 'LevelsRewards_scrollContent_f8',
                    Mu = 'LevelsRewards_scrollBar_d3',
                    Tu = 'RewardsColumn_base_14',
                    ku = 'RewardsColumn_particlesLine_dc',
                    Ou = 'RewardsColumn_particlesLine__right_d2',
                    Iu = 'RewardsColumn_rewards_8c',
                    Hu = 'RewardsColumn_rewardItem_9b',
                    Uu = [
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
                function $u(e) {
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
                const zu = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: je.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    Wu = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            n = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            p = void 0 === g || g,
                            A = e.targetId,
                            F = void 0 === A ? 0 : A,
                            C = e.onShow,
                            D = e.onHide,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Uu);
                        const b = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, s.useMemo)(
                                () =>
                                    F ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            a = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (a = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: a }
                                        );
                                    })().resId,
                                [F],
                            ),
                            B = (0, s.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (zu(u, E, { isMouseEvent: !0, on: !0, arguments: $u(a) }, v),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [u, E, a, v, C]),
                            f = (0, s.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        zu(u, E, { on: !1 }, v),
                                        b.current.isVisible && D && D(),
                                        (b.current.isVisible = !1));
                                }
                            }, [u, E, v, D]),
                            w = (0, s.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, s.useEffect)(() => {
                            const e = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === p && f();
                            }, [p, f]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return p
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                      r && r(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (f(), null == n || n(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === d && f(), null == o || o(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === d && f(), null == i || i(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    Gu = ['children'];
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const Vu = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Gu);
                        return i().createElement(
                            Wu,
                            ju(
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
                    Xu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const Zu = R.views.common.tooltip_window.simple_tooltip_content,
                    Yu = (e) => {
                        let t = e.children,
                            u = e.body,
                            a = e.header,
                            r = e.note,
                            n = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Xu);
                        const c = (0, s.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: a, note: r, alert: n });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [n, u, a, r, o]);
                        return i().createElement(
                            Wu,
                            qu(
                                {
                                    contentId:
                                        ((m = null == o ? void 0 : o.hasHtmlContent),
                                        m ? Zu.SimpleTooltipHtmlContent('resId') : Zu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var m;
                    };
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const Ku = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const a = i().createElement('div', { className: u }, e);
                        if (t.header || t.body) return i().createElement(Yu, t, a);
                        const r = t.contentId,
                            n = t.args,
                            s = null == n ? void 0 : n.contentId;
                        return r || s
                            ? i().createElement(Wu, Ju({}, t, { contentId: r || s }), a)
                            : i().createElement(Vu, t, a);
                    },
                    Qu = {
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
                    ea = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: a = Qe.Big,
                        special: r,
                        value: n,
                        valueType: s,
                        style: o,
                        className: c,
                        classNames: m,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case tt.BATTLE_BOOSTER:
                                    case tt.BATTLE_BOOSTER_REPLACE:
                                        return ut.BATTLE_BOOSTER;
                                }
                            })(r),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case tt.BATTLE_BOOSTER:
                                        return at.BATTLE_BOOSTER;
                                    case tt.BATTLE_BOOSTER_REPLACE:
                                        return at.BATTLE_BOOSTER_REPLACE;
                                    case tt.BUILT_IN_EQUIPMENT:
                                        return at.BUILT_IN_EQUIPMENT;
                                    case tt.EQUIPMENT_PLUS:
                                        return at.EQUIPMENT_PLUS;
                                    case tt.EQUIPMENT_TROPHY_BASIC:
                                        return at.EQUIPMENT_TROPHY_BASIC;
                                    case tt.EQUIPMENT_TROPHY_UPGRADED:
                                        return at.EQUIPMENT_TROPHY_UPGRADED;
                                    case tt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return at.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case tt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return at.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case tt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return at.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case tt.PROGRESSION_STYLE_UPGRADED_1:
                                        return at.PROGRESSION_STYLE_UPGRADED_1;
                                    case tt.PROGRESSION_STYLE_UPGRADED_2:
                                        return at.PROGRESSION_STYLE_UPGRADED_2;
                                    case tt.PROGRESSION_STYLE_UPGRADED_3:
                                        return at.PROGRESSION_STYLE_UPGRADED_3;
                                    case tt.PROGRESSION_STYLE_UPGRADED_4:
                                        return at.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            p = Et(n, s);
                        return i().createElement(
                            'div',
                            { className: l()(Qu.base, Qu[`base__${a}`], c), style: o },
                            i().createElement(
                                Ku,
                                { tooltipArgs: d, className: Qu.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: l()(Qu.image, null == m ? void 0 : m.image) },
                                        E &&
                                            i().createElement('div', {
                                                className: l()(Qu.highlight, null == m ? void 0 : m.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            i().createElement('div', {
                                                className: l()(Qu.icon, null == m ? void 0 : m.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        g &&
                                            i().createElement('div', {
                                                className: l()(Qu.overlay, null == m ? void 0 : m.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    p &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    Qu.info,
                                                    Qu[`info__${e}`],
                                                    s === et.MULTI && Qu.info__multi,
                                                    null == m ? void 0 : m.info,
                                                ),
                                            },
                                            p,
                                        ),
                                ),
                            ),
                            u &&
                                i().createElement(
                                    Ku,
                                    { tooltipArgs: _ },
                                    i().createElement('div', {
                                        className: l()(Qu.timer, null == m ? void 0 : m.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var ta = u(7613),
                    ua = u(5190);
                const aa = 'RewardsList_base_7e',
                    ra = 'RewardsList_base__vertical_9c',
                    na = 'RewardsList_reward_89',
                    sa = 'RewardsList_reward__vertical_ff',
                    ia = 'RewardsList_reward__disabled_3f',
                    oa = 'RewardsList_rewardSelect_d1',
                    la = 'RewardsList_btn_5a',
                    ca = 'RewardsList_label_66',
                    ma = R.strings.paragons.allRewards,
                    da = i().memo(
                        ({
                            rewardsData: e,
                            isLevelAchieved: t,
                            currentLevel: u,
                            isVertical: a = !1,
                            classMix: r,
                            rewardItemClassMix: n,
                            onOpenOverlay: o,
                        }) => {
                            const c = (0, d.GS)().mediaSize,
                                m = c >= d.cJ.Large ? Qe.S180x135 : Qe.Big,
                                _ = l()(aa, a && ra, r),
                                E = l()(na, a && sa, n),
                                g = (0, s.useCallback)(
                                    (e, a) => {
                                        if (a)
                                            return i().createElement(
                                                'div',
                                                { className: oa },
                                                t
                                                    ? i().createElement(
                                                          ne,
                                                          {
                                                              size: ae.small,
                                                              type: ue.main,
                                                              mixClass: la,
                                                              onClick: () => o(u, e.value),
                                                          },
                                                          i().createElement(ta.ZP, { text: ma.button.select() }),
                                                      )
                                                    : i().createElement(
                                                          ne,
                                                          {
                                                              size: ae.small,
                                                              type: ue.primary,
                                                              mixClass: la,
                                                              onClick: () => o(u, e.value),
                                                          },
                                                          i().createElement(ta.ZP, { text: ma.button.list() }),
                                                      ),
                                            );
                                        const r =
                                            e.name === Je.Vehicles &&
                                            c >= d.cJ.Large &&
                                            i().createElement(ua.M2, {
                                                isElite: e.isElite,
                                                vehicleName: e.label,
                                                vehicleType: e.type,
                                                vehicleLvl: e.vehicleLvl,
                                                size: ua.uA.ExtraSmall,
                                            });
                                        return i().createElement('div', { className: ca }, r);
                                    },
                                    [u, t, c, o],
                                );
                            return i().createElement(
                                'div',
                                { className: _ },
                                e.map((e, u) =>
                                    ((e, u) => {
                                        const a = e.name === Je.Vehicles,
                                            r = e.name === Je.VehicleSelect,
                                            n = a && c < d.cJ.Large,
                                            s = t && !r;
                                        return i().createElement(
                                            'div',
                                            { key: u, className: l()(E, s && ia) },
                                            i().createElement(ea, {
                                                size: m,
                                                name: e.name,
                                                image: e.image(m),
                                                value: n ? e.label : void 0,
                                                valueType: lt(e.name),
                                                tooltipArgs: e.tooltipArgs,
                                            }),
                                            g(e, r),
                                        );
                                    })(e, u),
                                ),
                            );
                        },
                    ),
                    _a = [],
                    Ea = (0, s.memo)(
                        ({ isCompleted: e, rewards: t, isLastColumn: u, currentLevel: a, onOpenOverlay: r }) => {
                            const n = l()(ku, !u && Ou);
                            return i().createElement(
                                'div',
                                { className: Tu },
                                i().createElement('div', { className: n }),
                                i().createElement(
                                    'div',
                                    { className: Iu },
                                    i().createElement(da, {
                                        currentLevel: a,
                                        onOpenOverlay: r,
                                        rewardsData: t || _a,
                                        rewardItemClassMix: Hu,
                                        isLevelAchieved: e,
                                        isVertical: !0,
                                    }),
                                ),
                            );
                        },
                    ),
                    ga = 'RewardsHeader_base_92',
                    pa = 'RewardsHeader_level_55',
                    Aa = 'RewardsHeader_level__achieved_30',
                    Fa = 'RewardsHeader_level__current_f0',
                    Ca = 'RewardsHeader_numeral_8d',
                    Da = 'RewardsHeader_numeral__disabled_af',
                    ha = 'RewardsHeader_achieved_8d',
                    ba = 'RewardsHeader_backlight_53',
                    va = 'RewardsHeader_particles_0e',
                    Ba = 'RewardsHeader_particles__right_9c',
                    fa = (0, s.memo)(({ isCompleted: e, currentLevel: t, stageLevel: u }) => {
                        const a = l()(Ca, !e && t < u && Da),
                            r = t === u && !e;
                        return i().createElement(
                            Wu,
                            {
                                contentId: R.views.lobby.paragons.tooltips.RewardsHeaderTooltip('resId'),
                                args: { isCompleted: e, isCurrentLevel: r },
                            },
                            i().createElement(
                                'div',
                                { className: ga },
                                r &&
                                    i().createElement(
                                        i().Fragment,
                                        null,
                                        i().createElement('div', { className: va }),
                                        i().createElement('div', { className: ba }),
                                        i().createElement('div', { className: l()(va, Ba) }),
                                    ),
                                i().createElement(
                                    'div',
                                    { className: l()(pa, e && Aa, r && Fa) },
                                    i().createElement('div', { className: a }, u),
                                ),
                                e && i().createElement('div', { className: ha }),
                            ),
                        );
                    }),
                    wa = (0, s.memo)(
                        ({
                            currentLevel: e,
                            allRewards: t,
                            getLevelRewards: u,
                            onOpenOverlay: a,
                            isRewardsView: r = !1,
                        }) => {
                            const n = zt();
                            (fu(Object.assign({}, n)),
                                (0, s.useEffect)(() => {
                                    const e = () => {
                                        const e = n.animationScroll.scrollPosition.goal;
                                        n.applyScroll(e - 1);
                                    };
                                    return (
                                        n.events.on('resizeHandled', e),
                                        () => {
                                            n.events.off('resizeHandled', e);
                                        }
                                    );
                                }, [n]));
                            const o = l()(wu, r && Su);
                            return i().createElement(
                                'div',
                                { className: o },
                                i().createElement(
                                    'div',
                                    { className: Pu },
                                    i().createElement(
                                        vu.Horizontal.Area.Default,
                                        {
                                            api: Object.assign({}, n, { handleMouseWheel: n.handleMouseWheel }),
                                            className: yu,
                                            classNames: { content: Nu, wrapper: Lu },
                                            barClassNames: { base: Mu },
                                        },
                                        i().createElement(
                                            'div',
                                            {
                                                className: Ru,
                                                onMouseEnter: () => {
                                                    ee.playHighlight();
                                                },
                                                onMouseDown: () => {
                                                    ee.playClick();
                                                },
                                            },
                                            t.map((r, n) =>
                                                i().createElement(
                                                    'div',
                                                    { key: n },
                                                    i().createElement(
                                                        'div',
                                                        { className: xu },
                                                        i().createElement(fa, {
                                                            currentLevel: e,
                                                            stageLevel: r.number,
                                                            isCompleted: r.isCompleted,
                                                        }),
                                                    ),
                                                    i().createElement(Ea, {
                                                        currentLevel: n + 1,
                                                        isCompleted: r.isCompleted,
                                                        isLastColumn: n === t.length - 1,
                                                        rewards: u && u(r.number),
                                                        onOpenOverlay: a,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Sa = R.strings.paragons,
                    xa = (0, G.Pi)(() => {
                        const e = wt(),
                            t = e.model,
                            u = e.controls,
                            a = t.computes.getAllRewards(),
                            r = t.computes.getCurrentChapter().chapterLevel,
                            n = t.computes.getCurrentChapter().id,
                            s = Sa.chapterName.shortUpperCase.$dyn(`id_${n}`);
                        return i().createElement(
                            'div',
                            { className: St },
                            i().createElement('div', { className: xt }),
                            i().createElement(
                                'div',
                                { className: Rt },
                                i().createElement(qe.h, {
                                    topTitle: Sa.project.name(),
                                    mainTitle: Sa.allRewards.title(),
                                    subtitle: Sa.allRewards.subtitle(),
                                    stage: s,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Pt },
                                i().createElement(wa, {
                                    allRewards: a,
                                    currentLevel: r,
                                    getLevelRewards: t.computes.getLevelRewardsByNumber,
                                    onOpenOverlay: u.onSelectVehicleReward,
                                }),
                            ),
                        );
                    }),
                    Ra = 'App_base_4b',
                    Pa = 'App_infoBackground_84',
                    ya = 'App_vignette_ba',
                    La = 'App_button_76',
                    Na = 'App_back_b6',
                    Ma = 'App_close_76',
                    Ta = 'App_navigationContainer_c0',
                    ka = 'App_navigation_01',
                    Oa = 'App_content_3b',
                    Ia = 'App_infoHeaderWrapper_74',
                    Ha = 'App_infoContainer_af',
                    Ua = 'NavItem_base_22',
                    $a = 'NavItem_base__hovered_1d',
                    za = 'NavItem_base__selected_6d',
                    Wa = 'NavItem_base__disabled_b8',
                    Ga = 'NavItem_border_dc',
                    ja = 'NavItem_border__visible_10',
                    Va = 'NavItem_glow_e8',
                    Xa = 'NavItem_glow__visible_f5',
                    qa = 'NavItem_icon_d8',
                    Za = 'NavItem_icon__invsible_e5',
                    Ya = 'NavItem_icon__visible_f9',
                    Ja = 'NavItem_text_3d',
                    Ka = 'NavItem_bubble_74',
                    Qa = 'R.images.gui.maps.icons.paragons.navigation.icons',
                    er = R.strings.paragons.navigation,
                    tr = (0, s.memo)(({ tabId: e, onClick: t, isSelected: u, hasNewItems: a, disabled: r }) => {
                        const n = (0, s.useState)(!1),
                            o = n[0],
                            c = n[1],
                            m = (0, d.GS)().mediaSize >= d.cJ.Medium ? '_large' : '',
                            _ = String(e) === String(We.rewards) && r;
                        return i().createElement(
                            Yu,
                            {
                                header: er.tooltip.header.$dyn(We[e]),
                                body: er.tooltip.body.$dyn(`${We[e]}${_ ? '_disabled' : ''}`),
                            },
                            i().createElement(
                                'div',
                                {
                                    className: l()(Ua, o && $a, u && za, r && Wa),
                                    onMouseEnter: () => {
                                        r || (ee.playHighlight(), c(!0));
                                    },
                                    onMouseLeave: () => {
                                        r || c(!1);
                                    },
                                    onClick: () => {
                                        r || (t(), ee.playClick());
                                    },
                                },
                                i().createElement('div', { className: l()(Ga, u && ja) }),
                                i().createElement('div', { className: l()(Va, u && Xa) }),
                                a && i().createElement('div', { className: Ka }),
                                i().createElement('div', {
                                    className: qa,
                                    style: { backgroundImage: `url(${Qa}.${We[e] + m})` },
                                }),
                                i().createElement('div', {
                                    className: l()(qa, Za, (u || o) && Ya),
                                    style: { backgroundImage: `url(${Qa}.${We[e] + m + '_active'})` },
                                }),
                                i().createElement(ta.ZP, { text: er.$dyn(We[e]), className: Ja }),
                            ),
                        );
                    });
                let ur;
                !(function (e) {
                    ((e.InProgress = 'inProgress'), (e.NoAccess = 'noAccess'), (e.Completed = 'completed'));
                })(ur || (ur = {}));
                const ar = 'Footer_base_ce',
                    rr = 'Footer_base__warning_72',
                    nr = 'Footer_footerContainer_22',
                    sr = 'Footer_points_6c',
                    ir = 'Footer_pointsGray_70',
                    or = 'Footer_pointsGray__small_d0',
                    lr = 'Footer_pointsDescription_a5',
                    cr = 'Footer_footerShine_85',
                    mr = 'Footer_footerShine__active_50',
                    dr = 'Footer_infoIcon_1b',
                    _r = 'Footer_button_25',
                    Er = 'Footer_buttonWarning_9b',
                    gr = 'Footer_warning_be',
                    pr = 'Footer_warningIcon_e1',
                    Ar = 'Footer_warningText_08',
                    Fr = R.strings.paragons.navigation.progression,
                    Cr = (0, s.memo)(
                        ({
                            points: e,
                            isActive: t = !1,
                            maxPointsCount: u = 0,
                            isCurrentLevel: a = !0,
                            isButtonDisabled: r = !1,
                            isCompletedAndHasRewards: n = !1,
                            handleToCurrentSgaeEvent: s,
                            handleToRewards: o,
                        }) =>
                            n
                                ? i().createElement(
                                      'div',
                                      { className: l()(ar, rr) },
                                      i().createElement('div', { className: cr }),
                                      i().createElement(
                                          'div',
                                          { className: gr },
                                          i().createElement('div', { className: pr }),
                                          i().createElement(ta.ZP, { text: Fr.warning.claimRewards(), className: Ar }),
                                      ),
                                      i().createElement(
                                          ne,
                                          { type: ue.primary, mixClass: Er, onClick: o, disabled: r },
                                          i().createElement(ta.ZP, { text: Fr.button.toRewards() }),
                                      ),
                                  )
                                : t
                                  ? i().createElement(
                                        'div',
                                        { className: ar },
                                        i().createElement('div', { className: l()(cr, a && mr) }),
                                        a
                                            ? i().createElement(
                                                  Wu,
                                                  { contentId: R.views.lobby.paragons.tooltips.PointsTooltip('resId') },
                                                  i().createElement(
                                                      'div',
                                                      { className: nr },
                                                      i().createElement(
                                                          'div',
                                                          { className: sr },
                                                          i().createElement(ta.ZP, { text: Ct(e) }),
                                                          i().createElement(ta.ZP, {
                                                              text: Fr.text.splittedValue(),
                                                              format: {
                                                                  binding: {
                                                                      value: i().createElement(ta.ZP, {
                                                                          text: Ct(u),
                                                                          className: l()(ir, or),
                                                                      }),
                                                                  },
                                                              },
                                                              className: ir,
                                                          }),
                                                      ),
                                                      i().createElement(
                                                          'div',
                                                          { className: lr },
                                                          i().createElement(ta.ZP, { text: Fr.levelPoints() }),
                                                          i().createElement('div', { className: dr }),
                                                      ),
                                                  ),
                                              )
                                            : i().createElement(
                                                  ne,
                                                  { type: ue.primary, mixClass: _r, onClick: s, disabled: r },
                                                  i().createElement(ta.ZP, { text: Fr.button.toCurrentStage() }),
                                              ),
                                    )
                                  : i().createElement(
                                        'div',
                                        { className: ar },
                                        i().createElement('div', { className: cr }),
                                        i().createElement(
                                            Yu,
                                            {
                                                header: Fr.tooltip.storagePointsHeader(),
                                                body: Fr.tooltip.storagePointsBody(),
                                            },
                                            i().createElement(
                                                'div',
                                                { className: nr },
                                                i().createElement(
                                                    'div',
                                                    { className: sr },
                                                    i().createElement(rt, { value: e }),
                                                ),
                                                i().createElement(
                                                    'div',
                                                    { className: lr },
                                                    i().createElement(ta.ZP, { text: Fr.pointsInStorage() }),
                                                    i().createElement('div', { className: dr }),
                                                ),
                                            ),
                                        ),
                                    ),
                    ),
                    Dr = 'CompletedScreen_base_55',
                    hr = 'CompletedScreen_header_b0',
                    br = 'CompletedScreen_content_00',
                    vr = 'CompletedScreen_container_f5',
                    Br = 'CompletedScreen_title_29',
                    fr = 'CompletedScreen_subtitle_b0',
                    wr = 'CompletedScreen_icon_65',
                    Sr = 'CompletedScreen_shine_57',
                    xr = 'CompletedScreen_smoke_8f',
                    Rr = 'CompletedScreen_footerContainer_43',
                    Pr = R.strings.paragons,
                    yr = Pr.navigation.progression,
                    Lr = (0, s.memo)(({ points: e, currentStage: t = 0 }) =>
                        i().createElement(
                            'div',
                            { className: Dr },
                            i().createElement(
                                'div',
                                { className: hr },
                                i().createElement(qe.h, {
                                    stage: t,
                                    topTitle: Pr.project.name(),
                                    mainTitle: yr.progress(),
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: br },
                                i().createElement(
                                    'div',
                                    { className: vr },
                                    i().createElement('div', { className: wr }),
                                    i().createElement('div', { className: Sr }),
                                    i().createElement('div', { className: xr }),
                                    i().createElement(ta.ZP, { text: yr.progressionCompleted.title(), className: Br }),
                                    i().createElement(ta.ZP, {
                                        text: yr.progressionCompleted.description_1(),
                                        className: fr,
                                    }),
                                    i().createElement(ta.ZP, {
                                        text: yr.progressionCompleted.description_2(),
                                        className: fr,
                                    }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: Rr },
                                Boolean(e) && i().createElement(Cr, { points: e, isActive: !1 }),
                            ),
                        ),
                    ),
                    Nr = 'LockedScreen_base_c0',
                    Mr = 'LockedScreen_header_5e',
                    Tr = 'LockedScreen_content_ab',
                    kr = 'LockedScreen_container_bb',
                    Or = 'LockedScreen_title_2b',
                    Ir = 'LockedScreen_subtitle_d2',
                    Hr = 'LockedScreen_countContainer_43',
                    Ur = 'LockedScreen_count_3b',
                    $r = 'LockedScreen_countGray_fb',
                    zr = 'LockedScreen_button_07',
                    Wr = 'LockedScreen_icon_8d',
                    Gr = 'LockedScreen_shine_2e',
                    jr = 'LockedScreen_smoke_f2',
                    Vr = 'LockedScreen_footerContainer_58',
                    Xr = R.strings.paragons,
                    qr = Xr.navigation.progression,
                    Zr = (0, s.memo)(
                        ({
                            points: e,
                            completedStagesCount: t,
                            allStagesCount: u,
                            currentStage: a = 0,
                            handleToStages: r,
                        }) =>
                            i().createElement(
                                'div',
                                { className: Nr },
                                i().createElement(
                                    'div',
                                    { className: Mr },
                                    i().createElement(qe.h, {
                                        stage: a,
                                        topTitle: Xr.project.name(),
                                        mainTitle: qr.progress(),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Tr },
                                    i().createElement(
                                        'div',
                                        { className: kr },
                                        i().createElement('div', { className: Wr }),
                                        i().createElement('div', { className: Gr }),
                                        i().createElement('div', { className: jr }),
                                        i().createElement(ta.ZP, { text: qr.noAccess.title(), className: Or }),
                                        i().createElement(ta.ZP, { text: qr.noAccess.description(), className: Ir }),
                                        i().createElement(
                                            'div',
                                            { className: Hr },
                                            i().createElement(ta.ZP, { text: qr.completedStages(), className: Ur }),
                                            i().createElement(ta.ZP, { text: `${t} `, className: Ur }),
                                            i().createElement(ta.ZP, {
                                                text: qr.text.splittedValue(),
                                                format: { binding: { value: u } },
                                                className: $r,
                                            }),
                                        ),
                                        i().createElement(
                                            ne,
                                            { type: ue.primary, mixClass: zr, onClick: r },
                                            i().createElement(ta.ZP, { text: qr.button.toStage() }),
                                        ),
                                    ),
                                ),
                                i().createElement('div', { className: Vr }, i().createElement(Cr, { points: e })),
                            ),
                    ),
                    Yr = 'ProgressionView_base_a0',
                    Jr = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    },
                    Kr = {
                        1: {
                            [d.cJ.ExtraSmall]: [Qe.S296x222],
                            [d.cJ.Small]: [Qe.S296x222],
                            [d.cJ.Medium]: [Qe.S400x300],
                            [d.cJ.Large]: [Qe.S600x450],
                            [d.cJ.ExtraLarge]: [Qe.S600x450],
                        },
                        2: {
                            [d.cJ.ExtraSmall]: [Qe.S296x222, Qe.S232x174],
                            [d.cJ.Small]: [Qe.S296x222, Qe.S232x174],
                            [d.cJ.Medium]: [Qe.S400x300, Qe.S232x174],
                            [d.cJ.Large]: [Qe.S600x450, Qe.S296x222],
                            [d.cJ.ExtraLarge]: [Qe.S600x450, Qe.S296x222],
                        },
                        3: {
                            [d.cJ.ExtraSmall]: [Qe.S232x174, Qe.S296x222, Qe.S232x174],
                            [d.cJ.Small]: [Qe.S232x174, Qe.S296x222, Qe.S232x174],
                            [d.cJ.Medium]: [Qe.S232x174, Qe.S400x300, Qe.S232x174],
                            [d.cJ.Large]: [Qe.S296x222, Qe.S600x450, Qe.S296x222],
                            [d.cJ.ExtraLarge]: [Qe.S296x222, Qe.S600x450, Qe.S296x222],
                        },
                    },
                    Qr = {
                        1: {
                            [d.cJ.ExtraSmall]: [Qe.S296x222],
                            [d.cJ.Small]: [Qe.S296x222],
                            [d.cJ.Medium]: [Qe.S400x300],
                            [d.cJ.Large]: [Qe.S600x450],
                            [d.cJ.ExtraLarge]: [Qe.S600x450],
                        },
                        2: {
                            [d.cJ.ExtraSmall]: [Qe.S296x222, Qe.S296x222],
                            [d.cJ.Small]: [Qe.S296x222, Qe.S296x222],
                            [d.cJ.Medium]: [Qe.S400x300, Qe.S400x300],
                            [d.cJ.Large]: [Qe.S600x450, Qe.S600x450],
                            [d.cJ.ExtraLarge]: [Qe.S600x450, Qe.S600x450],
                        },
                        3: {
                            [d.cJ.ExtraSmall]: [Qe.S232x174, Qe.S232x174, Qe.S232x174],
                            [d.cJ.Small]: [Qe.S296x222, Qe.S296x222, Qe.S296x222],
                            [d.cJ.Medium]: [Qe.S400x300, Qe.S400x300, Qe.S400x300],
                            [d.cJ.Large]: [Qe.S400x300, Qe.S400x300, Qe.S400x300],
                            [d.cJ.ExtraLarge]: [Qe.S600x450, Qe.S600x450, Qe.S600x450],
                        },
                    },
                    en = {
                        [d.cJ.ExtraSmall]: {
                            width: 890,
                            pointsDistance: 690,
                            pointIndent: 100,
                            pointIndentLast: 200,
                            rewardsWidth: 762,
                        },
                        [d.cJ.Small]: {
                            width: 990,
                            pointsDistance: 790,
                            pointIndent: 100,
                            pointIndentLast: 100,
                            rewardsWidth: 837,
                        },
                        [d.cJ.Medium]: {
                            width: 1300,
                            pointsDistance: 1e3,
                            pointIndent: 150,
                            pointIndentLast: 300,
                            rewardsWidth: 1150,
                        },
                        [d.cJ.Large]: {
                            width: 1460,
                            pointsDistance: 1100,
                            pointIndent: 163,
                            pointIndentLast: 360,
                            rewardsWidth: 1300,
                        },
                        [d.cJ.ExtraLarge]: {
                            width: 1560,
                            pointsDistance: 1200,
                            pointIndent: 163,
                            pointIndentLast: 360,
                            rewardsWidth: 1796,
                        },
                    },
                    tn = {
                        base: 'ActionButton_base_a0',
                        base__hovered: 'ActionButton_base__hovered_ea',
                        icon: 'ActionButton_icon_6f',
                        icon__small: 'ActionButton_icon__small_50',
                        icon__normal: 'ActionButton_icon__normal_d8',
                        base__mouseDown: 'ActionButton_base__mouseDown_b7',
                        label: 'ActionButton_label_76',
                        base__visibleLabel: 'ActionButton_base__visibleLabel_f7',
                    };
                let un, an;
                (!(function (e) {
                    ((e.COMPARE = 'compare'), (e.PREVIEW = 'preview'));
                })(un || (un = {})),
                    (function (e) {
                        ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                    })(an || (an = {})));
                const rn = [
                    'label',
                    'isVisibleLabel',
                    'autofocus',
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
                    'type',
                ];
                function nn() {
                    return (
                        (nn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        nn.apply(this, arguments)
                    );
                }
                const sn = {
                        [un.PREVIEW]: 'R.images.gui.maps.icons.library.previewVehicle',
                        [un.COMPARE]: 'R.images.gui.maps.icons.library.compareVehicle',
                    },
                    on = (0, s.memo)((e) => {
                        let t = e.label,
                            u = e.isVisibleLabel,
                            a = void 0 !== u && u,
                            r = e.autofocus,
                            n = void 0 !== r && r,
                            o = e.soundHover,
                            c = void 0 === o ? 'highlight' : o,
                            m = e.soundClick,
                            d = void 0 === m ? 'play' : m,
                            _ = e.size,
                            E = void 0 === _ ? an.NORMAL : _,
                            g = e.onClick,
                            p = e.onMouseEnter,
                            A = e.onMouseLeave,
                            F = e.onMouseDown,
                            C = e.onMouseUp,
                            D = e.onFocus,
                            h = e.onBlur,
                            b = e.type,
                            v = void 0 === b ? un.PREVIEW : b,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, rn);
                        const f = (0, s.useState)(!1),
                            w = f[0],
                            S = f[1],
                            x = (0, s.useState)(!1),
                            R = x[0],
                            P = x[1],
                            y = (0, s.useState)(n),
                            L = y[0],
                            N = y[1],
                            M = (0, s.useRef)(null),
                            T = (0, s.useCallback)(() => {
                                M.current && (M.current.focus(), N(!0));
                            }, []),
                            k = (0, s.useCallback)(
                                (e) => {
                                    L && null !== M.current && !M.current.contains(e.target) && N(!1);
                                },
                                [L],
                            );
                        ((0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', k),
                                () => {
                                    document.removeEventListener('mousedown', k);
                                }
                            ),
                            [k],
                        ),
                            (0, s.useEffect)(() => {
                                N(n);
                            }, [n]));
                        const O = (0, s.useCallback)(
                                (e) => {
                                    g && g(e);
                                },
                                [g],
                            ),
                            I = (0, s.useCallback)(
                                (e) => {
                                    (S(!0), F && F(e), d && Q(d), n && T());
                                },
                                [n, F, T, d],
                            ),
                            H = (0, s.useCallback)(
                                (e) => {
                                    (S(!1), C && C(e));
                                },
                                [C],
                            ),
                            U = (0, s.useCallback)(
                                (e) => {
                                    (p && p(e), c && Q(c), P(!0));
                                },
                                [p, c],
                            ),
                            $ = (0, s.useCallback)(
                                (e) => {
                                    (S(!1), P(!1), A && A(e));
                                },
                                [A],
                            ),
                            z = (0, s.useCallback)(
                                (e) => {
                                    (N(!0), D && D(e));
                                },
                                [D],
                            ),
                            W = (0, s.useCallback)(
                                (e) => {
                                    (N(!1), h && h(e));
                                },
                                [h],
                            ),
                            G = l()(
                                tn.base,
                                a && tn.base__visibleLabel,
                                w && tn.base__mouseDown,
                                R && tn.base__hovered,
                                L && tn.base__focused,
                            ),
                            j = l()(tn.icon, tn[`icon__${E}`]);
                        return i().createElement(
                            'div',
                            nn(
                                {
                                    ref: M,
                                    className: G,
                                    onClick: O,
                                    onMouseEnter: U,
                                    onMouseLeave: $,
                                    onMouseDown: I,
                                    onMouseUp: H,
                                    onFocus: z,
                                    onBlur: W,
                                },
                                B,
                            ),
                            i().createElement('div', { className: j, style: { backgroundImage: `url(${sn[v]})` } }),
                            i().createElement('div', { className: tn.label }, t),
                        );
                    }),
                    ln = {
                        base: 'CompensationLabel_base_54',
                        icon: 'CompensationLabel_icon_b3',
                        icon__vehicles: 'CompensationLabel_icon__vehicles_21',
                        value: 'CompensationLabel_value_75',
                        value__credits: 'CompensationLabel_value__credits_95',
                    },
                    cn = ({ compensatedBonusType: e, compensatedItem: t, value: u, valueType: a }) => {
                        const r = Et(u, a);
                        return i().createElement(
                            'div',
                            { className: ln.base },
                            i().createElement('div', { className: l()(ln.icon, ln[`icon__${t}`]) }),
                            i().createElement('div', { className: l()(ln.value, ln[`value__${e}`]) }, r),
                        );
                    },
                    mn = {
                        base: 'MainReward_base_a6',
                        base__disabled: 'MainReward_base__disabled_52',
                        base__s232x174: 'MainReward_base__s232x174_4d',
                        base__s296x222: 'MainReward_base__s296x222_0a',
                        base__s400x300: 'MainReward_base__s400x300_7c',
                        base__s600x450: 'MainReward_base__s600x450_13',
                        info: 'MainReward_info_e4',
                        labelCont: 'MainReward_labelCont_1e',
                        labelCont__selectable: 'MainReward_labelCont__selectable_7a',
                        rewardWrapper: 'MainReward_rewardWrapper_a7',
                        rewardWrapper__selectable: 'MainReward_rewardWrapper__selectable_63',
                        label: 'MainReward_label_66',
                        labelText: 'MainReward_labelText_68',
                        selectableButtonContainer: 'MainReward_selectableButtonContainer_29',
                        previewPanel: 'MainReward_previewPanel_05',
                        previewPanel__s232x174: 'MainReward_previewPanel__s232x174_af',
                        previewPanel__s296x222: 'MainReward_previewPanel__s296x222_5c',
                        previewPanel__s400x300: 'MainReward_previewPanel__s400x300_4e',
                        previewPanel__s600x450: 'MainReward_previewPanel__s600x450_b8',
                        preview: 'MainReward_preview_3e',
                        compare: 'MainReward_compare_e1',
                        claimed: 'MainReward_claimed_5c',
                        selectableVehicleLabel: 'MainReward_selectableVehicleLabel_b2',
                        viewButton: 'MainReward_viewButton_eb',
                        selectButton: 'MainReward_selectButton_d9',
                    };
                function dn() {
                    return (
                        (dn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        dn.apply(this, arguments)
                    );
                }
                const _n = R.strings.paragons.navigation.progression,
                    En = (0, s.memo)(
                        ({
                            reward: e,
                            size: t,
                            isRewardReceived: u,
                            currentLevel: a,
                            isTooltipEnabled: r,
                            onCompareClick: n,
                            onPreviewVehicleClick: o,
                            onPreviewStyleClick: c,
                            onClaimVehicleClick: m,
                        }) => {
                            const _ = (0, d.GS)().mediaSize,
                                E = e.name === Je.VehicleSelect,
                                g = 'number' == typeof e.value ? Ct(e.value) : e.label,
                                p = _ >= d.cJ.Large,
                                A = (0, s.useMemo)(
                                    () => ({
                                        [Je.Vehicles]: i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement(
                                                'div',
                                                { className: mn.preview },
                                                i().createElement(
                                                    Yu,
                                                    { body: _n.button.preview() },
                                                    i().createElement(on, {
                                                        onClick: () => o(e.vehicleCD),
                                                        type: un.PREVIEW,
                                                        size: an.NORMAL,
                                                    }),
                                                ),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: mn.compare },
                                                i().createElement(
                                                    Yu,
                                                    { body: _n.button.compare() },
                                                    i().createElement(on, {
                                                        type: un.COMPARE,
                                                        size: an.NORMAL,
                                                        onClick: () => n(e.vehicleCD),
                                                    }),
                                                ),
                                            ),
                                        ),
                                        [Je.StyleProgress]: i().createElement(
                                            'div',
                                            { className: mn.preview },
                                            i().createElement(
                                                Yu,
                                                { body: _n.button.preview() },
                                                i().createElement(on, {
                                                    onClick: () => c(e.styleID, e.banchID, e.styleProgressLevel),
                                                    type: un.PREVIEW,
                                                    size: an.NORMAL,
                                                }),
                                            ),
                                        ),
                                    }),
                                    [n, c, o, e.banchID, e.styleID, e.styleProgressLevel, e.vehicleCD],
                                ),
                                F = Object.keys(A).includes(e.name),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        if (E)
                                            return i().createElement(
                                                'div',
                                                { className: mn.selectableButtonContainer },
                                                i().createElement(ta.ZP, {
                                                    text: _n.vehicleSelect.label(),
                                                    className: mn.selectableVehicleLabel,
                                                }),
                                                u
                                                    ? i().createElement(
                                                          ne,
                                                          {
                                                              type: ue.main,
                                                              mixClass: mn.selectButton,
                                                              onClick: () => m(a, e.value),
                                                          },
                                                          i().createElement(ta.ZP, { text: _n.button.selectVehicle() }),
                                                      )
                                                    : i().createElement(
                                                          ne,
                                                          {
                                                              type: ue.primary,
                                                              mixClass: mn.viewButton,
                                                              onClick: () => m(a, e.value),
                                                          },
                                                          i().createElement(ta.ZP, { text: _n.button.viewVehicle() }),
                                                      ),
                                            );
                                        if (u) return i().createElement('div', { className: mn.claimed });
                                        const t = e.isCompensation
                                                ? i().createElement(
                                                      Ku,
                                                      { tooltipArgs: e.tooltipArgs },
                                                      i().createElement(cn, {
                                                          value: e.value,
                                                          valueType: e.value,
                                                          compensatedBonusType: e.name,
                                                          compensatedItem: e.compensatedBonus,
                                                      }),
                                                  )
                                                : i().createElement('div', { className: mn.labelText }, g),
                                            r =
                                                e.name === Je.Vehicles
                                                    ? i().createElement(ua.M2, {
                                                          isElite: e.isElite,
                                                          vehicleName: e.label,
                                                          vehicleType: e.type,
                                                          vehicleLvl: e.vehicleLvl,
                                                      })
                                                    : t;
                                        return i().createElement('div', { className: mn.label }, r);
                                    },
                                    [a, u, E, m, g],
                                );
                            return i().createElement(
                                'div',
                                { className: l()(mn.base, mn[`base__${t}`]) },
                                i().createElement(
                                    'div',
                                    { className: l()(mn.rewardWrapper, E && mn.rewardWrapper__selectable) },
                                    i().createElement(
                                        ea,
                                        dn({}, e, {
                                            image: e.image(t),
                                            size: t,
                                            classNames: { info: mn.info },
                                            value: void 0,
                                            tooltipArgs: Object.assign({}, e.tooltipArgs, { isEnabled: r }),
                                        }),
                                    ),
                                ),
                                F &&
                                    i().createElement(
                                        'div',
                                        {
                                            className: l()(
                                                mn.previewPanel,
                                                mn[`previewPanel__${t}`],
                                                p && mn.previewPanel__large,
                                            ),
                                        },
                                        A[e.name],
                                    ),
                                i().createElement(
                                    'div',
                                    { className: l()(mn.labelCont, E && mn.labelCont__selectable) },
                                    C(e),
                                ),
                            );
                        },
                    ),
                    gn = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let pn, An;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(pn || (pn = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(An || (An = {})));
                const Fn = ({ size: e = pn.Default, classMix: t }) =>
                        i().createElement('div', { className: l()(gn.background, gn[`background__${e}`], t) }),
                    Cn = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Dn = ({ size: e }) => {
                        const t = l()(Cn.base, Cn[`base__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    hn = {
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
                    bn = (0, s.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: r, withoutBounce: n }) => {
                            const s = l()(
                                    hn.base,
                                    hn[`base__${e}`],
                                    u && hn.base__disabled,
                                    r && hn.base__finished,
                                    n && hn.base__withoutBounce,
                                ),
                                o = !u && !r;
                            return i().createElement(
                                'div',
                                { className: s, style: a, ref: t },
                                i().createElement('div', { className: hn.pattern }),
                                i().createElement('div', { className: hn.gradient }),
                                o && i().createElement(Dn, { size: e }),
                            );
                        },
                    ),
                    vn = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: r }) => {
                        const n = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, s.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            i().createElement(bn, { size: e, disabled: a, baseStyles: n, isComplete: o, lineRef: u })
                        );
                    };
                let Bn, fn;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Bn || (Bn = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(fn || (fn = {})));
                const wn = 'ProgressBarDeltaSimple_base_6c',
                    Sn = 'ProgressBarDeltaSimple_delta_99',
                    xn = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: r,
                            to: n,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = n < a,
                                m = (0, s.useState)(fn.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === fn.In,
                                g = d === fn.End,
                                p = d === fn.Idle,
                                A = (0, s.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, s.useEffect)(() => {
                                if (p && !u) {
                                    return Jr(() => {
                                        A(fn.In);
                                    }, t);
                                }
                            }, [A, u, p, t]),
                                (0, s.useEffect)(() => {
                                    if (E) {
                                        return Jr(() => {
                                            (o && o(), A(fn.End));
                                        }, e + t);
                                    }
                                }, [A, E, o, t, e]));
                            const F = (0, s.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                C = (0, s.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, s.useMemo)(
                                    () => ({ width: `${Math.abs(a - n)}%`, left: `${c ? n : a}%` }),
                                    [a, c, n],
                                );
                            return g
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: wn, style: D },
                                      i().createElement(
                                          'div',
                                          { style: p ? F : C, className: Sn },
                                          i().createElement(Dn, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    Rn = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: r,
                            isComplete: n,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, s.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(bn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: n,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    i().createElement(xn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Pn = 'ProgressBarDeltaGrow_base_7e',
                    yn = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Ln = 'ProgressBarDeltaGrow_glow_68',
                    Nn = (e) => (e ? { left: 0 } : { right: 0 }),
                    Mn = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Tn = (e) => ({ transitionDuration: `${e}ms` }),
                    kn = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: r,
                            to: n,
                            onEndAnimation: o,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const d = n < a,
                                _ = (0, s.useState)(Bn.Idle),
                                E = _[0],
                                g = _[1],
                                p = E === Bn.End,
                                A = E === Bn.Idle,
                                F = E === Bn.Grow,
                                C = E === Bn.Shrink,
                                D = (0, s.useCallback)(
                                    (e) => {
                                        (g(e), c && c(e));
                                    },
                                    [c],
                                ),
                                h = (0, s.useCallback)(
                                    (e, t) =>
                                        Jr(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, s.useEffect)(() => {
                                if (!u)
                                    return A
                                        ? h(Bn.Grow, t)
                                        : F
                                          ? h(Bn.Shrink, e)
                                          : C
                                            ? h(Bn.End, e)
                                            : void (p && o && o());
                            }, [h, u, p, F, A, C, o, t, e]);
                            const b = (0, s.useMemo)(() => Object.assign({ width: '100%' }, Tn(e), Nn(d)), [d, e]),
                                v = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Tn(e), Nn(d)), [d, e]),
                                B = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Mn(d, a), Tn(e)), [a, d, e]),
                                f = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(n - a)}%` }, Mn(d, a), Tn(e)),
                                    [a, d, n, e],
                                );
                            if (p) return null;
                            const w = l()(Pn, m, d && 0 === n && yn);
                            return i().createElement(
                                'div',
                                { style: A ? B : f, className: w },
                                i().createElement(
                                    'div',
                                    { style: C ? v : b, className: Ln },
                                    i().createElement(Dn, { size: r }),
                                ),
                            );
                        },
                    ),
                    On = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: r,
                            isComplete: n,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, s.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                g = (0, s.useCallback)(
                                    (e) => {
                                        (e === Bn.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, s.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, s.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(bn, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: n,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? A : p,
                                }),
                                u >= 0 &&
                                    i().createElement(kn, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    In = ['onComplete', 'onEndAnimation'];
                function Hn() {
                    return (
                        (Hn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Hn.apply(this, arguments)
                    );
                }
                const Un = (0, s.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, In);
                        const r = (0, s.useState)(!1),
                            n = r[0],
                            o = r[1],
                            l = (0, s.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== n && o(e), e && t && t(), u && u());
                            }, [n, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case An.Simple:
                                return i().createElement(Rn, Hn({}, a, { onEndAnimation: l, isComplete: n }));
                            case An.Growing:
                                return i().createElement(On, Hn({}, a, { onEndAnimation: l, isComplete: n }));
                            default:
                                return null;
                        }
                    }),
                    $n = ['onEndAnimation'];
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const Wn = (0, s.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, $n);
                    const a = (0, s.useRef)({}),
                        r = (0, s.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        n = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = n),
                        i().createElement(Un, zn({}, u, { onEndAnimation: r, key: `${n}-${u.to}`, from: n }))
                    );
                });
                function Gn() {
                    return (
                        (Gn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Gn.apply(this, arguments)
                    );
                }
                const jn = (0, s.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: n,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return i().createElement(vn, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: a,
                                animationSettings: n,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: o,
                            };
                            return n.withStack
                                ? i().createElement(Wn, c)
                                : i().createElement(Un, Gn({ key: `${r}-${t}` }, c));
                        },
                    ),
                    Vn = (e) => ({
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
                    Xn = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (yt(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    qn = {
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
                    Zn = {
                        freezed: !1,
                        withStack: !1,
                        type: An.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Yn = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = qn,
                            size: u = pn.Default,
                            animationSettings: a = Zn,
                            disabled: r = !1,
                            withoutBackground: n = !1,
                            progressBarBackgroundClassMix: o,
                            value: c,
                            deltaFrom: m,
                            lineRef: d,
                            onChangeAnimationState: _,
                            onEndAnimation: E,
                            onComplete: g,
                        }) => {
                            const p = ((e, t, u) =>
                                (0, s.useMemo)(() => {
                                    const a = (yt(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Xn(a, t, u) };
                                }, [u, t, e]))(c, e, m);
                            return i().createElement(
                                'div',
                                { className: l()(gn.base, gn[`base__${u}`]), style: Vn(t) },
                                !n && i().createElement(Fn, { size: u, classMix: o }),
                                i().createElement(jn, {
                                    size: u,
                                    lineRef: d,
                                    disabled: r,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: E,
                                    onChangeAnimationState: _,
                                    onComplete: g,
                                }),
                            );
                        },
                    ),
                    Jn = Object.assign({}, Zn, {
                        withStack: !0,
                        type: An.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    Kn = {
                        base: 'ProgressBar_base_a4',
                        base__medium: 'ProgressBar_base__medium_d6',
                        base__small: 'ProgressBar_base__small_6d',
                        background: 'ProgressBar_background_01',
                        background__medium: 'ProgressBar_background__medium_92',
                        background__small: 'ProgressBar_background__small_e5',
                        lineWrapper: 'ProgressBar_lineWrapper_9b',
                    };
                let Qn, es;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Qn || (Qn = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(es || (es = {})));
                const ts = ({ size: e = Qn.Default, classMix: t }) =>
                        i().createElement('div', { className: l()(Kn.background, Kn[`background__${e}`], t) }),
                    us = {
                        base: 'ProgressBarBlink_base_b0',
                        base__medium: 'ProgressBarBlink_base__medium_fb',
                        base__small: 'ProgressBarBlink_base__small_79',
                    },
                    as = ({ size: e }) => {
                        const t = l()(us.base, us[`base__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    rs = {
                        base: 'ProgressLineImpose_base_c3',
                        base__disabled: 'ProgressLineImpose_base__disabled_b7',
                        base__finished: 'ProgressLineImpose_base__finished_d8',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_70',
                        pattern: 'ProgressLineImpose_pattern_01',
                        base__small: 'ProgressLineImpose_base__small_38',
                        gradient: 'ProgressLineImpose_gradient_a1',
                        glow: 'ProgressLineImpose_glow_74',
                        glow__left: 'ProgressLineImpose_glow__left_33',
                    },
                    ns = (0, s.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: r, withoutBounce: n }) => {
                            const s = l()(
                                    rs.base,
                                    rs[`base__${e}`],
                                    u && rs.base__disabled,
                                    r && rs.base__finished,
                                    n && rs.base__withoutBounce,
                                ),
                                o = !u && !r;
                            return i().createElement(
                                'div',
                                { className: s, style: a, ref: t },
                                i().createElement('div', { className: rs.pattern }),
                                i().createElement('div', { className: rs.gradient }),
                                o && i().createElement(as, { size: e }),
                            );
                        },
                    );
                let ss, is;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(ss || (ss = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(is || (is = {})));
                const os = 'ProgressBarDeltaGrow_base_33',
                    ls = 'ProgressBarDeltaGrow_base__withoutBounce_75',
                    cs = 'ProgressBarDeltaGrow_glow_e5',
                    ms = 'ProgressBarDeltaGrow_blink_3d',
                    ds = (e) => (e ? { left: 0 } : { right: 0 }),
                    _s = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Es = (e) => ({ transitionDuration: `${e}ms` }),
                    gs = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: r,
                            to: n,
                            onEndAnimation: o,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const d = n < a,
                                _ = (0, s.useState)(ss.Idle),
                                E = _[0],
                                g = _[1],
                                p = E === ss.End,
                                A = E === ss.Idle,
                                F = E === ss.Grow,
                                C = E === ss.Shrink,
                                D = (0, s.useCallback)(
                                    (e) => {
                                        (g(e), c && c(e));
                                    },
                                    [c],
                                ),
                                h = (0, s.useCallback)(
                                    (e, t) =>
                                        Jr(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, s.useEffect)(() => {
                                if (!u)
                                    return A
                                        ? h(ss.Grow, t)
                                        : F
                                          ? h(ss.Shrink, e)
                                          : C
                                            ? h(ss.End, e)
                                            : void (p && o && o());
                            }, [h, u, p, F, A, C, o, t, e]);
                            const b = (0, s.useMemo)(() => Object.assign({ width: '100%' }, Es(e), ds(d)), [d, e]),
                                v = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Es(e), ds(d)), [d, e]),
                                B = (0, s.useMemo)(() => Object.assign({ width: '0%' }, _s(d, a), Es(e)), [a, d, e]),
                                f = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(n - a)}%` }, _s(d, a), Es(e)),
                                    [a, d, n, e],
                                );
                            if (p) return null;
                            const w = l()(os, m, d && 0 === n && ls);
                            return i().createElement(
                                'div',
                                { style: A ? B : f, className: w },
                                i().createElement(
                                    'div',
                                    { style: C ? v : b, className: cs },
                                    i().createElement('div', { className: ms }, i().createElement(as, { size: r })),
                                ),
                            );
                        },
                    ),
                    ps = 'ProgressBarGrowLine_deltaGrow_63',
                    As = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: r,
                            isComplete: n,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < u,
                                d = (0, s.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                g = (0, s.useCallback)(
                                    (e) => {
                                        (e === ss.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, s.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, s.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(ns, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: n,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? A : p,
                                }),
                                u >= 0 &&
                                    i().createElement(
                                        'div',
                                        { className: ps },
                                        i().createElement(gs, {
                                            transitionDuration: o.delta.duration,
                                            transitionDelay: o.delta.delay,
                                            onChangeAnimationState: g,
                                            freezed: o.freezed,
                                            onEndAnimation: l,
                                            from: u,
                                            size: t,
                                            to: e,
                                            className: o.delta.className,
                                        }),
                                    ),
                            );
                        },
                    ),
                    Fs = 'ProgressBarDeltaSimple_base_47',
                    Cs = 'ProgressBarDeltaSimple_delta_5e',
                    Ds = 'ProgressBarDeltaSimple_blink_61',
                    hs = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: r,
                            to: n,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = n < a,
                                m = (0, s.useState)(is.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === is.In,
                                g = d === is.End,
                                p = d === is.Idle,
                                A = (0, s.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, s.useEffect)(() => {
                                if (p && !u) {
                                    return Jr(() => {
                                        A(is.In);
                                    }, t);
                                }
                            }, [A, u, p, t]),
                                (0, s.useEffect)(() => {
                                    if (E) {
                                        return Jr(() => {
                                            (o && o(), A(is.End));
                                        }, e + t);
                                    }
                                }, [A, E, o, t, e]));
                            const F = (0, s.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                C = (0, s.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, s.useMemo)(
                                    () => ({ width: `${Math.abs(a - n)}%`, left: `${c ? n : a}%` }),
                                    [a, c, n],
                                );
                            return g
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: Fs, style: D },
                                      i().createElement(
                                          'div',
                                          { style: p ? F : C, className: Cs },
                                          i().createElement(
                                              'div',
                                              { className: Ds },
                                              i().createElement(as, { size: r }),
                                          ),
                                      ),
                                  );
                        },
                    ),
                    bs = (0, s.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: r,
                            isComplete: n,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, s.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(ns, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: n,
                                    baseStyles: m,
                                }),
                                u >= 0 &&
                                    i().createElement(hs, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    vs = ['onComplete', 'onEndAnimation'];
                function Bs() {
                    return (
                        (Bs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Bs.apply(this, arguments)
                    );
                }
                const fs = (0, s.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, vs);
                        const r = (0, s.useState)(!1),
                            n = r[0],
                            o = r[1],
                            l = (0, s.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== n && o(e), e && t && t(), u && u());
                            }, [n, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case es.Simple:
                                return i().createElement(bs, Bs({}, a, { onEndAnimation: l, isComplete: n }));
                            case es.Growing:
                                return i().createElement(As, Bs({}, a, { onEndAnimation: l, isComplete: n }));
                            default:
                                return null;
                        }
                    }),
                    ws = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: r }) => {
                        const n = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, s.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            i().createElement(ns, { size: e, disabled: a, baseStyles: n, isComplete: o, lineRef: u })
                        );
                    },
                    Ss = ['onEndAnimation'];
                function xs() {
                    return (
                        (xs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        xs.apply(this, arguments)
                    );
                }
                const Rs = (0, s.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, Ss);
                    const a = (0, s.useRef)({}),
                        r = (0, s.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        n = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = n),
                        i().createElement(fs, xs({}, u, { onEndAnimation: r, key: `${n}-${u.to}`, from: n }))
                    );
                });
                function Ps() {
                    return (
                        (Ps =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ps.apply(this, arguments)
                    );
                }
                const ys = (0, s.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: n,
                            onEndAnimation: s,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return i().createElement(ws, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: a,
                                animationSettings: n,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: o,
                            };
                            return n.withStack
                                ? i().createElement(Rs, c)
                                : i().createElement(fs, Ps({ key: `${r}-${t}` }, c));
                        },
                    ),
                    Ls = (e) => ({
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
                    Ns = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (yt(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    Ms = {
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
                            shadow: '0 0 4rem 1rem #ffaa0066, 0 0 9rem 1rem #ffaa0066, 0 0 12rem 2rem #ff550066, 0 0 12rem 4rem #ff000066',
                        },
                    },
                    Ts = {
                        freezed: !1,
                        withStack: !1,
                        type: es.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ks = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Ms,
                            size: u = Qn.Default,
                            animationSettings: a = Ts,
                            disabled: r = !1,
                            withoutBackground: n = !1,
                            value: o,
                            deltaFrom: c,
                            lineRef: m,
                            onChangeAnimationState: d,
                            onEndAnimation: _,
                            onComplete: E,
                        }) => {
                            const g = ((e, t, u) =>
                                (0, s.useMemo)(() => {
                                    const a = (yt(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Ns(a, t, u) };
                                }, [u, t, e]))(o, e, c);
                            return i().createElement(
                                'div',
                                { className: l()(Kn.base, Kn[`base__${u}`]), style: Ls(t) },
                                !n && i().createElement(ts, { size: u }),
                                i().createElement(ys, {
                                    size: u,
                                    lineRef: m,
                                    disabled: r,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: d,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    Os = 'OptimizedProgressBar_base_cc',
                    Is = 'OptimizedProgressBar_wrapper_34',
                    Hs = 'OptimizedProgressBar_background_98',
                    Us = ['api', 'value', 'maxValue', 'theme'];
                function $s() {
                    return (
                        ($s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $s.apply(this, arguments)
                    );
                }
                const zs = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Ws = (e) => {
                        let t = e.api,
                            u = e.value,
                            a = e.maxValue,
                            r = void 0 === a ? 100 : a,
                            n = e.theme,
                            o = void 0 === n ? Ms : n,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Us);
                        const c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = yt(0, u, r) / r,
                            E = (0, s.useCallback)(
                                (e) => {
                                    (d.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, u, a) => {
                                            const r = u.offsetWidth - a.offsetWidth,
                                                n = e - zs(u, t),
                                                s = yt(0, r, n);
                                            a.style.left = `${s}rem`;
                                        })(e, c.current, d.current),
                                        m.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                u,
                                                { container: a, line: r },
                                            ) => {
                                                const n = Math.max(0, Math.floor(a.offsetWidth * u) - 8e3),
                                                    s = e - zs(a, t),
                                                    i = yt(0, n, s);
                                                r.style.left = `${i}rem`;
                                            })(e, _, { line: m.current, container: c.current }));
                                },
                                [_],
                            ),
                            g = (0, s.useMemo)(() => Ls(o), [o]);
                        return (
                            (t.current.update = E),
                            i().createElement(
                                'div',
                                { className: Os, ref: c },
                                i().createElement(
                                    'div',
                                    { className: Is },
                                    i().createElement(
                                        'div',
                                        { style: g, className: Hs, ref: d },
                                        i().createElement(ts, { size: l.size }),
                                    ),
                                    i().createElement(
                                        ks,
                                        $s({}, l, {
                                            lineRef: m,
                                            value: u,
                                            theme: o,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Gs = 'Progression_base_83',
                    js = 'Progression_container_15',
                    Vs = 'Progression_container__first_d0',
                    Xs = 'Progression_container__last_cd',
                    qs = 'Progression_progressLineContainer_32',
                    Zs = 'Progression_progressAnimated_59',
                    Ys = 'Progression_progressBarContainer_15',
                    Js = 'Progression_points_0e',
                    Ks = 'Progression_point_b6',
                    Qs = 'Progression_point__last_86',
                    ei = 'Progression_point__hiddenStep_29',
                    ti = 'Progression_label_ca',
                    ui = 'Progression_line_70',
                    ai = (0, s.memo)(
                        ({
                            currentLevel: e,
                            selectedLevel: t,
                            maxLevel: u,
                            levels: a,
                            points: r,
                            maxPointsCount: n,
                            translate: o = 0,
                            isAnimationActive: c,
                        }) => {
                            var m;
                            const _ = (0, s.useState)(!1),
                                E = _[0],
                                g = _[1],
                                p = (0, s.useState)(!1),
                                A = p[0],
                                F = p[1],
                                C = (0, d.GS)().mediaSize,
                                D = (0, s.useRef)({ update: () => {} }),
                                h = [
                                    ...a,
                                    Object.assign({}, a[a.length - 1], {
                                        number: (null == (m = a[a.length - 1]) ? void 0 : m.number) + 1,
                                    }),
                                ],
                                b = 1 === t,
                                v = en[C].width,
                                B = en[C].pointsDistance * u;
                            return (
                                (0, s.useEffect)(() => {
                                    if (t === u)
                                        return (
                                            g(!0),
                                            Jr(() => {
                                                (g(!1), F(!0));
                                            }, 400)
                                        );
                                    F(!1);
                                }, [t, u]),
                                i().createElement(
                                    'div',
                                    { className: Gs, style: { width: `${v + 40}rem` } },
                                    i().createElement(
                                        'div',
                                        { className: l()(js, b && Vs, A && Xs), style: { width: `${v}rem` } },
                                        i().createElement(
                                            'div',
                                            {
                                                className: l()(qs, c && Zs),
                                                style: { width: `${B}rem`, transform: `translateX(${-1 * o}rem)` },
                                            },
                                            h.map((e, t) =>
                                                i().createElement(
                                                    'div',
                                                    {
                                                        key: e.number,
                                                        className: Ks,
                                                        style: {
                                                            transform: `translateX(${t * en[C].pointsDistance}rem)`,
                                                        },
                                                    },
                                                    i().createElement(ta.ZP, {
                                                        className: ti,
                                                        text: String(e.number - 1),
                                                    }),
                                                    i().createElement('div', { className: ui }),
                                                ),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: Ys },
                                                i().createElement(Ws, {
                                                    animationSettings: Jn,
                                                    value: ht(r, e, a),
                                                    maxValue: n,
                                                    api: D,
                                                }),
                                            ),
                                        ),
                                    ),
                                    !A &&
                                        i().createElement(
                                            'div',
                                            { className: Js, style: { width: `${v}rem` } },
                                            i().createElement(
                                                'div',
                                                { className: l()(Ks, Qs, E && ei) },
                                                i().createElement(ta.ZP, { text: String(u), className: ti }),
                                                i().createElement('div', { className: ui }),
                                            ),
                                        ),
                                )
                            );
                        },
                    ),
                    ri = {
                        base: 'ProgressScreen_base_f9',
                        header: 'ProgressScreen_header_ee',
                        content: 'ProgressScreen_content_3c',
                        rewardsContainer: 'ProgressScreen_rewardsContainer_30',
                        rewardsLine: 'ProgressScreen_rewardsLine_82',
                        rewardAnimated: 'ProgressScreen_rewardAnimated_2e',
                        rewardAnimated__left__0: 'ProgressScreen_rewardAnimated__left__0_51',
                        slideRewardLeft: 'ProgressScreen_slideRewardLeft_a9',
                        rewardAnimated__left__1: 'ProgressScreen_rewardAnimated__left__1_86',
                        slideRewardLeft1: 'ProgressScreen_slideRewardLeft1_6d',
                        rewardAnimated__left__2: 'ProgressScreen_rewardAnimated__left__2_43',
                        slideRewardLeft2: 'ProgressScreen_slideRewardLeft2_e6',
                        rewardAnimated__right__0: 'ProgressScreen_rewardAnimated__right__0_89',
                        slideRewardRight: 'ProgressScreen_slideRewardRight_1e',
                        rewardAnimated__right__1: 'ProgressScreen_rewardAnimated__right__1_29',
                        slideRewardRight1: 'ProgressScreen_slideRewardRight1_97',
                        rewardAnimated__right__2: 'ProgressScreen_rewardAnimated__right__2_70',
                        slideRewardRight2: 'ProgressScreen_slideRewardRight2_b4',
                        rewardAnimatedOut: 'ProgressScreen_rewardAnimatedOut_9b',
                        rewardAnimatedOut__left__0: 'ProgressScreen_rewardAnimatedOut__left__0_c4',
                        slideRewardOutLeft: 'ProgressScreen_slideRewardOutLeft_88',
                        rewardAnimatedOut__left__1: 'ProgressScreen_rewardAnimatedOut__left__1_98',
                        slideRewardOutLeft1: 'ProgressScreen_slideRewardOutLeft1_3e',
                        rewardAnimatedOut__left__2: 'ProgressScreen_rewardAnimatedOut__left__2_2f',
                        slideRewardOutLeft2: 'ProgressScreen_slideRewardOutLeft2_85',
                        rewardAnimatedOut__right__0: 'ProgressScreen_rewardAnimatedOut__right__0_91',
                        slideRewardOutRight: 'ProgressScreen_slideRewardOutRight_0a',
                        rewardAnimatedOut__right__1: 'ProgressScreen_rewardAnimatedOut__right__1_22',
                        slideRewardOutRight1: 'ProgressScreen_slideRewardOutRight1_37',
                        rewardAnimatedOut__right__2: 'ProgressScreen_rewardAnimatedOut__right__2_e8',
                        slideRewardOutRight2: 'ProgressScreen_slideRewardOutRight2_1c',
                        arrow: 'ProgressScreen_arrow_a5',
                        rewards: 'ProgressScreen_rewards_47',
                        arrow__disabled: 'ProgressScreen_arrow__disabled_3a',
                        rewardsWrapper: 'ProgressScreen_rewardsWrapper_e1',
                        rewardsWrapper__animationMask: 'ProgressScreen_rewardsWrapper__animationMask_73',
                        progressionContainer: 'ProgressScreen_progressionContainer_0e',
                        footerContainer: 'ProgressScreen_footerContainer_0e',
                    },
                    ni = R.strings.paragons,
                    si = ni.navigation.progression,
                    ii = 'R.images.gui.maps.icons.paragons.navigation.progression';
                var oi;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'), (e[(e.RIGHT = 1)] = 'RIGHT'));
                })(oi || (oi = {}));
                const li = (0, G.Pi)(({ points: e }) => {
                        var t, u, a;
                        const r = (0, s.useState)(0),
                            n = r[0],
                            o = r[1],
                            c = (0, s.useState)(!1),
                            m = c[0],
                            _ = c[1],
                            E = (0, s.useState)(oi.LEFT),
                            g = E[0],
                            p = E[1],
                            A = wt(),
                            F = A.model,
                            C = A.controls,
                            D = (null == (t = F.computes.getCurrentStage()) ? void 0 : t.chapterLevel) || 1,
                            h = (0, s.useState)(D),
                            b = h[0],
                            v = h[1],
                            B = (0, d.GS)().mediaSize,
                            f = (0, s.useState)(en[B].pointIndent),
                            w = f[0],
                            S = f[1],
                            x = B > d.cJ.Small ? 'large' : 'small',
                            P = C.onCompareVehicle,
                            y = C.onPreviewVehicle,
                            L = C.onSelectVehicle,
                            N = C.onPreviewStyle,
                            M = C.onTabChange,
                            T = F.computes.getLevels(),
                            k = F.computes.getMaxPointsCount(),
                            O = F.computes.getLevelsCount(),
                            I = (null == (u = F.computes.getCurrentStage()) ? void 0 : u.id) || 1,
                            H = null == (a = F.computes.getLevelByNumber(D)) ? void 0 : a.maxPoints,
                            U = b - 1 > 0,
                            $ = b + 1 <= O,
                            z = F.computes.getAllLevelsRewards(),
                            W = $ && !m ? 'active' : 'disabled',
                            G = U && !m ? 'active' : 'disabled',
                            j = g === oi.LEFT ? 'left' : 'right',
                            V = g === oi.LEFT ? b - 1 : b + 1,
                            X = F.computes.isAllProgressionCompleted(),
                            q = X ? k : e;
                        ((0, s.useEffect)(() => {
                            let e = (b - 1) * en[B].pointsDistance - en[B].pointIndent,
                                t = (b - 1) * en[B].rewardsWidth;
                            return 1 === b
                                ? ((e = -1 * en[B].pointIndent),
                                  (t = 0),
                                  S(e),
                                  Jr(() => {
                                      o(t);
                                  }, 200))
                                : Jr(() => {
                                      (S(e), o(t));
                                  }, 200);
                        }, [b, B, O]),
                            (0, s.useEffect)(() => {
                                const e = 100 * Math.pow(-1, g),
                                    t = 150 * Math.pow(-1, g);
                                1 !== b && (S(w - e), o(n - t));
                            }, [b, g]));
                        const Z = () => {
                                (_(!0),
                                    Jr(() => {
                                        _(!1);
                                    }, 900));
                            },
                            Y = () => {
                                $ && (v(b + 1), p(oi.LEFT), Z());
                            },
                            J = () => {
                                U && (v(b - 1), p(oi.RIGHT), Z());
                            },
                            K = (e) => {
                                !m && e.deltaY < 0 && $
                                    ? (Y(), Q(R.sounds.paragons_slide()))
                                    : !m && e.deltaY > 0 && U && (J(), Q(R.sounds.paragons_slide()));
                            },
                            te = () => {
                                ee.playHighlight();
                            },
                            ue = (0, s.useMemo)(
                                () =>
                                    z.map(({ number: e, rewards: t, hasMainRewards: u, isCompleted: a }) =>
                                        i().createElement(
                                            'div',
                                            { className: ri.rewards, key: `reward_${e}` },
                                            ((e, t, u, a) => {
                                                const r = t ? Kr : Qr,
                                                    n = u < D || a;
                                                if (e.length)
                                                    return e.map((t, a) =>
                                                        i().createElement(
                                                            'div',
                                                            {
                                                                className: l()(
                                                                    m && u === b && ri[`rewardAnimated__${j}__${a}`],
                                                                    m && u === V && ri[`rewardAnimatedOut__${j}__${a}`],
                                                                ),
                                                                key: t.icon + a,
                                                            },
                                                            i().createElement(
                                                                Ku,
                                                                { tooltipArgs: t.tooltipArgs },
                                                                i().createElement(En, {
                                                                    reward: t,
                                                                    currentLevel: u,
                                                                    isRewardReceived: n,
                                                                    size: r[e.length][B][a],
                                                                    isTooltipEnabled: !m,
                                                                    onCompareClick: P,
                                                                    onPreviewVehicleClick: y,
                                                                    onPreviewStyleClick: N,
                                                                    onClaimVehicleClick: L,
                                                                }),
                                                            ),
                                                        ),
                                                    );
                                            })(t, u, e, a),
                                        ),
                                    ),
                                [j, V, D, m, B, P, N, y, L, z, b],
                            );
                        return i().createElement(
                            'div',
                            { className: ri.base },
                            i().createElement(
                                'div',
                                { className: ri.header },
                                i().createElement(qe.h, {
                                    stage: b,
                                    topTitle: ni.project.name(),
                                    mainTitle: si.level(),
                                    subtitle: ni.chapterName.$dyn(`id_${I}`),
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: ri.content },
                                i().createElement(
                                    'div',
                                    { className: ri.rewardsContainer, onWheel: K },
                                    i().createElement(
                                        Yu,
                                        { body: si.tooltip.prevStageRewards() },
                                        i().createElement('div', {
                                            className: l()(ri.arrow, (!U || m) && ri.arrow__disabled),
                                            style: { backgroundImage: `url(${ii}.arrow_left_${x}_${G})` },
                                            onClick: () => {
                                                (J(), ee.playClick(), Q(R.sounds.paragons_slide()));
                                            },
                                            onMouseEnter: te,
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: l()(ri.rewardsWrapper, m && ri.rewardsWrapper__animationMask) },
                                        i().createElement(
                                            'div',
                                            { className: ri.rewardsLine, style: { transform: `translateX(-${n}rem)` } },
                                            ue,
                                        ),
                                    ),
                                    i().createElement(
                                        Yu,
                                        { body: si.tooltip.nextStageRewards() },
                                        i().createElement('div', {
                                            className: l()(ri.arrow, (!$ || m) && ri.arrow__disabled),
                                            style: { backgroundImage: `url(${ii}.arrow_right_${x}_${W})` },
                                            onClick: () => {
                                                (Y(), ee.playClick(), Q(R.sounds.paragons_slide()));
                                            },
                                            onMouseEnter: te,
                                        }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: ri.progressionContainer, onWheel: K },
                                    i().createElement(ai, {
                                        currentLevel: D,
                                        selectedLevel: b,
                                        maxLevel: O,
                                        points: q,
                                        levels: T,
                                        translate: w,
                                        maxPointsCount: k,
                                        isAnimationActive: m || 1 !== b,
                                    }),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: ri.footerContainer },
                                i().createElement(Cr, {
                                    points: q,
                                    isActive: !0,
                                    maxPointsCount: H,
                                    isCurrentLevel: b === D,
                                    handleToCurrentSgaeEvent: () => {
                                        b !== D &&
                                            (v(D), p(b > D ? oi.RIGHT : oi.LEFT), Z(), Q(R.sounds.paragons_slide()));
                                    },
                                    isButtonDisabled: m,
                                    isCompletedAndHasRewards: X,
                                    handleToRewards: () => M(We.rewards),
                                }),
                            ),
                        );
                    }),
                    ci = {
                        [d.cJ.ExtraSmall]: -120,
                        [d.cJ.Small]: -120,
                        [d.cJ.Medium]: -90,
                        [d.cJ.Large]: -100,
                        [d.cJ.ExtraLarge]: -60,
                    },
                    mi = (0, G.Pi)(() => {
                        const e = (0, s.useState)(ur.InProgress),
                            t = e[0],
                            u = e[1],
                            a = wt(),
                            r = a.controls,
                            n = a.model,
                            o = (0, d.GS)(),
                            l = o.mediaSize,
                            c = o.remScreenHeight,
                            m = n.root.get().paragonPoints,
                            _ = n.computes.getAvailableChaptersCount(),
                            E = n.computes.getCurrentStage(),
                            g = n.computes.getCompletedStagesCount(),
                            p = E ? E.points : 0,
                            A = _ === g && !E,
                            F = l >= d.cJ.Large ? 1440 : 1080;
                        (0, s.useEffect)(() => {
                            u(A ? ur.Completed : E ? ur.InProgress : ur.NoAccess);
                        }, [E, A]);
                        const C = {
                            [ur.InProgress]: i().createElement(li, { points: p }),
                            [ur.Completed]: i().createElement(Lr, { points: m }),
                            [ur.NoAccess]: i().createElement(Zr, {
                                points: m,
                                completedStagesCount: g,
                                allStagesCount: _,
                                handleToStages: r.onToStagesView,
                            }),
                        };
                        return i().createElement(
                            'div',
                            { className: Yr, style: { backgroundPositionY: `${(c - F) / 2 + ci[l]}rem` } },
                            C[t],
                        );
                    }),
                    di = 'AnnouncementChapter_base_fd',
                    _i = 'AnnouncementChapter_background_6a',
                    Ei = 'AnnouncementChapter_baseBackground_57',
                    gi = 'AnnouncementChapter_backlight_33',
                    pi = 'AnnouncementChapter_base__hover_2c',
                    Ai = 'AnnouncementChapter_baseShadow_bc',
                    Fi = 'AnnouncementChapter_stateStage_0f',
                    Ci = 'AnnouncementChapter_announcementText_2b',
                    Di = 'AnnouncementChapter_topLeftBorder_0b',
                    hi = 'AnnouncementChapter_topRightBorder_42',
                    bi = 'AnnouncementChapter_bottomLeftBorder_d6',
                    vi = 'AnnouncementChapter_bottomRightBorder_14',
                    Bi = R.strings.paragons.seasonsProgression,
                    fi = (0, s.memo)(() => {
                        const e = (0, s.useState)(!1),
                            t = e[0],
                            u = e[1],
                            a = l()(di, t && pi);
                        return i().createElement(
                            'div',
                            {
                                className: a,
                                onMouseEnter: () => u(!0),
                                onMouseLeave: () => u(!1),
                                style: { '--alfaOpacity': t ? 0.2 : 0.1 },
                            },
                            i().createElement('div', { className: _i }),
                            i().createElement('div', { className: Ei }),
                            i().createElement('div', { className: gi }),
                            i().createElement('div', { className: Ai }),
                            i().createElement(
                                'div',
                                { className: Fi },
                                i().createElement(ta.ZP, { text: Bi.stageText.availableSoon(), className: Ci }),
                            ),
                            i().createElement('div', { className: Di }),
                            i().createElement('div', { className: hi }),
                            i().createElement('div', { className: bi }),
                            i().createElement('div', { className: vi }),
                        );
                    }),
                    wi = 'Chapter_dynamicWrapper_26';
                const Si = 'OptimizedProgressBar_base_1f',
                    xi = 'OptimizedProgressBar_wrapper_ab',
                    Ri = 'OptimizedProgressBar_background_ce',
                    Pi = ['api', 'value', 'maxValue', 'theme'];
                function yi() {
                    return (
                        (yi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        yi.apply(this, arguments)
                    );
                }
                const Li = (e, t) => ('number' == typeof t ? t : e.offsetLeft),
                    Ni = (e) => {
                        let t = e.api,
                            u = e.value,
                            a = e.maxValue,
                            r = void 0 === a ? 100 : a,
                            n = e.theme,
                            o = void 0 === n ? qn : n,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((u = n[a]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, Pi);
                        const m = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            E = yt(0, u, r) / r,
                            g = (0, s.useCallback)(
                                (e) => {
                                    (_.current &&
                                        m.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: t }, u, a) => {
                                            const r = u.offsetWidth - a.offsetWidth,
                                                n = e - Li(u, t),
                                                s = yt(0, r, n);
                                            a.style.left = `${s}px`;
                                        })(e, m.current, _.current),
                                        d.current &&
                                            m.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: t },
                                                u,
                                                { container: a, line: r },
                                            ) => {
                                                const n = Math.max(0, Math.floor(a.offsetWidth * u) - 8e3),
                                                    s = e - Li(a, t),
                                                    i = yt(0, n, s);
                                                r.style.left = `${i}px`;
                                            })(e, E, { line: d.current, container: m.current }));
                                },
                                [E],
                            ),
                            p = (0, s.useMemo)(() => Vn(o), [o]);
                        return (
                            (t.current.update = g),
                            i().createElement(
                                'div',
                                { className: Si, ref: m },
                                i().createElement(
                                    'div',
                                    { className: xi },
                                    i().createElement(
                                        'div',
                                        { style: p, className: l()(Ri, c.progressBarBackgroundClassMix), ref: _ },
                                        i().createElement(Fn, {
                                            size: c.size,
                                            classMix: c.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    i().createElement(
                                        Yn,
                                        yi({}, c, {
                                            lineRef: d,
                                            value: u,
                                            theme: o,
                                            maxValue: r,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    Mi = 'Progression_base_d0',
                    Ti = 'Progression_progressLineContainer_c4',
                    ki = 'Progression_progressLineContainer__instantAnimation_60',
                    Oi = 'Progression_point_53',
                    Ii = 'Progression_line_75',
                    Hi = 'Progression_line__top_b6',
                    Ui = 'Progression_line__bottom_ae',
                    $i = {
                        [d.cJ.ExtraSmall]: { pointsDistance: 47, pointsFirstIndent: 10 },
                        [d.cJ.Small]: { pointsDistance: 47, pointsFirstIndent: 10 },
                        [d.cJ.Medium]: { pointsDistance: 68, pointsFirstIndent: 10 },
                        [d.cJ.Large]: { pointsDistance: 68, pointsFirstIndent: 10 },
                        [d.cJ.ExtraLarge]: { pointsDistance: 68, pointsFirstIndent: 10 },
                    },
                    zi = (0, s.memo)(
                        ({
                            points: e,
                            currentLevel: t,
                            levels: u,
                            maxPointsCount: a,
                            maxLevel: r,
                            progressionConfig: n = $i,
                            isResize: o,
                        }) => {
                            const c = (0, s.useRef)({ update: () => {} }),
                                m = (0, d.GS)().mediaSize,
                                _ = n[m].pointsDistance,
                                E = (0, s.useMemo)(() => [0, ...u.map((e) => e.number)], [u]),
                                g = -1 * (t - 1) * _ + n[m].pointsFirstIndent;
                            return i().createElement(
                                'div',
                                { className: Mi },
                                i().createElement(
                                    'div',
                                    {
                                        className: l()(Ti, o && ki),
                                        style: { width: _ * r + 'rem', transform: `translateX(${g}rem)` },
                                    },
                                    E.slice(0, E.length).map((e, t) =>
                                        i().createElement(
                                            'div',
                                            {
                                                key: e,
                                                className: l()(Oi),
                                                style: { transform: `translateX(${t * _}rem)` },
                                            },
                                            i().createElement('div', { className: l()(Ii, Hi) }),
                                            i().createElement('div', { className: l()(Ii, Ui) }),
                                        ),
                                    ),
                                    i().createElement(Ni, {
                                        animationSettings: Jn,
                                        value: ht(e, t, u),
                                        maxValue: a,
                                        api: c,
                                        size: pn.Small,
                                    }),
                                ),
                            );
                        },
                    ),
                    Wi = {
                        base: 'UnifiedChapter_base_be',
                        base__active: 'UnifiedChapter_base__active_35',
                        base__active__hover: 'UnifiedChapter_base__active__hover_b0',
                        base__default: 'UnifiedChapter_base__default_d3',
                        base__default__hover: 'UnifiedChapter_base__default__hover_85',
                        base__disabled: 'UnifiedChapter_base__disabled_f7',
                        base__finished: 'UnifiedChapter_base__finished_c7',
                        base__finished__hover: 'UnifiedChapter_base__finished__hover_68',
                        allSpace: 'UnifiedChapter_allSpace_aa',
                        baseBackground: 'UnifiedChapter_baseBackground_83',
                        backgroundDots: 'UnifiedChapter_backgroundDots_d0',
                        baseBorder: 'UnifiedChapter_baseBorder_ab',
                        background: 'UnifiedChapter_background_cc',
                        tankForeground: 'UnifiedChapter_tankForeground_f0',
                        tankForeground__instantAnimation: 'UnifiedChapter_tankForeground__instantAnimation_fb',
                        base__hover: 'UnifiedChapter_base__hover_fb',
                        base__disabled__hover: 'UnifiedChapter_base__disabled__hover_9c',
                        bottomContentStage: 'UnifiedChapter_bottomContentStage_66',
                        name: 'UnifiedChapter_name_47',
                        stateStage: 'UnifiedChapter_stateStage_1c',
                        rewardStage: 'UnifiedChapter_rewardStage_2f',
                        btn: 'UnifiedChapter_btn_c8',
                        miniProgress: 'UnifiedChapter_miniProgress_d6',
                        rectangleTop: 'UnifiedChapter_rectangleTop_21',
                        rectangleButton: 'UnifiedChapter_rectangleButton_88',
                        rectangleLeft: 'UnifiedChapter_rectangleLeft_e5',
                        rectangleRight: 'UnifiedChapter_rectangleRight_01',
                        progress: 'UnifiedChapter_progress_f2',
                        activeText: 'UnifiedChapter_activeText_1a',
                        completedBlock: 'UnifiedChapter_completedBlock_54',
                        completed: 'UnifiedChapter_completed_8f',
                        textButton: 'UnifiedChapter_textButton_d6',
                        topLeftBorder: 'UnifiedChapter_topLeftBorder_5b',
                        topRightBorder: 'UnifiedChapter_topRightBorder_e3',
                        bottomLeftBorder: 'UnifiedChapter_bottomLeftBorder_28',
                        bottomRightBorder: 'UnifiedChapter_bottomRightBorder_c0',
                    },
                    Gi = 'WidgetChapter_base_a7',
                    ji = 'WidgetChapter_base__hover_da',
                    Vi = 'WidgetChapter_base__instantAnimation_73',
                    Xi = 'WidgetChapter_iconStage_24',
                    qi = 'WidgetChapter_counter_21',
                    Zi = 'WidgetChapter_number_be',
                    Yi = 'WidgetChapter_iconShadow_1e',
                    Ji = ({ isHovered: e, level: t, isResize: u }) => {
                        const a = l()(Gi, e && ji, u && Vi);
                        return i().createElement(
                            'div',
                            { className: a },
                            i().createElement(
                                'div',
                                { className: Xi },
                                ((e) => {
                                    const t = String(e).split('');
                                    return i().createElement(
                                        'div',
                                        { className: qi },
                                        t.map((e) =>
                                            i().createElement('div', {
                                                key: e,
                                                className: Zi,
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.techtree.researchTree.paragonsEntryPoint.c_${e})`,
                                                },
                                            }),
                                        ),
                                    );
                                })(t),
                            ),
                            i().createElement('div', { className: Yi }),
                        );
                    },
                    Ki = R.strings.paragons,
                    Qi = Ki.seasonsProgression,
                    eo = {
                        [d.cJ.ExtraSmall]: { pointsDistance: 80, pointsFirstIndent: 20 },
                        [d.cJ.Small]: { pointsDistance: 80, pointsFirstIndent: 20 },
                        [d.cJ.Medium]: { pointsDistance: 80, pointsFirstIndent: 20 },
                        [d.cJ.Large]: { pointsDistance: 120, pointsFirstIndent: 20 },
                        [d.cJ.ExtraLarge]: { pointsDistance: 160, pointsFirstIndent: 20 },
                    },
                    to = (0, s.memo)(({ chapter: e, onSelectChapter: t, onToChapterRewards: u }) => {
                        var a;
                        const r = (0, s.useState)(!1),
                            n = r[0],
                            o = r[1],
                            c = (0, s.useState)(!1),
                            m = c[0],
                            d = c[1],
                            _ = e.id,
                            E = e.status,
                            g = e.chapterLevel,
                            p = e.levels,
                            A = e.points,
                            F = Ki.chapterName.$dyn(`id_${_}`),
                            C = p.length,
                            D = null == (a = p[C - 1]) ? void 0 : a.maxPoints;
                        var h, b;
                        ((h = () => d(!0)),
                            (b = []),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => window.removeEventListener('resize', h)
                                ),
                                b,
                            ),
                            (0, s.useEffect)(() => {
                                m &&
                                    Jr(() => {
                                        d(!1);
                                    }, 0);
                            }, [m]));
                        const v = l()(Wi.base, n && Wi.base__hover, Wi[`base__${E}`], n && Wi[`base__${E}__hover`]),
                            B = { body: Qi.tooltip.btnRewards() };
                        return i().createElement(
                            'div',
                            {
                                className: v,
                                onMouseEnter: () => {
                                    (Q(R.sounds.paragons_card_hover()), o(!0));
                                },
                                onMouseLeave: () => {
                                    (Q(R.sounds.paragons_card_hover()), o(!1));
                                },
                                style: { '--alfaOpacity': n ? 0.2 : 0.1 },
                            },
                            i().createElement('div', { className: l()(Wi.background, Wi.allSpace) }),
                            i().createElement('div', {
                                className: l()(Wi.tankForeground, m && Wi.tankForeground__instantAnimation),
                            }),
                            i().createElement(
                                'div',
                                { className: l()(Wi.baseBackground, Wi.allSpace) },
                                i().createElement(
                                    'div',
                                    { className: l()(Wi.backgroundDots, Wi.allSpace) },
                                    E === Ze.ACTIVE &&
                                        i().createElement('div', { className: l()(Wi.baseBorder, Wi.allSpace) }),
                                ),
                            ),
                            E === Ze.ACTIVE &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(Ji, { isHovered: n, level: g, isResize: m }),
                                    i().createElement(
                                        'div',
                                        { className: Wi.miniProgress },
                                        i().createElement(zi, {
                                            points: A,
                                            currentLevel: g,
                                            maxLevel: C,
                                            maxPointsCount: D,
                                            levels: p,
                                            progressionConfig: eo,
                                            isResize: m,
                                        }),
                                    ),
                                ),
                            i().createElement(
                                'div',
                                { className: Wi.bottomContentStage },
                                i().createElement(ta.ZP, { text: F, className: Wi.name }),
                                ((e, u) => {
                                    switch (e) {
                                        case Ze.ACTIVE:
                                            return i().createElement(ta.ZP, {
                                                text: Qi.stageText.activeStage(),
                                                className: l()(Wi.activeText, Wi.stateStage),
                                            });
                                        case Ze.DEFAULT:
                                            return i().createElement(
                                                ne,
                                                {
                                                    mixClass: l()(Wi.btn, Wi.stateStage),
                                                    size: ae.medium,
                                                    type: ue.primary,
                                                    onClick: () => t(u),
                                                },
                                                i().createElement(ta.ZP, {
                                                    text: Qi.stageText.selectStage(),
                                                    className: Wi.textButton,
                                                }),
                                            );
                                        case Ze.FINISHED:
                                            return i().createElement(
                                                'div',
                                                { className: l()(Wi.completedBlock, Wi.stateStage) },
                                                i().createElement('div', { className: Wi.completed }),
                                            );
                                        default:
                                            return null;
                                    }
                                })(E, _),
                                i().createElement(
                                    Ku,
                                    { tooltipArgs: B },
                                    i().createElement(
                                        ne,
                                        {
                                            mixClass: l()(Wi.btn, Wi.rewardStage),
                                            size: ae.medium,
                                            type: ue.ghost,
                                            onClick: () => u(_),
                                        },
                                        i().createElement(ta.ZP, {
                                            text: Qi.stageText.rewardStage(),
                                            className: Wi.textButton,
                                        }),
                                    ),
                                ),
                            ),
                            i().createElement('div', { className: Wi.topLeftBorder }),
                            i().createElement('div', { className: Wi.topRightBorder }),
                            i().createElement('div', { className: Wi.bottomLeftBorder }),
                            i().createElement('div', { className: Wi.bottomRightBorder }),
                        );
                    }),
                    uo = R.strings.paragons.seasonsProgression.tooltip,
                    ao = (0, s.memo)(({ chapter: e, onSelectChapter: t, onToChapterRewards: u }) => {
                        const a = e.status,
                            r = uo.header.$dyn(a),
                            n = uo.body.$dyn(a),
                            s = a === Ze.ACTIVE,
                            o = a === Ze.ANNOUNCEMENT,
                            l = s
                                ? { contentId: R.views.lobby.paragons.tooltips.EntryPointTooltip('resId') }
                                : { header: r, body: n };
                        return i().createElement(
                            Ku,
                            { tooltipArgs: l, className: wi },
                            o
                                ? i().createElement(fi, null)
                                : i().createElement(to, { chapter: e, onSelectChapter: t, onToChapterRewards: u }),
                        );
                    }),
                    ro = 'SeasonsProgress_base_a2',
                    no = 'SeasonsProgress_scrollArea_51',
                    so = 'SeasonsProgress_chaptersWrapper_64',
                    io = 'SeasonsProgress_scrollWrapper_f6',
                    oo = 'SeasonsProgress_scrollContent_04',
                    lo = 'SeasonsProgress_scrollBar_36',
                    co = 'SeasonsProgress_chapterListContainer_f8',
                    mo = (0, G.Pi)(() => {
                        const e = wt(),
                            t = e.model,
                            u = e.controls,
                            a = t.computes.getStages(),
                            r = zt();
                        return (
                            fu(Object.assign({}, r)),
                            i().createElement(
                                'div',
                                { className: ro },
                                i().createElement(
                                    'div',
                                    { className: no },
                                    i().createElement(
                                        vu.Horizontal.Area.Default,
                                        {
                                            api: r,
                                            className: so,
                                            classNames: { content: oo, wrapper: io },
                                            barClassNames: { base: lo },
                                        },
                                        i().createElement(
                                            'div',
                                            { className: co },
                                            a.map((e) =>
                                                i().createElement(ao, {
                                                    key: e.id,
                                                    chapter: e,
                                                    onSelectChapter: u.onSelectChapter,
                                                    onToChapterRewards: u.onToChapterRewards,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    _o = 'SeasonsView_base_89',
                    Eo = 'SeasonsView_headerWrapper_b2',
                    go = R.strings.paragons,
                    po = go.seasonsProgression,
                    Ao = (0, G.Pi)(() => {
                        const e = wt().model,
                            t = e.computes.hasActiveChapter(),
                            u = e.computes.isAllAvailableChaptersCompleted()
                                ? po.subtitle.allStagesCompleted()
                                : po.subtitle.selectStageForGetReward(),
                            a = t ? '' : u;
                        return i().createElement(
                            'div',
                            { className: _o },
                            i().createElement(
                                'div',
                                { className: Eo },
                                i().createElement(qe.h, {
                                    topTitle: go.project.name(),
                                    mainTitle: po.title.projectStages(),
                                    subtitle: a,
                                }),
                            ),
                            i().createElement(mo, null),
                        );
                    }),
                    Fo = R.strings.paragons,
                    Co = Fo.navigation,
                    Do = (0, G.Pi)(() => {
                        const e = wt(),
                            t = e.controls,
                            u = e.model.root.get(),
                            a = u.hasNewProgress,
                            r = u.hasNewRewards,
                            n = u.hasNewChapters,
                            o = u.currentTabId,
                            c = u.wasChapterSelected,
                            m = (0, s.useCallback)(
                                (e) => {
                                    t.onTabChange(e);
                                },
                                [t],
                            ),
                            d = {
                                [We.progress]: { hasNewItems: a, component: i().createElement(mi, null) },
                                [We.rewards]: { hasNewItems: r, component: i().createElement(xa, null) },
                                [We.chapters]: { hasNewItems: n, component: i().createElement(Ao, null) },
                                [We.about]: {
                                    hasNewItems: !1,
                                    component: i().createElement(
                                        'div',
                                        { className: Pa },
                                        i().createElement('div', { className: ya }),
                                        i().createElement(
                                            'div',
                                            { className: Ia },
                                            i().createElement(qe.h, { mainTitle: Fo.project.name() }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: Ha },
                                            i().createElement(Ie, { isFullSize: !0, options: { rootId: We.about } }),
                                        ),
                                    ),
                                },
                            };
                        var _;
                        return (
                            (_ = t.onBack),
                            Xe(Ge.n.ESCAPE, _),
                            i().createElement(
                                'div',
                                { className: Ra },
                                i().createElement(
                                    'div',
                                    { className: l()(La, Na) },
                                    i().createElement(ze, {
                                        caption: Co.button.back(),
                                        side: 'left',
                                        type: 'back',
                                        onClick: () => {
                                            t.onBack();
                                        },
                                        goto: Co.button.goto(),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: l()(La, Ma) },
                                    i().createElement(ze, {
                                        caption: Co.button.close(),
                                        side: 'right',
                                        type: 'close',
                                        onClick: () => {
                                            t.onClose();
                                        },
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Ta },
                                    i().createElement(
                                        'div',
                                        { className: ka },
                                        Object.keys(d).map((e) =>
                                            i().createElement(tr, {
                                                key: e,
                                                tabId: e,
                                                isSelected: o === Number(e),
                                                onClick: () => m(e),
                                                hasNewItems: d[e].hasNewItems,
                                                disabled: String(We.rewards) === String(e) && !c,
                                            }),
                                        ),
                                    ),
                                ),
                                i().createElement('div', { className: Oa }, d[o].component),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    b().render(
                        i().createElement(ft, null, i().createElement(D, null, i().createElement(Do, null))),
                        document.getElementById('root'),
                    );
                });
            },
            1112: (e, t, u) => {
                'use strict';
                u.d(t, { h: () => m });
                var a = u(280),
                    r = (u(3649), u(7613)),
                    n = u(6179),
                    s = u.n(n);
                const i = 'Header_base_37',
                    o = 'Header_textContainer_22',
                    l = 'Header_mainTitle_85',
                    c = 'Header_subTitle_fb',
                    m = (0, n.memo)(({ stage: e = 0, topTitle: t = '', mainTitle: u, subtitle: n = '' }) =>
                        s().createElement(
                            'div',
                            { className: i },
                            s().createElement(
                                'div',
                                { className: o },
                                t && s().createElement(r.ZP, { text: t, className: c }),
                                s().createElement(a.z, { text: u, binding: { level: e }, classMix: l }),
                                n && s().createElement(a.z, { text: n, classMix: c }),
                            ),
                        ),
                    );
            },
            5190: (e, t, u) => {
                'use strict';
                u.d(t, { M2: () => A, uA: () => E });
                var a = u(6483),
                    r = u.n(a),
                    n = u(7613);
                const s = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    i = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const o = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    l = (e) =>
                        o
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let u = i.length - 1; u >= 0; u--)
                                      for (; e >= i[u]; ) ((t += s[u]), (e -= i[u]));
                                  return t;
                              })(e);
                var c = u(3649),
                    m = u(6179),
                    d = u.n(m);
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
                    E = { ExtraSmall: 'extraSmall', Small: 'small', Medium: 'medium' },
                    g = 'whiteOrange',
                    p = 'R.images.gui.maps.icons',
                    A = d().memo(
                        ({
                            isElite: e = !0,
                            vehicleName: t,
                            vehicleShortName: u = t,
                            vehicleNation: a,
                            vehicleType: s,
                            vehicleLvl: i,
                            size: o = E.Small,
                            type: m = g,
                        }) => {
                            const A = r()(_.base, _[`base__${o}`], _[`base__${m}`]),
                                F = r()(_.type, e && _.type__elite);
                            return d().createElement(
                                'div',
                                { className: A },
                                a &&
                                    d().createElement('div', {
                                        className: _.nation,
                                        style: { backgroundImage: `url(${p}.flags.c_25x17.${a})` },
                                    }),
                                d().createElement(n.ZP, { text: l(i), className: _.level }),
                                d().createElement('div', {
                                    className: F,
                                    style: {
                                        backgroundImage: `url(${p}.vehicleTypes.c_60x54.${(0, c.BN)(s)}${e && '_elite'})`,
                                    },
                                }),
                                d().createElement(n.ZP, { text: u, className: _.name }),
                            );
                        },
                    );
            },
            5026: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
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
                u.d(t, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            3393: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                const a = {
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
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, a] = deferred[o], n = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, a];
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
        (__webpack_require__.j = 314),
        (() => {
            var e = { 314: 0, 921: 0, 731: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        r,
                        [n, s, i] = u,
                        o = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); o < n.length; o++)
                        ((r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [454], () => __webpack_require__(8779));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
