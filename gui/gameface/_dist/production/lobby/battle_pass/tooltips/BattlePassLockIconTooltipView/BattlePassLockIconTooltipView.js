(() => {
    'use strict';
    var e,
        n = {
            6081: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, { mouse: () => T, off: () => P, on: () => x, onResize: () => E, onScaleUpdated: () => y }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => C,
                        getSize: () => z,
                        graphicsQuality: () => j,
                        playSound: () => S,
                        setRTPC: () => O,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => G, getTextureUrl: () => D }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => Y,
                        addPreloadTexture: () => X,
                        arabic2roman: () => ge,
                        children: () => i,
                        displayStatus: () => N,
                        displayStatusIs: () => me,
                        events: () => B,
                        extraSize: () => we,
                        forceTriggerMouseMove: () => ce,
                        freezeTextureBeforeResize: () => oe,
                        getBrowserTexturePath: () => K,
                        getDisplayStatus: () => ve,
                        getFontNames: () => fe,
                        getScale: () => re,
                        getSize: () => ee,
                        getViewGlobalPosition: () => te,
                        isEventHandled: () => de,
                        isFocused: () => ue,
                        pxToRem: () => ie,
                        remToPx: () => ae,
                        resize: () => ne,
                        sendEvent: () => W,
                        setAnimateWindow: () => se,
                        setEventHandled: () => le,
                        setInputPaddingsRem: () => J,
                        setSidePaddingsRem: () => Z,
                        whenTutorialReady: () => pe,
                    }));
                var s = t(7363),
                    u = t.n(s),
                    l = t(1533),
                    d = t.n(l);
                const c = 'Content_base_3a',
                    v = 'Content_title_3c',
                    f = 'Content_description1_09',
                    g = 'Content_description2_d4',
                    m = () =>
                        u().createElement(
                            'div',
                            { className: c },
                            u().createElement('div', { className: v }, R.strings.battle_pass.tooltips.iconLock.title()),
                            u().createElement(
                                'div',
                                { className: f },
                                R.strings.battle_pass.tooltips.iconLock.descr1(),
                            ),
                            u().createElement(
                                'div',
                                { className: g },
                                R.strings.battle_pass.tooltips.iconLock.descr2(),
                            ),
                        );
                var w = t(6483),
                    p = t.n(w);
                function h(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function b(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const E = h('clientResized'),
                    y = h('self.onScaleUpdated'),
                    x = (e, n) => engine.on(e, n),
                    P = (e, n) => engine.off(e, n),
                    _ = { down: h('mousedown'), up: h('mouseup'), move: h('mousemove') };
                const T = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && b(!1);
                    }
                    function t() {
                        e.enabled && b(!0);
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
                            : b(!1);
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
                            e.enabled && b(!0);
                        },
                        disableOutside() {
                            e.enabled && b(!1);
                        },
                    });
                })();
                function S(e) {
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
                const j = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    k = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    L = Object.keys(k).reduce((e, n) => ((e[n] = () => S(k[n])), e), {}),
                    M = { play: Object.assign({}, L, { sound: S }), setRTPC: O },
                    V = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    F = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function A(e) {
                    let n = '';
                    for (let t = F.length - 1; t >= 0; t--) for (; e >= F[t]; ) ((n += V[t]), (e -= F[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function D(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function G(e, n, t) {
                    return `url(${D(e, n, t)})`;
                }
                const N = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                const H = 2,
                    U = 16,
                    $ = 32,
                    q = 64,
                    Q = (e, n) => {
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
                    W = {
                        close(e) {
                            Q('popover' === e ? H : $);
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
                function K(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
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
                function oe() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function re() {
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
                function ue() {
                    return viewEnv.isFocused();
                }
                function le() {
                    return viewEnv.setEventHandled();
                }
                function de() {
                    return viewEnv.isEventHandled();
                }
                function ce() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ve() {
                    return viewEnv.getShowingStatus();
                }
                const fe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ge = A,
                    me = Object.keys(N).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === N[n]), e), {}),
                    we = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    pe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    he = { view: a, client: r, sound: M };
                function be() {
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
                const Ee = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ye = ['children', 'className', 'theme'];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const Pe = u().forwardRef(function (e, n) {
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
                            })(e, ye);
                        const l = be(),
                            d = u().useRef(null);
                        var c;
                        return (
                            (c = () => {
                                l.run(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const n = e.scrollWidth,
                                        t = e.scrollHeight;
                                    he.view.resize(n, t);
                                    const o = window.getComputedStyle(e);
                                    he.view.setSidePaddingsRem({
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
                                xe({}, a, {
                                    className: p()(Ee.base, Ee[`base__theme-${i}`], o),
                                    ref: function (e) {
                                        ((d.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                    },
                                }),
                                u().createElement('div', { className: Ee.decorator }, t),
                            )
                        );
                    }),
                    Re = () => u().createElement(Pe, null, u().createElement(m, null)),
                    _e = document.createElement('div');
                ((window.onload = () => document.body.appendChild(_e)), d().render(u().createElement(Re, null), _e));
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
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (u) var d = u(o);
                    }
                    for (n && n(t); l < a.length; l++) ((i = a[l]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = o.O(void 0, [1519], () => o(6081));
    r = o.O(r);
})();
