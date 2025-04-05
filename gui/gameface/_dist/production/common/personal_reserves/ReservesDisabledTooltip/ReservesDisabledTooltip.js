(() => {
    'use strict';
    var e,
        n = {
            440: (e, n, t) => {
                var o = {};
                t.r(o),
                    t.d(o, { mouse: () => E, off: () => h, on: () => p, onResize: () => m, onScaleUpdated: () => w });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => _,
                        getSize: () => x,
                        graphicsQuality: () => P,
                        playSound: () => y,
                        setRTPC: () => T,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => F, getTextureUrl: () => V });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => U,
                        arabic2roman: () => le,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => de,
                        events: () => k,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => se,
                        getFontNames: () => ue,
                        getScale: () => Z,
                        getSize: () => X,
                        getViewGlobalPosition: () => K,
                        isEventHandled: () => ie,
                        isFocused: () => oe,
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
                var s = t(363),
                    u = t.n(s),
                    l = t(533),
                    d = t.n(l),
                    c = t(483),
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
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && g(!1);
                    }
                    function t() {
                        e.enabled && g(!0);
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
                            : g(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${n}`,
                                        a = b[n]((e) => t([e, 'outside']));
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
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
                        },
                        enableOutside() {
                            e.enabled && g(!0);
                        },
                        disableOutside() {
                            e.enabled && g(!1);
                        },
                    });
                })();
                function y(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function T(e, n) {
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
                const P = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(S).reduce((e, n) => ((e[n] = () => y(S[n])), e), {}),
                    z = { play: Object.assign({}, O, { sound: y }), setRTPC: T },
                    j = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    C = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function M(e) {
                    let n = '';
                    for (let t = C.length - 1; t >= 0; t--) for (; e >= C[t]; ) (n += j[t]), (e -= C[t]);
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function V(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function F(e, n, t) {
                    return `url(${V(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
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
                    D = ['args'];
                const L = 2,
                    G = 16,
                    N = 32,
                    B = 64,
                    I = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const r = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(n, D);
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
                    H = {
                        close(e) {
                            I('popover' === e ? L : N);
                        },
                        minimize() {
                            I(B);
                        },
                        move(e) {
                            I(G, { isMouseEvent: !0, on: e });
                        },
                    };
                function U(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function q(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
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
                function oe() {
                    return viewEnv.isFocused();
                }
                function re() {
                    return viewEnv.setEventHandled();
                }
                function ie() {
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
                    le = M,
                    de = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
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
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
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
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const he = u().forwardRef(function (e, n) {
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
                                for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, we);
                        const l = ge(),
                            d = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                l.run(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    fe.view.resize(n, t);
                                    const o = window.getComputedStyle(e);
                                    fe.view.setSidePaddingsRem({
                                        left: parseInt(o.getPropertyValue('padding-left'), 10),
                                        top: parseInt(o.getPropertyValue('padding-top'), 10),
                                        right: parseInt(o.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            u().createElement(
                                'div',
                                pe({}, a, {
                                    className: v()(me.base, me[`base__theme-${i}`], o),
                                    ref: function (e) {
                                        (d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e);
                                    },
                                }),
                                u().createElement('div', { className: me.decorator }, t),
                            )
                        );
                    }),
                    be = 'Tooltip_base_23',
                    Ee = 'Tooltip_text_3a',
                    ye = 'Tooltip_seperator_cd',
                    Te = 'Tooltip_infoSection_94',
                    xe = 'Tooltip_infoSection_icon_92',
                    _e = 'Tooltip_infoSection_text_dd',
                    Re = () =>
                        u().createElement(
                            he,
                            null,
                            u().createElement(
                                'div',
                                { className: be },
                                u().createElement(
                                    'div',
                                    { className: Ee },
                                    R.strings.personal_reserves.noReserveTooltip.text(),
                                ),
                                u().createElement('div', { className: ye }),
                                u().createElement(
                                    'div',
                                    { className: Te },
                                    u().createElement('div', { className: xe }),
                                    u().createElement(
                                        'div',
                                        { className: _e },
                                        R.strings.personal_reserves.noReserveTooltip.infoText(),
                                    ),
                                ),
                            ),
                        );
                engine.whenReady.then(() => {
                    d().render(u().createElement(Re, null), document.getElementById('root'));
                });
            },
            363: (e) => {
                e.exports = React;
            },
            533: (e) => {
                e.exports = ReactDOM;
            },
        },
        t = {};
    function o(e) {
        var r = t[e];
        if (void 0 !== r) return r.exports;
        var i = (t[e] = { exports: {} });
        return n[e](i, i.exports, o), i.exports;
    }
    (o.m = n),
        (e = []),
        (o.O = (n, t, r, i) => {
            if (!t) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, r, i] = e[d], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(d--, 1);
                        var l = r();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [t, r, i];
        }),
        (o.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return o.d(n, { a: n }), n;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (o.j = 685),
        (() => {
            var e = { 685: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (u) var d = u(o);
                    }
                    for (n && n(t); l < a.length; l++) (i = a[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return o.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var r = o.O(void 0, [490], () => o(440));
    r = o.O(r);
})();
