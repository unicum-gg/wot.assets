(() => {
    'use strict';
    var e,
        n = {
            9296: (e, n, t) => {
                var i = {};
                t.r(i),
                    t.d(i, { mouse: () => E, off: () => b, on: () => h, onResize: () => g, onScaleUpdated: () => w });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => x,
                        getSize: () => T,
                        graphicsQuality: () => S,
                        playSound: () => _,
                        setRTPC: () => P,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => C, getTextureUrl: () => j });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => H,
                        addPreloadTexture: () => k,
                        children: () => o,
                        displayStatus: () => F,
                        displayStatusIs: () => re,
                        events: () => L,
                        extraSize: () => oe,
                        forceTriggerMouseMove: () => ne,
                        freezeTextureBeforeResize: () => Q,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => te,
                        getFontNames: () => ie,
                        getScale: () => W,
                        getSize: () => $,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => ee,
                        isFocused: () => Y,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => U,
                        sendEvent: () => B,
                        setAnimateWindow: () => X,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => ae,
                    });
                var s = t(7363),
                    d = t.n(s),
                    u = t(1533),
                    l = t.n(u);
                const c = {
                    base: 'App_base_f0',
                    separator: 'App_separator_54',
                    whiteGradient: 'App_whiteGradient_fc',
                    title: 'App_title_cf',
                    description: 'App_description_6a',
                    descriptionBottom: 'App_descriptionBottom_0b',
                    descriptionTopLabel: 'App_descriptionTopLabel_4d',
                    descriptionContent: 'App_descriptionContent_14',
                };
                var v = t(6483),
                    f = t.n(v);
                function p(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const g = p('clientResized'),
                    w = p('self.onScaleUpdated'),
                    h = (e, n) => engine.on(e, n),
                    b = (e, n) => engine.off(e, n),
                    y = { down: p('mousedown'), up: p('mouseup'), move: p('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && m(!1);
                        }
                        function t() {
                            e.enabled && m(!0);
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
                                : m(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${n}`,
                                            a = y[n]((e) => t([e, 'outside']));
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
                                e.enabled && m(!0);
                            },
                            disableOutside() {
                                e.enabled && m(!1);
                            },
                        });
                    })();
                function _(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function P(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    O = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    z = Object.keys(O).reduce((e, n) => ((e[n] = () => _(O[n])), e), {}),
                    A = { play: Object.assign({}, z, { sound: _ }), setRTPC: P };
                function j(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function C(e, n, t) {
                    return `url(${j(e, n, t)})`;
                }
                const F = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
                        onTextureFrozen: p('self.onTextureFrozen'),
                        onTextureReady: p('self.onTextureReady'),
                        onDomBuilt: p('self.onDomBuilt'),
                        onLoaded: p('self.onLoaded'),
                        onDisplayChanged: p('self.onShowingStatusChanged'),
                        onFocusUpdated: p('self.onFocusChanged'),
                        children: {
                            onAdded: p('children.onAdded'),
                            onLoaded: p('children.onLoaded'),
                            onRemoved: p('children.onRemoved'),
                            onAttached: p('children.onAttached'),
                            onTextureReady: p('children.onTextureReady'),
                            onRequestPosition: p('children.requestPosition'),
                        },
                    },
                    M = ['args'],
                    V = (e, n) => {
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
                                })(n, M);
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
                    B = {
                        close(e) {
                            V('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            V(64);
                        },
                        move(e) {
                            V(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    G = 15;
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, G);
                }
                function N(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function H(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, G);
                }
                function $(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: K(n.x), y: K(n.y) };
                }
                function Q() {
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
                function X(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function Z() {
                    return viewEnv.setEventHandled();
                }
                function ee() {
                    return viewEnv.isEventHandled();
                }
                function ne() {
                    viewEnv.forceTriggerMouseMove();
                }
                function te() {
                    return viewEnv.getShowingStatus();
                }
                const ie = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    re = Object.keys(F).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === F[n]), e), {}),
                    oe = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ae = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    se = { view: a, client: r, sound: A };
                const de = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ue = ['children', 'className', 'theme'];
                function le() {
                    return (
                        (le = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var i in t) ({}).hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                  }
                                  return e;
                              }),
                        le.apply(null, arguments)
                    );
                }
                const ce = d().forwardRef(function (e, n) {
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
                        const u = (function () {
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
                            })(),
                            l = d().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                u.run(() => {
                                    const e = l.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    se.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    se.view.setSidePaddingsRem({
                                        left: parseInt(i.getPropertyValue('padding-left'), 10),
                                        top: parseInt(i.getPropertyValue('padding-top'), 10),
                                        right: parseInt(i.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(i.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            d().createElement(
                                'div',
                                le({}, a, {
                                    className: f()(de.base, de[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        (l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                d().createElement('div', { className: de.decorator }, t),
                            )
                        );
                    }),
                    ve = R.strings.battle_royale.tooltips.shop,
                    fe = () =>
                        d().createElement(
                            ce,
                            null,
                            d().createElement(
                                'div',
                                { className: c.base },
                                d().createElement('div', { className: c.title }, ve.title()),
                                d().createElement('div', { className: c.description }, ve.description()),
                                d().createElement(
                                    'div',
                                    { className: c.descriptionBottom },
                                    d().createElement('div', { className: c.descriptionTopLabel }, ve.subtitle()),
                                    d().createElement('div', { className: c.descriptionLabel }, ve.subdescription()),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    l().render(d().createElement(fe, null), document.getElementById('root'));
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
                    for (var [t, r, o] = e[l], s = !0, d = 0; d < t.length; d++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(l--, 1);
                        var u = r();
                        void 0 !== u && (n = u);
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
        (i.j = 332),
        (() => {
            var e = { 332: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, d] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (d) var l = d(i);
                    }
                    for (n && n(t); u < a.length; u++) (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return i.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = i.O(void 0, [503], () => i(9296));
    r = i.O(r);
})();
