(() => {
    'use strict';
    var e,
        t = {
            568: (e, t, n) => {
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => h, off: () => w, on: () => b, onResize: () => g, onScaleUpdated: () => p }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => P,
                        getSize: () => x,
                        graphicsQuality: () => C,
                        playSound: () => E,
                        setRTPC: () => _,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => k, getTextureUrl: () => F }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => I,
                        arabic2roman: () => ie,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => se,
                        enableFullScreenModeSupported: () => ue,
                        events: () => L,
                        extraSize: () => ce,
                        forceTriggerMouseMove: () => ne,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => G,
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
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => le,
                    }));
                var s = n(363),
                    c = n.n(s),
                    l = n(533),
                    u = n.n(l),
                    d = n(483),
                    v = n.n(d);
                function m(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function f(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const g = m('clientResized'),
                    p = m('self.onScaleUpdated'),
                    b = (e, t) => engine.on(e, t),
                    w = (e, t) => engine.off(e, t),
                    y = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    h = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && f(!1);
                        }
                        function n() {
                            e.enabled && f(!0);
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
                                : f(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const i = `mouse${t}`,
                                            a = y[t]((e) => n([e, 'outside']));
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
                                e.enabled && f(!0);
                            },
                            disableOutside() {
                                e.enabled && f(!1);
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
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    T = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    S = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    O = Object.keys(S).reduce((e, t) => ((e[t] = () => E(S[t])), e), {}),
                    j = { play: Object.assign({}, O, { sound: E }), setRTPC: _ },
                    M = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    z = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function F(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function k(e, t, n) {
                    return `url(${F(e, t, n)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    L = {
                        onTextureFrozen: m('self.onTextureFrozen'),
                        onTextureReady: m('self.onTextureReady'),
                        onDomBuilt: m('self.onDomBuilt'),
                        onLoaded: m('self.onLoaded'),
                        onDisplayChanged: m('self.onShowingStatusChanged'),
                        onFocusUpdated: m('self.onFocusChanged'),
                        children: {
                            onAdded: m('children.onAdded'),
                            onLoaded: m('children.onLoaded'),
                            onRemoved: m('children.onRemoved'),
                            onAttached: m('children.onAttached'),
                            onTextureReady: m('children.onTextureReady'),
                            onRequestPosition: m('children.requestPosition'),
                        },
                    },
                    V = ['args'],
                    D = (e, t) => {
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
                                })(t, V);
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
                            D('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            D(64);
                        },
                        move(e) {
                            D(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function I(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function G(e, t, n, r = 1) {
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
                        for (let n = z.length - 1; n >= 0; n--) for (; e >= z[n];) ((t += M[n]), (e -= z[n]));
                        return t;
                    };
                function ae() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const se = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ce = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : L.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ue() {
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
                const ve = { view: a, client: o, sound: j, intl: T };
                const me = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    fe = ['children', 'className', 'theme'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const pe = c().forwardRef(function (e, t) {
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
                        })(e, fe);
                    const l = (function () {
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
                        u = c().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            l.run(() => {
                                const e = u.current;
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
                        c().createElement(
                            'div',
                            ge({}, a, {
                                className: v()(me.base, me[`base__theme-${i}`], r),
                                ref: function (e) {
                                    ((u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                },
                            }),
                            c().createElement('div', { className: me.decorator }, n),
                        )
                    );
                });
                var be = n(403);
                function we() {
                    return !1;
                }
                console.log;
                var ye = n(174);
                function he(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Ee = (e) => (0 === e ? window : window.subViews.get(e));
                var _e = n(946);
                const xe = ['credits', 'xp', 'brcoin'],
                    Pe = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const a = (0, s.useRef)([]),
                                    l = (e, n, r) => {
                                        var o;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Ee,
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
                                                            c = ve.view.addModelObserver(s, t, !0);
                                                        return (o.set(c, n), e && n(a(i)), c);
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
                                                                                    return he(e, t);
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
                                                                                          ? he(e, t)
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
                                            c = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            l = (e) => a.current.push(e),
                                            u = (({ observableModel: e }) => {
                                                const t = { root: e.object() },
                                                    n = (0, _e.Om)(() => xe.includes(t.root.get().currencyType));
                                                return Object.assign({}, t, { computes: { isPremFactor: n } });
                                            })({
                                                mode: e,
                                                readByPath: c,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const n = c(t),
                                                            r = ye.LO.box(n, { equals: we });
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
                                                        const r = null != n ? n : c(t),
                                                            o = ye.LO.box(r, { equals: we });
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
                                                        const r = null != n ? n : c(t),
                                                            o = ye.LO.box(r, { equals: we });
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
                                                        const r = c(n);
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
                                                cleanup: l,
                                            }),
                                            d = { mode: e, model: u, externalModel: s, cleanup: l };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && r ? r.controls(d) : t(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    u = (0, s.useRef)(!1),
                                    d = (0, s.useState)(e),
                                    v = d[0],
                                    m = d[1],
                                    f = (0, s.useState)(() => l(e, r, i)),
                                    g = f[0],
                                    p = f[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        u.current ? p(l(v, r, i)) : (u.current = !0);
                                    }, [i, v, r]),
                                    (0, s.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), a.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    c().createElement(n.Provider, { value: g }, o)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(0, function () {}),
                    Ce = Pe[0],
                    Re = Pe[1],
                    Te = {
                        base: 'Content_base_27',
                        separator: 'Content_separator_70',
                        whiteGradient: 'Content_whiteGradient_83',
                        title: 'Content_title_7d',
                        description: 'Content_description_aa',
                        content: 'Content_content_ed',
                        textContent: 'Content_textContent_dc',
                        icon: 'Content_icon_f9',
                        base__credits: 'Content_base__credits_03',
                        base__crystal: 'Content_base__crystal_f5',
                        base__xp: 'Content_base__xp_cb',
                        base__battlePassPoints: 'Content_base__battlePassPoints_9c',
                        base__brcoin: 'Content_base__brcoin_13',
                        base__brProgressionToken: 'Content_base__brProgressionToken_b5',
                        premiumFooter: 'Content_premiumFooter_1c',
                        premiumIcon: 'Content_premiumIcon_73',
                        premiumText: 'Content_premiumText_1b',
                    },
                    Se = R.strings.battle_royale.rewardCurrencyTooltip,
                    Oe = (0, be.Pi)(() => {
                        const e = Re().model,
                            t = e.root.get().currencyType,
                            n =
                                ((r = Se),
                                (o = t),
                                (e) =>
                                    ((e, t) => {
                                        const n = e.$dyn(t);
                                        if ('string' == typeof n) return n;
                                        throw new Error(`ReadString  ${t} is invalid `);
                                    })(
                                        ((e, t) => {
                                            const n = e.$dyn(t);
                                            if ('object' == typeof n && null !== n) return n;
                                            throw new Error(`ReadFolder ${t} is invalid `);
                                        })(r, o),
                                        e,
                                    ));
                        var r, o;
                        return c().createElement(
                            'div',
                            { className: v()(Te.base, Te[`base__${t}`]) },
                            c().createElement(
                                'div',
                                { className: Te.content },
                                c().createElement('div', { className: Te.icon }),
                                c().createElement(
                                    'div',
                                    { className: Te.textContent },
                                    c().createElement('div', { className: Te.title }, n('header')),
                                    c().createElement('div', { className: Te.description }, n('body')),
                                ),
                            ),
                            e.computes.isPremFactor() &&
                                c().createElement(
                                    'div',
                                    { className: Te.premiumFooter },
                                    c().createElement('div', { className: Te.premiumIcon }),
                                    c().createElement('div', { className: Te.premiumText }, n('premFactor')),
                                ),
                        );
                    }),
                    je = () => c().createElement(pe, null, c().createElement(Oe, null));
                engine.whenReady.then(() => {
                    u().render(
                        c().createElement(Ce, null, c().createElement(je, null)),
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
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, i] = e[u], s = !0, c = 0; c < n.length; c++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[c]))
                            ? n.splice(c--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var l = o();
                        void 0 !== l && (t = l);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
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
        (r.j = 'lobby/tooltips/RewardCurrencyTooltipView/RewardCurrencyTooltipView'),
        (() => {
            var e = { 'lobby/tooltips/RewardCurrencyTooltipView/RewardCurrencyTooltipView': 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, c] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (c) var u = c(r);
                    }
                    for (t && t(n); l < a.length; l++) ((i = a[l]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var o = r.O(void 0, ['lib/battle_royale.vendors'], () => r(568));
    o = r.O(o);
})();
