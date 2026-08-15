(() => {
    'use strict';
    var e,
        n = {
            3945: (e, n, t) => {
                var i = {};
                (t.r(i), t.d(i, { mouse: () => p, onResize: () => w }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => i,
                        getMouseGlobalPosition: () => b,
                        getSize: () => E,
                        graphicsQuality: () => h,
                    }));
                var o = {};
                (t.r(o), t.d(o, { getBgUrl: () => _, getTextureUrl: () => y }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => z,
                        children: () => o,
                        displayStatus: () => x,
                        displayStatusIs: () => $,
                        events: () => P,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => j,
                        getDisplayStatus: () => U,
                        getScale: () => G,
                        getSize: () => V,
                        getViewGlobalPosition: () => M,
                        isClientAccessible: () => I,
                        isEventHandled: () => Q,
                        isFocused: () => H,
                        pxToRem: () => k,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => O,
                        setAnimateWindow: () => D,
                        setEventHandled: () => q,
                        setInputPaddingsRem: () => C,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => K,
                    }));
                var s = t(6179),
                    d = t.n(s),
                    l = t(493),
                    u = t.n(l),
                    c = t(6483),
                    v = t.n(c);
                function m(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const w = m('clientResized'),
                    g = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    p = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function n() {
                            e.enabled && f(!1);
                        }
                        function t() {
                            e.enabled && f(!0);
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
                                : f(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const o = `mouse${n}`,
                                            a = g[n]((e) => t([e, 'outside']));
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
                                e.enabled && f(!0);
                            },
                            disableOutside() {
                                e.enabled && f(!1);
                            },
                        });
                    })();
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function y(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function _(e, n, t) {
                    return `url(${y(e, n, t)})`;
                }
                const x = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    P = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    T = ['args'],
                    S = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                o = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        i,
                                        r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) ((t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(n, T);
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
                    O = {
                        close(e) {
                            S('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            S(64);
                        },
                        move(e) {
                            S(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function z(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function C(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function j(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function N(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function V(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function M(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: B(n.x), y: B(n.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function G() {
                    return viewEnv.getScale();
                }
                function k(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.isClientAccessible();
                }
                function q() {
                    return viewEnv.setEventHandled();
                }
                function Q() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const $ = Object.keys(x).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === x[n]), e), {}),
                    J = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    K = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : P.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: a, client: r };
                const Y = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    Z = ['children', 'className', 'theme'];
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                }
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                const ne = d().forwardRef(function (e, n) {
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
                                for (i = 0; i < o.length; i++) ((t = o[i]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Z);
                        const l = (function () {
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
                            u = d().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                l.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    X.view.resize(n, t);
                                    const i = window.getComputedStyle(e);
                                    X.view.setSidePaddingsRem({
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
                                ee({}, a, {
                                    className: v()(Y.base, Y[`base__theme-${o}`], i),
                                    ref: function (e) {
                                        ((u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                d().createElement('div', { className: Y.decorator }, t),
                            )
                        );
                    }),
                    te = 'Content_separator_70',
                    ie = 'Content_descriptionTopLabel_f2',
                    re = 'Content_descriptionLabel_81',
                    oe = R.strings.battle_royale.tooltips.brCoin,
                    ae = () =>
                        d().createElement(
                            'div',
                            { className: 'Content_base_ab' },
                            d().createElement('div', { className: 'Content_title_21' }, oe.title()),
                            d().createElement(
                                'div',
                                { className: 'Content_description_86' },
                                d().createElement('div', { className: te }),
                                d().createElement(
                                    'div',
                                    { className: 'Content_descriptionContent_b7' },
                                    d().createElement('div', { className: 'Content_whiteGradient_f6' }),
                                    d().createElement('div', { className: ie }, oe.earn.title()),
                                    d().createElement('div', { className: re }, oe.earn.description()),
                                ),
                                d().createElement('div', { className: te }),
                            ),
                            d().createElement(
                                'div',
                                { className: 'Content_descriptionBottom_2d' },
                                d().createElement('div', { className: ie }, oe.spend.title()),
                                d().createElement('div', { className: re }, oe.spend.description()),
                            ),
                        ),
                    se = () => d().createElement(ne, null, d().createElement(ae, null)),
                    de = document.createElement('div');
                ((window.onload = () => document.body.appendChild(de)), u().render(d().createElement(se, null), de));
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
                for (u = 0; u < e.length; u++) {
                    for (var [t, r, o] = e[u], s = !0, d = 0; d < t.length; d++)
                        (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((s = !1), o < a && (a = o));
                    if (s) {
                        e.splice(u--, 1);
                        var l = r();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
            e[u] = [t, r, o];
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
        (i.j = 479),
        (() => {
            var e = { 479: 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        o,
                        [a, s, d] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                        if (d) var u = d(i);
                    }
                    for (n && n(t); l < a.length; l++) ((o = a[l]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return i.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = i.O(void 0, [503], () => i(3945));
    r = i.O(r);
})();
