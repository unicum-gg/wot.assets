(() => {
    var __webpack_modules__ = {
            3495: (u, e, t) => {
                'use strict';
                t.d(e, { Y: () => c });
                var r = t(3138),
                    o = t(6179),
                    a = t(1043),
                    n = t(5262);
                const i = r.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    E = Object.assign({ width: s, height: l }, (0, n.T)(s, l, a.j)),
                    c = (0, o.createContext)(E);
            },
            1039: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => E });
                var r = t(6179),
                    o = t.n(r),
                    a = t(6536),
                    n = t(3495),
                    i = t(1043),
                    s = t(5262),
                    l = t(3138);
                const E = (0, r.memo)(({ children: u }) => {
                    const e = (0, r.useContext)(n.Y),
                        t = (0, r.useState)(e),
                        E = t[0],
                        c = t[1],
                        A = (0, r.useCallback)((u, e) => {
                            const t = l.O.view.pxToRem(u),
                                r = l.O.view.pxToRem(e);
                            c(Object.assign({ width: t, height: r }, (0, s.T)(t, r, i.j)));
                        }, []);
                    ((0, a.Z)(() => {
                        engine.on('clientResized', A);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', A), [A]));
                    const F = (0, r.useMemo)(() => Object.assign({}, E), [E]);
                    return o().createElement(n.Y.Provider, { value: F }, u);
                });
            },
            6010: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    o = t(7382),
                    a = t(3495);
                const n = ['children'],
                    i = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    o = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                return o;
                            })(u, n);
                        const i = (0, r.useContext)(a.Y),
                            s = i.extraLarge,
                            l = i.large,
                            E = i.medium,
                            c = i.small,
                            A = i.extraSmall,
                            F = i.extraLargeWidth,
                            d = i.largeWidth,
                            D = i.mediumWidth,
                            _ = i.smallWidth,
                            m = i.extraSmallWidth,
                            B = i.extraLargeHeight,
                            C = i.largeHeight,
                            h = i.mediumHeight,
                            g = i.smallHeight,
                            p = i.extraSmallHeight,
                            b = { extraLarge: B, large: C, medium: h, small: g, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return e;
                            if (t.large && l) return e;
                            if (t.medium && E) return e;
                            if (t.small && c) return e;
                            if (t.extraSmall && A) return e;
                        } else {
                            if (t.extraLargeWidth && F) return (0, o.H)(e, t, b);
                            if (t.largeWidth && d) return (0, o.H)(e, t, b);
                            if (t.mediumWidth && D) return (0, o.H)(e, t, b);
                            if (t.smallWidth && _) return (0, o.H)(e, t, b);
                            if (t.extraSmallWidth && m) return (0, o.H)(e, t, b);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && h) return e;
                                if (t.smallHeight && g) return e;
                                if (t.extraSmallHeight && p) return e;
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
                    (0, r.memo)(i));
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
                (t.d(e, { YN: () => o.Y, ZN: () => r.Z }), t(6010));
                var r = t(1039),
                    o = t(3495);
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
                function o(u, e, t) {
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
                        o = (function (u, e) {
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
                        a = Math.min(r, o);
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
                        extraLargeHeight: o === t.extraLarge.weight,
                        largeHeight: o === t.large.weight,
                        mediumHeight: o === t.medium.weight,
                        smallHeight: o === t.small.weight,
                        extraSmallHeight: o === t.extraSmall.weight,
                    };
                }
                (t.d(e, { T: () => o }),
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
            527: (u, e, t) => {
                'use strict';
                (t.r(e), t.d(e, { mouse: () => i, onResize: () => a }));
                var r = t(2472),
                    o = t(1176);
                const a = (0, r.E)('clientResized'),
                    n = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, o.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, o.R)(!0);
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
                                : (0, o.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let o = !0;
                                        const a = `mouse${e}`,
                                            i = n[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            r(),
                                            () => {
                                                o &&
                                                    (i(),
                                                    window.removeEventListener(a, s),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (o = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((u.enabled = !1), r());
                            },
                            enable() {
                                ((u.enabled = !0), r());
                            },
                            enableOutside() {
                                u.enabled && (0, o.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, o.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => o,
                        graphicsQuality: () => n,
                    }));
                var r = t(527);
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => o });
                var r = t(5959);
                const o = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function o(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => o, getTextureUrl: () => r }));
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => o });
                var r = t(2472);
                const o = {
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
            7641: (u, e, t) => {
                'use strict';
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => v,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => S,
                        getScale: () => _,
                        getSize: () => A,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => m,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => f,
                    }));
                var r = t(3722),
                    o = t(6112),
                    a = t(6538),
                    n = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function m(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(o.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === o.W[e]), u),
                        {},
                    ),
                    w = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    f = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : a.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => a });
                const r = ['args'],
                    o = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        o = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                    return o;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((o = a),
                                              Object.entries(o).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var o;
                    },
                    a = {
                        close(u) {
                            o('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            o(64);
                        },
                        move(u) {
                            o(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            6536: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => o });
                var r = t(6179);
                const o = (u) => {
                    const e = (0, r.useRef)(!1);
                    e.current || (u(), (e.current = !0));
                };
            },
            5415: (u, e, t) => {
                'use strict';
                t.d(e, { Aq: () => s, GS: () => l, cJ: () => n, fd: () => i });
                var r = t(6179),
                    o = t(7739),
                    a = t(1043);
                let n, i, s;
                (!(function (u) {
                    ((u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = a.j.small.width)] = 'Small'),
                        (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                        (u[(u.Large = a.j.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                })(n || (n = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (u) {
                        ((u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(s || (s = {})));
                const l = () => {
                    const u = (0, r.useContext)(o.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return n.ExtraLarge;
                                case u.large:
                                    return n.Large;
                                case u.medium:
                                    return n.Medium;
                                case u.small:
                                    return n.Small;
                                case u.extraSmall:
                                    return n.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), n.ExtraSmall);
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return i.ExtraLarge;
                                case u.largeWidth:
                                    return i.Large;
                                case u.mediumWidth:
                                    return i.Medium;
                                case u.smallWidth:
                                    return i.Small;
                                case u.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(u),
                        E = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return s.ExtraLarge;
                                case u.largeHeight:
                                    return s.Large;
                                case u.mediumHeight:
                                    return s.Medium;
                                case u.smallHeight:
                                    return s.Small;
                                case u.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: E, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, o;
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
                    })(o || (o = {})));
            },
            3649: (u, e, t) => {
                'use strict';
                let r;
                function o(u) {
                    return u.replace(/-/g, '_');
                }
                (t.d(e, { BN: () => o, Uw: () => E, v2: () => r }),
                    (function (u) {
                        ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'));
                    })(r || (r = {})));
                const a = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    n = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    i = (u, e, t = r.left) => u.split(e).reduce(t === r.left ? a : n, []),
                    s = (() => {
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
                    l = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (u, e, t) =>
                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                            t && u in t
                                ? t[u]
                                : ((u, e = r.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return l.includes(t)
                                          ? s(u)
                                          : ((u, e = r.left) => {
                                                let t = [];
                                                const o =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    a = u.replace(/&nbsp;/g, ' ');
                                                return (
                                                    i(a, /( )/, e).forEach((u) => (t = t.concat(i(u, o, r.left)))),
                                                    t
                                                );
                                            })(u, e);
                                  })(u, e),
                        );
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(3138);
                class o {
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
                        return (window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(u, e, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, o);
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
                o.__instance = void 0;
                const a = o;
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
                t.d(e, { Sw: () => a.Z, ry: () => C });
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
                const o = r;
                var a = t(1358);
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
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
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    D = t(3138);
                const _ = ['args'];
                function m(u, e, t, r, o, a, n) {
                    try {
                        var i = u[a](n),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(r, o);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                    return new Promise(function (r, o) {
                                        var a = u.apply(e, t);
                                        function n(u) {
                                            m(a, r, o, n, i, 'next', u);
                                        }
                                        function i(u) {
                                            m(a, r, o, n, i, 'throw', u);
                                        }
                                        n(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        o = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                    return o;
                                })(e, _);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = o),
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
                    g = () => h(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var b = t(7572);
                const S = o.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, o = R.invalid('resId'), a) => {
                            const n = D.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                E = i.y,
                                c = i.width,
                                A = i.height,
                                F = {
                                    x: D.O.view.pxToRem(l) + n.x,
                                    y: D.O.view.pxToRem(E) + n.y,
                                    width: D.O.view.pxToRem(c),
                                    height: D.O.view.pxToRem(A),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const o = Object.prototype.toString.call(e[r]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < o.length; e++) t[r].push({ value: u(o[e].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: n,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = v;
            },
            4782: (u, e, t) => {
                'use strict';
                var r = t(7739),
                    o = t(6179),
                    a = t.n(o),
                    n = t(6483),
                    i = t.n(n),
                    s = t(926),
                    l = t.n(s),
                    E = t(5415);
                const c = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const F = {
                        [E.fd.ExtraSmall]: '',
                        [E.fd.Small]: l().SMALL_WIDTH,
                        [E.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [E.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [E.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    d = {
                        [E.Aq.ExtraSmall]: '',
                        [E.Aq.Small]: l().SMALL_HEIGHT,
                        [E.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [E.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [E.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [E.cJ.ExtraSmall]: '',
                        [E.cJ.Small]: l().SMALL,
                        [E.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [E.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [E.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    _ = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    o = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                return o;
                            })(u, c);
                        const o = (0, E.GS)(),
                            n = o.mediaWidth,
                            s = o.mediaHeight,
                            l = o.mediaSize;
                        return a().createElement('div', A({ className: i()(t, F[n], d[s], D[l]) }, r), e);
                    },
                    m = ['children'],
                    B = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    o = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                return o;
                            })(u, m);
                        return a().createElement(r.ZN, null, a().createElement(_, t, e));
                    };
                var C = t(493),
                    h = t.n(C);
                function g(u) {
                    engine.call('PlaySound', u);
                }
                const p = {
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
                    b = [
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
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                class v extends a().PureComponent {
                    constructor(...u) {
                        (super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && g(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                (u && u(e), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                (u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && g(this.props.soundClick));
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
                            o = u.side,
                            n = u.type,
                            s = u.classNames,
                            l = u.onMouseEnter,
                            E = u.onMouseLeave,
                            c = u.onMouseDown,
                            A = u.onMouseUp,
                            F =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        o = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                    return o;
                                })(u, b)),
                            d = i()(p.base, p[`base__${n}`], p[`base__${o}`], null == s ? void 0 : s.base),
                            D = i()(p.icon, p[`icon__${n}`], p[`icon__${o}`], null == s ? void 0 : s.icon),
                            _ = i()(p.glow, null == s ? void 0 : s.glow),
                            m = i()(p.caption, p[`caption__${n}`], null == s ? void 0 : s.caption),
                            B = i()(p.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            S(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(E),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== n && a().createElement('div', { className: p.shine }),
                            a().createElement('div', { className: D }, a().createElement('div', { className: _ })),
                            a().createElement('div', { className: m }, e),
                            r && a().createElement('div', { className: B }, r),
                        );
                    }
                }
                v.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var w = t(3138),
                    f = t(5521);
                t(4179);
                const x = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function T(u = f.n.NONE, e = x, t = !1) {
                    (0, o.useEffect)(() => {
                        if (u !== f.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (w.O.view.isEventHandled()) return;
                                (w.O.view.setEventHandled(), e(r), t && r.stopPropagation());
                            }
                        }
                    }, [e, u, t]);
                }
                var L = t(3282);
                let y;
                !(function (u) {
                    ((u[(u.NonSet = 0)] = 'NonSet'),
                        (u[(u.Debug = 10)] = 'Debug'),
                        (u[(u.Info = 20)] = 'Info'),
                        (u[(u.Warning = 30)] = 'Warning'));
                })(y || (y = {}));
                const M = 'tooltip_watched';
                let O;
                !(function (u) {
                    ((u.Click = 'click'), (u.KeyDown = 'keydown'));
                })(O || (O = {}));
                const k = ['action', 'timeLimit'],
                    P = 'metrics',
                    N = () => Date.now(),
                    H = ({ partnerID: u, item: e, parentScreen: t, itemState: r, info: o }) => ({
                        item: e,
                        partnerID: u || null,
                        parent_screen: t || null,
                        item_state: r || null,
                        additional_info: o || null,
                    }),
                    I = (u, e) => {
                        const t = (0, o.useCallback)(
                            (t, r = y.Info, o) => {
                                (o || (o = {}),
                                    Object.keys(o).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: u,
                                            group: e,
                                            action: t,
                                            logLevel: r,
                                            params: JSON.stringify(o),
                                        }));
                            },
                            [u, e],
                        );
                        return (u, e, r) => t(u, e, r);
                    },
                    W = (u) => {
                        const e = ((u, e) => {
                                const t = I(u, e),
                                    r = (0, o.useRef)(new Map()),
                                    a = (0, o.useRef)(new Map()),
                                    n = (0, o.useCallback)(
                                        (u) => {
                                            if (!u) return;
                                            const e = r.current.get(u);
                                            (void 0 !== e && e > 0) || r.current.set(u, N());
                                        },
                                        [r],
                                    ),
                                    i = (0, o.useCallback)(() => {
                                        (r.current.clear(), a.current.clear());
                                    }, [r, a]),
                                    s = (0, o.useCallback)(
                                        (u) => {
                                            u &&
                                                void 0 !== r.current.get(u) &&
                                                void 0 === a.current.get(u) &&
                                                a.current.set(u, N());
                                        },
                                        [r, a],
                                    ),
                                    l = (0, o.useCallback)(
                                        (u) => {
                                            if (!u) return;
                                            const e = r.current.get(u);
                                            if (void 0 === e) return;
                                            const t = a.current.get(u);
                                            if (void 0 === t) return;
                                            a.current.delete(u);
                                            const o = N() - t;
                                            r.current.set(u, e + o);
                                        },
                                        [r, a],
                                    ),
                                    E = (0, o.useCallback)(
                                        (u, e = 0, o, n) => {
                                            const i = r.current.get(u);
                                            if (void 0 === i) return;
                                            (void 0 !== a.current.get(u) && l(u), r.current.delete(u));
                                            const s = (N() - i) / 1e3;
                                            s <= e ||
                                                ((n = ((u, e) => (void 0 === u && (u = {}), (u.timeSpent = e), u))(
                                                    n,
                                                    s,
                                                )),
                                                t(u, o, n));
                                        },
                                        [r, a, t, l],
                                    );
                                return [
                                    (u) => n(u),
                                    (u, e, t, r) => E(u, e, t, r),
                                    () => i(),
                                    (u) => s(u),
                                    (u) => l(u),
                                ];
                            })(u, P),
                            t = e[0],
                            r = e[1],
                            a = e[2],
                            n = e[3],
                            i = e[4],
                            s = (0, o.useCallback)(
                                (u) => {
                                    const e = u.action,
                                        t = u.timeLimit,
                                        o = u.logLevel;
                                    r(e, t, o, H(u));
                                },
                                [r],
                            );
                        return [(u) => t(u), (u) => s(u), () => a(), (u) => n(u), (u) => i(u)];
                    },
                    G = (u, e) => {
                        const t = W(u),
                            r = t[0],
                            a = t[1],
                            n = e.action,
                            i = e.timeLimit,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    o = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                return o;
                            })(e, k);
                        return (0, o.useMemo)(
                            () => ({
                                onShow: () => r(n || M),
                                onHide: () => a(Object.assign({ action: n || M, timeLimit: i || 2 }, s)),
                            }),
                            [n, i, s, r, a],
                        );
                    };
                let U, V, j, X;
                (!(function (u) {
                    u.Lootbox = 'lootbox';
                })(U || (U = {})),
                    (function (u) {
                        ((u.TooltipWatched = 'tooltip_watched'),
                            (u.Click = 'click'),
                            (u.VideoStarted = 'video_started'),
                            (u.Show = 'show'));
                    })(V || (V = {})),
                    (function (u) {
                        ((u.Storage = 'storage'),
                            (u.Probability = 'probability'),
                            (u.Rewards = 'rewards'),
                            (u.LoseRewards = 'lose_rewards'),
                            (u.RewardVideo = 'reward_video'),
                            (u.Welcome = 'welcome'),
                            (u.LootBoxesShortStats = 'lootboxes_short_stats'),
                            (u.LootBoxesFullStats = 'lootboxes_full_stats'));
                    })(j || (j = {})),
                    (function (u) {
                        ((u.IconPossibleRewardGroup = 'icon_possible_reward_group'),
                            (u.CarouselLootbox = 'carousel_lootbox'),
                            (u.InfoIcon = 'info_icon'),
                            (u.ESCButton = 'esc_button'),
                            (u.BackButton = 'back_button'),
                            (u.ProbabilityPercent = 'probability_percent'),
                            (u.ProbabilityPercentWithGarant = 'probability_percent_with_garant'),
                            (u.ProbabilityReward = 'probability_reward'),
                            (u.MinorRewards = 'minor_rewards'),
                            (u.RewardVideo = 'reward_video'),
                            (u.RewardToopltip = 'reward_tooltip'),
                            (u.RewardRotationToopltip = 'reward_totation_tooltip'),
                            (u.ContinueButton = 'continue_button'),
                            (u.OpenOneMoreButton = 'open_one_more_button'),
                            (u.OpenMultiButton = 'open_multi_button'),
                            (u.OpenInHangarButton = 'open_in_hangar_button'),
                            (u.OKButton = 'ok_button'),
                            (u.CloseButton = 'close_button'),
                            (u.StatisticButton = 'statistic_button'),
                            (u.StatisticESCButton = 'statistic_esc_button'),
                            (u.statisticOutsideClick = 'statistic_outside_click'),
                            (u.DeadlineWidget = 'deadline_widget'),
                            (u.LootBoxesShortStatsTabs = 'lootboxes_short_stats_tabs'),
                            (u.LootBoxesShortStatsGroup = 'lootboxes_short_stats_group'),
                            (u.LootBoxesFullStatsSidebar = 'lootboxes_full_stats_sidebar'),
                            (u.lootBoxesFullStatsSelectAll = 'lootboxes_full_stats_select_all'),
                            (u.lootBoxesFullStatsSelect = 'lootboxes_full_stats_select'),
                            (u.lootBoxesFullStatsReward = 'lootboxes_full_stats_reward'));
                    })(X || (X = {})));
                function Y() {
                    return !1;
                }
                console.log;
                var q = t(3915);
                function z(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const K = (u) => (0 === u ? window : window.subViews.get(u)),
                    $ = (u) => {
                        return null !== u && 'object' == typeof u
                            ? 'CoherentArrayProxy' === u.constructor.name
                                ? ((e = u),
                                  (t = (u) => ('object' == typeof u ? $(u) : u)),
                                  Array.isArray(e) ? e.map(t) : e.map((u, e, r) => t(null == u ? void 0 : u.value)))
                                : Array.isArray(u)
                                  ? u.map((u) => ('object' == typeof u ? $(u) : u))
                                  : Object.fromEntries(
                                        Object.entries(u).map(([u, e]) => [u, 'object' == typeof e ? $(e) : e]),
                                    )
                            : u;
                        var e, t;
                    },
                    J = (u) => $(u);
                var Z = t(6517);
                const Q = ((u, e) => {
                        const t = (0, o.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: n, mocks: i }) {
                                const s = (0, o.useRef)([]),
                                    l = (u, t, r) => {
                                        var o;
                                        const a = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = K,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function a(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? o.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = o.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const n = (u) => {
                                                    const o = t(e),
                                                        a = r.split('.').reduce((u, e) => u[e], o);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? a
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${r}.${a}` : r,
                                                            s = w.O.view.addModelObserver(i, e, !0);
                                                        return (o.set(s, t), u && t(n(a)), s);
                                                    },
                                                    readByPath: n,
                                                    createCallback: (u, e) => {
                                                        const t = n(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = n(u);
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
                                                                                    return z(u, e);
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
                                                                                          ? z(u, e)
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
                                                                })(o.keys());
                                                            !(u = t()).done;

                                                        )
                                                            a(u.value, e);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            n =
                                                'real' === u
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            i = (e) =>
                                                'mocks' === u ? (null == r ? void 0 : r.getter(e)) : n.readByPath(e),
                                            l = (u) => s.current.push(u),
                                            E = (({ observableModel: u }) => {
                                                const e = {
                                                        root: u.object(),
                                                        reward: u.array('reward.items'),
                                                        rewardVideos: u.array('rewardVideos'),
                                                    },
                                                    t = (0, Z.computedFn)(() => J(e.reward.get())[0], { equals: Y }),
                                                    r = (0, Z.computedFn)(() => J(e.rewardVideos.get()), { equals: Y });
                                                return Object.assign({}, e, {
                                                    computes: { getReward: t, getRewardVideos: r },
                                                });
                                            })({
                                                mode: u,
                                                readByPath: i,
                                                externalModel: n,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : i(e),
                                                            o = q.observable.box(r, { equals: Y });
                                                        return (
                                                            'real' === u &&
                                                                n.subscribe(
                                                                    (0, q.action)((u) => o.set(u)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : i(e),
                                                            o = q.observable.box(r, { equals: Y });
                                                        return (
                                                            'real' === u &&
                                                                n.subscribe(
                                                                    (0, q.action)((u) => o.set(u)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = i(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (u, e) => ((u[e] = q.observable.box(r[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    n.subscribe(
                                                                        (0, q.action)((u) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                a = Object.entries(o),
                                                                i = a.reduce(
                                                                    (u, [e, t]) => (
                                                                        (u[t] = q.observable.box(r[e], {})),
                                                                        u
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    n.subscribe(
                                                                        (0, q.action)((u) => {
                                                                            a.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            c = { mode: u, model: E, externalModel: n, cleanup: l };
                                        return {
                                            model: E,
                                            controls: 'mocks' === u && r ? r.controls(c) : e(c),
                                            externalModel: n,
                                            mode: u,
                                        };
                                    },
                                    E = (0, o.useRef)(!1),
                                    c = (0, o.useState)(u),
                                    A = c[0],
                                    F = c[1],
                                    d = (0, o.useState)(() => l(u, r, i)),
                                    D = d[0],
                                    _ = d[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        E.current ? _(l(A, r, i)) : (E.current = !0);
                                    }, [i, A, r]),
                                    (0, o.useEffect)(() => {
                                        F(u);
                                    }, [u]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (D.externalModel.dispose(), s.current.forEach((u) => u()));
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, n)
                                );
                            },
                            () => (0, o.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({
                        close: u.createCallbackNoArgs('onClose'),
                        videoStarted: u.createCallbackNoArgs('onVideoStarted'),
                    })),
                    uu = Q[0],
                    eu = Q[1],
                    tu = {
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
                let ru, ou;
                (!(function (u) {
                    ((u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost'));
                })(ru || (ru = {})),
                    (function (u) {
                        ((u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'));
                    })(ou || (ou = {})));
                const au = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: s,
                    soundHover: l,
                    soundClick: E,
                    onMouseEnter: c,
                    onMouseMove: A,
                    onMouseDown: F,
                    onMouseUp: d,
                    onMouseLeave: D,
                    onClick: _,
                }) => {
                    const m = (0, o.useRef)(null),
                        B = (0, o.useState)(t),
                        C = B[0],
                        h = B[1],
                        p = (0, o.useState)(!1),
                        b = p[0],
                        S = p[1],
                        v = (0, o.useState)(!1),
                        w = v[0],
                        f = v[1],
                        x = (0, o.useCallback)(() => {
                            n || (m.current && (m.current.focus(), h(!0)));
                        }, [n]),
                        T = (0, o.useCallback)(
                            (u) => {
                                C && null !== m.current && !m.current.contains(u.target) && h(!1);
                            },
                            [C],
                        ),
                        L = (0, o.useCallback)(
                            (u) => {
                                n || (_ && _(u));
                            },
                            [n, _],
                        ),
                        y = (0, o.useCallback)(
                            (u) => {
                                n || (null !== l && g(l), c && c(u), f(!0));
                            },
                            [n, l, c],
                        ),
                        M = (0, o.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        O = (0, o.useCallback)(
                            (u) => {
                                n || (d && d(u), S(!1));
                            },
                            [n, d],
                        ),
                        k = (0, o.useCallback)(
                            (u) => {
                                n || (null !== E && g(E), F && F(u), t && x(), S(!0));
                            },
                            [n, E, F, x, t],
                        ),
                        P = (0, o.useCallback)(
                            (u) => {
                                n || (D && D(u), S(!1));
                            },
                            [n, D],
                        ),
                        N = i()(
                            tu.base,
                            tu[`base__${r}`],
                            {
                                [tu.base__disabled]: n,
                                [tu[`base__${e}`]]: e,
                                [tu.base__focus]: C,
                                [tu.base__highlightActive]: b,
                                [tu.base__firstHover]: w,
                            },
                            s,
                        ),
                        H = i()(tu.state, tu.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, o.useEffect)(() => {
                            h(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: m,
                                className: N,
                                onMouseEnter: y,
                                onMouseMove: M,
                                onMouseUp: O,
                                onMouseDown: k,
                                onMouseLeave: P,
                                onClick: L,
                            },
                            r !== ru.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: tu.back }),
                                    a().createElement('span', { className: tu.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: H },
                                a().createElement('span', { className: tu.stateDisabled }),
                                a().createElement('span', { className: tu.stateHighlightHover }),
                                a().createElement('span', { className: tu.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: tu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                au.defaultProps = { type: ru.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const nu = (0, o.memo)(au);
                let iu, su, lu, Eu, cu, Au, Fu;
                (!(function (u) {
                    ((u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Currency = 'currency'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.Entitlements = 'entitlements'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.SelectableBonus = 'selectableBonus'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (u.NewYearFillers = 'ny22Fillers'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearToyFragments = 'ny22ToyFragments'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.CollectionItem = 'collectionItem'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.CosmicLootboxSilver = 'lootBoxToken'),
                        (u.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (u.Branch = 'branch'),
                        (u.VehicleSelect = 'vehicleSelect'),
                        (u.StyleProgress = 'styleProgress'),
                        (u.ParagonsUnlocks = 'paragonsUnlocks'),
                        (u.LootBoxToken = 'lootBoxToken'),
                        (u.GoldenTicket = 'birthday2025_golden_ticket'),
                        (u.PostStamp = 'giftsystem_4_stamp'),
                        (u.Quests = 'quests'),
                        (u.BlankPersonalMissions_1 = 'freeTokens_0'),
                        (u.BlankPersonalMissions_2 = 'freeTokens_2'),
                        (u.SACoin = 'sacoin'),
                        (u.ArmoryCoin = 'armory_coin'),
                        (u.PremiumPlusUniversal = 'premium_plus_universal'),
                        (u.DogTagType = 'dogTagComponents'),
                        (u.NyPetGoodies = 'nyPetGoodies'),
                        (u.HiddenVehicle = 'hidden_vehicle'),
                        (u.NyStaticDogTag = 'nyStaticDogTag'),
                        (u.Ny26Toys = 'ny26Toys'));
                })(iu || (iu = {})),
                    (function (u) {
                        ((u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'));
                    })(su || (su = {})),
                    (function (u) {
                        ((u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S48x48 = 's48x48'));
                    })(lu || (lu = {})),
                    (function (u) {
                        ((u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'));
                    })(Eu || (Eu = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(cu || (cu = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Au || (Au = {})),
                    (function (u) {
                        ((u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(Fu || (Fu = {})));
                var du = t(9887),
                    Du = t.n(du);
                const _u = ['xl', 'lg', 'md', 'sm', 'xs'],
                    mu = (u) => u.includes('_') && ((u) => _u.includes(u))(u.split('_').at(-1)),
                    Bu = [E.cJ.ExtraLarge, E.cJ.Large, E.cJ.Medium, E.cJ.Small, E.cJ.ExtraSmall],
                    Cu = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (mu(r)) {
                                const o = r.split('_').slice(0, -1).join('_');
                                if (o in t) return t;
                                const a = Bu.indexOf(e),
                                    n = (-1 !== a ? _u.slice(a) : [])
                                        .map((u) => o + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    i = n ? u[n] : void 0;
                                return ((t[o] = void 0 !== i ? i : u[o]), t);
                            }
                            const o = u[r];
                            return (
                                void 0 === o ||
                                    ((u, e) => _u.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = o),
                                t
                            );
                        }, {}),
                    hu = (u, e = Cu) => {
                        const t = (
                            (u, e = Cu) =>
                            (t) => {
                                const r = (0, E.GS)().mediaSize,
                                    n = (0, o.useMemo)(() => e(t, r), [t, r]);
                                return a().createElement(u, n);
                            }
                        )(u, e);
                        return a().memo((e) =>
                            Object.keys(e).some((u) => mu(u) && void 0 !== e[u])
                                ? a().createElement(t, e)
                                : a().createElement(u, e),
                        );
                    },
                    gu = {
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
                    pu = [
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
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                Object.keys(Du());
                const Su = {
                        XL: { mt: gu.mt__XL, mr: gu.mr__XL, mb: gu.mb__XL, ml: gu.ml__XL },
                        LG: { mt: gu.mt__LG, mr: gu.mr__LG, mb: gu.mb__LG, ml: gu.ml__LG },
                        MDp: { mt: gu.mt__MDp, mr: gu.mr__MDp, mb: gu.mb__MDp, ml: gu.ml__MDp },
                        MD: { mt: gu.mt__MD, mr: gu.mr__MD, mb: gu.mb__MD, ml: gu.ml__MD },
                        SMp: { mt: gu.mt__SMp, mr: gu.mr__SMp, mb: gu.mb__SMp, ml: gu.ml__SMp },
                        SM: { mt: gu.mt__SM, mr: gu.mr__SM, mb: gu.mb__SM, ml: gu.ml__SM },
                        XS: { mt: gu.mt__XS, mr: gu.mr__XS, mb: gu.mb__XS, ml: gu.ml__XS },
                    },
                    vu = (Object.keys(Su), ['mt', 'mr', 'mb', 'ml']),
                    wu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    fu = hu((u) => {
                        let e = u.className,
                            t = u.width,
                            r = u.height,
                            n = u.m,
                            s = u.mt,
                            l = void 0 === s ? n : s,
                            E = u.mr,
                            c = void 0 === E ? n : E,
                            A = u.mb,
                            F = void 0 === A ? n : A,
                            d = u.ml,
                            D = void 0 === d ? n : d,
                            _ = u.column,
                            m = u.row,
                            B = u.flexDirection,
                            C = void 0 === B ? (_ ? 'column' : m && 'row') || void 0 : B,
                            h = u.flexStart,
                            g = u.center,
                            p = u.flexEnd,
                            b = u.spaceBetween,
                            S = u.spaceAround,
                            v = u.justifyContent,
                            w =
                                void 0 === v
                                    ? (h ? 'flex-start' : g && 'center') ||
                                      (p && 'flex-end') ||
                                      (b && 'space-between') ||
                                      (S && 'space-around') ||
                                      void 0
                                    : v,
                            f = u.alignItems,
                            x = void 0 === f ? (h ? 'flex-start' : g && 'center') || (p && 'flex-end') || void 0 : f,
                            T = u.alignSelf,
                            L = u.wrap,
                            R = u.flexWrap,
                            y = void 0 === R ? (L ? 'wrap' : void 0) : R,
                            M = u.grow,
                            O = u.shrink,
                            k = u.flex,
                            P = void 0 === k ? (M || O ? `${M ? 1 : 0} ${O ? 1 : 0} auto` : void 0) : k,
                            N = u.style,
                            H = u.children,
                            I = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    o = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                return o;
                            })(u, pu);
                        const W = (0, o.useMemo)(() => {
                                const u = { mt: l, mr: c, mb: F, ml: D },
                                    e = ((u) =>
                                        vu.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(Su[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    o = ((u) =>
                                        vu.reduce((e, t) => {
                                            const r = u[t];
                                            return ('number' == typeof r && (e[wu[t]] = r + 'rem'), e);
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, N, o, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: P,
                                        alignSelf: T,
                                        display: C || x ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: y,
                                        justifyContent: w,
                                        alignItems: x,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, r, l, c, F, D, N, P, T, C, y, w, x]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return a().createElement('div', bu({ className: i()(gu.base, ...U, e), style: G }, I), H);
                    });
                var xu = t(3649);
                const Tu = ({ binding: u, text: e = '', classMix: t, alignment: r = xu.v2.left }) =>
                    null === e
                        ? (console.error("FormatText was supplied with 'null'"), null)
                        : a().createElement(
                              o.Fragment,
                              null,
                              e.split('\n').map((e, n) =>
                                  a().createElement(
                                      'div',
                                      { className: i()('FormatText_base_d0', t), key: `${e}-${n}` },
                                      (0, xu.Uw)(e, r, u).map((u, e) =>
                                          a().createElement(o.Fragment, { key: `${e}-${u}` }, u),
                                      ),
                                  ),
                              ),
                          );
                var Lu = t(3532),
                    Ru = t.n(Lu);
                const yu = {
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
                    Mu = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                Object.keys(Du());
                const ku = Object.keys(Ru()),
                    Pu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Nu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Hu = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Iu =
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
                            'heading-H56': Pu,
                            'heading-H36': Pu,
                            'heading-H28': Nu,
                            'heading-H24': Nu,
                            'heading-H24R': Nu,
                            'heading-H22': Nu,
                            'heading-H20R': Nu,
                            'heading-H18': Nu,
                            'heading-H15': Hu,
                            'heading-H14': Hu,
                            'paragraph-P24': Nu,
                            'paragraph-P18': Nu,
                            'paragraph-P16': Nu,
                            'paragraph-P14': Hu,
                            'paragraph-P12': Hu,
                            'paragraph-P10': Hu,
                        }),
                    Wu =
                        (Object.keys(Iu),
                        (u) =>
                            u
                                ? ((u) => ku.includes(u))(u)
                                    ? { colorClassName: yu[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    Gu = hu((u) => {
                        let e = u.text,
                            t = u.variant,
                            r = u.className,
                            n = u.color,
                            s = u.m,
                            l = u.mt,
                            E = void 0 === l ? s : l,
                            c = u.mr,
                            A = void 0 === c ? s : c,
                            F = u.mb,
                            d = void 0 === F ? s : F,
                            D = u.ml,
                            _ = void 0 === D ? s : D,
                            m = u.style,
                            B = u.format,
                            C = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    o = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) ((t = a[r]), e.indexOf(t) >= 0 || (o[t] = u[t]));
                                return o;
                            })(u, Mu);
                        const h = (0, o.useMemo)(() => {
                                const u = Wu(n),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, m, r), colorClassName: e };
                            }, [m, n]),
                            g = h.computedStyle,
                            p = h.colorClassName;
                        return a().createElement(
                            fu,
                            Ou(
                                {
                                    className: i()(yu.base, t && yu[t], p, r),
                                    style: g,
                                    mt: !0 === E ? Iu[t || 'paragraph-P16'].mt : E,
                                    mr: !0 === A ? Iu[t || 'paragraph-P16'].mr : A,
                                    mb: !0 === d ? Iu[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === _ ? Iu[t || 'paragraph-P16'].ml : _,
                                },
                                C,
                            ),
                            void 0 !== B ? a().createElement(Tu, Ou({}, B, { text: e })) : e,
                        );
                    }),
                    Uu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Vu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    ju = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Xu = 'Footer_title_e7',
                    Yu = R.strings.gui_lootboxes.videoreward,
                    qu = (0, o.memo)(({ reward: u, guaranteedRewardText: e, onFooterButtonClick: t }) => {
                        const r = (0, E.GS)().mediaSize < E.cJ.Medium ? ou.small : ou.medium,
                            o = Boolean(e.length);
                        return a().createElement(
                            'div',
                            { className: 'Footer_base_33' },
                            a().createElement('div', { className: 'Footer_background_ee' }),
                            a().createElement(
                                'div',
                                { className: 'Footer_contentWrapper_d0' },
                                o && a().createElement(Gu, { text: e, className: 'Footer_guaranteedTitle_29' }),
                                ((u) => {
                                    const e = u.label;
                                    if (u.name === iu.Vehicles) {
                                        const r = u.isElite,
                                            o = u.vehicleType,
                                            n = u.vehicleLvl,
                                            i = (0, xu.BN)(o),
                                            s = `R.images.gui.maps.icons.vehicleTypes.big.${r ? i + '_elite' : i}`;
                                        return a().createElement(
                                            'div',
                                            { className: Xu },
                                            a().createElement(Gu, {
                                                text:
                                                    ((t = n),
                                                    ju
                                                        ? `${t}`
                                                        : (function (u) {
                                                              let e = '';
                                                              for (let t = Vu.length - 1; t >= 0; t--)
                                                                  for (; u >= Vu[t]; ) ((e += Uu[t]), (u -= Vu[t]));
                                                              return e;
                                                          })(t)),
                                                className: 'Footer_level_d1',
                                            }),
                                            a().createElement('div', {
                                                className: 'Footer_type_c1',
                                                style: { backgroundImage: `url('${s}')` },
                                            }),
                                            a().createElement(Gu, { text: e }),
                                        );
                                    }
                                    var t;
                                    return a().createElement(
                                        'div',
                                        { className: Xu },
                                        a().createElement(Gu, { text: e }),
                                    );
                                })(u),
                                a().createElement(
                                    'div',
                                    { className: 'Footer_buttons_45' },
                                    a().createElement(
                                        nu,
                                        { type: ru.primary, size: r, mixClass: 'Footer_button_4d', onClick: t },
                                        a().createElement(Gu, {
                                            text: o ? Yu.button.titleGuaranteed() : Yu.button.title(),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    zu = (0, o.memo)(({ text: u, isLabelVisible: e }) => {
                        const t = i()('GuaranteedRewardLabel_base_55', !e && 'GuaranteedRewardLabel_base__hidden_3d');
                        return a().createElement(
                            'div',
                            { className: t },
                            a().createElement(Gu, { text: u, className: 'GuaranteedRewardLabel_title_c1' }),
                        );
                    }),
                    Ku = (u, e) => {
                        let t;
                        const r = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(r));
                        };
                    };
                var $u = t(2787);
                const Ju = (0, o.memo)(
                        ({
                            videoResource: u,
                            isWindowAccessible: e,
                            onVideoEnded: t,
                            onVideoStarted: r,
                            onVideoUpdated: n,
                        }) => {
                            const i = (0, o.useState)(u),
                                s = i[0],
                                l = i[1],
                                E = (0, o.useCallback)(() => {
                                    r && r();
                                }, [r]),
                                c = (0, o.useCallback)(
                                    (u) => {
                                        const e = Number(u.toFixed(1));
                                        n && n(e);
                                    },
                                    [n],
                                );
                            return (
                                (0, o.useEffect)(
                                    () => (
                                        l(''),
                                        Ku(() => {
                                            l(u);
                                        }, 10)
                                    ),
                                    [u],
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'SingleVideoComponent_base_e8' },
                                    Boolean(s.length) &&
                                        a().createElement($u.n, {
                                            src: s,
                                            className: 'SingleVideoComponent_video_d4',
                                            isPaused: !e,
                                            isCeilTime: !1,
                                            onStarted: E,
                                            onEnded: t,
                                            onUpdated: n && c,
                                            videoWidth: 1920,
                                            videoHeight: 1080,
                                        }),
                                )
                            );
                        },
                    ),
                    Zu = R.strings.gui_lootboxes.videoreward.description,
                    Qu = (0, o.memo)(
                        ({
                            videoResName: u,
                            duration: e,
                            reward: t,
                            showFooterTiming: r,
                            isWindowAccessible: n,
                            isGuaranteedReward: s,
                            hasFooter: l,
                            onVideoEnded: E,
                            onVideoStarted: c,
                        }) => {
                            const A = (0, o.useState)(!0),
                                F = A[0],
                                d = A[1],
                                D = (0, o.useState)(!1),
                                _ = D[0],
                                m = D[1],
                                B = e - r,
                                C = (0, o.useCallback)(
                                    (u) => {
                                        !_ && u >= B && (d(!1), l && m(!0));
                                    },
                                    [_, B, l],
                                );
                            return a().createElement(
                                'div',
                                { className: 'DefaultSimpleReward_base_b1' },
                                a().createElement(Ju, {
                                    videoResource: u || '',
                                    isWindowAccessible: n,
                                    onVideoEnded: l ? void 0 : E,
                                    onVideoStarted: c,
                                    onVideoUpdated: C,
                                }),
                                s && a().createElement(zu, { text: Zu.commonText(), isLabelVisible: F }),
                                a().createElement(
                                    'div',
                                    {
                                        className: i()(
                                            'DefaultSimpleReward_footer_cc',
                                            _ && 'DefaultSimpleReward_footer__visible_3c',
                                        ),
                                    },
                                    a().createElement(qu, {
                                        reward: t,
                                        guaranteedRewardText: s ? Zu.commonText() : '',
                                        onFooterButtonClick: E,
                                    }),
                                ),
                            );
                        },
                    ),
                    ue = 'DoubleVideoComponent_video_01',
                    ee = (0, o.memo)(
                        ({
                            firstVideoDuration: u,
                            firstVideoRes: e,
                            secondVideoRes: t,
                            isWindowAccessible: r,
                            onVideoEnded: n,
                            onVideoStarted: i,
                            onFirstVideoUpdated: s,
                            onSecondVideoUpdated: l,
                        }) => {
                            const E = (0, o.useState)(t),
                                c = E[0],
                                A = E[1],
                                F = (0, o.useState)(!1),
                                d = F[0],
                                D = F[1],
                                _ = (0, o.useState)(!1),
                                m = _[0],
                                B = _[1],
                                C = (0, o.useState)(!1),
                                h = C[0],
                                g = C[1],
                                p = (0, o.useCallback)(() => {
                                    i && i();
                                }, [i]),
                                b = (0, o.useCallback)(() => {
                                    (B(!0), n && n());
                                }, [n]),
                                S = (0, o.useCallback)(
                                    (e) => {
                                        const t = Number(e.toFixed(1));
                                        if ((s && s(t), !h && t >= u))
                                            return (
                                                g(!0),
                                                B(!1),
                                                Ku(() => {
                                                    D(!1);
                                                }, 350)
                                            );
                                    },
                                    [s, h, u],
                                ),
                                v = (0, o.useCallback)(
                                    (u) => {
                                        const e = Number(u.toFixed(1));
                                        l && l(e);
                                    },
                                    [l],
                                );
                            return (
                                (0, o.useEffect)(() => {
                                    if (t)
                                        return (
                                            A(t),
                                            D(!0),
                                            Ku(() => {
                                                g(!1);
                                            }, 350)
                                        );
                                }, [t]),
                                a().createElement(
                                    'div',
                                    { className: 'DoubleVideoComponent_base_06' },
                                    d &&
                                        a().createElement($u.n, {
                                            src: e,
                                            className: ue,
                                            isPaused: !r,
                                            isCeilTime: !1,
                                            onStarted: p,
                                            onUpdated: S,
                                            videoWidth: 1920,
                                            videoHeight: 1080,
                                        }),
                                    h &&
                                        a().createElement($u.n, {
                                            src: c,
                                            className: ue,
                                            isPaused: !r || m,
                                            isCeilTime: !1,
                                            onUpdated: v,
                                            onEnded: b,
                                            videoWidth: 1920,
                                            videoHeight: 1080,
                                        }),
                                )
                            );
                        },
                    ),
                    te = R.strings.gui_lootboxes.videoreward.description,
                    re = (0, o.memo)(
                        ({
                            firstVideoRes: u,
                            secondVideoRes: e,
                            firstVideoDuration: t,
                            secondVideoDuration: r,
                            isWindowAccessible: n,
                            isGuaranteedReward: s,
                            reward: l,
                            hasFooter: E,
                            footerDelay: c,
                            onApplyReward: A,
                            onVideoStarted: F,
                        }) => {
                            const d = (0, o.useState)(!0),
                                D = d[0],
                                _ = d[1],
                                m = (0, o.useState)(!1),
                                B = m[0],
                                C = m[1],
                                h = r - c,
                                g = (0, o.useCallback)(
                                    (u) => {
                                        !B && u >= h && (D && _(!1), E && C(!0));
                                    },
                                    [B, h, D, E],
                                );
                            return (
                                (0, o.useEffect)(() => {
                                    C(!1);
                                }, [e]),
                                a().createElement(
                                    'div',
                                    { className: 'VehicleVideoReward_base_98' },
                                    a().createElement(ee, {
                                        firstVideoRes: u,
                                        secondVideoRes: e,
                                        firstVideoDuration: t,
                                        isWindowAccessible: n,
                                        onVideoStarted: F,
                                        onSecondVideoUpdated: g,
                                        onVideoEnded: E ? void 0 : A,
                                    }),
                                    s && a().createElement(zu, { text: te.vehicleText(), isLabelVisible: D }),
                                    a().createElement(
                                        'div',
                                        {
                                            className: i()(
                                                'VehicleVideoReward_footer_a8',
                                                B && 'VehicleVideoReward_footer__visible_63',
                                            ),
                                        },
                                        a().createElement(qu, {
                                            reward: l,
                                            guaranteedRewardText: s ? te.commonText() : '',
                                            onFooterButtonClick: () => {
                                                A();
                                            },
                                        }),
                                    ),
                                )
                            );
                        },
                    );
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const ae = (0, o.memo)(
                    ({
                        rewardVideoConfigList: u,
                        reward: e,
                        isElite: t,
                        vehicleType: r,
                        vehicleLvl: o,
                        isWindowAccessible: n,
                        isGuaranteedReward: i,
                        hasVideoFooter: s,
                        onVideoEnded: l,
                        onVideoStarted: E,
                    }) =>
                        1 === u.length
                            ? a().createElement(
                                  Qu,
                                  oe({}, u[0], {
                                      reward: Object.assign({}, e, { isElite: t, vehicleType: r, vehicleLvl: o }),
                                      hasFooter: s && u[0].showFooterTiming > 0,
                                      isWindowAccessible: n,
                                      isGuaranteedReward: !0,
                                      onVideoEnded: l,
                                      onVideoStarted: E,
                                  }),
                              )
                            : a().createElement(re, {
                                  reward: Object.assign({}, e, { isElite: t, vehicleType: r, vehicleLvl: o }),
                                  firstVideoRes: u[0].videoResName,
                                  firstVideoDuration: u[0].duration,
                                  secondVideoDuration: u[1].duration,
                                  secondVideoRes: u[1].videoResName,
                                  isGuaranteedReward: i,
                                  isWindowAccessible: n,
                                  hasFooter: s && u[1].showFooterTiming > 0,
                                  footerDelay: u[1].showFooterTiming,
                                  onApplyReward: l,
                                  onVideoStarted: E,
                              }),
                );
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                const ie = (0, L.observer)(() => {
                    const u = eu(),
                        e = u.controls,
                        t = u.model,
                        r = t.root.get(),
                        n = r.videoRes,
                        i = r.lootboxType,
                        s = r.lootboxID,
                        l = t.computes.getReward(),
                        E = t.computes.getRewardVideos(),
                        c = (0, o.useState)({ reward: l, videoRes: n }),
                        A = c[0],
                        F = c[1],
                        d = (0, o.useState)(0),
                        D = d[0],
                        _ = d[1],
                        m = ((u) => {
                            const e = ((u) => {
                                    const e = I(u, P),
                                        t = (0, o.useCallback)(
                                            (u) => {
                                                e(u.action, u.logLevel, H(u));
                                            },
                                            [e],
                                        );
                                    return (u) => t(u);
                                })(U.Lootbox),
                                t = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.RewardToopltip,
                                    parentScreen: j.Probability,
                                    timeLimit: 1,
                                    info: null == u ? void 0 : u.info,
                                }),
                                r = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.InfoIcon,
                                    parentScreen: j.Storage,
                                    timeLimit: 1,
                                }),
                                a = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.ProbabilityPercent,
                                    parentScreen: j.Probability,
                                    timeLimit: 1,
                                }),
                                n = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.ProbabilityPercentWithGarant,
                                    parentScreen: j.Probability,
                                    timeLimit: 1,
                                }),
                                i = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.RewardToopltip,
                                    parentScreen: j.Probability,
                                    timeLimit: 1,
                                    info: null == u ? void 0 : u.info,
                                }),
                                s = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.MinorRewards,
                                    parentScreen: j.Rewards,
                                    timeLimit: 1,
                                }),
                                l = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.RewardToopltip,
                                    parentScreen: null == u ? void 0 : u.parentScreen,
                                    timeLimit: 1,
                                    info: null == u ? void 0 : u.info,
                                }),
                                E = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.IconPossibleRewardGroup,
                                    parentScreen: j.Storage,
                                    timeLimit: 1,
                                }),
                                c = G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.RewardRotationToopltip,
                                    parentScreen: null == u ? void 0 : u.parentScreen,
                                    timeLimit: 1,
                                    info: null == u ? void 0 : u.info,
                                });
                            return {
                                rewardToopltipWatched: t,
                                infoIconToopltipWatched: r,
                                probabilityPercentToopltipWatched: a,
                                probabilityPercentWithGarantToopltipWatched: n,
                                rewardVehicleToopltipWatched: i,
                                minorRewardsToopltipWatched: s,
                                rewardSharedToopltipWatched: l,
                                iconPossibleRewardGroupToopltipWatched: E,
                                carouselLootboxToopltipWatched: G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.CarouselLootbox,
                                    parentScreen: j.Storage,
                                    timeLimit: 2,
                                }),
                                rewardToopltipWatchedWithRotation: c,
                                statisticButtonToopltipWatched: G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.StatisticButton,
                                    parentScreen: j.LootBoxesShortStats,
                                    timeLimit: 1,
                                }),
                                deadlineWidgetToopltipWatched: G(U.Lootbox, {
                                    action: V.TooltipWatched,
                                    item: X.DeadlineWidget,
                                    parentScreen: null == u ? void 0 : u.parentScreen,
                                    timeLimit: 1,
                                }),
                                probabilityPercentWithGarantClick: () => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.Probability,
                                        item: X.ProbabilityPercentWithGarant,
                                    });
                                },
                                probabilityPercentClick: () => {
                                    e({ action: V.Click, parentScreen: j.Probability, item: X.ProbabilityPercent });
                                },
                                showLoseRewardsViewButton: (u, t) => {
                                    e({
                                        action: V.Show,
                                        parentScreen: j.LoseRewards,
                                        item: u,
                                        info: JSON.stringify({ lockpickCount: t }),
                                    });
                                },
                                loseRewardsViewButtonClick: (u, t) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LoseRewards,
                                        item: u,
                                        info: JSON.stringify({ lockpickCount: t }),
                                    });
                                },
                                showLoseRewardsViewCloseButton: (u) => {
                                    e({
                                        action: V.Show,
                                        parentScreen: j.LoseRewards,
                                        item: X.CloseButton,
                                        info: JSON.stringify({ lockpickCount: u }),
                                    });
                                },
                                loseRewardsViewCloseButtonClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LoseRewards,
                                        item: X.CloseButton,
                                        info: JSON.stringify({ lockpickCount: u }),
                                    });
                                },
                                loseRewardsViewESCButtonClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LoseRewards,
                                        item: X.ESCButton,
                                        info: JSON.stringify({ lockpickCount: u }),
                                    });
                                },
                                showRewardsViewCloseButton: (u) => {
                                    e({
                                        action: V.Show,
                                        parentScreen: j.Rewards,
                                        item: X.CloseButton,
                                        info: JSON.stringify({ lootboxCount: u }),
                                    });
                                },
                                rewardsViewCloseButtonClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.Rewards,
                                        item: X.CloseButton,
                                        info: JSON.stringify({ lootboxCount: u }),
                                    });
                                },
                                rewardsViewESCButtonClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.Rewards,
                                        item: X.ESCButton,
                                        info: JSON.stringify({ lootboxCount: u }),
                                    });
                                },
                                rewardsViewMinorRewardsShow: () => {
                                    e({ action: V.Show, parentScreen: j.Rewards, item: X.MinorRewards });
                                },
                                showRewardsViewButton: (u, t) => {
                                    e({
                                        action: V.Show,
                                        parentScreen: j.Rewards,
                                        item: u,
                                        info: JSON.stringify({ lootboxCount: t }),
                                    });
                                },
                                rewardsViewButtonClick: (u, t) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.Rewards,
                                        item: u,
                                        info: JSON.stringify({ lootboxCount: t }),
                                    });
                                },
                                rewardsVideoCloseClick: (u, t, r, o) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.RewardVideo,
                                        item: X.CloseButton,
                                        info: JSON.stringify({ duration: u, lootboxType: t, lootboxID: r, reward: o }),
                                    });
                                },
                                rewardsVideoESCClick: (u, t, r, o) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.RewardVideo,
                                        item: X.ESCButton,
                                        info: JSON.stringify({ duration: u, lootboxType: t, lootboxID: r, reward: o }),
                                    });
                                },
                                rewardsVideoStarted: (u, t, r) => {
                                    e({
                                        action: V.VideoStarted,
                                        parentScreen: j.RewardVideo,
                                        item: X.RewardVideo,
                                        info: JSON.stringify({ lootboxID: t, lootboxType: u, reward: r }),
                                    });
                                },
                                storageViewESCButtonClick: () => {
                                    e({ action: V.Click, parentScreen: j.Storage, item: X.ESCButton });
                                },
                                iconPossibleRewardGroupClick: () => {
                                    e({ action: V.Click, parentScreen: j.Storage, item: X.IconPossibleRewardGroup });
                                },
                                lootBoxesShortStatsViewESCButtonClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesShortStats,
                                        item: X.StatisticESCButton,
                                        info: JSON.stringify({ tab: u }),
                                    });
                                },
                                lootBoxesShortStatsOutsideClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesShortStats,
                                        item: X.statisticOutsideClick,
                                        info: JSON.stringify({ tab: u }),
                                    });
                                },
                                lootBoxesShortStatsTabsClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesShortStats,
                                        item: X.LootBoxesShortStatsTabs,
                                        info: JSON.stringify({ tab: u }),
                                    });
                                },
                                lootBoxesShortStatsGroupClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesShortStats,
                                        item: X.LootBoxesShortStatsGroup,
                                        info: JSON.stringify({ category: u }),
                                    });
                                },
                                lootBoxesFullStatsSidebarClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesFullStats,
                                        item: X.LootBoxesFullStatsSidebar,
                                        info: JSON.stringify({ category: u }),
                                    });
                                },
                                lootBoxesFullStatsSelectAllClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesFullStats,
                                        item: X.lootBoxesFullStatsSelectAll,
                                        info: JSON.stringify({ isButtonActive: u }),
                                    });
                                },
                                lootBoxesFullStatsSelectLootboxClick: (u, t) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesFullStats,
                                        item: X.lootBoxesFullStatsSelect,
                                        info: JSON.stringify({ lootboxID: u, isButtonActive: t }),
                                    });
                                },
                                lootBoxesFullStatsRewardClick: (u) => {
                                    e({
                                        action: V.Click,
                                        parentScreen: j.LootBoxesFullStats,
                                        item: X.lootBoxesFullStatsReward,
                                        info: JSON.stringify({ rewardType: u }),
                                    });
                                },
                                storageViewBackButtonClick: () => {
                                    e({ action: V.Click, parentScreen: j.Storage, item: X.BackButton });
                                },
                            };
                        })(),
                        B = m.rewardsVideoCloseClick,
                        C = m.rewardsVideoESCClick,
                        h = m.rewardsVideoStarted,
                        g = (0, o.useCallback)(() => {
                            (e.videoStarted(), _(Date.now()), h(i, s, null == l ? void 0 : l.name));
                        }, [e, i, s, null == l ? void 0 : l.name, h]);
                    ((0, o.useEffect)(() => {
                        n && F({ reward: l, videoRes: n });
                    }, [n, l]),
                        (function ({
                            key: u = f.n.ESCAPE,
                            callback: e = () => w.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            T(u, e, t);
                        })({
                            callback: () => {
                                (C(Date.now() - D, i, s, null == l ? void 0 : l.name), e.close());
                            },
                            preventPropagation: !1,
                        }));
                    const p = (0, o.useCallback)(
                        (u) =>
                            a().createElement(
                                ae,
                                ne({}, t.root.get(), {
                                    rewardVideoConfigList: E,
                                    reward: u,
                                    onVideoEnded: e.close,
                                    onVideoStarted: g,
                                }),
                            ),
                        [e.close, t.root, g, E],
                    );
                    return (
                        E.length || e.close(),
                        a().createElement(
                            'div',
                            { className: 'App_base_e4' },
                            a().createElement(
                                'div',
                                { className: 'App_close_36' },
                                a().createElement(v, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: () => {
                                        (B(Date.now() - D, i, s, null == l ? void 0 : l.name), e.close());
                                    },
                                }),
                            ),
                            A.videoRes && p(A.reward),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    h().render(
                        a().createElement(uu, null, a().createElement(B, null, a().createElement(ie, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2787: (u, e, t) => {
                'use strict';
                t.d(e, { n: () => d });
                var r = t(6483),
                    o = t.n(r),
                    a = t(6179),
                    n = t.n(a);
                let i;
                var s;
                (t(3649),
                    ((s = i || (i = {})).SHORT_DATE = 'short-date'),
                    (s.SHORT_TIME = 'short-time'),
                    (s.SHORT_DATE_TIME = 'short-date-time'),
                    (s.FULL_DATE = 'full-date'),
                    (s.FULL_DATE_TIME = 'full-date-time'),
                    (s.MONTH = 'month'),
                    (s.MONTH_DATE = 'month-date'),
                    (s.DATE_MONTH = 'date-month'),
                    (s.MONTH_YEAR = 'month-year'),
                    (s.WEEK_DAY = 'week-day'),
                    (s.WEEK_DAY_TIME = 'week-day-time'),
                    (s.YEAR = 'year'),
                    (s.DATE_YEAR = 'date-year'));
                var l = t(4179);
                let E;
                (Date.now(),
                    t(3138),
                    t(6536),
                    l.Sw.instance,
                    (function (u) {
                        ((u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep'));
                    })(E || (E = {})),
                    l.Sw.instance);
                const c = (u) => {
                    const e = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            e.current = u;
                        }, [u]),
                        e.current
                    );
                };
                var A = t(5415);
                const F = (u) => {
                        if (!u) return !1;
                        const e = u.videoHeight,
                            t = u.videoWidth;
                        return Boolean(e && t);
                    },
                    d = n().memo(function ({
                        src: u,
                        className: e,
                        videoWidth: t,
                        videoHeight: r,
                        loop: i = !1,
                        autoPlay: s = !0,
                        isPaused: l = !1,
                        isCeilTime: E = !0,
                        loopPartDuration: d = 0,
                        onStarted: D,
                        onEnded: _,
                        onUpdated: m,
                    }) {
                        const B = (0, a.useRef)(null),
                            C = ((u) => {
                                const e = (0, a.useState)(F(u ? u.current : null)),
                                    t = e[0],
                                    r = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        let e = 0;
                                        const t = () => {
                                            e = requestAnimationFrame(() => {
                                                F(u ? u.current : null) ? r(!0) : t();
                                            });
                                        };
                                        return (
                                            t(),
                                            () => {
                                                cancelAnimationFrame(e);
                                            }
                                        );
                                    }, [u]),
                                    (0, a.useEffect)(() => () => r(!1), [u]),
                                    t
                                );
                            })(B),
                            h = c(l),
                            g = (0, A.GS)(),
                            p = g.remScreenWidth,
                            b = g.remScreenHeight,
                            S = (0, a.useMemo)(() => {
                                const u = ((u, e, t, r) => {
                                    const o = u / e;
                                    return t / r > o
                                        ? { width: t, height: Math.round(t / o) }
                                        : { width: Math.round(r * o), height: r };
                                })(t, r, p, b);
                                return u ? { width: `${u.width}rem`, height: `${u.height}rem` } : {};
                            }, [b, p, r, t]),
                            v = (0, a.useCallback)(() => {
                                D && !h && D();
                            }, [D, h]),
                            w = (0, a.useCallback)(() => {
                                const u = B.current;
                                u &&
                                    (i
                                        ? ((u.currentTime = u.duration - d), u.removeEventListener('play', v), u.play())
                                        : (u.pause(), _ && _()));
                            }, [u, v, i, d, _]);
                        return (
                            (0, a.useEffect)(() => {
                                const u = B.current;
                                return (
                                    u && (u.addEventListener('play', v), u.addEventListener('ended', w)),
                                    () => {
                                        u && (u.removeEventListener('play', v), u.removeEventListener('ended', w));
                                    }
                                );
                            }, [u, w, v]),
                            (0, a.useEffect)(() => {
                                const u = B.current;
                                u && (l ? u.pause() : u.play());
                                const e = setInterval(() => {
                                    u && m && m(E ? Math.round(u.currentTime) : u.currentTime);
                                }, 100);
                                return () => clearInterval(e);
                            }, [u, m, l, E]),
                            n().createElement(
                                'div',
                                { className: e },
                                n().createElement('video', {
                                    id: u,
                                    ref: B,
                                    src: u,
                                    className: o()('Video_video_a8', C && 'Video_video__visible_e8'),
                                    loop: !1,
                                    style: S,
                                    autoPlay: s,
                                }),
                            )
                        );
                    });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var o = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], a = !0, n = 0; n < e.length; n++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[n]))
                            ? e.splice(n--, 1)
                            : ((a = !1), r < o && (o = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
        (() => {
            var u = { 634: 0, 296: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        o,
                        [a, n, i] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in n) __webpack_require__.o(n, r) && (__webpack_require__.m[r] = n[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        ((o = a[s]), __webpack_require__.o(u, o) && u[o] && u[o][0](), (u[o] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4782));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
