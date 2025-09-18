(() => {
    'use strict';
    var e,
        t = {
            3973: (e, t, n) => {
                var o = {};
                (n.r(o),
                    n.d(o, { mouse: () => g, off: () => f, on: () => m, onResize: () => d, onScaleUpdated: () => v }));
                var r = {};
                (n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => y,
                        getSize: () => h,
                        graphicsQuality: () => E,
                        playSound: () => b,
                        setRTPC: () => w,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => A, getTextureUrl: () => k }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => I,
                        arabic2roman: () => ae,
                        children: () => i,
                        displayStatus: () => j,
                        displayStatusIs: () => le,
                        enableFullScreenModeSupported: () => de,
                        events: () => L,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => oe,
                        freezeTextureBeforeResize: () => X,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => re,
                        getExternalPaddingsRem: () => se,
                        getFontNames: () => ie,
                        getScale: () => J,
                        getSize: () => q,
                        getViewGlobalPosition: () => Q,
                        initExternalPaddings: () => ve,
                        isEventHandled: () => ne,
                        isFocused: () => ee,
                        pxToRem: () => K,
                        remToPx: () => Y,
                        resize: () => W,
                        sendEvent: () => V,
                        setAnimateWindow: () => Z,
                        setEventHandled: () => te,
                        setInputPaddingsRem: () => $,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => ue,
                    }));
                var s = n(6483),
                    l = n.n(s);
                function c(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    v = c('self.onScaleUpdated'),
                    m = (e, t) => engine.on(e, t),
                    f = (e, t) => engine.off(e, t),
                    p = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && u(!1);
                    }
                    function n() {
                        e.enabled && u(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : u(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        a = p[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
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
                            })(n)),
                            t
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
                            e.enabled && u(!0);
                        },
                        disableOutside() {
                            e.enabled && u(!1);
                        },
                    });
                })();
                function b(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    x = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    P = Object.keys(_).reduce((e, t) => ((e[t] = () => b(_[t])), e), {}),
                    T = { play: Object.assign({}, P, { sound: b }), setRTPC: w },
                    C = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    O = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function S(e) {
                    let t = '';
                    for (let n = O.length - 1; n >= 0; n--) for (; e >= O[n]; ) ((t += C[n]), (e -= O[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function k(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function A(e, t, n) {
                    return `url(${k(e, t, n)})`;
                }
                const j = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
                        onTextureFrozen: c('self.onTextureFrozen'),
                        onTextureReady: c('self.onTextureReady'),
                        onDomBuilt: c('self.onDomBuilt'),
                        onLoaded: c('self.onLoaded'),
                        onDisplayChanged: c('self.onShowingStatusChanged'),
                        onFocusUpdated: c('self.onFocusChanged'),
                        children: {
                            onAdded: c('children.onAdded'),
                            onLoaded: c('children.onLoaded'),
                            onRemoved: c('children.onRemoved'),
                            onAttached: c('children.onAttached'),
                            onTextureReady: c('children.onTextureReady'),
                            onRequestPosition: c('children.requestPosition'),
                        },
                    },
                    M = ['args'];
                const z = 2,
                    B = 16,
                    N = 32,
                    D = 64,
                    F = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        i = Object.keys(e);
                                    for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, M);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    V = {
                        close(e) {
                            F('popover' === e ? z : N);
                        },
                        minimize() {
                            F(D);
                        },
                        move(e) {
                            F(B, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function $(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function G(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function U(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function q(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function X() {
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
                function Z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ee() {
                    return viewEnv.isFocused();
                }
                function te() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
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
                    ae = S;
                function se() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const le = Object.keys(j).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === j[t]), e), {}),
                    ce = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function de() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ve(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            o = t.right,
                            r = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${o}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const me = { view: a, client: r, sound: T, intl: x };
                var fe = n(7363),
                    pe = n.n(fe);
                function ge() {
                    const e = (0, fe.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, fe.useEffect)(() => t, []),
                        (0, fe.useMemo)(
                            () => ({
                                run: (t) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (t(), (e.current = 0));
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
                    we = ['children', 'className', 'theme'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const ye = pe().forwardRef(function (e, t) {
                    let n = e.children,
                        o = e.className,
                        r = e.theme,
                        i = void 0 === r ? 'default' : r,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                i = Object.keys(e);
                            for (o = 0; o < i.length; o++) ((n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, we);
                    const s = ge(),
                        c = pe().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                me.view.resize(t, n);
                                const o = window.getComputedStyle(e);
                                me.view.setSidePaddingsRem({
                                    left: parseInt(o.getPropertyValue('padding-left'), 10),
                                    top: parseInt(o.getPropertyValue('padding-top'), 10),
                                    right: parseInt(o.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, fe.useEffect)(u, []),
                        pe().createElement(
                            'div',
                            he({}, a, {
                                className: l()(be.base, be[`base__theme-${i}`], o),
                                ref: function (e) {
                                    ((c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                },
                            }),
                            pe().createElement('div', { className: be.decorator }, n),
                        )
                    );
                });
                var Ee = n(1533),
                    xe = n.n(Ee);
                var _e = n(3403);
                function Pe() {}
                function Te() {
                    return !1;
                }
                console.log;
                var Ce = n(9174);
                function Oe(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Re(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Re(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Re(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const Se = (e) => (0 === e ? window : window.subViews.get(e));
                const ke = ((e, t) => {
                        const n = (0, fe.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: r, children: i, mocks: a }) {
                                const s = (0, fe.useRef)([]),
                                    l = (n, o, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Se,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = r.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = n(t),
                                                        i = o.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${o}.${i}` : o,
                                                            l = me.view.addModelObserver(s, t, !0);
                                                        return (r.set(l, n), e && n(a(i)), l);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, t) => {
                                                        const n = a(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = a(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = Oe(r.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(o),
                                            l =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            u = (e) => s.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = c(e),
                                                            o = Ce.LO.box(t, { equals: Te });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Ce.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const o = null != t ? t : c(e),
                                                            r = Ce.LO.box(o, { equals: Te });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Ce.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const o = null != t ? t : c(e),
                                                            r = Ce.LO.box(o, { equals: Te });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, Ce.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const o = c(t);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, t) => ((e[t] = Ce.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Ce.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                i = Object.entries(r),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = Ce.LO.box(o[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, Ce.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            v = { mode: n, model: d, externalModel: l, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && r ? r.controls(v) : t(v),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    c = (0, fe.useRef)(!1),
                                    u = (0, fe.useState)(o),
                                    d = u[0],
                                    v = u[1],
                                    m = (0, fe.useState)(() => l(o, r, a)),
                                    f = m[0],
                                    p = m[1];
                                return (
                                    (0, fe.useEffect)(() => {
                                        c.current ? p(l(d, r, a)) : (c.current = !0);
                                    }, [a, d, r]),
                                    (0, fe.useEffect)(() => {
                                        v(o);
                                    }, [o]),
                                    (0, fe.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), s.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    pe().createElement(n.Provider, { value: f }, i)
                                );
                            },
                            () => (0, fe.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['title', 'description']), {
                                booksList: e.array('booksList'),
                            }),
                        Pe,
                    ),
                    Ae = ke[0],
                    je = ke[1],
                    Le = 'ConversionTooltipBook_base_cb',
                    Me = 'ConversionTooltipBook_icon_a6',
                    ze = 'ConversionTooltipBook_labelsBlock_a9',
                    Be = 'ConversionTooltipBook_titleLabel_64',
                    Ne = 'ConversionTooltipBook_bottomLabels_b0',
                    De = 'ConversionTooltipBook_nationLabel_e2',
                    Fe = 'ConversionTooltipBook_valueLabel_90',
                    Ve = ({ icon: e, title: t, nation: n, value: o, className: r }) =>
                        pe().createElement(
                            'div',
                            { className: l()(Le, r) },
                            pe().createElement('div', {
                                className: Me,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.small.$dyn(e)})`,
                                },
                            }),
                            pe().createElement(
                                'div',
                                { className: ze },
                                pe().createElement('div', { className: Be }, t),
                                pe().createElement(
                                    'div',
                                    { className: Ne },
                                    pe().createElement('div', { className: De }, n),
                                    pe().createElement('div', { className: Fe }, R.strings.common.multiplier()),
                                    pe().createElement('div', { className: Fe }, o),
                                ),
                            ),
                        ),
                    Ie = 'ConversionTooltipApp_base_ff',
                    $e = 'ConversionTooltipApp_base__wide_4c',
                    Ge = 'ConversionTooltipApp_header_22',
                    Ue = 'ConversionTooltipApp_body_5a',
                    He = 'ConversionTooltipApp_books_32',
                    qe = 'ConversionTooltipApp_bookWrapper_3f',
                    We = 'ConversionTooltipApp_book_a9',
                    Qe = 'ConversionTooltipApp_divider_61';
                function Xe() {
                    return (
                        (Xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Xe.apply(this, arguments)
                    );
                }
                const Je = (0, _e.Pi)(() => {
                    const e = je().model,
                        t = e.booksList.get(),
                        n = t.length > 6,
                        o = n ? Math.round(t.length / 2) : t.length;
                    return pe().createElement(
                        'div',
                        { className: l()(Ie, n && $e) },
                        pe().createElement('div', { className: Ge }, e.title.get()),
                        pe().createElement('div', { className: Ue }, e.description.get()),
                        pe().createElement(
                            'div',
                            { className: He },
                            ((r = t),
                            (i = (e, t) => {
                                const r = n && (t + 1) % 2 == 0,
                                    i = n ? Math.round((t + 1) / 2) === o : t + 1 === o;
                                return pe().createElement(
                                    'div',
                                    { key: t, className: qe },
                                    pe().createElement(Ve, Xe({}, e, { className: We })),
                                    !r && !i && pe().createElement('div', { className: Qe }),
                                );
                            }),
                            Array.isArray(r) ? r.map(i) : r.map((e, t, n) => i(null == e ? void 0 : e.value, t, n))),
                        ),
                    );
                    var r, i;
                });
                engine.whenReady.then(() => {
                    xe().render(
                        pe().createElement(ye, null, pe().createElement(Ae, null, pe().createElement(Je, null))),
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
        n = {};
    function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, o), i.exports);
    }
    ((o.m = t),
        (e = []),
        (o.O = (t, n, r, i) => {
            if (!n) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, r, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = r();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, r, i];
        }),
        (o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (o.d(t, { a: t }), t);
        }),
        (o.d = (e, t) => {
            for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (o.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (o.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (o.j = 3470),
        (() => {
            var e = { 3470: 0 };
            o.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [a, s, l] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var u = l(o);
                    }
                    for (t && t(n); c < a.length; c++) ((i = a[c]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var r = o.O(void 0, [9056], () => o(3973));
    r = o.O(r);
})();
