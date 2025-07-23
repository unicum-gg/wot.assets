(() => {
    'use strict';
    var e,
        n = {
            132: (e, n, t) => {
                var r = {};
                (t.r(r),
                    t.d(r, { mouse: () => w, off: () => b, on: () => h, onResize: () => g, onScaleUpdated: () => f }));
                var o = {};
                (t.r(o),
                    t.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => S,
                        getSize: () => x,
                        graphicsQuality: () => P,
                        playSound: () => y,
                        setRTPC: () => E,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => j, getTextureUrl: () => z }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => q,
                        addPreloadTexture: () => N,
                        arabic2roman: () => ce,
                        children: () => i,
                        displayStatus: () => _,
                        displayStatusIs: () => ue,
                        events: () => L,
                        extraSize: () => le,
                        forceTriggerMouseMove: () => ie,
                        freezeTextureBeforeResize: () => K,
                        getBrowserTexturePath: () => U,
                        getDisplayStatus: () => ae,
                        getFontNames: () => se,
                        getScale: () => Y,
                        getSize: () => X,
                        getViewGlobalPosition: () => J,
                        isEventHandled: () => oe,
                        isFocused: () => te,
                        pxToRem: () => Z,
                        remToPx: () => ee,
                        resize: () => W,
                        sendEvent: () => F,
                        setAnimateWindow: () => ne,
                        setEventHandled: () => re,
                        setInputPaddingsRem: () => H,
                        setSidePaddingsRem: () => Q,
                        whenTutorialReady: () => de,
                    }));
                var s = t(363),
                    c = t.n(s);
                let u;
                !(function (e) {
                    ((e.bottomAlignment = 'bottomAlignment'),
                        (e.centredAndThroughContent = 'centredAndThroughContent'),
                        (e.moveContentBelow = 'moveContentBelow'));
                })(u || (u = {}));
                function l(e, n) {
                    return Array.isArray(e) ? e.map(n) : e.map((e, t, r) => n(null == e ? void 0 : e.value, t, r));
                }
                var d = t(403);
                function v(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const g = v('clientResized'),
                    f = v('self.onScaleUpdated'),
                    h = (e, n) => engine.on(e, n),
                    b = (e, n) => engine.off(e, n),
                    p = { down: v('mousedown'), up: v('mouseup'), move: v('mousemove') };
                const w = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && m(!1);
                    }
                    function t() {
                        e.enabled && m(!0);
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
                            : m(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${n}`,
                                        a = p[n]((e) => t([e, 'outside']));
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
                            e.enabled && m(!0);
                        },
                        disableOutside() {
                            e.enabled && m(!1);
                        },
                    });
                })();
                function y(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function E(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const P = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(T).reduce((e, n) => ((e[n] = () => y(T[n])), e), {}),
                    C = { play: Object.assign({}, O, { sound: y }), setRTPC: E },
                    A = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    M = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function k(e) {
                    let n = '';
                    for (let t = M.length - 1; t >= 0; t--) for (; e >= M[t]; ) ((n += A[t]), (e -= M[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function z(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function j(e, n, t) {
                    return `url(${z(e, n, t)})`;
                }
                const _ = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
                        onTextureFrozen: v('self.onTextureFrozen'),
                        onTextureReady: v('self.onTextureReady'),
                        onDomBuilt: v('self.onDomBuilt'),
                        onLoaded: v('self.onLoaded'),
                        onDisplayChanged: v('self.onShowingStatusChanged'),
                        onFocusUpdated: v('self.onFocusChanged'),
                        children: {
                            onAdded: v('children.onAdded'),
                            onLoaded: v('children.onLoaded'),
                            onRemoved: v('children.onRemoved'),
                            onAttached: v('children.onAttached'),
                            onTextureReady: v('children.onTextureReady'),
                            onRequestPosition: v('children.requestPosition'),
                        },
                    },
                    I = ['args'];
                const D = 2,
                    B = 16,
                    V = 32,
                    $ = 64,
                    G = (e, n) => {
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
                    F = {
                        close(e) {
                            G('popover' === e ? D : V);
                        },
                        minimize() {
                            G($);
                        },
                        move(e) {
                            G(B, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function U(e, n, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, r);
                }
                function q(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function Q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function J(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: ee(n.x), y: ee(n.y) };
                }
                function K() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Y() {
                    return viewEnv.getScale();
                }
                function Z(e) {
                    return viewEnv.pxToRem(e);
                }
                function ee(e) {
                    return viewEnv.remToPx(e);
                }
                function ne(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function te() {
                    return viewEnv.isFocused();
                }
                function re() {
                    return viewEnv.setEventHandled();
                }
                function oe() {
                    return viewEnv.isEventHandled();
                }
                function ie() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ae() {
                    return viewEnv.getShowingStatus();
                }
                const se = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ce = k,
                    ue = Object.keys(_).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === _[n]), e), {}),
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
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ve = { view: a, client: o, sound: C };
                function me() {}
                function ge() {
                    return !1;
                }
                console.log;
                var fe = t(174);
                function he(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return be(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return be(e, n);
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
                function be(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                const pe = (e) => (0 === e ? window : window.subViews.get(e));
                const we = ((e, n) => {
                        const t = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const u = (0, s.useRef)([]),
                                    l = (t, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = pe,
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
                                                            c = ve.view.addModelObserver(s, n, !0);
                                                        return (o.set(c, t), e && t(a(i)), c);
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
                                                        for (var e, t = he(o.keys()); !(e = t()).done; ) i(e.value, n);
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
                                            c = (e) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            l = (e) => u.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = fe.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, fe.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const r = null != n ? n : c(e),
                                                            o = fe.LO.box(r, { equals: ge });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, fe.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const r = c(n);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, n) => ((e[n] = fe.LO.box(r[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, fe.aD)((n) => {
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
                                                                    (e, [n, t]) => ((e[t] = fe.LO.box(r[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, fe.aD)((e) => {
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
                                                cleanup: l,
                                            }),
                                            v = { mode: t, model: d, externalModel: s, cleanup: l };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && o ? o.controls(v) : n(v),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    v = (0, s.useState)(r),
                                    m = v[0],
                                    g = v[1],
                                    f = (0, s.useState)(() => l(r, o, a)),
                                    h = f[0],
                                    b = f[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(l(m, o, a)) : (d.current = !0);
                                    }, [a, m, o]),
                                    (0, s.useEffect)(() => {
                                        g(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (h.externalModel.dispose(), u.current.forEach((e) => e()));
                                        },
                                        [h],
                                    ),
                                    c().createElement(t.Provider, { value: h }, i)
                                );
                            },
                            () => (0, s.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['iconPositionLogic']), {
                                icons: e.array('icons'),
                                backgrounds: e.array('backgrounds'),
                                overlays: e.array('overlays'),
                            }),
                        me,
                    ),
                    ye = we[0],
                    Ee = we[1],
                    xe = {
                        base: 'IconSetApp_base_f4',
                        mainIcon: 'IconSetApp_mainIcon_71',
                        container: 'IconSetApp_container_c8',
                        icon: 'IconSetApp_icon_32',
                    },
                    Se = (0, d.Pi)(function () {
                        const e = Ee().model,
                            n = (0, s.useState)(0),
                            t = n[0],
                            r = n[1],
                            o = e.iconPositionLogic.get(),
                            i = e.backgrounds.get(),
                            a = e.overlays.get(),
                            d = e.icons.get(),
                            v = (0, s.useCallback)((e) => {
                                r(((e) => Math.max(e, 135))(e.currentTarget.height));
                            }, []),
                            m = (() => {
                                const e = (0, s.useState)(ve.view.getScale()),
                                    n = e[0],
                                    t = e[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        const e = () => {
                                            t(ve.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    (0, s.useMemo)(() => ({ transform: `scale(${n})` }), [n])
                                );
                            })();
                        return c().createElement(
                            'div',
                            {
                                className: xe.base,
                                style: (() => {
                                    if (0 === t) return { height: 0 };
                                    switch (o) {
                                        case u.bottomAlignment:
                                            return { height: `${t}rem`, marginTop: `-${Math.round((t - 135) / 2)}rem` };
                                        case u.centredAndThroughContent:
                                            return {
                                                height: `${t}rem`,
                                                marginBottom: `-${Math.round((t - 135) / 2)}rem`,
                                            };
                                        default:
                                            return { height: `${t}rem` };
                                    }
                                })(),
                            },
                            c().createElement(
                                'div',
                                { className: xe.container },
                                l(i, (e) =>
                                    e.path
                                        ? c().createElement(
                                              'div',
                                              { key: e.path, className: xe.icon },
                                              c().createElement('img', { alt: 'bg icon', src: e.path, style: m }),
                                          )
                                        : null,
                                ),
                                c().createElement(
                                    'div',
                                    { className: xe.mainIcon },
                                    l(
                                        d,
                                        (e) =>
                                            e.path &&
                                            c().createElement(
                                                'div',
                                                { key: e.path, className: xe.iconContainer },
                                                c().createElement('img', { alt: '', src: e.path, style: m, onLoad: v }),
                                            ),
                                    ),
                                ),
                                l(a, (e) =>
                                    e.path
                                        ? c().createElement(
                                              'div',
                                              { key: e.path, className: xe.icon },
                                              c().createElement('img', { alt: 'overlay icon', src: e.path, style: m }),
                                          )
                                        : null,
                                ),
                            ),
                        );
                    });
                (0, s.memo)(function (e) {
                    const n = (0, s.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                    return c().createElement(ye, { options: n }, c().createElement(Se, null));
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
                var a = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [t, o, i] = e[l], s = !0, c = 0; c < t.length; c++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](t[c]))
                            ? t.splice(c--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(l--, 1);
                        var u = o();
                        void 0 !== u && (n = u);
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
        (r.j = 139),
        (() => {
            var e = { 139: 0 };
            r.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var o,
                        i,
                        [a, s, c] = t,
                        u = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (c) var l = c(r);
                    }
                    for (n && n(t); u < a.length; u++) ((i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var o = r.O(void 0, [573], () => r(132));
    o = r.O(o);
})();
