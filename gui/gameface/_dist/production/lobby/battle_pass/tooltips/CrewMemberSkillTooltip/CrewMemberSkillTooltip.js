(() => {
    'use strict';
    var e,
        t = {
            1581: (e, t, n) => {
                var r = {};
                (n.r(r),
                    n.d(r, {
                        mouse: () => y,
                        off: () => h,
                        on: () => w,
                        onMinimize: () => b,
                        onResize: () => g,
                        onScaleUpdated: () => p,
                    }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => k,
                        getSize: () => _,
                        graphicsQuality: () => S,
                        playSound: () => P,
                        setRTPC: () => x,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => D, getTextureUrl: () => L }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => X,
                        addPreloadTexture: () => q,
                        arabic2roman: () => ve,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => me,
                        enableFullScreenModeSupported: () => be,
                        events: () => I,
                        extraSize: () => ge,
                        forceTriggerMouseMove: () => ce,
                        freezeTextureBeforeResize: () => te,
                        getBrowserTexturePath: () => Q,
                        getDisplayStatus: () => ue,
                        getExternalPaddingsRem: () => fe,
                        getFontNames: () => de,
                        getScale: () => ne,
                        getSize: () => K,
                        getViewGlobalPosition: () => ee,
                        initExternalPaddings: () => we,
                        isEventHandled: () => le,
                        isFocused: () => ae,
                        pxToRem: () => re,
                        remToPx: () => oe,
                        resize: () => Y,
                        sendEvent: () => H,
                        setAnimateWindow: () => ie,
                        setEventHandled: () => se,
                        setInputPaddingsRem: () => W,
                        setSidePaddingsRem: () => J,
                        whenTutorialReady: () => pe,
                    }));
                var s = n(7363),
                    l = n.n(s),
                    c = n(1533),
                    u = n.n(c),
                    d = n(9849),
                    v = n.n(d);
                function f(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function m(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const g = f('clientResized'),
                    p = f('self.onScaleUpdated'),
                    b = f('clientMinimized'),
                    w = (e, t) => engine.on(e, t),
                    h = (e, t) => engine.off(e, t),
                    E = { down: f('mousedown'), up: f('mouseup'), move: f('mousemove') };
                const y = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && m(!1);
                    }
                    function n() {
                        e.enabled && m(!0);
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
                            : m(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        a = E[t]((e) => n([e, 'outside']));
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
                            e.enabled && m(!0);
                        },
                        disableOutside() {
                            e.enabled && m(!1);
                        },
                    });
                })();
                function P(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function x(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const S = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    O = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    T = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    z = Object.keys(T).reduce((e, t) => ((e[t] = () => P(T[t])), e), {}),
                    C = { play: Object.assign({}, z, { sound: P }), setRTPC: x },
                    M = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    N = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function j(e) {
                    let t = '';
                    for (let n = N.length - 1; n >= 0; n--) for (; e >= N[n];) ((t += M[n]), (e -= N[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function L(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function D(e, t, n) {
                    return `url(${L(e, t, n)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    I = {
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
                    V = ['args'];
                const B = 2,
                    F = 16,
                    $ = 32,
                    G = 64,
                    U = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== t.indexOf(r)) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
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
                    H = {
                        close(e) {
                            U('popover' === e ? B : $);
                        },
                        minimize() {
                            U(G);
                        },
                        move(e) {
                            U(F, { isMouseEvent: !0, on: e });
                        },
                    },
                    Z = 15;
                function q(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function W(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, Z);
                }
                function Q(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function X(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function J(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, Z);
                }
                function K(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function Y(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function ee(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: oe(t.x), y: oe(t.y) };
                }
                function te() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function ne() {
                    return viewEnv.getScale();
                }
                function re(e) {
                    return viewEnv.pxToRem(e);
                }
                function oe(e) {
                    return viewEnv.remToPx(e);
                }
                function ie(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function ae() {
                    return viewEnv.isFocused();
                }
                function se() {
                    return viewEnv.setEventHandled();
                }
                function le() {
                    return viewEnv.isEventHandled();
                }
                function ce() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ue() {
                    return viewEnv.getShowingStatus();
                }
                const de = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ve = j;
                function fe() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const me = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ge = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    pe = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : I.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function be() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function we(e) {
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
                const he = { view: a, client: o, sound: C, intl: O };
                const Ee = {
                        base: 'TooltipDecorator_base_bf61f',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_bf8f8',
                        decorator: 'TooltipDecorator_decorator_f4de8',
                    },
                    ye = ['children', 'className', 'theme'];
                function Pe() {
                    return (
                        (Pe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Pe.apply(null, arguments)
                    );
                }
                const xe = l().forwardRef(function (e, t) {
                    let n = e.children,
                        r = e.className,
                        o = e.theme,
                        i = void 0 === o ? 'default' : o,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== t.indexOf(r)) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, ye);
                    const c = l().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            const e = c.current;
                            if (!e)
                                return void console.warn(
                                    'Uncexpected to have base div as not setup in ref to calculate and invoke resize',
                                );
                            const t = new ResizeObserver(() => {
                                const t = e.scrollWidth,
                                    n = e.scrollHeight;
                                he.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                he.view.setSidePaddingsRem({
                                    left: parseInt(r.getPropertyValue('padding-left'), 10),
                                    top: parseInt(r.getPropertyValue('padding-top'), 10),
                                    right: parseInt(r.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(r.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                            return (t.observe(e), t.disconnect);
                        }),
                        (0, s.useEffect)(u, []),
                        l().createElement(
                            'div',
                            Pe({}, a, {
                                className: v()(Ee.base, Ee[`base__theme-${i}`], r),
                                ref: function (e) {
                                    ((c.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                },
                            }),
                            l().createElement('div', { className: Ee.decorator }, n),
                        )
                    );
                });
                var _e = n(2041);
                const ke = function () {};
                function Se() {
                    return !1;
                }
                console.log;
                var Re = n(3305);
                function Oe(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return Te(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? Te(e, t)
                                          : void 0
                                );
                            }
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
                function Te(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ze = (e) => (0 === e ? window : window.subViews.get(e));
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
                                                getRoot: n = ze,
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
                                                            l = he.view.addModelObserver(s, t, !0);
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
                                                        for (var e, n = Oe(o.keys()); !(e = n()).done;) i(e.value, t);
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
                                                            r = Re.LO.box(t, { equals: Se });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Re.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    array: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = Re.LO.box(r, { equals: Se });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Re.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : l(e),
                                                            o = Re.LO.box(r, { equals: Se });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, Re.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = l(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = Re.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Re.aD)((t) => {
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
                                                                    (e, [t, n]) => ((e[n] = Re.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, Re.aD)((e) => {
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
                                            v = { mode: n, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && o ? o.controls(v) : t(v),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    d = (0, s.useRef)(!1),
                                    v = (0, s.useState)(r),
                                    f = v[0],
                                    m = v[1],
                                    g = (0, s.useState)(() => u(r, o, a)),
                                    p = g[0],
                                    b = g[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        d.current ? b(u(f, o, a)) : (d.current = !0);
                                    }, [a, f, o]),
                                    (0, s.useEffect)(() => {
                                        m(r);
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
                    })(({ observableModel: e }) => ({ root: e.object() }), ke),
                    Me = Ce[0],
                    Ne = Ce[1],
                    je = 'TextBlock_base_deb56',
                    Le = ({ text: e, className: t = '' }) => l().createElement('div', { className: v()(je, t) }, e),
                    De = 'Divider_base_e7842',
                    Ae = () => l().createElement('div', { className: De }),
                    Ie = 'NewPerk_base_b043a',
                    Ve = 'NewPerk_textWrapper_f1f26',
                    Be = 'NewPerk_text_ca862',
                    Fe = 'NewPerk_icon_d7b3f',
                    $e = 'Title_base_fa23c',
                    Ge = ({ text: e, children: t }) =>
                        l().createElement('div', { className: $e }, t, l().createElement('div', null, e)),
                    Ue = R.strings.tooltips.skill,
                    He = ({ hasZeroPerk: e, isZero: t }) =>
                        l().createElement(
                            'div',
                            { className: Ie },
                            l().createElement(
                                'div',
                                null,
                                t
                                    ? l().createElement(
                                          l().Fragment,
                                          null,
                                          l().createElement(
                                              Ge,
                                              { text: Ue.newPerk.zeroPerk.title() },
                                              l().createElement('div', { className: Fe }),
                                          ),
                                          l().createElement(
                                              'div',
                                              { className: Ve },
                                              l().createElement(Ae, null),
                                              l().createElement(Le, {
                                                  text: Ue.newPerk.zeroPerk.text(),
                                                  className: Be,
                                              }),
                                              l().createElement(Ae, null),
                                          ),
                                      )
                                    : l().createElement(
                                          l().Fragment,
                                          null,
                                          l().createElement(Ge, { text: Ue.newPerk.perk.title() }),
                                          e && l().createElement(Le, { text: Ue.newPerk.perk.text(), className: Be }),
                                      ),
                            ),
                        ),
                    Ze = 'SpecificPerk_base_fa618',
                    qe = 'SpecificPerk_title_efeab',
                    We = 'SpecificPerk_titleTexts_d6b6f',
                    Qe = 'SpecificPerk_subtitle_ffc3e',
                    Xe = 'SpecificPerk_specificIcon_a3485',
                    Je = 'SpecificPerk_zeroPerkIcon_a13db',
                    Ke = R.strings.tooltips,
                    Ye = ({ isZero: e, name: t }) =>
                        l().createElement(
                            'div',
                            { className: Ze },
                            l().createElement(
                                'div',
                                { className: qe },
                                l().createElement('div', {
                                    className: Xe,
                                    style: {
                                        backgroundImage: `url('R.images.gui.maps.icons.battlePass.tankman.perks.icon_perk_${t}')`,
                                    },
                                }),
                                l().createElement(
                                    'div',
                                    { className: We },
                                    l().createElement('div', null, Ke.skill.name.$dyn(t)),
                                    l().createElement(Le, { text: Ke.perkType.name.common() }),
                                ),
                            ),
                            e &&
                                l().createElement(
                                    'div',
                                    { className: Qe },
                                    l().createElement('div', { className: Je }),
                                    l().createElement(Le, { text: Ke.perks.zeroPerkInfo() }),
                                ),
                        ),
                    et = 'App_base_f422c',
                    tt = (0, _e.Pi)(() => {
                        const e = Ne().model.root.get(),
                            t = e.name,
                            n = e.isZero,
                            r = e.hasZeroPerk,
                            o = 'new_skill' !== t;
                        return l().createElement(
                            xe,
                            null,
                            l().createElement(
                                'div',
                                { className: et },
                                o
                                    ? l().createElement(Ye, { isZero: n, name: t })
                                    : l().createElement(He, { isZero: n, hasZeroPerk: r }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    u().render(
                        l().createElement(Me, null, l().createElement(tt, null)),
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
    var o = r.O(void 0, [1519], () => r(1581));
    o = r.O(o);
})();
