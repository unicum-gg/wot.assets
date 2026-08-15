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
            255: (u, e, t) => {
                'use strict';
                var A = {};
                (t.r(A),
                    t.d(A, { mouse: () => d, off: () => C, on: () => s, onResize: () => l, onScaleUpdated: () => B }));
                var n = {};
                (t.r(n),
                    t.d(n, {
                        events: () => A,
                        getMouseGlobalPosition: () => _,
                        getSize: () => h,
                        graphicsQuality: () => v,
                        playSound: () => m,
                        setRTPC: () => g,
                    }));
                var E = {};
                (t.r(E), t.d(E, { getBgUrl: () => y, getTextureUrl: () => S }));
                var F = {};
                (t.r(F),
                    t.d(F, {
                        addModelObserver: () => j,
                        addPreloadTexture: () => N,
                        arabic2roman: () => Fu,
                        children: () => E,
                        displayStatus: () => M,
                        displayStatusIs: () => ru,
                        events: () => H,
                        extraSize: () => au,
                        forceTriggerMouseMove: () => Au,
                        freezeTextureBeforeResize: () => Q,
                        getBrowserTexturePath: () => z,
                        getDisplayStatus: () => nu,
                        getFontNames: () => Eu,
                        getScale: () => Z,
                        getSize: () => V,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => tu,
                        isFocused: () => uu,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => X,
                        sendEvent: () => P,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => eu,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => iu,
                    }));
                var r = t(363),
                    a = t.n(r);
                const i = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                function D(u) {
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
                const l = D('clientResized'),
                    B = D('self.onScaleUpdated'),
                    s = (u, e) => engine.on(u, e),
                    C = (u, e) => engine.off(u, e),
                    c = { down: D('mousedown'), up: D('mouseup'), move: D('mousemove') };
                const d = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && o(!1);
                    }
                    function t() {
                        u.enabled && o(!0);
                    }
                    function A() {
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
                                    const E = `mouse${e}`,
                                        F = c[e]((u) => t([u, 'outside']));
                                    function r(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(E, r),
                                        A(),
                                        () => {
                                            n &&
                                                (F(),
                                                window.removeEventListener(E, r),
                                                (u.listeners -= 1),
                                                A(),
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
                            ((u.enabled = !1), A());
                        },
                        enable() {
                            ((u.enabled = !0), A());
                        },
                        enableOutside() {
                            u.enabled && o(!0);
                        },
                        disableOutside() {
                            u.enabled && o(!1);
                        },
                    });
                })();
                function m(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function g(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                function h(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const v = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(f).reduce((u, e) => ((u[e] = () => m(f[e])), u), {}),
                    b = { play: Object.assign({}, p, { sound: m }), setRTPC: g },
                    x = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    w = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function L(u) {
                    let e = '';
                    for (let t = w.length - 1; t >= 0; t--) for (; u >= w[t];) ((e += x[t]), (u -= w[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function S(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function y(u, e, t) {
                    return `url(${S(u, e, t)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    H = {
                        onTextureFrozen: D('self.onTextureFrozen'),
                        onTextureReady: D('self.onTextureReady'),
                        onDomBuilt: D('self.onDomBuilt'),
                        onLoaded: D('self.onLoaded'),
                        onDisplayChanged: D('self.onShowingStatusChanged'),
                        onFocusUpdated: D('self.onFocusChanged'),
                        children: {
                            onAdded: D('children.onAdded'),
                            onLoaded: D('children.onLoaded'),
                            onRemoved: D('children.onRemoved'),
                            onAttached: D('children.onAttached'),
                            onTextureReady: D('children.onTextureReady'),
                            onRequestPosition: D('children.requestPosition'),
                        },
                    },
                    T = ['args'];
                const I = 2,
                    W = 16,
                    k = 32,
                    O = 64,
                    G = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                E = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        A,
                                        n = {},
                                        E = Object.keys(u);
                                    for (A = 0; A < E.length; A++) ((t = E[A]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(e, T);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, E, {
                                          arguments:
                                              ((A = n),
                                              Object.entries(A).map(([u, e]) => {
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
                        var A;
                    },
                    P = {
                        close(u) {
                            G('popover' === u ? I : k);
                        },
                        minimize() {
                            G(O);
                        },
                        move(u) {
                            G(W, { isMouseEvent: !0, on: u });
                        },
                    };
                function N(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function $(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function z(u, e, t, A = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, A);
                }
                function j(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function U(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function V(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function X(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function q(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: K(e.x), y: K(e.y) };
                }
                function Q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Z() {
                    return viewEnv.getScale();
                }
                function J(u) {
                    return viewEnv.pxToRem(u);
                }
                function K(u) {
                    return viewEnv.remToPx(u);
                }
                function Y(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function uu() {
                    return viewEnv.isFocused();
                }
                function eu() {
                    return viewEnv.setEventHandled();
                }
                function tu() {
                    return viewEnv.isEventHandled();
                }
                function Au() {
                    viewEnv.forceTriggerMouseMove();
                }
                function nu() {
                    return viewEnv.getShowingStatus();
                }
                const Eu = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    Fu = L,
                    ru = Object.keys(M).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === M[e]), u), {}),
                    au = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    iu = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : H.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Du = { view: F, client: n, sound: b };
                const ou = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var lu;
                function Bu(u, e, t) {
                    const A = (function (u, e) {
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
                        E = Math.min(A, n);
                    return {
                        extraLarge: E === t.extraLarge.weight,
                        large: E === t.large.weight,
                        medium: E === t.medium.weight,
                        small: E === t.small.weight,
                        extraSmall: E === t.extraSmall.weight,
                        extraLargeWidth: A === t.extraLarge.weight,
                        largeWidth: A === t.large.weight,
                        mediumWidth: A === t.medium.weight,
                        smallWidth: A === t.small.weight,
                        extraSmallWidth: A === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
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
                })(lu || (lu = {}));
                const su = Du.client.getSize('rem'),
                    Cu = su.width,
                    cu = su.height,
                    du = Object.assign({ width: Cu, height: cu }, Bu(Cu, cu, ou)),
                    mu = (0, r.createContext)(du),
                    gu = ['children'];
                const hu = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                A,
                                n = {},
                                E = Object.keys(u);
                            for (A = 0; A < E.length; A++) ((t = E[A]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, gu);
                    const A = (0, r.useContext)(mu),
                        n = A.extraLarge,
                        E = A.large,
                        F = A.medium,
                        a = A.small,
                        D = A.extraSmall,
                        o = A.extraLargeWidth,
                        l = A.largeWidth,
                        B = A.mediumWidth,
                        s = A.smallWidth,
                        C = A.extraSmallWidth,
                        c = A.extraLargeHeight,
                        d = A.largeHeight,
                        m = A.mediumHeight,
                        g = A.smallHeight,
                        h = A.extraSmallHeight,
                        _ = { extraLarge: c, large: d, medium: m, small: g, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && n) return e;
                        if (t.large && E) return e;
                        if (t.medium && F) return e;
                        if (t.small && a) return e;
                        if (t.extraSmall && D) return e;
                    } else {
                        if (t.extraLargeWidth && o) return i(e, t, _);
                        if (t.largeWidth && l) return i(e, t, _);
                        if (t.mediumWidth && B) return i(e, t, _);
                        if (t.smallWidth && s) return i(e, t, _);
                        if (t.extraSmallWidth && C) return i(e, t, _);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && c) return e;
                            if (t.largeHeight && d) return e;
                            if (t.mediumHeight && m) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && h) return e;
                        }
                    }
                    return null;
                };
                hu.defaultProps = {
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
                (0, r.memo)(hu);
                const _u = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    vu = ({ children: u }) => {
                        const e = (0, r.useContext)(mu),
                            t = (0, r.useState)(e),
                            A = t[0],
                            n = t[1],
                            E = (0, r.useCallback)((u, e) => {
                                const t = Du.view.pxToRem(u),
                                    A = Du.view.pxToRem(e);
                                n(Object.assign({ width: t, height: A }, Bu(t, A, ou)));
                            }, []),
                            F = (0, r.useCallback)(() => {
                                const u = Du.client.getSize('px');
                                E(u.width, u.height);
                            }, [E]);
                        (_u(() => {
                            (Du.client.events.on('clientResized', E), Du.client.events.on('self.onScaleUpdated', F));
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    (Du.client.events.off('clientResized', E),
                                        Du.client.events.off('self.onScaleUpdated', F));
                                },
                                [E, F],
                            ));
                        const i = (0, r.useMemo)(() => Object.assign({}, A), [A]);
                        return a().createElement(mu.Provider, { value: i }, u);
                    };
                var fu = t(483),
                    pu = t.n(fu),
                    bu = t(926),
                    xu = t.n(bu);
                let wu, Lu, Su;
                (!(function (u) {
                    ((u[(u.ExtraSmall = ou.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = ou.small.width)] = 'Small'),
                        (u[(u.Medium = ou.medium.width)] = 'Medium'),
                        (u[(u.Large = ou.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = ou.extraLarge.width)] = 'ExtraLarge'));
                })(wu || (wu = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = ou.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = ou.small.width)] = 'Small'),
                            (u[(u.Medium = ou.medium.width)] = 'Medium'),
                            (u[(u.Large = ou.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = ou.extraLarge.width)] = 'ExtraLarge'));
                    })(Lu || (Lu = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = ou.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = ou.small.height)] = 'Small'),
                            (u[(u.Medium = ou.medium.height)] = 'Medium'),
                            (u[(u.Large = ou.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = ou.extraLarge.height)] = 'ExtraLarge'));
                    })(Su || (Su = {})));
                const yu = () => {
                        const u = (0, r.useContext)(mu),
                            e = u.width,
                            t = u.height,
                            A = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return wu.ExtraLarge;
                                    case u.large:
                                        return wu.Large;
                                    case u.medium:
                                        return wu.Medium;
                                    case u.small:
                                        return wu.Small;
                                    case u.extraSmall:
                                        return wu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), wu.ExtraSmall);
                                }
                            })(u),
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return Lu.ExtraLarge;
                                    case u.largeWidth:
                                        return Lu.Large;
                                    case u.mediumWidth:
                                        return Lu.Medium;
                                    case u.smallWidth:
                                        return Lu.Small;
                                    case u.extraSmallWidth:
                                        return Lu.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Lu.ExtraSmall);
                                }
                            })(u),
                            E = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return Su.ExtraLarge;
                                    case u.largeHeight:
                                        return Su.Large;
                                    case u.mediumHeight:
                                        return Su.Medium;
                                    case u.smallHeight:
                                        return Su.Small;
                                    case u.extraSmallHeight:
                                        return Su.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), Su.ExtraSmall);
                                }
                            })(u);
                        return { mediaSize: A, mediaWidth: n, mediaHeight: E, remScreenWidth: e, remScreenHeight: t };
                    },
                    Mu = ['children', 'className'];
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (u[A] = t[A]);
                                }
                                return u;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const Tu = {
                        [Lu.ExtraSmall]: '',
                        [Lu.Small]: xu().SMALL_WIDTH,
                        [Lu.Medium]: `${xu().SMALL_WIDTH} ${xu().MEDIUM_WIDTH}`,
                        [Lu.Large]: `${xu().SMALL_WIDTH} ${xu().MEDIUM_WIDTH} ${xu().LARGE_WIDTH}`,
                        [Lu.ExtraLarge]: `${xu().SMALL_WIDTH} ${xu().MEDIUM_WIDTH} ${xu().LARGE_WIDTH} ${xu().EXTRA_LARGE_WIDTH}`,
                    },
                    Ru = {
                        [Su.ExtraSmall]: '',
                        [Su.Small]: xu().SMALL_HEIGHT,
                        [Su.Medium]: `${xu().SMALL_HEIGHT} ${xu().MEDIUM_HEIGHT}`,
                        [Su.Large]: `${xu().SMALL_HEIGHT} ${xu().MEDIUM_HEIGHT} ${xu().LARGE_HEIGHT}`,
                        [Su.ExtraLarge]: `${xu().SMALL_HEIGHT} ${xu().MEDIUM_HEIGHT} ${xu().LARGE_HEIGHT} ${xu().EXTRA_LARGE_HEIGHT}`,
                    },
                    Iu = {
                        [wu.ExtraSmall]: '',
                        [wu.Small]: xu().SMALL,
                        [wu.Medium]: `${xu().SMALL} ${xu().MEDIUM}`,
                        [wu.Large]: `${xu().SMALL} ${xu().MEDIUM} ${xu().LARGE}`,
                        [wu.ExtraLarge]: `${xu().SMALL} ${xu().MEDIUM} ${xu().LARGE} ${xu().EXTRA_LARGE}`,
                    },
                    Wu = (u) => {
                        let e = u.children,
                            t = u.className,
                            A = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    A,
                                    n = {},
                                    E = Object.keys(u);
                                for (A = 0; A < E.length; A++) ((t = E[A]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Mu);
                        const n = yu(),
                            E = n.mediaWidth,
                            F = n.mediaHeight,
                            r = n.mediaSize;
                        return a().createElement('div', Hu({ className: pu()(t, Tu[E], Ru[F], Iu[r]) }, A), e);
                    },
                    ku = ['children'];
                const Ou = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                A,
                                n = {},
                                E = Object.keys(u);
                            for (A = 0; A < E.length; A++) ((t = E[A]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                            return n;
                        })(u, ku);
                    return a().createElement(vu, null, a().createElement(Wu, t, e));
                };
                var Gu = t(533),
                    Pu = t.n(Gu);
                function Nu(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const $u = {
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
                let zu, ju;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(zu || (zu = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'),
                            (u.small = 'small'),
                            (u.medium = 'medium'),
                            (u.large = 'large'));
                    })(ju || (ju = {})));
                const Uu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: A,
                    disabled: n,
                    mixClass: E,
                    soundHover: F,
                    soundClick: i,
                    onMouseEnter: D,
                    onMouseMove: o,
                    onMouseDown: l,
                    onMouseUp: B,
                    onMouseLeave: s,
                    onClick: C,
                }) => {
                    const c = (0, r.useRef)(null),
                        d = (0, r.useState)(t),
                        m = d[0],
                        g = d[1],
                        h = (0, r.useState)(!1),
                        _ = h[0],
                        v = h[1];
                    return (
                        (0, r.useEffect)(() => {
                            function u(u) {
                                m && null !== c.current && !c.current.contains(u.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [m]),
                        (0, r.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: c,
                                className: pu()(
                                    $u.base,
                                    $u[`base__${A}`],
                                    n && $u.base__disabled,
                                    e && $u[`base__${e}`],
                                    m && $u.base__focus,
                                    _ && $u.base__highlightActive,
                                    E,
                                ),
                                onMouseEnter: function (u) {
                                    n || (null !== F && Nu(F), D && D(u));
                                },
                                onMouseMove: function (u) {
                                    o && o(u);
                                },
                                onMouseUp: function (u) {
                                    n || (B && B(u), v(!1));
                                },
                                onMouseDown: function (u) {
                                    n ||
                                        (null !== i && Nu(i),
                                        l && l(u),
                                        t && (n || (c.current && (c.current.focus(), g(!0)))),
                                        v(!0));
                                },
                                onMouseLeave: function (u) {
                                    n || (s && s(u), v(!1));
                                },
                                onClick: function (u) {
                                    n || (C && C(u));
                                },
                            },
                            A !== zu.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: $u.back }),
                                    a().createElement('span', { className: $u.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: pu()($u.state, $u.state__default) },
                                a().createElement('span', { className: $u.stateDisabled }),
                                a().createElement('span', { className: $u.stateHighlightHover }),
                                a().createElement('span', { className: $u.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: $u.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                Uu.defaultProps = { type: zu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Vu = Uu,
                    Xu =
                        (u, e) =>
                        (...t) => {
                            if (u(...t)) return e(...t);
                        };
                let qu;
                !(function (u) {
                    ((u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH'));
                })(qu || (qu = {}));
                const Qu = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    Zu = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
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
                    ];
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (u[A] = t[A]);
                                }
                                return u;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const Ku = (u) => {
                        let e = u.type,
                            t = u.children,
                            A = u.className,
                            n = u.classNames,
                            E = u.disabled,
                            F = void 0 !== E && E,
                            i = u.isVisibleLabel,
                            D = void 0 !== i && i,
                            o = u.soundHover,
                            l = void 0 === o ? R.sounds.highlight() : o,
                            B = u.soundClick,
                            s = void 0 === B ? R.sounds.play() : B,
                            C = u.size,
                            c = void 0 === C ? 'normal' : C,
                            d = u.onClick,
                            m = u.onMouseEnter,
                            g = u.onMouseLeave,
                            h = u.onMouseDown,
                            _ = u.onMouseUp,
                            v = u.onFocus,
                            f = u.onBlur,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    A,
                                    n = {},
                                    E = Object.keys(u);
                                for (A = 0; A < E.length; A++) ((t = E[A]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                return n;
                            })(u, Zu);
                        const b = (0, r.useState)(!1),
                            x = b[0],
                            w = b[1],
                            L = (0, r.useState)(!1),
                            S = L[0],
                            y = L[1],
                            M = (0, r.useRef)(null),
                            H = () => !1 === F,
                            T = (u) => H() && ((u) => u.button === qu.LEFT)(u),
                            I = Xu(H, (u) => {
                                null == d || d(u);
                            }),
                            W = Xu(T, (u) => {
                                (w(!0), null == h || h(u), s && Nu(s));
                            }),
                            k = Xu(T, (u) => {
                                (w(!1), null == _ || _(u));
                            }),
                            O = Xu(H, (u) => {
                                (y(!0), null == m || m(u), l && Nu(l));
                            }),
                            G = Xu(H, (u) => {
                                null == v || v(u);
                            }),
                            P = Xu(H, (u) => {
                                null == f || f(u);
                            });
                        return a().createElement(
                            'div',
                            Ju(
                                {
                                    ref: M,
                                    className: pu()(
                                        Qu.base,
                                        F && Qu.base__disabled,
                                        D && Qu.base__visibleLabel,
                                        !F && x && Qu.base__mouseDown,
                                        !F && S && Qu.base__hovered,
                                        A,
                                    ),
                                    onClick: I,
                                    onMouseEnter: O,
                                    onMouseLeave: (u) => {
                                        (y(!1), w(!1), null == g || g(u));
                                    },
                                    onMouseDown: W,
                                    onMouseUp: k,
                                    onFocus: G,
                                    onBlur: P,
                                },
                                p,
                            ),
                            a().createElement('div', {
                                className: pu()(
                                    Qu.icon,
                                    Qu[`icon__${c}`],
                                    Qu[`icon__${e}`],
                                    null == n ? void 0 : n.icon,
                                ),
                            }),
                            t &&
                                a().createElement(
                                    'div',
                                    { className: pu()(Qu.label, Qu[`label__${c}`], null == n ? void 0 : n.label) },
                                    t,
                                ),
                        );
                    },
                    Yu = {
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
                    ue = [
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
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (u[A] = t[A]);
                                }
                                return u;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                class te extends a().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Nu(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Nu(this.props.soundClick));
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
                            A = u.goto,
                            n = u.side,
                            E = u.type,
                            F = u.classNames,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            D = u.onMouseDown,
                            o = u.onMouseUp,
                            l =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        A,
                                        n = {},
                                        E = Object.keys(u);
                                    for (A = 0; A < E.length; A++) ((t = E[A]), e.indexOf(t) >= 0 || (n[t] = u[t]));
                                    return n;
                                })(u, ue)),
                            B = pu()(Yu.base, Yu[`base__${E}`], Yu[`base__${n}`], null == F ? void 0 : F.base),
                            s = pu()(Yu.icon, Yu[`icon__${E}`], Yu[`icon__${n}`], null == F ? void 0 : F.icon),
                            C = pu()(Yu.glow, null == F ? void 0 : F.glow),
                            c = pu()(Yu.caption, Yu[`caption__${E}`], null == F ? void 0 : F.caption),
                            d = pu()(Yu.goto, null == F ? void 0 : F.goto);
                        return a().createElement(
                            'div',
                            ee(
                                {
                                    className: B,
                                    onMouseEnter: this._onMouseEnter(r),
                                    onMouseLeave: this._onMouseLeave(i),
                                    onMouseDown: this._onMouseDown(D),
                                    onMouseUp: this._onMouseUp(o),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                l,
                            ),
                            'info' !== E && a().createElement('div', { className: Yu.shine }),
                            a().createElement('div', { className: s }, a().createElement('div', { className: C })),
                            a().createElement('div', { className: c }, e),
                            A && a().createElement('div', { className: d }, A),
                        );
                    }
                }
                let Ae;
                ((te.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        ((u.IMAGE = 'image'), (u.VIDEO = 'video'));
                    })(Ae || (Ae = {})));
                var ne = t(403),
                    Ee = t(281);
                let Fe;
                function re(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                })(Fe || (Fe = {}));
                const ae = (u) => u.replace(/&nbsp;/g, ' '),
                    ie = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    De = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    oe = (u, e, t = Fe.left) => u.split(e).reduce(t === Fe.left ? ie : De, []),
                    le = (() => {
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
                    Be = ['zh_cn', 'zh_sg', 'zh_tw'],
                    se = (u, e = Fe.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Be.includes(t)) return le(u);
                        if ('ja' === t) {
                            return (0, Ee.D4)()
                                .parse(u)
                                .map((u) => ae(u));
                        }
                        return ((u, e = Fe.left) => {
                            let t = [];
                            const A =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                n = ae(u);
                            return (oe(n, /( )/, e).forEach((u) => (t = t.concat(oe(u, A, Fe.left)))), t);
                        })(u, e);
                    },
                    Ce = 'FormatText_base_d0',
                    ce = ({ binding: u, text: e = '', classMix: t, alignment: A = Fe.left, formatWithBrackets: n }) => {
                        if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                        const E = n && u ? re(e, u) : e;
                        return a().createElement(
                            r.Fragment,
                            null,
                            E.split('\n').map((e, n) =>
                                a().createElement(
                                    'div',
                                    { className: pu()(Ce, t), key: `${e}-${n}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : se(u, e))))(
                                        e,
                                        A,
                                        u,
                                    ).map((u, e) => a().createElement(r.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                function de() {
                    return !1;
                }
                console.log;
                var me = t(174);
                function ge(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return he(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return he(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var A = 0;
                        return function () {
                            return A >= u.length ? { done: !0 } : { done: !1, value: u[A++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function he(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, A = new Array(e); t < e; t++) A[t] = u[t];
                    return A;
                }
                const _e = (u) => (0 === u ? window : window.subViews.get(u));
                const ve = ((u, e) => {
                        const t = (0, r.createContext)({});
                        return [
                            function ({ mode: A = 'real', options: n, children: E, mocks: F }) {
                                const i = (0, r.useRef)([]),
                                    D = (t, A, n) => {
                                        var E;
                                        const F = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = _e,
                                                context: A = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function E(u, e = 0) {
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
                                                const F = (u) => {
                                                    const n = t(e),
                                                        E = A.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? E
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, E);
                                                };
                                                return {
                                                    subscribe: (t, E) => {
                                                        const r = 'string' == typeof E ? `${A}.${E}` : A,
                                                            a = Du.view.addModelObserver(r, e, !0);
                                                        return (n.set(a, t), u && t(F(E)), a);
                                                    },
                                                    readByPath: F,
                                                    createCallback: (u, e) => {
                                                        const t = F(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = F(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = ge(n.keys()); !(u = t()).done;) E(u.value, e);
                                                    },
                                                    unsubscribe: E,
                                                };
                                            })(A),
                                            r =
                                                'real' === t
                                                    ? F
                                                    : Object.assign({}, F, {
                                                          readByPath:
                                                              null != (E = null == n ? void 0 : n.getter)
                                                                  ? E
                                                                  : () => {},
                                                      }),
                                            a = (u) =>
                                                'mocks' === t ? (null == n ? void 0 : n.getter(u)) : r.readByPath(u),
                                            D = (u) => i.current.push(u),
                                            o = u({
                                                mode: t,
                                                readByPath: a,
                                                externalModel: r,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const A = null != e ? e : a(u),
                                                            n = me.LO.box(A, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                r.subscribe(
                                                                    (0, me.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const A = null != e ? e : a(u),
                                                            n = me.LO.box(A, { equals: de });
                                                        return (
                                                            'real' === t &&
                                                                r.subscribe(
                                                                    (0, me.aD)((u) => n.set(u)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const A = a(e);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (u, e) => ((u[e] = me.LO.box(A[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    r.subscribe(
                                                                        (0, me.aD)((e) => {
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
                                                                E = Object.entries(n),
                                                                F = E.reduce(
                                                                    (u, [e, t]) => ((u[t] = me.LO.box(A[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    r.subscribe(
                                                                        (0, me.aD)((u) => {
                                                                            E.forEach(([e, t]) => {
                                                                                F[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                F
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: D,
                                            }),
                                            l = { mode: t, model: o, externalModel: r, cleanup: D };
                                        return {
                                            model: o,
                                            controls: 'mocks' === t && n ? n.controls(l) : e(l),
                                            externalModel: r,
                                            mode: t,
                                        };
                                    },
                                    o = (0, r.useRef)(!1),
                                    l = (0, r.useState)(A),
                                    B = l[0],
                                    s = l[1],
                                    C = (0, r.useState)(() => D(A, n, F)),
                                    c = C[0],
                                    d = C[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        o.current ? d(D(B, n, F)) : (o.current = !0);
                                    }, [F, B, n]),
                                    (0, r.useEffect)(() => {
                                        s(A);
                                    }, [A]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            (c.externalModel.dispose(), i.current.forEach((u) => u()));
                                        },
                                        [c],
                                    ),
                                    a().createElement(t.Provider, { value: c }, E)
                                );
                            },
                            () => (0, r.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) => ({ root: u.object() }),
                        ({ externalModel: u }) => ({
                            close: u.createCallbackNoArgs('onClose'),
                            preview: u.createCallbackNoArgs('onPreview'),
                            learn: u.createCallbackNoArgs('onLearn'),
                        }),
                    ),
                    fe = ve[0],
                    pe = ve[1],
                    be = {
                        base: 'App_base_ae',
                        fadeIn: 'App_fadeIn_f1',
                        base__blurred: 'App_base__blurred_13',
                        close: 'App_close_cd',
                        imageWrapper: 'App_imageWrapper_b0',
                        image: 'App_image_6e',
                        playWrapper: 'App_playWrapper_7b',
                        preview: 'App_preview_dc',
                        content: 'App_content_3e',
                        content__video: 'App_content__video_24',
                        name: 'App_name_ed',
                        description: 'App_description_69',
                        divider: 'App_divider_01',
                        buttons: 'App_buttons_10',
                        button: 'App_button_06',
                        urlIcon: 'App_urlIcon_4f',
                        fadeInWithScale: 'App_fadeInWithScale_c6',
                        slideUp: 'App_slideUp_01',
                        fadeOut: 'App_fadeOut_e5',
                    },
                    xe = 'PlayButton_base_22',
                    we = 'PlayButton_hoverArea_f1',
                    Le = 'PlayButton_hover_1e',
                    Se = 'PlayButton_blur_bb',
                    ye = 'PlayButton_playIcon_41',
                    Me = ({ onClick: u }) =>
                        a().createElement(
                            'div',
                            { className: xe, onClick: u },
                            a().createElement('div', { className: we }),
                            a().createElement('div', { className: Le }),
                            a().createElement('div', { className: Se }),
                            a().createElement('div', { className: ye }),
                        ),
                    He = (0, ne.Pi)(() => {
                        const u = pe(),
                            e = u.model,
                            t = u.controls,
                            A = e.root.get(),
                            n = A.name,
                            E = A.description,
                            F = A.imageSrc,
                            i = A.contentType,
                            D = A.learning,
                            o = A.isBlurred,
                            l = (() => {
                                const u = (0, r.useRef)(null),
                                    e = (0, r.useState)({ width: 0, height: 0 }),
                                    t = e[0],
                                    A = e[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        const e = u.current;
                                        if (e) {
                                            const t = () => {
                                                u.current && A({ width: u.current.width, height: u.current.height });
                                            };
                                            return (
                                                t(),
                                                e.addEventListener('load', t),
                                                () => e.removeEventListener('load', t)
                                            );
                                        }
                                    }, []),
                                    { ref: u, box: t }
                                );
                            })(),
                            B = l.ref,
                            s = l.box;
                        return a().createElement(
                            'div',
                            {
                                className: pu()(be.base, o && be.base__blurred),
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            a().createElement(
                                'div',
                                { className: be.close },
                                a().createElement(te, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.close,
                                }),
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: be.imageWrapper,
                                    style: { '--width': `${s.width}rem`, '--height': `${s.height}rem` },
                                },
                                F && a().createElement('img', { ref: B, src: F, alt: '', className: be.image }),
                                i === Ae.VIDEO &&
                                    a().createElement(
                                        'div',
                                        { className: be.playWrapper },
                                        a().createElement(Me, { onClick: t.preview }),
                                    ),
                            ),
                            i === Ae.IMAGE &&
                                a().createElement(
                                    'div',
                                    { className: be.preview },
                                    a().createElement(Ku, {
                                        type: 'preview',
                                        size: 'normal',
                                        className: be.iconButton,
                                        onClick: t.preview,
                                    }),
                                ),
                            a().createElement(
                                'div',
                                { className: pu()(be.content, i === Ae.VIDEO && be.content__video) },
                                a().createElement('div', { className: be.name }, n),
                                a().createElement(ce, { text: E, classMix: be.description }),
                                a().createElement('div', { className: be.divider }),
                                a().createElement(
                                    'div',
                                    { className: be.buttons },
                                    a().createElement(
                                        Vu,
                                        { mixClass: be.button, type: zu.primary, size: ju.medium, onClick: t.close },
                                        R.strings.wot_anniversary.albumCardView.affirmative(),
                                    ),
                                    D &&
                                        a().createElement(
                                            Vu,
                                            {
                                                mixClass: be.button,
                                                type: zu.secondary,
                                                size: ju.medium,
                                                onClick: t.learn,
                                            },
                                            R.strings.wot_anniversary.albumCardView.learn(),
                                            a().createElement('div', { className: be.urlIcon }),
                                        ),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    Pu().render(
                        a().createElement(Ou, null, a().createElement(fe, null, a().createElement(He, null))),
                        document.getElementById('root'),
                    );
                });
            },
            363: (u) => {
                'use strict';
                u.exports = React;
            },
            533: (u) => {
                'use strict';
                u.exports = ReactDOM;
            },
        },
        t = {};
    function A(u) {
        var n = t[u];
        if (void 0 !== n) return n.exports;
        var E = (t[u] = { exports: {} });
        return (e[u](E, E.exports, A), E.exports);
    }
    ((A.m = e),
        (u = []),
        (A.O = (e, t, n, E) => {
            if (!t) {
                var F = 1 / 0;
                for (D = 0; D < u.length; D++) {
                    for (var [t, n, E] = u[D], r = !0, a = 0; a < t.length; a++)
                        (!1 & E || F >= E) && Object.keys(A.O).every((u) => A.O[u](t[a]))
                            ? t.splice(a--, 1)
                            : ((r = !1), E < F && (F = E));
                    if (r) {
                        u.splice(D--, 1);
                        var i = n();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            E = E || 0;
            for (var D = u.length; D > 0 && u[D - 1][2] > E; D--) u[D] = u[D - 1];
            u[D] = [t, n, E];
        }),
        (A.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (A.d(e, { a: e }), e);
        }),
        (A.d = (u, e) => {
            for (var t in e) A.o(e, t) && !A.o(u, t) && Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (A.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (A.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (A.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (A.j = 928),
        (() => {
            var u = { 928: 0 };
            A.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        E,
                        [F, r, a] = t,
                        i = 0;
                    if (F.some((e) => 0 !== u[e])) {
                        for (n in r) A.o(r, n) && (A.m[n] = r[n]);
                        if (a) var D = a(A);
                    }
                    for (e && e(t); i < F.length; i++) ((E = F[i]), A.o(u, E) && u[E] && u[E][0](), (u[E] = 0));
                    return A.O(D);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var n = A.O(void 0, [46], () => A(255));
    n = A.O(n);
})();
