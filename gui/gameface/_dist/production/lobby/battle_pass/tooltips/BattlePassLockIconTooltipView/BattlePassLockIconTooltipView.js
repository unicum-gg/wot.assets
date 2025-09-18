(() => {
    'use strict';
    var e,
        n = {
            4471: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, { mouse: () => S, off: () => x, on: () => P, onResize: () => b, onScaleUpdated: () => E }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => z,
                        getSize: () => C,
                        graphicsQuality: () => j,
                        playSound: () => T,
                        setRTPC: () => O,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => N, getTextureUrl: () => G }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => Z,
                        addPreloadTexture: () => J,
                        arabic2roman: () => me,
                        children: () => i,
                        displayStatus: () => $,
                        displayStatusIs: () => we,
                        enableFullScreenModeSupported: () => be,
                        events: () => B,
                        extraSize: () => he,
                        forceTriggerMouseMove: () => ve,
                        freezeTextureBeforeResize: () => re,
                        getBrowserTexturePath: () => Y,
                        getDisplayStatus: () => ge,
                        getExternalPaddingsRem: () => pe,
                        getFontNames: () => fe,
                        getScale: () => ie,
                        getSize: () => ne,
                        getViewGlobalPosition: () => oe,
                        initExternalPaddings: () => Ee,
                        isEventHandled: () => ce,
                        isFocused: () => le,
                        pxToRem: () => ae,
                        remToPx: () => se,
                        resize: () => te,
                        sendEvent: () => X,
                        setAnimateWindow: () => de,
                        setEventHandled: () => ue,
                        setInputPaddingsRem: () => K,
                        setSidePaddingsRem: () => ee,
                        whenTutorialReady: () => ye,
                    }));
                var s = t(7363),
                    d = t.n(s),
                    l = t(1533),
                    u = t.n(l);
                const c = 'Content_base_3a',
                    v = 'Content_title_3c',
                    g = 'Content_description1_09',
                    f = 'Content_description2_d4',
                    m = () =>
                        d().createElement(
                            'div',
                            { className: c },
                            d().createElement('div', { className: v }, R.strings.battle_pass.tooltips.iconLock.title()),
                            d().createElement(
                                'div',
                                { className: g },
                                R.strings.battle_pass.tooltips.iconLock.descr1(),
                            ),
                            d().createElement(
                                'div',
                                { className: f },
                                R.strings.battle_pass.tooltips.iconLock.descr2(),
                            ),
                        );
                var p = t(6483),
                    w = t.n(p);
                function h(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function y(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const b = h('clientResized'),
                    E = h('self.onScaleUpdated'),
                    P = (e, n) => engine.on(e, n),
                    x = (e, n) => engine.off(e, n),
                    _ = { down: h('mousedown'), up: h('mouseup'), move: h('mousemove') };
                const S = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && y(!1);
                    }
                    function t() {
                        e.enabled && y(!0);
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
                            : y(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${n}`,
                                        a = _[n]((e) => t([e, 'outside']));
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
                            e.enabled && y(!0);
                        },
                        disableOutside() {
                            e.enabled && y(!1);
                        },
                    });
                })();
                function T(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function O(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const j = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    L = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    M = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    F = Object.keys(M).reduce((e, n) => ((e[n] = () => T(M[n])), e), {}),
                    k = { play: Object.assign({}, F, { sound: T }), setRTPC: O },
                    V = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    A = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function D(e) {
                    let n = '';
                    for (let t = A.length - 1; t >= 0; t--) for (; e >= A[t]; ) ((n += V[t]), (e -= A[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function G(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function N(e, n, t) {
                    return `url(${G(e, n, t)})`;
                }
                const $ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
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
                    I = ['args'];
                const U = 2,
                    H = 16,
                    q = 32,
                    Q = 64,
                    W = (e, n) => {
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
                                })(n, I);
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
                    X = {
                        close(e) {
                            W('popover' === e ? U : q);
                        },
                        minimize() {
                            W(Q);
                        },
                        move(e) {
                            W(H, { isMouseEvent: !0, on: e });
                        },
                    };
                function J(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function K(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function Y(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function Z(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function ee(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function ne(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function te(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function oe(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: se(n.x), y: se(n.y) };
                }
                function re() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ie() {
                    return viewEnv.getScale();
                }
                function ae(e) {
                    return viewEnv.pxToRem(e);
                }
                function se(e) {
                    return viewEnv.remToPx(e);
                }
                function de(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function le() {
                    return viewEnv.isFocused();
                }
                function ue() {
                    return viewEnv.setEventHandled();
                }
                function ce() {
                    return viewEnv.isEventHandled();
                }
                function ve() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ge() {
                    return viewEnv.getShowingStatus();
                }
                const fe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    me = D;
                function pe() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const we = Object.keys($).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === $[n]), e), {}),
                    he = {
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
                function be() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function Ee(e) {
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
                const Pe = { view: a, client: r, sound: k, intl: L };
                function xe() {
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
                const Re = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    _e = ['children', 'className', 'theme'];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Te = d().forwardRef(function (e, n) {
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
                            })(e, _e);
                        const l = xe(),
                            u = d().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                l.run(() => {
                                    const e = u.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    Pe.view.resize(n, t);
                                    const o = window.getComputedStyle(e);
                                    Pe.view.setSidePaddingsRem({
                                        left: parseInt(o.getPropertyValue('padding-left'), 10),
                                        top: parseInt(o.getPropertyValue('padding-top'), 10),
                                        right: parseInt(o.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(c, []),
                            d().createElement(
                                'div',
                                Se({}, a, {
                                    className: w()(Re.base, Re[`base__theme-${i}`], o),
                                    ref: function (e) {
                                        ((u.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                d().createElement('div', { className: Re.decorator }, t),
                            )
                        );
                    }),
                    Oe = () => d().createElement(Te, null, d().createElement(m, null)),
                    Ce = document.createElement('div');
                ((window.onload = () => document.body.appendChild(Ce)), u().render(d().createElement(Oe, null), Ce));
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
                for (u = 0; u < e.length; u++) {
                    for (var [t, r, i] = e[u], s = !0, d = 0; d < t.length; d++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[d]))
                            ? t.splice(d--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var l = r();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [t, r, i];
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
        (o.j = 5610),
        (() => {
            var e = { 5610: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, d] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (d) var u = d(o);
                    }
                    for (n && n(t); l < a.length; l++) ((i = a[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = o.O(void 0, [1519], () => o(4471));
    r = o.O(r);
})();
