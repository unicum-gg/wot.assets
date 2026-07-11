(() => {
    'use strict';
    var e,
        n = {
            6540: (e, n, t) => {
                var i = {};
                (t.r(i),
                    t.d(i, { mouse: () => E, off: () => b, on: () => w, onResize: () => g, onScaleUpdated: () => p }));
                var o = {};
                (t.r(o),
                    t.d(o, {
                        events: () => i,
                        getMouseGlobalPosition: () => x,
                        getSize: () => T,
                        graphicsQuality: () => P,
                        playSound: () => y,
                        setRTPC: () => _,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => N, getTextureUrl: () => V }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => B,
                        arabic2roman: () => oe,
                        children: () => r,
                        displayStatus: () => M,
                        displayStatusIs: () => re,
                        events: () => F,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => ne,
                        freezeTextureBeforeResize: () => Q,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => te,
                        getFontNames: () => ie,
                        getScale: () => W,
                        getSize: () => U,
                        getViewGlobalPosition: () => q,
                        isEventHandled: () => ee,
                        isFocused: () => Y,
                        pxToRem: () => X,
                        remToPx: () => J,
                        resize: () => $,
                        sendEvent: () => k,
                        setAnimateWindow: () => K,
                        setEventHandled: () => Z,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => se,
                    }));
                var s = t(7363),
                    l = t.n(s),
                    d = t(1533),
                    c = t.n(d),
                    u = t(6483),
                    v = t.n(u);
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
                const g = m('clientResized'),
                    p = m('self.onScaleUpdated'),
                    w = (e, n) => engine.on(e, n),
                    b = (e, n) => engine.off(e, n),
                    h = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    E = (function () {
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
                        const o = ['down', 'up', 'move'].reduce(
                            (n, t) => (
                                (n[t] = (function (n) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const r = `mouse${n}`,
                                            a = h[n]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            i(),
                                            () => {
                                                o &&
                                                    (a(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    i(),
                                                    (o = !1));
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
                                e.enabled && f(!0);
                            },
                            disableOutside() {
                                e.enabled && f(!1);
                            },
                        });
                    })();
                function y(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function _(e, n) {
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
                const P = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    S = Object.keys(C).reduce((e, n) => ((e[n] = () => y(C[n])), e), {}),
                    O = { play: Object.assign({}, S, { sound: y }), setRTPC: _ },
                    z = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    j = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function V(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function N(e, n, t) {
                    return `url(${V(e, n, t)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const M = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    F = {
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
                    L = ['args'],
                    A = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                r = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        i,
                                        o = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) ((t = r[i]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                                    return o;
                                })(n, L);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((i = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var i;
                    },
                    k = {
                        close(e) {
                            A('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            A(64);
                        },
                        move(e) {
                            A(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function G(e, n, t, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, i);
                }
                function I(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function $(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: J(n.x), y: J(n.y) };
                }
                function Q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function W() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function J(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, n) {
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
                    oe = function (e) {
                        let n = '';
                        for (let t = j.length - 1; t >= 0; t--) for (; e >= j[t];) ((n += z[t]), (e -= j[t]));
                        return n;
                    },
                    re = Object.keys(M).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === M[n]), e), {}),
                    ae = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    se = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : F.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    le = { view: a, client: o, sound: O };
                const de = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ce = ['children', 'className', 'theme'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const ve = l().forwardRef(function (e, n) {
                        let t = e.children,
                            i = e.className,
                            o = e.theme,
                            r = void 0 === o ? 'default' : o,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    i,
                                    o = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) ((t = r[i]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, ce);
                        const d = (function () {
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
                            c = l().useRef(null);
                        var u;
                        return (
                            (u = () => {
                                d.run(() => {
                                    const e = c.current;
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
                            (0, s.useEffect)(u, []),
                            l().createElement(
                                'div',
                                ue({}, a, {
                                    className: v()(de.base, de[`base__theme-${r}`], i),
                                    ref: function (e) {
                                        ((c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                l().createElement('div', { className: de.decorator }, t),
                            )
                        );
                    }),
                    me = 'Content_separator_70',
                    fe = 'Content_descriptionTopLabel_f2',
                    ge = 'Content_descriptionLabel_81',
                    pe = R.strings.battle_royale.tooltips.brCoin,
                    we = () =>
                        l().createElement(
                            'div',
                            { className: 'Content_base_ab' },
                            l().createElement('div', { className: 'Content_title_21' }, pe.title()),
                            l().createElement(
                                'div',
                                { className: 'Content_description_86' },
                                l().createElement('div', { className: me }),
                                l().createElement(
                                    'div',
                                    { className: 'Content_descriptionContent_b7' },
                                    l().createElement('div', { className: 'Content_whiteGradient_f6' }),
                                    l().createElement('div', { className: fe }, pe.earn.title()),
                                    l().createElement('div', { className: ge }, pe.earn.description()),
                                ),
                                l().createElement('div', { className: me }),
                            ),
                            l().createElement(
                                'div',
                                { className: 'Content_descriptionBottom_2d' },
                                l().createElement('div', { className: fe }, pe.spend.title()),
                                l().createElement('div', { className: ge }, pe.spend.description()),
                            ),
                        ),
                    be = () => l().createElement(ve, null, l().createElement(we, null)),
                    he = document.createElement('div');
                ((window.onload = () => document.body.appendChild(he)), c().render(l().createElement(be, null), he));
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
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var r = (t[e] = { exports: {} });
        return (n[e](r, r.exports, i), r.exports);
    }
    ((i.m = n),
        (e = []),
        (i.O = (n, t, o, r) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, o, r] = e[c], s = !0, l = 0; l < t.length; l++)
                        (!1 & r || a >= r) && Object.keys(i.O).every((e) => i.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), r < a && (a = r));
                    if (s) {
                        e.splice(c--, 1);
                        var d = o();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            r = r || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
            e[c] = [t, o, r];
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
        (i.j = 'lobby/tooltips/BrCoinTooltipView/BrCoinTooltipView'),
        (() => {
            var e = { 'lobby/tooltips/BrCoinTooltipView/BrCoinTooltipView': 0 };
            i.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        r,
                        [a, s, l] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) i.o(s, o) && (i.m[o] = s[o]);
                        if (l) var c = l(i);
                    }
                    for (n && n(t); d < a.length; d++) ((r = a[d]), i.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return i.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var o = i.O(void 0, ['lib/battle_royale.vendors'], () => i(6540));
    o = i.O(o);
})();
