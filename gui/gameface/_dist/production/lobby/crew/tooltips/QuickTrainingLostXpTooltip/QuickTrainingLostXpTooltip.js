(() => {
    'use strict';
    var e,
        n = {
            2095: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, { mouse: () => m, off: () => f, on: () => g, onResize: () => c, onScaleUpdated: () => v }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => b,
                        getSize: () => y,
                        graphicsQuality: () => E,
                        playSound: () => w,
                        setRTPC: () => h,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => j, getTextureUrl: () => C }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => I,
                        arabic2roman: () => ae,
                        children: () => i,
                        displayStatus: () => L,
                        displayStatusIs: () => le,
                        enableFullScreenModeSupported: () => ce,
                        events: () => k,
                        extraSize: () => ue,
                        forceTriggerMouseMove: () => oe,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => re,
                        getExternalPaddingsRem: () => se,
                        getFontNames: () => ie,
                        getScale: () => J,
                        getSize: () => H,
                        getViewGlobalPosition: () => q,
                        initExternalPaddings: () => ve,
                        isEventHandled: () => te,
                        isFocused: () => ee,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => Q,
                        sendEvent: () => B,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => ne,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => de,
                    }));
                var s = t(6483),
                    l = t.n(s);
                function u(e) {
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
                const c = u('clientResized'),
                    v = u('self.onScaleUpdated'),
                    g = (e, n) => engine.on(e, n),
                    f = (e, n) => engine.off(e, n),
                    p = { down: u('mousedown'), up: u('mouseup'), move: u('mousemove') };
                const m = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && d(!1);
                    }
                    function t() {
                        e.enabled && d(!0);
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
                            : d(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${n}`,
                                        a = p[n]((e) => t([e, 'outside']));
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
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    P = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    x = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    T = Object.keys(x).reduce((e, n) => ((e[n] = () => w(x[n])), e), {}),
                    S = { play: Object.assign({}, T, { sound: w }), setRTPC: h },
                    _ = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    O = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function z(e) {
                    let n = '';
                    for (let t = O.length - 1; t >= 0; t--) for (; e >= O[t]; ) ((n += _[t]), (e -= O[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function C(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function j(e, n, t) {
                    return `url(${C(e, n, t)})`;
                }
                const L = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    k = {
                        onTextureFrozen: u('self.onTextureFrozen'),
                        onTextureReady: u('self.onTextureReady'),
                        onDomBuilt: u('self.onDomBuilt'),
                        onLoaded: u('self.onLoaded'),
                        onDisplayChanged: u('self.onShowingStatusChanged'),
                        onFocusUpdated: u('self.onFocusChanged'),
                        children: {
                            onAdded: u('children.onAdded'),
                            onLoaded: u('children.onLoaded'),
                            onRemoved: u('children.onRemoved'),
                            onAttached: u('children.onAttached'),
                            onTextureReady: u('children.onTextureReady'),
                            onRequestPosition: u('children.requestPosition'),
                        },
                    },
                    M = ['args'];
                const A = 2,
                    F = 16,
                    V = 32,
                    D = 64,
                    G = (e, n) => {
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
                                })(n, M);
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
                            G('popover' === e ? A : V);
                        },
                        minimize() {
                            G(D);
                        },
                        move(e) {
                            G(F, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function U(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function q(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: Y(n.x), y: Y(n.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function J() {
                    return viewEnv.getScale();
                }
                function K(e) {
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
                function oe() {
                    viewEnv.forceTriggerMouseMove();
                }
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const ie = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ae = z;
                function se() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const le = Object.keys(L).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === L[n]), e), {}),
                    ue = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    de = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ce() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ve(e) {
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
                const ge = { view: a, client: r, sound: S, intl: P };
                var fe = t(7363),
                    pe = t.n(fe);
                function me() {
                    const e = (0, fe.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, fe.useEffect)(() => n, []),
                        (0, fe.useMemo)(
                            () => ({
                                run: (n) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                ((e.current = 0), n());
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
                const we = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    he = ['children', 'className', 'theme'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const be = pe().forwardRef(function (e, n) {
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
                        })(e, he);
                    const s = me(),
                        u = pe().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            s.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ge.view.resize(n, t);
                                const o = window.getComputedStyle(e);
                                ge.view.setSidePaddingsRem({
                                    left: parseInt(o.getPropertyValue('padding-left'), 10),
                                    top: parseInt(o.getPropertyValue('padding-top'), 10),
                                    right: parseInt(o.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, fe.useEffect)(d, []),
                        pe().createElement(
                            'div',
                            ye({}, a, {
                                className: l()(we.base, we[`base__theme-${i}`], o),
                                ref: function (e) {
                                    ((u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                },
                            }),
                            pe().createElement('div', { className: we.decorator }, t),
                        )
                    );
                });
                var Ee = t(1533),
                    Pe = t.n(Ee);
                const xe = 'QuickTrainingLostXpTooltipApp_base_51',
                    Te = 'QuickTrainingLostXpTooltipApp_title_c2',
                    Re = 'QuickTrainingLostXpTooltipApp_description_29',
                    Se = () =>
                        pe().createElement(
                            'div',
                            { className: xe },
                            pe().createElement(
                                'div',
                                { className: Te },
                                R.strings.tooltips.quickTraining.lostXpTooltip.header(),
                            ),
                            pe().createElement(
                                'div',
                                { className: Re },
                                R.strings.tooltips.quickTraining.lostXpTooltip.body(),
                            ),
                        );
                engine.whenReady.then(() => {
                    Pe().render(
                        pe().createElement(be, null, pe().createElement(Se, null)),
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
                for (d = 0; d < e.length; d++) {
                    for (var [t, r, i] = e[d], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(d--, 1);
                        var u = r();
                        void 0 !== u && (n = u);
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
        (o.j = 8854),
        (() => {
            var e = { 8854: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, l] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var d = l(o);
                    }
                    for (n && n(t); u < a.length; u++) ((i = a[u]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = o.O(void 0, [9056], () => o(2095));
    r = o.O(r);
})();
