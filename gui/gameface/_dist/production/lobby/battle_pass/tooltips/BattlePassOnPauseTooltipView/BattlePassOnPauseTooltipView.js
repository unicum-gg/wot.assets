(() => {
    'use strict';
    var e,
        n = {
            3921: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => T, off: () => P, on: () => E, onResize: () => b, onScaleUpdated: () => y }));
                var o = {};
                (t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => z,
                        getSize: () => O,
                        graphicsQuality: () => C,
                        playSound: () => _,
                        setRTPC: () => S,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => L, getTextureUrl: () => D }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => K,
                        addPreloadTexture: () => W,
                        arabic2roman: () => fe,
                        children: () => i,
                        displayStatus: () => G,
                        displayStatusIs: () => ge,
                        events: () => B,
                        extraSize: () => me,
                        forceTriggerMouseMove: () => le,
                        freezeTextureBeforeResize: () => te,
                        getBrowserTexturePath: () => J,
                        getDisplayStatus: () => ce,
                        getFontNames: () => ve,
                        getScale: () => re,
                        getSize: () => Z,
                        getViewGlobalPosition: () => ne,
                        isEventHandled: () => de,
                        isFocused: () => se,
                        pxToRem: () => oe,
                        remToPx: () => ie,
                        resize: () => ee,
                        sendEvent: () => Q,
                        setAnimateWindow: () => ae,
                        setEventHandled: () => ue,
                        setInputPaddingsRem: () => X,
                        setSidePaddingsRem: () => Y,
                        whenTutorialReady: () => we,
                    }));
                var s = t(7363),
                    u = t.n(s),
                    d = t(1533),
                    l = t.n(d);
                const c = 'Content_base_2e',
                    v = 'Content_title_71',
                    f = 'Content_description_38',
                    g = () =>
                        u().createElement(
                            'div',
                            { className: c },
                            u().createElement(
                                'div',
                                { className: v },
                                R.strings.battle_pass.tooltips.entryPoint.disabled.header(),
                            ),
                            u().createElement(
                                'div',
                                { className: f },
                                R.strings.battle_pass.tooltips.entryPoint.disabled.body(),
                            ),
                        );
                var m = t(6483),
                    w = t.n(m);
                function p(e) {
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
                const b = p('clientResized'),
                    y = p('self.onScaleUpdated'),
                    E = (e, n) => engine.on(e, n),
                    P = (e, n) => engine.off(e, n),
                    x = { down: p('mousedown'), up: p('mouseup'), move: p('mousemove') };
                const T = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && h(!1);
                    }
                    function t() {
                        e.enabled && h(!0);
                    }
                    function r() {
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
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = x[n]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
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
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
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
                function S(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    j = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    M = Object.keys(j).reduce((e, n) => ((e[n] = () => _(j[n])), e), {}),
                    V = { play: Object.assign({}, M, { sound: _ }), setRTPC: S },
                    F = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    A = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function k(e) {
                    let n = '';
                    for (let t = A.length - 1; t >= 0; t--) for (; e >= A[t]; ) ((n += F[t]), (e -= A[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function D(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function L(e, n, t) {
                    return `url(${D(e, n, t)})`;
                }
                const G = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
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
                    I = ['args'];
                const N = 2,
                    H = 16,
                    U = 32,
                    $ = 64,
                    q = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                                    return o;
                                })(n, I);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    Q = {
                        close(e) {
                            q('popover' === e ? N : U);
                        },
                        minimize() {
                            q($);
                        },
                        move(e) {
                            q(H, { isMouseEvent: !0, on: e });
                        },
                    };
                function W(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function J(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function K(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function Y(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function Z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function ee(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function ne(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ie(n.x), y: ie(n.y) };
                }
                function te() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function re() {
                    return viewEnv.getScale();
                }
                function oe(e) {
                    return viewEnv.pxToRem(e);
                }
                function ie(e) {
                    return viewEnv.remToPx(e);
                }
                function ae(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function se() {
                    return viewEnv.isFocused();
                }
                function ue() {
                    return viewEnv.setEventHandled();
                }
                function de() {
                    return viewEnv.isEventHandled();
                }
                function le() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ce() {
                    return viewEnv.getShowingStatus();
                }
                const ve = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    fe = k,
                    ge = Object.keys(G).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === G[n]), e), {}),
                    me = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    we = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    pe = { view: a, client: o, sound: V };
                function he() {
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
                }
                const be = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ye = ['children', 'className', 'theme'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const Pe = u().forwardRef(function (e, n) {
                        let t = e.children,
                            r = e.className,
                            o = e.theme,
                            i = void 0 === o ? 'default' : o,
                            a = (function (e, n) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]));
                                return o;
                            })(e, ye);
                        const d = he(),
                            l = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                d.run(() => {
                                    const e = l.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    pe.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    pe.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            u().createElement(
                                'div',
                                Ee({}, a, {
                                    className: w()(be.base, be[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        ((l.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                u().createElement('div', { className: be.decorator }, t),
                            )
                        );
                    }),
                    xe = () => u().createElement(Pe, null, u().createElement(g, null)),
                    Re = document.createElement('div');
                ((window.onload = () => document.body.appendChild(Re)), l().render(u().createElement(xe, null), Re));
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function r(e) {
        var o = t[e];
        if (void 0 !== o) return o.exports;
        var i = (t[e] = { exports: {} });
        return (n[e](i, i.exports, r), i.exports);
    }
    ((r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, o, i] = e[l], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(l--, 1);
                        var d = o();
                        void 0 !== d && (n = d);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [t, o, i];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return (r.d(n, { a: n }), n);
        }),
        (r.d = (e, n) => {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
        (r.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (r.j = 1705),
        (() => {
            var e = { 1705: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, u] = t,
                        d = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var l = u(r);
                    }
                    for (n && n(t); d < a.length; d++) ((i = a[d]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var o = r.O(void 0, [1519], () => r(3921));
    o = r.O(o);
})();
