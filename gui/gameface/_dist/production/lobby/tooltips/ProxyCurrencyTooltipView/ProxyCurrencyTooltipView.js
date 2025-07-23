(() => {
    'use strict';
    var e,
        n = {
            9981: (e, n, t) => {
                var i = {};
                (t.r(i),
                    t.d(i, { mouse: () => P, off: () => y, on: () => b, onResize: () => h, onScaleUpdated: () => E }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => O,
                        getSize: () => S,
                        graphicsQuality: () => z,
                        playSound: () => x,
                        setRTPC: () => T,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => F, getTextureUrl: () => N }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => $,
                        addPreloadTexture: () => D,
                        children: () => o,
                        displayStatus: () => M,
                        displayStatusIs: () => ae,
                        events: () => V,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => ie,
                        freezeTextureBeforeResize: () => J,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => re,
                        getFontNames: () => oe,
                        getScale: () => K,
                        getSize: () => q,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => te,
                        isFocused: () => ee,
                        pxToRem: () => X,
                        remToPx: () => Y,
                        resize: () => Q,
                        sendEvent: () => k,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => H,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => le,
                    }));
                var s = t(7363),
                    l = t.n(s),
                    c = t(1533),
                    d = t.n(c);
                const u = 'App_separator_31',
                    v = 'App_descriptionTopLabel_ac',
                    m = 'App_descriptionLabel_a4';
                var f = t(6483),
                    p = t.n(f);
                function g(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function w(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const h = g('clientResized'),
                    E = g('self.onScaleUpdated'),
                    b = (e, n) => engine.on(e, n),
                    y = (e, n) => engine.off(e, n),
                    _ = { down: g('mousedown'), up: g('mouseup'), move: g('mousemove') },
                    P = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && w(!1);
                        }
                        function t() {
                            e.enabled && w(!0);
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
                                : w(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${n}`,
                                            a = _[n]((e) => t([e, 'outside']));
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
                                ((e.enabled = !1), i());
                            },
                            enable() {
                                ((e.enabled = !0), i());
                            },
                            enableOutside() {
                                e.enabled && w(!0);
                            },
                            disableOutside() {
                                e.enabled && w(!1);
                            },
                        });
                    })();
                function x(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function T(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const z = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    A = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    j = Object.keys(A).reduce((e, n) => ((e[n] = () => x(A[n])), e), {}),
                    C = { play: Object.assign({}, j, { sound: x }), setRTPC: T };
                function N(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function F(e, n, t) {
                    return `url(${N(e, n, t)})`;
                }
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    V = {
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
                    L = ['args'],
                    G = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var i in e)
                                        if ({}.hasOwnProperty.call(e, i)) {
                                            if (n.indexOf(i) >= 0) continue;
                                            t[i] = e[i];
                                        }
                                    return t;
                                })(n, L);
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
                    k = {
                        close(e) {
                            G('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            G(64);
                        },
                        move(e) {
                            G(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    B = 15;
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, B);
                }
                function I(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function $(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, B);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function W(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Y(n.x), y: Y(n.y) };
                }
                function J() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function K() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function Z(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function ne() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function ie() {
                    viewEnv.forceTriggerMouseMove();
                }
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const oe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ae = Object.keys(M).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === M[n]), e), {}),
                    se = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : V.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ce = { view: a, client: r, sound: C };
                const de = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ue = ['children', 'className', 'theme'];
                function ve() {
                    return (
                        (ve = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        ve.apply(null, arguments)
                    );
                }
                const me = l().forwardRef(function (e, n) {
                        let t = e.children,
                            i = e.className,
                            r = e.theme,
                            o = void 0 === r ? 'default' : r,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t = {};
                                for (var i in e)
                                    if ({}.hasOwnProperty.call(e, i)) {
                                        if (n.indexOf(i) >= 0) continue;
                                        t[i] = e[i];
                                    }
                                return t;
                            })(e, ue);
                        const c = (function () {
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
                            d = l().useRef(null);
                        var u;
                        return (
                            (u = () => {
                                c.run(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    ce.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    ce.view.setSidePaddingsRem({
                                        left: parseInt(i.getPropertyValue('padding-left'), 10),
                                        top: parseInt(i.getPropertyValue('padding-top'), 10),
                                        right: parseInt(i.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(u, []),
                            l().createElement(
                                'div',
                                ve({}, a, {
                                    className: p()(de.base, de[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        ((d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                l().createElement('div', { className: de.decorator }, t),
                            )
                        );
                    }),
                    fe = R.strings.battle_royale.tooltips.stpCoin,
                    pe = () =>
                        l().createElement(
                            me,
                            null,
                            l().createElement(
                                'div',
                                { className: 'App_base_c8' },
                                l().createElement('div', { className: 'App_title_bf' }, fe.title()),
                                l().createElement(
                                    'div',
                                    { className: 'App_description_33' },
                                    l().createElement('div', { className: u }),
                                    l().createElement(
                                        'div',
                                        { className: 'App_descriptionContent_05' },
                                        l().createElement('div', { className: 'App_whiteGradient_1c' }),
                                        l().createElement('div', { className: v }, fe.earn.title()),
                                        l().createElement('div', { className: m }, fe.earn.description()),
                                    ),
                                    l().createElement('div', { className: u }),
                                ),
                                l().createElement(
                                    'div',
                                    { className: 'App_descriptionBottom_ac' },
                                    l().createElement('div', { className: v }, fe.spend.title()),
                                    l().createElement('div', { className: m }, fe.spend.description()),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    d().render(l().createElement(pe, null), document.getElementById('root'));
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
        return (n[e](o, o.exports, i), o.exports);
    }
    ((i.m = n),
        (e = []),
        (i.O = (n, t, r, o) => {
            if (!t) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, r, o] = e[d], s = !0, l = 0; l < t.length; l++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(d--, 1);
                        var c = r();
                        void 0 !== c && (n = c);
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
        (i.j = 21),
        (() => {
            var e = { 21: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, l] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (l) var d = l(i);
                    }
                    for (n && n(t); c < a.length; c++) ((o = a[c]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return i.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = i.O(void 0, [503], () => i(9981));
    r = i.O(r);
})();
