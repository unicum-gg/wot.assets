(() => {
    var __webpack_modules__ = {
            3779: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => g });
                var a = t(6483),
                    n = t.n(a),
                    r = t(9887),
                    s = t.n(r),
                    o = t(3377),
                    i = t(6179),
                    l = t.n(i),
                    c = t(5026);
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
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
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
                    A = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    g = (0, o.ZP)((e) => {
                        let u = e.className,
                            t = e.width,
                            a = e.height,
                            r = e.m,
                            s = e.mt,
                            o = void 0 === s ? r : s,
                            g = e.mr,
                            p = void 0 === g ? r : g,
                            D = e.mb,
                            F = void 0 === D ? r : D,
                            C = e.ml,
                            B = void 0 === C ? r : C,
                            h = e.column,
                            v = e.row,
                            b = e.flexDirection,
                            f = void 0 === b ? (h ? 'column' : v && 'row') || void 0 : b,
                            w = e.flexStart,
                            S = e.center,
                            x = e.flexEnd,
                            R = e.spaceBetween,
                            P = e.spaceAround,
                            L = e.justifyContent,
                            y =
                                void 0 === L
                                    ? (w ? 'flex-start' : S && 'center') ||
                                      (x && 'flex-end') ||
                                      (R && 'space-between') ||
                                      (P && 'space-around') ||
                                      void 0
                                    : L,
                            N = e.alignItems,
                            T = void 0 === N ? (w ? 'flex-start' : S && 'center') || (x && 'flex-end') || void 0 : N,
                            M = e.alignSelf,
                            k = e.wrap,
                            O = e.flexWrap,
                            I = void 0 === O ? (k ? 'wrap' : void 0) : O,
                            H = e.grow,
                            U = e.shrink,
                            W = e.flex,
                            G = void 0 === W ? (H || U ? `${H ? 1 : 0} ${U ? 1 : 0} auto` : void 0) : W,
                            $ = e.style,
                            V = e.children,
                            z = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, m);
                        const j = (0, i.useMemo)(() => {
                                const e = { mt: o, mr: p, mb: F, ml: B },
                                    u = ((e) =>
                                        E.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(_[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        E.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[A[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, $, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: G,
                                        alignSelf: M,
                                        display: f || T ? 'flex' : void 0,
                                        flexDirection: f,
                                        flexWrap: I,
                                        justifyContent: y,
                                        alignItems: T,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, a, o, p, F, B, $, G, M, f, I, y, T]),
                            X = j.computedStyle,
                            q = j.computedClassNames;
                        return l().createElement('div', d({ className: n()(c.Z.base, ...q, u), style: X }, z), V);
                    });
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var a = t(6179),
                    n = t.n(a),
                    r = t(6483),
                    s = t.n(r),
                    o = t(3649),
                    i = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: r = o.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              a.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  n().createElement(
                                      'div',
                                      { className: s()(i.Z.base, t), key: `${u}-${l}` },
                                      (0, o.Uw)(u, r, e).map((e, u) =>
                                          n().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => m });
                var a = t(3138),
                    n = t(6179),
                    r = t(1043),
                    s = t(5262);
                const o = a.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, r.j)),
                    m = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var a = t(6179),
                    n = t.n(a),
                    r = t(6536),
                    s = t(3495),
                    o = t(1043),
                    i = t(5262),
                    l = t(3138);
                const c = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(s.Y),
                        t = (0, a.useState)(u),
                        c = t[0],
                        m = t[1],
                        d = (0, a.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(u);
                            m(Object.assign({ width: t, height: a }, (0, i.T)(t, a, o.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const _ = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    n = t(7382),
                    r = t(3495);
                const s = ['children'];
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, s);
                    const o = (0, a.useContext)(r.Y),
                        i = o.extraLarge,
                        l = o.large,
                        c = o.medium,
                        m = o.small,
                        d = o.extraSmall,
                        _ = o.extraLargeWidth,
                        E = o.largeWidth,
                        A = o.mediumWidth,
                        g = o.smallWidth,
                        p = o.extraSmallWidth,
                        D = o.extraLargeHeight,
                        F = o.largeHeight,
                        C = o.mediumHeight,
                        B = o.smallHeight,
                        h = o.extraSmallHeight,
                        v = { extraLarge: D, large: F, medium: C, small: B, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && m) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, n.H)(u, t, v);
                        if (t.largeWidth && E) return (0, n.H)(u, t, v);
                        if (t.mediumWidth && A) return (0, n.H)(u, t, v);
                        if (t.smallWidth && g) return (0, n.H)(u, t, v);
                        if (t.extraSmallWidth && p) return (0, n.H)(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && B) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, a.memo)(o);
            },
            7382: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { YN: () => n.Y, ZN: () => a.Z });
                t(6010);
                var a = t(1039),
                    n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
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
                'use strict';
                var a;
                function n(e, u, t) {
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
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => n }),
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
            7613: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => b });
                var a = t(6483),
                    n = t.n(a),
                    r = t(3779),
                    s = t(280),
                    o = t(3532),
                    i = t.n(o),
                    l = t(9887),
                    c = t.n(l),
                    m = t(3377),
                    d = t(6179),
                    _ = t.n(d),
                    E = t(3393);
                const A = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function g() {
                    return (
                        (g =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        g.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const p = Object.keys(i()),
                    D = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    F = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    C = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    B = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    h =
                        (Object.keys(B),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': D,
                            'heading-H36': D,
                            'heading-H28': F,
                            'heading-H24': F,
                            'heading-H24R': F,
                            'heading-H22': F,
                            'heading-H20R': F,
                            'heading-H18': F,
                            'heading-H15': C,
                            'heading-H14': C,
                            'paragraph-P24': F,
                            'paragraph-P18': F,
                            'paragraph-P16': F,
                            'paragraph-P14': C,
                            'paragraph-P12': C,
                            'paragraph-P10': C,
                        }),
                    v =
                        (Object.keys(h),
                        (e) =>
                            e
                                ? ((e) => p.includes(e))(e)
                                    ? { colorClassName: E.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    b = (0, m.ZP)((e) => {
                        let u = e.text,
                            t = e.variant,
                            a = e.className,
                            o = e.color,
                            i = e.m,
                            l = e.mt,
                            c = void 0 === l ? i : l,
                            m = e.mr,
                            p = void 0 === m ? i : m,
                            D = e.mb,
                            F = void 0 === D ? i : D,
                            C = e.ml,
                            B = void 0 === C ? i : C,
                            b = e.style,
                            f = e.format,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, A);
                        const S = (0, d.useMemo)(() => {
                                const e = v(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, b, a), colorClassName: u };
                            }, [b, o]),
                            x = S.computedStyle,
                            R = S.colorClassName;
                        return _().createElement(
                            r.ZP,
                            g(
                                {
                                    className: n()(E.Z.base, t && E.Z[t], R, a),
                                    style: x,
                                    mt: !0 === c ? h[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === p ? h[t || 'paragraph-P16'].mr : p,
                                    mb: !0 === F ? h[t || 'paragraph-P16'].mb : F,
                                    ml: !0 === B ? h[t || 'paragraph-P16'].ml : B,
                                },
                                w,
                            ),
                            void 0 !== f ? _().createElement(s.z, g({}, f, { text: u })) : u,
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
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => r }));
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
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
                            : (0, n.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const r = `mouse${u}`,
                                        o = s[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
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
                            ((e.enabled = !1), a());
                        },
                        enable() {
                            ((e.enabled = !0), a());
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
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    }));
                var a = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var a = t(2472);
                const n = {
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
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => g,
                        getSize: () => d,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => p,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => S,
                    }));
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function E(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
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
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
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
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const a = ['args'];
                const n = 2,
                    r = 16,
                    s = 32,
                    o = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = r),
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
            3377: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => c });
                var a = t(5415),
                    n = t(6179),
                    r = t.n(n);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    o = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    i = [a.cJ.ExtraLarge, a.cJ.Large, a.cJ.Medium, a.cJ.Small, a.cJ.ExtraSmall],
                    l = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (o(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const r = i.indexOf(u),
                                    o = (-1 !== r ? s.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = o ? e[o] : void 0;
                                return ((t[n] = void 0 !== l ? l : e[n]), t);
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, u) => s.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = n),
                                t
                            );
                        }, {}),
                    c = (e, u = l) => {
                        const t = (
                            (e, u = l) =>
                            (t) => {
                                const s = (0, a.GS)().mediaSize,
                                    o = (0, n.useMemo)(() => u(t, s), [t, s]);
                                return r().createElement(e, o);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => o(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(6179);
                const n = (e) => {
                    const u = (0, a.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => i, GS: () => l, cJ: () => s, fd: () => o });
                var a = t(6179),
                    n = t(7739),
                    r = t(1043);
                let s, o, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, a.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, n;
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
                    })(n || (n = {})));
            },
            3649: (e, u, t) => {
                'use strict';
                let a;
                function n(e) {
                    return e.replace(/-/g, '_');
                }
                (t.d(u, { BN: () => n, Uw: () => m, v2: () => a }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(a || (a = {})));
                const r = (e, u, t) => {
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
                    o = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? r : s, []),
                    i = (() => {
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
                    c = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return l.includes(t)
                            ? i(e)
                            : ((e, u = a.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return (o(r, /( )/, u).forEach((e) => (t = t.concat(o(e, n, a.left)))), t);
                              })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : c(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, t, n);
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => l, Z5: () => s, B0: () => i, ry: () => D });
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
                const n = a;
                var r = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    E = t(3138);
                const A = ['args'];
                function g(e, u, t, a, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(a, n);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            g(r, a, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, a, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    F = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, A);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    C = () => F(i.CLOSE),
                    B = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(7572);
                const v = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => F(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => F(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            F(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const s = E.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                d = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + s.x,
                                    y: E.O.view.pxToRem(c) + s.y,
                                    width: E.O.view.pxToRem(m),
                                    height: E.O.view.pxToRem(d),
                                };
                            F(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: p(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, C);
                        },
                        handleViewEvent: F,
                        onBindingsReady: D,
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
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = b;
            },
            9382: (e, u, t) => {
                'use strict';
                var a = {};
                (t.r(a),
                    t.d(a, {
                        Area: () => Gn,
                        Bar: () => Hn,
                        DefaultScroll: () => Wn,
                        Direction: () => vn,
                        defaultSettings: () => bn,
                        useHorizontalScrollApi: () => wn,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => sr, Bar: () => ar, Default: () => rr, useVerticalScrollApi: () => $n }));
                var r = t(7739),
                    s = t(6179),
                    o = t.n(s),
                    i = t(6483),
                    l = t.n(i),
                    c = t(926),
                    m = t.n(c),
                    d = t(5415);
                const _ = ['children', 'className'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const A = {
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: m().SMALL_WIDTH,
                        [d.fd.Medium]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${m().SMALL_WIDTH} ${m().MEDIUM_WIDTH} ${m().LARGE_WIDTH} ${m().EXTRA_LARGE_WIDTH}`,
                    },
                    g = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: m().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${m().SMALL_HEIGHT} ${m().MEDIUM_HEIGHT} ${m().LARGE_HEIGHT} ${m().EXTRA_LARGE_HEIGHT}`,
                    },
                    p = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: m().SMALL,
                        [d.cJ.Medium]: `${m().SMALL} ${m().MEDIUM}`,
                        [d.cJ.Large]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE}`,
                        [d.cJ.ExtraLarge]: `${m().SMALL} ${m().MEDIUM} ${m().LARGE} ${m().EXTRA_LARGE}`,
                    },
                    D = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, _);
                        const n = (0, d.GS)(),
                            r = n.mediaWidth,
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return o().createElement('div', E({ className: l()(t, A[r], g[s], p[i]) }, a), u);
                    },
                    F = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, F);
                    return o().createElement(r.ZN, null, o().createElement(D, t, u));
                };
                var B = t(493),
                    h = t.n(B);
                function v() {}
                function b() {
                    return !1;
                }
                console.log;
                var f = t(9174),
                    w = t(3138);
                function S(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return x(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return x(e, u);
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
                function x(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const P = (e) => (0 === e ? window : window.subViews.get(e));
                const L = () => (e, u) => {
                    const t = (0, s.createContext)({});
                    return [
                        function ({ mode: a = 'real', options: n, children: r, mocks: i }) {
                            const l = (0, s.useRef)([]),
                                c = (t, a, n) => {
                                    var r;
                                    const s = (function ({
                                            initializer: e = !0,
                                            rootId: u = 0,
                                            getRoot: t = P,
                                            context: a = 'model',
                                        } = {}) {
                                            const n = new Map();
                                            function r(e, u = 0) {
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
                                                    const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                        i = w.O.view.addModelObserver(o, u, !0);
                                                    return (n.set(i, t), e && t(s(r)), i);
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
                                                    for (var e, t = S(n.keys()); !(e = t()).done; ) r(e.value, u);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(a),
                                        o =
                                            'real' === t
                                                ? s
                                                : Object.assign({}, s, {
                                                      readByPath:
                                                          null != (r = null == n ? void 0 : n.getter) ? r : () => {},
                                                  }),
                                        i = (e) =>
                                            'mocks' === t ? (null == n ? void 0 : n.getter(e)) : o.readByPath(e),
                                        c = (e) => l.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: i,
                                            externalModel: o,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : i(e),
                                                        n = f.LO.box(a, { equals: b });
                                                    return (
                                                        'real' === t &&
                                                            o.subscribe(
                                                                (0, f.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : i(e),
                                                        n = f.LO.box(a, { equals: b });
                                                    return (
                                                        'real' === t &&
                                                            o.subscribe(
                                                                (0, f.aD)((e) => n.set(e)),
                                                                e,
                                                            ),
                                                        n
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const a = i(u);
                                                    if (Array.isArray(e)) {
                                                        const n = e.reduce(
                                                            (e, u) => ((e[u] = f.LO.box(a[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, f.aD)((u) => {
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
                                                            r = Object.entries(n),
                                                            s = r.reduce(
                                                                (e, [u, t]) => ((e[t] = f.LO.box(a[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, f.aD)((e) => {
                                                                        r.forEach(([u, t]) => {
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
                                        d = { mode: t, model: m, externalModel: o, cleanup: c };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && n ? n.controls(d) : u(d),
                                        externalModel: o,
                                        mode: t,
                                    };
                                },
                                m = (0, s.useRef)(!1),
                                d = (0, s.useState)(a),
                                _ = d[0],
                                E = d[1],
                                A = (0, s.useState)(() => c(a, n, i)),
                                g = A[0],
                                p = A[1];
                            return (
                                (0, s.useEffect)(() => {
                                    m.current ? p(c(_, n, i)) : (m.current = !0);
                                }, [i, _, n]),
                                (0, s.useEffect)(() => {
                                    E(a);
                                }, [a]),
                                (0, s.useEffect)(
                                    () => () => {
                                        (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                    },
                                    [g],
                                ),
                                o().createElement(t.Provider, { value: g }, r)
                            );
                        },
                        () => (0, s.useContext)(t),
                    ];
                };
                var y = t(3946);
                let N, T, M, k;
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
                    })(T || (T = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed'));
                    })(M || (M = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded'));
                    })(k || (k = {})));
                (N.Initialization, T.Initialization);
                const O = (e) => e > 0,
                    I = (e) => !O(e);
                function H(e, u) {
                    var t;
                    if (I(e)) return void console.warn('Invalid id, should be greater than zero', e);
                    const a = 0 === u.scale ? 1e-5 : null != (t = u.scale) ? t : 1;
                    return w.O.view.getBrowserTexturePath(e, Math.max(u.width, 1), Math.max(u.height, 1), a);
                }
                const U = L()(
                        ({ observableModel: e }) => {
                            const u = e.object(),
                                t = (0, y.Om)(() =>
                                    (function ({ pageState: e, browserState: u, texState: t }) {
                                        return u === N.Initialization
                                            ? k.Initialization
                                            : u === N.ForceLoading
                                              ? k.ForceLoading
                                              : u === N.Loading
                                                ? k.BrowserLoading
                                                : e === T.Loaded && u === N.Loaded && t === M.Loaded
                                                  ? k.Loaded
                                                  : t === M.Failed
                                                    ? k.TextureFailed
                                                    : e === T.Failed
                                                      ? k.PageFailed
                                                      : k.PageLoading;
                                    })(u.get()),
                                );
                            return { root: u, getState: t };
                        },
                        ({ externalModel: e }) => ({
                            blur: e.createCallbackNoArgs('unfocus'),
                            focus: e.createCallbackNoArgs('focus'),
                            createWebView: e.createCallbackNoArgs('createWebView'),
                        }),
                    ),
                    W = U[0],
                    G = U[1],
                    $ = (e) => {
                        (0, s.useEffect)(e, []);
                    };
                var V = t(3403);
                function z() {
                    const e = (0, s.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, s.useEffect)(() => u, []),
                        (0, s.useMemo)(
                            () => ({
                                run: (u) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (u(), (e.current = 0));
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
                const j = 'BrowserView_base_6b',
                    X = 'BrowserView_texture_17',
                    q = 'Spinner_base_87',
                    Z = 'Spinner_caption_cf',
                    Y = 'Spinner_gear_c4',
                    K = 'Spinner_logo_bf',
                    Q = ({ message: e, className: u, classNames: t }) =>
                        o().createElement(
                            'div',
                            { className: l()(q, u) },
                            e && o().createElement('div', { className: l()(Z, null == t ? void 0 : t.caption) }, e),
                            o().createElement('div', { className: l()(Y, null == t ? void 0 : t.gear) }),
                            o().createElement('div', { className: l()(K, null == t ? void 0 : t.logo) }),
                        );
                function J(e) {
                    engine.call('PlaySound', e);
                }
                const ee = {
                        playHighlight() {
                            J('highlight');
                        },
                        playClick() {
                            J('play');
                        },
                        playYes() {
                            J('yes1');
                        },
                    },
                    ue = {
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
                let te, ae;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(te || (te = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(ae || (ae = {})));
                const ne = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: n,
                    mixClass: r,
                    soundHover: i,
                    soundClick: c,
                    onMouseEnter: m,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: E,
                    onMouseLeave: A,
                    onClick: g,
                }) => {
                    const p = (0, s.useRef)(null),
                        D = (0, s.useState)(t),
                        F = D[0],
                        C = D[1],
                        B = (0, s.useState)(!1),
                        h = B[0],
                        v = B[1],
                        b = (0, s.useState)(!1),
                        f = b[0],
                        w = b[1],
                        S = (0, s.useCallback)(() => {
                            n || (p.current && (p.current.focus(), C(!0)));
                        }, [n]),
                        x = (0, s.useCallback)(
                            (e) => {
                                F && null !== p.current && !p.current.contains(e.target) && C(!1);
                            },
                            [F],
                        ),
                        P = (0, s.useCallback)(
                            (e) => {
                                n || (g && g(e));
                            },
                            [n, g],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                n || (null !== i && J(i), m && m(e), w(!0));
                            },
                            [n, i, m],
                        ),
                        y = (0, s.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                n || (E && E(e), v(!1));
                            },
                            [n, E],
                        ),
                        T = (0, s.useCallback)(
                            (e) => {
                                n || (null !== c && J(c), _ && _(e), t && S(), v(!0));
                            },
                            [n, c, _, S, t],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                n || (A && A(e), v(!1));
                            },
                            [n, A],
                        ),
                        k = l()(
                            ue.base,
                            ue[`base__${a}`],
                            {
                                [ue.base__disabled]: n,
                                [ue[`base__${u}`]]: u,
                                [ue.base__focus]: F,
                                [ue.base__highlightActive]: h,
                                [ue.base__firstHover]: f,
                            },
                            r,
                        ),
                        O = l()(ue.state, ue.state__default);
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
                            C(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: p,
                                className: k,
                                onMouseEnter: L,
                                onMouseMove: y,
                                onMouseUp: N,
                                onMouseDown: T,
                                onMouseLeave: M,
                                onClick: P,
                            },
                            a !== te.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: ue.back }),
                                    o().createElement('span', { className: ue.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: O },
                                o().createElement('span', { className: ue.stateDisabled }),
                                o().createElement('span', { className: ue.stateHighlightHover }),
                                o().createElement('span', { className: ue.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: ue.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ne.defaultProps = { type: te.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const re = (0, s.memo)(ne),
                    se = 'Error_base_46',
                    oe = 'Error_alertIcon_04',
                    ie = 'Error_errorCaption_f2',
                    le = 'Error_button_cd',
                    ce = ({ errorBtnLabel: e, errorBtnClickHandler: u, errorMessage: t }) =>
                        o().createElement(
                            'div',
                            { className: se },
                            o().createElement('div', { className: oe }),
                            o().createElement('div', { className: ie }, t),
                            o().createElement(re, { size: ae.medium, mixClass: le, onClick: u }, e),
                        );
                ce.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const me = 'Waiting_base_c5',
                    de = 'Waiting_blackOverlay_55',
                    _e = ({
                        message: e,
                        isError: u,
                        errorMessage: t,
                        errorBtnLabel: a,
                        errorBtnClickHandler: n,
                        overlayAlpha: r,
                    }) => {
                        const i = o().createRef();
                        return (
                            (0, s.useEffect)(() => {
                                const e = i.current;
                                e && r && (e.style.opacity = r);
                            }, [i, r]),
                            o().createElement(
                                'div',
                                { className: me },
                                o().createElement('div', { className: de, ref: i }),
                                u
                                    ? o().createElement(ce, {
                                          errorBtnLabel: a,
                                          errorMessage: t,
                                          errorBtnClickHandler: n,
                                      })
                                    : o().createElement(Q, { message: e }),
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
                    Ae = 'DisplayBrowserState_error_4e',
                    ge = 'DisplayBrowserState_alertIcon_c4',
                    pe = 'DisplayBrowserState_errorCaption_dd',
                    De = ({ waitingText: e, className: u }) =>
                        o().createElement(
                            'div',
                            { className: l()(Ee, u) },
                            o().createElement(_e, { errorBtnClickHandler: v, message: e }),
                        ),
                    Fe = () =>
                        o().createElement(
                            'div',
                            { className: Ae },
                            o().createElement('div', { className: ge }),
                            o().createElement(
                                'div',
                                { className: pe },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    Ce = () =>
                        o().createElement(
                            'div',
                            { className: Ae },
                            o().createElement('div', { className: ge }),
                            o().createElement(
                                'div',
                                { className: pe },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            o().createElement(
                                'div',
                                { className: pe },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function Be(e) {
                    const u = (0, s.useRef)(e);
                    return (
                        (function (e) {
                            return e !== k.BrowserLoading && e !== k.PageLoading;
                        })(e) && (u.current = e),
                        u.current
                    );
                }
                function he(e) {
                    const u = (function (e) {
                            const u = (0, s.useRef)(!1);
                            return (
                                (e !== k.Loaded && e !== k.PageFailed && e !== k.TextureFailed) || (u.current = !0),
                                u.current
                            );
                        })(e),
                        t = Be(e);
                    return u ? t : e;
                }
                const ve = ({ viewState: e, waitingText: u, waitingClassName: t }) => {
                        switch (he(e)) {
                            case k.BrowserLoading:
                            case k.PageLoading:
                            case k.ForceLoading:
                                return o().createElement(De, { waitingText: u, className: t });
                            case k.PageFailed:
                                return o().createElement(Fe, null);
                            case k.TextureFailed:
                                return o().createElement(Ce, null);
                            default:
                                return null;
                        }
                    },
                    be = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function fe(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function we(e) {
                    const u = (0, s.useState)(fe(e.scale)),
                        t = u[0],
                        a = u[1],
                        n = (function (e) {
                            return be(e) ? H(e.id, e) : void 0;
                        })(Object.assign({}, e, { scale: t })),
                        r = (0, s.useState)(n),
                        o = r[0],
                        i = r[1],
                        l = (0, s.useRef)(!1),
                        c = 'width' in e ? e.width : 0,
                        m = 'height' in e ? e.height : 0,
                        d = z();
                    return (
                        (0, s.useEffect)(() => {
                            const u = () => {
                                a(fe(e.scale));
                            };
                            return (
                                window.addEventListener('resize', u),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            );
                        }, [e.scale]),
                        (0, s.useEffect)(() => {
                            if (void 0 === n || 0 === c || 0 === m || n === o) return;
                            const e = () => {
                                i(n);
                            };
                            if (!1 === l.current) return ((l.current = !0), void e());
                            const u = new Image(),
                                t = () => {
                                    d.run(e);
                                };
                            return (
                                u.addEventListener('load', t),
                                (u.src = n),
                                () => {
                                    (u.removeEventListener('load', t), (u.src = ''));
                                }
                            );
                        }, [n, o]),
                        o
                    );
                }
                const Se = o().memo(function (e) {
                        const u = e.id,
                            t = e.className,
                            a = e.classNameTexture,
                            n = e.waitingClassName,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseWheel,
                            c = e.onMouseMove,
                            m = e.onMouseDown,
                            d = e.onMouseUp,
                            _ = e.renderStateDisplay,
                            E = e.viewState,
                            A = e.statusCode,
                            g = e.waitingText,
                            p = e.scrollSpeed,
                            D = void 0 === p ? 20 : p,
                            F = we(e);
                        return o().createElement(
                            'div',
                            { className: l()(j, t), onMouseEnter: r, onMouseLeave: s },
                            F &&
                                o().createElement('div', {
                                    onWheel: i,
                                    onMouseMove: c,
                                    onMouseDown: m,
                                    onMouseUp: d,
                                    className: l()(j, X, a),
                                    'data-browser-id': u,
                                    'data-browser-scroll-speed': D,
                                    style: { backgroundImage: `url(${F})` },
                                }),
                            'function' == typeof _
                                ? _({ viewState: E, statusCode: A, waitingText: g, waitingClassName: n })
                                : o().createElement(ve, {
                                      viewState: E,
                                      statusCode: A,
                                      waitingText: g,
                                      waitingClassName: n,
                                  }),
                        );
                    }),
                    xe = (e) => {
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
                    Re = (e, u = []) => {
                        const t = (0, s.useRef)(),
                            a = (0, s.useCallback)((...u) => {
                                (t.current && t.current(), (t.current = e(...u)));
                            }, u);
                        return (
                            (0, s.useEffect)(
                                () => () => {
                                    t.current && t.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    Pe = 'none-ref',
                    Le = 'measured',
                    ye = { type: 'measuring' };
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Te = o().memo(function (e) {
                    const u = (function () {
                            const e = (0, s.useRef)(null),
                                u = (0, s.useState)(ye),
                                t = u[0],
                                a = u[1],
                                n = Re(
                                    () => (
                                        a(ye),
                                        xe(() => {
                                            e.current
                                                ? a({
                                                      type: Le,
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
                                        window.addEventListener('resize', n),
                                        n(),
                                        () => window.removeEventListener('resize', n)
                                    ),
                                    [n],
                                ),
                                [e, t, n]
                            );
                        })(),
                        t = u[0],
                        a = u[1];
                    return o().createElement(
                        'div',
                        { ref: t, className: j },
                        o().createElement(
                            Se,
                            Ne(
                                {},
                                e,
                                (function (e, u = {}) {
                                    return 'measured' === e.type ? Object.assign({}, e.size, u) : u;
                                })(a),
                            ),
                        ),
                    );
                });
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const ke = (0, V.Pi)(function (e) {
                        const u = e.defaultWaitingText,
                            t = e.className,
                            a = e.waitingClassName,
                            n = e.isLazy,
                            r = void 0 === n || n,
                            i = e.displayContentWhenLoading,
                            l = void 0 === i || i,
                            c = e.renderStateDisplay,
                            m = e.onMouseEnter,
                            d = e.onMouseLeave,
                            _ = e.onMouseMove,
                            E = e.onMouseWheel,
                            A = e.onMouseDown,
                            g = e.onMouseUp,
                            p = G(),
                            D = p.model,
                            F = p.controls,
                            C = D.root.get(),
                            B = C.id,
                            h = C.httpStatusCode,
                            v = C.waitingMessage,
                            b = D.getState(),
                            f = l || b === k.Loaded;
                        ($(() => {
                            r && I(B) && F.createWebView();
                        }),
                            (0, s.useEffect)(() => {
                                O(B) && F.focus();
                            }, [B, F]),
                            $(
                                () => (
                                    window.addEventListener('mouseleave', F.blur),
                                    window.addEventListener('mouseenter', F.focus),
                                    () => {
                                        (window.removeEventListener('mouseleave', F.blur),
                                            window.removeEventListener('mouseenter', F.focus));
                                    }
                                ),
                            ));
                        const w = (0, s.useMemo)(() => {
                            const e = {
                                onMouseEnter: m,
                                onMouseLeave: d,
                                onMouseMove: _,
                                onMouseWheel: E,
                                onMouseDown: A,
                                onMouseUp: g,
                            };
                            return f
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          (F.focus(), null == m || m(e));
                                      },
                                      onMouseLeave: (e) => {
                                          (F.blur(), null == d || d(e));
                                      },
                                  })
                                : e;
                        }, [f, F, A, m, d, _, g, E]);
                        if (I(B)) return null;
                        const S = be(e)
                                ? (function (e, u) {
                                      const t = {};
                                      return (
                                          u.forEach((u) => {
                                              t[u] = e[u];
                                          }),
                                          t
                                      );
                                  })(e, ['width', 'height'])
                                : {},
                            x = v.length > 0 ? v : u;
                        return e.isFullSize
                            ? o().createElement(
                                  Te,
                                  Me({}, w, {
                                      id: B,
                                      className: t,
                                      waitingClassName: a,
                                      statusCode: h,
                                      viewState: b,
                                      waitingText: x,
                                      renderStateDisplay: c,
                                  }),
                              )
                            : o().createElement(
                                  Se,
                                  Me({}, w, S, {
                                      id: B,
                                      className: t,
                                      waitingClassName: a,
                                      statusCode: h,
                                      viewState: b,
                                      waitingText: x,
                                      renderStateDisplay: c,
                                  }),
                              );
                    }),
                    Oe = ['options', 'mocks', 'mode'];
                const Ie = (0, s.memo)(function (e) {
                        let u = e.options,
                            t = e.mocks,
                            a = e.mode,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Oe);
                        return o().createElement(W, { options: u, mocks: t, mode: a }, o().createElement(ke, n));
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
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                class Ge extends o().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && J(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && J(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            n = e.side,
                            r = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(e, Ue)),
                            E = l()(He.base, He[`base__${r}`], He[`base__${n}`], null == s ? void 0 : s.base),
                            A = l()(He.icon, He[`icon__${r}`], He[`icon__${n}`], null == s ? void 0 : s.icon),
                            g = l()(He.glow, null == s ? void 0 : s.glow),
                            p = l()(He.caption, He[`caption__${r}`], null == s ? void 0 : s.caption),
                            D = l()(He.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            We(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== r && o().createElement('div', { className: He.shine }),
                            o().createElement('div', { className: A }, o().createElement('div', { className: g })),
                            o().createElement('div', { className: p }, u),
                            a && o().createElement('div', { className: D }, a),
                        );
                    }
                }
                let $e, Ve;
                ((Ge.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        ((e.DEFAULT = 'default'),
                            (e.DISABLED = 'disabled'),
                            (e.ACTIVE = 'active'),
                            (e.FINISHED = 'finished'),
                            (e.ANNOUNCEMENT = 'announcement'),
                            (e.PAUSED = 'paused'));
                    })($e || ($e = {})),
                    (function (e) {
                        ((e[(e.progress = 0)] = 'progress'),
                            (e[(e.chapters = 2)] = 'chapters'),
                            (e[(e.about = 3)] = 'about'));
                    })(Ve || (Ve = {})));
                var ze = t(5521),
                    je = t(4179);
                const Xe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function qe(e = ze.n.NONE, u = Xe, t = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== ze.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (w.O.view.isEventHandled()) return;
                                (w.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var Ze = t(1685);
                const Ye = (e) => {
                    return null !== e && 'object' == typeof e
                        ? 'CoherentArrayProxy' === e.constructor.name
                            ? ((u = e),
                              (t = (e) => ('object' == typeof e ? Ye(e) : e)),
                              Array.isArray(u) ? u.map(t) : u.map((e, u, a) => t(null == e ? void 0 : e.value, u, a)))
                            : Array.isArray(e)
                              ? e.map((e) => ('object' == typeof e ? Ye(e) : e))
                              : Object.fromEntries(
                                    Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? Ye(u) : u]),
                                )
                        : e;
                    var u, t;
                };
                let Ke, Qe, Je, eu, uu, tu, au;
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
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'));
                })(Ke || (Ke = {})),
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
                    })(Qe || (Qe = {})),
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
                    })(Je || (Je = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(eu || (eu = {})),
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
                    })(uu || (uu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(tu || (tu = {})),
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
                    })(au || (au = {})));
                class nu extends o().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = je.B3.GOLD;
                        else e = je.B3.INTEGRAL;
                        const u = je.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                nu.defaultProps = { format: 'integral' };
                const ru = [
                        Ke.Items,
                        Ke.Equipment,
                        Ke.Xp,
                        Ke.XpFactor,
                        Ke.Blueprints,
                        Ke.BlueprintsAny,
                        Ke.Goodies,
                        Ke.Berths,
                        Ke.Slots,
                        Ke.Tokens,
                        Ke.CrewSkins,
                        Ke.CrewBooks,
                        Ke.Customizations,
                        Ke.CreditsFactor,
                        Ke.TankmenXp,
                        Ke.TankmenXpFactor,
                        Ke.FreeXpFactor,
                        Ke.BattleToken,
                        Ke.PremiumUniversal,
                        Ke.NaturalCover,
                        Ke.BpCoin,
                        Ke.BattlePassSelectToken,
                        Ke.BattlaPassFinalAchievement,
                        Ke.BattleBadge,
                        Ke.BonusX5,
                        Ke.CrewBonusX3,
                        Ke.NewYearFillers,
                        Ke.NewYearInvoice,
                        Ke.EpicSelectToken,
                        Ke.Comp7TokenWeeklyReward,
                        Ke.Comp7TokenCouponReward,
                        Ke.BattleBoosterGift,
                        Ke.CosmicLootboxCommon,
                        Ke.CosmicLootboxSilver,
                        Ke.SelectableBonus,
                        Ke.GoldenTicket,
                        Ke.PostStamp,
                        Ke.PremiumPlusUniversal,
                    ],
                    su = [Ke.Gold, Ke.Credits, Ke.Crystal, Ke.FreeXp],
                    ou = [Ke.BattlePassPoints],
                    iu = [Ke.PremiumPlus, Ke.Premium];
                let lu;
                !(function (e) {
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
                })(lu || (lu = {}));
                const cu = (e) =>
                        ru.includes(e)
                            ? eu.MULTI
                            : su.includes(e)
                              ? eu.CURRENCY
                              : ou.includes(e)
                                ? eu.NUMBER
                                : iu.includes(e)
                                  ? eu.PREMIUM_PLUS
                                  : eu.STRING,
                    mu = ['engravings', 'backgrounds'],
                    du = ['engraving', 'background'],
                    _u = (e, u = Je.Small) => {
                        const t = e.name,
                            a = e.type,
                            n = e.value,
                            r = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Je.S600x450:
                                        return 'c_600x450';
                                    case Je.S400x300:
                                        return 'c_400x300';
                                    case Je.S296x222:
                                        return 'c_296x222';
                                    case Je.S232x174:
                                        return 'c_232x174';
                                    case Je.Big:
                                        return 'c_80x80';
                                    case Je.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${n}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case Je.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Je.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = mu[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            r = n.$dyn(t);
                                        return r ? `${r}` : `${n.$dyn(du[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case Je.S600x450:
                                            return 'c_600x450';
                                        case Je.S400x300:
                                            return 'c_400x300';
                                        case Je.S296x222:
                                            return 'c_296x222';
                                        case Je.S232x174:
                                            return 'c_232x174';
                                        case Je.S180x135:
                                            return 'big';
                                        case Je.Big:
                                        case Je.S80x80:
                                            return 'c_80x80';
                                        case Je.Small:
                                        case Je.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${r}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${r}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case Je.Mini:
                                            return lu.s32;
                                        case Je.Small:
                                        case Je.S48x48:
                                            return lu.s48;
                                        case Je.S80x80:
                                        case Je.Big:
                                            return lu.s80;
                                        case Je.S128x100:
                                            return lu.s116;
                                        case Je.S180x135:
                                        case Je.S232x174:
                                        case Je.S296x222:
                                            return lu.s296;
                                        case Je.S400x300:
                                            return lu.s400;
                                        case Je.S600x450:
                                            return lu.s600;
                                    }
                                })(u)}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Eu = (e, u, t) => {
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
                    };
                var Au = t(3649);
                const gu = [Ke.Branch, Ke.VehicleSelect, Ke.ParagonsUnlocks, Ke.StyleProgress],
                    pu = (e, u, t) => ({
                        name: e.name,
                        image: (u) =>
                            ((e, u = Je.Small) => {
                                const t = (0, Au.BN)(e.vehicleName || '');
                                if (e.name === Ke.Vehicles)
                                    switch (u) {
                                        case Je.Mini:
                                        case Je.Small:
                                        case Je.S48x48:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                : `R.images.gui.maps.icons.quests.bonuses.small.${t}`;
                                        case Je.Big:
                                        case Je.S80x80:
                                            return e.isRent
                                                ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                : `R.images.gui.maps.icons.quests.bonuses.big.${t}`;
                                        case Je.S128x100:
                                        case Je.S180x135:
                                            return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                        case Je.S232x174:
                                        case Je.S296x222:
                                            return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                        case Je.S400x300:
                                        case Je.S600x450:
                                            return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                        default:
                                            return (
                                                console.error('Unknown vehicle image size', u, e.vehicleName),
                                                'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                            );
                                    }
                                if (e.name === Ke.TmanToken)
                                    switch (u) {
                                        case Je.Mini:
                                        case Je.Small:
                                        case Je.S48x48:
                                        case Je.Big:
                                        case Je.S80x80:
                                            return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                        case Je.S128x100:
                                        case Je.S180x135:
                                        case Je.S232x174:
                                            return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                        case Je.S296x222:
                                            return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                        case Je.S400x300:
                                            return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                        case Je.S600x450:
                                            return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                        default:
                                            return (
                                                console.error('Unknown image size', u),
                                                'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                            );
                                    }
                                if (e.name === Ke.CollectionItem)
                                    switch (u) {
                                        case Je.Mini:
                                        case Je.Small:
                                        case Je.S48x48:
                                            return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                        case Je.Big:
                                        case Je.S80x80:
                                            return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                        case Je.S128x100:
                                        case Je.S180x135:
                                        case Je.S232x174:
                                            return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                        case Je.S296x222:
                                            return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                        case Je.S400x300:
                                            return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                        case Je.S600x450:
                                            return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                        default:
                                            console.error('Unknown image size', u);
                                    }
                                if (e.name === Ke.StyleProgress)
                                    switch (u) {
                                        case Je.Small:
                                        case Je.Big:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.progressionStyle`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                if (gu.includes(e.name))
                                    switch (e.name) {
                                        case 'branch':
                                        case 'vehicleSelect':
                                        case 'paragonsUnlocks':
                                            return `R.images.gui.maps.icons.paragons.allRewards.${u}.${e.icon}`;
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                return _u(e, u);
                            })(e, u),
                        value: e.value,
                        valueType: cu(e.name),
                        label: e.label,
                        tooltipArgs: Eu(
                            { tooltipId: e.tooltipId, entitlementID: e.value, level: u, chapterID: t },
                            Number(e.tooltipContentId),
                        ),
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
                    Du = (e, u) => (u < 0 ? 0 : e[u].maxPoints),
                    Fu = (e, u, t) => {
                        let a = 0;
                        const n = Du(t, u - 2),
                            r = Du(t, t.length - 1) / t.length;
                        return (
                            t.forEach((t, s) => {
                                s < u &&
                                    (a += ((e, u, t, a) => (e >= u ? a : (a / (u - t)) * (e - t)))(
                                        e,
                                        t.maxPoints,
                                        n,
                                        r,
                                    ));
                            }),
                            a
                        );
                    },
                    Cu = { 1: [10545, 7937281, 33825], 2: [7937601, 7938385, 7937041], 3: [] },
                    Bu = L()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    progression: e.object('progression'),
                                    stages: e.array('progression.stages'),
                                },
                                t = (0, y.Om)(() => u.progression.get().currentStage, { equals: b }),
                                a = (0, y.Om)(() => u.root.get().previewSeasonId, { equals: b }),
                                n = (0, y.Om)(
                                    () => {
                                        return ((e = u.stages.get()), Ye(e)).map((e) =>
                                            Object.assign({}, e, {
                                                levels: e.levels.map((u) =>
                                                    Object.assign({}, u, {
                                                        hasSelectableRewards: u.rewards.some((e) =>
                                                            e.value.startsWith('paragon_rewards_choice'),
                                                        ),
                                                        rewards: u.rewards.map((t) => pu(t, u.number, e.id)),
                                                    }),
                                                ),
                                                finalVehicleCDs: Cu[e.id],
                                            }),
                                        );
                                        var e;
                                    },
                                    { equals: b },
                                ),
                                r = (0, y.Om)(() => n().find((e) => e.id === a()), { equals: b }),
                                s = (0, y.Om)(() => n().find((e) => e.id === t()), { equals: b }),
                                o = (0, y.Om)(
                                    () => {
                                        const e = r() || s();
                                        return e ? e.levels[e.levels.length - 1 || 0].maxPoints : 0;
                                    },
                                    { equals: b },
                                ),
                                i = (0, y.Om)((e) => n().filter((u) => u.chapterStatus.status === e).length, {
                                    equals: b,
                                }),
                                l = (0, y.Om)(
                                    () => n().length - i($e.FINISHED) + i($e.DISABLED) + i($e.ANNOUNCEMENT) === 0,
                                    { equals: b },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getStages: n,
                                    hasActiveSeason: () => i($e.ACTIVE),
                                    isAllAvailableSeasonsCompleted: l,
                                    getCurrentStageNumber: t,
                                    getCurrentSeason: s,
                                    getPreviewSeason: r,
                                    getCurrentSeasonMaxPointsCount: o,
                                },
                            });
                        },
                        ({ externalModel: e, cleanup: u }) => {
                            const t = window.subViews.addChildChangedCallback(Ve.about);
                            return (
                                u(() => {
                                    window.subViews.removeChildChangedCallback(t);
                                }),
                                {
                                    onBack: e.createCallbackNoArgs('onBack'),
                                    onBackToSeasons: e.createCallbackNoArgs('onBackToSeasons'),
                                    onClose: e.createCallbackNoArgs('onClose'),
                                    onToStagesView: e.createCallbackNoArgs('onToChaptersView'),
                                    onTabChange: e.createCallback((e) => ({ tabId: e }), 'onTabChange'),
                                    onPreviewVehicle: e.createCallback(
                                        (e, u) => ({ vehicleCD: e, seasonID: u }),
                                        'progression.onPreviewVehicle',
                                    ),
                                    onSelectVehicleReward: e.createCallback(
                                        (e, u, t) => ({ levelID: e, entCode: u, chapterID: t }),
                                        'progression.onSelectVehicle',
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
                                        (e, u, t) => ({ styleID: e, group: u, styleLevel: t }),
                                        'progression.onPreviewStyle',
                                    ),
                                    onSeasonActivate: e.createCallback((e) => ({ id: e }), 'onSeasonActivate'),
                                }
                            );
                        },
                    ),
                    hu = Bu[0],
                    vu = Bu[1],
                    bu = 'App_base_4b',
                    fu = 'App_infoBackground_84',
                    wu = 'App_vignette_ba',
                    Su = 'App_button_76',
                    xu = 'App_back_b6',
                    Ru = 'App_close_76',
                    Pu = 'App_navigationContainer_c0',
                    Lu = 'App_navigation_01',
                    yu = 'App_content_3b',
                    Nu = 'App_infoHeaderWrapper_74',
                    Tu = 'App_infoContainer_af';
                var Mu = t(7613);
                const ku = [
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
                function Ou(e) {
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
                const Iu = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: je.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Hu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            n = e.onMouseEnter,
                            r = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            m = e.ignoreMouseClick,
                            d = void 0 !== m && m,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            p = e.targetId,
                            D = void 0 === p ? 0 : p,
                            F = e.onShow,
                            C = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, ku);
                        const h = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, s.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [D],
                            ),
                            b = (0, s.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Iu(t, E, { isMouseEvent: !0, on: !0, arguments: Ou(a) }, v),
                                    F && F(),
                                    (h.current.isVisible = !0));
                            }, [t, E, a, v, F]),
                            f = (0, s.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Iu(t, E, { on: !1 }, v),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1));
                                }
                            }, [t, E, v, C]),
                            w = (0, s.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        ((0, s.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === g && f();
                            }, [g, f]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ));
                        return g
                            ? (0, s.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      n && n(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (f(), null == r || r(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === d && f(), null == i || i(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === d && f(), null == o || o(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    Uu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Wu() {
                    return (
                        (Wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Wu.apply(this, arguments)
                    );
                }
                const Gu = R.views.common.tooltip_window.simple_tooltip_content,
                    $u = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            n = e.note,
                            r = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Uu);
                        const c = (0, s.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: a, note: n, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, a, n, i]);
                        return o().createElement(
                            Hu,
                            Wu(
                                {
                                    contentId:
                                        ((m = null == i ? void 0 : i.hasHtmlContent),
                                        m ? Gu.SimpleTooltipHtmlContent('resId') : Gu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var m;
                    },
                    Vu = 'NavItem_base_22',
                    zu = 'NavItem_base__hovered_1d',
                    ju = 'NavItem_base__selected_6d',
                    Xu = 'NavItem_border_dc',
                    qu = 'NavItem_border__visible_10',
                    Zu = 'NavItem_glow_e8',
                    Yu = 'NavItem_glow__visible_f5',
                    Ku = 'NavItem_icon_d8',
                    Qu = 'NavItem_icon__invsible_e5',
                    Ju = 'NavItem_icon__visible_f9',
                    et = 'NavItem_text_3d',
                    ut = 'NavItem_bubble_74',
                    tt = 'R.images.gui.maps.icons.paragons.navigation.icons',
                    at = R.strings.paragons.navigation,
                    nt = (0, s.memo)(({ tabId: e, seasonId: u, isSelected: t, hasNewItems: a, onClick: n }) => {
                        const r = (0, s.useState)(!1),
                            i = r[0],
                            c = r[1],
                            m = (0, d.GS)().mediaSize >= d.cJ.Medium ? '_large' : '',
                            _ = Number(e) === Number(Ve.progress) ? `season_${u}_` : '',
                            E = l()(Vu, i && zu, t && ju);
                        return o().createElement(
                            $u,
                            {
                                header: String(at.tooltip.header.$dyn(Ve[e])),
                                body: String(at.tooltip.body.$dyn(`${Ve[e]}`)),
                            },
                            o().createElement(
                                'div',
                                {
                                    className: E,
                                    onMouseEnter: () => {
                                        (ee.playHighlight(), c(!0));
                                    },
                                    onMouseLeave: () => {
                                        c(!1);
                                    },
                                    onClick: () => {
                                        (n(), ee.playClick());
                                    },
                                },
                                o().createElement('div', { className: l()(Xu, t && qu) }),
                                o().createElement('div', { className: l()(Zu, t && Yu) }),
                                a && o().createElement('div', { className: ut }),
                                o().createElement('div', {
                                    className: Ku,
                                    style: { backgroundImage: `url(${tt}.${_ + Ve[e] + m})` },
                                }),
                                o().createElement('div', {
                                    className: l()(Ku, Qu, (t || i) && Ju),
                                    style: { backgroundImage: `url(${tt}.${_ + Ve[e] + m + '_active'})` },
                                }),
                                o().createElement(Mu.ZP, { text: String(at.$dyn(Ve[e])), className: et }),
                            ),
                        );
                    }),
                    rt = {
                        base: 'ActionButton_base_a0',
                        base__hovered: 'ActionButton_base__hovered_ea',
                        icon: 'ActionButton_icon_6f',
                        icon__small: 'ActionButton_icon__small_50',
                        icon__normal: 'ActionButton_icon__normal_d8',
                        base__mouseDown: 'ActionButton_base__mouseDown_b7',
                        label: 'ActionButton_label_76',
                        base__visibleLabel: 'ActionButton_base__visibleLabel_f7',
                    };
                let st, ot;
                (!(function (e) {
                    ((e.COMPARE = 'compare'), (e.PREVIEW = 'preview'));
                })(st || (st = {})),
                    (function (e) {
                        ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                    })(ot || (ot = {})));
                const it = [
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
                function lt() {
                    return (
                        (lt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        lt.apply(this, arguments)
                    );
                }
                const ct = {
                        [st.PREVIEW]: 'R.images.gui.maps.icons.library.previewVehicle',
                        [st.COMPARE]: 'R.images.gui.maps.icons.library.compareVehicle',
                    },
                    mt = (0, s.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            a = void 0 !== t && t,
                            n = e.autofocus,
                            r = void 0 !== n && n,
                            i = e.soundHover,
                            c = void 0 === i ? 'highlight' : i,
                            m = e.soundClick,
                            d = void 0 === m ? 'play' : m,
                            _ = e.size,
                            E = void 0 === _ ? ot.NORMAL : _,
                            A = e.onClick,
                            g = e.onMouseEnter,
                            p = e.onMouseLeave,
                            D = e.onMouseDown,
                            F = e.onMouseUp,
                            C = e.onFocus,
                            B = e.onBlur,
                            h = e.type,
                            v = void 0 === h ? st.PREVIEW : h,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, it);
                        const f = (0, s.useState)(!1),
                            w = f[0],
                            S = f[1],
                            x = (0, s.useState)(!1),
                            R = x[0],
                            P = x[1],
                            L = (0, s.useState)(r),
                            y = L[0],
                            N = L[1],
                            T = (0, s.useRef)(null),
                            M = (0, s.useCallback)(() => {
                                T.current && (T.current.focus(), N(!0));
                            }, []),
                            k = (0, s.useCallback)(
                                (e) => {
                                    y && null !== T.current && !T.current.contains(e.target) && N(!1);
                                },
                                [y],
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
                                N(r);
                            }, [r]));
                        const O = (0, s.useCallback)(
                                (e) => {
                                    A && A(e);
                                },
                                [A],
                            ),
                            I = (0, s.useCallback)(
                                (e) => {
                                    (S(!0), D && D(e), d && J(d), r && M());
                                },
                                [r, D, M, d],
                            ),
                            H = (0, s.useCallback)(
                                (e) => {
                                    (S(!1), F && F(e));
                                },
                                [F],
                            ),
                            U = (0, s.useCallback)(
                                (e) => {
                                    (g && g(e), c && J(c), P(!0));
                                },
                                [g, c],
                            ),
                            W = (0, s.useCallback)(
                                (e) => {
                                    (S(!1), P(!1), p && p(e));
                                },
                                [p],
                            ),
                            G = (0, s.useCallback)(
                                (e) => {
                                    (N(!0), C && C(e));
                                },
                                [C],
                            ),
                            $ = (0, s.useCallback)(
                                (e) => {
                                    (N(!1), B && B(e));
                                },
                                [B],
                            ),
                            V = l()(
                                rt.base,
                                a && rt.base__visibleLabel,
                                w && rt.base__mouseDown,
                                R && rt.base__hovered,
                                y && rt.base__focused,
                            ),
                            z = l()(rt.icon, rt[`icon__${E}`]);
                        return o().createElement(
                            'div',
                            lt(
                                {
                                    ref: T,
                                    className: V,
                                    onClick: O,
                                    onMouseEnter: U,
                                    onMouseLeave: W,
                                    onMouseDown: I,
                                    onMouseUp: H,
                                    onFocus: G,
                                    onBlur: $,
                                },
                                b,
                            ),
                            o().createElement('div', { className: z, style: { backgroundImage: `url(${ct[v]})` } }),
                            o().createElement('div', { className: rt.label }, u),
                        );
                    }),
                    dt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    _t = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Et, At;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Et || (Et = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(At || (At = {})));
                const gt = ({ size: e = Et.Default, classMix: u }) =>
                        o().createElement('div', { className: l()(_t.background, _t[`background__${e}`], u) }),
                    pt = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Dt = ({ size: e }) => {
                        const u = l()(pt.base, pt[`base__${e}`]);
                        return o().createElement('div', { className: u });
                    },
                    Ft = {
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
                    Ct = (0, s.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: r }) => {
                            const s = l()(
                                    Ft.base,
                                    Ft[`base__${e}`],
                                    t && Ft.base__disabled,
                                    n && Ft.base__finished,
                                    r && Ft.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return o().createElement(
                                'div',
                                { className: s, style: a, ref: u },
                                o().createElement('div', { className: Ft.pattern }),
                                o().createElement('div', { className: Ft.gradient }),
                                i && o().createElement(Dt, { size: e }),
                            );
                        },
                    ),
                    Bt = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: n }) => {
                        const r = (0, s.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, s.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            o().createElement(Ct, { size: e, disabled: a, baseStyles: r, isComplete: i, lineRef: t })
                        );
                    },
                    ht = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let vt, bt;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(vt || (vt = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(bt || (bt = {})));
                const ft = 'ProgressBarDeltaSimple_base_6c',
                    wt = 'ProgressBarDeltaSimple_delta_99',
                    St = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: r,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = r < a,
                                m = (0, s.useState)(bt.Idle),
                                d = m[0],
                                _ = m[1],
                                E = d === bt.In,
                                A = d === bt.End,
                                g = d === bt.Idle,
                                p = (0, s.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, s.useEffect)(() => {
                                if (g && !t) {
                                    return ht(() => {
                                        p(bt.In);
                                    }, u);
                                }
                            }, [p, t, g, u]),
                                (0, s.useEffect)(() => {
                                    if (E) {
                                        return ht(() => {
                                            (i && i(), p(bt.End));
                                        }, e + u);
                                    }
                                }, [p, E, i, u, e]));
                            const D = (0, s.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                F = (0, s.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, s.useMemo)(
                                    () => ({ width: `${Math.abs(a - r)}%`, left: `${c ? r : a}%` }),
                                    [a, c, r],
                                );
                            return A
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: ft, style: C },
                                      o().createElement(
                                          'div',
                                          { style: g ? D : F, className: wt },
                                          o().createElement(Dt, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    xt = (0, s.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: r,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, s.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Ct, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: r,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    o().createElement(St, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Rt = 'ProgressBarDeltaGrow_base_7e',
                    Pt = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Lt = 'ProgressBarDeltaGrow_glow_68',
                    yt = (e) => (e ? { left: 0 } : { right: 0 }),
                    Nt = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Tt = (e) => ({ transitionDuration: `${e}ms` }),
                    Mt = (0, s.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: n,
                            to: r,
                            onEndAnimation: i,
                            onChangeAnimationState: c,
                            className: m,
                        }) => {
                            const d = r < a,
                                _ = (0, s.useState)(vt.Idle),
                                E = _[0],
                                A = _[1],
                                g = E === vt.End,
                                p = E === vt.Idle,
                                D = E === vt.Grow,
                                F = E === vt.Shrink,
                                C = (0, s.useCallback)(
                                    (e) => {
                                        (A(e), c && c(e));
                                    },
                                    [c],
                                ),
                                B = (0, s.useCallback)(
                                    (e, u) =>
                                        ht(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, s.useEffect)(() => {
                                if (!t)
                                    return p
                                        ? B(vt.Grow, u)
                                        : D
                                          ? B(vt.Shrink, e)
                                          : F
                                            ? B(vt.End, e)
                                            : void (g && i && i());
                            }, [B, t, g, D, p, F, i, u, e]);
                            const h = (0, s.useMemo)(() => Object.assign({ width: '100%' }, Tt(e), yt(d)), [d, e]),
                                v = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Tt(e), yt(d)), [d, e]),
                                b = (0, s.useMemo)(() => Object.assign({ width: '0%' }, Nt(d, a), Tt(e)), [a, d, e]),
                                f = (0, s.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(r - a)}%` }, Nt(d, a), Tt(e)),
                                    [a, d, r, e],
                                );
                            if (g) return null;
                            const w = l()(Rt, m, d && 0 === r && Pt);
                            return o().createElement(
                                'div',
                                { style: p ? b : f, className: w },
                                o().createElement(
                                    'div',
                                    { style: F ? v : h, className: Lt },
                                    o().createElement(Dt, { size: n }),
                                ),
                            );
                        },
                    ),
                    kt = (0, s.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: n,
                            isComplete: r,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < t,
                                d = (0, s.useState)(!1),
                                _ = d[0],
                                E = d[1],
                                A = (0, s.useCallback)(
                                    (e) => {
                                        (e === vt.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                g = (0, s.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                p = (0, s.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(Ct, {
                                    size: u,
                                    lineRef: a,
                                    disabled: n,
                                    isComplete: r,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: _ ? p : g,
                                }),
                                t >= 0 &&
                                    o().createElement(Mt, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ot = ['onComplete', 'onEndAnimation'];
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Ht = (0, s.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Ot);
                        const n = (0, s.useState)(!1),
                            r = n[0],
                            i = n[1],
                            l = (0, s.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== r && i(e), e && u && u(), t && t());
                            }, [r, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case At.Simple:
                                return o().createElement(xt, It({}, a, { onEndAnimation: l, isComplete: r }));
                            case At.Growing:
                                return o().createElement(kt, It({}, a, { onEndAnimation: l, isComplete: r }));
                            default:
                                return null;
                        }
                    }),
                    Ut = ['onEndAnimation'];
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                const Gt = (0, s.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, Ut);
                    const a = (0, s.useRef)({}),
                        n = (0, s.useCallback)(() => {
                            ((a.current.from = void 0), u && u());
                        }, [u]),
                        r = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = r),
                        o().createElement(Ht, Wt({}, t, { onEndAnimation: n, key: `${r}-${t.to}`, from: r }))
                    );
                });
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Vt = (0, s.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: r,
                            onEndAnimation: s,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return o().createElement(Bt, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: s,
                                onChangeAnimationState: i,
                            };
                            return r.withStack
                                ? o().createElement(Gt, c)
                                : o().createElement(Ht, $t({ key: `${n}-${u}` }, c));
                        },
                    ),
                    zt = (e) => ({
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
                    jt = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (dt(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    Xt = {
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
                    qt = {
                        freezed: !1,
                        withStack: !1,
                        type: At.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Zt = (0, s.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Xt,
                            size: t = Et.Default,
                            animationSettings: a = qt,
                            disabled: n = !1,
                            withoutBackground: r = !1,
                            progressBarBackgroundClassMix: i,
                            value: c,
                            deltaFrom: m,
                            lineRef: d,
                            onChangeAnimationState: _,
                            onEndAnimation: E,
                            onComplete: A,
                        }) => {
                            const g = ((e, u, t) =>
                                (0, s.useMemo)(() => {
                                    const a = (dt(0, u, e) / u) * 100;
                                    return { value: a, deltaFrom: jt(a, u, t) };
                                }, [t, u, e]))(c, e, m);
                            return o().createElement(
                                'div',
                                { className: l()(_t.base, _t[`base__${t}`]), style: zt(u) },
                                !r && o().createElement(gt, { size: t, classMix: i }),
                                o().createElement(Vt, {
                                    size: t,
                                    lineRef: d,
                                    disabled: n,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: E,
                                    onChangeAnimationState: _,
                                    onComplete: A,
                                }),
                            );
                        },
                    ),
                    Yt = 'OptimizedProgressBar_base_1f',
                    Kt = 'OptimizedProgressBar_wrapper_ab',
                    Qt = 'OptimizedProgressBar_background_ce',
                    Jt = ['api', 'value', 'maxValue', 'theme'];
                function ea() {
                    return (
                        (ea =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ea.apply(this, arguments)
                    );
                }
                const ua = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    ta = (e) => {
                        let u = e.api,
                            t = e.value,
                            a = e.maxValue,
                            n = void 0 === a ? 100 : a,
                            r = e.theme,
                            i = void 0 === r ? Xt : r,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, Jt);
                        const m = (0, s.useRef)(null),
                            d = (0, s.useRef)(null),
                            _ = (0, s.useRef)(null),
                            E = dt(0, t, n) / n,
                            A = (0, s.useCallback)(
                                (e) => {
                                    (_.current &&
                                        m.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, a) => {
                                            const n = t.offsetWidth - a.offsetWidth,
                                                r = e - ua(t, u),
                                                s = dt(0, n, r);
                                            a.style.left = `${s}px`;
                                        })(e, m.current, _.current),
                                        d.current &&
                                            m.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: a, line: n },
                                            ) => {
                                                const r = Math.max(0, Math.floor(a.offsetWidth * t) - 8e3),
                                                    s = e - ua(a, u),
                                                    o = dt(0, r, s);
                                                n.style.left = `${o}px`;
                                            })(e, E, { line: d.current, container: m.current }));
                                },
                                [E],
                            ),
                            g = (0, s.useMemo)(() => zt(i), [i]);
                        return (
                            (u.current.update = A),
                            o().createElement(
                                'div',
                                { className: Yt, ref: m },
                                o().createElement(
                                    'div',
                                    { className: Kt },
                                    o().createElement(
                                        'div',
                                        { style: g, className: l()(Qt, c.progressBarBackgroundClassMix), ref: _ },
                                        o().createElement(gt, {
                                            size: c.size,
                                            classMix: c.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    o().createElement(
                                        Zt,
                                        ea({}, c, {
                                            lineRef: d,
                                            value: t,
                                            theme: i,
                                            maxValue: n,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    aa = Object.assign({}, qt, {
                        withStack: !0,
                        type: At.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    na = 'LevelsRewards_base_34',
                    ra = 'LevelsRewards_header_46',
                    sa = 'LevelsRewards_base__disabled_87',
                    oa = 'LevelsRewards_rewards_c6',
                    ia = 'LevelsRewards_scrollArea_22',
                    la = 'LevelsRewards_column_4f',
                    ca = 'LevelsRewards_column__completed_88',
                    ma = 'LevelsRewards_column__active_9b',
                    da = 'LevelsRewards_progressBarContainer_b4',
                    _a = 'RewardsColumn_base_79',
                    Ea = 'RewardsColumn_particlesLine_af',
                    Aa = 'RewardsColumn_particlesLine__left_21',
                    ga = 'RewardsColumn_particlesLine__active_98',
                    pa = 'RewardsColumn_particlesLine__disabled_27',
                    Da = 'RewardsColumn_pointsContainer_5b',
                    Fa = 'RewardsColumn_achievedWrapper_e6',
                    Ca = 'RewardsColumn_achieved_c3',
                    Ba = 'RewardsColumn_rewards_0a',
                    ha = 'RewardsColumn_splittedValueText_c6',
                    va = 'RewardsColumn_splittedValueText__colored_a8',
                    ba = 'RewardsColumn_pointsIcon_96',
                    fa = ['children'];
                function wa() {
                    return (
                        (wa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        wa.apply(this, arguments)
                    );
                }
                const Sa = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, fa);
                    return o().createElement(
                        Hu,
                        wa(
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
                function xa() {
                    return (
                        (xa =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        xa.apply(this, arguments)
                    );
                }
                const Ra = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement($u, u, a);
                        const n = u.contentId,
                            r = u.args,
                            s = null == r ? void 0 : r.contentId;
                        return n || s
                            ? o().createElement(Hu, xa({}, u, { contentId: n || s }), a)
                            : o().createElement(Sa, u, a);
                    },
                    Pa = {
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
                    La = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = Je.Big,
                        special: n,
                        value: r,
                        valueType: s,
                        style: i,
                        className: c,
                        classNames: m,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case uu.BATTLE_BOOSTER:
                                    case uu.BATTLE_BOOSTER_REPLACE:
                                        return tu.BATTLE_BOOSTER;
                                }
                            })(n),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case uu.BATTLE_BOOSTER:
                                        return au.BATTLE_BOOSTER;
                                    case uu.BATTLE_BOOSTER_REPLACE:
                                        return au.BATTLE_BOOSTER_REPLACE;
                                    case uu.BUILT_IN_EQUIPMENT:
                                        return au.BUILT_IN_EQUIPMENT;
                                    case uu.EQUIPMENT_PLUS:
                                        return au.EQUIPMENT_PLUS;
                                    case uu.EQUIPMENT_TROPHY_BASIC:
                                        return au.EQUIPMENT_TROPHY_BASIC;
                                    case uu.EQUIPMENT_TROPHY_UPGRADED:
                                        return au.EQUIPMENT_TROPHY_UPGRADED;
                                    case uu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return au.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case uu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return au.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case uu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return au.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case uu.PROGRESSION_STYLE_UPGRADED_1:
                                        return au.PROGRESSION_STYLE_UPGRADED_1;
                                    case uu.PROGRESSION_STYLE_UPGRADED_2:
                                        return au.PROGRESSION_STYLE_UPGRADED_2;
                                    case uu.PROGRESSION_STYLE_UPGRADED_3:
                                        return au.PROGRESSION_STYLE_UPGRADED_3;
                                    case uu.PROGRESSION_STYLE_UPGRADED_4:
                                        return au.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case eu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case eu.CURRENCY:
                                    case eu.NUMBER:
                                        return o().createElement(nu, { format: 'integral', value: Number(e) });
                                    case eu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, s);
                        return o().createElement(
                            'div',
                            { className: l()(Pa.base, Pa[`base__${a}`], c), style: i },
                            o().createElement(
                                Ra,
                                { tooltipArgs: d, className: Pa.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: l()(Pa.image, null == m ? void 0 : m.image) },
                                        E &&
                                            o().createElement('div', {
                                                className: l()(Pa.highlight, null == m ? void 0 : m.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            o().createElement('div', {
                                                className: l()(Pa.icon, null == m ? void 0 : m.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            o().createElement('div', {
                                                className: l()(Pa.overlay, null == m ? void 0 : m.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: l()(
                                                    Pa.info,
                                                    Pa[`info__${e}`],
                                                    s === eu.MULTI && Pa.info__multi,
                                                    null == m ? void 0 : m.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            t &&
                                o().createElement(
                                    Ra,
                                    { tooltipArgs: _ },
                                    o().createElement('div', {
                                        className: l()(Pa.timer, null == m ? void 0 : m.periodicIcon),
                                    }),
                                ),
                        );
                    };
                var ya = t(5190);
                const Na = 'RewardLabel_base_b8',
                    Ta = 'RewardLabel_base__rewardSelect_ff',
                    Ma = 'RewardLabel_base__label_b4',
                    ka = 'RewardLabel_base__disabled_c0',
                    Oa = 'RewardLabel_button_00',
                    Ia = R.strings.paragons.allRewards,
                    Ha = (0, s.memo)(
                        ({
                            reward: e,
                            isLevelAchieved: u,
                            currentLevel: t,
                            isSelectableVehicle: a,
                            isShortVehicleName: n,
                            isDisabledState: r,
                            onOpenOverlay: i,
                        }) => {
                            const c = l()(Na, a ? Ta : Ma, r && !a && ka),
                                m = (0, s.useCallback)(
                                    (e, u) => () => {
                                        i(e, u);
                                    },
                                    [i],
                                );
                            return o().createElement(
                                'div',
                                { className: c },
                                a
                                    ? o().createElement(
                                          re,
                                          {
                                              size: ae.small,
                                              type: u ? te.main : te.primary,
                                              mixClass: Oa,
                                              onClick: m(t, e.value),
                                          },
                                          o().createElement(Mu.ZP, { text: u ? Ia.button.select() : Ia.button.list() }),
                                      )
                                    : o().createElement(ya.M2, {
                                          isElite: e.isElite,
                                          vehicleName: e.label,
                                          vehicleType: e.type,
                                          vehicleLvl: e.vehicleLvl,
                                          size: ya.uA.ExtraSmall,
                                          isShortVehicleName: n,
                                          type: ya.YH.Cream,
                                      }),
                            );
                        },
                    ),
                    Ua = 'RewardsList_base_34',
                    Wa = 'RewardsList_reward_8c',
                    Ga = 'RewardsList_reward__last_ac',
                    $a = 'RewardsList_reward__disabled_91',
                    Va = 'RewardsList_rewardIcon_a0',
                    za = 'RewardsList_rewardLabelContainer_8e',
                    ja = 'RewardsList_rewardLabelContainer__rewardSelect_e6',
                    Xa = 'RewardsList_rewardLabelContainer__label_18',
                    qa = 'RewardsList_info_5a',
                    Za = 'RewardsList_preview_88',
                    Ya = (e) => {
                        switch (e) {
                            case d.cJ.ExtraSmall:
                            case d.cJ.Small:
                                return Je.Small;
                            case d.cJ.Medium:
                            case d.cJ.Large:
                                return Je.Big;
                            case d.cJ.ExtraLarge:
                                return Je.S180x135;
                            default:
                                return Je.Big;
                        }
                    },
                    Ka = (0, s.memo)(
                        ({
                            rewardsData: e,
                            isLevelAchieved: u,
                            currentLevel: t,
                            className: a,
                            classNames: n,
                            isDisabledState: r,
                            onOpenOverlay: s,
                            onPreviewVehicle: i,
                        }) => {
                            const c = (0, d.GS)().mediaSize,
                                m = l()(Ua, a),
                                _ = l()(Wa, null == n ? void 0 : n.rewardItem),
                                E = e.length;
                            return o().createElement(
                                'div',
                                { className: m },
                                e.map((e, a) => {
                                    const n = e.name === Ke.Vehicles,
                                        m = e.name === Ke.VehicleSelect,
                                        A = n && c < d.cJ.ExtraLarge,
                                        g = (u && !m) || r,
                                        p = m || (e.name === Ke.Vehicles && c > d.cJ.Large),
                                        D = a === E - 1,
                                        F = c < d.cJ.ExtraLarge,
                                        C = c < d.cJ.Medium ? ot.SMALL : ot.NORMAL;
                                    return o().createElement(
                                        Ra,
                                        { tooltipArgs: Object.assign({}, e.tooltipArgs), key: `${e.name}_${a}` },
                                        o().createElement(
                                            'div',
                                            { className: l()(_, g && $a, D && Ga) },
                                            o().createElement(La, {
                                                size: Ya(c),
                                                name: e.name,
                                                image: e.image(Ya(c)),
                                                value: A ? e.label : void 0,
                                                valueType: cu(e.name),
                                                className: Va,
                                                classNames: { info: qa },
                                            }),
                                            n &&
                                                o().createElement(
                                                    'div',
                                                    { className: Za },
                                                    o().createElement(mt, {
                                                        onClick: i(e.vehicleCD),
                                                        type: st.PREVIEW,
                                                        size: C,
                                                    }),
                                                ),
                                            p &&
                                                o().createElement(
                                                    'div',
                                                    { className: l()(za, m ? ja : Xa) },
                                                    o().createElement(Ha, {
                                                        reward: e,
                                                        isLevelAchieved: u,
                                                        currentLevel: t,
                                                        isSelectableVehicle: m,
                                                        onOpenOverlay: s,
                                                        isShortVehicleName: F,
                                                        isDisabledState: r,
                                                    }),
                                                ),
                                        ),
                                    );
                                }),
                            );
                        },
                    ),
                    Qa = R.strings.paragons.navigation.progression.points,
                    Ja = (0, s.memo)(
                        ({
                            isCompleted: e,
                            rewards: u,
                            currentLevel: t,
                            hasLeftBorder: a,
                            hasActiveBorder: n,
                            isLastLevelActive: r,
                            maxLevelPointsCount: s,
                            currentLevelPointsCount: i,
                            isCurrentLevel: c,
                            isDisabledState: m,
                            isActiveState: d,
                            onOpenOverlay: _,
                            onPreviewVehicle: E,
                        }) =>
                            o().createElement(
                                'div',
                                { className: _a },
                                o().createElement('div', { className: l()(Ea, Aa, n && ga, (m || !d) && pa) }),
                                a && o().createElement('div', { className: l()(Ea, r && ga) }),
                                e
                                    ? o().createElement(
                                          'div',
                                          { className: Fa },
                                          o().createElement('div', { className: Ca }),
                                      )
                                    : o().createElement(
                                          Hu,
                                          {
                                              contentId: R.views.lobby.paragons.tooltips.RewardsHeaderTooltip('resId'),
                                              args: { isParagonsPoints: !0 },
                                          },
                                          o().createElement(
                                              'div',
                                              { className: Da },
                                              o().createElement(Mu.ZP, {
                                                  text: c && d ? Qa.splittedValue() : String(s),
                                                  format: {
                                                      binding: {
                                                          currentValue: o().createElement(Mu.ZP, {
                                                              text: String(i),
                                                              className: va,
                                                          }),
                                                          maxValue: o().createElement(Mu.ZP, { text: String(s) }),
                                                      },
                                                  },
                                                  className: ha,
                                              }),
                                              o().createElement('div', { className: ba }),
                                          ),
                                      ),
                                o().createElement(
                                    'div',
                                    { className: Ba },
                                    o().createElement(Ka, {
                                        currentLevel: t,
                                        onOpenOverlay: _,
                                        rewardsData: u,
                                        isLevelAchieved: e,
                                        isDisabledState: m || !d,
                                        onPreviewVehicle: E,
                                    }),
                                ),
                            ),
                    ),
                    en = 'RewardsHeader_base_5e',
                    un = 'RewardsHeader_level_b6',
                    tn = 'RewardsHeader_level__completed_af',
                    an = 'RewardsHeader_level__current_a3',
                    nn = 'RewardsHeader_numeral_3a',
                    rn = 'RewardsHeader_numeral__disabled_1b',
                    sn = 'RewardsHeader_particlesLine_36',
                    on = 'RewardsHeader_particlesLine__left_b1',
                    ln = 'RewardsHeader_particlesLine__active_45',
                    cn = (0, s.memo)(
                        ({
                            isCompleted: e,
                            currentLevel: u,
                            stageLevel: t,
                            hasLeftBorder: a,
                            isActiveBorder: n,
                            isActiveLastBorder: r,
                            hasActiveGlow: s,
                            hasSelectableRewards: i,
                        }) => {
                            const c = l()(nn, !e && u < t && rn),
                                m = u === t && !e && s,
                                d = l()(un, e && tn, m && an);
                            return o().createElement(
                                Hu,
                                {
                                    contentId: R.views.lobby.paragons.tooltips.RewardsHeaderTooltip('resId'),
                                    args: { isCompleted: e, isCurrentLevel: m, hasSelectableRewards: i },
                                },
                                o().createElement(
                                    'div',
                                    { className: en },
                                    o().createElement('div', { className: l()(sn, on, n && ln) }),
                                    a && o().createElement('div', { className: l()(sn, r && ln) }),
                                    o().createElement(
                                        'div',
                                        { className: d },
                                        o().createElement(Mu.ZP, { text: String(t), className: c }),
                                    ),
                                ),
                            );
                        },
                    ),
                    mn = (0, s.memo)(
                        ({
                            currentLevel: e,
                            levels: u,
                            paragonPoints: t,
                            maxPointsCount: a,
                            isDisabledState: n,
                            hasProgress: r,
                            isActiveState: i,
                            isProgressionActive: c,
                            onOpenOverlay: m,
                            onPreviewVehicle: d,
                        }) => {
                            const _ = (0, s.useRef)({ update: () => {} }),
                                E = u.length,
                                A = i || r;
                            return o().createElement(
                                'div',
                                { className: l()(na, (n || !c) && sa) },
                                o().createElement(
                                    'div',
                                    { className: ia },
                                    o().createElement(
                                        'div',
                                        { className: da },
                                        o().createElement(ta, {
                                            animationSettings: aa,
                                            value: Fu(t, e, u),
                                            maxValue: a,
                                            api: _,
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        {
                                            className: oa,
                                            onMouseEnter: () => {
                                                ee.playHighlight();
                                            },
                                            onMouseDown: () => {
                                                ee.playClick();
                                            },
                                        },
                                        u.map((a, r) => {
                                            var s;
                                            const _ = r === e - 1 && !a.isCompleted && A,
                                                g = r === E - 1,
                                                p = (r === e && !u[r - 1].isCompleted && A) || _,
                                                D = (null == (s = u[r - 1]) ? void 0 : s.maxPoints) || 0,
                                                F = a.maxPoints - D,
                                                C = t - D,
                                                B = e === E && !a.isCompleted && A;
                                            return o().createElement(
                                                'div',
                                                { key: `level_${r}`, className: l()(la, a.isCompleted && ca, _ && ma) },
                                                o().createElement(
                                                    'div',
                                                    { className: ra },
                                                    o().createElement(cn, {
                                                        currentLevel: e,
                                                        stageLevel: a.number,
                                                        isCompleted: a.isCompleted,
                                                        hasLeftBorder: g,
                                                        isActiveBorder: p,
                                                        hasActiveGlow: A,
                                                        isActiveLastBorder: B,
                                                        hasSelectableRewards: a.hasSelectableRewards,
                                                    }),
                                                ),
                                                o().createElement(Ja, {
                                                    currentLevel: r + 1,
                                                    isCompleted: a.isCompleted,
                                                    rewards: a.rewards,
                                                    onOpenOverlay: m,
                                                    hasLeftBorder: g,
                                                    hasActiveBorder: p,
                                                    isCurrentLevel: r === e - 1,
                                                    maxLevelPointsCount: F,
                                                    currentLevelPointsCount: C,
                                                    isDisabledState: n,
                                                    isActiveState: i || c,
                                                    onPreviewVehicle: d,
                                                    isLastLevelActive: B,
                                                }),
                                            );
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    dn = {
                        base: 'ProgressionView_base_a0',
                        fadeIn: 'ProgressionView_fadeIn_02',
                        background: 'ProgressionView_background_ab',
                        base__disabled: 'ProgressionView_base__disabled_c7',
                        base__paused: 'ProgressionView_base__paused_6c',
                        header: 'ProgressionView_header_6c',
                        warning: 'ProgressionView_warning_0b',
                        warningText: 'ProgressionView_warningText_f6',
                        content: 'ProgressionView_content_6d',
                        progressionContainer: 'ProgressionView_progressionContainer_81',
                        disabledPattern: 'ProgressionView_disabledPattern_4a',
                        previewPanel: 'ProgressionView_previewPanel_e1',
                        activateButton: 'ProgressionView_activateButton_64',
                        pausedButton: 'ProgressionView_pausedButton_13',
                    },
                    _n = R.strings.paragons,
                    En = _n.navigation.progression,
                    An = (0, s.memo)(
                        ({
                            currentSeason: e,
                            paragonPoints: u,
                            necessaryVehicleCount: t,
                            vehicleCount: a,
                            hasSeasonActivateButton: n,
                            selectedSeason: r,
                            onPreviewVehicle: i,
                            onSelectVehicleReward: c,
                            onSeasonActivate: m,
                        }) => {
                            const d = e.levels[e.levels.length - 1].maxPoints,
                                _ = e.chapterStatus.status === $e.DISABLED,
                                E = e.chapterStatus.status === $e.PAUSED,
                                A = e.chapterStatus.status === $e.ACTIVE,
                                g = e.chapterStatus.status === $e.DEFAULT,
                                p = _ || E,
                                D = Boolean(e.points),
                                F = (0, s.useCallback)(
                                    (e) => () => {
                                        i(e, r);
                                    },
                                    [i, r],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => () => {
                                        m(e);
                                    },
                                    [m],
                                );
                            return o().createElement(
                                'div',
                                { className: l()(dn.base, dn[`base__${e.chapterStatus.status}`]) },
                                o().createElement('div', {
                                    className: dn.background,
                                    style: {
                                        backgroundImage: `url('R.images.gui.maps.icons.paragons.backgrounds.background_season_${e.id}')`,
                                    },
                                }),
                                o().createElement(
                                    'div',
                                    { className: dn.header },
                                    o().createElement(Ze.h, {
                                        stage: _n.chapterName.shortUpperCase.$dyn(`id_${e.id}`),
                                        topTitle: _n.project.name(),
                                        mainTitle: En.title.level(),
                                    }),
                                    n &&
                                        o().createElement(
                                            re,
                                            {
                                                size: ae.medium,
                                                type: te.primary,
                                                mixClass: dn.activateButton,
                                                onClick: C(e.id),
                                            },
                                            o().createElement(Mu.ZP, {
                                                text: _n.seasonsProgression.stageText.selectStage(),
                                            }),
                                        ),
                                ),
                                o().createElement(
                                    'div',
                                    { className: dn.content },
                                    p
                                        ? o().createElement(
                                              'div',
                                              { className: dn.warning },
                                              o().createElement(Mu.ZP, {
                                                  text: En.warning.$dyn(e.chapterStatus.status),
                                                  className: dn.warningText,
                                                  format: { binding: { necessaryVehicleCount: t, vehicleCount: a } },
                                              }),
                                              E &&
                                                  o().createElement(
                                                      re,
                                                      {
                                                          size: ae.medium,
                                                          type: te.primary,
                                                          mixClass: dn.pausedButton,
                                                          onClick: C(e.id),
                                                      },
                                                      o().createElement(Mu.ZP, {
                                                          text: _n.seasonsProgression.stageText.selectStage(),
                                                      }),
                                                  ),
                                          )
                                        : o().createElement(
                                              'div',
                                              { className: dn.previewPanel },
                                              e.finalVehicleCDs.map((e) =>
                                                  o().createElement(
                                                      'div',
                                                      { className: dn.preview, key: e },
                                                      o().createElement(
                                                          $u,
                                                          { body: En.button.preview() },
                                                          o().createElement(mt, {
                                                              onClick: F(e),
                                                              type: st.PREVIEW,
                                                              size: ot.NORMAL,
                                                          }),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                    o().createElement(
                                        'div',
                                        { className: dn.progressionContainer },
                                        _ && o().createElement('div', { className: dn.disabledPattern }),
                                        o().createElement(mn, {
                                            levels: e.levels,
                                            currentLevel: e.chapterLevel,
                                            onOpenOverlay: c,
                                            paragonPoints: u,
                                            maxPointsCount: d,
                                            isDisabledState: _ || E,
                                            hasProgress: D,
                                            isActiveState: A,
                                            onPreviewVehicle: F,
                                            isProgressionActive: A || g,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    gn = [];
                function pn(e) {
                    const u = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, u.current)(...e), gn)
                    );
                }
                function Dn(e, u, t = []) {
                    const a = (0, s.useRef)(0),
                        n = (0, s.useCallback)(() => window.clearInterval(a.current), t || []);
                    (0, s.useEffect)(() => n, [n]);
                    const r = (null != t ? t : []).concat([u]);
                    return [
                        (0, s.useCallback)((t) => {
                            ((a.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, r),
                        n,
                    ];
                }
                function Fn(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Cn(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Cn(e, u);
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
                function Cn(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                function Bn(e, u, t) {
                    const a = (0, s.useMemo)(
                        () =>
                            (function (e, u, t, a) {
                                let n,
                                    r = !1,
                                    s = 0;
                                function o() {
                                    n && clearTimeout(n);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function m() {
                                        ((s = Date.now()), t.apply(l, i));
                                    }
                                    r ||
                                        (a && !n && m(),
                                        o(),
                                        void 0 === a && c > e
                                            ? m()
                                            : !0 !== u &&
                                              (n = setTimeout(
                                                  a
                                                      ? function () {
                                                            n = void 0;
                                                        }
                                                      : m,
                                                  void 0 === a ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((a = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        (o(), (r = !0));
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, s.useEffect)(() => a.cancel, [a]), a);
                }
                var hn = t(7030);
                let vn;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(vn || (vn = {}));
                const bn = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    fn = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: a,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: r = !1,
                    }) => {
                        const o = (e, t) => {
                            const a = u(e),
                                n = a[0],
                                r = a[1];
                            return dt(n, r, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? bn : l,
                                m = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                _ = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        a = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (var a, n = Fn(u(e).values()); !(a = n()).done; ) (0, a.value)(...t);
                                        };
                                    return (0, s.useMemo)(() => ({ on: t, off: a, trigger: n }), []);
                                })(),
                                E = Bn(
                                    () => {
                                        w.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, hn.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), _.trigger('change', e), r && E());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                g = A[0],
                                p = A[1],
                                D = (0, s.useCallback)(
                                    (e, u, t) => {
                                        var a;
                                        const n = g.scrollPosition.get(),
                                            r = (null != (a = g.scrollPosition.goal) ? a : 0) - n;
                                        return o(e, u * t + r + n);
                                    },
                                    [g.scrollPosition],
                                ),
                                F = (0, s.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const a = m.current;
                                        a &&
                                            p.start({
                                                scrollPosition: o(a, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(a, g.scrollPosition.get()) },
                                            });
                                    },
                                    [p, c.animationConfig, g.scrollPosition],
                                ),
                                C = (0, s.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const a = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = D(u, e, a);
                                        F(r);
                                    },
                                    [F, D, c.step],
                                ),
                                B = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(a(e)),
                                            m.current && _.trigger('mouseWheel', e, g.scrollPosition, u(m.current)));
                                    },
                                    [g.scrollPosition, C, _],
                                ),
                                h = Re(
                                    () =>
                                        xe(() => {
                                            const e = m.current;
                                            e &&
                                                (F(o(e, g.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [F, g.scrollPosition.goal],
                                ),
                                v = pn(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = o(e, g.scrollPosition.goal);
                                    (u !== g.scrollPosition.goal && F(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
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
                            const b = (0, s.useCallback)((e) => _.trigger('isThumbDraggingChanged', e), [_]);
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (m.current ? e(m.current) : void 0),
                                    getBounds: () =>
                                        m.current
                                            ? u(m.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: B,
                                    applyScroll: F,
                                    applyStepTo: C,
                                    contentRef: m,
                                    wrapperRef: d,
                                    scrollPosition: p,
                                    animationScroll: g,
                                    recalculateContent: v,
                                    handleIsThumbDragging: b,
                                    events: { on: _.on, off: _.off },
                                }),
                                [g.scrollPosition, F, C, b, _.off, _.on, v, B, p, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    wn = fn({
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
                        getDirection: (e) => (e.deltaY > 1 ? vn.Next : vn.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Sn = 'HorizontalBar_base_49',
                    xn = 'HorizontalBar_base__nonActive_82',
                    Rn = 'HorizontalBar_leftButton_5f',
                    Pn = 'HorizontalBar_rightButton_03',
                    Ln = 'HorizontalBar_track_0d',
                    yn = 'HorizontalBar_thumb_fd',
                    Nn = 'HorizontalBar_rail_32',
                    Tn = 'disable',
                    Mn = { pending: !1, offset: 0 },
                    kn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    On = () => {},
                    In = (e, u) => Math.max(20, e.offsetWidth * u),
                    Hn = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = kn, onDrag: a = On }) => {
                        const n = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, s.useState)(Mn),
                            E = _[0],
                            A = _[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            p = () => {
                                const u = c.current,
                                    t = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / n),
                                    l = dt(0, 1, s / (n - a)),
                                    d = (u.offsetWidth - In(u, o)) * l;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(Tn),
                                                    void i.current.classList.remove(Tn)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = m.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(Tn),
                                                    void i.current.classList.add(Tn)
                                                );
                                            var u, t;
                                            (r.current.classList.remove(Tn), i.current.classList.remove(Tn));
                                        }
                                    })(d));
                            },
                            D = pn(() => {
                                ((() => {
                                    const u = m.current,
                                        t = c.current,
                                        a = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && a && t)) return;
                                    const s = Math.min(1, a / r);
                                    ((u.style.width = `${In(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(xn) : n.current.classList.remove(xn)));
                                })(),
                                    p());
                            });
                        ((0, s.useEffect)(() => xe(D)),
                            (0, s.useEffect)(
                                () =>
                                    xe(() => {
                                        const u = () => {
                                            p();
                                        };
                                        let t = On;
                                        const a = () => {
                                            (t(), (t = xe(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', a));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const r = c.current,
                                            s = m.current;
                                        if (!n || !r || !s) return;
                                        const o = u.screenX - E.offset - r.getBoundingClientRect().x,
                                            i = (o / r.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), g(Mn));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, E.offset, E.pending, a, g]));
                        const F = Dn((u) => e.applyStepTo(u), d, [e]),
                            C = F[0],
                            B = F[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Tn) || J('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Sn, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(Rn, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Tn) || 0 !== e.button || (J('play'), C(vn.Next));
                                },
                                onMouseUp: B,
                                ref: r,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(Ln, u.track),
                                    onMouseDown: (u) => {
                                        const a = m.current;
                                        if (a && 0 === u.button)
                                            if ((J('play'), u.target === a))
                                                g({ pending: !0, offset: u.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const a = m.current,
                                                        n = e.contentRef.current;
                                                    if (!a || !n) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > a.getBoundingClientRect().x ? vn.Prev : vn.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: m, className: l()(yn, u.thumb) }),
                                o().createElement('div', { className: l()(Nn, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Pn, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Tn) || 0 !== e.button || (J('play'), C(vn.Prev));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Un = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Wn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(Un.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: l()(Un.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(Un.defaultScrollArea, n) },
                                o().createElement(Gn, { className: i, api: _, classNames: r }, e),
                            ),
                            o().createElement(Hn, { getStepByRailClick: c, api: u, onDrag: m, classNames: d }),
                        );
                    },
                    Gn = ({ api: e, className: u, classNames: t, children: a, style: n }) => (
                        (0, s.useEffect)(() => xe(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Un.base, u), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: l()(Un.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: l()(Un.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((Gn.Bar = Hn),
                    (Gn.Default = Wn),
                    (Gn.SeniorityAwards = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, s.useEffect)(() => xe(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(Un.base, u) },
                            o().createElement(
                                'div',
                                { className: l()(Un.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: l()(Un.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    )));
                const $n = fn({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? vn.Next : vn.Prev),
                    }),
                    Vn = 'VerticalBar_base_f3',
                    zn = 'VerticalBar_base__nonActive_42',
                    jn = 'VerticalBar_topButton_d7',
                    Xn = 'VerticalBar_bottomButton_06',
                    qn = 'VerticalBar_track_df',
                    Zn = 'VerticalBar_thumb_32',
                    Yn = 'VerticalBar_rail_43',
                    Kn = 'disable',
                    Qn = () => {},
                    Jn = { pending: !1, offset: 0 },
                    er = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ur = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    tr = (e, u) => Math.max(20, e.offsetHeight * u),
                    ar = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = er, onDrag: a = Qn }) => {
                        const n = (0, s.useRef)(null),
                            r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = (0, s.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, s.useState)(Jn),
                            E = _[0],
                            A = _[1],
                            g = (0, s.useCallback)(
                                (e) => {
                                    (A(e),
                                        m.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current }));
                                },
                                [a],
                            ),
                            p = pn(() => {
                                const u = m.current,
                                    t = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && r && u && t)) return;
                                const s = Math.min(1, a / r);
                                return (
                                    (u.style.height = `${tr(t, s)}px`),
                                    u.classList.add(Zn),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(zn) : n.current.classList.remove(zn)),
                                    s
                                );
                            }),
                            D = pn(() => {
                                const u = c.current,
                                    t = m.current,
                                    a = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(a && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, a / n),
                                    l = dt(0, 1, s / (n - a)),
                                    d = (u.offsetHeight - tr(u, o)) * l;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (r.current && i.current && c.current && m.current) {
                                            if (0 === e)
                                                return (
                                                    r.current.classList.add(Kn),
                                                    void i.current.classList.remove(Kn)
                                                );
                                            if (
                                                ((u = c.current),
                                                (t = m.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    r.current.classList.remove(Kn),
                                                    void i.current.classList.add(Kn)
                                                );
                                            var u, t;
                                            (r.current.classList.remove(Kn), i.current.classList.remove(Kn));
                                        }
                                    })(d));
                            }),
                            F = pn(() => {
                                ur(e, () => {
                                    (p(), D());
                                });
                            });
                        ((0, s.useEffect)(() => xe(F)),
                            (0, s.useEffect)(() => {
                                const u = () => {
                                    ur(e, () => {
                                        D();
                                    });
                                };
                                let t = Qn;
                                const a = () => {
                                    (t(), (t = xe(F)));
                                };
                                return (
                                    e.events.on('recalculateContent', F),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', F),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const u = (u) => {
                                        ur(e, (t) => {
                                            const n = c.current,
                                                r = m.current,
                                                s = e.getContainerSize();
                                            if (!n || !r || !s) return;
                                            const o = u.screenY - E.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            g(Jn));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, E.offset, E.pending, a, g]));
                        const C = Dn((u) => e.applyStepTo(u), d, [e]),
                            B = C[0],
                            h = C[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Kn) || J('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: l()(Vn, u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: l()(jn, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kn) || 0 !== e.button || (J('play'), B(vn.Next));
                                },
                                ref: r,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: l()(qn, u.track),
                                    onMouseDown: (u) => {
                                        const a = m.current;
                                        if (a && 0 === u.button)
                                            if ((J('play'), u.target === a))
                                                (e.handleIsThumbDragging(!0),
                                                    g({
                                                        pending: !0,
                                                        offset: u.screenY - a.getBoundingClientRect().y,
                                                    }));
                                            else {
                                                ((u) => {
                                                    m.current &&
                                                        ur(e, (a) => {
                                                            if (!a) return;
                                                            const n = t(e),
                                                                r = e.clampPosition(a, a.scrollTop + n * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > a.getBoundingClientRect().y ? vn.Prev : vn.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: m, className: u.thumb }),
                                o().createElement('div', { className: l()(Yn, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: l()(Xn, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Kn) || 0 !== e.button || (J('play'), B(vn.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    nr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    rr = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: n,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: m,
                    }) => {
                        const d = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: l()(nr.base, e.base) });
                            }, [a]),
                            _ = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: l()(nr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(nr.area, n) },
                                o().createElement(sr, { className: r, classNames: i, api: _ }, e),
                            ),
                            o().createElement(ar, { getStepByRailClick: c, api: u, onDrag: m, classNames: d }),
                        );
                    },
                    sr = ({ className: e, classNames: u, children: t, api: a }) => (
                        (0, s.useEffect)(() => xe(a.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: l()(nr.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: l()(nr.content, null == u ? void 0 : u.content), ref: a.contentRef },
                                t,
                            ),
                        )
                    );
                sr.Default = rr;
                const or = { Vertical: n, Horizontal: a },
                    ir = { type: 'idle' };
                const lr = 'AnnouncementChapter_base_fd',
                    cr = 'AnnouncementChapter_base__hover_2c',
                    mr = 'AnnouncementChapter_background_6a',
                    dr = 'AnnouncementChapter_baseBackground_57',
                    _r = 'AnnouncementChapter_baseShadow_bc',
                    Er = 'AnnouncementChapter_stateStage_0f',
                    Ar = 'AnnouncementChapter_announcementText_2b',
                    gr = 'AnnouncementChapter_topLeftBorder_0b',
                    pr = 'AnnouncementChapter_topRightBorder_42',
                    Dr = 'AnnouncementChapter_bottomLeftBorder_d6',
                    Fr = 'AnnouncementChapter_bottomRightBorder_14',
                    Cr = R.strings.paragons.seasonsProgression,
                    Br = (0, s.memo)(() => {
                        const e = (0, s.useState)(!1),
                            u = e[0],
                            t = e[1],
                            a = l()(lr, u && cr);
                        return o().createElement(
                            'div',
                            {
                                className: a,
                                onMouseEnter: () => {
                                    t(!0);
                                },
                                onMouseLeave: () => {
                                    t(!1);
                                },
                            },
                            o().createElement('div', { className: mr }),
                            o().createElement('div', { className: dr }),
                            o().createElement('div', { className: _r }),
                            o().createElement(
                                'div',
                                { className: Er },
                                o().createElement(Mu.ZP, { text: Cr.stageText.availableSoon(), className: Ar }),
                            ),
                            o().createElement('div', { className: gr }),
                            o().createElement('div', { className: pr }),
                            o().createElement('div', { className: Dr }),
                            o().createElement('div', { className: Fr }),
                        );
                    }),
                    hr = 'Chapter_dynamicWrapper_26';
                const vr = {
                        base: 'BottomStage_base_2d',
                        name: 'BottomStage_name_e4',
                        base__paused: 'BottomStage_base__paused_61',
                        base__hovered: 'BottomStage_base__hovered_22',
                        textButton: 'BottomStage_textButton_c4',
                        completedBlock: 'BottomStage_completedBlock_d0',
                        completed: 'BottomStage_completed_22',
                        pausedBlock: 'BottomStage_pausedBlock_0c',
                        paused: 'BottomStage_paused_0a',
                        activeText: 'BottomStage_activeText_3e',
                        disabledText: 'BottomStage_disabledText_62',
                        pausedText: 'BottomStage_pausedText_29',
                        finishedHasRewardsText: 'BottomStage_finishedHasRewardsText_68',
                        btn: 'BottomStage_btn_24',
                        rewardStage: 'BottomStage_rewardStage_a1',
                        base__disabled: 'BottomStage_base__disabled_66',
                    },
                    br = R.strings.paragons,
                    fr = br.seasonsProgression,
                    wr = (0, s.memo)(({ chapter: e, isHovered: u, onSelectChapter: t }) => {
                        const a = e.id,
                            n = e.chapterStatus.status,
                            r = e.isAllRewardsClaimed,
                            i = br.chapterName.$dyn(`id_${a}`),
                            c = (0, s.useCallback)(
                                (e) => (u) => {
                                    (u.stopPropagation(), t(e));
                                },
                                [t],
                            );
                        return o().createElement(
                            'div',
                            { className: l()(vr.base, vr[`base__${n}`], u && vr.base__hovered) },
                            o().createElement(Mu.ZP, { text: i, className: vr.name }),
                            n === $e.ACTIVE &&
                                o().createElement(Mu.ZP, {
                                    text: fr.stageText.activeStage(),
                                    className: vr.activeText,
                                }),
                            n === $e.DISABLED &&
                                o().createElement(Mu.ZP, {
                                    text: fr.stageText.disabledStage(),
                                    className: vr.disabledText,
                                }),
                            n === $e.PAUSED &&
                                o().createElement(
                                    'div',
                                    null,
                                    u
                                        ? o().createElement(
                                              re,
                                              { mixClass: vr.btn, size: ae.medium, type: te.primary, onClick: c(a) },
                                              o().createElement(Mu.ZP, {
                                                  text: fr.stageText.selectStage(),
                                                  className: vr.textButton,
                                              }),
                                          )
                                        : o().createElement(
                                              'div',
                                              { className: vr.pausedBlock },
                                              o().createElement('div', { className: vr.paused }),
                                              o().createElement(Mu.ZP, {
                                                  text: fr.stageText.pausedStage(),
                                                  className: vr.pausedText,
                                              }),
                                          ),
                                ),
                            n === $e.FINISHED &&
                                !r &&
                                o().createElement(Mu.ZP, {
                                    text: fr.stageText.finishedHasRewardsStage(),
                                    className: vr.finishedHasRewardsText,
                                }),
                            n === $e.DEFAULT &&
                                o().createElement(
                                    re,
                                    { mixClass: vr.btn, size: ae.medium, type: te.primary, onClick: c(a) },
                                    o().createElement(Mu.ZP, {
                                        text: fr.stageText.selectStage(),
                                        className: vr.textButton,
                                    }),
                                ),
                            n === $e.FINISHED &&
                                r &&
                                o().createElement(
                                    'div',
                                    { className: vr.completedBlock },
                                    o().createElement('div', { className: vr.completed }),
                                ),
                        );
                    }),
                    Sr = 'Progression_base_d0',
                    xr = 'Progression_progressLineContainer_c4',
                    Rr = 'Progression_progressLineContainer__instantAnimation_60',
                    Pr = 'Progression_point_53',
                    Lr = 'Progression_line_75',
                    yr = 'Progression_line__top_b6',
                    Nr = 'Progression_line__bottom_ae',
                    Tr = {
                        [d.cJ.ExtraSmall]: { pointsDistance: 47, pointsFirstIndent: 10 },
                        [d.cJ.Small]: { pointsDistance: 47, pointsFirstIndent: 10 },
                        [d.cJ.Medium]: { pointsDistance: 68, pointsFirstIndent: 10 },
                        [d.cJ.Large]: { pointsDistance: 68, pointsFirstIndent: 10 },
                        [d.cJ.ExtraLarge]: { pointsDistance: 68, pointsFirstIndent: 10 },
                    },
                    Mr = (0, s.memo)(
                        ({
                            points: e,
                            currentLevel: u,
                            levels: t,
                            maxPointsCount: a,
                            maxLevel: n,
                            progressionConfig: r = Tr,
                            isResize: i,
                        }) => {
                            const c = (0, s.useRef)({ update: () => {} }),
                                m = (0, d.GS)().mediaSize,
                                _ = r[m].pointsDistance,
                                E = (0, s.useMemo)(() => [0, ...t.map((e) => e.number)], [t]),
                                A = -1 * (u - 1) * _ + r[m].pointsFirstIndent;
                            return o().createElement(
                                'div',
                                { className: Sr },
                                o().createElement(
                                    'div',
                                    {
                                        className: l()(xr, i && Rr),
                                        style: { width: _ * n + 'rem', transform: `translateX(${A}rem)` },
                                    },
                                    E.map((e, u) =>
                                        o().createElement(
                                            'div',
                                            {
                                                key: e,
                                                className: l()(Pr),
                                                style: { transform: `translateX(${u * _}rem)` },
                                            },
                                            o().createElement('div', { className: l()(Lr, yr) }),
                                            o().createElement('div', { className: l()(Lr, Nr) }),
                                        ),
                                    ),
                                    o().createElement(ta, {
                                        animationSettings: aa,
                                        value: Fu(e, u, t),
                                        maxValue: a,
                                        api: c,
                                        size: Et.Small,
                                    }),
                                ),
                            );
                        },
                    ),
                    kr = {
                        base: 'UnifiedChapter_base_be',
                        base__active: 'UnifiedChapter_base__active_35',
                        base__active__hover: 'UnifiedChapter_base__active__hover_b0',
                        base__default: 'UnifiedChapter_base__default_d3',
                        base__default__hover: 'UnifiedChapter_base__default__hover_85',
                        base__paused: 'UnifiedChapter_base__paused_fd',
                        base__disabled: 'UnifiedChapter_base__disabled_f7',
                        base__finished: 'UnifiedChapter_base__finished_c7',
                        base__finished__hover: 'UnifiedChapter_base__finished__hover_68',
                        base__hover: 'UnifiedChapter_base__hover_fb',
                        allSpace: 'UnifiedChapter_allSpace_aa',
                        baseBackground: 'UnifiedChapter_baseBackground_83',
                        baseBackgroundHover: 'UnifiedChapter_baseBackgroundHover_5d',
                        backgroundDots: 'UnifiedChapter_backgroundDots_d0',
                        baseBorder: 'UnifiedChapter_baseBorder_ab',
                        background: 'UnifiedChapter_background_cc',
                        crewIcon: 'UnifiedChapter_crewIcon_9e',
                        backgroundShadow: 'UnifiedChapter_backgroundShadow_07',
                        tankForeground: 'UnifiedChapter_tankForeground_f0',
                        tankForeground__instantAnimation: 'UnifiedChapter_tankForeground__instantAnimation_fb',
                        bottomContentStage: 'UnifiedChapter_bottomContentStage_66',
                        rewardStage: 'UnifiedChapter_rewardStage_2f',
                        btn: 'UnifiedChapter_btn_c8',
                        widgetContainer: 'UnifiedChapter_widgetContainer_d6',
                        miniProgress: 'UnifiedChapter_miniProgress_d6',
                        rectangleTop: 'UnifiedChapter_rectangleTop_21',
                        rectangleButton: 'UnifiedChapter_rectangleButton_88',
                        rectangleLeft: 'UnifiedChapter_rectangleLeft_e5',
                        rectangleRight: 'UnifiedChapter_rectangleRight_01',
                        progress: 'UnifiedChapter_progress_f2',
                        textButton: 'UnifiedChapter_textButton_d6',
                        topLeftBorder: 'UnifiedChapter_topLeftBorder_5b',
                        topRightBorder: 'UnifiedChapter_topRightBorder_e3',
                        bottomLeftBorder: 'UnifiedChapter_bottomLeftBorder_28',
                        bottomRightBorder: 'UnifiedChapter_bottomRightBorder_c0',
                    },
                    Or = 'WidgetChapter_base_a7',
                    Ir = 'WidgetChapter_base__instantAnimation_73',
                    Hr = 'WidgetChapter_iconStage_24',
                    Ur = 'WidgetChapter_counter_21',
                    Wr = 'WidgetChapter_iconShadow_1e',
                    Gr = 'WidgetChapter_base__hover_da',
                    $r = 'WidgetChapter_level_d7',
                    Vr = (0, s.memo)(({ isHovered: e, level: u, isResize: t }) => {
                        const a = l()(Or, e && Gr, t && Ir);
                        return o().createElement(
                            'div',
                            { className: a },
                            o().createElement(
                                'div',
                                { className: Hr },
                                o().createElement(
                                    'div',
                                    { className: Ur },
                                    o().createElement(Mu.ZP, { text: String(u), className: $r }),
                                ),
                            ),
                            o().createElement('div', { className: Wr }),
                        );
                    }),
                    zr = 'R.images.gui.maps.icons.paragons.seasons',
                    jr = {
                        [d.cJ.ExtraSmall]: { pointsDistance: 80, pointsFirstIndent: 20 },
                        [d.cJ.Small]: { pointsDistance: 80, pointsFirstIndent: 20 },
                        [d.cJ.Medium]: { pointsDistance: 80, pointsFirstIndent: 20 },
                        [d.cJ.Large]: { pointsDistance: 120, pointsFirstIndent: 20 },
                        [d.cJ.ExtraLarge]: { pointsDistance: 160, pointsFirstIndent: 20 },
                    },
                    Xr = (0, s.memo)(({ chapter: e, onSelectChapter: u, onToChapterRewards: t }) => {
                        var a;
                        const n = (0, s.useState)(!1),
                            r = n[0],
                            i = n[1],
                            c = (0, s.useState)(!1),
                            m = c[0],
                            d = c[1],
                            _ = e.chapterStatus.status,
                            E = e.chapterLevel,
                            A = e.levels,
                            g = e.points,
                            p = e.id,
                            D = A.length,
                            F = (null == (a = A[D - 1]) ? void 0 : a.maxPoints) || 0,
                            C = _ === $e.ACTIVE,
                            B = _ === $e.PAUSED,
                            h = l()(kr.base, r && kr.base__hover, kr[`base__${_}`], r && kr[`base__${_}__hover`]),
                            v = `url('${zr}.season_${p}.tank')`,
                            b = `url('${zr}.season_${p}.card')`,
                            f = `url('${zr}.season_${p}.background')`;
                        var w, S, x;
                        return (
                            (w = () => d(!0)),
                            (S = []),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', w),
                                    () => window.removeEventListener('resize', w)
                                ),
                                S,
                            ),
                            (0, s.useEffect)(() => {
                                m &&
                                    ht(() => {
                                        d(!1);
                                    }, 0);
                            }, [m]),
                            o().createElement(
                                'div',
                                {
                                    className: h,
                                    onMouseEnter: () => {
                                        (J(R.sounds.paragons_card_hover()), i(!0));
                                    },
                                    onMouseLeave: () => {
                                        (J(R.sounds.paragons_card_hover()), i(!1));
                                    },
                                    onClick:
                                        ((x = p),
                                        () => {
                                            (t(x), ee.playClick());
                                        }),
                                },
                                o().createElement('div', {
                                    className: l()(kr.background, kr.allSpace),
                                    style: { backgroundImage: f },
                                }),
                                o().createElement('div', {
                                    className: l()(kr.tankForeground, m && kr.tankForeground__instantAnimation),
                                    style: { backgroundImage: v },
                                }),
                                o().createElement(
                                    'div',
                                    { className: l()(kr.baseBackground, kr.allSpace) },
                                    o().createElement(
                                        'div',
                                        { className: l()(kr.backgroundDots, kr.allSpace) },
                                        C && o().createElement('div', { className: l()(kr.baseBorder, kr.allSpace) }),
                                    ),
                                ),
                                o().createElement('div', { className: l()(kr.baseBackgroundHover, kr.allSpace) }),
                                o().createElement('div', {
                                    className: l()(kr.crewIcon, kr.allSpace),
                                    style: { backgroundImage: b },
                                }),
                                o().createElement(
                                    'div',
                                    { className: kr.bottomContentStage },
                                    (C || B) &&
                                        o().createElement(
                                            o().Fragment,
                                            null,
                                            o().createElement(
                                                'div',
                                                { className: kr.widgetContainer },
                                                o().createElement(Vr, { isHovered: r, level: E, isResize: m }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: kr.miniProgress },
                                                o().createElement(Mr, {
                                                    points: g,
                                                    currentLevel: E,
                                                    maxLevel: D,
                                                    maxPointsCount: F,
                                                    levels: A,
                                                    progressionConfig: jr,
                                                    isResize: m,
                                                }),
                                            ),
                                        ),
                                    o().createElement(wr, { chapter: e, onSelectChapter: u, isHovered: r }),
                                ),
                                o().createElement('div', { className: kr.topLeftBorder }),
                                o().createElement('div', { className: kr.topRightBorder }),
                                o().createElement('div', { className: kr.bottomLeftBorder }),
                                o().createElement('div', { className: kr.bottomRightBorder }),
                            )
                        );
                    }),
                    qr = (0, s.memo)(({ chapter: e, onSelectChapter: u, onToChapterRewards: t }) => {
                        const a = e.chapterStatus.status,
                            n = e.id,
                            r = a === $e.ACTIVE,
                            s = a === $e.ANNOUNCEMENT,
                            i = {
                                contentId: r
                                    ? R.views.lobby.paragons.tooltips.EntryPointTooltip('resId')
                                    : R.views.lobby.paragons.tooltips.SeasonTooltip('resId'),
                                args: { chapterId: n },
                            };
                        return o().createElement(
                            Ra,
                            { tooltipArgs: i, className: hr },
                            s
                                ? o().createElement(Br, null)
                                : o().createElement(Xr, { chapter: e, onSelectChapter: u, onToChapterRewards: t }),
                        );
                    }),
                    Zr = 'SeasonsProgress_base_a2',
                    Yr = 'SeasonsProgress_scrollArea_51',
                    Kr = 'SeasonsProgress_chaptersWrapper_64',
                    Qr = 'SeasonsProgress_scrollWrapper_f6',
                    Jr = 'SeasonsProgress_scrollContent_04',
                    es = 'SeasonsProgress_scrollBar_36',
                    us = 'SeasonsProgress_chapterListContainer_f8',
                    ts = (0, s.memo)(({ allChapters: e, onSelectChapter: u, onToChapterRewards: t }) => {
                        const a = wn();
                        return (
                            (function (e, u) {
                                const t = e.contentRef,
                                    a = e.wrapperRef,
                                    n = e.scrollPosition,
                                    r = e.clampPosition,
                                    o = e.animationScroll,
                                    i = e.events,
                                    l = (0, s.useState)(ir),
                                    c = l[0],
                                    m = l[1];
                                ((0, s.useEffect)(() => {
                                    const e = t.current;
                                    e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                                }, [t, c.type]),
                                    (0, s.useEffect)(() => {
                                        if ('dragging' !== c.type) return;
                                        const e = w.O.client.events.mouse.move(([e, s]) => {
                                                const i = t.current,
                                                    l = a.current;
                                                if (!i || !l) return;
                                                if ('inside' === s && e.clientX < 0) return;
                                                const m = 'inside' === s ? e.clientX : e.clientX - l.offsetLeft,
                                                    d = c.positionFrom - m,
                                                    _ = c.previousScrollPosition + d;
                                                n.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: r(i, _),
                                                            from: { scrollPosition: o.scrollPosition.get() },
                                                        },
                                                        u && { config: u },
                                                    ),
                                                );
                                            }),
                                            s = w.O.client.events.mouse.up(function () {
                                                m({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            (e(), s());
                                        };
                                    }, [o.scrollPosition, r, t, c, n, a, u]),
                                    (0, s.useEffect)(() => {
                                        if ('scrollingToEnd' !== c.type) return;
                                        const e = () => {
                                            m(ir);
                                        };
                                        return (o.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                    }, [o.scrollPosition, c.type, i]),
                                    (0, s.useEffect)(() => {
                                        const e = t.current;
                                        if (!e) return;
                                        const u = (e) => {
                                            m({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', u),
                                            () => e.removeEventListener('mousedown', u)
                                        );
                                    }, [o.scrollPosition, t]));
                            })(Object.assign({}, a)),
                            o().createElement(
                                'div',
                                { className: Zr },
                                o().createElement(
                                    'div',
                                    { className: Yr },
                                    o().createElement(
                                        or.Horizontal.Area.Default,
                                        {
                                            api: a,
                                            className: Kr,
                                            classNames: { content: Jr, wrapper: Qr },
                                            barClassNames: { base: es },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: us },
                                            e.map((e) =>
                                                o().createElement(qr, {
                                                    key: e.id,
                                                    chapter: e,
                                                    onSelectChapter: u,
                                                    onToChapterRewards: t,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    as = 'SeasonsView_base_89',
                    ns = 'SeasonsView_headerWrapper_b2',
                    rs = R.strings.paragons,
                    ss = rs.seasonsProgression,
                    os = (0, V.Pi)(() => {
                        const e = vu(),
                            u = e.model,
                            t = e.controls,
                            a = u.computes.hasActiveSeason(),
                            n = u.computes.isAllAvailableSeasonsCompleted(),
                            r = u.computes.getStages(),
                            s = n ? ss.subtitle.allStagesCompleted() : ss.subtitle.selectStageForGetReward(),
                            i = a ? '' : s;
                        return o().createElement(
                            'div',
                            { className: as },
                            o().createElement(
                                'div',
                                { className: ns },
                                o().createElement(Ze.h, {
                                    topTitle: rs.project.name(),
                                    mainTitle: ss.title.projectStages(),
                                    subtitle: i,
                                }),
                            ),
                            o().createElement(ts, {
                                allChapters: r,
                                onSelectChapter: t.onSelectChapter,
                                onToChapterRewards: t.onToChapterRewards,
                            }),
                        );
                    }),
                    is = R.strings.paragons,
                    ls = is.navigation,
                    cs = (0, V.Pi)(() => {
                        const e = vu(),
                            u = e.controls,
                            t = e.model,
                            a = t.root.get(),
                            n = a.hasNewProgress,
                            r = a.hasNewChapters,
                            i = a.currentTabId,
                            c = a.vehicleCount,
                            m = a.necessaryVehicleCount,
                            d = t.computes.getPreviewSeason(),
                            _ = t.computes.getCurrentSeason(),
                            E = (null == _ ? void 0 : _.id) || -1,
                            A = d || _,
                            g = (null == A ? void 0 : A.id) || -1,
                            p = Boolean(d),
                            D = p || E > 0,
                            F = p && E <= 0,
                            C = F ? ls.button.gotoSeasons() : ls.button.goto(),
                            B = p && (null == A ? void 0 : A.chapterStatus.status) === $e.DEFAULT,
                            h = (0, s.useCallback)(() => {
                                F ? u.onBackToSeasons() : u.onBack();
                            }, [u, F]),
                            v = (0, s.useCallback)(
                                (e) => () => {
                                    u.onTabChange(e);
                                },
                                [u],
                            ),
                            b = (0, s.useCallback)(
                                (e, t) => {
                                    u.onSelectVehicleReward(e, t, g);
                                },
                                [u, g],
                            ),
                            f = (0, s.useMemo)(
                                () => ({
                                    [Ve.progress]: {
                                        hasNewItems: n,
                                        isVisibleTab: D,
                                        component:
                                            A &&
                                            o().createElement(An, {
                                                currentSeason: A,
                                                paragonPoints: A.points,
                                                onPreviewVehicle: u.onPreviewVehicle,
                                                onSelectVehicleReward: b,
                                                onSeasonActivate: u.onSeasonActivate,
                                                necessaryVehicleCount: m,
                                                vehicleCount: c,
                                                hasSeasonActivateButton: B,
                                                selectedSeason: g,
                                            }),
                                    },
                                    [Ve.chapters]: {
                                        hasNewItems: r,
                                        isVisibleTab: !0,
                                        component: o().createElement(os, null),
                                    },
                                    [Ve.about]: {
                                        hasNewItems: !1,
                                        isVisibleTab: !0,
                                        component: o().createElement(
                                            'div',
                                            { className: fu },
                                            o().createElement('div', { className: wu }),
                                            o().createElement(
                                                'div',
                                                { className: Nu },
                                                o().createElement(Ze.h, { mainTitle: is.project.name() }),
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Tu },
                                                o().createElement(Ie, {
                                                    isFullSize: !0,
                                                    options: { rootId: Ve.about },
                                                }),
                                            ),
                                        ),
                                    },
                                }),
                                [n, D, A, u.onPreviewVehicle, u.onSeasonActivate, b, m, c, B, g, r],
                            ),
                            S = (0, s.useMemo)(() => Object.keys(f).filter((e) => f[e].isVisibleTab), [f]);
                        return (
                            (function ({
                                key: e = ze.n.ESCAPE,
                                callback: u = () => w.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                qe(e, u, t);
                            })({ callback: u.onBack, preventPropagation: !1 }),
                            o().createElement(
                                'div',
                                { className: bu },
                                o().createElement(
                                    'div',
                                    { className: l()(Su, xu) },
                                    o().createElement(Ge, {
                                        caption: ls.button.back(),
                                        side: 'left',
                                        type: 'back',
                                        onClick: h,
                                        goto: C,
                                    }),
                                ),
                                (!p || Boolean(_)) &&
                                    o().createElement(
                                        'div',
                                        { className: l()(Su, Ru) },
                                        o().createElement(Ge, {
                                            caption: ls.button.close(),
                                            side: 'right',
                                            type: 'close',
                                            onClick: u.onClose,
                                        }),
                                    ),
                                !F &&
                                    o().createElement(
                                        'div',
                                        { className: Pu },
                                        o().createElement(
                                            'div',
                                            { className: Lu },
                                            S.map((e) =>
                                                o().createElement(nt, {
                                                    key: e,
                                                    tabId: e,
                                                    seasonId: g,
                                                    isSelected: i === Number(e),
                                                    onClick: v(e),
                                                    hasNewItems: f[e].hasNewItems,
                                                }),
                                            ),
                                        ),
                                    ),
                                o().createElement('div', { className: yu }, f[i].component),
                            )
                        );
                    });
                const ms = {
                        wasSold: !1,
                        inInventory: !0,
                        rentBattles: 0,
                        rentDays: 0,
                        isRent: !1,
                        isElite: !0,
                        nationTag: 'ussr',
                        shortVehicleLabel: 'Об. 274а',
                        level: 8,
                        type: 'mediumTank',
                        vehicleName: 'R180_Object_274_A',
                        overlayType: '',
                        item: '',
                        label: 'Объект 274а',
                        tooltipContentId: '25',
                        tooltipId: '1',
                        isCompensation: !1,
                        value: '',
                        name: 'vehicles',
                        index: 0,
                        isReceived: !1,
                        isClaimed: !0,
                        isSelectable: !1,
                        isSelectableClaimed: !1,
                        icon: '',
                    },
                    ds = {
                        name: 'tmanToken',
                        label: 'Mock Tankman label',
                        value: 'Mock Tankman value',
                        icon: 'tankmen_BP14_1',
                        isClaimed: !0,
                        index: 1,
                        isCompensation: !1,
                        tooltipId: '',
                        tooltipContentId: '',
                    },
                    _s = {
                        name: 'credits',
                        value: '50000',
                        icon: 'credits',
                        isClaimed: !0,
                        label: 'Mock Tankman label',
                        index: 1,
                        isCompensation: !1,
                        tooltipId: '',
                        tooltipContentId: '',
                    },
                    Es = {
                        name: 'branch',
                        icon: 'branch',
                        value: 'Branch selection',
                        isReceived: !1,
                        isClaimed: !1,
                        isSelectable: !0,
                        isSelectableClaimed: !1,
                        label: '',
                        index: 1,
                        isCompensation: !1,
                        tooltipId: '',
                        tooltipContentId: '',
                    },
                    As = {
                        name: 'vehicleSelect',
                        icon: 'vehicleSelect',
                        isReceived: !1,
                        isVehicleSelectAvailable: !0,
                        value: '',
                        isClaimed: !1,
                        label: '',
                        index: 1,
                        isCompensation: !1,
                        tooltipId: '',
                        tooltipContentId: '',
                    },
                    gs = {
                        name: 'vehicleSelect',
                        icon: 'vehicleSelect',
                        isReceived: !1,
                        isVehicleSelectAvailable: !1,
                        value: '',
                        isClaimed: !1,
                        label: '',
                        index: 1,
                        isCompensation: !1,
                        tooltipId: '',
                        tooltipContentId: '',
                    },
                    ps = [
                        {
                            number: 1,
                            maxPoints: 150,
                            isCompleted: !1,
                            mainRewards: [ds],
                            equalRewards: [ms, _s],
                            rewards: [ms, ds, _s],
                        },
                        {
                            number: 2,
                            maxPoints: 300,
                            isCompleted: !1,
                            mainRewards: [ms],
                            equalRewards: [ds, _s],
                            rewards: [ms, ds, _s],
                        },
                        {
                            number: 3,
                            maxPoints: 450,
                            isCompleted: !1,
                            mainRewards: [gs],
                            equalRewards: [ms, _s],
                            rewards: [gs, ms, _s],
                        },
                        {
                            number: 4,
                            maxPoints: 600,
                            isCompleted: !1,
                            mainRewards: [],
                            equalRewards: [ds],
                            rewards: [ds],
                        },
                        {
                            number: 5,
                            maxPoints: 750,
                            isCompleted: !1,
                            mainRewards: [],
                            equalRewards: [ds, ms, _s],
                            rewards: [ds, ms, _s],
                        },
                        {
                            number: 6,
                            maxPoints: 1050,
                            isCompleted: !1,
                            mainRewards: [As],
                            equalRewards: [_s],
                            rewards: [As, _s],
                        },
                        {
                            number: 7,
                            maxPoints: 1350,
                            isCompleted: !1,
                            mainRewards: [],
                            equalRewards: [Es, ms],
                            rewards: [Es, ms],
                        },
                        {
                            number: 8,
                            maxPoints: 1650,
                            isCompleted: !1,
                            mainRewards: [_s],
                            equalRewards: [ds, ms],
                            rewards: [_s, ds, ms],
                        },
                        {
                            number: 9,
                            maxPoints: 1950,
                            isCompleted: !1,
                            mainRewards: [ds],
                            equalRewards: [ms, _s],
                            rewards: [ds, ms, _s],
                        },
                        {
                            number: 10,
                            maxPoints: 2250,
                            isCompleted: !1,
                            mainRewards: [ms],
                            equalRewards: [ds, _s],
                            rewards: [ms, ds, _s],
                        },
                    ],
                    Ds = {
                        id: 1,
                        name: '+++Название этапа 1',
                        chapterStatus: { status: $e.DEFAULT },
                        chapterLevel: 5,
                        points: 650,
                        levels: [
                            { number: 1, maxPoints: 150, isCompleted: !0, rewards: [ms, ds, _s] },
                            { number: 2, maxPoints: 300, isCompleted: !0, rewards: [ms, ds, _s] },
                            { number: 3, maxPoints: 450, isCompleted: !0, rewards: [gs, ms, _s] },
                            { number: 4, maxPoints: 600, isCompleted: !0, rewards: [ds] },
                            { number: 5, maxPoints: 750, isCompleted: !1, rewards: [ds, ms, _s] },
                            { number: 6, maxPoints: 1050, isCompleted: !1, rewards: [As, _s] },
                            { number: 7, maxPoints: 1350, isCompleted: !1, rewards: [Es, ms] },
                            { number: 8, maxPoints: 1650, isCompleted: !1, rewards: [_s, ds, ms] },
                            { number: 9, maxPoints: 1950, isCompleted: !1, rewards: [ds, ms, _s] },
                            { number: 10, maxPoints: 2250, isCompleted: !1, rewards: [ms, ds, _s] },
                        ],
                        finalVehicleCDs: [7937041, 7937601, 7938385],
                    },
                    Fs = {
                        id: 2,
                        name: '+++Название этапа 2',
                        chapterStatus: { status: $e.DEFAULT },
                        chapterLevel: 1,
                        points: 0,
                        levels: [
                            { number: 1, maxPoints: 150, isCompleted: !1, rewards: [ms, ds, _s] },
                            { number: 2, maxPoints: 300, isCompleted: !1, rewards: [ms, ds, _s] },
                            { number: 3, maxPoints: 450, isCompleted: !1, rewards: [gs, ms, _s] },
                            { number: 4, maxPoints: 600, isCompleted: !1, rewards: [ds] },
                            { number: 5, maxPoints: 750, isCompleted: !1, rewards: [ds, ms, _s] },
                            { number: 6, maxPoints: 1050, isCompleted: !1, rewards: [As, _s] },
                            { number: 7, maxPoints: 1350, isCompleted: !1, rewards: [Es, ms] },
                            { number: 8, maxPoints: 1650, isCompleted: !1, rewards: [_s, ds, ms] },
                            { number: 9, maxPoints: 1950, isCompleted: !1, rewards: [ds, ms, _s] },
                            { number: 10, maxPoints: 2250, isCompleted: !1, rewards: [ms, ds, _s] },
                        ],
                        finalVehicleCDs: [7937041, 7937601, 7938385],
                    },
                    Cs = ($e.DISABLED, $e.ACTIVE, $e.FINISHED, $e.ANNOUNCEMENT, [Ds]),
                    Bs = {
                        hasNewProgress: !1,
                        hasNewChapters: !1,
                        wasChapterSelected: !0,
                        currentTabId: Ve.progress,
                        previewSeasonId: 2,
                        progression: { stages: [Ds, Fs], currentStage: 1 },
                        allRewards: { levels: ps },
                        allChapters: { allChapters: Cs },
                    },
                    hs = {
                        getter: ((vs = Bs), (e) => (e ? e.split('.').reduce((e, u) => e[u], vs) : vs)),
                        controls: () =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const a = e[t];
                                        u[t] = (0, f.aD)(a);
                                    }
                                return u;
                            })({
                                onBack: () => {
                                    console.log('onBack');
                                },
                                onClose: () => {
                                    console.log('onClose');
                                },
                                onTabChange: (e) => {
                                    console.log('onChange', e);
                                },
                                onToStagesView: () => {
                                    console.log('onToStagesView');
                                },
                                onPreviewVehicle: () => {
                                    console.log('onPreviewVehicle');
                                },
                                onCompareVehicle: () => {
                                    console.log('onCompareVehicle');
                                },
                                onSelectVehicle: () => {
                                    console.log('onSelectVehicle');
                                },
                                onSelectChapter: (e) => {
                                    console.log('onSelectChapter', e);
                                },
                                onSelectVehicleReward: (e, u) => {
                                    console.log('onSelectVehicleReward', e, u);
                                },
                                onPreviewStyle: (e, u, t) => {
                                    console.log('onPreviewStyle', e, u, t);
                                },
                                onToChapterRewards: (e) => {
                                    console.log('onToChapterRewards', e);
                                },
                                onSeasonActivate: (e) => {
                                    console.log('onSeasonActivate', e);
                                },
                                onBackToSeasons: () => {
                                    console.log('onBackToSeasons');
                                },
                            }),
                    };
                var vs;
                engine.whenReady.then(() => {
                    h().render(
                        o().createElement(
                            hu,
                            { mode: 'real', mocks: hs },
                            o().createElement(C, null, o().createElement(cs, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            1685: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => c });
                var a = t(7613),
                    n = t(6179),
                    r = t.n(n);
                const s = 'Header_base_37',
                    o = 'Header_textContainer_22',
                    i = 'Header_mainTitle_85',
                    l = 'Header_subTitle_fb',
                    c = (0, n.memo)(({ stage: e = 0, topTitle: u = '', mainTitle: t, subtitle: n = '' }) =>
                        r().createElement(
                            'div',
                            { className: s },
                            r().createElement(
                                'div',
                                { className: o },
                                u && r().createElement(a.ZP, { text: u, className: l }),
                                r().createElement(a.ZP, { text: t, format: { binding: { level: e } }, className: i }),
                                n && r().createElement(a.ZP, { text: n, className: l }),
                            ),
                        ),
                    );
            },
            5190: (e, u, t) => {
                'use strict';
                t.d(u, { M2: () => p, uA: () => A, YH: () => g });
                var a = t(6483),
                    n = t.n(a),
                    r = t(7613);
                const s = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    l = (e) =>
                        i
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = o.length - 1; t >= 0; t--)
                                      for (; e >= o[t]; ) ((u += s[t]), (e -= o[t]));
                                  return u;
                              })(e);
                var c = t(3649),
                    m = t(6179),
                    d = t.n(m);
                const _ = {
                        base: 'VehicleName_base_f4',
                        base__white: 'VehicleName_base__white_3d',
                        base__whiteSpanish: 'VehicleName_base__whiteSpanish_90',
                        base__whiteOrange: 'VehicleName_base__whiteOrange_52',
                        base__cream: 'VehicleName_base__cream_b3',
                        nation: 'VehicleName_nation_8b',
                        base__colored: 'VehicleName_base__colored_f2',
                        level: 'VehicleName_level_7d',
                        type: 'VehicleName_type_12',
                        type__elite: 'VehicleName_type__elite_0d',
                        base__extraSmall: 'VehicleName_base__extraSmall_74',
                        base__medium: 'VehicleName_base__medium_16',
                        name: 'VehicleName_name_5c',
                    },
                    E = 'R.images.gui.maps.icons',
                    A = { ExtraSmall: 'extraSmall', Small: 'small', Medium: 'medium' },
                    g = {
                        Colored: 'colored',
                        White: 'white',
                        WhiteSpanish: 'whiteSpanish',
                        WhiteOrange: 'whiteOrange',
                        Cream: 'cream',
                    },
                    p = (0, m.memo)(
                        ({
                            isElite: e = !0,
                            vehicleName: u,
                            vehicleNation: t,
                            vehicleType: a,
                            vehicleLvl: s,
                            isShortVehicleName: o = !1,
                            size: i = A.Small,
                            type: m = g.WhiteOrange,
                            className: p,
                        }) => {
                            const D = n()(_.base, _[`base__${i}`], _[`base__${m}`], p),
                                F = n()(_.type, e && _.type__elite),
                                C = A.Medium ? 'big' : 'c_64x64';
                            return d().createElement(
                                'div',
                                { className: D },
                                !o &&
                                    d().createElement(
                                        d().Fragment,
                                        null,
                                        t &&
                                            d().createElement('div', {
                                                className: _.nation,
                                                style: { backgroundImage: `url(${E}.flags.c_25x17.${t})` },
                                            }),
                                        d().createElement(r.ZP, { text: l(s), className: _.level }),
                                        d().createElement('div', {
                                            className: F,
                                            style: {
                                                backgroundImage: `url(${E}.vehicleTypes.${C}.${(0, c.BN)(a)}${e ? '_elite' : ''})`,
                                            },
                                        }),
                                    ),
                                d().createElement(r.ZP, { text: u, className: _.name }),
                            );
                        },
                    );
            },
            5026: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
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
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                const a = { base: 'FormatText_base_d0' };
            },
            3393: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], r = !0, s = 0; s < u.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
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
        (__webpack_require__.j = 314),
        (() => {
            var e = { 314: 0, 921: 0, 731: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, s, o] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [454], () => __webpack_require__(9382));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
