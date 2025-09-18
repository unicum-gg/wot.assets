(() => {
    'use strict';
    var e,
        t = {
            5559: (e, t, n) => {
                var r = {};
                (n.r(r),
                    n.d(r, { mouse: () => E, off: () => w, on: () => b, onResize: () => g, onScaleUpdated: () => p }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => _,
                        getSize: () => x,
                        graphicsQuality: () => k,
                        playSound: () => y,
                        setRTPC: () => P,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => A, getTextureUrl: () => N }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => W,
                        addPreloadTexture: () => H,
                        arabic2roman: () => ue,
                        children: () => i,
                        displayStatus: () => L,
                        displayStatusIs: () => me,
                        enableFullScreenModeSupported: () => ge,
                        events: () => D,
                        extraSize: () => ve,
                        forceTriggerMouseMove: () => se,
                        freezeTextureBeforeResize: () => Y,
                        getBrowserTexturePath: () => q,
                        getDisplayStatus: () => le,
                        getExternalPaddingsRem: () => de,
                        getFontNames: () => ce,
                        getScale: () => ee,
                        getSize: () => X,
                        getViewGlobalPosition: () => K,
                        initExternalPaddings: () => pe,
                        isEventHandled: () => ae,
                        isFocused: () => oe,
                        pxToRem: () => te,
                        remToPx: () => ne,
                        resize: () => J,
                        sendEvent: () => U,
                        setAnimateWindow: () => re,
                        setEventHandled: () => ie,
                        setInputPaddingsRem: () => Z,
                        setSidePaddingsRem: () => Q,
                        whenTutorialReady: () => fe,
                    }));
                var s = n(7363),
                    l = n.n(s),
                    c = n(1533),
                    u = n.n(c),
                    d = n(6483),
                    m = n.n(d);
                function v(e) {
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
                const g = v('clientResized'),
                    p = v('self.onScaleUpdated'),
                    b = (e, t) => engine.on(e, t),
                    w = (e, t) => engine.off(e, t),
                    h = { down: v('mousedown'), up: v('mouseup'), move: v('mousemove') };
                const E = (function () {
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
                            e.enabled && f(!0);
                        },
                        disableOutside() {
                            e.enabled && f(!1);
                        },
                    });
                })();
                function y(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function P(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function x(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const k = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    S = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    O = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    T = Object.keys(O).reduce((e, t) => ((e[t] = () => y(O[t])), e), {}),
                    C = { play: Object.assign({}, T, { sound: y }), setRTPC: P },
                    z = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    j = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function M(e) {
                    let t = '';
                    for (let n = j.length - 1; n >= 0; n--) for (; e >= j[n]; ) ((t += z[n]), (e -= j[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function N(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function A(e, t, n) {
                    return `url(${N(e, t, n)})`;
                }
                const L = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    D = {
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
                    F = ['args'];
                const I = 2,
                    V = 16,
                    B = 32,
                    $ = 64,
                    G = (e, t) => {
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
                                })(t, F);
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
                    U = {
                        close(e) {
                            G('popover' === e ? I : B);
                        },
                        minimize() {
                            G($);
                        },
                        move(e) {
                            G(V, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function Z(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function q(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function W(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function Q(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function X(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function J(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function K(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: ne(t.x), y: ne(t.y) };
                }
                function Y() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ee() {
                    return viewEnv.getScale();
                }
                function te(e) {
                    return viewEnv.pxToRem(e);
                }
                function ne(e) {
                    return viewEnv.remToPx(e);
                }
                function re(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function oe() {
                    return viewEnv.isFocused();
                }
                function ie() {
                    return viewEnv.setEventHandled();
                }
                function ae() {
                    return viewEnv.isEventHandled();
                }
                function se() {
                    viewEnv.forceTriggerMouseMove();
                }
                function le() {
                    return viewEnv.getShowingStatus();
                }
                const ce = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ue = M;
                function de() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const me = Object.keys(L).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === L[t]), e), {}),
                    ve = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    fe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : D.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ge() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function pe(e) {
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
                const be = { view: a, client: o, sound: C, intl: S };
                function we() {
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
                const he = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    Ee = ['children', 'className', 'theme'];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const Pe = l().forwardRef(function (e, t) {
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
                        })(e, Ee);
                    const c = we(),
                        u = l().useRef(null);
                    var d;
                    return (
                        (d = () => {
                            c.run(() => {
                                const e = u.current;
                                if (!e) return;
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                be.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                be.view.setSidePaddingsRem({
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
                            ye({}, a, {
                                className: m()(he.base, he[`base__theme-${i}`], r),
                                ref: function (e) {
                                    ((u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                },
                            }),
                            l().createElement('div', { className: he.decorator }, n),
                        )
                    );
                });
                var xe = n(3403);
                const _e = function () {};
                function ke() {
                    return !1;
                }
                console.log;
                var Se = n(9174);
                function Re(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Oe(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Oe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Oe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Te = (e) => (0 === e ? window : window.subViews.get(e));
                const Ce = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: o, children: i, mocks: a }) {
                                const c = (0, s.useRef)([]),
                                    u = (n, r, o) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Te,
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
                                                            l = be.view.addModelObserver(s, t, !0);
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
                                                        for (var e, n = Re(o.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == o ? void 0 : o.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            u = (e) => c.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (e) => {
                                                        const t = l(e),
                                                            r = Se.LO.box(t, { equals: ke });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Se.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = Se.LO.box(r, { equals: ke });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Se.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = Se.LO.box(r, { equals: ke });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Se.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = Se.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Se.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                i = Object.entries(o),
                                                                a = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = Se.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Se.aD)((e) => {
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
                                            m = { mode: n, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(m) : t(m),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    m = (0, s.useState)(r),
                                    v = m[0],
                                    f = m[1],
                                    g = (0, s.useState)(() => u(r, o, a)),
                                    p = g[0],
                                    b = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(u(v, o, a)) : (d.current = !0);
                                    }, [a, v, o]),
                                    (0, s.useEffect)(() => {
                                        f(r);
                                    }, [r]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), c.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    l().createElement(n.Provider, { value: p }, i)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(({ observableModel: e }) => ({ root: e.object() }), _e),
                    ze = Ce[0],
                    je = Ce[1],
                    Me = 'TextBlock_base_49',
                    Ne = ({ text: e, className: t = '' }) => l().createElement('div', { className: m()(Me, t) }, e),
                    Ae = 'Divider_base_84',
                    Le = () => l().createElement('div', { className: Ae }),
                    De = 'NewPerk_base_d6',
                    Fe = 'NewPerk_textWrapper_e4',
                    Ie = 'NewPerk_text_3e',
                    Ve = 'NewPerk_icon_28',
                    Be = 'Title_base_a3',
                    $e = ({ text: e, children: t }) =>
                        l().createElement('div', { className: Be }, t, l().createElement('div', null, e)),
                    Ge = R.strings.tooltips.skill,
                    Ue = ({ hasZeroPerk: e, isZero: t }) =>
                        l().createElement(
                            'div',
                            { className: De },
                            l().createElement(
                                'div',
                                null,
                                t
                                    ? l().createElement(
                                          l().Fragment,
                                          null,
                                          l().createElement(
                                              $e,
                                              { text: Ge.newPerk.zeroPerk.title() },
                                              l().createElement('div', { className: Ve }),
                                          ),
                                          l().createElement(
                                              'div',
                                              { className: Fe },
                                              l().createElement(Le, null),
                                              l().createElement(Ne, {
                                                  text: Ge.newPerk.zeroPerk.text(),
                                                  className: Ie,
                                              }),
                                              l().createElement(Le, null),
                                          ),
                                      )
                                    : l().createElement(
                                          l().Fragment,
                                          null,
                                          l().createElement($e, { text: Ge.newPerk.perk.title() }),
                                          e && l().createElement(Ne, { text: Ge.newPerk.perk.text(), className: Ie }),
                                      ),
                            ),
                        ),
                    He = 'SpecificPerk_base_af',
                    Ze = 'SpecificPerk_title_1a',
                    qe = 'SpecificPerk_titleTexts_8b',
                    We = 'SpecificPerk_subtitle_5c',
                    Qe = 'SpecificPerk_specificIcon_23',
                    Xe = 'SpecificPerk_zeroPerkIcon_65',
                    Je = R.strings.tooltips,
                    Ke = ({ isZero: e, name: t }) =>
                        l().createElement(
                            'div',
                            { className: He },
                            l().createElement(
                                'div',
                                { className: Ze },
                                l().createElement('div', {
                                    className: Qe,
                                    style: {
                                        backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${t}')`,
                                    },
                                }),
                                l().createElement(
                                    'div',
                                    { className: qe },
                                    l().createElement('div', null, Je.skill.name.$dyn(t)),
                                    l().createElement(Ne, { text: Je.perkType.name.common() }),
                                ),
                            ),
                            e &&
                                l().createElement(
                                    'div',
                                    { className: We },
                                    l().createElement('div', { className: Xe }),
                                    l().createElement(Ne, { text: Je.perks.zeroPerkInfo() }),
                                ),
                        ),
                    Ye = 'App_base_24',
                    et = (0, xe.Pi)(() => {
                        const e = je().model.root.get(),
                            t = e.name,
                            n = e.isZero,
                            r = e.hasZeroPerk,
                            o = 'new_skill' !== t;
                        return l().createElement(
                            Pe,
                            null,
                            l().createElement(
                                'div',
                                { className: Ye },
                                o
                                    ? l().createElement(Ke, { isZero: n, name: t })
                                    : l().createElement(Ue, { isZero: n, hasZeroPerk: r }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    u().render(
                        l().createElement(ze, null, l().createElement(et, null)),
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
                    for (var [n, o, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || a >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
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
        (r.j = 8520),
        (() => {
            var e = { 8520: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [a, s, l] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < a.length; c++) ((i = a[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var o = r.O(void 0, [1519], () => r(5559));
    o = r.O(o);
})();
