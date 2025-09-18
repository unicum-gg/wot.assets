(() => {
    'use strict';
    var e,
        n = {
            992: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => h, off: () => w, on: () => p, onResize: () => m, onScaleUpdated: () => b }));
                var o = {};
                (t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => S,
                        getSize: () => P,
                        graphicsQuality: () => O,
                        playSound: () => E,
                        setRTPC: () => x,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => _, getTextureUrl: () => A }));
                var s = {};
                (t.r(s),
                    t.d(s, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => q,
                        arabic2roman: () => de,
                        children: () => i,
                        displayStatus: () => D,
                        displayStatusIs: () => ve,
                        enableFullScreenModeSupported: () => me,
                        events: () => V,
                        extraSize: () => fe,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Z,
                        getBrowserTexturePath: () => W,
                        getDisplayStatus: () => ue,
                        getExternalPaddingsRem: () => ce,
                        getFontNames: () => le,
                        getScale: () => ee,
                        getSize: () => J,
                        getViewGlobalPosition: () => Y,
                        initExternalPaddings: () => be,
                        isEventHandled: () => se,
                        isFocused: () => oe,
                        pxToRem: () => ne,
                        remToPx: () => te,
                        resize: () => K,
                        sendEvent: () => H,
                        setAnimateWindow: () => re,
                        setEventHandled: () => ie,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => ge,
                    }));
                var a = t(363),
                    u = t.n(a),
                    l = t(403);
                function d() {}
                function c() {
                    return !1;
                }
                console.log;
                var v = t(174);
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
                    b = f('self.onScaleUpdated'),
                    p = (e, n) => engine.on(e, n),
                    w = (e, n) => engine.off(e, n),
                    y = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && g(!1);
                    }
                    function t() {
                        e.enabled && g(!0);
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
                            : g(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        s = y[n]((e) => t([e, 'outside']));
                                    function a(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(i, a),
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
                            e.enabled && g(!0);
                        },
                        disableOutside() {
                            e.enabled && g(!1);
                        },
                    });
                })();
                function E(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function x(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const O = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    M = Object.keys(C).reduce((e, n) => ((e[n] = () => E(C[n])), e), {}),
                    z = { play: Object.assign({}, M, { sound: E }), setRTPC: x },
                    j = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    L = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function k(e) {
                    let n = '';
                    for (let t = L.length - 1; t >= 0; t--) for (; e >= L[t]; ) ((n += j[t]), (e -= L[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function A(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function _(e, n, t) {
                    return `url(${A(e, n, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    V = {
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
                    B = ['args'];
                const F = 2,
                    G = 16,
                    I = 32,
                    $ = 64,
                    U = (e, n) => {
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
                                })(n, B);
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
                    H = {
                        close(e) {
                            U('popover' === e ? F : I);
                        },
                        minimize() {
                            U($);
                        },
                        move(e) {
                            U(G, { isMouseEvent: !0, on: e });
                        },
                    };
                function q(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function W(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function Q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function J(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function K(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function Y(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: te(n.x), y: te(n.y) };
                }
                function Z() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ee() {
                    return viewEnv.getScale();
                }
                function ne(e) {
                    return viewEnv.pxToRem(e);
                }
                function te(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function oe() {
                    return viewEnv.isFocused();
                }
                function ie() {
                    return viewEnv.setEventHandled();
                }
                function se() {
                    return viewEnv.isEventHandled();
                }
                function ae() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ue() {
                    return viewEnv.getShowingStatus();
                }
                const le = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    de = k;
                function ce() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const ve = Object.keys(D).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === D[n]), e), {}),
                    fe = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ge = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : V.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function me() {
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
                const pe = { view: s, client: o, sound: z, intl: T };
                function we(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return ye(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ye(e, n);
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ye(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const he = (e) => (0 === e ? window : window.subViews.get(e));
                const Ee = ((e, n) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    d = (t, r, o) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = he,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = o.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const o = t(n),
                                                        i = r.split('.').reduce((e, n) => e[n], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const a = 'string' == typeof i ? `${r}.${i}` : r,
                                                            u = pe.view.addModelObserver(a, n, !0);
                                                        return (o.set(u, t), e && t(s(i)), u);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, n) => {
                                                        const t = s(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = s(e);
                                                        return () => {
                                                            n();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = we(o.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            a =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            u = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : a.readByPath(e),
                                            d = (e) => l.current.push(e),
                                            f = e({
                                                mode: t,
                                                readByPath: u,
                                                externalModel: a,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const n = u(e),
                                                            r = v.LO.box(n, { equals: c });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, v.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            o = v.LO.box(r, { equals: c });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, v.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            o = v.LO.box(r, { equals: c });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, v.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = v.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, v.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                s = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = v.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, v.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                s[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            g = { mode: t, model: f, externalModel: a, cleanup: d };
                                        return {
                                            model: f,
                                            controls: 'mocks' === t && o ? o.controls(g) : n(g),
                                            externalModel: a,
                                            mode: t,
                                        };
                                    },
                                    f = (0, a.useRef)(!1),
                                    g = (0, a.useState)(r),
                                    m = g[0],
                                    b = g[1],
                                    p = (0, a.useState)(() => d(r, o, s)),
                                    w = p[0],
                                    y = p[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        f.current ? y(d(m, o, s)) : (f.current = !0);
                                    }, [s, m, o]),
                                    (0, a.useEffect)(() => {
                                        b(r);
                                    }, [r]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (w.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [w],
                                    ),
                                    u().createElement(t.Provider, { value: w }, i)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(({ observableModel: e }) => Object.assign({}, e.primitives(['text'])), d),
                    xe = Ee[0],
                    Pe = Ee[1],
                    Se = 'WarningTextApp_base_ba',
                    Oe = 'WarningTextApp_icon_2c',
                    Re = (0, l.Pi)(() => {
                        const e = Pe().model;
                        return u().createElement(
                            'div',
                            { className: Se },
                            u().createElement('div', { className: Oe }),
                            e.text.get(),
                        );
                    });
                (0, a.memo)(function (e) {
                    const n = (0, a.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                    return u().createElement(xe, { options: n }, u().createElement(Re, null));
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
                var s = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, o, i] = e[d], a = !0, u = 0; u < t.length; u++)
                        (!1 & i || s >= i) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((a = !1), i < s && (s = i));
                    if (a) {
                        e.splice(d--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
            e[d] = [t, o, i];
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
        (r.j = 45),
        (() => {
            var e = { 45: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [s, a, u] = t,
                        l = 0;
                    if (s.some((n) => 0 !== e[n])) {
                        for (o in a) r.o(a, o) && (r.m[o] = a[o]);
                        if (u) var d = u(r);
                    }
                    for (n && n(t); l < s.length; l++) ((i = s[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(d);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var o = r.O(void 0, [573], () => r(992));
    o = r.O(o);
})();
