(() => {
    'use strict';
    var e,
        n = {
            2137: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => S, off: () => P, on: () => E, onResize: () => y, onScaleUpdated: () => b }));
                var o = {};
                (t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => C,
                        getSize: () => O,
                        graphicsQuality: () => z,
                        playSound: () => T,
                        setRTPC: () => _,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => G, getTextureUrl: () => D }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => Y,
                        addPreloadTexture: () => X,
                        arabic2roman: () => fe,
                        children: () => i,
                        displayStatus: () => $,
                        displayStatusIs: () => pe,
                        enableFullScreenModeSupported: () => ye,
                        events: () => B,
                        extraSize: () => we,
                        forceTriggerMouseMove: () => ce,
                        freezeTextureBeforeResize: () => re,
                        getBrowserTexturePath: () => K,
                        getDisplayStatus: () => ve,
                        getExternalPaddingsRem: () => me,
                        getFontNames: () => ge,
                        getScale: () => oe,
                        getSize: () => ee,
                        getViewGlobalPosition: () => te,
                        initExternalPaddings: () => be,
                        isEventHandled: () => ue,
                        isFocused: () => de,
                        pxToRem: () => ie,
                        remToPx: () => ae,
                        resize: () => ne,
                        sendEvent: () => W,
                        setAnimateWindow: () => se,
                        setEventHandled: () => le,
                        setInputPaddingsRem: () => J,
                        setSidePaddingsRem: () => Z,
                        whenTutorialReady: () => he,
                    }));
                var s = t(7363),
                    d = t.n(s),
                    l = t(1533),
                    u = t.n(l);
                const c = 'Content_base_2e',
                    v = 'Content_title_71',
                    g = 'Content_description_38',
                    f = () =>
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
                                { className: g },
                                R.strings.battle_pass.tooltips.entryPoint.disabled.body(),
                            ),
                        );
                var m = t(6483),
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
                const y = w('clientResized'),
                    b = w('self.onScaleUpdated'),
                    E = (e, n) => engine.on(e, n),
                    P = (e, n) => engine.off(e, n),
                    x = { down: w('mousedown'), up: w('mouseup'), move: w('mousemove') };
                const S = (function () {
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
                function T(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function _(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const z = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    j = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    M = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    F = Object.keys(M).reduce((e, n) => ((e[n] = () => T(M[n])), e), {}),
                    L = { play: Object.assign({}, F, { sound: T }), setRTPC: _ },
                    V = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    A = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function k(e) {
                    let n = '';
                    for (let t = A.length - 1; t >= 0; t--) for (; e >= A[t]; ) ((n += V[t]), (e -= A[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function D(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function G(e, n, t) {
                    return `url(${D(e, n, t)})`;
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
                    U = 16,
                    H = 32,
                    q = 64,
                    Q = (e, n) => {
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
                    W = {
                        close(e) {
                            Q('popover' === e ? N : H);
                        },
                        minimize() {
                            Q(q);
                        },
                        move(e) {
                            Q(U, { isMouseEvent: !0, on: e });
                        },
                    };
                function X(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function J(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function K(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function Y(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function Z(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function ee(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function ne(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function te(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ae(n.x), y: ae(n.y) };
                }
                function re() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function oe() {
                    return viewEnv.getScale();
                }
                function ie(e) {
                    return viewEnv.pxToRem(e);
                }
                function ae(e) {
                    return viewEnv.remToPx(e);
                }
                function se(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function de() {
                    return viewEnv.isFocused();
                }
                function le() {
                    return viewEnv.setEventHandled();
                }
                function ue() {
                    return viewEnv.isEventHandled();
                }
                function ce() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ve() {
                    return viewEnv.getShowingStatus();
                }
                const ge = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    fe = k;
                function me() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const pe = Object.keys($).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === $[n]), e), {}),
                    we = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    he = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ye() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function be(e) {
                    function n() {
                        const n = viewEnv.getExternalPaddingsRem(),
                            t = n.top,
                            r = n.right,
                            o = n.bottom,
                            i = n.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${o}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (n(), engine.on('self.onPaddingsUpdated', () => n()));
                }
                const Ee = { view: a, client: o, sound: L, intl: j };
                function Pe() {
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
                const xe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    Re = ['children', 'className', 'theme'];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Te = d().forwardRef(function (e, n) {
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
                            })(e, Re);
                        const l = Pe(),
                            u = d().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                l.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    Ee.view.resize(n, t);
                                    const r = window.getComputedStyle(e);
                                    Ee.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            d().createElement(
                                'div',
                                Se({}, a, {
                                    className: p()(xe.base, xe[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        ((u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                d().createElement('div', { className: xe.decorator }, t),
                            )
                        );
                    }),
                    _e = () => d().createElement(Te, null, d().createElement(f, null)),
                    Oe = document.createElement('div');
                ((window.onload = () => document.body.appendChild(Oe)), u().render(d().createElement(_e, null), Oe));
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
                for (u = 0; u < e.length; u++) {
                    for (var [t, o, i] = e[u], s = !0, d = 0; d < t.length; d++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, o, i];
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
                        [a, s, d] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (d) var u = d(r);
                    }
                    for (n && n(t); l < a.length; l++) ((i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var o = r.O(void 0, [1519], () => r(2137));
    o = r.O(o);
})();
