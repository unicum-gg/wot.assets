(() => {
    'use strict';
    var e,
        n = {
            8597: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => p, off: () => g, on: () => f, onResize: () => c, onScaleUpdated: () => v });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => y,
                        getSize: () => b,
                        graphicsQuality: () => E,
                        playSound: () => w,
                        setRTPC: () => h,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => j, getTextureUrl: () => z });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => X,
                        addPreloadTexture: () => B,
                        arabic2roman: () => oe,
                        children: () => o,
                        displayStatus: () => C,
                        displayStatusIs: () => ae,
                        events: () => k,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => ie,
                        getFontNames: () => re,
                        getScale: () => W,
                        getSize: () => Q,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => ne,
                        isFocused: () => Z,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => q,
                        sendEvent: () => G,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => ue,
                    });
                var s = t(6483),
                    u = t.n(s);
                function l(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function d(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const c = l('clientResized'),
                    v = l('self.onScaleUpdated'),
                    f = (e, n) => engine.on(e, n),
                    g = (e, n) => engine.off(e, n),
                    m = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') };
                const p = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && d(!1);
                    }
                    function t() {
                        e.enabled && d(!0);
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
                            : d(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${n}`,
                                        a = m[n]((e) => t([e, 'outside']));
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
                            e.enabled && d(!0);
                        },
                        disableOutside() {
                            e.enabled && d(!1);
                        },
                    });
                })();
                function w(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function h(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    x = Object.keys(T).reduce((e, n) => ((e[n] = () => w(T[n])), e), {}),
                    P = { play: Object.assign({}, x, { sound: w }), setRTPC: h },
                    S = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    _ = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function O(e) {
                    let n = '';
                    for (let t = _.length - 1; t >= 0; t--) for (; e >= _[t]; ) (n += S[t]), (e -= _[t]);
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function z(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function j(e, n, t) {
                    return `url(${z(e, n, t)})`;
                }
                const C = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
                        onTextureFrozen: l('self.onTextureFrozen'),
                        onTextureReady: l('self.onTextureReady'),
                        onDomBuilt: l('self.onDomBuilt'),
                        onLoaded: l('self.onLoaded'),
                        onDisplayChanged: l('self.onShowingStatusChanged'),
                        onFocusUpdated: l('self.onFocusChanged'),
                        children: {
                            onAdded: l('children.onAdded'),
                            onLoaded: l('children.onLoaded'),
                            onRemoved: l('children.onRemoved'),
                            onAttached: l('children.onAttached'),
                            onTextureReady: l('children.onTextureReady'),
                            onRequestPosition: l('children.requestPosition'),
                        },
                    },
                    A = ['args'];
                const L = 2,
                    M = 16,
                    V = 32,
                    F = 64,
                    D = (e, n) => {
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
                                })(n, A);
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
                    G = {
                        close(e) {
                            D('popover' === e ? L : V);
                        },
                        minimize() {
                            D(F);
                        },
                        move(e) {
                            D(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function X(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function Q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function U(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: K(n.x), y: K(n.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function J(e) {
                    return viewEnv.pxToRem(e);
                }
                function K(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function Z() {
                    return viewEnv.isFocused();
                }
                function ee() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function te() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ie() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    oe = O,
                    ae = Object.keys(C).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === C[n]), e), {}),
                    se = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    le = { view: a, client: r, sound: P };
                var de = t(7363),
                    ce = t.n(de);
                function ve() {
                    const e = (0, de.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, de.useEffect)(() => n, []),
                        (0, de.useMemo)(
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
                const fe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ge = ['children', 'className', 'theme'];
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const pe = ce().forwardRef(function (e, n) {
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
                        })(e, ge);
                    const s = ve(),
                        l = ce().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            s.run(() => {
                                const e = l.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                le.view.resize(n, t);
                                const i = window.getComputedStyle(e);
                                le.view.setSidePaddingsRem({
                                    left: parseInt(i.getPropertyValue('padding-left'), 10),
                                    top: parseInt(i.getPropertyValue('padding-top'), 10),
                                    right: parseInt(i.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, de.useEffect)(d, []),
                        ce().createElement(
                            'div',
                            me({}, a, {
                                className: u()(fe.base, fe[`base__theme-${o}`], i),
                                ref: function (e) {
                                    (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                },
                            }),
                            ce().createElement('div', { className: fe.decorator }, t),
                        )
                    );
                });
                var we = t(1533),
                    he = t.n(we);
                const be = 'QuickTrainingLostXpTooltipApp_base_51',
                    ye = 'QuickTrainingLostXpTooltipApp_title_c2',
                    Ee = 'QuickTrainingLostXpTooltipApp_description_29',
                    Te = () =>
                        ce().createElement(
                            'div',
                            { className: be },
                            ce().createElement(
                                'div',
                                { className: ye },
                                R.strings.tooltips.quickTraining.lostXpTooltip.header(),
                            ),
                            ce().createElement(
                                'div',
                                { className: Ee },
                                R.strings.tooltips.quickTraining.lostXpTooltip.body(),
                            ),
                        );
                engine.whenReady.then(() => {
                    he().render(
                        ce().createElement(pe, null, ce().createElement(Te, null)),
                        document.getElementById('root'),
                    );
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
                for (d = 0; d < e.length; d++) {
                    for (var [t, r, o] = e[d], s = !0, u = 0; u < t.length; u++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(d--, 1);
                        var l = r();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
            e[d] = [t, r, o];
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
        (i.j = 8854),
        (() => {
            var e = { 8854: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (u) var d = u(i);
                    }
                    for (n && n(t); l < a.length; l++) (o = a[l]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = i.O(void 0, [9056], () => i(8597));
    r = i.O(r);
})();
