(() => {
    'use strict';
    var e,
        n = {
            504: (e, n, t) => {
                var r = {};
                t.r(r),
                    t.d(r, { mouse: () => y, off: () => p, on: () => w, onResize: () => m, onScaleUpdated: () => b });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => P,
                        getSize: () => O,
                        graphicsQuality: () => S,
                        playSound: () => E,
                        setRTPC: () => x,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => A, getTextureUrl: () => _ });
                var a = {};
                t.r(a),
                    t.d(a, {
                        addModelObserver: () => Q,
                        addPreloadTexture: () => N,
                        arabic2roman: () => le,
                        children: () => i,
                        displayStatus: () => D,
                        displayStatusIs: () => ce,
                        events: () => V,
                        extraSize: () => de,
                        forceTriggerMouseMove: () => ae,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => se,
                        getFontNames: () => ue,
                        getScale: () => Z,
                        getSize: () => W,
                        getViewGlobalPosition: () => K,
                        isEventHandled: () => ie,
                        isFocused: () => re,
                        pxToRem: () => ee,
                        remToPx: () => ne,
                        resize: () => J,
                        sendEvent: () => H,
                        setAnimateWindow: () => te,
                        setEventHandled: () => oe,
                        setInputPaddingsRem: () => U,
                        setSidePaddingsRem: () => X,
                        whenTutorialReady: () => ve,
                    });
                var s = t(363),
                    u = t.n(s),
                    l = t(533),
                    c = t.n(l),
                    d = t(483),
                    v = t.n(d);
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
                    w = (e, n) => engine.on(e, n),
                    p = (e, n) => engine.off(e, n),
                    h = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const y = (function () {
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
                                        a = h[n]((e) => t([e, 'outside']));
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
                function O(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    T = Object.keys(C).reduce((e, n) => ((e[n] = () => E(C[n])), e), {}),
                    k = { play: Object.assign({}, T, { sound: E }), setRTPC: x },
                    z = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    M = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function j(e) {
                    let n = '';
                    for (let t = M.length - 1; t >= 0; t--) for (; e >= M[t]; ) (n += z[t]), (e -= M[t]);
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function _(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function A(e, n, t) {
                    return `url(${_(e, n, t)})`;
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
                    L = ['args'];
                const F = 2,
                    I = 16,
                    B = 32,
                    G = 64,
                    $ = (e, n) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== n) {
                            const o = n.args,
                                i = (function (e, n) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                                    return o;
                                })(n, L);
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
                            $('popover' === e ? F : B);
                        },
                        minimize() {
                            $(G);
                        },
                        move(e) {
                            $(I, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function q(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function Q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function X(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function W(e = 'px') {
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
                function re() {
                    return viewEnv.isFocused();
                }
                function oe() {
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
                    le = j,
                    ce = Object.keys(D).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === D[n]), e), {}),
                    de = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    ve = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : V.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    fe = { view: a, client: o, sound: k };
                var ge = t(403);
                function me() {
                    return !1;
                }
                console.log;
                var be = t(174);
                function we(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return pe(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return pe(e, n);
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
                function pe(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const he = (e) => (0 === e ? window : window.subViews.get(e));
                const ye = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const l = (0, s.useRef)([]),
                                    c = (t, r, o) => {
                                        var i;
                                        const a = (function ({
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
                                                const a = (e) => {
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
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            u = fe.view.addModelObserver(s, n, !0);
                                                        return o.set(u, t), e && t(a(i)), u;
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, n) => {
                                                        const t = a(n);
                                                        return (...n) => {
                                                            t(e(...n));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const n = a(e);
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
                                            s =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            u = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            c = (e) => l.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: u,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            o = be.LO.box(r, { equals: me });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, be.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : u(e),
                                                            o = be.LO.box(r, { equals: me });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, be.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = u(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = be.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, be.aD)((n) => {
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
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = be.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, be.aD)((e) => {
                                                                            i.forEach(([n, t]) => {
                                                                                a[t].set(e[n]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            v = { mode: t, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && o ? o.controls(v) : n(v),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    v = (0, s.useState)(r),
                                    f = v[0],
                                    g = v[1],
                                    m = (0, s.useState)(() => c(r, o, a)),
                                    b = m[0],
                                    w = m[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? w(c(f, o, a)) : (d.current = !0);
                                    }, [a, f, o]),
                                    (0, s.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    u().createElement(t.Provider, { value: b }, i)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => e.object(),
                        ({ externalModel: e }) => ({
                            fadingOutComplete: e.createCallbackNoArgs('onFadingOutComplete'),
                            fadingInComplete: e.createCallbackNoArgs('onFadingInComplete'),
                        }),
                    ),
                    Ee = ye[0],
                    xe = ye[1],
                    Oe = 'FadingCoverViewApp_base_a2',
                    Pe = 'FadingCoverViewApp_base__visible_7c',
                    Se = 'FadingCoverViewApp_background_86',
                    Ce = (e) => {
                        if (!e) return {};
                        const n = fe.view.getViewGlobalPosition().y;
                        return { backgroundImage: `url(${e})`, top: `-${n}rem`, bottom: `${n}rem` };
                    },
                    Te = (0, ge.Pi)(() => {
                        const e = xe(),
                            n = e.model,
                            t = e.controls,
                            r = n.get(),
                            o = r.background,
                            i = r.fadeInDuration,
                            a = r.fadeOutDuration,
                            l = r.isVisible,
                            c = t.fadingInComplete,
                            d = t.fadingOutComplete,
                            f = (0, s.useState)(!1),
                            g = f[0],
                            m = f[1];
                        return (
                            (0, s.useEffect)(() => {
                                const e = setTimeout(
                                    () => {
                                        l ? d() : c();
                                    },
                                    1e3 * (l ? i : a),
                                );
                                return m(l), () => clearTimeout(e);
                            }, [c, d, l, i, a]),
                            u().createElement(
                                'div',
                                { className: v()(Oe, g && Pe), style: { transitionDuration: `${l ? i : a}s` } },
                                u().createElement('div', { className: Se, style: Ce(o) }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    c().render(
                        u().createElement(Ee, null, u().createElement(Te, null)),
                        document.getElementById('root'),
                    );
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
        return n[e](i, i.exports, r), i.exports;
    }
    (r.m = n),
        (e = []),
        (r.O = (n, t, o, i) => {
            if (!t) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [t, o, i] = e[c], s = !0, u = 0; u < t.length; u++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var l = o();
                        void 0 !== l && (n = l);
                    }
                }
                return n;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [t, o, i];
        }),
        (r.n = (e) => {
            var n = e && e.__esModule ? () => e.default : () => e;
            return r.d(n, { a: n }), n;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 564),
        (() => {
            var e = { 564: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, u] = t,
                        l = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (u) var c = u(r);
                    }
                    for (n && n(t); l < a.length; l++) (i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return r.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
        })();
    var o = r.O(void 0, [490], () => r(504));
    o = r.O(o);
})();
