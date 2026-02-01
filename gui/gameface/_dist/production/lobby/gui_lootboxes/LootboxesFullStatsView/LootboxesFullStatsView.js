(() => {
    var __webpack_modules__ = {
            3779: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => F });
                var n = t(6483),
                    o = t.n(n),
                    r = t(9887),
                    a = t.n(r),
                    s = t(3377),
                    i = t(6179),
                    l = t.n(i),
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
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                Object.keys(a());
                const m = {
                        XL: { mt: c.Z.mt__XL, mr: c.Z.mr__XL, mb: c.Z.mb__XL, ml: c.Z.ml__XL },
                        LG: { mt: c.Z.mt__LG, mr: c.Z.mr__LG, mb: c.Z.mb__LG, ml: c.Z.ml__LG },
                        MDp: { mt: c.Z.mt__MDp, mr: c.Z.mr__MDp, mb: c.Z.mb__MDp, ml: c.Z.ml__MDp },
                        MD: { mt: c.Z.mt__MD, mr: c.Z.mr__MD, mb: c.Z.mb__MD, ml: c.Z.ml__MD },
                        SMp: { mt: c.Z.mt__SMp, mr: c.Z.mr__SMp, mb: c.Z.mb__SMp, ml: c.Z.ml__SMp },
                        SM: { mt: c.Z.mt__SM, mr: c.Z.mr__SM, mb: c.Z.mb__SM, ml: c.Z.ml__SM },
                        XS: { mt: c.Z.mt__XS, mr: c.Z.mr__XS, mb: c.Z.mb__XS, ml: c.Z.ml__XS },
                    },
                    _ = (Object.keys(m), ['mt', 'mr', 'mb', 'ml']),
                    A = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    F = (0, s.ZP)((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            r = e.m,
                            a = e.mt,
                            s = void 0 === a ? r : a,
                            F = e.mr,
                            D = void 0 === F ? r : F,
                            g = e.mb,
                            B = void 0 === g ? r : g,
                            p = e.ml,
                            C = void 0 === p ? r : p,
                            b = e.column,
                            h = e.row,
                            f = e.flexDirection,
                            v = void 0 === f ? (b ? 'column' : h && 'row') || void 0 : f,
                            S = e.flexStart,
                            x = e.center,
                            w = e.flexEnd,
                            R = e.spaceBetween,
                            y = e.spaceAround,
                            T = e.justifyContent,
                            L =
                                void 0 === T
                                    ? (S ? 'flex-start' : x && 'center') ||
                                      (w && 'flex-end') ||
                                      (R && 'space-between') ||
                                      (y && 'space-around') ||
                                      void 0
                                    : T,
                            M = e.alignItems,
                            P = void 0 === M ? (S ? 'flex-start' : x && 'center') || (w && 'flex-end') || void 0 : M,
                            k = e.alignSelf,
                            N = e.wrap,
                            O = e.flexWrap,
                            I = void 0 === O ? (N ? 'wrap' : void 0) : O,
                            H = e.grow,
                            U = e.shrink,
                            W = e.flex,
                            G = void 0 === W ? (H || U ? `${H ? 1 : 0} ${U ? 1 : 0} auto` : void 0) : W,
                            X = e.style,
                            $ = e.children,
                            j = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, E);
                        const z = (0, i.useMemo)(() => {
                                const e = { mt: s, mr: D, mb: B, ml: C },
                                    u = ((e) =>
                                        _.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(m[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    o = ((e) =>
                                        _.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[A[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, X, o, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: G,
                                        alignSelf: k,
                                        display: v || P ? 'flex' : void 0,
                                        flexDirection: v,
                                        flexWrap: I,
                                        justifyContent: L,
                                        alignItems: P,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, s, D, B, C, X, G, k, v, I, L, P]),
                            V = z.computedStyle,
                            q = z.computedClassNames;
                        return l().createElement('div', d({ className: o()(c.Z.base, ...q, u), style: V }, j), $);
                    });
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6179),
                    o = t.n(n),
                    r = t(6483),
                    a = t.n(r),
                    s = t(3649),
                    i = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: r = s.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : o().createElement(
                              n.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  o().createElement(
                                      'div',
                                      { className: a()(i.Z.base, t), key: `${u}-${l}` },
                                      (0, s.Uw)(u, r, e).map((e, u) =>
                                          o().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var n = t(3138),
                    o = t(6179),
                    r = t(1043),
                    a = t(5262);
                const s = n.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, a.T)(i, l, r.j)),
                    E = (0, o.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(6179),
                    o = t.n(n),
                    r = t(6536),
                    a = t(3495),
                    s = t(1043),
                    i = t(5262),
                    l = t(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(a.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        E = t[1],
                        d = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: n }, (0, i.T)(t, n, s.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const m = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return o().createElement(a.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    o = t(7382),
                    r = t(3495);
                const a = ['children'],
                    s = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, a);
                        const s = (0, n.useContext)(r.Y),
                            i = s.extraLarge,
                            l = s.large,
                            c = s.medium,
                            E = s.small,
                            d = s.extraSmall,
                            m = s.extraLargeWidth,
                            _ = s.largeWidth,
                            A = s.mediumWidth,
                            F = s.smallWidth,
                            D = s.extraSmallWidth,
                            g = s.extraLargeHeight,
                            B = s.largeHeight,
                            p = s.mediumHeight,
                            C = s.smallHeight,
                            b = s.extraSmallHeight,
                            h = { extraLarge: g, large: B, medium: p, small: C, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && E) return u;
                            if (t.extraSmall && d) return u;
                        } else {
                            if (t.extraLargeWidth && m) return (0, o.H)(u, t, h);
                            if (t.largeWidth && _) return (0, o.H)(u, t, h);
                            if (t.mediumWidth && A) return (0, o.H)(u, t, h);
                            if (t.smallWidth && F) return (0, o.H)(u, t, h);
                            if (t.extraSmallWidth && D) return (0, o.H)(u, t, h);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                ((s.defaultProps = {
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
                    (0, n.memo)(s));
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
                (t.d(u, { YN: () => o.Y, ZN: () => n.Z }), t(6010));
                var n = t(1039),
                    o = t(3495);
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
                function o(e, u, t) {
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
                        o = (function (e, u) {
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
                        r = Math.min(n, o);
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
                        extraLargeHeight: o === t.extraLarge.weight,
                        largeHeight: o === t.large.weight,
                        mediumHeight: o === t.medium.weight,
                        smallHeight: o === t.small.weight,
                        extraSmallHeight: o === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => o }),
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
            7613: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => h });
                var n = t(6483),
                    o = t.n(n),
                    r = t(3779),
                    a = t(280),
                    s = t(3532),
                    i = t.n(s),
                    l = t(9887),
                    c = t.n(l),
                    E = t(3377),
                    d = t(6179),
                    m = t.n(d),
                    _ = t(3393);
                const A = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                Object.keys(c());
                const D = Object.keys(i()),
                    g = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    B = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    p = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    C =
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
                            'heading-H28': B,
                            'heading-H24': B,
                            'heading-H24R': B,
                            'heading-H22': B,
                            'heading-H20R': B,
                            'heading-H18': B,
                            'heading-H15': p,
                            'heading-H14': p,
                            'paragraph-P24': B,
                            'paragraph-P18': B,
                            'paragraph-P16': B,
                            'paragraph-P14': p,
                            'paragraph-P12': p,
                            'paragraph-P10': p,
                        }),
                    b =
                        (Object.keys(C),
                        (e) =>
                            e
                                ? ((e) => D.includes(e))(e)
                                    ? { colorClassName: _.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    h = (0, E.ZP)((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            s = e.color,
                            i = e.m,
                            l = e.mt,
                            c = void 0 === l ? i : l,
                            E = e.mr,
                            D = void 0 === E ? i : E,
                            g = e.mb,
                            B = void 0 === g ? i : g,
                            p = e.ml,
                            h = void 0 === p ? i : p,
                            f = e.style,
                            v = e.format,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, A);
                        const x = (0, d.useMemo)(() => {
                                const e = b(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, f, n), colorClassName: u };
                            }, [f, s]),
                            w = x.computedStyle,
                            R = x.colorClassName;
                        return m().createElement(
                            r.ZP,
                            F(
                                {
                                    className: o()(_.Z.base, t && _.Z[t], R, n),
                                    style: w,
                                    mt: !0 === c ? C[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === D ? C[t || 'paragraph-P16'].mr : D,
                                    mb: !0 === B ? C[t || 'paragraph-P16'].mb : B,
                                    ml: !0 === h ? C[t || 'paragraph-P16'].ml : h,
                                },
                                S,
                            ),
                            void 0 !== v ? m().createElement(a.z, F({}, v, { text: u })) : u,
                        );
                    });
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    o = t(4179),
                    r = t(6179);
                const a = [
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
                function s(e) {
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
                                    type: o.B0.TOOLTIP,
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
                            o = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            _ = void 0 !== m && m,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            g = void 0 === D ? 0 : D,
                            B = e.isEnabled,
                            p = void 0 === B || B,
                            C = e.targetId,
                            b = void 0 === C ? 0 : C,
                            h = e.onShow,
                            f = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, a);
                        const S = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            x = (0, r.useMemo)(() => b || (0, n.F)().resId, [b]),
                            w = (0, r.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (i(t, g, { isMouseEvent: !0, on: !0, arguments: s(o) }, x),
                                    h && h(),
                                    (S.current.isVisible = !0));
                            }, [t, g, o, x, h]),
                            R = (0, r.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        i(t, g, { on: !1 }, x),
                                        S.current.isVisible && f && f(),
                                        (S.current.isVisible = !1));
                                }
                            }, [t, g, x, f]),
                            y = (0, r.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(S.current.prevTarget) && R();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = S.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === p && R();
                            }, [p, R]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', R),
                                    () => {
                                        (window.removeEventListener('mouseleave', R), R());
                                    }
                                ),
                                [R],
                            ),
                            p
                                ? (0, r.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((S.current.timeoutId = window.setTimeout(w, _ ? 100 : 400)),
                                                          l && l(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (R(), null == c || c(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === F && R(), null == d || d(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === F && R(), null == E || E(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
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
                (t.r(u), t.d(u, { mouse: () => s, onResize: () => r }));
                var n = t(2472),
                    o = t(1176);
                const r = (0, n.E)('clientResized'),
                    a = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, o.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, o.R)(!0);
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
                                : (0, o.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const r = `mouse${u}`,
                                            s = a[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            n(),
                                            () => {
                                                o &&
                                                    (s(),
                                                    window.removeEventListener(r, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (o = !1));
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
                                e.enabled && (0, o.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, o.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => o,
                        graphicsQuality: () => a,
                    }));
                var n = t(527);
                function o(e = 'px') {
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
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
                t.d(u, { O: () => o });
                var n = t(5959);
                const o = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function o(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => o, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => o });
                var n = t(2472);
                const o = {
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => o.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    o = t(6112),
                    r = t(6538),
                    a = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(o.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === o.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => r });
                const n = ['args'],
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        o = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                    return o;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    r = {
                        close(e) {
                            o('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            o(64);
                        },
                        move(e) {
                            o(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: u, resId: n }
                    );
                };
            },
            3377: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => c });
                var n = t(5415),
                    o = t(6179),
                    r = t.n(o);
                const a = ['xl', 'lg', 'md', 'sm', 'xs'],
                    s = (e) => e.includes('_') && ((e) => a.includes(e))(e.split('_').at(-1)),
                    i = [n.cJ.ExtraLarge, n.cJ.Large, n.cJ.Medium, n.cJ.Small, n.cJ.ExtraSmall],
                    l = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (s(n)) {
                                const o = n.split('_').slice(0, -1).join('_');
                                if (o in t) return t;
                                const r = i.indexOf(u),
                                    s = (-1 !== r ? a.slice(r) : [])
                                        .map((e) => o + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = s ? e[s] : void 0;
                                return ((t[o] = void 0 !== l ? l : e[o]), t);
                            }
                            const o = e[n];
                            return (
                                void 0 === o ||
                                    ((e, u) => a.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = o),
                                t
                            );
                        }, {}),
                    c = (e, u = l) => {
                        const t = (
                            (e, u = l) =>
                            (t) => {
                                const a = (0, n.GS)().mediaSize,
                                    s = (0, o.useMemo)(() => u(t, a), [t, a]);
                                return r().createElement(e, s);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => s(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => o });
                var n = t(6179);
                const o = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => i, GS: () => l, cJ: () => a, fd: () => s });
                var n = t(6179),
                    o = t(7739),
                    r = t(1043);
                let a, s, i;
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
                    })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, n.useContext)(o.YN),
                        u = e.width,
                        t = e.height,
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
                                    return s.ExtraLarge;
                                case e.largeWidth:
                                    return s.Large;
                                case e.mediumWidth:
                                    return s.Medium;
                                case e.smallWidth:
                                    return s.Small;
                                case e.extraSmallWidth:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
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
                let n, o;
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
                    })(o || (o = {})));
            },
            3649: (e, u, t) => {
                'use strict';
                let n;
                function o(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                (t.d(u, { BN: () => r, Uw: () => E, uF: () => o, v2: () => n }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(n || (n = {})));
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
                    i = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? a : s, []),
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = n.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return c.includes(t)
                                          ? l(e)
                                          : ((e, u = n.left) => {
                                                let t = [];
                                                const o =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    r = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    i(r, /( )/, u).forEach((e) => (t = t.concat(i(e, o, n.left)))),
                                                    t
                                                );
                                            })(e, u);
                                  })(e, u),
                        );
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
                class o {
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
                        return (window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, o);
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
                o.__instance = void 0;
                const r = o;
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
                t.d(u, { B3: () => c, Z5: () => a, B0: () => i, ry: () => B });
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
                const o = n;
                var r = t(1358);
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                (((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, n, o, r, a) {
                    try {
                        var s = e[r](a),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, o);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, o) {
                                        var r = e.apply(u, t);
                                        function a(e) {
                                            D(r, n, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(r, n, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        o = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                    return o;
                                })(u, F);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = o),
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
                    C = () => p(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(7572);
                const f = o.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => p(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, o = R.invalid('resId'), r) => {
                            const a = A.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + a.x,
                                    y: A.O.view.pxToRem(c) + a.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(d),
                                };
                            p(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: o,
                                direction: u,
                                bbox: g(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, C);
                        },
                        handleViewEvent: p,
                        onBindingsReady: B,
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
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const o = Object.prototype.toString.call(u[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < o.length; u++) t[n].push({ value: e(o[u].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = v;
            },
            3458: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { Z0: () => o, in: () => n, sx: () => r }),
                    (function (e) {
                        ((e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning'));
                    })(n || (n = {})));
                const o = 'tooltip_watched',
                    r = 2;
                let a;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(a || (a = {}));
            },
            1943: (e, u, t) => {
                'use strict';
                t.d(u, { Jp: () => c, Sr: () => d });
                var n = t(6179),
                    o = t(3458);
                const r = ['action', 'timeLimit'],
                    a = 'metrics',
                    s = () => Date.now(),
                    i = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: o }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: o || null,
                    }),
                    l = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = o.in.Info, r) => {
                                (r || (r = {}),
                                    Object.keys(r).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(r),
                                        }));
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    c = (e) => {
                        const u = l(e, a),
                            t = (0, n.useCallback)(
                                (e) => {
                                    u(e.action, e.logLevel, i(e));
                                },
                                [u],
                            );
                        return (e) => t(e);
                    },
                    E = (e) => {
                        const u = ((e, u) => {
                                const t = l(e, u),
                                    o = (0, n.useRef)(new Map()),
                                    r = (0, n.useRef)(new Map()),
                                    a = (0, n.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const u = o.current.get(e);
                                            (void 0 !== u && u > 0) || o.current.set(e, s());
                                        },
                                        [o],
                                    ),
                                    i = (0, n.useCallback)(() => {
                                        (o.current.clear(), r.current.clear());
                                    }, [o, r]),
                                    c = (0, n.useCallback)(
                                        (e) => {
                                            e &&
                                                void 0 !== o.current.get(e) &&
                                                void 0 === r.current.get(e) &&
                                                r.current.set(e, s());
                                        },
                                        [o, r],
                                    ),
                                    E = (0, n.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const u = o.current.get(e);
                                            if (void 0 === u) return;
                                            const t = r.current.get(e);
                                            if (void 0 === t) return;
                                            r.current.delete(e);
                                            const n = s() - t;
                                            o.current.set(e, u + n);
                                        },
                                        [o, r],
                                    ),
                                    d = (0, n.useCallback)(
                                        (e, u = 0, n, a) => {
                                            const i = o.current.get(e);
                                            if (void 0 === i) return;
                                            (void 0 !== r.current.get(e) && E(e), o.current.delete(e));
                                            const l = (s() - i) / 1e3;
                                            l <= u ||
                                                ((a = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(
                                                    a,
                                                    l,
                                                )),
                                                t(e, n, a));
                                        },
                                        [o, r, t, E],
                                    );
                                return [
                                    (e) => a(e),
                                    (e, u, t, n) => d(e, u, t, n),
                                    () => i(),
                                    (e) => c(e),
                                    (e) => E(e),
                                ];
                            })(e, a),
                            t = u[0],
                            o = u[1],
                            r = u[2],
                            c = u[3],
                            E = u[4],
                            d = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    o(u, t, n, i(e));
                                },
                                [o],
                            );
                        return [(e) => t(e), (e) => d(e), () => r(), (e) => c(e), (e) => E(e)];
                    },
                    d = (e, u) => {
                        const t = E(e),
                            a = t[0],
                            s = t[1],
                            i = u.action,
                            l = u.timeLimit,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(u, r);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => a(i || o.Z0),
                                onHide: () => s(Object.assign({ action: i || o.Z0, timeLimit: l || o.sx }, c)),
                            }),
                            [i, l, c, a, s],
                        );
                    };
            },
            126: (e, u, t) => {
                'use strict';
                var n = {};
                (t.r(n),
                    t.d(n, {
                        Area: () => q,
                        Bar: () => j,
                        DefaultScroll: () => V,
                        Direction: () => k,
                        defaultSettings: () => N,
                        useHorizontalScrollApi: () => I,
                    }));
                var o = {};
                (t.r(o), t.d(o, { Area: () => ae, Bar: () => ne, Default: () => re, useVerticalScrollApi: () => Y }));
                var r = t(6179),
                    a = t.n(r),
                    s = t(493),
                    i = t.n(s);
                function l() {
                    return !1;
                }
                console.log;
                var c = t(3915),
                    E = t(3138);
                function d(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const m = (e) => (0 === e ? window : window.subViews.get(e));
                function _(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                const A = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? _(e, (e) => ('object' == typeof e ? A(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? A(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? A(u) : u]),
                                    )
                            : e,
                    F = (e) => A(e);
                var D = t(6517);
                const g = (e) => ({ lootBoxesID: e }),
                    B = ((e, u) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: o, mocks: s }) {
                                const i = (0, r.useRef)([]),
                                    A = (e, t, n) => {
                                        var o;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = m,
                                                context: n = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function r(e, u = 0) {
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
                                                const a = (e) => {
                                                    const o = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            i = E.O.view.addModelObserver(s, u, !0);
                                                        return (o.set(i, t), e && t(a(r)), i);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, u) => {
                                                        const t = a(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = a(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return d(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? d(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = t()).done;

                                                        )
                                                            r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            a =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (o = null == n ? void 0 : n.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : a.readByPath(u),
                                            A = (e) => i.current.push(e),
                                            g = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        allRewards: e.array('allRewards'),
                                                        lootboxes: e.array('lootboxes'),
                                                        selectedLootBoxes: e.array('selectedLootBoxes'),
                                                    },
                                                    t = (0, D.computedFn)(
                                                        () => _(u.allRewards.get(), (e) => e.bonusGroup),
                                                        { equals: l },
                                                    ),
                                                    n = (0, D.computedFn)(() => F(u.lootboxes.get()), { equals: l }),
                                                    o = (0, D.computedFn)(() => F(u.selectedLootBoxes.get()), {
                                                        equals: l,
                                                    }),
                                                    r = (0, D.computedFn)(() => F(u.allRewards.get()), { equals: l });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getCategories: t,
                                                        getLootboxes: n,
                                                        getAllRewards: r,
                                                        getSelectedLootboxes: o,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            o = c.observable.box(n, { equals: l });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, c.action)((e) => o.set(e)),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : s(u),
                                                            o = c.observable.box(n, { equals: l });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, c.action)((e) => o.set(e)),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = s(t);
                                                        if (Array.isArray(u)) {
                                                            const o = u.reduce(
                                                                (e, u) => ((e[u] = c.observable.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, c.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                o[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = u,
                                                                r = Object.entries(o),
                                                                s = r.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = c.observable.box(n[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, c.action)((e) => {
                                                                            r.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: A,
                                            }),
                                            B = { mode: e, model: g, externalModel: a, cleanup: A };
                                        return {
                                            model: g,
                                            controls: 'mocks' === e && n ? n.controls(B) : u(B),
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    g = (0, r.useRef)(!1),
                                    B = (0, r.useState)(e),
                                    p = B[0],
                                    C = B[1],
                                    b = (0, r.useState)(() => A(e, n, s)),
                                    h = b[0],
                                    f = b[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        g.current ? f(A(p, n, s)) : (g.current = !0);
                                    }, [s, p, n]),
                                    (0, r.useEffect)(() => {
                                        C(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (h.externalModel.dispose(), i.current.forEach((e) => e()));
                                        },
                                        [h],
                                    ),
                                    a().createElement(t.Provider, { value: h }, o)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        vehiclePreview: e.createCallback((e) => ({ vehicleCD: e }), 'onVehiclePreview'),
                        stylePreview: e.createCallback((e) => ({ styleCD: e }), 'onStylePreview'),
                        onSelectedLootBoxes: e.createCallback(g, 'onSelectedLootBoxes'),
                    })),
                    p = B[0],
                    C = B[1];
                var b = t(6483),
                    h = t.n(b);
                const f = (e) => {
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
                    v = (e, u, t) => (t < e ? e : t > u ? u : t),
                    S = [];
                function x(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), S)
                    );
                }
                function w(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        o = (0, r.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, r.useEffect)(() => o, [o]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            ((n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, a),
                        o,
                    ];
                }
                function y(e) {
                    engine.call('PlaySound', e);
                }
                const T = {
                    playHighlight() {
                        y('highlight');
                    },
                    playClick() {
                        y('play');
                    },
                    playYes() {
                        y('yes1');
                    },
                };
                function L(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function M(e, u, t) {
                    const n = (0, r.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let o,
                                    r = !1,
                                    a = 0;
                                function s() {
                                    o && clearTimeout(o);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - a;
                                    function E() {
                                        ((a = Date.now()), t.apply(l, i));
                                    }
                                    r ||
                                        (n && !o && E(),
                                        s(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (o = setTimeout(
                                                  n
                                                      ? function () {
                                                            o = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        (s(), (r = !0));
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return ((0, r.useEffect)(() => n.cancel, [n]), n);
                }
                var P = t(8552);
                let k;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(k || (k = {}));
                const N = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    O = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: o,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                o = n[0],
                                r = n[1];
                            return v(o, r, t);
                        };
                        return (i = {}) => {
                            const l = i.settings,
                                c = void 0 === l ? N : l,
                                d = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                _ = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        o = (e, ...t) => {
                                            for (
                                                var n,
                                                    o = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return L(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? L(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(n = o()).done;

                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, r.useMemo)(() => ({ on: t, off: n, trigger: o }), []);
                                })(),
                                A = M(
                                    () => {
                                        E.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, P.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), a && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                D = F[0],
                                g = F[1],
                                B = (0, r.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const o = D.scrollPosition.get(),
                                            r = (null != (n = D.scrollPosition.goal) ? n : 0) - o;
                                        return s(e, u * t + r + o);
                                    },
                                    [D.scrollPosition],
                                ),
                                p = (0, r.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            g.start({
                                                scrollPosition: s(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [g, c.animationConfig, D.scrollPosition],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return o(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            r = B(u, e, n);
                                        p(r);
                                    },
                                    [p, B, c.step],
                                ),
                                b = (0, r.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(n(e)),
                                            d.current && _.trigger('mouseWheel', e, D.scrollPosition, u(d.current)));
                                    },
                                    [D.scrollPosition, C, _],
                                ),
                                h = ((e, u = []) => {
                                    const t = (0, r.useRef)(),
                                        n = (0, r.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        f(() => {
                                            const e = d.current;
                                            e &&
                                                (p(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [p, D.scrollPosition.goal],
                                ),
                                v = x(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && p(u, { immediate: !0 }),
                                        _.trigger('recalculateContent'));
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', h),
                                    () => {
                                        window.removeEventListener('resize', h);
                                    }
                                ),
                                [h],
                            );
                            const S = (0, r.useCallback)((e) => _.trigger('isThumbDraggingChanged', e), [_]);
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? o(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: b,
                                    applyScroll: p,
                                    applyStepTo: C,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: g,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    handleIsThumbDragging: S,
                                    events: { on: _.on, off: _.off },
                                }),
                                [D.scrollPosition, p, C, S, _.off, _.on, v, b, g, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    I = O({
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
                        getDirection: (e) => (e.deltaY > 1 ? k.Next : k.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    H = 'HorizontalBar_base__nonActive_82',
                    U = 'disable',
                    W = { pending: !1, offset: 0 },
                    G = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    X = () => {},
                    $ = (e, u) => Math.max(20, e.offsetWidth * u),
                    j = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = G, onDrag: n = X }) => {
                        const o = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, r.useState)(W),
                            m = d[0],
                            _ = d[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (_(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && u && t && o)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / o),
                                    E = v(0, 1, r / (o - n)),
                                    d = (u.offsetWidth - $(u, a)) * E;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (s.current.classList.add(U), void i.current.classList.remove(U));
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (s.current.classList.remove(U), void i.current.classList.add(U));
                                            var u, t;
                                            (s.current.classList.remove(U), i.current.classList.remove(U));
                                        }
                                    })(d));
                            },
                            D = x(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    ((u.style.width = `${$(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        o.current &&
                                            (1 === a ? o.current.classList.add(H) : o.current.classList.remove(H)));
                                })(),
                                    F());
                            });
                        ((0, r.useEffect)(() => f(D)),
                            (0, r.useEffect)(
                                () =>
                                    f(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = X;
                                        const n = () => {
                                            (t(), (t = f(D)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const o = e.contentRef.current;
                                        if (!o) return;
                                        const r = l.current,
                                            a = c.current;
                                        if (!o || !r || !a) return;
                                        const s = u.screenX - m.offset - r.getBoundingClientRect().x,
                                            i = (s / r.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), A(W));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, n, A]));
                        const g = w((u) => e.applyStepTo(u), E, [e]),
                            B = g[0],
                            p = g[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const C = (e) => {
                            e.target.classList.contains(U) || y('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: h()('HorizontalBar_base_49', u.base), ref: o, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: h()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(U) || 0 !== e.button || (y('play'), B(k.Next));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: C,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: h()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        n &&
                                            0 === u.button &&
                                            (y('play'),
                                            u.target === n
                                                ? A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = c.current,
                                                          o = e.contentRef.current;
                                                      if (!n || !o) return;
                                                      const r = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? k.Prev : k.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                a().createElement('div', { ref: c, className: h()('HorizontalBar_thumb_fd', u.thumb) }),
                                a().createElement('div', { className: h()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            a().createElement('div', {
                                className: h()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(U) || 0 !== e.button || (y('play'), B(k.Prev));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    z = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    V = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: o,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(z.base, e.base) });
                            }, [n]),
                            d = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: h()(z.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: h()(z.defaultScrollArea, o) },
                                a().createElement(q, { className: i, api: d, classNames: s }, e),
                            ),
                            a().createElement(j, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    q = ({ api: e, className: u, classNames: t, children: n, style: o }) => (
                        (0, r.useEffect)(() => f(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: h()(z.base, u), style: o },
                            a().createElement(
                                'div',
                                {
                                    className: h()(z.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                a().createElement(
                                    'div',
                                    { className: h()(z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ((q.Bar = j),
                    (q.Default = V),
                    (q.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, r.useEffect)(() => f(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: h()(z.base, u) },
                            a().createElement(
                                'div',
                                { className: h()(z.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                a().createElement(
                                    'div',
                                    { className: h()(z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    )));
                const Y = O({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? k.Next : k.Prev),
                    }),
                    Z = 'VerticalBar_base__nonActive_42',
                    J = 'disable',
                    K = () => {},
                    Q = { pending: !1, offset: 0 },
                    ee = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ue = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    te = (e, u) => Math.max(20, e.offsetHeight * u),
                    ne = (0, r.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ee, onDrag: n = K }) => {
                        const o = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, r.useState)(Q),
                            m = d[0],
                            _ = d[1],
                            A = (0, r.useCallback)(
                                (e) => {
                                    (_(e),
                                        c.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [n],
                            ),
                            F = x(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${te(t, a)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    o.current && (1 === a ? o.current.classList.add(Z) : o.current.classList.remove(Z)),
                                    a
                                );
                            }),
                            D = x(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && u && t && o)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, n / o),
                                    E = v(0, 1, r / (o - n)),
                                    d = (u.offsetHeight - te(u, a)) * E;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return (s.current.classList.add(J), void i.current.classList.remove(J));
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (s.current.classList.remove(J), void i.current.classList.add(J));
                                            var u, t;
                                            (s.current.classList.remove(J), i.current.classList.remove(J));
                                        }
                                    })(d));
                            }),
                            g = x(() => {
                                ue(e, () => {
                                    (F(), D());
                                });
                            });
                        ((0, r.useEffect)(() => f(g)),
                            (0, r.useEffect)(() => {
                                const u = () => {
                                    ue(e, () => {
                                        D();
                                    });
                                };
                                let t = K;
                                const n = () => {
                                    (t(), (t = f(g)));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        ue(e, (t) => {
                                            const o = l.current,
                                                r = c.current,
                                                a = e.getContainerSize();
                                            if (!o || !r || !a) return;
                                            const s = u.screenY - m.offset - o.getBoundingClientRect().y,
                                                i = (s / o.offsetHeight) * a;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), e.handleIsThumbDragging(!1), A(Q));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, n, A]));
                        const B = w((u) => e.applyStepTo(u), E, [e]),
                            p = B[0],
                            C = B[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const b = (e) => {
                            e.target.classList.contains(J) || y('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: h()('VerticalBar_base_f3', u.base), ref: o, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: h()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(J) || 0 !== e.button || (y('play'), p(k.Next));
                                },
                                ref: s,
                                onMouseEnter: b,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: h()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        var o;
                                        n &&
                                            0 === u.button &&
                                            (y('play'),
                                            u.target === n
                                                ? (e.handleIsThumbDragging(!0),
                                                  A({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y }))
                                                : ((o = u.screenY > n.getBoundingClientRect().y ? k.Prev : k.Next),
                                                  c.current &&
                                                      ue(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              r = e.clampPosition(u, u.scrollTop + n * o);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                a().createElement('div', { ref: c, className: u.thumb }),
                                a().createElement('div', { className: h()('VerticalBar_rail_43', u.rail) }),
                            ),
                            a().createElement('div', {
                                className: h()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(J) || 0 !== e.button || (y('play'), p(k.Prev));
                                },
                                onMouseUp: C,
                                ref: i,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    oe = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    re = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: o,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, r.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(oe.base, e.base) });
                            }, [n]),
                            d = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: h()(oe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: h()(oe.area, o) },
                                a().createElement(ae, { className: s, classNames: i, api: d }, e),
                            ),
                            a().createElement(ne, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    ae = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, r.useEffect)(() => f(n.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: h()(oe.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: h()(oe.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                ae.Default = re;
                const se = { Vertical: o, Horizontal: n };
                var ie = t(7613);
                const le = {
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
                    ce = [
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
                class de extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && y(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && y(this.props.soundClick));
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
                            n = e.goto,
                            o = e.side,
                            r = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        o = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                    return o;
                                })(e, ce)),
                            m = h()(le.base, le[`base__${r}`], le[`base__${o}`], null == s ? void 0 : s.base),
                            _ = h()(le.icon, le[`icon__${r}`], le[`icon__${o}`], null == s ? void 0 : s.icon),
                            A = h()(le.glow, null == s ? void 0 : s.glow),
                            F = h()(le.caption, le[`caption__${r}`], null == s ? void 0 : s.caption),
                            D = h()(le.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            Ee(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== r && a().createElement('div', { className: le.shine }),
                            a().createElement('div', { className: _ }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                de.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var me = t(5521),
                    _e = t(4179);
                const Ae = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Fe(e = me.n.NONE, u = Ae, t = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== me.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (E.O.view.isEventHandled()) return;
                                (E.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var De = t(3282),
                    ge = t(4891);
                (R.sounds.lootboxes_drop(),
                    R.sounds.lootboxes_christmas_background_out(),
                    R.sounds.lootboxes_christmas_background_in(),
                    R.sounds.researches_premium_panel_slide_in(),
                    R.sounds.researches_premium_panel_slide_out(),
                    R.sounds.lootboxes_statistics_slide());
                const Be = R.sounds.tabs(),
                    pe =
                        (R.sounds.lootboxes_open_standart(),
                        R.sounds.lootboxes_open_bronze(),
                        R.sounds.lootboxes_open_silver(),
                        R.sounds.lootboxes_open_gold(),
                        R.sounds.lootboxes_open_layer_gold(),
                        'Empty_base_64'),
                    Ce = (0, r.memo)(({ children: e, classNames: u }) =>
                        a().createElement(
                            'div',
                            { className: h()(pe, u) },
                            a().createElement('div', { className: 'Empty_box_2d' }),
                            e,
                        ),
                    ),
                    be = R.strings.gui_lootboxes.lootboxesFullStatsView,
                    he = () =>
                        a().createElement(
                            'div',
                            { className: 'Error_base_fd' },
                            a().createElement('div', { className: 'Error_icon_31' }),
                            a().createElement(ie.ZP, {
                                text: be.error(),
                                format: { classMix: 'Error_description_d6' },
                            }),
                        ),
                    fe = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    ve = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'classNames',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                let xe;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(xe || (xe = {}));
                const we = (0, r.memo)((e) => {
                    let u = e.label,
                        t = e.isVisibleLabel,
                        n = void 0 !== t && t,
                        o = e.autofocus,
                        s = void 0 !== o && o,
                        i = e.soundHover,
                        l = void 0 === i ? 'highlight' : i,
                        c = e.soundClick,
                        E = void 0 === c ? 'play' : c,
                        d = e.size,
                        m = void 0 === d ? xe.NORMAL : d,
                        _ = e.classNames,
                        A = e.onClick,
                        F = e.onMouseEnter,
                        D = e.onMouseLeave,
                        g = e.onMouseDown,
                        B = e.onMouseUp,
                        p = e.onFocus,
                        C = e.onBlur,
                        b = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                o = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                            return o;
                        })(e, ve);
                    const f = (0, r.useState)(!1),
                        v = f[0],
                        S = f[1],
                        x = (0, r.useState)(!1),
                        w = x[0],
                        R = x[1],
                        T = (0, r.useState)(s),
                        L = T[0],
                        M = T[1],
                        P = (0, r.useRef)(null),
                        k = (0, r.useCallback)(() => {
                            P.current && (P.current.focus(), M(!0));
                        }, []),
                        N = (0, r.useCallback)(
                            (e) => {
                                L && null !== P.current && !P.current.contains(e.target) && M(!1);
                            },
                            [L],
                        );
                    ((0, r.useEffect)(
                        () => (
                            document.addEventListener('mousedown', N),
                            () => {
                                document.removeEventListener('mousedown', N);
                            }
                        ),
                        [N],
                    ),
                        (0, r.useEffect)(() => {
                            M(s);
                        }, [s]));
                    const O = (0, r.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        I = (0, r.useCallback)(
                            (e) => {
                                (S(!0), g && g(e), E && y(E), s && k());
                            },
                            [s, g, k, E],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                (S(!1), B && B(e));
                            },
                            [B],
                        ),
                        U = (0, r.useCallback)(
                            (e) => {
                                (F && F(e), l && y(l), R(!0));
                            },
                            [F, l],
                        ),
                        W = (0, r.useCallback)(
                            (e) => {
                                (S(!1), R(!1), D && D(e));
                            },
                            [D],
                        ),
                        G = (0, r.useCallback)(
                            (e) => {
                                (M(!0), p && p(e));
                            },
                            [p],
                        ),
                        X = (0, r.useCallback)(
                            (e) => {
                                (M(!1), C && C(e));
                            },
                            [C],
                        ),
                        $ = h()(
                            fe.base,
                            n && fe.base__visibleLabel,
                            v && fe.base__mouseDown,
                            w && fe.base__hovered,
                            L && fe.base__focused,
                            null == _ ? void 0 : _.base,
                        ),
                        j = h()(fe.icon, fe[`icon__${m}`], null == _ ? void 0 : _.icon),
                        z = h()(fe.label, null == _ ? void 0 : _.label);
                    return a().createElement(
                        'div',
                        Se(
                            {
                                ref: P,
                                className: $,
                                onClick: O,
                                onMouseEnter: U,
                                onMouseLeave: W,
                                onMouseDown: I,
                                onMouseUp: H,
                                onFocus: G,
                                onBlur: X,
                            },
                            b,
                        ),
                        a().createElement('div', { className: j }),
                        a().createElement('div', { className: z }, u),
                    );
                });
                let Re, ye, Te, Le, Me, Pe, ke;
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
                })(Re || (Re = {})),
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
                    })(ye || (ye = {})),
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
                    })(Te || (Te = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Le || (Le = {})),
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
                    })(Me || (Me = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Pe || (Pe = {})),
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
                    })(ke || (ke = {})));
                class Ne extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? _e.B3.GOLD : _e.B3.INTEGRAL;
                        const u = _e.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Ne.defaultProps = { format: 'integral' };
                const Oe = [
                        Re.Items,
                        Re.Equipment,
                        Re.Xp,
                        Re.XpFactor,
                        Re.Blueprints,
                        Re.BlueprintsAny,
                        Re.Goodies,
                        Re.Berths,
                        Re.Slots,
                        Re.Tokens,
                        Re.CrewSkins,
                        Re.CrewBooks,
                        Re.Customizations,
                        Re.CreditsFactor,
                        Re.TankmenXp,
                        Re.TankmenXpFactor,
                        Re.FreeXpFactor,
                        Re.BattleToken,
                        Re.PremiumUniversal,
                        Re.NaturalCover,
                        Re.BpCoin,
                        Re.BattlePassSelectToken,
                        Re.BattlaPassFinalAchievement,
                        Re.BattleBadge,
                        Re.BonusX5,
                        Re.CrewBonusX3,
                        Re.NewYearFillers,
                        Re.NewYearInvoice,
                        Re.EpicSelectToken,
                        Re.Comp7TokenWeeklyReward,
                        Re.Comp7TokenCouponReward,
                        Re.BattleBoosterGift,
                        Re.CosmicLootboxCommon,
                        Re.CosmicLootboxSilver,
                        Re.SelectableBonus,
                        Re.GoldenTicket,
                        Re.PostStamp,
                        Re.PremiumPlusUniversal,
                    ],
                    Ie = [Re.Gold, Re.Credits, Re.Crystal, Re.FreeXp],
                    He = [Re.BattlePassPoints],
                    Ue = [Re.PremiumPlus, Re.Premium];
                let We;
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
                })(We || (We = {}));
                const Ge = ['engravings', 'backgrounds'],
                    Xe = ['engraving', 'background'],
                    $e = (e, u, t) => {
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
                    };
                var je = t(2056);
                const ze = ['children'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const qe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, ze);
                        return a().createElement(
                            je.u,
                            Ve(
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
                    Ye = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                const Je = R.views.common.tooltip_window.simple_tooltip_content,
                    Ke = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            o = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, Ye);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: o, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, n, o, i]);
                        return a().createElement(
                            je.u,
                            Ze(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? Je.SimpleTooltipHtmlContent('resId') : Je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const eu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(Ke, u, n);
                        const o = u.contentId,
                            r = u.args,
                            s = null == r ? void 0 : r.contentId;
                        return o || s
                            ? a().createElement(je.u, Qe({}, u, { contentId: o || s }), n)
                            : a().createElement(qe, u, n);
                    },
                    uu = {
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
                    tu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = Te.Big,
                        special: o,
                        value: r,
                        valueType: s,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Me.BATTLE_BOOSTER:
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return Pe.BATTLE_BOOSTER;
                                }
                            })(o),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Me.BATTLE_BOOSTER:
                                        return ke.BATTLE_BOOSTER;
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return ke.BATTLE_BOOSTER_REPLACE;
                                    case Me.BUILT_IN_EQUIPMENT:
                                        return ke.BUILT_IN_EQUIPMENT;
                                    case Me.EQUIPMENT_PLUS:
                                        return ke.EQUIPMENT_PLUS;
                                    case Me.EQUIPMENT_TROPHY_BASIC:
                                        return ke.EQUIPMENT_TROPHY_BASIC;
                                    case Me.EQUIPMENT_TROPHY_UPGRADED:
                                        return ke.EQUIPMENT_TROPHY_UPGRADED;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ke.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ke.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ke.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_1:
                                        return ke.PROGRESSION_STYLE_UPGRADED_1;
                                    case Me.PROGRESSION_STYLE_UPGRADED_2:
                                        return ke.PROGRESSION_STYLE_UPGRADED_2;
                                    case Me.PROGRESSION_STYLE_UPGRADED_3:
                                        return ke.PROGRESSION_STYLE_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_4:
                                        return ke.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(o),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Le.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Le.CURRENCY:
                                    case Le.NUMBER:
                                        return a().createElement(Ne, { format: 'integral', value: Number(e) });
                                    case Le.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, s);
                        return a().createElement(
                            'div',
                            { className: h()(uu.base, uu[`base__${n}`], l), style: i },
                            a().createElement(
                                eu,
                                { tooltipArgs: E, className: uu.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: h()(uu.image, null == c ? void 0 : c.image) },
                                        m &&
                                            a().createElement('div', {
                                                className: h()(uu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            a().createElement('div', {
                                                className: h()(uu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            a().createElement('div', {
                                                className: h()(uu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    uu.info,
                                                    uu[`info__${e}`],
                                                    s === Le.MULTI && uu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    eu,
                                    { tooltipArgs: d },
                                    a().createElement('div', {
                                        className: h()(uu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    nu = ({ content: e, classMix: u }) => {
                        const t = (0, r.useRef)(null),
                            n = (0, r.useState)(!0),
                            o = n[0],
                            s = n[1];
                        return (
                            (0, r.useEffect)(() =>
                                f(() => {
                                    const e = t.current;
                                    e && e.offsetWidth >= e.scrollWidth && s(!1);
                                }),
                            ),
                            a().createElement(
                                Ke,
                                { isEnabled: o, body: e },
                                a().createElement('div', { ref: t, className: h()('TextOverflow_base_3b', u) }, e),
                            )
                        );
                    };
                var ou = t(5415);
                const ru = R.strings.gui_lootboxes.currencies,
                    au =
                        (ru.gold.title(),
                        ru.gold.subtitle(),
                        ru.credits.title(),
                        ru.credits.subtitle(),
                        ru.premium_plus_universal.title(),
                        ru.premium_plus_universal.subtitle(),
                        ru.equipCoin.title(),
                        ru.equipCoin.subtitle(),
                        ru.crystal.title(),
                        ru.crystal.subtitle(),
                        ru.freeExp.title(),
                        ru.freeExp.subtitle(),
                        (e) => {
                            const u = (e = Math.abs(e)) % 100;
                            if (u >= 11 && u <= 14) return 'дней';
                            switch (e % 10) {
                                case 1:
                                    return 'день';
                                case 2:
                                case 3:
                                case 4:
                                    return 'дня';
                                default:
                                    return 'дней';
                            }
                        });
                var su = t(1865);
                const iu = 'currency',
                    lu = 'vehicle',
                    cu = 'premium';
                var Eu = t(3649);
                (Re.Vehicles, Re.TmanToken, Re.CollectionItem);
                const du = (e, u = Te.Small, t) => {
                        const n =
                            t && u === Te.Big
                                ? R.images.gui_lootboxes.gui.maps.rewards.vehicles.$dyn(
                                      `${(0, Eu.BN)(e.vehicleName)}`,
                                  ) || R.images.gui.maps.icons.quests.bonuses.big.vehicles()
                                : ((e, u = Te.Small) => {
                                      const t = (0, Eu.BN)(e.vehicleName || '');
                                      if (e.name === Re.Vehicles)
                                          switch (u) {
                                              case Te.Mini:
                                              case Te.Small:
                                              case Te.S48x48:
                                                  return e.isRent
                                                      ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                      : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                              case Te.Big:
                                              case Te.S80x80:
                                                  return e.isRent
                                                      ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                      : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                              case Te.S128x100:
                                              case Te.S180x135:
                                                  return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                              case Te.S232x174:
                                              case Te.S296x222:
                                                  return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                              case Te.S400x300:
                                              case Te.S600x450:
                                                  return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                              default:
                                                  return (
                                                      console.error('Unknown vehicle image size', u, e.vehicleName),
                                                      'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                                  );
                                          }
                                      if (e.name === Re.TmanToken)
                                          switch (u) {
                                              case Te.Mini:
                                              case Te.Small:
                                              case Te.S48x48:
                                              case Te.Big:
                                              case Te.S80x80:
                                                  return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                              case Te.S128x100:
                                              case Te.S180x135:
                                              case Te.S232x174:
                                                  return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                              case Te.S296x222:
                                                  return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                              case Te.S400x300:
                                                  return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                              case Te.S600x450:
                                                  return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                              default:
                                                  return (
                                                      console.error('Unknown image size', u),
                                                      'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                                  );
                                          }
                                      if (e.name === Re.CollectionItem)
                                          switch (u) {
                                              case Te.Mini:
                                              case Te.Small:
                                              case Te.S48x48:
                                                  return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                              case Te.Big:
                                              case Te.S80x80:
                                                  return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                              case Te.S128x100:
                                              case Te.S180x135:
                                              case Te.S232x174:
                                                  return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                              case Te.S296x222:
                                                  return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                              case Te.S400x300:
                                                  return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                              case Te.S600x450:
                                                  return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                              default:
                                                  console.error('Unknown image size', u);
                                          }
                                      return (
                                          e.name === Re.DogTagType && u === Te.S180x135 && (u = Te.S232x174),
                                          ((e, u = Te.Small) => {
                                              const t = e.name,
                                                  n = e.type,
                                                  o = e.value,
                                                  r = e.icon,
                                                  a = e.item,
                                                  s = e.dogTagType,
                                                  i = ((e) => {
                                                      switch (e) {
                                                          case Te.S600x450:
                                                              return 'c_600x450';
                                                          case Te.S400x300:
                                                              return 'c_400x300';
                                                          case Te.S296x222:
                                                              return 'c_296x222';
                                                          case Te.S232x174:
                                                              return 'c_232x174';
                                                          case Te.Big:
                                                              return 'c_80x80';
                                                          case Te.Small:
                                                              return 'c_48x48';
                                                          default:
                                                              return e;
                                                      }
                                                  })(u);
                                              switch (t) {
                                                  case 'basic':
                                                  case 'plus':
                                                      return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${o}`;
                                                  case 'premium':
                                                      return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${o}`;
                                                  case 'premium_plus':
                                                      return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${o}`;
                                                  case 'items':
                                                      return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                                                  case 'blueprints':
                                                  case 'blueprintsAny':
                                                  case 'finalBlueprints':
                                                      return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                                                  case 'tokens':
                                                  case 'battleToken':
                                                      return ((e, u) => {
                                                          switch (u) {
                                                              case Te.Big:
                                                                  return e.iconBig.replace('..', 'img://gui');
                                                              case Te.Small:
                                                                  return e.iconSmall.replace('..', 'img://gui');
                                                              default:
                                                                  return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                                          }
                                                      })(e, u);
                                                  case 'crewBooks':
                                                      return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                                                  case 'dogTagComponents':
                                                      return ((e, u, t) => {
                                                          const n = Ge[e];
                                                          if (n) {
                                                              const o = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                                                  r = o.$dyn(t);
                                                              return r ? `${r}` : `${o.$dyn(Xe[e])}`;
                                                          }
                                                          return (
                                                              console.error(
                                                                  'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                              ),
                                                              ''
                                                          );
                                                      })(s, u, r);
                                                  case 'dossier_badge':
                                                      return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${r}`;
                                                  case 'dossier_achievement':
                                                      return `R.images.gui.maps.icons.achievement.${((e) => {
                                                          switch (e) {
                                                              case Te.S600x450:
                                                                  return 'c_600x450';
                                                              case Te.S400x300:
                                                                  return 'c_400x300';
                                                              case Te.S296x222:
                                                                  return 'c_296x222';
                                                              case Te.S232x174:
                                                                  return 'c_232x174';
                                                              case Te.S180x135:
                                                                  return 'big';
                                                              case Te.Big:
                                                              case Te.S80x80:
                                                                  return 'c_80x80';
                                                              case Te.Small:
                                                              case Te.S48x48:
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
                                                              case Te.Mini:
                                                                  return We.s32;
                                                              case Te.Small:
                                                              case Te.S48x48:
                                                                  return We.s48;
                                                              case Te.S80x80:
                                                              case Te.Big:
                                                                  return We.s80;
                                                              case Te.S128x100:
                                                                  return We.s116;
                                                              case Te.S180x135:
                                                              case Te.S232x174:
                                                              case Te.S296x222:
                                                                  return We.s296;
                                                              case Te.S400x300:
                                                                  return We.s400;
                                                              case Te.S600x450:
                                                                  return We.s600;
                                                          }
                                                      })(u)}`;
                                                  default:
                                                      return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                                              }
                                          })(e, u)
                                      );
                                  })(e, u);
                        return n;
                    },
                    mu = (e, u) => {
                        return e === Re.PremiumPlusUniversal && u > ou.cJ.Small
                            ? Le.PREMIUM_PLUS
                            : ((t = e),
                              Oe.includes(t)
                                  ? Le.MULTI
                                  : Ie.includes(t)
                                    ? Le.CURRENCY
                                    : He.includes(t)
                                      ? Le.NUMBER
                                      : Ue.includes(t)
                                        ? Le.PREMIUM_PLUS
                                        : Le.STRING);
                        var t;
                    },
                    _u = 'Section_label_58',
                    Au = R.strings.gui_lootboxes.lootboxesFullStatsView,
                    Fu = (0, r.memo)(
                        ({
                            bonusGroup: e,
                            rewards: u,
                            rewardCount: t,
                            animated: n,
                            handleVehiclePreview: o,
                            handleStylePreview: s,
                        }) => {
                            const i = Au.categories.$dyn(e),
                                l = (0, ou.GS)().mediaSize,
                                c = (0, ge.B)().lootBoxesFullStatsRewardClick,
                                E = l < ou.cJ.Medium ? Te.Big : Te.S180x135,
                                d = e !== iu && e !== cu,
                                m = e === lu,
                                _ = l < ou.cJ.Medium && e !== lu,
                                A = (0, r.useState)(null),
                                F = A[0],
                                D = A[1],
                                g = `url('R.images.gui_lootboxes.gui.maps.full_stats.content.categories.${e === iu ? 'blink_small' : 'blink_big'}')`,
                                B = (e) => 'style_3d' === e.icon || 'style' === e.icon,
                                p = () => {
                                    D(null);
                                };
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    { className: 'Section_header_03' },
                                    a().createElement(ie.ZP, { text: i, className: 'Section_title_d0' }),
                                    d &&
                                        a().createElement(ie.ZP, {
                                            text: Au.sectionQuantity(),
                                            format: { binding: { count: t } },
                                            className: 'Section_subtitle_24',
                                        }),
                                    a().createElement('div', { className: 'Section_divider_32' }),
                                    n &&
                                        a().createElement('div', {
                                            className: 'Section_blink_d2',
                                            style: { backgroundImage: g },
                                        }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'Section_rewards_9c' },
                                    u.map((u, t) =>
                                        a().createElement(
                                            'div',
                                            {
                                                key: `${t}_${u.name}`,
                                                className: h()(
                                                    'Section_rewardWrapper_e6',
                                                    F === t &&
                                                        h()(
                                                            'Section_rewardWrapper__hover_54',
                                                            (B(u) || m) && 'Section_rewardWrapper__pointer_23',
                                                        ),
                                                ),
                                                onClick: () =>
                                                    ((e) => {
                                                        (m && (c(e.name), T.playYes(), o(e.intCD)),
                                                            B(e) && (c(e.name), T.playYes(), s(e.styleCD)));
                                                    })(u),
                                                onMouseEnter: () =>
                                                    ((e, u) => {
                                                        ((m || B(u)) && T.playHighlight(), D(e));
                                                    })(t, u),
                                                onMouseLeave: p,
                                            },
                                            a().createElement(tu, {
                                                name: u.name,
                                                value: u.value,
                                                tooltipArgs: $e({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                                                valueType: mu(u.name, l),
                                                size: E,
                                                image: du(u, E, m),
                                                classNames: {
                                                    info: h()('Section_info_0d', d && 'Section_info__subtitle_48'),
                                                },
                                            }),
                                            a().createElement(
                                                'div',
                                                { className: 'Section_labelWrapper_81' },
                                                m && l > ou.cJ.Small
                                                    ? a().createElement(su.e, {
                                                          vehicleLvl: u.level,
                                                          vehicleName: u.shortVehicleLabel,
                                                          vehicleType: u.type,
                                                          isElite: u.isElite,
                                                      })
                                                    : !_ &&
                                                          a().createElement(
                                                              a().Fragment,
                                                              null,
                                                              a().createElement(nu, {
                                                                  content: e === cu ? u.value : u.label,
                                                                  classMix: h()(
                                                                      _u,
                                                                      e === cu && 'Section_label__premium_44',
                                                                      e === iu && 'Section_label__currency_20',
                                                                  ),
                                                              }),
                                                              e === cu &&
                                                                  a().createElement(ie.ZP, {
                                                                      text: au(Number(u.value)),
                                                                      className: _u,
                                                                  }),
                                                          ),
                                            ),
                                            (null == u ? void 0 : u.isRent) &&
                                                a().createElement('div', { className: 'Section_rentIcon_6f' }),
                                            (B(u) || m) &&
                                                a().createElement(
                                                    'div',
                                                    { className: 'Section_preview_50' },
                                                    a().createElement(we, {
                                                        classNames: {
                                                            base: 'Section_preview__visible_5f',
                                                            label: 'Section_preview__label_45',
                                                        },
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Du = 'Content_lip_59';
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const Bu = (0, De.observer)(
                        ({ scrollApi: e, animatedCategory: u, hasTopMask: t, hasBottomMask: n, classNames: o }) => {
                            const r = C(),
                                s = r.model,
                                i = r.controls,
                                l = s.computes.getAllRewards();
                            return a().createElement(
                                'div',
                                { className: h()('Content_base_4e', o) },
                                a().createElement(
                                    'div',
                                    { className: 'Content_scrollContainer_49' },
                                    t && a().createElement('div', { className: h()(Du, 'Content_lipTop_23') }),
                                    n && a().createElement('div', { className: h()(Du, 'Content_lipBottom_7e') }),
                                    a().createElement(
                                        se.Vertical.Area.Default,
                                        { api: e, scrollClassNames: { content: 'Content_scrollContent_a3' } },
                                        a().createElement(
                                            'div',
                                            { className: 'Content_sections_d5', id: 'sectionsContainer' },
                                            l.map((e) =>
                                                a().createElement(
                                                    'div',
                                                    {
                                                        key: e.bonusGroup,
                                                        className: 'Content_section_2a',
                                                        id: e.bonusGroup,
                                                    },
                                                    a().createElement(
                                                        Fu,
                                                        gu(
                                                            {
                                                                animated: u === e.bonusGroup,
                                                                handleVehiclePreview: i.vehiclePreview,
                                                                handleStylePreview: i.stylePreview,
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    pu = { type: 'idle' };
                let Cu, bu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Cu || (Cu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(bu || (bu = {})));
                const hu = {
                    base: 'ToggleButton_base_2c',
                    base__button: 'ToggleButton_base__button_cb',
                    base__active: 'ToggleButton_base__active_a6',
                    base__slot: 'ToggleButton_base__slot_98',
                    base__disabled: 'ToggleButton_base__disabled_19',
                    texture: 'ToggleButton_texture_f1',
                    background: 'ToggleButton_background_ef',
                    background__main: 'ToggleButton_background__main_68',
                    background__primary: 'ToggleButton_background__primary_a9',
                    background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                    background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                    background__secondary: 'ToggleButton_background__secondary_b2',
                    background__ghost: 'ToggleButton_background__ghost_d6',
                    content: 'ToggleButton_content_63',
                    overlay: 'ToggleButton_overlay_23',
                    indicator: 'ToggleButton_indicator_a7',
                };
                let fu;
                !(function (e) {
                    ((e.Button = 'button'), (e.Slot = 'slot'));
                })(fu || (fu = {}));
                const vu = () => {},
                    Su = a().memo(
                        ({
                            active: e = !1,
                            className: u,
                            children: t,
                            toggleType: n = fu.Button,
                            toggleButtonType: o = Cu.secondary,
                            onClick: s,
                            disabled: i,
                            soundClick: l = 'play',
                            soundHover: c = 'highlight',
                            onMouseEnter: E = vu,
                            onMouseDown: d = vu,
                            onMouseUp: m = vu,
                            onMouseLeave: _ = vu,
                        }) => {
                            const A = (0, r.useCallback)(
                                    (u) => {
                                        i || (y(l), s && s(u, e));
                                    },
                                    [s, i, e, l],
                                ),
                                F = (0, r.useCallback)(
                                    (e) => {
                                        i || (y(c), E && E(e));
                                    },
                                    [i, c, E],
                                ),
                                D = (0, r.useCallback)(
                                    (e) => {
                                        i || ((1 !== e.button && 2 !== e.button) || (null !== l && y(l)), d && d(e));
                                    },
                                    [d, i, l],
                                ),
                                g = h()(hu.base, u, hu[`base__${n}`], e && hu.base__active, i && hu.base__disabled);
                            return a().createElement(
                                'div',
                                {
                                    className: g,
                                    onClick: A,
                                    onMouseEnter: F,
                                    onMouseUp: i ? vu : m,
                                    onMouseDown: D,
                                    onMouseLeave: i ? vu : _,
                                },
                                a().createElement('div', { className: hu.content }, t),
                                n === fu.Button &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', {
                                            className: h()(hu.background, hu[`background__${o}`]),
                                        }),
                                        a().createElement('div', { className: hu.texture }),
                                    ),
                                a().createElement('div', { className: hu.overlay }),
                                a().createElement('div', { className: hu.indicator }),
                            );
                        },
                    ),
                    xu = R.strings.gui_lootboxes.lootboxesFullStatsView.footer,
                    wu = R.strings.lootboxes,
                    Ru = ({
                        onClick: e,
                        classNames: u,
                        isActive: t,
                        iconSize: n,
                        showText: o,
                        iconName: s,
                        descriptionKey: i,
                    }) => {
                        const l = (0, r.useState)(''),
                            c = l[0],
                            E = l[1],
                            d = (0, r.useMemo)(() => {
                                const e = i ? wu.userName.$dyn(i) : xu.selectAll();
                                return {
                                    label: e,
                                    tooltipBody: i
                                        ? (0, Eu.uF)(xu.tooltip.body.container(), { container_name: e })
                                        : xu.tooltip.body.all(),
                                };
                            }, [i]),
                            m = d.label,
                            _ = d.tooltipBody,
                            A = (0, r.useCallback)(
                                (e) => {
                                    E(
                                        e && s
                                            ? `url('R.images.gui_lootboxes.gui.maps.lootboxes.${n}.${s}') no-repeat center / 100%`
                                            : `url('R.images.gui_lootboxes.gui.maps.lootboxes.${n}.default') no-repeat center / 100%`,
                                    );
                                },
                                [s, n],
                            );
                        var F, D;
                        ((F = n && s ? `R.images.gui_lootboxes.gui.maps.lootboxes.${n}.${s}` : ''),
                            (D = A),
                            (0, r.useEffect)(() => {
                                const e = () => D(!0),
                                    u = () => D(!1),
                                    t = new Image();
                                return (
                                    t.addEventListener('load', e),
                                    t.addEventListener('error', u),
                                    (t.src = F),
                                    () => {
                                        (t.removeEventListener('load', e), t.removeEventListener('error', u));
                                    }
                                );
                            }, [F, D]));
                        const g = h()('Button_base_58', u);
                        return a().createElement(
                            Ke,
                            { header: m, body: _ },
                            a().createElement(
                                Su,
                                {
                                    toggleButtonType: Cu.ghost,
                                    onClick: e,
                                    className: g,
                                    active: t,
                                    toggleType: fu.Slot,
                                },
                                o
                                    ? a().createElement(ie.ZP, { text: m, className: 'Button_text_59' })
                                    : a().createElement('div', {
                                          className: 'Button_icon_45',
                                          style: { background: c },
                                      }),
                            ),
                        );
                    },
                    yu = 'Footer_button_10',
                    Tu = 'Footer_arrowButton_76',
                    Lu = 'Footer_arrowButton__hovered_aa',
                    Mu = 'Footer_arrowButton__disabled_49';
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const ku = R.strings.gui_lootboxes.lootboxesFullStatsView.footer,
                    Nu = 'prev',
                    Ou = 'next',
                    Iu = (0, De.observer)(({ onLootboxSelect: e }) => {
                        const u = (0, r.useState)(!1),
                            t = u[0],
                            n = u[1],
                            o = (0, r.useState)(!0),
                            s = o[0],
                            i = o[1],
                            l = (0, r.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = (0, r.useState)(!1),
                            _ = m[0],
                            A = m[1],
                            F = (0, r.useRef)(null),
                            D = (0, ou.GS)().mediaSize,
                            g = D < ou.cJ.Medium ? 'c_96x64' : 'c_160x106',
                            B = (0, r.useMemo)(() => {
                                const e = {
                                    [ou.cJ.Small]: 8,
                                    [ou.cJ.Medium]: 11,
                                    [ou.cJ.Large]: 10,
                                    [ou.cJ.ExtraLarge]: 12,
                                    default: 14,
                                };
                                return D < ou.cJ.Small
                                    ? e[ou.cJ.Small]
                                    : D < ou.cJ.Medium
                                      ? e[ou.cJ.Medium]
                                      : D < ou.cJ.Large
                                        ? e[ou.cJ.Large]
                                        : D < ou.cJ.ExtraLarge
                                          ? e[ou.cJ.ExtraLarge]
                                          : e.default;
                            }, [D]),
                            p = C(),
                            b = p.model,
                            f = p.controls,
                            v = b.computes.getLootboxes(),
                            S = (0, ge.B)(),
                            x = S.lootBoxesFullStatsSelectAllClick,
                            R = S.lootBoxesFullStatsSelectLootboxClick,
                            y = b.computes.getSelectedLootboxes(),
                            T = I();
                        !(function (e, u) {
                            const t = e.contentRef,
                                n = e.wrapperRef,
                                o = e.scrollPosition,
                                a = e.clampPosition,
                                s = e.animationScroll,
                                i = e.events,
                                l = (0, r.useState)(pu),
                                c = l[0],
                                d = l[1];
                            ((0, r.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                            }, [t, c.type]),
                                (0, r.useEffect)(() => {
                                    if ('dragging' !== c.type) return;
                                    const e = E.O.client.events.mouse.move(([e, r]) => {
                                            const i = t.current,
                                                l = n.current;
                                            if (!i || !l) return;
                                            if ('inside' === r && e.clientX < 0) return;
                                            const E = 'inside' === r ? e.clientX : e.clientX - l.offsetLeft,
                                                d = c.positionFrom - E,
                                                m = c.previousScrollPosition + d;
                                            o.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(i, m),
                                                        from: { scrollPosition: s.scrollPosition.get() },
                                                    },
                                                    u,
                                                ),
                                            );
                                        }),
                                        r = E.O.client.events.mouse.up(function () {
                                            d({ type: 'scrollingToEnd' });
                                        });
                                    return () => {
                                        (e(), r());
                                    };
                                }, [s.scrollPosition, a, t, c, o, n, u]),
                                (0, r.useEffect)(() => {
                                    if ('scrollingToEnd' !== c.type) return;
                                    const e = () => {
                                        d(pu);
                                    };
                                    return (s.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e));
                                }, [s.scrollPosition, c.type, i]),
                                (0, r.useEffect)(() => {
                                    const e = t.current;
                                    if (!e) return;
                                    const u = (e) => {
                                        d({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: s.scrollPosition.get(),
                                        });
                                    };
                                    return (
                                        e.addEventListener('mousedown', u),
                                        () => e.removeEventListener('mousedown', u)
                                    );
                                }, [s.scrollPosition, t]));
                        })(T);
                        const L = (0, r.useCallback)((e) => y.includes(e), [y]),
                            M = (u) => {
                                if (u) {
                                    const e = L(u);
                                    (R(u, e),
                                        e
                                            ? f.onSelectedLootBoxes(JSON.stringify([...y].filter((e) => e !== u)))
                                            : f.onSelectedLootBoxes(JSON.stringify([...y, u])));
                                } else {
                                    const e = y.length === v.length;
                                    (x(e),
                                        e
                                            ? f.onSelectedLootBoxes(JSON.stringify([]))
                                            : f.onSelectedLootBoxes(JSON.stringify(v.map((e) => e.boxID))));
                                }
                                (F.current && clearTimeout(F.current),
                                    e(!0),
                                    (F.current = setTimeout(() => {
                                        (e(!1), (F.current = null));
                                    }, 500)));
                            };
                        (0, r.useEffect)(() => {
                            const e = (e) => {
                                const u = T.getContainerSize(),
                                    t = T.getWrapperSize();
                                if (u && t) {
                                    const o = u - t;
                                    (n(e.value.scrollPosition > 0), i(e.value.scrollPosition < o));
                                }
                            };
                            return (
                                T.events.on('rest', e),
                                () => {
                                    T.events.off('rest', e);
                                }
                            );
                        }, [T, T.events]);
                        const P = w((e) => T.applyStepTo(e), T.stepTimeout, [T]),
                            N = P[0],
                            O = P[1],
                            H = (e, u) => {
                                e === Nu ? d(u) : e === Ou && A(u);
                            },
                            U = v.length > B;
                        return a().createElement(
                            'div',
                            { className: 'Footer_base_b1' },
                            a().createElement(ie.ZP, { text: ku.title(), className: 'Footer_title_12' }),
                            a().createElement(
                                'div',
                                { className: 'Footer_scrollArea_7e' },
                                U &&
                                    a().createElement('div', {
                                        className: h()(Tu, 'Footer_prev_9d', !t && Mu, c && Lu),
                                        onMouseDown: () => {
                                            t && N(k.Next);
                                        },
                                        onMouseUp: O,
                                        onMouseEnter: () => H(Nu, !0),
                                        onMouseLeave: () => H(Nu, !1),
                                    }),
                                a().createElement(
                                    se.Horizontal.Area,
                                    {
                                        api: T,
                                        classNames: {
                                            content: 'Footer_horizontalContent_28',
                                            wrapper: U ? '' : 'Footer_horizontalWrapper_0f',
                                        },
                                        className: 'Footer_scroll_0f',
                                    },
                                    a().createElement(
                                        'div',
                                        { className: 'Footer_buttons_3b' },
                                        a().createElement(Ru, {
                                            onClick: () => M(),
                                            classNames: yu,
                                            isActive: y.length === v.length,
                                            showText: !0,
                                        }),
                                        v.map((e) =>
                                            a().createElement(
                                                Ru,
                                                Pu({}, e, {
                                                    key: e.boxID,
                                                    onClick: () => M(e.boxID),
                                                    classNames: yu,
                                                    isActive: L(e.boxID),
                                                    iconSize: g,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                U &&
                                    a().createElement('div', {
                                        className: h()(Tu, 'Footer_next_5c', !s && Mu, _ && Lu),
                                        onMouseDown: () => {
                                            s && N(k.Prev);
                                        },
                                        onMouseUp: O,
                                        onMouseEnter: () => H(Ou, !0),
                                        onMouseLeave: () => H(Ou, !1),
                                    }),
                            ),
                        );
                    });
                var Hu = t(3746),
                    Uu = t(4380);
                const Wu = R.strings.gui_lootboxes.lootboxesFullStatsView.header,
                    Gu = ({ hasDeadlineWidget: e, className: u }) =>
                        a().createElement(
                            'div',
                            { className: h()('Header_base_71', u) },
                            a().createElement(ie.ZP, { text: Wu.title(), className: 'Header_title_b7' }),
                            e &&
                                a().createElement(Hu.d, {
                                    textClass: 'Header_subtitle_91',
                                    parentScreen: Uu.de.LootBoxesFullStats,
                                }),
                        ),
                    Xu = 'CategoryLink_background_9e',
                    $u = R.strings.gui_lootboxes,
                    ju = ({ category: e, isActive: u }) => {
                        const t = (0, r.useState)(!1),
                            n = t[0],
                            o = t[1],
                            s = (0, r.useState)(!1),
                            i = s[0],
                            l = s[1],
                            c = {
                                backgroundImage: `url(R.images.gui_lootboxes.gui.maps.storage.rewards.${(0, ou.GS)().mediaSize < ou.cJ.Medium ? 'c_32x32' : 'c_48x48'}.${e})`,
                            },
                            E = h()('CategoryLink_base_ac', {
                                CategoryLink_base__pressed_af: n,
                                CategoryLink_base__hovered_1f: i,
                                CategoryLink_base__active_56: u,
                            }),
                            d = $u.categories.$dyn(e),
                            m = { header: d.$dyn('title'), body: d.$dyn('subtitle') };
                        return a().createElement(
                            Ke,
                            m,
                            a().createElement(
                                'div',
                                {
                                    className: E,
                                    onMouseEnter: () => {
                                        l(!0);
                                    },
                                    onMouseLeave: () => {
                                        (l(!1), o(!1));
                                    },
                                    onMouseDown: () => {
                                        o(!0);
                                    },
                                    onMouseUp: () => {
                                        o(!1);
                                    },
                                },
                                a().createElement('div', { className: h()(Xu, 'CategoryLink_background__hovered_fa') }),
                                a().createElement('div', { className: h()(Xu, 'CategoryLink_background__pressed_95') }),
                                a().createElement('div', { className: h()(Xu, 'CategoryLink_background__active_89') }),
                                a().createElement('div', { className: 'CategoryLink_image_79', style: c }),
                            ),
                        );
                    },
                    zu = [
                        'vehicle',
                        'premium',
                        'currency',
                        'lootboxes',
                        'vehicleCustomizations',
                        'crew',
                        'boosters',
                        'equipments',
                        'accountCustomizations',
                        'featureItems',
                    ],
                    Vu = (0, De.observer)(
                        ({ classNames: e, categories: u, selectedCategory: t, onCategorySelect: n }) => {
                            const o = h()(e, 'SideBar_base_ff'),
                                s = () => {
                                    y(R.sounds.highlight());
                                },
                                i = (0, ou.GS)().mediaSize,
                                l = (0, r.useCallback)(
                                    (e) => {
                                        const t = zu[e],
                                            n = u.findIndex((e) => e === t),
                                            o = i < ou.cJ.Medium ? 40 : 54;
                                        return (
                                            ((i < ou.cJ.Medium ? 353 : 543) - u.length * o) / 2 +
                                            (-1 !== n ? o * n : o * (e - 1)) +
                                            'rem'
                                        );
                                    },
                                    [u, i],
                                );
                            return a().createElement(
                                'div',
                                { className: o },
                                zu.map((e, o) =>
                                    a().createElement(
                                        'div',
                                        {
                                            key: e,
                                            className: h()(
                                                'SideBar_link_ac',
                                                u.includes(e)
                                                    ? 'SideBar_animation__enter_b8'
                                                    : 'SideBar_animation__exit_87',
                                            ),
                                            style: { top: l(o) },
                                            onClick: () => n(e),
                                            onMouseEnter: s,
                                        },
                                        a().createElement(ju, { category: e, isActive: t === e }),
                                    ),
                                ),
                            );
                        },
                    ),
                    qu = 'App_animation__enter_a6',
                    Yu = 'App_animation__exit_59',
                    Zu = R.strings.gui_lootboxes.lootboxesFullStatsView,
                    Ju = (0, De.observer)(() => {
                        const e = C(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().category,
                            o = u.computes.getCategories(),
                            s = u.computes.getLootboxes(),
                            i = (0, r.useState)(!1),
                            l = i[0],
                            c = i[1],
                            d = (0, r.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            A = (0, r.useRef)(!0),
                            F = (0, r.useState)(null),
                            D = F[0],
                            g = F[1],
                            B = (0, r.useState)(null),
                            p = B[0],
                            b = B[1],
                            f = (0, r.useState)(!1),
                            v = f[0],
                            S = f[1],
                            x = (0, r.useState)([]),
                            w = x[0],
                            R = x[1],
                            T = (0, ge.B)().lootBoxesFullStatsSidebarClick,
                            L = u.computes.getSelectedLootboxes(),
                            P = (0, r.useCallback)(() => {
                                t.close();
                            }, [t]),
                            k = se.Vertical.useVerticalScrollApi(),
                            N = k.applyScroll,
                            O = k.animationScroll.scrollPosition,
                            I = k.events;
                        !(function ({
                            key: e = me.n.ESCAPE,
                            callback: u = () => E.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            Fe(e, u, t);
                        })({ callback: P });
                        const H = (0, r.useCallback)(
                                (e) => {
                                    const u = document.getElementById('sectionsContainer'),
                                        t = document.getElementById(e).offsetTop - u.offsetTop;
                                    N(t - 36);
                                },
                                [N],
                            ),
                            U = (0, r.useCallback)(
                                (e) => {
                                    (y(Be),
                                        b(e),
                                        T(e),
                                        setTimeout(() => b(null), 1e3),
                                        g(e),
                                        setTimeout(() => {
                                            H(e);
                                        }));
                                },
                                [H, T],
                            ),
                            W = M(
                                () => {
                                    if (!p && !v) {
                                        const e = document.getElementById('sectionsContainer');
                                        for (let u = 0; u < o.length; u++) {
                                            const t = o[u],
                                                n = document.getElementById(t);
                                            if (n && e && n.offsetTop - e.offsetTop > O.goal) {
                                                g(t);
                                                break;
                                            }
                                        }
                                    }
                                },
                                [g, p, O.goal, v],
                                100,
                            );
                        return (
                            (0, r.useEffect)(() => {
                                o.length && R(o);
                            }, [o]),
                            (0, r.useEffect)(
                                () => (
                                    I.on('recalculateContent', W),
                                    I.on('change', W),
                                    () => {
                                        (I.off('recalculateContent', W), I.off('change', W));
                                    }
                                ),
                                [I, W],
                            ),
                            (0, r.useEffect)(() => {
                                const e = () => {
                                    if (!k.contentRef.current) return;
                                    const e = k.animationScroll.scrollPosition.goal,
                                        u = k.getBounds()[1];
                                    (c(e > 3), _(!u || e < u - 3));
                                };
                                return (
                                    e(),
                                    k.events.on('recalculateContent', e),
                                    k.events.on('change', e),
                                    () => {
                                        (k.events.off('recalculateContent', e), k.events.off('change', e));
                                    }
                                );
                            }, [k, N]),
                            (0, r.useEffect)(() => {
                                let e = null;
                                (A.current ? ((e = n || o[0] || null), (A.current = !1)) : (e = o[0] || null),
                                    g(e),
                                    e &&
                                        setTimeout(() => {
                                            H(e);
                                        }));
                            }, [n, o, H]),
                            a().createElement(
                                'div',
                                { className: 'App_base_fd' },
                                a().createElement(Gu, {
                                    className: 'App_header_f7',
                                    hasDeadlineWidget: Boolean(s.length),
                                }),
                                !s.length && a().createElement(he, null),
                                a().createElement(
                                    Ce,
                                    { classNames: h()('App_empty_3e', L.length ? Yu : qu) },
                                    a().createElement(ie.ZP, {
                                        text: Zu.empty(),
                                        format: { classMix: 'App_errorText_5a' },
                                    }),
                                ),
                                w.length &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(Vu, {
                                            classNames: h()(
                                                'App_sidebar_0f',
                                                L.length ? 'App_enter_fd' : 'App_exit_71',
                                            ),
                                            onCategorySelect: U,
                                            selectedCategory: D,
                                            categories: w,
                                        }),
                                        a().createElement(Bu, {
                                            classNames: h()('App_content_2d', L.length ? qu : Yu),
                                            animatedCategory: p,
                                            scrollApi: k,
                                            hasTopMask: l,
                                            hasBottomMask: m,
                                        }),
                                    ),
                                s.length > 1 && a().createElement(Iu, { onLootboxSelect: (e) => S(e) }),
                                a().createElement(
                                    'div',
                                    { className: 'App_close_56' },
                                    a().createElement(de, {
                                        caption: Zu.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: P,
                                    }),
                                ),
                            )
                        );
                    });
                var Ku = t(7739),
                    Qu = t(926),
                    et = t.n(Qu);
                const ut = ['children', 'className'];
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const nt = {
                        [ou.fd.ExtraSmall]: '',
                        [ou.fd.Small]: et().SMALL_WIDTH,
                        [ou.fd.Medium]: `${et().SMALL_WIDTH} ${et().MEDIUM_WIDTH}`,
                        [ou.fd.Large]: `${et().SMALL_WIDTH} ${et().MEDIUM_WIDTH} ${et().LARGE_WIDTH}`,
                        [ou.fd.ExtraLarge]:
                            `${et().SMALL_WIDTH} ${et().MEDIUM_WIDTH} ${et().LARGE_WIDTH} ${et().EXTRA_LARGE_WIDTH}`,
                    },
                    ot = {
                        [ou.Aq.ExtraSmall]: '',
                        [ou.Aq.Small]: et().SMALL_HEIGHT,
                        [ou.Aq.Medium]: `${et().SMALL_HEIGHT} ${et().MEDIUM_HEIGHT}`,
                        [ou.Aq.Large]: `${et().SMALL_HEIGHT} ${et().MEDIUM_HEIGHT} ${et().LARGE_HEIGHT}`,
                        [ou.Aq.ExtraLarge]:
                            `${et().SMALL_HEIGHT} ${et().MEDIUM_HEIGHT} ${et().LARGE_HEIGHT} ${et().EXTRA_LARGE_HEIGHT}`,
                    },
                    rt = {
                        [ou.cJ.ExtraSmall]: '',
                        [ou.cJ.Small]: et().SMALL,
                        [ou.cJ.Medium]: `${et().SMALL} ${et().MEDIUM}`,
                        [ou.cJ.Large]: `${et().SMALL} ${et().MEDIUM} ${et().LARGE}`,
                        [ou.cJ.ExtraLarge]: `${et().SMALL} ${et().MEDIUM} ${et().LARGE} ${et().EXTRA_LARGE}`,
                    },
                    at = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, ut);
                        const o = (0, ou.GS)(),
                            r = o.mediaWidth,
                            s = o.mediaHeight,
                            i = o.mediaSize;
                        return a().createElement('div', tt({ className: h()(t, nt[r], ot[s], rt[i]) }, n), u);
                    },
                    st = ['children'],
                    it = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((t = r[n]), u.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, st);
                        return a().createElement(Ku.ZN, null, a().createElement(at, t, u));
                    };
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(p, null, a().createElement(it, null, a().createElement(Ju, null))),
                        document.getElementById('root'),
                    );
                });
            },
            3746: (e, u, t) => {
                'use strict';
                t.d(u, { d: () => c });
                var n = t(7613),
                    o = t(6179),
                    r = t.n(o),
                    a = t(2056),
                    s = t(4891);
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
                const l = R.strings.gui_lootboxes.shortStatistic.deadline,
                    c = ({ textClass: e, parentScreen: u }) => {
                        const t = null != e ? e : 'DeadlineWidget_text_69',
                            o = (0, s.B)({ parentScreen: u }).deadlineWidgetToopltipWatched;
                        return r().createElement(
                            a.u,
                            i(
                                {
                                    contentId:
                                        R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.DeadlineTooltip('resId'),
                                },
                                o,
                            ),
                            r().createElement(
                                'div',
                                { className: 'DeadlineWidget_base_91' },
                                r().createElement(n.ZP, { text: l.text(), className: t }),
                                r().createElement('div', { className: 'DeadlineWidget_clockIcon_5c' }),
                            ),
                        );
                    };
            },
            1865: (e, u, t) => {
                'use strict';
                t.d(u, { e: () => c });
                var n = t(6483),
                    o = t.n(n);
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                var s = t(3649),
                    i = t(6179),
                    l = t.n(i);
                const c = ({ vehicleLvl: e, vehicleName: u, vehicleType: t, isElite: n, classNames: i }) =>
                    l().createElement(
                        'div',
                        { className: o()('VehicleInfo_base_11', null == i ? void 0 : i.base) },
                        (function (e) {
                            let u = '';
                            for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) ((u += r[t]), (e -= a[t]));
                            return u;
                        })(e),
                        l().createElement('div', {
                            className: o()('VehicleInfo_type_b7', null == i ? void 0 : i.type),
                            style: {
                                backgroundImage: n
                                    ? `url(${R.images.gui.maps.icons.vehicleTypes.elite.$dyn(`${(0, s.BN)(t)}`)})`
                                    : `url(${R.images.gui.maps.icons.vehicleTypes.c_24x24.$dyn(`${(0, s.BN)(t)}`)})`,
                            },
                        }),
                        u,
                    );
            },
            4380: (e, u, t) => {
                'use strict';
                t.d(u, { AN: () => r, SS: () => o, de: () => s, eX: () => a, ob: () => i, sx: () => n });
                const n = 1,
                    o = 2;
                let r, a, s, i;
                (!(function (e) {
                    e.Lootbox = 'lootbox';
                })(r || (r = {})),
                    (function (e) {
                        ((e.TooltipWatched = 'tooltip_watched'),
                            (e.Click = 'click'),
                            (e.VideoStarted = 'video_started'),
                            (e.Show = 'show'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Storage = 'storage'),
                            (e.Probability = 'probability'),
                            (e.Rewards = 'rewards'),
                            (e.LoseRewards = 'lose_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.Welcome = 'welcome'),
                            (e.LootBoxesShortStats = 'lootboxes_short_stats'),
                            (e.LootBoxesFullStats = 'lootboxes_full_stats'));
                    })(s || (s = {})),
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
                    })(i || (i = {})));
            },
            4891: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => r });
                var n = t(1943),
                    o = t(4380);
                const r = (e) => {
                    const u = (0, n.Jp)(o.AN.Lootbox),
                        t = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.RewardToopltip,
                            parentScreen: o.de.Probability,
                            timeLimit: o.sx,
                            info: null == e ? void 0 : e.info,
                        }),
                        r = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.InfoIcon,
                            parentScreen: o.de.Storage,
                            timeLimit: o.sx,
                        }),
                        a = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.ProbabilityPercent,
                            parentScreen: o.de.Probability,
                            timeLimit: o.sx,
                        }),
                        s = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.ProbabilityPercentWithGarant,
                            parentScreen: o.de.Probability,
                            timeLimit: o.sx,
                        }),
                        i = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.RewardToopltip,
                            parentScreen: o.de.Probability,
                            timeLimit: o.sx,
                            info: null == e ? void 0 : e.info,
                        }),
                        l = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.MinorRewards,
                            parentScreen: o.de.Rewards,
                            timeLimit: o.sx,
                        }),
                        c = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.RewardToopltip,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: o.sx,
                            info: null == e ? void 0 : e.info,
                        }),
                        E = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.IconPossibleRewardGroup,
                            parentScreen: o.de.Storage,
                            timeLimit: o.sx,
                        }),
                        d = (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.RewardRotationToopltip,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: o.sx,
                            info: null == e ? void 0 : e.info,
                        });
                    return {
                        rewardToopltipWatched: t,
                        infoIconToopltipWatched: r,
                        probabilityPercentToopltipWatched: a,
                        probabilityPercentWithGarantToopltipWatched: s,
                        rewardVehicleToopltipWatched: i,
                        minorRewardsToopltipWatched: l,
                        rewardSharedToopltipWatched: c,
                        iconPossibleRewardGroupToopltipWatched: E,
                        carouselLootboxToopltipWatched: (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.CarouselLootbox,
                            parentScreen: o.de.Storage,
                            timeLimit: o.SS,
                        }),
                        rewardToopltipWatchedWithRotation: d,
                        statisticButtonToopltipWatched: (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.StatisticButton,
                            parentScreen: o.de.LootBoxesShortStats,
                            timeLimit: o.sx,
                        }),
                        deadlineWidgetToopltipWatched: (0, n.Sr)(o.AN.Lootbox, {
                            action: o.eX.TooltipWatched,
                            item: o.ob.DeadlineWidget,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: o.sx,
                        }),
                        probabilityPercentWithGarantClick: () => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.Probability,
                                item: o.ob.ProbabilityPercentWithGarant,
                            });
                        },
                        probabilityPercentClick: () => {
                            u({ action: o.eX.Click, parentScreen: o.de.Probability, item: o.ob.ProbabilityPercent });
                        },
                        showLoseRewardsViewButton: (e, t) => {
                            u({
                                action: o.eX.Show,
                                parentScreen: o.de.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        loseRewardsViewButtonClick: (e, t) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        showLoseRewardsViewCloseButton: (e) => {
                            u({
                                action: o.eX.Show,
                                parentScreen: o.de.LoseRewards,
                                item: o.ob.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewCloseButtonClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LoseRewards,
                                item: o.ob.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewESCButtonClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LoseRewards,
                                item: o.ob.ESCButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        showRewardsViewCloseButton: (e) => {
                            u({
                                action: o.eX.Show,
                                parentScreen: o.de.Rewards,
                                item: o.ob.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewCloseButtonClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.Rewards,
                                item: o.ob.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewESCButtonClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.Rewards,
                                item: o.ob.ESCButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewMinorRewardsShow: () => {
                            u({ action: o.eX.Show, parentScreen: o.de.Rewards, item: o.ob.MinorRewards });
                        },
                        showRewardsViewButton: (e, t) => {
                            u({
                                action: o.eX.Show,
                                parentScreen: o.de.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsViewButtonClick: (e, t) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsVideoCloseClick: (e, t, n, r) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.RewardVideo,
                                item: o.ob.CloseButton,
                                info: JSON.stringify({ duration: e, lootboxType: t, lootboxID: n, reward: r }),
                            });
                        },
                        rewardsVideoESCClick: (e, t, n, r) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.RewardVideo,
                                item: o.ob.ESCButton,
                                info: JSON.stringify({ duration: e, lootboxType: t, lootboxID: n, reward: r }),
                            });
                        },
                        rewardsVideoStarted: (e, t, n) => {
                            u({
                                action: o.eX.VideoStarted,
                                parentScreen: o.de.RewardVideo,
                                item: o.ob.RewardVideo,
                                info: JSON.stringify({ lootboxID: t, lootboxType: e, reward: n }),
                            });
                        },
                        storageViewESCButtonClick: () => {
                            u({ action: o.eX.Click, parentScreen: o.de.Storage, item: o.ob.ESCButton });
                        },
                        iconPossibleRewardGroupClick: () => {
                            u({ action: o.eX.Click, parentScreen: o.de.Storage, item: o.ob.IconPossibleRewardGroup });
                        },
                        lootBoxesShortStatsViewESCButtonClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesShortStats,
                                item: o.ob.StatisticESCButton,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsOutsideClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesShortStats,
                                item: o.ob.statisticOutsideClick,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsTabsClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesShortStats,
                                item: o.ob.LootBoxesShortStatsTabs,
                                info: JSON.stringify({ tab: e }),
                            });
                        },
                        lootBoxesShortStatsGroupClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesShortStats,
                                item: o.ob.LootBoxesShortStatsGroup,
                                info: JSON.stringify({ category: e }),
                            });
                        },
                        lootBoxesFullStatsSidebarClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesFullStats,
                                item: o.ob.LootBoxesFullStatsSidebar,
                                info: JSON.stringify({ category: e }),
                            });
                        },
                        lootBoxesFullStatsSelectAllClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesFullStats,
                                item: o.ob.lootBoxesFullStatsSelectAll,
                                info: JSON.stringify({ isButtonActive: e }),
                            });
                        },
                        lootBoxesFullStatsSelectLootboxClick: (e, t) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesFullStats,
                                item: o.ob.lootBoxesFullStatsSelect,
                                info: JSON.stringify({ lootboxID: e, isButtonActive: t }),
                            });
                        },
                        lootBoxesFullStatsRewardClick: (e) => {
                            u({
                                action: o.eX.Click,
                                parentScreen: o.de.LootBoxesFullStats,
                                item: o.ob.lootBoxesFullStatsReward,
                                info: JSON.stringify({ rewardType: e }),
                            });
                        },
                        storageViewBackButtonClick: () => {
                            u({ action: o.eX.Click, parentScreen: o.de.Storage, item: o.ob.BackButton });
                        },
                    };
                };
            },
            5026: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            3393: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
        return (__webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var o = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, a = 0; a < u.length; a++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (() => {
            var e = { 944: 0, 632: 0, 222: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        o,
                        [r, a, s] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        ((o = r[i]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(126));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
