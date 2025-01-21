(() => {
    var __webpack_modules__ = {
            7078: (u, e, t) => {
                'use strict';
                t.d(e, { t: () => l });
                var r = t(6179),
                    n = t.n(r),
                    a = t(2056);
                const o = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(u);
                            for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, o);
                    return n().createElement(
                        a.u,
                        i(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            t,
                        ),
                        e,
                    );
                };
            },
            957: (u, e, t) => {
                'use strict';
                t.d(e, { l: () => d });
                var r = t(6179),
                    n = t.n(r),
                    a = t(7078),
                    o = t(6373),
                    i = t(2056),
                    l = t(3415);
                const s = ['children', 'tooltipType', 'wrap'],
                    c = ['contentId'];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        E.apply(this, arguments)
                    );
                }
                function _(u, e) {
                    if (null == u) return {};
                    var t,
                        r,
                        n = {},
                        a = Object.keys(u);
                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                    return n;
                }
                let A;
                !(function (u) {
                    (u.Base = 'base'), (u.Backport = 'backport'), (u.Simple = 'simple');
                })(A || (A = {}));
                const d = (u) => {
                    let e = u.children,
                        t = u.tooltipType,
                        r = u.wrap,
                        d = void 0 !== r && r,
                        F = _(u, s);
                    if (!F) return e;
                    const D = d && (F.isEnabled || void 0 === F.isEnabled) ? n().createElement('div', null, e) : e,
                        m = F.contentId,
                        B = _(F, c);
                    switch (t) {
                        case A.Base:
                            return (
                                !m && console.error('`contentId` field is required for a base Tooltip'),
                                m ? n().createElement(i.u, E({}, B, { contentId: m }), D) : D
                            );
                        case A.Simple:
                            return n().createElement(o.i, B, D);
                        case A.Backport:
                            return n().createElement(a.t, B, D);
                        default:
                            return n().createElement(l.l, { tooltipArgs: F }, D);
                    }
                };
            },
            3415: (u, e, t) => {
                'use strict';
                t.d(e, { l: () => s });
                var r = t(6179),
                    n = t.n(r),
                    a = t(7078),
                    o = t(6373),
                    i = t(2056);
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
                const s = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const r = n().createElement('div', { className: t }, u);
                    if (e.header || e.body) return n().createElement(o.i, e, r);
                    const s = e.contentId,
                        c = e.args,
                        E = null == c ? void 0 : c.contentId;
                    return s || E
                        ? n().createElement(i.u, l({}, e, { contentId: s || E }), r)
                        : n().createElement(a.t, e, r);
                };
            },
            6373: (u, e, t) => {
                'use strict';
                t.d(e, { i: () => s });
                var r = t(2056),
                    n = t(6179),
                    a = t.n(n);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    s = (u) => {
                        let e = u.children,
                            t = u.body,
                            s = u.header,
                            c = u.note,
                            E = u.alert,
                            _ = u.args,
                            A = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, o);
                        const d = (0, n.useMemo)(() => {
                            const u = Object.assign({}, _, { body: t, header: s, note: c, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, s, c, _]);
                        return a().createElement(
                            r.u,
                            i(
                                {
                                    contentId:
                                        ((F = null == _ ? void 0 : _.hasHtmlContent),
                                        F ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                A,
                            ),
                            e,
                        );
                        var F;
                    };
            },
            2056: (u, e, t) => {
                'use strict';
                t.d(e, { u: () => s });
                var r = t(7902),
                    n = t(4179),
                    a = t(6179);
                const o = [
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
                function i(u) {
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
                const l = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    s = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            s = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            _ = u.onClick,
                            A = u.ignoreShowDelay,
                            d = void 0 !== A && A,
                            F = u.ignoreMouseClick,
                            D = void 0 !== F && F,
                            m = u.decoratorId,
                            B = void 0 === m ? 0 : m,
                            C = u.isEnabled,
                            g = void 0 === C || C,
                            h = u.targetId,
                            p = void 0 === h ? 0 : h,
                            v = u.onShow,
                            f = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, o);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => p || (0, r.F)().resId, [p]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (l(t, B, { isMouseEvent: !0, on: !0, arguments: i(n) }, S),
                                    v && v(),
                                    (w.current.isVisible = !0));
                            }, [t, B, n, S, v]),
                            x = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        l(t, B, { on: !1 }, S),
                                        w.current.isVisible && f && f(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, B, S, f]),
                            L = (0, a.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', L, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', L, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && x();
                            }, [g, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            ),
                            g
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(y, d ? 100 : 400)),
                                                          s && s(u),
                                                          T && T(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  x(), null == c || c(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === D && x(), null == _ || _(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === D && x(), null == E || E(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : e
                        );
                        var T;
                    };
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
            1856: (u, e, t) => {
                'use strict';
                t.d(e, { v: () => r });
                const r = (u) => {
                    let e,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                (t = null), (e = u());
                            });
                        })),
                        () => {
                            'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                        }
                    );
                };
            },
            122: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => r });
                const r = (u, e) => {
                    let t;
                    const r = setTimeout(() => {
                        t = u();
                    }, e);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(r);
                    };
                };
            },
            527: (u, e, t) => {
                'use strict';
                t.r(e), t.d(e, { mouse: () => i, onResize: () => a });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
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
                                : (0, n.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${e}`,
                                            i = o[e]((u) => t([u, 'outside']));
                                        function l(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, l),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(a, l),
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
                        return Object.assign({}, a, {
                            disable() {
                                (u.enabled = !1), r();
                            },
                            enable() {
                                (u.enabled = !0), r();
                            },
                            enableOutside() {
                                u.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    });
                var r = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                t.d(e, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
                var r = t(2472);
                const n = {
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
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => f,
                        getScale: () => D,
                        getSize: () => _,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => m,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    o = t(8566);
                function i(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function l(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function s(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function _(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
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
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
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
                    S = Promise.all([
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
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    a = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            7902: (u, e, t) => {
                'use strict';
                t.d(e, { F: () => r });
                const r = (u = 1) => {
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
                };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, n;
                t.d(e, { n: () => r }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
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
                            (u[(u.PERIOD = 190)] = 'PERIOD');
                    })(r || (r = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
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
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(n || (n = {}));
            },
            1641: (u, e, t) => {
                'use strict';
                let r;
                t.d(e, { t: () => r }),
                    (function (u) {
                        (u[(u.LEFT = 0)] = 'LEFT'),
                            (u[(u.WHEEL = 1)] = 'WHEEL'),
                            (u[(u.RIGHT = 2)] = 'RIGHT'),
                            (u[(u.FOURTH = 3)] = 'FOURTH'),
                            (u[(u.FIFTH = 4)] = 'FIFTH');
                    })(r || (r = {}));
            },
            7727: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { $: () => n, G: () => r });
                const n = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => a });
                var r = t(3138);
                class n {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
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
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => a.Z, B3: () => c, Z5: () => o, B0: () => l, ry: () => C, Eu: () => g, Sy: () => p });
                class r {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                const o = {
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
                let l;
                var s;
                ((s = l || (l = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    F = t(3138);
                const D = ['args'];
                function m(u, e, t, r, n, a, o) {
                    try {
                        var i = u[a](o),
                            l = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(l) : Promise.resolve(l).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            m(a, r, n, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            m(a, r, n, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(u);
                                    for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, D);
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
                    p = () => h(l.CLOSE),
                    v = (u, e) => {
                        u.keyCode === d.n.ESCAPE && e();
                    };
                var f = t(7572);
                const b = n.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: _,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(l.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => h(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const o = F.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                s = i.x,
                                c = i.y,
                                E = i.width,
                                _ = i.height,
                                A = {
                                    x: F.O.view.pxToRem(s) + o.x,
                                    y: F.O.view.pxToRem(c) + o.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(_),
                                };
                            h(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(A),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => v(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            v(u, p);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        ClickOutsideManager: b,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = w;
            },
            9246: (u, e, t) => {
                'use strict';
                t.d(e, { E: () => C, t: () => g });
                var r = t(6483),
                    n = t.n(r),
                    a = t(6373),
                    o = t(1856),
                    i = t(3138),
                    l = t(6179),
                    s = t.n(l);
                const c = (u) => {
                        (0, l.useEffect)(u, []);
                    },
                    E = (u) => {
                        let e = !1;
                        return {
                            promise: new Promise((t, r) => {
                                u.then((u) => !e && t(u)).catch((u) => !e && r(u));
                            }),
                            cancel() {
                                e = !0;
                            },
                        };
                    };
                var _ = t(7727),
                    A = t(4179);
                const d = {
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
                var F;
                !(function (u) {
                    (u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom');
                })(F || (F = {}));
                const D = ['__left', '__right', '__top', '__bottom'],
                    m =
                        ((0, l.forwardRef)(
                            ({ children: u, disableAutoSizeUpdate: e, onOutsideClick: t, customStyles: r = {} }, F) => {
                                const m = (0, l.useRef)(null),
                                    B = (0, l.useRef)(null),
                                    C = (0, l.useRef)(null),
                                    g = (0, l.useState)(window.decorator && window.decorator.directionType),
                                    h = g[0],
                                    p = g[1],
                                    v = (0, l.useCallback)(() => {
                                        _.$.playClick(), i.O.view.sendEvent.close();
                                    }, []),
                                    f = (0, l.useCallback)(() => {
                                        _.$.playHighlight();
                                    }, []),
                                    b = n()(d.arrow, d[`arrow${D[h]}`]);
                                c(
                                    () => (
                                        i.O.client.events.mouse.enableOutside(),
                                        i.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && (t ? t() : i.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const w = (0, l.useCallback)(
                                        (u) => {
                                            let e = u.target;
                                            do {
                                                if (e === m.current || e === C.current) return;
                                                e = e.parentNode;
                                            } while (e);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const u = i.O.client.getMouseGlobalPosition(),
                                                    e = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        u.x < r.boundX ||
                                                        u.x > r.boundX + r.boundWidth ||
                                                        u.y > r.boundY + r.boundHeight ||
                                                        u.y < r.boundY;
                                                if (e && !t) return;
                                            }
                                            t ? t() : i.O.view.sendEvent.close('popover');
                                        },
                                        [m, C, t],
                                    ),
                                    S = (0, l.useCallback)(
                                        () => (
                                            i.O.view.freezeTextureBeforeResize(),
                                            (0, o.v)(() => {
                                                if (B.current) {
                                                    const u = B.current.scrollWidth,
                                                        e = B.current.scrollHeight;
                                                    i.O.view.resize(u, e), p(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, l.useImperativeHandle)(F, () => ({ updateSize: S })),
                                    c(() => {
                                        i.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, l.useEffect)(() => {
                                        document.addEventListener('mousedown', w, { capture: !0 });
                                        const u = E((0, A.Eu)());
                                        return (
                                            !e && u.promise.then(() => S()),
                                            () => {
                                                u.cancel(), document.removeEventListener('mousedown', w);
                                            }
                                        );
                                    }, [S, w, e]),
                                    s().createElement(
                                        'div',
                                        { className: d.base, ref: B },
                                        s().createElement(
                                            'div',
                                            { className: d.decorator },
                                            s().createElement(
                                                'div',
                                                { className: d.content, ref: m },
                                                u,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    s().createElement(
                                                        a.i,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        s().createElement('div', {
                                                            className: d.closeBtn,
                                                            onClick: v,
                                                            onMouseEnter: f,
                                                            ref: C,
                                                        }),
                                                    ),
                                            ),
                                            s().createElement('div', { className: b, style: r.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        {
                            base: 'NyPopoverDecorator_base_b0',
                            arrow: 'NyPopoverDecorator_arrow_72',
                            arrow__bottom: 'NyPopoverDecorator_arrow__bottom_10',
                            arrow__top: 'NyPopoverDecorator_arrow__top_09',
                            arrow__left: 'NyPopoverDecorator_arrow__left_ea',
                            arrow__right: 'NyPopoverDecorator_arrow__right_10',
                            closeBtn: 'NyPopoverDecorator_closeBtn_88',
                            borderBottomGradient: 'NyPopoverDecorator_borderBottomGradient_f6',
                            content: 'NyPopoverDecorator_content_35',
                        }),
                    B = ['__left', '__right', '__top', '__bottom'],
                    C = 68,
                    g = (0, l.forwardRef)(
                        (
                            {
                                children: u,
                                disableAutoSizeUpdate: e = !1,
                                arrowPosition: t = 50,
                                offsetSizes: r = {},
                                classNames: a = {},
                            },
                            o,
                        ) => {
                            var c, d, D, g;
                            const h = (0, l.useRef)(null),
                                p = (0, l.useRef)(null),
                                v = (0, l.useRef)(null),
                                f = (0, l.useState)(window.decorator.directionType),
                                b = f[0],
                                w = f[1],
                                S = (0, l.useState)(0),
                                y = S[0],
                                x = S[1],
                                L = (0, l.useCallback)(() => {
                                    _.$.playClick(), (0, A.Sy)();
                                }, []),
                                T = n()(m.arrow, m[`arrow${B[b]}`], a.arrow),
                                M = {
                                    top: null != (c = r.top) ? c : 10,
                                    bottom: null != (d = r.bottom) ? d : C,
                                    left: null != (D = r.left) ? D : C,
                                    right: null != (g = r.right) ? g : C,
                                },
                                k = (0, l.useCallback)(
                                    (u) => {
                                        let e = u.target;
                                        do {
                                            if (e === h.current || e === v.current) return;
                                            e = e.parentNode;
                                        } while (e);
                                        const t = window.decorator;
                                        if (t) {
                                            const u = i.O.client.getMouseGlobalPosition(),
                                                e = ![t.boundX, t.boundY, t.boundWidth, t.boundHeight].includes(void 0),
                                                r =
                                                    u.x < t.boundX ||
                                                    u.x > t.boundX + t.boundWidth ||
                                                    u.y > t.boundY + t.boundHeight ||
                                                    u.y < t.boundY;
                                            if (e && !r) return;
                                        }
                                    },
                                    [h, v],
                                ),
                                R = (0, l.useCallback)(() => {
                                    const u = requestAnimationFrame(() => {
                                        if (p.current) {
                                            const u = p.current.scrollWidth,
                                                e = p.current.scrollHeight;
                                            i.O.view.resize(u, e);
                                            const t = i.O.view.pxToRem(u),
                                                r = i.O.view.pxToRem(e);
                                            viewEnv.setInputArea(
                                                M.left,
                                                M.top,
                                                t - (M.left + M.right),
                                                r - (M.top + M.bottom),
                                            );
                                            const n = t / 2,
                                                a = window.decorator.boundX + window.decorator.boundWidth / 2,
                                                o = i.O.client.getSize('rem').width;
                                            n > a && x(((n - a) / (t - C)) * 100 * -1),
                                                n + a > o && x(((n - (o - a)) / (t - C)) * 100),
                                                w(window.decorator.directionType);
                                        }
                                    });
                                    return () => cancelAnimationFrame(u);
                                }, [M.bottom, M.left, M.right, M.top]);
                            (0, l.useImperativeHandle)(o, () => ({ updateSize: R })),
                                (0, l.useEffect)(() => {
                                    document.addEventListener('mousedown', k, { capture: !0 });
                                    const u = E((0, A.Eu)());
                                    return (
                                        !e && u.promise.then(() => R()),
                                        () => {
                                            u.cancel(), document.removeEventListener('mousedown', k);
                                        }
                                    );
                                }, [R, k, e]);
                            const O = (0, l.useMemo)(() => {
                                    if (null !== t) return { left: `${t + y}%` };
                                }, [t, y]),
                                N = (0, l.useMemo)(() => {
                                    if (null !== t)
                                        return b === F.Top || b === F.Bottom ? { left: `${t + y}%` } : { top: `${t}%` };
                                }, [b, t, y]),
                                P = {
                                    '--offset-top': `${M.top}rem`,
                                    '--offset-bottom': `${M.bottom}rem`,
                                    '--offset-left': `${M.left}rem`,
                                    '--offset-right': `${M.right}rem`,
                                };
                            return s().createElement(
                                'div',
                                { style: P, className: m.base, ref: p },
                                s().createElement(
                                    'div',
                                    { className: m.content, ref: h },
                                    u,
                                    window.decorator.isCloseBtnVisible &&
                                        s().createElement('div', { className: m.closeBtn, onClick: L }),
                                    s().createElement('div', { className: m.borderBottomGradient, style: O }),
                                ),
                                s().createElement('div', { className: T, style: N }),
                            );
                        },
                    );
            },
            440: (u, e, t) => {
                'use strict';
                t.d(e, { b: () => g });
                var r = t(6483),
                    n = t.n(r),
                    a = t(957),
                    o = t(122),
                    i = t(7727),
                    l = t(6179),
                    s = t.n(l),
                    c = t(9377),
                    E = t(8416);
                const _ = {
                        base: 'BreakAnimation_base_ed',
                        base__large: 'BreakAnimation_base__large_30',
                        base__huge: 'BreakAnimation_base__huge_65',
                        break: 'BreakAnimation_break_09',
                    },
                    A = ({ swfName: u, isActive: e, ignoreSound: t = !1, onEnd: r, size: a = E.c.Medium }) => {
                        const i = (0, l.useMemo)(
                            () => ({ backgroundImage: `url(swf://gui/flash/animations/newYear/break.swf?name=${u})` }),
                            [u],
                        );
                        (0, l.useEffect)(() => {
                            if (e)
                                return (
                                    window.swfPlayer.play(u),
                                    (0, o.F)(() => {
                                        r && r();
                                    }, 1700)
                                );
                        }, [e, u, r, t]);
                        const c = n()(_.base, _[`base__${a}`]);
                        return s().createElement(
                            'div',
                            { className: c },
                            s().createElement('div', { className: _.break, style: i }),
                        );
                    },
                    d = {
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
                    },
                    F = () => s().createElement('div', { className: d.notice });
                var D, m;
                !(function (u) {
                    u.Default = 'default';
                })(D || (D = {})),
                    (function (u) {
                        u.Default = 'default';
                    })(m || (m = {}));
                const B = ({
                    slotId: u,
                    icon: e,
                    name: t,
                    rank: r,
                    onMouseLeave: a,
                    onMouseEnter: o,
                    Indicator: c,
                    isSelected: E,
                    folder: _ = 'R.images.new_year.gui.maps.icons.newYear.decoration_types.craft',
                    size: A = m.Default,
                    style: F = D.Default,
                }) => {
                    const B = (0, l.useState)(!0),
                        C = B[0],
                        g = B[1],
                        h = { backgroundImage: e ? `url(${e})` : `url(${_}.${t})` },
                        p = {
                            backgroundImage:
                                e && r < 6
                                    ? `url('R.images.new_year.gui.maps.icons.newYear.decoration_ranks.level_${r - 1}')`
                                    : '',
                        };
                    return s().createElement(
                        'div',
                        {
                            className: n()(d.base, d[`base__${A}`], d[`base__${F}`]),
                            onMouseEnter: () => {
                                (0, i.G)(R.sounds.hangar_newyear_slot_over()), null == o || o({ slotId: u });
                            },
                            onMouseLeave: () => {
                                (0, i.G)(R.sounds.hangar_newyear_slot_over_off()), g(!0), null == a || a({ slotId: u });
                            },
                            onMouseDown: () => {
                                g(!1);
                            },
                            onClick: () => {
                                (0, i.G)(R.sounds.highlight_red_butt());
                            },
                        },
                        c && s().createElement(c, null),
                        s().createElement(
                            'div',
                            { className: n()(d.slot, C && d.slot__transitionEnabled, E && d.slot__selected) },
                            s().createElement(
                                'div',
                                { className: d.inner },
                                s().createElement(
                                    'div',
                                    { className: d.hoverBlock },
                                    s().createElement('div', { className: d.particles }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: d.selectedBlock },
                                    s().createElement('div', { className: d.selectedParticles }),
                                ),
                            ),
                            s().createElement('div', { className: d.image, style: h }),
                            s().createElement('div', { className: d.shadow }),
                            s().createElement('div', { className: d.rank, style: p }),
                        ),
                    );
                };
                var C;
                (B.Style = D),
                    (B.Size = m),
                    (function (u) {
                        (u[(u.Init = 0)] = 'Init'), (u[(u.Active = 1)] = 'Active'), (u[(u.Done = 2)] = 'Done');
                    })(C || (C = {}));
                const g = ({
                    id: u,
                    breakSettings: e,
                    isSelected: t,
                    size: r = E.c.Medium,
                    variant: _,
                    modelItem: d,
                    onVisited: D,
                    onSelected: m,
                    onUnmountSelected: B,
                    onMountedSelected: g,
                }) => {
                    const h = d.isNew,
                        p = d.atmosphereBonus,
                        v = (0, l.useState)(C.Init),
                        f = v[0],
                        b = v[1],
                        w = (0, l.useState)(h),
                        S = w[0],
                        y = w[1],
                        x = -1 === p && _ === E.q.Popover;
                    (0, l.useEffect)(() => {
                        if (t) return null == g || g(u), () => (null == B ? void 0 : B(u));
                    }, [u, t, g, B]),
                        (0, l.useEffect)(() => {
                            if (e)
                                return (0, o.F)(
                                    () => {
                                        b(C.Active), (0, i.G)(R.sounds.hangar_newyear_pieces_toys_FX());
                                    },
                                    Math.max(e.delay, 150),
                                );
                            b(C.Init);
                        }, [e]),
                        (0, l.useEffect)(() => {
                            S && D(u);
                        }, []);
                    const L = (0, l.useCallback)(() => {
                            b(C.Done), e && e.onAnimationComplete && e.onAnimationComplete();
                        }, [e]),
                        T = (0, l.useCallback)(
                            (u) => {
                                _ === E.q.Popover && y(!1), S && D(u);
                            },
                            [S, D, _],
                        ),
                        M = f === C.Active,
                        k = n()(
                            'BreakDecorationSlot_content_21',
                            f !== C.Init && 'BreakDecorationSlot_content__broken_e0',
                        ),
                        O = (0, l.useCallback)(
                            (u, e) => {
                                m && m(u, e), S && y(!1);
                            },
                            [S, m],
                        ),
                        N = x
                            ? {
                                  header: R.strings.ny.decorationsPopover.locked.tooltip.title(),
                                  body: R.strings.ny.decorationsPopover.locked.tooltip.description(),
                              }
                            : {
                                  contentId: R.views.new_year.lobby.new_year.tooltips.NyDecorationTooltip('resId'),
                                  args: { toyID: d.toyID, atmosphereBonus: p },
                              };
                    return s().createElement(
                        'div',
                        { className: 'BreakDecorationSlot_base_bf', onMouseEnter: () => i.$.playHighlight() },
                        s().createElement(
                            'div',
                            { className: k },
                            s().createElement(
                                a.l,
                                N,
                                s().createElement(c.$, {
                                    model: d,
                                    id: u,
                                    isSelected: t,
                                    onMouseEnter: T,
                                    size: r,
                                    isLocked: x,
                                    variant: _,
                                    onSelected: O,
                                }),
                            ),
                            S &&
                                s().createElement(
                                    'div',
                                    { className: 'BreakDecorationSlot_new_12' },
                                    s().createElement(F, null),
                                ),
                        ),
                        e &&
                            s().createElement(A, {
                                swfName: 'name' + e.delay,
                                isActive: M,
                                onEnd: L,
                                ignoreSound: e.ignoreSound,
                            }),
                    );
                };
            },
            9377: (u, e, t) => {
                'use strict';
                t.d(e, { $: () => B });
                var r = t(6483),
                    n = t.n(r),
                    a = t(1641),
                    o = t(6179),
                    i = t.n(o);
                const l = {
                    base: 'DecorationSlot_base_f3',
                    base__large: 'DecorationSlot_base__large_b6',
                    base__huge: 'DecorationSlot_base__huge_f4',
                    base__locked: 'DecorationSlot_base__locked_cc',
                    base__defaultCursor: 'DecorationSlot_base__defaultCursor_ec',
                    border__hover: 'DecorationSlot_border__hover_ea',
                    border__hover__large: 'DecorationSlot_border__hover__large_f7',
                    border__hover__huge: 'DecorationSlot_border__hover__huge_ff',
                    border__hover__left: 'DecorationSlot_border__hover__left_98',
                    border__hover__right: 'DecorationSlot_border__hover__right_37',
                    border__multi: 'DecorationSlot_border__multi_a7',
                    selection: 'DecorationSlot_selection_a8',
                    selection__breaking: 'DecorationSlot_selection__breaking_a5',
                    selection__storage: 'DecorationSlot_selection__storage_79',
                    selection__large: 'DecorationSlot_selection__large_00',
                    selection__huge: 'DecorationSlot_selection__huge_af',
                    multiSelection: 'DecorationSlot_multiSelection_6e',
                    multiSelection__breaking: 'DecorationSlot_multiSelection__breaking_1a',
                    multiSelection__storage: 'DecorationSlot_multiSelection__storage_02',
                    multiSelection__popover: 'DecorationSlot_multiSelection__popover_ca',
                    iconCheck: 'DecorationSlot_iconCheck_3d',
                    iconCheck__pet: 'DecorationSlot_iconCheck__pet_7b',
                    image: 'DecorationSlot_image_4e',
                    image__selected: 'DecorationSlot_image__selected_85',
                    iconLocked: 'DecorationSlot_iconLocked_4d',
                    price: 'DecorationSlot_price_49',
                    iconPlay: 'DecorationSlot_iconPlay_a3',
                };
                var s = t(8416);
                let c, E, _;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                })(c || (c = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(E || (E = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(_ || (_ = {}));
                var A = t(4179);
                class d extends i().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? A.B3.GOLD : A.B3.INTEGRAL;
                        const e = A.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                d.defaultProps = { format: 'integral' };
                const F = {
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
                    D = ({
                        isDiscount: u,
                        isInteractiveDiscount: e,
                        size: t,
                        type: r,
                        isEnough: a,
                        value: o,
                        discountValue: l,
                        showPlus: s,
                        stockBackgroundName: c = _.Red,
                    }) => {
                        const A = n()(F.value, F[`value__${r}`], !a && F.value__notEnough),
                            D = n()(F.icon, F[`icon__${r}-${t}`]),
                            m = n()(F.stock, l && F.stock__indent, e && F.stock__interactive),
                            B = s && o > 0 && '+',
                            C = n()(F.base, F[`base__${t}`]);
                        return i().createElement(
                            'span',
                            { className: C },
                            i().createElement(
                                'span',
                                { className: A },
                                B,
                                i().createElement(d, { value: o, format: r === E.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', { className: D }),
                            u &&
                                i().createElement(
                                    'span',
                                    { className: m },
                                    i().createElement('span', {
                                        className: F.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                    }),
                                    Boolean(l) && l,
                                ),
                        );
                    };
                D.defaultProps = { isEnough: !0 };
                const m = i().memo(D),
                    B = (0, o.memo)(
                        ({
                            id: u,
                            size: e = s.c.Medium,
                            variant: t = s.q.Storage,
                            isSelected: r = !1,
                            isMulti: _ = !1,
                            isNotInteractive: A = !1,
                            isPet: d = !1,
                            model: F,
                            onSelected: D,
                            onMouseEnter: B,
                            onMouseLeave: C,
                        }) => {
                            const g = F.toyID,
                                h = F.imageName,
                                p = F.goldPrice,
                                v = F.count,
                                f = void 0 === u ? g : u,
                                b = (0, o.useRef)(!1),
                                w = e === s.c.Huge || e === s.c.Large ? 'large' : 'medium',
                                S = (0, o.useState)(!1),
                                y = S[0],
                                x = S[1],
                                L = v <= 0,
                                T = {
                                    backgroundImage: `url(R.images.new_year.gui.maps.icons.newYear.toys.c_2025.${w}.${h})`,
                                },
                                M = n()(l.base, L && !d && l.base__locked, A && l.base__defaultCursor),
                                k = n()(l.border, _ && l.border__multi, y && l.border__hover),
                                R = n()(l.iconCheck, l[`iconCheck__${t}`], d && l.iconCheck__pet),
                                O = n()(l.image, r && t === s.q.Breaking && l.image__selected);
                            return i().createElement(
                                'div',
                                {
                                    className: M,
                                    onMouseDown: (u) => {
                                        u.button === a.t.LEFT && (b.current = !0);
                                    },
                                    onMouseUp: (u) => {
                                        if (b.current) {
                                            const e = d || (!d && !L);
                                            D && e && D(u, f), (b.current = !1);
                                        }
                                    },
                                    onMouseEnter: () => {
                                        B && B(f), x(!0);
                                    },
                                    onMouseLeave: () => {
                                        C && C(f), x(!1);
                                    },
                                },
                                i().createElement(
                                    'div',
                                    { className: k },
                                    i().createElement('div', { className: l.border__hover__left }),
                                    i().createElement('div', { className: l.border__hover__right }),
                                ),
                                i().createElement('div', { className: O, style: T }),
                                r && i().createElement('div', { className: R }),
                                r && d && i().createElement('div', { className: l.iconPlay }),
                                !r && L && !d && i().createElement('div', { className: l.iconLocked }),
                                !r &&
                                    L &&
                                    d &&
                                    i().createElement(
                                        'div',
                                        { className: l.price },
                                        i().createElement(m, { size: c.small, type: E.gold, value: p }),
                                    ),
                            );
                        },
                    );
            },
            8416: (u, e, t) => {
                'use strict';
                let r, n;
                t.d(e, { c: () => n, q: () => r }),
                    (function (u) {
                        (u.Storage = 'storage'),
                            (u.Popover = 'popover'),
                            (u.Breaking = 'breaking'),
                            (u.Installation = 'installation');
                    })(r || (r = {})),
                    (function (u) {
                        (u.Medium = 'medium'), (u.Large = 'large'), (u.Huge = 'huge');
                    })(n || (n = {}));
            },
            1270: (u, e, t) => {
                'use strict';
                t.d(e, { V: () => s });
                var r = t(7727),
                    n = t(6179),
                    a = t.n(n),
                    o = t(957),
                    i = t(9377),
                    l = t(8416);
                const s = ({
                    id: u,
                    isSelected: e,
                    size: t = l.c.Medium,
                    modelItem: s,
                    onSelected: c,
                    onUnmountSelected: E,
                    onMountedSelected: _,
                }) => {
                    (0, n.useEffect)(() => {
                        if (e) return null == _ || _(u), () => (null == E ? void 0 : E(u));
                    }, [u, e, _, E]);
                    const A = (0, n.useCallback)(
                            (u, e) => {
                                c && c(u, e);
                            },
                            [c],
                        ),
                        d = {
                            contentId: R.views.new_year.lobby.new_year.tooltips.NyPetDecorationTooltip('resId'),
                            args: { toyID: s.toyID },
                        };
                    return a().createElement(
                        'div',
                        { className: 'PetDecorationSlot_base_74', onMouseEnter: () => r.$.playHighlight() },
                        a().createElement(
                            'div',
                            { className: 'PetDecorationSlot_content_c1' },
                            a().createElement(
                                o.l,
                                d,
                                a().createElement(i.$, {
                                    model: s,
                                    id: u,
                                    isSelected: e,
                                    size: t,
                                    isPet: !0,
                                    variant: l.q.Popover,
                                    onSelected: A,
                                }),
                            ),
                        ),
                    );
                };
            },
            6404: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r);
                const a = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var o = t(3138);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function s(u, e, t) {
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
                !(function (u) {
                    (u.extraLarge = 'extraLarge'),
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
                        (u.extraSmallHeight = 'extraSmallHeight');
                })(l || (l = {}));
                const c = o.O.client.getSize('rem'),
                    E = c.width,
                    _ = c.height,
                    A = Object.assign({ width: E, height: _ }, s(E, _, i)),
                    d = (0, r.createContext)(A),
                    F = ['children'],
                    D = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, F);
                        const n = (0, r.useContext)(d),
                            o = n.extraLarge,
                            i = n.large,
                            l = n.medium,
                            s = n.small,
                            c = n.extraSmall,
                            E = n.extraLargeWidth,
                            _ = n.largeWidth,
                            A = n.mediumWidth,
                            D = n.smallWidth,
                            m = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            C = n.largeHeight,
                            g = n.mediumHeight,
                            h = n.smallHeight,
                            p = n.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && o) return e;
                            if (t.large && i) return e;
                            if (t.medium && l) return e;
                            if (t.small && s) return e;
                            if (t.extraSmall && c) return e;
                        } else {
                            if (t.extraLargeWidth && E) return a(e, t, v);
                            if (t.largeWidth && _) return a(e, t, v);
                            if (t.mediumWidth && A) return a(e, t, v);
                            if (t.smallWidth && D) return a(e, t, v);
                            if (t.extraSmallWidth && m) return a(e, t, v);
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
                                if (t.mediumHeight && g) return e;
                                if (t.smallHeight && h) return e;
                                if (t.extraSmallHeight && p) return e;
                            }
                        }
                        return null;
                    };
                (D.defaultProps = {
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
                    (0, r.memo)(D);
                const m = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(d),
                            t = (0, r.useState)(e),
                            a = t[0],
                            l = t[1],
                            c = (0, r.useCallback)((u, e) => {
                                const t = o.O.view.pxToRem(u),
                                    r = o.O.view.pxToRem(e);
                                l(Object.assign({ width: t, height: r }, s(t, r, i)));
                            }, []);
                        m(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const E = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return n().createElement(d.Provider, { value: E }, u);
                    });
                var C = t(6483),
                    g = t.n(C),
                    h = t(926),
                    p = t.n(h);
                let v, f, b;
                var w;
                !(function (u) {
                    (u[(u.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = i.small.width)] = 'Small'),
                        (u[(u.Medium = i.medium.width)] = 'Medium'),
                        (u[(u.Large = i.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    ((w = f || (f = {}))[(w.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                    (w[(w.Small = i.small.width)] = 'Small'),
                    (w[(w.Medium = i.medium.width)] = 'Medium'),
                    (w[(w.Large = i.large.width)] = 'Large'),
                    (w[(w.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge'),
                    (function (u) {
                        (u[(u.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = i.small.height)] = 'Small'),
                            (u[(u.Medium = i.medium.height)] = 'Medium'),
                            (u[(u.Large = i.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const S = () => {
                        const u = (0, r.useContext)(d),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return v.ExtraLarge;
                                    case u.large:
                                        return v.Large;
                                    case u.medium:
                                        return v.Medium;
                                    case u.small:
                                        return v.Small;
                                    case u.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case u.largeWidth:
                                        return f.Large;
                                    case u.mediumWidth:
                                        return f.Medium;
                                    case u.smallWidth:
                                        return f.Small;
                                    case u.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u),
                            o = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case u.largeHeight:
                                        return b.Large;
                                    case u.mediumHeight:
                                        return b.Medium;
                                    case u.smallHeight:
                                        return b.Small;
                                    case u.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: a, mediaHeight: o, remScreenWidth: e, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: p().SMALL_WIDTH,
                        [f.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [f.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_HEIGHT,
                        [b.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [b.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL,
                        [v.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [v.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [v.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    k = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, y);
                        const a = S(),
                            o = a.mediaWidth,
                            i = a.mediaHeight,
                            l = a.mediaSize;
                        return n().createElement('div', x({ className: g()(t, L[o], T[i], M[l]) }, r), e);
                    },
                    O = ['children'],
                    N = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, O);
                        return n().createElement(B, null, n().createElement(k, t, e));
                    };
                var P = t(493),
                    H = t.n(P);
                let I;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(I || (I = {}));
                const W = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    G = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    U = (u, e, t = I.left) => u.split(e).reduce(t === I.left ? W : G, []),
                    $ = (() => {
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
                    X = ['zh_cn', 'zh_sg', 'zh_tw'];
                let j;
                var z;
                ((z = j || (j = {})).SHORT_DATE = 'short-date'),
                    (z.SHORT_TIME = 'short-time'),
                    (z.SHORT_DATE_TIME = 'short-date-time'),
                    (z.FULL_DATE = 'full-date'),
                    (z.FULL_DATE_TIME = 'full-date-time'),
                    (z.MONTH = 'month'),
                    (z.MONTH_DATE = 'month-date'),
                    (z.DATE_MONTH = 'date-month'),
                    (z.MONTH_YEAR = 'month-year'),
                    (z.WEEK_DAY = 'week-day'),
                    (z.WEEK_DAY_TIME = 'week-day-time'),
                    (z.YEAR = 'year'),
                    (z.DATE_YEAR = 'date-year');
                var q = t(4179);
                Date.now();
                var V = t(7902);
                const Y = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    K = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    Z = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    Q = q.Sw.instance;
                let J;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(J || (J = {}));
                const uu = (u = 'model', e = J.Deep) => {
                    const t = (0, r.useState)(0),
                        n = (t[0], t[1]),
                        a = (0, r.useMemo)(() => (0, V.F)(), []),
                        o = a.caller,
                        i = a.resId,
                        l = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${u}` : u),
                            [o, u],
                        ),
                        s = (0, r.useState)(() =>
                            ((u) => {
                                const e = Y(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return K(e) ? e.value : e;
                            })(
                                ((u) =>
                                    ((u, e) =>
                                        u.split('.').reduce((u, e) => {
                                            const t = Y(`${u}.${e}`, window);
                                            return K(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                        }))(u))(l),
                            ),
                        ),
                        c = s[0],
                        E = s[1],
                        _ = (0, r.useRef)(-1);
                    return (
                        m(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? J.Deep : J.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== J.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === J.Deep
                                            ? (u === c && n((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    r = ((u) => {
                                        const e = ((u) => {
                                                const e = (0, V.F)(),
                                                    t = e.caller,
                                                    r = e.resId,
                                                    n =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: n, modelPath: Z(n, ''), resId: r };
                                            })(),
                                            t = e.modelPrefix,
                                            r = u.split('.');
                                        if (r.length > 0) {
                                            const u = [r[0]];
                                            return (
                                                r.reduce((e, r) => {
                                                    const n = Y(Z(t, `${e}.${r}`), window);
                                                    return K(n)
                                                        ? (u.push(n.id), `${e}.${r}.value`)
                                                        : (u.push(r), `${e}.${r}`);
                                                }),
                                                u.reduce((u, e) => u + '.' + e)
                                            );
                                        }
                                        return '';
                                    })(u);
                                _.current = Q.addCallback(r, t, i, e === J.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (e !== J.None)
                                return () => {
                                    Q.removeCallback(_.current, i);
                                };
                        }, [i, e]),
                        c
                    );
                };
                q.Sw.instance;
                var eu = t(5521);
                const tu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ru(u = eu.n.NONE, e = tu, t = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== eu.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                var nu = t(9246);
                var au = t(1856),
                    ou = t(7030),
                    iu = t(7727);
                const lu = () => {},
                    su = (u, e) =>
                        ((u, e, t) => (t < u ? u : t > e ? e : t))(-u.scrollTop, u.scrollHeight - u.offsetHeight, e);
                let cu;
                !(function (u) {
                    (u[(u.Top = -1)] = 'Top'), (u[(u.Bottom = 1)] = 'Bottom');
                })(cu || (cu = {}));
                const Eu = 'Bar_base__nonActive_20',
                    _u = 'disable',
                    Au = { pending: !1, offset: 0 },
                    du = (u) => 0.9 * u.offsetHeight,
                    Fu = (0, r.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = du, onDrag: a = lu }) => {
                        const o = (0, r.useRef)(null),
                            i = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            E = (0, r.useState)(Au),
                            _ = E[0],
                            A = E[1],
                            d = (0, r.useCallback)(
                                (u) => {
                                    A(u),
                                        c.current && a({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            F = (u) => {
                                const e = s.current,
                                    t = c.current;
                                if (!u || !e || !t) return;
                                const r = u.scrollTop / (u.scrollHeight - u.offsetHeight),
                                    n = (e.offsetHeight - t.offsetHeight) * r;
                                (t.style.transform = `translateY(${0 | n}px)`),
                                    ((u) => {
                                        if (i.current && l.current && s.current && c.current) {
                                            if (0 === u)
                                                return i.current.classList.add(_u), void l.current.classList.remove(_u);
                                            if (
                                                ((e = s.current),
                                                (t = c.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(_u), void l.current.classList.add(_u);
                                            var e, t;
                                            i.current.classList.remove(_u), l.current.classList.remove(_u);
                                        }
                                    })(n);
                            };
                        (0, r.useEffect)(
                            () =>
                                (0, au.v)(() => {
                                    const e = () => {
                                        u.work(({ container: u }) => {
                                            ((u) => {
                                                const e = c.current;
                                                if (!u || !e) return;
                                                const t = u.offsetHeight,
                                                    r = u.scrollHeight,
                                                    n = Math.min(1, t / r),
                                                    a = 100 * n;
                                                (e.style.height = `${a}%`),
                                                    (e.style.display = 'flex'),
                                                    o.current &&
                                                        (1 === n
                                                            ? o.current.classList.add(Eu)
                                                            : o.current.classList.remove(Eu));
                                            })(u),
                                                F(u);
                                        });
                                    };
                                    e();
                                    const t = () => {
                                        u.work(({ container: u }) => {
                                            F(u);
                                        });
                                    };
                                    let r = lu;
                                    const n = () => {
                                        r(), (r = (0, au.v)(e));
                                    };
                                    return (
                                        window.addEventListener('resize', n),
                                        u.work(({ on: u }) => {
                                            u('rest', t), u('change', t), u('contentUpdate', n);
                                        }),
                                        () => {
                                            r(),
                                                u.work(({ off: u }) => {
                                                    u('rest', t), u('change', t), u('contentUpdate', n);
                                                }),
                                                window.removeEventListener('resize', n);
                                        }
                                    );
                                }),
                            [u],
                        ),
                            (0, r.useEffect)(() => {
                                if (!_.pending) return;
                                const e = (e) => {
                                        u.work(({ container: u, setScrollTop: t }) => {
                                            const r = s.current,
                                                n = c.current;
                                            if (!u || !r || !n) return;
                                            const o = e.screenY - _.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * u.scrollHeight;
                                            t.start({
                                                scrollTop: su(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollTop: u.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: n, thumbOffset: o, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', e), d(Au);
                                    };
                                return (
                                    window.addEventListener('mousemove', e),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', e),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [u, _.offset, _.pending, a, d]);
                        const D = (u) => {
                            u.target.classList.contains(_u) || (0, iu.G)('highlight');
                        };
                        return n().createElement(
                            'div',
                            { className: g()('Bar_base_72', e.base), ref: o },
                            n().createElement('div', {
                                className: g()('Bar_topButton_43', e.topButton),
                                onClick: (e) => {
                                    e.target.classList.contains(_u) ||
                                        ((0, iu.G)('play'),
                                        u.work(({ applyStepTo: u }) => {
                                            u(cu.Top);
                                        }));
                                },
                                ref: i,
                                onMouseEnter: D,
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: g()('Bar_track_c8', e.track),
                                    onMouseDown: (e) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            ((0, iu.G)('play'),
                                            e.target === r
                                                ? d({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y })
                                                : ((n = e.screenY > r.getBoundingClientRect().y ? cu.Bottom : cu.Top),
                                                  c.current &&
                                                      u.work(({ container: u, applyScroll: e }) => {
                                                          if (!u) return;
                                                          const r = t(u);
                                                          e(su(u, u.scrollTop + r * n));
                                                      })));
                                    },
                                    ref: s,
                                    onMouseEnter: D,
                                },
                                n().createElement('div', { ref: c, className: g()('Bar_thumb_02', e.thumb) }),
                                n().createElement('div', { className: g()('Bar_rail_bd', e.rail) }),
                            ),
                            n().createElement('div', {
                                className: g()('Bar_bottomButton_aa', e.bottomButton),
                                onClick: (e) => {
                                    e.target.classList.contains(_u) ||
                                        ((0, iu.G)('play'),
                                        u.work(({ applyStepTo: u }) => {
                                            u(cu.Bottom);
                                        }));
                                },
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Du = 'Scroll_base_f5',
                    mu = () => (0, r.useRef)({ work: lu }).current,
                    Bu = { step: { type: 'proportional', factor: 5 }, animationConfig: { tension: 120 } },
                    Cu = ({ children: u, settings: e = Bu, onChange: t = lu, api: a, className: o, onWheel: i }) => {
                        const l = (0, r.useRef)(null),
                            s = (0, r.useRef)({
                                rest: [],
                                change: [],
                                resolve: [],
                                contentUpdate: [],
                                scrollResizeUpdate: [],
                            }),
                            c = (0, ou.useSpring)(() => ({
                                scrollTop: 0,
                                onResolve: (u) => {
                                    const e = l.current;
                                    e && s.current.change.forEach((t) => t(u, e));
                                },
                                onRest: (u) => {
                                    const e = l.current;
                                    e && s.current.rest.forEach((t) => t(u, e));
                                },
                                onChange: (u) => {
                                    const e = l.current;
                                    e &&
                                        (t(u),
                                        s.current.change.forEach((t) => t(u, e)),
                                        (e.scrollTop = u.value.scrollTop));
                                },
                            })),
                            E = c[0],
                            _ = c[1],
                            A = (u, { immediate: t = !1 } = {}) => {
                                const r = l.current;
                                r &&
                                    _.start({
                                        scrollTop: u,
                                        immediate: t,
                                        reset: !0,
                                        from: { scrollTop: r.scrollTop },
                                        config: e.animationConfig,
                                    });
                            },
                            d = (u) => {
                                const t = l.current;
                                if (!t) return;
                                const r = ((u, e) => {
                                        switch (e.type) {
                                            case 'proportional':
                                                return u.offsetHeight / e.factor;
                                            case 'fixed':
                                                return e.value;
                                        }
                                    })(t, e.step),
                                    n = ((u, e, t) => {
                                        const r = E.scrollTop.goal - E.scrollTop.get();
                                        return su(u, u.scrollTop + e * t + r);
                                    })(t, u, r);
                                A(n);
                            };
                        (0, r.useEffect)(() => {
                            let u = lu;
                            const e = () => {
                                u(),
                                    (u = (0, au.v)(() => {
                                        const u = l.current;
                                        u && (A(u.scrollTop), s.current.scrollResizeUpdate.forEach((e) => e(u)));
                                    }));
                            };
                            return (
                                s.current.contentUpdate.push(e),
                                window.addEventListener('resize', e),
                                () => {
                                    u(), window.removeEventListener('resize', e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                a &&
                                    (a.work = (u) =>
                                        u({
                                            scrollTop: E.scrollTop,
                                            setScrollTop: _,
                                            on: (u, e) => s.current[u].push(e),
                                            off: (u, e) =>
                                                ((u, e) => {
                                                    const t = u.indexOf(e);
                                                    t > -1 && u.splice(t, 1);
                                                })(s.current[u], e),
                                            triggerContentUpdate: () => {
                                                const u = l.current;
                                                u && s.current.contentUpdate.forEach((e) => e(u));
                                            },
                                            container: l.current,
                                            settings: e,
                                            applyScroll: A,
                                            applyStepTo: d,
                                        }));
                            });
                        const F =
                            null != i
                                ? i
                                : (u) => {
                                      const e = u.deltaY > 1 ? cu.Top : cu.Bottom;
                                      d(e);
                                  };
                        return n().createElement('div', { className: g()(Du, o), onWheel: F, ref: l }, u);
                    };
                (Cu.Bar = Fu),
                    (Cu.Default = ({
                        children: u,
                        api: e,
                        className: t,
                        barClassNames: a,
                        areaClassName: o,
                        scrollClassName: i,
                        settings: l,
                        getStepByRailClick: s,
                        onChange: c,
                        onDrag: E,
                    }) => {
                        const _ = mu(),
                            A = e || _,
                            d = (0, r.useMemo)(() => {
                                const u = a || {};
                                return Object.assign({}, u, { base: g()(Du, u.base) });
                            }, [a]);
                        return n().createElement(
                            'div',
                            {
                                className: g()('Scroll_defaultScroll_e9', t),
                                onWheel: (u) => {
                                    A.work(({ applyStepTo: e }) => {
                                        e(u.deltaY > 1 ? cu.Top : cu.Bottom);
                                    });
                                },
                            },
                            n().createElement(
                                'div',
                                { className: g()('Scroll_area_24', o) },
                                n().createElement(
                                    Cu,
                                    { className: i, api: A, settings: l, onChange: c, onWheel: lu },
                                    u,
                                ),
                            ),
                            n().createElement(Fu, { getStepByRailClick: s, api: A, onDrag: E, classNames: d }),
                        );
                    });
                const gu = 'NyRowScroll_barButton_48',
                    hu = {
                        base: 'NyRowScroll_bar_44',
                        thumb: 'NyRowScroll_barThumb_5d',
                        rail: 'NyRowScroll_barRail_a7',
                        topButton: gu,
                        bottomButton: gu,
                    },
                    pu = (u, e) => {
                        const t = e % u | 0;
                        return t > 0 ? (e - (t > 0.35 * u ? t - u : t)) | 0 : 0 | e;
                    };
                var vu;
                !(function (u) {
                    (u[(u.Dragging = 0)] = 'Dragging'), (u[(u.Default = 1)] = 'Default');
                })(vu || (vu = {}));
                const fu = ({
                    children: u,
                    scrollSettings: e,
                    rowHeight: t,
                    contentItemsCount: a,
                    onChange: o,
                    onRest: i,
                    scrollClassName: l,
                    areaClassName: s,
                    barClassNames: c = {},
                    api: E,
                }) => {
                    const _ = (0, r.useRef)(vu.Default),
                        A = mu(),
                        d = null != E ? E : A,
                        F = (0, r.useCallback)(() => {
                            _.current !== vu.Dragging &&
                                d.work(({ scrollTop: u, applyScroll: e, container: r }) => {
                                    if (!r || u.goal >= r.scrollHeight - r.offsetHeight || u.goal <= 0) return;
                                    const n = pu(t, u.goal);
                                    n !== u.goal && e(n);
                                });
                        }, [d, t]),
                        D = (0, r.useCallback)((u) => pu(t, du(u)), [t]);
                    (0, r.useEffect)(() => {
                        const u = (u, e) => {
                                e && o && o(u, e);
                            },
                            e = (u, e) => {
                                F(), i && i(u, e);
                            };
                        return (
                            d.work(({ on: t }) => {
                                t('change', u), t('rest', e);
                            }),
                            window.addEventListener('resize', F),
                            () => {
                                d.work(({ off: t }) => {
                                    t('change', u), t('rest', e);
                                }),
                                    window.removeEventListener('resize', F);
                            }
                        );
                    }, [d, F, o, i]),
                        (0, r.useEffect)(() => d.work(({ triggerContentUpdate: u }) => u()), [a, d]);
                    const m = (0, r.useCallback)(
                            (u) => {
                                'dragEnd' === u.type ? ((_.current = vu.Default), F()) : (_.current = vu.Dragging);
                            },
                            [F],
                        ),
                        B = {
                            base: g()(hu.base, c.base),
                            thumb: g()(hu.thumb, c.thumb),
                            rail: g()(hu.rail, c.rail),
                            track: g()(hu.track, c.track),
                            topButton: g()(hu.topButton, c.topButton, 'NyRowScroll_topButton_ab'),
                            bottomButton: g()(hu.bottomButton, c.bottomButton, 'NyRowScroll_bottomButton_92'),
                        };
                    return n().createElement(
                        Cu.Default,
                        {
                            api: d,
                            settings: e,
                            scrollClassName: l,
                            areaClassName: s,
                            getStepByRailClick: D,
                            barClassNames: B,
                            onDrag: m,
                            className: 'NyRowScroll_base_12',
                        },
                        u,
                    );
                };
                let bu;
                var wu;
                ((wu = bu || (bu = {})).Tiny = 'tiny'),
                    (wu.Small = 'small'),
                    (wu.Medium = 'medium'),
                    (wu.Large = 'large'),
                    (wu.Huge = 'huge');
                let Su;
                !(function (u) {
                    (u.Small = 'extraSmall'), (u.Medium = 'medium'), (u.Large = 'large');
                })(Su || (Su = {}));
                var yu = t(8416);
                const xu = (u, e) => Object.assign({}, Bu, { step: { type: 'fixed', value: Tu(u, e) } }),
                    Lu = (u, e) => e[u] || e.default,
                    Tu = (u, e) => {
                        const t = Lu(u, e);
                        return t.itemHeight + 2 * t.itemOffset;
                    },
                    Mu = 'AvailableDecorations_shadow_c5',
                    ku = 'AvailableDecorations_shadow__visible_86';
                var Ru = t(6373),
                    Ou = t(9887),
                    Nu = t.n(Ou);
                const Pu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Hu = (u) => u.includes('_') && ((u) => Pu.includes(u))(u.split('_').at(-1)),
                    Iu = [v.ExtraLarge, v.Large, v.Medium, v.Small, v.ExtraSmall],
                    Wu = (u, e) =>
                        Object.keys(u).reduce((t, r) => {
                            if (r in t) return t;
                            if (Hu(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = Iu.indexOf(e),
                                    o = (-1 !== a ? Pu.slice(a) : [])
                                        .map((u) => n + '_' + u)
                                        .find((e) => void 0 !== u[e]),
                                    i = o ? u[o] : void 0;
                                return (t[n] = void 0 !== i ? i : u[n]), t;
                            }
                            const n = u[r];
                            return (
                                void 0 === n ||
                                    ((u, e) => Pu.some((t) => void 0 !== e[`${u}_${t}`]))(r, u) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    Gu = (u, e = Wu) => {
                        const t = (
                            (u, e = Wu) =>
                            (t) => {
                                const a = S().mediaSize,
                                    o = (0, r.useMemo)(() => e(t, a), [t, a]);
                                return n().createElement(u, o);
                            }
                        )(u, e);
                        return n().memo((e) =>
                            Object.keys(e).some((u) => Hu(u) && void 0 !== e[u])
                                ? n().createElement(t, e)
                                : n().createElement(u, e),
                        );
                    },
                    Uu = {
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
                    $u = [
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
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                Object.keys(Nu());
                const ju = {
                        XL: { mt: Uu.mt__XL, mr: Uu.mr__XL, mb: Uu.mb__XL, ml: Uu.ml__XL },
                        LG: { mt: Uu.mt__LG, mr: Uu.mr__LG, mb: Uu.mb__LG, ml: Uu.ml__LG },
                        MDp: { mt: Uu.mt__MDp, mr: Uu.mr__MDp, mb: Uu.mb__MDp, ml: Uu.ml__MDp },
                        MD: { mt: Uu.mt__MD, mr: Uu.mr__MD, mb: Uu.mb__MD, ml: Uu.ml__MD },
                        SMp: { mt: Uu.mt__SMp, mr: Uu.mr__SMp, mb: Uu.mb__SMp, ml: Uu.ml__SMp },
                        SM: { mt: Uu.mt__SM, mr: Uu.mr__SM, mb: Uu.mb__SM, ml: Uu.ml__SM },
                        XS: { mt: Uu.mt__XS, mr: Uu.mr__XS, mb: Uu.mb__XS, ml: Uu.ml__XS },
                    },
                    zu = (Object.keys(ju), ['mt', 'mr', 'mb', 'ml']),
                    qu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Vu = Gu((u) => {
                        let e = u.className,
                            t = u.width,
                            a = u.height,
                            o = u.m,
                            i = u.mt,
                            l = void 0 === i ? o : i,
                            s = u.mr,
                            c = void 0 === s ? o : s,
                            E = u.mb,
                            _ = void 0 === E ? o : E,
                            A = u.ml,
                            d = void 0 === A ? o : A,
                            F = u.column,
                            D = u.row,
                            m = u.flexDirection,
                            B = void 0 === m ? (F ? 'column' : D && 'row') || void 0 : m,
                            C = u.flexStart,
                            h = u.center,
                            p = u.flexEnd,
                            v = u.spaceBetween,
                            f = u.spaceAround,
                            b = u.justifyContent,
                            w =
                                void 0 === b
                                    ? (C ? 'flex-start' : h && 'center') ||
                                      (p && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : b,
                            S = u.alignItems,
                            y = void 0 === S ? (C ? 'flex-start' : h && 'center') || (p && 'flex-end') || void 0 : S,
                            x = u.alignSelf,
                            L = u.wrap,
                            T = u.flexWrap,
                            M = void 0 === T ? (L ? 'wrap' : void 0) : T,
                            k = u.grow,
                            R = u.shrink,
                            O = u.flex,
                            N = void 0 === O ? (k || R ? `${k ? 1 : 0} ${R ? 1 : 0} auto` : void 0) : O,
                            P = u.style,
                            H = u.children,
                            I = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, $u);
                        const W = (0, r.useMemo)(() => {
                                const u = { mt: l, mr: c, mb: _, ml: d },
                                    e = ((u) =>
                                        zu.reduce((e, t) => {
                                            const r = u[t];
                                            return r && 'number' != typeof r ? e.concat(ju[!0 === r ? 'MD' : r][t]) : e;
                                        }, []))(u),
                                    r = ((u) =>
                                        zu.reduce((e, t) => {
                                            const r = u[t];
                                            return 'number' == typeof r && (e[qu[t]] = r + 'rem'), e;
                                        }, {}))(u);
                                return {
                                    computedStyle: Object.assign({}, P, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        flex: N,
                                        alignSelf: x,
                                        display: B || y ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: M,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: e,
                                };
                            }, [t, a, l, c, _, d, P, N, x, B, M, w, y]),
                            G = W.computedStyle,
                            U = W.computedClassNames;
                        return n().createElement('div', Xu({ className: g()(Uu.base, ...U, e), style: G }, I), H);
                    }),
                    Yu = ({ binding: u, text: e = '', classMix: t, alignment: a = I.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, o) =>
                                      n().createElement(
                                          'div',
                                          { className: g()('FormatText_base_d0', t), key: `${e}-${o}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = I.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return X.includes(t)
                                                                ? $(u)
                                                                : ((u, e = I.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          U(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(U(u, r, I.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, a, u).map((u, e) =>
                                              n().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              );
                var Ku = t(3532),
                    Zu = t.n(Ku);
                const Qu = {
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
                    Ju = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                Object.keys(Nu());
                const ee = Object.keys(Zu()),
                    te = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    re = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ne = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ae =
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
                            'heading-H56': te,
                            'heading-H36': te,
                            'heading-H28': re,
                            'heading-H24': re,
                            'heading-H24R': re,
                            'heading-H22': re,
                            'heading-H20R': re,
                            'heading-H18': re,
                            'heading-H15': ne,
                            'heading-H14': ne,
                            'paragraph-P24': re,
                            'paragraph-P18': re,
                            'paragraph-P16': re,
                            'paragraph-P14': ne,
                            'paragraph-P12': ne,
                            'paragraph-P10': ne,
                        }),
                    oe =
                        (Object.keys(ae),
                        (u) =>
                            u
                                ? ((u) => ee.includes(u))(u)
                                    ? { colorClassName: Qu[u] }
                                    : { colorStyle: { color: u } }
                                : {}),
                    ie = Gu((u) => {
                        let e = u.text,
                            t = u.variant,
                            a = u.className,
                            o = u.color,
                            i = u.m,
                            l = u.mt,
                            s = void 0 === l ? i : l,
                            c = u.mr,
                            E = void 0 === c ? i : c,
                            _ = u.mb,
                            A = void 0 === _ ? i : _,
                            d = u.ml,
                            F = void 0 === d ? i : d,
                            D = u.style,
                            m = u.format,
                            B = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Ju);
                        const C = (0, r.useMemo)(() => {
                                const u = oe(o),
                                    e = u.colorClassName,
                                    t = u.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, D, r), colorClassName: e };
                            }, [D, o]),
                            h = C.computedStyle,
                            p = C.colorClassName;
                        return n().createElement(
                            Vu,
                            ue(
                                {
                                    className: g()(Qu.base, t && Qu[t], p, a),
                                    style: h,
                                    mt: !0 === s ? ae[t || 'paragraph-P16'].mt : s,
                                    mr: !0 === E ? ae[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === A ? ae[t || 'paragraph-P16'].mb : A,
                                    ml: !0 === F ? ae[t || 'paragraph-P16'].ml : F,
                                },
                                B,
                            ),
                            void 0 !== m ? n().createElement(Yu, ue({}, m, { text: e })) : e,
                        );
                    }),
                    le = 'SlotPlaceholders_point_81';
                var se = t(1641),
                    ce = t(440),
                    Ee = t(1270);
                const _e = [
                    'isSelected',
                    'isSelectedForBreak',
                    'onSelectedForApply',
                    'onSelectedForBreak',
                    'isInteractive',
                    'isPetSlot',
                ];
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const de = (0, r.memo)((u) => {
                        let e = u.isSelected,
                            t = u.isSelectedForBreak,
                            a = u.onSelectedForApply,
                            o = u.onSelectedForBreak,
                            i = u.isInteractive,
                            l = u.isPetSlot,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(u);
                                for (r = 0; r < a.length; r++) (t = a[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, _e);
                        const c = (0, r.useCallback)(
                            (u, t) => {
                                i &&
                                    (u.button === se.t.LEFT
                                        ? a(t)
                                        : u.button === se.t.RIGHT && (iu.$.playClick(), !e && o(t)));
                            },
                            [i, a, e, o],
                        );
                        return n().createElement(
                            'div',
                            { className: 'PopoverDecorationSlot_base_56' },
                            l
                                ? n().createElement(Ee.V, Ae({}, s, { isSelected: e, onSelected: c }))
                                : n().createElement(
                                      ce.b,
                                      Ae({}, s, {
                                          isSelected: e || t,
                                          variant: t ? yu.q.Breaking : yu.q.Popover,
                                          onSelected: c,
                                      }),
                                  ),
                        );
                    }),
                    Fe = R.strings.ny.NyPopup,
                    De = R.strings.ny.customizationZones.tooltip,
                    me = (0, r.memo)(({ slots: u, slotClasses: e, isPetSlot: t }) => {
                        var a;
                        const o = uu('model', J.Shallow),
                            i = o.appliedSelections,
                            l = o.breakSelections,
                            s = o.isBreakAnimationEnabled,
                            c = o.currentObject,
                            E = uu('model', J.None),
                            _ = E.onApplySelection,
                            A = E.onBreakSelection,
                            d = E.onIsNewStateChanged,
                            F = E.onBreakAnimationComplete,
                            D = i.map((u) => u.value),
                            m = l.map((u) => u.value),
                            B = u.filter((u) => u.value.isPremium),
                            C = u
                                .filter((u) => !u.value.isPremium)
                                .map((e, t) => u[u.length - 1 - t])
                                .sort((u, e) => (u.value.goldPrice < e.value.goldPrice ? -1 : 1)),
                            g = c && !t ? (null == (a = De.$dyn(c)) ? void 0 : a.description()) : '',
                            h = (0, r.useCallback)((u) => d({ index: u }), [d]),
                            p = (0, r.useCallback)((u) => _({ index: u }), [_]),
                            v = (0, r.useCallback)((u) => A({ index: u }), [A]),
                            f = (0, r.useCallback)(() => F(), [F]),
                            b = (0, r.useMemo)(
                                () =>
                                    s
                                        ? ((u, e, t = 10) => {
                                              const r = u.map(() => 500 + 50 * Math.trunc(Math.random() * t)),
                                                  n = new Set(r),
                                                  a = Math.max(...n),
                                                  o = u.length > t,
                                                  i = o ? [...n].map((u) => r.indexOf(u)) : [],
                                                  l = r.indexOf(a);
                                              return u.reduce(
                                                  (u, t, n) => (
                                                      (u[t] = {
                                                          delay: r[n],
                                                          ignoreSound: o && !i.includes(n),
                                                          onAnimationComplete: n === l ? e : void 0,
                                                      }),
                                                      u
                                                  ),
                                                  {},
                                              );
                                          })(m, f)
                                        : void 0,
                                [m, s, f],
                            ),
                            w = (u, r, a) =>
                                u.length > 0
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          !t &&
                                              n().createElement(
                                                  'div',
                                                  { className: 'SlotPlaceholders_titleDescription_4f' },
                                                  n().createElement(
                                                      'div',
                                                      { className: 'SlotPlaceholders_leftGradient_a2' },
                                                      n().createElement('div', { className: le }),
                                                  ),
                                                  n().createElement(
                                                      Ru.i,
                                                      { body: a },
                                                      n().createElement(
                                                          'div',
                                                          { className: 'SlotPlaceholders_toyInformation_b0' },
                                                          n().createElement(ie, {
                                                              text: r,
                                                              className: 'SlotPlaceholders_titleToys_a3',
                                                          }),
                                                          n().createElement('div', {
                                                              className: 'SlotPlaceholders_information_e5',
                                                          }),
                                                      ),
                                                  ),
                                                  n().createElement(
                                                      'div',
                                                      { className: 'SlotPlaceholders_rightGradient_ec' },
                                                      n().createElement('div', { className: le }),
                                                  ),
                                              ),
                                          u.map(({ value: u, id: r }) =>
                                              n().createElement(
                                                  'div',
                                                  { key: r, className: e },
                                                  n().createElement(de, {
                                                      modelItem: u,
                                                      id: r,
                                                      isInteractive: !s,
                                                      isSelected: D.includes(parseInt(u.toyID)),
                                                      isSelectedForBreak: m.includes(r),
                                                      onVisited: h,
                                                      onSelectedForApply: p,
                                                      onSelectedForBreak: v,
                                                      breakSettings: b && b[r],
                                                      isPetSlot: t,
                                                  }),
                                              ),
                                          ),
                                      )
                                    : null;
                        return n().createElement(
                            n().Fragment,
                            null,
                            w(B, Fe.premiumToys(), Fe.tooltip.premiumToys()),
                            w(
                                C,
                                Fe.usualToys(),
                                ((S = Fe.tooltip.usualToys()),
                                (y = { param: g }),
                                S.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                    const e = 0 === u.indexOf('%') ? 2 : 1;
                                    return String(y[u.slice(e, -e)]);
                                })),
                            ),
                        );
                        var S, y;
                    }),
                    Be = { base: 'AvailableDecorations_bar_b5' },
                    Ce = { default: { itemHeight: 80, itemOffset: 4 } },
                    ge = (0, r.memo)(({ isPetSlot: u }) => {
                        const e = uu('model.slots', J.Deep),
                            t = (() => {
                                const u = (0, r.useContext)(d);
                                switch (!0) {
                                    case u.extraSmall:
                                        return bu.Tiny;
                                    case u.small:
                                        return bu.Small;
                                    case u.medium:
                                        return bu.Medium;
                                    case u.large:
                                        return bu.Large;
                                    case u.extraLarge:
                                        return bu.Huge;
                                    default:
                                        return console.error('Unreachable media context resolution'), bu.Tiny;
                                }
                            })(),
                            a = mu(),
                            o = e.length + 1,
                            i = Math.ceil(o / 5),
                            l = 5 * i,
                            s = (0, r.useMemo)(() => (u ? 1 : 6 > i + 1 ? i + 1 : 6), [i, u]),
                            c = 5 * s,
                            E = (0, r.useState)(c),
                            _ = E[0],
                            A = E[1],
                            F = (0, r.useState)(!1),
                            D = F[0],
                            m = F[1],
                            B = (0, r.useState)(!1),
                            C = B[0],
                            h = B[1];
                        (0, r.useEffect)(() => {
                            l > c && A(l);
                        }, [_, c, l]);
                        const p = (0, r.useMemo)(() => {
                                return {
                                    scrollSettings: xu((u = t), (e = Ce)),
                                    itemSizes: Lu(u, e),
                                    rowHeight: Tu(u, e),
                                };
                                var u, e;
                            }, [t]),
                            v = p.scrollSettings,
                            f = p.itemSizes,
                            b = p.rowHeight;
                        return (
                            (0, r.useEffect)(
                                () =>
                                    (0, au.v)(() => {
                                        const u = () => {
                                            a.work(({ container: u }) => {
                                                if (!u) return;
                                                const e = u.scrollTop,
                                                    t = u.offsetHeight,
                                                    r = u.scrollHeight;
                                                m(e > 0), h(e + t < r);
                                            });
                                        };
                                        return (
                                            u(),
                                            a.work(({ on: e }) => {
                                                e('change', u), e('rest', u);
                                            }),
                                            () =>
                                                a.work(({ off: e }) => {
                                                    e('change', u), e('rest', u);
                                                })
                                        );
                                    }),
                                [a],
                            ),
                            n().createElement(
                                'div',
                                {
                                    className: 'AvailableDecorations_base_86',
                                    style: {
                                        '--decoration-height': `${f.itemHeight}rem`,
                                        '--decoration-indent': `${f.itemOffset}rem`,
                                        '--count-rows': `${s}`,
                                    },
                                },
                                n().createElement('div', {
                                    className: g()(Mu, 'AvailableDecorations_shadow__top_c5', D && ku),
                                }),
                                n().createElement(
                                    fu,
                                    {
                                        rowHeight: b,
                                        contentItemsCount: e.length,
                                        scrollSettings: v,
                                        scrollClassName: 'AvailableDecorations_scroll_f3',
                                        areaClassName: 'AvailableDecorations_area_25',
                                        barClassNames: Be,
                                        api: a,
                                    },
                                    n().createElement(
                                        'div',
                                        { className: 'AvailableDecorations_content_54' },
                                        n().createElement(
                                            'div',
                                            { className: 'AvailableDecorations_slots_11' },
                                            n().createElement(me, {
                                                slots: e,
                                                slotClasses: 'AvailableDecorations_slot_2b',
                                                isPetSlot: u,
                                            }),
                                        ),
                                    ),
                                ),
                                n().createElement('div', {
                                    className: g()(Mu, 'AvailableDecorations_shadow__bottom_a0', C && ku),
                                }),
                            )
                        );
                    }),
                    he = () => {
                        const u = uu('model', J.Shallow),
                            e = u.decorationTypeIcon,
                            t = u.title,
                            a = (0, r.useMemo)(() => ({ backgroundImage: `url(${e})` }), [e]);
                        return n().createElement(
                            'div',
                            { className: 'SlotdescriptionHeader_base_db' },
                            n().createElement('div', { className: 'SlotdescriptionHeader_typeImage_08', style: a }),
                            n().createElement(
                                'div',
                                { className: 'SlotdescriptionHeader_description_0f' },
                                n().createElement(ie, { text: t, className: 'SlotdescriptionHeader_slotName_46' }),
                            ),
                        );
                    },
                    pe = nu.E / 2,
                    ve = ['pet_bed', 'pet_food', 'pet_interactive', 'pet_toy'],
                    fe = () => {
                        !(function (u = eu.n.ESCAPE) {
                            ru(u, q.Sy, !0);
                        })(eu.n.ESCAPE);
                        const u = uu('model', J.Shallow).decorationType,
                            e = ve.includes(u);
                        return n().createElement(
                            nu.t,
                            { offsetSizes: { left: pe, right: pe } },
                            n().createElement(
                                'div',
                                { className: g()('App_base_a3', e && 'App_base__pet_a7') },
                                n().createElement('div', { className: 'App_background_13' }),
                                n().createElement('div', { className: 'App_gradient_a4' }),
                                n().createElement(
                                    'div',
                                    { className: 'App_content_6c' },
                                    n().createElement(
                                        'div',
                                        { className: 'App_headerWrapper_80' },
                                        n().createElement(he, null),
                                    ),
                                    n().createElement(ge, { isPetSlot: e }),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    H().render(
                        n().createElement(N, null, n().createElement(fe, null)),
                        document.getElementById('root'),
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
        return __webpack_modules__[u](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [e, t, r] = deferred[l], a = !0, o = 0; o < e.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(l--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 5479),
        (() => {
            var u = { 5479: 0, 6818: 0, 7303: 0, 6584: 0, 6209: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, o, i] = t,
                        l = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (i) var s = i(__webpack_require__);
                    }
                    for (e && e(t); l < a.length; l++)
                        (n = a[l]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(6404));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
