(() => {
    var __webpack_modules__ = {
            3779: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => B });
                var r = t(6483),
                    n = t.n(r),
                    a = t(9887),
                    i = t.n(a),
                    E = t(3377),
                    o = t(6179),
                    A = t.n(o),
                    s = t(5026);
                const F = [
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
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        l.apply(this, arguments)
                    );
                }
                Object.keys(i());
                const D = {
                        XL: { mt: s.Z.mt__XL, mr: s.Z.mr__XL, mb: s.Z.mb__XL, ml: s.Z.ml__XL },
                        LG: { mt: s.Z.mt__LG, mr: s.Z.mr__LG, mb: s.Z.mb__LG, ml: s.Z.ml__LG },
                        MDp: { mt: s.Z.mt__MDp, mr: s.Z.mr__MDp, mb: s.Z.mb__MDp, ml: s.Z.ml__MDp },
                        MD: { mt: s.Z.mt__MD, mr: s.Z.mr__MD, mb: s.Z.mb__MD, ml: s.Z.ml__MD },
                        SMp: { mt: s.Z.mt__SMp, mr: s.Z.mr__SMp, mb: s.Z.mb__SMp, ml: s.Z.ml__SMp },
                        SM: { mt: s.Z.mt__SM, mr: s.Z.mr__SM, mb: s.Z.mb__SM, ml: s.Z.ml__SM },
                        XS: { mt: s.Z.mt__XS, mr: s.Z.mr__XS, mb: s.Z.mb__XS, ml: s.Z.ml__XS },
                    },
                    _ = (Object.keys(D), ['mt', 'mr', 'mb', 'ml']),
                    c = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    B = (0, E.ZP)((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            a = u.m,
                            i = u.mt,
                            E = void 0 === i ? a : i,
                            B = u.mr,
                            d = void 0 === B ? a : B,
                            m = u.mb,
                            C = void 0 === m ? a : m,
                            h = u.ml,
                            g = void 0 === h ? a : h,
                            v = u.column,
                            p = u.row,
                            b = u.flexDirection,
                            w = void 0 === b ? (v ? 'column' : p && 'row') || void 0 : b,
                            f = u.flexStart,
                            x = u.center,
                            M = u.flexEnd,
                            S = u.spaceBetween,
                            L = u.spaceAround,
                            T = u.justifyContent,
                            y =
                                void 0 === T
                                    ? (f ? 'flex-start' : x && 'center') ||
                                      (M && 'flex-end') ||
                                      (S && 'space-between') ||
                                      (L && 'space-around') ||
                                      void 0
                                    : T,
                            O = u.alignItems,
                            R = void 0 === O ? (f ? 'flex-start' : x && 'center') || (M && 'flex-end') || void 0 : O,
                            H = u.alignSelf,
                            P = u.wrap,
                            k = u.flexWrap,
                            N = void 0 === k ? (P ? 'wrap' : void 0) : k,
                            I = u.grow,
                            W = u.shrink,
                            G = u.flex,
                            U = void 0 === G ? (I || W ? `${I ? 1 : 0} ${W ? 1 : 0} auto` : void 0) : G,
                            j = u.style,
                            Z = u.children,
                            X = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, F);
                        const V = (0, o.useMemo)(() => {
                                const u = { mt: E, mr: d, mb: C, ml: g },
                                    e = ((u) =>
                                        _.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(D[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    n = ((u) =>
                                        _.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[c[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, j, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: U,
                                        alignSelf: H,
                                        display: w || R ? 'flex' : void 0,
                                        flexDirection: w,
                                        flexWrap: N,
                                        justifyContent: y,
                                        alignItems: R,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, E, d, C, g, j, U, H, w, N, y, R]),
                            $ = V.computedStyle,
                            K = V.computedClassNames;
                        return A().createElement('div', l({ className: n()(s.Z.base, ...K, e), style: $ }, X), Z);
                    });
            },
            280: (u, e, t) => {
                'use strict';
                t.d(e, { z: () => A });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6483),
                    i = t.n(a),
                    E = t(3649),
                    o = t(5287);
                const A = ({ binding: u, text: e = '', classMix: t, alignment: a = E.v2.left }) =>
                    null === e
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : n().createElement(
                              r.Fragment,
                              null,
                              e.split('\n').map((e, A) =>
                                  n().createElement(
                                      'div',
                                      { className: i()(o.Z.base, t), key: `${e}-${A}` },
                                      (0, E.Uw)(e, a, u).map((u, e) =>
                                          n().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => F });
                var r = t(5067),
                    n = t(6179),
                    a = t(1043),
                    i = t(5262);
                const E = r.O.client.getSize('rem'),
                    o = E.width,
                    A = E.height,
                    s = Object.assign({ width: o, height: A }, (0, i.T)(o, A, a.j)),
                    F = (0, n.createContext)(s);
            },
            1039: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => s });
                var r = t(6179),
                    n = t.n(r),
                    a = t(6536),
                    i = t(3495),
                    E = t(1043),
                    o = t(5262),
                    A = t(5067);
                const s = (0, r.memo)(({ children: u }) => {
                    const e = (0, r.useContext)(i.Y),
                        t = (0, r.useState)(e),
                        s = t[0],
                        F = t[1],
                        l = (0, r.useCallback)((u, e) => {
                            const t = A.O.view.pxToRem(u),
                                r = A.O.view.pxToRem(e);
                            F(Object.assign({ width: t, height: r }, (0, o.T)(t, r, E.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', l);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', l), [l]));
                    const D = (0, r.useMemo)(() => Object.assign({}, s), [s]);
                    return n().createElement(i.Y.Provider, { value: D }, u);
                });
            },
            6010: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    a = t(3495);
                const i = ['children'];
                const E = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, i);
                    const E = (0, r.useContext)(a.Y),
                        o = E.extraLarge,
                        A = E.large,
                        s = E.medium,
                        F = E.small,
                        l = E.extraSmall,
                        D = E.extraLargeWidth,
                        _ = E.largeWidth,
                        c = E.mediumWidth,
                        B = E.smallWidth,
                        d = E.extraSmallWidth,
                        m = E.extraLargeHeight,
                        C = E.largeHeight,
                        h = E.mediumHeight,
                        g = E.smallHeight,
                        v = E.extraSmallHeight,
                        p = { extraLarge: m, large: C, medium: h, small: g, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return e;
                        if (t.large && A) return e;
                        if (t.medium && s) return e;
                        if (t.small && F) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && D) return (0, n.H)(e, t, p);
                        if (t.largeWidth && _) return (0, n.H)(e, t, p);
                        if (t.mediumWidth && c) return (0, n.H)(e, t, p);
                        if (t.smallWidth && B) return (0, n.H)(e, t, p);
                        if (t.extraSmallWidth && d) return (0, n.H)(e, t, p);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && m) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && v) return e;
                        }
                    }
                    return null;
                };
                E.defaultProps = {
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
                (0, r.memo)(E);
            },
            7382: (u, e, t) => {
                'use strict';
                t.d(e, { H: () => r });
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
            },
            7739: (u, e, t) => {
                'use strict';
                t.d(e, { YN: () => n.Y, ZN: () => r.Z });
                t(6010);
                var r = t(1039),
                    n = t(3495);
            },
            1043: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (u, e, t) => {
                'use strict';
                var r;
                function n(u, e, t) {
                    const r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
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
                (t.d(e, { T: () => n }),
                    (function (u) {
                        ((u.extraLarge = 'extraLarge'),
                            (u.large = 'large'),
                            (u.medium = 'medium'),
                            (u.small = 'small'),
                            (u.extraSmall = 'extraSmall'),
                            (u.extraLargeWidth = 'extraLargeWidth'),
                            (u.largeWidth = 'largeWidth'),
                            (u.mediumWidth = 'mediumWidth'),
                            (u.smallWidth = 'smallWidth'),
                            (u.extraSmallWidth = 'extraSmallWidth'),
                            (u.extraLargeHeight = 'extraLargeHeight'),
                            (u.largeHeight = 'largeHeight'),
                            (u.mediumHeight = 'mediumHeight'),
                            (u.smallHeight = 'smallHeight'),
                            (u.extraSmallHeight = 'extraSmallHeight'));
                    })(r || (r = {})));
            },
            7613: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => b });
                var r = t(6483),
                    n = t.n(r),
                    a = t(3779),
                    i = t(280),
                    E = t(3532),
                    o = t.n(E),
                    A = t(9887),
                    s = t.n(A),
                    F = t(3377),
                    l = t(6179),
                    D = t.n(l),
                    _ = t(3393);
                const c = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        B.apply(this, arguments)
                    );
                }
                Object.keys(s());
                const d = Object.keys(o()),
                    m = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    C = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    h = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    g = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    v =
                        (Object.keys(g),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': m,
                            'heading-H36': m,
                            'heading-H28': C,
                            'heading-H24': C,
                            'heading-H24R': C,
                            'heading-H22': C,
                            'heading-H20R': C,
                            'heading-H18': C,
                            'heading-H15': h,
                            'heading-H14': h,
                            'paragraph-P24': C,
                            'paragraph-P18': C,
                            'paragraph-P16': C,
                            'paragraph-P14': h,
                            'paragraph-P12': h,
                            'paragraph-P10': h,
                        }),
                    p =
                        (Object.keys(v),
                        (u) =>
                            u
                                ? ((u) => d.includes(u))(u)
                                    ? { colorClassName: _.Z[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    b = (0, F.ZP)((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            E = u.color,
                            o = u.m,
                            A = u.mt,
                            s = void 0 === A ? o : A,
                            F = u.mr,
                            d = void 0 === F ? o : F,
                            m = u.mb,
                            C = void 0 === m ? o : m,
                            h = u.ml,
                            g = void 0 === h ? o : h,
                            b = u.style,
                            w = u.format,
                            f = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, c);
                        const x = (0, l.useMemo)(() => {
                                const u = p(E),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, b, r), colorClassName: e };
                            }, [b, E]),
                            M = x.computedStyle,
                            S = x.colorClassName;
                        return D().createElement(
                            a.ZP,
                            B(
                                {
                                    className: n()(_.Z.base, t && _.Z[t], S, r),
                                    style: M,
                                    mt: !0 === s ? v[t || 'paragraph-P16'].mt : s,
                                    mr: !0 === d ? v[t || 'paragraph-P16'].mr : d,
                                    mb: !0 === C ? v[t || 'paragraph-P16'].mb : C,
                                    ml: !0 === g ? v[t || 'paragraph-P16'].ml : g,
                                },
                                f,
                            ),
                            void 0 !== w ? D().createElement(i.z, B({}, w, { text: e })) : e,
                        );
                    });
            },
            926: (u) => {
                u.exports = {
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
            3532: (u) => {
                u.exports = {
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
            9887: (u) => {
                u.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            5067: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => $ });
                var r = {};
                (t.r(r), t.d(r, { mouse: () => F, onResize: () => A }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => r,
                        getMouseGlobalPosition: () => D,
                        getSize: () => l,
                        graphicsQuality: () => _,
                    }));
                var a = {};
                (t.r(a), t.d(a, { getBgUrl: () => B, getTextureUrl: () => c }));
                var i = {};
                function E(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function o(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                (t.r(i),
                    t.d(i, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => f,
                        children: () => a,
                        displayStatus: () => d,
                        displayStatusIs: () => Z,
                        events: () => m,
                        extraSize: () => X,
                        forceTriggerMouseMove: () => U,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => j,
                        getScale: () => H,
                        getSize: () => T,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => G,
                        isFocused: () => I,
                        pxToRem: () => P,
                        remToPx: () => k,
                        resize: () => y,
                        sendEvent: () => w,
                        setAnimateWindow: () => N,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => x,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => V,
                    }));
                const A = E('clientResized'),
                    s = { down: E('mousedown'), up: E('mouseup'), move: E('mousemove') };
                const F = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : o(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${e}`,
                                        i = s[e]((u) => t([u, 'outside']));
                                    function E(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, E),
                                        r(),
                                        () => {
                                            n &&
                                                (i(),
                                                window.removeEventListener(a, E),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            ((u.enabled = !1), r());
                        },
                        enable() {
                            ((u.enabled = !0), r());
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function l(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function D(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function c(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function B(u, e, t) {
                    return `url(${c(u, e, t)})`;
                }
                const d = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    m = {
                        onTextureFrozen: E('self.onTextureFrozen'),
                        onTextureReady: E('self.onTextureReady'),
                        onDomBuilt: E('self.onDomBuilt'),
                        onLoaded: E('self.onLoaded'),
                        onDisplayChanged: E('self.onShowingStatusChanged'),
                        onFocusUpdated: E('self.onFocusChanged'),
                        children: {
                            onAdded: E('children.onAdded'),
                            onLoaded: E('children.onLoaded'),
                            onRemoved: E('children.onRemoved'),
                            onAttached: E('children.onAttached'),
                            onTextureReady: E('children.onTextureReady'),
                            onRequestPosition: E('children.requestPosition'),
                        },
                    },
                    C = ['args'];
                const h = 2,
                    g = 16,
                    v = 32,
                    p = 64,
                    b = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, C);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    w = {
                        close(u) {
                            b('popover' === u ? h : v);
                        },
                        minimize() {
                            b(p);
                        },
                        move(u) {
                            b(g, { isMouseEvent: !0, on: u });
                        },
                    };
                function f(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function x(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function M(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function S(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function L(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function T(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function y(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function O(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: k(e.x), y: k(e.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function P(u) {
                    return viewEnv.pxToRem(u);
                }
                function k(u) {
                    return viewEnv.remToPx(u);
                }
                function N(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function I() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function U() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const Z = Object.keys(d).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === d[e]), u), {}),
                    X = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    V = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : m.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    $ = { view: i, client: n };
            },
            3377: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => s });
                var r = t(5415),
                    n = t(6179),
                    a = t.n(n);
                const i = ['xl', 'lg', 'md', 'sm', 'xs'],
                    E = (u) => u.includes('_') && ((u) => i.includes(u))(u.split('_').at(-1)),
                    o = [r.cJ.ExtraLarge, r.cJ.Large, r.cJ.Medium, r.cJ.Small, r.cJ.ExtraSmall],
                    A = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (E(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = o.indexOf(e),
                                    E = (-1 !== a ? i.slice(a) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    A = E ? u[E] : void 0;
                                return ((t[n] = void 0 !== A ? A : u[n]), t);
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => i.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    s = (u, e = A) => {
                        const t = (
                            (u, e = A) =>
                            (t) => {
                                const i = (0, r.GS)().mediaSize,
                                    E = (0, n.useMemo)(() => e(t, i), [t, i]);
                                return a().createElement(u, E);
                            }
                        )(u, e);
                        return a().memo((e) =>
                            Object.keys(e).some((u) => E(u) && void 0 !== e[u])
                                ? a().createElement(t, e)
                                : a().createElement(u, e),
                        );
                    };
            },
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(6179);
                const n = (u) => {
                    const e = (0, r.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => o, GS: () => A, cJ: () => i, fd: () => E });
                var r = t(6179),
                    n = t(7739),
                    a = t(1043);
                let i, E, o;
                (!(function (u) {
                    ((u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.j.small.width)] = 'Small'),
                        (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                        (u[(u.Large = a.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(i || (i = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(E || (E = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const A = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return i.ExtraLarge;
                                case u.large:
                                    return i.Large;
                                case u.medium:
                                    return i.Medium;
                                case u.small:
                                    return i.Small;
                                case u.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(u),
                        A = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return E.ExtraLarge;
                                case u.largeWidth:
                                    return E.Large;
                                case u.mediumWidth:
                                    return E.Medium;
                                case u.smallWidth:
                                    return E.Small;
                                case u.extraSmallWidth:
                                    return E.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), E.ExtraSmall);
                            }
                        })(u),
                        s = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return o.ExtraLarge;
                                case u.largeHeight:
                                    return o.Large;
                                case u.mediumHeight:
                                    return o.Medium;
                                case u.smallHeight:
                                    return o.Small;
                                case u.extraSmallHeight:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: A, mediaHeight: s, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, n;
                (t.d(e, { n: () => r }),
                    (function (u) {
                        ((u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD'));
                    })(r || (r = {})),
                    (function (u) {
                        ((u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock'));
                    })(n || (n = {})));
            },
            7727: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { G: () => r });
            },
            3649: (u, e, t) => {
                'use strict';
                let r;
                (t.d(e, { Uw: () => F, v2: () => r, z4: () => n }),
                    (function (u) {
                        ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                    })(r || (r = {})));
                const n = (u) => u.replace(/&nbsp;/g, ' '),
                    a = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    i = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    E = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? a : i, []),
                    o = (() => {
                        const u = new RegExp(
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
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    A = ['zh_cn', 'zh_sg', 'zh_tw'],
                    s = (u, e = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return A.includes(t)
                            ? o(u)
                            : ((u, e = r.left) => {
                                  let t = [];
                                  const a =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      i = n(u);
                                  return (E(i, /( )/, e).forEach((u) => (t = t.concat(E(u, a, r.left)))), t);
                              })(u, e);
                    },
                    F = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : s(u, e)));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(5067);
                class n {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
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
                        ((this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                ((this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { B0: () => o, ry: () => m });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                var a = t(1358);
                const i = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    E = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let o;
                !(function (u) {
                    ((u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'));
                })(o || (o = {}));
                const A = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var D = t(5521),
                    _ = t(5067);
                const c = ['args'];
                function B(u, e, t, r, n, a, i) {
                    try {
                        var E = u[a](i),
                            o = E.value;
                    } catch (u) {
                        return void t(u);
                    }
                    E.done ? e(o) : Promise.resolve(o).then(r, n);
                }
                const d = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function i(u) {
                                            B(a, r, n, i, E, 'next', u);
                                        }
                                        function E(u) {
                                            B(a, r, n, i, E, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, c);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    h = () => C(o.CLOSE),
                    g = (u, e) => {
                        u.keyCode === D.n.ESCAPE && e();
                    };
                var v = t(7572);
                const p = n.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: A,
                        RealFormatType: s,
                        TimeFormatType: F,
                        DateFormatType: l,
                        makeGlobalBoundingBox: d,
                        sendMoveEvent: (u) => C(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => C(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            C(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                E = t.getBoundingClientRect(),
                                A = E.x,
                                s = E.y,
                                F = E.width,
                                l = E.height,
                                D = {
                                    x: _.O.view.pxToRem(A) + i.x,
                                    y: _.O.view.pxToRem(s) + i.y,
                                    width: _.O.view.pxToRem(F),
                                    height: _.O.view.pxToRem(l),
                                };
                            C(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: d(D),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => g(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            g(u, h);
                        },
                        handleViewEvent: C,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: i,
                        UserLocale: E,
                    };
                window.ViewEnvHelper = b;
            },
            9239: (u, e, t) => {
                'use strict';
                var r = t(7739),
                    n = t(6179),
                    a = t.n(n),
                    i = t(6483),
                    E = t.n(i),
                    o = t(926),
                    A = t.n(o),
                    s = t(5415);
                const F = ['children', 'className'];
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const D = {
                        [s.fd.ExtraSmall]: '',
                        [s.fd.Small]: A().SMALL_WIDTH,
                        [s.fd.Medium]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH}`,
                        [s.fd.Large]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH}`,
                        [s.fd.ExtraLarge]:
                            `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH} ${A().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [s.Aq.ExtraSmall]: '',
                        [s.Aq.Small]: A().SMALL_HEIGHT,
                        [s.Aq.Medium]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT}`,
                        [s.Aq.Large]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT}`,
                        [s.Aq.ExtraLarge]:
                            `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT} ${A().EXTRA_LARGE_HEIGHT}`,
                    },
                    c = {
                        [s.cJ.ExtraSmall]: '',
                        [s.cJ.Small]: A().SMALL,
                        [s.cJ.Medium]: `${A().SMALL} ${A().MEDIUM}`,
                        [s.cJ.Large]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE}`,
                        [s.cJ.ExtraLarge]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE} ${A().EXTRA_LARGE}`,
                    },
                    B = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, F);
                        const n = (0, s.GS)(),
                            i = n.mediaWidth,
                            o = n.mediaHeight,
                            A = n.mediaSize;
                        return a().createElement('div', l({ className: E()(t, D[i], _[o], c[A]) }, r), e);
                    },
                    d = ['children'];
                const m = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, d);
                    return a().createElement(r.ZN, null, a().createElement(B, t, e));
                };
                var C = t(493),
                    h = t.n(C),
                    g = t(7727);
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
                    p = [
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
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        b.apply(this, arguments)
                    );
                }
                class w extends a().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, g.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, g.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (u) => (e) => {
                                (u && u(e), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const u = this.props,
                            e = u.caption,
                            t = u.onClick,
                            r = u.goto,
                            n = u.side,
                            i = u.type,
                            o = u.classNames,
                            A = u.onMouseEnter,
                            s = u.onMouseLeave,
                            F = u.onMouseDown,
                            l = u.onMouseUp,
                            D =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(u, p)),
                            _ = E()(v.base, v[`base__${i}`], v[`base__${n}`], null == o ? void 0 : o.base),
                            c = E()(v.icon, v[`icon__${i}`], v[`icon__${n}`], null == o ? void 0 : o.icon),
                            B = E()(v.glow, null == o ? void 0 : o.glow),
                            d = E()(v.caption, v[`caption__${i}`], null == o ? void 0 : o.caption),
                            m = E()(v.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            b(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(A),
                                    onMouseLeave: this._onMouseLeave(s),
                                    onMouseDown: this._onMouseDown(F),
                                    onMouseUp: this._onMouseUp(l),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                D,
                            ),
                            'info' !== i && a().createElement('div', { className: v.shine }),
                            a().createElement('div', { className: c }, a().createElement('div', { className: B })),
                            a().createElement('div', { className: d }, e),
                            r && a().createElement('div', { className: m }, r),
                        );
                    }
                }
                w.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var f = t(5067),
                    x = t(5521);
                t(4179);
                const M = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function S(u = x.n.NONE, e = M, t = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== x.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (f.O.view.isEventHandled()) return;
                                (f.O.view.setEventHandled(), e(r), t && r.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                function L({
                    key: u = x.n.ESCAPE,
                    callback: e = () => f.O.view.sendEvent.close(),
                    preventPropagation: t = !0,
                } = {}) {
                    return (S(u, e, t), e);
                }
                const T = {
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
                let y, O;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(y || (y = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(O || (O = {})));
                const H = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: A,
                    soundClick: s,
                    onMouseEnter: F,
                    onMouseMove: l,
                    onMouseDown: D,
                    onMouseUp: _,
                    onMouseLeave: c,
                    onClick: B,
                }) => {
                    const d = (0, n.useRef)(null),
                        m = (0, n.useState)(t),
                        C = m[0],
                        h = m[1],
                        v = (0, n.useState)(!1),
                        p = v[0],
                        b = v[1],
                        w = (0, n.useState)(!1),
                        f = w[0],
                        x = w[1],
                        M = (0, n.useCallback)(() => {
                            i || (d.current && (d.current.focus(), h(!0)));
                        }, [i]),
                        S = (0, n.useCallback)(
                            (u) => {
                                C && null !== d.current && !d.current.contains(u.target) && h(!1);
                            },
                            [C],
                        ),
                        L = (0, n.useCallback)(
                            (u) => {
                                i || (B && B(u));
                            },
                            [i, B],
                        ),
                        O = (0, n.useCallback)(
                            (u) => {
                                i || (null !== A && (0, g.G)(A), F && F(u), x(!0));
                            },
                            [i, A, F],
                        ),
                        H = (0, n.useCallback)(
                            (u) => {
                                l && l(u);
                            },
                            [l],
                        ),
                        P = (0, n.useCallback)(
                            (u) => {
                                i || (_ && _(u), b(!1));
                            },
                            [i, _],
                        ),
                        k = (0, n.useCallback)(
                            (u) => {
                                i || (null !== s && (0, g.G)(s), D && D(u), t && M(), b(!0));
                            },
                            [i, s, D, M, t],
                        ),
                        N = (0, n.useCallback)(
                            (u) => {
                                i || (c && c(u), b(!1));
                            },
                            [i, c],
                        ),
                        I = E()(
                            T.base,
                            T[`base__${r}`],
                            {
                                [T.base__disabled]: i,
                                [T[`base__${e}`]]: e,
                                [T.base__focus]: C,
                                [T.base__highlightActive]: p,
                                [T.base__firstHover]: f,
                            },
                            o,
                        ),
                        W = E()(T.state, T.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, n.useEffect)(() => {
                            h(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: d,
                                className: I,
                                onMouseEnter: O,
                                onMouseMove: H,
                                onMouseUp: P,
                                onMouseDown: k,
                                onMouseLeave: N,
                                onClick: L,
                            },
                            r !== y.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: T.back }),
                                    a().createElement('span', { className: T.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: W },
                                a().createElement('span', { className: T.stateDisabled }),
                                a().createElement('span', { className: T.stateHighlightHover }),
                                a().createElement('span', { className: T.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: T.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                H.defaultProps = { type: y.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const P = (0, n.memo)(H);
                var k = t(7613),
                    N = t(3403),
                    I = t(6439);
                const W = function () {};
                function G(u) {
                    return u;
                }
                function U() {
                    return !1;
                }
                console.log;
                var j = t(9174);
                function Z(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return X(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return X(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function X(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const V = (u) => (0 === u ? window : window.subViews.get(u));
                var $ = t(3946);
                const K = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: E, mocks: o }) {
                                const A = (0, n.useRef)([]),
                                    s = (t, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = V,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const i = (u) => {
                                                    const n = t(e),
                                                        a = r.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const E = 'string' == typeof a ? `${r}.${a}` : r,
                                                            o = f.O.view.addModelObserver(E, e, !0);
                                                        return (n.set(o, t), u && t(i(a)), o);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (u, e) => {
                                                        const t = i(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = i(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = Z(n.keys()); !(u = t()).done;) a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            E =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : E.readByPath(u),
                                            s = (u) => A.current.push(u),
                                            F = u({
                                                mode: t,
                                                readByPath: o,
                                                externalModel: E,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const r = null != e ? e : o(u),
                                                            n = j.LO.box(r, { equals: U });
                                                        return (
                                                            'real' === t &&
                                                                E.subscribe(
                                                                    (0, j.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const r = null != e ? e : o(u),
                                                            n = j.LO.box(r, { equals: U });
                                                        return (
                                                            'real' === t &&
                                                                E.subscribe(
                                                                    (0, j.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const r = o(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = j.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    E.subscribe(
                                                                        (0, j.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                a = Object.entries(n),
                                                                i = a.reduce(
                                                                    (u, [e, t]) => ((u[t] = j.LO.box(r[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    E.subscribe(
                                                                        (0, j.aD)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: s,
                                            }),
                                            l = { mode: t, model: F, externalModel: E, cleanup: s };
                                        return {
                                            model: F,
                                            controls: 'mocks' === t && n ? n.controls(l) : e(l),
                                            externalModel: E,
                                            mode: t,
                                        };
                                    },
                                    F = (0, n.useRef)(!1),
                                    l = (0, n.useState)(r),
                                    D = l[0],
                                    _ = l[1],
                                    c = (0, n.useState)(() => s(r, i, o)),
                                    B = c[0],
                                    d = c[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        F.current ? d(s(D, i, o)) : (F.current = !0);
                                    }, [o, D, i]),
                                    (0, n.useEffect)(() => {
                                        _(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (B.externalModel.dispose(), A.current.forEach((u) => u()));
                                        },
                                        [B],
                                    ),
                                    a().createElement(t.Provider, { value: B }, E)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(({ observableModel: u }) => {
                        const e = { root: u.object(), rewards: u.array('rewards.items', []) },
                            t = (0, $.Om)(
                                () => {
                                    return (
                                        (u = e.rewards.get()),
                                        (t = G),
                                        Array.isArray(u)
                                            ? u.map(t)
                                            : u.map((u, e, r) => t(null == u ? void 0 : u.value, e, r))
                                    );
                                    var u, t;
                                },
                                { equals: U },
                            );
                        return { root: e.root, getRewards: t };
                    }, W),
                    z = K[0],
                    Y = K[1],
                    q = 'Content_base_cf',
                    J = 'Content_content_3f',
                    Q = 'Content_level_99',
                    uu = 'Content_title_6d',
                    eu = 'Content_reward_41',
                    tu = 'Content_ribbon_a7',
                    ru = 'Content_rays_9c',
                    nu = 'Content_glow_d0',
                    au = 'Content_lightCont_8c',
                    iu = 'Content_light_d4',
                    Eu = 'Content_buttonWrapper_5f',
                    ou = R.strings.bob,
                    Au = (0, N.Pi)(() => {
                        const u = Y().model,
                            e = u.root.get(),
                            t = e.level,
                            r = e.title,
                            n = u.getRewards(),
                            i = L({ key: x.n.NONE });
                        return a().createElement(
                            'div',
                            { className: q },
                            a().createElement(
                                'div',
                                { className: J },
                                a().createElement(
                                    'div',
                                    { className: Q },
                                    a().createElement(k.ZP, {
                                        text: ou.rewardScreen.level(),
                                        format: { binding: { level: t } },
                                    }),
                                ),
                                a().createElement('div', { className: uu }, a().createElement(k.ZP, { text: r })),
                                a().createElement(
                                    'div',
                                    { className: eu },
                                    a().createElement('img', {
                                        className: nu,
                                        src: 'swf://gui/flash/animations/bob/rays.swf',
                                        alt: '',
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: au },
                                        a().createElement('div', { className: iu }),
                                    ),
                                    a().createElement('div', { className: tu }),
                                    a().createElement('div', { className: ru }),
                                    a().createElement(I.j, { rewards: n }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Eu },
                                    a().createElement(
                                        P,
                                        { type: y.primary, size: O.medium, onClick: i },
                                        a().createElement(k.ZP, { text: ou.rewardScreen.button.ok() }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    su = 'App_base_02',
                    Fu = 'App_backButton_96',
                    lu = a().memo(() => {
                        const u = L();
                        return a().createElement(
                            'div',
                            { className: su },
                            a().createElement(Au, null),
                            a().createElement(
                                'div',
                                { className: Fu },
                                a().createElement(w, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: u,
                                }),
                            ),
                        );
                    }),
                    Du = {
                        getter:
                            ((_u = {
                                level: 1,
                                title: 'Title',
                                rewards: {
                                    items: [
                                        {
                                            id: 0,
                                            value: {
                                                icon: 'background_31017_0',
                                                userName: 'Участник команды LeBwa',
                                                item: '',
                                                label: 'Участник команды LeBwa',
                                                tooltipId: 0,
                                                isCompensation: !1,
                                                value: '',
                                                name: 'dogTagComponents',
                                            },
                                        },
                                        {
                                            id: 1,
                                            value: {
                                                label: 'WZ-111-5A BB',
                                                tooltipId: 1,
                                                isCompensation: !1,
                                                value: '',
                                                name: 'vehicles_rent',
                                                icon: '',
                                                userName: '',
                                                item: '',
                                            },
                                        },
                                        {
                                            id: 2,
                                            value: {
                                                label: 'Объект 430У ББ',
                                                tooltipId: 2,
                                                isCompensation: !1,
                                                value: '',
                                                name: 'vehicles_rent',
                                                icon: '',
                                                userName: '',
                                                item: '',
                                            },
                                        },
                                    ],
                                    selectedIndices: [],
                                    onSelectionChanged: () => {
                                        console.log('onSelectionChanged');
                                    },
                                    onItemClicked: () => {
                                        console.log('onItemClicked');
                                    },
                                },
                            }),
                            (u) => (u ? u.split('.').reduce((u, e) => u[e], _u) : _u)),
                        controls: () => ({}),
                    };
                var _u;
                engine.whenReady.then(() => {
                    h().render(
                        a().createElement(
                            z,
                            { mocks: Du, mode: 'real' },
                            a().createElement(m, null, a().createElement(lu, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            2751: (u, e, t) => {
                'use strict';
                t.d(e, { D: () => C });
                var r = t(6483),
                    n = t.n(r),
                    a = t(7613);
                var i = t(4179),
                    E = t(6179),
                    o = t.n(E);
                const A = [
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
                function s(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const F = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: i.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            n = u.onMouseEnter,
                            a = u.onMouseLeave,
                            i = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            D = void 0 !== l && l,
                            _ = u.ignoreMouseClick,
                            c = void 0 !== _ && _,
                            B = u.decoratorId,
                            d = void 0 === B ? 0 : B,
                            m = u.isEnabled,
                            C = void 0 === m || m,
                            h = u.targetId,
                            g = void 0 === h ? 0 : h,
                            v = u.onShow,
                            p = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, A);
                        const w = (0, E.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, E.useMemo)(
                                () =>
                                    g ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: e, resId: r }
                                        );
                                    })().resId,
                                [g],
                            ),
                            x = (0, E.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (F(t, d, { isMouseEvent: !0, on: !0, arguments: s(r) }, f),
                                    v && v(),
                                    (w.current.isVisible = !0));
                            }, [t, d, r, f, v]),
                            M = (0, E.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        F(t, d, { on: !1 }, f),
                                        w.current.isVisible && p && p(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, d, f, p]),
                            S = (0, E.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        ((0, E.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        u && window.clearTimeout(u));
                                }
                            );
                        }, []),
                            (0, E.useEffect)(() => {
                                !1 === C && M();
                            }, [C, M]),
                            (0, E.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        (window.removeEventListener('mouseleave', M), M());
                                    }
                                ),
                                [M],
                            ));
                        return C
                            ? (0, E.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(x, D ? 100 : 400)),
                                                      n && n(u),
                                                      L && L(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (M(), null == a || a(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === c && M(), null == o || o(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === c && M(), null == i || i(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : e;
                        var L;
                    },
                    D = 'BobRewardIcon_base_61',
                    _ = 'BobRewardIcon_image_f4',
                    c = 'BobRewardIcon_image__extraSmall_ee',
                    B = 'BobRewardIcon_amount_1a',
                    d = R.views.common.tooltip_window,
                    m = R.images.gui.maps.icons.quests.bonuses.s600x450,
                    C = o().memo(({ icon: u, value: e, tooltipId: t, isSmall: r = !1 }) => {
                        const i = Number(e),
                            A = (0, E.useMemo)(() => ({ tooltipId: t }), [t]),
                            s = { backgroundImage: `url(${m.$dyn(u)})` };
                        return o().createElement(
                            l,
                            {
                                ignoreShowDelay: !0,
                                contentId: d.backport_tooltip_content.BackportTooltipContent('resId'),
                                decoratorId: d.tooltip_window.TooltipWindow('resId'),
                                args: A,
                            },
                            o().createElement(
                                'div',
                                { className: D },
                                o().createElement('div', { className: n()(_, r && c), style: s }),
                                i > 1 &&
                                    o().createElement(
                                        'div',
                                        { className: B },
                                        o().createElement(a.ZP, { text: `&#215;${i}` }),
                                    ),
                            ),
                        );
                    });
            },
            4944: (u, e, t) => {
                'use strict';
                t.d(e, { g: () => F });
                var r = t(7613),
                    n = t(3649),
                    a = t(6179),
                    i = t.n(a);
                let E, o;
                (!(function (u) {
                    ((u.Personal = 'personal'), (u.Team = 'team'));
                })(E || (E = {})),
                    (function (u) {
                        ((u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium_plus'),
                            (u.Vehicle = 'vehicles_rent'),
                            (u.Items = 'items'));
                    })(o || (o = {})));
                const A = 'BobRewardTitle_vehicle_52',
                    s = R.strings.bob,
                    F = i().memo(({ name: u, reward: e }) => {
                        switch (u) {
                            case o.Credits:
                            case o.Crystal:
                                return i().createElement(r.ZP, {
                                    color: 'WHITE_SPANISH',
                                    text: s.rewards.label.$dyn(e.name),
                                    format: { binding: { value: e.value } },
                                });
                            case o.Premium:
                                return i().createElement(r.ZP, {
                                    color: 'WHITE_SPANISH',
                                    text: e.userName ? (0, n.z4)(e.userName) : '',
                                });
                            case o.Vehicle:
                                return i().createElement(
                                    'div',
                                    { className: A },
                                    i().createElement(r.ZP, { color: 'WHITE_SPANISH', text: s.rewards.label.rent() }),
                                    i().createElement(r.ZP, { color: 'GOLD', text: e.label }),
                                );
                            default:
                                return i().createElement(r.ZP, {
                                    color: 'WHITE_SPANISH',
                                    text: (0, n.z4)(e.label || e.userName),
                                });
                        }
                    });
            },
            6439: (u, e, t) => {
                'use strict';
                t.d(e, { j: () => B });
                var r = t(6483),
                    n = t.n(r);
                t(3649);
                let a;
                !(function (u) {
                    ((u.SHORT_DATE = 'short-date'),
                        (u.SHORT_TIME = 'short-time'),
                        (u.SHORT_DATE_TIME = 'short-date-time'),
                        (u.FULL_DATE = 'full-date'),
                        (u.FULL_DATE_TIME = 'full-date-time'),
                        (u.MONTH = 'month'),
                        (u.MONTH_DATE = 'month-date'),
                        (u.DATE_MONTH = 'date-month'),
                        (u.MONTH_YEAR = 'month-year'),
                        (u.WEEK_DAY = 'week-day'),
                        (u.WEEK_DAY_TIME = 'week-day-time'),
                        (u.YEAR = 'year'),
                        (u.DATE_YEAR = 'date-year'));
                })(a || (a = {}));
                t(4179);
                Date.now();
                var i = t(6179),
                    E = t.n(i),
                    o = t(7727),
                    A = t(2751),
                    s = t(4944);
                const F = 'BobRewards_base_37',
                    l = 'BobRewards_rewardWrapper_d2',
                    D = 'BobRewards_rewardWrapper__extraSmall_bc',
                    _ = (u) => 1 + 0.3 * u,
                    c = (u) => ({ animationDelay: `${_(u)}s` }),
                    B = E().memo(({ rewards: u }) => {
                        (0, i.useEffect)(() => {
                            const e = [];
                            return (
                                u.forEach((u, t) => {
                                    e[t] = window.setTimeout(
                                        () => {
                                            (0, o.G)(R.sounds.bp_reward());
                                        },
                                        1e3 * _(t),
                                    );
                                }),
                                () => {
                                    e.forEach(window.clearTimeout);
                                }
                            );
                        }, [u]);
                        const e = u.length > 3;
                        return E().createElement(
                            'div',
                            { className: F },
                            u.map((u, t) => {
                                const r = u.icon || u.item || u.name;
                                return E().createElement(
                                    'div',
                                    { className: n()(l, e && D), style: c(t), key: t },
                                    E().createElement(A.D, { icon: r, tooltipId: u.tooltipId, isSmall: e }),
                                    E().createElement(s.g, { name: u.name, reward: u }),
                                );
                            }),
                        );
                    });
            },
            5026: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
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
            5287: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                const r = { base: 'FormatText_base_d0' };
            },
            3393: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
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
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, r] = deferred[o], a = !0, i = 0; i < e.length; i++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var E = t();
                        void 0 !== E && (u = E);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 64),
        (() => {
            var u = { 64: 0, 928: 0, 307: 0, 262: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, i, E] = t,
                        o = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (E) var A = E(__webpack_require__);
                    }
                    for (e && e(t); o < a.length; o++)
                        ((n = a[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(A);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [596], () => __webpack_require__(9239));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
