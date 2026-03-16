(() => {
    var u,
        e = {
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
            532: (u) => {
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
            887: (u) => {
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
            948: (u, e, t) => {
                'use strict';
                var r = {};
                (t.r(r), t.d(r, { mouse: () => m, onResize: () => s }));
                var E = {};
                (t.r(E),
                    t.d(E, {
                        events: () => r,
                        getMouseGlobalPosition: () => d,
                        getSize: () => c,
                        graphicsQuality: () => _,
                    }));
                var A = {};
                (t.r(A), t.d(A, { getBgUrl: () => h, getTextureUrl: () => g }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => y,
                        addPreloadTexture: () => S,
                        children: () => A,
                        displayStatus: () => f,
                        displayStatusIs: () => U,
                        events: () => x,
                        extraSize: () => K,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => w,
                        getDisplayStatus: () => z,
                        getScale: () => P,
                        getSize: () => H,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => X,
                        isFocused: () => k,
                        pxToRem: () => W,
                        remToPx: () => I,
                        resize: () => T,
                        sendEvent: () => b,
                        setAnimateWindow: () => N,
                        setEventHandled: () => j,
                        setInputPaddingsRem: () => L,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => V,
                    }));
                var n = t(179),
                    F = t.n(n),
                    D = t(493),
                    i = t.n(D);
                const l = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                function B(u) {
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
                const s = B('clientResized'),
                    C = { down: B('mousedown'), up: B('mouseup'), move: B('mousemove') },
                    m = (function () {
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
                        const E = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let E = !0;
                                        const A = `mouse${e}`,
                                            a = C[e]((u) => t([u, 'outside']));
                                        function n(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(A, n),
                                            r(),
                                            () => {
                                                E &&
                                                    (a(),
                                                    window.removeEventListener(A, n),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (E = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, E, {
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
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function g(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function h(u, e, t) {
                    return `url(${g(u, e, t)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
                        onTextureFrozen: B('self.onTextureFrozen'),
                        onTextureReady: B('self.onTextureReady'),
                        onDomBuilt: B('self.onDomBuilt'),
                        onLoaded: B('self.onLoaded'),
                        onDisplayChanged: B('self.onShowingStatusChanged'),
                        onFocusUpdated: B('self.onFocusChanged'),
                        children: {
                            onAdded: B('children.onAdded'),
                            onLoaded: B('children.onLoaded'),
                            onRemoved: B('children.onRemoved'),
                            onAttached: B('children.onAttached'),
                            onTextureReady: B('children.onTextureReady'),
                            onRequestPosition: B('children.requestPosition'),
                        },
                    },
                    v = ['args'],
                    p = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const E = e.args,
                                A = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        E = {},
                                        A = Object.keys(u);
                                    for (r = 0; r < A.length; r++) ((t = A[r]), e.indexOf(t) >= 0 || (E[t] = u[t]));
                                    return E;
                                })(e, v);
                            return void 0 !== E
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, A, {
                                          arguments:
                                              ((r = E),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, A));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    b = {
                        close(u) {
                            p('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            p(64);
                        },
                        move(u) {
                            p(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function S(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function L(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function w(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function y(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function M(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function H(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function T(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function O(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: I(e.x), y: I(e.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function W(u) {
                    return viewEnv.pxToRem(u);
                }
                function I(u) {
                    return viewEnv.remToPx(u);
                }
                function N(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function k() {
                    return viewEnv.isFocused();
                }
                function j() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(f).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === f[e]), u), {}),
                    K = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    V = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : x.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: a, client: E },
                    q = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Q;
                function Z(u, e, t) {
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
                        E = (function (u, e) {
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
                        A = Math.min(r, E);
                    return {
                        extraLarge: A === t.extraLarge.weight,
                        large: A === t.large.weight,
                        medium: A === t.medium.weight,
                        small: A === t.small.weight,
                        extraSmall: A === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: E === t.extraLarge.weight,
                        largeHeight: E === t.large.weight,
                        mediumHeight: E === t.medium.weight,
                        smallHeight: E === t.small.weight,
                        extraSmallHeight: E === t.extraSmall.weight,
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
                })(Q || (Q = {}));
                const J = Y.client.getSize('rem'),
                    uu = J.width,
                    eu = J.height,
                    tu = Object.assign({ width: uu, height: eu }, Z(uu, eu, q)),
                    ru = (0, n.createContext)(tu),
                    Eu = ['children'],
                    Au = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    E = {},
                                    A = Object.keys(u);
                                for (r = 0; r < A.length; r++) ((t = A[r]), e.indexOf(t) >= 0 || (E[t] = u[t]));
                                return E;
                            })(u, Eu);
                        const r = (0, n.useContext)(ru),
                            E = r.extraLarge,
                            A = r.large,
                            a = r.medium,
                            F = r.small,
                            D = r.extraSmall,
                            i = r.extraLargeWidth,
                            B = r.largeWidth,
                            o = r.mediumWidth,
                            s = r.smallWidth,
                            C = r.extraSmallWidth,
                            m = r.extraLargeHeight,
                            c = r.largeHeight,
                            d = r.mediumHeight,
                            _ = r.smallHeight,
                            g = r.extraSmallHeight,
                            h = { extraLarge: m, large: c, medium: d, small: _, extraSmall: g };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && E) return e;
                            if (t.large && A) return e;
                            if (t.medium && a) return e;
                            if (t.small && F) return e;
                            if (t.extraSmall && D) return e;
                        } else {
                            if (t.extraLargeWidth && i) return l(e, t, h);
                            if (t.largeWidth && B) return l(e, t, h);
                            if (t.mediumWidth && o) return l(e, t, h);
                            if (t.smallWidth && s) return l(e, t, h);
                            if (t.extraSmallWidth && C) return l(e, t, h);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && m) return e;
                                if (t.largeHeight && c) return e;
                                if (t.mediumHeight && d) return e;
                                if (t.smallHeight && _) return e;
                                if (t.extraSmallHeight && g) return e;
                            }
                        }
                        return null;
                    };
                ((Au.defaultProps = {
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
                    (0, n.memo)(Au));
                const au = (0, n.memo)(({ children: u }) => {
                    const e = (0, n.useContext)(ru),
                        t = (0, n.useState)(e),
                        r = t[0],
                        E = t[1],
                        A = (0, n.useCallback)((u, e) => {
                            const t = Y.view.pxToRem(u),
                                r = Y.view.pxToRem(e);
                            E(Object.assign({ width: t, height: r }, Z(t, r, q)));
                        }, []);
                    (((u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', A);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', A), [A]));
                    const a = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                    return F().createElement(ru.Provider, { value: a }, u);
                });
                var nu = t(483),
                    Fu = t.n(nu),
                    Du = t(926),
                    iu = t.n(Du);
                let lu, Bu, ou;
                (!(function (u) {
                    ((u[(u.ExtraSmall = q.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = q.small.width)] = 'Small'),
                        (u[(u.Medium = q.medium.width)] = 'Medium'),
                        (u[(u.Large = q.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = q.extraLarge.width)] = 'ExtraLarge'));
                })(lu || (lu = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = q.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = q.small.width)] = 'Small'),
                            (u[(u.Medium = q.medium.width)] = 'Medium'),
                            (u[(u.Large = q.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = q.extraLarge.width)] = 'ExtraLarge'));
                    })(Bu || (Bu = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = q.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = q.small.height)] = 'Small'),
                            (u[(u.Medium = q.medium.height)] = 'Medium'),
                            (u[(u.Large = q.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = q.extraLarge.height)] = 'ExtraLarge'));
                    })(ou || (ou = {})));
                const su = () => {
                        const u = (0, n.useContext)(ru),
                            e = u.width,
                            t = u.height,
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return lu.ExtraLarge;
                                    case u.large:
                                        return lu.Large;
                                    case u.medium:
                                        return lu.Medium;
                                    case u.small:
                                        return lu.Small;
                                    case u.extraSmall:
                                        return lu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), lu.ExtraSmall);
                                }
                            })(u),
                            E = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return Bu.ExtraLarge;
                                    case u.largeWidth:
                                        return Bu.Large;
                                    case u.mediumWidth:
                                        return Bu.Medium;
                                    case u.smallWidth:
                                        return Bu.Small;
                                    case u.extraSmallWidth:
                                        return Bu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Bu.ExtraSmall);
                                }
                            })(u),
                            A = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return ou.ExtraLarge;
                                    case u.largeHeight:
                                        return ou.Large;
                                    case u.mediumHeight:
                                        return ou.Medium;
                                    case u.smallHeight:
                                        return ou.Small;
                                    case u.extraSmallHeight:
                                        return ou.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), ou.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: r, mediaWidth: E, mediaHeight: A, remScreenWidth: e, remScreenHeight: t };
                    },
                    Cu = ['children', 'className'];
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const cu = {
                        [Bu.ExtraSmall]: '',
                        [Bu.Small]: iu().SMALL_WIDTH,
                        [Bu.Medium]: `${iu().SMALL_WIDTH} ${iu().MEDIUM_WIDTH}`,
                        [Bu.Large]: `${iu().SMALL_WIDTH} ${iu().MEDIUM_WIDTH} ${iu().LARGE_WIDTH}`,
                        [Bu.ExtraLarge]: `${iu().SMALL_WIDTH} ${iu().MEDIUM_WIDTH} ${iu().LARGE_WIDTH} ${iu().EXTRA_LARGE_WIDTH}`,
                    },
                    du = {
                        [ou.ExtraSmall]: '',
                        [ou.Small]: iu().SMALL_HEIGHT,
                        [ou.Medium]: `${iu().SMALL_HEIGHT} ${iu().MEDIUM_HEIGHT}`,
                        [ou.Large]: `${iu().SMALL_HEIGHT} ${iu().MEDIUM_HEIGHT} ${iu().LARGE_HEIGHT}`,
                        [ou.ExtraLarge]: `${iu().SMALL_HEIGHT} ${iu().MEDIUM_HEIGHT} ${iu().LARGE_HEIGHT} ${iu().EXTRA_LARGE_HEIGHT}`,
                    },
                    _u = {
                        [lu.ExtraSmall]: '',
                        [lu.Small]: iu().SMALL,
                        [lu.Medium]: `${iu().SMALL} ${iu().MEDIUM}`,
                        [lu.Large]: `${iu().SMALL} ${iu().MEDIUM} ${iu().LARGE}`,
                        [lu.ExtraLarge]: `${iu().SMALL} ${iu().MEDIUM} ${iu().LARGE} ${iu().EXTRA_LARGE}`,
                    },
                    gu = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    E = {},
                                    A = Object.keys(u);
                                for (r = 0; r < A.length; r++) ((t = A[r]), e.indexOf(t) >= 0 || (E[t] = u[t]));
                                return E;
                            })(u, Cu);
                        const E = su(),
                            A = E.mediaWidth,
                            a = E.mediaHeight,
                            n = E.mediaSize;
                        return F().createElement('div', mu({ className: Fu()(t, cu[A], du[a], _u[n]) }, r), e);
                    },
                    hu = ['children'],
                    fu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    E = {},
                                    A = Object.keys(u);
                                for (r = 0; r < A.length; r++) ((t = A[r]), e.indexOf(t) >= 0 || (E[t] = u[t]));
                                return E;
                            })(u, hu);
                        return F().createElement(au, null, F().createElement(gu, t, e));
                    };
                let xu;
                function vu() {}
                function pu() {
                    return !1;
                }
                (!(function (u) {
                    ((u[(u.Unspecified = 0)] = 'Unspecified'),
                        (u[(u.Newbie = 1)] = 'Newbie'),
                        (u[(u.Inexperienced = 2)] = 'Inexperienced'),
                        (u[(u.Experienced = 3)] = 'Experienced'),
                        (u[(u.Skipped = 4)] = 'Skipped'));
                })(xu || (xu = {})),
                    console.log);
                var bu = t(915);
                function Su(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const Lu = (u) => (0 === u ? window : window.subViews.get(u)),
                    wu = (u) => {
                        return null !== u && 'object' == typeof u
                            ? 'CoherentArrayProxy' === u.constructor.name
                                ? ((e = u),
                                  (t = (u) => ('object' == typeof u ? wu(u) : u)),
                                  Array.isArray(e) ? e.map(t) : e.map((u, e, r) => t(null == u ? void 0 : u.value)))
                                : Array.isArray(u)
                                  ? u.map((u) => ('object' == typeof u ? wu(u) : u))
                                  : Object.fromEntries(
                                        Object.entries(u).map(([u, e]) => [u, 'object' == typeof e ? wu(e) : e]),
                                    )
                            : u;
                        var e, t;
                    };
                var yu = t(517);
                const Mu = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: E, mocks: A }) {
                                const a = (0, n.useRef)([]),
                                    D = (u, t, r) => {
                                        var E;
                                        const A = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = Lu,
                                                context: r = 'model',
                                            } = {}) {
                                                const E = new Map();
                                                function A(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? E.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = E.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const a = (u) => {
                                                    const E = t(e),
                                                        A = r.split('.').reduce((u, e) => u[e], E);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? A
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, A);
                                                };
                                                return {
                                                    subscribe: (t, A) => {
                                                        const n = 'string' == typeof A ? `${r}.${A}` : r,
                                                            F = Y.view.addModelObserver(n, e, !0);
                                                        return (E.set(F, t), u && t(a(A)), F);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (u, e) => {
                                                        const t = a(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = a(u);
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
                                                                                    return Su(u, e);
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
                                                                                          ? Su(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(E.keys());
                                                            !(u = t()).done;
                                                        )
                                                            A(u.value, e);
                                                    },
                                                    unsubscribe: A,
                                                };
                                            })(t),
                                            n =
                                                'real' === u
                                                    ? A
                                                    : Object.assign({}, A, {
                                                          readByPath:
                                                              null != (E = null == r ? void 0 : r.getter)
                                                                  ? E
                                                                  : () => {},
                                                      }),
                                            F = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : n.readByPath(e),
                                            D = (u) => a.current.push(u),
                                            i = (({ observableModel: u }) => {
                                                const e = { root: u.object(), levels: u.array('levels') },
                                                    t = (0, yu.computedFn)(
                                                        () => {
                                                            return ((u = e.levels.get()), wu(u));
                                                            var u;
                                                        },
                                                        { equals: pu },
                                                    );
                                                return Object.assign({}, e, { computes: { getLevels: t } });
                                            })({
                                                mode: u,
                                                readByPath: F,
                                                externalModel: n,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : F(e),
                                                            E = bu.observable.box(r, { equals: pu });
                                                        return (
                                                            'real' === u &&
                                                                n.subscribe(
                                                                    (0, bu.action)((u) => E.set(u)),
                                                                    e,
                                                                ),
                                                            E
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : F(e),
                                                            E = bu.observable.box(r, { equals: pu });
                                                        return (
                                                            'real' === u &&
                                                                n.subscribe(
                                                                    (0, bu.action)((u) => E.set(u)),
                                                                    e,
                                                                ),
                                                            E
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = F(t);
                                                        if (Array.isArray(e)) {
                                                            const E = e.reduce(
                                                                (u, e) => ((u[e] = bu.observable.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    n.subscribe(
                                                                        (0, bu.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                E[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                E
                                                            );
                                                        }
                                                        {
                                                            const E = e,
                                                                A = Object.entries(E),
                                                                a = A.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = bu.observable.box(r[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    n.subscribe(
                                                                        (0, bu.action)((u) => {
                                                                            A.forEach(([e, t]) => {
                                                                                a[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: D,
                                            }),
                                            l = { mode: u, model: i, externalModel: n, cleanup: D };
                                        return {
                                            model: i,
                                            controls: 'mocks' === u && r ? r.controls(l) : e(l),
                                            externalModel: n,
                                            mode: u,
                                        };
                                    },
                                    i = (0, n.useRef)(!1),
                                    l = (0, n.useState)(u),
                                    B = l[0],
                                    o = l[1],
                                    s = (0, n.useState)(() => D(u, r, A)),
                                    C = s[0],
                                    m = s[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        i.current ? m(D(B, r, A)) : (i.current = !0);
                                    }, [A, B, r]),
                                    (0, n.useEffect)(() => {
                                        o(u);
                                    }, [u]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (C.externalModel.dispose(), a.current.forEach((u) => u()));
                                        },
                                        [C],
                                    ),
                                    F().createElement(t.Provider, { value: C }, E)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({ select: u.createCallback((u) => ({ level: u }), 'onSelect') })),
                    Hu = Mu[0],
                    Tu = Mu[1];
                var Ru = t(282);
                function Ou(u) {
                    engine.call('PlaySound', u);
                }
                const Gu = {
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
                let Pu, Wu;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(Pu || (Pu = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(Wu || (Wu = {})));
                const Iu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: E,
                    mixClass: A,
                    soundHover: a,
                    soundClick: D,
                    onMouseEnter: i,
                    onMouseMove: l,
                    onMouseDown: B,
                    onMouseUp: o,
                    onMouseLeave: s,
                    onClick: C,
                }) => {
                    const m = (0, n.useRef)(null),
                        c = (0, n.useState)(t),
                        d = c[0],
                        _ = c[1],
                        g = (0, n.useState)(!1),
                        h = g[0],
                        f = g[1],
                        x = (0, n.useState)(!1),
                        v = x[0],
                        p = x[1],
                        b = (0, n.useCallback)(() => {
                            E || (m.current && (m.current.focus(), _(!0)));
                        }, [E]),
                        S = (0, n.useCallback)(
                            (u) => {
                                d && null !== m.current && !m.current.contains(u.target) && _(!1);
                            },
                            [d],
                        ),
                        L = (0, n.useCallback)(
                            (u) => {
                                E || (C && C(u));
                            },
                            [E, C],
                        ),
                        w = (0, n.useCallback)(
                            (u) => {
                                E || (null !== a && Ou(a), i && i(u), p(!0));
                            },
                            [E, a, i],
                        ),
                        y = (0, n.useCallback)(
                            (u) => {
                                l && l(u);
                            },
                            [l],
                        ),
                        M = (0, n.useCallback)(
                            (u) => {
                                E || (o && o(u), f(!1));
                            },
                            [E, o],
                        ),
                        H = (0, n.useCallback)(
                            (u) => {
                                E || (null !== D && Ou(D), B && B(u), t && b(), f(!0));
                            },
                            [E, D, B, b, t],
                        ),
                        T = (0, n.useCallback)(
                            (u) => {
                                E || (s && s(u), f(!1));
                            },
                            [E, s],
                        ),
                        O = Fu()(
                            Gu.base,
                            Gu[`base__${r}`],
                            {
                                [Gu.base__disabled]: E,
                                [Gu[`base__${e}`]]: e,
                                [Gu.base__focus]: d,
                                [Gu.base__highlightActive]: h,
                                [Gu.base__firstHover]: v,
                            },
                            A,
                        ),
                        G = Fu()(Gu.state, Gu.state__default);
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
                            _(t);
                        }, [t]),
                        F().createElement(
                            'div',
                            {
                                ref: m,
                                className: O,
                                onMouseEnter: w,
                                onMouseMove: y,
                                onMouseUp: M,
                                onMouseDown: H,
                                onMouseLeave: T,
                                onClick: L,
                            },
                            r !== Pu.ghost &&
                                F().createElement(
                                    F().Fragment,
                                    null,
                                    F().createElement('div', { className: Gu.back }),
                                    F().createElement('span', { className: Gu.texture }),
                                ),
                            F().createElement(
                                'span',
                                { className: G },
                                F().createElement('span', { className: Gu.stateDisabled }),
                                F().createElement('span', { className: Gu.stateHighlightHover }),
                                F().createElement('span', { className: Gu.stateHighlightActive }),
                            ),
                            F().createElement(
                                'span',
                                { className: Gu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Iu.defaultProps = { type: Pu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Nu = (0, n.memo)(Iu);
                var ku = t(887),
                    ju = t.n(ku);
                const Xu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    $u = (u) => u.includes('_') && ((u) => Xu.includes(u))(u.split('_').at(-1)),
                    zu = [lu.ExtraLarge, lu.Large, lu.Medium, lu.Small, lu.ExtraSmall],
                    Uu = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if ($u(r)) {
                                const E = r.split('_').slice(0, -1).join('_');
                                if (E in t) return t;
                                const A = zu.indexOf(e),
                                    a = (-1 !== A ? Xu.slice(A) : [])
                                        .map((u) => E + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    n = a ? u[a] : void 0;
                                return ((t[E] = void 0 !== n ? n : u[E]), t);
                            }
                            const E = u[r];
                            return (
                                void 0 === E ||
                                    ((u, e) => Xu.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = E),
                                t
                            );
                        }, {}),
                    Ku = (u, e = Uu) => {
                        const t = (
                            (u, e = Uu) =>
                            (t) => {
                                const r = su().mediaSize,
                                    E = (0, n.useMemo)(() => e(t, r), [t, r]);
                                return F().createElement(u, E);
                            }
                        )(u, e);
                        return F().memo((e) =>
                            Object.keys(e).some((u) => $u(u) && void 0 !== e[u])
                                ? F().createElement(t, e)
                                : F().createElement(u, e),
                        );
                    },
                    Vu = {
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
                    Yu = [
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
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                Object.keys(ju());
                const Qu = {
                        XL: { mt: Vu.mt__XL, mr: Vu.mr__XL, mb: Vu.mb__XL, ml: Vu.ml__XL },
                        LG: { mt: Vu.mt__LG, mr: Vu.mr__LG, mb: Vu.mb__LG, ml: Vu.ml__LG },
                        MDp: { mt: Vu.mt__MDp, mr: Vu.mr__MDp, mb: Vu.mb__MDp, ml: Vu.ml__MDp },
                        MD: { mt: Vu.mt__MD, mr: Vu.mr__MD, mb: Vu.mb__MD, ml: Vu.ml__MD },
                        SMp: { mt: Vu.mt__SMp, mr: Vu.mr__SMp, mb: Vu.mb__SMp, ml: Vu.ml__SMp },
                        SM: { mt: Vu.mt__SM, mr: Vu.mr__SM, mb: Vu.mb__SM, ml: Vu.ml__SM },
                        XS: { mt: Vu.mt__XS, mr: Vu.mr__XS, mb: Vu.mb__XS, ml: Vu.ml__XS },
                    },
                    Zu = (Object.keys(Qu), ['mt', 'mr', 'mb', 'ml']),
                    Ju = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ue = Ku((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            E = u.m,
                            A = u.mt,
                            a = void 0 === A ? E : A,
                            D = u.mr,
                            i = void 0 === D ? E : D,
                            l = u.mb,
                            B = void 0 === l ? E : l,
                            o = u.ml,
                            s = void 0 === o ? E : o,
                            C = u.column,
                            m = u.row,
                            c = u.flexDirection,
                            d = void 0 === c ? (C ? 'column' : m && 'row') || void 0 : c,
                            _ = u.flexStart,
                            g = u.center,
                            h = u.flexEnd,
                            f = u.spaceBetween,
                            x = u.spaceAround,
                            v = u.justifyContent,
                            p =
                                void 0 === v
                                    ? (_ ? 'flex-start' : g && 'center') ||
                                      (h && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (x && 'space-around') ||
                                      void 0
                                    : v,
                            b = u.alignItems,
                            S = void 0 === b ? (_ ? 'flex-start' : g && 'center') || (h && 'flex-end') || void 0 : b,
                            L = u.alignSelf,
                            w = u.wrap,
                            y = u.flexWrap,
                            M = void 0 === y ? (w ? 'wrap' : void 0) : y,
                            H = u.grow,
                            T = u.shrink,
                            R = u.flex,
                            O = void 0 === R ? (H || T ? `${H ? 1 : 0} ${T ? 1 : 0} auto` : void 0) : R,
                            G = u.style,
                            P = u.children,
                            W = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    E = {},
                                    A = Object.keys(u);
                                for (r = 0; r < A.length; r++) ((t = A[r]), e.indexOf(t) >= 0 || (E[t] = u[t]));
                                return E;
                            })(u, Yu);
                        const I = (0, n.useMemo)(() => {
                                const u = { mt: a, mr: i, mb: B, ml: s },
                                    e = ((u) =>
                                        Zu.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(Qu[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    E = ((u) =>
                                        Zu.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[Ju[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, G, E, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: O,
                                        alignSelf: L,
                                        display: d || S ? 'flex' : void 0,
                                        flexDirection: d,
                                        flexWrap: M,
                                        justifyContent: p,
                                        alignItems: S,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, a, i, B, s, G, O, L, d, M, p, S]),
                            N = I.computedStyle,
                            k = I.computedClassNames;
                        return F().createElement('div', qu({ className: Fu()(Vu.base, ...k, e), style: N }, W), P);
                    });
                let ee;
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(ee || (ee = {}));
                const te = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    re = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Ee = (u, e, t = ee.left) => u.split(e).reduce(t === ee.left ? te : re, []),
                    Ae = (() => {
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
                    ae = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ne = ({ binding: u, text: e = '', classMix: t, alignment: r = ee.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : F().createElement(
                                  n.Fragment,
                                  null,
                                  e.split('\n').map((e, E) =>
                                      F().createElement(
                                          'div',
                                          { className: Fu()('FormatText_base_d0', t), key: `${e}-${E}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = ee.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return ae.includes(t)
                                                                ? Ae(u)
                                                                : ((u, e = ee.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          E = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Ee(E, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Ee(u, r, ee.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, r, u).map((u, e) =>
                                              F().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var Fe = t(532),
                    De = t.n(Fe);
                const ie = {
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
                    le = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Be() {
                    return (
                        (Be =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Be.apply(this, arguments)
                    );
                }
                Object.keys(ju());
                const oe = Object.keys(De()),
                    se = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ce = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    me = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ce =
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
                            'heading-H56': se,
                            'heading-H36': se,
                            'heading-H28': Ce,
                            'heading-H24': Ce,
                            'heading-H24R': Ce,
                            'heading-H22': Ce,
                            'heading-H20R': Ce,
                            'heading-H18': Ce,
                            'heading-H15': me,
                            'heading-H14': me,
                            'paragraph-P24': Ce,
                            'paragraph-P18': Ce,
                            'paragraph-P16': Ce,
                            'paragraph-P14': me,
                            'paragraph-P12': me,
                            'paragraph-P10': me,
                        }),
                    de =
                        (Object.keys(ce),
                        (u) =>
                            u
                                ? ((u) => oe.includes(u))(u)
                                    ? { colorClassName: ie[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    _e = Ku((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            E = u.color,
                            A = u.m,
                            a = u.mt,
                            D = void 0 === a ? A : a,
                            i = u.mr,
                            l = void 0 === i ? A : i,
                            B = u.mb,
                            o = void 0 === B ? A : B,
                            s = u.ml,
                            C = void 0 === s ? A : s,
                            m = u.style,
                            c = u.format,
                            d = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    E = {},
                                    A = Object.keys(u);
                                for (r = 0; r < A.length; r++) ((t = A[r]), e.indexOf(t) >= 0 || (E[t] = u[t]));
                                return E;
                            })(u, le);
                        const _ = (0, n.useMemo)(() => {
                                const u = de(E),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, m, r), colorClassName: e };
                            }, [m, E]),
                            g = _.computedStyle,
                            h = _.colorClassName;
                        return F().createElement(
                            ue,
                            Be(
                                {
                                    className: Fu()(ie.base, t && ie[t], h, r),
                                    style: g,
                                    mt: !0 === D ? ce[t || 'paragraph-P16'].mt : D,
                                    mr: !0 === l ? ce[t || 'paragraph-P16'].mr : l,
                                    mb: !0 === o ? ce[t || 'paragraph-P16'].mb : o,
                                    ml: !0 === C ? ce[t || 'paragraph-P16'].ml : C,
                                },
                                d,
                            ),
                            void 0 !== c ? F().createElement(ne, Be({}, c, { text: e })) : e,
                        );
                    }),
                    ge = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                        'onError',
                    ];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const fe = (0, n.forwardRef)(function (u, e) {
                        let t = u.src,
                            r = u.className,
                            E = u.autoplay,
                            A = void 0 !== E && E,
                            a = u.style,
                            D = u.loop,
                            i = void 0 !== D && D,
                            l = u.isPrebufferKeyframes,
                            B = u.keyframesNameConfig,
                            o = u.onClick,
                            s = u.onError,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    E = {},
                                    A = Object.keys(u);
                                for (r = 0; r < A.length; r++) ((t = A[r]), e.indexOf(t) >= 0 || (E[t] = u[t]));
                                return E;
                            })(u, ge);
                        const m = e,
                            c = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    ((u) => {
                                        let e,
                                            t = null;
                                        return (
                                            (t = requestAnimationFrame(() => {
                                                t = requestAnimationFrame(() => {
                                                    ((t = null),
                                                        (e = (() => {
                                                            const u = c.current;
                                                            if (!m || !u || !l)
                                                                return void (
                                                                    null != u &&
                                                                    u.cohFastSeek &&
                                                                    (u.cohFastSeek = !1)
                                                                );
                                                            const e = u.cohGetKeyframeTimestamps();
                                                            e.length > 0
                                                                ? ((u.cohFastSeek = !0),
                                                                  e.map((e) => {
                                                                      null == u || u.cohPrebufferKeyframe(e);
                                                                  }))
                                                                : console.warn(
                                                                      "Can't prebuffered keyframes, keyframes was not found",
                                                                  );
                                                        })()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                                            }
                                        );
                                    })(),
                                [l, m],
                            ),
                            (0, n.useEffect)(() => {
                                if (m && c.current) {
                                    const u = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: vu,
                                        },
                                        e = () => {
                                            let e = 0;
                                            const t = (function (t) {
                                                    let r = 0;
                                                    return [
                                                        function t() {
                                                            ((() => {
                                                                if (c.current) {
                                                                    const t = c.current,
                                                                        r = t.currentTime,
                                                                        E = t.duration;
                                                                    if (
                                                                        (e !== r &&
                                                                            (u.changeTimeHandlers.forEach((u) =>
                                                                                u({ currentTime: r, duration: E }),
                                                                            ),
                                                                            (e = r)),
                                                                        c.current.paused || !m || !l)
                                                                    )
                                                                        return;
                                                                    const A = c.current.cohGetKeyframeTimestamps();
                                                                    A.forEach((e, t) => {
                                                                        r > A[t] - 0.02 &&
                                                                            r < A[t] &&
                                                                            u.changeKeyframeHandlers.forEach((u) => {
                                                                                const r = Object.keys(
                                                                                    null != B ? B : {},
                                                                                )[t];
                                                                                return u({
                                                                                    time: e,
                                                                                    name: `${B ? r : `Point_${t}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (r = requestAnimationFrame(t)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(r);
                                                        },
                                                    ];
                                                })(),
                                                r = t[0],
                                                E = t[1];
                                            return (r(), E);
                                        };
                                    u.changeTimeLoop = e();
                                    const t = (e) => (
                                            u.changeTimeHandlers.push(e),
                                            () => {
                                                const t = u.changeTimeHandlers,
                                                    r = t.indexOf(e);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        r = (e) => (
                                            u.changeKeyframeHandlers.push(e),
                                            () => {
                                                const t = u.changeKeyframeHandlers,
                                                    r = t.indexOf(e);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(r, 1);
                                            }
                                        ),
                                        E = () => {
                                            var u;
                                            return null == (u = c.current) ? void 0 : u.currentTime;
                                        },
                                        A = () => {
                                            var u;
                                            return null == (u = c.current) ? void 0 : u.duration;
                                        },
                                        a = (u) => {
                                            var e, t;
                                            c.current &&
                                                (c.current.currentTime =
                                                    (0, (e = c.current.duration), (t = u) < 0 ? 0 : t > e ? e : t));
                                        },
                                        n = () => {
                                            var u;
                                            return null == (u = c.current) ? void 0 : u.play();
                                        },
                                        F = () => {
                                            var u;
                                            return null == (u = c.current) ? void 0 : u.pause();
                                        },
                                        D = () => {
                                            (F(), a(0));
                                        },
                                        i = () => {
                                            var u, e;
                                            return null !=
                                                (u = null == (e = c.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                                ? u
                                                : [];
                                        },
                                        o = (u) => {
                                            (a(u), n());
                                        },
                                        s = (u) => {
                                            (a(u), F());
                                        },
                                        C = () => {
                                            ((u.changeTimeHandlers = []),
                                                (u.changeKeyframeHandlers = []),
                                                null == u.changeTimeLoop || u.changeTimeLoop());
                                        },
                                        d = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = c.current) || t.addEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = c.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        },
                                        _ = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = c.current) || t.removeEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = c.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        };
                                    return (
                                        (m.current = {
                                            on: d,
                                            off: _,
                                            play: n,
                                            pause: F,
                                            stop: D,
                                            cleanup: C,
                                            getCurrentTime: E,
                                            getDuration: A,
                                            getCachedKeyframes: i,
                                            goToAndPlay: o,
                                            goToAndStop: s,
                                            setCurrentTime: a,
                                            domRef: c.current,
                                            onChangeTime: t,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            (C(), (m.current = null));
                                        }
                                    );
                                }
                            }, [B, m, l]),
                            (0, n.useEffect)(() => {
                                c.current && A && c.current.play();
                            }, [A, i]),
                            (0, n.useEffect)(() => {
                                if (c.current)
                                    return () => {
                                        c.current && c.current.pause();
                                    };
                            }, []),
                            F().createElement(
                                'video',
                                he({ src: t, className: r, style: a, loop: i, ref: c, onClick: o, onError: s }, C),
                            )
                        );
                    }),
                    xe = (0, n.memo)(fe),
                    ve = 'LevelCard_borderImage_e3',
                    pe = R.strings.newbie_start_page;
                let be;
                !(function (u) {
                    ((u.Start = 'Start'), (u.First = 'First'));
                })(be || (be = {}));
                const Se = ({ level: u }) => {
                        const e = Tu().controls,
                            t = (0, n.useState)(!1),
                            r = t[0],
                            E = t[1],
                            A = (0, n.useState)(''),
                            a = A[0],
                            D = A[1],
                            i = (0, n.useState)(null),
                            l = i[0],
                            B = i[1],
                            o = (0, n.useRef)(null);
                        (0, n.useEffect)(() => {
                            (() => {
                                const e = `option_${u}`,
                                    t = R.videos.newbie_start_page.$dyn(e),
                                    r = pe.levels.$dyn(e);
                                t
                                    ? (D(t), r ? B(r) : console.error(`Text folder with name "${e}" was not found`))
                                    : console.error(`Video with name "${e}" was not found`);
                            })();
                        }, [u]);
                        const s = (u, e) => (null == u ? void 0 : u.$dyn(e)) || '',
                            C = s(l, 'title'),
                            m = s(l, 'subtitle'),
                            c = (u, e) => {
                                (E(u),
                                    ((u) => {
                                        const e = o.current;
                                        e && ('play' === u ? e.play() : e.pause());
                                    })(e));
                            };
                        return (
                            (0, n.useEffect)(() => {
                                const u = o.current;
                                return () => {
                                    u && (u.domRef.src = '');
                                };
                            }, []),
                            F().createElement(
                                'div',
                                {
                                    className: Fu()('LevelCard_base_08', r && 'LevelCard_base__hovered_a9'),
                                    onMouseEnter: () => c(!0, 'play'),
                                    onMouseLeave: () => c(!1, 'pause'),
                                },
                                F().createElement(
                                    'div',
                                    { className: 'LevelCard_videoWrapper_fb' },
                                    F().createElement(xe, {
                                        className: 'LevelCard_video_5a',
                                        src: a,
                                        ref: o,
                                        loop: !0,
                                        keyframesNameConfig: be,
                                    }),
                                ),
                                F().createElement('div', { className: 'LevelCard_vignette_0f' }),
                                F().createElement('div', { className: 'LevelCard_mask_5b' }),
                                F().createElement(
                                    'div',
                                    { className: 'LevelCard_content_f5' },
                                    F().createElement(_e, { className: 'LevelCard_title_d4', text: C }),
                                    F().createElement(_e, { className: 'LevelCard_subtitle_09', text: m }),
                                    F().createElement(
                                        Nu,
                                        {
                                            type: Pu.main,
                                            size: 'medium',
                                            mixClass: 'LevelCard_button_13',
                                            onClick: () => e.select(u),
                                        },
                                        F().createElement(_e, { text: pe.controls.continue() }),
                                    ),
                                ),
                                F().createElement('div', { className: Fu()(ve, 'LevelCard_borderImage__left_61') }),
                                F().createElement('div', { className: Fu()(ve, 'LevelCard_borderImage__right_92') }),
                            )
                        );
                    },
                    Le = (0, Ru.observer)(() => {
                        const u = Tu(),
                            e = u.model,
                            t = u.controls,
                            r = e.computes.getLevels(),
                            E = (0, n.useCallback)(
                                (u) => {
                                    27 === (u.keyCode || u.which) && t.select(xu.Skipped);
                                },
                                [t],
                            );
                        return (
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('keydown', E),
                                    () => window.removeEventListener('keydown', E)
                                ),
                                [E],
                            ),
                            F().createElement(
                                'div',
                                { className: 'App_base_2d' },
                                F().createElement(
                                    'div',
                                    { className: 'App_levels_2c' },
                                    r.map((u, e) => F().createElement(Se, { key: e, level: u })),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        F().createElement(Hu, null, F().createElement(fu, null, F().createElement(Le, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        t = {};
    function r(u) {
        var E = t[u];
        if (void 0 !== E) return E.exports;
        var A = (t[u] = { exports: {} });
        return (e[u].call(A.exports, A, A.exports, r), A.exports);
    }
    ((r.m = e),
        (u = []),
        (r.O = (e, t, E, A) => {
            if (!t) {
                var a = 1 / 0;
                for (i = 0; i < u.length; i++) {
                    for (var [t, E, A] = u[i], n = !0, F = 0; F < t.length; F++)
                        (!1 & A || a >= A) && Object.keys(r.O).every((u) => r.O[u](t[F]))
                            ? t.splice(F--, 1)
                            : ((n = !1), A < a && (a = A));
                    if (n) {
                        u.splice(i--, 1);
                        var D = E();
                        void 0 !== D && (e = D);
                    }
                }
                return e;
            }
            A = A || 0;
            for (var i = u.length; i > 0 && u[i - 1][2] > A; i--) u[i] = u[i - 1];
            u[i] = [t, E, A];
        }),
        (r.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (r.d(e, { a: e }), e);
        }),
        (r.d = (u, e) => {
            for (var t in e) r.o(e, t) && !r.o(u, t) && Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (r.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (() => {
            var u = { 612: 0 };
            r.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var E,
                        A,
                        [a, n, F] = t,
                        D = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (E in n) r.o(n, E) && (r.m[E] = n[E]);
                        if (F) var i = F(r);
                    }
                    for (e && e(t); D < a.length; D++) ((A = a[D]), r.o(u, A) && u[A] && u[A][0](), (u[A] = 0));
                    return r.O(i);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var E = r.O(void 0, [503], () => r(948));
    E = r.O(E);
})();
