(() => {
    'use strict';
    var e,
        n = {
            4965: (e, n, t) => {
                var o = {};
                (t.r(o),
                    t.d(o, { mouse: () => g, off: () => f, on: () => m, onResize: () => d, onScaleUpdated: () => v }));
                var r = {};
                (t.r(r),
                    t.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => y,
                        getSize: () => w,
                        graphicsQuality: () => E,
                        playSound: () => b,
                        setRTPC: () => h,
                    }));
                var i = {};
                (t.r(i), t.d(i, { getBgUrl: () => k, getTextureUrl: () => S }));
                var a = {};
                (t.r(a),
                    t.d(a, {
                        addModelObserver: () => $,
                        addPreloadTexture: () => F,
                        arabic2roman: () => ie,
                        children: () => i,
                        displayStatus: () => A,
                        displayStatusIs: () => ae,
                        events: () => j,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => te,
                        freezeTextureBeforeResize: () => Q,
                        getBrowserTexturePath: () => G,
                        getDisplayStatus: () => oe,
                        getFontNames: () => re,
                        getScale: () => X,
                        getSize: () => U,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => ne,
                        isFocused: () => Z,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => q,
                        sendEvent: () => V,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => le,
                    }));
                var s = t(6483),
                    l = t.n(s);
                function c(e) {
                    return (n) => (
                        engine.on(e, n),
                        () => {
                            engine.off(e, n);
                        }
                    );
                }
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const d = c('clientResized'),
                    v = c('self.onScaleUpdated'),
                    m = (e, n) => engine.on(e, n),
                    f = (e, n) => engine.off(e, n),
                    p = { down: c('mousedown'), up: c('mouseup'), move: c('mousemove') };
                const g = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function n() {
                        e.enabled && u(!1);
                    }
                    function t() {
                        e.enabled && u(!0);
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
                            : u(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (n, t) => (
                            (n[t] = (function (n) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${n}`,
                                        a = p[n]((e) => t([e, 'outside']));
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
                            e.enabled && u(!0);
                        },
                        disableOutside() {
                            e.enabled && u(!1);
                        },
                    });
                })();
                function b(e) {
                    engine.call('PlaySound', e).catch((n) => {
                        console.error(`playSound('${e}'): `, n);
                    });
                }
                function h(e, n) {
                    engine.call('SetRTPCGlobal', e, n).catch((t) => {
                        console.error(`setRTPC('${e}', '${n}'): `, t);
                    });
                }
                function w(e = 'px') {
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
                    _ = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    T = Object.keys(_).reduce((e, n) => ((e[n] = () => b(_[n])), e), {}),
                    x = { play: Object.assign({}, T, { sound: b }), setRTPC: h },
                    P = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    O = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function C(e) {
                    let n = '';
                    for (let t = O.length - 1; t >= 0; t--) for (; e >= O[t]; ) ((n += P[t]), (e -= O[t]));
                    return n;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                function S(e, n, t = 1) {
                    return viewEnv.getChildTexturePath(e, n.width, n.height, t);
                }
                function k(e, n, t) {
                    return `url(${S(e, n, t)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    j = {
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
                    L = 16,
                    B = 32,
                    N = 64,
                    D = (e, n) => {
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
                                })(n, M);
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
                    V = {
                        close(e) {
                            D('popover' === e ? z : B);
                        },
                        minimize() {
                            D(N);
                        },
                        move(e) {
                            D(L, { isMouseEvent: !0, on: e });
                        },
                    };
                function F(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function G(e, n, t, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, n, t, o);
                }
                function $(e, n, t) {
                    return viewEnv.addDataChangedCallback(e, n, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function q(e, n, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, n) : viewEnv.resizeViewPx(e, n);
                }
                function W(e = 'rem') {
                    const n = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? n : { x: K(n.x), y: K(n.y) };
                }
                function Q() {
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
                function Y(e, n) {
                    viewEnv.setAnimateWindow(e, n);
                }
                function Z() {
                    return viewEnv.isFocused();
                }
                function ee() {
                    return viewEnv.setEventHandled();
                }
                function ne() {
                    return viewEnv.isEventHandled();
                }
                function te() {
                    viewEnv.forceTriggerMouseMove();
                }
                function oe() {
                    return viewEnv.getShowingStatus();
                }
                const re = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ie = C,
                    ae = Object.keys(A).reduce((e, n) => ((e[n] = () => viewEnv.getShowingStatus() === A[n]), e), {}),
                    se = {
                        set: (e, n) => {
                            viewEnv.setExtraSizeRem(e, n);
                        },
                        get: (e, n) => {
                            viewEnv.getExtraSizeRem(e, n);
                        },
                    },
                    le = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : j.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ce = { view: a, client: r, sound: x };
                var ue = t(7363),
                    de = t.n(ue);
                function ve() {
                    const e = (0, ue.useRef)(0);
                    var n;
                    return (
                        (n = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, ue.useEffect)(() => n, []),
                        (0, ue.useMemo)(
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
                const me = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    fe = ['children', 'className', 'theme'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const ge = de().forwardRef(function (e, n) {
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
                        })(e, fe);
                    const s = ve(),
                        c = de().useRef(null);
                    var u;
                    return (
                        (u = () => {
                            s.run(() => {
                                const e = c.current;
                                if (!e) return;
                                const n = e.scrollWidth,
                                    t = e.scrollHeight;
                                ce.view.resize(n, t);
                                const o = window.getComputedStyle(e);
                                ce.view.setSidePaddingsRem({
                                    left: parseInt(o.getPropertyValue('padding-left'), 10),
                                    top: parseInt(o.getPropertyValue('padding-top'), 10),
                                    right: parseInt(o.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(o.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, ue.useEffect)(u, []),
                        de().createElement(
                            'div',
                            pe({}, a, {
                                className: l()(me.base, me[`base__theme-${i}`], o),
                                ref: function (e) {
                                    ((c.current = e), 'function' == typeof n ? n(e) : n && (n.current = e));
                                },
                            }),
                            de().createElement('div', { className: me.decorator }, t),
                        )
                    );
                });
                var be = t(1533),
                    he = t.n(be);
                var we = t(3403);
                function ye() {}
                function Ee() {
                    return !1;
                }
                console.log;
                var _e = t(9174);
                function Te(e, n) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, n) {
                            if (!e) return;
                            if ('string' == typeof e) return xe(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return xe(e, n);
                        })(e)) ||
                        (n && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function xe(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
                    return o;
                }
                const Pe = (e) => (0 === e ? window : window.subViews.get(e));
                const Oe = ((e, n) => {
                        const t = (0, ue.createContext)({});
                        return [
                            function ({ mode: o = 'real', options: r, children: i, mocks: a }) {
                                const s = (0, ue.useRef)([]),
                                    l = (t, o, r) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: n = 0,
                                                getRoot: t = Pe,
                                                context: o = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function i(e, n = 0) {
                                                    viewEnv.removeDataChangedCallback(e, n)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, n, t) => {
                                                        t.forEach((n) => {
                                                            const t = r.get(n);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const r = t(n),
                                                        i = o.split('.').reduce((e, n) => e[n], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, n) => {
                                                              const t = e[n];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (t, i) => {
                                                        const s = 'string' == typeof i ? `${o}.${i}` : o,
                                                            l = ce.view.addModelObserver(s, n, !0);
                                                        return (r.set(l, t), e && t(a(i)), l);
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
                                                        for (var e, t = Te(r.keys()); !(e = t()).done; ) i(e.value, n);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(o),
                                            l =
                                                'real' === t
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == r ? void 0 : r.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : l.readByPath(e),
                                            u = (e) => s.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, n) => {
                                                        const o = null != n ? n : c(e),
                                                            r = _e.LO.box(o, { equals: Ee });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, _e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, n) => {
                                                        const o = null != n ? n : c(e),
                                                            r = _e.LO.box(o, { equals: Ee });
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, _e.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, n) => {
                                                        const o = c(n);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, n) => ((e[n] = _e.LO.box(o[n], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, _e.aD)((n) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(n[e]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                i = Object.entries(r),
                                                                a = i.reduce(
                                                                    (e, [n, t]) => ((e[t] = _e.LO.box(o[n], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    l.subscribe(
                                                                        (0, _e.aD)((e) => {
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
                                                cleanup: u,
                                            }),
                                            v = { mode: t, model: d, externalModel: l, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(v) : n(v),
                                            externalModel: l,
                                            mode: t,
                                        };
                                    },
                                    c = (0, ue.useRef)(!1),
                                    u = (0, ue.useState)(o),
                                    d = u[0],
                                    v = u[1],
                                    m = (0, ue.useState)(() => l(o, r, a)),
                                    f = m[0],
                                    p = m[1];
                                return (
                                    (0, ue.useEffect)(() => {
                                        c.current ? p(l(d, r, a)) : (c.current = !0);
                                    }, [a, d, r]),
                                    (0, ue.useEffect)(() => {
                                        v(o);
                                    }, [o]),
                                    (0, ue.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), s.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    de().createElement(t.Provider, { value: f }, i)
                                );
                            },
                            () => (0, ue.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) =>
                            Object.assign({}, e.primitives(['title', 'description']), {
                                booksList: e.array('booksList'),
                            }),
                        ye,
                    ),
                    Ce = Oe[0],
                    Re = Oe[1],
                    Se = 'ConversionTooltipBook_base_cb',
                    ke = 'ConversionTooltipBook_icon_a6',
                    Ae = 'ConversionTooltipBook_labelsBlock_a9',
                    je = 'ConversionTooltipBook_titleLabel_64',
                    Me = 'ConversionTooltipBook_bottomLabels_b0',
                    ze = 'ConversionTooltipBook_nationLabel_e2',
                    Le = 'ConversionTooltipBook_valueLabel_90',
                    Be = ({ icon: e, title: n, nation: t, value: o, className: r }) =>
                        de().createElement(
                            'div',
                            { className: l()(Se, r) },
                            de().createElement('div', {
                                className: ke,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.small.$dyn(e)})`,
                                },
                            }),
                            de().createElement(
                                'div',
                                { className: Ae },
                                de().createElement('div', { className: je }, n),
                                de().createElement(
                                    'div',
                                    { className: Me },
                                    de().createElement('div', { className: ze }, t),
                                    de().createElement('div', { className: Le }, R.strings.common.multiplier()),
                                    de().createElement('div', { className: Le }, o),
                                ),
                            ),
                        ),
                    Ne = 'ConversionTooltipApp_base_ff',
                    De = 'ConversionTooltipApp_base__wide_4c',
                    Ve = 'ConversionTooltipApp_header_22',
                    Fe = 'ConversionTooltipApp_body_5a',
                    Ie = 'ConversionTooltipApp_books_32',
                    Ge = 'ConversionTooltipApp_bookWrapper_3f',
                    $e = 'ConversionTooltipApp_book_a9',
                    He = 'ConversionTooltipApp_divider_61';
                function Ue() {
                    return (
                        (Ue =
                            Object.assign ||
                            function (e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var t = arguments[n];
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                }
                                return e;
                            }),
                        Ue.apply(this, arguments)
                    );
                }
                const qe = (0, we.Pi)(() => {
                    const e = Re().model,
                        n = e.booksList.get(),
                        t = n.length > 6,
                        o = t ? Math.round(n.length / 2) : n.length;
                    return de().createElement(
                        'div',
                        { className: l()(Ne, t && De) },
                        de().createElement('div', { className: Ve }, e.title.get()),
                        de().createElement('div', { className: Fe }, e.description.get()),
                        de().createElement(
                            'div',
                            { className: Ie },
                            ((r = n),
                            (i = (e, n) => {
                                const r = t && (n + 1) % 2 == 0,
                                    i = t ? Math.round((n + 1) / 2) === o : n + 1 === o;
                                return de().createElement(
                                    'div',
                                    { key: n, className: Ge },
                                    de().createElement(Be, Ue({}, e, { className: $e })),
                                    !r && !i && de().createElement('div', { className: He }),
                                );
                            }),
                            Array.isArray(r) ? r.map(i) : r.map((e, n, t) => i(null == e ? void 0 : e.value, n, t))),
                        ),
                    );
                    var r, i;
                });
                engine.whenReady.then(() => {
                    he().render(
                        de().createElement(ge, null, de().createElement(Ce, null, de().createElement(qe, null))),
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
                    for (var [t, r, i] = e[u], s = !0, l = 0; l < t.length; l++)
                        (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](t[l]))
                            ? t.splice(l--, 1)
                            : ((s = !1), i < a && (a = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = r();
                        void 0 !== c && (n = c);
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
        (o.j = 3470),
        (() => {
            var e = { 3470: 0 };
            o.O.j = (n) => 0 === e[n];
            var n = (n, t) => {
                    var r,
                        i,
                        [a, s, l] = t,
                        c = 0;
                    if (a.some((n) => 0 !== e[n])) {
                        for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                        if (l) var u = l(o);
                    }
                    for (n && n(t); c < a.length; c++) ((i = a[c]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return o.O(u);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t))));
        })());
    var r = o.O(void 0, [9056], () => o(4965));
    r = o.O(r);
})();
