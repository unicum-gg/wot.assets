(() => {
    'use strict';
    var e,
        t = {
            8211: (e, t, n) => {
                var r = {};
                (n.r(r), n.d(r, { mouse: () => b, onResize: () => g }));
                var o = {};
                (n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => y,
                        getSize: () => w,
                        graphicsQuality: () => E,
                    }));
                var i = {};
                (n.r(i), n.d(i, { getBgUrl: () => _, getTextureUrl: () => h }));
                var a = {};
                (n.r(a),
                    n.d(a, {
                        addModelObserver: () => k,
                        addPreloadTexture: () => C,
                        children: () => i,
                        displayStatus: () => x,
                        displayStatusIs: () => Q,
                        events: () => D,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => q,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => U,
                        getScale: () => V,
                        getSize: () => z,
                        getViewGlobalPosition: () => j,
                        isEventHandled: () => G,
                        isFocused: () => F,
                        pxToRem: () => L,
                        remToPx: () => $,
                        resize: () => M,
                        sendEvent: () => O,
                        setAnimateWindow: () => B,
                        setEventHandled: () => H,
                        setInputPaddingsRem: () => T,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => X,
                    }));
                var s = n(6179),
                    c = n.n(s),
                    l = n(493),
                    u = n.n(l),
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
                    p = { down: v('mousedown'), up: v('mouseup'), move: v('mousemove') },
                    b = (function () {
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
                                            a = p[t]((e) => n([e, 'outside']));
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
                };
                function h(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function _(e, t, n) {
                    return `url(${h(e, t, n)})`;
                }
                const x = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    P = ['args'],
                    S = (e, t) => {
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
                                })(t, P);
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
                    O = {
                        close(e) {
                            S('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            S(64);
                        },
                        move(e) {
                            S(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function k(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function j(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: $(t.x), y: $(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function L(e) {
                    return viewEnv.pxToRem(e);
                }
                function $(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function H() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(x).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === x[t]), e), {}),
                    W = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    X = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : D.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: a, client: o };
                const J = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    K = ['children', 'className', 'theme'];
                function Z() {
                    return (
                        (Z =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Z.apply(this, arguments)
                    );
                }
                const ee = c().forwardRef(function (e, t) {
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
                        })(e, K);
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
                                Y.view.resize(t, n);
                                const r = window.getComputedStyle(e);
                                Y.view.setSidePaddingsRem({
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
                            Z({}, a, {
                                className: m()(J.base, J[`base__theme-${i}`], r),
                                ref: function (e) {
                                    ((u.current = e), 'function' == typeof t ? t(e) : t && (t.current = e));
                                },
                            }),
                            c().createElement('div', { className: J.decorator }, n),
                        )
                    );
                });
                var te = n(3403);
                function ne() {
                    return !1;
                }
                console.log;
                var re = n(9174);
                function oe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ie = (e) => (0 === e ? window : window.subViews.get(e)),
                    ae = ((e, t) => {
                        const n = (0, s.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: t, children: r, mocks: o }) {
                                const i = (0, s.useRef)([]),
                                    a = (e, t, n) => {
                                        var r;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ie,
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
                                                            c = Y.view.addModelObserver(s, t, !0);
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
                                                                                    return oe(e, t);
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
                                                                                          ? oe(e, t)
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
                                            })(t),
                                            a =
                                                'real' === e
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : a.readByPath(t),
                                            c = (e) => i.current.push(e),
                                            l = (({ observableModel: e }) => {
                                                const t = { root: e.object() };
                                                return Object.assign({}, t);
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            o = re.LO.box(r, { equals: ne });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, re.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : s(t),
                                                            o = re.LO.box(r, { equals: ne });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, re.aD)((e) => o.set(e)),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = s(n);
                                                        if (Array.isArray(t)) {
                                                            const o = t.reduce(
                                                                (e, t) => ((e[t] = re.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, re.aD)((e) => {
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
                                                                s = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = re.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, re.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            u = { mode: e, model: l, externalModel: a, cleanup: c };
                                        return {
                                            model: l,
                                            controls: 'mocks' === e && n ? n.controls(u) : {},
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    l = (0, s.useRef)(!1),
                                    u = (0, s.useState)(e),
                                    d = u[0],
                                    m = u[1],
                                    v = (0, s.useState)(() => a(e, t, o)),
                                    f = v[0],
                                    g = v[1];
                                return (
                                    (0, s.useEffect)(() => {
                                        l.current ? g(a(d, t, o)) : (l.current = !0);
                                    }, [o, d, t]),
                                    (0, s.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, s.useEffect)(
                                        () => () => {
                                            (f.externalModel.dispose(), i.current.forEach((e) => e()));
                                        },
                                        [f],
                                    ),
                                    c().createElement(n.Provider, { value: f }, r)
                                );
                            },
                            () => (0, s.useContext)(n),
                        ];
                    })(),
                    se = ae[0],
                    ce = ae[1],
                    le = R.strings.ny,
                    ue = ({ name: e, setting: t, rank: n }) => {
                        const r = (0, s.useMemo)(() => {
                                const e = t
                                    ? R.images.new_year.gui.maps.icons.newYear.collection_types.tooltip.$dyn(t)
                                    : '';
                                return { backgroundImage: e ? `url(${e})` : '' };
                            }, [t]),
                            o = (0, s.useMemo)(() => {
                                const e = n
                                    ? `R.images.new_year.gui.maps.icons.newYear.tooltips.decorations.rank${n}`
                                    : '';
                                return { backgroundImage: e ? `url(${e})` : '' };
                            }, [n]);
                        return c().createElement(
                            'div',
                            { className: 'DecorationHeader_base_0a' },
                            c().createElement('div', { className: 'DecorationHeader_rank_27', style: o }),
                            c().createElement('div', { className: 'DecorationHeader_icon_e7', style: r }),
                            c().createElement(
                                'div',
                                { className: 'DecorationHeader_title_b8' },
                                c().createElement('div', { className: 'DecorationHeader_name_c6' }, e),
                                c().createElement(
                                    'div',
                                    { className: 'DecorationHeader_setting_20' },
                                    t ? le.styleRewardView.$dyn(`${t}_ny24`) : t,
                                ),
                            ),
                        );
                    },
                    de = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    me = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    ve = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    fe = 'Conditions_separator_e4',
                    ge = R.strings.ny.album.tooltipDecoration,
                    pe = ({ isInCollection: e }) => {
                        const t = e
                            ? [{ title: 'title3', list: ['info1', 'info2', 'info3'] }]
                            : [
                                  { title: 'title1', list: ['condition1', 'condition2', 'condition3'] },
                                  { title: 'title2', list: ['condition4'] },
                              ];
                        return c().createElement(
                            'div',
                            { className: 'Conditions_base_d8' },
                            c().createElement('div', { className: fe }),
                            c().createElement(
                                'div',
                                { className: 'Conditions_wrapper_93' },
                                t.map(({ title: e, list: t }, n) =>
                                    c().createElement(
                                        'div',
                                        { key: n },
                                        c().createElement('div', { className: 'Conditions_title_43' }, ge.$dyn(e)),
                                        c().createElement(
                                            'div',
                                            { className: 'Conditions_list_f6' },
                                            t.map((e, t) =>
                                                c().createElement(
                                                    'div',
                                                    { key: t, className: 'Conditions_item_f4' },
                                                    c().createElement('div', { className: 'Conditions_point_35' }),
                                                    ge.$dyn(e),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            c().createElement('div', { className: fe }),
                        );
                    },
                    be = 'DecorationInfo_item_b2',
                    we = 'DecorationInfo_value_52',
                    ye = 'DecorationInfo_text_81',
                    Ee = R.strings.ny,
                    he = ({ description: e, count: t = 0, type: n, rank: r, isInCollection: o }) => {
                        const i = {
                                backgroundImage: n
                                    ? `url(R.images.new_year.gui.maps.icons.newYear.decoration_types.common.${n})`
                                    : '',
                            },
                            a = Ee.decorationSlot.tooltip.rank();
                        return c().createElement(
                            'div',
                            { className: 'DecorationInfo_base_f4' },
                            c().createElement(
                                'div',
                                {
                                    className: m()(
                                        'DecorationInfo_description_26',
                                        t > 1 && 'DecorationInfo_description__group_78',
                                    ),
                                },
                                e || '',
                            ),
                            c().createElement(
                                'div',
                                { className: 'DecorationInfo_list_50' },
                                c().createElement(
                                    'div',
                                    { className: be },
                                    c().createElement(
                                        'div',
                                        { className: we },
                                        c().createElement('div', { className: 'DecorationInfo_type_1e', style: i }),
                                    ),
                                    c().createElement('div', { className: ye }, n && Ee.decorationTypes.$dyn(n)),
                                ),
                                c().createElement(
                                    'div',
                                    { className: be },
                                    c().createElement(
                                        'div',
                                        { className: we },
                                        ((s = r),
                                        ve
                                            ? `${s}`
                                            : (function (e) {
                                                  let t = '';
                                                  for (let n = me.length - 1; n >= 0; n--)
                                                      for (; e >= me[n]; ) ((t += de[n]), (e -= me[n]));
                                                  return t;
                                              })(s)),
                                    ),
                                    c().createElement(
                                        'div',
                                        { className: 'DecorationInfo_listDescription_9c' },
                                        c().createElement('div', { className: ye }, a),
                                    ),
                                ),
                            ),
                            c().createElement(pe, { isInCollection: o }),
                        );
                        var s;
                    },
                    _e = R.strings.ny,
                    xe = ({ isInCollection: e }) =>
                        c().createElement(
                            'div',
                            { className: 'DecorationStatus_base_4e' },
                            e && c().createElement('div', { className: 'DecorationStatus_check_6b' }),
                            c().createElement(
                                'div',
                                {
                                    className: m()(
                                        'DecorationStatus_status_d5',
                                        e && 'DecorationStatus_status__received_6a',
                                    ),
                                },
                                e ? _e.album.tooltipDecoration.received() : _e.album.tooltipDecoration.notReceived(),
                            ),
                        ),
                    Re = (0, te.Pi)(() => {
                        const e = ce().model.root.get(),
                            t = e.name,
                            n = e.setting,
                            r = e.icon,
                            o = e.description,
                            i = e.type,
                            a = e.count,
                            s = e.rankNumber,
                            l = e.isInCollection;
                        return c().createElement(
                            ee,
                            null,
                            c().createElement(
                                'div',
                                { className: 'App_base_c1' },
                                c().createElement(ue, { name: t, setting: n, rank: s }),
                                c().createElement(he, {
                                    icon: r,
                                    description: o,
                                    count: a,
                                    type: i,
                                    rank: s,
                                    isInCollection: l,
                                }),
                                c().createElement(xe, { isInCollection: l }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    u().render(
                        c().createElement(se, null, c().createElement(Re, null)),
                        document.getElementById('root'),
                    );
                });
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
        (r.j = 3548),
        (() => {
            var e = { 3548: 0 };
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
    var o = r.O(void 0, [4503], () => r(8211));
    o = r.O(o);
})();
