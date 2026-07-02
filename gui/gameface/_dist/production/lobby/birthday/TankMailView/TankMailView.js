(() => {
    var __webpack_modules__ = {
            3779: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => F });
                var n = t(6483),
                    r = t.n(n),
                    a = t(9887),
                    s = t.n(a),
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
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
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
                    d = (Object.keys(_), ['mt', 'mr', 'mb', 'ml']),
                    A = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    F = (0, o.ZP)((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            a = e.m,
                            s = e.mt,
                            o = void 0 === s ? a : s,
                            F = e.mr,
                            g = void 0 === F ? a : F,
                            D = e.mb,
                            p = void 0 === D ? a : D,
                            B = e.ml,
                            C = void 0 === B ? a : B,
                            h = e.column,
                            f = e.row,
                            b = e.flexDirection,
                            v = void 0 === b ? (h ? 'column' : f && 'row') || void 0 : b,
                            S = e.flexStart,
                            w = e.center,
                            y = e.flexEnd,
                            x = e.spaceBetween,
                            P = e.spaceAround,
                            T = e.justifyContent,
                            R =
                                void 0 === T
                                    ? (S ? 'flex-start' : w && 'center') ||
                                      (y && 'flex-end') ||
                                      (x && 'space-between') ||
                                      (P && 'space-around') ||
                                      void 0
                                    : T,
                            N = e.alignItems,
                            M = void 0 === N ? (S ? 'flex-start' : w && 'center') || (y && 'flex-end') || void 0 : N,
                            L = e.alignSelf,
                            k = e.wrap,
                            O = e.flexWrap,
                            I = void 0 === O ? (k ? 'wrap' : void 0) : O,
                            U = e.grow,
                            H = e.shrink,
                            G = e.flex,
                            $ = void 0 === G ? (U || H ? `${U ? 1 : 0} ${H ? 1 : 0} auto` : void 0) : G,
                            W = e.style,
                            Z = e.children,
                            z = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, m);
                        const j = (0, i.useMemo)(() => {
                                const e = { mt: o, mr: g, mb: p, ml: C },
                                    u = ((e) =>
                                        d.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(_[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        d.reduce((u, t) => {
                                            const n = e[t];
                                            return ('number' == typeof n && (u[A[t]] = n + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, W, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: $,
                                        alignSelf: L,
                                        display: v || M ? 'flex' : void 0,
                                        flexDirection: v,
                                        flexWrap: I,
                                        justifyContent: R,
                                        alignItems: M,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, o, g, p, C, W, $, L, v, I, R, M]),
                            q = j.computedStyle,
                            X = j.computedClassNames;
                        return l().createElement('div', E({ className: r()(c.Z.base, ...X, u), style: q }, z), Z);
                    });
            },
            3457: (e, u, t) => {
                'use strict';
                t.d(u, { u5: () => m });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7727),
                    s = t(6179),
                    o = t.n(s),
                    i = t(6880),
                    l = t(2106);
                const c = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: c,
                    mixClass: m,
                    soundHover: E,
                    soundClick: _,
                    onMouseEnter: d,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: g,
                    onMouseLeave: D,
                    onClick: p,
                }) => {
                    const B = (0, s.useRef)(null),
                        C = (0, s.useState)(t),
                        h = C[0],
                        f = C[1],
                        b = (0, s.useState)(!1),
                        v = b[0],
                        S = b[1],
                        w = (0, s.useState)(!1),
                        y = w[0],
                        x = w[1],
                        P = (0, s.useCallback)(() => {
                            c || (B.current && (B.current.focus(), f(!0)));
                        }, [c]),
                        T = (0, s.useCallback)(
                            (e) => {
                                h && null !== B.current && !B.current.contains(e.target) && f(!1);
                            },
                            [h],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                c || (p && p(e));
                            },
                            [c, p],
                        ),
                        M = (0, s.useCallback)(
                            (e) => {
                                c || (null !== E && (0, a.G)(E), d && d(e), x(!0));
                            },
                            [c, E, d],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                A && A(e);
                            },
                            [A],
                        ),
                        k = (0, s.useCallback)(
                            (e) => {
                                c || (g && g(e), S(!1));
                            },
                            [c, g],
                        ),
                        O = (0, s.useCallback)(
                            (e) => {
                                c || (null !== _ && (0, a.G)(_), F && F(e), t && P(), S(!0));
                            },
                            [c, _, F, P, t],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                c || (D && D(e), S(!1));
                            },
                            [c, D],
                        ),
                        U = r()(
                            i.Z.base,
                            i.Z[`base__${n}`],
                            {
                                [i.Z.base__disabled]: c,
                                [i.Z[`base__${u}`]]: u,
                                [i.Z.base__focus]: h,
                                [i.Z.base__highlightActive]: v,
                                [i.Z.base__firstHover]: y,
                            },
                            m,
                        ),
                        H = r()(i.Z.state, i.Z.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, s.useEffect)(() => {
                            f(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: B,
                                className: U,
                                onMouseEnter: M,
                                onMouseMove: L,
                                onMouseUp: k,
                                onMouseDown: O,
                                onMouseLeave: I,
                                onClick: N,
                            },
                            n !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: i.Z.back }),
                                    o().createElement('span', { className: i.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: H },
                                o().createElement('span', { className: i.Z.stateDisabled }),
                                o().createElement('span', { className: i.Z.stateHighlightHover }),
                                o().createElement('span', { className: i.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const m = (0, s.memo)(c);
            },
            2106: (e, u, t) => {
                'use strict';
                let n, r;
                (t.d(u, { L: () => n }),
                    (function (e) {
                        ((e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(r || (r = {})));
            },
            126: (e, u, t) => {
                'use strict';
                function n(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const r = n % t,
                            a = (r % u.columns) * e.width,
                            s = Math.trunc(r / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: s };
                    };
                }
                t.d(u, { q: () => n });
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var n = t(6179),
                    r = t.n(n),
                    a = t(4179);
                class s extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? a.B3.GOLD : a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(6483),
                    s = t.n(a),
                    o = t(3649),
                    i = t(5287);
                const l = ({ binding: e, text: u = '', classMix: t, alignment: a = o.v2.left }) =>
                    null === u
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : r().createElement(
                              n.Fragment,
                              null,
                              u.split('\n').map((u, l) =>
                                  r().createElement(
                                      'div',
                                      { className: s()(i.Z.base, t), key: `${u}-${l}` },
                                      (0, o.Uw)(u, a, e).map((e, u) =>
                                          r().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                      ),
                                  ),
                              ),
                          );
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => m });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    s = t(5262);
                const o = n.O.client.getSize('rem'),
                    i = o.width,
                    l = o.height,
                    c = Object.assign({ width: i, height: l }, (0, s.T)(i, l, a.j)),
                    m = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n),
                    a = t(6536),
                    s = t(3495),
                    o = t(1043),
                    i = t(5262),
                    l = t(3138);
                (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(s.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        m = t[1],
                        E = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            m(Object.assign({ width: t, height: n }, (0, i.T)(t, n, o.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', E), [E]));
                    const _ = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(s.Y.Provider, { value: _ }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const s = ['children'],
                    o = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const o = (0, n.useContext)(a.Y),
                            i = o.extraLarge,
                            l = o.large,
                            c = o.medium,
                            m = o.small,
                            E = o.extraSmall,
                            _ = o.extraLargeWidth,
                            d = o.largeWidth,
                            A = o.mediumWidth,
                            F = o.smallWidth,
                            g = o.extraSmallWidth,
                            D = o.extraLargeHeight,
                            p = o.largeHeight,
                            B = o.mediumHeight,
                            C = o.smallHeight,
                            h = o.extraSmallHeight,
                            f = { extraLarge: D, large: p, medium: B, small: C, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && m) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && _) return (0, r.H)(u, t, f);
                            if (t.largeWidth && d) return (0, r.H)(u, t, f);
                            if (t.mediumWidth && A) return (0, r.H)(u, t, f);
                            if (t.smallWidth && F) return (0, r.H)(u, t, f);
                            if (t.extraSmallWidth && g) return (0, r.H)(u, t, f);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && p) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && C) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                ((o.defaultProps = {
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
                    (0, n.memo)(o));
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
                (t.d(u, { YN: () => n.Y }), t(6010), t(1039));
                var n = t(3495);
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
                function r(e, u, t) {
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
                        r = (function (e, u) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => r }),
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
            5739: (e, u, t) => {
                'use strict';
                t.d(u, { Q: () => m });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    s = t.n(a),
                    o = t(3415),
                    i = t(2862),
                    l = t(729),
                    c = t(1609);
                const m = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: n = i.h2.Big,
                    special: a,
                    value: m,
                    valueType: E,
                    style: _,
                    className: d,
                    classNames: A,
                    tooltipArgs: F,
                    periodicIconTooltipArgs: g,
                }) => {
                    const D = (0, l.L_)(a),
                        p = (0, l.i2)(a),
                        B = (0, l.m9)(m, E);
                    return s().createElement(
                        'div',
                        { className: r()(c.Z.base, c.Z[`base__${n}`], d), style: _ },
                        s().createElement(
                            o.l,
                            { tooltipArgs: F, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: r()(c.Z.image, null == A ? void 0 : A.image) },
                                    D &&
                                        s().createElement('div', {
                                            className: r()(c.Z.highlight, null == A ? void 0 : A.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${D}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: r()(c.Z.icon, null == A ? void 0 : A.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    p &&
                                        s().createElement('div', {
                                            className: r()(c.Z.overlay, null == A ? void 0 : A.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${p}_overlay)`,
                                            },
                                        }),
                                ),
                                B &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                E === i.$h.MULTI && c.Z.info__multi,
                                                null == A ? void 0 : A.info,
                                            ),
                                        },
                                        B,
                                    ),
                            ),
                        ),
                        t &&
                            s().createElement(
                                o.l,
                                { tooltipArgs: g },
                                s().createElement('div', {
                                    className: r()(c.Z.timer, null == A ? void 0 : A.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                'use strict';
                let n, r, a, s, o, i, l, c, m;
                (t.d(u, { $h: () => s, A2: () => i, E4: () => n, h2: () => a, kK: () => o, sh: () => l, ye: () => m }),
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
                            (e.PostStamp = 'giftsystem_5_stamp'),
                            (e.Quests = 'quests'),
                            (e.ArmoryCoin = 'armory_coin'),
                            (e.PremiumPlusUniversal = 'premium_plus_universal'),
                            (e.DogTagType = 'dogTagComponents'),
                            (e.GoldenTicket = 'goldenticket'),
                            (e.LbStyleProgress = 'lbStyleProgress'),
                            (e.RewardsSlots = 'rewardsSlots'));
                    })(n || (n = {})),
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
                    })(r || (r = {})),
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
                    })(a || (a = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(s || (s = {})),
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
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(i || (i = {})),
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
                    })(l || (l = {})),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(c || (c = {})),
                    (function (e) {
                        e.ProgressionStyle = 'progressionStyle';
                    })(m || (m = {})));
            },
            729: (e, u, t) => {
                'use strict';
                t.d(u, { L_: () => g, i2: () => D, m9: () => p, p3: () => E, pI: () => F, ry: () => A });
                var n = t(2372),
                    r = t(6179),
                    a = t.n(r),
                    s = t(2862);
                const o = [
                        s.E4.Items,
                        s.E4.Equipment,
                        s.E4.Xp,
                        s.E4.XpFactor,
                        s.E4.Blueprints,
                        s.E4.BlueprintsAny,
                        s.E4.Goodies,
                        s.E4.Berths,
                        s.E4.Slots,
                        s.E4.Tokens,
                        s.E4.CrewSkins,
                        s.E4.CrewBooks,
                        s.E4.Customizations,
                        s.E4.CreditsFactor,
                        s.E4.TankmenXp,
                        s.E4.TankmenXpFactor,
                        s.E4.FreeXpFactor,
                        s.E4.BattleToken,
                        s.E4.PremiumUniversal,
                        s.E4.NaturalCover,
                        s.E4.BpCoin,
                        s.E4.BattlePassSelectToken,
                        s.E4.BattlaPassFinalAchievement,
                        s.E4.BattleBadge,
                        s.E4.BonusX5,
                        s.E4.CrewBonusX3,
                        s.E4.NewYearFillers,
                        s.E4.NewYearInvoice,
                        s.E4.EpicSelectToken,
                        s.E4.Comp7TokenWeeklyReward,
                        s.E4.Comp7TokenCouponReward,
                        s.E4.BattleBoosterGift,
                        s.E4.CosmicLootboxCommon,
                        s.E4.CosmicLootboxSilver,
                        s.E4.SelectableBonus,
                        s.E4.PostStamp,
                        s.E4.PremiumPlusUniversal,
                        s.E4.GoldenTicket,
                        s.E4.RewardsSlots,
                    ],
                    i = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints],
                    c = [s.E4.PremiumPlus, s.E4.Premium];
                let m;
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
                })(m || (m = {}));
                const E = (e) =>
                        o.includes(e)
                            ? s.$h.MULTI
                            : i.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    _ = ['engravings', 'backgrounds'],
                    d = ['engraving', 'background'],
                    A = (e, u = s.h2.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            o = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case s.h2.S600x450:
                                        return 'c_600x450';
                                    case s.h2.S400x300:
                                        return 'c_400x300';
                                    case s.h2.S296x222:
                                        return 'c_296x222';
                                    case s.h2.S232x174:
                                        return 'c_232x174';
                                    case s.h2.Big:
                                        return 'c_80x80';
                                    case s.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case s.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case s.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = _[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(d[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case s.h2.S600x450:
                                            return 'c_600x450';
                                        case s.h2.S400x300:
                                            return 'c_400x300';
                                        case s.h2.S296x222:
                                            return 'c_296x222';
                                        case s.h2.S232x174:
                                            return 'c_232x174';
                                        case s.h2.S180x135:
                                            return 'big';
                                        case s.h2.Big:
                                        case s.h2.S80x80:
                                            return 'c_80x80';
                                        case s.h2.Small:
                                        case s.h2.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${a}`;
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
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case s.h2.Mini:
                                            return m.s32;
                                        case s.h2.Small:
                                        case s.h2.S48x48:
                                            return m.s48;
                                        case s.h2.S80x80:
                                        case s.h2.Big:
                                            return m.s80;
                                        case s.h2.S128x100:
                                            return m.s116;
                                        case s.h2.S180x135:
                                        case s.h2.S232x174:
                                        case s.h2.S296x222:
                                            return m.s296;
                                        case s.h2.S400x300:
                                            return m.s400;
                                        case s.h2.S600x450:
                                            return m.s600;
                                    }
                                })(u)}`;
                            case s.E4.StyleProgress:
                            case s.E4.LbStyleProgress:
                                return B(a, u, s.ye.ProgressionStyle);
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    F = (e, u, t) => {
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
                    },
                    g = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    D = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                                return s.sh.BATTLE_BOOSTER;
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.sh.BATTLE_BOOSTER_REPLACE;
                            case s.kK.BUILT_IN_EQUIPMENT:
                                return s.sh.BUILT_IN_EQUIPMENT;
                            case s.kK.EQUIPMENT_PLUS:
                                return s.sh.EQUIPMENT_PLUS;
                            case s.kK.EQUIPMENT_TROPHY_BASIC:
                                return s.sh.EQUIPMENT_TROPHY_BASIC;
                            case s.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return s.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    p = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return a().createElement(n.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    B = (e, u, t) => {
                        const n = R.images.gui.maps.icons.quests.bonuses.$dyn(u),
                            r = n.$dyn(e);
                        return String(null != r ? r : n.$dyn(t));
                    };
            },
            2773: (e, u, t) => {
                'use strict';
                t.d(u, { $Q: () => p });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    s = t(1856),
                    o = t(3815),
                    i = t(560),
                    l = t(7727),
                    c = t(6179),
                    m = t.n(c),
                    E = t(6358),
                    _ = t(372);
                const d = 'disable',
                    A = { pending: !1, offset: 0 },
                    F = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    g = () => {},
                    D = (e, u) => Math.max(20, e.offsetWidth * u),
                    p = (0, c.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = F, onDrag: n = g }) => {
                        const p = (0, c.useRef)(null),
                            B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            h = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            b = e.stepTimeout || 100,
                            v = (0, c.useState)(A),
                            S = v[0],
                            w = v[1],
                            y = (0, c.useCallback)(
                                (e) => {
                                    (w(e),
                                        f.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: f.current }));
                                },
                                [n],
                            ),
                            x = () => {
                                const u = h.current,
                                    t = f.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = (0, a.u)(0, 1, s / (r - n)),
                                    l = (u.offsetWidth - D(u, o)) * i;
                                ((t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (B.current && C.current && h.current && f.current) {
                                            if (0 === e)
                                                return (B.current.classList.add(d), void C.current.classList.remove(d));
                                            if (
                                                ((u = h.current),
                                                (t = f.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (B.current.classList.remove(d), void C.current.classList.add(d));
                                            var u, t;
                                            (B.current.classList.remove(d), C.current.classList.remove(d));
                                        }
                                    })(l));
                            },
                            P = (0, o.z)(() => {
                                ((() => {
                                    const u = f.current,
                                        t = h.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    ((u.style.width = `${D(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        p.current &&
                                            (1 === a
                                                ? p.current.classList.add(_.Z.base__nonActive)
                                                : p.current.classList.remove(_.Z.base__nonActive)));
                                })(),
                                    x());
                            });
                        ((0, c.useEffect)(() => (0, s.v)(P)),
                            (0, c.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const u = () => {
                                            x();
                                        };
                                        let t = g;
                                        const n = () => {
                                            (t(), (t = (0, s.v)(P)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', P),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', P),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!S.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = h.current,
                                            s = f.current;
                                        if (!r || !a || !s) return;
                                        const o = u.screenX - S.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), y(A));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, S.offset, S.pending, n, y]));
                        const T = (0, i.B)((u) => e.applyStepTo(u), b, [e]),
                            R = T[0],
                            N = T[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', N, !0),
                                () => document.removeEventListener('mouseup', N, !0)
                            ),
                            [N],
                        );
                        const M = (e) => {
                            e.target.classList.contains(d) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: p, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), R(E.Nm.Next));
                                },
                                onMouseUp: N,
                                ref: B,
                                onMouseEnter: M,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = f.current;
                                        n &&
                                            0 === u.button &&
                                            ((0, l.G)('play'),
                                            u.target === n
                                                ? y({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = f.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? E.Nm.Prev : E.Nm.Next));
                                    },
                                    ref: h,
                                    onMouseEnter: M,
                                },
                                m().createElement('div', { ref: f, className: r()(_.Z.thumb, u.thumb) }),
                                m().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), R(E.Nm.Prev));
                                },
                                onMouseUp: N,
                                ref: C,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            2840: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    s = t.n(a),
                    o = t(2773),
                    i = t(7950),
                    l = t(4682);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: m,
                    scrollClassName: E,
                    getStepByRailClick: _,
                    onDrag: d,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            s().createElement(i.Area, { className: E, api: F, classNames: m }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: _, api: u, onDrag: d, classNames: A }),
                    );
                };
            },
            7950: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        Area: () => _,
                        Bar: () => i.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => E.Nm,
                        defaultSettings: () => E.he,
                        useHorizontalScrollApi: () => E.T5,
                    }));
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    s = t(6179),
                    o = t.n(s),
                    i = t(2773),
                    l = t(2840),
                    c = t(4682),
                    m = t(8579),
                    E = t(6358);
                const _ = ({ api: e, className: u, classNames: t, children: n, style: i }) => (
                    (0, s.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(c.Z.base, u), style: i },
                        o().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            o().createElement(
                                'div',
                                { className: r()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                ((_.Bar = i.$Q), (_.Default = l.K), (_.SeniorityAwards = m.Tm));
            },
            8579: (e, u, t) => {
                'use strict';
                t.d(u, { Tm: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    s = t(6179),
                    o = t.n(s),
                    i = (t(2773), t(2840), t(4682));
                t(6358);
                const l = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, s.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(i.Z.base, u) },
                        o().createElement(
                            'div',
                            { className: r()(i.Z.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                            o().createElement(
                                'div',
                                { className: r()(i.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            },
            6358: (e, u, t) => {
                'use strict';
                t.d(u, { Nm: () => n.Nm, T5: () => r, he: () => n.he });
                var n = t(7308);
                const r = (0, n.EO)({
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
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    triggerMouseMoveOnUpdate: !0,
                });
            },
            6225: (e, u, t) => {
                'use strict';
                t.d(u, { $Q: () => B });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7515),
                    s = t(1856),
                    o = t(3815),
                    i = t(560),
                    l = t(7727),
                    c = t(6179),
                    m = t.n(c),
                    E = t(7701),
                    _ = t(9168);
                const d = 'disable',
                    A = () => {},
                    F = { pending: !1, offset: 0 },
                    g = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    D = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    p = (e, u) => Math.max(20, e.offsetHeight * u),
                    B = (0, c.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = g, onDrag: n = A }) => {
                        const B = (0, c.useRef)(null),
                            C = (0, c.useRef)(null),
                            h = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            b = (0, c.useRef)(null),
                            v = e.stepTimeout || 100,
                            S = (0, c.useState)(F),
                            w = S[0],
                            y = S[1],
                            x = (0, c.useCallback)(
                                (e) => {
                                    (y(e),
                                        b.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current }));
                                },
                                [n],
                            ),
                            P = (0, o.z)(() => {
                                const u = b.current,
                                    t = f.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${p(t, a)}px`),
                                    u.classList.add(_.Z.thumb),
                                    B.current &&
                                        (1 === a
                                            ? B.current.classList.add(_.Z.base__nonActive)
                                            : B.current.classList.remove(_.Z.base__nonActive)),
                                    a
                                );
                            }),
                            T = (0, o.z)(() => {
                                const u = f.current,
                                    t = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = (0, a.u)(0, 1, s / (r - n)),
                                    l = (u.offsetHeight - p(u, o)) * i;
                                ((t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && h.current && f.current && b.current) {
                                            if (0 === e)
                                                return (C.current.classList.add(d), void h.current.classList.remove(d));
                                            if (
                                                ((u = f.current),
                                                (t = b.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (C.current.classList.remove(d), void h.current.classList.add(d));
                                            var u, t;
                                            (C.current.classList.remove(d), h.current.classList.remove(d));
                                        }
                                    })(l));
                            }),
                            R = (0, o.z)(() => {
                                D(e, () => {
                                    (P(), T());
                                });
                            });
                        ((0, c.useEffect)(() => (0, s.v)(R)),
                            (0, c.useEffect)(() => {
                                const u = () => {
                                    D(e, () => {
                                        T();
                                    });
                                };
                                let t = A;
                                const n = () => {
                                    (t(), (t = (0, s.v)(R)));
                                };
                                return (
                                    e.events.on('recalculateContent', R),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', R),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const u = (u) => {
                                        D(e, (t) => {
                                            const r = f.current,
                                                a = b.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = u.screenY - w.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), e.handleIsThumbDragging(!1), x(F));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, w.offset, w.pending, n, x]));
                        const N = (0, i.B)((u) => e.applyStepTo(u), v, [e]),
                            M = N[0],
                            L = N[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const k = (e) => {
                            e.target.classList.contains(d) || (0, l.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, u.base), ref: B, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), M(E.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: k,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = b.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            ((0, l.G)('play'),
                                            u.target === n
                                                ? (e.handleIsThumbDragging(!0),
                                                  x({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y }))
                                                : ((r =
                                                      u.screenY > n.getBoundingClientRect().y ? E.Nm.Prev : E.Nm.Next),
                                                  b.current &&
                                                      D(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: f,
                                    onMouseEnter: k,
                                },
                                m().createElement('div', { ref: b, className: u.thumb }),
                                m().createElement('div', { className: r()(_.Z.rail, u.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(d) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), M(E.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: h,
                                onMouseEnter: k,
                            }),
                        );
                    });
            },
            1158: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    s = t.n(a),
                    o = t(6225),
                    i = t(9605),
                    l = t(5636);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: m,
                    scrollClassNames: E,
                    getStepByRailClick: _,
                    onDrag: d,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            s().createElement(i.Area, { className: m, classNames: E, api: F }, e),
                        ),
                        s().createElement(o.$Q, { getStepByRailClick: _, api: u, onDrag: d, classNames: A }),
                    );
                };
            },
            9605: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { Area: () => E, Bar: () => i.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var n = t(6483),
                    r = t.n(n),
                    a = t(1856),
                    s = t(6179),
                    o = t.n(s),
                    i = t(6225),
                    l = t(1158),
                    c = t(7701),
                    m = t(5636);
                const E = ({ className: e, classNames: u, children: t, api: n }) => (
                    (0, s.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    o().createElement(
                        'div',
                        { className: r()(m.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: r()(m.Z.content, null == u ? void 0 : u.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
                E.Default = l.K;
            },
            7701: (e, u, t) => {
                'use strict';
                t.d(u, { Nm: () => n.Nm, c4: () => r });
                var n = t(7308);
                const r = (0, n.EO)({
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, u) => {
                        e.scrollTop = u.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                });
            },
            7308: (e, u, t) => {
                'use strict';
                t.d(u, { EO: () => d, Nm: () => E, he: () => _ });
                var n = t(7515),
                    r = t(1856),
                    a = t(3138),
                    s = t(4532),
                    o = t(9653),
                    i = t(3815),
                    l = t(4489),
                    c = t(6179),
                    m = t(7030);
                let E;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(E || (E = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    d = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: E,
                        getWrapperSize: d,
                        triggerMouseMoveOnUpdate: A = !1,
                    }) => {
                        const F = (e, t) => {
                            const r = u(e),
                                a = r[0],
                                s = r[1];
                            return (0, n.u)(a, s, t);
                        };
                        return (n = {}) => {
                            const g = n.settings,
                                D = void 0 === g ? _ : g,
                                p = (0, c.useRef)(null),
                                B = (0, c.useRef)(null),
                                C = (0, o.q)(),
                                h = (0, l.f)(
                                    () => {
                                        a.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                f = (0, m.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = p.current;
                                        u && (t(u, e), C.trigger('change', e), A && h());
                                    },
                                    onRest: (e) => C.trigger('rest', e),
                                    onStart: (e) => C.trigger('start', e),
                                    onPause: (e) => C.trigger('pause', e),
                                })),
                                b = f[0],
                                v = f[1],
                                S = (0, c.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = b.scrollPosition.get(),
                                            a = (null != (n = b.scrollPosition.goal) ? n : 0) - r;
                                        return F(e, u * t + a + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                w = (0, c.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = p.current;
                                        n &&
                                            v.start({
                                                scrollPosition: F(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: D.animationConfig,
                                                from: { scrollPosition: F(n, b.scrollPosition.get()) },
                                            });
                                    },
                                    [v, D.animationConfig, b.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e) => {
                                        const u = p.current,
                                            t = B.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return d(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, D.step),
                                            r = S(u, e, n);
                                        w(r);
                                    },
                                    [w, S, D.step],
                                ),
                                x = (0, c.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && y(E(e)),
                                            p.current && C.trigger('mouseWheel', e, b.scrollPosition, u(p.current)));
                                    },
                                    [b.scrollPosition, y, C],
                                ),
                                P = (0, s.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = p.current;
                                            e &&
                                                (w(F(e, b.scrollPosition.goal), { immediate: !0 }),
                                                C.trigger('resizeHandled'));
                                        }),
                                    [w, b.scrollPosition.goal],
                                ),
                                T = (0, i.z)(() => {
                                    const e = p.current;
                                    if (!e) return;
                                    const u = F(e, b.scrollPosition.goal);
                                    (u !== b.scrollPosition.goal && w(u, { immediate: !0 }),
                                        C.trigger('recalculateContent'));
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', P),
                                    () => {
                                        window.removeEventListener('resize', P);
                                    }
                                ),
                                [P],
                            );
                            const R = (0, c.useCallback)((e) => C.trigger('isThumbDraggingChanged', e), [C]);
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (B.current ? d(B.current) : void 0),
                                    getContainerSize: () => (p.current ? e(p.current) : void 0),
                                    getBounds: () =>
                                        p.current
                                            ? u(p.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: D.step.clampedArrowStepTimeout,
                                    clampPosition: F,
                                    handleMouseWheel: x,
                                    applyScroll: w,
                                    applyStepTo: y,
                                    contentRef: p,
                                    wrapperRef: B,
                                    scrollPosition: v,
                                    animationScroll: b,
                                    recalculateContent: T,
                                    handleIsThumbDragging: R,
                                    events: { on: C.on, off: C.off },
                                }),
                                [b.scrollPosition, w, y, R, C.off, C.on, T, x, v, D.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, u, t) => {
                'use strict';
                t.d(u, { X: () => r });
                var n = t(7950);
                const r = { Vertical: t(9605), Horizontal: n };
            },
            8089: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => m });
                var n = t(6179),
                    r = t.n(n),
                    a = t(6483),
                    s = t.n(a),
                    o = t(7727),
                    i = t(7476);
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
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class m extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, o.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, o.G)(this.props.soundClick));
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
                            a = e.side,
                            o = e.type,
                            m = e.classNames,
                            E = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            d = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, l)),
                            g = s()(i.Z.base, i.Z[`base__${o}`], i.Z[`base__${a}`], null == m ? void 0 : m.base),
                            D = s()(i.Z.icon, i.Z[`icon__${o}`], i.Z[`icon__${a}`], null == m ? void 0 : m.icon),
                            p = s()(i.Z.glow, null == m ? void 0 : m.glow),
                            B = s()(i.Z.caption, i.Z[`caption__${o}`], null == m ? void 0 : m.caption),
                            C = s()(i.Z.goto, null == m ? void 0 : m.goto);
                        return r().createElement(
                            'div',
                            c(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(E),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== o && r().createElement('div', { className: i.Z.shine }),
                            r().createElement('div', { className: D }, r().createElement('div', { className: p })),
                            r().createElement('div', { className: B }, u),
                            n && r().createElement('div', { className: C }, n),
                        );
                    }
                }
                m.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7613: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => f });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3779),
                    s = t(280),
                    o = t(3532),
                    i = t.n(o),
                    l = t(9887),
                    c = t.n(l),
                    m = t(3377),
                    E = t(6179),
                    _ = t.n(E),
                    d = t(3393);
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
                const g = Object.keys(i()),
                    D = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    p = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    B = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
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
                            'heading-H56': D,
                            'heading-H36': D,
                            'heading-H28': p,
                            'heading-H24': p,
                            'heading-H24R': p,
                            'heading-H22': p,
                            'heading-H20R': p,
                            'heading-H18': p,
                            'heading-H15': B,
                            'heading-H14': B,
                            'paragraph-P24': p,
                            'paragraph-P18': p,
                            'paragraph-P16': p,
                            'paragraph-P14': B,
                            'paragraph-P12': B,
                            'paragraph-P10': B,
                        }),
                    h =
                        (Object.keys(C),
                        (e) =>
                            e
                                ? ((e) => g.includes(e))(e)
                                    ? { colorClassName: d.Z[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    f = (0, m.ZP)((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            o = e.color,
                            i = e.m,
                            l = e.mt,
                            c = void 0 === l ? i : l,
                            m = e.mr,
                            g = void 0 === m ? i : m,
                            D = e.mb,
                            p = void 0 === D ? i : D,
                            B = e.ml,
                            f = void 0 === B ? i : B,
                            b = e.style,
                            v = e.format,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        const w = (0, E.useMemo)(() => {
                                const e = h(o),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, b, n), colorClassName: u };
                            }, [b, o]),
                            y = w.computedStyle,
                            x = w.colorClassName;
                        return _().createElement(
                            a.ZP,
                            F(
                                {
                                    className: r()(d.Z.base, t && d.Z[t], x, n),
                                    style: y,
                                    mt: !0 === c ? C[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === g ? C[t || 'paragraph-P16'].mr : g,
                                    mb: !0 === p ? C[t || 'paragraph-P16'].mb : p,
                                    ml: !0 === f ? C[t || 'paragraph-P16'].ml : f,
                                },
                                S,
                            ),
                            void 0 !== v ? _().createElement(s.z, F({}, v, { text: u })) : u,
                        );
                    });
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const s = ['children'];
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
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, s);
                    return r().createElement(
                        a.u,
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
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(7078),
                    s = t(6373),
                    o = t(2056);
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
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(s.i, u, n);
                    const l = u.contentId,
                        c = u.args,
                        m = null == c ? void 0 : c.contentId;
                    return l || m
                        ? r().createElement(o.u, i({}, u, { contentId: l || m }), n)
                        : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            m = e.alert,
                            E = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const d = (0, r.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: m });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [m, t, l, c, E]);
                        return a().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((A = null == E ? void 0 : E.hasHtmlContent),
                                        A ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                _,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(4179),
                    a = t(6179);
                const s = [
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
                const i = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            m = e.onMouseDown,
                            E = e.onClick,
                            _ = e.ignoreShowDelay,
                            d = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            g = e.decoratorId,
                            D = void 0 === g ? 0 : g,
                            p = e.isEnabled,
                            B = void 0 === p || p,
                            C = e.targetId,
                            h = void 0 === C ? 0 : C,
                            f = e.onShow,
                            b = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, s);
                        const S = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, a.useMemo)(() => h || (0, n.F)().resId, [h]),
                            y = (0, a.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (i(t, D, { isMouseEvent: !0, on: !0, arguments: o(r) }, w),
                                    f && f(),
                                    (S.current.isVisible = !0));
                            }, [t, D, r, w, f]),
                            x = (0, a.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        i(t, D, { on: !1 }, w),
                                        S.current.isVisible && b && b(),
                                        (S.current.isVisible = !1));
                                }
                            }, [t, D, w, b]),
                            P = (0, a.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(S.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = S.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', P, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', P, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === B && x();
                            }, [B, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ),
                            B
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((S.current.timeoutId = window.setTimeout(y, d ? 100 : 400)),
                                                          l && l(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (x(), null == c || c(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === F && x(), null == E || E(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === F && x(), null == m || m(u), null == e || e(u));
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            1856: (e, u, t) => {
                'use strict';
                t.d(u, { v: () => n });
                const n = (e) => {
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
                };
            },
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(n));
                    };
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => s });
                var n = t(3138);
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const a = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = a, context: s = 'model' } = {}) {
                    const o = new Map();
                    function i(e, u = 0) {
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
                            r = s.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const a = 'string' == typeof r ? `${s}.${r}` : s,
                                i = n.O.view.addModelObserver(a, u, !0);
                            return (o.set(i, t), e && t(l(r)), i);
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
                            for (
                                var e,
                                    t = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, u);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? r(e, u)
                                                              : void 0
                                                    );
                                                }
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
                                    })(o.keys());
                                !(e = t()).done;
                            )
                                i(e.value, u);
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => i });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    s = t.n(a),
                    o = t(8246);
                const i = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: m }) {
                            const E = (0, a.useRef)([]),
                                _ = (t, a, s) => {
                                    var i;
                                    const l = o.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == s ? void 0 : s.getter) ? i : () => {},
                                                  }),
                                        m = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => E.current.push(e),
                                        d = e({
                                            mode: t,
                                            readByPath: m,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : m(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : m(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = m(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            s = Object.entries(a),
                                                            o = s.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
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
                                            cleanup: _,
                                        }),
                                        A = { mode: t, model: d, externalModel: c, cleanup: _ };
                                    return {
                                        model: d,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                d = (0, a.useRef)(!1),
                                A = (0, a.useState)(i),
                                F = A[0],
                                g = A[1],
                                D = (0, a.useState)(() => _(i, l, m)),
                                p = D[0],
                                B = D[1];
                            return (
                                (0, a.useEffect)(() => {
                                    d.current ? B(_(F, l, m)) : (d.current = !0);
                                }, [m, F, l]),
                                (0, a.useEffect)(() => {
                                    g(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (p.externalModel.dispose(), E.current.forEach((e) => e()));
                                    },
                                    [p],
                                ),
                                s().createElement(t.Provider, { value: p }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => a }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
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
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
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
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var n = t(527);
                function r(e = 'px') {
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
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var n = t(2472);
                const r = {
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
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => d,
                        isClientAccessible: () => C,
                        isEventHandled: () => f,
                        isFocused: () => B,
                        pxToRem: () => g,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => y,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
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
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.isClientAccessible();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    a = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {
                    return !1;
                }
                (t.d(u, { jv: () => n }), console.log);
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
                    r = t(6179),
                    a = t.n(r);
                const s = ['xl', 'lg', 'md', 'sm', 'xs'],
                    o = (e) => e.includes('_') && ((e) => s.includes(e))(e.split('_').at(-1)),
                    i = [n.cJ.ExtraLarge, n.cJ.Large, n.cJ.Medium, n.cJ.Small, n.cJ.ExtraSmall],
                    l = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (o(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = i.indexOf(u),
                                    o = (-1 !== a ? s.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    l = o ? e[o] : void 0;
                                return ((t[r] = void 0 !== l ? l : e[r]), t);
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => s.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    c = (e, u = l) => {
                        const t = (
                            (e, u = l) =>
                            (t) => {
                                const s = (0, n.GS)().mediaSize,
                                    o = (0, r.useMemo)(() => u(t, s), [t, s]);
                                return a().createElement(e, o);
                            }
                        )(e, u);
                        return a().memo((u) =>
                            Object.keys(u).some((e) => o(e) && void 0 !== u[e])
                                ? a().createElement(t, u)
                                : a().createElement(e, u),
                        );
                    };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            4532: (e, u, t) => {
                'use strict';
                t.d(u, { M: () => r });
                var n = t(6179);
                const r = (e, u = []) => {
                    const t = (0, n.useRef)(),
                        r = (0, n.useCallback)((...u) => {
                            (t.current && t.current(), (t.current = e(...u)));
                        }, u);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            9653: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => a });
                var n = t(6179);
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const a = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        a = (e, t) => {
                            u(e).delete(t);
                        },
                        s = (e, ...t) => {
                            for (
                                var n,
                                    a = (function (e, u) {
                                        var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (t) return (t = t.call(e)).next.bind(t);
                                        if (
                                            Array.isArray(e) ||
                                            (t = (function (e, u) {
                                                if (e) {
                                                    if ('string' == typeof e) return r(e, u);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === t && e.constructor && (t = e.constructor.name),
                                                        'Map' === t || 'Set' === t
                                                            ? Array.from(e)
                                                            : 'Arguments' === t ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                              ? r(e, u)
                                                              : void 0
                                                    );
                                                }
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
                                    })(u(e).values());
                                !(n = a()).done;
                            )
                                (0, n.value)(...t);
                        };
                    return (0, n.useMemo)(() => ({ on: t, off: a, trigger: s }), []);
                };
            },
            3815: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => a });
                var n = t(6179);
                const r = [];
                function a(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), r)
                    );
                }
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { GS: () => l, cJ: () => s });
                var n = t(6179),
                    r = t(7739),
                    a = t(1043);
                let s, o, i;
                (!(function (e) {
                    ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(i || (i = {})));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            560: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => r });
                var n = t(6179);
                function r(e, u, t = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, n.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        a,
                    ];
                }
            },
            9630: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => a });
                var n = t(1856),
                    r = t(6179);
                function a(e, u) {
                    (0, r.useEffect)(() => {
                        let u = () => {};
                        const t = () => {
                            (u(), (u = (0, n.v)(e)));
                        };
                        return (
                            window.addEventListener('resize', t),
                            () => {
                                (u(), window.removeEventListener('resize', t));
                            }
                        );
                    }, u);
                }
            },
            4489: (e, u, t) => {
                'use strict';
                t.d(u, { f: () => a });
                var n = t(5139),
                    r = t(6179);
                function a(e, u, t) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(t, e), u);
                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                }
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
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
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
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
                    })(r || (r = {})));
            },
            5175: (e, u, t) => {
                'use strict';
                t.d(u, { c: () => a });
                var n = t(9480);
                const r = (e) =>
                        null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? n.UI(e, (e) => ('object' == typeof e ? r(e) : e))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? r(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, u]) => [e, 'object' == typeof u ? r(u) : u]),
                                    )
                            : e,
                    a = (e) => r(e);
            },
            9480: (e, u, t) => {
                'use strict';
                function n(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                t.d(u, { UI: () => n });
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { $: () => r, G: () => n });
                const r = {
                    playHighlight() {
                        n('highlight');
                    },
                    playClick() {
                        n('play');
                    },
                    playYes() {
                        n('yes1');
                    },
                };
            },
            3649: (e, u, t) => {
                'use strict';
                let n;
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                (t.d(u, { BN: () => r, Uw: () => c, v2: () => n }),
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
                    o = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? a : s, []),
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
                    c = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = n.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return l.includes(t)
                                          ? i(e)
                                          : ((e, u = n.left) => {
                                                let t = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    o(a, /( )/, u).forEach((e) => (t = t.concat(o(e, r, n.left)))),
                                                    t
                                                );
                                            })(e, u);
                                  })(e, u),
                        );
            },
            5139: (e, u, t) => {
                'use strict';
                function n(e, u, t, n) {
                    let r,
                        a = !1,
                        s = 0;
                    function o() {
                        r && clearTimeout(r);
                    }
                    function i(...i) {
                        const l = this,
                            c = Date.now() - s;
                        function m() {
                            ((s = Date.now()), t.apply(l, i));
                        }
                        a ||
                            (n && !r && m(),
                            o(),
                            void 0 === n && c > e
                                ? m()
                                : !0 !== u &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : m,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (i.cancel = function () {
                            (o(), (a = !0));
                        }),
                        i
                    );
                }
                t.d(u, { Z: () => n });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
                t.d(u, { B3: () => c, Z5: () => s, B0: () => i, ry: () => p });
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
                const r = n;
                var a = t(1358);
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
                    m = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function g(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            g(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    C = () => B(i.CLOSE),
                    h = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var f = t(7572);
                const b = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: m,
                        TimeFormatType: E,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                m = o.width,
                                E = o.height,
                                _ = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(m),
                                    height: A.O.view.pxToRem(E),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => h(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: p,
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
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = v;
            },
            7260: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => c });
                var n = t(6179),
                    r = t.n(n),
                    a = t(280),
                    s = t(8852);
                const o = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    i = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    c = (0, n.memo)(({ text: e, binding: u, classMix: t }) => {
                        const c = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            m = (0, n.useMemo)(() => u || {}, [u]);
                        let E = o.exec(e),
                            _ = e,
                            d = 0;
                        for (; E;) {
                            const t = E[0],
                                n = i.exec(t),
                                A = l.exec(t),
                                F = E[1];
                            if (n && A) {
                                const e = n[0],
                                    o = e + d++ + e;
                                ((_ = _.replace(t, `%(${o})`)),
                                    (m[o] = s.Z[e]
                                        ? r().createElement(
                                              'span',
                                              { className: s.Z[e] },
                                              r().createElement(a.z, { text: F, binding: u }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: c(e) },
                                              r().createElement(a.z, { text: F, binding: u }),
                                          )));
                            }
                            E = o.exec(e);
                        }
                        return r().createElement(a.z, { text: _, classMix: t, binding: m });
                    });
            },
            8933: (e, u, t) => {
                'use strict';
                let n, r;
                (t(2862).E4.Vehicles,
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Colored = 'colored'), (e.White = 'white'), (e.WhiteSpanish = 'whiteSpanish'));
                    })(r || (r = {})));
            },
            7351: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t.n(n),
                    a = t(6483),
                    s = t.n(a),
                    o = t(7613),
                    i = t(8089),
                    l = t(2056),
                    c = t(122),
                    m = t(7727),
                    E = t(3403),
                    _ = t(9417),
                    d = t(3215),
                    A = t(4598),
                    F = t(5175),
                    g = t(3946),
                    D = t(4538);
                const p = (0, d.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    selectedUsers: e.array('selectedUsers'),
                                    progression: e.object('progression'),
                                    progressionLevels: e.array('progression.levels'),
                                    infinityRewards: e.array('progression.infinityRewards'),
                                },
                                t = (0, g.Om)(() => (0, F.c)(u.selectedUsers.get()), { equals: A.jv }),
                                n = (0, g.Om)(() => (0, F.c)(u.infinityRewards.get()).map((e) => (0, D.lW)(e)), {
                                    equals: A.jv,
                                }),
                                r = (0, g.Om)(
                                    () =>
                                        (0, F.c)(u.progressionLevels.get()).map((e) =>
                                            Object.assign({}, e, { rewards: [...e.rewards.map((e) => (0, D.lW)(e))] }),
                                        ),
                                    { equals: A.jv },
                                ),
                                a = (0, g.Om)(
                                    () => {
                                        var e;
                                        const u = r();
                                        return null == (e = u[u.length - 1]) ? void 0 : e.maxPoints;
                                    },
                                    { equals: A.jv },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getSelectedUsers: t,
                                    getInfinityRewards: n,
                                    getProgressLevels: r,
                                    getLevelByNumber: (e) => r().find((u) => (null == u ? void 0 : u.number) === e),
                                    getProgressionMaxPoints: a,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onPhraseChange: e.createCallbackNoArgs('onPhraseChange'),
                            onPlayerSelect: e.createCallbackNoArgs('onPlayerSelect'),
                            onSent: e.createCallbackNoArgs('onSent'),
                            onTasks: e.createCallbackNoArgs('onTasks'),
                            onAnimationEnded: e.createCallbackNoArgs('onAnimationEnded'),
                            onComponentDestroyed: e.createCallbackNoArgs('onComponentDestroyed'),
                        }),
                    ),
                    B = p[0],
                    C = p[1],
                    h = [
                        'width',
                        'height',
                        'getImageSource',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'lastFrameIndex',
                        'loop',
                        'state',
                        'onAnimationDone',
                        'onAnimationComplete',
                        'poster',
                    ];
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const b = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            a = e.getImageSource,
                            s = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            m = void 0 === c ? 0 : c,
                            E = e.lastFrameIndex,
                            _ = void 0 === E ? s - 1 : E,
                            d = e.loop,
                            A = void 0 === d || d,
                            F = e.state,
                            g = void 0 === F ? 'play' : F,
                            D = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            B = e.poster,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, h);
                        const b = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = b.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = w(m, _, a),
                                                u = v(m, _),
                                                n = window.setInterval(() => {
                                                    const r = u(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == o || o(r, a),
                                                          t(a),
                                                          r === _ &&
                                                              (null == p || p(),
                                                              A || (null == D || D(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === m && B ? { path: B, x: 0, y: 0 } : a(m),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(S(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, a, m, _, A, o, p, D, B, g]),
                            r().createElement('canvas', f({}, C, { width: u, height: t, ref: b }))
                        );
                    }),
                    v = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    S = (e, u) => Object.assign({}, e, { img: u }),
                    w = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, S(e, u));
                            else {
                                const u = new Image();
                                ((r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, S(e, u)));
                            }
                        }
                        return n;
                    },
                    y = {
                        base: 'AnimatedLootbox_base_2c',
                        base__blink: 'AnimatedLootbox_base__blink_e1',
                        lootboxSequence: 'AnimatedLootbox_lootboxSequence_e9',
                        lootboxSequence__hidden: 'AnimatedLootbox_lootboxSequence__hidden_2f',
                    },
                    x =
                        ((0, n.memo)(
                            ({
                                lootboxSequenceState: e,
                                setLootboxSequenceState: u,
                                isBlinkAnimation: t,
                                setIsBlinkAnimation: a,
                            }) => (
                                (0, n.useEffect)(
                                    () =>
                                        (0, c.F)(() => {
                                            (u(D.wO.PLAY), (0, m.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                        }, 200),
                                    [u],
                                ),
                                (0, n.useEffect)(() => {
                                    if (e === D.wO.STOP)
                                        return (0, c.F)(() => {
                                            (u(D.wO.PLAY), (0, m.G)('hangar_h15_bday_tank_mail_anim_drop'));
                                        }, 2e3);
                                }, [e, u]),
                                (0, n.useEffect)(() => {
                                    if (t)
                                        return (
                                            (0, m.G)('hangar_h15_bday_tank_mail_anim_send'),
                                            (0, c.F)(() => {
                                                (u(D.wO.STOP), a(!1));
                                            }, 1500)
                                        );
                                }, [t, a, u]),
                                (0, n.useEffect)(() => {
                                    e === D.wO.STOP && a(!1);
                                }, [e, a]),
                                r().createElement(
                                    'div',
                                    { className: s()(y.base, e === D.wO.PLAY && y.base__visible, t && y.base__blink) },
                                    r().createElement(b, {
                                        width: D.FE.width,
                                        height: D.FE.height,
                                        frameCount: D.FE.frameCount,
                                        getImageSource: D.sq,
                                        state: e,
                                        loop: !1,
                                        className: s()(y.lootboxSequence, e === D.wO.STOP && y.lootboxSequence__hidden),
                                    }),
                                )
                            ),
                        ),
                        {
                            base: 'App_base_4a',
                            fadeIn: 'App_fadeIn_d8',
                            content: 'App_content_ea',
                            base__general_1: 'App_base__general_1_f1',
                            background: 'App_background_a5',
                            header: 'App_header_6a',
                            currencyContainer: 'App_currencyContainer_a6',
                            base__mail_1: 'App_base__mail_1_a0',
                            base__mail_2: 'App_base__mail_2_d3',
                            currencyText: 'App_currencyText_7b',
                            buttonText: 'App_buttonText_17',
                            buttonTextIcon: 'App_buttonTextIcon_b7',
                            currencyCountText: 'App_currencyCountText_5a',
                            currencyPostStampIcon: 'App_currencyPostStampIcon_2e',
                            giftContainer: 'App_giftContainer_b8',
                            giftContainer__center: 'App_giftContainer__center_53',
                            phraseContainer: 'App_phraseContainer_fa',
                            progressionContainer: 'App_progressionContainer_79',
                            giftSender: 'App_giftSender_9e',
                            conditionListContainer: 'App_conditionListContainer_80',
                            fadeOut: 'App_fadeOut_92',
                        }),
                    P = R.strings.mt_birthday.mail.errorPostScreen,
                    T = (0, n.memo)(() =>
                        r().createElement(
                            'div',
                            { className: 'ErrorPostScreen_base_e9' },
                            r().createElement('div', { className: 'ErrorPostScreen_icon_e4' }),
                            r().createElement(o.ZP, {
                                text: P.title(),
                                format: { classMix: 'ErrorPostScreen_title_d3' },
                            }),
                            r().createElement(o.ZP, {
                                text: P.subTitle(),
                                format: { classMix: 'ErrorPostScreen_subTitle_89' },
                            }),
                        ),
                    );
                var N = t(7260);
                const M = {
                        base: 'ConditionList_base_a8',
                        condition: 'ConditionList_condition_5c',
                        dayLimit: 'ConditionList_dayLimit_0c',
                        rewards: 'ConditionList_rewards_8a',
                        bonusChance: 'ConditionList_bonusChance_7c',
                        textCondition: 'ConditionList_textCondition_3c',
                    },
                    L = R.strings.mt_birthday.mail,
                    k = ['dayLimit', 'rewards', 'bonusChance'],
                    O = (0, n.memo)(() =>
                        r().createElement(
                            'div',
                            { className: M.base },
                            k.map((e, u) =>
                                r().createElement(
                                    'div',
                                    { key: `${u}_${e}`, className: M.condition },
                                    r().createElement('div', { className: M[e] }),
                                    r().createElement(N.B, { text: L.condition.$dyn(e), classMix: M.textCondition }),
                                ),
                            ),
                        ),
                    ),
                    I = 'GiftSentForm_stepContainer_47',
                    U = 'GiftSentForm_title_f7',
                    H = 'Phrase_contentContainer_41',
                    G = 'Phrase_phraseText_d5',
                    $ = 'Phrase_refreshContainer_8d',
                    W = 'Phrase_refreshIcon_1f',
                    Z = 'Phrase_refreshText_26';
                var z = t(3457);
                const j = R.strings.mt_birthday.mail,
                    q = (0, n.memo)(({ sentCost: e, isSentError: u, isLoading: t, disabled: n = !1, onSent: a }) =>
                        r().createElement(
                            'div',
                            { className: 'SentButton_base_7c' },
                            r().createElement(
                                z.u5,
                                { onClick: a, mixClass: 'SentButton_sentButton_b0', disabled: n },
                                t
                                    ? r().createElement('div', { className: 'SentButton_loader_73' })
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(o.ZP, {
                                              text: e ? j.sentButton() : j.zeroSentButton(),
                                              format: {
                                                  classMix: 'SentButton_sentButtonText_03',
                                                  binding: { sentCost: e },
                                              },
                                          }),
                                          r().createElement('div', { className: 'SentButton_postStampIcon_6c' }),
                                      ),
                            ),
                            u &&
                                r().createElement(
                                    'div',
                                    { className: 'SentButton_sentError_33' },
                                    r().createElement('div', { className: 'SentButton_errorIcon_ce' }),
                                    r().createElement(o.ZP, {
                                        text: j.sentError(),
                                        format: { classMix: 'SentButton_sentErrorText_e7' },
                                    }),
                                ),
                        ),
                    ),
                    X = R.strings.mt_birthday.mail.selectPhrase,
                    Y = R.strings.player_phrases.player,
                    V = (0, n.memo)(
                        ({
                            phraseID: e,
                            disabled: u = !1,
                            onRefresh: t,
                            sentCost: a,
                            isSentError: i,
                            isLoading: l,
                            onSent: E,
                        }) => {
                            const _ = (0, n.useState)(!1),
                                d = _[0],
                                A = _[1],
                                F = (0, n.useState)(e),
                                g = F[0],
                                D = F[1],
                                p = (0, n.useState)(NaN),
                                B = p[0],
                                C = p[1],
                                h = (0, n.useCallback)(() => {
                                    ((0, m.G)('mt_bday_2026_post_change'), t());
                                }, [t]);
                            return (
                                (0, n.useEffect)(() => {
                                    if (d)
                                        return (0, c.F)(() => {
                                            A(!1);
                                        }, 500);
                                }, [d]),
                                (0, n.useEffect)(() => {
                                    (g !== e && (C(g), A(!0)), D(e));
                                }, [e, g]),
                                r().createElement(
                                    'div',
                                    { className: s()('Phrase_base_85', l && 'Phrase_base__disabled_17') },
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Phrase_phraseContainer_f6',
                                                d && 'Phrase_phraseContainer__show_9a',
                                            ),
                                            onClick: d ? void 0 : h,
                                            onMouseEnter: () => {
                                                m.$.playHighlight();
                                            },
                                        },
                                        l && r().createElement('div', { className: 'Phrase_disabledBg_ad' }),
                                        r().createElement(
                                            'div',
                                            { className: H },
                                            r().createElement(o.ZP, { text: Y.$dyn(`c_${g}`), className: G }),
                                            r().createElement(
                                                'div',
                                                { className: $ },
                                                r().createElement('div', { className: W }),
                                                r().createElement(o.ZP, { className: Z, text: X.refreshButton() }),
                                            ),
                                        ),
                                    ),
                                    d &&
                                        r().createElement(
                                            'div',
                                            { className: 'Phrase_prevPhraseContainer_28' },
                                            r().createElement(
                                                'div',
                                                { className: H },
                                                r().createElement(o.ZP, { text: Y.$dyn(`c_${B}`), className: G }),
                                                r().createElement(
                                                    'div',
                                                    { className: $ },
                                                    r().createElement('div', { className: W }),
                                                    r().createElement(o.ZP, { className: Z, text: X.refreshButton() }),
                                                ),
                                            ),
                                        ),
                                    r().createElement(q, {
                                        sentCost: a,
                                        isSentError: i,
                                        disabled: u,
                                        isLoading: l,
                                        onSent: E,
                                    }),
                                )
                            );
                        },
                    ),
                    K = {
                        base: 'PlayerCard_base_8b',
                        playerContainer: 'PlayerCard_playerContainer_82',
                        playerNickname: 'PlayerCard_playerNickname_34',
                        playerNameText: 'PlayerCard_playerNameText_36',
                        playerClanText: 'PlayerCard_playerClanText_2b',
                        online: 'PlayerCard_online_9a',
                        offline: 'PlayerCard_offline_6b',
                        inBattle: 'PlayerCard_inBattle_d4',
                        base__disabled: 'PlayerCard_base__disabled_db',
                        sentResponseIcon: 'PlayerCard_sentResponseIcon_87',
                        sentResponseBg: 'PlayerCard_sentResponseBg_79',
                    },
                    Q = (0, n.memo)(({ player: e, className: u }) => {
                        const t = e.userNickName,
                            a = e.clanTag,
                            i = e.isWaitResponse,
                            l = e.playerOnlineStatus,
                            c = (0, n.useMemo)(() => s()(K.base, i && K.base__sent, u), [u, i]),
                            m = a ? `[${a}]` : '';
                        return r().createElement(
                            'div',
                            { className: c },
                            r().createElement('div', { className: K[l.status] }),
                            r().createElement(
                                'div',
                                { className: K.playerContainer },
                                r().createElement(
                                    'div',
                                    { className: K.playerNickname },
                                    r().createElement(o.ZP, { className: K.playerNameText, text: t }),
                                    r().createElement(o.ZP, { className: K.playerClanText, text: m }),
                                ),
                            ),
                            i &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: K.sentResponseIcon }),
                                    r().createElement('div', { className: K.sentResponseBg }),
                                ),
                        );
                    }),
                    J = {
                        base: 'SelectPlayers_base_13',
                        base__active: 'SelectPlayers_base__active_cb',
                        base__disabled: 'SelectPlayers_base__disabled_31',
                        base__allSpace: 'SelectPlayers_base__allSpace_2a',
                        emptyBg: 'SelectPlayers_emptyBg_ba',
                        disabledBg: 'SelectPlayers_disabledBg_95',
                        list: 'SelectPlayers_list_ce',
                        freeContainer: 'SelectPlayers_freeContainer_4a',
                        clickText: 'SelectPlayers_clickText_e9',
                        playerIcon: 'SelectPlayers_playerIcon_58',
                        subTitle: 'SelectPlayers_subTitle_f9',
                        description: 'SelectPlayers_description_29',
                    },
                    ee = R.strings.mt_birthday.mail.selectPlayers,
                    ue = (0, n.memo)(
                        ({ selectedUsers: e, selectedUsersCount: u = 0, disabled: t = !1, onClick: a }) => {
                            const i = !u,
                                l = s()(J.base, J.base__active, !i && J.base__allSpace, t && J.base__disabled),
                                c = u >= 5,
                                E = (0, n.useCallback)(() => {
                                    m.$.playHighlight();
                                }, []),
                                _ = (0, n.useCallback)(() => {
                                    (m.$.playClick(), a());
                                }, [a]);
                            return r().createElement(
                                'div',
                                { className: l, onClick: _, onMouseEnter: E },
                                t && r().createElement('div', { className: J.disabledBg }),
                                i
                                    ? r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              'div',
                                              { className: J.clickText },
                                              r().createElement('div', { className: J.playerIcon }),
                                              r().createElement(o.ZP, { text: ee.subTitle(), className: J.subTitle }),
                                          ),
                                          r().createElement(o.ZP, { text: ee.description(), className: J.description }),
                                      )
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(
                                              'div',
                                              { className: s()(J.list) },
                                              e.map((e) =>
                                                  r().createElement(Q, {
                                                      player: e,
                                                      className: J.playerCard,
                                                      key: e.userID,
                                                  }),
                                              ),
                                          ),
                                          !c &&
                                              r().createElement(
                                                  'div',
                                                  { className: J.freeContainer },
                                                  r().createElement(o.ZP, {
                                                      text: ee.description(),
                                                      className: J.description,
                                                  }),
                                              ),
                                      ),
                            );
                        },
                    ),
                    te = R.strings.mt_birthday.mail.title,
                    ne = (0, n.memo)(
                        ({
                            selectedUsers: e,
                            selectedUsersCount: u,
                            isSending: t,
                            phraseID: n,
                            sentCost: a,
                            isSentError: s,
                            isDisabledSentButton: i,
                            onPlayerSelect: l,
                            onPhraseChange: c,
                            onSent: m,
                        }) =>
                            r().createElement(
                                'div',
                                { className: 'GiftSentForm_base_5e' },
                                r().createElement(
                                    'div',
                                    { className: I },
                                    r().createElement(o.ZP, { text: te.condition(), className: U }),
                                    r().createElement(O, null),
                                ),
                                r().createElement(
                                    'div',
                                    { className: I },
                                    r().createElement(o.ZP, { text: te.selectPlayers(), className: U }),
                                    r().createElement(ue, {
                                        selectedUsers: e,
                                        selectedUsersCount: u,
                                        disabled: t,
                                        onClick: l,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: I },
                                    r().createElement(o.ZP, { text: te.selectPhrase(), className: U }),
                                    r().createElement(V, {
                                        phraseID: n,
                                        onRefresh: c,
                                        disabled: t || i,
                                        sentCost: a,
                                        isSentError: s,
                                        isLoading: t,
                                        onSent: m,
                                    }),
                                ),
                            ),
                    );
                var re = t(2862),
                    ae = t(5739),
                    se = t(794),
                    oe = t(6358),
                    ie = t(3138);
                const le = { type: 'idle' };
                var ce = t(5415),
                    me = t(9630),
                    Ee = t(7515),
                    _e = t(6128),
                    de = t(3724),
                    Ae = t(4553);
                var Fe = t(6840);
                const ge = ['api', 'value', 'maxValue', 'theme'];
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const pe = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    Be = (e) => {
                        let u = e.api,
                            t = e.value,
                            a = e.maxValue,
                            o = void 0 === a ? 100 : a,
                            i = e.theme,
                            l = void 0 === i ? _e.uH : i,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ge);
                        const m = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            _ = (0, n.useRef)(null),
                            d = (0, Ee.u)(0, t, o) / o,
                            A = (0, n.useCallback)(
                                (e) => {
                                    (_.current &&
                                        m.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, n) => {
                                            const r = t.offsetWidth - n.offsetWidth,
                                                a = e - pe(t, u),
                                                s = (0, Ee.u)(0, r, a);
                                            n.style.left = `${s}rem`;
                                        })(e, m.current, _.current),
                                        E.current &&
                                            m.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: n, line: r },
                                            ) => {
                                                const a = Math.max(0, Math.floor(n.offsetWidth * t) - 8e4),
                                                    s = e - pe(n, u),
                                                    o = (0, Ee.u)(0, a, s);
                                                r.style.left = `${o}rem`;
                                            })(e, d, { line: E.current, container: m.current }));
                                },
                                [d],
                            ),
                            F = (0, n.useMemo)(() => (0, Ae.VQ)(l), [l]);
                        return (
                            (u.current.update = A),
                            r().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_f7', ref: m },
                                r().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_4d' },
                                    r().createElement(
                                        'div',
                                        {
                                            style: F,
                                            className: s()(
                                                'OptimizedProgressBar_background_dc',
                                                c.progressBarBackgroundClassMix,
                                            ),
                                            ref: _,
                                        },
                                        r().createElement(de.J, {
                                            size: c.size,
                                            classMix: c.progressBarBackgroundClassMix,
                                        }),
                                    ),
                                    r().createElement(
                                        _e.ko,
                                        De({}, c, {
                                            lineRef: E,
                                            value: t,
                                            theme: l,
                                            maxValue: o,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    };
                var Ce = t(4489);
                const he = {
                        [ce.cJ.ExtraSmall]: {
                            width: 600,
                            pointsDistance: 188,
                            pointIndent: 94,
                            pointIndentLast: 50,
                            progressionIndent: 15,
                            infinityDistance: 400,
                            infinityProgressionLeftGap: 24,
                        },
                        [ce.cJ.Small]: {
                            width: 875,
                            pointsDistance: 188,
                            pointIndent: 94,
                            pointIndentLast: 100,
                            progressionIndent: 15,
                            infinityDistance: 400,
                            infinityProgressionLeftGap: 24,
                        },
                        [ce.cJ.Medium]: {
                            width: 910,
                            pointsDistance: 284,
                            pointIndent: 142,
                            pointIndentLast: 300,
                            progressionIndent: 15,
                            infinityDistance: 600,
                            infinityProgressionLeftGap: 32,
                        },
                        [ce.cJ.Large]: {
                            width: 1130,
                            pointsDistance: 304,
                            pointIndent: 152,
                            pointIndentLast: 360,
                            progressionIndent: 60,
                            infinityDistance: 720,
                            infinityProgressionLeftGap: 40,
                        },
                        [ce.cJ.ExtraLarge]: {
                            width: 1630,
                            pointsDistance: 320,
                            pointIndent: 160,
                            pointIndentLast: 360,
                            progressionIndent: 60,
                            infinityDistance: 880,
                            infinityProgressionLeftGap: 64,
                        },
                    },
                    fe = Object.assign({}, _e.uu, {
                        withStack: !0,
                        type: Fe.r.Growing,
                        delta: { duration: 400, delay: 300 },
                        line: { duration: 400, delay: 300 },
                    }),
                    be = (e, u) => (u < 0 ? 0 : e[u].maxPoints),
                    ve = (e, u, t) => {
                        let n = 0;
                        const r = be(t, u - 2),
                            a = be(t, t.length - 1) / t.length;
                        return (
                            t.forEach((t, s) => {
                                s < u &&
                                    (n += ((e, u, t, n) => (e >= u ? n : (n / (u - t)) * (e - t)))(
                                        e,
                                        t.maxPoints,
                                        r,
                                        a,
                                    ));
                            }),
                            n
                        );
                    },
                    Se = 'InfinityLevel_line_a7',
                    we = 'InfinityLevel_secondaryPointsCount_1a';
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const xe = (0, n.memo)(
                        ({
                            currentLevel: e,
                            isMainProgressCompleted: u,
                            marginInfinity: t,
                            infinityProgressPoints: a,
                            infinityProgressDeltaFrom: i,
                            infinityProgressMaxPointsCount: l,
                            infinitySubStagesCount: c,
                            infinityRewards: m,
                        }) => {
                            const E = (0, ce.GS)().mediaSize,
                                _ = (0, n.useRef)({ update: () => {} }),
                                d = E < ce.cJ.Medium ? re.h2.Small : re.h2.Big,
                                A = he[E].infinityDistance;
                            return r().createElement(
                                'div',
                                { className: 'InfinityLevel_base_a1' },
                                r().createElement(
                                    'div',
                                    {
                                        className: 'InfinityLevel_infinityContainer_0b',
                                        style: { width: `${A}rem`, marginRight: `${t}rem` },
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'InfinityLevel_point_80',
                                                u && 'InfinityLevel_point__active_c0',
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'InfinityLevel_label_bb' },
                                            r().createElement('div', { className: 'InfinityLevel_infinityIcon_df' }),
                                        ),
                                        r().createElement(o.ZP, {
                                            text: String(l - c),
                                            className: s()(we, 'InfinityLevel_secondaryPointsCount__isZero_d0'),
                                        }),
                                        r().createElement(o.ZP, { text: String(l), className: we }),
                                        r().createElement(
                                            'div',
                                            { className: 'InfinityLevel_rewardsContainer_d7' },
                                            r().createElement('div', {
                                                className: s()(Se, 'InfinityLevel_line__top_f8'),
                                            }),
                                            r().createElement('div', {
                                                className: s()(Se, 'InfinityLevel_line__bottom_96'),
                                            }),
                                            r().createElement('div', {
                                                className: s()(Se, 'InfinityLevel_line__topRight_50'),
                                            }),
                                            r().createElement('div', {
                                                className: s()(Se, 'InfinityLevel_line__bottomRight_1e'),
                                            }),
                                            r().createElement(
                                                'div',
                                                { className: 'InfinityLevel_rewardsBlock_b5' },
                                                m.map((u, t) =>
                                                    r().createElement(
                                                        'div',
                                                        {
                                                            key: `${u.icon}_${t}_${e}`,
                                                            className: s()(
                                                                'InfinityLevel_reward_f2',
                                                                t === m.length - 1 && 'InfinityLevel_reward__last_20',
                                                            ),
                                                        },
                                                        r().createElement(
                                                            ae.Q,
                                                            ye({}, u, { image: u.image(d), size: d }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'InfinityLevel_progressBarContainer_c0' },
                                        r().createElement(Be, {
                                            animationSettings: fe,
                                            value: a,
                                            deltaFrom: i,
                                            maxValue: l,
                                            api: _,
                                            disabled: !u,
                                            isNeverComplete: !0,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Pe = 'Progression_line_57',
                    Te = 'Progression_secondaryPointsCount_56';
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Ne = (0, n.memo)(
                        ({
                            currentLevel: e,
                            levels: u,
                            points: t,
                            deltaFrom: a,
                            infinityProgressPoints: i,
                            infinityProgressDeltaFrom: l,
                            infinityProgressMaxPointsCount: E,
                            infinitySubStagesCount: _,
                            infinityRewards: d,
                            onAnimationEnded: A,
                        }) => {
                            const F = (0, ce.GS)().mediaSize,
                                g = (() => {
                                    const e = (0, n.useState)(ie.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = () => {
                                                t(ie.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })(),
                                D = (0, n.useRef)({ update: () => {} }),
                                p = u[u.length - 1],
                                B = null == p ? void 0 : p.number,
                                C = (0, n.useState)(e > B),
                                h = C[0],
                                f = C[1],
                                b = (0, n.useState)(e > B),
                                v = b[0],
                                S = b[1],
                                w = (0, n.useState)(!1),
                                y = w[0],
                                x = w[1],
                                P = (0, n.useState)(0),
                                T = P[0],
                                R = P[1],
                                N = null == p ? void 0 : p.maxPoints,
                                M = F < ce.cJ.Medium ? re.h2.Small : re.h2.Big,
                                L = he[F].pointsDistance,
                                k = L * B;
                            ((0, n.useEffect)(() => {
                                if (t >= N)
                                    return (0, c.F)(() => {
                                        f(!0);
                                    }, Le);
                            }, [t, N]),
                                (0, n.useEffect)(() => {
                                    if (h)
                                        return (0, c.F)(() => {
                                            S(!0);
                                        }, 1e3);
                                }, [h]));
                            const O = (0, oe.T5)(),
                                I = (0, O.getWrapperSize)();
                            ((0, n.useEffect)(() => {
                                if (h) {
                                    if (i !== l)
                                        return (0, c.F)(() => {
                                            A();
                                        }, 1500);
                                } else if (t !== a)
                                    return (0, c.F)(() => {
                                        A();
                                    }, 1500);
                            }, [a, l, i, h, A, t]),
                                (0, n.useEffect)(() => {
                                    t > a && (0, m.G)('bp_progress_bar_start');
                                }, [a, t]));
                            const U = (0, n.useCallback)(() => {
                                (x(!0),
                                    (0, c.F)(() => {
                                        x(!1);
                                        const e = (I || 0) / g,
                                            u = he[F].infinityDistance,
                                            t = F === ce.cJ.ExtraSmall ? 90 : 0;
                                        R(e ? (e - u + 10 - t) / 2 : u);
                                    }, 0));
                            }, [I, g, F]);
                            ((0, n.useEffect)(() => {
                                U();
                            }, [I, F, U]),
                                (0, me.t)(() => {
                                    U();
                                }, [I, F]),
                                (function (e, u, t) {
                                    const r = e.contentRef,
                                        a = e.wrapperRef,
                                        s = e.scrollPosition,
                                        o = e.clampPosition,
                                        i = e.animationScroll,
                                        l = e.events,
                                        c = (0, n.useState)(le),
                                        m = c[0],
                                        E = c[1];
                                    ((0, n.useEffect)(() => {
                                        const e = r.current;
                                        e && (e.style.cursor = 'dragging' === m.type ? 'move' : 'grab');
                                    }, [r, m.type]),
                                        (0, n.useEffect)(() => {
                                            if ('dragging' !== m.type) return;
                                            const e = ie.O.client.events.mouse.move(([e, t]) => {
                                                    const n = r.current,
                                                        l = a.current;
                                                    if (!n || !l) return;
                                                    if ('inside' === t && e.clientX < 0) return;
                                                    const c = 'inside' === t ? e.clientX : e.clientX - l.offsetLeft,
                                                        E = m.positionFrom - c,
                                                        _ = m.previousScrollPosition + E;
                                                    s.start(
                                                        Object.assign(
                                                            {
                                                                scrollPosition: o(n, _),
                                                                from: { scrollPosition: i.scrollPosition.get() },
                                                            },
                                                            u,
                                                        ),
                                                    );
                                                }),
                                                t = ie.O.client.events.mouse.up(function () {
                                                    E({ type: 'scrollingToEnd' });
                                                });
                                            return () => {
                                                (e(), t());
                                            };
                                        }, [i.scrollPosition, o, r, m, s, a, u]),
                                        (0, n.useEffect)(() => {
                                            if ('scrollingToEnd' !== m.type) return;
                                            const e = () => {
                                                E(le);
                                            };
                                            return (
                                                i.scrollPosition.idle && e(),
                                                l.on('rest', e),
                                                () => l.off('rest', e)
                                            );
                                        }, [i.scrollPosition, m.type, l]),
                                        (0, n.useEffect)(() => {
                                            const e = r.current;
                                            if (!e) return;
                                            const u = (e) => {
                                                E({
                                                    type: 'dragging',
                                                    positionFrom: e.screenX,
                                                    previousScrollPosition: i.scrollPosition.get(),
                                                });
                                            };
                                            return (
                                                e.addEventListener('mousedown', u),
                                                () => e.removeEventListener('mousedown', u)
                                            );
                                        }, [i.scrollPosition, r, t]));
                                })(Object.assign({}, O)),
                                (0, n.useEffect)(() => {
                                    const u = ((I || 0) / g - 10) / 2,
                                        t = e * L - he[F].pointIndent - u,
                                        n = h ? k + T : t || 0;
                                    return (0, c.F)(() => {
                                        O.applyScroll(n * g);
                                    }, 0);
                                }, [I, g, O, h, k, F, e, L, T]));
                            const H = ((e, u, t, r) => {
                                    const a = (0, n.useState)(0),
                                        s = a[0],
                                        o = a[1],
                                        i = (0, n.useState)(60),
                                        l = i[0],
                                        c = i[1],
                                        m = parseFloat((40 / u).toFixed(1)),
                                        E = parseFloat((40 / t).toFixed(3)),
                                        _ = (0, Ce.f)(
                                            (e) => {
                                                const t = parseFloat((e * m).toFixed(1));
                                                e <= u && s !== t && o(t);
                                                const n = 60 + parseFloat(((e - r) * E).toFixed(1));
                                                e > r && l !== n && c(n);
                                            },
                                            [s, l],
                                            150,
                                        );
                                    return (
                                        (0, n.useEffect)(() => {
                                            const u = () => {
                                                const u = parseFloat(e.animationScroll.scrollPosition.get().toFixed(1));
                                                _(u);
                                            };
                                            return (
                                                e.events.on('recalculateContent', u),
                                                e.events.on('change', u),
                                                () => {
                                                    (e.events.off('recalculateContent', u), e.events.off('change', u));
                                                }
                                            );
                                        }, [e, e.scrollPosition, _]),
                                        [s, l]
                                    );
                                })(O, he[F].pointsDistance, T, k - T - he[F].infinityDistance),
                                G = H[0],
                                $ = H[1];
                            return r().createElement(
                                'div',
                                {
                                    className: 'Progression_base_99',
                                    style: {
                                        maskImage: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000 ${G}%, #000 ${$}%, rgba(0, 0, 0, 0) 100%)`,
                                    },
                                },
                                r().createElement(
                                    se.X.Horizontal.Area.Default,
                                    {
                                        api: Object.assign({}, O, { handleMouseWheel: O.handleMouseWheel }),
                                        className: 'Progression_container_4b',
                                        classNames: {
                                            content: 'Progression_scrollContent_28',
                                            wrapper: 'Progression_scrollWrapper_25',
                                        },
                                        barClassNames: { base: 'Progression_scrollBar_ac' },
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Progression_progressLineContainer_c4',
                                                (v || y) && 'Progression_progressLineContainer__completed_09',
                                            ),
                                            style: { width: `${k}rem` },
                                        },
                                        u.map((u, t) => {
                                            const n = (null == u ? void 0 : u.number) === e && !h,
                                                a = (null == u ? void 0 : u.number) - 1 === e && !h,
                                                i = (null == u ? void 0 : u.number) < e || h,
                                                l = p.number - 1 === t;
                                            return r().createElement(
                                                'div',
                                                {
                                                    key: `${null == u ? void 0 : u.number}_${t}`,
                                                    className: s()(
                                                        'Progression_point_e1',
                                                        n && 'Progression_point__active_0f',
                                                        i && 'Progression_point__complete_a1',
                                                    ),
                                                    style: { width: `${L}rem`, transform: `translateX(${t * L}rem)` },
                                                },
                                                r().createElement(o.ZP, {
                                                    className: 'Progression_label_9e',
                                                    text: String(null == u ? void 0 : u.number),
                                                }),
                                                !t &&
                                                    r().createElement(o.ZP, {
                                                        text: String(u.maxPoints - u.substagesCount),
                                                        className: s()(
                                                            Te,
                                                            'Progression_secondaryPointsCount__isZero_03',
                                                        ),
                                                    }),
                                                r().createElement(o.ZP, { text: String(u.maxPoints), className: Te }),
                                                r().createElement(
                                                    'div',
                                                    { className: 'Progression_rewardsContainer_b7' },
                                                    !a &&
                                                        r().createElement(
                                                            r().Fragment,
                                                            null,
                                                            r().createElement('div', {
                                                                className: s()(Pe, 'Progression_line__top_f9'),
                                                            }),
                                                            r().createElement('div', {
                                                                className: s()(Pe, 'Progression_line__bottom_fc'),
                                                            }),
                                                        ),
                                                    (l || n) &&
                                                        r().createElement(
                                                            r().Fragment,
                                                            null,
                                                            r().createElement('div', {
                                                                className: s()(Pe, 'Progression_line__topRight_26'),
                                                            }),
                                                            r().createElement('div', {
                                                                className: s()(Pe, 'Progression_line__bottomRight_79'),
                                                            }),
                                                        ),
                                                    r().createElement(
                                                        'div',
                                                        { className: 'Progression_rewardsBlock_4d' },
                                                        u.rewards.map((t, n) =>
                                                            r().createElement(
                                                                'div',
                                                                {
                                                                    key: `${t.icon}_${n}_${e}`,
                                                                    className: s()(
                                                                        'Progression_reward_10',
                                                                        n === u.rewards.length - 1 &&
                                                                            'Progression_reward__last_0c',
                                                                    ),
                                                                },
                                                                r().createElement(
                                                                    ae.Q,
                                                                    Re({}, t, { image: t.image(M), size: M }),
                                                                ),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            );
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'Progression_progressBarContainer_44' },
                                            r().createElement(Be, {
                                                animationSettings: fe,
                                                value: ve(t, e, u),
                                                deltaFrom: ve(a, e, u),
                                                maxValue: N,
                                                api: D,
                                            }),
                                        ),
                                    ),
                                    r().createElement(xe, {
                                        currentLevel: e,
                                        isMainProgressCompleted: h,
                                        marginInfinity: T,
                                        infinityProgressPoints: i,
                                        infinityProgressDeltaFrom: l,
                                        infinityProgressMaxPointsCount: E,
                                        infinitySubStagesCount: _,
                                        infinityRewards: d,
                                    }),
                                ),
                            );
                        },
                    ),
                    Me = R.strings.mt_birthday.mail,
                    Le = 1500,
                    ke = (0, E.Pi)(({ currentTipName: e, handleGiftSent: u }) => {
                        const t = C(),
                            a = t.controls,
                            E = t.model,
                            d = E.root.get(),
                            A = d.currencyCount,
                            F = d.isSentError,
                            g = d.isSending,
                            D = d.phraseID,
                            p = d.isPostError,
                            B = E.progression.get(),
                            h = B.currentLevel,
                            f = B.currentPoints,
                            b = B.pointsDeltaFrom,
                            v = B.infinityStartPoints,
                            S = B.infinityMaxPoints,
                            w = B.infinitySubstagesCount,
                            y = B.infinityDeltaFrom,
                            P = E.computes.getSelectedUsers(),
                            N = E.computes.getInfinityRewards(),
                            M = P.length ? 1 * P.length : 1,
                            L = A ? M : A,
                            k = P.length,
                            O = E.computes.getProgressLevels(),
                            I = (0, n.useState)(!1),
                            U = I[0],
                            H = I[1],
                            G = (0, n.useState)(!1),
                            $ = G[0],
                            W = G[1],
                            Z = !P.length || L > A || !A || g,
                            z = y === f ? f - v : y - v,
                            j = (0, n.useCallback)(() => {
                                (a.onSent(), H(!0), u(), (0, m.G)('mt_bday_2026_post_send'));
                            }, [a, u]);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    (0, c.F)(() => {
                                        U && W(!0);
                                    }, 1500),
                                [A, U],
                            ),
                            (0, n.useEffect)(
                                () =>
                                    (0, c.F)(() => {
                                        $ && (W(!1), H(!1));
                                    }, 500),
                                [$],
                            ),
                            (0, n.useEffect)(
                                () => (
                                    (0, m.G)('mt_bday_2026_post_enter'),
                                    () => {
                                        a.onComponentDestroyed();
                                    }
                                ),
                                [],
                            ),
                            r().createElement(
                                'div',
                                { className: s()(x.base, e && x[`base__${e}`]) },
                                r().createElement(
                                    'div',
                                    { className: x.content },
                                    r().createElement(
                                        'div',
                                        { className: x.header },
                                        r().createElement(_.h, { title: Me.header(), subTitle: Me.description() }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: x.currencyContainer },
                                        A
                                            ? r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  r().createElement(o.ZP, {
                                                      text: Me.currencyCount(),
                                                      className: x.currencyText,
                                                      format: {
                                                          binding: {
                                                              currencyCount: r().createElement(o.ZP, {
                                                                  text: String(A),
                                                                  className: x.currencyCountText,
                                                              }),
                                                          },
                                                      },
                                                  }),
                                                  r().createElement(
                                                      l.u,
                                                      {
                                                          contentId:
                                                              R.views.mt_birthday.lobby.tooltips.PostStampTooltip(
                                                                  'resId',
                                                              ),
                                                      },
                                                      r().createElement('div', { className: x.currencyPostStampIcon }),
                                                  ),
                                              )
                                            : r().createElement(
                                                  r().Fragment,
                                                  null,
                                                  r().createElement(o.ZP, {
                                                      text: Me.zeroCount(),
                                                      className: x.currencyText,
                                                  }),
                                                  r().createElement(i.A, {
                                                      classNames: { base: x.buttonText, icon: x.buttonTextIcon },
                                                      caption: Me.earnMore(),
                                                      type: 'back',
                                                      onClick: a.onTasks,
                                                  }),
                                              ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: x.giftContainer },
                                        p
                                            ? r().createElement(T, null)
                                            : r().createElement(ne, {
                                                  selectedUsers: P,
                                                  selectedUsersCount: k,
                                                  isSending: g,
                                                  phraseID: D,
                                                  sentCost: L,
                                                  isSentError: F,
                                                  isDisabledSentButton: Z,
                                                  onPlayerSelect: a.onPlayerSelect,
                                                  onPhraseChange: a.onPhraseChange,
                                                  onSent: j,
                                              }),
                                    ),
                                    !p &&
                                        r().createElement(
                                            'div',
                                            { className: x.progressionContainer },
                                            r().createElement(Ne, {
                                                currentLevel: h,
                                                points: f,
                                                deltaFrom: b,
                                                levels: O,
                                                infinityProgressMaxPointsCount: S - v,
                                                infinityProgressDeltaFrom: z,
                                                infinityProgressPoints: f - v,
                                                infinitySubStagesCount: w,
                                                infinityRewards: N,
                                                onAnimationEnded: a.onAnimationEnded,
                                            }),
                                        ),
                                ),
                                r().createElement('div', { className: x.background }),
                            )
                        );
                    }),
                    Oe = ['resId'];
                (0, n.memo)((e) => {
                    let u = e.resId,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Oe);
                    const a = (0, n.useMemo)(() => ({ rootId: u }), [u]);
                    return r().createElement(B, { options: a }, r().createElement(ke, t));
                });
            },
            9417: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => s });
                var n = t(7613),
                    r = t(6179),
                    a = t.n(r);
                const s = (0, r.memo)(({ title: e, subTitle: u }) =>
                    a().createElement(
                        'div',
                        { className: 'Header_base_f9' },
                        a().createElement(n.ZP, { format: { classMix: 'Header_headerTitle_c9' }, text: e }),
                        a().createElement(n.ZP, { format: { classMix: 'Header_headerDescription_c5' }, text: u }),
                    ),
                );
            },
            6128: (e, u, t) => {
                'use strict';
                t.d(u, { ko: () => I, uu: () => O, uH: () => k });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    s = t.n(a),
                    o = t(9960),
                    i = t(3724),
                    l = t(6840);
                const c = {
                        base: 'ProgressBarBlink_base_22',
                        base__medium: 'ProgressBarBlink_base__medium_0a',
                        base__small: 'ProgressBarBlink_base__small_b5',
                    },
                    m = ({ size: e }) => {
                        const u = r()(c.base, c[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    E = {
                        base: 'ProgressLineImpose_base_12',
                        base__disabled: 'ProgressLineImpose_base__disabled_82',
                        base__finished: 'ProgressLineImpose_base__finished_0f',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_e3',
                        pattern: 'ProgressLineImpose_pattern_0c',
                        base__small: 'ProgressLineImpose_base__small_7a',
                        gradient: 'ProgressLineImpose_gradient_f7',
                        glow: 'ProgressLineImpose_glow_b5',
                        glow__left: 'ProgressLineImpose_glow__left_4a',
                    },
                    _ = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: o }) => {
                            const i = r()(
                                    E.base,
                                    E[`base__${e}`],
                                    t && E.base__disabled,
                                    a && E.base__finished,
                                    o && E.base__withoutBounce,
                                ),
                                l = !t && !a;
                            return s().createElement(
                                'div',
                                { className: i, style: n, ref: u },
                                s().createElement('div', { className: E.pattern }),
                                s().createElement('div', { className: E.gradient }),
                                l && s().createElement(m, { size: e }),
                            );
                        },
                    );
                var d = t(122);
                let A, F;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(A || (A = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(F || (F = {})));
                const g = (e) => (e ? { left: 0 } : { right: 0 }),
                    D = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    p = (e) => ({ transitionDuration: `${e}ms` }),
                    B = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: o,
                            to: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: E,
                        }) => {
                            const _ = i < n,
                                F = (0, a.useState)(A.Idle),
                                B = F[0],
                                C = F[1],
                                h = B === A.End,
                                f = B === A.Idle,
                                b = B === A.Grow,
                                v = B === A.Shrink,
                                S = (0, a.useCallback)(
                                    (e) => {
                                        (C(e), c && c(e));
                                    },
                                    [c],
                                ),
                                w = (0, a.useCallback)(
                                    (e, u) =>
                                        (0, d.F)(() => {
                                            S(e);
                                        }, u),
                                    [S],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return f
                                        ? w(A.Grow, u)
                                        : b
                                          ? w(A.Shrink, e)
                                          : v
                                            ? w(A.End, e)
                                            : void (h && l && l());
                            }, [w, t, h, b, f, v, l, u, e]);
                            const y = (0, a.useMemo)(() => Object.assign({ width: '100%' }, p(e), g(_)), [_, e]),
                                x = (0, a.useMemo)(() => Object.assign({ width: '0%' }, p(e), g(_)), [_, e]),
                                P = (0, a.useMemo)(() => Object.assign({ width: '0%' }, D(_, n), p(e)), [n, _, e]),
                                T = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, D(_, n), p(e)),
                                    [n, _, i, e],
                                );
                            if (h) return null;
                            const R = r()(
                                'ProgressBarDeltaGrow_base_2a',
                                E,
                                _ && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_fd',
                            );
                            return s().createElement(
                                'div',
                                { style: f ? P : T, className: R },
                                s().createElement(
                                    'div',
                                    { style: v ? x : y, className: 'ProgressBarDeltaGrow_glow_37' },
                                    s().createElement(m, { size: o }),
                                ),
                            );
                        },
                    ),
                    C = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const m = e < t,
                                E = (0, a.useState)(!1),
                                d = E[0],
                                F = E[1],
                                g = (0, a.useCallback)(
                                    (e) => {
                                        (e === A.Shrink && F(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                D = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                p = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    withoutBounce: m && 0 === e,
                                    baseStyles: d ? p : D,
                                }),
                                t >= 0 &&
                                    s().createElement(B, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: g,
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
                    h = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                E = (0, a.useState)(F.Idle),
                                _ = E[0],
                                A = E[1],
                                g = _ === F.In,
                                D = _ === F.End,
                                p = _ === F.Idle,
                                B = (0, a.useCallback)(
                                    (e) => {
                                        (A(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (p && !t) {
                                    const e = u;
                                    return (0, d.F)(() => {
                                        B(F.In);
                                    }, e);
                                }
                            }, [B, t, p, u]),
                                (0, a.useEffect)(() => {
                                    if (g) {
                                        const t = e + u;
                                        return (0, d.F)(() => {
                                            (i && i(), B(F.End));
                                        }, t);
                                    }
                                }, [B, g, i, u, e]));
                            const C = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                h = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                f = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return D
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_81', style: f },
                                      s().createElement(
                                          'div',
                                          { style: p ? C : h, className: 'ProgressBarDeltaSimple_delta_c8' },
                                          s().createElement(m, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    f = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const m = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(_, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    baseStyles: m,
                                }),
                                t >= 0 &&
                                    s().createElement(h, {
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
                    b = ['onComplete', 'onEndAnimation'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const S = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, b);
                        const r = (0, a.useState)(!1),
                            o = r[0],
                            i = r[1],
                            c = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case l.r.Simple:
                                return s().createElement(
                                    f,
                                    v({}, n, { onEndAnimation: c, isComplete: !n.isNeverComplete && o }),
                                );
                            case l.r.Growing:
                                return s().createElement(
                                    C,
                                    v({}, n, { onEndAnimation: c, isComplete: !n.isNeverComplete && o }),
                                );
                            default:
                                return null;
                        }
                    }),
                    w = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: r, isNeverComplete: o }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            l = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                l && r && r();
                            }, [l, r]),
                            s().createElement(_, {
                                size: e,
                                disabled: n,
                                baseStyles: i,
                                isComplete: !o && l,
                                lineRef: t,
                            })
                        );
                    },
                    y = ['onEndAnimation'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const P = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, y);
                    const n = (0, a.useRef)({}),
                        r = (0, a.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        s().createElement(S, x({}, t, { onEndAnimation: r, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const R = (0, a.memo)(
                    ({
                        size: e,
                        value: u,
                        lineRef: t,
                        disabled: n,
                        deltaFrom: r,
                        animationSettings: a,
                        onEndAnimation: o,
                        onChangeAnimationState: i,
                        onComplete: l,
                        isNeverComplete: c,
                    }) => {
                        if (r === u)
                            return s().createElement(w, {
                                key: `${r}-${u}`,
                                size: e,
                                value: u,
                                lineRef: t,
                                disabled: n,
                                onComplete: l,
                                isNeverComplete: c,
                            });
                        const m = {
                            from: r,
                            to: u,
                            size: e,
                            lineRef: t,
                            disabled: n,
                            animationSettings: a,
                            onComplete: l,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            isNeverComplete: c,
                        };
                        return a.withStack ? s().createElement(P, m) : s().createElement(S, T({ key: `${r}-${u}` }, m));
                    },
                );
                var N = t(4553),
                    M = t(7515);
                const L = (e, u, t) => ('number' == typeof t ? ((0, M.u)(0, u, t) / u) * 100 : e),
                    k = N.Gh,
                    O = {
                        freezed: !1,
                        withStack: !1,
                        type: l.r.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    I = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = k,
                            size: t = l.$.Default,
                            animationSettings: n = O,
                            disabled: c = !1,
                            withoutBackground: m = !1,
                            progressBarBackgroundClassMix: E,
                            value: _,
                            deltaFrom: d,
                            lineRef: A,
                            onChangeAnimationState: F,
                            onEndAnimation: g,
                            onComplete: D,
                            isNeverComplete: p,
                        }) => {
                            const B = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const n = ((0, M.u)(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: L(n, u, t) };
                                }, [t, u, e]))(_, e, d);
                            return s().createElement(
                                'div',
                                { className: r()(o.Z.base, o.Z[`base__${t}`]), style: (0, N.VQ)(u) },
                                !m && s().createElement(i.J, { size: t, classMix: E }),
                                s().createElement(R, {
                                    size: t,
                                    lineRef: A,
                                    disabled: c,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: g,
                                    onChangeAnimationState: F,
                                    onComplete: D,
                                    isNeverComplete: p,
                                }),
                            );
                        },
                    );
            },
            3724: (e, u, t) => {
                'use strict';
                t.d(u, { J: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    s = t.n(a),
                    o = t(9960),
                    i = t(6840);
                const l = ({ size: e = i.$.Default, classMix: u }) =>
                    s().createElement('div', { className: r()(o.Z.background, o.Z[`background__${e}`], u) });
            },
            4553: (e, u, t) => {
                'use strict';
                t.d(u, { Gh: () => r, VQ: () => n });
                const n = (e) => ({
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
                    r = {
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
                    };
            },
            6840: (e, u, t) => {
                'use strict';
                let n, r;
                (t.d(u, { $: () => n, r: () => r }),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(r || (r = {})));
            },
            4538: (e, u, t) => {
                'use strict';
                t.d(u, { FE: () => d, lW: () => l, sq: () => A, wO: () => _ });
                var n = t(126),
                    r = t(2862),
                    a = t(729),
                    s = t(5415),
                    o = t(3649),
                    i = t(9990);
                t(8933);
                const l = (e) => ({
                    name: e.name,
                    image: (u) =>
                        ((e, u = r.h2.Small) => {
                            const t = (0, o.BN)(e.vehicleName || '');
                            if (e.name === r.E4.Vehicles)
                                switch (u) {
                                    case r.h2.Mini:
                                    case r.h2.Small:
                                    case r.h2.S48x48:
                                        return e.isRent
                                            ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                            : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                    case r.h2.Big:
                                    case r.h2.S80x80:
                                        return e.isRent
                                            ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                            : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                    case r.h2.S128x100:
                                    case r.h2.S180x135:
                                        return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                    case r.h2.S232x174:
                                    case r.h2.S296x222:
                                        return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                    case r.h2.S400x300:
                                    case r.h2.S600x450:
                                        return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                    default:
                                        return (
                                            console.error('Unknown vehicle image size', u, e.vehicleName),
                                            'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                        );
                                }
                            if (e.name === r.E4.TmanToken)
                                switch (u) {
                                    case r.h2.Mini:
                                    case r.h2.Small:
                                    case r.h2.S48x48:
                                    case r.h2.Big:
                                    case r.h2.S80x80:
                                        return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                    case r.h2.S128x100:
                                    case r.h2.S180x135:
                                    case r.h2.S232x174:
                                        return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                    case r.h2.S296x222:
                                        return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                    case r.h2.S400x300:
                                        return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                    case r.h2.S600x450:
                                        return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                    default:
                                        return (
                                            console.error('Unknown image size', u),
                                            'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                        );
                                }
                            if (e.name === r.E4.CollectionItem)
                                switch (u) {
                                    case r.h2.Mini:
                                    case r.h2.Small:
                                    case r.h2.S48x48:
                                        return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                    case r.h2.Big:
                                    case r.h2.S80x80:
                                        return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                    case r.h2.S128x100:
                                    case r.h2.S180x135:
                                    case r.h2.S232x174:
                                        return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                    case r.h2.S296x222:
                                        return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                    case r.h2.S400x300:
                                        return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                    case r.h2.S600x450:
                                        return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                    default:
                                        console.error('Unknown image size', u);
                                }
                            if (e.name === r.E4.StyleProgress)
                                switch (u) {
                                    case r.h2.Small:
                                    case r.h2.Big:
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.progressionStyle`;
                                    default:
                                        return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                }
                            return (0, a.ry)(e, u);
                        })(e, u),
                    value: e.value,
                    valueType: (0, a.p3)(e.name),
                    label: e.label,
                    special: e.overlayType,
                    tooltipArgs: (0, a.pI)({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    type: e.type,
                    vehicleNation: e.nationTag,
                    vehicleLvl: e.level,
                    vehicleName: e.label,
                    isElite: e.isElite,
                    isRent: e.isRent,
                    rentBattles: e.rentBattles,
                    rentDays: e.rentDays,
                    isCompensation: e.isCompensation,
                    compensatedBonus: e.compensatedBonus,
                    icon: e.icon,
                });
                let c, m, E, _;
                (!(function (e) {
                    ((e.Stamp = 'stamps'), (e.Presents = 'presents'), (e.Reward = 'rewards'));
                })(c || (c = {})),
                    Object.keys(c),
                    s.cJ.ExtraSmall,
                    s.cJ.Small,
                    s.cJ.Medium,
                    s.cJ.Large,
                    s.cJ.ExtraLarge,
                    (function (e) {
                        ((e.ASC = 'asc'), (e.DESC = 'desc'));
                    })(m || (m = {})),
                    (function (e) {
                        ((e.Player = 'userName'),
                            (e.Vehicle = 'vehicleShortName'),
                            (e.Damage = 'totalDamage'),
                            (e.Kills = 'kills'),
                            (e.Experience = 'xp'),
                            (e.Gift = 'gift'));
                    })(E || (E = {})),
                    Object.values(E),
                    E.Player,
                    (function (e) {
                        ((e.PLAY = 'play'), (e.STOP = 'stop'));
                    })(_ || (_ = {})));
                const d = {
                        width: 640,
                        height: 400,
                        frameCount: 35,
                        chunk: { count: 1, rows: 6, columns: 6 },
                        getChunkPath: () => 'R.images.mt_birthday.gui.maps.icons.tankMail.boxCanvas',
                    },
                    A = (0, n.q)(d);
                let F;
                (i.T.mail,
                    i.T.quests,
                    i.T.gold_wagon,
                    i.T.ticket_exchange,
                    (function (e) {
                        ((e.general_1 = 'mt_bday_2026_onboard_intro'),
                            (e.mail_1 = 'mt_bday_2026_onboard_post_1'),
                            (e.mail_2 = 'mt_bday_2026_onboard_post_2'),
                            (e.quests_1 = 'mt_bday_2026_onboard_quest_giver_1'),
                            (e.quests_2 = 'mt_bday_2026_onboard_quest_giver_2'),
                            (e.gold_wagon_1 = 'mt_bday_2026_onboard_wagon_1'),
                            (e.gold_wagon_2 = 'mt_bday_2026_onboard_wagon_2'),
                            (e.ticket_exchange_1 = 'mt_bday_2026_onboard_tickets_1'),
                            (e.ticket_exchange_2 = 'mt_bday_2026_onboard_tickets_2'));
                    })(F || (F = {})));
            },
            9990: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { T: () => n }),
                    (function (e) {
                        ((e[(e.mail = 0)] = 'mail'),
                            (e[(e.quests = 1)] = 'quests'),
                            (e[(e.rewards = 2)] = 'rewards'),
                            (e[(e.gold_wagon = 3)] = 'gold_wagon'),
                            (e[(e.ticket_exchange = 4)] = 'ticket_exchange'),
                            (e[(e.about = 5)] = 'about'));
                    })(n || (n = {})));
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
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            1609: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                };
            },
            372: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_49',
                    base__nonActive: 'HorizontalBar_base__nonActive_82',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_f3',
                    base__nonActive: 'VerticalBar_base__nonActive_42',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
            7476: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
            8852: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                };
            },
            9960: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ProgressBar_base_e9',
                    base__medium: 'ProgressBar_base__medium_f7',
                    base__small: 'ProgressBar_base__small_75',
                    background: 'ProgressBar_background_12',
                    background__medium: 'ProgressBar_background__medium_c7',
                    background__small: 'ProgressBar_background__small_d4',
                    lineWrapper: 'ProgressBar_lineWrapper_2a',
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 948),
        (() => {
            var e = { 948: 0, 419: 0, 849: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7351));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
