(() => {
    'use strict';
    var e,
        n = {
            9395: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, { mouse: () => E, off: () => b, on: () => w, onResize: () => g, onScaleUpdated: () => p }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => _,
                        getSize: () => x,
                        graphicsQuality: () => T,
                        playSound: () => y,
                        setRTPC: () => P,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => M, getTextureUrl: () => L }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => D,
                        arabic2roman: () => ie,
                        children: () => i,
                        displayStatus: () => F,
                        displayStatusIs: () => se,
                        enableFullScreenModeSupported: () => ce,
                        events: () => N,
                        extraSize: () => le,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => $,
                        getDisplayStatus: () => oe,
                        getExternalPaddingsRem: () => ae,
                        getFontNames: () => re,
                        getScale: () => X,
                        getSize: () => H,
                        getViewGlobalPosition: () => Q,
                        initExternalPaddings: () => ue,
                        isEventHandled: () => ne,
                        isFocused: () => Z,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => q,
                        sendEvent: () => B,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => G,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => de,
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
                        function o() {
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
                                        const i = `mouse${n}`,
                                            a = h[n]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            o(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(i, s),
                                                    (e.listeners -= 1),
                                                    o(),
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
                                ((e.enabled = !1), o());
                            },
                            enable() {
                                ((e.enabled = !0), o());
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
                function P(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const T = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(S).reduce((e, n) => ((e[n] = () => y(S[n])), e), {}),
                    z = { play: Object.assign({}, O, { sound: y }), setRTPC: P },
                    j = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    V = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function L(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function M(e, n, t) {
                    return `url(${L(e, n, t)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const F = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    N = {
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
                    A = ['args'],
                    k = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(n, A);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, n]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    B = {
                        close(e) {
                            k('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            k(64);
                        },
                        move(e) {
                            k(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function G(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function $(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function I(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: K(n.x), y: K(n.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
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
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ie = function (e) {
                        let n = '';
                        for (let t = V.length - 1; t >= 0; t--) for (; e >= V[t];) ((n += j[t]), (e -= V[t]));
                        return n;
                    };
                function ae() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const se = Object.keys(F).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === F[n]), e), {}),
                    le = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    de = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : N.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ce() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ue(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            o = n.right,
                            r = n.bottom,
                            i = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const ve = { view: a, client: r, sound: z, intl: C };
                const me = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    fe = ['children', 'className', 'theme'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const pe = l().forwardRef(function (e, n) {
                        let t = e.children,
                            o = e.className,
                            r = e.theme,
                            i = void 0 === r ? 'default' : r,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    o,
                                    r = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) ((t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, fe);
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
                                    ve.view.resize(n, t);
                                    const o = window.getComputedStyle(e);
                                    ve.view.setSidePaddingsRem({
                                        left: parseInt(o.getPropertyValue('padding-left'), 10),
                                        top: parseInt(o.getPropertyValue('padding-top'), 10),
                                        right: parseInt(o.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(u, []),
                            l().createElement(
                                'div',
                                ge({}, a, {
                                    className: v()(me.base, me[`base__theme-${i}`], o),
                                    ref: function (e) {
                                        ((c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                l().createElement('div', { className: me.decorator }, t),
                            )
                        );
                    }),
                    we = 'Content_separator_70',
                    be = 'Content_descriptionTopLabel_f2',
                    he = 'Content_descriptionLabel_81',
                    Ee = R.strings.battle_royale.tooltips.brCoin,
                    ye = () =>
                        l().createElement(
                            'div',
                            { className: 'Content_base_ab' },
                            l().createElement('div', { className: 'Content_title_21' }, Ee.title()),
                            l().createElement(
                                'div',
                                { className: 'Content_description_86' },
                                l().createElement('div', { className: we }),
                                l().createElement(
                                    'div',
                                    { className: 'Content_descriptionContent_b7' },
                                    l().createElement('div', { className: 'Content_whiteGradient_f6' }),
                                    l().createElement('div', { className: be }, Ee.earn.title()),
                                    l().createElement('div', { className: he }, Ee.earn.description()),
                                ),
                                l().createElement('div', { className: we }),
                            ),
                            l().createElement(
                                'div',
                                { className: 'Content_descriptionBottom_2d' },
                                l().createElement('div', { className: be }, Ee.spend.title()),
                                l().createElement('div', { className: he }, Ee.spend.description()),
                            ),
                        ),
                    Pe = () => l().createElement(pe, null, l().createElement(ye, null)),
                    xe = document.createElement('div');
                ((window.onload = () => document.body.appendChild(xe)), c().render(l().createElement(Pe, null), xe));
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function o(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var i = (t[e] = { exports: {} });
        return (n[e](i, i.exports, o), i.exports);
    }
    ((o.m = n),
        (e = []),
        (o.O = (n, t, r, i) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, r, i] = e[c], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var d = r();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [t, r, i];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (o.d(n, { a: n }), n);
        }),
        (o.d = (e, n) => {
            for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (o.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (o.j = 'lobby/tooltips/BrCoinTooltipView/BrCoinTooltipView'),
        (() => {
            var e = { 'lobby/tooltips/BrCoinTooltipView/BrCoinTooltipView': 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, l] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var c = l(o);
                    }
                    for (n && n(t); d < a.length; d++) ((i = a[d]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = o.O(void 0, ['lib/battle_royale.vendors'], () => o(9395));
    r = o.O(r);
})();
