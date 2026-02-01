(() => {
    'use strict';
    var e,
        t = {
            169: (e, t, n) => {
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => y, off: () => w, on: () => b, onResize: () => m, onScaleUpdated: () => p }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => P,
                        getSize: () => x,
                        graphicsQuality: () => S,
                        playSound: () => E,
                        setRTPC: () => _,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => A, getTextureUrl: () => V }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => G,
                        arabic2roman: () => ie,
                        children: () => i,
                        displayStatus: () => L,
                        displayStatusIs: () => se,
                        enableFullScreenModeSupported: () => ce,
                        events: () => k,
                        extraSize: () => le,
                        forceTriggerMouseMove: () => ne,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => re,
                        getExternalPaddingsRem: () => ae,
                        getFontNames: () => oe,
                        getScale: () => X,
                        getSize: () => H,
                        getViewGlobalPosition: () => Q,
                        initExternalPaddings: () => de,
                        isEventHandled: () => te,
                        isFocused: () => Z,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => q,
                        sendEvent: () => $,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => ue,
                    }));
                var s = n(363),
                    l = n.n(s),
                    u = n(533),
                    c = n.n(u),
                    d = n(483),
                    v = n.n(d);
                function f(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function g(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const m = f('clientResized'),
                    p = f('self.onScaleUpdated'),
                    b = (e, t) => engine.on(e, t),
                    w = (e, t) => engine.off(e, t),
                    h = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') },
                    y = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && g(!1);
                        }
                        function n() {
                            e.enabled && g(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : g(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            a = h[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
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
                                })(n)),
                                t
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
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function _(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function x(e = 'px') {
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
                    C = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(T).reduce((e, t) => ((e[t] = () => E(T[t])), e), {}),
                    j = { play: Object.assign({}, O, { sound: E }), setRTPC: _ },
                    M = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    z = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function V(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function A(e, t, n) {
                    return `url(${V(e, t, n)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const L = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    D = ['args'],
                    F = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, D);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    $ = {
                        close(e) {
                            F('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            F(64);
                        },
                        move(e) {
                            F(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function G(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function B(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function Q(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: K(t.x), y: K(t.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function X() {
                    return viewEnv.getScale();
                }
                function J(e) {
                    return viewEnv.pxToRem(e);
                }
                function K(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Z() {
                    return viewEnv.isFocused();
                }
                function ee() {
                    return viewEnv.setEventHandled();
                }
                function te() {
                    return viewEnv.isEventHandled();
                }
                function ne() {
                    viewEnv.forceTriggerMouseMove();
                }
                function re() {
                    return viewEnv.getShowingStatus();
                }
                const oe = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ie = function (e) {
                        let t = '';
                        for (let n = z.length - 1; n >= 0; n--) for (; e >= z[n]; ) ((t += M[n]), (e -= z[n]));
                        return t;
                    };
                function ae() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const se = Object.keys(L).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L[t]), e), {}),
                    le = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : k.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ce() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function de(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            o = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${o}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ve = { view: a, client: o, sound: j, intl: C };
                const fe = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    ge = ['children', 'className', 'theme'];
                function me() {
                    return (
                        (me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        me.apply(this, arguments)
                    );
                }
                const pe = l().forwardRef(function (e, t) {
                        let n = e.children,
                            r = e.className,
                            o = e.theme,
                            i = void 0 === o ? 'default' : o,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                return o;
                            })(e, ge);
                        const u = (function () {
                                const e = (0, s.useRef)(0);
                                var t;
                                return (
                                    (t = () => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, s.useEffect)(() => t, []),
                                    (0, s.useMemo)(
                                        () => ({
                                            run: (t) => {
                                                (window.cancelAnimationFrame(e.current),
                                                    (e.current = window.requestAnimationFrame(() => {
                                                        e.current = window.requestAnimationFrame(() => {
                                                            ((e.current = 0), t());
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
                            })(),
                            c = l().useRef(null);
                        var d;
                        return (
                            (d = () => {
                                u.run(() => {
                                    const e = c.current;
                                    if (!e) return;
                                    const t = e.scrollWidth,
                                        n = e.scrollHeight;
                                    ve.view.resize(t, n);
                                    const r = window.getComputedStyle(e);
                                    ve.view.setSidePaddingsRem({
                                        left: parseInt(r.getPropertyValue('padding-left'), 10),
                                        top: parseInt(r.getPropertyValue('padding-top'), 10),
                                        right: parseInt(r.getPropertyValue('padding-right'), 10),
                                        bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                    });
                                });
                            }),
                            (0, s.useEffect)(d, []),
                            l().createElement(
                                'div',
                                me({}, a, {
                                    className: v()(fe.base, fe[`base__theme-${i}`], r),
                                    ref: function (e) {
                                        ((c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                    },
                                }),
                                l().createElement('div', { className: fe.decorator }, n),
                            )
                        );
                    }),
                    be = (e, t) => {
                        const n = e.$dyn(t);
                        if ('string' == typeof n) return n;
                        throw new Error(`ReadString  ${t} is invalid `);
                    };
                var we = n(403);
                function he() {
                    return !1;
                }
                console.log;
                var ye = n(174);
                function Ee(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const _e = (e) => (0 === e ? window : window.subViews.get(e)),
                    xe = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, s.useRef)([]),
                                    u = (e, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = _e,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const o = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const s = 'string' == typeof i ? `${r}.${i}` : r,
                                                            l = ve.view.addModelObserver(s, t, !0);
                                                        return (o.set(l, n), e && n(a(i)), l);
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
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Ee(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? Ee(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(o.keys());
                                                            !(e = n()).done;
                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (o = null == r ? void 0 : r.getter)
                                                                  ? o
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            u = (e) => a.current.push(e),
                                            c = (({ observableModel: e }) => e.object())({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const n = l(t),
                                                            r = ye.LO.box(n, { equals: he });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ye.aD)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            o = ye.LO.box(r, { equals: he });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ye.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            o = ye.LO.box(r, { equals: he });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, ye.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = l(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = ye.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ye.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                o[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = t,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = ye.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, ye.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                a[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            d = { mode: e, model: c, externalModel: s, cleanup: u };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    c = (0, s.useRef)(!1),
                                    d = (0, s.useState)(e),
                                    v = d[0],
                                    f = d[1],
                                    g = (0, s.useState)(() => u(e, r, i)),
                                    m = g[0],
                                    p = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        c.current ? p(u(v, r, i)) : (c.current = !0);
                                    }, [i, v, r]),
                                    (0, s.useEffect)(() => {
                                        f(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (m.externalModel.dispose(), a.current.forEach((e) => e()));
                                        },
                                        [m],
                                    ),
                                    l().createElement(n.Provider, { value: m }, o)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(0, function () {}),
                    Pe = xe[0],
                    Re = xe[1],
                    Se = {
                        base: 'Content_base_af',
                        separator: 'Content_separator_28',
                        whiteGradient: 'Content_whiteGradient_55',
                        title: 'Content_title_ed',
                        description: 'Content_description_40',
                        flag: 'Content_flag_4f',
                        status: 'Content_status_29',
                        status__info: 'Content_status__info_8c',
                        status__critical: 'Content_status__critical_52',
                        status__attention: 'Content_status__attention_ac',
                        status__warning: 'Content_status__warning_d2',
                    },
                    Ce = (0, we.Pi)(() => {
                        const e = Re().model.get(),
                            t = e.vehicleName,
                            n = e.vehicleNation,
                            r = e.statusLevel,
                            o = e.statusText;
                        return l().createElement(
                            'div',
                            { className: Se.base },
                            l().createElement('div', {
                                className: Se.flag,
                                style: { backgroundImage: `url('${be(R.images.gui.maps.icons.flags.c_160x100, n)}')` },
                            }),
                            l().createElement('div', { className: Se.title }, t),
                            l().createElement(
                                'div',
                                { className: Se.description },
                                R.strings.battle_royale.tooltips.vehicle.description(),
                            ),
                            l().createElement(
                                'div',
                                { className: Se.description },
                                be(R.strings.tooltips.battle_royale.hangar.vehicle.description, n),
                            ),
                            l().createElement('div', { className: v()(Se.status, Se && Se[`status__${r}`]) }, o),
                        );
                    }),
                    Te = () => l().createElement(pe, null, l().createElement(Ce, null));
                engine.whenReady.then(() => {
                    c().render(
                        l().createElement(Pe, null, l().createElement(Te, null)),
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
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, r), i.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var a = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    for (var [n, o, i] = e[c], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(c--, 1);
                        var u = o();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
            e[c] = [n, o, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (r.d(t, { a: t }), t);
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (r.j = 'lobby/tooltips/VehicleTooltipView/VehicleTooltipView'),
        (() => {
            var e = { 'lobby/tooltips/VehicleTooltipView/VehicleTooltipView': 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        u = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var c = l(r);
                    }
                    for (t && t(n); u < a.length; u++) ((i = a[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var o = r.O(void 0, ['lib/battle_royale.vendors'], () => r(169));
    o = r.O(o);
})();
