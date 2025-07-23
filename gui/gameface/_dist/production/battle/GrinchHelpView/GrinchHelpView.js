(() => {
    var e,
        t = {
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            953: (e, t, r) => {
                'use strict';
                var a = {};
                (r.r(a),
                    r.d(a, { mouse: () => E, off: () => w, on: () => f, onResize: () => h, onScaleUpdated: () => v }));
                var i = {};
                (r.r(i),
                    r.d(i, {
                        events: () => a,
                        getMouseGlobalPosition: () => L,
                        getSize: () => b,
                        graphicsQuality: () => H,
                        playSound: () => p,
                        setRTPC: () => S,
                    }));
                var n = {};
                (r.r(n), r.d(n, { getBgUrl: () => W, getTextureUrl: () => T }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => V,
                        addPreloadTexture: () => $,
                        children: () => n,
                        displayStatus: () => A,
                        displayStatusIs: () => re,
                        events: () => G,
                        extraSize: () => ae,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => B,
                        getBrowserTexturePath: () => C,
                        getDisplayStatus: () => ee,
                        getFontNames: () => te,
                        getScale: () => F,
                        getSize: () => k,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => Y,
                        isFocused: () => J,
                        pxToRem: () => X,
                        remToPx: () => q,
                        resize: () => N,
                        sendEvent: () => O,
                        setAnimateWindow: () => Q,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => z,
                        setSidePaddingsRem: () => j,
                        whenTutorialReady: () => ie,
                    }));
                var o = r(942),
                    s = r(601),
                    d = r.n(s);
                function u() {
                    return !1;
                }
                console.log;
                var c = r(915);
                function m(e) {
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
                const h = m('clientResized'),
                    v = m('self.onScaleUpdated'),
                    f = (e, t) => engine.on(e, t),
                    w = (e, t) => engine.off(e, t),
                    x = { down: m('mousedown'), up: m('mouseup'), move: m('mousemove') },
                    E = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && g(!1);
                        }
                        function r() {
                            e.enabled && g(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : g(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const n = `mouse${t}`,
                                            l = x[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            a(),
                                            () => {
                                                i &&
                                                    (l(),
                                                    window.removeEventListener(n, o),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
                            },
                            enableOutside() {
                                e.enabled && g(!0);
                            },
                            disableOutside() {
                                e.enabled && g(!1);
                            },
                        });
                    })();
                function p(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function S(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function L(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const H = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    y = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    M = Object.keys(y).reduce((e, t) => ((e[t] = () => p(y[t])), e), {}),
                    _ = { play: Object.assign({}, M, { sound: p }), setRTPC: S };
                function T(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function W(e, t, r) {
                    return `url(${T(e, t, r)})`;
                }
                const A = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    G = {
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
                    P = ['args'],
                    I = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            r[a] = e[a];
                                        }
                                    return r;
                                })(t, P);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, n, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    O = {
                        close(e) {
                            I('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            I(64);
                        },
                        move(e) {
                            I(16, { isMouseEvent: !0, on: e });
                        },
                    },
                    D = 15;
                function $(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function z(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, D);
                }
                function C(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function V(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, D);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function U(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function B() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function X(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function Q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function J() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ee() {
                    return viewEnv.getShowingStatus();
                }
                const te = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    re = Object.keys(A).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === A[t]), e), {}),
                    ae = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ie = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : G.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: l, client: i, sound: _ };
                function le(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const oe = (e) => (0 === e ? window : window.subViews.get(e)),
                    se = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: t, children: a, mocks: i }) {
                                const n = (0, o.useRef)([]),
                                    l = (e, t, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = oe,
                                                context: a = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function n(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = i.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const i = r(t),
                                                        n = a.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (r, n) => {
                                                        const o = 'string' == typeof n ? `${a}.${n}` : a,
                                                            s = ne.view.addModelObserver(o, t, !0);
                                                        return (i.set(s, r), e && r(l(n)), s);
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const r = l(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                r = (function (e, t) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (r) return (r = r.call(e)).next.bind(r);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (r = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return le(e, t);
                                                                                var r = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === r &&
                                                                                        e.constructor &&
                                                                                        (r = e.constructor.name),
                                                                                    'Map' === r || 'Set' === r
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === r ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                r,
                                                                                            )
                                                                                          ? le(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(i.keys());
                                                            !(e = r()).done;

                                                        )
                                                            n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            l =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : l.readByPath(t),
                                            s = (e) => n.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const t = { root: e.object() };
                                                return Object.assign({}, t, { computes: {} });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const a = null != r ? r : o(t),
                                                            i = c.observable.box(a, { equals: u });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, c.action)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const a = null != r ? r : o(t),
                                                            i = c.observable.box(a, { equals: u });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, c.action)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const a = o(r);
                                                        if (Array.isArray(t)) {
                                                            const i = t.reduce(
                                                                (e, t) => ((e[t] = c.observable.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, c.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                i[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = t,
                                                                n = Object.entries(i),
                                                                o = n.reduce(
                                                                    (e, [t, r]) => (
                                                                        (e[r] = c.observable.box(a[t], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, c.action)((e) => {
                                                                            n.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: s,
                                            }),
                                            m = { mode: e, model: d, externalModel: l, cleanup: s };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && r ? r.controls(m) : {},
                                            externalModel: l,
                                            mode: e,
                                        };
                                    },
                                    s = (0, o.useRef)(!1),
                                    d = (0, o.useState)(e),
                                    m = d[0],
                                    g = d[1],
                                    h = (0, o.useState)(() => l(e, t, i)),
                                    v = h[0],
                                    f = h[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        s.current ? f(l(m, t, i)) : (s.current = !0);
                                    }, [i, m, t]),
                                    (0, o.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (v.externalModel.dispose(), n.current.forEach((e) => e()));
                                        },
                                        [v],
                                    ),
                                    o.createElement(r.Provider, { value: v }, a)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(),
                    de = se[0],
                    ue =
                        (se[1],
                        (e, t, r) =>
                            t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                                ? (t.extraLargeHeight && r.extraLarge) ||
                                  (t.largeHeight && r.large) ||
                                  (t.mediumHeight && r.medium) ||
                                  (t.smallHeight && r.small) ||
                                  (t.extraSmallHeight && r.extraSmall)
                                    ? e
                                    : null
                                : e),
                    ce = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var me;
                function ge(e, t, r) {
                    const a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, r),
                        i = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, r),
                        n = Math.min(a, i);
                    return {
                        extraLarge: n === r.extraLarge.weight,
                        large: n === r.large.weight,
                        medium: n === r.medium.weight,
                        small: n === r.small.weight,
                        extraSmall: n === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: i === r.extraLarge.weight,
                        largeHeight: i === r.large.weight,
                        mediumHeight: i === r.medium.weight,
                        smallHeight: i === r.small.weight,
                        extraSmallHeight: i === r.extraSmall.weight,
                    };
                }
                !(function (e) {
                    ((e.extraLarge = 'extraLarge'),
                        (e.large = 'large'),
                        (e.medium = 'medium'),
                        (e.small = 'small'),
                        (e.extraSmall = 'extraSmall'),
                        (e.extraLargeWidth = 'extraLargeWidth'),
                        (e.largeWidth = 'largeWidth'),
                        (e.mediumWidth = 'mediumWidth'),
                        (e.smallWidth = 'smallWidth'),
                        (e.extraSmallWidth = 'extraSmallWidth'),
                        (e.extraLargeHeight = 'extraLargeHeight'),
                        (e.largeHeight = 'largeHeight'),
                        (e.mediumHeight = 'mediumHeight'),
                        (e.smallHeight = 'smallHeight'),
                        (e.extraSmallHeight = 'extraSmallHeight'));
                })(me || (me = {}));
                const he = ne.client.getSize('rem'),
                    ve = he.width,
                    fe = he.height,
                    we = Object.assign({ width: ve, height: fe }, ge(ve, fe, ce)),
                    xe = (0, o.createContext)(we),
                    Ee = ['children'],
                    pe = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        r[a] = e[a];
                                    }
                                return r;
                            })(e, Ee);
                        const a = (0, o.useContext)(xe),
                            i = a.extraLarge,
                            n = a.large,
                            l = a.medium,
                            s = a.small,
                            d = a.extraSmall,
                            u = a.extraLargeWidth,
                            c = a.largeWidth,
                            m = a.mediumWidth,
                            g = a.smallWidth,
                            h = a.extraSmallWidth,
                            v = a.extraLargeHeight,
                            f = a.largeHeight,
                            w = a.mediumHeight,
                            x = a.smallHeight,
                            E = a.extraSmallHeight,
                            p = { extraLarge: v, large: f, medium: w, small: x, extraSmall: E };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && i) return t;
                            if (r.large && n) return t;
                            if (r.medium && l) return t;
                            if (r.small && s) return t;
                            if (r.extraSmall && d) return t;
                        } else {
                            if (r.extraLargeWidth && u) return ue(t, r, p);
                            if (r.largeWidth && c) return ue(t, r, p);
                            if (r.mediumWidth && m) return ue(t, r, p);
                            if (r.smallWidth && g) return ue(t, r, p);
                            if (r.extraSmallWidth && h) return ue(t, r, p);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && v) return t;
                                if (r.largeHeight && f) return t;
                                if (r.mediumHeight && w) return t;
                                if (r.smallHeight && x) return t;
                                if (r.extraSmallHeight && E) return t;
                            }
                        }
                        return null;
                    };
                ((pe.defaultProps = {
                    extraLarge: !1,
                    large: !1,
                    medium: !1,
                    small: !1,
                    extraSmall: !1,
                    extraLargeWidth: !1,
                    largeWidth: !1,
                    mediumWidth: !1,
                    smallWidth: !1,
                    extraSmallWidth: !1,
                    extraLargeHeight: !1,
                    largeHeight: !1,
                    mediumHeight: !1,
                    smallHeight: !1,
                    extraSmallHeight: !1,
                }),
                    (0, o.memo)(pe));
                const Se = ({ children: e }) => {
                    const t = (0, o.useContext)(xe),
                        r = (0, o.useState)(t),
                        a = r[0],
                        i = r[1],
                        n = (0, o.useCallback)((e, t) => {
                            const r = ne.view.pxToRem(e),
                                a = ne.view.pxToRem(t);
                            i(Object.assign({ width: r, height: a }, ge(r, a, ce)));
                        }, []),
                        l = (0, o.useCallback)(() => {
                            const e = ne.client.getSize('px');
                            n(e.width, e.height);
                        }, [n]);
                    (((e) => {
                        const t = (0, o.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        (ne.client.events.on('clientResized', n), ne.client.events.on('self.onScaleUpdated', l));
                    }),
                        (0, o.useEffect)(
                            () => () => {
                                (ne.client.events.off('clientResized', n),
                                    ne.client.events.off('self.onScaleUpdated', l));
                            },
                            [n, l],
                        ));
                    const s = (0, o.useMemo)(() => Object.assign({}, a), [a]);
                    return o.createElement(xe.Provider, { value: s }, e);
                };
                var be = r(483),
                    Le = r.n(be),
                    He = r(926),
                    ye = r.n(He);
                let Me, _e, Te;
                (!(function (e) {
                    ((e[(e.ExtraSmall = ce.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = ce.small.width)] = 'Small'),
                        (e[(e.Medium = ce.medium.width)] = 'Medium'),
                        (e[(e.Large = ce.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = ce.extraLarge.width)] = 'ExtraLarge'));
                })(Me || (Me = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ce.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = ce.small.width)] = 'Small'),
                            (e[(e.Medium = ce.medium.width)] = 'Medium'),
                            (e[(e.Large = ce.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = ce.extraLarge.width)] = 'ExtraLarge'));
                    })(_e || (_e = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = ce.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = ce.small.height)] = 'Small'),
                            (e[(e.Medium = ce.medium.height)] = 'Medium'),
                            (e[(e.Large = ce.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = ce.extraLarge.height)] = 'ExtraLarge'));
                    })(Te || (Te = {})));
                const Re = ['children', 'className'];
                function We() {
                    return (
                        (We = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                  }
                                  return e;
                              }),
                        We.apply(null, arguments)
                    );
                }
                const Ae = {
                        [_e.ExtraSmall]: '',
                        [_e.Small]: ye().SMALL_WIDTH,
                        [_e.Medium]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH}`,
                        [_e.Large]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH} ${ye().LARGE_WIDTH}`,
                        [_e.ExtraLarge]: `${ye().SMALL_WIDTH} ${ye().MEDIUM_WIDTH} ${ye().LARGE_WIDTH} ${ye().EXTRA_LARGE_WIDTH}`,
                    },
                    Ge = {
                        [Te.ExtraSmall]: '',
                        [Te.Small]: ye().SMALL_HEIGHT,
                        [Te.Medium]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT}`,
                        [Te.Large]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT} ${ye().LARGE_HEIGHT}`,
                        [Te.ExtraLarge]: `${ye().SMALL_HEIGHT} ${ye().MEDIUM_HEIGHT} ${ye().LARGE_HEIGHT} ${ye().EXTRA_LARGE_HEIGHT}`,
                    },
                    Pe = {
                        [Me.ExtraSmall]: '',
                        [Me.Small]: ye().SMALL,
                        [Me.Medium]: `${ye().SMALL} ${ye().MEDIUM}`,
                        [Me.Large]: `${ye().SMALL} ${ye().MEDIUM} ${ye().LARGE}`,
                        [Me.ExtraLarge]: `${ye().SMALL} ${ye().MEDIUM} ${ye().LARGE} ${ye().EXTRA_LARGE}`,
                    },
                    Ie = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        r[a] = e[a];
                                    }
                                return r;
                            })(e, Re);
                        const i = (() => {
                                const e = (0, o.useContext)(xe),
                                    t = e.width,
                                    r = e.height,
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return Me.ExtraLarge;
                                            case e.large:
                                                return Me.Large;
                                            case e.medium:
                                                return Me.Medium;
                                            case e.small:
                                                return Me.Small;
                                            case e.extraSmall:
                                                return Me.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Me.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return _e.ExtraLarge;
                                            case e.largeWidth:
                                                return _e.Large;
                                            case e.mediumWidth:
                                                return _e.Medium;
                                            case e.smallWidth:
                                                return _e.Small;
                                            case e.extraSmallWidth:
                                                return _e.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    _e.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return Te.ExtraLarge;
                                            case e.largeHeight:
                                                return Te.Large;
                                            case e.mediumHeight:
                                                return Te.Medium;
                                            case e.smallHeight:
                                                return Te.Small;
                                            case e.extraSmallHeight:
                                                return Te.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Te.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: a,
                                    mediaWidth: i,
                                    mediaHeight: n,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            n = i.mediaWidth,
                            l = i.mediaHeight,
                            s = i.mediaSize;
                        return o.createElement('div', We({ className: Le()(r, Ae[n], Ge[l], Pe[s]) }, a), t);
                    },
                    Oe = ['children'],
                    De = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        r[a] = e[a];
                                    }
                                return r;
                            })(e, Oe);
                        return o.createElement(Se, null, o.createElement(Ie, r, t));
                    };
                var $e = r(282);
                const ze = 'GrinchHelpViewApp_contentBlock_0f',
                    Ce = 'GrinchHelpViewApp_contentBlock_image_65',
                    Ve = 'GrinchHelpViewApp_contentBlock_description_0d',
                    je = (0, $e.observer)(() =>
                        o.createElement(
                            'div',
                            { className: 'GrinchHelpViewApp_base_b1' },
                            o.createElement(
                                'div',
                                { className: 'GrinchHelpViewApp_header_c4' },
                                o.createElement(
                                    'div',
                                    { className: 'GrinchHelpViewApp_header_title_2a' },
                                    R.strings.grinch.battle.helpView.title(),
                                ),
                                o.createElement('div', { className: 'GrinchHelpViewApp_header_left_1b' }),
                                o.createElement('div', { className: 'GrinchHelpViewApp_header_center_9e' }),
                                o.createElement('div', { className: 'GrinchHelpViewApp_header_right_de' }),
                            ),
                            o.createElement(
                                'div',
                                { className: 'GrinchHelpViewApp_content_ff' },
                                o.createElement(
                                    'div',
                                    { className: ze },
                                    o.createElement('img', {
                                        className: Ce,
                                        src: R.images.grinch.gui.maps.icons.helpView.FromCenter(),
                                    }),
                                    o.createElement('div', { className: Ve }, R.strings.grinch.battle.helpView.hint1()),
                                ),
                                o.createElement(
                                    'div',
                                    { className: ze },
                                    o.createElement('img', {
                                        className: Ce,
                                        src: R.images.grinch.gui.maps.icons.helpView.ToHomebase(),
                                    }),
                                    o.createElement('div', { className: Ve }, R.strings.grinch.battle.helpView.hint2()),
                                ),
                                o.createElement(
                                    'div',
                                    { className: ze },
                                    o.createElement('img', {
                                        className: Ce,
                                        src: R.images.grinch.gui.maps.icons.helpView.Stolen(),
                                    }),
                                    o.createElement('div', { className: Ve }, R.strings.grinch.battle.helpView.hint3()),
                                ),
                                o.createElement(
                                    'div',
                                    { className: ze },
                                    o.createElement('img', {
                                        className: Ce,
                                        src: R.images.grinch.gui.maps.icons.helpView.ShootPlayers(),
                                    }),
                                    o.createElement('div', { className: Ve }, R.strings.grinch.battle.helpView.hint4()),
                                ),
                            ),
                        ),
                    );
                engine.whenReady.then(() => {
                    d().render(
                        o.createElement(De, null, o.createElement(de, null, o.createElement(je, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        r = {};
    function a(e) {
        var i = r[e];
        if (void 0 !== i) return i.exports;
        var n = (r[e] = { exports: {} });
        return (t[e].call(n.exports, n, n.exports, a), n.exports);
    }
    ((a.m = t),
        (e = []),
        (a.O = (t, r, i, n) => {
            if (!r) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, i, n] = e[u], o = !0, s = 0; s < r.length; s++)
                        (!1 & n || l >= n) && Object.keys(a.O).every((e) => a.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), n < l && (l = n));
                    if (o) {
                        e.splice(u--, 1);
                        var d = i();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            n = n || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
            e[u] = [r, i, n];
        }),
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (a.d(t, { a: t }), t);
        }),
        (a.d = (e, t) => {
            for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (a.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (a.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (() => {
            var e = { 335: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var i,
                        n,
                        [l, o, s] = r,
                        d = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (i in o) a.o(o, i) && (a.m[i] = o[i]);
                        if (s) var u = s(a);
                    }
                    for (t && t(r); d < l.length; d++) ((n = l[d]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return a.O(u);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var i = a.O(void 0, [503], () => a(953));
    i = a.O(i);
})();
