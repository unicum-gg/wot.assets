(() => {
    'use strict';
    var e,
        n = {
            9862: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => y, off: () => h, on: () => p, onResize: () => m, onScaleUpdated: () => w });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => T,
                        getSize: () => P,
                        graphicsQuality: () => S,
                        playSound: () => E,
                        setRTPC: () => x,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => V, getTextureUrl: () => M });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => U,
                        arabic2roman: () => de,
                        children: () => o,
                        displayStatus: () => D,
                        displayStatusIs: () => le,
                        events: () => F,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => se,
                        getFontNames: () => ue,
                        getScale: () => Z,
                        getSize: () => X,
                        getViewGlobalPosition: () => K,
                        isEventHandled: () => oe,
                        isFocused: () => ie,
                        pxToRem: () => ee,
                        remToPx: () => ne,
                        resize: () => J,
                        sendEvent: () => H,
                        setAnimateWindow: () => te,
                        setEventHandled: () => re,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => W,
                        whenTutorialReady: () => ve,
                    });
                var s = t(7363),
                    u = t.n(s),
                    d = t(1533),
                    l = t.n(d),
                    c = t(6483),
                    v = t.n(c);
                function f(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function g(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const m = f('clientResized'),
                    w = f('self.onScaleUpdated'),
                    p = (e, n) => engine.on(e, n),
                    h = (e, n) => engine.off(e, n),
                    b = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const y = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && g(!1);
                    }
                    function t() {
                        e.enabled && g(!0);
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
                            : g(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${n}`,
                                        a = b[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        i(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(o, s),
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
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
                        },
                        enableOutside() {
                            e.enabled && g(!0);
                        },
                        disableOutside() {
                            e.enabled && g(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function x(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(_).reduce((e, n) => ((e[n] = () => E(_[n])), e), {}),
                    z = { play: Object.assign({}, O, { sound: E }), setRTPC: x },
                    j = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    C = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function A(e) {
                    let n = '';
                    for (let t = C.length - 1; t >= 0; t--) for (; e >= C[t]; ) (n += j[t]), (e -= C[t]);
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function M(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function V(e, n, t) {
                    return `url(${M(e, n, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    F = {
                        onTextureFrozen: f('self.onTextureFrozen'),
                        onTextureReady: f('self.onTextureReady'),
                        onDomBuilt: f('self.onDomBuilt'),
                        onLoaded: f('self.onLoaded'),
                        onDisplayChanged: f('self.onShowingStatusChanged'),
                        onFocusUpdated: f('self.onFocusChanged'),
                        children: {
                            onAdded: f('children.onAdded'),
                            onLoaded: f('children.onLoaded'),
                            onRemoved: f('children.onRemoved'),
                            onAttached: f('children.onAttached'),
                            onTextureReady: f('children.onTextureReady'),
                            onRequestPosition: f('children.requestPosition'),
                        },
                    },
                    k = ['args'];
                const L = 2,
                    G = 16,
                    B = 32,
                    I = 64,
                    N = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        i,
                                        r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) (t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(n, k);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, n]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var i;
                    },
                    H = {
                        close(e) {
                            N('popover' === e ? L : B);
                        },
                        minimize() {
                            N(I);
                        },
                        move(e) {
                            N(G, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function q(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function Q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function J(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function K(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ne(n.x), y: ne(n.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Z() {
                    return viewEnv.getScale();
                }
                function ee(e) {
                    return viewEnv.pxToRem(e);
                }
                function ne(e) {
                    return viewEnv.remToPx(e);
                }
                function te(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ie() {
                    return viewEnv.isFocused();
                }
                function re() {
                    return viewEnv.setEventHandled();
                }
                function oe() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function se() {
                    return viewEnv.getShowingStatus();
                }
                const ue = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    de = A,
                    le = Object.keys(D).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === D[n]), e), {}),
                    ce = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : F.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    fe = { view: a, client: r, sound: z };
                function ge() {
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
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                n(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const me = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    we = ['children', 'className', 'theme'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const he = u().forwardRef(function (e, n) {
                        let t = e.children,
                            i = e.className,
                            r = e.theme,
                            o = void 0 === r ? 'default' : r,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    i,
                                    r = {},
                                    o = Object.keys(e);
                                for (i = 0; i < o.length; i++) (t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, we);
                        const d = ge(),
                            l = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = l.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    fe.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    fe.view.setSidePaddingsRem({
                                        left: parseInt(i.getPropertyValue('padding-left'), 10),
                                        top: parseInt(i.getPropertyValue('padding-top'), 10),
                                        right: parseInt(i.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            u().createElement(
                                'div',
                                pe({}, a, {
                                    className: v()(me.base, me[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: me.decorator }, t),
                            )
                        );
                    }),
                    be = 'App_base_18',
                    ye = 'App_title_7c',
                    Ee = 'App_significantStats_67',
                    xe = R.strings.achievements_page.tooltips.wotprMainTooltip,
                    Pe = () =>
                        u().createElement(
                            he,
                            null,
                            u().createElement(
                                'div',
                                { className: be },
                                u().createElement('div', { className: ye }, xe.title()),
                                xe.firstDescription(),
                                u().createElement('div', { className: Ee }, xe.significantStats()),
                                xe.secondDescription(),
                            ),
                        );
                engine.whenReady.then(() => {
                    l().render(u().createElement(Pe, null), document.getElementById('root'));
                });
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function i(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var o = (t[e] = { exports: {} });
        return n[e](o, o.exports, i), o.exports;
    }
    (i.m = n),
        (e = []),
        (i.O = (n, t, r, o) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, r, o] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(l--, 1);
                        var d = r();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [t, r, o];
        }),
        (i.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return i.d(n, { a: n }), n;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (i.j = 761),
        (() => {
            var e = { 761: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, u] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (u) var l = u(i);
                    }
                    for (n && n(t); d < a.length; d++) (o = a[d]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = i.O(void 0, [549], () => i(9862));
    r = i.O(r);
})();
