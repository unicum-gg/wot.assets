(() => {
    'use strict';
    var e,
        n = {
            527: (e, n, t) => {
                (t.r(n), t.d(n, { mouse: () => a, onResize: () => o }));
                var i = t(2472),
                    r = t(1176);
                const o = (0, i.E)('clientResized'),
                    s = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') },
                    a = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function i() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', n),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', n),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${n}`,
                                            a = s[n]((e) => t([e, 'outside']));
                                        function u(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, u),
                                            i(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(o, u),
                                                    (e.listeners -= 1),
                                                    i(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                n
                            ),
                            {},
                        );
                        return Object.assign({}, o, {
                            disable() {
                                ((e.enabled = !1), i());
                            },
                            enable() {
                                ((e.enabled = !0), i());
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
            5959: (e, n, t) => {
                (t.r(n),
                    t.d(n, {
                        events: () => i,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var i = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, n, t) => {
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(n, { R: () => i });
            },
            2472: (e, n, t) => {
                function i(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                t.d(n, { E: () => i });
            },
            3138: (e, n, t) => {
                t.d(n, { O: () => r });
                var i = t(5959);
                const r = { view: t(7641), client: i };
            },
            3722: (e, n, t) => {
                function i(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function r(e, n, t) {
                    return `url(${i(e, n, t)})`;
                }
                (t.r(n), t.d(n, { getBgUrl: () => r, getTextureUrl: () => i }));
            },
            6112: (e, n, t) => {
                t.d(n, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, n, t) => {
                t.d(n, { U: () => r });
                var i = t(2472);
                const r = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, n, t) => {
                (t.r(n),
                    t.d(n, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => a,
                        children: () => i,
                        displayStatus: () => r.W,
                        displayStatusIs: () => O,
                        events: () => o.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => R,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => T,
                        getScale: () => w,
                        getSize: () => v,
                        getViewGlobalPosition: () => m,
                        isClientAccessible: () => y,
                        isEventHandled: () => P,
                        isFocused: () => b,
                        pxToRem: () => p,
                        remToPx: () => E,
                        resize: () => f,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => l,
                        whenTutorialReady: () => z,
                    }));
                var i = t(3722),
                    r = t(6112),
                    o = t(6538),
                    s = t(8566);
                function a(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function c(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function f(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function m(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: E(n.x), y: E(n.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.isClientAccessible();
                }
                function x() {
                    return viewEnv.setEventHandled();
                }
                function P() {
                    return viewEnv.isEventHandled();
                }
                function R() {
                    viewEnv.forceTriggerMouseMove();
                }
                function T() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(r.W).reduce(
                        (e, n) => ((e[n] = () => viewEnv.getShowingStatus() === r.W[n]), e),
                        {},
                    ),
                    S = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, n, t) => {
                t.d(n, { qP: () => o });
                const i = ['args'],
                    r = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                s = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        i,
                                        r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) ((t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(n, i);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, n]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof n) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: n };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: n };
                                                      default:
                                                          return { __Type: t, name: e, string: n.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
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
            6711: (e, n, t) => {
                var i = t(6483),
                    r = t.n(i),
                    o = t(3138),
                    s = t(6179),
                    a = t.n(s);
                const u = ['children', 'className', 'isSimple'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                a().forwardRef(function (e, n) {
                    let t = e.children,
                        i = e.className,
                        c = e.isSimple,
                        l = (function (e, n) {
                            if (null == e) return {};
                            var t,
                                i,
                                r = {},
                                o = Object.keys(e);
                            for (i = 0; i < o.length; i++) ((t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, u);
                    const v = (function () {
                            const e = (0, s.useRef)(0);
                            var n;
                            return (
                                (n = () => {
                                    window.cancelAnimationFrame(e.current);
                                }),
                                (0, s.useEffect)(() => n, []),
                                (0, s.useMemo)(
                                    () => ({
                                        run: (n) => {
                                            (window.cancelAnimationFrame(e.current),
                                                (e.current = window.requestAnimationFrame(() => {
                                                    e.current = window.requestAnimationFrame(() => {
                                                        (n(), (e.current = 0));
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
                        f = a().useRef(null);
                    var m;
                    return (
                        (m = () => {
                            v.run(() => {
                                const e = f.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                o.O.view.resize(n, t);
                                const i = window.getComputedStyle(e);
                                o.O.view.setSidePaddingsRem({
                                    left: parseInt(i.getPropertyValue('padding-left'), 10),
                                    top: parseInt(i.getPropertyValue('padding-top'), 10),
                                    right: parseInt(i.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, s.useEffect)(m, []),
                        a().createElement(
                            'div',
                            d({}, l, {
                                className: r()('CosmicTooltipDecorator_base_7d', i),
                                ref: function (e) {
                                    ((f.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                },
                            }),
                            !c && a().createElement('div', { className: 'CosmicTooltipDecorator_bg_cubes_b6' }),
                            a().createElement('div', { className: 'CosmicTooltipDecorator_bg_glow_9a' }),
                            a().createElement('div', { className: 'CosmicTooltipDecorator_decorator_13' }, t),
                        )
                    );
                });
            },
        },
        t = {};
    function i(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var o = (t[e] = { exports: {} });
        return (n[e].call(o.exports, o, o.exports, i), o.exports);
    }
    ((i.m = n),
        (e = []),
        (i.O = (n, t, r, o) => {
            if (!t) {
                var s = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, r, o] = e[c], a = !0, u = 0; u < t.length; u++)
                        (!1 & o || s >= o) && Object.keys(i.O).every((e) => i.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((a = !1), o < s && (s = o));
                    if (a) {
                        e.splice(c--, 1);
                        var d = r();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [t, r, o];
        }),
        (i.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (i.d(n, { a: n }), n);
        }),
        (i.d = (e, n) => {
            for (var t in n) i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (i.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (i.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (i.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (() => {
            var e = { 84: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [s, a, u] = t,
                        d = 0;
                    if (s.some((n) => 0 !== e[n])) {
                        for (r in a) i.o(a, r) && (i.m[r] = a[r]);
                        if (u) var c = u(i);
                    }
                    for (n && n(t); d < s.length; d++) ((o = s[d]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return i.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = i.O(void 0, [503], () => i(6711));
    r = i.O(r);
})();
