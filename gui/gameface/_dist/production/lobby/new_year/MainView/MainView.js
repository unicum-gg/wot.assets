(() => {
    var __webpack_modules__ = {
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => _ });
                var a = n(3138),
                    o = n(6179),
                    r = n(1043),
                    i = n(5262);
                const s = a.O.client.getSize('rem'),
                    u = s.width,
                    l = s.height,
                    c = Object.assign({ width: u, height: l }, (0, i.T)(u, l, r.j)),
                    _ = (0, o.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(6179),
                    o = n.n(a),
                    r = n(6536),
                    i = n(3495),
                    s = n(1043),
                    u = n(5262),
                    l = n(3138);
                const c = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(i.Y),
                        n = (0, a.useState)(t),
                        c = n[0],
                        _ = n[1],
                        d = (0, a.useCallback)((e, t) => {
                            const n = l.O.view.pxToRem(e),
                                a = l.O.view.pxToRem(t);
                            _(Object.assign({ width: n, height: a }, (0, u.T)(n, a, s.j)));
                        }, []);
                    ((0, r.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return o().createElement(i.Y.Provider, { value: m }, e);
                });
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(6179),
                    o = n(7382),
                    r = n(3495);
                const i = ['children'],
                    s = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, i);
                        const s = (0, a.useContext)(r.Y),
                            u = s.extraLarge,
                            l = s.large,
                            c = s.medium,
                            _ = s.small,
                            d = s.extraSmall,
                            m = s.extraLargeWidth,
                            p = s.largeWidth,
                            E = s.mediumWidth,
                            g = s.smallWidth,
                            v = s.extraSmallWidth,
                            b = s.extraLargeHeight,
                            y = s.largeHeight,
                            h = s.mediumHeight,
                            C = s.smallHeight,
                            A = s.extraSmallHeight,
                            f = { extraLarge: b, large: y, medium: h, small: C, extraSmall: A };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && u) return t;
                            if (n.large && l) return t;
                            if (n.medium && c) return t;
                            if (n.small && _) return t;
                            if (n.extraSmall && d) return t;
                        } else {
                            if (n.extraLargeWidth && m) return (0, o.H)(t, n, f);
                            if (n.largeWidth && p) return (0, o.H)(t, n, f);
                            if (n.mediumWidth && E) return (0, o.H)(t, n, f);
                            if (n.smallWidth && g) return (0, o.H)(t, n, f);
                            if (n.extraSmallWidth && v) return (0, o.H)(t, n, f);
                            if (!(
                                n.extraLargeWidth ||
                                n.largeWidth ||
                                n.mediumWidth ||
                                n.smallWidth ||
                                n.extraSmallWidth
                            )) {
                                if (n.extraLargeHeight && b) return t;
                                if (n.largeHeight && y) return t;
                                if (n.mediumHeight && h) return t;
                                if (n.smallHeight && C) return t;
                                if (n.extraSmallHeight && A) return t;
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
                    (0, a.memo)(s));
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                (n.d(t, { YN: () => o.Y, ZN: () => a.Z }), n(6010));
                var a = n(1039),
                    o = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function o(e, t, n) {
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
                        })(e, n),
                        o = (function (e, t) {
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
                        })(t, n),
                        r = Math.min(a, o);
                    return {
                        extraLarge: r === n.extraLarge.weight,
                        large: r === n.large.weight,
                        medium: r === n.medium.weight,
                        small: r === n.small.weight,
                        extraSmall: r === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: o === n.extraLarge.weight,
                        largeHeight: o === n.large.weight,
                        mediumHeight: o === n.medium.weight,
                        smallHeight: o === n.small.weight,
                        extraSmallHeight: o === n.extraSmall.weight,
                    };
                }
                (n.d(t, { T: () => o }),
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
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => l });
                var a = n(7902),
                    o = n(4179),
                    r = n(6179);
                const i = [
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
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const u = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: o.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onClick,
                            m = e.ignoreShowDelay,
                            p = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            g = void 0 !== E && E,
                            v = e.decoratorId,
                            b = void 0 === v ? 0 : v,
                            y = e.isEnabled,
                            h = void 0 === y || y,
                            C = e.targetId,
                            A = void 0 === C ? 0 : C,
                            f = e.onShow,
                            B = e.onHide,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, i);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, r.useMemo)(() => A || (0, a.F)().resId, [A]),
                            S = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (u(n, b, { isMouseEvent: !0, on: !0, arguments: s(o) }, D),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [n, b, o, D, f]),
                            N = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        u(n, b, { on: !1 }, D),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1));
                                }
                            }, [n, b, D, B]),
                            T = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && N();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', T, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', T, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && N();
                            }, [h, N]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', N),
                                    () => {
                                        (window.removeEventListener('mouseleave', N), N());
                                    }
                                ),
                                [N],
                            ),
                            h
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((k = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(S, p ? 100 : 400)),
                                                          l && l(e),
                                                          k && k(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (N(), null == c || c(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === g && N(), null == d || d(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === g && N(), null == _ || _(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          F,
                                      ),
                                  )
                                : t
                        );
                        var k;
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
            5167: (e, t, n) => {
                const a = n(3532),
                    o = n(9887);
                e.exports = Object.assign({}, a, o, { colors: a, spacings: o });
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
            527: (e, t, n) => {
                'use strict';
                (n.r(t), n.d(t, { mouse: () => s, onResize: () => r }));
                var a = n(2472),
                    o = n(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, o.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, o.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, o.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const r = `mouse${t}`,
                                            s = i[t]((e) => n([e, 'outside']));
                                        function u(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, u),
                                            a(),
                                            () => {
                                                o &&
                                                    (s(),
                                                    window.removeEventListener(r, u),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (o = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
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
                                e.enabled && (0, o.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, o.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => o,
                        graphicsQuality: () => i,
                    }));
                var a = n(527);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => o });
                var a = n(5959);
                const o = { view: n(7641), client: a };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => a }));
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => o });
                var a = n(2472);
                const o = {
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
            7641: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => o.W,
                        displayStatusIs: () => F,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => g,
                        getSize: () => d,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => A,
                        isFocused: () => h,
                        pxToRem: () => v,
                        remToPx: () => b,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => y,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => D,
                    }));
                var a = n(3722),
                    o = n(6112),
                    r = n(6538),
                    i = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function c(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function y(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function A() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const F = Object.keys(o.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
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
                    D = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => r });
                const a = ['args'],
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        o = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
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
            7902: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => a });
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => o });
                var a = n(6179);
                const o = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => u, GS: () => l, cJ: () => i, fd: () => s });
                var a = n(6179),
                    o = n(7739),
                    r = n(1043);
                let i, s, u;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                })(i || (i = {})),
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
                    })(u || (u = {})));
                const l = () => {
                    const e = (0, a.useContext)(o.YN),
                        t = e.width,
                        n = e.height,
                        r = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return i.ExtraLarge;
                                case e.large:
                                    return i.Large;
                                case e.medium:
                                    return i.Medium;
                                case e.small:
                                    return i.Small;
                                case e.extraSmall:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
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
                                    return u.ExtraLarge;
                                case e.largeHeight:
                                    return u.Large;
                                case e.mediumHeight:
                                    return u.Medium;
                                case e.smallHeight:
                                    return u.Small;
                                case e.extraSmallHeight:
                                    return u.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), u.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
            },
            3112: (e, t, n) => {
                'use strict';
                n.d(t, { V: () => r });
                var a = n(6179),
                    o = n(3138);
                const r = () => {
                    const e = (0, a.useState)(o.O.view.getScale()),
                        t = e[0],
                        n = e[1];
                    return (
                        (0, a.useEffect)(() => {
                            const e = () => {
                                n(o.O.view.getScale());
                            };
                            return (
                                window.addEventListener('resize', e),
                                () => {
                                    window.removeEventListener('resize', e);
                                }
                            );
                        }, []),
                        t
                    );
                };
            },
            5521: (e, t, n) => {
                'use strict';
                let a, o;
                (n.d(t, { n: () => a }),
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
                    })(o || (o = {})));
            },
            3368: () => {
                (!(function () {
                    let e,
                        t,
                        n,
                        a,
                        o,
                        r,
                        i,
                        s = -1;
                    (document.addEventListener('mousedown', (n) => {
                        (document.getSelection().empty(),
                            n.target.select &&
                                -1 === s &&
                                ((e = n.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0)));
                    }),
                        document.addEventListener('mousemove', (n) => {
                            if ((-1 === s && n.target.select && n.target === e && (s = e.selectionStart), s > -1)) {
                                const a = Math.min(Math.max(n.x, t.left), t.right),
                                    o = Math.min(Math.max(n.y, t.top), t.bottom),
                                    r = document.createEvent('MouseEvent');
                                (r.initMouseEvent('mousedown', !0, !0, null, 1, a, o, a, o, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r));
                                const i = e.selectionEnd;
                                i > s ? e.setSelectionRange(s, i, 'forward') : e.setSelectionRange(i, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            ((e = null), (s = -1));
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (n = e.target),
                                (a = e.target.value),
                                (o = n.selectionStart),
                                (r = -1 !== a.lastIndexOf(' ', o) ? a.lastIndexOf(' ', o) + 1 : 0),
                                (i = -1 !== a.indexOf(' ', o) ? a.indexOf(' ', o) : a.length),
                                n.setSelectionRange(r, i, 'forward'));
                        }));
                })(),
                    (function () {
                        let e = null;
                        (document.addEventListener('mousedown', (t) => {
                            (document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y)));
                        }),
                            document.addEventListener('mousemove', (t) => {
                                if (0 === t.button && !t.target.select && e) {
                                    const n = document.caretPositionFromPoint(t.x, t.y);
                                    if (!n.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, n.offsetNode, n.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            }));
                    })());
            },
            7727: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { $: () => o, G: () => a });
                const o = {
                    playHighlight() {
                        a('highlight');
                    },
                    playClick() {
                        a('play');
                    },
                    playYes() {
                        a('yes1');
                    },
                };
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(3138);
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
                    addCallback(e, t, n = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, n, o);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(r) : (this._views[n] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
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
            4179: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => r.Z,
                    kH: () => m,
                    B3: () => c,
                    Z5: () => i,
                    lf: () => d,
                    cy: () => s,
                    B0: () => u,
                    wU: () => F,
                    ry: () => y,
                    Eu: () => h,
                    SW: () => f,
                    P3: () => B,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
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
                        const n = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                const o = a;
                var r = n(1358);
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let u;
                var l;
                (((l = u || (u = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var p = n(5521),
                    E = n(3138);
                const g = ['args'];
                function v(e, t, n, a, o, r, i) {
                    try {
                        var s = e[r](i),
                            u = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(u) : Promise.resolve(u).then(a, o);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    y = (function () {
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
                                        n = arguments;
                                    return new Promise(function (a, o) {
                                        var r = e.apply(t, n);
                                        function i(e) {
                                            v(r, a, o, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            v(r, a, o, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    C = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        o = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, g);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((a = o),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    A = () => C(u.CLOSE),
                    f = () => C(u.POP_OVER, { on: !1 }),
                    B = (e, t, n, a, o = R.invalid('resId'), r) => {
                        const i = E.O.view.getViewGlobalPosition(),
                            s = n.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            _ = s.width,
                            d = s.height,
                            m = {
                                x: E.O.view.pxToRem(l) + i.x,
                                y: E.O.view.pxToRem(c) + i.y,
                                width: E.O.view.pxToRem(_),
                                height: E.O.view.pxToRem(d),
                            };
                        C(u.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: o,
                            direction: t,
                            bbox: b(m),
                            on: !0,
                            args: r,
                        });
                    },
                    F = () => viewEnv.isWindowShownByViewEvent(u.POP_OVER),
                    w = (e, t) => {
                        e.keyCode === p.n.ESCAPE && t();
                    };
                var D = n(7572);
                const S = o.instance,
                    N = {
                        DataTracker: r.Z,
                        ViewModel: D.Z,
                        ViewEventType: u,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => C(u.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: A,
                        sendClosePopOverEvent: f,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            C(u.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: B,
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, A);
                        },
                        handleViewEvent: C,
                        onBindingsReady: y,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(u.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(u.CONTEXT_MENU),
                        isPopOverShown: F,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const o = Object.prototype.toString.call(t[a]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < o.length; t++) n[a].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = N;
            },
            169: (e, t, n) => {
                'use strict';
                var a = n(7739),
                    o = n(6179),
                    r = n.n(o),
                    i = n(6483),
                    s = n.n(i),
                    u = n(926),
                    l = n.n(u),
                    c = n(5415);
                const _ = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const m = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    p = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    E = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, _);
                        const o = (0, c.GS)(),
                            i = o.mediaWidth,
                            u = o.mediaHeight,
                            l = o.mediaSize;
                        return r().createElement('div', d({ className: s()(n, m[i], p[u], E[l]) }, a), t);
                    },
                    v = ['children'],
                    b = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, v);
                        return r().createElement(a.ZN, null, r().createElement(g, n, t));
                    };
                var y = n(493),
                    h = n.n(y),
                    C = n(7727);
                const A = {
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
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                }
                class F extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, C.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, C.G)(this.props.soundClick));
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
                            n = e.onClick,
                            a = e.goto,
                            o = e.side,
                            i = e.type,
                            u = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        o = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(e, f)),
                            p = s()(A.base, A[`base__${i}`], A[`base__${o}`], null == u ? void 0 : u.base),
                            E = s()(A.icon, A[`icon__${i}`], A[`icon__${o}`], null == u ? void 0 : u.icon),
                            g = s()(A.glow, null == u ? void 0 : u.glow),
                            v = s()(A.caption, A[`caption__${i}`], null == u ? void 0 : u.caption),
                            b = s()(A.goto, null == u ? void 0 : u.goto);
                        return r().createElement(
                            'div',
                            B(
                                {
                                    className: p,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                m,
                            ),
                            'info' !== i && r().createElement('div', { className: A.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: g })),
                            r().createElement('div', { className: v }, t),
                            a && r().createElement('div', { className: b }, a),
                        );
                    }
                }
                F.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const w = (e, t) => {
                    let n;
                    const a = setTimeout(() => {
                        n = e();
                    }, t);
                    return () => {
                        ('function' == typeof n && n(), clearTimeout(a));
                    };
                };
                var D = n(3138),
                    S = n(5521),
                    N = n(4179);
                const T = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function k(e = S.n.NONE, t = T, n = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== S.n.NONE)
                            return (
                                window.addEventListener('keydown', a, n),
                                () => {
                                    window.removeEventListener('keydown', a, n);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (D.O.view.isEventHandled()) return;
                                (D.O.view.setEventHandled(), t(a), n && a.stopPropagation());
                            }
                        }
                    }, [t, e, n]);
                }
                function x({
                    key: e = S.n.ESCAPE,
                    callback: t = () => D.O.view.sendEvent.close(),
                    preventPropagation: n = !0,
                } = {}) {
                    return (k(e, t, n), t);
                }
                const P = (e) => {
                        (0, o.useEffect)(e, []);
                    },
                    I = (e) => {
                        (0, o.useEffect)(() => e, []);
                    };
                function M() {
                    const e = (0, o.useRef)(!0);
                    return (
                        P(() => {
                            e.current = !1;
                        }),
                        e.current
                    );
                }
                var L = n(3282);
                let O, H, W, V, $, U, G, j, z, Y, Z;
                (!(function (e) {
                    ((e[(e.CITY = 0)] = 'CITY'),
                        (e[(e.PET = 1)] = 'PET'),
                        (e[(e.LEADERS = 2)] = 'LEADERS'),
                        (e[(e.MACHINE = 3)] = 'MACHINE'),
                        (e[(e.INFO = 4)] = 'INFO'));
                })(O || (O = {})),
                    (function (e) {
                        ((e[(e.DONE = 0)] = 'DONE'),
                            (e[(e.DEFAULT = 1)] = 'DEFAULT'),
                            (e[(e.TO_GLADE_WITH_INTRO = 2)] = 'TO_GLADE_WITH_INTRO'),
                            (e[(e.WITH_SWITCHING_OBJS = 3)] = 'WITH_SWITCHING_OBJS'));
                    })(H || (H = {})),
                    (function (e) {
                        ((e.GET_TOKENS = 'getTokens'),
                            (e.SPEND_TOKENS = 'spendTokens'),
                            (e.SPEND_TOKENS_ACTIVE = 'spendTokensActive'));
                    })(W || (W = {})),
                    (function (e) {
                        ((e.AVAILABLE = 'available'), (e.NOT_AVAILABLE = 'notAvailable'), (e.ERROR = 'error'));
                    })(V || (V = {})),
                    (function (e) {
                        ((e.Unknown = ''), (e.Sad = 'sad'), (e.Normal = 'normal'), (e.Fun = 'fun'));
                    })($ || ($ = {})),
                    (function (e) {
                        ((e.Food = 'food'), (e.Fun = 'fun'), (e.Activity = 'activity'));
                    })(U || (U = {})),
                    (function (e) {
                        ((e[(e.Empty = -1)] = 'Empty'),
                            (e[(e.NewStory = 1)] = 'NewStory'),
                            (e[(e.FunOpened = 2)] = 'FunOpened'),
                            (e[(e.ActivityOpened = 3)] = 'ActivityOpened'),
                            (e[(e.Leaderboard = 4)] = 'Leaderboard'));
                    })(G || (G = {})),
                    (function (e) {
                        ((e[(e.Null = 0)] = 'Null'),
                            (e[(e.Video = -10)] = 'Video'),
                            (e[(e.First = 1)] = 'First'),
                            (e[(e.Second = 2)] = 'Second'),
                            (e[(e.Third = 3)] = 'Third'),
                            (e[(e.Fourth = 4)] = 'Fourth'),
                            (e[(e.Fifth = 5)] = 'Fifth'),
                            (e[(e.Six = 6)] = 'Six'),
                            (e[(e.Seventh = 7)] = 'Seventh'),
                            (e[(e.End = 8)] = 'End'));
                    })(j || (j = {})),
                    (function (e) {
                        ((e[(e.Fun = 0)] = 'Fun'),
                            (e[(e.Activity = 1)] = 'Activity'),
                            (e[(e.Leaderboard = 2)] = 'Leaderboard'));
                    })(z || (z = {})),
                    (function (e) {
                        ((e[(e.First = 1)] = 'First'), (e[(e.Second = 2)] = 'Second'), (e[(e.Third = 3)] = 'Third'));
                    })(Y || (Y = {})),
                    (function (e) {
                        ((e[(e.Header = 0)] = 'Header'),
                            (e[(e.MailBlock = 1)] = 'MailBlock'),
                            (e[(e.Needs = 2)] = 'Needs'),
                            (e[(e.Indicators = 3)] = 'Indicators'),
                            (e[(e.HeaderOpacity = 4)] = 'HeaderOpacity'),
                            (e[(e.ShopOpacity = 5)] = 'ShopOpacity'),
                            (e[(e.Shop = 6)] = 'Shop'),
                            (e[(e.Story = 7)] = 'Story'),
                            (e[(e.AnimationCheckbox = 8)] = 'AnimationCheckbox'));
                    })(Z || (Z = {})));
                const X = R.strings.ny.pet.onboarding,
                    q = {
                        [G.NewStory]: { tip: null, prompter: null },
                        [G.Empty]: { tip: null, prompter: null },
                        [G.Leaderboard]: {
                            tip: {
                                title: X.leaderboard.title(),
                                description: X.leaderboard.description(),
                                button: X.leaderboard.button(),
                            },
                            prompter: Y.Third,
                        },
                        [G.FunOpened]: {
                            tip: {
                                title: X.funOpened.title(),
                                description: X.funOpened.description(),
                                button: X.funOpened.button(),
                            },
                            prompter: Y.First,
                        },
                        [G.ActivityOpened]: {
                            tip: {
                                title: X.activityOpened.title(),
                                description: X.activityOpened.description(),
                                button: X.activityOpened.button(),
                            },
                            prompter: Y.First,
                        },
                    },
                    K = {
                        [j.Null]: { rules: [Z.HeaderOpacity, Z.Indicators, Z.ShopOpacity], tip: null, prompter: null },
                        [j.Video]: { rules: [Z.HeaderOpacity, Z.Indicators, Z.ShopOpacity], tip: null, prompter: null },
                        [j.First]: {
                            rules: [Z.HeaderOpacity, Z.Indicators, Z.ShopOpacity],
                            tip: { title: X.title.c_1(), description: X.description.c_1(), button: X.button.c_1() },
                            prompter: Y.First,
                        },
                        [j.Second]: {
                            rules: [Z.Header, Z.Indicators, Z.ShopOpacity],
                            tip: { title: X.title.c_2(), description: X.description.c_2(), button: X.button.c_2() },
                            prompter: Y.First,
                        },
                        [j.Third]: {
                            rules: [Z.Header, Z.Indicators, Z.ShopOpacity, Z.MailBlock],
                            tip: { title: X.title.c_3(), description: X.description.c_3(), button: X.button.c_3() },
                            prompter: Y.Second,
                        },
                        [j.Fourth]: {
                            rules: [Z.Header, Z.Indicators, Z.Shop, Z.MailBlock],
                            tip: { title: X.title.c_4(), description: X.description.c_4(), button: X.button.c_4() },
                            prompter: Y.Second,
                        },
                        [j.Fifth]: {
                            rules: [Z.Header, Z.Indicators, Z.Shop, Z.MailBlock, Z.Needs],
                            tip: { title: X.title.c_5(), description: X.description.c_5(), button: X.button.c_5() },
                            prompter: Y.Third,
                        },
                        [j.Six]: {
                            rules: [Z.Header, Z.Indicators, Z.Shop, Z.MailBlock, Z.Needs],
                            tip: null,
                            prompter: Y.Third,
                        },
                        [j.Seventh]: {
                            rules: [Z.Header, Z.Indicators, Z.Shop, Z.MailBlock, Z.Needs, Z.Story, Z.AnimationCheckbox],
                            tip: { title: X.title.c_6(), description: X.description.c_6(), button: X.button.c_6() },
                            prompter: Y.Third,
                        },
                        [j.End]: {
                            rules: [Z.Header, Z.Indicators, Z.Shop, Z.MailBlock, Z.Needs, Z.Story, Z.AnimationCheckbox],
                            tip: null,
                            prompter: null,
                        },
                    };
                class J extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? N.B3.GOLD : N.B3.INTEGRAL;
                        const t = N.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                J.defaultProps = { format: 'integral' };
                var Q = n(9887),
                    ee = n.n(Q);
                const te = ['xl', 'lg', 'md', 'sm', 'xs'],
                    ne = (e) => e.includes('_') && ((e) => te.includes(e))(e.split('_').at(-1)),
                    ae = [c.cJ.ExtraLarge, c.cJ.Large, c.cJ.Medium, c.cJ.Small, c.cJ.ExtraSmall],
                    oe = (e, t) =>
                        Object.keys(e).reduce((n, a) => {
                            if (a in n) return n;
                            if (ne(a)) {
                                const o = a.split('_').slice(0, -1).join('_');
                                if (o in n) return n;
                                const r = ae.indexOf(t),
                                    i = (-1 !== r ? te.slice(r) : [])
                                        .map((e) => o + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    s = i ? e[i] : void 0;
                                return ((n[o] = void 0 !== s ? s : e[o]), n);
                            }
                            const o = e[a];
                            return (
                                void 0 === o ||
                                    ((e, t) => te.some((n) => void 0 !== t[`${e}_${n}`]))(a, e) ||
                                    (n[a] = o),
                                n
                            );
                        }, {}),
                    re = (e, t = oe) => {
                        const n = (
                            (e, t = oe) =>
                            (n) => {
                                const a = (0, c.GS)().mediaSize,
                                    i = (0, o.useMemo)(() => t(n, a), [n, a]);
                                return r().createElement(e, i);
                            }
                        )(e, t);
                        return r().memo((t) =>
                            Object.keys(t).some((e) => ne(e) && void 0 !== t[e])
                                ? r().createElement(n, t)
                                : r().createElement(e, t),
                        );
                    },
                    ie = {
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
                    se = [
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
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                Object.keys(ee());
                const le = {
                        XL: { mt: ie.mt__XL, mr: ie.mr__XL, mb: ie.mb__XL, ml: ie.ml__XL },
                        LG: { mt: ie.mt__LG, mr: ie.mr__LG, mb: ie.mb__LG, ml: ie.ml__LG },
                        MDp: { mt: ie.mt__MDp, mr: ie.mr__MDp, mb: ie.mb__MDp, ml: ie.ml__MDp },
                        MD: { mt: ie.mt__MD, mr: ie.mr__MD, mb: ie.mb__MD, ml: ie.ml__MD },
                        SMp: { mt: ie.mt__SMp, mr: ie.mr__SMp, mb: ie.mb__SMp, ml: ie.ml__SMp },
                        SM: { mt: ie.mt__SM, mr: ie.mr__SM, mb: ie.mb__SM, ml: ie.ml__SM },
                        XS: { mt: ie.mt__XS, mr: ie.mr__XS, mb: ie.mb__XS, ml: ie.ml__XS },
                    },
                    ce = (Object.keys(le), ['mt', 'mr', 'mb', 'ml']),
                    _e = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    de = re((e) => {
                        let t = e.className,
                            n = e.width,
                            a = e.height,
                            i = e.m,
                            u = e.mt,
                            l = void 0 === u ? i : u,
                            c = e.mr,
                            _ = void 0 === c ? i : c,
                            d = e.mb,
                            m = void 0 === d ? i : d,
                            p = e.ml,
                            E = void 0 === p ? i : p,
                            g = e.column,
                            v = e.row,
                            b = e.flexDirection,
                            y = void 0 === b ? (g ? 'column' : v && 'row') || void 0 : b,
                            h = e.flexStart,
                            C = e.center,
                            A = e.flexEnd,
                            f = e.spaceBetween,
                            B = e.spaceAround,
                            F = e.justifyContent,
                            w =
                                void 0 === F
                                    ? (h ? 'flex-start' : C && 'center') ||
                                      (A && 'flex-end') ||
                                      (f && 'space-between') ||
                                      (B && 'space-around') ||
                                      void 0
                                    : F,
                            D = e.alignItems,
                            S = void 0 === D ? (h ? 'flex-start' : C && 'center') || (A && 'flex-end') || void 0 : D,
                            N = e.alignSelf,
                            T = e.wrap,
                            k = e.flexWrap,
                            x = void 0 === k ? (T ? 'wrap' : void 0) : k,
                            P = e.grow,
                            I = e.shrink,
                            M = e.flex,
                            R = void 0 === M ? (P || I ? `${P ? 1 : 0} ${I ? 1 : 0} auto` : void 0) : M,
                            L = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, se);
                        const W = (0, o.useMemo)(() => {
                                const e = { mt: l, mr: _, mb: m, ml: E },
                                    t = ((e) =>
                                        ce.reduce((t, n) => {
                                            const a = e[n];
                                            return a && 'number' != typeof a ? t.concat(le[!0 === a ? 'MD' : a][n]) : t;
                                        }, []))(e),
                                    o = ((e) =>
                                        ce.reduce((t, n) => {
                                            const a = e[n];
                                            return ('number' == typeof a && (t[_e[n]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, L, o, {
                                        width: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: R,
                                        alignSelf: N,
                                        display: y || S ? 'flex' : void 0,
                                        flexDirection: y,
                                        flexWrap: x,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [n, a, l, _, m, E, L, R, N, y, x, w, S]),
                            V = W.computedStyle,
                            $ = W.computedClassNames;
                        return r().createElement('div', ue({ className: s()(ie.base, ...$, t), style: V }, H), O);
                    });
                let me;
                function pe(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function Ee(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function ge(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(me || (me = {}));
                const ve = (e) => e.replace(/&nbsp;/g, ' '),
                    be = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    ye = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    he = (e, t, n = me.left) => e.split(t).reduce(n === me.left ? be : ye, []),
                    Ce = (() => {
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
                    Ae = ['zh_cn', 'zh_sg', 'zh_tw'],
                    fe = ({ binding: e, text: t = '', classMix: n, alignment: a = me.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  o.Fragment,
                                  null,
                                  t.split('\n').map((t, i) =>
                                      r().createElement(
                                          'div',
                                          { className: s()('FormatText_base_d0', n), key: `${t}-${i}` },
                                          ((e, t, n) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  n && e in n
                                                      ? n[e]
                                                      : ((e, t = me.left) => {
                                                            const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Ae.includes(n)
                                                                ? Ce(e)
                                                                : ((e, t = me.left) => {
                                                                      let n = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          o = ve(e);
                                                                      return (
                                                                          he(o, /( )/, t).forEach(
                                                                              (e) => (n = n.concat(he(e, a, me.left))),
                                                                          ),
                                                                          n
                                                                      );
                                                                  })(e, t);
                                                        })(e, t),
                                              ))(t, a, e).map((e, t) =>
                                              r().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Be = n(3532),
                    Fe = n.n(Be);
                const we = {
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
                    De = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                Object.keys(ee());
                const Ne = Object.keys(Fe()),
                    Te = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ke = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    xe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Pe =
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
                            'heading-H56': Te,
                            'heading-H36': Te,
                            'heading-H28': ke,
                            'heading-H24': ke,
                            'heading-H24R': ke,
                            'heading-H22': ke,
                            'heading-H20R': ke,
                            'heading-H18': ke,
                            'heading-H15': xe,
                            'heading-H14': xe,
                            'paragraph-P24': ke,
                            'paragraph-P18': ke,
                            'paragraph-P16': ke,
                            'paragraph-P14': xe,
                            'paragraph-P12': xe,
                            'paragraph-P10': xe,
                        }),
                    Ie =
                        (Object.keys(Pe),
                        (e) =>
                            e
                                ? ((e) => Ne.includes(e))(e)
                                    ? { colorClassName: we[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Me = re((e) => {
                        let t = e.text,
                            n = e.variant,
                            a = e.className,
                            i = e.color,
                            u = e.m,
                            l = e.mt,
                            c = void 0 === l ? u : l,
                            _ = e.mr,
                            d = void 0 === _ ? u : _,
                            m = e.mb,
                            p = void 0 === m ? u : m,
                            E = e.ml,
                            g = void 0 === E ? u : E,
                            v = e.style,
                            b = e.format,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, De);
                        const h = (0, o.useMemo)(() => {
                                const e = Ie(i),
                                    t = e.colorClassName,
                                    n = e.colorStyle,
                                    a = void 0 === n ? {} : n;
                                return { computedStyle: Object.assign({}, v, a), colorClassName: t };
                            }, [v, i]),
                            C = h.computedStyle,
                            A = h.colorClassName;
                        return r().createElement(
                            de,
                            Se(
                                {
                                    className: s()(we.base, n && we[n], A, a),
                                    style: C,
                                    mt: !0 === c ? Pe[n || 'paragraph-P16'].mt : c,
                                    mr: !0 === d ? Pe[n || 'paragraph-P16'].mr : d,
                                    mb: !0 === p ? Pe[n || 'paragraph-P16'].mb : p,
                                    ml: !0 === g ? Pe[n || 'paragraph-P16'].ml : g,
                                },
                                y,
                            ),
                            void 0 !== b ? r().createElement(fe, Se({}, b, { text: t })) : t,
                        );
                    });
                var Re = n(2056);
                const Le = ['children'];
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                const He = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, Le);
                        return r().createElement(
                            Re.u,
                            Oe(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                n,
                            ),
                            t,
                        );
                    },
                    We = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const $e = R.views.common.tooltip_window.simple_tooltip_content,
                    Ue = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            i = e.note,
                            s = e.alert,
                            u = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, We);
                        const c = (0, o.useMemo)(() => {
                            const e = Object.assign({}, u, { body: n, header: a, note: i, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, i, u]);
                        return r().createElement(
                            Re.u,
                            Ve(
                                {
                                    contentId:
                                        ((_ = null == u ? void 0 : u.hasHtmlContent),
                                        _ ? $e.SimpleTooltipHtmlContent('resId') : $e.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const je = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const a = r().createElement('div', { className: n }, e);
                        if (t.header || t.body) return r().createElement(Ue, t, a);
                        const o = t.contentId,
                            i = t.args,
                            s = null == i ? void 0 : i.contentId;
                        return o || s
                            ? r().createElement(Re.u, Ge({}, t, { contentId: o || s }), a)
                            : r().createElement(He, t, a);
                    },
                    ze = ['children', 'tooltipType', 'wrap'],
                    Ye = ['contentId'];
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                function Xe(e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        o = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                }
                let qe;
                !(function (e) {
                    ((e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple'));
                })(qe || (qe = {}));
                const Ke = (e) => {
                    let t = e.children,
                        n = e.tooltipType,
                        a = e.wrap,
                        o = void 0 !== a && a,
                        i = Xe(e, ze);
                    if (!i) return t;
                    const s = o && (i.isEnabled || void 0 === i.isEnabled) ? r().createElement('div', null, t) : t,
                        u = i.contentId,
                        l = Xe(i, Ye);
                    switch (n) {
                        case qe.Base:
                            return (
                                !u && console.error('`contentId` field is required for a base Tooltip'),
                                u ? r().createElement(Re.u, Ze({}, l, { contentId: u }), s) : s
                            );
                        case qe.Simple:
                            return r().createElement(Ue, l, s);
                        case qe.Backport:
                            return r().createElement(He, l, s);
                        default:
                            return r().createElement(je, { tooltipArgs: i }, s);
                    }
                };
                let Je;
                !(function (e) {
                    ((e.Mandarin = 'ny_mandarin'),
                        (e.NyGiftMachineToken = 'nyGiftMachineToken'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'));
                })(Je || (Je = {}));
                const Qe = {
                        base: 'NyCurrency_base_30',
                        container: 'NyCurrency_container_b9',
                        icon: 'NyCurrency_icon_1d',
                        icon__left: 'NyCurrency_icon__left_79',
                        icon__right: 'NyCurrency_icon__right_6f',
                        icon__medium: 'NyCurrency_icon__medium_63',
                        value: 'NyCurrency_value_e4',
                        value__ny25_mandarin: 'NyCurrency_value__ny25_mandarin_81',
                        value__ny25Token: 'NyCurrency_value__ny25Token_94',
                        value__freeXP: 'NyCurrency_value__freeXP_43',
                        value__credits: 'NyCurrency_value__credits_d7',
                        value__gold: 'NyCurrency_value__gold_07',
                        value__xp: 'NyCurrency_value__xp_d0',
                        value__crystal: 'NyCurrency_value__crystal_ba',
                        value__equipCoin: 'NyCurrency_value__equipCoin_f1',
                        value__notAvailable__small: 'NyCurrency_value__notAvailable__small_51',
                        value__notAvailable__medium: 'NyCurrency_value__notAvailable__medium_9d',
                    },
                    et = R.strings.ny.currencyPanel;
                let tt, nt;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'));
                })(tt || (tt = {})),
                    (function (e) {
                        ((e.Left = 'left'), (e.Right = 'right'));
                    })(nt || (nt = {})));
                const at = (0, o.memo)(
                        ({
                            value: e,
                            iconPosition: t = nt.Left,
                            size: n = tt.Small,
                            type: a = Je.Mandarin,
                            enableClickSound: o = !0,
                            enableHoverSound: i = !0,
                            onClick: u,
                            onHover: l,
                            classNames: c,
                            tooltipConfig: _,
                            isCurrencyAvailable: d = !0,
                        }) => {
                            const m = {
                                    backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.common.currency.${n}.${a})`,
                                },
                                p = s()(
                                    Qe.value,
                                    Qe[`value__${n}`],
                                    Qe[`value__${a}`],
                                    !d && Qe[`value__notAvailable__${n}`],
                                    null == c ? void 0 : c.value,
                                ),
                                E = {
                                    [nt.Left]: r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', {
                                            className: s()(
                                                Qe.icon,
                                                Qe[`icon__${n}`],
                                                Qe.icon__left,
                                                null == c ? void 0 : c.icon,
                                            ),
                                            style: m,
                                        }),
                                        d
                                            ? r().createElement(
                                                  'div',
                                                  { className: p },
                                                  r().createElement(J, { format: 'integral', value: Number(e) }),
                                              )
                                            : r().createElement(Me, { text: et.currency.notAvailable(), className: p }),
                                    ),
                                    [nt.Right]: r().createElement(
                                        r().Fragment,
                                        null,
                                        d
                                            ? r().createElement(
                                                  'div',
                                                  { className: p },
                                                  r().createElement(J, { format: 'integral', value: Number(e) }),
                                              )
                                            : r().createElement(Me, { text: et.currency.notAvailable(), className: p }),
                                        r().createElement('div', {
                                            className: s()(
                                                Qe.icon,
                                                Qe[`icon__${n}`],
                                                Qe.icon__right,
                                                null == c ? void 0 : c.icon,
                                            ),
                                            style: m,
                                        }),
                                    ),
                                };
                            return r().createElement(
                                Ke,
                                _,
                                r().createElement(
                                    'div',
                                    {
                                        className: null == c ? void 0 : c.base,
                                        onClick: () => {
                                            (o && C.$.playClick(), u && u());
                                        },
                                        onMouseEnter: () => {
                                            (i && C.$.playHighlight(), l && l());
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: s()(Qe.container, null == c ? void 0 : c.container) },
                                        E[t],
                                    ),
                                ),
                            );
                        },
                    ),
                    ot = R.views.new_year.lobby.new_year.tooltips,
                    rt = (e, t) => ({
                        contentId: ot.NyCurrencyTooltip('resId'),
                        args: { currency: e, isCurrencyAvailable: t },
                    }),
                    it = (0, o.memo)(
                        ({ currency: e, isLast: t, index: n, withNavigation: a, onClick: i, itemSize: u }) => {
                            const l = (0, o.useState)(!1),
                                c = l[0],
                                _ = l[1],
                                d = (0, o.useCallback)(() => i(e.currency.value), [e.currency.value, i]);
                            return r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'CurrencyItem_base_83',
                                        c && 'CurrencyItem_base__hovered_8b',
                                        !a && 'CurrencyItem_base__wothoutNaviagtion_f2',
                                    ),
                                    onMouseEnter: () => {
                                        _(!0);
                                    },
                                    onMouseLeave: () => {
                                        _(!1);
                                    },
                                },
                                r().createElement('div', {
                                    className: s()(
                                        'CurrencyItem_currencyBlink_65',
                                        0 !== n && !t && 'CurrencyItem_currencyBlink__center_60',
                                        t && 'CurrencyItem_currencyBlink__last_84',
                                        !a && 'CurrencyItem_currencyBlink__withOutNavigation_08',
                                    ),
                                }),
                                r().createElement(at, {
                                    value: e.amount,
                                    type: e.currency.value,
                                    size: u,
                                    classNames: {
                                        base: s()(
                                            'CurrencyItem_currencyBlock_7e',
                                            e.allowClick && 'CurrencyItem_currencyBlock__allowClick_b2',
                                        ),
                                        icon: 'CurrencyItem_currencyIcon_5f',
                                        value: 'CurrencyItem_currencyValue_6f',
                                    },
                                    tooltipConfig: rt(e.currency.value, e.isCurrencyAvailable),
                                    onClick: e.allowClick ? d : void 0,
                                    isCurrencyAvailable: e.isCurrencyAvailable,
                                }),
                            );
                        },
                    ),
                    st = (0, o.memo)(
                        ({ currencyItems: e, onCurrencyItemClick: t, classNames: n, withNavigation: a }) => {
                            const i = (0, c.GS)().mediaSize >= c.cJ.Medium ? tt.Medium : tt.Small,
                                u = s()('CurrencyContainer_base_c5', null == n ? void 0 : n.base),
                                l = (0, o.useCallback)(
                                    (e) => {
                                        null == t || t({ currency: e });
                                    },
                                    [t],
                                );
                            return r().createElement(
                                'div',
                                { className: u },
                                e.map((t, n) =>
                                    r().createElement(
                                        'div',
                                        {
                                            className: 'CurrencyContainer_currencyItemContainer_47',
                                            key: t.currency.value,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'CurrencyContainer_currencyItem_c1' },
                                            r().createElement(it, {
                                                index: n,
                                                itemSize: i,
                                                currency: t,
                                                onClick: l,
                                                isLast: n + 1 === e.length,
                                                withNavigation: a,
                                            }),
                                        ),
                                        n + 1 !== e.length &&
                                            r().createElement('div', {
                                                className: s()(
                                                    'CurrencyContainer_currencyDivider_bb',
                                                    a && 'CurrencyContainer_currencyDivider__withLargeDivider_ad',
                                                ),
                                            }),
                                    ),
                                ),
                            );
                        },
                    ),
                    ut = {
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
                let lt, ct;
                var _t, dt;
                (((dt = lt || (lt = {})).main = 'main'),
                    (dt.primary = 'primary'),
                    (dt.primaryGreen = 'primaryGreen'),
                    (dt.primaryRed = 'primaryRed'),
                    (dt.secondary = 'secondary'),
                    (dt.ghost = 'ghost'),
                    ((_t = ct || (ct = {})).extraSmall = 'extraSmall'),
                    (_t.small = 'small'),
                    (_t.medium = 'medium'));
                const mt = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: i,
                    mixClass: u,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: _,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: p,
                    onMouseLeave: E,
                    onClick: g,
                }) => {
                    const v = (0, o.useRef)(null),
                        b = (0, o.useState)(n),
                        y = b[0],
                        h = b[1],
                        A = (0, o.useState)(!1),
                        f = A[0],
                        B = A[1],
                        F = (0, o.useState)(!1),
                        w = F[0],
                        D = F[1],
                        S = (0, o.useCallback)(() => {
                            i || (v.current && (v.current.focus(), h(!0)));
                        }, [i]),
                        N = (0, o.useCallback)(
                            (e) => {
                                y && null !== v.current && !v.current.contains(e.target) && h(!1);
                            },
                            [y],
                        ),
                        T = (0, o.useCallback)(
                            (e) => {
                                i || (g && g(e));
                            },
                            [i, g],
                        ),
                        k = (0, o.useCallback)(
                            (e) => {
                                i || (null !== l && (0, C.G)(l), _ && _(e), D(!0));
                            },
                            [i, l, _],
                        ),
                        x = (0, o.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                i || (p && p(e), B(!1));
                            },
                            [i, p],
                        ),
                        I = (0, o.useCallback)(
                            (e) => {
                                i || (null !== c && (0, C.G)(c), m && m(e), n && S(), B(!0));
                            },
                            [i, c, m, S, n],
                        ),
                        M = (0, o.useCallback)(
                            (e) => {
                                i || (E && E(e), B(!1));
                            },
                            [i, E],
                        ),
                        L = s()(
                            ut.base,
                            ut[`base__${a}`],
                            {
                                [ut.base__disabled]: i,
                                [ut[`base__${t}`]]: t,
                                [ut.base__focus]: y,
                                [ut.base__highlightActive]: f,
                                [ut.base__firstHover]: w,
                            },
                            u,
                        ),
                        O = s()(ut.state, ut.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                        (0, o.useEffect)(() => {
                            h(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: v,
                                className: L,
                                onMouseEnter: k,
                                onMouseMove: x,
                                onMouseUp: P,
                                onMouseDown: I,
                                onMouseLeave: M,
                                onClick: T,
                            },
                            a !== lt.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: ut.back }),
                                    r().createElement('span', { className: ut.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: O },
                                r().createElement('span', { className: ut.stateDisabled }),
                                r().createElement('span', { className: ut.stateHighlightHover }),
                                r().createElement('span', { className: ut.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: ut.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                mt.defaultProps = { type: lt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const pt = (0, o.memo)(mt),
                    Et = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    gt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function vt(e) {
                    let t = '';
                    for (let n = gt.length - 1; n >= 0; n--) for (; e >= gt[n];) ((t += Et[n]), (e -= gt[n]));
                    return t;
                }
                const bt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    yt = (e) => (bt ? `${e}` : vt(e));
                let ht, Ct, At, ft, Bt, Ft, wt;
                var Dt, St, Nt, Tt;
                let kt, xt, Pt, It, Mt;
                var Rt;
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
                        (e.Entitlements = 'entitlements'),
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
                        (e.BlankPersonalMissions_1 = 'freeTokens_0'),
                        (e.BlankPersonalMissions_2 = 'freeTokens_2'),
                        (e.SACoin = 'sacoin'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'),
                        (e.NyPetGoodies = 'nyPetGoodies'),
                        (e.HiddenVehicle = 'hidden_vehicle'),
                        (e.NyStaticDogTag = 'nyStaticDogTag'),
                        (e.Ny26Toys = 'ny26Toys'));
                })(ht || (ht = {})),
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
                    })(Ct || (Ct = {})),
                    ((Tt = At || (At = {})).Big = 'big'),
                    (Tt.Small = 'small'),
                    (Tt.Mini = 'mini'),
                    (Tt.S600x450 = 's600x450'),
                    (Tt.S400x300 = 's400x300'),
                    (Tt.S296x222 = 's296x222'),
                    (Tt.S232x174 = 's232x174'),
                    (Tt.S180x135 = 's180x135'),
                    (Tt.S128x100 = 's128x100'),
                    (Tt.S80x80 = 's80x80'),
                    (Tt.S48x48 = 's48x48'),
                    ((Nt = ft || (ft = {})).MULTI = 'multi'),
                    (Nt.CURRENCY = 'currency'),
                    (Nt.PREMIUM_PLUS = 'premium_plus'),
                    (Nt.NUMBER = 'number'),
                    (Nt.STRING = 'string'),
                    ((St = Bt || (Bt = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (St.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (St.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (St.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (St.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (St.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (St.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (St.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (St.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (St.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (St.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (St.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (St.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((Ft || (Ft = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((Dt = wt || (wt = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Dt.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Dt.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Dt.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Dt.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Dt.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Dt.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Dt.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Dt.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Dt.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Dt.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Dt.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Dt.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ht.Items,
                    ht.Equipment,
                    ht.Xp,
                    ht.XpFactor,
                    ht.Blueprints,
                    ht.BlueprintsAny,
                    ht.Goodies,
                    ht.Berths,
                    ht.Slots,
                    ht.Tokens,
                    ht.CrewSkins,
                    ht.CrewBooks,
                    ht.Customizations,
                    ht.CreditsFactor,
                    ht.TankmenXp,
                    ht.TankmenXpFactor,
                    ht.FreeXpFactor,
                    ht.BattleToken,
                    ht.Entitlements,
                    ht.PremiumUniversal,
                    ht.NaturalCover,
                    ht.BpCoin,
                    ht.BattlePassSelectToken,
                    ht.BattlaPassFinalAchievement,
                    ht.BattleBadge,
                    ht.BonusX5,
                    ht.CrewBonusX3,
                    ht.NewYearFillers,
                    ht.NewYearInvoice,
                    ht.EpicSelectToken,
                    ht.Comp7TokenWeeklyReward,
                    ht.Comp7TokenCouponReward,
                    ht.BattleBoosterGift,
                    ht.NewYearFillers,
                    ht.NewYearInvoice,
                    ht.LootBoxToken,
                    ht.CosmicLootboxCommon,
                    ht.CosmicLootboxSilver,
                    ht.SelectableBonus,
                    ht.GoldenTicket,
                    ht.PostStamp,
                    ht.BlankPersonalMissions_1,
                    ht.BlankPersonalMissions_2,
                    ht.SACoin,
                    ht.PremiumPlusUniversal,
                    ht.NyPetGoodies,
                    ht.HiddenVehicle,
                    ht.Gold,
                    ht.Credits,
                    ht.Crystal,
                    ht.FreeXp,
                    ht.NewYearToyFragments,
                    ht.BattlePassPoints,
                    ht.PremiumPlus,
                    ht.Premium,
                    (function (e) {
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
                    })(kt || (kt = {})),
                    (function (e) {
                        ((e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Big = 'big'),
                            (e.ExtraBig = 'extraBig'),
                            (e.Huge = 'huge'));
                    })(xt || (xt = {})),
                    (function (e) {
                        ((e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation'));
                    })(Pt || (Pt = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Big = 'Big'));
                    })(It || (It = {})),
                    ((Rt = Mt || (Mt = {})).ExtraSlot = 'ny22:extraSlot'),
                    (Rt.ToyFragments = 'ny22ToyFragments'),
                    (Rt.Tman = 'tmanToken'),
                    (Rt.AchievementReward = 'dossier_achievement'),
                    (Rt.Customizations = 'customizations'),
                    (Rt.VariadicDiscount = 'variadicDiscount'),
                    (Rt.MarketplaceUnlock = 'ny26_marketplace_unlock'),
                    (Rt.LootBoxToken = 'lootBoxToken'));
                const Lt = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    ((n = null), (t = e()));
                                });
                            })),
                            () => {
                                ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                            }
                        );
                    },
                    Ot = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var Ht;
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(Ht || (Ht = {}));
                const Wt = ['__left', '__right', '__top', '__bottom'],
                    Vt =
                        ((0, o.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, i) => {
                                const u = (0, o.useRef)(null),
                                    l = (0, o.useRef)(null),
                                    c = (0, o.useRef)(null),
                                    _ = (0, o.useState)(window.decorator && window.decorator.directionType),
                                    d = _[0],
                                    m = _[1],
                                    p = (0, o.useCallback)(() => {
                                        (C.$.playClick(), D.O.view.sendEvent.close());
                                    }, []),
                                    E = (0, o.useCallback)(() => {
                                        C.$.playHighlight();
                                    }, []),
                                    g = s()(Ot.arrow, Ot[`arrow${Wt[d]}`]);
                                P(
                                    () => (
                                        D.O.client.events.mouse.enableOutside(),
                                        D.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (n ? n() : D.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const v = (0, o.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === u.current || t === c.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const a = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = D.O.client.getMouseGlobalPosition(),
                                                    t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    n =
                                                        e.x < a.boundX ||
                                                        e.x > a.boundX + a.boundWidth ||
                                                        e.y > a.boundY + a.boundHeight ||
                                                        e.y < a.boundY;
                                                if (t && !n) return;
                                            }
                                            n ? n() : D.O.view.sendEvent.close('popover');
                                        },
                                        [u, c, n],
                                    ),
                                    b = (0, o.useCallback)(
                                        () => (
                                            D.O.view.freezeTextureBeforeResize(),
                                            Lt(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        t = l.current.scrollHeight;
                                                    (D.O.view.resize(e, t), m(window.decorator.directionType));
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, o.useImperativeHandle)(i, () => ({ updateSize: b })),
                                    P(() => {
                                        D.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, o.useEffect)(() => {
                                        document.addEventListener('mousedown', v, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((n, a) => {
                                                    e.then((e) => !t && n(e)).catch((e) => !t && a(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, N.Eu)());
                                        return (
                                            !t && e.promise.then(() => b()),
                                            () => {
                                                (e.cancel(), document.removeEventListener('mousedown', v));
                                            }
                                        );
                                    }, [b, v, t]),
                                    r().createElement(
                                        'div',
                                        { className: Ot.base, ref: l },
                                        r().createElement(
                                            'div',
                                            { className: Ot.decorator },
                                            r().createElement(
                                                'div',
                                                { className: Ot.content, ref: u },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        Ue,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: Ot.closeBtn,
                                                            onClick: p,
                                                            onMouseEnter: E,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: g, style: a.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Ut = (e) => {
                        let t = e.contentId,
                            n = e.decoratorId,
                            a = e.direction,
                            i = void 0 === a ? Ht.Top : a,
                            s = e.targetId,
                            u = e.args,
                            l = e.onClick,
                            c = e.children,
                            _ = e.isEnabled,
                            d = void 0 === _ || _,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, Vt);
                        const p = (0, o.useRef)(null),
                            E = (0, o.useCallback)(() => {
                                if ((0, N.wU)()) return (0, N.SW)();
                                p.current && (0, N.P3)(t, i, p.current, n, s, u);
                            }, [t, i, u, n, s]);
                        return r().createElement(
                            'div',
                            $t(
                                {
                                    ref: p,
                                    onClick:
                                        ((g = c.props.onClick),
                                        (e) => {
                                            d && (E(), l && l(e), g && g(e));
                                        }),
                                },
                                m,
                            ),
                            c,
                        );
                        var g;
                    },
                    Gt = (R.strings.ny.levelUpView.rewards, [O.CITY, O.PET, O.MACHINE]);
                function jt() {
                    return !1;
                }
                console.log;
                var zt = n(3915);
                function Yt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Zt = (e) => (0 === e ? window : window.subViews.get(e)),
                    Xt = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((t = e),
                                  (n = (e) => ('object' == typeof e ? Xt(e) : e)),
                                  Array.isArray(t) ? t.map(n) : t.map((e, t, a) => n(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? Xt(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? Xt(t) : t]),
                                    )
                            : e;
                        var t, n;
                    },
                    qt = (e) => Xt(e);
                var Kt = n(6517);
                const Jt = ({ currentTab: e, tabTops: t, maxTop: n = 100, minTop: a = 0 }) =>
                    e <= 100 ? t.filter((e) => e > a && e <= n) : [e];
                let Qt;
                !(function (e) {
                    ((e.installationsMarker = 'installationsMarker'),
                        (e.firMarker = 'firMarker'),
                        (e.teremMarker = 'teremMarker'),
                        (e.snowSlideMarker = 'snowSlideMarker'),
                        (e.fairMarker = 'fairMarker'),
                        (e.fireworksMarker = 'fireworksMarker'));
                })(Qt || (Qt = {}));
                const en = ((e, t) => {
                        const n = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: i, mocks: s }) {
                                const u = (0, o.useRef)([]),
                                    l = (e, n, a) => {
                                        var o;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Zt,
                                                context: a = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const o = n(t),
                                                        r = a.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (n, r) => {
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            u = D.O.view.addModelObserver(s, t, !0);
                                                        return (o.set(u, n), e && n(i(r)), u);
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, t) => {
                                                        const n = i(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = i(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Yt(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? Yt(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = n()).done;
                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            i =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (o = null == a ? void 0 : a.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : i.readByPath(t),
                                            l = (e) => u.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const t = Object.assign(
                                                        {
                                                            root: e.object(),
                                                            backButton: e.object('backButton'),
                                                            cityModel: e.object('cityModel'),
                                                            lootboxEntry: e.object('cityModel.lootBox'),
                                                            environmentSwitcher: e.object(
                                                                'cityModel.environmentSwitcher',
                                                            ),
                                                            objectView: e.primitives(
                                                                ['prevObject', 'currentObject', 'nextObject'],
                                                                'cityModel.objectView',
                                                            ),
                                                            currentSubModel: e.primitives(
                                                                ['currentSubModel'],
                                                                'cityModel',
                                                            ),
                                                            groupSlotsItemsRenderers:
                                                                e.array('cityModel.groupSlots.items'),
                                                            collectionsModel: e.object('collectionsModel'),
                                                            mainMenu: e.object('mainMenu'),
                                                            itemsMenu: e.array('mainMenu.itemsMenu'),
                                                            sidebar: e.object('sidebar'),
                                                            infoModel: e.object('infoModel'),
                                                            progressWidgetModel: e.object('progressWidgetModel'),
                                                            shardsModel: e.object('shardsModel'),
                                                            surpriseMachineModel: e.array('surpriseMachineModel'),
                                                            giftSystemModel: e.object('giftSystemModel'),
                                                            vehiclesModel: e.object('vehiclesModel'),
                                                            currencyPanelItems: e.array('currencyPanel.items'),
                                                            customizationZonesModel: e.array(
                                                                'cityModel.objectsOverview.panel.customizationZones',
                                                            ),
                                                            customizationObjectModel: e.object(
                                                                'cityModel.objectView.customizationZoneObject',
                                                            ),
                                                            customizationHeaderTitle: e.object(
                                                                'cityModel.objectView.customizationZoneObject.customizationZone',
                                                            ),
                                                            customizationObjectCurrencyModel: e.object(
                                                                'cityModel.objectView.customizationZoneObject.currencyType',
                                                            ),
                                                            hoverMarker: e.array(
                                                                'cityModel.objectsOverview.hoveredObject',
                                                            ),
                                                            firMarker: e.object('cityModel.firMarker'),
                                                            teremMarker: e.object('cityModel.teremMarker'),
                                                            installationsMarker: e.object(
                                                                'cityModel.installationsMarker',
                                                            ),
                                                            fairMarker: e.object('cityModel.fairMarker'),
                                                            snowSlideMarker: e.object('cityModel.snowslideMarker'),
                                                            fireworksMarker: e.object('cityModel.fireworksMarker'),
                                                            decorationsSlots: e.array('cityModel.decorationsSlots'),
                                                            currentViewType: zt.observable.box(null),
                                                            isBackButtonVisible: zt.observable.box(!1),
                                                        },
                                                        (({ observableModel: e }) => ({
                                                            petModel: e.object('petModel'),
                                                            petNeeds: e.array('petModel.petNeeds'),
                                                            petShop: e.object('petModel.shop'),
                                                            foodIndicator: e.object('petModel.foodIndicator'),
                                                            funIndicator: e.object('petModel.funIndicator'),
                                                            activityIndicator: e.object('petModel.activityIndicator'),
                                                        }))({ observableModel: e }),
                                                        { petOnboardingStep: zt.observable.box(j.Null) },
                                                        (({ observableModel: e }) => ({
                                                            leaderboardModel: e.object('leaderboardModel'),
                                                        }))({ observableModel: e }),
                                                    ),
                                                    n = (0, Kt.computedFn)(() => qt(t.environmentSwitcher.get()), {
                                                        equals: jt,
                                                    }),
                                                    a = (0, Kt.computedFn)(() => qt(t.petModel.get()), { equals: jt }),
                                                    o = (0, Kt.computedFn)(() => qt(t.petShop.get()), { equals: jt }),
                                                    r = (0, Kt.computedFn)(
                                                        () =>
                                                            Boolean(
                                                                qt(t.petShop.get()).shopCards.filter((e) => e.isWaiting)
                                                                    .length,
                                                            ),
                                                        { equals: jt },
                                                    ),
                                                    i = (0, Kt.computedFn)(() => qt(t.petNeeds.get()), { equals: jt }),
                                                    s = (0, Kt.computedFn)(
                                                        () =>
                                                            [
                                                                qt(t.foodIndicator.get()),
                                                                qt(t.funIndicator.get()),
                                                                qt(t.activityIndicator.get()),
                                                            ].filter(({ type: e }) => Boolean(e)),
                                                        { equals: jt },
                                                    ),
                                                    u = (0, Kt.computedFn)(
                                                        () =>
                                                            s()
                                                                .filter((e) => e.isLocked)
                                                                .map((e) => e.type),
                                                        { equals: jt },
                                                    ),
                                                    l = (0, Kt.computedFn)(
                                                        () =>
                                                            s().reduce((e, t) => [...e, ...t.itemLeaderboardPoint], []),
                                                        { equals: jt },
                                                    ),
                                                    c = (0, Kt.computedFn)(() => qt(t.itemsMenu.get()), { equals: jt }),
                                                    _ = (0, Kt.computedFn)(() => qt(t.groupSlotsItemsRenderers.get()), {
                                                        equals: jt,
                                                    }),
                                                    d = (0, Kt.computedFn)(
                                                        (e) => {
                                                            const t = _()[e];
                                                            if (t) return t.slots.items;
                                                        },
                                                        { equals: jt },
                                                    ),
                                                    m = (0, Kt.computedFn)(() => qt(t.customizationZonesModel.get()), {
                                                        equals: jt,
                                                    }),
                                                    p = (0, Kt.computedFn)(() => qt(t.currencyPanelItems.get()), {
                                                        equals: jt,
                                                    }),
                                                    E = (0, Kt.computedFn)(
                                                        (e) => {
                                                            var t;
                                                            return null == (t = p().find((t) => t.currency.value === e))
                                                                ? void 0
                                                                : t.amount;
                                                        },
                                                        { equals: jt },
                                                    ),
                                                    g = (0, Kt.computedFn)((e) => t[e].get(), { equals: jt }),
                                                    v = (0, Kt.computedFn)(() => qt(t.leaderboardModel.get()), {
                                                        equals: jt,
                                                    }),
                                                    b = (0, Kt.computedFn)(() => v().tabs.map((e) => e.top), {
                                                        equals: jt,
                                                    }),
                                                    y = (0, Kt.computedFn)(
                                                        (e) =>
                                                            Boolean(
                                                                v().players.find((t) => 0 !== e && t.position === e),
                                                            ),
                                                        { equals: jt },
                                                    ),
                                                    h = (0, Kt.computedFn)(() => Jt({ currentTab: 25, tabTops: b() }), {
                                                        equals: jt,
                                                    }),
                                                    C = (0, Kt.computedFn)(
                                                        () =>
                                                            Jt({
                                                                currentTab: v().currentTab,
                                                                tabTops: b(),
                                                                minTop: v().currentTab - 1,
                                                            }),
                                                        { equals: jt },
                                                    ),
                                                    A = (0, Kt.computedFn)(
                                                        () =>
                                                            v().players.reduce(
                                                                (e, t, n) => (
                                                                    t.top && e.push({ top: t.top, index: n }),
                                                                    e
                                                                ),
                                                                [],
                                                            ),
                                                        { equals: jt },
                                                    ),
                                                    f = (0, Kt.computedFn)((e) => A().filter((t) => t.index <= e), {
                                                        equals: jt,
                                                    }),
                                                    B = (0, Kt.computedFn)(() => qt(t.decorationsSlots.get()), {
                                                        equals: jt,
                                                    }),
                                                    F = (0, Kt.computedFn)(() => B().length <= 0, { equals: jt });
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getPetShop: o,
                                                        getIsPetShopWaiting: r,
                                                        getPetNeeds: i,
                                                        getPetModel: a,
                                                        getLeaderboardHeaderPoints: l,
                                                        getItemsMenu: c,
                                                        getCurrencyItems: p,
                                                        getCustomizationZones: m,
                                                        getCurrencyCount: E,
                                                        getGroupSlotsItems: _,
                                                        getMarkerParams: g,
                                                        getSlotsItemsGroup: d,
                                                        getPetIndicators: s,
                                                        getLockedPetIndicators: u,
                                                        getEnvironmentSwitcher: n,
                                                        getLeaderboardModel: v,
                                                        getLeaderboardInitialTabs: C,
                                                        getIsLeaderboardPageTop: A,
                                                        getLeaderboardFirstTabs: h,
                                                        getLeaderboardTabTops: b,
                                                        getLeaderboardIsUserInPage: y,
                                                        getLeaderboardTopsBeforePersonal: f,
                                                        getDecorationsSlots: B,
                                                        getIsShowLevelUpWidget: F,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: i,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const a = null != n ? n : s(t),
                                                            o = zt.observable.box(a, { equals: jt });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, zt.action)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const a = null != n ? n : s(t),
                                                            o = zt.observable.box(a, { equals: jt });
                                                        return (
                                                            'real' === e &&
                                                                i.subscribe(
                                                                    (0, zt.action)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const a = s(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = zt.observable.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, zt.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                r = Object.entries(o),
                                                                s = r.reduce(
                                                                    (e, [t, n]) => (
                                                                        (e[n] = zt.observable.box(a[t], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    i.subscribe(
                                                                        (0, zt.action)((e) => {
                                                                            r.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            _ = { mode: e, model: c, externalModel: i, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && a ? a.controls(_) : t(_),
                                            externalModel: i,
                                            mode: e,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    _ = (0, o.useState)(e),
                                    d = _[0],
                                    m = _[1],
                                    p = (0, o.useState)(() => l(e, a, s)),
                                    E = p[0],
                                    g = p[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? g(l(d, a, s)) : (c.current = !0);
                                    }, [s, d, a]),
                                    (0, o.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (E.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [E],
                                    ),
                                    r().createElement(n.Provider, { value: E }, i)
                                );
                            },
                            () => (0, o.useContext)(n),
                        ];
                    })(0, ({ model: e, externalModel: t }) => {
                        const n = (function (e) {
                            const t = {};
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = e[n];
                                    t[n] = (0, zt.action)(a);
                                }
                            return t;
                        })({
                            onViewChange: (t) => e.currentViewType.set(t),
                            onBackButtonVisible: (t) => e.isBackButtonVisible.set(!t),
                        });
                        return Object.assign(
                            {},
                            n,
                            {
                                onClose: t.createCallbackNoArgs('onClose'),
                                onEscape: t.createCallbackNoArgs('cityModel.objectView.onEscape'),
                                onFadeInDone: t.createCallbackNoArgs('onFadeInDone'),
                                onRewardInfo: t.createCallbackNoArgs('onRewardInfo'),
                                onLootBoxEntryPointClick: t.createCallbackNoArgs(
                                    'cityModel.lootBox.onLootBoxEntryPointClick',
                                ),
                                onBack: t.createCallbackNoArgs('backButton.onBack'),
                                onSwitchContent: t.createCallback(
                                    ({ view: e }) => ({ view: e }),
                                    'mainMenu.onSwitchContent',
                                ),
                                onCurrencyItemClick: t.createCallback(
                                    ({ currency: e }) => ({ currency: e }),
                                    'currencyPanel.onItemClick',
                                ),
                                onGoToCustomizationObject: t.createCallback(
                                    ({ objectName: e }) => ({ objectName: e }),
                                    'cityModel.objectView.onGoToCustomizationObject',
                                ),
                                onCustomizationObjectClose: t.createCallbackNoArgs('cityModel.objectView.onClose'),
                                onHoverSlot: t.createCallback(
                                    ({ slotId: e }) => ({ slotId: e }),
                                    'cityModel.onHoverSlot',
                                ),
                                onHoverOutSlot: t.createCallback(
                                    ({ slotId: e }) => ({ slotId: e }),
                                    'cityModel.onHoverOutSlot',
                                ),
                                onClickSlot: t.createCallback(
                                    ({ slotId: e, name: t }) => ({ slotId: e, name: t }),
                                    'cityModel.onClickSlot',
                                ),
                                onLevelUp: t.createCallback(
                                    ({ customizationZone: e }) => ({ customizationZone: e }),
                                    'cityModel.onLevelUp',
                                ),
                                onLevelUpAnimationEnd: t.createCallback(
                                    ({ customizationZone: e }) => ({ customizationZone: e }),
                                    'cityModel.onLevelUpAnimationEnd',
                                ),
                                onCustomizationZoneMove: t.createCallback(
                                    ({ customizationZone: e }) => ({ customizationZone: e }),
                                    'cityModel.objectsOverview.panel.onClick',
                                ),
                                onHoverMarker: t.createCallback(
                                    ({ markerName: e }) => ({ markerName: e }),
                                    'cityModel.onHoverMarker',
                                ),
                                onHoverOutMarker: t.createCallback(
                                    ({ markerName: e }) => ({ markerName: e }),
                                    'cityModel.onHoverOutMarker',
                                ),
                                onObjectHover: t.createCallback(
                                    ({ customizationZoneName: e }) => ({ customizationZoneName: e }),
                                    'cityModel.objectsOverview.onObjectHover',
                                ),
                                onObjectHoverOut: t.createCallback(
                                    ({ customizationZoneName: e }) => ({ customizationZoneName: e }),
                                    'cityModel.objectsOverview.onObjectHoverOut',
                                ),
                                onApplyDecorationSelection: t.createCallback(
                                    ({ index: e }) => ({ index: e }),
                                    'cityModel.onApplyDecorationSelection',
                                ),
                                onIsNewStateChanged: t.createCallback(
                                    ({ index: e }) => ({ index: e }),
                                    'cityModel.onIsNewStateChanged',
                                ),
                                onMoveSpace: t.createCallback(
                                    ({ dx: e, dy: t, dz: n }) => ({ dx: e, dy: t, dz: n }),
                                    'onMoveSpace',
                                ),
                                onMouseOver3dScene: t.createCallback(
                                    ({ isOver3dScene: e }) => ({ isOver3dScene: e }),
                                    'onMouseOver3dScene',
                                ),
                                onSurpriceMachineChangeView: t.createCallback(
                                    ({ viewType: e }) => ({ viewType: e }),
                                    'surpriseMachineModel.onViewChange',
                                ),
                                onMachineBuyBtnClick: t.createCallback(
                                    ({ count: e }) => ({ count: e }),
                                    'surpriseMachineModel.onBuyBtnClick',
                                ),
                                onMachineGoToQuests: t.createCallbackNoArgs('surpriseMachineModel.goToQuest'),
                                onGoToMachineMain: t.createCallbackNoArgs('surpriseMachineModel.goToMachineMain'),
                                onGoToMachineBuyTokens: t.createCallbackNoArgs('surpriseMachineModel.goToBuyTokens'),
                                onCloseRewardVehicle: t.createCallbackNoArgs(
                                    'surpriseMachineModel.vehicleReward.closeRewardVehicle',
                                ),
                                onShowVehicle: t.createCallbackNoArgs('surpriseMachineModel.vehicleReward.showVehicle'),
                            },
                            (({ externalModel: e }) => ({
                                onLeaderboardClose: e.createCallbackNoArgs('leaderboardModel.onClose'),
                                onLeaderboardInfoClick: e.createCallbackNoArgs('leaderboardModel.onInfoClick'),
                                onLeaderboardRewardsClick: e.createCallbackNoArgs('leaderboardModel.onRewardsClick'),
                                onLeaderboardRefresh: e.createCallbackNoArgs('leaderboardModel.onRefresh'),
                                onLeaderboardPersonalPositionClick: e.createCallbackNoArgs(
                                    'leaderboardModel.onPersonalPositionClick',
                                ),
                                onLeaderboardPageClick: e.createCallback(
                                    ({ page: e }) => ({ page: e }),
                                    'leaderboardModel.onPageClick',
                                ),
                                onLeaderboardTopClick: e.createCallback(
                                    ({ top: e }) => ({ top: e }),
                                    'leaderboardModel.onTopClick',
                                ),
                            }))({ externalModel: t }),
                            {
                                onEnvironmentSwitch: t.createCallback(
                                    ({ type: e }) => ({ type: e }),
                                    'cityModel.environmentSwitcher.onSwitch',
                                ),
                                onVideoCoverClick: t.createCallbackNoArgs('infoModel.videoCover.onClick'),
                            },
                            (({ externalModel: e }) => ({
                                onDeleteItemLeaderboardPoint: e.createCallback(
                                    ({ type: e, id: t }) => ({ type: e, id: t }),
                                    'petModel.onDeleteItemLeaderboardPoint',
                                ),
                                onPetGetGift: e.createCallbackNoArgs('petModel.onGetGift'),
                                onPetStoryClick: e.createCallbackNoArgs('petModel.onStoryClick'),
                                onPetShopClick: e.createCallbackNoArgs('petModel.onShopClick'),
                                onProgressFillSound: e.createCallback(
                                    ({ type: e, started: t }) => ({ type: e, started: t }),
                                    'petModel.onProgressFillSound',
                                ),
                                onResetWasOverflowed: e.createCallback(
                                    ({ type: e }) => ({ type: e }),
                                    'petModel.onResetWasOverflowed',
                                ),
                                onPetStateAnimationsChange: e.createCallbackNoArgs(
                                    'petModel.onPetStateAnimationsChange',
                                ),
                                onPetShopClose: e.createCallbackNoArgs('petModel.shop.onClose'),
                                onPetShopDialogClose: e.createCallbackNoArgs('petModel.shop.onDialogClose'),
                                onPetShopDialogSubmit: e.createCallbackNoArgs('petModel.shop.onDialogSubmit'),
                                onPetShopBuy: e.createCallbackNoArgs('petModel.shop.onBuy'),
                                onPetItemsAmountChange: e.createCallback(
                                    ({ type: e, num: t }) => ({ type: e, num: t }),
                                    'petModel.shop.onAmountChange',
                                ),
                                onOnboardingFinish: e.createCallbackNoArgs('petModel.onOnboardingFinish'),
                                onCloseSingleTip: e.createCallbackNoArgs('petModel.onCloseSingleTip'),
                            }))({ externalModel: t }),
                            {
                                setPetOnboardingStep: (0, zt.action)((t) => {
                                    e.petOnboardingStep.set(t);
                                }),
                            },
                        );
                    }),
                    tn = en[0],
                    nn = en[1];
                function an() {
                    const e = (0, o.useRef)(0);
                    return (
                        I(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, o.useMemo)(
                            () => ({
                                run: (t, n) => {
                                    (window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (t(), (e.current = 0));
                                        }, n)));
                                },
                                clear: () => {
                                    (window.clearTimeout(e.current), (e.current = 0));
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                let on;
                !(function (e) {
                    ((e.CITY = 'city'),
                        (e.LEADERS = 'leaders'),
                        (e.MACHINE = 'surprise_machine'),
                        (e.PET = 'pet'),
                        (e.INFO = 'info'));
                })(on || (on = {}));
                const rn = (0, o.memo)(({ className: e, text: t }) =>
                        r().createElement(
                            'div',
                            { className: s()('Bubble_base_f0', t && 'Bubble_base__withValue_be', e) },
                            t && r().createElement(Me, { className: 'Bubble_text_59', text: t }),
                        ),
                    ),
                    sn = {
                        base: 'MenuItem_base_30',
                        menuItemFadeIn: 'MenuItem_menuItemFadeIn_a8',
                        base__active: 'MenuItem_base__active_75',
                        base__paused: 'MenuItem_base__paused_dd',
                        base__disabled: 'MenuItem_base__disabled_16',
                        base__faded: 'MenuItem_base__faded_b2',
                        none: 'MenuItem_none_60',
                        tooltipWrapper: 'MenuItem_tooltipWrapper_0b',
                        selectedBg: 'MenuItem_selectedBg_f5',
                        selectedBg__visible: 'MenuItem_selectedBg__visible_25',
                        hoveredBg: 'MenuItem_hoveredBg_5f',
                        hoveredBg__visible: 'MenuItem_hoveredBg__visible_c0',
                        pausedBg: 'MenuItem_pausedBg_ab',
                        pausedBg__unvisible: 'MenuItem_pausedBg__unvisible_b7',
                        inner: 'MenuItem_inner_be',
                        icon: 'MenuItem_icon_f3',
                        iconHovered: 'MenuItem_iconHovered_26',
                        base__hovered: 'MenuItem_base__hovered_6e',
                        title: 'MenuItem_title_7b',
                        title__city: 'MenuItem_title__city_54',
                        singleBubble: 'MenuItem_singleBubble_46',
                        fadeIn: 'MenuItem_fadeIn_7b',
                        bubble: 'MenuItem_bubble_98',
                        fadeInWithTranslate: 'MenuItem_fadeInWithTranslate_ab',
                        fadeOutWithTranslate: 'MenuItem_fadeOutWithTranslate_cd',
                    },
                    un = R.strings.ny.widget.menu,
                    ln = un.tooltip,
                    cn = R.images.new_year.gui.maps.icons.newYear.mainView.mainMenu.menu.icons;
                let _n;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Active = 'active'));
                })(_n || (_n = {}));
                const dn = ({ name: e, isBlocked: t, isPaused: n, isPetOnboarding: a }) => {
                        if (t)
                            return {
                                contentId: R.views.new_year.lobby.new_year.tooltips.NyBlockActivitiesTooltip('resId'),
                            };
                        switch (e) {
                            case on.MACHINE:
                                return n
                                    ? {
                                          contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                          args: {
                                              header: ln.pause.machine.header(),
                                              description: ln.pause.machine.description(),
                                          },
                                      }
                                    : {
                                          contentId:
                                              R.views.new_year.lobby.new_year.tooltips.MenuMachineTooltip('resId'),
                                      };
                            case on.LEADERS:
                                return {
                                    contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                    args: {
                                        header: n ? ln.pause.leaders.header() : ln.leaders.header(),
                                        description: n ? ln.pause.leaders.description() : ln.leaders.description(),
                                    },
                                };
                            case on.PET:
                                return n
                                    ? {
                                          contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                          args: {
                                              header: ln.pause.pet.header(),
                                              description: ln.pause.pet.description(),
                                          },
                                      }
                                    : a
                                      ? {
                                            contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                            args: {
                                                header: ln.firstEntry.pet.header(),
                                                description: ln.firstEntry.pet.description(),
                                            },
                                        }
                                      : {
                                            contentId:
                                                R.views.new_year.lobby.new_year.tooltips.NyPetOverviewTooltip('resId'),
                                        };
                            case on.CITY:
                            case on.INFO:
                            default:
                                return {
                                    contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                    args: { header: ln[e].header(), description: ln[e].description() },
                                };
                        }
                    },
                    mn = (0, o.memo)(
                        ({
                            hasBubble: e,
                            isPetOnboarding: t,
                            name: n,
                            state: a,
                            isFadedItems: i,
                            isEnabled: u,
                            isOnboardingBlockedElements: l,
                            isOnboardingUnlock: _,
                            onSelected: d,
                            onDeleteItemLeaderboardPoint: m,
                            leaderboardHeaderPoints: p,
                        }) => {
                            const E = (0, c.GS)().mediaSize,
                                g = (0, o.useState)(!1),
                                v = g[0],
                                b = g[1],
                                y = l && vn.includes(n),
                                h = y || !u,
                                A = E === c.cJ.Small || E === c.cJ.ExtraSmall,
                                f = a === _n.Active,
                                B = a === _n.Normal && !h,
                                F = `${n}${A ? '' : '_large'}`,
                                w = s()(
                                    sn.base,
                                    sn[`base__${a}`],
                                    v && !h && sn.base__hovered,
                                    i && sn.base__faded,
                                    h && sn.base__paused,
                                );
                            return r().createElement(
                                je,
                                {
                                    tooltipArgs: dn({ name: n, isPaused: h, isBlocked: y, isPetOnboarding: t }),
                                    className: sn.tooltipWrapper,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: w,
                                        onClick: () => {
                                            B && (d(n), (0, C.G)(R.sounds.hangar_newyear_hud_upper_click()));
                                        },
                                        onMouseEnter: () => {
                                            (b(!0), B && C.$.playHighlight());
                                        },
                                        onMouseLeave: () => {
                                            b(!1);
                                        },
                                    },
                                    r().createElement('div', {
                                        className: s()(sn.selectedBg, f && sn.selectedBg__visible),
                                    }),
                                    h
                                        ? r().createElement('div', {
                                              className: s()(sn.pausedBg, _ && sn.pausedBg__unvisible),
                                          })
                                        : r().createElement('div', {
                                              className: s()(sn.hoveredBg, v && !f && sn.hoveredBg__visible),
                                          }),
                                    r().createElement(
                                        'div',
                                        { className: sn.inner },
                                        r().createElement(
                                            'div',
                                            {
                                                className: sn.icon,
                                                style: { backgroundImage: `url(${cn.$dyn(`${F}`)})` },
                                            },
                                            r().createElement('div', {
                                                className: sn.iconHovered,
                                                style: { backgroundImage: `url(${cn.$dyn(`${F}_hovered`)})` },
                                            }),
                                        ),
                                        r().createElement(Me, {
                                            className: s()(sn.title, sn[`title__${n}`]),
                                            text: un[n].title(),
                                        }),
                                    ),
                                    e && r().createElement(rn, { className: sn.singleBubble }),
                                    n === on.LEADERS &&
                                        (null == p
                                            ? void 0
                                            : p.map((e) =>
                                                  r().createElement(
                                                      'div',
                                                      {
                                                          key: e.id,
                                                          className: sn.bubble,
                                                          onAnimationEnd: (t) => {
                                                              t.animationName.includes('fadeOutWithTranslate') &&
                                                                  m({ type: e.type, id: e.id });
                                                          },
                                                      },
                                                      r().createElement(rn, {
                                                          text: `${R.strings.ny.pet.header.prefix()}${e.value}`,
                                                      }),
                                                  ),
                                              )),
                                ),
                            );
                        },
                    ),
                    pn = 'Navigation_corner_fe',
                    En = 'Navigation_menuDivider_b8';
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const vn = [on.PET, on.LEADERS],
                    bn = (0, L.observer)(({ isFadedItems: e }) => {
                        const t = nn(),
                            n = t.model,
                            a = t.controls,
                            i = n.mainMenu.get(),
                            u = i.startIndexMenu,
                            l = i.isOnboardingUnlock,
                            c = i.isPetOnboarding,
                            _ = n.computes.getItemsMenu(),
                            d = an(),
                            m = n.computes.getLeaderboardHeaderPoints(),
                            p = (0, o.useState)(l),
                            E = p[0],
                            g = p[1],
                            v = (0, o.useState)(!l),
                            b = v[0],
                            y = v[1],
                            h = (0, o.useCallback)(
                                (e) => {
                                    d.isRunning || (d.run(() => {}, 650), a.onSwitchContent({ view: e }));
                                },
                                [a, d],
                            );
                        return (
                            (0, o.useEffect)(() => {
                                if (l && !E)
                                    return (
                                        g(!0),
                                        window.swfPlayer.play('unclocked'),
                                        (0, C.G)(R.sounds.hangar_newyear_unlock_item()),
                                        w(() => {
                                            (g(!1), y(!1));
                                        }, 1e3)
                                    );
                            }, [l]),
                            (0, o.useEffect)(
                                () => () => {
                                    d.clear();
                                },
                                [],
                            ),
                            r().createElement(
                                'div',
                                { className: 'Navigation_base_cf' },
                                r().createElement('div', { className: 'Navigation_currencyShadow_63' }),
                                r().createElement(
                                    'div',
                                    { className: 'Navigation_menu_fb' },
                                    r().createElement('div', { className: pn }),
                                    r().createElement('div', { className: 'Navigation_cornerShadow_9a' }),
                                    r().createElement('div', {
                                        className: s()(En, 'Navigation_menuDivider__progress_57'),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'Navigation_menuItemsWithBottomTexture_6f' },
                                        r().createElement(
                                            'div',
                                            { className: 'Navigation_menuItemsContainer_92' },
                                            r().createElement('div', { className: 'Navigation_menuItemsBg_4e' }),
                                            r().createElement('div', { className: 'Navigation_menuShadow_ff' }),
                                            r().createElement('div', { className: 'Navigation_bottomLine_25' }),
                                            r().createElement(
                                                'div',
                                                { className: 'Navigation_menuItems_fd' },
                                                _.map((t, n) => {
                                                    return r().createElement(
                                                        'div',
                                                        { className: 'Navigation_menuItem_f0', key: t.name },
                                                        r().createElement(
                                                            mn,
                                                            gn(
                                                                {
                                                                    isPetOnboarding: t.name === on.PET && c,
                                                                    onSelected: h,
                                                                    state: ((o = u === n), o ? _n.Active : _n.Normal),
                                                                    isFadedItems: e,
                                                                    isOnboardingBlockedElements: b,
                                                                    isOnboardingUnlock: l,
                                                                },
                                                                t,
                                                                {
                                                                    onDeleteItemLeaderboardPoint:
                                                                        a.onDeleteItemLeaderboardPoint,
                                                                    leaderboardHeaderPoints:
                                                                        'leaders' === t.name ? m : void 0,
                                                                },
                                                            ),
                                                        ),
                                                        r().createElement('div', {
                                                            className: s()(
                                                                En,
                                                                n === _.length - 1 && 'Navigation_menuDivider__last_86',
                                                            ),
                                                        }),
                                                        b &&
                                                            vn.includes(t.name) &&
                                                            r().createElement(
                                                                r().Fragment,
                                                                null,
                                                                r().createElement('div', {
                                                                    className: s()(
                                                                        'Navigation_disabledBlur_ef',
                                                                        n % 2 == 0 &&
                                                                            'Navigation_disabledBlur__rotated_90',
                                                                        l && 'Navigation_disabledBlur__unvisible_65',
                                                                    ),
                                                                }),
                                                                t.name === on.PET &&
                                                                    r().createElement(
                                                                        r().Fragment,
                                                                        null,
                                                                        r().createElement('div', {
                                                                            className: s()(
                                                                                'Navigation_lock_18',
                                                                                l && 'Navigation_lock__unvisible_ca',
                                                                            ),
                                                                        }),
                                                                        E &&
                                                                            r().createElement('div', {
                                                                                className:
                                                                                    'Navigation_lockAnimation_72',
                                                                                style: {
                                                                                    backgroundImage:
                                                                                        'url(swf://gui/flash/animations/newYear/unclocked_navigation.swf?name=unclocked)',
                                                                                },
                                                                            }),
                                                                    ),
                                                            ),
                                                    );
                                                    var o;
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement('div', { className: 'Navigation_bottomTexture_76' }),
                                    r().createElement('div', { className: s()(pn, 'Navigation_corner__right_a8') }),
                                ),
                            )
                        );
                    });
                let yn;
                !(function (e) {
                    ((e.Day = 'Day'), (e.Auto = 'Auto'), (e.Night = 'Night'));
                })(yn || (yn = {}));
                const hn = {
                        base: 'EnvironmentSwitcher_base_8c',
                        activeBackground: 'EnvironmentSwitcher_activeBackground_8f',
                        activeBackground__day: 'EnvironmentSwitcher_activeBackground__day_2f',
                        activeBackground__night: 'EnvironmentSwitcher_activeBackground__night_55',
                        activeBackground__auto: 'EnvironmentSwitcher_activeBackground__auto_4a',
                        activeBackground__visible: 'EnvironmentSwitcher_activeBackground__visible_17',
                        environmentIcon: 'EnvironmentSwitcher_environmentIcon_a4',
                        environmentIcon__visible: 'EnvironmentSwitcher_environmentIcon__visible_d8',
                        environmentIcon__Day: 'EnvironmentSwitcher_environmentIcon__Day_02',
                        environmentIcon__Night: 'EnvironmentSwitcher_environmentIcon__Night_4d',
                        environmentCircle: 'EnvironmentSwitcher_environmentCircle_f3',
                        environmentCircle__visible: 'EnvironmentSwitcher_environmentCircle__visible_24',
                        environmentCircle__Day: 'EnvironmentSwitcher_environmentCircle__Day_2d',
                        environmentCircle__Night: 'EnvironmentSwitcher_environmentCircle__Night_40',
                        activeBackgroundMask: 'EnvironmentSwitcher_activeBackgroundMask_1d',
                        title: 'EnvironmentSwitcher_title_3a',
                        arrow: 'EnvironmentSwitcher_arrow_33',
                        buttons: 'EnvironmentSwitcher_buttons_24',
                        button: 'EnvironmentSwitcher_button_eb',
                        button__Day: 'EnvironmentSwitcher_button__Day_83',
                        button__Night: 'EnvironmentSwitcher_button__Night_18',
                        buttonHover: 'EnvironmentSwitcher_buttonHover_4f',
                        buttonHover__visible: 'EnvironmentSwitcher_buttonHover__visible_8a',
                        buttonActive: 'EnvironmentSwitcher_buttonActive_b4',
                        buttonActive__visible: 'EnvironmentSwitcher_buttonActive__visible_c0',
                        activeZoneContainer: 'EnvironmentSwitcher_activeZoneContainer_81',
                        activeZone: 'EnvironmentSwitcher_activeZone_54',
                        activeZone__selcted: 'EnvironmentSwitcher_activeZone__selcted_f7',
                        icon: 'EnvironmentSwitcher_icon_6b',
                        icon__Day: 'EnvironmentSwitcher_icon__Day_a5',
                        icon__Night: 'EnvironmentSwitcher_icon__Night_dd',
                    },
                    Cn = R.strings.ny.environmentSwitcher,
                    An = Object.values(yn),
                    fn = (0, o.memo)(({ arrowDegree: e, state: t, mode: n, handleClick: a }) => {
                        const i = (0, o.useState)(null),
                            u = i[0],
                            l = i[1],
                            c = () => {
                                l(null);
                            };
                        return r().createElement(
                            'div',
                            { className: s()(hn.base, hn[`base__${t}`]) },
                            r().createElement('div', {
                                className: s()(
                                    hn.activeBackground,
                                    hn.activeBackground__night,
                                    t === yn.Night && hn.activeBackground__visible,
                                ),
                            }),
                            r().createElement('div', {
                                className: s()(
                                    hn.activeBackground,
                                    hn.activeBackground__day,
                                    t === yn.Day && hn.activeBackground__visible,
                                ),
                            }),
                            r().createElement('div', {
                                className: s()(
                                    hn.activeBackground,
                                    hn.activeBackground__auto,
                                    t === yn.Auto && hn.activeBackground__visible,
                                ),
                            }),
                            r().createElement('div', { className: hn.activeBackgroundMask }),
                            r().createElement(Me, { className: hn.title, text: Cn.$dyn(t) }),
                            r().createElement('div', {
                                className: s()(
                                    hn.environmentIcon,
                                    hn.environmentIcon__Day,
                                    t === yn.Auto && hn.environmentIcon__visible,
                                ),
                            }),
                            r().createElement('div', {
                                className: s()(
                                    hn.environmentCircle,
                                    hn.environmentCircle__Day,
                                    t === yn.Auto && n === yn.Day && hn.environmentCircle__visible,
                                ),
                            }),
                            r().createElement('div', {
                                className: s()(
                                    hn.environmentIcon,
                                    hn.environmentIcon__Night,
                                    t === yn.Auto && hn.environmentIcon__visible,
                                ),
                            }),
                            r().createElement('div', {
                                className: s()(
                                    hn.environmentCircle,
                                    hn.environmentCircle__Night,
                                    t === yn.Auto && n === yn.Night && hn.environmentCircle__visible,
                                ),
                            }),
                            r().createElement('div', { className: hn.arrow, style: { transform: `rotateZ(${e}deg)` } }),
                            r().createElement(
                                'div',
                                { className: hn.buttons },
                                An.map((e) =>
                                    r().createElement(
                                        'div',
                                        { key: e, className: s()(hn.button, hn[`button__${e}`]) },
                                        r().createElement('div', {
                                            className: s()(
                                                hn.buttonHover,
                                                u === e && e !== t && hn.buttonHover__visible,
                                            ),
                                        }),
                                        r().createElement('div', {
                                            className: s()(hn.buttonActive, e === t && hn.buttonActive__visible),
                                        }),
                                        r().createElement('div', { className: s()(hn.icon, hn[`icon__${e}`]) }),
                                        r().createElement(
                                            'div',
                                            { className: hn.activeZoneContainer },
                                            r().createElement(
                                                Re.u,
                                                {
                                                    contentId:
                                                        R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                                    args: {
                                                        header: e === yn.Auto ? Cn.tooltip.title.auto() : '',
                                                        description: Cn.tooltip.description.$dyn(e),
                                                    },
                                                },
                                                r().createElement('div', {
                                                    className: s()(hn.activeZone, e === n && hn.activeZone__selected),
                                                    onMouseEnter: () =>
                                                        ((e) => {
                                                            u !== e && (C.$.playHighlight(), l(e));
                                                        })(e),
                                                    onMouseLeave: c,
                                                    onClick: () =>
                                                        ((e) => {
                                                            e !== t &&
                                                                (C.$.playClick(),
                                                                e === yn.Auto &&
                                                                    (0, C.G)(R.sounds.hangar_newyear_auto_choice()),
                                                                a({ type: e }));
                                                        })(e),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Bn = R.strings.ny.environmentSwitcher.buttonTooltip,
                    Fn = (0, o.memo)(() => {
                        const e = (0, o.useState)(!1),
                            t = e[0],
                            n = e[1],
                            a = (0, o.useState)(!1),
                            i = a[0],
                            u = a[1];
                        return r().createElement(
                            'div',
                            { className: 'EnvironmentSwitcherButton_base_cf' },
                            r().createElement(
                                Ut,
                                {
                                    contentId: R.views.new_year.lobby.new_year.popovers.EnvSwitcherPopover('resId'),
                                    direction: Ht.Top,
                                },
                                r().createElement(
                                    Re.u,
                                    {
                                        contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                        args: { header: Bn.title(), description: Bn.description() },
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: 'EnvironmentSwitcherButton_button_cc',
                                            onClick: () => {
                                                C.$.playClick();
                                            },
                                            onMouseUp: () => {
                                                u(!1);
                                            },
                                            onMouseDown: () => {
                                                u(!0);
                                            },
                                            onMouseLeave: () => {
                                                (n(!1), u(!1));
                                            },
                                            onMouseEnter: () => {
                                                (C.$.playHighlight(), n(!0));
                                            },
                                        },
                                        r().createElement('div', {
                                            className: s()(
                                                'EnvironmentSwitcherButton_buttonHover_4f',
                                                t && 'EnvironmentSwitcherButton_buttonHover__visible_e1',
                                            ),
                                        }),
                                        r().createElement('div', {
                                            className: s()(
                                                'EnvironmentSwitcherButton_buttonPressed_22',
                                                i && 'EnvironmentSwitcherButton_buttonPressed__visible_44',
                                            ),
                                        }),
                                        r().createElement('div', { className: 'EnvironmentSwitcherButton_icon_a3' }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    wn = 'subViews.onChanged',
                    Dn = '.html',
                    Sn = /^coui:\/\/gui\/.*/,
                    Nn = (() => {
                        const e = [];
                        let t = !1;
                        const n = () => {
                            if (!e.length) return void (t = !1);
                            const a = e.shift();
                            a && ((t = !0), a().then(() => n()));
                        };
                        return {
                            add: (a) => {
                                (e.push(a), t || n());
                            },
                        };
                    })(),
                    Tn = (e) => {
                        const t = document.createElement('script');
                        ((t.src = e), (t.defer = !0), document.head.appendChild(t));
                    },
                    kn = (0, o.memo)(({ id: e, mixClass: t, children: n }) => {
                        const a = (0, o.useRef)(null),
                            i = (0, o.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            u = (0, o.useState)(!1),
                            l = u[0],
                            c = u[1],
                            _ = (0, o.useState)(!0),
                            d = _[0],
                            m = _[1],
                            p = (0, o.useCallback)(
                                (e) => {
                                    e.includes(i) &&
                                        (c(!0), engine.off(wn, p), window.subViews.removeChildChangedCallback(i));
                                },
                                [i],
                            ),
                            E = (0, o.useCallback)((e) => {
                                Nn.add(
                                    () =>
                                        new Promise((t) => {
                                            const n = new MutationObserver(() => {
                                                (m(!1), n.disconnect(), t());
                                            });
                                            if (a.current) {
                                                const t = document.getElementById('root');
                                                (t && t.setAttribute('id', 'bugSubView'),
                                                    a.current.setAttribute('id', 'root'));
                                                const o = document.createElement('link');
                                                ((o.href = e.replace(Dn, '.css')),
                                                    (o.rel = 'stylesheet'),
                                                    document.head.appendChild(o),
                                                    Sn.test(e) &&
                                                        Tn(
                                                            e
                                                                .split('/')
                                                                .slice(0, -3)
                                                                .concat(['vendors.js'])
                                                                .join('/')
                                                                .replace('/production/', '/production/lib/'),
                                                        ),
                                                    Tn(e.replace(Dn, '.js')),
                                                    n.observe(a.current, { childList: !0 }));
                                            }
                                        }),
                                );
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                if (window.subViews.ids().includes(e)) {
                                    const t = window.subViews.get(e),
                                        n = t.path;
                                    let a = n.split('/').pop();
                                    if (a)
                                        return (
                                            (a = a.split('.')[0]),
                                            (window.subViews[a] = Object.assign({ id: e }, t)),
                                            E(n),
                                            () => {
                                                (a && window.subViews[a] && delete window.subViews[a],
                                                    engine.trigger('subView:destroy', { viewName: a, viewId: e }),
                                                    window.__dataTracker &&
                                                        window.__dataTracker.clearViewCallbacks &&
                                                        window.__dataTracker.clearViewCallbacks(e),
                                                    console.info(`Sub view ${a} is destroyed: ${n}`));
                                            }
                                        );
                                    console.error("subView: can't get View component name");
                                } else engine.on(wn, p);
                            }, [p, E, e, l]),
                            r().createElement(
                                'div',
                                { className: s()('SubView_base_bd', t) },
                                d && n,
                                r().createElement('div', { ref: a, 'data-root-id': e }),
                            )
                        );
                    });
                let xn;
                !(function (e) {
                    ((e.MainBlock = 'mainBlock'),
                        (e.ProgressBlock = 'progressBlock'),
                        (e.BonusBlock = 'bonusBlock'),
                        (e.SurpriseMachine = 'surpriseMachine'));
                })(xn || (xn = {}));
                var Pn = n(3112);
                const In = 'ProgressBar_tierText_55',
                    Mn = 'ProgressBar_tierText__city_74',
                    Rn = /(\.png)$/,
                    Ln = (0, o.memo)(
                        ({
                            percentage: e = 0,
                            level: t = 0,
                            visibleProgressBack: n,
                            isFirstEntrance: a,
                            isWithAnimatedHover: i = !1,
                            isHovered: u = !1,
                            isCity: l = !1,
                        }) => {
                            const c = (0, o.useRef)(null),
                                _ = (0, o.useRef)(null),
                                d = (0, Pn.V)(),
                                m = (0, o.useRef)(e),
                                p = (0, o.useRef)(e),
                                E = (0, o.useRef)(0),
                                g = (0, o.useRef)(null),
                                v = (0, o.useState)(t),
                                b = v[0],
                                y = v[1];
                            (0, o.useEffect)(() => {
                                e >= p.current && y(t);
                            }, [t, e]);
                            const h = M() || !l ? 1 : 1e4,
                                C = l ? 69 : 71,
                                A = (0, o.useCallback)((e) => {
                                    if (!g.current) return;
                                    g.current.style.opacity = e > 14 ? '1' : '0';
                                    const t = 3.6 * e;
                                    g.current.style.transform = `rotate(${t}deg)`;
                                }, []),
                                f = (0, o.useCallback)(
                                    (e, t) => {
                                        const n = (C * d - 3) / 2,
                                            a = (C * d) / 2,
                                            o = (C * d) / 2;
                                        e.clearRect(0, 0, C * d, C * d);
                                        const r = (2 * Math.PI * t) / 100;
                                        (e.beginPath(),
                                            e.arc(a, o, n - d, -Math.PI / 2, r - Math.PI / 2),
                                            (e.lineWidth = 3 * d),
                                            (e.strokeStyle = '#ffeb9c'),
                                            e.stroke(),
                                            e.beginPath(),
                                            e.arc(a, o, n - d, -Math.PI / 2, r - Math.PI / 2),
                                            (e.lineWidth = 3 * d + 3),
                                            (e.strokeStyle = 'rgba(255, 165, 129, 0.3)'),
                                            e.stroke());
                                    },
                                    [d, C],
                                );
                            (0, o.useEffect)(() => {
                                const n = c.current;
                                if (!n) return;
                                const a = n.getContext('2d');
                                if (!a) return;
                                const o = p.current,
                                    r = e;
                                if ((_.current && (cancelAnimationFrame(_.current), (_.current = null)), r < o)) {
                                    const e = (n) => {
                                        E.current || (E.current = n);
                                        const i = n - E.current,
                                            s = Math.min(i / 1e3, 1),
                                            u = o + (100 - o) * s;
                                        if ((f(a, u), A(u), s < 1)) _.current = requestAnimationFrame(e);
                                        else {
                                            (y(t), f(a, 0), A(0), (p.current = 0), (m.current = r), (E.current = 0));
                                            const e = (t) => {
                                                E.current || (E.current = t);
                                                const n = t - E.current,
                                                    o = Math.min(n / 1e3, 1),
                                                    i = 0 + (r - 0) * o;
                                                (f(a, i),
                                                    A(i),
                                                    (p.current = i),
                                                    o < 1
                                                        ? (_.current = requestAnimationFrame(e))
                                                        : ((p.current = r), (_.current = null)));
                                            };
                                            _.current = requestAnimationFrame(e);
                                        }
                                    };
                                    ((E.current = 0), (_.current = requestAnimationFrame(e)));
                                } else {
                                    ((m.current = r), (E.current = 0));
                                    const e = (t) => {
                                        E.current || (E.current = t);
                                        const n = t - E.current,
                                            o = Math.min(n / h, 1),
                                            i = p.current,
                                            s = r,
                                            u = i + (s - i) * o;
                                        (f(a, u),
                                            A(u),
                                            (p.current = u),
                                            o < 1
                                                ? (_.current = requestAnimationFrame(e))
                                                : ((p.current = s), (_.current = null)));
                                    };
                                    _.current = requestAnimationFrame(e);
                                }
                                return () => {
                                    _.current && (cancelAnimationFrame(_.current), (_.current = null));
                                };
                            }, [e, f, h, A, t]);
                            const B = l ? `url(${n})` : `url(${n.replace(Rn, '_main$1')})`;
                            return r().createElement(
                                'div',
                                { className: 'ProgressBar_base_6e' },
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'ProgressBar_widgetBack_21',
                                            l && 'ProgressBar_widgetBack__city_96',
                                        ),
                                        style: { backgroundImage: B },
                                    },
                                    i &&
                                        r().createElement('div', {
                                            className: s()(
                                                'ProgressBar_widgetHover_c6',
                                                (a || 10 === t) && 'ProgressBar_widgetHover__firstEnter_e2',
                                                u && 'ProgressBar_widgetHover__visible_03',
                                            ),
                                        }),
                                ),
                                !a &&
                                    10 !== t &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('canvas', {
                                            className: s()(
                                                'ProgressBar_progressBar_cf',
                                                l && 'ProgressBar_progressBar__city_72',
                                            ),
                                            ref: c,
                                            width: C * d,
                                            height: C * d,
                                            style: { display: 'flex' },
                                        }),
                                        r().createElement('div', {
                                            ref: g,
                                            className: s()(
                                                'ProgressBar_progressLight_bc',
                                                l && 'ProgressBar_progressLight__city_ea',
                                            ),
                                            style: { transform: `rotate(${g.current}deg)` },
                                        }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: 'ProgressBar_tierTextWrapper_66' },
                                    r().createElement(Me, { className: s()(In, l && Mn), text: yt(b) }),
                                    r().createElement(Me, {
                                        className: s()(In, l && Mn, 'ProgressBar_tierText__copied_d3'),
                                        text: yt(b),
                                    }),
                                ),
                            );
                        },
                    );
                let On;
                !(function (e) {
                    ((e.SHORT_DATE = 'short-date'),
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
                        (e.DATE_YEAR = 'date-year'));
                })(On || (On = {}));
                const Hn = 1e3;
                Date.now();
                const Wn = () => {};
                var Vn = n(7902);
                const $n = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var Un = n(6536);
                const Gn = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    jn = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    zn = N.Sw.instance;
                let Yn;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(Yn || (Yn = {}));
                const Zn = (e = 'model', t = Yn.Deep) => {
                        const n = (0, o.useState)(0),
                            a = (n[0], n[1]),
                            r = (0, o.useMemo)(() => (0, Vn.F)(), []),
                            i = r.caller,
                            s = r.resId,
                            u = (0, o.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, o.useState)(() =>
                                ((e) => {
                                    const t = $n(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return Gn(t) ? t.value : t;
                                })(
                                    ((e) =>
                                        ((e, t) =>
                                            e.split('.').reduce((e, t) => {
                                                const n = $n(`${e}.${t}`, window);
                                                return Gn(n) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                            }))(e))(u),
                                ),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, o.useRef)(-1);
                        return (
                            (0, Un.Z)(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Yn.Deep : Yn.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Yn.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Yn.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        o = ((e) => {
                                            const t = ((e) => {
                                                    const t = (0, Vn.F)(),
                                                        n = t.caller,
                                                        a = t.resId,
                                                        o =
                                                            window.__feature && window.__feature !== n && n
                                                                ? `subViews.${n}`
                                                                : '';
                                                    return { modelPrefix: o, modelPath: jn(o, ''), resId: a };
                                                })(),
                                                n = t.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((t, a) => {
                                                        const o = $n(jn(n, `${t}.${a}`), window);
                                                        return Gn(o)
                                                            ? (e.push(o.id), `${t}.${a}.value`)
                                                            : (e.push(a), `${t}.${a}`);
                                                    }),
                                                    e.reduce((e, t) => e + '.' + t)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    d.current = zn.addCallback(o, n, s, t === Yn.Deep);
                                }
                            }),
                            (0, o.useEffect)(() => {
                                if (t !== Yn.None)
                                    return () => {
                                        zn.removeCallback(d.current, s);
                                    };
                            }, [s, t]),
                            c
                        );
                    },
                    Xn =
                        (N.Sw.instance,
                        (e) => {
                            const t = (0, o.useRef)();
                            return (
                                (0, o.useEffect)(() => {
                                    t.current = e;
                                }, [e]),
                                t.current
                            );
                        }),
                    qn = (e = 0, t, n = 0, a = Wn) => {
                        const r = (0, o.useState)(e),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, o.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const o = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - o) / Hn);
                                                null !== n && t <= n ? (s(n), a && a(), clearInterval(r)) : s(t);
                                            },
                                            (t || (e > 120 ? 60 : 1)) * Hn,
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                                s(0);
                            }, [e, t, n, a]),
                            i
                        );
                    },
                    Kn = (e, t) => {
                        const n = (0, o.useState)(e),
                            a = n[0],
                            r = n[1];
                        return ((0, o.useEffect)(() => w(() => r(e), t), [e, t]), a);
                    },
                    Jn = R.images.new_year.gui.maps.icons.newYear.mainWidgetView,
                    Qn = R.views.new_year.lobby.new_year.tooltips,
                    ea = R.strings.ny.progressWidget,
                    ta = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.cityModel.get(),
                            i = t.progressWidgetModel.get(),
                            u = i.progress,
                            l = i.level,
                            c = i.rewardsCount,
                            _ = Xn(u),
                            d = (0, o.useState)(!1),
                            m = d[0],
                            p = d[1],
                            E = 10 === a.cityLvl ? Jn.progress.last() : Jn.progress.default(),
                            g = 10 === l,
                            v = c > 0,
                            b = an(),
                            y = (0, o.useState)(!1),
                            h = y[0],
                            A = y[1];
                        return (
                            (0, o.useEffect)(() => {
                                _ &&
                                    u < _ &&
                                    b.run(() => {
                                        (window.swfPlayer.play('widgetLevelUpAnim'), A(!0));
                                    }, 1e3);
                            }, [u, b, _]),
                            r().createElement(
                                'div',
                                {
                                    className: 'ProgressWidget_base_f4',
                                    onMouseEnter: C.$.playHighlight,
                                    onClick: () => {
                                        ((0, C.G)(R.sounds.hangar_newyear_enter_custome()), n.onRewardInfo());
                                    },
                                    onMouseOver: () => {
                                        p(!0);
                                    },
                                    onMouseLeave: () => {
                                        p(!1);
                                    },
                                },
                                r().createElement(
                                    Re.u,
                                    { contentId: Qn.NyMainWidgetTooltip('resId'), args: { block: xn.ProgressBlock } },
                                    r().createElement(
                                        'div',
                                        { className: 'ProgressWidget_content_19' },
                                        r().createElement(
                                            'div',
                                            { className: 'ProgressWidget_progressBarWrapper_16' },
                                            r().createElement(Ln, {
                                                isCity: !0,
                                                percentage: u,
                                                level: l,
                                                visibleProgressBack: E,
                                                isFirstEntrance: !1,
                                            }),
                                            h &&
                                                r().createElement('div', {
                                                    className: 'ProgressWidget_levelUpAnimation_49',
                                                    style: {
                                                        backgroundImage:
                                                            'url(swf://gui/flash/animations/newYear/city_widget.swf?name=widgetLevelUpAnim)',
                                                    },
                                                }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'ProgressWidget_textWrapper_a6' },
                                            r().createElement('div', {
                                                className: s()(
                                                    'ProgressWidget_textWrapperHover_e9',
                                                    m && 'ProgressWidget_textWrapperHover__hover_cf',
                                                ),
                                            }),
                                            v &&
                                                r().createElement(rn, {
                                                    className: 'ProgressWidget_bubble_79',
                                                    text: String(c),
                                                }),
                                            r().createElement(Me, {
                                                className: 'ProgressWidget_rewardInfoBtnText_60',
                                                text: g && !v ? ea.rewardsReceived() : ea.rewards(),
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    na = ({ count: e, customFontSize: t, maximum: n }) => {
                        const a = 0.6 * (null != t ? t : 16) + 'rem';
                        return r().createElement(
                            'div',
                            { className: 'FormatCount_base_01', style: { fontSize: `${null != t ? t : 16}rem` } },
                            n && e >= n.maxCount
                                ? r().createElement('div', null, null == n ? void 0 : n.maxCountText)
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', { style: { width: a } }, '×'),
                                      e,
                                  ),
                        );
                    };
                var aa = n(8552);
                const oa = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: {
                            duration: 300,
                            easing: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        },
                    },
                    ra = 'disabled',
                    ia = 'empty',
                    sa = {
                        base: 'LootBox_base_6b',
                        shine: 'LootBox_shine_73',
                        base__large: 'LootBox_base__large_ed',
                        shine__big: 'LootBox_shine__big_b8',
                        wrapper: 'LootBox_wrapper_0c',
                        base__disabled: 'LootBox_base__disabled_1a',
                        icon: 'LootBox_icon_08',
                        icon__hovered: 'LootBox_icon__hovered_21',
                        count: 'LootBox_count_c4',
                        disabledAlert: 'LootBox_disabledAlert_35',
                    };
                let ua;
                !(function (e) {
                    ((e.Small = 'small'), (e.Large = 'large'));
                })(ua || (ua = {}));
                const la = R.strings.ny.lootboxEntryPoint,
                    ca = { [ua.Small]: 20, [ua.Large]: 24 },
                    _a = ({ boxesCount: e, hasNew: t, isLootBoxesEnabled: n, size: a, onClick: o }) => {
                        const i = r().useState(!1),
                            u = i[0],
                            l = i[1],
                            _ = (n ? e < 1 && ia : ra) || (t && 'new') || 'normal',
                            d = s()(sa.base, sa[`base__${_}`], sa[`base__${a}`]),
                            m = (0, c.GS)().mediaSize >= c.cJ.Large && a === ua.Large,
                            p = s()(sa.shine, m && sa.shine__big),
                            E = (0, aa.useTransition)(u, Object.assign({ key: u }, oa));
                        return r().createElement(
                            Ue,
                            { header: la.disabledTooltip.header(), body: la.disabledTooltip.body(), isEnabled: !n },
                            r().createElement(
                                'div',
                                { className: d },
                                'new' === _ && r().createElement('div', { className: p }),
                                r().createElement(
                                    'div',
                                    {
                                        className: sa.wrapper,
                                        onMouseEnter: () => {
                                            _ !== ra && (C.$.playHighlight(), l(!0));
                                        },
                                        onMouseLeave: () => {
                                            l(!1);
                                        },
                                        onClick: () => {
                                            (C.$.playClick(), o());
                                        },
                                    },
                                    r().createElement('div', { className: sa.icon }),
                                    E(
                                        (e, t) =>
                                            t &&
                                            r().createElement(aa.animated.div, {
                                                className: s()(sa.icon, sa.icon__hovered),
                                                style: e,
                                            }),
                                    ),
                                    _ !== ia &&
                                        r().createElement(
                                            'div',
                                            { className: sa.count },
                                            r().createElement(na, {
                                                count: e,
                                                customFontSize: ca[a],
                                                maximum: { maxCount: 1e3, maxCountText: la.maxBoxesCount() },
                                            }),
                                        ),
                                    _ === ra && r().createElement('div', { className: sa.disabledAlert }),
                                ),
                            ),
                        );
                    },
                    da = ({
                        children: e,
                        moveSpace: t,
                        isDisabled: n,
                        onMouseOver3dScene: a,
                        isMouseDown: i = !1,
                        setMouseDown: u,
                        isPointerCursor: l = !1,
                    }) => {
                        const c = (0, o.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = (0, o.useState)({ x: 0, y: 0 }),
                            p = m[0],
                            E = m[1],
                            g = (0, o.useMemo)(() => (u ? [i, u] : [_, d]), [u, i, _, d]),
                            v = g[0],
                            b = g[1],
                            y = (0, o.createRef)(),
                            h = (0, o.useCallback)(() => b(!1), [b]);
                        (0, o.useEffect)(
                            () => (
                                window.addEventListener('mouseup', h),
                                () => window.removeEventListener('mouseup', h)
                            ),
                            [h],
                        );
                        const C = (0, o.useCallback)(
                                (e) => {
                                    if (!y.current) return;
                                    const t = y.current.getBoundingClientRect(),
                                        n = t.width,
                                        a = t.height;
                                    return !(
                                        0 === e.clientX ||
                                        0 === e.clientY ||
                                        e.clientX >= n - 1 ||
                                        e.clientY >= a - 1
                                    );
                                },
                                [y],
                            ),
                            A = (0, o.useCallback)(
                                (e) => {
                                    (e.preventDefault(),
                                        0 === e.button && C(e) && (b(!0), E({ x: e.clientX, y: e.clientY })));
                                },
                                [C, b],
                            ),
                            f = (0, o.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), v)) {
                                        if (!C(e)) return;
                                        const n = e.clientX !== p.x ? e.clientX - p.x : 0,
                                            a = e.clientY !== p.y ? e.clientY - p.y : 0;
                                        (E({ x: e.clientX, y: e.clientY }), t({ dx: n, dy: a, dz: 0 }));
                                    }
                                },
                                [C, v, p.x, p.y, t],
                            ),
                            B = (0, o.useCallback)(
                                (e) => {
                                    if ((e.preventDefault(), !C(e))) return;
                                    const n = e.deltaY < 0;
                                    t({ dx: 0, dy: 0, dz: n ? -600 : 600 });
                                },
                                [C, t],
                            ),
                            F = (0, o.useCallback)(() => {
                                b(!1);
                            }, [b]),
                            w = (0, o.useCallback)(() => {
                                a({ isOver3dScene: !0 });
                            }, [a]),
                            D = (0, o.useCallback)(() => {
                                a({ isOver3dScene: !1 });
                            }, [a]),
                            S = s()(
                                'SceneWrapper_base_17',
                                v && 'SceneWrapper_base__down_ad',
                                l && 'SceneWrapper_base__pointer_b0',
                            );
                        return r().createElement(
                            'div',
                            {
                                ref: y,
                                className: S,
                                onMouseDown: n ? void 0 : A,
                                onMouseMove: n ? void 0 : f,
                                onMouseUp: n ? void 0 : F,
                                onWheel: n ? void 0 : B,
                                onMouseOver: w,
                                onMouseOut: D,
                            },
                            e,
                        );
                    },
                    ma = {
                        base: 'LevelUpWidget_base_e4',
                        container: 'LevelUpWidget_container_f9',
                        content: 'LevelUpWidget_content_46',
                        button: 'LevelUpWidget_button_a8',
                        arrow: 'LevelUpWidget_arrow_12',
                        widgetBg: 'LevelUpWidget_widgetBg_08',
                        container__hovered: 'LevelUpWidget_container__hovered_56',
                        container__normal: 'LevelUpWidget_container__normal_65',
                        fadeIn: 'LevelUpWidget_fadeIn_f1',
                        container__notEnough: 'LevelUpWidget_container__notEnough_92',
                        buttonBg: 'LevelUpWidget_buttonBg_49',
                        content__hidden: 'LevelUpWidget_content__hidden_24',
                        text: 'LevelUpWidget_text_a8',
                        text__level: 'LevelUpWidget_text__level_19',
                        buttonHover: 'LevelUpWidget_buttonHover_1f',
                        currencyContainer: 'LevelUpWidget_currencyContainer_c3',
                        currencyValue: 'LevelUpWidget_currencyValue_2c',
                        currencyValue__notEnough: 'LevelUpWidget_currencyValue__notEnough_62',
                        currencyIcon: 'LevelUpWidget_currencyIcon_f0',
                        currencyContainerNotEnough: 'LevelUpWidget_currencyContainerNotEnough_37',
                        buttonText: 'LevelUpWidget_buttonText_12',
                        upConditionText: 'LevelUpWidget_upConditionText_7a',
                        upConditionText__level: 'LevelUpWidget_upConditionText__level_d1',
                        levelUpAnimation: 'LevelUpWidget_levelUpAnimation_e6',
                        animatedTextWrapper: 'LevelUpWidget_animatedTextWrapper_06',
                        animatedTextWrapper__animated: 'LevelUpWidget_animatedTextWrapper__animated_0d',
                        animatedTextContent: 'LevelUpWidget_animatedTextContent_13',
                        animatedTextBlock__fly: 'LevelUpWidget_animatedTextBlock__fly_cd',
                        fly: 'LevelUpWidget_fly_57',
                        animatedText: 'LevelUpWidget_animatedText_e1',
                        animatedText__fly: 'LevelUpWidget_animatedText__fly_a9',
                        textFly: 'LevelUpWidget_textFly_f5',
                        newToysText: 'LevelUpWidget_newToysText_53',
                        newToysText__fly: 'LevelUpWidget_newToysText__fly_56',
                        fadeOut: 'LevelUpWidget_fadeOut_6a',
                        rotate: 'LevelUpWidget_rotate_f8',
                        fadeOutBg: 'LevelUpWidget_fadeOutBg_d5',
                        arrowUp: 'LevelUpWidget_arrowUp_6f',
                    },
                    pa = R.strings.ny.levelUpWidget;
                let Ea;
                !(function (e) {
                    ((e.LevelUp = 'levelUp'), (e.NotEnough = 'notEnough'));
                })(Ea || (Ea = {}));
                const ga = (0, o.memo)(
                        ({
                            zoneName: e,
                            atmospherePoints: t,
                            toysCount: n,
                            currentLevel: a,
                            currencyCount: i,
                            levelUpCurrencyNeed: u,
                            currencyType: l = Je.Mandarin,
                            isOnboarding: c = !1,
                            onLevelUp: _,
                            onLevelUpAnimationEnd: d,
                            setIsClicked: m,
                            setIsCanZoneBeSwitched: p,
                        }) => {
                            const E = i >= u,
                                g = (0, o.useState)(() => (E ? Ea.LevelUp : Ea.NotEnough)),
                                v = g[0],
                                b = g[1],
                                y = (0, o.useRef)(null),
                                h = (0, o.useState)(!1),
                                A = h[0],
                                f = h[1],
                                B = (0, o.useState)(!1),
                                F = B[0],
                                S = B[1],
                                N = (0, o.useState)({ x: 0, y: 0 }),
                                T = N[0],
                                k = N[1],
                                x = Kn(e, 200),
                                P = (0, o.useState)(!1),
                                I = P[0],
                                M = P[1],
                                L = an(),
                                O = a + 1;
                            ((0, o.useEffect)(() => {
                                c || b(E ? Ea.LevelUp : Ea.NotEnough);
                            }, [E, c]),
                                (0, o.useEffect)(() => {
                                    A &&
                                        p &&
                                        (p(!1),
                                        window.swfPlayer.play('levelUpAnim'),
                                        c ||
                                            (w(() => {
                                                S(!0);
                                            }, 2e3),
                                            w(() => {
                                                (f(!1), p(!0), S(!1));
                                            }, 3e3)));
                                }, [A, c, p]));
                            const H = {
                                [Ea.LevelUp]: r().createElement(
                                    'div',
                                    { className: s()(ma.container, ma.container__normal, I && ma.container__hovered) },
                                    r().createElement(
                                        'div',
                                        { className: s()(ma.content, A && ma.content__hidden) },
                                        r().createElement('div', { className: ma.widgetBg }),
                                        r().createElement(Me, {
                                            text: pa.title(),
                                            className: ma.text,
                                            format: {
                                                binding: {
                                                    zone: pa.customizationZone.$dyn(x),
                                                    level: r().createElement(Me, {
                                                        text: String(O),
                                                        className: ma.text__level,
                                                    }),
                                                },
                                            },
                                        }),
                                        r().createElement(
                                            Re.u,
                                            {
                                                contentId:
                                                    R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip(
                                                        'resId',
                                                    ),
                                                args: { customizationZone: e },
                                            },
                                            r().createElement(
                                                'div',
                                                {
                                                    className: ma.button,
                                                    onMouseEnter: () => {
                                                        (M(!0), C.$.playHighlight());
                                                    },
                                                    onMouseLeave: () => {
                                                        M(!1);
                                                    },
                                                    onClick: () => {
                                                        (C.$.playClick(),
                                                            (0, C.G)(R.sounds.hangar_newyear_level_post_up()),
                                                            y.current &&
                                                                k({
                                                                    x: D.O.view.pxToRem(
                                                                        y.current.getBoundingClientRect().x,
                                                                    ),
                                                                    y:
                                                                        0.6 *
                                                                        D.O.view.pxToRem(
                                                                            y.current.getBoundingClientRect().y,
                                                                        ),
                                                                }),
                                                            f(!0),
                                                            m && m(!0),
                                                            A ||
                                                                (_({ customizationZone: x }),
                                                                d &&
                                                                    L.run(() => {
                                                                        d({ customizationZone: x });
                                                                    }, 3e3)));
                                                    },
                                                },
                                                r().createElement('div', { className: ma.buttonHover }),
                                                r().createElement(Me, {
                                                    text: pa.button.up(),
                                                    className: ma.buttonText,
                                                    format: {
                                                        binding: {
                                                            currency: r().createElement(at, {
                                                                value: u,
                                                                type: l,
                                                                classNames: {
                                                                    container: ma.currencyContainer,
                                                                    value: ma.currencyValue,
                                                                    icon: ma.currencyIcon,
                                                                },
                                                                iconPosition: nt.Right,
                                                                size: tt.Small,
                                                                enableHoverSound: !1,
                                                            }),
                                                        },
                                                    },
                                                }),
                                            ),
                                        ),
                                    ),
                                    A &&
                                        r().createElement('div', {
                                            className: s()(ma.levelUpAnimation),
                                            style: {
                                                backgroundImage:
                                                    'url(swf://gui/flash/animations/newYear/widget_LvlUp.swf?name=levelUpAnim)',
                                            },
                                        }),
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                ma.animatedTextWrapper,
                                                A && ma.animatedTextWrapper__animated,
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: ma.animatedTextContent },
                                            r().createElement('div', {
                                                className: s()(ma.animatedTextBg, F && ma.animatedTextBg__out),
                                            }),
                                            r().createElement(
                                                'div',
                                                {
                                                    className: s()(
                                                        ma.animatedTextBlock,
                                                        F && ma.animatedTextBlock__fly,
                                                    ),
                                                    ref: y,
                                                    style: { transformOrigin: `${T.y}rem -${T.x}rem` },
                                                },
                                                r().createElement(Me, {
                                                    className: s()(ma.animatedText, F && ma.animatedText__fly),
                                                    text: pa.levelUpBlock.pointsGet(),
                                                    format: { binding: { points: t } },
                                                }),
                                                r().createElement(Me, {
                                                    className: s()(ma.newToysText, F && ma.newToysText__fly),
                                                    text: pa.levelUpBlock.toysGet(),
                                                    format: { binding: { toys: n } },
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                [Ea.NotEnough]: r().createElement(
                                    'div',
                                    { className: s()(ma.container, ma.container__notEnough) },
                                    r().createElement('div', { className: ma.buttonBg }),
                                    r().createElement(
                                        Re.u,
                                        {
                                            contentId:
                                                R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip(
                                                    'resId',
                                                ),
                                            args: { customizationZone: e },
                                        },
                                        r().createElement(Me, {
                                            text: pa.upCondition(),
                                            className: ma.upConditionText,
                                            format: {
                                                binding: {
                                                    level: r().createElement(Me, {
                                                        className: ma.upConditionText__level,
                                                        text: String(a + 1),
                                                    }),
                                                    currency: r().createElement(at, {
                                                        value: u,
                                                        type: l,
                                                        classNames: {
                                                            container: ma.currencyContainerNotEnough,
                                                            value: s()(ma.currencyValue, ma.currencyValue__notEnough),
                                                            icon: ma.currencyIcon,
                                                        },
                                                        size: tt.Small,
                                                        iconPosition: nt.Right,
                                                        enableHoverSound: !1,
                                                    }),
                                                },
                                            },
                                        }),
                                    ),
                                ),
                            };
                            return r().createElement('div', { className: ma.base }, H[v]);
                        },
                    ),
                    va = (0, o.memo)(() => r().createElement('div', { className: 'AnimatedLevelUpArrow_base_c4' })),
                    ba = R.strings.ny.customizationZones,
                    ya = (0, o.memo)(
                        ({ zone: e, isSelected: t, onCustomizationZoneClick: n, isCanZoneBeSwitched: a }) => {
                            const i = (0, o.useState)(!1),
                                u = i[0],
                                l = i[1];
                            return r().createElement(
                                Re.u,
                                {
                                    contentId:
                                        R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip('resId'),
                                    args: { customizationZone: e.customizationZone.value },
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'VerticalZoneBlock_base_f9',
                                            t && 'VerticalZoneBlock_base__selected_c1',
                                            u && 'VerticalZoneBlock_base__hovered_7d',
                                        ),
                                        onClick:
                                            ((c = e.customizationZone),
                                            () => {
                                                !t &&
                                                    a &&
                                                    (n({ customizationZone: c.value }), (0, C.G)(R.sounds.tabb()));
                                            }),
                                        onMouseEnter: () => {
                                            (l(!0), (0, C.G)(R.sounds.hangar_newyear_widget_hover_on()));
                                        },
                                        onMouseLeave: () => {
                                            (l(!1), (0, C.G)(R.sounds.hangar_newyear_widget_hover_off()));
                                        },
                                    },
                                    r().createElement('div', { className: 'VerticalZoneBlock_zoneBg_fd' }),
                                    r().createElement('div', {
                                        className: 'VerticalZoneBlock_zoneImage_22',
                                        style: {
                                            backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.mainView.cityView.zones.$dyn(e.customizationZone.value.toLowerCase())})`,
                                        },
                                    }),
                                    r().createElement('div', { className: 'VerticalZoneBlock_zoneHover_6e' }),
                                    r().createElement('div', { className: 'VerticalZoneBlock_zoneSelect_44' }),
                                    e.hasNewToys &&
                                        r().createElement(
                                            'div',
                                            { className: 'VerticalZoneBlock_zoneBubble_19' },
                                            r().createElement(rn, null),
                                        ),
                                    e.canUpgrade &&
                                        e.levelUpCurrencyNeed > 0 &&
                                        r().createElement(
                                            'div',
                                            { className: 'VerticalZoneBlock_zoneArrow_45' },
                                            r().createElement(va, null),
                                        ),
                                    r().createElement(Me, {
                                        className: 'VerticalZoneBlock_zoneName_89',
                                        text:
                                            ba.shortName.$dyn(e.customizationZone.value) ||
                                            ba.name.$dyn(e.customizationZone.value),
                                    }),
                                ),
                            );
                            var c;
                        },
                    );
                function ha() {
                    return (
                        (ha =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ha.apply(this, arguments)
                    );
                }
                const Ca = (0, o.memo)(
                        ({
                            isCameraInTransition: e,
                            isCustomizationZoneView: t,
                            isMaximumZoneLevel: n,
                            isOutAnimation: a,
                            headerTitle: i,
                            levelUpWidget: u,
                            zones: l,
                            onCustomizationZoneClick: c,
                            isLevelUpWidgetShow: _,
                        }) => {
                            const d = _ && !n,
                                m = u && u.currencyCount >= u.levelUpCurrencyNeed,
                                p = t && !a && !e,
                                E = (0, o.useState)(!0),
                                g = E[0],
                                v = E[1];
                            return r().createElement(
                                'div',
                                { className: 'CustomizationZone_base_6d' },
                                r().createElement('div', { className: 'CustomizationZone_shadow_37' }),
                                d &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'CustomizationZone_widgetContainer_44',
                                                !m && 'CustomizationZone_widgetContainer__notEnough_3f',
                                                p && 'CustomizationZone_widgetContainer__visible_86',
                                            ),
                                        },
                                        r().createElement(ga, ha({}, u, { setIsCanZoneBeSwitched: v })),
                                    ),
                                l &&
                                    u &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'CustomizationZone_zonesWrapper_68',
                                                p && 'CustomizationZone_zonesWrapper__visible_ed',
                                            ),
                                        },
                                        l.map((e, t) =>
                                            r().createElement(
                                                'div',
                                                { key: `cz_zone_${t}`, className: 'CustomizationZone_zoneBlock_19' },
                                                r().createElement(ya, {
                                                    zone: e,
                                                    isSelected: e.customizationZone.value === i,
                                                    onCustomizationZoneClick: c,
                                                    isCanZoneBeSwitched: g,
                                                }),
                                            ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    Aa = [
                        'children',
                        'contentId',
                        'args',
                        'onMouseOver',
                        'onMouseOut',
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
                function fa(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const Ba = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: N.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    Fa = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseOver,
                            i = e.onMouseOut,
                            s = e.onMouseDown,
                            u = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            g = void 0 === E || E,
                            v = e.targetId,
                            b = void 0 === v ? 0 : v,
                            y = e.onShow,
                            h = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, Aa);
                        const A = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, o.useMemo)(() => b || (0, Vn.F)().resId, [b]),
                            B = (0, o.useCallback)(() => {
                                (A.current.isVisible && A.current.timeoutId) ||
                                    (Ba(n, p, { isMouseEvent: !0, on: !0, arguments: fa(a) }, f),
                                    y && y(),
                                    (A.current.isVisible = !0));
                            }, [n, p, a, f, y]),
                            F = (0, o.useCallback)(() => {
                                if (A.current.isVisible || A.current.timeoutId) {
                                    const e = A.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                                        Ba(n, p, { on: !1 }, f),
                                        A.current.isVisible && h && h(),
                                        (A.current.isVisible = !1));
                                }
                            }, [n, p, f, h]),
                            w = (0, o.useCallback)((e) => {
                                A.current.isVisible &&
                                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (A.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(A.current.prevTarget) && F();
                                    }, 200)));
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const e = A.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, o.useEffect)(() => {
                                !1 === g && F();
                            }, [g, F]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseout', F),
                                    () => {
                                        (window.removeEventListener('mouseout', F), F());
                                    }
                                ),
                                [F],
                            ),
                            g
                                ? (0, o.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseOver:
                                                  ((D = t.props.onMouseOver),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((A.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                          r && r(e),
                                                          D && D(e),
                                                          e.stopPropagation());
                                                  }),
                                              onMouseOut: ((e) => (t) => {
                                                  (F(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseOut),
                                              onClick: ((e) => (t) => {
                                                  (!1 === d && F(), null == u || u(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === d && F(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          C,
                                      ),
                                  )
                                : t
                        );
                        var D;
                    };
                var wa = n(5167);
                const Da = {
                        base: 'Marker_base_37',
                        base__Installations: 'Marker_base__Installations_69',
                        base__selected: 'Marker_base__selected_75',
                        base__onboarding: 'Marker_base__onboarding_f5',
                        base__sticky: 'Marker_base__sticky_30',
                        markerIconWrapper: 'Marker_markerIconWrapper_54',
                        base__hovered: 'Marker_base__hovered_3f',
                        lvlUpArrow: 'Marker_lvlUpArrow_d7',
                        markerIconBg: 'Marker_markerIconBg_c4',
                        markerZoneIcon: 'Marker_markerZoneIcon_aa',
                        selectedBorder: 'Marker_selectedBorder_59',
                        markerTextWrapper: 'Marker_markerTextWrapper_0a',
                        hoverShine: 'Marker_hoverShine_a5',
                        markerTitle: 'Marker_markerTitle_82',
                        markerSubTitle: 'Marker_markerSubTitle_e9',
                        base__maxLevel: 'Marker_base__maxLevel_b8',
                        markerProgressionWrapper: 'Marker_markerProgressionWrapper_da',
                        levelPoint: 'Marker_levelPoint_d8',
                        levelPoint__completed: 'Marker_levelPoint__completed_bd',
                        markerArrow: 'Marker_markerArrow_9f',
                    },
                    Sa = R.strings.ny,
                    Na = R.images.new_year.gui.maps.icons.newYear.mainView.cityView,
                    Ta = (0, o.memo)(
                        ({
                            currentLevel: e,
                            zone: t,
                            currencyCount: n,
                            levelUpCurrencyNeed: a,
                            isVisible: o,
                            onClick: i,
                            isHovered: u = !1,
                            isSelected: l = !1,
                            isPanelHovered: c = !1,
                            isOnboarding: _ = !1,
                        }) => {
                            const d = u || c,
                                m = 5 === e,
                                p = !m && n >= a,
                                E = !(m || 0 === e),
                                g = m ? Sa.customizationZones.maxLevel() : Sa.customizationZones.minLevel(),
                                v = E ? Sa.customizationZones.level() : g,
                                b = Sa.customizationZones.shortName.$dyn(t) || Sa.customizationZones.name.$dyn(t);
                            return r().createElement(
                                'div',
                                {
                                    className: s()(
                                        Da.base,
                                        Da[`base__${t}`],
                                        m && Da.base__maxLevel,
                                        (d || l) && Da.base__hovered,
                                        l && Da.base__selected,
                                        !o && !l && Da.base__sticky,
                                        _ && Da.base__onboarding,
                                    ),
                                    onClick: i,
                                },
                                p &&
                                    r().createElement('div', { className: Da.lvlUpArrow }, r().createElement(va, null)),
                                r().createElement(
                                    'div',
                                    { className: Da.markerIconWrapper },
                                    r().createElement('div', { className: Da.markerIconBg }),
                                    r().createElement('div', {
                                        className: Da.markerZoneIcon,
                                        style: { backgroundImage: `url('${Na.zones.$dyn(t.toLowerCase())}')` },
                                    }),
                                    l && r().createElement('div', { className: Da.selectedBorder }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Da.markerTextWrapper },
                                    !l && r().createElement('div', { className: Da.hoverShine }),
                                    r().createElement(Me, {
                                        className: Da.markerTitle,
                                        text: l ? Sa.customizationZones.name.$dyn(t) : b,
                                    }),
                                    r().createElement(Me, {
                                        className: Da.markerSubTitle,
                                        text: v,
                                        format: {
                                            binding: {
                                                currentLevel: r().createElement(Me, {
                                                    color: wa.WHITE_SPANISH,
                                                    text: String(e),
                                                }),
                                                maxLevel: 5,
                                            },
                                        },
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Da.markerProgressionWrapper },
                                    Array.from({ length: 5 }, (n, a) =>
                                        r().createElement('div', {
                                            key: `${t}_levelPoint_${a}`,
                                            className: s()(Da.levelPoint, e - a > 0 && Da.levelPoint__completed),
                                        }),
                                    ),
                                ),
                                !l && r().createElement('div', { className: Da.markerArrow }),
                            );
                        },
                    ),
                    ka = {
                        Installations: {
                            Fir: { top: 490, left: 100 },
                            Terem: { top: 332, left: 158 },
                            SnowSlide: { top: 382, left: 1705 },
                            Fair: { top: 540, left: 1764 },
                            Fireworks: { top: 700, left: 1800 },
                        },
                        Fir: {
                            Installations: { top: 490, left: 100 },
                            Terem: { top: 332, left: 158 },
                            SnowSlide: { top: 382, left: 1705 },
                            Fair: { top: 540, left: 1764 },
                            Fireworks: { top: 700, left: 1800 },
                        },
                        Terem: {
                            Installations: { top: 332, left: 158 },
                            Fir: { top: 490, left: 100 },
                            SnowSlide: { top: 382, left: 1705 },
                            Fair: { top: 540, left: 1764 },
                            Fireworks: { top: 700, left: 1800 },
                        },
                        SnowSlide: {
                            Installations: { top: 382, left: 1705 },
                            Fir: { top: 490, left: 100 },
                            Terem: { top: 332, left: 158 },
                            Fair: { top: 540, left: 1764 },
                            Fireworks: { top: 700, left: 1800 },
                        },
                        Fair: {
                            Installations: { top: 540, left: 1764 },
                            Fir: { top: 490, left: 100 },
                            Terem: { top: 332, left: 158 },
                            SnowSlide: { top: 382, left: 1705 },
                            Fireworks: { top: 700, left: 1800 },
                        },
                        Fireworks: {
                            Installations: { top: 700, left: 1800 },
                            Fir: { top: 490, left: 1764 },
                            Terem: { top: 332, left: 158 },
                            SnowSlide: { top: 382, left: 1705 },
                            Fair: { top: 540, left: 67 },
                        },
                    },
                    xa = { top: 0, left: 0 },
                    Pa = 'Marker',
                    Ia = R.strings.ny,
                    Ma = (0, L.observer)(({ hoveredSlotName: e, isNotInTransition: t, onMarkerHover: n }) => {
                        const a = (0, o.useState)(''),
                            i = a[0],
                            u = a[1],
                            l = nn(),
                            _ = l.model,
                            d = l.controls,
                            m = (0, c.GS)(),
                            p = m.remScreenWidth,
                            E = m.remScreenHeight,
                            g = _.root.get().switchState,
                            v = _.hoverMarker.get(),
                            b = _.customizationHeaderTitle.get().value,
                            y = (0, o.useMemo)(() => e.toLowerCase() + Pa, [e]),
                            h = g === H.WITH_SWITCHING_OBJS;
                        (0, o.useEffect)(() => {
                            if (i.endsWith(Pa)) {
                                const e = i.slice(0, -Pa.length);
                                n(e);
                            } else n('');
                        }, [i, n]);
                        const A = (0, o.useCallback)(
                                (e, t, n) => () => {
                                    (t || n || (0, C.G)(R.sounds.hangar_newyear_widget_hover_on()), u(e));
                                    const a = ge(e.split(Pa)[0]);
                                    (d.onMouseOver3dScene({ isOver3dScene: !0 }), d.onHoverMarker({ markerName: a }));
                                },
                                [d],
                            ),
                            f = (0, o.useCallback)(
                                (e, t, n) => () => {
                                    (t || n || (0, C.G)(R.sounds.hangar_newyear_widget_hover_off()), u(''));
                                    const a = ge(e.split(Pa)[0]);
                                    (d.onMouseOver3dScene({ isOver3dScene: !1 }),
                                        d.onHoverOutMarker({ markerName: a }));
                                },
                                [d],
                            ),
                            B = (e, t) => () => {
                                t || d.onCustomizationZoneMove({ customizationZone: e.value });
                            };
                        return r().createElement(
                            'div',
                            {
                                className: s()(
                                    'MarkerList_base_10',
                                    t && 'MarkerList_base__notInTransition_d3',
                                    '' !== b && 'MarkerList_base__grab_ae',
                                    v.isZoneHovered && 'MarkerList_base__pointer_2d',
                                ),
                            },
                            r().createElement(
                                'div',
                                {
                                    className: 'MarkerList_markerInfo_83',
                                    style: {
                                        left: `${v.posx}rem`,
                                        top: `${v.posy}rem`,
                                        opacity: v.isZoneHovered && !h ? 1 : 0,
                                    },
                                },
                                r().createElement(
                                    'div',
                                    { className: 'MarkerList_markerInfoContent_60' },
                                    r().createElement('div', { className: 'MarkerList_markerInfoBackground_74' }),
                                    r().createElement(Me, {
                                        className: 'MarkerList_markerInfoText_09',
                                        text: Ia.customizationZones.markerInfo(),
                                    }),
                                ),
                            ),
                            Object.values(Qt).map((e) => {
                                const t = _.computes.getMarkerParams(e),
                                    n = t.posx,
                                    a = t.posy,
                                    o = t.isVisible,
                                    s = t.currentLevel,
                                    u = t.customizationZone,
                                    l = t.currencyCount,
                                    c = t.levelUpCurrencyNeed,
                                    m = t.isZoneHovered,
                                    g = t.angle,
                                    v = Kn(b, 300),
                                    h = Kn(u.value === v, 300),
                                    C = o
                                        ? { top: a, left: n }
                                        : ((e, t, n, a) => {
                                              if (String(e) === String(t)) return xa;
                                              if (!ka[e]) return xa;
                                              if (!ka[e][t]) return xa;
                                              const o = ka[e][t];
                                              return { top: (o.top / 1080) * a, left: (o.left / 1920) * n };
                                          })(b, u.value, p, E),
                                    F = Boolean(v) && !h;
                                return r().createElement(
                                    'div',
                                    {
                                        key: e,
                                        className: 'MarkerList_marker_8c',
                                        style: {
                                            left: h ? '50%' : `${C.left}rem`,
                                            top: `${h ? 110 : C.top}rem`,
                                            opacity: F ? 0 : 1,
                                        },
                                        onMouseEnter: A(e, h, F),
                                        onMouseLeave: f(e, h, F),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            Fa,
                                            {
                                                contentId:
                                                    R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip(
                                                        'resId',
                                                    ),
                                                args: { customizationZone: u.value },
                                                isEnabled: !h && !F,
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(Ta, {
                                                    currentLevel: s,
                                                    zone: u.value,
                                                    currencyCount: l,
                                                    levelUpCurrencyNeed: c,
                                                    isHovered: e === i || m,
                                                    isSelected: h,
                                                    isPanelHovered: e === y,
                                                    onClick: B(u, F),
                                                    angle: o || h ? 0 : g,
                                                    isVisible: o,
                                                    onLevelUp: d.onLevelUp,
                                                }),
                                            ),
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    Ra = {
                        base: 'AnimationArrow_base_51',
                        base__bottom: 'AnimationArrow_base__bottom_13',
                        arrow: 'AnimationArrow_arrow_f2',
                        blink: 'AnimationArrow_blink_5e',
                        base__gold: 'AnimationArrow_base__gold_54',
                    };
                let La, Oa;
                (!(function (e) {
                    ((e.Top = 'top'), (e.Bottom = 'bottom'));
                })(La || (La = {})),
                    (function (e) {
                        ((e.Blue = 'blue'), (e.Gold = 'gold'));
                    })(Oa || (Oa = {})));
                const Ha = ({ direction: e = La.Top, type: t = Oa.Blue, className: n }) =>
                        r().createElement(
                            'div',
                            { className: s()(Ra.base, Ra[`base__${e}`], Ra[`base__${t}`], n) },
                            r().createElement('div', { className: Ra.arrow }),
                        ),
                    Wa = {
                        base: 'SlotHint_base_aa',
                        base__top: 'SlotHint_base__top_e3',
                        base__left: 'SlotHint_base__left_42',
                        highlight: 'SlotHint_highlight_93',
                        title: 'SlotHint_title_d3',
                        subtitle: 'SlotHint_subtitle_5f',
                        arrow: 'SlotHint_arrow_a3',
                    };
                let Va;
                !(function (e) {
                    ((e.Top = 'top'), (e.Left = 'left'));
                })(Va || (Va = {}));
                const $a = ({ title: e, subtitle: t, direction: n = Va.Top }) =>
                        r().createElement(
                            'div',
                            { className: s()(Wa.base, Wa[`base__${n}`]) },
                            r().createElement('div', { className: Wa.highlight }),
                            r().createElement('div', { className: Wa.title }, e),
                            r().createElement('div', { className: Wa.subtitle }, t),
                            r().createElement(Ha, { className: Wa.arrow, direction: La.Bottom }),
                        ),
                    Ua = {
                        base: 'ToySlot_base_48',
                        hint: 'ToySlot_hint_8c',
                        shadow: 'ToySlot_shadow_e0',
                        slot: 'ToySlot_slot_8b',
                        inner: 'ToySlot_inner_62',
                        slot__transitionEnabled: 'ToySlot_slot__transitionEnabled_2c',
                        notice: 'ToySlot_notice_fc',
                        plus: 'ToySlot_plus_11',
                        frame: 'ToySlot_frame_75',
                        image: 'ToySlot_image_d4',
                        hoverBlock: 'ToySlot_hoverBlock_d8',
                        selectedBlock: 'ToySlot_selectedBlock_c7',
                        slot__selected: 'ToySlot_slot__selected_a7',
                        particles: 'ToySlot_particles_5e',
                        selectedParticles: 'ToySlot_selectedParticles_6f',
                        animation: 'ToySlot_animation_32',
                        selectArrow: 'ToySlot_selectArrow_f9',
                        selectArrow__visible: 'ToySlot_selectArrow__visible_02',
                        bubble: 'ToySlot_bubble_38',
                    };
                var Ga, ja;
                (!(function (e) {
                    e.Default = 'default';
                })(Ga || (Ga = {})),
                    (function (e) {
                        e.Default = 'default';
                    })(ja || (ja = {})));
                const za = ({
                    slotId: e,
                    icon: t,
                    name: n,
                    rank: a,
                    onMouseLeave: i,
                    onMouseEnter: u,
                    onClick: l,
                    isWithBubble: c,
                    isSelected: _,
                    folder: d = 'R.images.new_year.gui.maps.icons.newYear.mainView.toys.toysTypes',
                    size: m = ja.Default,
                    style: p = Ga.Default,
                }) => {
                    const E = (0, o.useState)(!0),
                        g = E[0],
                        v = E[1],
                        b = { backgroundImage: t ? `url(${t})` : `url(${d}.${n})` },
                        y = {
                            backgroundImage:
                                t && a < 6
                                    ? `url('R.images.new_year.gui.maps.icons.newYear.decoration_ranks.level_${a - 1}')`
                                    : '',
                        };
                    return r().createElement(
                        'div',
                        {
                            className: s()(Ua.base, Ua[`base__${m}`], Ua[`base__${p}`]),
                            onMouseEnter: () => {
                                ((0, C.G)(R.sounds.hangar_newyear_slot_over()), null == u || u({ slotId: e }));
                            },
                            onMouseLeave: () => {
                                ((0, C.G)(R.sounds.hangar_newyear_slot_over_off()),
                                    v(!0),
                                    null == i || i({ slotId: e }));
                            },
                            onMouseDown: () => {
                                v(!1);
                            },
                            onClick: () => {
                                ((0, C.G)(R.sounds.highlight_red_butt()), null == l || l({ slotId: e, name: n }));
                            },
                        },
                        r().createElement(
                            'div',
                            { className: s()(Ua.slot, g && Ua.slot__transitionEnabled, _ && Ua.slot__selected) },
                            r().createElement('div', { className: s()(Ua.selectArrow, _ && Ua.selectArrow__visible) }),
                            r().createElement(
                                'div',
                                { className: Ua.inner },
                                r().createElement(
                                    'div',
                                    { className: Ua.hoverBlock },
                                    r().createElement('div', { className: Ua.particles }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: Ua.selectedBlock },
                                    r().createElement('div', { className: Ua.selectedParticles }),
                                ),
                            ),
                            r().createElement('div', { className: Ua.image, style: b }),
                            r().createElement('div', { className: Ua.shadow }),
                            r().createElement('div', { className: Ua.rank, style: y }),
                        ),
                        c && r().createElement('div', { className: Ua.bubble }, r().createElement(rn, null)),
                    );
                };
                ((za.Style = Ga), (za.Size = ja));
                const Ya = R.strings.ny,
                    Za = R.views.new_year.lobby.new_year.tooltips,
                    Xa = ({ model: e, onHoverSlot: t, onHoverOutSlot: n, onClickSlot: a, isPetSlot: o }) => {
                        const i = e.slotId,
                            s = e.type,
                            u = e.icon,
                            l = e.isBetterAvailable,
                            c = e.toyId,
                            _ = e.rank,
                            d = e.isSelected,
                            m = Ya.decorationTypes.$dyn(s),
                            p = {
                                contentId: o ? Za.NyPetDecorationTooltip('resId') : Za.NyDecorationTooltip('resId'),
                                args: { toyID: c },
                            },
                            E = {
                                contentId: Za.CommonTooltip('resId'),
                                args: {
                                    header: m,
                                    description: o
                                        ? Ya.pet.tooltip.slot.description()
                                        : Ee(Ya.decoration.tooltip.slot(), { decorationType: m }),
                                    additionalDescription: o
                                        ? Ya.pet.tooltip.slot.additionalDescription()
                                        : Ya.decoration.tooltip.info(),
                                },
                            },
                            g = -1 === c ? E : p;
                        return r().createElement(
                            Re.u,
                            g,
                            r().createElement(
                                'div',
                                { className: 'Slot_base_f7' },
                                r().createElement(za, {
                                    slotId: i,
                                    name: s,
                                    rank: _,
                                    isSelected: d,
                                    icon: u || void 0,
                                    isWithBubble: !o && l,
                                    size: za.Size.Default,
                                    style: za.Style.Default,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: a,
                                }),
                            ),
                        );
                    },
                    qa = ({ slots: e, onHoverSlot: t, onHoverOutSlot: n, onClickSlot: a, isPetSlots: o }) =>
                        r().createElement(
                            'div',
                            { className: 'ToySlotsGroup_base_26' },
                            e &&
                                e.map((e) =>
                                    r().createElement(
                                        'div',
                                        { className: 'ToySlotsGroup_slotContainer_00', key: e.slotId },
                                        r().createElement(Xa, {
                                            model: e,
                                            onHoverSlot: t,
                                            onHoverOutSlot: n,
                                            onClickSlot: a,
                                            isPetSlot: o,
                                        }),
                                    ),
                                ),
                        ),
                    Ka = {
                        base: 'ToyCarousel_base_68',
                        show: 'ToyCarousel_show_95',
                        base__hide: 'ToyCarousel_base__hide_ac',
                        hide: 'ToyCarousel_hide_27',
                        toyCarouselContent: 'ToyCarousel_toyCarouselContent_b3',
                        pageVisualization: 'ToyCarousel_pageVisualization_68',
                        pageBubble: 'ToyCarousel_pageBubble_e6',
                        pageBubbleBg: 'ToyCarousel_pageBubbleBg_b7',
                        pageBubbleActive: 'ToyCarousel_pageBubbleActive_c1',
                        pageBubbleActive__visible: 'ToyCarousel_pageBubbleActive__visible_18',
                        closeWrapper: 'ToyCarousel_closeWrapper_4a',
                        closeWrapper__right: 'ToyCarousel_closeWrapper__right_c3',
                        closeBtn: 'ToyCarousel_closeBtn_aa',
                        closeText: 'ToyCarousel_closeText_7a',
                        closeIcon: 'ToyCarousel_closeIcon_7f',
                        toySlot: 'ToyCarousel_toySlot_c9',
                        toySlot__locked: 'ToyCarousel_toySlot__locked_b2',
                        toySlot__selected: 'ToyCarousel_toySlot__selected_8c',
                        toySlotHover: 'ToyCarousel_toySlotHover_1d',
                        toySlotIcon: 'ToyCarousel_toySlotIcon_6f',
                        toySlotLocked: 'ToyCarousel_toySlotLocked_b5',
                        arrowHover: 'ToyCarousel_arrowHover_a1',
                        arrowBg: 'ToyCarousel_arrowBg_10',
                        arrow: 'ToyCarousel_arrow_1a',
                        newBubble: 'ToyCarousel_newBubble_43',
                        premBlock: 'ToyCarousel_premBlock_d4',
                        premBlock__withMargin: 'ToyCarousel_premBlock__withMargin_36',
                        arrowWrapper: 'ToyCarousel_arrowWrapper_d5',
                        arrow__disabled: 'ToyCarousel_arrow__disabled_6b',
                        arrowBlock: 'ToyCarousel_arrowBlock_53',
                        arrowBlock__right: 'ToyCarousel_arrowBlock__right_8e',
                        carouselBody: 'ToyCarousel_carouselBody_9a',
                        visibleSlotsWrapper: 'ToyCarousel_visibleSlotsWrapper_cb',
                        carouselText: 'ToyCarousel_carouselText_40',
                        carouselText__default: 'ToyCarousel_carouselText__default_0d',
                        slotsWrapper: 'ToyCarousel_slotsWrapper_81',
                        decorativeSlots: 'ToyCarousel_decorativeSlots_14',
                    },
                    Ja = (e, t) => {
                        const n = [];
                        for (let a = 0; a < e; a++) n.push(t(a));
                        return n;
                    };
                function Qa() {
                    return (
                        (Qa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Qa.apply(this, arguments)
                    );
                }
                const eo = R.strings.ny.decorationsCarousel,
                    to = (0, o.memo)(
                        ({ toys: e, isHide: t, toySelect: n, onIsNewStateChanged: a, onCarouselClear: i }) => {
                            const u = e.filter((e) => e.isPremium),
                                l = (0, o.useMemo)(
                                    () =>
                                        e
                                            .filter((e) => !e.isPremium)
                                            .map((t, n) => e[e.length - 1 - n])
                                            .sort((e, t) => (e.rank < t.rank ? -1 : 1)),
                                    [e],
                                ),
                                _ = 12 - u.length,
                                d = Math.ceil(l.length / _),
                                m = d > 1,
                                p = (0, c.GS)().mediaSize < c.cJ.Medium ? 52 : 68,
                                E = (0, o.useState)(0),
                                g = E[0],
                                v = E[1],
                                b = (0, o.useRef)(!1),
                                y = (0, o.useCallback)(() => {
                                    const e = l.findIndex((e) => e.isSelected);
                                    return -1 === e ? 0 : Math.ceil((e + 1) / _) - 1;
                                }, [l, _]);
                            (0, o.useEffect)(() => {
                                b.current || v(y());
                            }, [y]);
                            const h = g > 0,
                                A = g < d - 1,
                                f = (e) => {
                                    const t = e.count < 1,
                                        o = !e.isSelected && !t,
                                        i =
                                            -1 === e.atmosphereBonus
                                                ? {
                                                      header: R.strings.ny.decorationsPopover.locked.tooltip.title(),
                                                      body: R.strings.ny.decorationsPopover.locked.tooltip.description(),
                                                  }
                                                : {
                                                      contentId:
                                                          R.views.new_year.lobby.new_year.tooltips.NyDecorationTooltip(
                                                              'resId',
                                                          ),
                                                      args: { toyID: e.toyID, atmosphereBonus: e.atmosphereBonus },
                                                  };
                                    return r().createElement(
                                        Ke,
                                        Qa({ key: `toySlot_${e.toyID}` }, i),
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    Ka.toySlot,
                                                    e.isPremium && Ka.toySlot__prem,
                                                    t && Ka.toySlot__locked,
                                                    e.isSelected && Ka.toySlot__selected,
                                                ),
                                                onClick: () =>
                                                    ((e) => {
                                                        e.count >= 1 &&
                                                            !e.isSelected &&
                                                            (n({ index: e.toyID }),
                                                            (0, C.G)(R.sounds.highlight_red_butt()));
                                                    })(e),
                                                onMouseEnter: () => {
                                                    (e.isNew && a({ index: e.toyID }),
                                                        e.isSelected || (0, C.G)(R.sounds.hangar_newyear_slot_over()));
                                                },
                                                onMouseLeave: () => {
                                                    (0, C.G)(R.sounds.hangar_newyear_slot_over_off());
                                                },
                                            },
                                            o && r().createElement('div', { className: Ka.toySlotHover }),
                                            r().createElement('div', {
                                                className: Ka.toySlotIcon,
                                                style: {
                                                    backgroundImage: `url('${R.images.new_year.gui.maps.icons.newYear.toys.c_2026.medium.$dyn(e.imageName)}')`,
                                                },
                                            }),
                                            t && r().createElement('div', { className: Ka.toySlotLocked }),
                                            e.isNew &&
                                                r().createElement(
                                                    'div',
                                                    { className: Ka.newBubble },
                                                    r().createElement(rn, null),
                                                ),
                                        ),
                                    );
                                },
                                B = s()(Ka.arrow, 0 === g && Ka.arrow__disabled),
                                F = s()(Ka.arrow, g === d - 1 && Ka.arrow__disabled);
                            return r().createElement(
                                'div',
                                {
                                    className: s()(Ka.base, t && Ka.base__hide),
                                    onMouseEnter: () => {
                                        b.current = !0;
                                    },
                                    onMouseLeave: () => {
                                        b.current = !1;
                                    },
                                    onWheel: (e) => {
                                        (e.deltaY > 0 && g > 0 && v((e) => e - 1),
                                            e.deltaY < 0 && g < d - 1 && v((e) => e + 1));
                                    },
                                },
                                r().createElement(
                                    'div',
                                    { className: Ka.toyCarouselContent },
                                    m &&
                                        r().createElement(
                                            'div',
                                            { className: Ka.pageVisualization },
                                            Ja(d, (e) =>
                                                r().createElement(
                                                    'div',
                                                    {
                                                        key: `pageBubble_${e}`,
                                                        className: s()(Ka.pageBubble, e === g && Ka.pageBubble__active),
                                                    },
                                                    r().createElement('div', { className: Ka.pageBubbleBg }),
                                                    r().createElement('div', {
                                                        className: s()(
                                                            Ka.pageBubbleActive,
                                                            e === g && Ka.pageBubbleActive__visible,
                                                        ),
                                                    }),
                                                ),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: s()(Ka.closeWrapper, !m && Ka.closeWrapper__right) },
                                        r().createElement(
                                            'div',
                                            {
                                                className: Ka.closeBtn,
                                                onMouseEnter: () => {
                                                    C.$.playHighlight();
                                                },
                                                onClick: () => {
                                                    (C.$.playClick(), i());
                                                },
                                            },
                                            r().createElement(Me, { className: Ka.closeText, text: eo.closeText() }),
                                            r().createElement('div', { className: Ka.closeIcon }),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: s()(Ka.premBlock, !m && Ka.premBlock__withMargin) },
                                        r().createElement(Me, { className: Ka.carouselText, text: eo.title.prem() }),
                                        u.map((e) => f(e)),
                                    ),
                                    m &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: Ka.arrowWrapper,
                                                onClick: () => {
                                                    h &&
                                                        (v((e) => e - 1),
                                                        (0, C.G)(R.sounds.hangar_newyear_add_toy_progress()));
                                                },
                                                onMouseEnter: () => {
                                                    h && C.$.playHighlight();
                                                },
                                            },
                                            r().createElement('div', { className: Ka.arrowBg }),
                                            r().createElement(
                                                'div',
                                                { className: Ka.arrowBlock },
                                                r().createElement('div', { className: B }),
                                                g > 0 && r().createElement('div', { className: Ka.arrowHover }),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: Ka.carouselBody },
                                        r().createElement(Me, {
                                            className: s()(Ka.carouselText, Ka.carouselText__default),
                                            text: eo.title.default(),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Ka.visibleSlotsWrapper, style: { width: p * _ + 'rem' } },
                                            r().createElement(
                                                'div',
                                                {
                                                    className: Ka.slotsWrapper,
                                                    style: { transform: `translateX(${-g * p * _}rem)` },
                                                },
                                                l.map((e) => f(e)),
                                                Ja(_, (e) =>
                                                    r().createElement('div', {
                                                        key: `decorativeSlot_${e}`,
                                                        className: Ka.decorativeSlots,
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                    m &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: Ka.arrowWrapper,
                                                onClick: () => {
                                                    A &&
                                                        (v((e) => e + 1),
                                                        (0, C.G)(R.sounds.hangar_newyear_add_toy_progress()));
                                                },
                                                onMouseEnter: () => {
                                                    A && C.$.playHighlight();
                                                },
                                            },
                                            r().createElement('div', { className: Ka.arrowBg }),
                                            r().createElement(
                                                'div',
                                                { className: s()(Ka.arrowBlock, Ka.arrowBlock__right) },
                                                r().createElement('div', { className: F }),
                                                g !== d - 1 && r().createElement('div', { className: Ka.arrowHover }),
                                            ),
                                        ),
                                ),
                            );
                        },
                    ),
                    no = 'ToySlots_separatorDot_29',
                    ao = R.strings.ny.slot.hint,
                    oo = (0, L.observer)(({ carouselHide: e, onCarouselClear: t }) => {
                        const n = nn(),
                            a = n.model,
                            i = n.controls,
                            s = a.groupSlotsItemsRenderers.get(),
                            u = Kn(a.computes.getGroupSlotsItems(), 300),
                            l = a.computes.getDecorationsSlots(),
                            c = a.cityModel.get().hasToysHint,
                            _ = a.customizationObjectModel.get(),
                            d = _.currentLevel === _.maxLevel,
                            m = s.length > 2 || d ? Va.Top : Va.Left,
                            p = (0, o.useCallback)(
                                (e) => {
                                    i.onClickSlot(e);
                                },
                                [i],
                            ),
                            E = (0, o.useMemo)(
                                () =>
                                    s.map((e, t) => {
                                        const n = t !== s.length - 1;
                                        return r().createElement(
                                            'div',
                                            { className: 'ToySlots_slotsGroup_84', key: t },
                                            r().createElement(qa, {
                                                slots: a.computes.getSlotsItemsGroup(t),
                                                onHoverSlot: i.onHoverSlot,
                                                onHoverOutSlot: i.onHoverOutSlot,
                                                onClickSlot: p,
                                            }),
                                            n &&
                                                r().createElement(
                                                    'div',
                                                    { className: 'ToySlots_separator_5a' },
                                                    r().createElement('div', { className: no }),
                                                    r().createElement('div', {
                                                        className: 'ToySlots_separatorLine_c5',
                                                    }),
                                                    r().createElement('div', { className: no }),
                                                ),
                                        );
                                    }),
                                [u],
                            ),
                            g = (0, o.useState)(null),
                            v = g[0],
                            b = g[1],
                            y = (0, o.useState)(m),
                            h = y[0],
                            C = y[1];
                        return (
                            (0, o.useEffect)(() => {
                                (b(E), C(m));
                            }, [u]),
                            r().createElement(
                                'div',
                                { className: 'ToySlots_base_bd' },
                                r().createElement('div', { className: 'ToySlots_toysPattern_3d' }),
                                r().createElement('div', { className: 'ToySlots_borderLight_89' }),
                                c &&
                                    r().createElement($a, { title: ao.title(), subtitle: ao.subtitle(), direction: h }),
                                v,
                                l.length > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: 'ToySlots_carouselWrapper_8f' },
                                        r().createElement(to, {
                                            toys: l,
                                            isHide: e,
                                            toySelect: i.onApplyDecorationSelection,
                                            onIsNewStateChanged: i.onIsNewStateChanged,
                                            onCarouselClear: t,
                                        }),
                                    ),
                            )
                        );
                    }),
                    ro = 'ViewSlots_divider_e0',
                    io = {
                        base: 'Slot_base_7e',
                        slotsGroup: 'Slot_slotsGroup_cb',
                        slotHover: 'Slot_slotHover_e7',
                        base__hover: 'Slot_base__hover_2b',
                        animatedTextWrapper: 'Slot_animatedTextWrapper_70',
                        animatedTextWrapper__animated: 'Slot_animatedTextWrapper__animated_d4',
                        fadeIn: 'Slot_fadeIn_e3',
                        animatedTextContent: 'Slot_animatedTextContent_d6',
                        animatedTextBg: 'Slot_animatedTextBg_2a',
                        animatedTextBg__out: 'Slot_animatedTextBg__out_4a',
                        fadeOut: 'Slot_fadeOut_33',
                        animatedTextBlock: 'Slot_animatedTextBlock_5e',
                        animatedTextBlock__fly: 'Slot_animatedTextBlock__fly_a7',
                        fly: 'Slot_fly_39',
                        animatedText: 'Slot_animatedText_39',
                        animatedText__fly: 'Slot_animatedText__fly_d9',
                        textFly: 'Slot_textFly_71',
                        slotText: 'Slot_slotText_59',
                        divider: 'Slot_divider_0b',
                        arrowAnimationComponent: 'Slot_arrowAnimationComponent_c0',
                        buttonContainer: 'Slot_buttonContainer_71',
                        button: 'Slot_button_ad',
                        buttonUp: 'Slot_buttonUp_00',
                        buttonHover: 'Slot_buttonHover_f8',
                        currencyValue: 'Slot_currencyValue_0d',
                        currencyIcon: 'Slot_currencyIcon_b1',
                        currencyContainerNotEnough: 'Slot_currencyContainerNotEnough_a3',
                        buttonText: 'Slot_buttonText_c9',
                        bubble: 'Slot_bubble_38',
                        levelUpAnimation: 'Slot_levelUpAnimation_61',
                    },
                    so = R.strings.ny.levelUpWidget,
                    uo = R.strings.ny.customizationZones,
                    lo = (0, L.observer)(
                        ({
                            customizationZone: e,
                            hoveredSlotName: t,
                            canUpgrade: n,
                            levelUpCurrencyNeed: a,
                            hasNewToys: i,
                            isZoneHovered: u,
                            atmospherePoints: l,
                            index: c,
                            onSlotHover: _,
                        }) => {
                            const d = nn().controls,
                                m = (0, o.useState)(!1),
                                p = m[0],
                                E = m[1],
                                g = (0, o.useState)(!1),
                                v = g[0],
                                b = g[1],
                                y = an(),
                                h = (0, o.useState)(!1),
                                A = h[0],
                                f = h[1],
                                B = t.toLowerCase() === e.value.toLowerCase(),
                                F = A || B || u,
                                S = (0, o.useRef)(null),
                                N = (0, o.useState)({ x: 0, y: 0 }),
                                T = N[0],
                                k = N[1],
                                x = (0, o.useCallback)(
                                    (e) => () => {
                                        (d.onCustomizationZoneMove({ customizationZone: e.value }),
                                            (0, C.G)(R.sounds.tabb()));
                                    },
                                    [d],
                                );
                            ((0, o.useEffect)(
                                () => () => {
                                    p && x(e);
                                },
                                [e, p, x],
                            ),
                                (0, o.useEffect)(() => {
                                    p &&
                                        (w(() => {
                                            const t = 'levelUpAnim_' + e.value;
                                            window.swfPlayer.play(t);
                                        }, 50),
                                        w(() => {
                                            b(!0);
                                        }, 1e3),
                                        w(() => {
                                            (E(!1), b(!1));
                                        }, 2200));
                                }, [p, c, e.value]));
                            const P = () => {
                                ((0, C.G)(R.sounds.hangar_newyear_widget_hover_off()), f(!1));
                            };
                            return r().createElement(
                                'div',
                                { className: s()(io.base, F && io.base__hover), onMouseLeave: P },
                                n &&
                                    a > 0 &&
                                    !p &&
                                    r().createElement(
                                        'div',
                                        { onMouseLeave: P },
                                        r().createElement(
                                            'div',
                                            { className: io.buttonContainer },
                                            r().createElement(
                                                Re.u,
                                                {
                                                    contentId:
                                                        R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip(
                                                            'resId',
                                                        ),
                                                    args: { customizationZone: e.value },
                                                },
                                                r().createElement(
                                                    'div',
                                                    {
                                                        className: io.button,
                                                        onClick: () => {
                                                            p ||
                                                                ((0, C.G)(R.sounds.hangar_newyear_level_post_up_new()),
                                                                S.current &&
                                                                    k({
                                                                        x:
                                                                            2 *
                                                                            D.O.view.pxToRem(
                                                                                S.current.getBoundingClientRect().x,
                                                                            ),
                                                                        y: D.O.view.pxToRem(
                                                                            S.current.getBoundingClientRect().y,
                                                                        ),
                                                                    }),
                                                                E(!0),
                                                                d.onLevelUp({ customizationZone: e.value }),
                                                                f(!1),
                                                                y.run(() => {
                                                                    d.onLevelUpAnimationEnd({
                                                                        customizationZone: e.value,
                                                                    });
                                                                }, 2200));
                                                        },
                                                        onMouseEnter: C.$.playHighlight,
                                                    },
                                                    r().createElement('div', { className: io.buttonHover }),
                                                    r().createElement(Me, {
                                                        text: so.button.up(),
                                                        className: io.buttonText,
                                                        format: {
                                                            binding: {
                                                                currency: r().createElement(at, {
                                                                    value: a,
                                                                    classNames: {
                                                                        value: io.currencyValue,
                                                                        icon: io.currencyIcon,
                                                                    },
                                                                    size: tt.Small,
                                                                    iconPosition: nt.Right,
                                                                    enableHoverSound: !1,
                                                                }),
                                                            },
                                                        },
                                                    }),
                                                ),
                                            ),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: io.arrowAnimationComponent },
                                            r().createElement(va, null),
                                        ),
                                    ),
                                r().createElement(
                                    Re.u,
                                    {
                                        contentId:
                                            R.views.new_year.lobby.new_year.tooltips.CustomizationZoneTooltip('resId'),
                                        args: { customizationZone: e.value },
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: io.slotsGroup,
                                            onMouseEnter:
                                                ((I = e.value),
                                                () => {
                                                    (f(!0),
                                                        _(I),
                                                        (0, C.G)(R.sounds.hangar_newyear_widget_hover_on()),
                                                        d.onObjectHover({ customizationZoneName: I }));
                                                }),
                                            onMouseLeave: ((e) => () => {
                                                (_(''),
                                                    (0, C.G)(R.sounds.hangar_newyear_widget_hover_off()),
                                                    d.onObjectHoverOut({ customizationZoneName: e }));
                                            })(e.value),
                                            onClick: x(e),
                                            style: {
                                                backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.mainView.cityView.zones.$dyn(e.value.toLowerCase())})`,
                                            },
                                        },
                                        r().createElement('div', { className: io.slotHover }),
                                        i &&
                                            r().createElement(
                                                'div',
                                                { className: io.bubble },
                                                r().createElement(rn, null),
                                            ),
                                        p &&
                                            r().createElement('div', {
                                                className: s()(io.levelUpAnimation, v && io.levelUpAnimation__out),
                                                style: {
                                                    backgroundImage: `url(swf://gui/flash/animations/newYear/slot_lvlUp.swf?name=${'levelUpAnim_' + e.value})`,
                                                },
                                            }),
                                        r().createElement(
                                            'div',
                                            {
                                                className: s()(
                                                    io.animatedTextWrapper,
                                                    p && io.animatedTextWrapper__animated,
                                                ),
                                            },
                                            r().createElement(
                                                'div',
                                                { className: io.animatedTextContent },
                                                r().createElement('div', {
                                                    className: s()(io.animatedTextBg, v && io.animatedTextBg__out),
                                                }),
                                                r().createElement(
                                                    'div',
                                                    {
                                                        className: s()(
                                                            io.animatedTextBlock,
                                                            v && io.animatedTextBlock__fly,
                                                        ),
                                                        ref: S,
                                                        style: { transformOrigin: `${T.y}rem -${T.x}rem` },
                                                    },
                                                    r().createElement(Me, {
                                                        className: s()(io.animatedText, v && io.animatedText__fly),
                                                        text: so.levelUpBlock.pointsGet(),
                                                        format: { binding: { points: l } },
                                                    }),
                                                ),
                                            ),
                                        ),
                                        r().createElement(Me, {
                                            className: io.slotText,
                                            text: uo.shortName.$dyn(e.value) || uo.name.$dyn(e.value),
                                        }),
                                    ),
                                ),
                            );
                            var I;
                        },
                    ),
                    co = (0, o.memo)(({ slots: e, hoveredSlotName: t, onSlotHover: n }) =>
                        r().createElement(
                            'div',
                            { className: 'ViewSlots_base_c5' },
                            r().createElement(
                                'div',
                                { className: 'ViewSlots_panelContent_00' },
                                r().createElement('div', { className: ro }),
                                e.map(
                                    (
                                        {
                                            customizationZone: e,
                                            canUpgrade: a,
                                            levelUpCurrencyNeed: o,
                                            hasNewToys: i,
                                            atmospherePoints: s,
                                            isZoneHovered: u,
                                        },
                                        l,
                                    ) =>
                                        r().createElement(
                                            'div',
                                            { key: `slotId_${e.value}`, className: 'ViewSlots_slot_25' },
                                            r().createElement(lo, {
                                                customizationZone: e,
                                                canUpgrade: a,
                                                levelUpCurrencyNeed: o,
                                                hasNewToys: i,
                                                atmospherePoints: s,
                                                index: l,
                                                isZoneHovered: u,
                                                hoveredSlotName: t,
                                                onSlotHover: n,
                                            }),
                                        ),
                                ),
                                r().createElement('div', { className: ro }),
                            ),
                        ),
                    );
                function _o() {
                    return (
                        (_o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _o.apply(this, arguments)
                    );
                }
                const mo = { slotId: -1, name: '' },
                    po = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = (0, c.GS)().mediaSize,
                            i = a >= c.cJ.Medium,
                            u = t.root.get().switchState,
                            l = t.cityModel.get(),
                            _ = l.showEnvSwitcherTip,
                            d = l.isGuiLootBoxesVisible,
                            m = l.currentSubModel,
                            p = t.customizationObjectModel.get(),
                            E = p.currentLevel,
                            g = p.maxLevel,
                            v = p.currencyCount,
                            b = p.levelUpCurrencyNeed,
                            y = p.atmospherePoints,
                            h = p.toysCount,
                            C = t.customizationObjectCurrencyModel.get().value,
                            A = t.customizationHeaderTitle.get().value,
                            f = t.computes.getCustomizationZones(),
                            B = t.computes.getIsShowLevelUpWidget(),
                            F = t.computes.getEnvironmentSwitcher(),
                            D = 1 === m,
                            S = u === H.WITH_SWITCHING_OBJS,
                            N = (0, o.useState)(!1),
                            T = N[0],
                            k = N[1],
                            x = (0, o.useState)(''),
                            P = x[0],
                            I = x[1],
                            M = (0, o.useState)(D),
                            L = M[0],
                            O = M[1],
                            W = a > c.cJ.Small ? ua.Large : ua.Small,
                            V = (0, o.useState)(!1),
                            $ = V[0],
                            U = V[1],
                            G = (0, o.useState)(!1),
                            j = G[0],
                            z = G[1];
                        (0, o.useEffect)(() => {
                            D || (U(!1), z(!1));
                        }, [D]);
                        const Y = an().run,
                            Z = an(),
                            X = (0, o.useState)(!1),
                            q = X[0],
                            K = X[1];
                        (0, o.useEffect)(() => {
                            if (q) return w(() => K(!1), 2e3);
                        }, [q]);
                        const J = (0, o.useMemo)(
                            () => ({
                                zoneName: A,
                                atmospherePoints: y,
                                toysCount: h,
                                currentLevel: E,
                                currencyCount: v,
                                levelUpCurrencyNeed: b,
                                currencyType: C,
                                onLevelUp: n.onLevelUp,
                                onLevelUpAnimationEnd: n.onLevelUpAnimationEnd,
                            }),
                            [y, n.onLevelUp, v, E, b, C, h, A, n.onLevelUpAnimationEnd],
                        );
                        ((0, o.useEffect)(
                            () =>
                                w(() => {
                                    O(D);
                                }, 300),
                            [D],
                        ),
                            (0, o.useEffect)(() => {
                                ($ &&
                                    D &&
                                    Z.run(() => {
                                        z(!0);
                                    }, 300),
                                    !$ && D && (Z.isRunning && Z.clear(), z(!1)));
                            }, [$]));
                        const Q = (0, o.useRef)(null),
                            ee = (0, o.useCallback)(() => {
                                (k(!0),
                                    Y(() => {
                                        (k(!1), n.onClickSlot(mo));
                                    }, 300));
                            }, [n, Y]);
                        return (
                            (0, o.useEffect)(() => n.onBackButtonVisible(j), [j, n]),
                            r().createElement(
                                'div',
                                {
                                    className: 'NyCityView_base_5b',
                                    onMouseDown: (e) => {
                                        (Q.current && Q.current.contains(e.target)) || ee();
                                    },
                                },
                                D &&
                                    r().createElement(Ca, {
                                        isMaximumZoneLevel: E === g,
                                        isOutAnimation: j,
                                        isCameraInTransition: S,
                                        headerTitle: A,
                                        levelUpWidget: J,
                                        zones: f,
                                        isCustomizationZoneView: D,
                                        onCustomizationZoneClick: n.onCustomizationZoneMove,
                                        isLevelUpWidgetShow: B,
                                    }),
                                r().createElement('div', {
                                    className: s()(
                                        'NyCityView_vignette_80',
                                        !S && 'NyCityView_vignette__notInTransition_ed',
                                    ),
                                }),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'NyCityView_sceneWrapper_3f',
                                            !S && 'NyCityView_sceneWrapper__notInTransition_d5',
                                        ),
                                    },
                                    r().createElement(
                                        da,
                                        {
                                            moveSpace: n.onMoveSpace,
                                            onMouseOver3dScene: n.onMouseOver3dScene,
                                            setMouseDown: U,
                                            isDisabled: S,
                                            isMouseDown: $ || !1,
                                        },
                                        r().createElement(Ma, {
                                            hoveredSlotName: P,
                                            isNotInTransition: !S && !j,
                                            onMarkerHover: I,
                                        }),
                                    ),
                                ),
                                d &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'NyCityView_lootBox_3d',
                                                !S && !j && 'NyCityView_lootBox__notInTransition_72',
                                            ),
                                        },
                                        r().createElement('div', { className: 'NyCityView_lootBoxBg_04' }),
                                        r().createElement(
                                            _a,
                                            _o({}, t.lootboxEntry.get(), {
                                                size: W,
                                                onClick: n.onLootBoxEntryPointClick,
                                            }),
                                        ),
                                    ),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'NyCityView_slots_15',
                                            !S && !j && 'NyCityView_slots__notInTransition_36',
                                        ),
                                    },
                                    L
                                        ? r().createElement(
                                              'div',
                                              { ref: Q },
                                              r().createElement(oo, { carouselHide: T, onCarouselClear: ee }),
                                          )
                                        : r().createElement(co, { slots: f, hoveredSlotName: P, onSlotHover: I }),
                                ),
                                i
                                    ? r().createElement(
                                          'div',
                                          {
                                              className: s()(
                                                  'NyCityView_environmentSwitcher_38',
                                                  !S && !j && 'NyCityView_environmentSwitcher__notInTransition_0f',
                                              ),
                                          },
                                          r().createElement('div', {
                                              className: 'NyCityView_environmentSwitcherBg_0b',
                                          }),
                                          r().createElement(fn, _o({}, F, { handleClick: n.onEnvironmentSwitch })),
                                      )
                                    : r().createElement(
                                          'div',
                                          {
                                              className: s()(
                                                  'NyCityView_environmentSwitcherButton_28',
                                                  !S &&
                                                      !j &&
                                                      'NyCityView_environmentSwitcherButton__notInTransition_a9',
                                              ),
                                          },
                                          r().createElement(Fn, null),
                                      ),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'NyCityView_environmentTip_71',
                                            _ && !S && !j && 'NyCityView_environmentTip__notInTransition_13',
                                        ),
                                    },
                                    r().createElement(kn, {
                                        id: R.views.new_year.lobby.new_year.EnvSwitcherBtnTip('resId'),
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'NyCityView_progressWidget_d9',
                                            L && 'NyCityView_progressWidget__entrance_50',
                                            !S && !j && 'NyCityView_progressWidget__notInTransition_1a',
                                        ),
                                    },
                                    r().createElement(ta, null),
                                ),
                            )
                        );
                    }),
                    Eo = (e, t, n) => (n < e ? e : n > t ? t : n);
                function go() {
                    return (
                        (go =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        go.apply(this, arguments)
                    );
                }
                const vo = (0, o.memo)(
                        ({
                            label: e,
                            onClick: t,
                            type: n = lt.primary,
                            isExternalLink: a = !1,
                            disabled: o = !1,
                            tooltipArgs: i,
                        }) =>
                            r().createElement(
                                Ue,
                                go({}, i, { isEnabled: Boolean(o && i) }),
                                r().createElement(
                                    'div',
                                    { className: 'Button_base_08' },
                                    r().createElement(
                                        pt,
                                        {
                                            type: n,
                                            size: ct.medium,
                                            mixClass: 'Button_button_7a',
                                            onClick: t,
                                            disabled: o,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'Button_label_bf' },
                                            e,
                                            a && r().createElement('div', { className: 'Button_externalLink_39' }),
                                        ),
                                    ),
                                ),
                            ),
                    ),
                    bo = 'SideDescriptionList_rivet_aa';
                function yo() {
                    return (
                        (yo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        yo.apply(this, arguments)
                    );
                }
                const ho = ({
                    button: e,
                    imagePath: t,
                    title: n = '',
                    subtitle: a = '',
                    pointsLength: i = 0,
                    pointsTitle: u = '',
                    notice: l,
                    point: c,
                    action: _,
                    disabled: d = !1,
                }) => {
                    const m = Zn('model.infoModel').onButtonClick,
                        p = (0, o.useCallback)(() => {
                            _ && m({ value: _ });
                        }, [m, _]);
                    return r().createElement(
                        'div',
                        { className: 'SideDescriptionList_base_60' },
                        r().createElement(
                            'div',
                            { className: 'SideDescriptionList_content_56' },
                            r().createElement('div', {
                                className: 'SideDescriptionList_image_73',
                                style: { backgroundImage: `url(${t})` },
                            }),
                            r().createElement(
                                'div',
                                { className: 'SideDescriptionList_info_b6' },
                                r().createElement(Me, { className: 'SideDescriptionList_title_16', text: n }),
                                r().createElement(Me, { className: 'SideDescriptionList_subtitle_81', text: a }),
                                l &&
                                    r().createElement(
                                        'div',
                                        { className: 'SideDescriptionList_noticeContent_2e' },
                                        r().createElement('div', { className: 'SideDescriptionList_noticeBg_5f' }),
                                        r().createElement('div', {
                                            className: s()(bo, 'SideDescriptionList_rivet__left_51'),
                                        }),
                                        r().createElement('div', {
                                            className: s()(bo, 'SideDescriptionList_rivet__right_d0'),
                                        }),
                                        r().createElement(Me, { className: 'SideDescriptionList_text_5c', text: l }),
                                    ),
                                r().createElement(Me, { className: 'SideDescriptionList_points_17', text: u }),
                                Array.from({ length: i }, (e, t) =>
                                    r().createElement(
                                        'div',
                                        { className: 'SideDescriptionList_point_38', key: t + 1 },
                                        r().createElement('div', { className: 'SideDescriptionList_pointImage_7d' }),
                                        r().createElement(Me, {
                                            format: { classMix: 'SideDescriptionList_pointText_8d' },
                                            text: null == c ? void 0 : c.$dyn(`c_${t + 1}`),
                                        }),
                                    ),
                                ),
                            ),
                        ),
                        e &&
                            r().createElement(
                                'div',
                                { className: 'SideDescriptionList_buttonWrapper_a0' },
                                r().createElement(vo, yo({}, e, { disabled: d, onClick: p })),
                            ),
                    );
                };
                function Co() {
                    return (
                        (Co =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Co.apply(this, arguments)
                    );
                }
                const Ao = ({ button: e, slides: t = [], action: n, disabled: a = !1 }) => {
                        const i = Zn('model.infoModel').onButtonClick,
                            s = (0, o.useCallback)(() => {
                                n && i({ value: n });
                            }, [i, n]);
                        return r().createElement(
                            'div',
                            { className: 'SideDescriptionSlide_base_15' },
                            r().createElement(
                                'div',
                                { className: 'SideDescriptionSlide_content_a7' },
                                t.map(({ icon: e, title: t, description: n }, a) =>
                                    r().createElement(
                                        'div',
                                        { className: 'SideDescriptionSlide_slide_44', key: a },
                                        r().createElement('div', {
                                            className: 'SideDescriptionSlide_image_ff',
                                            style: { backgroundImage: `url('${e}')` },
                                        }),
                                        r().createElement(Me, { className: 'SideDescriptionSlide_title_22', text: t }),
                                        r().createElement(Me, {
                                            className: 'SideDescriptionSlide_descriptions_01',
                                            text: n,
                                        }),
                                    ),
                                ),
                            ),
                            e &&
                                r().createElement(
                                    'div',
                                    { className: 'SideDescriptionSlide_buttonWrapper_a9' },
                                    r().createElement(vo, Co({}, e, { disabled: a, onClick: s })),
                                ),
                        );
                    },
                    fo = (0, o.memo)(({ datetime: e, format: t = On.SHORT_DATE, localize: n = !0 }) =>
                        ((e, t, n) => {
                            switch (t) {
                                case On.SHORT_DATE:
                                    return n
                                        ? N.Z5.getDateFormat(e, N.kH.SHORT_FORMAT)
                                        : N.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case On.SHORT_TIME:
                                    return n
                                        ? N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)
                                        : N.cy.getTimeFormat('%I:%M %p', e, !0);
                                case On.SHORT_DATE_TIME:
                                    return n
                                        ? `${N.Z5.getDateFormat(e, N.kH.SHORT_FORMAT)}, ${N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)}`
                                        : N.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case On.FULL_DATE:
                                    return n
                                        ? N.Z5.getDateFormat(e, N.kH.LONG_FORMAT)
                                        : N.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case On.FULL_DATE_TIME:
                                    return n
                                        ? `${N.Z5.getDateFormat(e, N.kH.LONG_FORMAT)}, ${N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)}`
                                        : N.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case On.MONTH:
                                    return N.cy.getTimeFormat('%B', e, !0);
                                case On.MONTH_DATE:
                                    return N.cy.getTimeFormat('%B %e', e, !0);
                                case On.DATE_MONTH:
                                    return N.cy.getTimeFormat('%e %B', e, !0);
                                case On.MONTH_YEAR:
                                    return N.cy.getTimeFormat('%B %Y', e, !0);
                                case On.WEEK_DAY:
                                    return N.cy.getTimeFormat('%A', e, !0);
                                case On.WEEK_DAY_TIME:
                                    return n
                                        ? `${N.cy.getTimeFormat('%A', e, !0)} ${N.Z5.getTimeFormat(e, N.lf.SHORT_FORMAT)}`
                                        : N.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case On.YEAR:
                                    return N.cy.getTimeFormat('%Y', e, !0);
                                case On.DATE_YEAR:
                                    return N.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, t, n),
                    ),
                    Bo = 'VideoCover_playButton_65',
                    Fo = R.images.new_year.gui.maps.icons.newYear.info.video_cover,
                    wo = (0, o.memo)(({ onVideoClicked: e, className: t, classNames: n, onMouseEnter: a }) => {
                        const o = { backgroundImage: `url('${Fo.ru()}')` };
                        return r().createElement(
                            'div',
                            {
                                className: s()('VideoCover_base_92', t),
                                onClick: e,
                                onMouseEnter: () => {
                                    (C.$.playHighlight(), null == a || a());
                                },
                            },
                            r().createElement('div', {
                                className: s()('VideoCover_cover_e2', null == n ? void 0 : n.cover),
                                style: o,
                            }),
                            r().createElement(
                                'div',
                                { className: 'VideoCover_buttonHolder_22' },
                                r().createElement('div', {
                                    className: s()(
                                        Bo,
                                        'VideoCover_playButton__hover_1e',
                                        null == n ? void 0 : n.playButtonHover,
                                    ),
                                }),
                                r().createElement('div', {
                                    className: s()(
                                        Bo,
                                        'VideoCover_playButton__normal_7f',
                                        null == n ? void 0 : n.playButton,
                                    ),
                                }),
                            ),
                        );
                    }),
                    Do = ({ onVideoClicked: e, description: t, startDate: n, endDate: a, title: o }) =>
                        r().createElement(
                            'div',
                            { className: 'VideoSlide_base_b6' },
                            r().createElement(Me, { className: 'VideoSlide_title_86', text: o }),
                            r().createElement(
                                'div',
                                { className: 'VideoSlide_video_5e' },
                                r().createElement(wo, { onVideoClicked: e }),
                            ),
                            t &&
                                r().createElement(Me, {
                                    text: t,
                                    className: 'VideoSlide_description_79',
                                    format: {
                                        binding: {
                                            startDate: r().createElement(fo, { datetime: n, format: On.FULL_DATE }),
                                            endDate: r().createElement(fo, { datetime: a, format: On.FULL_DATE }),
                                        },
                                    },
                                }),
                        ),
                    So = R.strings.ny.newYearInfoView.video,
                    No = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.infoModel.get(),
                            o = a.startDate,
                            i = a.endDate;
                        return r().createElement(Do, {
                            onVideoClicked: n.onVideoCoverClick,
                            startDate: o,
                            endDate: i,
                            title: So.title(),
                            description: So.description(),
                        });
                    });
                let To;
                !(function (e) {
                    ((e[(e.Default = 0)] = 'Default'),
                        (e[(e.Vehicles = 1)] = 'Vehicles'),
                        (e[(e.Leaderboard = 5)] = 'Leaderboard'));
                })(To || (To = {}));
                let ko, xo;
                (!(function (e) {
                    ((e.INTRO = 'Intro'),
                        (e.QUESTS = 'Quests'),
                        (e.CITY = 'City'),
                        (e.BONUS = 'Bonus'),
                        (e.PET = 'Pet'),
                        (e.LEADERBOARD = 'Leaderboard'),
                        (e.BIG_BOXES = 'BigBoxes'),
                        (e.SURPRISE_MACHINE = 'SurpriseMachine'),
                        (e.DAY_NIGHT = 'DayNight'));
                })(ko || (ko = {})),
                    (function (e) {
                        ((e[(e.INTRO = 0)] = 'INTRO'),
                            (e[(e.QUESTS = 1)] = 'QUESTS'),
                            (e[(e.CITY = 2)] = 'CITY'),
                            (e[(e.BONUS = 3)] = 'BONUS'),
                            (e[(e.PET = 4)] = 'PET'),
                            (e[(e.LEADERBOARD = 5)] = 'LEADERBOARD'),
                            (e[(e.BIG_BOXES = 6)] = 'BIG_BOXES'),
                            (e[(e.SURPRISE_MACHINE = 7)] = 'SURPRISE_MACHINE'),
                            (e[(e.DAY_NIGHT = 8)] = 'DAY_NIGHT'));
                    })(xo || (xo = {})));
                const Po = R.strings.ny.newYearInfoView.carousel,
                    Io = R.strings.ny.newYearInfoView,
                    Mo = R.images.new_year.gui.maps.icons.newYear.info,
                    Ro = R.images.new_year.gui.maps.icons.newYear.info.carousel;
                var Lo = n(4119);
                const Oo = (e, t = []) => {
                        const n = (0, o.useRef)(),
                            a = (0, o.useCallback)((...t) => {
                                (n.current && n.current(), (n.current = e(...t)));
                            }, t);
                        return (
                            (0, o.useEffect)(
                                () => () => {
                                    n.current && n.current();
                                },
                                [a],
                            ),
                            a
                        );
                    },
                    Ho = {
                        base: 'Carousel_base_cf',
                        itemsContainer: 'Carousel_itemsContainer_a0',
                        base__withoutScroll: 'Carousel_base__withoutScroll_5f',
                        items: 'Carousel_items_33',
                        item: 'Carousel_item_ba',
                        item__active: 'Carousel_item__active_e7',
                        bg: 'Carousel_bg_72',
                        bgHover: 'Carousel_bgHover_1e',
                        bgHover__show: 'Carousel_bgHover__show_8a',
                        fadeIn: 'Carousel_fadeIn_68',
                        bgImage: 'Carousel_bgImage_e0',
                        text: 'Carousel_text_df',
                        positionArrow: 'Carousel_positionArrow_96',
                        positionArrow__disabled: 'Carousel_positionArrow__disabled_09',
                        positionArrow__prev: 'Carousel_positionArrow__prev_b3',
                        positionArrow__next: 'Carousel_positionArrow__next_79',
                        activeArrow: 'Carousel_activeArrow_24',
                    };
                let Wo;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Wo || (Wo = {}));
                const Vo = {
                        step: { type: 'proportional', factor: 8 },
                        stepByArrow: { type: 'proportional', factor: 5 },
                        animationConfig: { tension: 210, friction: 20 },
                    },
                    $o = (e, t) => {
                        switch (t.type) {
                            case 'proportional':
                                return e.offsetWidth / t.factor;
                            case 'fixed':
                                return t.value;
                        }
                    },
                    Uo = (e) => {
                        var t, n;
                        const a = null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0;
                        return a - e.offsetWidth - 0.04 * a;
                    },
                    Go = Ho.positionArrow__disabled,
                    jo = (e) => {
                        var t;
                        null == (t = e.current) || t.classList.add(Go);
                    },
                    zo = (e) => {
                        var t;
                        null == (t = e.current) || t.classList.remove(Go);
                    },
                    Yo = (e, t) => {
                        const n = Math.min(0, Uo(e));
                        return Eo(n, 0, t);
                    },
                    Zo = r().memo(function ({ className: e, classNames: t, items: n, active: a, onChoose: i }) {
                        const u = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = (0, o.useRef)(!1),
                            m = (0, o.useState)(-1),
                            p = m[0],
                            E = m[1],
                            g = (e) => {
                                const t = y.scrollPosition.goal;
                                (0 === t ? jo(c) : zo(c), _.current && (Uo(e) === t ? jo(_) : zo(_)));
                            },
                            v = () => {
                                var e, t, n;
                                u.current &&
                                    l.current &&
                                    ((null != (t = null == (n = (e = l.current).parentElement) ? void 0 : n.offsetWidth)
                                        ? t
                                        : 0) < e.offsetWidth
                                        ? (g(l.current), u.current.classList.remove(Ho.base__withoutScroll))
                                        : u.current.classList.add(Ho.base__withoutScroll));
                            };
                        ((0, o.useEffect)(v), (0, o.useEffect)(() => Lt(v), []));
                        const b = (0, Lo.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = l.current;
                                    t &&
                                        ((t.style.transform = `translateX(${Math.round(e.value.scrollPosition)}px)`),
                                        g(t));
                                },
                            })),
                            y = b[0],
                            h = b[1],
                            A = (e, t, n) => {
                                const a = y.scrollPosition.get(),
                                    o = y.scrollPosition.goal - a;
                                return Yo(e, t * n + o + a);
                            },
                            f = (0, o.useCallback)(
                                (e, { immediate: t = !1 } = {}) => {
                                    l.current &&
                                        h.start({
                                            scrollPosition: e,
                                            immediate: t,
                                            reset: !0,
                                            from: { scrollPosition: y.scrollPosition.get() },
                                            config: Vo.animationConfig,
                                        });
                                },
                                [y.scrollPosition, h],
                            ),
                            B = (0, o.useCallback)(() => {
                                var e;
                                const t = l.current;
                                if (!t) return;
                                const n = null == (e = l.current) ? void 0 : e.parentElement;
                                if (!n) return;
                                const o = t.children.length - 1,
                                    r = Eo(0, o, a),
                                    i = t.children[r];
                                if (i) {
                                    const e = 0.04 * n.offsetWidth,
                                        a = n.offsetWidth - 2 * e,
                                        o = i.getBoundingClientRect(),
                                        r = o.x,
                                        s = r + o.width + e,
                                        u = y.scrollPosition.goal,
                                        l = a - s;
                                    s > a ? f(Yo(t, u + l)) : r < 0 && f(Yo(t, u - (r - e - i.offsetWidth / 2)));
                                }
                            }, [a, f]);
                        (0, o.useEffect)(() => {
                            if (!d.current)
                                return Lt(() =>
                                    Lt(() => {
                                        (B(), (d.current = !0));
                                    }),
                                );
                            B();
                        }, [B]);
                        const F = (e) => {
                                const t = l.current;
                                if (!t) return;
                                const n = $o(t, Vo.stepByArrow),
                                    a = A(t, e, n);
                                (C.$.playClick(), f(a));
                            },
                            w = () => {
                                C.$.playHighlight();
                            },
                            D = () => {
                                E(-1);
                            },
                            S = Oo(
                                () =>
                                    Lt(() => {
                                        const e = l.current;
                                        e && (f(Yo(e, y.scrollPosition.goal)), v());
                                    }),
                                [f, y.scrollPosition.goal],
                            );
                        return (
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', S),
                                    () => {
                                        window.removeEventListener('resize', S);
                                    }
                                ),
                                [S],
                            ),
                            r().createElement(
                                'div',
                                { className: s()(Ho.base, e), ref: u },
                                r().createElement('div', {
                                    className: s()(
                                        Ho.positionArrow,
                                        Ho.positionArrow__prev,
                                        null == t ? void 0 : t.prevArrow,
                                    ),
                                    ref: c,
                                    onClick: () => F(Wo.Prev),
                                }),
                                r().createElement(
                                    'div',
                                    {
                                        className: Ho.itemsContainer,
                                        onWheel: (e) => {
                                            ((e) => {
                                                const t = l.current;
                                                if (!t) return;
                                                const n = $o(t, Vo.step),
                                                    a = A(t, e, n);
                                                f(a);
                                            })(e.deltaY > 1 ? Wo.Prev : Wo.Next);
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Ho.items, ref: l },
                                        n.map((e, n) =>
                                            r().createElement(
                                                'div',
                                                {
                                                    key: n,
                                                    className: s()(
                                                        Ho.item,
                                                        a === n && s()(Ho.item__active, e.classNameActive),
                                                        e.className,
                                                    ),
                                                    onClick: () =>
                                                        ((e) => {
                                                            i && (C.$.playClick(), i(e), E(-1));
                                                        })(n),
                                                    onMouseEnter: w,
                                                    onMouseOver: () =>
                                                        ((e) => {
                                                            E(e);
                                                        })(n),
                                                    onMouseOut: D,
                                                },
                                                r().createElement(
                                                    'div',
                                                    { className: Ho.bg },
                                                    r().createElement('div', {
                                                        className: s()(Ho.bgHover, n === p && Ho.bgHover__show),
                                                    }),
                                                    r().createElement('div', {
                                                        className: s()(
                                                            Ho.bgImage,
                                                            Ho[`bgImage__${e.slide.toLowerCase()}`],
                                                        ),
                                                        style: { backgroundImage: `url(${e.bgImage})` },
                                                    }),
                                                ),
                                                r().createElement('div', {
                                                    className: s()(Ho.activeArrow, null == t ? void 0 : t.activeArrow),
                                                }),
                                                r().createElement(Me, {
                                                    className: s()(Ho.text, null == t ? void 0 : t.text),
                                                    text: ve(e.text),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                                r().createElement('div', {
                                    className: s()(
                                        Ho.positionArrow,
                                        Ho.positionArrow__next,
                                        null == t ? void 0 : t.nextArrow,
                                    ),
                                    ref: _,
                                    onClick: () => F(Wo.Next),
                                    onMouseEnter: w,
                                }),
                            )
                        );
                    }),
                    Xo = {
                        base: 'Paginator_base_08',
                        arrow: 'Paginator_arrow_d8',
                        arrow__prev: 'Paginator_arrow__prev_83',
                        arrow__next: 'Paginator_arrow__next_49',
                    },
                    qo = ({ className: e, classNames: t, children: n, onPrev: a, onNext: o, onMouseEnter: i }) =>
                        r().createElement(
                            'div',
                            { className: s()(Xo.base, e) },
                            r().createElement('div', { className: s()(Xo.content, null == t ? void 0 : t.content) }, n),
                            r().createElement('div', {
                                className: s()(Xo.arrow, Xo.arrow__prev, null == t ? void 0 : t.prev),
                                onClick: a,
                                onMouseEnter: i,
                            }),
                            r().createElement('div', {
                                className: s()(Xo.arrow, Xo.arrow__next, null == t ? void 0 : t.next),
                                onClick: o,
                                onMouseEnter: i,
                            }),
                        ),
                    Ko = 'NyInfoView_arrow_1b',
                    Jo = 'NyInfoView_arrow__disabled_01';
                function Qo() {
                    return (
                        (Qo =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Qo.apply(this, arguments)
                    );
                }
                const er = R.strings.ny.closeButton,
                    tr = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.infoModel.get(),
                            i = a.hasTamagochiUnlock,
                            u = a.startTab,
                            l =
                                ((c = !i),
                                {
                                    [xo.INTRO]: {
                                        component: No,
                                        carousel: {
                                            text: Po.intro(),
                                            bgImage: Ro.intro(),
                                            isStartTab: !0,
                                            slide: ko.INTRO,
                                        },
                                        props: { disabled: !1 },
                                    },
                                    [xo.QUESTS]: {
                                        component: ho,
                                        carousel: {
                                            text: Po.quests(),
                                            bgImage: Ro.quests(),
                                            isStartTab: !1,
                                            slide: ko.QUESTS,
                                        },
                                        props: {
                                            point: Io.quests.point,
                                            pointsLength: 5,
                                            title: Io.quests.title(),
                                            subtitle: Io.quests.subtitle(),
                                            pointsTitle: Io.quests.pointsTitle(),
                                            imagePath: Mo.quests(),
                                            action: 'quests',
                                            button: { label: Io.quests.button() },
                                            disabled: !1,
                                        },
                                    },
                                    [xo.CITY]: {
                                        component: ho,
                                        carousel: {
                                            text: Po.city(),
                                            bgImage: Ro.city(),
                                            isStartTab: !1,
                                            slide: ko.CITY,
                                        },
                                        props: {
                                            point: Io.city.point,
                                            pointsLength: 4,
                                            title: Io.city.title(),
                                            subtitle: Io.city.subtitle(),
                                            pointsTitle: Io.city.pointsTitle(),
                                            notice: Io.city.notice(),
                                            imagePath: Mo.city(),
                                            action: 'rewards',
                                            button: { label: Io.city.button() },
                                            disabled: !1,
                                        },
                                    },
                                    [xo.BONUS]: {
                                        component: Ao,
                                        carousel: {
                                            text: Po.bonus(),
                                            bgImage: Ro.bonus(),
                                            isStartTab: !1,
                                            slide: ko.BONUS,
                                        },
                                        props: {
                                            slides: [
                                                {
                                                    icon: Mo.bonus_1(),
                                                    title: Io.bonus.title_1(),
                                                    description: Io.bonus.description_1(),
                                                },
                                                {
                                                    icon: Mo.bonus_2(),
                                                    title: Io.bonus.title_2(),
                                                    description: Io.bonus.description_2(),
                                                },
                                            ],
                                            disabled: !1,
                                        },
                                    },
                                    [xo.PET]: {
                                        component: Ao,
                                        carousel: { text: Po.pet(), bgImage: Ro.pet(), isStartTab: !1, slide: ko.PET },
                                        props: {
                                            slides: [
                                                {
                                                    icon: Mo.pet_1(),
                                                    title: Io.pet.title_1(),
                                                    description: Io.pet.description_1(),
                                                },
                                                {
                                                    icon: Mo.pet_2(),
                                                    title: Io.pet.title_2(),
                                                    description: Io.pet.description_2(),
                                                },
                                            ],
                                            action: 'pet',
                                            button: { label: Io.pet.button() },
                                            disabled: c,
                                        },
                                    },
                                    [xo.LEADERBOARD]: {
                                        component: ho,
                                        carousel: {
                                            text: Po.leaderboard(),
                                            bgImage: Ro.leaderboard(),
                                            isStartTab: !1,
                                            slide: ko.LEADERBOARD,
                                        },
                                        props: {
                                            point: Io.leaderboard.point,
                                            pointsLength: 4,
                                            title: Io.leaderboard.title(),
                                            subtitle: Io.leaderboard.subtitle(),
                                            pointsTitle: Io.leaderboard.pointsTitle(),
                                            notice: Io.leaderboard.notice(),
                                            imagePath: Mo.leaderboard(),
                                            action: 'leaders',
                                            button: { label: Io.leaderboard.button() },
                                            disabled: c,
                                        },
                                    },
                                    [xo.BIG_BOXES]: {
                                        component: Ao,
                                        carousel: {
                                            text: Po.bigBoxes(),
                                            bgImage: Ro.bigBoxes(),
                                            isStartTab: !1,
                                            slide: ko.BIG_BOXES,
                                        },
                                        props: {
                                            slides: [
                                                {
                                                    icon: Mo.bigBoxes_1(),
                                                    title: Io.bigBoxes.title_1(),
                                                    description: Io.bigBoxes.description_1(),
                                                },
                                                {
                                                    icon: Mo.bigBoxes_2(),
                                                    title: Io.bigBoxes.title_2(),
                                                    description: Io.bigBoxes.description_2(),
                                                },
                                            ],
                                            action: 'bigBoxes',
                                            button: { type: lt.main, label: Io.bigBoxes.button() },
                                            disabled: !1,
                                        },
                                    },
                                    [xo.SURPRISE_MACHINE]: {
                                        component: ho,
                                        carousel: {
                                            text: Po.surpriseMachine(),
                                            bgImage: Ro.surprise(),
                                            isStartTab: !1,
                                            slide: ko.SURPRISE_MACHINE,
                                        },
                                        props: {
                                            point: Io.surpriseMachine.point,
                                            pointsLength: 2,
                                            title: Io.surpriseMachine.title(),
                                            subtitle: Io.surpriseMachine.subtitle(),
                                            pointsTitle: Io.surpriseMachine.pointsTitle(),
                                            notice: Io.surpriseMachine.notice(),
                                            imagePath: Mo.surpriseMachine(),
                                            action: 'surprise_machine',
                                            button: { label: Io.surpriseMachine.button() },
                                            disabled: !1,
                                        },
                                    },
                                    [xo.DAY_NIGHT]: {
                                        component: ho,
                                        carousel: {
                                            text: Po.dayNight(),
                                            bgImage: Ro.dayNight(),
                                            isStartTab: !1,
                                            slide: ko.DAY_NIGHT,
                                        },
                                        props: {
                                            point: Io.dayNight.point,
                                            pointsLength: 3,
                                            title: Io.dayNight.title(),
                                            subtitle: Io.dayNight.subtitle(),
                                            pointsTitle: Io.dayNight.pointsTitle(),
                                            notice: Io.dayNight.notice(),
                                            imagePath: Mo.dayNight(),
                                            disabled: !1,
                                        },
                                    },
                                });
                        var c;
                        const _ = (0, o.useState)(() => u),
                            d = _[0],
                            m = _[1],
                            p = (0, o.useState)(() => !1),
                            E = p[0],
                            g = p[1],
                            v = Object.keys(l).length,
                            b = 0 === u,
                            y = (0, o.useCallback)(
                                () => Object.values(l).map(({ carousel: e }) => Object.assign({}, e)),
                                [l],
                            ),
                            h = (e) => Eo(0, v - 1, e),
                            A = (e) => h(((e) => e + 1)(e)),
                            f = (e) => h(((e) => e - 1)(e)),
                            B = () => {
                                (C.$.playClick(), m(A));
                            },
                            w = () => {
                                (C.$.playClick(), m(f));
                            },
                            D = 0 === d,
                            N = d === v - 1;
                        (k(S.n.ARROW_RIGHT, () => !N && B()),
                            k(S.n.ARROW_LEFT, () => !D && w()),
                            k(S.n.SPACE, () => !N && B()));
                        const T = an(),
                            P = (0, o.useCallback)(() => {
                                (g(!0),
                                    T.run(() => {
                                        b ? n.onClose() : n.onSwitchContent({ view: on.LEADERS });
                                    }, 300));
                            }, [T, n, b]);
                        var I, M;
                        ((I = () => {
                            m(u);
                        }),
                            (M = []),
                            (0, o.useEffect)(() => {
                                let e = null;
                                return (
                                    (e = requestAnimationFrame(() => {
                                        e = requestAnimationFrame(() => {
                                            ((e = null), I());
                                        });
                                    })),
                                    () => {
                                        null !== e && cancelAnimationFrame(e);
                                    }
                                );
                            }, M),
                            x({ callback: P }));
                        const R = l[d].component,
                            L = l[d].props;
                        return r().createElement(
                            'div',
                            { className: s()('NyInfoView_base_1d', E && 'NyInfoView_base__hide_24') },
                            r().createElement(
                                'div',
                                { className: 'NyInfoView_close_00' },
                                r().createElement(F, {
                                    classNames: { caption: 'NyInfoView_close__caption_fa' },
                                    caption: er.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: P,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'NyInfoView_paginator_c3' },
                                r().createElement(
                                    qo,
                                    {
                                        onNext: B,
                                        onPrev: w,
                                        onMouseEnter: () => C.$.playHighlight(),
                                        classNames: {
                                            content: 'NyInfoView_content_06',
                                            prev: s()(Ko, 'NyInfoView_arrowRight_9d', D && Jo),
                                            next: s()(Ko, 'NyInfoView_arrowLeft_1a', N && Jo),
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'NyInfoView_componentWrapper_43' },
                                        r().createElement(R, Qo({}, L, { key: d })),
                                    ),
                                    r().createElement(Zo, {
                                        items: y(),
                                        active: d,
                                        onChoose: (e) => {
                                            m(e);
                                        },
                                        className: 'NyInfoView_carousel_53',
                                    }),
                                ),
                            ),
                        );
                    });
                let nr, ar;
                (!(function (e) {
                    ((e.Initial = 'initial'), (e.Success = 'success'), (e.Error = 'error'));
                })(nr || (nr = {})),
                    (function (e) {
                        ((e.Page = 'page'), (e.Top = 'top'), (e.Player = 'player'));
                    })(ar || (ar = {})));
                const or = R.strings.ny.leaderboardView.board.error,
                    rr = r().memo(({ onErrorClick: e }) =>
                        r().createElement(
                            'div',
                            { className: 'ErrorState_base_2f' },
                            r().createElement('div', { className: 'ErrorState_errorIcon_09' }),
                            r().createElement(Me, { className: 'ErrorState_errorText_79', text: or.description() }),
                            r().createElement(
                                pt,
                                {
                                    mixClass: 'ErrorState_errorButton_48',
                                    onClick: e,
                                    type: lt.primary,
                                    soundHover: 'highlight',
                                    soundClick: 'play',
                                },
                                r().createElement('div', { className: 'ErrorState_refreshIcon_4b' }),
                                r().createElement(Me, {
                                    className: 'ErrorState_errorButtonText_ed',
                                    text: or.button(),
                                }),
                            ),
                        ),
                    );
                let ir, sr, ur;
                (!(function (e) {
                    ((e.Top = 'top'),
                        (e.PersonalPosition = 'personalPosition'),
                        (e.Page = 'page'),
                        (e.FirstEnterance = 'firstEnterance'));
                })(ir || (ir = {})),
                    (function (e) {
                        ((e.Top = 'top'), (e.Bottom = 'bottom'), (e.InTable = 'inTable'));
                    })(sr || (sr = {})),
                    (function (e) {
                        ((e.PrevClick = 'prevClick'), (e.NextClick = 'nextClick'));
                    })(ur || (ur = {})));
                const lr = {
                    base: 'Pagination_base_cb',
                    pageButton: 'Pagination_pageButton_8b',
                    pageButton__active: 'Pagination_pageButton__active_67',
                    pageButton__inactive: 'Pagination_pageButton__inactive_f7',
                    pageButton__hovered: 'Pagination_pageButton__hovered_ff',
                    pageButton__disabled: 'Pagination_pageButton__disabled_fd',
                    pageBg: 'Pagination_pageBg_66',
                    pageValue: 'Pagination_pageValue_1e',
                    control: 'Pagination_control_60',
                    control__active: 'Pagination_control__active_41',
                    control__prev: 'Pagination_control__prev_35',
                    control__next: 'Pagination_control__next_05',
                    control__hovered: 'Pagination_control__hovered_22',
                };
                let cr;
                !(function (e) {
                    ((e.Active = 'active'), (e.Inactive = 'inactive'), (e.Disabled = 'disabled'));
                })(cr || (cr = {}));
                const _r = R.strings.ny.leaderboardView.board.pagination,
                    dr = Math.trunc(4),
                    mr = ({ pagesAmount: e, activePage: t, className: n, onPageClick: a, onControlEvent: i }) => {
                        const u = t > 1,
                            l = t < e,
                            c = e < 9 ? e : 9,
                            _ = (0, o.useState)(null),
                            d = _[0],
                            m = _[1],
                            p = (e, t) => {
                                t === cr.Inactive && (C.$.playHighlight(), m(e));
                            },
                            E = () => {
                                m(null);
                            },
                            g = (e) => () => {
                                null == i || i(e);
                            };
                        return r().createElement(
                            'div',
                            { className: s()(lr.base, n) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        lr.control,
                                        lr.control__prev,
                                        u && lr.control__active,
                                        -1 === d && u && lr.control__hovered,
                                    ),
                                    onClick: u ? g(ur.PrevClick) : void 0,
                                    onMouseEnter: () => p(-1, u ? cr.Inactive : cr.Disabled),
                                    onMouseLeave: E,
                                },
                                r().createElement(Me, { text: _r.prev() }),
                            ),
                            Ja(c, (n) => {
                                const o = ((e, t, n) => {
                                        const a = t > dr + 1,
                                            o = n > 9 && t + dr < n;
                                        return n <= 9
                                            ? e + 1
                                            : 0 === e
                                              ? 1
                                              : (1 === e && a) || (7 === e && o)
                                                ? _r.dots()
                                                : 8 === e
                                                  ? n
                                                  : a && !o
                                                    ? n - 8 + e
                                                    : !a && o
                                                      ? e + 1
                                                      : e - dr + t;
                                    })(n, t, e),
                                    i = ((e, t) =>
                                        Number.isInteger(e) ? (t === e ? cr.Active : cr.Inactive) : cr.Disabled)(o, t);
                                return r().createElement(
                                    'div',
                                    {
                                        key: n,
                                        className: s()(
                                            lr.pageButton,
                                            lr[`pageButton__${i}`],
                                            d === n && lr.pageButton__hovered,
                                        ),
                                        onClick:
                                            i !== cr.Disabled && i !== cr.Active && 'number' == typeof o
                                                ? ((u = o),
                                                  () => {
                                                      (null == a || a(u), m(null));
                                                  })
                                                : void 0,
                                        onMouseEnter: () => p(n, i),
                                        onMouseLeave: E,
                                    },
                                    r().createElement('div', { className: lr.pageBg }),
                                    r().createElement(Me, { className: lr.pageValue, text: String(o) }),
                                );
                                var u;
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        lr.control,
                                        lr.control__next,
                                        l && lr.control__active,
                                        d === c && l && lr.control__hovered,
                                    ),
                                    onClick: l ? g(ur.NextClick) : void 0,
                                    onMouseEnter: () => p(c, l ? cr.Inactive : cr.Disabled),
                                    onMouseLeave: E,
                                },
                                r().createElement(Me, { text: _r.next() }),
                            ),
                        );
                    };
                let pr;
                !(function (e) {
                    ((e.NoChanges = 'noChanges'), (e.Up = 'up'), (e.Down = 'down'));
                })(pr || (pr = {}));
                const Er = {
                        base: 'PlayerRow_base_3b',
                        base__white: 'PlayerRow_base__white_4e',
                        base__empty: 'PlayerRow_base__empty_ae',
                        bg: 'PlayerRow_bg_65',
                        bgHovered: 'PlayerRow_bgHovered_84',
                        base__hovered: 'PlayerRow_base__hovered_f8',
                        content: 'PlayerRow_content_92',
                        position: 'PlayerRow_position_3b',
                        position__footerRow: 'PlayerRow_position__footerRow_1b',
                        positionText: 'PlayerRow_positionText_b1',
                        base__footerRow: 'PlayerRow_base__footerRow_23',
                        base__personal: 'PlayerRow_base__personal_0b',
                        positionText__position1: 'PlayerRow_positionText__position1_06',
                        positionText__position2: 'PlayerRow_positionText__position2_b2',
                        positionText__position3: 'PlayerRow_positionText__position3_e3',
                        dynamics: 'PlayerRow_dynamics_70',
                        positionIcon: 'PlayerRow_positionIcon_f4',
                        positionIcon__noChanges: 'PlayerRow_positionIcon__noChanges_3c',
                        positionIcon__up: 'PlayerRow_positionIcon__up_04',
                        cellDivider: 'PlayerRow_cellDivider_32',
                        cellDivider__first: 'PlayerRow_cellDivider__first_2a',
                        userName: 'PlayerRow_userName_fa',
                        userNameText: 'PlayerRow_userNameText_e5',
                        score: 'PlayerRow_score_ba',
                        scoreText: 'PlayerRow_scoreText_f3',
                    },
                    gr = R.strings.ny.leaderboardView.tooltips.board.row.dynamics,
                    vr = r().memo(
                        ({
                            position: e,
                            positionType: t,
                            userName: n,
                            score: a,
                            index: i,
                            isPersonal: u,
                            isFooterRow: l,
                            isTopRow: c,
                            isEmpty: _,
                        }) => {
                            const d = !l && 0 === i,
                                m = (0, o.useState)(!1),
                                p = m[0],
                                E = m[1],
                                g = s()(
                                    Er.base,
                                    l && Er.base__footerRow,
                                    u && Er.base__personal,
                                    p && Er.base__hovered,
                                    _ && Er.base__empty,
                                    void 0 !== i && i % 2 == 0 && !l && !u && Er.base__white,
                                );
                            return r().createElement(
                                'div',
                                {
                                    className: g,
                                    style: { '--rowHeight': '44rem' },
                                    onMouseEnter: () => {
                                        l && (C.$.playHighlight(), E(!0));
                                    },
                                    onMouseLeave: () => {
                                        E(!1);
                                    },
                                },
                                (l || u) &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: Er.bg }),
                                        l && r().createElement('div', { className: Er.bgHovered }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: Er.content },
                                    r().createElement(
                                        'div',
                                        { className: s()(Er.position, l && !c && Er.position__footerRow) },
                                        !_ &&
                                            r().createElement(
                                                'div',
                                                { className: s()(Er.positionText, Er[`positionText__position${e}`]) },
                                                r().createElement(J, { value: e || 0 }),
                                            ),
                                    ),
                                    r().createElement('div', {
                                        className: s()(Er.cellDivider, d && Er.cellDivider__first),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: Er.dynamics },
                                        !_ &&
                                            r().createElement(
                                                Re.u,
                                                {
                                                    contentId:
                                                        R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                                    args: { description: gr.$dyn(t || pr.NoChanges) },
                                                },
                                                r().createElement('div', {
                                                    className: s()(Er.positionIcon, Er[`positionIcon__${t}`]),
                                                }),
                                            ),
                                    ),
                                    r().createElement('div', {
                                        className: s()(Er.cellDivider, d && Er.cellDivider__first),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: Er.userName },
                                        !_ && r().createElement(Me, { className: Er.userNameText, text: n || '' }),
                                    ),
                                    r().createElement('div', {
                                        className: s()(Er.cellDivider, d && Er.cellDivider__first),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: Er.score },
                                        r().createElement(
                                            'div',
                                            { className: Er.scoreText },
                                            !_ && r().createElement(J, { value: a || 0 }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
                function br() {
                    return (
                        (br =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        br.apply(this, arguments)
                    );
                }
                const yr = R.strings.ny.leaderboardView.board,
                    hr = r().memo(
                        ({
                            isPersonalInBottom: e,
                            pointsToTop: t,
                            selfRank: n,
                            pagesCount: a,
                            currentPage: o,
                            isVisibleShadow: i,
                            onPersonalClick: u,
                            onPageClick: l,
                            onControlEvent: c,
                        }) => {
                            const _ = 0 === t;
                            return r().createElement(
                                'div',
                                { className: 'BoardFooter_base_88' },
                                i &&
                                    r().createElement('div', {
                                        className: s()(
                                            'BoardFooter_footerShadow_e7',
                                            e && 'BoardFooter_footerShadow__personalBottom_14',
                                        ),
                                    }),
                                e &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'BoardFooter_selfPosition_ef',
                                                !_ && 'BoardFooter_selfPosition__underRate_a3',
                                            ),
                                        },
                                        _
                                            ? r().createElement(
                                                  'div',
                                                  { className: 'BoardFooter_selfRow_ef', onClick: u },
                                                  r().createElement(vr, br({}, n, { isFooterRow: !0 })),
                                              )
                                            : r().createElement(Me, {
                                                  className: 'BoardFooter_selfPositionText_bf',
                                                  text: yr.selfPosition(),
                                                  format: {
                                                      binding: {
                                                          points: r().createElement(Me, {
                                                              className: 'BoardFooter_pointsToTop_86',
                                                              text: String(t),
                                                          }),
                                                      },
                                                  },
                                              }),
                                    ),
                                a > 1 &&
                                    r().createElement(mr, {
                                        pagesAmount: a,
                                        activePage: o,
                                        onPageClick: l,
                                        onControlEvent: c,
                                    }),
                            );
                        },
                    ),
                    Cr = 'BoardHeading_headingCell_e1',
                    Ar = 'BoardHeading_headingCellText_16',
                    fr = 'BoardHeading_headingCellDivider_9d',
                    Br = R.strings.ny.leaderboardView.board.header,
                    Fr = r().memo(() =>
                        r().createElement(
                            'div',
                            { className: 'BoardHeading_base_f3' },
                            r().createElement(
                                'div',
                                { className: s()(Cr, 'BoardHeading_headingCell__place_b9') },
                                r().createElement(Me, { className: Ar, text: Br.place() }),
                            ),
                            r().createElement('div', { className: fr }),
                            r().createElement(
                                'div',
                                { className: s()(Cr, 'BoardHeading_headingCell__dynamics_ad') },
                                r().createElement(Me, { className: Ar, text: Br.dynamics() }),
                            ),
                            r().createElement('div', { className: fr }),
                            r().createElement(
                                'div',
                                { className: s()(Cr, 'BoardHeading_headingCell__nick_9b') },
                                r().createElement(Me, { className: Ar, text: Br.nickname() }),
                            ),
                            r().createElement('div', { className: fr }),
                            r().createElement(
                                'div',
                                { className: s()(Cr, 'BoardHeading_headingCell__points_80') },
                                r().createElement(Me, { className: Ar, text: Br.points() }),
                            ),
                        ),
                    );
                function wr(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const Dr = [];
                function Sr(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), Dr)
                    );
                }
                let Nr;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(Nr || (Nr = {}));
                const Tr = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    kr = (({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, n) => {
                            const a = t(e),
                                o = a[0],
                                r = a[1];
                            return Eo(o, r, n);
                        };
                        return (u = {}) => {
                            const l = u.settings,
                                c = void 0 === l ? Tr : l,
                                _ = (0, o.useRef)(null),
                                d = (0, o.useRef)(null),
                                m = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (
                                                var a,
                                                    o = (function (e, t) {
                                                        var n =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (n) return (n = n.call(e)).next.bind(n);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (n = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return wr(e, t);
                                                                    var n = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === n &&
                                                                            e.constructor &&
                                                                            (n = e.constructor.name),
                                                                        'Map' === n || 'Set' === n
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === n ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    n,
                                                                                )
                                                                              ? wr(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            n && (e = n);
                                                            var a = 0;
                                                            return function () {
                                                                return a >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[a++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(t(e).values());
                                                !(a = o()).done;
                                            )
                                                (0, a.value)(...n);
                                        };
                                    return (0, o.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                p = (function (e, t, n) {
                                    const a = (0, o.useMemo)(
                                        () =>
                                            (function (e, t, n, a) {
                                                let o,
                                                    r = !1,
                                                    i = 0;
                                                function s() {
                                                    o && clearTimeout(o);
                                                }
                                                function u(...u) {
                                                    const l = this,
                                                        c = Date.now() - i;
                                                    function _() {
                                                        ((i = Date.now()), n.apply(l, u));
                                                    }
                                                    r ||
                                                        (a && !o && _(),
                                                        s(),
                                                        void 0 === a && c > e
                                                            ? _()
                                                            : !0 !== t &&
                                                              (o = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            o = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                                    (u.cancel = function () {
                                                        (s(), (r = !0));
                                                    }),
                                                    u
                                                );
                                            })(n, e),
                                        t,
                                    );
                                    return ((0, o.useEffect)(() => a.cancel, [a]), a);
                                })(
                                    () => {
                                        D.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                E = (0, aa.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = _.current;
                                        t && (n(t, e), m.trigger('change', e), i && p());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                g = E[0],
                                v = E[1],
                                b = (0, o.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const o = g.scrollPosition.get(),
                                            r = (null != (a = g.scrollPosition.goal) ? a : 0) - o;
                                        return s(e, t * n + r + o);
                                    },
                                    [g.scrollPosition],
                                ),
                                y = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = _.current;
                                        a &&
                                            v.start({
                                                scrollPosition: s(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: s(a, g.scrollPosition.get()) },
                                            });
                                    },
                                    [v, c.animationConfig, g.scrollPosition],
                                ),
                                h = (0, o.useCallback)(
                                    (e) => {
                                        const t = _.current,
                                            n = d.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            o = b(t, e, a);
                                        y(o);
                                    },
                                    [y, b, c.step],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && h(a(e)),
                                            _.current && m.trigger('mouseWheel', e, g.scrollPosition, t(_.current)));
                                    },
                                    [g.scrollPosition, h, m],
                                ),
                                A = Oo(
                                    () =>
                                        Lt(() => {
                                            const e = _.current;
                                            e &&
                                                (y(s(e, g.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [y, g.scrollPosition.goal],
                                ),
                                f = Sr(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = s(e, g.scrollPosition.goal);
                                    (t !== g.scrollPosition.goal && y(t, { immediate: !0 }),
                                        m.trigger('recalculateContent'));
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', A),
                                    () => {
                                        window.removeEventListener('resize', A);
                                    }
                                ),
                                [A],
                            );
                            const B = (0, o.useCallback)((e) => m.trigger('isThumbDraggingChanged', e), [m]);
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? t(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: C,
                                    applyScroll: y,
                                    applyStepTo: h,
                                    contentRef: _,
                                    wrapperRef: d,
                                    scrollPosition: v,
                                    animationScroll: g,
                                    recalculateContent: f,
                                    handleIsThumbDragging: B,
                                    events: { on: m.on, off: m.off },
                                }),
                                [g.scrollPosition, y, h, B, m.off, m.on, f, C, v, c.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Nr.Next : Nr.Prev),
                    }),
                    xr = 'VerticalBar_base__nonActive_42',
                    Pr = 'disable',
                    Ir = () => {},
                    Mr = { pending: !1, offset: 0 },
                    Rr = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Lr = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Or = (e, t) => Math.max(20, e.offsetHeight * t),
                    Hr = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Rr, onDrag: a = Ir }) => {
                        const i = (0, o.useRef)(null),
                            u = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            _ = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, o.useState)(Mr),
                            p = m[0],
                            E = m[1],
                            g = (0, o.useCallback)(
                                (e) => {
                                    (E(e),
                                        _.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current }));
                                },
                                [a],
                            ),
                            v = Sr(() => {
                                const t = _.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(a && o && t && n)) return;
                                const r = Math.min(1, a / o);
                                return (
                                    (t.style.height = `${Or(n, r)}px`),
                                    t.classList.add('VerticalBar_thumb_32'),
                                    i.current &&
                                        (1 === r ? i.current.classList.add(xr) : i.current.classList.remove(xr)),
                                    r
                                );
                            }),
                            b = Sr(() => {
                                const t = c.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(a && t && n && o)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / o),
                                    s = Eo(0, 1, r / (o - a)),
                                    d = (t.offsetHeight - Or(t, i)) * s;
                                ((n.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (u.current && l.current && c.current && _.current) {
                                            if (0 === e)
                                                return (
                                                    u.current.classList.add(Pr),
                                                    void l.current.classList.remove(Pr)
                                                );
                                            if (
                                                ((t = c.current),
                                                (n = _.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    u.current.classList.remove(Pr),
                                                    void l.current.classList.add(Pr)
                                                );
                                            var t, n;
                                            (u.current.classList.remove(Pr), l.current.classList.remove(Pr));
                                        }
                                    })(d));
                            }),
                            y = Sr(() => {
                                Lr(e, () => {
                                    (v(), b());
                                });
                            });
                        ((0, o.useEffect)(() => Lt(y)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    Lr(e, () => {
                                        b();
                                    });
                                };
                                let n = Ir;
                                const a = () => {
                                    (n(), (n = Lt(y)));
                                };
                                return (
                                    e.events.on('recalculateContent', y),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', y),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!p.pending) return;
                                const t = (t) => {
                                        Lr(e, (n) => {
                                            const o = c.current,
                                                r = _.current,
                                                i = e.getContainerSize();
                                            if (!o || !r || !i) return;
                                            const s = t.screenY - p.offset - o.getBoundingClientRect().y,
                                                u = (s / o.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, u),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: r, thumbOffset: s, contentOffset: u }));
                                        });
                                    },
                                    n = () => {
                                        (window.removeEventListener('mousemove', t),
                                            e.handleIsThumbDragging(!1),
                                            g(Mr));
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        (window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n));
                                    }
                                );
                            }, [e, p.offset, p.pending, a, g]));
                        const h = (function (e, t, n = []) {
                                const a = (0, o.useRef)(0),
                                    r = (0, o.useCallback)(() => window.clearInterval(a.current), n || []);
                                (0, o.useEffect)(() => r, [r]);
                                const i = (null != n ? n : []).concat([t]);
                                return [
                                    (0, o.useCallback)((n) => {
                                        ((a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                                    }, i),
                                    r,
                                ];
                            })((t) => e.applyStepTo(t), d, [e]),
                            A = h[0],
                            f = h[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const B = (e) => {
                            e.target.classList.contains(Pr) || (0, C.G)('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: s()('VerticalBar_base_f3', t.base), ref: i, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: s()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Pr) || 0 !== e.button || ((0, C.G)('play'), A(Nr.Next));
                                },
                                ref: u,
                                onMouseEnter: B,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: s()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        var o;
                                        a &&
                                            0 === t.button &&
                                            ((0, C.G)('play'),
                                            t.target === a
                                                ? (e.handleIsThumbDragging(!0),
                                                  g({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y }))
                                                : ((o = t.screenY > a.getBoundingClientRect().y ? Nr.Prev : Nr.Next),
                                                  _.current &&
                                                      Lr(e, (t) => {
                                                          if (!t) return;
                                                          const a = n(e),
                                                              r = e.clampPosition(t, t.scrollTop + a * o);
                                                          e.applyScroll(r);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: B,
                                },
                                r().createElement('div', { ref: _, className: t.thumb }),
                                r().createElement('div', { className: s()('VerticalBar_rail_43', t.rail) }),
                            ),
                            r().createElement('div', {
                                className: s()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Pr) || 0 !== e.button || ((0, C.G)('play'), A(Nr.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: B,
                            }),
                        );
                    }),
                    Wr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Vr = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, o.useEffect)(() => Lt(a.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: s()(Wr.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: s()(Wr.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                Vr.Default = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: a,
                    areaClassName: i,
                    scrollClassName: u,
                    scrollClassNames: l,
                    getStepByRailClick: c,
                    onDrag: _,
                }) => {
                    const d = (0, o.useMemo)(() => {
                            const e = a || {};
                            return Object.assign({}, e, { base: s()(Wr.base, e.base) });
                        }, [a]),
                        m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return r().createElement(
                        'div',
                        { className: s()(Wr.defaultScroll, n), onWheel: t.handleMouseWheel },
                        r().createElement(
                            'div',
                            { className: s()(Wr.area, i) },
                            r().createElement(Vr, { className: u, classNames: l, api: m }, e),
                        ),
                        r().createElement(Hr, { getStepByRailClick: c, api: t, onDrag: _, classNames: d }),
                    );
                };
                const $r = {
                        base: 'TopDivider_base_dd',
                        bg: 'TopDivider_bg_0d',
                        content: 'TopDivider_content_4b',
                        icon: 'TopDivider_icon_2f',
                        textWrapper: 'TopDivider_textWrapper_9e',
                        topText: 'TopDivider_topText_19',
                        topText__position1: 'TopDivider_topText__position1_8e',
                        topText__position2: 'TopDivider_topText__position2_20',
                        topText__position3: 'TopDivider_topText__position3_de',
                        topText__withMargin: 'TopDivider_topText__withMargin_d5',
                        placesDescription: 'TopDivider_placesDescription_e6',
                        placesText: 'TopDivider_placesText_1d',
                    },
                    Ur = R.strings.ny.leaderboardView.board,
                    Gr = 'R.images.new_year.gui.maps.icons.newYear.mainView.leaderboard.board',
                    jr = r().memo(({ top: e, height: t, startPos: n, endPos: a, isLargeMedia: o }) => {
                        const i = Boolean(n) && Boolean(a);
                        return r().createElement(
                            'div',
                            { className: $r.base, style: { '--topDividerHeight': `${t}rem` } },
                            r().createElement('div', {
                                className: $r.bg,
                                style: { backgroundImage: `url(${Gr}.topRows.boardRowTopBg${o ? '_l' : ''}_${e})` },
                            }),
                            r().createElement(
                                'div',
                                { className: $r.content },
                                r().createElement('div', {
                                    className: $r.icon,
                                    style: {
                                        backgroundImage: `url(${Gr}.${o ? 'tabs.boardTop' : 'topRows.topIcon'}_${e})`,
                                    },
                                }),
                                r().createElement(
                                    'div',
                                    { className: $r.textWrapper },
                                    r().createElement(Me, {
                                        className: s()(
                                            $r.topText,
                                            $r[`topText__position${e}`],
                                            i && $r.topText__withMargin,
                                        ),
                                        text: Ur.rowTop(),
                                        format: { binding: { top: e } },
                                    }),
                                    i &&
                                        r().createElement(Me, {
                                            className: s()($r.placesDescription),
                                            text: Ur.rowTopPlaces.description(),
                                            format: {
                                                binding: {
                                                    places: r().createElement(Me, {
                                                        className: $r.placesText,
                                                        text: Ur.rowTopPlaces.places(),
                                                        format: { binding: { startPos: n, endPos: a } },
                                                    }),
                                                },
                                            },
                                        }),
                                ),
                            ),
                        );
                    }),
                    zr = ['top'];
                function Yr() {
                    return (
                        (Yr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Yr.apply(this, arguments)
                    );
                }
                const Zr = D.O.view.remToPx(44),
                    Xr = D.O.view.remToPx(30),
                    qr = D.O.view.remToPx(5),
                    Kr = {
                        settings: Object.assign({}, Tr, {
                            animationConfig: Object.assign({}, Tr.animationConfig, { round: 1 }),
                        }),
                    },
                    Jr = (0, L.observer)(
                        ({
                            firstTabs: e,
                            initialTabs: t,
                            isLargeMedia: n,
                            isContentTransparent: a,
                            visibleRowsInBoardSized: i,
                            isPersonalInBottom: u,
                            isPersonalPositionInTop: l,
                            isVisibleShadow: c,
                            positionToScroll: _,
                            isPersonalPositionInPage: d,
                            onPersonalClick: m,
                            onSetCurrentTabs: p,
                            onSetIsVisibleShadow: E,
                            onSetPersonalRowPosition: g,
                            onSetPositionToScroll: v,
                        }) => {
                            const b = nn().model,
                                y = b.computes.getLeaderboardModel(),
                                h = y.pointsToTop,
                                C = y.isLoading,
                                A = y.selfRank,
                                f = y.players,
                                B = y.currentPage,
                                F = kr(Kr),
                                w = F.animationScroll.scrollPosition,
                                S = F.applyScroll,
                                N = F.events,
                                T = F.getBounds,
                                k = n ? 64 : 48,
                                x = D.O.view.remToPx(k),
                                P = 25 * Zr + x,
                                I = 1 * P,
                                M = i / 2,
                                R = Zr * (i - 1),
                                L = R + Zr / 2 + (n ? Xr : Zr),
                                O = 0 === h,
                                H = f.length,
                                W = A.position % 50,
                                V = 0 === W,
                                $ = V ? 49 : W - 1,
                                U = b.computes.getLeaderboardTopsBeforePersonal($ + 1).length,
                                G = U > 0,
                                j = U * x,
                                z = G ? j : 0,
                                Y = G ? R + j : R,
                                Z = Zr * $,
                                X = Math.max(0, Zr * ($ - M)),
                                q = Z + z,
                                K = X + z;
                            return (
                                (0, o.useEffect)(
                                    () =>
                                        Lt(() => {
                                            if (!C && _) {
                                                const n = T()[1],
                                                    a = Math.min(n, K);
                                                switch (_.type) {
                                                    case ir.Top:
                                                        if (_.top) {
                                                            const t = 100 === _.top ? I : 0,
                                                                n = e.includes(_.top) ? t : 0;
                                                            S(n);
                                                        }
                                                        break;
                                                    case ir.PersonalPosition:
                                                        (p(t), S(a));
                                                        break;
                                                    case ir.FirstEnterance:
                                                        d && (p(t), S(a));
                                                        break;
                                                    case ir.Page:
                                                        (p(t), S(0));
                                                }
                                                (d && q - Y <= 0 && g(sr.InTable), d || g(sr.Bottom), v(null));
                                            }
                                        }),
                                    [e, I, t, C, d, q, K, _, x, Y, S, T, p, g, v],
                                ),
                                (0, o.useEffect)(() => {
                                    const t = () => {
                                        if ((1 === B && p(w.goal >= I ? [100] : e.filter((e) => w.goal < P * e)), d)) {
                                            if (
                                                (w.goal > q ? g(sr.Top) : w.goal < q - L ? g(sr.Bottom) : g(sr.InTable),
                                                V)
                                            ) {
                                                const e = T()[1];
                                                w.goal < e - qr ? E(!0) : E(!1);
                                            }
                                        } else (E(!0), g(sr.Bottom));
                                    };
                                    return (N.on('change', t), () => N.off('change', t));
                                }, [B, N, e, P, I, V, d, q, L, w.goal, T, p, g, E]),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'BoardRows_base_62',
                                            !O && 'BoardRows_base__underRated_95',
                                            a && 'BoardRows_base__transparent_6a',
                                        ),
                                    },
                                    l &&
                                        r().createElement(
                                            'div',
                                            { className: 'BoardRows_selfPosition_d6' },
                                            r().createElement(
                                                'div',
                                                { className: 'BoardRows_selfRow_cc', onClick: m },
                                                r().createElement(vr, Yr({}, A, { isFooterRow: !0, isTopRow: !0 })),
                                            ),
                                            r().createElement('div', { className: 'BoardRows_boardTopShadow_d8' }),
                                        ),
                                    r().createElement(
                                        Vr,
                                        {
                                            api: F,
                                            className: s()(
                                                'BoardRows_area_5c',
                                                (!O || !c || !u) && 'BoardRows_area__noAlpha_7b',
                                                l && 'BoardRows_area__topAlpha_79',
                                            ),
                                        },
                                        f.map((e, t) => {
                                            let a = e.top,
                                                o = (function (e, t) {
                                                    if (null == e) return {};
                                                    var n,
                                                        a,
                                                        o = {},
                                                        r = Object.keys(e);
                                                    for (a = 0; a < r.length; a++)
                                                        ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                                    return o;
                                                })(e, zr);
                                            return a
                                                ? r().createElement(
                                                      jr,
                                                      Yr({ key: t }, o, { top: a, height: k, isLargeMedia: n }),
                                                  )
                                                : r().createElement(
                                                      vr,
                                                      Yr({ key: t }, o, {
                                                          index: t,
                                                          isPersonal: o.position === A.position,
                                                      }),
                                                  );
                                        }),
                                        Ja(Math.max(0, i - H + (O ? 1 : 0)), (e) =>
                                            r().createElement(vr, { key: `empty-${e}`, index: H + e, isEmpty: !0 }),
                                        ),
                                        H >= i &&
                                            !d &&
                                            O &&
                                            r().createElement('div', { className: 'BoardRows_playerEmptyRow_bc' }),
                                    ),
                                    r().createElement(Hr, { api: F, classNames: { base: 'BoardRows_bar_b7' } }),
                                )
                            );
                        },
                    ),
                    Qr = R.strings.ny.leaderboardView.board,
                    ei = R.strings.ny.leaderboardView.tooltips.board.tab,
                    ti = r().memo(({ tabs: e, currentTabs: t, onGetTableRecords: n }) => {
                        const a = (0, o.useState)(null),
                            i = a[0],
                            u = a[1],
                            l = () => {
                                u(null);
                            };
                        return r().createElement(
                            'div',
                            { className: 'BoardTabs_base_0d' },
                            e.map(({ top: a, isAvailable: o }, c) =>
                                r().createElement(
                                    Re.u,
                                    {
                                        key: a,
                                        contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                        args: {
                                            description: Ee(
                                                o ? ei.available.description() : ei.disabled.description(),
                                                { top: a },
                                            ),
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'BoardTabs_tab_43',
                                                !o && 'BoardTabs_tab__unavailable_fe',
                                                i === c && !t.includes(a) && 'BoardTabs_tab__hovered_81',
                                                t.includes(a) && 'BoardTabs_tab__active_ca',
                                            ),
                                            onClick: () =>
                                                ((e, t) => {
                                                    t && n(e);
                                                })(a, o),
                                            onMouseEnter: () =>
                                                ((n) => {
                                                    const a = e[n],
                                                        o = a.top;
                                                    a.isAvailable && (C.$.playHighlight(), t.includes(o) || u(n));
                                                })(c),
                                            onMouseLeave: l,
                                        },
                                        r().createElement('div', { className: 'BoardTabs_tabBg_cf' }),
                                        r().createElement('div', { className: 'BoardTabs_tabBgHovered_c8' }),
                                        r().createElement('div', { className: 'BoardTabs_tabBgActive_45' }),
                                        r().createElement(
                                            'div',
                                            { className: 'BoardTabs_tabContent_ab' },
                                            r().createElement('div', {
                                                className: 'BoardTabs_tabIcon_8e',
                                                style: {
                                                    backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.mainView.leaderboard.board.tabs.boardTop_${a})`,
                                                },
                                            }),
                                            r().createElement(Me, {
                                                className: 'BoardTabs_tabText_4f',
                                                text: Qr.top(),
                                                format: { binding: { top: r().createElement(J, { value: a }) } },
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ni = 'InitialState_emptyText_d7',
                    ai = R.strings.ny.leaderboardView.board.noRecords,
                    oi = r().memo(({ visibleRowsInBoardSized: e, isContentTransparent: t }) =>
                        r().createElement(
                            'div',
                            { className: s()('InitialState_base_b8', t && 'InitialState_base__transparent_68') },
                            r().createElement(
                                'div',
                                { className: 'InitialState_emptyRows_27' },
                                Ja(e, (e) => r().createElement(vr, { key: `empty-${e}`, index: e, isEmpty: !0 })),
                            ),
                            r().createElement(
                                'div',
                                { className: 'InitialState_emptyContent_d5' },
                                r().createElement('div', { className: 'InitialState_emptyIcon_93' }),
                                r().createElement(Me, { className: ni, text: ai.header() }),
                                r().createElement(Me, { className: s()(ni), text: ai.body() }),
                            ),
                        ),
                    ),
                    ri = (0, L.observer)(({ isFirstEnter: e }) => {
                        const t = nn(),
                            n = t.model,
                            a = t.controls,
                            i = n.computes.getLeaderboardModel(),
                            u = i.pointsToTop,
                            l = i.pagesCount,
                            _ = i.state,
                            d = i.isLoading,
                            m = i.selfRank,
                            p = i.lastAction,
                            E = i.currentTab,
                            g = i.tabs,
                            v = i.currentPage,
                            b = (0, c.GS)().mediaSize,
                            y = b === c.cJ.Large || b === c.cJ.ExtraLarge,
                            h = y ? 10 : 7,
                            A = n.computes.getLeaderboardIsUserInPage(m.position),
                            f = (0, o.useState)({ type: ir.FirstEnterance }),
                            B = f[0],
                            F = f[1],
                            w = n.computes.getLeaderboardInitialTabs(),
                            D = (0, o.useState)(w),
                            S = D[0],
                            N = D[1],
                            T = (0, o.useState)(sr.Bottom),
                            k = T[0],
                            x = T[1],
                            P = (0, o.useState)(!0),
                            I = P[0],
                            M = P[1],
                            R = _ === nr.Error && !e,
                            L = d || R,
                            O = n.computes.getIsLeaderboardPageTop(),
                            H = n.computes.getLeaderboardFirstTabs(),
                            W = n.computes.getLeaderboardTabTops(),
                            V = k === sr.Bottom,
                            $ = k === sr.Top,
                            U = (0, o.useCallback)(
                                (e) => {
                                    (C.$.playClick(), a.onLeaderboardPageClick({ page: e }), F({ type: ir.Page }));
                                },
                                [a],
                            ),
                            G = (0, o.useCallback)(
                                (e) => {
                                    C.$.playClick();
                                    const t = ((e, t) => {
                                        switch (e) {
                                            case ur.PrevClick:
                                                return t - 1;
                                            case ur.NextClick:
                                                return t + 1;
                                            default:
                                                return 1;
                                        }
                                    })(e, v);
                                    (a.onLeaderboardPageClick({ page: t }), F({ type: ir.Page }));
                                },
                                [a, v],
                            ),
                            j = (0, o.useCallback)(
                                (e, t) => {
                                    (C.$.playClick(),
                                        F({ type: ir.Top, top: e }),
                                        N(Jt({ currentTab: e, tabTops: W, minTop: e - 1 })));
                                    const n = H.includes(e);
                                    ((!O.some((t) => t.top === e) && (v > 1 || !n)) || t) &&
                                        a.onLeaderboardTopClick({ top: e });
                                },
                                [a, v, H, O, W],
                            ),
                            z = (e) => {
                                const t = 'boolean' == typeof e && e;
                                (C.$.playClick(),
                                    F({ type: ir.PersonalPosition }),
                                    (A && !t) || a.onLeaderboardPersonalPositionClick());
                            };
                        return r().createElement(
                            'div',
                            { className: s()('Board_base_e1', L && 'Board_base__transparent_c7') },
                            L &&
                                r().createElement(
                                    'div',
                                    { className: 'Board_overlayWrapper_9b' },
                                    d
                                        ? r().createElement('div', { className: 'Board_loader_0b' })
                                        : r().createElement(rr, {
                                              onErrorClick: () => {
                                                  p === ar.Player ? z(!0) : p === ar.Top ? j(E, !0) : U(v);
                                              },
                                          }),
                                ),
                            r().createElement(
                                'div',
                                { className: 'Board_header_ca' },
                                r().createElement(ti, { tabs: g, onGetTableRecords: j, currentTabs: S }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Board_boardHeading_cc' },
                                r().createElement(Fr, null),
                                !$ && r().createElement('div', { className: 'Board_boardTopShadow_14' }),
                            ),
                            (_ === nr.Success || R) &&
                                r().createElement(Jr, {
                                    firstTabs: H,
                                    initialTabs: w,
                                    isLargeMedia: y,
                                    isContentTransparent: L,
                                    visibleRowsInBoardSized: h,
                                    isPersonalPositionInPage: A,
                                    isPersonalPositionInTop: $,
                                    isPersonalInBottom: V,
                                    positionToScroll: B,
                                    isVisibleShadow: I,
                                    onSetPersonalRowPosition: x,
                                    onSetCurrentTabs: N,
                                    onPersonalClick: z,
                                    onSetIsVisibleShadow: M,
                                    onSetPositionToScroll: F,
                                }),
                            _ === nr.Initial &&
                                r().createElement(oi, { visibleRowsInBoardSized: h, isContentTransparent: L }),
                            r().createElement(
                                'div',
                                { className: 'Board_footer_3c' },
                                r().createElement(hr, {
                                    isPersonalInBottom: V,
                                    pointsToTop: u,
                                    selfRank: m,
                                    pagesCount: l,
                                    currentPage: v,
                                    isVisibleShadow: I,
                                    onPersonalClick: z,
                                    onPageClick: U,
                                    onControlEvent: G,
                                }),
                            ),
                        );
                    }),
                    ii = 'Header_subtitle__date_9e',
                    si = R.strings.ny.leaderboardView,
                    ui = R.strings.menu.dateTime.months,
                    li = { description: R.strings.ny.leaderboardView.tooltips.headerInfo.description() },
                    ci = r().memo(({ fromTimestamp: e, toTimestamp: t, stage: n, isFinal: a, onInfoClick: i }) => {
                        const u = ((e, t) => {
                                const n = new Date(e * Hn),
                                    a = new Date(t * Hn),
                                    o = String(ui.$num(n.getMonth() + 1)).toUpperCase(),
                                    r = String(ui.$num(a.getMonth() + 1)).toUpperCase();
                                return { fromDate: n.getDate() + ' ' + o, toDate: a.getDate() + ' ' + r };
                            })(e, t),
                            l = (0, o.useState)(!1),
                            c = l[0],
                            _ = l[1];
                        return r().createElement(
                            'div',
                            { className: 'Header_base_19' },
                            r().createElement(
                                'div',
                                { className: 'Header_title_5b' },
                                r().createElement(Me, { text: si.title(), className: 'Header_titleText_d4' }),
                                r().createElement(
                                    Re.u,
                                    {
                                        contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                        args: li,
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: 'Header_info_44',
                                            onClick: () => {
                                                (C.$.playClick(), i());
                                            },
                                            onMouseEnter: () => {
                                                (C.$.playHighlight(), _(!0));
                                            },
                                            onMouseLeave: () => {
                                                _(!1);
                                            },
                                        },
                                        r().createElement('div', {
                                            className: s()('Header_infoHover_0c', c && 'Header_infoHover__hovered_5d'),
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Header_subtitle_69' },
                                a
                                    ? r().createElement(Me, { text: si.subtitle.final(), className: ii })
                                    : r().createElement(
                                          r().Fragment,
                                          null,
                                          r().createElement(Me, {
                                              text: si.subtitle.active(),
                                              format: { binding: { stage: yt(n) } },
                                              className: 'Header_subtitle__text_02',
                                          }),
                                          r().createElement('div', { className: 'Header_divider_79' }),
                                          r().createElement(Me, {
                                              text: si.dateFormat(),
                                              format: { binding: Object.assign({}, u) },
                                              className: ii,
                                          }),
                                      ),
                            ),
                        );
                    }),
                    _i = {
                        base: 'PersonalPosition_base_a5',
                        header: 'PersonalPosition_header_af',
                        header__noPoints: 'PersonalPosition_header__noPoints_84',
                        header__firstTop: 'PersonalPosition_header__firstTop_ad',
                        headerIcon: 'PersonalPosition_headerIcon_61',
                        headerText: 'PersonalPosition_headerText_63',
                        gradientHeaderTitle: 'PersonalPosition_gradientHeaderTitle_61',
                        headerTitle: 'PersonalPosition_headerTitle_0c',
                        headerTitle__position1: 'PersonalPosition_headerTitle__position1_59',
                        headerTitle__position2: 'PersonalPosition_headerTitle__position2_13',
                        headerTitle__position3: 'PersonalPosition_headerTitle__position3_a4',
                        headerTitleEffects: 'PersonalPosition_headerTitleEffects_dc',
                        headerSubtitle: 'PersonalPosition_headerSubtitle_28',
                        subheader: 'PersonalPosition_subheader_3f',
                        subHeaderInfoWrapper: 'PersonalPosition_subHeaderInfoWrapper_2a',
                        subHeaderText: 'PersonalPosition_subHeaderText_b3',
                        personalInfo: 'PersonalPosition_personalInfo_e7',
                        personalInfo__final: 'PersonalPosition_personalInfo__final_03',
                        personalInfo__finalFirst: 'PersonalPosition_personalInfo__finalFirst_31',
                        personalInfo__first: 'PersonalPosition_personalInfo__first_12',
                        row: 'PersonalPosition_row_d1',
                        rowText: 'PersonalPosition_rowText_c1',
                        rowDivider: 'PersonalPosition_rowDivider_10',
                        pointsLabel: 'PersonalPosition_pointsLabel_c9',
                        pointsValue: 'PersonalPosition_pointsValue_58',
                        infoIcon: 'PersonalPosition_infoIcon_53',
                        description: 'PersonalPosition_description_23',
                        description__final: 'PersonalPosition_description__final_18',
                        description__finalPositioned: 'PersonalPosition_description__finalPositioned_68',
                        description__finalFirst: 'PersonalPosition_description__finalFirst_8a',
                        description__noPoints: 'PersonalPosition_description__noPoints_9e',
                        updated: 'PersonalPosition_updated_4a',
                        updatedTimestamp: 'PersonalPosition_updatedTimestamp_6f',
                    },
                    di = R.strings.ny.leaderboardView.position,
                    mi = R.strings.ny.leaderboardView.tooltips.personalPosition,
                    pi = R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                    Ei = { header: mi.update.header(), description: mi.update.description() },
                    gi = { header: mi.drawing.header(), description: mi.drawing.description() },
                    vi = r().memo(
                        ({
                            top: e,
                            position: t,
                            score: n,
                            isFinal: a,
                            nextTopPoints: o,
                            opponentPoints: i,
                            updatedTimestamp: u,
                        }) => {
                            const l = N.Z5.getTimeFormat(u, N.lf.SHORT_FORMAT),
                                c = Boolean(t),
                                _ = Boolean(e),
                                d = Boolean(o),
                                m = Boolean(i),
                                p = 1 === t,
                                E = _ ? di.subHeader.top() : di.subHeader.preRate(),
                                g = a ? di.header.noPoints.final() : di.header.noPoints.active();
                            return r().createElement(
                                'div',
                                { className: _i.base },
                                r().createElement(
                                    'div',
                                    { className: s()(_i.header, !c && _i.header__noPoints, p && _i.header__firstTop) },
                                    r().createElement('div', {
                                        className: _i.headerIcon,
                                        style: {
                                            backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.mainView.leaderboard.personalPosition.positionTop_${e || 'default'})`,
                                        },
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: _i.headerText },
                                        c &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                r().createElement(
                                                    'div',
                                                    { className: _i.gradientHeaderTitle },
                                                    (t > 3 || !_) &&
                                                        r().createElement(
                                                            'div',
                                                            { className: _i.headerTitleEffects },
                                                            r().createElement(J, { value: t }),
                                                        ),
                                                    r().createElement(
                                                        'div',
                                                        {
                                                            className: s()(
                                                                _i.headerTitle,
                                                                _i[`headerTitle__position${t}`],
                                                            ),
                                                        },
                                                        r().createElement(J, { value: t }),
                                                    ),
                                                ),
                                                r().createElement(Me, {
                                                    className: _i.headerSubtitle,
                                                    text: di.header.yourPosition(),
                                                }),
                                            ),
                                        (!c || _ || !a) &&
                                            r().createElement(
                                                'div',
                                                { className: _i.subheader },
                                                r().createElement(
                                                    'div',
                                                    { className: _i.subHeaderInfoWrapper },
                                                    r().createElement(Me, {
                                                        className: _i.subHeaderText,
                                                        text: c ? E : g,
                                                        format: {
                                                            binding: { top: r().createElement(J, { value: e }) },
                                                        },
                                                    }),
                                                    c &&
                                                        !_ &&
                                                        r().createElement(
                                                            Re.u,
                                                            { contentId: pi, args: gi },
                                                            r().createElement('div', { className: _i.infoIcon }),
                                                        ),
                                                ),
                                            ),
                                    ),
                                ),
                                c &&
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                _i.personalInfo,
                                                p && _i.personalInfo__first,
                                                a && _i.personalInfo__final,
                                                a && p && _i.personalInfo__finalFirst,
                                            ),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: _i.row },
                                            r().createElement(
                                                'div',
                                                { className: _i.rowText },
                                                r().createElement(Me, {
                                                    className: _i.pointsLabel,
                                                    text: di.totalPoints(),
                                                }),
                                                r().createElement(Me, { className: _i.pointsValue, text: String(n) }),
                                            ),
                                            r().createElement('div', { className: _i.rowDivider }),
                                        ),
                                        !a &&
                                            r().createElement(
                                                r().Fragment,
                                                null,
                                                d &&
                                                    r().createElement(
                                                        'div',
                                                        { className: _i.row },
                                                        r().createElement(
                                                            'div',
                                                            { className: _i.rowText },
                                                            r().createElement(Me, {
                                                                className: _i.pointsLabel,
                                                                text: di.pointsToUp(),
                                                            }),
                                                            r().createElement(Me, {
                                                                className: _i.pointsValue,
                                                                text: String(o),
                                                            }),
                                                        ),
                                                        r().createElement('div', { className: _i.rowDivider }),
                                                    ),
                                                m &&
                                                    r().createElement(
                                                        'div',
                                                        { className: _i.row },
                                                        r().createElement(
                                                            'div',
                                                            { className: _i.rowText },
                                                            r().createElement(Me, {
                                                                className: _i.pointsLabel,
                                                                text: di.pointsToOpponent(),
                                                            }),
                                                            r().createElement(Me, {
                                                                className: _i.pointsValue,
                                                                text: String(i),
                                                            }),
                                                        ),
                                                    ),
                                            ),
                                    ),
                                !c &&
                                    !a &&
                                    r().createElement(Me, {
                                        className: s()(_i.description, _i.description__noPoints),
                                        text: di.description.noPoints(),
                                    }),
                                a &&
                                    r().createElement(Me, {
                                        className: s()(
                                            _i.description,
                                            _i.description__final,
                                            c && _i.description__finalPositioned,
                                            p && _i.description__finalFirst,
                                        ),
                                        text: di.description.final(),
                                    }),
                                !a &&
                                    r().createElement(
                                        'div',
                                        { className: _i.updated },
                                        r().createElement(Me, {
                                            className: _i.updatedTimestamp,
                                            text: di.update(),
                                            format: { binding: { time: l } },
                                        }),
                                        r().createElement(
                                            Re.u,
                                            { contentId: pi, args: Ei },
                                            r().createElement('div', { className: _i.infoIcon }),
                                        ),
                                    ),
                            );
                        },
                    ),
                    bi = {
                        base: 'PetRewards_base_93',
                        base__vehicleAvailable: 'PetRewards_base__vehicleAvailable_76',
                        bgHovered: 'PetRewards_bgHovered_24',
                        base__hovered: 'PetRewards_base__hovered_ae',
                        mask: 'PetRewards_mask_11',
                        blink: 'PetRewards_blink_fd',
                        runBlink: 'PetRewards_runBlink_8f',
                        blink__infinite: 'PetRewards_blink__infinite_c2',
                        contentWrapper: 'PetRewards_contentWrapper_ad',
                        content: 'PetRewards_content_32',
                        content__final: 'PetRewards_content__final_9b',
                        title: 'PetRewards_title_f7',
                        description: 'PetRewards_description_32',
                    },
                    yi = R.strings.ny.leaderboardView.rewards,
                    hi = R.strings.ny.leaderboardView.tooltips.petRewards,
                    Ci = { header: hi.header(), description: hi.description() },
                    Ai = r().memo(({ isRewardsCheck: e, isVehicleAvailable: t, isFinal: n, onRewardsClick: a }) => {
                        const i = (0, o.useState)(!1),
                            u = i[0],
                            l = i[1];
                        return r().createElement(
                            'div',
                            {
                                className: s()(
                                    bi.base,
                                    bi.base__mask,
                                    u && bi.base__hovered,
                                    t && bi.base__vehicleAvailable,
                                ),
                            },
                            r().createElement(
                                'div',
                                { className: bi.mask },
                                r().createElement('div', { className: s()(bi.blink, !e && bi.blink__infinite) }),
                            ),
                            r().createElement('div', { className: bi.bgHovered }),
                            r().createElement(
                                Re.u,
                                {
                                    contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                    args: Ci,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: bi.contentWrapper,
                                        onClick: () => {
                                            (C.$.playClick(), a());
                                        },
                                        onMouseEnter: () => {
                                            (C.$.playHighlight(), l(!0));
                                        },
                                        onMouseLeave: () => {
                                            l(!1);
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: s()(bi.content, n && bi.content__final) },
                                        r().createElement(Me, { className: bi.title, text: yi.header() }),
                                        !n &&
                                            r().createElement(Me, {
                                                className: bi.description,
                                                text: yi.description.active(),
                                            }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    fi = {
                        base: 'NyLeaderboardView_base_4a',
                        fadeIn: 'NyLeaderboardView_fadeIn_cb',
                        base__hide: 'NyLeaderboardView_base__hide_1b',
                        fadeOut: 'NyLeaderboardView_fadeOut_17',
                        bg: 'NyLeaderboardView_bg_3d',
                        closeButton: 'NyLeaderboardView_closeButton_05',
                        header: 'NyLeaderboardView_header_56',
                        content: 'NyLeaderboardView_content_bc',
                        leftSection: 'NyLeaderboardView_leftSection_67',
                        board: 'NyLeaderboardView_board_9d',
                        rewards: 'NyLeaderboardView_rewards_5f',
                        overlayWrapper: 'NyLeaderboardView_overlayWrapper_92',
                        loader: 'NyLeaderboardView_loader_1e',
                        rotate: 'NyLeaderboardView_rotate_84',
                    };
                function Bi() {
                    return (
                        (Bi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Bi.apply(this, arguments)
                    );
                }
                const Fi = R.strings.ny.leaderboardView,
                    wi = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.computes.getLeaderboardModel(),
                            i = a.fromTimestamp,
                            u = a.toTimestamp,
                            l = a.updatedTimestamp,
                            c = a.stage,
                            _ = a.top,
                            d = a.selfRank,
                            m = a.personalPoints,
                            p = a.state,
                            E = a.players,
                            g = a.isLoading,
                            v = a.isRewardsCheck,
                            b = a.isVehicleAvailable,
                            y = a.isFinal,
                            h = (0, o.useState)(!1),
                            C = h[0],
                            A = h[1],
                            f = an(),
                            B = d.score,
                            w = d.position,
                            D = M() || 0 === E.length,
                            S = p === nr.Error && D,
                            N = D && g,
                            T = (0, o.useCallback)(() => {
                                (A(!0),
                                    f.run(() => {
                                        n.onLeaderboardClose();
                                    }, 300));
                            }, [f, n]);
                        return (
                            x({ callback: T }),
                            r().createElement(
                                'div',
                                { className: s()(fi.base, C && fi.base__hide) },
                                r().createElement('div', { className: fi.bg }),
                                r().createElement(
                                    'div',
                                    { className: fi.closeButton },
                                    r().createElement(F, {
                                        type: 'close',
                                        caption: Fi.closeBtn(),
                                        side: 'right',
                                        onClick: T,
                                    }),
                                ),
                                N &&
                                    r().createElement(
                                        'div',
                                        { className: fi.overlayWrapper },
                                        r().createElement('div', { className: fi.loader }),
                                    ),
                                S &&
                                    !g &&
                                    r().createElement(
                                        'div',
                                        { className: fi.overlayWrapper },
                                        r().createElement(rr, { onErrorClick: n.onLeaderboardRefresh }),
                                    ),
                                !N &&
                                    !S &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(
                                            'div',
                                            { className: fi.header },
                                            r().createElement(ci, {
                                                fromTimestamp: i,
                                                toTimestamp: u,
                                                stage: c,
                                                isFinal: y,
                                                onInfoClick: n.onLeaderboardInfoClick,
                                            }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: fi.content },
                                            r().createElement(
                                                'div',
                                                { className: fi.leftSection },
                                                r().createElement(
                                                    'div',
                                                    { className: fi.personalPosition },
                                                    r().createElement(
                                                        vi,
                                                        Bi({}, m, {
                                                            top: _,
                                                            score: B,
                                                            position: w,
                                                            isFinal: y,
                                                            updatedTimestamp: l,
                                                        }),
                                                    ),
                                                ),
                                                r().createElement(
                                                    'div',
                                                    { className: fi.rewards },
                                                    r().createElement(Ai, {
                                                        isFinal: y,
                                                        isRewardsCheck: v,
                                                        isVehicleAvailable: b,
                                                        onRewardsClick: n.onLeaderboardRewardsClick,
                                                    }),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: fi.board },
                                                r().createElement(ri, { isFirstEnter: D }),
                                            ),
                                        ),
                                    ),
                            )
                        );
                    });
                var Di = n(7943);
                const Si = R.strings.ny.machineView.buyTokens,
                    Ni = (0, o.memo)(
                        ({
                            isBuyBtnLoading: e,
                            purchaseFormState: t,
                            exchangeRate: n,
                            mandarinCount: a,
                            onBuyBtnClick: i,
                        }) => {
                            const u = (0, c.GS)().mediaSize >= c.cJ.Medium,
                                l = (0, o.useState)(!1),
                                _ = l[0],
                                d = l[1],
                                m = (0, o.useState)(!1),
                                p = m[0],
                                E = m[1],
                                g = (0, o.useState)(0),
                                v = g[0],
                                b = g[1],
                                y = t !== V.NOT_AVAILABLE,
                                h = Math.floor(a / n),
                                A = 0 === v || h <= 0;
                            (0, o.useEffect)(() => {
                                b(h > 0 ? 1 : 0);
                            }, [h]);
                            const f = (0, o.useCallback)(
                                    (e) => {
                                        b(e > h ? h : e);
                                    },
                                    [h],
                                ),
                                B = (0, o.useCallback)(() => {
                                    v < h && b(v + 1);
                                }, [v, h]),
                                F = (0, o.useCallback)(() => {
                                    v > 0 && b(v - 1);
                                }, [v]),
                                w = (0, o.useCallback)(
                                    (e) => {
                                        (e.stopPropagation(), i(v));
                                    },
                                    [v, i],
                                );
                            return r().createElement(
                                'div',
                                { className: s()('BuyPanel_base_09', !y && 'BuyPanel_base__notAvailable_9b') },
                                r().createElement('div', { className: 'BuyPanel_shadow_a1' }),
                                y &&
                                    r().createElement('div', {
                                        className: s()('BuyPanel_hover_27', (p || _) && 'BuyPanel_hover__visible_22'),
                                    }),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()('BuyPanel_content_7d', p && 'BuyPanel_content__hovered_63'),
                                        onClick: () => {
                                            (C.$.playClick(), d(!0));
                                        },
                                        onMouseEnter: () => {
                                            (C.$.playHighlight(), E(!0));
                                        },
                                        onMouseLeave: () => {
                                            E(!1);
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'BuyPanel_titleWithInfoIcon_e7' },
                                        r().createElement(Me, { className: 'BuyPanel_title_9b', text: Si.title() }),
                                        y &&
                                            r().createElement(
                                                Re.u,
                                                {
                                                    contentId:
                                                        R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                                    args: {
                                                        header: Si.infoIcon.title(),
                                                        description: Si.infoIcon.description(),
                                                    },
                                                },
                                                r().createElement('div', { className: 'BuyPanel_infoIcon_07' }),
                                            ),
                                    ),
                                    y &&
                                        r().createElement(
                                            'div',
                                            { className: 'BuyPanel_availableBottomContent_93' },
                                            r().createElement(Me, {
                                                className: 'BuyPanel_exchangeRate_e6',
                                                text: u ? Si.exchangeRateLarge() : Si.exchangeRate(),
                                                format: {
                                                    binding: {
                                                        tokens: r().createElement(
                                                            'div',
                                                            { className: 'BuyPanel_machineTokenContainer_ef' },
                                                            r().createElement(Me, { text: String(1) }),
                                                            r().createElement('div', {
                                                                className: 'BuyPanel_machineToken_61',
                                                            }),
                                                        ),
                                                        second_tokens: r().createElement(
                                                            'div',
                                                            { className: 'BuyPanel_mandarinContainer_ef' },
                                                            r().createElement(Me, {
                                                                text: N.Z5.getNumberFormat(n, N.B3.INTEGRAL),
                                                            }),
                                                            r().createElement('div', {
                                                                className: 'BuyPanel_mandarins_f3',
                                                            }),
                                                        ),
                                                    },
                                                },
                                            }),
                                            r().createElement(
                                                'div',
                                                { className: 'BuyPanel_rightBottomContent_f9' },
                                                r().createElement(
                                                    'div',
                                                    { className: 'BuyPanel_currentMandarinValue_9c' },
                                                    r().createElement(Me, {
                                                        text: N.Z5.getNumberFormat(v * n, N.B3.INTEGRAL),
                                                    }),
                                                    r().createElement('div', {
                                                        className: 'BuyPanel_currentMandarinIcon_4a',
                                                    }),
                                                ),
                                                r().createElement(Di.$, {
                                                    borderColor: '#E8C29A',
                                                    className: 'BuyPanel_tokensStepper_26',
                                                    currencyClassName: 'BuyPanel_stepperCurrency_90',
                                                    currencyImage:
                                                        R.images.new_year.gui.maps.icons.newYear.common.currency.medium.nyGiftMachineToken(),
                                                    value: v,
                                                    minValue: 0,
                                                    maxValue: h,
                                                    isFocused: _,
                                                    setIsFocused: d,
                                                    handleTokenChange: f,
                                                    handleTokenIncrease: B,
                                                    handleTokenDecrease: F,
                                                }),
                                                r().createElement(
                                                    pt,
                                                    {
                                                        mixClass: 'BuyPanel_changeButton_b7',
                                                        size: ct.medium,
                                                        disabled: A,
                                                        type: lt.primary,
                                                        onClick: w,
                                                    },
                                                    e
                                                        ? r().createElement('div', { className: 'BuyPanel_spinner_89' })
                                                        : r().createElement(Me, { text: Si.changeButton() }),
                                                ),
                                            ),
                                        ),
                                    !y &&
                                        r().createElement(Me, {
                                            className: 'BuyPanel_disabledBottomContent_2a',
                                            text: Si.lockedDescription(),
                                        }),
                                    !y && r().createElement('div', { className: 'BuyPanel_lock_e9' }),
                                ),
                            );
                        },
                    ),
                    Ti = R.strings.ny.machineView,
                    ki = ['tasks', 'pet'],
                    xi = () =>
                        r().createElement(
                            'div',
                            { className: 'Info_base_a7' },
                            r().createElement(Me, { className: 'Info_title_75', text: Ti.info.title() }),
                            r().createElement(Me, { className: 'Info_description_0d', text: Ti.info.description() }),
                            r().createElement(
                                'div',
                                { className: 'Info_getTokensTitle_15' },
                                r().createElement(Me, {
                                    className: 'Info_getTokensText_51',
                                    text: Ti.info.getTokens.title(),
                                }),
                                r().createElement('div', { className: 'Info_getTokensDivider_fd' }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Info_conditions_e2' },
                                ki.map((e) =>
                                    r().createElement(
                                        'div',
                                        { key: e, className: 'Info_condition_01' },
                                        r().createElement('div', {
                                            className: 'Info_conditionImage_ca',
                                            style: {
                                                backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.mainView.machineView.info.${e})`,
                                            },
                                        }),
                                        r().createElement(Me, {
                                            className: 'Info_conditionText_a9',
                                            text: Ti.info.getTokens.$dyn(e),
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    Pi = 'NyMachineView_gradientValue_33',
                    Ii = R.strings.ny,
                    Mi = R.strings.ny.machineView,
                    Ri = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.root.get(),
                            i = a.switchState,
                            u = a.isControlsLocked,
                            l = t.surpriseMachineModel.get(),
                            c = l.isBuyBtnLoading,
                            _ = l.machineViews,
                            d = l.isBtnHovered,
                            m = l.purchaseFormState,
                            p = l.exchangeRate,
                            E = l.currentAtmosphereLevel,
                            g = t.computes.getCurrencyCount(Je.Mandarin) || 0,
                            v = _ === W.SPEND_TOKENS_ACTIVE,
                            b = i === H.WITH_SWITCHING_OBJS,
                            y = (0, o.useState)(!1),
                            h = y[0],
                            C = y[1];
                        ((0, o.useEffect)(
                            () =>
                                w(() => {
                                    C(!0);
                                }, 300),
                            [],
                        ),
                            x({
                                callback: () => {
                                    if (_ === W.SPEND_TOKENS_ACTIVE) return n.onGoToMachineMain();
                                    n.onClose();
                                },
                            }));
                        const A = (0, o.useCallback)((e) => n.onMachineBuyBtnClick({ count: e }), [n]),
                            f = h && !b && !v && !u;
                        return r().createElement(
                            'div',
                            { className: 'NyMachineView_base_6e' },
                            r().createElement('div', {
                                className: s()('NyMachineView_vignette_d8', f && 'NyMachineView_vignette__visible_e6'),
                            }),
                            r().createElement('div', {
                                className: s()(
                                    'NyMachineView_textVignette_fc',
                                    f && 'NyMachineView_textVignette__visible_83',
                                    m === V.NOT_AVAILABLE && 'NyMachineView_textVignette__notAvailable_de',
                                ),
                            }),
                            r().createElement(
                                'div',
                                { className: 'NyMachineView_sceneWrapper_f4' },
                                r().createElement(da, {
                                    moveSpace: n.onMoveSpace,
                                    onMouseOver3dScene: n.onMouseOver3dScene,
                                    isPointerCursor: d,
                                }),
                            ),
                            v &&
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'NyMachineView_back_77',
                                            !b && !u && 'NyMachineView_back__visible_f6',
                                        ),
                                    },
                                    r().createElement(F, {
                                        caption: Ii.backButton.label(),
                                        type: 'back',
                                        side: 'left',
                                        onClick: n.onGoToMachineMain,
                                    }),
                                ),
                            v &&
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'NyMachineView_close_39',
                                            !b && !u && 'NyMachineView_close__visible_47',
                                        ),
                                    },
                                    r().createElement(F, {
                                        caption: Ii.closeButton.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: n.onClose,
                                    }),
                                ),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'NyMachineView_info_26',
                                        f && 'NyMachineView_info__visible_91',
                                        m === V.NOT_AVAILABLE && 'NyMachineView_info__notAvailable_fe',
                                    ),
                                },
                                r().createElement(xi, null),
                                r().createElement(
                                    'div',
                                    { className: 'NyMachineView_buyPanel_db' },
                                    r().createElement(Ni, {
                                        isBuyBtnLoading: c,
                                        mandarinCount: g,
                                        purchaseFormState: m,
                                        exchangeRate: p,
                                        onBuyBtnClick: A,
                                    }),
                                ),
                                E < 10 &&
                                    r().createElement(
                                        Re.u,
                                        {
                                            contentId:
                                                R.views.new_year.lobby.new_year.tooltips.NyMainWidgetTooltip('resId'),
                                            args: { block: xn.SurpriseMachine },
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'NyMachineView_lowAtmosphere_77' },
                                            r().createElement('div', {
                                                className: 'NyMachineView_lowAtmosphereIcon_a7',
                                            }),
                                            r().createElement(Me, {
                                                className: 'NyMachineView_lowAtmosphereText_7b',
                                                text: Mi.lowAtmosphereLevel(),
                                            }),
                                            r().createElement(
                                                'div',
                                                { className: 'NyMachineView_value_8d' },
                                                r().createElement(Me, { className: Pi, text: vt(E) }),
                                                r().createElement(Me, {
                                                    className: s()(Pi, 'NyMachineView_gradientValue__copied_83'),
                                                    text: vt(E),
                                                }),
                                            ),
                                        ),
                                    ),
                                m === V.ERROR &&
                                    r().createElement(
                                        'div',
                                        { className: 'NyMachineView_error_ea' },
                                        r().createElement('div', { className: 'NyMachineView_errorIcon_97' }),
                                        r().createElement(Me, {
                                            className: 'NyMachineView_errorText_05',
                                            text: R.strings.ny.machineView.buyTokens.error(),
                                        }),
                                    ),
                            ),
                        );
                    });
                let Li;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Li || (Li = {}));
                const Oi = {
                    base: 'Checkbox_base_36',
                    base__disabled: 'Checkbox_base__disabled_08',
                    base__center: 'Checkbox_base__center_52',
                    base__bottom: 'Checkbox_base__bottom_28',
                    input: 'Checkbox_input_37',
                    base__mouseDown: 'Checkbox_base__mouseDown_45',
                    base__small: 'Checkbox_base__small_18',
                    base__medium: 'Checkbox_base__medium_12',
                    base__large: 'Checkbox_base__large_f7',
                    base__extraLarge: 'Checkbox_base__extraLarge_c9',
                    alertOverlay: 'Checkbox_alertOverlay_52',
                    base__alert: 'Checkbox_base__alert_b7',
                    blink: 'Checkbox_blink_5e',
                    base__checked: 'Checkbox_base__checked_a2',
                    inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                    highlight: 'Checkbox_highlight_b8',
                    base__main: 'Checkbox_base__main_3a',
                    base__primary: 'Checkbox_base__primary_ab',
                    checkmark: 'Checkbox_checkmark_60',
                    fadeIn: 'Checkbox_fadeIn_1a',
                    label: 'Checkbox_label_bc',
                    labelContent: 'Checkbox_labelContent_64',
                };
                let Hi, Wi, Vi;
                (!(function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Hi || (Hi = {})),
                    (function (e) {
                        ((e.primary = 'primary'), (e.main = 'main'));
                    })(Wi || (Wi = {})),
                    (function (e) {
                        ((e.Center = 'center'), (e.Bottom = 'bottom'));
                    })(Vi || (Vi = {})));
                const $i = [
                    'id',
                    'isChecked',
                    'isDisabled',
                    'isAlert',
                    'size',
                    'type',
                    'soundHover',
                    'soundClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseUp',
                    'onMouseDown',
                    'onClick',
                    'onChange',
                    'onFocus',
                    'onBlur',
                    'text',
                    'contentStyles',
                    'children',
                    'alignment',
                ];
                function Ui() {
                    return (
                        (Ui =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ui.apply(this, arguments)
                    );
                }
                const Gi = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            a = void 0 !== n && n,
                            i = e.isDisabled,
                            u = void 0 !== i && i,
                            l = e.isAlert,
                            c = void 0 !== l && l,
                            _ = e.size,
                            d = void 0 === _ ? Hi.medium : _,
                            m = e.type,
                            p = void 0 === m ? Wi.primary : m,
                            E = e.soundHover,
                            g = void 0 === E ? 'highlight' : E,
                            v = e.soundClick,
                            b = void 0 === v ? 'play' : v,
                            y = e.onMouseEnter,
                            h = e.onMouseLeave,
                            A = e.onMouseUp,
                            f = e.onMouseDown,
                            B = e.onClick,
                            F = e.onChange,
                            w = e.onFocus,
                            D = e.onBlur,
                            S = e.text,
                            N = e.contentStyles,
                            T = e.children,
                            k = e.alignment,
                            x = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, $i);
                        const P = (0, o.useState)(!1),
                            I = P[0],
                            M = P[1],
                            R = (0, o.useState)(!1),
                            L = (R[0], R[1]),
                            O = (0, o.useCallback)(
                                (e) => {
                                    u || (F && F(), B && B(e));
                                },
                                [u, F, B],
                            ),
                            H = (0, o.useCallback)(
                                (e) => {
                                    const t = e.button === Li.LEFT;
                                    u || (t && M(!0), t && f && f(e), b && (0, C.G)(b));
                                },
                                [u, f, b],
                            ),
                            W = (0, o.useCallback)(
                                (e) => {
                                    u || (M(!1), A && A(e));
                                },
                                [u, A],
                            ),
                            V = (0, o.useCallback)(
                                (e) => {
                                    u || (y && y(e), g && (0, C.G)(g));
                                },
                                [u, y, g],
                            ),
                            $ = (0, o.useCallback)(
                                (e) => {
                                    u || (M(!1), h && h(e));
                                },
                                [u, h],
                            ),
                            U = (0, o.useCallback)(
                                (e) => {
                                    u || (L(!0), w && w(e));
                                },
                                [u, w],
                            ),
                            G = (0, o.useCallback)(
                                (e) => {
                                    u || (L(!1), D && D(e));
                                },
                                [u, D],
                            ),
                            j = r().createElement(
                                'div',
                                { className: Oi.label },
                                r().createElement(
                                    'div',
                                    { className: s()(Oi.labelContent, 's-labelContent'), style: N },
                                    S || T,
                                ),
                            );
                        return r().createElement(
                            'div',
                            Ui(
                                {
                                    id: t,
                                    className: s()(Oi.base, Oi[`base__${d}`], Oi[`base__${p}`], {
                                        [Oi.base__checked]: a,
                                        [Oi.base__disabled]: u,
                                        [Oi.base__mouseDown]: I,
                                        [Oi.base__alert]: c,
                                        [Oi.base__center]: k === Vi.Center,
                                        [Oi.base__bottom]: k === Vi.Bottom,
                                    }),
                                    onClick: O,
                                    onMouseEnter: V,
                                    onMouseLeave: $,
                                    onMouseDown: H,
                                    onMouseUp: W,
                                    onFocus: U,
                                    onBlur: G,
                                },
                                x,
                            ),
                            r().createElement(
                                'div',
                                { className: Oi.input },
                                r().createElement('div', { className: Oi.alertOverlay }),
                                r().createElement('div', { className: Oi.inputHoverOverlay }),
                                r().createElement('div', { className: Oi.highlight }),
                            ),
                            r().createElement('div', { className: Oi.checkmark }),
                            ((S || T) && j) || null,
                        );
                    },
                    ji = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    zi = ['children', 'className', 'theme'];
                function Yi() {
                    return (
                        (Yi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Yi.apply(this, arguments)
                    );
                }
                const Zi = r().forwardRef(function (e, t) {
                        let n = e.children,
                            a = e.className,
                            i = e.theme,
                            u = void 0 === i ? 'default' : i,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, zi);
                        const c = (function () {
                                const e = (0, o.useRef)(0);
                                return (
                                    I(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, o.useMemo)(
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
                            })(),
                            _ = r().useRef(null);
                        return (
                            P(() => {
                                c.run(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    D.O.view.resize(t, n);
                                    const a = window.getComputedStyle(e);
                                    D.O.view.setSidePaddingsRem({
                                        left: parseInt(a.getPropertyValue('padding-left'), 10),
                                        top: parseInt(a.getPropertyValue('padding-top'), 10),
                                        right: parseInt(a.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(a.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            r().createElement(
                                'div',
                                Yi({}, l, {
                                    className: s()(ji.base, ji[`base__theme-${u}`], a),
                                    ref: function (e) {
                                        ((_.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                    },
                                }),
                                r().createElement('div', { className: ji.decorator }, n),
                            )
                        );
                    }),
                    Xi = (0, o.memo)(({ children: e }) =>
                        r().createElement(
                            'div',
                            {
                                className: 'TooltipAndPopoverStyleWrapper_base_f8',
                                onWheel: (e) => {
                                    e.preventDefault();
                                },
                            },
                            r().createElement(
                                'div',
                                { className: 'TooltipAndPopoverStyleWrapper_snowIconContainer_33' },
                                r().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_snowIcon_d7' }),
                            ),
                            r().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_pattern_f6' }),
                            r().createElement('div', { className: 'TooltipAndPopoverStyleWrapper_content_8a' }, e),
                        ),
                    ),
                    qi = (0, o.memo)(({ children: e, tooltipDecoratorClassName: t }) =>
                        r().createElement(Zi, { theme: 'none', className: t }, r().createElement(Xi, null, e)),
                    ),
                    Ki = (0, o.memo)(
                        ({
                            isVisible: e,
                            step: t,
                            tip: n,
                            numOfSteps: a,
                            wasClickedOutside: o,
                            handleNextStep: i,
                            setIsOnboardingTipVisible: u,
                        }) => {
                            const l = t > a;
                            return r().createElement(
                                'div',
                                {
                                    className: s()('OnboardingTip_base_12', e && 'OnboardingTip_base__visible_87'),
                                    onTransitionEnd: () => {
                                        e && u(!0);
                                    },
                                },
                                r().createElement(
                                    qi,
                                    { tooltipDecoratorClassName: 'OnboardingTip_tooltipDecorator_1b' },
                                    r().createElement(
                                        'div',
                                        { className: 'OnboardingTip_content_44' },
                                        r().createElement(Me, { className: 'OnboardingTip_title_19', text: n.title }),
                                        r().createElement(Me, {
                                            className: 'OnboardingTip_description_a3',
                                            text: n.description,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'OnboardingTip_footer_e4' },
                                            r().createElement(
                                                'div',
                                                { className: 'OnboardingTip_lights_a8' },
                                                Array.from({ length: a }, (e, n) =>
                                                    r().createElement(
                                                        'div',
                                                        { key: n, className: 'OnboardingTip_lightContainer_86' },
                                                        t > n &&
                                                            r().createElement('div', {
                                                                className: 'OnboardingTip_light_2b',
                                                            }),
                                                    ),
                                                ),
                                            ),
                                            r().createElement(
                                                pt,
                                                {
                                                    mixClass: 'OnboardingTip_button_46',
                                                    size: ct.medium,
                                                    type: lt.ghost,
                                                    soundClick: R.sounds.hangar_newyear_help_next_step_click(),
                                                    onClick: i,
                                                },
                                                r().createElement(
                                                    r().Fragment,
                                                    null,
                                                    o &&
                                                        !l &&
                                                        r().createElement('div', {
                                                            className: 'OnboardingTip_buttonLight_82',
                                                        }),
                                                    r().createElement(Me, { text: n.button }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ji = {
                        base: 'OnboardingTipWithPrompter_base_73',
                        onboardingTip: 'OnboardingTipWithPrompter_onboardingTip_25',
                        onboardingTip__1: 'OnboardingTipWithPrompter_onboardingTip__1_4e',
                        onboardingTip__2: 'OnboardingTipWithPrompter_onboardingTip__2_6b',
                        onboardingTip__3: 'OnboardingTipWithPrompter_onboardingTip__3_49',
                        onboardingTip__4: 'OnboardingTipWithPrompter_onboardingTip__4_c1',
                        onboardingTip__5: 'OnboardingTipWithPrompter_onboardingTip__5_44',
                        onboardingTip__7: 'OnboardingTipWithPrompter_onboardingTip__7_7c',
                        base__singleStep: 'OnboardingTipWithPrompter_base__singleStep_a8',
                        prompter: 'OnboardingTipWithPrompter_prompter_17',
                        prompter__visible: 'OnboardingTipWithPrompter_prompter__visible_51',
                        prompter__2: 'OnboardingTipWithPrompter_prompter__2_7e',
                        prompter__3: 'OnboardingTipWithPrompter_prompter__3_94',
                    },
                    Qi = {
                        [j.First]: R.sounds.ny_vo_terentiy_help_step1(),
                        [j.Second]: R.sounds.ny_vo_terentiy_help_step2(),
                        [j.Third]: R.sounds.ny_vo_terentiy_help_step3(),
                        [j.Fourth]: R.sounds.ny_vo_terentiy_help_step4(),
                        [j.Fifth]: R.sounds.ny_vo_terentiy_help_step5(),
                        [j.Seventh]: R.sounds.ny_vo_terentiy_help_step6(),
                    },
                    es = {
                        [G.FunOpened]: R.sounds.ny_vo_terentiy_help_raccoon_hygiene(),
                        [G.ActivityOpened]: R.sounds.ny_vo_terentiy_help_raccoon_energy(),
                        [G.Leaderboard]: R.sounds.ny_vo_terentiy_help_leaderboard(),
                    },
                    ts = (0, o.memo)(
                        ({
                            isOnboarding: e,
                            needToNextStep: t,
                            step: n,
                            tip: a,
                            prompter: i,
                            numOfSteps: u,
                            wasClickedOutside: l,
                            onClose: c,
                            setIsOnboardingTipVisible: _,
                            needToCloseSingleTip: d,
                            setIsWaitingSoundPlayed: m,
                        }) => {
                            const p = (0, o.useState)(!1),
                                E = p[0],
                                g = p[1],
                                v = (0, o.useState)(!1),
                                b = v[0],
                                y = v[1],
                                h = an(),
                                A = an(),
                                f = an();
                            (0, o.useEffect)(() => {
                                h.run(
                                    () => {
                                        const t = ((e, t) => ('number' == typeof e && (t ? Qi : es)[e]) || null)(n, e);
                                        (t && (0, C.G)(t),
                                            g(!0),
                                            y(!0),
                                            (0, C.G)(R.sounds.hangar_newyear_guide_window()),
                                            n === j.Fifth &&
                                                e &&
                                                f.run(() => {
                                                    (0, C.G)(R.sounds.ny_vo_terentiy_help_step5_waiting());
                                                }, 18e3));
                                    },
                                    n === j.First ? 1500 : 300,
                                );
                            }, [h, n, f, e]);
                            const B = (0, o.useCallback)(() => {
                                (c(), g(!1), e || (0, C.G)(R.sounds.ny_vo_terentiy_help_stop()));
                                const t = n + 1;
                                (n === j.Fifth && f.isRunning && m(!1),
                                    (!e ||
                                        (e &&
                                            Object.values(j).includes(t) &&
                                            n !== G.Empty &&
                                            K[n].prompter !== K[t].prompter)) &&
                                        y(!1));
                            }, [e, c, m, n, f.isRunning]);
                            return (
                                (0, o.useEffect)(() => {
                                    t && B();
                                }, [t]),
                                (0, o.useEffect)(() => {
                                    !e &&
                                        d &&
                                        (g(!1),
                                        (0, C.G)(R.sounds.ny_vo_terentiy_help_stop()),
                                        A.run(() => {
                                            c();
                                        }, 300));
                                }, [d]),
                                r().createElement(
                                    'div',
                                    { className: s()(Ji.base, 1 === u && Ji.base__singleStep) },
                                    r().createElement('div', {
                                        className: s()(Ji.prompter, b && Ji.prompter__visible, Ji[`prompter__${i}`]),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: s()(Ji.onboardingTip, Ji[`onboardingTip__${n}`]) },
                                        r().createElement(Ki, {
                                            isVisible: E,
                                            step: n,
                                            tip: a,
                                            numOfSteps: u,
                                            wasClickedOutside: l,
                                            handleNextStep: B,
                                            setIsOnboardingTipVisible: _,
                                        }),
                                    ),
                                )
                            );
                        },
                    );
                let ns;
                !(function (e) {
                    ((e.Food = 'food'), (e.Fun = 'fun'), (e.Activity = 'activity'));
                })(ns || (ns = {}));
                const as = (0, o.memo)(({ children: e }) => {
                    var t, n;
                    const a = (0, c.GS)().mediaSize,
                        i = (0, Pn.V)(),
                        u = an(),
                        l = a >= c.cJ.Medium,
                        _ = (0, o.useRef)(null),
                        d = (0, o.useState)(!1),
                        m = d[0],
                        p = d[1],
                        E = (0, o.useState)({ x: null, y: null }),
                        g = E[0],
                        v = E[1];
                    ((0, o.useEffect)(() => (0, C.G)(R.sounds.hangar_newyear_raccoon_scoring()), []),
                        (0, o.useEffect)(() => {
                            (p(!0),
                                u.run(() => {
                                    if (_.current) {
                                        const e = (function (e, t, n, a) {
                                            const o = n < e ? n - e : e - n,
                                                r = a - t;
                                            return { AOx: 0.5 * (o + r), AOy: 0.5 * (-o + r) };
                                        })(
                                            _.current.getBoundingClientRect().x / i,
                                            _.current.getBoundingClientRect().y / i,
                                            l ? 435 : 275,
                                            l ? 67 : 87,
                                        );
                                        v({ x: e.AOx, y: e.AOy });
                                    }
                                }, 500));
                        }, [
                            l,
                            null == (t = _.current) ? void 0 : t.getBoundingClientRect().x,
                            null == (n = _.current) ? void 0 : n.getBoundingClientRect().y,
                        ]));
                    const b = null !== g.x;
                    return r().createElement(
                        'div',
                        {
                            className: s()('FlyBubbleWrapper_base_89', m && 'FlyBubbleWrapper_base__animation_4c'),
                            ref: _,
                            style: b ? { transformOrigin: `${g.x}rem ${g.y}rem` } : {},
                        },
                        r().createElement('div', { className: s()(m && 'FlyBubbleWrapper_content_a0') }, e),
                    );
                });
                let os, rs;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(os || (os = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(rs || (rs = {})));
                const is = 'Countdown_description_32',
                    ss = (e) => e.toString().padStart(2, '0'),
                    us = R.images.gui.maps.icons.components.countdown,
                    ls = (e, t) => {
                        const n = 2 === t ? us.big : us;
                        switch (e) {
                            case os.Timer:
                                return n.clock();
                            case os.Countdown:
                                return n.hourglass();
                            case os.Cooldown:
                                return n.lock();
                        }
                    },
                    cs = (0, o.memo)(
                        ({
                            duration: e,
                            withShortMinutes: t = !1,
                            icon: n = os.Timer,
                            style: a = rs.Description,
                            onTimeReached: o,
                            className: i = '',
                            classNames: u = {},
                            labelFormat: l = '',
                        }) => {
                            const c = a !== rs.Description ? 1 : void 0,
                                _ = qn(e, c),
                                d = (0, Pn.V)();
                            o && o[_] && o[_]();
                            const m = ((e, t, n = !1) => {
                                switch (t) {
                                    case rs.Description:
                                        return ((e, t = !0, n = !1) =>
                                            e.days > 7 && t
                                                ? pe(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? pe(R.strings.common.duration.days(), { days: e.days })
                                                      : `${pe(R.strings.common.duration.days(), { days: e.days })} ${pe(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? pe(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${pe(R.strings.common.duration.hours(), { hours: e.hours })} ${pe(n ? R.strings.common.duration.shortMinutes() : R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : pe(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e, !0, n);
                                    case rs.Short:
                                        return `${ss(e.minutes)}:${ss(e.seconds)}`;
                                    case rs.Long:
                                        return `${ss(e.hours)}:${ss(e.minutes)}:${ss(e.seconds)}`;
                                    case rs.Extended:
                                        return `${pe(R.strings.common.duration.days(), { days: e.days })} | ${ss(e.hours)}:${ss(e.minutes)}:${ss(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let t = e;
                                    const n = Math.trunc(t / 86400);
                                    t -= 86400 * n;
                                    const a = Math.trunc(t / 3600);
                                    t -= 3600 * a;
                                    const o = Math.trunc(t / 60);
                                    return ((t -= 60 * o), { days: n, hours: a, minutes: o, seconds: t });
                                })(_),
                                a,
                                t,
                            );
                            return r().createElement(
                                'div',
                                { className: s()('Countdown_base_2a', i) },
                                n !== os.None &&
                                    r().createElement('div', {
                                        className: s()('Countdown_icon_ff', u.icon),
                                        style: { backgroundImage: `url('${ls(n, d)}')` },
                                    }),
                                l
                                    ? r().createElement(
                                          'div',
                                          { className: s()(is, u.text) },
                                          r().createElement(fe, { text: l, binding: { timerText: m } }),
                                      )
                                    : r().createElement('div', { className: s()(is, u.text) }, m),
                            );
                        },
                    ),
                    _s = 100,
                    ds = (e, t) => (e / t) * 1.1,
                    ms = (0, o.memo)(
                        ({
                            type: e,
                            range: t,
                            scaleDowngradeTime: n,
                            pointsInProgress: a,
                            potentialPointsInProgress: i,
                            index: u,
                            isActive: l,
                            onComplete: c,
                            wasOverflowed: _,
                            onResetWasOverflowed: d,
                            onProgressFillSound: m,
                        }) => {
                            const p = (0, o.useState)(!1),
                                E = p[0],
                                g = p[1],
                                v = (0, o.useState)(!1),
                                b = v[0],
                                y = v[1],
                                h = M(),
                                A = (0, o.useState)(a),
                                f = A[0],
                                B = A[1],
                                F = (0, o.useState)(1),
                                w = F[0],
                                D = F[1],
                                S = (0, o.useState)(!0),
                                N = S[0],
                                T = S[1],
                                k = an();
                            (0, o.useEffect)(() => {
                                h ||
                                    (l && a !== f
                                        ? (a < f
                                              ? (D(ds(f - a, t)), y(!0))
                                              : (_ && 2 === u && (g(!0), d({ type: e })),
                                                D(ds(a - f, t)),
                                                y(!1),
                                                m({ type: e, started: !0 })),
                                          B(a),
                                          T(!1))
                                        : l && _ && 2 === u && (g(!0), d({ type: e })));
                            }, [l, a, _]);
                            const x = {
                                    backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.mainView.petView.categories.progress.background.$dyn(e)})`,
                                },
                                P = {
                                    backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.mainView.petView.categories.progress.dynamicBackground.$dyn(e)})`,
                                },
                                I = (f / t) * _s,
                                L = (i / t) * _s,
                                O = (l && (0 !== I || !N) && (I !== _s || !N || (I === _s && 2 === u))) || E,
                                H = (0, o.useMemo)(() => ({ text: 'Progress_downgradeTime_f1' }), []);
                            return r().createElement(
                                'div',
                                { className: 'Progress_base_3a' },
                                N &&
                                    r().createElement('div', {
                                        className: 'Progress_potentialProgress_57',
                                        style: Object.assign({}, x, { width: `${L}%` }),
                                    }),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'Progress_progress_de',
                                            E && N && 'Progress_progress__multyBounce_d5',
                                        ),
                                        style: Object.assign({}, x, { width: `${I}%`, transitionDuration: `${w}s` }),
                                        onTransitionEnd: () => {
                                            (b || m({ type: e, started: !1 }),
                                                T(!0),
                                                (f !== t && 0 !== f) ||
                                                    k.run(() => {
                                                        c(u, b);
                                                    }, 100));
                                        },
                                        onAnimationStart: () => {
                                            h || (0, C.G)(R.sounds.hangar_newyear_raccoon_max_resources());
                                        },
                                        onAnimationEndCapture: () => {
                                            g(!1);
                                        },
                                    },
                                    0 !== I &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('div', { className: 'Progress_dynamicMask_76' }),
                                            r().createElement('div', {
                                                className: 'Progress_dynamicBackground_52',
                                                style: P,
                                            }),
                                        ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'Progress_cursor_1f',
                                            E && N && 'Progress_cursor__multyBounce_06',
                                        ),
                                        style: { width: `${I}%`, transitionDuration: `${w}s` },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'Progress_cursorContainer_d6' },
                                        r().createElement('div', {
                                            className: s()(
                                                'Progress_cursorPointer_e4',
                                                O && 'Progress_cursorPointer__visible_f9',
                                            ),
                                        }),
                                    ),
                                ),
                                r().createElement('div', { className: 'Progress_mask_c4' }),
                                l &&
                                    Boolean(a) &&
                                    (N || b) &&
                                    r().createElement(
                                        'div',
                                        { className: 'Progress_timer_af' },
                                        r().createElement('div', { className: 'Progress_timerIcon_14' }),
                                        r().createElement(cs, {
                                            classNames: H,
                                            style: rs.Description,
                                            icon: os.None,
                                            duration: n,
                                            withShortMinutes: !0,
                                        }),
                                    ),
                            );
                        },
                    );
                function ps() {
                    return (
                        (ps =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ps.apply(this, arguments)
                    );
                }
                let Es;
                !(function (e) {
                    ((e.COMPLETED = 'completed'), (e.NOT_COMPLETED = 'not-completed'));
                })(Es || (Es = {}));
                const gs = R.strings.ny.pet.category,
                    vs = R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons,
                    bs = R.images.new_year.gui.maps.icons.newYear.mainView.petView,
                    ys = { description: R.strings.ny.petWidgetTooltips.petIndicator.itemsAmount.description() },
                    hs = (e, t, n) => (0 === e ? t > 0 : n[e - 1].state === Es.COMPLETED),
                    Cs = (0, o.memo)(
                        ({
                            activeBlink: e,
                            onboardingStep: t,
                            isPopoverOpened: n,
                            isOnboarding: a,
                            indicator: i,
                            isSelected: u,
                            setSelected: l,
                            progressState: c,
                            setProgressState: _,
                            setActiveBlink: d,
                            onResetWasOverflowed: m,
                            onProgressFillSound: p,
                            handleNextOnboardingStep: E,
                        }) => {
                            const g = i.type,
                                v = i.maxPoint,
                                b = i.curPoint,
                                y = i.scaleLevels,
                                h = i.itemCount,
                                A = i.wasOverflowed,
                                f = i.scaleDowngradeTime,
                                B = i.potentialCurPoint,
                                F = i.isLocked,
                                w = i.isLoading,
                                D = i.lettersToUnlock,
                                S = M(),
                                N = (0, o.useState)(!1),
                                T = N[0],
                                k = N[1];
                            ((0, o.useEffect)(() => {
                                _(
                                    ((e, t, n, a, o) =>
                                        n.map((r, i) => {
                                            const s = i === n.length - 1,
                                                u = (s ? a - r : n[i + 1] - r) + (0 === i ? 1 : 0);
                                            return {
                                                type: o,
                                                scaleLevel: r,
                                                state: e >= n[i + 1] ? Es.COMPLETED : Es.NOT_COMPLETED,
                                                pointsInProgress: Math.min(Math.max(e - r + (0 === i ? 1 : 0), 0), u),
                                                potentialPointsInProgress: Math.min(
                                                    Math.max(t - r + (0 === i ? 1 : 0), 0),
                                                    u,
                                                ),
                                                range: u,
                                                isActive: (e >= r && (e < n[i + 1] || s)) || (0 === i && e < n[i + 1]),
                                            };
                                        }))(b, B, y, v, g),
                                );
                            }, []),
                                (0, o.useEffect)(() => {
                                    S ||
                                        _((e) =>
                                            e.map((e, t) =>
                                                Object.assign({}, e, {
                                                    potentialPointsInProgress: Math.min(
                                                        Math.max(B - e.scaleLevel + (0 === t ? 1 : 0), 0),
                                                        e.range,
                                                    ),
                                                }),
                                            ),
                                        );
                                }, [B]),
                                (0, o.useEffect)(() => {
                                    (a && b > 0 && E(),
                                        S ||
                                            _((e) => {
                                                const t = e.find((e) => 0 === e.pointsInProgress && e.isActive),
                                                    n = e.findIndex((e) => 0 === e.pointsInProgress && e.isActive);
                                                if (t) {
                                                    const a = t.scaleLevel > b;
                                                    return e.map(
                                                        (e, t) => (
                                                            0 === e.pointsInProgress &&
                                                                0 === t &&
                                                                b > 0 &&
                                                                d({ index: t, type: g }),
                                                            e.isActive && a && t === n
                                                                ? Object.assign({}, e, { isActive: !1 })
                                                                : a && t === n - 1
                                                                  ? Object.assign({}, e, {
                                                                        isActive: !0,
                                                                        state: Es.NOT_COMPLETED,
                                                                        pointsInProgress: Math.min(
                                                                            Math.max(
                                                                                b - e.scaleLevel + (0 === t ? 1 : 0),
                                                                                0,
                                                                            ),
                                                                            e.range,
                                                                        ),
                                                                    })
                                                                  : Object.assign({}, e, {
                                                                        pointsInProgress: e.isActive
                                                                            ? Math.min(
                                                                                  Math.max(
                                                                                      b -
                                                                                          e.scaleLevel +
                                                                                          (0 === t ? 1 : 0),
                                                                                      0,
                                                                                  ),
                                                                                  e.range,
                                                                              )
                                                                            : e.pointsInProgress,
                                                                    })
                                                        ),
                                                    );
                                                }
                                                return e.map(
                                                    (e, t) => (
                                                        0 === e.pointsInProgress &&
                                                            0 === t &&
                                                            b > 0 &&
                                                            d({ index: t, type: g }),
                                                        Object.assign({}, e, {
                                                            pointsInProgress: e.isActive
                                                                ? Math.min(
                                                                      Math.max(b - e.scaleLevel + (0 === t ? 1 : 0), 0),
                                                                      e.range,
                                                                  )
                                                                : e.pointsInProgress,
                                                        })
                                                    ),
                                                );
                                            }));
                                }, [b, _]));
                            const x = { backgroundImage: `url(${vs.c_24x24.$dyn(g)})` },
                                P = { backgroundImage: `url(${bs.categories.mainIcon.$dyn(g)})` },
                                I = { backgroundImage: `url(${vs.c_34x34.$dyn(g)})` },
                                L = { backgroundImage: `url(${bs.categories.mainIcon.$dyn(g)})` },
                                O = { backgroundImage: `url(${bs.categories.mainIcon.$dyn(`${g}_select`)})` },
                                H = { backgroundImage: `url(${bs.categories.mainIcon.$dyn(`${g}_select_mask`)})` },
                                W = { backgroundImage: `url(${bs.categories.background.$dyn(`${g}_select`)})` },
                                V = { backgroundImage: `url(${bs.categories.progress.pointLight.$dyn(g)})` },
                                $ = { backgroundImage: `url(${bs.common.blinks.$dyn(g)})` },
                                U = (0, o.useCallback)(
                                    (e) => {
                                        F ||
                                            w ||
                                            (e.stopPropagation(),
                                            (t !== j.Fifth && t !== j.Seventh) || E(!0),
                                            t === j.Fifth && (0, C.G)(R.sounds.ny_vo_terentiy_help_stop()),
                                            C.$.playClick(),
                                            l(g));
                                    },
                                    [E, w, F, t, l, g],
                                ),
                                G = (e, t) => {
                                    _((n) =>
                                        n.map((a, o) => {
                                            if (o === e)
                                                return t
                                                    ? Object.assign({}, a, {
                                                          state: Es.NOT_COMPLETED,
                                                          isActive: 0 === e || b === a.scaleLevel,
                                                      })
                                                    : (d(e + 1 > 2 ? null : { index: e + 1, type: a.type }),
                                                      Object.assign({}, a, {
                                                          state: Es.COMPLETED,
                                                          isActive: b === a.scaleLevel || (b > a.scaleLevel && 2 === o),
                                                      }));
                                            if (t && o === e - 1) {
                                                const e = Math.min(
                                                        Math.max(b - a.scaleLevel + (0 === o ? 1 : 0), 0),
                                                        a.range,
                                                    ),
                                                    t = e === a.range;
                                                return Object.assign({}, a, {
                                                    state: t ? Es.COMPLETED : Es.NOT_COMPLETED,
                                                    pointsInProgress: e,
                                                    isActive: !t,
                                                });
                                            }
                                            if (!t && o === e + 1) {
                                                const t = Math.min(
                                                    Math.max(b - a.scaleLevel + (0 === o ? 1 : 0), 0),
                                                    a.range,
                                                );
                                                return Object.assign({}, a, {
                                                    pointsInProgress: t,
                                                    isActive: n[e].pointsInProgress === n[e].range || 0 !== t,
                                                });
                                            }
                                            return a;
                                        }),
                                    );
                                };
                            return r().createElement(
                                Re.u,
                                {
                                    contentId: R.views.new_year.lobby.new_year.tooltips.NyPetIndicatorTooltip('resId'),
                                    args: { type: g },
                                    isEnabled: !w && !F && !a,
                                },
                                r().createElement(
                                    Ut,
                                    {
                                        contentId:
                                            R.views.new_year.lobby.new_year.popovers.NyPetItemActivatePopover('resId'),
                                        direction: Ht.Right,
                                        onClick: U,
                                        args: { type: g },
                                        isEnabled: !F && !w,
                                    },
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Indicator_base_05',
                                                F && 'Indicator_base__locked_82',
                                                w && 'Indicator_base__loading_8f',
                                            ),
                                            onMouseEnter: () => {
                                                F || w || (C.$.playHighlight(), k(!0));
                                            },
                                            onMouseLeave: () => {
                                                F || w || k(!1);
                                            },
                                            id: g,
                                        },
                                        (t === j.Six || t === j.Fifth) &&
                                            !F &&
                                            !n &&
                                            r().createElement('div', { className: 'Indicator_onboardingBorder_26' }),
                                        r().createElement('div', { className: 'Indicator_background_13' }),
                                        r().createElement('div', {
                                            className: s()(
                                                'Indicator_backgroundHovered_8b',
                                                T && !u && 'Indicator_backgroundHovered__visible_79',
                                            ),
                                        }),
                                        r().createElement('div', {
                                            className: s()(
                                                'Indicator_backgroundSelected_79',
                                                u && 'Indicator_backgroundSelected__visible_11',
                                            ),
                                            style: W,
                                        }),
                                        r().createElement('div', {
                                            className: s()(
                                                'Indicator_backgroundDisabled_b9',
                                                (F || w) && 'Indicator_backgroundDisabled__visible_0f',
                                            ),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'Indicator_mainIcon_ae', style: P },
                                            r().createElement('div', {
                                                className: s()(
                                                    'Indicator_mainIconHovered_4b',
                                                    T && !u && 'Indicator_mainIconHovered__visible_49',
                                                ),
                                                style: L,
                                            }),
                                            r().createElement('div', {
                                                className: s()(
                                                    'Indicator_mainIconSelected_e8',
                                                    u && 'Indicator_mainIconSelected__visible_83',
                                                ),
                                                style: O,
                                            }),
                                            r().createElement('div', { className: 'Indicator_mainIconMask_3a' }),
                                            r().createElement('div', {
                                                className: s()(
                                                    'Indicator_mainIconSelectedMask_ae',
                                                    u && 'Indicator_mainIconSelectedMask__visible_93',
                                                ),
                                                style: H,
                                            }),
                                            r().createElement('div', {
                                                className: 'Indicator_mainCategoryImageIcon_1d',
                                                style: I,
                                            }),
                                            w &&
                                                !F &&
                                                r().createElement('div', { className: 'Indicator_mainIconLoading_61' }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'Indicator_bodyBackground_25' },
                                            r().createElement(
                                                'div',
                                                { className: 'Indicator_topContainer_e1' },
                                                r().createElement(
                                                    'div',
                                                    { className: 'Indicator_topContainerLeftSide_62' },
                                                    r().createElement(fs, {
                                                        isLocked: F,
                                                        activeBlink: e,
                                                        type: g,
                                                        progressState: c,
                                                    }),
                                                    r().createElement(Me, {
                                                        className: 'Indicator_type_6a',
                                                        text: gs.title.$dyn(g),
                                                    }),
                                                ),
                                                r().createElement(
                                                    Re.u,
                                                    {
                                                        contentId:
                                                            R.views.new_year.lobby.new_year.tooltips.CommonTooltip(
                                                                'resId',
                                                            ),
                                                        args: ys,
                                                        isEnabled: !w,
                                                    },
                                                    r().createElement(
                                                        'div',
                                                        { className: 'Indicator_itemsAmount_fc' },
                                                        r().createElement('div', {
                                                            className: 'Indicator_itemsAmountIcon_1e',
                                                            style: x,
                                                        }),
                                                        r().createElement(Me, {
                                                            className: 'Indicator_itemsAmountText_88',
                                                            text: gs.numOfItems(),
                                                            format: { binding: { value: h.toString() } },
                                                        }),
                                                    ),
                                                ),
                                            ),
                                            F
                                                ? r().createElement(Me, {
                                                      className: 'Indicator_disabledText_38',
                                                      text: gs.disabled(),
                                                      format: {
                                                          binding: {
                                                              value: r().createElement(Me, {
                                                                  className: 'Indicator_disabledValue_24',
                                                                  text: String(D),
                                                              }),
                                                          },
                                                      },
                                                  })
                                                : r().createElement(
                                                      r().Fragment,
                                                      null,
                                                      c.map((t, n) =>
                                                          r().createElement(
                                                              'div',
                                                              {
                                                                  key: t.scaleLevel,
                                                                  className: s()(
                                                                      'Indicator_breakPointNum_ad',
                                                                      0 === n && 'Indicator_firstNum_5c',
                                                                      1 === n && 'Indicator_secondNum_f5',
                                                                      2 === n && 'Indicator_thirdNum_d0',
                                                                  ),
                                                              },
                                                              r().createElement(
                                                                  'div',
                                                                  { className: 'Indicator_breakPointNumContainer_a2' },
                                                                  r().createElement(Me, {
                                                                      className: 'Indicator_topNum_3b',
                                                                      text: (t.scaleLevel - 1).toString(),
                                                                  }),
                                                                  e &&
                                                                      e.index === n &&
                                                                      e.type === g &&
                                                                      r().createElement('div', {
                                                                          className: 'Indicator_blink_4a',
                                                                          style: $,
                                                                          onAnimationEnd: () => d(null),
                                                                      }),
                                                                  r().createElement('div', {
                                                                      className: s()(
                                                                          'Indicator_activeLight_37',
                                                                          hs(n, t.pointsInProgress, c) &&
                                                                              'Indicator_activeLight__visible_2a',
                                                                      ),
                                                                      style: V,
                                                                  }),
                                                              ),
                                                          ),
                                                      ),
                                                      r().createElement('div', { className: 'Indicator_infinity_80' }),
                                                      r().createElement(
                                                          'div',
                                                          { className: 'Indicator_progresses_c3' },
                                                          c.map((e, t) =>
                                                              r().createElement(
                                                                  'div',
                                                                  { className: 'Indicator_progress_8a', key: t },
                                                                  r().createElement(
                                                                      ms,
                                                                      ps({}, e, {
                                                                          index: t,
                                                                          scaleDowngradeTime: f,
                                                                          onComplete: G,
                                                                          wasOverflowed: A,
                                                                          onResetWasOverflowed: m,
                                                                          onProgressFillSound: p,
                                                                      }),
                                                                  ),
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
                    As = R.images.new_year.gui.maps.icons.newYear.mainView.petView,
                    fs = (0, o.memo)(({ activeBlink: e, type: t, progressState: n, isLocked: a = !1 }) => {
                        const o = { backgroundImage: `url(${As.common.slot_blink.$dyn(t)})` },
                            i = { backgroundImage: `url(${As.common.blinks.$dyn(t)})` };
                        return r().createElement(
                            'div',
                            { className: s()('SlotIndicators_base_a4', a && 'SlotIndicators_base__locked_17') },
                            !a &&
                                n.map((a, u) =>
                                    r().createElement(
                                        'div',
                                        { className: 'SlotIndicators_lightContainer_82', key: a.scaleLevel },
                                        e &&
                                            e.index === u &&
                                            e.type === t &&
                                            r().createElement('div', {
                                                className: 'SlotIndicators_blink_98',
                                                style: i,
                                            }),
                                        r().createElement('div', {
                                            className: s()(
                                                'SlotIndicators_light_40',
                                                hs(u, a.pointsInProgress, n) && 'SlotIndicators_light__visible_c4',
                                            ),
                                            style: o,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Bs = (0, o.memo)(
                        ({
                            activeBlink: e,
                            activityProgressState: t,
                            funProgressState: n,
                            foodProgressState: a,
                            lockedIndicators: o,
                        }) => {
                            const i = (e) => {
                                switch (e) {
                                    case ns.Food:
                                        return a;
                                    case ns.Fun:
                                        return n;
                                    case ns.Activity:
                                        return t;
                                    default:
                                        return e;
                                }
                            };
                            return r().createElement(
                                'div',
                                { className: 'Boosts_base_34' },
                                Object.values(ns).map((t) =>
                                    r().createElement(
                                        'div',
                                        { key: t, className: 'Boosts_progressState_7d' },
                                        r().createElement('div', {
                                            className: 'Boosts_progressStateImage_e9',
                                            style: {
                                                backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.c_24x24_large.$dyn(t)})`,
                                            },
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'Boosts_slots_b6' },
                                            r().createElement(fs, {
                                                isLocked: o.includes(t),
                                                activeBlink: e,
                                                type: t,
                                                progressState: i(t),
                                            }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Fs = 'CurrentBonus_bonusText_83',
                    ws = 'CurrentBonus_prefix_b3',
                    Ds = R.strings.ny.pet.header,
                    Ss = (0, o.memo)(({ bonus: e, maxBonus: t }) => {
                        const n = e > 38 && e < t,
                            a = e === t;
                        return r().createElement(
                            'div',
                            { className: 'CurrentBonus_base_b6' },
                            r().createElement('div', { className: 'CurrentBonus_arrow_26' }),
                            r().createElement(
                                'div',
                                { className: 'CurrentBonus_bonuses_04' },
                                r().createElement(
                                    'div',
                                    { className: 'CurrentBonus_bonusWrapper_b1' },
                                    r().createElement(Me, {
                                        className: s()(
                                            Fs,
                                            a && 'CurrentBonus_bonusText__gold_de',
                                            n && 'CurrentBonus_bonusText__med_84',
                                        ),
                                        text: Ds.currentBonus(),
                                        format: {
                                            binding: {
                                                value: e.toString(),
                                                prefix: r().createElement(Me, { className: ws, text: Ds.prefix() }),
                                            },
                                        },
                                    }),
                                    a &&
                                        r().createElement(Me, {
                                            className: s()(Fs, 'CurrentBonus_bonusText__copied_98'),
                                            text: Ds.currentBonus(),
                                            format: {
                                                binding: {
                                                    value: e.toString(),
                                                    prefix: r().createElement(Me, { className: ws, text: Ds.prefix() }),
                                                },
                                            },
                                        }),
                                ),
                                r().createElement(Me, {
                                    className: 'CurrentBonus_maxBonusText_b6',
                                    text: Ds.maxBonus(),
                                    format: { binding: { value: t.toString() } },
                                }),
                            ),
                            r().createElement('div', { className: 'CurrentBonus_bonusIcon_80' }),
                        );
                    }),
                    Ns = R.strings.ny.pet.header,
                    Ts = (0, o.memo)(({ giftCount: e, onMailsClick: t }) => {
                        const n = (0, o.useState)(!1),
                            a = n[0],
                            i = n[1],
                            u = e > 0;
                        return r().createElement(
                            'div',
                            {
                                className: s()('MailsButton_base_c1', !u && 'MailsButton_base__disabled_10'),
                                onMouseEnter: () => {
                                    u && (i(!0), C.$.playHighlight());
                                },
                                onMouseLeave: () => {
                                    u && i(!1);
                                },
                                onClick: () => {
                                    u && (C.$.playClick(), t());
                                },
                            },
                            r().createElement('div', {
                                className: s()('MailsButton_mailsHover_b0', a && 'MailsButton_mailsHover__visible_e7'),
                            }),
                            r().createElement(
                                'div',
                                { className: 'MailsButton_mailsData_8a' },
                                r().createElement(Me, { className: 'MailsButton_mailsText_e0', text: Ns.checkMail() }),
                                0 !== e &&
                                    r().createElement(rn, {
                                        className: 'MailsButton_mailsNumberContainer_90',
                                        text: e.toString(),
                                    }),
                            ),
                        );
                    }),
                    ks = {
                        base: 'PopUp_base_b0',
                        firstBubble: 'PopUp_firstBubble_06',
                        fadeIn: 'PopUp_fadeIn_38',
                        secondBubble: 'PopUp_secondBubble_39',
                        bigBubble: 'PopUp_bigBubble_92',
                        indicatorImage: 'PopUp_indicatorImage_8d',
                        indicatorImage__0: 'PopUp_indicatorImage__0_10',
                        bigBubble__1: 'PopUp_bigBubble__1_8f',
                        bigBubble__2: 'PopUp_bigBubble__2_2e',
                        bigBubble__3: 'PopUp_bigBubble__3_8d',
                        indicatorImage__1: 'PopUp_indicatorImage__1_d8',
                        indicatorImage__2: 'PopUp_indicatorImage__2_43',
                    },
                    xs = (0, o.memo)(({ petNeeds: e }) => {
                        const t = (0, o.useState)(e),
                            n = t[0],
                            a = t[1],
                            i = (0, o.useState)(!0),
                            u = i[0],
                            l = i[1],
                            c = M();
                        ((0, o.useEffect)(() => {
                            c || (n.length < e.length ? (l(!0), a(e)) : l(!1));
                        }, [JSON.stringify(e)]),
                            (0, o.useEffect)(() => {
                                (0, C.G)(R.sounds.hangar_newyear_raccoon_cloud());
                            }, []));
                        const _ = c ? {} : { animationDelay: u ? '300ms' : '0ms' };
                        return r().createElement(
                            'div',
                            { className: ks.base },
                            r().createElement('div', { className: ks.firstBubble }),
                            r().createElement('div', { className: ks.secondBubble }),
                            r().createElement(
                                'div',
                                { className: s()(ks.bigBubble, Boolean(e.length) && ks[`bigBubble__${e.length}`]) },
                                e.map((e, t) =>
                                    r().createElement('div', {
                                        key: e,
                                        className: s()(ks.indicatorImage, ks[`indicatorImage__${t}`]),
                                        style: Object.assign(
                                            {
                                                backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.c_24x24_shadows.$dyn(e)})`,
                                            },
                                            _,
                                        ),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Ps = R.strings.ny.pet.header,
                    Is = {
                        header: R.strings.ny.petWidgetTooltips.header.mails.withoutPotentialLetters.header(),
                        description: R.strings.ny.petWidgetTooltips.header.mails.withoutPotentialLetters.description(),
                    },
                    Ms = ({ needToImprove: e, children: t }) =>
                        e
                            ? r().createElement(
                                  Re.u,
                                  {
                                      contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                      args: Is,
                                  },
                                  t,
                              )
                            : r().createElement(
                                  Re.u,
                                  { contentId: R.views.new_year.lobby.new_year.tooltips.NyPetMailsTooltip('resId') },
                                  t,
                              ),
                    Rs = (0, o.memo)(
                        ({
                            activeBlink: e,
                            activityProgressState: t,
                            funProgressState: n,
                            foodProgressState: a,
                            state: i,
                            curBonus: u,
                            giftCount: l,
                            giftTime: c,
                            maxBonus: _,
                            onMailsClick: d,
                            lockedIndicators: m,
                            petNeeds: p,
                            onboardingStep: E,
                        }) => {
                            const g = M(),
                                v = (0, o.useState)(i),
                                b = v[0],
                                y = v[1],
                                h = (0, o.useState)(!1),
                                C = h[0],
                                A = h[1],
                                f = an(),
                                B = an();
                            (0, o.useEffect)(() => {
                                g ||
                                    b === i ||
                                    (f.run(() => {
                                        A(!0);
                                    }, 3e3),
                                    B.run(() => {
                                        y(i);
                                    }, 3150));
                            }, [i]);
                            const F = {
                                    backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.mainView.petView.header.state.$dyn(b)})`,
                                },
                                w = K[E].rules,
                                D = c < 0,
                                S = l > 0;
                            return r().createElement(
                                'div',
                                { className: 'Header_base_68' },
                                r().createElement('div', {
                                    style: F,
                                    className: s()('Header_petImage_a9', C && 'Header_petImage__animated_05'),
                                    onAnimationEnd: () => A(!1),
                                }),
                                S &&
                                    r().createElement('div', {
                                        className: s()(
                                            'Header_topMailImage_3d',
                                            w.includes(Z.MailBlock) && 'Header_topMailImage__visible_7d',
                                        ),
                                    }),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'Header_nextMail_39',
                                            w.includes(Z.MailBlock) && !D && 'Header_nextMail__visible_00',
                                        ),
                                    },
                                    r().createElement(Me, { className: 'Header_nextMailText_d0', text: Ps.nextMail() }),
                                    r().createElement(cs, {
                                        classNames: { text: 'Header_nextMailTime_4b' },
                                        style: rs.Description,
                                        icon: os.None,
                                        duration: c,
                                    }),
                                ),
                                Boolean(p.length) &&
                                    w.includes(Z.Needs) &&
                                    r().createElement(
                                        'div',
                                        { className: 'Header_headerPopUp_07' },
                                        r().createElement(xs, { petNeeds: p }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: 'Header_boosts_15' },
                                    r().createElement(Bs, {
                                        activeBlink: e,
                                        activityProgressState: t,
                                        foodProgressState: a,
                                        funProgressState: n,
                                        lockedIndicators: m,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'Header_sumBoost_0f' },
                                    r().createElement(Ss, { bonus: u, maxBonus: _ }),
                                ),
                                D &&
                                    r().createElement(Me, {
                                        className: s()(
                                            'Header_needImproveText_eb',
                                            w.includes(Z.Needs) && 'Header_needImproveText__visible_a5',
                                            S && 'Header_needImproveText__withMails_a3',
                                        ),
                                        text: Ps.needToImprove(),
                                    }),
                                r().createElement(
                                    Re.u,
                                    { contentId: R.views.new_year.lobby.new_year.tooltips.NyPetBonusTooltip('resId') },
                                    r().createElement('div', { className: 'Header_bonusTooltip_62' }),
                                ),
                                r().createElement(
                                    Ms,
                                    { needToImprove: D },
                                    r().createElement(
                                        'div',
                                        {
                                            className: s()(
                                                'Header_mailsButton_64',
                                                w.includes(Z.MailBlock) && 'Header_mailsButton__visible_78',
                                            ),
                                        },
                                        r().createElement(Ts, { giftCount: l, onMailsClick: d }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ls = R.strings.ny.pet.shopEntryPoint,
                    Os = ({ onClick: e }) => {
                        const t = (0, o.useState)(!1),
                            n = t[0],
                            a = t[1];
                        return r().createElement(
                            'div',
                            {
                                className: 'Shop_base_f6',
                                onMouseEnter: () => {
                                    (C.$.playHighlight(), a(!0));
                                },
                                onMouseLeave: () => {
                                    a(!1);
                                },
                                onClick: () => {
                                    (C.$.playClick(), (0, C.G)(R.sounds.hangar_newyear_woosh_screen()), e());
                                },
                            },
                            r().createElement('div', {
                                className: s()('Shop_hover_1f', n && 'Shop_hover__visible_a5'),
                            }),
                            r().createElement(Me, { className: 'Shop_title_65', text: Ls.title() }),
                            r().createElement(Me, { className: 'Shop_description_bd', text: Ls.description() }),
                        );
                    },
                    Hs = {
                        base: 'PetWidget_base_9a',
                        header: 'PetWidget_header_4f',
                        header__inOpacity: 'PetWidget_header__inOpacity_86',
                        base__onboardingFinished: 'PetWidget_base__onboardingFinished_33',
                        indicators: 'PetWidget_indicators_33',
                        indicators__inOpacity: 'PetWidget_indicators__inOpacity_3e',
                        indicators__touchable: 'PetWidget_indicators__touchable_7a',
                        indicator: 'PetWidget_indicator_13',
                        flyPointsContainer: 'PetWidget_flyPointsContainer_d8',
                        shop: 'PetWidget_shop_47',
                        shop__inOpacity: 'PetWidget_shop__inOpacity_96',
                    };
                function Ws() {
                    return (
                        (Ws =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ws.apply(this, arguments)
                    );
                }
                const Vs = (0, L.observer)(
                    ({
                        onboardingStep: e,
                        selectedIndicator: t,
                        setSelectedIndicator: n,
                        handleNextOnboardingStep: a,
                    }) => {
                        const i = nn(),
                            u = i.model,
                            l = i.controls,
                            c = u.petModel.get(),
                            _ = c.state,
                            d = c.curBonus,
                            m = c.maxBonus,
                            p = c.giftTime,
                            E = c.giftCount,
                            g = c.isPopoverOpened,
                            v = c.isOnboarding,
                            b = u.computes.getPetIndicators(),
                            y = u.computes.getPetNeeds(),
                            h = u.computes.getLockedPetIndicators(),
                            A = (0, o.useState)(null),
                            f = A[0],
                            B = A[1],
                            F = (0, o.useState)([]),
                            w = F[0],
                            D = F[1],
                            S = (0, o.useState)([]),
                            N = S[0],
                            T = S[1],
                            k = (0, o.useState)([]),
                            x = k[0],
                            P = k[1];
                        return (
                            (0, o.useEffect)(() => {
                                f && (0, C.G)(R.sounds.hangar_newyear_raccoon_indication());
                            }, [f]),
                            r().createElement(
                                'div',
                                {
                                    className: s()(Hs.base, (!v || e >= j.Seventh) && Hs.base__onboardingFinished),
                                    onClick: () => {
                                        n(null);
                                    },
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            Hs.header,
                                            K[e].rules.includes(Z.HeaderOpacity) && Hs.header__inOpacity,
                                        ),
                                    },
                                    r().createElement(Rs, {
                                        state: _,
                                        curBonus: d,
                                        maxBonus: m,
                                        giftTime: p,
                                        giftCount: E,
                                        onMailsClick: l.onPetGetGift,
                                        activeBlink: f,
                                        activityProgressState: x,
                                        foodProgressState: w,
                                        funProgressState: N,
                                        lockedIndicators: h,
                                        petNeeds: y,
                                        onboardingStep: e,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            Hs.indicators,
                                            (e === j.Fifth || e === j.Six) && Hs.indicators__touchable,
                                            !K[e].rules.includes(Z.Indicators) && Hs.indicators__inOpacity,
                                        ),
                                    },
                                    b.map((o) =>
                                        r().createElement(
                                            'div',
                                            { key: o.type, className: Hs.indicator },
                                            r().createElement(
                                                Cs,
                                                Ws(
                                                    {
                                                        activeBlink: f,
                                                        indicator: o,
                                                        isSelected: t === o.type,
                                                        setSelected: n,
                                                        onResetWasOverflowed: l.onResetWasOverflowed,
                                                        onProgressFillSound: l.onProgressFillSound,
                                                        handleNextOnboardingStep: a,
                                                        setActiveBlink: B,
                                                        onboardingStep: e,
                                                        isPopoverOpened: g,
                                                        isOnboarding: v,
                                                    },
                                                    ((e) => {
                                                        switch (e) {
                                                            case ns.Food:
                                                                return { progressState: w, setProgressState: D };
                                                            case ns.Fun:
                                                                return { progressState: N, setProgressState: T };
                                                            case ns.Activity:
                                                                return { progressState: x, setProgressState: P };
                                                            default:
                                                                return e;
                                                        }
                                                    })(o.type),
                                                ),
                                            ),
                                            Boolean(o.itemLeaderboardPoint.length) &&
                                                o.itemLeaderboardPoint.map((e) =>
                                                    r().createElement(
                                                        'div',
                                                        {
                                                            className: s()(
                                                                Hs.flyPointsContainer,
                                                                Hs[`flyPointsContainer__${o.type}`],
                                                            ),
                                                            key: e.id,
                                                        },
                                                        r().createElement(
                                                            as,
                                                            null,
                                                            r().createElement(rn, {
                                                                className: Hs.flyPointsContent,
                                                                text: `${R.strings.ny.pet.header.prefix()}${e.value}`,
                                                            }),
                                                        ),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            Hs.shop,
                                            K[e].rules.includes(Z.ShopOpacity) && Hs.shop__inOpacity,
                                        ),
                                    },
                                    r().createElement(Os, { onClick: l.onPetShopClick }),
                                ),
                            )
                        );
                    },
                );
                let $s, Us, Gs;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })($s || ($s = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(Us || (Us = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(Gs || (Gs = {})));
                const js = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    zs = ({
                        isDiscount: e,
                        isInteractiveDiscount: t,
                        size: n,
                        type: a,
                        isEnough: o,
                        value: i,
                        discountValue: u,
                        showPlus: l,
                        stockBackgroundName: c = Gs.Red,
                    }) => {
                        const _ = s()(js.value, js[`value__${a}`], !o && js.value__notEnough),
                            d = s()(js.icon, js[`icon__${a}-${n}`]),
                            m = s()(js.stock, u && js.stock__indent, t && js.stock__interactive),
                            p = l && i > 0 && '+',
                            E = s()(js.base, js[`base__${n}`]);
                        return r().createElement(
                            'span',
                            { className: E },
                            r().createElement(
                                'span',
                                { className: _ },
                                p,
                                r().createElement(J, { value: i, format: a === Us.gold ? 'gold' : 'integral' }),
                            ),
                            r().createElement('span', { className: d }),
                            e &&
                                r().createElement(
                                    'span',
                                    { className: m },
                                    r().createElement('span', {
                                        className: js.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                    }),
                                    Boolean(u) && u,
                                ),
                        );
                    };
                zs.defaultProps = { isEnough: !0 };
                const Ys = r().memo(zs),
                    Zs = (e) => {
                        switch (e) {
                            case ns.Food:
                                return '#FFEEBB';
                            case ns.Fun:
                                return '#E9FFDE';
                            case ns.Activity:
                                return '#DEF8FF';
                            default:
                                return e;
                        }
                    },
                    Xs = R.strings.ny.pet.shop.card,
                    qs = (0, o.memo)(
                        ({
                            categoryCurrencyImage: e,
                            setIsFocused: t,
                            isFocused: n,
                            currentPrice: a,
                            currentPointPrice: i,
                            type: s,
                            onAmountChange: u,
                        }) => {
                            const l = (0, o.useState)(1),
                                c = l[0],
                                _ = l[1];
                            (0, o.useEffect)(() => {
                                u({ type: s, num: c });
                            }, [c]);
                            const d = (0, o.useCallback)(
                                    (e) => {
                                        _(e);
                                    },
                                    [_],
                                ),
                                m = (0, o.useCallback)(() => {
                                    c < 9999 && _(c + 1);
                                }, [c, _]),
                                p = (0, o.useCallback)(() => {
                                    c > 0 && _(c - 1);
                                }, [c, _]);
                            return r().createElement(
                                'div',
                                { className: 'FooterBottomBlock_base_c1' },
                                r().createElement(
                                    'div',
                                    { className: 'FooterBottomBlock_topSection_ec' },
                                    r().createElement(Me, {
                                        className: 'FooterBottomBlock_oneItemPrice_7b',
                                        text: Xs.info.oneItemPrice(),
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'FooterBottomBlock_currentCurrency_80' },
                                        r().createElement(Me, {
                                            className: 'FooterBottomBlock_onePoint_42',
                                            text: String(1),
                                        }),
                                        r().createElement('div', {
                                            className: 'FooterBottomBlock_categoryCurrencyImage_78',
                                            style: e,
                                        }),
                                        r().createElement(Me, {
                                            className: 'FooterBottomBlock_equal_00',
                                            text: Xs.info.equal(),
                                        }),
                                        r().createElement(
                                            'div',
                                            null,
                                            r().createElement(Ys, { size: $s.small, type: Us.credits, value: i }),
                                        ),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'FooterBottomBlock_stepperWithValue_b5' },
                                    r().createElement(
                                        'div',
                                        { className: 'FooterBottomBlock_currentPrice_ca' },
                                        Boolean(a) &&
                                            r().createElement(Ys, { size: $s.small, type: Us.credits, value: a }),
                                    ),
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(Di.$, {
                                            className: 'FooterBottomBlock_stepper_68',
                                            currencyImage:
                                                R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.c_30x30.$dyn(
                                                    s,
                                                ),
                                            borderColor: Zs(s),
                                            value: c,
                                            minValue: 0,
                                            maxValue: 9999,
                                            isFocused: n,
                                            setIsFocused: t,
                                            handleTokenChange: d,
                                            handleTokenIncrease: m,
                                            handleTokenDecrease: p,
                                            controlsTooltipContentId:
                                                R.views.new_year.lobby.new_year.tooltips.NyPetTokenStepperTooltip(
                                                    'resId',
                                                ),
                                            controlsTooltipArgs: { type: s },
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Ks = R.strings.ny.pet.shop.card.info;
                var Js;
                !(function (e) {
                    ((e[(e.LEADERBOARD = 0)] = 'LEADERBOARD'), (e[(e.PROGRESS = 1)] = 'PROGRESS'));
                })(Js || (Js = {}));
                const Qs = [Js.PROGRESS, Js.LEADERBOARD],
                    eu = (0, o.memo)(({ loyaltyPoints: e, vitalityPoints: t }) =>
                        r().createElement(
                            'div',
                            { className: 'PointsInfo_base_dd' },
                            r().createElement(Me, { className: 'PointsInfo_title_b9', text: Ks.title() }),
                            r().createElement(
                                'div',
                                { className: 'PointsInfo_pointsValues_00' },
                                Qs.map((n) =>
                                    r().createElement(
                                        'div',
                                        { className: 'PointsInfo_pointsValue_ee', key: n },
                                        r().createElement(Me, {
                                            className: 'PointsInfo_pointsText_d0',
                                            text: Ks.$dyn(
                                                n === Js.PROGRESS ? 'pointsToProgress' : 'pointsToLeaderboard',
                                            ),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'PointsInfo_value_55' },
                                            r().createElement(J, {
                                                value: n === Js.PROGRESS ? t : e,
                                                format: 'integral',
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    tu = R.strings.ny.pet.shop,
                    nu = R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons,
                    au = R.images.new_year.gui.maps.icons.newYear.mainView.petView,
                    ou = (0, o.memo)(
                        ({
                            isWaiting: e,
                            isLocked: t,
                            lettersToUnlock: n,
                            currentPrice: a,
                            currentPointPrice: i,
                            loyaltyPoints: u,
                            vitalityPoints: l,
                            itemsInInventory: _,
                            type: d,
                            onAmountChange: m,
                        }) => {
                            const p = (0, c.GS)().mediaSize >= c.cJ.Large,
                                E = (0, o.useState)(!1),
                                g = E[0],
                                v = E[1],
                                b = (0, o.useState)(!1),
                                y = b[0],
                                h = b[1];
                            (0, o.useEffect)(() => {
                                (t || e) && (v(!1), h(!1));
                            }, [t, e]);
                            const A = {
                                    backgroundImage: `url(${au.shop.cards.category.$dyn(`${d}` + (p ? '_large' : ''))})`,
                                },
                                f = { backgroundImage: `url(${nu.c_24x24.$dyn(d)})` },
                                B = {
                                    backgroundImage: `url(${au.shop.cards.lights.$dyn(`${d}${p ? '_large' : ''}`)})`,
                                };
                            return r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'Card_base_76',
                                        g && 'Card_base__hovered_2c',
                                        y && 'Card_base__active_19',
                                        t && 'Card_base__locked_58',
                                        e && !t && 'Card_base__waiting_f8',
                                    ),
                                    onClick: () => {
                                        e || t || (C.$.playClick(), h(!0));
                                    },
                                    onMouseEnter: () => {
                                        e || t || (C.$.playHighlight(), v(!0));
                                    },
                                    onMouseLeave: () => {
                                        e || t || v(!1);
                                    },
                                },
                                r().createElement('div', { className: 'Card_categoryImage_8e', style: A }),
                                r().createElement('div', { className: 'Card_hoverImage_3a' }),
                                (e || t) && r().createElement('div', { className: 'Card_disabledMask_21' }),
                                r().createElement(
                                    'div',
                                    { className: 'Card_header_e7' },
                                    r().createElement(Me, { className: 'Card_title_86', text: tu.card.title.$dyn(d) }),
                                    r().createElement(Me, {
                                        className: 'Card_description_c7',
                                        text: tu.card.description.$dyn(d),
                                    }),
                                ),
                                r().createElement(
                                    Re.u,
                                    {
                                        contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                        args: ys,
                                        isEnabled: !e,
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'Card_itemsAmount_5b' },
                                        r().createElement(
                                            'div',
                                            { className: 'Card_itemsAmountContainer_b0' },
                                            r().createElement('div', {
                                                className: 'Card_itemsAmountIcon_8d',
                                                style: f,
                                            }),
                                            r().createElement(Me, {
                                                className: 'Card_itemsAmountText_e9',
                                                text: tu.card.inInventory(),
                                                format: { binding: { value: _.toString() } },
                                            }),
                                        ),
                                    ),
                                ),
                                !t &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: 'Card_light_78', style: B }),
                                        r().createElement(
                                            'div',
                                            { className: 'Card_pointsInfo_f9' },
                                            r().createElement(eu, { loyaltyPoints: u, vitalityPoints: l }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'Card_footer_cb' },
                                            r().createElement(qs, {
                                                categoryCurrencyImage: f,
                                                type: d,
                                                isFocused: y,
                                                setIsFocused: h,
                                                currentPointPrice: i,
                                                currentPrice: a,
                                                onAmountChange: m,
                                            }),
                                        ),
                                    ),
                                e && !t && r().createElement('div', { className: 'Card_loader_35' }),
                                t &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: 'Card_lock_69' }),
                                        r().createElement(
                                            'div',
                                            { className: 'Card_lockText_83' },
                                            r().createElement(Me, {
                                                className: 'Card_lockDescription_36',
                                                text: tu.lockedDescription(),
                                            }),
                                            r().createElement(Me, {
                                                className: 'Card_lockValueText_6d',
                                                text: tu.lockedValue(),
                                                format: {
                                                    binding: {
                                                        value: r().createElement(Me, {
                                                            className: 'Card_lockedValue_ff',
                                                            text: String(n),
                                                        }),
                                                    },
                                                },
                                            }),
                                        ),
                                    ),
                            );
                        },
                    ),
                    ru = R.strings.ny.pet.shopDialog,
                    iu = R.sounds.hangar_newyear_woosh_screen(),
                    su = (0, o.memo)(({ fullPrice: e, shopCards: t, onClose: n, onSubmit: a }) => {
                        const i = (0, o.useState)(!1),
                            u = i[0],
                            l = i[1],
                            c = an(),
                            _ = (0, o.useCallback)(() => {
                                ((0, C.G)(iu),
                                    l(!0),
                                    c.run(() => {
                                        n();
                                    }, 300));
                            }, [n, c]),
                            d = (0, o.useCallback)(() => {
                                ((0, C.G)(iu), a());
                            }, [a]);
                        return r().createElement(
                            'div',
                            { className: s()('ShopDialog_base_df', u && 'ShopDialog_base__hide_5f') },
                            r().createElement(Me, { className: 'ShopDialog_title_12', text: ru.title() }),
                            r().createElement(
                                'div',
                                { className: 'ShopDialog_cards_62' },
                                t.map((e) =>
                                    r().createElement(
                                        'div',
                                        { className: 'ShopDialog_card_3d', key: e.type },
                                        r().createElement(Me, {
                                            className: 'ShopDialog_cardTitle_8f',
                                            text: ru.cardTitle.$dyn(e.type),
                                        }),
                                        r().createElement('div', {
                                            className: 'ShopDialog_cardImage_f5',
                                            style: {
                                                backgroundImage: `url(${R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.c_180x135.$dyn(e.type)})`,
                                            },
                                        }),
                                        r().createElement(Me, {
                                            className: 'ShopDialog_cardValue_09',
                                            text: ru.cardValue(),
                                            format: { binding: { number: e.amount } },
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(Me, { className: 'ShopDialog_description_f4', text: ru.description() }),
                            r().createElement('div', { className: 'ShopDialog_line_86' }),
                            r().createElement(Me, {
                                className: 'ShopDialog_fullPrice_bd',
                                text: ru.fullPrice(),
                                format: {
                                    binding: {
                                        price: r().createElement(
                                            'div',
                                            { className: 'ShopDialog_fullPriceValue_67' },
                                            r().createElement(Ys, { size: $s.big, type: 'credits', value: e }),
                                        ),
                                    },
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: 'ShopDialog_buttons_75' },
                                r().createElement(
                                    pt,
                                    {
                                        size: ct.medium,
                                        mixClass: 'ShopDialog_submitButton_34',
                                        type: lt.primary,
                                        onClick: d,
                                    },
                                    r().createElement(Me, { text: ru.submitButton() }),
                                ),
                                r().createElement(
                                    pt,
                                    {
                                        size: ct.medium,
                                        mixClass: 'ShopDialog_closeButton_e5',
                                        type: lt.secondary,
                                        onClick: _,
                                    },
                                    r().createElement(Me, { text: ru.closeButtom() }),
                                ),
                            ),
                        );
                    }),
                    uu = 'Shop_ice_23';
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                const cu = R.strings.ny.pet.shopDialog,
                    _u = R.strings.ny.pet.shop,
                    du = R.sounds.hangar_newyear_woosh_screen(),
                    mu = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.computes.getPetShop(),
                            i = a.shopCards,
                            u = a.fullPrice,
                            l = a.isBuyButtonEnabled,
                            c = a.isDialogScreen,
                            _ = a.isEnough,
                            d = (0, o.useState)(!1),
                            m = d[0],
                            p = d[1],
                            E = t.computes.getIsPetShopWaiting(),
                            g = an(),
                            v = (0, o.useCallback)(() => {
                                (E ||
                                    c ||
                                    ((0, C.G)(du),
                                    p(!0),
                                    g.run(() => {
                                        n.onPetShopClose();
                                    }, 300)),
                                    c && n.onPetShopDialogClose());
                            }, [n, c, E, g]);
                        x({ callback: v });
                        const b = (0, o.useMemo)(
                                () =>
                                    i
                                        .filter((e) => 0 !== e.currentPrice)
                                        .map((e) =>
                                            Object.assign({}, e, { amount: e.currentPrice / e.currentPointPrice }),
                                        ),
                                [i],
                            ),
                            y = (0, o.useCallback)(() => {
                                ((0, C.G)(du), n.onPetShopBuy());
                            }, [n]);
                        return r().createElement(
                            'div',
                            { className: s()('Shop_base_58', m && 'Shop_base__hide_f0') },
                            r().createElement(F, {
                                classNames: { base: 'Shop_backTextButton_1c' },
                                type: 'back',
                                caption: _u.backButtonLabel(),
                                goto: c ? cu.backButtonGoToLabel() : _u.backButtonGoToLabel(),
                                onClick: v,
                            }),
                            r().createElement(
                                'div',
                                { className: 'Shop_container_c5' },
                                r().createElement(
                                    'div',
                                    { className: 'Shop_header_a8' },
                                    r().createElement(Me, { className: 'Shop_title_80', text: _u.title() }),
                                    r().createElement(Me, { className: 'Shop_description_3b', text: _u.description() }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'Shop_mainContent_5c' },
                                    r().createElement('div', { className: s()(uu, 'Shop_ice__left_f0') }),
                                    r().createElement(
                                        'div',
                                        { className: 'Shop_cards_fb' },
                                        i.map((e) =>
                                            r().createElement(
                                                ou,
                                                lu({ key: e.type, onAmountChange: n.onPetItemsAmountChange }, e, {
                                                    isWaiting: E,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement('div', { className: s()(uu, 'Shop_ice__right_aa') }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'Shop_footer_6d' },
                                    r().createElement(Me, {
                                        className: 'Shop_fullPrice_b6',
                                        text: _u.fullPrice(),
                                        format: {
                                            binding: {
                                                price: r().createElement(
                                                    'div',
                                                    { className: 'Shop_fullPriceValue_38' },
                                                    r().createElement(Ys, {
                                                        size: $s.big,
                                                        isEnough: _,
                                                        type: 'credits',
                                                        value: u,
                                                    }),
                                                ),
                                            },
                                        },
                                    }),
                                    r().createElement(
                                        pt,
                                        {
                                            size: ct.medium,
                                            mixClass: 'Shop_buyButton_72',
                                            type: lt.primary,
                                            onClick: y,
                                            disabled: !l || E || !u || !_,
                                        },
                                        E
                                            ? r().createElement('div', { className: 'Shop_spinner_71' })
                                            : r().createElement(Me, { text: _u.buyButton() }),
                                    ),
                                    r().createElement(
                                        pt,
                                        {
                                            size: ct.medium,
                                            mixClass: 'Shop_backButton_72',
                                            type: lt.secondary,
                                            onClick: v,
                                            disabled: E,
                                        },
                                        r().createElement(Me, { text: _u.backButton() }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Shop_additionalInfo_65' },
                                r().createElement(Me, {
                                    className: 'Shop_additionalInfoText_a2',
                                    text: _u.footerText(),
                                }),
                            ),
                            c &&
                                r().createElement(
                                    'div',
                                    { className: 'Shop_shopDialog_20' },
                                    r().createElement(su, {
                                        fullPrice: u,
                                        shopCards: b,
                                        onSubmit: n.onPetShopDialogSubmit,
                                        onClose: n.onPetShopDialogClose,
                                    }),
                                ),
                        );
                    }),
                    pu = (0, o.memo)(({ showNewStoryAnimation: e, isStoryEntryPointBubble: t, onClick: n }) => {
                        const a = (0, o.useState)(!1),
                            i = a[0],
                            u = a[1],
                            l = (0, o.useState)(!1),
                            c = l[0],
                            _ = l[1];
                        return (
                            (0, o.useEffect)(() => {
                                if (e)
                                    return w(() => {
                                        ((0, C.G)(R.sounds.hangar_newyear_history_window()), _(!0));
                                    }, 5e3);
                            }, [e]),
                            r().createElement(
                                'div',
                                {
                                    className: s()('StoryEntryPoint_base_93', i && 'StoryEntryPoint_base__hovered_c6'),
                                    onClick: () => {
                                        (C.$.playClick(), (0, C.G)(R.sounds.hangar_newyear_woosh_screen()), n());
                                    },
                                    onMouseEnter: () => {
                                        ((0, C.G)(R.sounds.gui_hangar_hover()), u(!0));
                                    },
                                    onMouseLeave: () => {
                                        u(!1);
                                    },
                                },
                                c &&
                                    r().createElement('div', {
                                        className: 'StoryEntryPoint_needToShowNewStoryAnimation_20',
                                    }),
                                r().createElement('div', { className: 'StoryEntryPoint_secondImage_4b' }),
                                r().createElement(
                                    'div',
                                    { className: 'StoryEntryPoint_thirdImage_59' },
                                    t && r().createElement(rn, { className: 'StoryEntryPoint_bubble_58' }),
                                ),
                                r().createElement('div', { className: 'StoryEntryPoint_firstImage_7f' }),
                                r().createElement(Me, {
                                    className: 'StoryEntryPoint_text_ea',
                                    text: R.strings.ny.pet.storyEntryPoint(),
                                }),
                            )
                        );
                    }),
                    Eu = (0, o.memo)(({ storyNumber: e, needToClose: t, onClose: n, setShowNewStoryAnimation: a }) => {
                        const i = (0, o.useState)(!1),
                            u = i[0],
                            l = i[1],
                            c = (0, o.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            m = an();
                        return (
                            (0, o.useEffect)(() => {
                                if (!u)
                                    return w(() => {
                                        (0, C.G)(R.sounds.ny_vo_terentiy_help_stories());
                                    }, 3e3);
                            }, [u]),
                            (0, o.useEffect)(
                                () => (
                                    (0, C.G)(R.sounds.hangar_newyear_cloud_voice()),
                                    w(() => {
                                        (a(!0), (0, C.G)(R.sounds.hangar_newyear_history_window()));
                                    }, 5e3)
                                ),
                                [],
                            ),
                            (0, o.useEffect)(() => {
                                if (t)
                                    return (
                                        l(!0),
                                        (0, C.G)(R.sounds.hangar_newyear_help_next_step_click()),
                                        w(() => {
                                            n();
                                        }, 300)
                                    );
                            }, [t]),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'StoryTipWithPrompter_base_cd',
                                        u && 'StoryTipWithPrompter_base__hidden_e9',
                                    ),
                                },
                                r().createElement('div', { className: 'StoryTipWithPrompter_prompter_4a' }),
                                r().createElement(
                                    'div',
                                    { className: 'StoryTipWithPrompter_bubbles_98' },
                                    r().createElement('div', { className: 'StoryTipWithPrompter_firstBubble_ef' }),
                                    r().createElement('div', { className: 'StoryTipWithPrompter_secondBubble_66' }),
                                    r().createElement(
                                        'div',
                                        { className: 'StoryTipWithPrompter_bigBubble_58' },
                                        r().createElement(Me, {
                                            className: 'StoryTipWithPrompter_text_63',
                                            text: R.strings.ny.pet.onboarding.story.description.$dyn(`c_${e}`),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: 'StoryTipWithPrompter_close_c2' },
                                            r().createElement('div', { className: 'StoryTipWithPrompter_cross_6e' }),
                                            r().createElement('div', {
                                                className: s()(
                                                    'StoryTipWithPrompter_crossHover_ec',
                                                    _ && 'StoryTipWithPrompter_crossHover__visible_54',
                                                ),
                                            }),
                                            r().createElement('div', {
                                                className: 'StoryTipWithPrompter_closeHoverZone_e3',
                                                onMouseEnter: () => {
                                                    (C.$.playHighlight(), d(!0));
                                                },
                                                onMouseLeave: () => {
                                                    d(!1);
                                                },
                                                onClick: () => {
                                                    (l(!0),
                                                        (0, C.G)(R.sounds.hangar_newyear_help_next_step_click()),
                                                        m.run(() => {
                                                            n();
                                                        }, 300));
                                                },
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    gu = 'NyPetView_tip_9e',
                    vu = R.strings.ny.petStoryTooltip,
                    bu = { header: vu.header(), description: vu.description() },
                    yu = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.petOnboardingStep.get(),
                            i = t.computes.getPetModel(),
                            u = i.isOnboarding,
                            l = i.isOnboardingVideoClosed,
                            c = i.isStoryEntryPointBubble,
                            _ = i.hasPetAnimations,
                            d = i.needToCloseSingleTip,
                            m = i.newStoryOpenedNumber,
                            p = i.singleTip,
                            E = (0, o.useState)(!1),
                            g = E[0],
                            v = E[1],
                            b = (0, o.useState)(!1),
                            y = b[0],
                            h = b[1];
                        (0, o.useEffect)(() => {
                            (u && n.setPetOnboardingStep(j.Video), u || n.setPetOnboardingStep(j.End));
                        }, [u]);
                        const A = t.computes.getPetShop().isShopEnabled,
                            f = t.root.get().switchState,
                            B = (0, o.useState)(!1),
                            F = B[0],
                            w = B[1],
                            D = (0, o.useState)(!1),
                            S = D[0],
                            N = D[1],
                            T = (0, o.useState)(!1),
                            k = T[0],
                            x = T[1],
                            P = (0, o.useState)(null),
                            I = P[0],
                            M = P[1],
                            L = (0, o.useState)(!1),
                            O = L[0],
                            W = L[1],
                            V = (0, o.useState)(!0),
                            $ = V[0],
                            U = V[1],
                            z = f === H.WITH_SWITCHING_OBJS,
                            Y = an(),
                            X = an(),
                            J = an();
                        ((0, o.useEffect)(() => {
                            a === j.Video &&
                                l &&
                                (n.setPetOnboardingStep(j.Null),
                                Y.run(() => {
                                    n.setPetOnboardingStep(j.First);
                                }, 1e3));
                        }, [a, l, Y, n]),
                            (0, o.useEffect)(() => {
                                let e;
                                return (
                                    (a !== j.Fifth && a !== j.Six) || !u
                                        ? J.clear()
                                        : ($ ||
                                              J.run(() => {
                                                  (0, C.G)(R.sounds.ny_vo_terentiy_help_step5_waiting());
                                              }, 5e3),
                                          (e = setInterval(() => {
                                              (0, C.G)(R.sounds.ny_vo_terentiy_help_step5_waiting());
                                          }, 6e4))),
                                    () => {
                                        clearInterval(e);
                                    }
                                );
                            }, [a, $, u, J]));
                        const Q = (0, o.useCallback)(
                                (e) => {
                                    X.run(() => {
                                        (a === j.Seventh && (n.onOnboardingFinish(), v(!0)),
                                            e ? h(!0) : (h(!1), a < j.End && n.setPetOnboardingStep(a + 1), x(!1)));
                                    }, 400);
                                },
                                [n, X, a],
                            ),
                            ee = !u && p === G.NewStory;
                        return r().createElement(
                            'div',
                            {
                                className: s()('NyPetView_base_e8', z && 'NyPetView_base__hidden_e7'),
                                onClick: () => {
                                    (M(null), F && u && (a === j.Seventh && Q(!0), x(!0)));
                                },
                            },
                            r().createElement('div', { className: 'NyPetView_vignette_8d' }),
                            r().createElement(da, {
                                moveSpace: n.onMoveSpace,
                                onMouseOver3dScene: n.onMouseOver3dScene,
                                setMouseDown: N,
                                isMouseDown: S,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'NyPetView_checkbox_ae',
                                        !u && !g && 'NyPetView_checkbox__notOnboarding_75',
                                        K[a].rules.includes(Z.Story) && u && 'NyPetView_checkbox__visible_95',
                                    ),
                                },
                                r().createElement(
                                    Gi,
                                    { type: Wi.main, isChecked: _, onClick: n.onPetStateAnimationsChange },
                                    r().createElement(Me, {
                                        className: 'NyPetView_checkboxText_83',
                                        text: R.strings.ny.pet.animationStateCheckBox(),
                                    }),
                                ),
                            ),
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        'NyPetView_petWidget_0d',
                                        u && 'NyPetView_petWidget__onboarding_36',
                                        !u && !g && 'NyPetView_petWidget__notOnboarding_7c',
                                        ((u && a >= j.First) || g) && 'NyPetView_petWidget__visible_aa',
                                    ),
                                },
                                r().createElement(Vs, {
                                    onboardingStep: a,
                                    selectedIndicator: I,
                                    setSelectedIndicator: M,
                                    handleNextOnboardingStep: Q,
                                }),
                            ),
                            A &&
                                r().createElement(
                                    'div',
                                    { className: 'NyPetView_shop_be' },
                                    r().createElement(mu, null),
                                ),
                            r().createElement(
                                Re.u,
                                {
                                    contentId: R.views.new_year.lobby.new_year.tooltips.CommonTooltip('resId'),
                                    isEnabled: !u,
                                    args: bu,
                                },
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'NyPetView_storyEntryPoint_57',
                                            !u && !g && 'NyPetView_storyEntryPoint__notOnboarding_d1',
                                            ((K[a].rules.includes(Z.Story) && u) || g) &&
                                                'NyPetView_storyEntryPoint__visible_4b',
                                        ),
                                    },
                                    r().createElement(pu, {
                                        showNewStoryAnimation: O,
                                        isStoryEntryPointBubble: c,
                                        onClick: n.onPetStoryClick,
                                    }),
                                ),
                            ),
                            u &&
                                K[a].tip &&
                                r().createElement(
                                    'div',
                                    { className: gu },
                                    r().createElement(ts, {
                                        isOnboarding: !0,
                                        needToNextStep: y,
                                        step: a,
                                        tip: K[a].tip,
                                        prompter: K[a].prompter,
                                        onClose: Q,
                                        numOfSteps: 6,
                                        wasClickedOutside: k,
                                        setIsOnboardingTipVisible: w,
                                        setIsWaitingSoundPlayed: U,
                                    }),
                                ),
                            !u &&
                                void 0 !== p &&
                                p !== G.Empty &&
                                p !== G.NewStory &&
                                null !== q[p].tip &&
                                r().createElement(
                                    'div',
                                    { className: gu },
                                    r().createElement(ts, {
                                        isOnboarding: !1,
                                        needToNextStep: !1,
                                        step: p,
                                        tip: q[p].tip,
                                        prompter: q[p].prompter,
                                        onClose: n.onCloseSingleTip,
                                        numOfSteps: 1,
                                        needToCloseSingleTip: d,
                                        wasClickedOutside: k,
                                        setIsOnboardingTipVisible: w,
                                        setIsWaitingSoundPlayed: U,
                                    }),
                                ),
                            ee &&
                                r().createElement(
                                    'div',
                                    { className: gu },
                                    r().createElement(Eu, {
                                        storyNumber: m,
                                        needToClose: d,
                                        onClose: n.onCloseSingleTip,
                                        setShowNewStoryAnimation: W,
                                    }),
                                ),
                        );
                    }),
                    hu = { [O.CITY]: po, [O.MACHINE]: Ri, [O.LEADERS]: wi, [O.PET]: yu, [O.INFO]: tr },
                    Cu = r().memo(function ({ viewType: e }) {
                        if (null === e) return null;
                        const t = hu[e];
                        return (
                            viewEnv.clearSystemCaches(),
                            viewEnv.clearInternalCaches(),
                            t ? r().createElement(t, null) : (console.error('Unknown view type for render', e), null)
                        );
                    }),
                    Au = R.strings.ny.closeButton,
                    fu = [O.PET, O.MACHINE],
                    Bu = (0, L.observer)(() => {
                        const e = nn(),
                            t = e.model,
                            n = e.controls,
                            a = t.computes.getPetShop().isShopEnabled,
                            i = t.computes.getPetModel().isOnboarding,
                            u = t.root.get(),
                            l = u.viewType,
                            c = u.switchState,
                            _ = u.isControlsLocked,
                            d = t.petOnboardingStep.get(),
                            m = t.currentViewType.get(),
                            p = t.cityModel.get().currentSubModel,
                            E = t.computes.getCurrencyItems(),
                            g = t.surpriseMachineModel.get().machineViews,
                            v = (0, o.useState)(!1),
                            b = v[0],
                            y = v[1],
                            h = M(),
                            C = a,
                            A = 1 === p,
                            f = E.length > 0,
                            B = c === H.WITH_SWITCHING_OBJS,
                            D = g === W.SPEND_TOKENS_ACTIVE,
                            S = m,
                            N = S === O.PET && d < j.Seventh && i,
                            T = A || B || _ || D,
                            k = B || _ || N,
                            P = A || B || D || C,
                            I = B || _,
                            R = l === O.INFO,
                            L = !h && T && A && b,
                            V = (c === H.DEFAULT && !A) || !Gt.includes(l),
                            $ = (!S || (fu.includes(S) && !D)) && !C,
                            U = !A || t.isBackButtonVisible.get(),
                            G = s()(
                                'App_bg_64',
                                V && 'App_bg__visible_ff',
                                c === H.TO_GLADE_WITH_INTRO && 'App_bg__withoutAnimation_c2',
                            ),
                            z = (0, o.useMemo)(
                                () =>
                                    L || b
                                        ? {
                                              closeBtnText: Au.customizationZone(),
                                              handleBtnClick: () => n.onCustomizationObjectClose(),
                                              closeType: 'back',
                                              closeSide: 'left',
                                          }
                                        : {
                                              closeBtnText: Au.close(),
                                              handleBtnClick: () => n.onClose(),
                                              closeType: 'close',
                                              closeSide: 'right',
                                          },
                                [L, b, n],
                            ),
                            Y = z.closeBtnText,
                            Z = z.handleBtnClick,
                            X = z.closeType,
                            q = z.closeSide,
                            K = (0, o.useCallback)(() => {
                                N || C || R || (viewEnv.clearSystemCaches(), viewEnv.clearInternalCaches(), Z());
                            }, [R, Z, N, C]),
                            J = (0, o.useCallback)(() => {
                                A ? n.onEscape() : K();
                            }, [A, n, K]);
                        ((0, o.useEffect)(() => {
                            h && n.onViewChange(l);
                        }, [l]),
                            (0, o.useEffect)(
                                () =>
                                    w(() => {
                                        n.onViewChange(l);
                                    }, 600),
                                [l],
                            ),
                            (0, o.useEffect)(() => {
                                B || (y(A), n.onViewChange(l));
                            }, [B, A, l, n]),
                            (0, o.useEffect)(() => {
                                if (c && !B)
                                    return w(() => {
                                        n.onFadeInDone();
                                    }, 300);
                            }, [c, B, n]),
                            (0, o.useEffect)(() => {}, []),
                            x({ callback: J, preventPropagation: !1 }));
                        const Q = !T && !N;
                        return r().createElement(
                            'div',
                            { className: 'App_base_7f' },
                            r().createElement('div', { className: G }),
                            r().createElement('div', { className: s()('App_snow_37', Q && 'App_snow__visible_a9') }),
                            $ &&
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'App_close_2f',
                                            !I && !B && U && !N && 'App_close__visible_0f',
                                            b ? 'App_close__customizationTop_1d' : 'App_close__customizationDefault_c4',
                                        ),
                                    },
                                    r().createElement(F, {
                                        classNames: { caption: 'App_close__caption_2b' },
                                        caption: Y,
                                        type: X,
                                        side: q,
                                        onClick: K,
                                    }),
                                ),
                            f &&
                                r().createElement(
                                    'div',
                                    {
                                        className: s()(
                                            'App_currenciesContainer_7c',
                                            !k && 'App_currenciesContainer__visible_70',
                                        ),
                                    },
                                    r().createElement(st, {
                                        onCurrencyItemClick: n.onCurrencyItemClick,
                                        currencyItems: E,
                                        withNavigation: !P,
                                    }),
                                ),
                            r().createElement(
                                'div',
                                { className: 'App_inner_2c' },
                                r().createElement(
                                    'div',
                                    { className: s()('App_navigation_a4', Q && 'App_navigation__visible_69') },
                                    r().createElement(bn, { isFadedItems: T }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'App_content_3b' },
                                    r().createElement(Cu, { viewType: S }),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    h().render(
                        r().createElement(tn, null, r().createElement(b, null, r().createElement(Bu, null))),
                        document.getElementById('root'),
                    );
                });
            },
            7943: (e, t, n) => {
                'use strict';
                n.d(t, { $: () => h });
                var a = n(6483),
                    o = n.n(a),
                    r = n(2056),
                    i = n(3112),
                    s = n(5521),
                    u = n(7727),
                    l = n(6179),
                    c = n.n(l),
                    _ = n(5415);
                let d, m;
                (!(function (e) {
                    ((e[(e.W_1920 = 1920)] = 'W_1920'),
                        (e[(e.W_2560 = 2560)] = 'W_2560'),
                        (e[(e.W_3840 = 3840)] = 'W_3840'));
                })(d || (d = {})),
                    (function (e) {
                        ((e[(e.H_1440 = 1440)] = 'H_1440'),
                            (e[(e.H_1600 = 1600)] = 'H_1600'),
                            (e[(e.H_2160 = 2160)] = 'H_2160'));
                    })(m || (m = {})),
                    n(3368));
                const p = ['value', 'className', 'autoFocus', 'onKeyDown', 'setIsFocused', 'isFocused'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const g = (0, l.memo)((e) => {
                        let t,
                            n = e.value,
                            a = e.className,
                            o = e.autoFocus,
                            r = e.onKeyDown,
                            i = e.setIsFocused,
                            u = e.isFocused,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    o = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((n = r[a]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, p);
                        const d = (0, l.useState)(!0),
                            m = d[0],
                            g = d[1];
                        return (
                            (0, l.useEffect)(() => {
                                u && t.focus();
                            }, [u]),
                            c().createElement(
                                'input',
                                E(
                                    {
                                        type: 'text',
                                        ref: (e) => {
                                            e && ((t = e), m && e.setSelectionRange(e.value.length, e.value.length));
                                        },
                                        className: a,
                                        value: n,
                                        onKeyDown: (e) => {
                                            const n = e.currentTarget,
                                                a = n.value.length,
                                                i = n.selectionStart || 0;
                                            (g(i === a && e.which !== s.n.DELETE),
                                                (e.which !== s.n.DELETE && e.which !== s.n.BACKSPACE) ||
                                                    1 !== a ||
                                                    setTimeout(() => {
                                                        n.setSelectionRange(a, a);
                                                    }),
                                                e.which === s.n.ESCAPE && t && o && t.blur(),
                                                r(e));
                                        },
                                    },
                                    _,
                                    {
                                        onBlur: (e) => {
                                            u && (i(!1), _.onBlur && _.onBlur(e));
                                        },
                                        onFocus: (e) => {
                                            (i(!0),
                                                _.onFocus && _.onFocus(e),
                                                m && t.setSelectionRange(t.value.length, t.value.length));
                                        },
                                    },
                                ),
                            )
                        );
                    }),
                    v = {
                        base: 'TokensStepper_base_05',
                        currency: 'TokensStepper_currency_ac',
                        inputWrapper: 'TokensStepper_inputWrapper_b0',
                        input: 'TokensStepper_input_72',
                        input__disabled: 'TokensStepper_input__disabled_31',
                        currencyIcon: 'TokensStepper_currencyIcon_59',
                        controls: 'TokensStepper_controls_82',
                        btn: 'TokensStepper_btn_2b',
                        btn__scaled: 'TokensStepper_btn__scaled_2f',
                        btnIncrement: 'TokensStepper_btnIncrement_ad',
                        btnIncrement__disabled: 'TokensStepper_btnIncrement__disabled_a0',
                        btnDecrement: 'TokensStepper_btnDecrement_e8',
                        btnDecrement__disabled: 'TokensStepper_btnDecrement__disabled_d2',
                        btnDecrement__scaled: 'TokensStepper_btnDecrement__scaled_88',
                    },
                    b = /\d+/,
                    y = () => u.$.playHighlight(),
                    h = ({
                        borderColor: e,
                        className: t,
                        currencyClassName: n,
                        currencyImage: a,
                        value: p,
                        minValue: E,
                        maxValue: h,
                        isFocused: C,
                        handleTokenChange: A,
                        handleTokenIncrease: f,
                        handleTokenDecrease: B,
                        setIsFocused: F,
                        controlsTooltipContentId: w,
                        controlsTooltipArgs: D,
                    }) => {
                        const S = p < h,
                            N = p > E,
                            T = (0, i.V)(),
                            k = T > 1,
                            x = ((e) => {
                                const t = (0, _.GS)(),
                                    n = t.remScreenWidth * e,
                                    a = t.remScreenHeight * e,
                                    o = n === d.W_1920 && a === m.H_1440,
                                    r = n === d.W_2560 && (a === m.H_1440 || a === m.H_1600),
                                    i = n === d.W_3840 && a === m.H_2160,
                                    s = 1.25 === e;
                                return (o && (s || 1.5 === e)) || (r && s) || (i && s);
                            })(T),
                            P = (0, l.useRef)(null),
                            I = (0, l.useCallback)(
                                (e) => {
                                    e.which === s.n.ARROW_UP && S ? f() : e.which === s.n.ARROW_DOWN && N && B();
                                },
                                [S, N, B, f],
                            ),
                            M = (0, l.useCallback)(
                                (e) => {
                                    if (A) {
                                        var t;
                                        const n = Number(null == (t = b.exec(e.currentTarget.value)) ? void 0 : t[0]);
                                        n > h ? A(h) : n <= E || !Number.isInteger(n) || !n ? A(E) : A(n);
                                    }
                                },
                                [A, h, E],
                            ),
                            L = (0, l.useCallback)(
                                (e) => {
                                    e.deltaY > 0 ? f() : B();
                                },
                                [B, f],
                            ),
                            O = (0, l.useCallback)(() => {
                                var e;
                                return null == (e = P.current) ? void 0 : e.classList.remove(v.base__focused);
                            }, []),
                            H = (0, l.useCallback)(() => {
                                var e;
                                return null == (e = P.current) ? void 0 : e.classList.add(v.base__focused);
                            }, []);
                        return c().createElement(
                            'div',
                            { ref: P, className: o()(v.base, t), style: C ? { borderColor: e } : {} },
                            c().createElement(
                                'div',
                                { className: v.currency },
                                c().createElement(
                                    'div',
                                    { className: v.inputWrapper },
                                    c().createElement(g, {
                                        value: p,
                                        autoFocus: !0,
                                        className: v.input,
                                        isFocused: C,
                                        onBlur: O,
                                        onFocus: H,
                                        onKeyDown: I,
                                        onChange: M,
                                        onWheel: L,
                                        setIsFocused: F,
                                    }),
                                ),
                                c().createElement('div', {
                                    className: o()(v.currencyIcon, n),
                                    style: { backgroundImage: `url(${a})` },
                                }),
                            ),
                            c().createElement(
                                r.u,
                                {
                                    contentId:
                                        w || R.views.new_year.lobby.new_year.tooltips.NyPetTokenStepperTooltip('resId'),
                                    args: D,
                                    isEnabled: void 0 !== w,
                                },
                                c().createElement(
                                    'div',
                                    { className: v.controls },
                                    c().createElement('div', {
                                        className: o()(
                                            v.btn,
                                            v.btnIncrement,
                                            k && v.btn__scaled,
                                            !S && v.btnIncrement__disabled,
                                        ),
                                        onMouseEnter: y,
                                        onClick: () => {
                                            S && (u.$.playClick(), f());
                                        },
                                    }),
                                    c().createElement('div', {
                                        className: o()(
                                            v.btn,
                                            v.btnDecrement,
                                            k && v.btn__scaled,
                                            x && v.btnDecrement__scaled,
                                            !N && v.btnDecrement__disabled,
                                        ),
                                        onMouseEnter: y,
                                        onClick: () => {
                                            N && (u.$.playClick(), B());
                                        },
                                    }),
                                ),
                            ),
                        );
                    };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var o = 1 / 0;
                for (u = 0; u < deferred.length; u++) {
                    for (var [t, n, a] = deferred[u], r = !0, i = 0; i < t.length; i++)
                        (!1 & a || o >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), a < o && (o = a));
                    if (r) {
                        deferred.splice(u--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var u = deferred.length; u > 0 && deferred[u - 1][2] > a; u--) deferred[u] = deferred[u - 1];
            deferred[u] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 5533),
        (() => {
            var e = { 5533: 0, 4679: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        o,
                        [r, i, s] = n,
                        u = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); u < r.length; u++)
                        ((o = r[u]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(169));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
