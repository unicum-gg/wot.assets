(() => {
    var __webpack_modules__ = {
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var n = t(3138),
                    r = t(6179),
                    o = t(1043),
                    a = t(5262);
                const i = n.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, a.T)(s, l, o.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(6179),
                    r = t.n(n),
                    o = t(6536),
                    a = t(3495),
                    i = t(1043),
                    s = t(5262),
                    l = t(3138);
                const c = (0, n.memo)(({ children: e }) => {
                    const u = (0, n.useContext)(a.Y),
                        t = (0, n.useState)(u),
                        c = t[0],
                        d = t[1],
                        E = (0, n.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                n = l.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: n }, (0, s.T)(t, n, i.j)));
                        }, []);
                    (0, o.Z)(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', E), [E]);
                    const m = (0, n.useMemo)(() => Object.assign({}, c), [c]);
                    return r().createElement(a.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    r = t(7382),
                    o = t(3495);
                const a = ['children'],
                    i = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, a);
                        const i = (0, n.useContext)(o.Y),
                            s = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            d = i.small,
                            E = i.extraSmall,
                            m = i.extraLargeWidth,
                            _ = i.largeWidth,
                            A = i.mediumWidth,
                            F = i.smallWidth,
                            D = i.extraSmallWidth,
                            B = i.extraLargeHeight,
                            C = i.largeHeight,
                            p = i.mediumHeight,
                            g = i.smallHeight,
                            b = i.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: p, small: g, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && d) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && m) return (0, r.H)(u, t, v);
                            if (t.largeWidth && _) return (0, r.H)(u, t, v);
                            if (t.mediumWidth && A) return (0, r.H)(u, t, v);
                            if (t.smallWidth && F) return (0, r.H)(u, t, v);
                            if (t.extraSmallWidth && D) return (0, r.H)(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && g) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                (i.defaultProps = {
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
                    (0, n.memo)(i);
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
                t.d(u, { YN: () => r.Y, ZN: () => n.Z }), t(6010);
                var n = t(1039),
                    r = t(3495);
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
                        o = Math.min(n, r);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
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
                t.d(u, { T: () => r }),
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
                    })(n || (n = {}));
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u), t.d(u, { mouse: () => i, onResize: () => o });
                var n = t(2472),
                    r = t(1176);
                const o = (0, n.E)('clientResized'),
                    a = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    i = (function () {
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
                        const o = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${u}`,
                                            i = a[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(o, s),
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
                        return Object.assign({}, o, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
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
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => a,
                    });
                var n = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
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
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
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
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => f,
                        events: () => o.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => h,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
                    });
                var n = t(3722),
                    r = t(6112),
                    o = t(6538),
                    a = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
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
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    x = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => o });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    o = {
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
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => s, GS: () => l, cJ: () => a, fd: () => i });
                var n = t(6179),
                    r = t(7739),
                    o = t(1043);
                let a, i, s;
                !(function (e) {
                    (e[(e.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.j.small.width)] = 'Small'),
                        (e[(e.Medium = o.j.medium.width)] = 'Medium'),
                        (e[(e.Large = o.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge');
                })(a || (a = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.j.small.width)] = 'Small'),
                            (e[(e.Medium = o.j.medium.width)] = 'Medium'),
                            (e[(e.Large = o.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.j.small.height)] = 'Small'),
                            (e[(e.Medium = o.j.medium.height)] = 'Medium'),
                            (e[(e.Large = o.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
                        u = e.width,
                        t = e.height,
                        o = ((e) => {
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
                                    return console.error('Unreachable media context resolution'), a.ExtraSmall;
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
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: o, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(r || (r = {}));
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e);
                }
                t.d(u, { G: () => n });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => o });
                var n = t(3138);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(e, t, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                const o = r;
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
                t.d(u, { kH: () => m, Z5: () => a, lf: () => E, cy: () => i, B0: () => s, ry: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const r = n;
                var o = t(1358);
                const a = {
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
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, n, r, o, a) {
                    try {
                        var i = e[o](a),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                        var o = e.apply(u, t);
                                        function a(e) {
                                            D(o, n, r, a, i, 'next', e);
                                        }
                                        function i(e) {
                                            D(o, n, r, a, i, 'throw', e);
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
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => p(s.CLOSE),
                    b = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var v = t(7572);
                const h = r.instance,
                    f = {
                        DataTracker: o.Z,
                        ViewModel: v.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), o) => {
                            const a = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                d = i.width,
                                E = i.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + a.x,
                                    y: A.O.view.pxToRem(c) + a.y,
                                    width: A.O.view.pxToRem(d),
                                    height: A.O.view.pxToRem(E),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: B(m),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, g);
                        },
                        handleViewEvent: p,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: h,
                        SystemLocale: a,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            3502: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => Ju,
                        Bar: () => Yu,
                        DefaultScroll: () => Zu,
                        Direction: () => Pu,
                        defaultSettings: () => Gu,
                        useHorizontalScrollApi: () => Uu,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => ct, Bar: () => it, Default: () => lt, useVerticalScrollApi: () => Qu });
                var o = t(7739),
                    a = t(6179),
                    i = t.n(a),
                    s = t(6483),
                    l = t.n(s),
                    c = t(926),
                    d = t.n(c),
                    E = t(5415);
                const m = ['children', 'className'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const A = {
                        [E.fd.ExtraSmall]: '',
                        [E.fd.Small]: d().SMALL_WIDTH,
                        [E.fd.Medium]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH}`,
                        [E.fd.Large]: `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH}`,
                        [E.fd.ExtraLarge]:
                            `${d().SMALL_WIDTH} ${d().MEDIUM_WIDTH} ${d().LARGE_WIDTH} ${d().EXTRA_LARGE_WIDTH}`,
                    },
                    F = {
                        [E.Aq.ExtraSmall]: '',
                        [E.Aq.Small]: d().SMALL_HEIGHT,
                        [E.Aq.Medium]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT}`,
                        [E.Aq.Large]: `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT}`,
                        [E.Aq.ExtraLarge]:
                            `${d().SMALL_HEIGHT} ${d().MEDIUM_HEIGHT} ${d().LARGE_HEIGHT} ${d().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [E.cJ.ExtraSmall]: '',
                        [E.cJ.Small]: d().SMALL,
                        [E.cJ.Medium]: `${d().SMALL} ${d().MEDIUM}`,
                        [E.cJ.Large]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE}`,
                        [E.cJ.ExtraLarge]: `${d().SMALL} ${d().MEDIUM} ${d().LARGE} ${d().EXTRA_LARGE}`,
                    },
                    B = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, m);
                        const r = (0, E.GS)(),
                            o = r.mediaWidth,
                            a = r.mediaHeight,
                            s = r.mediaSize;
                        return i().createElement('div', _({ className: l()(t, A[o], F[a], D[s]) }, n), u);
                    },
                    C = ['children'],
                    p = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, C);
                        return i().createElement(o.ZN, null, i().createElement(B, t, u));
                    };
                var g = t(493),
                    b = t.n(g),
                    v = t(7727);
                const h = {
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
                    f = [
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
                class w extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, v.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, v.G)(this.props.soundClick);
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
                            n = e.goto,
                            r = e.side,
                            o = e.type,
                            a = e.classNames,
                            s = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, f)),
                            _ = l()(h.base, h[`base__${o}`], h[`base__${r}`], null == a ? void 0 : a.base),
                            A = l()(h.icon, h[`icon__${o}`], h[`icon__${r}`], null == a ? void 0 : a.icon),
                            F = l()(h.glow, null == a ? void 0 : a.glow),
                            D = l()(h.caption, h[`caption__${o}`], null == a ? void 0 : a.caption),
                            B = l()(h.goto, null == a ? void 0 : a.goto);
                        return i().createElement(
                            'div',
                            x(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== o && i().createElement('div', { className: h.shine }),
                            i().createElement('div', { className: A }, i().createElement('div', { className: F })),
                            i().createElement('div', { className: D }, u),
                            n && i().createElement('div', { className: B }, n),
                        );
                    }
                }
                w.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const y = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
                var T = t(3138),
                    S = t(5521),
                    N = t(4179);
                const O = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function L(e = S.n.NONE, u = O, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== S.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (T.O.view.isEventHandled()) return;
                                T.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var M = t(3403),
                    k = t(4999);
                let I;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(I || (I = {}));
                const H = (e) => e.replace(/&nbsp;/g, ' '),
                    P = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    G = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    W = (e, u, t = I.left) => e.split(u).reduce(t === I.left ? P : G, []),
                    U = (() => {
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
                    j = ['zh_cn', 'zh_sg', 'zh_tw'];
                let z;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(z || (z = {})),
                    Date.now();
                const $ = (0, a.memo)(({ datetime: e, format: u = z.SHORT_DATE, localize: t = !0 }) =>
                    ((e, u, t) => {
                        switch (u) {
                            case z.SHORT_DATE:
                                return t
                                    ? N.Z5.getDateFormat(e, N.kH.SHORT_FORMAT)
                                    : N.cy.getTimeFormat('%d.%m.%y', e, !0);
                            case z.SHORT_TIME:
                                return t
                                    ? N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)
                                    : N.cy.getTimeFormat('%I:%M %p', e, !0);
                            case z.SHORT_DATE_TIME:
                                return t
                                    ? `${N.Z5.getDateFormat(e, N.kH.SHORT_FORMAT)}, ${N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)}`
                                    : N.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                            case z.FULL_DATE:
                                return t
                                    ? N.Z5.getDateFormat(e, N.kH.LONG_FORMAT)
                                    : N.cy.getTimeFormat('%B %d, %Y', e, !0);
                            case z.FULL_DATE_TIME:
                                return t
                                    ? `${N.Z5.getDateFormat(e, N.kH.LONG_FORMAT)}, ${N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)}`
                                    : N.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                            case z.MONTH:
                                return N.cy.getTimeFormat('%B', e, !0);
                            case z.MONTH_DATE:
                                return N.cy.getTimeFormat('%B %e', e, !0);
                            case z.DATE_MONTH:
                                return N.cy.getTimeFormat('%e %B', e, !0);
                            case z.MONTH_YEAR:
                                return N.cy.getTimeFormat('%B %Y', e, !0);
                            case z.WEEK_DAY:
                                return N.cy.getTimeFormat('%A', e, !0);
                            case z.WEEK_DAY_TIME:
                                return t
                                    ? `${N.cy.getTimeFormat('%A', e, !0)} ${N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)}`
                                    : N.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                            case z.YEAR:
                                return N.cy.getTimeFormat('%Y', e, !0);
                            case z.DATE_YEAR:
                                return N.cy.getTimeFormat('%d, %Y', e, !0);
                        }
                    })(e, u, t),
                );
                var K = t(9887),
                    V = t.n(K);
                const X = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Y = (e) => e.includes('_') && ((e) => X.includes(e))(e.split('_').at(-1)),
                    q = [E.cJ.ExtraLarge, E.cJ.Large, E.cJ.Medium, E.cJ.Small, E.cJ.ExtraSmall],
                    Z = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (Y(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const o = q.indexOf(u),
                                    a = (-1 !== o ? X.slice(o) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    i = a ? e[a] : void 0;
                                return (t[r] = void 0 !== i ? i : e[r]), t;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => X.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    J = (e, u = Z) => {
                        const t = (
                            (e, u = Z) =>
                            (t) => {
                                const n = (0, E.GS)().mediaSize,
                                    r = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return i().createElement(e, r);
                            }
                        )(e, u);
                        return i().memo((u) =>
                            Object.keys(u).some((e) => Y(e) && void 0 !== u[e])
                                ? i().createElement(t, u)
                                : i().createElement(e, u),
                        );
                    },
                    Q = {
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
                    ee = [
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
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                Object.keys(V());
                const te = {
                        XL: { mt: Q.mt__XL, mr: Q.mr__XL, mb: Q.mb__XL, ml: Q.ml__XL },
                        LG: { mt: Q.mt__LG, mr: Q.mr__LG, mb: Q.mb__LG, ml: Q.ml__LG },
                        MDp: { mt: Q.mt__MDp, mr: Q.mr__MDp, mb: Q.mb__MDp, ml: Q.ml__MDp },
                        MD: { mt: Q.mt__MD, mr: Q.mr__MD, mb: Q.mb__MD, ml: Q.ml__MD },
                        SMp: { mt: Q.mt__SMp, mr: Q.mr__SMp, mb: Q.mb__SMp, ml: Q.ml__SMp },
                        SM: { mt: Q.mt__SM, mr: Q.mr__SM, mb: Q.mb__SM, ml: Q.ml__SM },
                        XS: { mt: Q.mt__XS, mr: Q.mr__XS, mb: Q.mb__XS, ml: Q.ml__XS },
                    },
                    ne = (Object.keys(te), ['mt', 'mr', 'mb', 'ml']),
                    re = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    oe = J((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            r = e.m,
                            o = e.mt,
                            s = void 0 === o ? r : o,
                            c = e.mr,
                            d = void 0 === c ? r : c,
                            E = e.mb,
                            m = void 0 === E ? r : E,
                            _ = e.ml,
                            A = void 0 === _ ? r : _,
                            F = e.column,
                            D = e.row,
                            B = e.flexDirection,
                            C = void 0 === B ? (F ? 'column' : D && 'row') || void 0 : B,
                            p = e.flexStart,
                            g = e.center,
                            b = e.flexEnd,
                            v = e.spaceBetween,
                            h = e.spaceAround,
                            f = e.justifyContent,
                            x =
                                void 0 === f
                                    ? (p ? 'flex-start' : g && 'center') ||
                                      (b && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (h && 'space-around') ||
                                      void 0
                                    : f,
                            w = e.alignItems,
                            y = void 0 === w ? (p ? 'flex-start' : g && 'center') || (b && 'flex-end') || void 0 : w,
                            T = e.alignSelf,
                            S = e.wrap,
                            R = e.flexWrap,
                            N = void 0 === R ? (S ? 'wrap' : void 0) : R,
                            O = e.grow,
                            L = e.shrink,
                            M = e.flex,
                            k = void 0 === M ? (O || L ? `${O ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : M,
                            I = e.style,
                            H = e.children,
                            P = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ee);
                        const G = (0, a.useMemo)(() => {
                                const e = { mt: s, mr: d, mb: m, ml: A },
                                    u = ((e) =>
                                        ne.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(te[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        ne.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[re[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: T,
                                        display: C || y ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: N,
                                        justifyContent: x,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, s, d, m, A, I, k, T, C, N, x, y]),
                            W = G.computedStyle,
                            U = G.computedClassNames;
                        return i().createElement('div', ue({ className: l()(Q.base, ...U, u), style: W }, P), H);
                    }),
                    ae = ({ binding: e, text: u = '', classMix: t, alignment: n = I.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      i().createElement(
                                          'div',
                                          { className: l()('FormatText_base_d0', t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = I.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return j.includes(t)
                                                                ? U(e)
                                                                : ((e, u = I.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = H(e);
                                                                      return (
                                                                          W(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(W(e, n, I.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              i().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var ie = t(3532),
                    se = t.n(ie);
                const le = {
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
                    ce = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                Object.keys(V());
                const Ee = Object.keys(se()),
                    me = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    _e = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ae = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Fe =
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
                            'heading-H56': me,
                            'heading-H36': me,
                            'heading-H28': _e,
                            'heading-H24': _e,
                            'heading-H24R': _e,
                            'heading-H22': _e,
                            'heading-H20R': _e,
                            'heading-H18': _e,
                            'heading-H15': Ae,
                            'heading-H14': Ae,
                            'paragraph-P24': _e,
                            'paragraph-P18': _e,
                            'paragraph-P16': _e,
                            'paragraph-P14': Ae,
                            'paragraph-P12': Ae,
                            'paragraph-P10': Ae,
                        }),
                    De =
                        (Object.keys(Fe),
                        (e) =>
                            e
                                ? ((e) => Ee.includes(e))(e)
                                    ? { colorClassName: le[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Be = J((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            r = e.color,
                            o = e.m,
                            s = e.mt,
                            c = void 0 === s ? o : s,
                            d = e.mr,
                            E = void 0 === d ? o : d,
                            m = e.mb,
                            _ = void 0 === m ? o : m,
                            A = e.ml,
                            F = void 0 === A ? o : A,
                            D = e.style,
                            B = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ce);
                        const p = (0, a.useMemo)(() => {
                                const e = De(r),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, n), colorClassName: u };
                            }, [D, r]),
                            g = p.computedStyle,
                            b = p.colorClassName;
                        return i().createElement(
                            oe,
                            de(
                                {
                                    className: l()(le.base, t && le[t], b, n),
                                    style: g,
                                    mt: !0 === c ? Fe[t || 'paragraph-P16'].mt : c,
                                    mr: !0 === E ? Fe[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === _ ? Fe[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === F ? Fe[t || 'paragraph-P16'].ml : F,
                                },
                                C,
                            ),
                            void 0 !== B ? i().createElement(ae, de({}, B, { text: u })) : u,
                        );
                    }),
                    Ce = {
                        base: 'BoxDescription_base_17',
                        headerHolder: 'BoxDescription_headerHolder_27',
                        headerName: 'BoxDescription_headerName_c9',
                        headerDescription: 'BoxDescription_headerDescription_42',
                        boxIcon: 'BoxDescription_boxIcon_d3',
                        boxIcon__tier1: 'BoxDescription_boxIcon__tier1_85',
                        boxIcon__tier2: 'BoxDescription_boxIcon__tier2_10',
                        boxIcon__tier3: 'BoxDescription_boxIcon__tier3_4d',
                        boxIcon__tier4: 'BoxDescription_boxIcon__tier4_53',
                        infoBoxes: 'BoxDescription_infoBoxes_32',
                        headerDescriptionDivider: 'BoxDescription_headerDescriptionDivider_c9',
                        autoOpenContainer: 'BoxDescription_autoOpenContainer_97',
                        autoOpenText: 'BoxDescription_autoOpenText_a8',
                        icon: 'BoxDescription_icon_72',
                        description: 'BoxDescription_description_32',
                    },
                    pe = R.strings.gui_lootboxes,
                    ge = R.strings.lootboxes,
                    be = R.images.gui.maps.icons.components.countdown.big.clock(),
                    ve = i().memo(
                        ({ userName: e, tier: u, count: t, descriptionKey: n, autoOpenTime: r, isInfinite: o }) =>
                            i().createElement(
                                'div',
                                { className: Ce.base },
                                ge.userName.$dyn(e) &&
                                    i().createElement(
                                        'div',
                                        { className: Ce.headerHolder },
                                        i().createElement(Be, {
                                            text: ge.userName.$dyn(e) || '',
                                            format: { classMix: Ce.headerName },
                                        }),
                                    ),
                                i().createElement(
                                    'div',
                                    { className: Ce.headerDescription },
                                    i().createElement('div', { className: l()(Ce.boxIcon, Ce[`boxIcon__tier${u}`]) }),
                                    pe.tier.$dyn(`tier_${u}`) &&
                                        i().createElement(Be, {
                                            text: pe.tier.$dyn(`tier_${u}`) || '',
                                            format: { classMix: Ce.infoBoxes },
                                        }),
                                    t > 0 &&
                                        !o &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: Ce.headerDescriptionDivider }),
                                            i().createElement(Be, {
                                                text: pe.optional.count(),
                                                format: { binding: { count: t }, classMix: Ce.infoBoxes },
                                            }),
                                        ),
                                ),
                                r > 0 &&
                                    i().createElement(
                                        'div',
                                        { className: Ce.autoOpenContainer },
                                        i().createElement('div', {
                                            className: Ce.icon,
                                            style: { backgroundImage: `url('${be}')` },
                                        }),
                                        i().createElement(Be, {
                                            text: ge.autoOpenView.dateOpen(),
                                            format: {
                                                binding: {
                                                    date: i().createElement($, {
                                                        datetime: r,
                                                        format: z.FULL_DATE_TIME,
                                                    }),
                                                },
                                                classMix: Ce.autoOpenText,
                                            },
                                        }),
                                    ),
                                ge.desctiptions.$dyn(n) &&
                                    i().createElement(Be, {
                                        text: ge.desctiptions.$dyn(n) || '',
                                        format: { classMix: Ce.description },
                                    }),
                            ),
                    ),
                    he = {
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
                let fe, xe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(fe || (fe = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(xe || (xe = {}));
                const we = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: o,
                    soundHover: s,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: E,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const D = (0, a.useRef)(null),
                        B = (0, a.useState)(t),
                        C = B[0],
                        p = B[1],
                        g = (0, a.useState)(!1),
                        b = g[0],
                        h = g[1],
                        f = (0, a.useState)(!1),
                        x = f[0],
                        w = f[1],
                        y = (0, a.useCallback)(() => {
                            r || (D.current && (D.current.focus(), p(!0)));
                        }, [r]),
                        T = (0, a.useCallback)(
                            (e) => {
                                C && null !== D.current && !D.current.contains(e.target) && p(!1);
                            },
                            [C],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                r || (F && F(e));
                            },
                            [r, F],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                r || (null !== s && (0, v.G)(s), d && d(e), w(!0));
                            },
                            [r, s, d],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (_ && _(e), h(!1));
                            },
                            [r, _],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                r || (null !== c && (0, v.G)(c), m && m(e), t && y(), h(!0));
                            },
                            [r, c, m, y, t],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                r || (A && A(e), h(!1));
                            },
                            [r, A],
                        ),
                        I = l()(
                            he.base,
                            he[`base__${n}`],
                            {
                                [he.base__disabled]: r,
                                [he[`base__${u}`]]: u,
                                [he.base__focus]: C,
                                [he.base__highlightActive]: b,
                                [he.base__firstHover]: x,
                            },
                            o,
                        ),
                        H = l()(he.state, he.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, a.useEffect)(() => {
                            p(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: D,
                                className: I,
                                onMouseEnter: N,
                                onMouseMove: O,
                                onMouseUp: L,
                                onMouseDown: M,
                                onMouseLeave: k,
                                onClick: S,
                            },
                            n !== fe.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: he.back }),
                                    i().createElement('span', { className: he.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: H },
                                i().createElement('span', { className: he.stateDisabled }),
                                i().createElement('span', { className: he.stateHighlightHover }),
                                i().createElement('span', { className: he.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: he.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                we.defaultProps = { type: fe.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const ye = (0, a.memo)(we),
                    Te = 'BoxRadioButtons_base_7a',
                    Se = 'BoxRadioButtons_button_27';
                let Re, Ne, Oe;
                !(function (e) {
                    (e.Simple = 'simpleKey'), (e.Lockpick = 'lockpick');
                })(Re || (Re = {})),
                    (function (e) {
                        (e.One = 'one'), (e.All = 'all');
                    })(Ne || (Ne = {})),
                    (function (e) {
                        (e.Normal = 'normal'), (e.Key = 'key'), (e.MasterKey = 'masterKey');
                    })(Oe || (Oe = {}));
                const Le = { keyID: 0, keyType: Re.Simple, count: 1, iconName: '', userName: '', openProbability: 0 },
                    Me = (e, u) => {
                        const t = {};
                        return (
                            e.forEach((e) => {
                                const n = u.find((u) => u.keyID === e);
                                n && (t[n.keyID] = Object.assign({}, n));
                            }),
                            t
                        );
                    },
                    ke = (e) => {
                        var u, t;
                        return (
                            (null == (u = e.find((e) => e.count > 0)) ? void 0 : u.keyID) ||
                            (null == (t = e[0]) ? void 0 : t.keyID)
                        );
                    },
                    Ie = [
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
                function He(e) {
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
                const Pe = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: N.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Ge = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            p = e.onHide,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ie);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [B],
                            ),
                            h = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Pe(t, _, { isMouseEvent: !0, on: !0, arguments: He(n) }, v),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, _, n, v, C]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Pe(t, _, { on: !1 }, v),
                                        b.current.isVisible && p && p(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, _, v, p]),
                            x = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', x, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', x, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((w = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                          r && r(e),
                                                          w && w(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  f(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === E && f(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === E && f(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : u
                        );
                        var w;
                    },
                    We = ['children'];
                function Ue() {
                    return (
                        (Ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ue.apply(this, arguments)
                    );
                }
                const je = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, We);
                        return i().createElement(
                            Ge,
                            Ue(
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
                    ze = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const Ke = R.views.common.tooltip_window.simple_tooltip_content,
                    Ve = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ze);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, s]);
                        return i().createElement(
                            Ge,
                            $e(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? Ke.SimpleTooltipHtmlContent('resId') : Ke.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var d;
                    };
                function Xe() {
                    return (
                        (Xe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Xe.apply(this, arguments)
                    );
                }
                const Ye = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = i().createElement('div', { className: t }, e);
                        if (u.header || u.body) return i().createElement(Ve, u, n);
                        const r = u.contentId,
                            o = u.args,
                            a = null == o ? void 0 : o.contentId;
                        return r || a
                            ? i().createElement(Ge, Xe({}, u, { contentId: r || a }), n)
                            : i().createElement(je, u, n);
                    },
                    qe = {
                        base: 'CheckButton_base_48',
                        base__disabled: 'CheckButton_base__disabled_9f',
                        border: 'CheckButton_border_74',
                        border__normal: 'CheckButton_border__normal_25',
                        'button-hover': 'CheckButton_button-hover_86',
                        border__checked: 'CheckButton_border__checked_c6',
                        bg: 'CheckButton_bg_67',
                        bg__normal: 'CheckButton_bg__normal_59',
                        bg__checked: 'CheckButton_bg__checked_2b',
                        bg__disabled: 'CheckButton_bg__disabled_b2',
                        content__disabled: 'CheckButton_content__disabled_52',
                        check: 'CheckButton_check_36',
                    };
                var Ze;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Checked = 'checked'), (e.Disabled = 'disabled');
                })(Ze || (Ze = {}));
                const Je = i().memo(
                        ({
                            content: e = '',
                            isDisabled: u = !1,
                            isChecked: t = !1,
                            classNames: n = '',
                            handleButtonClick: r,
                        }) => {
                            if (u)
                                return i().createElement(
                                    'div',
                                    { className: l()(qe.base, qe.base__disabled, n) },
                                    i().createElement('div', { className: l()(qe.bg, qe.bg__disabled) }),
                                    i().createElement('div', { className: l()(qe.content, qe.content__disabled) }, e),
                                );
                            const o = t ? Ze.Checked : Ze.Normal;
                            return i().createElement(
                                'div',
                                { className: l()(qe.base, n), onClick: r },
                                i().createElement('div', { className: l()(qe.bg, qe[`bg__${o}`]) }),
                                i().createElement('div', { className: l()(qe.border, qe[`border__${o}`]) }),
                                o === Ze.Checked ? i().createElement('div', { className: qe.check }) : '',
                                i().createElement('div', { className: l()(qe.content) }, e),
                            );
                        },
                    ),
                    Qe = {
                        base: 'MasterKeyButtonGroup_base_be',
                        divider: 'MasterKeyButtonGroup_divider_76',
                        divider__second: 'MasterKeyButtonGroup_divider__second_1d',
                        openButton: 'MasterKeyButtonGroup_openButton_b9',
                        openButton__single: 'MasterKeyButtonGroup_openButton__single_38',
                        buttonsGroup: 'MasterKeyButtonGroup_buttonsGroup_aa',
                        keyIcon: 'MasterKeyButtonGroup_keyIcon_73',
                    },
                    eu = R.strings.gui_lootboxes,
                    uu = ({
                        onOpenBox: e,
                        handleBuyKeys: u,
                        availableKeys: t,
                        isOpenBoxDisabled: n = !1,
                        isBuyAvailable: r = !1,
                        customButtonClassName: o = '',
                        customWrapperClassName: s = '',
                    }) => {
                        var c;
                        const d = (0, a.useMemo)(() => Object.values(t), [t]),
                            E = (0, a.useState)(Ne.One),
                            m = E[0],
                            _ = E[1],
                            A = (0, a.useState)(ke(d)),
                            F = A[0],
                            D = A[1],
                            B = (0, a.useState)(1),
                            C = B[0],
                            p = B[1],
                            g = ((e) => {
                                const u = {};
                                return (
                                    e.forEach((e) => {
                                        u[e.keyID] = {
                                            itemsCount: e.count,
                                            itemsMinCount: 1,
                                            itemsMaxCount: 1 === e.keyID ? 15 : 20,
                                        };
                                    }),
                                    u
                                );
                            })(d.length ? d : [Le]),
                            b = !d.length || d.every((e) => !e.count);
                        (0, a.useEffect)(() => {
                            p(
                                ((e, u, t) => {
                                    switch (e) {
                                        case Ne.One:
                                            return u[t].itemsMinCount;
                                        case Ne.All:
                                            return u[t].itemsCount >= u[t].itemsMaxCount
                                                ? u[t].itemsMaxCount
                                                : u[t].itemsCount;
                                        default:
                                            return u[t].itemsMinCount;
                                    }
                                })(m, g, t[F].keyID),
                            ),
                                g[F].itemsCount || D(ke(d));
                        }, [t, d, g, m, F]),
                            (0, a.useEffect)(() => {
                                g[F].itemsCount <= 1 && _(Ne.One);
                            }, [g, F]);
                        const v = (0, a.useCallback)(() => {
                            e(C, F), t[F].count - 1 <= 0 && D(ke(d));
                        }, [t, d, e, F, C]);
                        return i().createElement(
                            'div',
                            { className: l()(Qe.base, s) },
                            i().createElement('div', { className: Qe.divider }),
                            i().createElement(
                                'div',
                                { className: l()(Qe.buttonsGroup, Qe.openTypeButtonsGroup) },
                                d.map((e) => {
                                    return i().createElement(
                                        Ye,
                                        {
                                            key: `currency-key-tooltip-${e.keyID}`,
                                            tooltipArgs: {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxKeyTooltip(
                                                        'resId',
                                                    ),
                                                args: { keyID: e.keyID, isActionTooltip: !0 },
                                            },
                                        },
                                        i().createElement(Je, {
                                            key: e.keyID,
                                            content:
                                                ((u = e.iconName),
                                                i().createElement('div', {
                                                    className: Qe.keyIcon,
                                                    style: {
                                                        backgroundImage: `url(R.images.gui_lootboxes.gui.maps.storage.currencyKey.${u})`,
                                                    },
                                                })),
                                            classNames: o,
                                            handleButtonClick: () => {
                                                return (u = e.keyID), void D(u);
                                                var u;
                                            },
                                            isChecked: F === e.keyID,
                                            isDisabled: !e.count,
                                        }),
                                    );
                                    var u;
                                }),
                            ),
                            i().createElement('div', { className: l()(Qe.divider, Qe.divider__second) }),
                            i().createElement(
                                'div',
                                { className: l()(Qe.buttonsGroup, Qe.countButtonsGroup) },
                                i().createElement(Je, {
                                    content: i().createElement(ae, {
                                        text: eu.optional.openCount.numberCount(),
                                        binding: { count: g[F].itemsMinCount },
                                    }),
                                    classNames: o,
                                    handleButtonClick: () => {
                                        _(Ne.One);
                                    },
                                    isChecked: m === Ne.One,
                                    isDisabled: !t[F].count,
                                }),
                                i().createElement(Je, {
                                    content:
                                        (null == (c = g[F]) ? void 0 : c.itemsCount) < g[F].itemsMaxCount
                                            ? i().createElement(ae, { text: eu.optional.openCount.all() })
                                            : i().createElement(ae, {
                                                  text: eu.optional.openCount.numberCount(),
                                                  binding: { count: g[F].itemsMaxCount },
                                              }),
                                    classNames: o,
                                    handleButtonClick: () => {
                                        _(Ne.All);
                                    },
                                    isChecked: m === Ne.All,
                                    isDisabled: g[F].itemsCount <= 1,
                                }),
                            ),
                            i().createElement(
                                ye,
                                {
                                    mixClass: Qe.openButton,
                                    size: xe.medium,
                                    type: fe.main,
                                    onClick: b ? u : v,
                                    disabled: b ? !r : n,
                                },
                                i().createElement(ae, { text: b ? eu.optional.buyBox() : eu.optional.openBox() }),
                            ),
                        );
                    },
                    tu = {
                        base: 'NormalButtonGroup_base_17',
                        divider: 'NormalButtonGroup_divider_78',
                        divider__second: 'NormalButtonGroup_divider__second_58',
                        openButton: 'NormalButtonGroup_openButton_85',
                        buttonsGroup: 'NormalButtonGroup_buttonsGroup_39',
                    },
                    nu = R.strings.gui_lootboxes,
                    ru = i().memo(
                        ({
                            boxCount: e,
                            onOpenBox: u,
                            isOpenBoxDisabled: t = !1,
                            customButtonClassName: n = '',
                            customWrapperClassName: r = '',
                            manualMaxOpenCount: o = 0,
                        }) => {
                            const s = (0, a.useState)(Ne.One),
                                c = s[0],
                                d = s[1],
                                E = (0, a.useState)(1),
                                m = E[0],
                                _ = E[1],
                                A = o || 10;
                            (0, a.useEffect)(() => {
                                _(Math.min(m, A));
                            }, [m, A]),
                                (0, a.useEffect)(() => {
                                    switch (c) {
                                        case Ne.One:
                                            _(1);
                                            break;
                                        case Ne.All:
                                            _(e >= A ? A : e);
                                            break;
                                        default:
                                            _(1);
                                    }
                                }, [e, c, A]);
                            const F = (0, a.useCallback)(() => {
                                u(m);
                            }, [u, m]);
                            return i().createElement(
                                'div',
                                { className: l()(tu.base, r) },
                                A > 1 &&
                                    i().createElement(
                                        'div',
                                        { className: l()(tu.buttonsGroup, tu.countButtonsGroup) },
                                        i().createElement(Je, {
                                            content: i().createElement(ae, {
                                                text: nu.optional.openCount.numberCount(),
                                                binding: { count: 1 },
                                            }),
                                            classNames: n,
                                            handleButtonClick: () => {
                                                d(Ne.One);
                                            },
                                            isChecked: c === Ne.One,
                                        }),
                                        i().createElement(Je, {
                                            content:
                                                e < A
                                                    ? i().createElement(ae, { text: nu.optional.openCount.all() })
                                                    : i().createElement(ae, {
                                                          text: nu.optional.openCount.numberCount(),
                                                          binding: { count: A },
                                                      }),
                                            classNames: n,
                                            handleButtonClick: () => {
                                                d(Ne.All);
                                            },
                                            isChecked: c === Ne.All,
                                            isDisabled: e <= 1,
                                        }),
                                    ),
                                i().createElement(
                                    ye,
                                    {
                                        mixClass: tu.openButton,
                                        size: xe.medium,
                                        type: fe.main,
                                        onClick: F,
                                        disabled: t || !e,
                                    },
                                    i().createElement(ae, { text: nu.optional.openBox() }),
                                ),
                            );
                        },
                    ),
                    ou = R.strings.gui_lootboxes,
                    au = i().memo(
                        ({
                            onOpenBox: e,
                            onOpenShopByBoxID: u,
                            onBuyBox: t,
                            count: n,
                            disabled: r,
                            isOpenBoxDisabled: o,
                            isBuyAvailable: s = !1,
                            allKeys: c = [],
                            currentLootboxKeysIDs: d = [],
                            hasUniqueURL: E = !1,
                            manualMaxOpenCount: m = 0,
                        }) => {
                            const _ = 0 === n,
                                A = (0, a.useState)(Me(d, c)),
                                F = A[0],
                                D = A[1],
                                B = (0, a.useCallback)(() => {
                                    t && t();
                                }, [t]),
                                C = (0, a.useCallback)(
                                    (u, t) => {
                                        e(u, t);
                                    },
                                    [e],
                                ),
                                p = (0, a.useCallback)(
                                    (u) => {
                                        e(u);
                                    },
                                    [e],
                                ),
                                g = (0, a.useCallback)(() => {
                                    u();
                                }, [u]);
                            return (
                                (0, a.useEffect)(() => {
                                    D(Me(d, c));
                                }, [c, d]),
                                r
                                    ? i().createElement(
                                          'div',
                                          { className: Te },
                                          i().createElement(
                                              'div',
                                              { className: 'BoxRadioButtons_warningText_71' },
                                              ou.entryPointWidget.disabledTooltip.body(),
                                          ),
                                      )
                                    : i().createElement(
                                          'div',
                                          { className: Te },
                                          d.length
                                              ? ((e) =>
                                                    Object.keys(e).length
                                                        ? i().createElement(uu, {
                                                              availableKeys: e,
                                                              customButtonClassName: Se,
                                                              isOpenBoxDisabled: o,
                                                              onOpenBox: C,
                                                              handleBuyKeys: B,
                                                              isBuyAvailable: s,
                                                          })
                                                        : i().createElement(
                                                              ye,
                                                              {
                                                                  size: xe.medium,
                                                                  type: fe.main,
                                                                  onClick: B,
                                                                  disabled: !s,
                                                              },
                                                              i().createElement(Be, { text: ou.optional.buyBox() }),
                                                          ))(F)
                                              : i().createElement(
                                                    'div',
                                                    null,
                                                    _ &&
                                                        E &&
                                                        i().createElement(
                                                            ye,
                                                            {
                                                                mixClass: l()(Se, 'BoxRadioButtons_buyButton_a7'),
                                                                size: xe.medium,
                                                                type: fe.main,
                                                                onClick: g,
                                                                disabled: !s,
                                                            },
                                                            i().createElement(Be, { text: ou.optional.buyBox() }),
                                                        ),
                                                    !_ &&
                                                        i().createElement(ru, {
                                                            boxCount: n,
                                                            customButtonClassName: Se,
                                                            isOpenBoxDisabled: o,
                                                            onOpenBox: p,
                                                            manualMaxOpenCount: m,
                                                        }),
                                                ),
                                      )
                            );
                        },
                    );
                var iu = t(7635);
                const su = 'lootboxStageRotation',
                    lu = 'vehicle',
                    cu = 'bonus',
                    du = {
                        start: { startTime: 0.3, endTime: 1.3 },
                        idle: { startTime: 1.3, endTime: 4.15 },
                        hide: { startTime: 4.25, endTime: 4.4 },
                        open: { startTime: 4.75, endTime: 7.3 },
                    },
                    Eu = {
                        start: { startTime: 0.3, endTime: 1.3 },
                        idle: { startTime: 1.3, endTime: 4.15 },
                        hide: { startTime: 4.25, endTime: 4.4 },
                        open: { startTime: 7.4, endTime: 10.23 },
                    },
                    mu = R.sounds.lootboxes_drop(),
                    _u = {
                        1: R.sounds.lootboxes_open_standart(),
                        2: R.sounds.lootboxes_open_bronze(),
                        3: R.sounds.lootboxes_open_silver(),
                        4: R.sounds.lootboxes_open_gold(),
                    };
                function Au(e) {
                    return e;
                }
                function Fu() {
                    return !1;
                }
                console.log;
                var Du = t(9174);
                function Bu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const Cu = (e) => (0 === e ? window : window.subViews.get(e));
                function pu(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function gu(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var bu = t(3946);
                const vu = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: r, mocks: o }) {
                                const s = (0, a.useRef)([]),
                                    l = (e, t, n) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Cu,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function o(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = t(u),
                                                        o = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const i = 'string' == typeof o ? `${n}.${o}` : n,
                                                            s = T.O.view.addModelObserver(i, u, !0);
                                                        return r.set(s, t), e && t(a(o)), s;
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
                                                                                    return Bu(e, u);
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
                                                                                          ? Bu(e, u)
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
                                                                })(r.keys());
                                                            !(e = t()).done;

                                                        )
                                                            o(e.value, u);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(t),
                                            a =
                                                'real' === e
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : a.readByPath(u),
                                            l = (e) => s.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = Object.assign({}, e.primitives(['isShowTriggerHint']), {
                                                        root: e.object(),
                                                        lootboxes: e.array('lootboxes'),
                                                        lootboxKeys: e.array('lootboxKeys'),
                                                    }),
                                                    t = (0, bu.Om)(
                                                        () =>
                                                            gu(u.lootboxes.get(), (e) =>
                                                                Object.assign({}, e, {
                                                                    bonusGroups: gu(e.bonusGroups, Au),
                                                                }),
                                                            ),
                                                        { equals: Fu },
                                                    ),
                                                    n = (0, bu.Om)(
                                                        () => {
                                                            const e = (function (e, u) {
                                                                for (let t = 0; t < e.length; t++) {
                                                                    const n = pu(e[t]);
                                                                    if (u(n, t, e)) return n;
                                                                }
                                                            })(
                                                                u.lootboxes.get(),
                                                                (e) => e.boxID === u.root.get().currentLootboxID,
                                                            );
                                                            return e
                                                                ? Object.assign({}, e, {
                                                                      bonusGroups: gu(e.bonusGroups, (u) => ({
                                                                          value: u,
                                                                          stage: u === su ? e.progressionStage : 0,
                                                                      })),
                                                                      unlockKeyIDs: gu(e.unlockKeyIDs, (e) => e),
                                                                  })
                                                                : void 0;
                                                        },
                                                        { equals: Fu },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getLootboxes: t,
                                                        getCurrentLootbox: n,
                                                        getLootboxKeys: () => gu(u.lootboxKeys.get(), (e) => e),
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            r = Du.LO.box(n, { equals: Fu });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, Du.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            r = Du.LO.box(n, { equals: Fu });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, Du.aD)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = Du.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, Du.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                o = Object.entries(r),
                                                                i = o.reduce(
                                                                    (e, [u, t]) => ((e[t] = Du.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, Du.aD)((e) => {
                                                                            o.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
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
                                            d = { mode: e, model: c, externalModel: a, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && n ? n.controls(d) : u(d),
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    E = d[0],
                                    m = d[1],
                                    _ = (0, a.useState)(() => l(e, n, o)),
                                    A = _[0],
                                    F = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? F(l(E, n, o)) : (c.current = !0);
                                    }, [o, E, n]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), s.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    i().createElement(t.Provider, { value: A }, r)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        openLootBoxes: e.createCallback((e) => e, 'openLootBoxes'),
                        close: e.createCallbackNoArgs('onClose'),
                        onError: e.createCallback((e) => ({ errorFilePath: e }), 'onError'),
                        buyBox: e.createCallback((e) => e, 'buyBox'),
                        showBonusProbabilities: e.createCallbackNoArgs('showBonusProbabilities'),
                        openningFinished: e.createCallbackNoArgs('openningFinished'),
                        lootboxSelected: e.createCallback((e) => e, 'onLootboxSelected'),
                        changeAnimationEnabledSetting: e.createCallback((e) => e, 'changeAnimationEnabledSetting'),
                        hideTriggerHint: e.createCallbackNoArgs('hideTriggerHint'),
                        showLootBoxInfoPage: e.createCallbackNoArgs('showLootBoxInfoPage'),
                    })),
                    hu = vu[0],
                    fu = vu[1],
                    xu = {
                        base: 'BoxRewards_base_05',
                        content: 'BoxRewards_content_b6',
                        frame: 'BoxRewards_frame_30',
                        frame__bottom: 'BoxRewards_frame__bottom_4e',
                        frameContent: 'BoxRewards_frameContent_f1',
                        corner: 'BoxRewards_corner_88',
                        corner__topLeft: 'BoxRewards_corner__topLeft_e5',
                        corner__topRight: 'BoxRewards_corner__topRight_dd',
                        corner__bottomLeft: 'BoxRewards_corner__bottomLeft_11',
                        corner__bottomRight: 'BoxRewards_corner__bottomRight_7a',
                        possibleRewardsInfoWrapper: 'BoxRewards_possibleRewardsInfoWrapper_8e',
                        possibleRewardsHeader: 'BoxRewards_possibleRewardsHeader_42',
                        possibleRewardsImagesWrapper: 'BoxRewards_possibleRewardsImagesWrapper_d8',
                        reward: 'BoxRewards_reward_a7',
                        noMarginRight: 'BoxRewards_noMarginRight_ec',
                        rewardIcon: 'BoxRewards_rewardIcon_18',
                        rewardIcon__vehicle: 'BoxRewards_rewardIcon__vehicle_5d',
                        rewardIcon__premium: 'BoxRewards_rewardIcon__premium_91',
                        rewardIcon__currency: 'BoxRewards_rewardIcon__currency_8e',
                        rewardIcon__vehicleCustomizations: 'BoxRewards_rewardIcon__vehicleCustomizations_ca',
                        rewardIcon__crew: 'BoxRewards_rewardIcon__crew_53',
                        rewardIcon__boosters: 'BoxRewards_rewardIcon__boosters_cd',
                        rewardIcon__equipments: 'BoxRewards_rewardIcon__equipments_17',
                        rewardIcon__accountCustomizations: 'BoxRewards_rewardIcon__accountCustomizations_8d',
                        rewardIcon__featureItems: 'BoxRewards_rewardIcon__featureItems_a3',
                        rewardIcon__lootboxStageRotation: 'BoxRewards_rewardIcon__lootboxStageRotation_db',
                        rewardName: 'BoxRewards_rewardName_19',
                        stage: 'BoxRewards_stage_ae',
                        stage__1: 'BoxRewards_stage__1_51',
                        stage__2: 'BoxRewards_stage__2_9d',
                        stage__3: 'BoxRewards_stage__3_2e',
                    },
                    wu = R.strings.gui_lootboxes,
                    yu = (e, u) =>
                        e === su
                            ? {
                                  contentId:
                                      R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxRotationTooltip(
                                          'resId',
                                      ),
                                  args: { lootBoxID: u },
                              }
                            : {
                                  contentId:
                                      R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.BonusGroupTooltip('resId'),
                                  args: { bonusGroup: e, lootBoxID: u },
                              },
                    Tu = i().memo(({ bonusGroups: e, lootBoxID: u }) => {
                        const t = fu().controls;
                        return i().createElement(
                            'div',
                            { className: xu.base },
                            i().createElement(
                                'div',
                                { className: xu.possibleRewardsInfoWrapper },
                                i().createElement(
                                    'div',
                                    { className: xu.frame },
                                    i().createElement('div', { className: l()(xu.corner, xu.corner__topLeft) }),
                                    i().createElement(
                                        'div',
                                        { className: xu.frameContent },
                                        i().createElement(Be, {
                                            text: wu.optional.possibleRewardsTitle(),
                                            format: { classMix: xu.possibleRewardsHeader },
                                        }),
                                    ),
                                    i().createElement('div', { className: l()(xu.corner, xu.corner__topRight) }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: xu.possibleRewardsImagesWrapper },
                                    e.map(({ value: e, stage: t }, n) => {
                                        var r;
                                        return i().createElement(
                                            Ye,
                                            { key: `${e}_${n}`, tooltipArgs: Object.assign({}, yu(e, u)) },
                                            i().createElement(
                                                'div',
                                                { className: l()(xu.reward, (n + 1) % 3 == 0 && xu.noMarginRight) },
                                                i().createElement(
                                                    'div',
                                                    { className: l()(xu.rewardIcon, xu[`rewardIcon__${e}`]) },
                                                    t > 0 &&
                                                        i().createElement('div', {
                                                            className: l()(xu.stage, xu[`stage__${t}`]),
                                                        }),
                                                ),
                                                i().createElement(Be, {
                                                    text: null != (r = wu.possibleRewards.$dyn(e)) ? r : '',
                                                    format: { classMix: xu.rewardName },
                                                }),
                                            ),
                                        );
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: l()(xu.frame, xu.frame__bottom) },
                                    i().createElement('div', { className: l()(xu.corner, xu.corner__bottomLeft) }),
                                    i().createElement(
                                        'div',
                                        { className: xu.frameContent },
                                        i().createElement(
                                            Ge,
                                            {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.ProbabilityButtonTooltip(
                                                        'resId',
                                                    ),
                                            },
                                            i().createElement(
                                                'div',
                                                null,
                                                i().createElement(iu.N, {
                                                    title: R.strings.gui_lootboxes.optional.openProbabilityOverlay(),
                                                    onClick: t.showBonusProbabilities,
                                                }),
                                            ),
                                        ),
                                    ),
                                    i().createElement('div', { className: l()(xu.corner, xu.corner__bottomRight) }),
                                ),
                            ),
                        );
                    }),
                    Su = R.strings.gui_lootboxes,
                    Ru = i().memo(({ buyBox: e }) => {
                        const u = (0, a.useState)(!1),
                            t = u[0],
                            n = u[1];
                        return i().createElement(
                            'div',
                            {
                                className: 'BuyButton_base_ac',
                                onMouseEnter: () => {
                                    n(!0);
                                },
                                onMouseLeave: () => {
                                    n(!1);
                                },
                                onClick: e,
                            },
                            i().createElement('div', {
                                className: l()(
                                    'BuyButton_buyButtonIcon_84',
                                    t && 'BuyButton_buyButtonIcon__hovered_61',
                                ),
                            }),
                            i().createElement(Be, {
                                text: Su.optional.buy(),
                                format: {
                                    classMix: l()(
                                        'BuyButton_buyButtonText_9d',
                                        t && 'BuyButton_buyButtonText__hovered_3e',
                                    ),
                                },
                            }),
                        );
                    }),
                    Nu = (e) => {
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
                    };
                var Ou = t(7515);
                const Lu = [];
                function Mu(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Lu)
                    );
                }
                function ku(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, o),
                        r,
                    ];
                }
                function Iu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var Hu = t(7030);
                let Pu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Pu || (Pu = {}));
                const Gu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Wu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                o = n[1];
                            return (0, Ou.u)(r, o, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Gu : l,
                                d = (0, a.useRef)(null),
                                E = (0, a.useRef)(null),
                                m = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var n,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Iu(e, u);
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
                                                                              ? Iu(e, u)
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
                                                !(n = r()).done;

                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                _ = (function (e, u, t) {
                                    const n = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let r,
                                                    o = !1,
                                                    a = 0;
                                                function i() {
                                                    r && clearTimeout(r);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - a;
                                                    function d() {
                                                        (a = Date.now()), t.apply(l, s);
                                                    }
                                                    o ||
                                                        (n && !r && d(),
                                                        i(),
                                                        void 0 === n && c > e
                                                            ? d()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : d,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (s.cancel = function () {
                                                        i(), (o = !0);
                                                    }),
                                                    s
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        T.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                A = (0, Hu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), o && _());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                F = A[0],
                                D = A[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            o = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + o + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, F.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = E.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            o = B(u, e, n);
                                        C(o);
                                    },
                                    [C, B, c.step],
                                ),
                                g = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            d.current && m.trigger('mouseWheel', e, F.scrollPosition, u(d.current));
                                    },
                                    [F.scrollPosition, p, m],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Nu(() => {
                                            const e = d.current;
                                            e &&
                                                (C(i(e, F.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                v = Mu(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', b),
                                        () => {
                                            window.removeEventListener('resize', b);
                                        }
                                    ),
                                    [b],
                                ),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (E.current ? r(E.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: c.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: g,
                                        applyScroll: C,
                                        applyStepTo: p,
                                        contentRef: d,
                                        wrapperRef: E,
                                        scrollPosition: D,
                                        animationScroll: F,
                                        recalculateContent: v,
                                        events: { on: m.on, off: m.off },
                                    }),
                                    [F.scrollPosition, C, p, m.off, m.on, v, g, D, c.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Uu = Wu({
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
                        getDirection: (e) => (e.deltaY > 1 ? Pu.Next : Pu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ju = 'HorizontalBar_base__nonActive_82',
                    zu = 'disable',
                    $u = { pending: !1, offset: 0 },
                    Ku = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Vu = () => {},
                    Xu = (e, u) => Math.max(20, e.offsetWidth * u),
                    Yu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ku, onDrag: n = Vu }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)($u),
                            _ = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    l = (0, Ou.u)(0, 1, a / (r - n)),
                                    E = (u.offsetWidth - Xu(u, i)) * l;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && s.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(zu), void s.current.classList.remove(zu);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(zu), void s.current.classList.add(zu);
                                            var u, t;
                                            o.current.classList.remove(zu), s.current.classList.remove(zu);
                                        }
                                    })(E);
                            },
                            B = Mu(() => {
                                (() => {
                                    const u = d.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && u && n && t)) return;
                                    const a = Math.min(1, n / o);
                                    (u.style.width = `${Xu(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === a ? r.current.classList.add(ju) : r.current.classList.remove(ju));
                                })(),
                                    D();
                            });
                        (0, a.useEffect)(() => Nu(B)),
                            (0, a.useEffect)(
                                () =>
                                    Nu(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = Vu;
                                        const n = () => {
                                            t(), (t = Nu(B));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const o = c.current,
                                            a = d.current;
                                        if (!r || !o || !a) return;
                                        const i = u.screenX - _.offset - o.getBoundingClientRect().x,
                                            s = (i / o.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), F($u);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, F]);
                        const C = ku((u) => e.applyStepTo(u), E, [e]),
                            p = C[0],
                            g = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const b = (e) => {
                            e.target.classList.contains(zu) || (0, v.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zu) || 0 !== e.button || ((0, v.G)('play'), p(Pu.Next));
                                },
                                onMouseUp: g,
                                ref: o,
                                onMouseEnter: b,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        n &&
                                            0 === u.button &&
                                            ((0, v.G)('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = d.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const o = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + o * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? Pu.Prev : Pu.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                i().createElement('div', { ref: d, className: l()('HorizontalBar_thumb_fd', u.thumb) }),
                                i().createElement('div', { className: l()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(zu) || 0 !== e.button || ((0, v.G)('play'), p(Pu.Prev));
                                },
                                onMouseUp: g,
                                ref: s,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    qu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Zu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(qu.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: l()(qu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(qu.defaultScrollArea, r) },
                                i().createElement(Ju, { className: s, api: m, classNames: o }, e),
                            ),
                            i().createElement(Yu, { getStepByRailClick: c, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    Ju = ({ api: e, className: u, classNames: t, children: n, style: r }) => (
                        (0, a.useEffect)(() => Nu(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(qu.base, u), style: r },
                            i().createElement(
                                'div',
                                {
                                    className: l()(qu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: l()(qu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Ju.Bar = Yu),
                    (Ju.Default = Zu),
                    (Ju.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Nu(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(qu.base, u) },
                            i().createElement(
                                'div',
                                { className: l()(qu.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: l()(qu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const Qu = Wu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Pu.Next : Pu.Prev),
                    }),
                    et = 'VerticalBar_base__nonActive_42',
                    ut = 'disable',
                    tt = () => {},
                    nt = { pending: !1, offset: 0 },
                    rt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ot = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    at = (e, u) => Math.max(20, e.offsetHeight * u),
                    it = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = rt, onDrag: n = tt }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(nt),
                            _ = m[0],
                            A = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            D = Mu(() => {
                                const u = d.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && o && u && t)) return;
                                const a = Math.min(1, n / o);
                                return (
                                    (u.style.height = `${at(t, a)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === a ? r.current.classList.add(et) : r.current.classList.remove(et)),
                                    a
                                );
                            }),
                            B = Mu(() => {
                                const u = c.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    l = (0, Ou.u)(0, 1, a / (r - n)),
                                    E = (u.offsetHeight - at(u, i)) * l;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (o.current && s.current && c.current && d.current) {
                                            if (0 === e)
                                                return o.current.classList.add(ut), void s.current.classList.remove(ut);
                                            if (
                                                ((u = c.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(ut), void s.current.classList.add(ut);
                                            var u, t;
                                            o.current.classList.remove(ut), s.current.classList.remove(ut);
                                        }
                                    })(E);
                            }),
                            C = Mu(() => {
                                ot(e, () => {
                                    D(), B();
                                });
                            });
                        (0, a.useEffect)(() => Nu(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    ot(e, () => {
                                        B();
                                    });
                                };
                                let t = tt;
                                const n = () => {
                                    t(), (t = Nu(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = (u) => {
                                        ot(e, (t) => {
                                            const r = c.current,
                                                o = d.current,
                                                a = e.getContainerSize();
                                            if (!r || !o || !a) return;
                                            const i = u.screenY - _.offset - r.getBoundingClientRect().y,
                                                s = (i / r.offsetHeight) * a;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: s });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), F(nt);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, F]);
                        const p = ku((u) => e.applyStepTo(u), E, [e]),
                            g = p[0],
                            b = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const h = (e) => {
                            e.target.classList.contains(ut) || (0, v.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: l()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: l()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ut) || 0 !== e.button || ((0, v.G)('play'), g(Pu.Next));
                                },
                                ref: o,
                                onMouseEnter: h,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: l()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            ((0, v.G)('play'),
                                            u.target === n
                                                ? F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((r = u.screenY > n.getBoundingClientRect().y ? Pu.Prev : Pu.Next),
                                                  d.current &&
                                                      ot(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              o = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(o);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                i().createElement('div', { ref: d, className: u.thumb }),
                                i().createElement('div', { className: l()('VerticalBar_rail_43', u.rail) }),
                            ),
                            i().createElement('div', {
                                className: l()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ut) || 0 !== e.button || ((0, v.G)('play'), g(Pu.Prev));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    st = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    lt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: l()(st.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: l()(st.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(st.area, r) },
                                i().createElement(ct, { className: o, classNames: s, api: m }, e),
                            ),
                            i().createElement(it, { getStepByRailClick: c, api: u, onDrag: d, classNames: E }),
                        );
                    },
                    ct = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => Nu(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: l()(st.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: l()(st.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                ct.Default = lt;
                const dt = { Vertical: r, Horizontal: n },
                    Et = { type: 'idle' },
                    mt = {
                        base: 'Carousel_base_51',
                        prev: 'Carousel_prev_37',
                        next: 'Carousel_next_a6',
                        prev__disabled: 'Carousel_prev__disabled_3e',
                        next__disabled: 'Carousel_next__disabled_c0',
                        carousel: 'Carousel_carousel_2d',
                        horizontalWrapper: 'Carousel_horizontalWrapper_fa',
                        horizontalContent: 'Carousel_horizontalContent_49',
                        scroll: 'Carousel_scroll_8a',
                    },
                    _t = ({ count: e, customFontSize: u, maximum: t }) => {
                        const n = 0.6 * (null != u ? u : 16) + 'rem';
                        return i().createElement(
                            'div',
                            { className: 'FormatCount_base_01', style: { fontSize: `${null != u ? u : 16}rem` } },
                            t && e >= t.maxCount
                                ? i().createElement('div', null, null == t ? void 0 : t.maxCountText)
                                : i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement('div', { style: { width: n } }, '×'),
                                      e,
                                  ),
                        );
                    },
                    At = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    Ft = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 300, easing: At },
                    },
                    Dt = {
                        from: { x: 0, opacity: 0 },
                        to: { x: 0, opacity: 1 },
                        delay: 0,
                        config: { duration: 300, easing: At },
                    },
                    Bt = {
                        base: 'LootboxCard_base_54',
                        base__disabled: 'LootboxCard_base__disabled_9a',
                        disabledOverlay: 'LootboxCard_disabledOverlay_e8',
                        disabledOverlay__layout: 'LootboxCard_disabledOverlay__layout_d9',
                        disabledOverlay__img: 'LootboxCard_disabledOverlay__img_12',
                        border: 'LootboxCard_border_a8',
                        base__selected: 'LootboxCard_base__selected_1b',
                        icon: 'LootboxCard_icon_a4',
                        infinite: 'LootboxCard_infinite_85',
                        count: 'LootboxCard_count_f7',
                        text: 'LootboxCard_text_fc',
                        innerText: 'LootboxCard_innerText_fc',
                        hover: 'LootboxCard_hover_da',
                        disabled: 'LootboxCard_disabled_db',
                        check: 'LootboxCard_check_4f',
                    },
                    Ct = R.strings.lootboxes,
                    pt = i().memo(
                        ({
                            descriptionKey: e,
                            iconName: u,
                            isOpenEnabled: t,
                            count: n,
                            boxID: r,
                            isSelected: o = !1,
                            isInfinite: s = !1,
                            onSelect: c,
                        }) => {
                            var d;
                            const m = (0, a.useState)(!1),
                                _ = m[0],
                                A = m[1],
                                F = (0, a.useState)(''),
                                D = F[0],
                                B = F[1],
                                C = (0, E.GS)().mediaSize,
                                p = null != (d = Ct.userName.$dyn(e)) ? d : Ct.userName.default(),
                                g = l()(
                                    Bt.base,
                                    o && Bt.base__selected,
                                    !t && Bt.base__disabled,
                                    _ && Bt.base__hovered,
                                ),
                                b = C < E.cJ.Medium ? 'c_96x64' : 'c_160x106',
                                h = (0, Hu.useTransition)(_, Object.assign({ key: _ }, Ft)),
                                f = (0, Hu.useSpring)(Object.assign({}, Dt)),
                                x = (0, a.useCallback)(
                                    (e, u) =>
                                        u
                                            ? i().createElement('div', { className: Bt.infinite })
                                            : e > 0
                                              ? i().createElement(
                                                    'div',
                                                    { className: Bt.count },
                                                    i().createElement(_t, { count: e }),
                                                )
                                              : '',
                                    [],
                                ),
                                w = (0, a.useCallback)(
                                    (e) => {
                                        e
                                            ? B(
                                                  `url('R.images.gui_lootboxes.gui.maps.lootboxes.${b}.${u}') no-repeat center / 100%`,
                                              )
                                            : (B(
                                                  `url('R.images.gui_lootboxes.gui.maps.lootboxes.${b}.default') no-repeat center / 100%`,
                                              ),
                                              console.warn('No resource icon for lootbox', u));
                                    },
                                    [u, b],
                                );
                            var y, T;
                            return (
                                (y = `R.images.gui_lootboxes.gui.maps.lootboxes.${b}.${u}`),
                                (T = w),
                                (0, a.useEffect)(() => {
                                    const e = () => T(!0),
                                        u = () => T(!1),
                                        t = new Image();
                                    return (
                                        t.addEventListener('load', e),
                                        t.addEventListener('error', u),
                                        (t.src = y),
                                        () => {
                                            t.removeEventListener('load', e), t.removeEventListener('error', u);
                                        }
                                    );
                                }, [y, T]),
                                i().createElement(
                                    'div',
                                    {
                                        className: g,
                                        onClick: () => {
                                            t && (c(r), (0, v.G)(R.sounds.tabs()));
                                        },
                                        onMouseEnter: () => {
                                            A(!0);
                                        },
                                        onMouseLeave: () => {
                                            A(!1);
                                        },
                                    },
                                    i().createElement('div', { className: Bt.border }),
                                    !t &&
                                        i().createElement(
                                            'div',
                                            { className: Bt.disabledOverlay },
                                            i().createElement('div', {
                                                className: l()(Bt.disabledOverlay, Bt.disabledOverlay__layout),
                                            }),
                                            i().createElement('div', {
                                                className: l()(Bt.disabledOverlay, Bt.disabledOverlay__img),
                                            }),
                                        ),
                                    i().createElement(
                                        Ye,
                                        {
                                            tooltipArgs: {
                                                contentId:
                                                    R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.LootboxTooltip(
                                                        'resId',
                                                    ),
                                                args: { lootBoxID: r },
                                            },
                                        },
                                        i().createElement('div', { className: Bt.icon, style: { background: D } }),
                                    ),
                                    x(n, s),
                                    i().createElement(
                                        'div',
                                        { className: Bt.text },
                                        i().createElement(Be, { text: p, format: { classMix: Bt.innerText } }),
                                    ),
                                    t &&
                                        !o &&
                                        h(
                                            (e, u) =>
                                                u &&
                                                i().createElement(Hu.animated.div, { className: Bt.hover, style: e }),
                                        ),
                                    !t &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: Bt.hover }),
                                            i().createElement('div', { className: Bt.disabled }),
                                        ),
                                    o && i().createElement('div', { className: Bt.check, style: f }),
                                )
                            );
                        },
                    );
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                const bt = (0, M.Pi)(({ disabled: e, onChange: u }) => {
                    const t = Uu();
                    !(function (e, u) {
                        const t = e.contentRef,
                            n = e.wrapperRef,
                            r = e.scrollPosition,
                            o = e.clampPosition,
                            i = e.animationScroll,
                            s = e.events,
                            l = (0, a.useState)(Et),
                            c = l[0],
                            d = l[1];
                        (0, a.useEffect)(() => {
                            const e = t.current;
                            e && (e.style.cursor = 'dragging' === c.type ? 'move' : 'grab');
                        }, [t, c.type]),
                            (0, a.useEffect)(() => {
                                if ('dragging' !== c.type) return;
                                const e = T.O.client.events.mouse.move(([e, a]) => {
                                        const s = t.current,
                                            l = n.current;
                                        if (!s || !l) return;
                                        if ('inside' === a && e.clientX < 0) return;
                                        const d = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                            E = c.positionFrom - d,
                                            m = c.previousScrollPosition + E;
                                        r.start(
                                            Object.assign(
                                                {
                                                    scrollPosition: o(s, m),
                                                    from: { scrollPosition: i.scrollPosition.get() },
                                                },
                                                u,
                                            ),
                                        );
                                    }),
                                    a = T.O.client.events.mouse.up(function () {
                                        d({ type: 'scrollingToEnd' });
                                    });
                                return () => {
                                    e(), a();
                                };
                            }, [i.scrollPosition, o, t, c, r, n, u]),
                            (0, a.useEffect)(() => {
                                if ('scrollingToEnd' !== c.type) return;
                                const e = () => {
                                    d(Et);
                                };
                                return i.scrollPosition.idle && e(), s.on('rest', e), () => s.off('rest', e);
                            }, [i.scrollPosition, c.type, s]),
                            (0, a.useEffect)(() => {
                                const e = t.current;
                                if (!e) return;
                                const u = (e) => {
                                    d({
                                        type: 'dragging',
                                        positionFrom: e.screenX,
                                        previousScrollPosition: i.scrollPosition.get(),
                                    });
                                };
                                return e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u);
                            }, [i.scrollPosition, t]);
                    })(t);
                    const n = fu().model,
                        r = n.root.get().currentLootboxID,
                        o = n.computes.getLootboxes(),
                        s = ku((e) => t.applyStepTo(e), t.stepTimeout, [t]),
                        c = s[0],
                        d = s[1],
                        E = (0, a.useCallback)(
                            (t) => {
                                e || u(t);
                            },
                            [e, u],
                        ),
                        m = o.length > 4,
                        _ = (0, a.useState)(!1),
                        A = _[0],
                        F = _[1],
                        D = (0, a.useState)(!0),
                        B = D[0],
                        C = D[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = (e) => {
                                const u = t.getContainerSize() - t.getWrapperSize();
                                F(e.value.scrollPosition > 0), C(e.value.scrollPosition < u);
                            };
                            return (
                                t.events.on('rest', e),
                                () => {
                                    t.events.off('rest', e);
                                }
                            );
                        }, [t, t.events]),
                        i().createElement(
                            'div',
                            { className: mt.base },
                            m &&
                                i().createElement('div', {
                                    className: l()(mt.prev, !A && mt.prev__disabled),
                                    onMouseDown: () => {
                                        A && c(Pu.Next);
                                    },
                                    onMouseUp: d,
                                }),
                            i().createElement(
                                'div',
                                { className: mt.carousel },
                                i().createElement(
                                    dt.Horizontal.Area,
                                    {
                                        api: t,
                                        classNames: {
                                            content: mt.horizontalContent,
                                            wrapper: m ? '' : mt.horizontalWrapper,
                                        },
                                        className: mt.scroll,
                                    },
                                    gu(o, (e) =>
                                        i().createElement(
                                            'div',
                                            { key: e.boxID, className: mt.lootboxCard },
                                            i().createElement(
                                                pt,
                                                gt({}, e, { isSelected: e.boxID === r, onSelect: E }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            m &&
                                i().createElement('div', {
                                    className: l()(mt.next, !B && mt.next__disabled),
                                    onMouseDown: () => {
                                        B && c(Pu.Prev);
                                    },
                                    onMouseUp: d,
                                }),
                        )
                    );
                });
                let vt;
                var ht;
                ((ht = vt || (vt = {})).Heavy = 'heavyTank'),
                    (ht.Medium = 'mediumTank'),
                    (ht.Light = 'lightTank'),
                    (ht.Spg = 'SPG'),
                    (ht.AtSpg = 'AT-SPG'),
                    R.strings.gui_lootboxes.time.days(),
                    R.strings.gui_lootboxes.time.hours(),
                    R.strings.gui_lootboxes.time.minutes(),
                    R.strings.gui_lootboxes.time.seconds();
                const ft = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    xt = (e) => {
                        const u = [...new Set(gu(e, (e) => ((e) => ft[e] || '')(e)))];
                        return u.length > 1 ? `${u[0]}-${u[1]}` : `${u[0]}`;
                    },
                    wt = ({ value: e, className: u }) =>
                        i().createElement(
                            'div',
                            { className: l()('Counter_base_82', u) },
                            i().createElement('div', { className: 'Counter_text_79' }, e),
                        ),
                    yt = ({ onClick: e }) =>
                        i().createElement('div', {
                            className: l()('InfoIcon_base_6d', e && 'InfoIcon_base__clickable_f2'),
                            onClick: e,
                        }),
                    Tt = 'GuaranteedRewardCount_text_94',
                    St = R.strings.gui_lootboxes.guaranteedReward.boxesLeft,
                    Rt = ({ onInfoClick: e, boxesCount: u, levelsRange: t, vehiclesOnly: n }) =>
                        i().createElement(
                            'div',
                            { className: 'GuaranteedRewardCount_base_6e' },
                            i().createElement(
                                'div',
                                { className: Tt },
                                i().createElement(Be, {
                                    text: St.$dyn(n ? lu : cu),
                                    format: { binding: { level: xt(t) } },
                                }),
                            ),
                            i().createElement(wt, { value: u }),
                            i().createElement(
                                'div',
                                { className: Tt },
                                i().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardCount_icon_e8' },
                                    i().createElement(yt, { onClick: e }),
                                ),
                            ),
                        ),
                    Nt = R.strings.gui_lootboxes.guaranteedReward.next,
                    Ot = ({ levelsRange: e, vehiclesOnly: u, onInfoClick: t }) =>
                        i().createElement(
                            'div',
                            { className: 'GuaranteedRewardNext_base_da' },
                            i().createElement(
                                'div',
                                { className: 'GuaranteedRewardNext_text_f7' },
                                i().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardNext_shineContainer_46' },
                                    i().createElement('div', { className: 'GuaranteedRewardNext_shine_02' }),
                                ),
                                i().createElement(Be, {
                                    text: Nt.$dyn(u ? lu : cu),
                                    format: { binding: { level: xt(e) } },
                                }),
                                i().createElement(
                                    'div',
                                    { className: 'GuaranteedRewardNext_icon_23' },
                                    i().createElement(yt, { onClick: t }),
                                ),
                            ),
                        );
                let Lt;
                !(function (e) {
                    (e[(e.Hidden = 0)] = 'Hidden'),
                        (e[(e.NextGuaranteed = 1)] = 'NextGuaranteed'),
                        (e[(e.CountBeforeGuaranteed = 2)] = 'CountBeforeGuaranteed');
                })(Lt || (Lt = {}));
                const Mt = i().memo(function ({
                        boxesCount: e,
                        levelsRange: u,
                        vehiclesOnly: t,
                        lootBoxID: n,
                        onInfoClick: r,
                    }) {
                        const o = e < 1 ? Lt.Hidden : 1 === e ? Lt.NextGuaranteed : Lt.CountBeforeGuaranteed;
                        return i().createElement(
                            'div',
                            null,
                            o === Lt.CountBeforeGuaranteed &&
                                i().createElement('div', { className: 'GuaranteedReward_shine_c9' }),
                            i().createElement(
                                Ge,
                                {
                                    contentId:
                                        R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.GuaranteedRewardTooltip(
                                            'resId',
                                        ),
                                    args: { lootBoxID: n },
                                    isEnabled: o !== Lt.Hidden,
                                },
                                i().createElement(
                                    'div',
                                    null,
                                    ((n) => {
                                        switch (n) {
                                            case Lt.CountBeforeGuaranteed:
                                                return i().createElement(Rt, {
                                                    boxesCount: e,
                                                    levelsRange: u,
                                                    vehiclesOnly: t,
                                                    onInfoClick: r,
                                                });
                                            case Lt.NextGuaranteed:
                                                return i().createElement(Ot, {
                                                    levelsRange: u,
                                                    vehiclesOnly: t,
                                                    onInfoClick: r,
                                                });
                                            default:
                                                return null;
                                        }
                                    })(o),
                                ),
                            ),
                        );
                    }),
                    kt = R.strings.gui_lootboxes,
                    It = R.strings.lootboxes,
                    Ht = i().memo(
                        ({
                            hasCurrentLootbox: e,
                            isShopAvailable: u,
                            currentLootboxType: t,
                            handleToHangar: n,
                            handleToShop: r,
                        }) => {
                            const o = e
                                    ? kt.openBoxScreen.noCurrentLootboxesMain()
                                    : kt.openBoxScreen.noLootboxesMain(),
                                s = u
                                    ? kt.openBoxScreen.noLootboxesShopSecondary()
                                    : kt.openBoxScreen.noLootboxesSecondary(),
                                c = (0, a.useMemo)(() => {
                                    const u = It.noBoxes.$dyn(t) || It.noBoxes.default();
                                    return e ? u : s;
                                }, [t, s, e]),
                                d = l()('NoBoxes_noBox_22', e && 'NoBoxes_noBox__withCurrentLootbox_bf');
                            return i().createElement(
                                'div',
                                { className: 'NoBoxes_base_a6' },
                                i().createElement('div', { className: 'NoBoxes_noBoxVignette_e2' }),
                                i().createElement(
                                    'div',
                                    { className: d },
                                    i().createElement(Be, { text: o, className: 'NoBoxes_noBoxHeader_e2' }),
                                    i().createElement(Be, { text: H(c), className: 'NoBoxes_noBoxSubText_2d' }),
                                    !e &&
                                        i().createElement(
                                            'div',
                                            null,
                                            u
                                                ? i().createElement(
                                                      ye,
                                                      {
                                                          mixClass: 'NoBoxes_noBoxBuyButton_c3',
                                                          size: xe.medium,
                                                          type: fe.main,
                                                          onClick: r,
                                                      },
                                                      i().createElement(Be, { text: kt.footer.button.buy() }),
                                                  )
                                                : i().createElement(
                                                      ye,
                                                      {
                                                          mixClass: 'NoBoxes_noBoxButton_cc',
                                                          size: xe.medium,
                                                          type: fe.primary,
                                                          onClick: n,
                                                      },
                                                      i().createElement(Be, { text: kt.openBoxScreen.backBtnMain() }),
                                                  ),
                                        ),
                                ),
                            );
                        },
                    );
                let Pt, Gt;
                !(function (e) {
                    (e.STORAGE_VIEWING = 'STORAGE_VIEWING'),
                        (e.REQUEST_TO_OPEN = 'REQUEST_TO_OPEN'),
                        (e.OPENING = 'OPENING'),
                        (e.LOSE_OPENING = 'LOSE_OPENING'),
                        (e.OPENING_ERROR = 'OPENING_ERROR'),
                        (e.UNIQUE_REWARDING = 'UNIQUE_REWARDING'),
                        (e.REWARDING = 'REWARDING');
                })(Pt || (Pt = {})),
                    (function (e) {
                        (e[(e.TO_HANGAR = 0)] = 'TO_HANGAR'),
                            (e[(e.TO_SHOP = 1)] = 'TO_SHOP'),
                            (e[(e.TO_NY_CUSTOMIZATION = 2)] = 'TO_NY_CUSTOMIZATION'),
                            (e[(e.TO_SHARDS = 3)] = 'TO_SHARDS'),
                            (e[(e.TO_REFERRAL = 4)] = 'TO_REFERRAL'),
                            (e[(e.TO_FIR = 5)] = 'TO_FIR'),
                            (e[(e.TO_LIGHTS = 6)] = 'TO_LIGHTS'),
                            (e[(e.TO_INSTALLATIONS = 7)] = 'TO_INSTALLATIONS'),
                            (e[(e.TO_FAIR = 8)] = 'TO_FAIR'),
                            (e[(e.TO_SKATING = 9)] = 'TO_SKATING'),
                            (e[(e.TO_ATTRACTION = 10)] = 'TO_ATTRACTION'),
                            (e[(e.TO_PET = 11)] = 'TO_PET');
                    })(Gt || (Gt = {}));
                const Wt = {
                        StorageViewing: Pt.STORAGE_VIEWING,
                        RequestToOpen: Pt.REQUEST_TO_OPEN,
                        Opening: Pt.OPENING,
                        OpeningError: Pt.OPENING_ERROR,
                        UniqueRewarding: Pt.UNIQUE_REWARDING,
                        Rewarding: Pt.REWARDING,
                        LoseOpening: Pt.LOSE_OPENING,
                    },
                    Ut = 'open',
                    jt = 'openStop',
                    zt = 'hide',
                    $t = 'start',
                    Kt = 'idle',
                    Vt = 'idleStop',
                    Xt = 'init';
                let Yt;
                !(function (e) {
                    (e[(e.Key = 0)] = 'Key'), (e[(e.Lockpick = 1)] = 'Lockpick');
                })(Yt || (Yt = {}));
                var qt = t(2557);
                const Zt = ({
                        currentVideoState: e,
                        currentLootbox: u,
                        mixClass: t,
                        onPause: n,
                        onError: r,
                        currentOpenState: o,
                    }) => {
                        const s = (0, qt.nn)(),
                            c = s[0],
                            d = s[1],
                            E = (0, a.useRef)(Object.assign({}, du)),
                            m = (null == u ? void 0 : u.videoRes) || '';
                        (0, a.useEffect)(() => {
                            o === Wt.Opening && (E.current = du), o === Wt.LoseOpening && (E.current = Eu);
                        }, [o]),
                            (0, a.useEffect)(() => {
                                const e = c.current;
                                e &&
                                    e.onChangeTime((u) => {
                                        u.currentTime >= E.current.start.endTime &&
                                            u.currentTime < E.current.idle.startTime &&
                                            (e.cleanup(), e.pause(), e.setCurrentTime(E.current.start.endTime)),
                                            u.currentTime >= E.current.idle.endTime &&
                                                u.currentTime < E.current.hide.startTime &&
                                                (e.setCurrentTime(E.current.idle.endTime), e.pause()),
                                            u.currentTime >= E.current.hide.endTime &&
                                                u.currentTime < E.current.open.startTime &&
                                                (e.setCurrentTime(E.current.hide.endTime), e.pause()),
                                            u.currentTime >= E.current.open.endTime &&
                                                (e.setCurrentTime(E.current.open.endTime), e.pause());
                                    });
                            }, [c]),
                            (0, a.useEffect)(() => {
                                const u = c.current;
                                if (u)
                                    switch (e) {
                                        case Xt:
                                            u.pause(), u.setCurrentTime(E.current.start.startTime);
                                            break;
                                        case $t:
                                            u.setCurrentTime(E.current.start.startTime), u.play();
                                            break;
                                        case Kt:
                                            u.setCurrentTime(E.current.idle.startTime), u.play();
                                            break;
                                        case Vt:
                                            u.pause(), u.setCurrentTime(E.current.idle.endTime);
                                            break;
                                        case jt:
                                            u.pause(), u.setCurrentTime(E.current.open.startTime);
                                            break;
                                        case Ut:
                                            u.setCurrentTime(E.current.open.startTime), u.play();
                                            break;
                                        case zt:
                                            u.setCurrentTime(E.current.hide.startTime), u.play();
                                    }
                            }, [c, e]);
                        const _ = (0, a.useCallback)(() => {
                                n(e);
                            }, [e, n]),
                            A = (0, a.useCallback)(() => {
                                r && r(`[Lootbox] ${null == u ? void 0 : u.iconName}`);
                            }, [null == u ? void 0 : u.iconName, r]);
                        return i().createElement(qt.nk, {
                            className: l()('VideoBg_video_63', 'VideoBg_video__visible_06', t),
                            src: m,
                            autoplay: !1,
                            loop: !1,
                            setPlayer: d,
                            videoWidth: 1920,
                            videoHeight: 1080,
                            onPause: _,
                            onError: A,
                        });
                    },
                    Jt = 'App_imageBox_fd',
                    Qt = 'App_imageBox__visible_fe',
                    en = R.strings.menu,
                    un = R.strings.gui_lootboxes.lootboxesWithKeys.about,
                    tn = R.strings.gui_lootboxes.openBoxScreen,
                    nn = (0, M.Pi)(() => {
                        var e;
                        const u = fu(),
                            t = u.model,
                            n = u.controls,
                            r = (0, E.GS)().mediaSize,
                            o = t.root.get(),
                            s = o.currentLootboxID,
                            c = o.currentState,
                            d = o.isAnimationEnabled,
                            m = o.isBuyAvailable,
                            _ = o.returnPlace,
                            A = o.isShowInfoButton,
                            F = o.ifHasUniqueURL,
                            D = t.computes.getLootboxKeys(),
                            B = t.computes.getCurrentLootbox(),
                            C = t.computes.getLootboxes(),
                            p = c !== Wt.StorageViewing,
                            g = !(null != B && B.isOpenEnabled),
                            b = null == B ? void 0 : B.manualMaxOpenCount,
                            h = (null == B ? void 0 : B.bonusGroups) || [],
                            f = Boolean(null == B || null == (e = B.boxType) ? void 0 : e.includes('')),
                            x = (0, a.useState)(),
                            R = x[0],
                            N = x[1],
                            O = (0, a.useState)(0),
                            M = O[0],
                            I = O[1],
                            H = (0, a.useState)(s),
                            P = H[0],
                            G = H[1],
                            W = (0, a.useState)(d),
                            U = W[0],
                            j = W[1],
                            z = (0, a.useState)(!1),
                            $ = z[0],
                            K = z[1],
                            V = (0, a.useState)(Boolean(0 === (null == B ? void 0 : B.count))),
                            X = V[0],
                            Y = V[1],
                            q = (0, a.useState)(Wt.Opening),
                            Z = q[0],
                            J = q[1],
                            Q = (0, a.useMemo)(() => {
                                if (B)
                                    return r >= E.cJ.Large
                                        ? {
                                              backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.eventBanner.${B.category}_1920')`,
                                          }
                                        : r >= E.cJ.Medium
                                          ? {
                                                backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.eventBanner.${B.category}_1600')`,
                                            }
                                          : {
                                                backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.eventBanner.${B.category}')`,
                                            };
                            }, [B, r]);
                        !(function ({
                            key: e = S.n.ESCAPE,
                            callback: u = () => T.O.view.sendEvent.close(),
                            preventPropagation: t = !0,
                        } = {}) {
                            L(e, u, t);
                        })({ callback: n.close }),
                            (0, a.useEffect)(() => {
                                c !== Wt.StorageViewing || (R && R !== Xt && s !== M) || (N($t), I(0), K(!1));
                            }, [s, c, R, M]),
                            (0, a.useEffect)(() => {
                                c === Wt.Opening && (J(c), N(Ut)), c === Wt.LoseOpening && (J(c), N(Ut));
                            }, [c]),
                            (0, a.useEffect)(
                                () =>
                                    (c !== Wt.Opening && c !== Wt.LoseOpening) || (U && N(Ut), U)
                                        ? c === Wt.Rewarding || c === Wt.UniqueRewarding
                                            ? y(() => {
                                                  N(Xt);
                                              }, 350)
                                            : void 0
                                        : (K(!0),
                                          y(() => {
                                              n.openningFinished();
                                          }, 350)),
                                [n, c, U],
                            ),
                            (0, a.useEffect)(() => {
                                c === Wt.StorageViewing && B && U && (0, v.G)(mu),
                                    (c === Wt.Opening || c === Wt.LoseOpening) && B && U && (0, v.G)(_u[B.tier]);
                            }, [B, c, U]),
                            (0, a.useEffect)(() => {
                                R === Vt && N(Kt), R === jt && N(Ut);
                            }, [R, N]),
                            (0, a.useEffect)(() => {
                                G((null == B ? void 0 : B.boxID) || 0),
                                    Y(Boolean(0 === (null == B ? void 0 : B.count))),
                                    (null != B && B.videoRes) ||
                                        (j(!1), n.changeAnimationEnabledSetting({ enabled: !1 }));
                            }, [n, B]);
                        const ee = (0, a.useCallback)(
                                (e, u) => {
                                    void 0 !== u
                                        ? n.openLootBoxes({ lootBoxID: s, count: e, keyID: u })
                                        : n.openLootBoxes({ lootBoxID: s, count: e });
                                },
                                [n, s],
                            ),
                            ue = (0, a.useCallback)(() => {
                                n.buyBox({ lootBoxID: s });
                            }, [n, s]),
                            te = (0, a.useCallback)(() => {
                                n.buyBox({ lootBoxID: null });
                            }, [n]),
                            ne = (0, a.useCallback)(
                                (e) => {
                                    e &&
                                        (e === $t && N(Kt),
                                        e === Kt && N(c === Wt.Opening || c === Wt.LoseOpening ? jt : Vt),
                                        e === Ut && n.openningFinished(),
                                        e === zt && s !== M && (n.lootboxSelected({ lootBoxID: M }), G(M)));
                                },
                                [n, s, c, M],
                            ),
                            re = (0, a.useCallback)(
                                (e) => {
                                    e !== s &&
                                        (U
                                            ? (N(zt), e !== s && (n.lootboxSelected({ lootBoxID: e }), G(e)))
                                            : (n.lootboxSelected({ lootBoxID: e }), G(e)),
                                        I(e));
                                },
                                [s, U, n],
                            ),
                            oe = (0, a.useCallback)(
                                (e) => {
                                    n.onError(e), j(!1);
                                },
                                [n, j],
                            ),
                            ae = un.$dyn(null == B ? void 0 : B.userName) || un.default(),
                            ie = l()('App_bg_10', f && 'App_bg__event_01');
                        return i().createElement(
                            'div',
                            { className: 'App_base_10' },
                            i().createElement('div', { className: ie }),
                            i().createElement(
                                'div',
                                { className: 'App_close_4b' },
                                i().createElement(w, {
                                    caption: en.viewHeader.backBtn.label(),
                                    type: 'back',
                                    side: 'left',
                                    goto: tn.backBtn.$num(_),
                                    onClick: n.close,
                                }),
                            ),
                            B
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement('div', { className: 'App_vignette_b8' }),
                                      i().createElement(
                                          'div',
                                          { className: 'App_descriptionWrapper_c6' },
                                          i().createElement(ve, B),
                                      ),
                                      B.category &&
                                          i().createElement('div', { className: 'App_eventImage_77', style: Q }),
                                      i().createElement(
                                          'div',
                                          { className: 'App_possibleRewardsWrapper_6e' },
                                          i().createElement(Tu, { bonusGroups: h, lootBoxID: String(s) }),
                                      ),
                                      i().createElement(
                                          'div',
                                          { className: 'App_guaranteedReward_b0' },
                                          i().createElement(Mt, {
                                              boxesCount: B.guaranteedReward.boxesUntilGuaranteedReward,
                                              levelsRange: B.guaranteedReward.levelsRange,
                                              vehiclesOnly: B.guaranteedReward.vehiclesOnly,
                                              lootBoxID: s,
                                          }),
                                      ),
                                      i().createElement(
                                          'div',
                                          { className: 'App_openButtonsWrapper_fc' },
                                          i().createElement(au, {
                                              onOpenBox: ee,
                                              onOpenShopByBoxID: ue,
                                              onBuyBox: n.buyBox,
                                              count: B.count,
                                              disabled: g,
                                              isOpenBoxDisabled: c !== Wt.StorageViewing || g,
                                              allKeys: D,
                                              currentLootboxKeysIDs: B.unlockKeyIDs,
                                              isBuyAvailable: m,
                                              hasUniqueURL: F,
                                              manualMaxOpenCount: b,
                                          }),
                                      ),
                                      A &&
                                          ae &&
                                          i().createElement(
                                              'div',
                                              { className: 'App_info_5d' },
                                              i().createElement(w, {
                                                  caption: ae,
                                                  type: 'info',
                                                  side: 'left',
                                                  onClick: n.showLootBoxInfoPage,
                                              }),
                                          ),
                                      X
                                          ? i().createElement(
                                                'div',
                                                { className: 'App_noBoxesWrapper_b2' },
                                                i().createElement(Ht, {
                                                    currentLootboxType: B.boxType,
                                                    hasCurrentLootbox: !0,
                                                    isShopAvailable: m,
                                                    handleToHangar: n.close,
                                                    handleToShop: te,
                                                }),
                                            )
                                          : i().createElement(
                                                i().Fragment,
                                                null,
                                                U && null != B && B.videoRes
                                                    ? i().createElement(
                                                          'div',
                                                          { className: 'App_videoWrapper_22' },
                                                          i().createElement(Zt, {
                                                              key: s,
                                                              currentVideoState: R,
                                                              currentLootbox: B,
                                                              onPause: ne,
                                                              onError: oe,
                                                              currentOpenState: Z,
                                                          }),
                                                      )
                                                    : i().createElement(
                                                          'div',
                                                          { className: 'App_imagesWrapper_af' },
                                                          C.map(({ iconName: e, boxID: u }) =>
                                                              i().createElement(
                                                                  i().Fragment,
                                                                  { key: u },
                                                                  i().createElement('div', {
                                                                      className: l()(Jt, P === u && Qt),
                                                                      style: {
                                                                          backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.boxes.${e}')`,
                                                                      },
                                                                  }),
                                                                  i().createElement('div', {
                                                                      className: l()(Jt, P === u && $ && Qt),
                                                                      style: {
                                                                          backgroundImage: `url('R.images.gui_lootboxes.gui.maps.storage.boxes.${e}_open')`,
                                                                      },
                                                                  }),
                                                              ),
                                                          ),
                                                      ),
                                            ),
                                      C.length > 0 &&
                                          i().createElement(
                                              'div',
                                              { className: 'App_carousel_53' },
                                              i().createElement(bt, { onChange: re, disabled: p }),
                                          ),
                                      i().createElement(k.E, {
                                          mixClass: 'App_animationControl_ba',
                                          isActiveAnimation: U,
                                          onClick: () => {
                                              j(!U), n.changeAnimationEnabledSetting({ enabled: !U });
                                          },
                                          disabled: c !== Wt.StorageViewing && !(null != B && B.videoRes),
                                      }),
                                  )
                                : i().createElement(Ht, {
                                      hasCurrentLootbox: !1,
                                      isShopAvailable: m,
                                      handleToHangar: n.close,
                                      handleToShop: te,
                                  }),
                            m &&
                                i().createElement(
                                    'div',
                                    { className: 'App_buyButtonWrapper_6b' },
                                    i().createElement(Ru, { buyBox: te }),
                                ),
                        );
                    }),
                    rn = {
                        getter:
                            ((on = {
                                lootboxes: [
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/referral/standart.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 8,
                                        boxType: 'event_premium',
                                        boxID: 230315,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/standart',
                                        descriptionKey: 'tanks_birthday_2023_VI',
                                        userName: 'tanks_birthday_2023_VI',
                                        iconName: 'tanks_birthday_2023_VI',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 66,
                                        boxType: 'tanks_birthday_2023_VI',
                                        boxID: 310004,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/standart',
                                        descriptionKey: 'tanks_birthday_2023_IX',
                                        userName: 'tanks_birthday_2023_IX',
                                        iconName: 'tanks_birthday_2023_IX',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 55,
                                        boxType: 'tanks_birthday_2023_IX',
                                        boxID: 310003,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/bronze',
                                        descriptionKey: 'tanks_birthday_2023_X',
                                        userName: 'tanks_birthday_2023_X',
                                        iconName: 'tanks_birthday_2023_X',
                                        isOpenEnabled: !0,
                                        tier: 2,
                                        count: 44,
                                        boxType: 'tanks_birthday_2023_X',
                                        boxID: 310002,
                                    },
                                    {
                                        videoRes: 'event_loot_boxes/bd2023/silver',
                                        descriptionKey: 'tanks_birthday_2023_premium',
                                        userName: 'tanks_birthday_2023_premium',
                                        iconName: 'tanks_birthday_2023_premium',
                                        isOpenEnabled: !0,
                                        tier: 3,
                                        count: 33,
                                        boxType: 'tanks_birthday_2023_premium',
                                        boxID: 310001,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/silver.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !1,
                                        tier: 3,
                                        count: 19,
                                        boxType: 'event_premium',
                                        boxID: 230316,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/bronze.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 2,
                                        count: 9,
                                        boxType: 'event_premium',
                                        boxID: 230317,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/gold.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !1,
                                        tier: 1,
                                        count: 5,
                                        boxType: 'event_premium',
                                        boxID: 230318,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/bd2023/standart.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 200,
                                        boxType: 'event_premium',
                                        boxID: 230319,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/referral/gold.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 4,
                                        count: 1234,
                                        boxType: 'event_premium',
                                        boxID: 230314,
                                    },
                                    {
                                        videoRes: 'video://videos/event_loot_boxes/lootbox_prem.webm',
                                        descriptionKey: 'event_premium',
                                        userName: 'event_premium',
                                        iconName: 'event_premium',
                                        isOpenEnabled: !0,
                                        tier: 1,
                                        count: 1,
                                        boxType: 'event_premium',
                                        boxID: 230313,
                                    },
                                ],
                                groupRewards: [],
                                currentState: Wt.StorageViewing,
                                currentLootboxID: 230315,
                                isAnimationEnabled: !0,
                                isBuyAvailable: !0,
                            }),
                            (e) => (e ? e.split('.').reduce((e, u) => e[u], on) : on)),
                        controls: ({ model: e }) =>
                            (function (e) {
                                const u = {};
                                for (const t in e)
                                    if (Object.prototype.hasOwnProperty.call(e, t)) {
                                        const n = e[t];
                                        u[t] = (0, Du.aD)(n);
                                    }
                                return u;
                            })({
                                openLootBoxes: (e) => {
                                    console.log('Call openLootBoxes() with', JSON.stringify(e));
                                },
                                close: () => {
                                    console.log('Call close()');
                                },
                                buyBox: () => {
                                    console.log('Call buyBox()');
                                },
                                openningFinished: () => {
                                    console.log('Call openningFinished()');
                                },
                                lootboxSelected: (u) => {
                                    console.log('Call lootboxSelected() with', JSON.stringify(u)),
                                        e.root.set(Object.assign({}, e.root.get(), { currentLootboxID: u.lootBoxID }));
                                },
                            }),
                    };
                var on;
                engine.whenReady.then(() => {
                    b().render(
                        i().createElement(
                            hu,
                            { mocks: rn, mode: 'real' },
                            i().createElement(p, null, i().createElement(nn, null)),
                        ),
                        document.getElementById('root'),
                    );
                });
            },
            4999: (e, u, t) => {
                'use strict';
                t.d(u, { E: () => l });
                var n = t(6483),
                    r = t.n(n),
                    o = t(7727),
                    a = t(6179),
                    i = t.n(a);
                const s = 'AnimationControls_flexColumnCenter_62',
                    l = ({
                        mixClass: e,
                        isActiveAnimation: u,
                        onClick: t,
                        soundHover: n = R.sounds.highlight(),
                        soundClick: a = R.sounds.play(),
                        disabled: l = !1,
                    }) => {
                        const c = r()(
                            'AnimationControls_base_71',
                            s,
                            e,
                            !u && 'AnimationControls_base__disabledAnimadion_89',
                            l && 'AnimationControls_base__disabled_ec',
                        );
                        return i().createElement(
                            'div',
                            {
                                className: c,
                                onClick: () => {
                                    l || ((0, o.G)(a), t());
                                },
                                onMouseEnter: () => {
                                    l || (0, o.G)(n);
                                },
                            },
                            i().createElement(
                                'div',
                                { className: s },
                                i().createElement('div', { className: 'AnimationControls_icon_05' }),
                                i().createElement(
                                    'div',
                                    { className: 'AnimationControls_text_20' },
                                    u
                                        ? R.strings.gui_lootboxes.shared.animationControlsOffText()
                                        : R.strings.gui_lootboxes.shared.animationControlsText(),
                                ),
                            ),
                        );
                    };
            },
            7635: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => s });
                var n = t(6483),
                    r = t.n(n),
                    o = t(6179),
                    a = t.n(o);
                const i = 'BacklitTransparentButton_corners_4b',
                    s = ({ title: e, onClick: u }) =>
                        a().createElement(
                            'div',
                            { className: 'BacklitTransparentButton_base_ec', onClick: u },
                            a().createElement('div', { className: 'BacklitTransparentButton_background_13' }),
                            a().createElement(
                                'div',
                                { className: 'BacklitTransparentButton_content_f5' },
                                a().createElement('div', { className: 'BacklitTransparentButton_icon_e6' }),
                                a().createElement('div', { className: 'BacklitTransparentButton_title_29' }, e),
                            ),
                            a().createElement(
                                'div',
                                { className: 'BacklitTransparentButton_cornersHolder_67' },
                                a().createElement('div', { className: i }),
                                a().createElement('div', {
                                    className: r()(i, 'BacklitTransparentButton_corners__right_96'),
                                }),
                            ),
                        );
            },
            2557: (e, u, t) => {
                'use strict';
                t.d(u, { nk: () => c, nn: () => l });
                var n = t(7515),
                    r = t(5415),
                    o = t(6179),
                    a = t.n(o);
                const i = ['src', 'className', 'autoplay', 'loop', 'setPlayer', 'onClick', 'videoWidth', 'videoHeight'];
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = () => {
                        const e = (0, o.useRef)(),
                            u = (0, o.useCallback)((u) => (e.current = u), []);
                        return (
                            (0, o.useEffect)(
                                () => () => {
                                    var u;
                                    null == (u = e.current) || u.cleanup();
                                },
                                [],
                            ),
                            [e, u]
                        );
                    },
                    c = a().memo(function (e) {
                        let u = e.src,
                            t = e.className,
                            l = e.autoplay,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.setPlayer,
                            m = e.onClick,
                            _ = e.videoWidth,
                            A = e.videoHeight,
                            F = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (t = o[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, i);
                        const D = (0, o.useRef)(null),
                            B = (0, r.GS)(),
                            C = B.remScreenWidth,
                            p = B.remScreenHeight,
                            g = (0, o.useMemo)(() => {
                                const e = ((e, u, t, n) => {
                                    const r = e / u;
                                    return t / n > r
                                        ? { width: t, height: Math.round(t / r) }
                                        : { width: Math.round(n * r), height: n };
                                })(_, A, C, p);
                                return e ? { width: `${e.width}rem`, height: `${e.height}rem` } : {};
                            }, [p, C, A, _]);
                        return (
                            (0, o.useEffect)(() => {
                                if (E && D.current) {
                                    const e = () => {
                                            let e = 0;
                                            const t = (function (t) {
                                                    let n = 0;
                                                    return [
                                                        function t() {
                                                            (() => {
                                                                if (D.current) {
                                                                    const t = D.current,
                                                                        n = t.currentTime,
                                                                        r = t.duration;
                                                                    e !== n &&
                                                                        (u.changeTimeHandlers.forEach((e) =>
                                                                            e({ currentTime: n, duration: r }),
                                                                        ),
                                                                        (e = n));
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = t[0],
                                                r = t[1];
                                            return n(), r;
                                        },
                                        u = { changeTimeHandlers: [], changeTimeLoop: e() },
                                        t = (e) => (
                                            u.changeTimeHandlers.push(e),
                                            () => {
                                                const t = u.changeTimeHandlers,
                                                    n = t.indexOf(e);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        r = (e) => {
                                            D.current && (D.current.currentTime = (0, n.u)(0, D.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.pause();
                                        },
                                        a = () => {
                                            o(), r(0);
                                        },
                                        i = () => {
                                            (u.changeTimeHandlers = []), null == u.changeTimeLoop || u.changeTimeLoop();
                                        };
                                    return (
                                        E({
                                            on: (e, u) => {
                                                var t;
                                                return (
                                                    null == (t = D.current) || t.addEventListener(e, u),
                                                    () => {
                                                        var t;
                                                        return null == (t = D.current)
                                                            ? void 0
                                                            : t.removeEventListener(e, u);
                                                    }
                                                );
                                            },
                                            off: (e, u) => {
                                                var t;
                                                return (
                                                    null == (t = D.current) || t.removeEventListener(e, u),
                                                    () => {
                                                        var t;
                                                        return null == (t = D.current)
                                                            ? void 0
                                                            : t.removeEventListener(e, u);
                                                    }
                                                );
                                            },
                                            play: () => {
                                                var e;
                                                return null == (e = D.current) ? void 0 : e.play();
                                            },
                                            pause: o,
                                            stop: a,
                                            cleanup: i,
                                            getCurrentTime: () => {
                                                var e;
                                                return null == (e = D.current) ? void 0 : e.currentTime;
                                            },
                                            getDuration: () => {
                                                var e;
                                                return null == (e = D.current) ? void 0 : e.duration;
                                            },
                                            setCurrentTime: r,
                                            domRef: D.current,
                                            onChangeTime: t,
                                        }),
                                        () => {
                                            i(), E(void 0);
                                        }
                                    );
                                }
                            }, [E]),
                            (0, o.useEffect)(() => {
                                if (D.current)
                                    return (
                                        l && D.current.play(),
                                        () => {
                                            D.current && D.current.pause();
                                        }
                                    );
                            }, []),
                            a().createElement(
                                'video',
                                s({ src: u, className: t, loop: d, ref: D, onClick: m, style: g }, F, {
                                    onError: F.onError,
                                }),
                            )
                        );
                    });
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
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], o = !0, a = 0; a < u.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 334),
        (() => {
            var e = { 334: 0, 989: 0, 578: 0, 897: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [o, a, i] = t,
                        s = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < o.length; s++)
                        (r = o[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(3502));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
