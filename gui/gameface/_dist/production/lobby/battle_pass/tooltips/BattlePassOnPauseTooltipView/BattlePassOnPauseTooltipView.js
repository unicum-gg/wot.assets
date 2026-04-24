(() => {
    'use strict';
    var e,
        n = {
            4526: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, {
                        mouse: () => T,
                        off: () => x,
                        on: () => P,
                        onMinimize: () => E,
                        onResize: () => b,
                        onScaleUpdated: () => y,
                    }));
                var i = {};
                (t.r(i),
                    t.d(i, {
                        events: () => o,
                        getMouseGlobalPosition: () => C,
                        getSize: () => z,
                        graphicsQuality: () => M,
                        playSound: () => _,
                        setRTPC: () => O,
                    }));
                var r = {};
                (t.r(r), t.d(r, { getBgUrl: () => U, getTextureUrl: () => A }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => ee,
                        addPreloadTexture: () => K,
                        arabic2roman: () => pe,
                        children: () => r,
                        displayStatus: () => $,
                        displayStatusIs: () => he,
                        enableFullScreenModeSupported: () => Ee,
                        events: () => B,
                        extraSize: () => be,
                        forceTriggerMouseMove: () => fe,
                        freezeTextureBeforeResize: () => re,
                        getBrowserTexturePath: () => Z,
                        getDisplayStatus: () => ge,
                        getExternalPaddingsRem: () => we,
                        getFontNames: () => me,
                        getScale: () => ae,
                        getSize: () => te,
                        getViewGlobalPosition: () => ie,
                        initExternalPaddings: () => Pe,
                        isEventHandled: () => ve,
                        isFocused: () => ue,
                        pxToRem: () => se,
                        remToPx: () => de,
                        resize: () => oe,
                        sendEvent: () => q,
                        setAnimateWindow: () => le,
                        setEventHandled: () => ce,
                        setInputPaddingsRem: () => Y,
                        setSidePaddingsRem: () => ne,
                        whenTutorialReady: () => ye,
                    }));
                var s = t(7363),
                    d = t.n(s),
                    l = t(1533),
                    u = t.n(l);
                const c = 'Content_base_ddc48',
                    v = 'Content_title_b3978',
                    f = 'Content_description_e6947',
                    g = () =>
                        d().createElement(
                            'div',
                            { className: c },
                            d().createElement(
                                'div',
                                { className: v },
                                R.strings.battle_pass.tooltips.entryPoint.disabled.header(),
                            ),
                            d().createElement(
                                'div',
                                { className: f },
                                R.strings.battle_pass.tooltips.entryPoint.disabled.body(),
                            ),
                        );
                var m = t(9849),
                    p = t.n(m);
                function w(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function h(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const b = w('clientResized'),
                    y = w('self.onScaleUpdated'),
                    E = w('clientMinimized'),
                    P = (e, n) => engine.on(e, n),
                    x = (e, n) => engine.off(e, n),
                    S = { down: w('mousedown'), up: w('mouseup'), move: w('mousemove') };
                const T = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && h(!1);
                    }
                    function t() {
                        e.enabled && h(!0);
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
                            : h(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const r = `mouse${n}`,
                                        a = S[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        o(),
                                        () => {
                                            i &&
                                                (a(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (i = !1));
                                        }
                                    );
                                };
                            })(t)),
                            n
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), o());
                        },
                        enable() {
                            ((e.enabled = !0), o());
                        },
                        enableOutside() {
                            e.enabled && h(!0);
                        },
                        disableOutside() {
                            e.enabled && h(!1);
                        },
                    });
                })();
                function _(e) {
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
                const M = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    j = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    L = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    V = Object.keys(L).reduce((e, n) => ((e[n] = () => _(L[n])), e), {}),
                    D = { play: Object.assign({}, V, { sound: _ }), setRTPC: O },
                    k = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    F = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function G(e) {
                    let n = '';
                    for (let t = F.length - 1; t >= 0; t--) for (; e >= F[t]; ) ((n += k[t]), (e -= F[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function A(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function U(e, n, t) {
                    return `url(${A(e, n, t)})`;
                }
                const $ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
                        onTextureFrozen: w('self.onTextureFrozen'),
                        onTextureReady: w('self.onTextureReady'),
                        onDomBuilt: w('self.onDomBuilt'),
                        onLoaded: w('self.onLoaded'),
                        onDisplayChanged: w('self.onShowingStatusChanged'),
                        onFocusUpdated: w('self.onFocusChanged'),
                        children: {
                            onAdded: w('children.onAdded'),
                            onLoaded: w('children.onLoaded'),
                            onRemoved: w('children.onRemoved'),
                            onAttached: w('children.onAttached'),
                            onTextureReady: w('children.onTextureReady'),
                            onRequestPosition: w('children.requestPosition'),
                        },
                    },
                    I = ['args'];
                const N = 2,
                    H = 16,
                    Q = 32,
                    W = 64,
                    X = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const i = n.args,
                                r = (function (e, n) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var o in e)
                                        if ({}.hasOwnProperty.call(e, o)) {
                                            if (-1 !== n.indexOf(o)) continue;
                                            t[o] = e[o];
                                        }
                                    return t;
                                })(n, I);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((o = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var o;
                    },
                    q = {
                        close(e) {
                            X('popover' === e ? N : Q);
                        },
                        minimize() {
                            X(W);
                        },
                        move(e) {
                            X(H, { isMouseEvent: !0, on: e });
                        },
                    },
                    J = 15;
                function K(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function Y(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, J);
                }
                function Z(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function ee(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function ne(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, J);
                }
                function te(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function oe(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function ie(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: de(n.x), y: de(n.y) };
                }
                function re() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ae() {
                    return viewEnv.getScale();
                }
                function se(e) {
                    return viewEnv.pxToRem(e);
                }
                function de(e) {
                    return viewEnv.remToPx(e);
                }
                function le(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function ue() {
                    return viewEnv.isFocused();
                }
                function ce() {
                    return viewEnv.setEventHandled();
                }
                function ve() {
                    return viewEnv.isEventHandled();
                }
                function fe() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ge() {
                    return viewEnv.getShowingStatus();
                }
                const me = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    pe = G;
                function we() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const he = Object.keys($).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === $[n]), e), {}),
                    be = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ye = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function Ee() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function Pe(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            o = n.right,
                            i = n.bottom,
                            r = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${i}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const xe = { view: a, client: i, sound: D, intl: j };
                const Re = {
                        base: 'TooltipDecorator_base_bf61f',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_bf8f8',
                        decorator: 'TooltipDecorator_decorator_f4de8',
                    },
                    Se = ['children', 'className', 'theme'];
                function Te() {
                    return (
                        (Te = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = arguments[n];
                                      for (var o in t) ({}).hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                  }
                                  return e;
                              }),
                        Te.apply(null, arguments)
                    );
                }
                const _e = d().forwardRef(function (e, n) {
                        let t = e.children,
                            o = e.className,
                            i = e.theme,
                            r = void 0 === i ? 'default' : i,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t = {};
                                for (var o in e)
                                    if ({}.hasOwnProperty.call(e, o)) {
                                        if (-1 !== n.indexOf(o)) continue;
                                        t[o] = e[o];
                                    }
                                return t;
                            })(e, Se);
                        const l = d().useRef(null);
                        var u;
                        return (
                            (u = () => {
                                const e = l.current;
                                if (!e)
                                    return void console.warn(
                                        'Uncexpected to have base div as not setup in ref to calculate and invoke resize',
                                    );
                                const n = new ResizeObserver(() => {
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    xe.view.resize(n, t);
                                    const o = window.getComputedStyle(e);
                                    xe.view.setSidePaddingsRem({
                                        left: parseInt(o.getPropertyValue('padding-left'), 10),
                                        top: parseInt(o.getPropertyValue('padding-top'), 10),
                                        right: parseInt(o.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                                return (n.observe(e), n.disconnect);
                            }),
                            (0, s.useEffect)(u, []),
                            d().createElement(
                                'div',
                                Te({}, a, {
                                    className: p()(Re.base, Re[`base__theme-${r}`], o),
                                    ref: function (e) {
                                        ((l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                d().createElement('div', { className: Re.decorator }, t),
                            )
                        );
                    }),
                    Oe = () => d().createElement(_e, null, d().createElement(g, null)),
                    ze = document.createElement('div');
                ((window.onload = () => document.body.appendChild(ze)), u().render(d().createElement(Oe, null), ze));
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
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var r = (t[e] = { exports: {} });
        return (n[e](r, r.exports, o), r.exports);
    }
    ((o.m = n),
        (e = []),
        (o.O = (n, t, i, r) => {
            if (!t) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [t, i, r] = e[u], s = !0, d = 0; d < t.length; d++)
                        (!1 & r || a >= r) && Object.keys(o.O).every((e) => o.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((s = !1), r < a && (a = r));
                    if (s) {
                        e.splice(u--, 1);
                        var l = i();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            r = r || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
            e[u] = [t, i, r];
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
        (o.j = 1705),
        (() => {
            var e = { 1705: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var i,
                        r,
                        [a, s, d] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (i in s) o.o(s, i) && (o.m[i] = s[i]);
                        if (d) var u = d(o);
                    }
                    for (n && n(t); l < a.length; l++) ((r = a[l]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var i = o.O(void 0, [1519], () => o(4526));
    i = o.O(i);
})();
