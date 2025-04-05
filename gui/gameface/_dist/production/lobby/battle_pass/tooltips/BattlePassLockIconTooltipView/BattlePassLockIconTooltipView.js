(() => {
    'use strict';
    var e,
        n = {
            8488: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => _, off: () => x, on: () => P, onResize: () => y, onScaleUpdated: () => E });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => C,
                        getSize: () => z,
                        graphicsQuality: () => j,
                        playSound: () => S,
                        setRTPC: () => O,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => L, getTextureUrl: () => k });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => K,
                        addPreloadTexture: () => Q,
                        children: () => o,
                        displayStatus: () => A,
                        displayStatusIs: () => ve,
                        events: () => D,
                        extraSize: () => fe,
                        forceTriggerMouseMove: () => le,
                        freezeTextureBeforeResize: () => ne,
                        getBrowserTexturePath: () => J,
                        getDisplayStatus: () => de,
                        getFontNames: () => ce,
                        getScale: () => te,
                        getSize: () => Y,
                        getViewGlobalPosition: () => ee,
                        isEventHandled: () => ue,
                        isFocused: () => ae,
                        pxToRem: () => ie,
                        remToPx: () => re,
                        resize: () => Z,
                        sendEvent: () => U,
                        setAnimateWindow: () => oe,
                        setEventHandled: () => se,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => me,
                    });
                var s = t(7363),
                    u = t.n(s),
                    l = t(1533),
                    d = t.n(l);
                const c = 'Content_base_3a',
                    v = 'Content_title_3c',
                    f = 'Content_description1_09',
                    m = 'Content_description2_d4',
                    g = () =>
                        u().createElement(
                            'div',
                            { className: c },
                            u().createElement('div', { className: v }, R.strings.battle_pass.tooltips.iconLock.title()),
                            u().createElement(
                                'div',
                                { className: f },
                                R.strings.battle_pass.tooltips.iconLock.descr1(),
                            ),
                            u().createElement(
                                'div',
                                { className: m },
                                R.strings.battle_pass.tooltips.iconLock.descr2(),
                            ),
                        );
                var w = t(6483),
                    p = t.n(w);
                function h(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function b(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const y = h('clientResized'),
                    E = h('self.onScaleUpdated'),
                    P = (e, n) => engine.on(e, n),
                    x = (e, n) => engine.off(e, n),
                    T = { down: h('mousedown'), up: h('mouseup'), move: h('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && b(!1);
                    }
                    function t() {
                        e.enabled && b(!0);
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
                            : b(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${n}`,
                                        a = T[n]((e) => t([e, 'outside']));
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
                            e.enabled && b(!0);
                        },
                        disableOutside() {
                            e.enabled && b(!1);
                        },
                    });
                })();
                function S(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function O(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const j = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    F = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    M = Object.keys(F).reduce((e, n) => ((e[n] = () => S(F[n])), e), {}),
                    V = { play: Object.assign({}, M, { sound: S }), setRTPC: O };
                function k(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function L(e, n, t) {
                    return `url(${k(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    D = {
                        onTextureFrozen: h('self.onTextureFrozen'),
                        onTextureReady: h('self.onTextureReady'),
                        onDomBuilt: h('self.onDomBuilt'),
                        onLoaded: h('self.onLoaded'),
                        onDisplayChanged: h('self.onShowingStatusChanged'),
                        onFocusUpdated: h('self.onFocusChanged'),
                        children: {
                            onAdded: h('children.onAdded'),
                            onLoaded: h('children.onLoaded'),
                            onRemoved: h('children.onRemoved'),
                            onAttached: h('children.onAttached'),
                            onTextureReady: h('children.onTextureReady'),
                            onRequestPosition: h('children.requestPosition'),
                        },
                    },
                    G = ['args'];
                const B = 2,
                    N = 16,
                    H = 32,
                    I = 64,
                    $ = (e, n) => {
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
                                })(n, G);
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
                    U = {
                        close(e) {
                            $('popover' === e ? B : H);
                        },
                        minimize() {
                            $(I);
                        },
                        move(e) {
                            $(N, { isMouseEvent: !0, on: e });
                        },
                    },
                    q = 15;
                function Q(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, q);
                }
                function J(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function K(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, q);
                }
                function Y(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Z(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function ee(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: re(n.x), y: re(n.y) };
                }
                function ne() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function te() {
                    return viewEnv.getScale();
                }
                function ie(e) {
                    return viewEnv.pxToRem(e);
                }
                function re(e) {
                    return viewEnv.remToPx(e);
                }
                function oe(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ae() {
                    return viewEnv.isFocused();
                }
                function se() {
                    return viewEnv.setEventHandled();
                }
                function ue() {
                    return viewEnv.isEventHandled();
                }
                function le() {
                    viewEnv.forceTriggerMouseMove();
                }
                function de() {
                    return viewEnv.getShowingStatus();
                }
                const ce = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ve = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
                    fe = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    me = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : D.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ge = { view: a, client: r, sound: V };
                function we() {
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
                const pe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    he = ['children', 'className', 'theme'];
                function be() {
                    return (
                        (be = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        be.apply(null, arguments)
                    );
                }
                const ye = u().forwardRef(function (e, n) {
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
                            })(e, he);
                        const l = we(),
                            d = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                l.run(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    ge.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    ge.view.setSidePaddingsRem({
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
                                be({}, a, {
                                    className: p()(pe.base, pe[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: pe.decorator }, t),
                            )
                        );
                    }),
                    Ee = () => u().createElement(ye, null, u().createElement(g, null)),
                    Pe = document.createElement('div');
                (window.onload = () => document.body.appendChild(Pe)), d().render(u().createElement(Ee, null), Pe);
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
        (i.j = 5610),
        (() => {
            var e = { 5610: 0 };
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
    var r = i.O(void 0, [1519], () => i(8488));
    r = i.O(r);
})();
