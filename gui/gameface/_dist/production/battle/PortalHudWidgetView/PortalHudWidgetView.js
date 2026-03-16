(() => {
    var u,
        e = {
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
            8109: (u, e, t) => {
                'use strict';
                var a = {};
                (t.r(a), t.d(a, { mouse: () => f, onResize: () => x }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => S,
                        getSize: () => b,
                        graphicsQuality: () => H,
                    }));
                var E = {};
                (t.r(E), t.d(E, { getBgUrl: () => y, getTextureUrl: () => w }));
                var A = {};
                (t.r(A),
                    t.d(A, {
                        addModelObserver: () => j,
                        addPreloadTexture: () => O,
                        children: () => E,
                        displayStatus: () => M,
                        displayStatusIs: () => eu,
                        events: () => L,
                        extraSize: () => tu,
                        forceTriggerMouseMove: () => J,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => uu,
                        getScale: () => U,
                        getSize: () => X,
                        getViewGlobalPosition: () => z,
                        isEventHandled: () => Z,
                        isFocused: () => q,
                        pxToRem: () => K,
                        remToPx: () => V,
                        resize: () => I,
                        sendEvent: () => T,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => Q,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => k,
                        whenTutorialReady: () => au,
                    }));
                var F = t(6179),
                    n = t.n(F),
                    i = t(493),
                    l = t.n(i);
                const D = 'App_widget_87',
                    s = 'Camps_campBg_5a',
                    B = 'Camps_icon_a0',
                    m = 'Camps_defender_04',
                    o = 'Camps_defender__killed_74';
                var C = t(6483),
                    d = t.n(C),
                    c = t(9887),
                    _ = t.n(c);
                const p = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                function g(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function h(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                const x = g('clientResized'),
                    v = { down: g('mousedown'), up: g('mouseup'), move: g('mousemove') },
                    f = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && h(!1);
                        }
                        function t() {
                            u.enabled && h(!0);
                        }
                        function a() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : h(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const E = `mouse${e}`,
                                            A = v[e]((u) => t([u, 'outside']));
                                        function F(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(E, F),
                                            a(),
                                            () => {
                                                r &&
                                                    (A(),
                                                    window.removeEventListener(E, F),
                                                    (u.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((u.enabled = !1), a());
                            },
                            enable() {
                                ((u.enabled = !0), a());
                            },
                            enableOutside() {
                                u.enabled && h(!0);
                            },
                            disableOutside() {
                                u.enabled && h(!1);
                            },
                        });
                    })();
                function b(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function S(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const H = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function w(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function y(u, e, t) {
                    return `url(${w(u, e, t)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
                        onTextureFrozen: g('self.onTextureFrozen'),
                        onTextureReady: g('self.onTextureReady'),
                        onDomBuilt: g('self.onDomBuilt'),
                        onLoaded: g('self.onLoaded'),
                        onDisplayChanged: g('self.onShowingStatusChanged'),
                        onFocusUpdated: g('self.onFocusChanged'),
                        children: {
                            onAdded: g('children.onAdded'),
                            onLoaded: g('children.onLoaded'),
                            onRemoved: g('children.onRemoved'),
                            onAttached: g('children.onAttached'),
                            onTextureReady: g('children.onTextureReady'),
                            onRequestPosition: g('children.requestPosition'),
                        },
                    },
                    P = ['args'],
                    N = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                E = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        r = {},
                                        E = Object.keys(u);
                                    for (a = 0; a < E.length; a++) ((t = E[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                    return r;
                                })(e, P);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, E, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, E));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    T = {
                        close(u) {
                            N('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            N(64);
                        },
                        move(u) {
                            N(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function O(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function W(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function G(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function j(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function k(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function X(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function z(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: V(e.x), y: V(e.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function K(u) {
                    return viewEnv.pxToRem(u);
                }
                function V(u) {
                    return viewEnv.remToPx(u);
                }
                function Y(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function Q() {
                    return viewEnv.setEventHandled();
                }
                function Z() {
                    return viewEnv.isEventHandled();
                }
                function J() {
                    viewEnv.forceTriggerMouseMove();
                }
                function uu() {
                    return viewEnv.getShowingStatus();
                }
                const eu = Object.keys(M).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === M[e]), u), {}),
                    tu = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    au = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : L.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    ru = { view: A, client: r },
                    Eu = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Au;
                function Fu(u, e, t) {
                    const a = (function (u, e) {
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
                        r = (function (u, e) {
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
                        E = Math.min(a, r);
                    return {
                        extraLarge: E === t.extraLarge.weight,
                        large: E === t.large.weight,
                        medium: E === t.medium.weight,
                        small: E === t.small.weight,
                        extraSmall: E === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                !(function (u) {
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
                })(Au || (Au = {}));
                const nu = ru.client.getSize('rem'),
                    iu = nu.width,
                    lu = nu.height,
                    Du = Object.assign({ width: iu, height: lu }, Fu(iu, lu, Eu)),
                    su = (0, F.createContext)(Du),
                    Bu = ['children'],
                    mu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    E = Object.keys(u);
                                for (a = 0; a < E.length; a++) ((t = E[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, Bu);
                        const a = (0, F.useContext)(su),
                            r = a.extraLarge,
                            E = a.large,
                            A = a.medium,
                            n = a.small,
                            i = a.extraSmall,
                            l = a.extraLargeWidth,
                            D = a.largeWidth,
                            s = a.mediumWidth,
                            B = a.smallWidth,
                            m = a.extraSmallWidth,
                            o = a.extraLargeHeight,
                            C = a.largeHeight,
                            d = a.mediumHeight,
                            c = a.smallHeight,
                            _ = a.extraSmallHeight,
                            g = { extraLarge: o, large: C, medium: d, small: c, extraSmall: _ };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return e;
                            if (t.large && E) return e;
                            if (t.medium && A) return e;
                            if (t.small && n) return e;
                            if (t.extraSmall && i) return e;
                        } else {
                            if (t.extraLargeWidth && l) return p(e, t, g);
                            if (t.largeWidth && D) return p(e, t, g);
                            if (t.mediumWidth && s) return p(e, t, g);
                            if (t.smallWidth && B) return p(e, t, g);
                            if (t.extraSmallWidth && m) return p(e, t, g);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && o) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && d) return e;
                                if (t.smallHeight && c) return e;
                                if (t.extraSmallHeight && _) return e;
                            }
                        }
                        return null;
                    };
                ((mu.defaultProps = {
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
                    (0, F.memo)(mu));
                let ou, Cu, du;
                ((0, F.memo)(({ children: u }) => {
                    const e = (0, F.useContext)(su),
                        t = (0, F.useState)(e),
                        a = t[0],
                        r = t[1],
                        E = (0, F.useCallback)((u, e) => {
                            const t = ru.view.pxToRem(u),
                                a = ru.view.pxToRem(e);
                            r(Object.assign({ width: t, height: a }, Fu(t, a, Eu)));
                        }, []);
                    (((u) => {
                        const e = (0, F.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, F.useEffect)(() => () => engine.off('clientResized', E), [E]));
                    const A = (0, F.useMemo)(() => Object.assign({}, a), [a]);
                    return n().createElement(su.Provider, { value: A }, u);
                }),
                    (function (u) {
                        ((u[(u.ExtraSmall = Eu.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = Eu.small.width)] = 'Small'),
                            (u[(u.Medium = Eu.medium.width)] = 'Medium'),
                            (u[(u.Large = Eu.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = Eu.extraLarge.width)] = 'ExtraLarge'));
                    })(ou || (ou = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = Eu.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = Eu.small.width)] = 'Small'),
                            (u[(u.Medium = Eu.medium.width)] = 'Medium'),
                            (u[(u.Large = Eu.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = Eu.extraLarge.width)] = 'ExtraLarge'));
                    })(Cu || (Cu = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = Eu.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = Eu.small.height)] = 'Small'),
                            (u[(u.Medium = Eu.medium.height)] = 'Medium'),
                            (u[(u.Large = Eu.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = Eu.extraLarge.height)] = 'ExtraLarge'));
                    })(du || (du = {})));
                const cu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    _u = (u) => u.includes('_') && ((u) => cu.includes(u))(u.split('_').at(-1)),
                    pu = [ou.ExtraLarge, ou.Large, ou.Medium, ou.Small, ou.ExtraSmall],
                    gu = (u, e) =>
                        Object.keys(u).reduce((t, a) => {
                            if (a in t) return t;
                            if (_u(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const E = pu.indexOf(e),
                                    A = (-1 !== E ? cu.slice(E) : [])
                                        .map((u) => r + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    F = A ? u[A] : void 0;
                                return ((t[r] = void 0 !== F ? F : u[r]), t);
                            }
                            const r = u[a];
                            return (
                                void 0 === r ||
                                    ((u, e) => cu.some((t) => void 0 !== e[`${u}_${t}`]))(a, u) ||
                                    (t[a] = r),
                                t
                            );
                        }, {}),
                    hu = (u, e = gu) => {
                        const t = (
                            (u, e = gu) =>
                            (t) => {
                                const a = (() => {
                                        const u = (0, F.useContext)(su),
                                            e = u.width,
                                            t = u.height,
                                            a = ((u) => {
                                                switch (!0) {
                                                    case u.extraLarge:
                                                        return ou.ExtraLarge;
                                                    case u.large:
                                                        return ou.Large;
                                                    case u.medium:
                                                        return ou.Medium;
                                                    case u.small:
                                                        return ou.Small;
                                                    case u.extraSmall:
                                                        return ou.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            ou.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            r = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeWidth:
                                                        return Cu.ExtraLarge;
                                                    case u.largeWidth:
                                                        return Cu.Large;
                                                    case u.mediumWidth:
                                                        return Cu.Medium;
                                                    case u.smallWidth:
                                                        return Cu.Small;
                                                    case u.extraSmallWidth:
                                                        return Cu.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            Cu.ExtraSmall
                                                        );
                                                }
                                            })(u),
                                            E = ((u) => {
                                                switch (!0) {
                                                    case u.extraLargeHeight:
                                                        return du.ExtraLarge;
                                                    case u.largeHeight:
                                                        return du.Large;
                                                    case u.mediumHeight:
                                                        return du.Medium;
                                                    case u.smallHeight:
                                                        return du.Small;
                                                    case u.extraSmallHeight:
                                                        return du.ExtraSmall;
                                                    default:
                                                        return (
                                                            console.error('Unreachable media context resolution'),
                                                            du.ExtraSmall
                                                        );
                                                }
                                            })(u);
                                        return {
                                            mediaSize: a,
                                            mediaWidth: r,
                                            mediaHeight: E,
                                            remScreenWidth: e,
                                            remScreenHeight: t,
                                        };
                                    })().mediaSize,
                                    r = (0, F.useMemo)(() => e(t, a), [t, a]);
                                return n().createElement(u, r);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => _u(u) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    },
                    xu = {
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
                    },
                    vu = [
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
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                Object.keys(_());
                const bu = {
                        XL: { mt: xu.mt__XL, mr: xu.mr__XL, mb: xu.mb__XL, ml: xu.ml__XL },
                        LG: { mt: xu.mt__LG, mr: xu.mr__LG, mb: xu.mb__LG, ml: xu.ml__LG },
                        MDp: { mt: xu.mt__MDp, mr: xu.mr__MDp, mb: xu.mb__MDp, ml: xu.ml__MDp },
                        MD: { mt: xu.mt__MD, mr: xu.mr__MD, mb: xu.mb__MD, ml: xu.ml__MD },
                        SMp: { mt: xu.mt__SMp, mr: xu.mr__SMp, mb: xu.mb__SMp, ml: xu.ml__SMp },
                        SM: { mt: xu.mt__SM, mr: xu.mr__SM, mb: xu.mb__SM, ml: xu.ml__SM },
                        XS: { mt: xu.mt__XS, mr: xu.mr__XS, mb: xu.mb__XS, ml: xu.ml__XS },
                    },
                    Su = (Object.keys(bu), ['mt', 'mr', 'mb', 'ml']),
                    Hu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    wu = hu((u) => {
                        let e = u.className,
                            t = u.width,
                            a = u.height,
                            r = u.m,
                            E = u.mt,
                            A = void 0 === E ? r : E,
                            i = u.mr,
                            l = void 0 === i ? r : i,
                            D = u.mb,
                            s = void 0 === D ? r : D,
                            B = u.ml,
                            m = void 0 === B ? r : B,
                            o = u.column,
                            C = u.row,
                            c = u.flexDirection,
                            _ = void 0 === c ? (o ? 'column' : C && 'row') || void 0 : c,
                            p = u.flexStart,
                            g = u.center,
                            h = u.flexEnd,
                            x = u.spaceBetween,
                            v = u.spaceAround,
                            f = u.justifyContent,
                            b =
                                void 0 === f
                                    ? (p ? 'flex-start' : g && 'center') ||
                                      (h && 'flex-end') ||
                                      (x && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            S = u.alignItems,
                            H = void 0 === S ? (p ? 'flex-start' : g && 'center') || (h && 'flex-end') || void 0 : S,
                            w = u.alignSelf,
                            y = u.wrap,
                            M = u.flexWrap,
                            L = void 0 === M ? (y ? 'wrap' : void 0) : M,
                            P = u.grow,
                            R = u.shrink,
                            N = u.flex,
                            T = void 0 === N ? (P || R ? `${P ? 1 : 0} ${R ? 1 : 0} auto` : void 0) : N,
                            O = u.style,
                            W = u.children,
                            G = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    E = Object.keys(u);
                                for (a = 0; a < E.length; a++) ((t = E[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, vu);
                        const j = (0, F.useMemo)(() => {
                                const u = { mt: A, mr: l, mb: s, ml: m },
                                    e = ((u) =>
                                        Su.reduce((e, t) => {
                                            const a = u[t];
                                            return a && 'number' != typeof a ? e.concat(bu[!0 === a ? 'MD' : a][t]) : e;
                                        }, []))(u),
                                    r = ((u) =>
                                        Su.reduce((e, t) => {
                                            const a = u[t];
                                            return ('number' == typeof a && (e[Hu[t]] = a + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, O, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: T,
                                        alignSelf: w,
                                        display: _ || H ? 'flex' : void 0,
                                        flexDirection: _,
                                        flexWrap: L,
                                        justifyContent: b,
                                        alignItems: H,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, a, A, l, s, m, O, T, w, _, L, b, H]),
                            k = j.computedStyle,
                            X = j.computedClassNames;
                        return n().createElement('div', fu({ className: d()(xu.base, ...X, e), style: k }, G), W);
                    });
                let yu;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(yu || (yu = {}));
                const Mu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Lu = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Pu = (u, e, t = yu.left) => u.split(e).reduce(t === yu.left ? Mu : Lu, []),
                    Ru = (() => {
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
                    Nu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Tu = ({ binding: u, text: e = '', classMix: t, alignment: a = yu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  F.Fragment,
                                  null,
                                  e.split('\n').map((e, r) =>
                                      n().createElement(
                                          'div',
                                          { className: d()('FormatText_base_d0', t), key: `${e}-${r}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = yu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Nu.includes(t)
                                                                ? Ru(u)
                                                                : ((u, e = yu.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Pu(r, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Pu(u, a, yu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, a, u).map((u, e) =>
                                              n().createElement(F.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var Ou = t(3532),
                    Wu = t.n(Ou);
                const Gu = {
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
                    },
                    ju = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                Object.keys(_());
                const Xu = Object.keys(Wu()),
                    Iu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    zu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    $u = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Uu =
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
                            'heading-H56': Iu,
                            'heading-H36': Iu,
                            'heading-H28': zu,
                            'heading-H24': zu,
                            'heading-H24R': zu,
                            'heading-H22': zu,
                            'heading-H20R': zu,
                            'heading-H18': zu,
                            'heading-H15': $u,
                            'heading-H14': $u,
                            'paragraph-P24': zu,
                            'paragraph-P18': zu,
                            'paragraph-P16': zu,
                            'paragraph-P14': $u,
                            'paragraph-P12': $u,
                            'paragraph-P10': $u,
                        }),
                    Ku =
                        (Object.keys(Uu),
                        (u) =>
                            u
                                ? ((u) => Xu.includes(u))(u)
                                    ? { colorClassName: Gu[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    Vu = hu((u) => {
                        let e = u.text,
                            t = u.variant,
                            a = u.className,
                            r = u.color,
                            E = u.m,
                            A = u.mt,
                            i = void 0 === A ? E : A,
                            l = u.mr,
                            D = void 0 === l ? E : l,
                            s = u.mb,
                            B = void 0 === s ? E : s,
                            m = u.ml,
                            o = void 0 === m ? E : m,
                            C = u.style,
                            c = u.format,
                            _ = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    r = {},
                                    E = Object.keys(u);
                                for (a = 0; a < E.length; a++) ((t = E[a]), e.indexOf(t) >= 0 || (r[t] = u[t]));
                                return r;
                            })(u, ju);
                        const p = (0, F.useMemo)(() => {
                                const u = Ku(r),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, C, a), colorClassName: e };
                            }, [C, r]),
                            g = p.computedStyle,
                            h = p.colorClassName;
                        return n().createElement(
                            wu,
                            ku(
                                {
                                    className: d()(Gu.base, t && Gu[t], h, a),
                                    style: g,
                                    mt: !0 === i ? Uu[t || 'paragraph-P16'].mt : i,
                                    mr: !0 === D ? Uu[t || 'paragraph-P16'].mr : D,
                                    mb: !0 === B ? Uu[t || 'paragraph-P16'].mb : B,
                                    ml: !0 === o ? Uu[t || 'paragraph-P16'].ml : o,
                                },
                                _,
                            ),
                            void 0 !== c ? n().createElement(Tu, ku({}, c, { text: e })) : e,
                        );
                    });
                let Yu;
                function qu(u) {
                    engine.call('PlaySound', u);
                }
                !(function (u) {
                    ((u.CanBeCaptured = 'canBeCaptured'), (u.Captured = 'captured'), (u.Default = 'default'));
                })(Yu || (Yu = {}));
                const Qu = () => {
                        const u = (0, F.useRef)({ captured: 0, canBeCaptured: 0 }),
                            e = (e) => {
                                const t = e.capturedCamps,
                                    a = e.campsCount,
                                    r = e.canBeCapturedCamps,
                                    E = u.current,
                                    A = E.captured,
                                    F = E.canBeCaptured;
                                (a > 0 &&
                                    t !== A &&
                                    (qu('ev_portal_gui_camp_capture_completed'), (u.current.captured = t)),
                                    a > 0 && t === a && qu('ev_portal_gui_guards_deactivate'),
                                    a > 0 &&
                                        r !== F &&
                                        (qu('ev_portal_gui_camp_capture_available'), (u.current.canBeCaptured = r)));
                            };
                        return (
                            (0, F.useEffect)(
                                () => (
                                    engine.on('viewEnv.onDataChanged', e),
                                    () => {
                                        engine.off('viewEnv.onDataChanged', e);
                                    }
                                ),
                                [],
                            ),
                            n().createElement(
                                'div',
                                { className: 'Camps_base_08' },
                                n().createElement(
                                    'div',
                                    { className: 'Camps_wrapper_90' },
                                    n().createElement(
                                        'div',
                                        { className: 'Camps_animation_7c' },
                                        n().createElement(
                                            'div',
                                            { className: 'Camps_info_e5' },
                                            n().createElement(Vu, { text: R.strings.portal_hud_widget.camps.title() }),
                                            n().createElement(Vu, {
                                                text: R.strings.portal_hud_widget.camps.counter(),
                                                format: {
                                                    binding: {
                                                        capturedCamps: n().createElement('span', {
                                                            'data-bind-value': '{{model.capturedCamps}}',
                                                        }),
                                                        campsCount: n().createElement('span', {
                                                            'data-bind-value': '{{model.campsCount}}',
                                                        }),
                                                    },
                                                },
                                            }),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: 'Camps_camps_21' },
                                            n().createElement(
                                                'div',
                                                {
                                                    className: 'Camps_campWrapper_b6',
                                                    'data-bind-for': 'index, camp: {{model.camps.items}}',
                                                },
                                                n().createElement(
                                                    'div',
                                                    {
                                                        className: 'Camps_camp_21',
                                                        'data-bind-class-toggle': `Camps_camp__captured_cd: {{camp.value.state}} === "${Yu.Captured}";Camps_camp__active_09: {{camp.value.state}} === "${Yu.Default}";Camps_camp__active_09: {{camp.value.state}} === "";Camps_camp__canBeCaptured_2d: {{camp.value.state}} === "${Yu.CanBeCaptured}";`,
                                                    },
                                                    n().createElement('div', {
                                                        className: d()(s, 'Camps_campBg__active_23'),
                                                    }),
                                                    n().createElement('div', {
                                                        className: d()(s, 'Camps_campBg__canBeCaptured_83'),
                                                    }),
                                                    n().createElement('div', {
                                                        className: d()(s, 'Camps_campBg__captured_36'),
                                                    }),
                                                    n().createElement('div', {
                                                        'data-bind-if': `{{camp.value.state}} === "${Yu.CanBeCaptured}"`,
                                                        className: 'Camps_glow_e9',
                                                    }),
                                                    n().createElement('div', {
                                                        className: B,
                                                        'data-bind-if': `{{camp.value.state}} === "${Yu.Default}"`,
                                                        'data-bind-class-toggle':
                                                            'Camps_horse_a7: {{index}} === 0;Camps_hook_ac: {{index}} === 1;Camps_satellite_41: {{index}} === 2;Camps_perspective_ed: {{index}} === 3;',
                                                    }),
                                                    n().createElement('div', {
                                                        className: B,
                                                        'data-bind-if': `{{camp.value.state}} === "${Yu.CanBeCaptured}"`,
                                                        'data-bind-class-toggle':
                                                            'Camps_horse__canBeCaptured_cb: {{index}} === 0;Camps_hook__canBeCaptured_3f: {{index}} === 1;Camps_satellite__canBeCaptured_cd: {{index}} === 2;Camps_perspective__canBeCaptured_51: {{index}} === 3;',
                                                    }),
                                                    n().createElement('div', {
                                                        className: B,
                                                        'data-bind-if': `{{camp.value.state}} === "${Yu.Captured}"`,
                                                        'data-bind-class-toggle':
                                                            'Camps_horse__captured_6e: {{index}} === 0;Camps_hook__captured_f9: {{index}} === 1;Camps_satellite__captured_03: {{index}} === 2;Camps_perspective__captured_b9: {{index}} === 3;',
                                                    }),
                                                ),
                                                n().createElement(
                                                    'div',
                                                    { className: 'Camps_defenders_d6' },
                                                    n().createElement('div', {
                                                        className: m,
                                                        'data-bind-class-toggle':
                                                            o + ': {{camp.value.killedDefenders}} <= 0;',
                                                    }),
                                                    n().createElement('div', {
                                                        className: m,
                                                        'data-bind-class-toggle':
                                                            o + ': {{camp.value.killedDefenders}} <= 1;',
                                                    }),
                                                    n().createElement('div', {
                                                        className: m,
                                                        'data-bind-class-toggle':
                                                            o + ': {{camp.value.killedDefenders}} <= 2;',
                                                    }),
                                                    n().createElement('div', {
                                                        className: m,
                                                        'data-bind-class-toggle':
                                                            o + ': {{camp.value.killedDefenders}} <= 3;',
                                                    }),
                                                    n().createElement('div', {
                                                        className: m,
                                                        'data-bind-if': '{{camp.value.allDefenders}} >= 5',
                                                        'data-bind-class-toggle':
                                                            o + ': {{camp.value.killedDefenders}} <= 4;',
                                                    }),
                                                    n().createElement('div', {
                                                        className: m,
                                                        'data-bind-if': '{{camp.value.allDefenders}} === 6',
                                                        'data-bind-class-toggle':
                                                            o + ': {{camp.value.killedDefenders}} <= 5;',
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    Zu = () =>
                        n().createElement(
                            'div',
                            { className: 'GuardianPower_base_d3' },
                            n().createElement('div', {
                                className: 'GuardianPower_icon_2a',
                                'data-bind-class-toggle':
                                    'GuardianPower_icon__shield_3e: ({{model.campsCount}} - {{model.capturedCamps}}) * 100 / {{model.campsCount}} === 0;GuardianPower_icon__attack_53: ({{model.campsCount}} - {{model.capturedCamps}}) * 100 / {{model.campsCount}} > 1;',
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: 'GuardianPower_content_73',
                                    'data-bind-if':
                                        '({{model.campsCount}} - {{model.capturedCamps}}) * 100 / {{model.campsCount}} !== 0',
                                },
                                n().createElement('span', {
                                    'data-bind-value':
                                        '({{model.campsCount}} - {{model.capturedCamps}}) * 100 / {{model.campsCount}}',
                                }),
                                n().createElement('span', null, '%'),
                            ),
                        );
                let Ju;
                !(function (u) {
                    ((u.PreBattle = 'preBattle'),
                        (u.Default = 'default'),
                        (u.SuperBossFight = 'superBossFight'),
                        (u.AfterBattle = 'afterBattle'));
                })(Ju || (Ju = {}));
                class ue {
                    constructor() {
                        ((this.bossMaxHealth = 0), (this.prevCurrentHealth = 0));
                    }
                    update(u, e) {
                        if (
                            (0 === this.bossMaxHealth && (this.bossMaxHealth = e.maxHealth),
                            !e.currentHealth || this.prevCurrentHealth === e.currentHealth)
                        )
                            return;
                        if (0 === this.prevCurrentHealth) return void (this.prevCurrentHealth = e.currentHealth);
                        const t = this.prevCurrentHealth - e.currentHealth;
                        if (((this.prevCurrentHealth = e.currentHealth), t <= 0 || 0 === this.bossMaxHealth)) return;
                        const a = (t / this.bossMaxHealth) * 100,
                            r = (e.currentHealth / this.bossMaxHealth) * 100;
                        u.innerHTML = '';
                        const E = document.createElement('div');
                        if (
                            ((E.style.width = `${a}%`),
                            (E.style.height = '24rem'),
                            (E.style.background =
                                "url('R.images.portal.gui.maps.icons.hud_widget.portal_hp.hit') no-repeat center"),
                            (E.style.pointerEvents = 'none'),
                            (E.style.position = 'absolute'),
                            (E.style.top = '0'),
                            (E.style.left = `${r}%`),
                            (E.style.animation = 'opacityHit 2s ease-in-out'),
                            !document.getElementById('hit-animation-style'))
                        ) {
                            const u = document.createElement('style');
                            ((u.id = 'hit-animation-style'),
                                (u.textContent =
                                    '\n                @keyframes opacityHit {\n                    from { opacity: 1; }\n                    to { opacity: 0; }\n                }\n            '),
                                document.head.appendChild(u));
                        }
                        (u.appendChild(E),
                            E.addEventListener('animationend', () => {
                                E.parentNode && E.parentNode.removeChild(E);
                            }));
                    }
                }
                const ee = () => (
                    (0, F.useEffect)(() => {
                        engine.registerBindingAttribute('trigger-animation', ue);
                    }, []),
                    n().createElement(
                        'div',
                        { className: 'SuperBossHP_base_4e' },
                        n().createElement(
                            'div',
                            { className: 'SuperBossHP_info_46' },
                            n().createElement('div', { className: 'SuperBossHP_infoBG_5f' }),
                            n().createElement(
                                'div',
                                { className: 'SuperBossHP_title_44' },
                                n().createElement('div', { className: 'SuperBossHP_roleIcon_01' }),
                                n().createElement(Vu, { text: R.strings.portal_hud_widget.superBossHP.title() }),
                            ),
                            n().createElement(Vu, {
                                className: 'SuperBossHP_description_c7',
                                text: R.strings.portal_hud_widget.superBossHP.description(),
                            }),
                        ),
                        n().createElement(
                            'div',
                            { className: 'SuperBossHP_HPbarWrapper_b6' },
                            n().createElement(
                                'div',
                                { className: 'SuperBossHP_HPbar_c7' },
                                n().createElement(
                                    'div',
                                    { className: 'SuperBossHP_fillWrapper_5e' },
                                    n().createElement('div', { className: 'SuperBossHP_lines_a5' }),
                                    n().createElement('div', {
                                        className: 'SuperBossHP_HPBarFill_60',
                                        'data-bind-style-width':
                                            "({{model.superBossCurrentHealth}}/{{model.superBossMaxHealth}}*100)+'%'",
                                    }),
                                    n().createElement('div', {
                                        className: 'SuperBossHP_hit_95',
                                        'data-bind-trigger-animation':
                                            '{currentHealth:{{model.superBossCurrentHealth}},maxHealth:{{model.superBossMaxHealth}}}',
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'SuperBossHP_carriageWrapper_b6' },
                                    n().createElement(
                                        'div',
                                        {
                                            className: 'SuperBossHP_carriage_52',
                                            'data-bind-if':
                                                '{{model.superBossCurrentHealth}} !== {{model.superBossMaxHealth}} && parseFloat({{model.superBossCurrentHealth}}) > parseFloat(300)',
                                            'data-bind-style-left':
                                                "({{model.superBossCurrentHealth}}/{{model.superBossMaxHealth}}*100)+'%'",
                                        },
                                        n().createElement('div', { className: 'SuperBossHP_carriageIcon_f1' }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'SuperBossHP_HPInfo_5d' },
                                    n().createElement('span', {
                                        'data-bind-value':
                                            '{{model.superBossCurrentHealth}}.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, " ");',
                                    }),
                                    n().createElement('span', { className: 'SuperBossHP_infoSeparator_01' }, '/'),
                                    n().createElement('span', {
                                        'data-bind-value':
                                            '{{model.superBossMaxHealth}}.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, " ");',
                                    }),
                                ),
                            ),
                        ),
                    )
                );
                class te {
                    constructor() {
                        ((this.bossMaxHealth = 0), (this.prevCurrentHealth = 0));
                    }
                    update(u, e) {
                        if ((0 === this.bossMaxHealth && (this.bossMaxHealth = e), !e || this.prevCurrentHealth === e))
                            return;
                        if (0 === this.prevCurrentHealth) return void (this.prevCurrentHealth = e);
                        const t = this.prevCurrentHealth - e;
                        if (((this.prevCurrentHealth = e), t <= 0 || 0 === this.bossMaxHealth)) return;
                        const a = (t / this.bossMaxHealth) * 100;
                        u.innerHTML = '';
                        const r = document.createElement('div');
                        if (
                            ((r.style.width = `${a}%`),
                            (r.style.height = '32rem'),
                            (r.style.background =
                                "url('R.images.portal.gui.maps.icons.hud_widget.portal_hp.hit') no-repeat center"),
                            (r.style.pointerEvents = 'none'),
                            (r.style.position = 'absolute'),
                            (r.style.top = '0'),
                            (r.style.left = '0'),
                            (r.style.animation = 'opacityHit 2s ease-in-out'),
                            !document.getElementById('hit-animation-style'))
                        ) {
                            const u = document.createElement('style');
                            ((u.id = 'hit-animation-style'),
                                (u.textContent =
                                    '\n                @keyframes opacityHit {\n                    from { opacity: 1; }\n                    to { opacity: 0; }\n                }\n            '),
                                document.head.appendChild(u));
                        }
                        (u.appendChild(r),
                            r.addEventListener('animationend', () => {
                                r.parentNode && r.parentNode.removeChild(r);
                            }));
                    }
                }
                const ae = () => (
                        (0, F.useEffect)(() => {
                            engine.registerBindingAttribute('hit-animation', te);
                        }, []),
                        n().createElement(
                            'div',
                            { className: 'PortalHP_base_16' },
                            n().createElement(
                                'div',
                                { className: 'PortalHP_wrapper_2f' },
                                n().createElement(
                                    'div',
                                    { className: 'PortalHP_animation_16' },
                                    n().createElement(
                                        'div',
                                        { className: 'PortalHP_HPBarWrapper_07' },
                                        n().createElement(
                                            'div',
                                            { className: 'PortalHP_info_34' },
                                            n().createElement(
                                                'div',
                                                { className: 'PortalHP_leftInfoWrapper_bd' },
                                                n().createElement(Vu, {
                                                    text: R.strings.portal_hud_widget.portalHP.title(),
                                                }),
                                                n().createElement('div', { className: 'PortalHP_portalIcon_a2' }),
                                            ),
                                            n().createElement(
                                                'div',
                                                { className: 'PortalHP_HPInfo_1c' },
                                                n().createElement('span', {
                                                    'data-bind-value':
                                                        '{{model.bossCurrentHealth}}.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, " ");',
                                                }),
                                                n().createElement(Vu, {
                                                    text: '/',
                                                    className: 'PortalHP_infoSeparator_9f',
                                                }),
                                                n().createElement('span', {
                                                    'data-bind-value':
                                                        '{{model.bossMaxHealth}}.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, " ");',
                                                }),
                                            ),
                                        ),
                                        n().createElement('div', { className: 'PortalHP_HPBarBg_93' }),
                                        n().createElement('div', { className: 'PortalHP_lines_18' }),
                                        n().createElement(
                                            'div',
                                            { className: 'PortalHP_contentWrapper_5b' },
                                            n().createElement('div', {
                                                className: 'PortalHP_hit_46',
                                                'data-bind-hit-animation': '{{model.bossCurrentHealth}}',
                                                'data-bind-style-left':
                                                    "parseFloat({{model.bossCurrentHealth}}/{{model.bossMaxHealth}}*100)+'%'",
                                            }),
                                            n().createElement(
                                                'div',
                                                {
                                                    className: 'PortalHP_fillWrapper_8f',
                                                    'data-bind-style-width':
                                                        "parseFloat({{model.bossCurrentHealth}}/{{model.bossMaxHealth}}*100)+'%'",
                                                },
                                                n().createElement('div', { className: 'PortalHP_fill_61' }),
                                                n().createElement('div', {
                                                    className: 'PortalHP_carriage_ca',
                                                    'data-bind-if':
                                                        '{{model.bossMaxHealth}} !== {{model.bossCurrentHealth}} && parseFloat({{model.bossCurrentHealth}}) > parseFloat(1100)',
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        )
                    ),
                    re = () => (
                        (0, F.useEffect)(() => {
                            engine.synchronizeModels();
                        }, []),
                        n().createElement(
                            'div',
                            { className: 'App_base_9b' },
                            n().createElement('div', {
                                className: 'App_widgetBg_2c',
                                'data-bind-if': `{{model.state}} === "${Ju.Default}" && {{model.campsCount}} > 0 ||\n                    {{model.state}} === "${Ju.SuperBossFight}" && {{model.superBossMaxHealth}} > 0`,
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: D,
                                    'data-bind-if': `{{model.state}} === "${Ju.Default}" && {{model.campsCount}} > 0`,
                                },
                                n().createElement(Qu, null),
                                n().createElement(Zu, null),
                                n().createElement(ae, null),
                            ),
                            n().createElement(
                                'div',
                                {
                                    className: D,
                                    'data-bind-if': `{{model.state}} === "${Ju.SuperBossFight}" && {{model.superBossMaxHealth}} > 0`,
                                },
                                n().createElement(ee, null),
                            ),
                        )
                    );
                function Ee() {
                    return !1;
                }
                console.log;
                var Ae = t(3915);
                function Fe(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const ne = (u) => (0 === u ? window : window.subViews.get(u)),
                    ie = (u) => {
                        return null !== u && 'object' == typeof u
                            ? 'CoherentArrayProxy' === u.constructor.name
                                ? ((e = u),
                                  (t = (u) => ('object' == typeof u ? ie(u) : u)),
                                  Array.isArray(e) ? e.map(t) : e.map((u, e, a) => t(null == u ? void 0 : u.value)))
                                : Array.isArray(u)
                                  ? u.map((u) => ('object' == typeof u ? ie(u) : u))
                                  : Object.fromEntries(
                                        Object.entries(u).map(([u, e]) => [u, 'object' == typeof e ? ie(e) : e]),
                                    )
                            : u;
                        var e, t;
                    };
                var le = t(6517);
                const De = ((u, e) => {
                        const t = (0, F.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: e, children: a, mocks: r }) {
                                const E = (0, F.useRef)([]),
                                    A = (u, e, t) => {
                                        var a;
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = ne,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function E(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? r.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = r.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const A = (u) => {
                                                    const r = t(e),
                                                        E = a.split('.').reduce((u, e) => u[e], r);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? E
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, E);
                                                };
                                                return {
                                                    subscribe: (t, E) => {
                                                        const F = 'string' == typeof E ? `${a}.${E}` : a,
                                                            n = ru.view.addModelObserver(F, e, !0);
                                                        return (r.set(n, t), u && t(A(E)), n);
                                                    },
                                                    readByPath: A,
                                                    createCallback: (u, e) => {
                                                        const t = A(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = A(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return Fe(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Fe(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(u = t()).done;
                                                        )
                                                            E(u.value, e);
                                                    },
                                                    unsubscribe: E,
                                                };
                                            })(e),
                                            A =
                                                'real' === u
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == t ? void 0 : t.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            F = (e) =>
                                                'mocks' === u ? (null == t ? void 0 : t.getter(e)) : A.readByPath(e),
                                            n = (u) => E.current.push(u),
                                            i = (({ observableModel: u }) => {
                                                const e = { root: u.object(), camps: u.array('camps.items') },
                                                    t = (0, le.computedFn)(
                                                        () => {
                                                            return ((u = e.camps.get()), ie(u));
                                                            var u;
                                                        },
                                                        { equals: Ee },
                                                    );
                                                return Object.assign({}, e, { computes: { getCamps: t } });
                                            })({
                                                mode: u,
                                                readByPath: F,
                                                externalModel: A,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : F(e),
                                                            r = Ae.observable.box(a, { equals: Ee });
                                                        return (
                                                            'real' === u &&
                                                                A.subscribe(
                                                                    (0, Ae.action)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : F(e),
                                                            r = Ae.observable.box(a, { equals: Ee });
                                                        return (
                                                            'real' === u &&
                                                                A.subscribe(
                                                                    (0, Ae.action)((u) => r.set(u)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = F(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (u, e) => ((u[e] = Ae.observable.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    A.subscribe(
                                                                        (0, Ae.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                E = Object.entries(r),
                                                                F = E.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = Ae.observable.box(a[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    A.subscribe(
                                                                        (0, Ae.action)((u) => {
                                                                            E.forEach(([e, t]) => {
                                                                                F[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                F
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: n,
                                            }),
                                            l = { mode: u, model: i, externalModel: A, cleanup: n };
                                        return {
                                            model: i,
                                            controls: 'mocks' === u && t ? t.controls(l) : {},
                                            externalModel: A,
                                            mode: u,
                                        };
                                    },
                                    i = (0, F.useRef)(!1),
                                    l = (0, F.useState)(u),
                                    D = l[0],
                                    s = l[1],
                                    B = (0, F.useState)(() => A(u, e, r)),
                                    m = B[0],
                                    o = B[1];
                                return (
                                    (0, F.useEffect)(() => {
                                        i.current ? o(A(D, e, r)) : (i.current = !0);
                                    }, [r, D, e]),
                                    (0, F.useEffect)(() => {
                                        s(u);
                                    }, [u]),
                                    (0, F.useEffect)(
                                        () => () => {
                                            (m.externalModel.dispose(), E.current.forEach((u) => u()));
                                        },
                                        [m],
                                    ),
                                    n().createElement(t.Provider, { value: m }, a)
                                );
                            },
                            () => (0, F.useContext)(t),
                        ];
                    })(),
                    se = De[0];
                (De[1],
                    engine.whenReady.then(() => {
                        l().render(
                            n().createElement(se, null, n().createElement(re, null)),
                            document.getElementById('root'),
                        );
                    }));
            },
        },
        t = {};
    function a(u) {
        var r = t[u];
        if (void 0 !== r) return r.exports;
        var E = (t[u] = { exports: {} });
        return (e[u].call(E.exports, E, E.exports, a), E.exports);
    }
    ((a.m = e),
        (u = []),
        (a.O = (e, t, r, E) => {
            if (!t) {
                var A = 1 / 0;
                for (l = 0; l < u.length; l++) {
                    for (var [t, r, E] = u[l], F = !0, n = 0; n < t.length; n++)
                        (!1 & E || A >= E) && Object.keys(a.O).every((u) => a.O[u](t[n]))
                            ? t.splice(n--, 1)
                            : ((F = !1), E < A && (A = E));
                    if (F) {
                        u.splice(l--, 1);
                        var i = r();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            E = E || 0;
            for (var l = u.length; l > 0 && u[l - 1][2] > E; l--) u[l] = u[l - 1];
            u[l] = [t, r, E];
        }),
        (a.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (a.d(e, { a: e }), e);
        }),
        (a.d = (u, e) => {
            for (var t in e) a.o(e, t) && !a.o(u, t) && Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (a.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (a.j = 113),
        (() => {
            var u = { 113: 0 };
            a.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        E,
                        [A, F, n] = t,
                        i = 0;
                    if (A.some((e) => 0 !== u[e])) {
                        for (r in F) a.o(F, r) && (a.m[r] = F[r]);
                        if (n) var l = n(a);
                    }
                    for (e && e(t); i < A.length; i++) ((E = A[i]), a.o(u, E) && u[E] && u[E][0](), (u[E] = 0));
                    return a.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var r = a.O(void 0, [503], () => a(8109));
    r = a.O(r);
})();
