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
            547: (e, t, r) => {
                'use strict';
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => b, off: () => E, on: () => x, onResize: () => f, onScaleUpdated: () => v }));
                var a = {};
                (r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => y,
                        getSize: () => p,
                        graphicsQuality: () => H,
                        playSound: () => L,
                        setRTPC: () => S,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => P, getTextureUrl: () => O }));
                var l = {};
                (r.r(l),
                    r.d(l, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => z,
                        arabic2roman: () => ie,
                        children: () => i,
                        displayStatus: () => D,
                        displayStatusIs: () => oe,
                        enableFullScreenModeSupported: () => ue,
                        events: () => C,
                        extraSize: () => se,
                        forceTriggerMouseMove: () => re,
                        freezeTextureBeforeResize: () => q,
                        getBrowserTexturePath: () => U,
                        getDisplayStatus: () => ne,
                        getExternalPaddingsRem: () => le,
                        getFontNames: () => ae,
                        getScale: () => Q,
                        getSize: () => N,
                        getViewGlobalPosition: () => X,
                        initExternalPaddings: () => me,
                        isEventHandled: () => te,
                        isFocused: () => Z,
                        pxToRem: () => J,
                        remToPx: () => K,
                        resize: () => V,
                        sendEvent: () => k,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => ee,
                        setInputPaddingsRem: () => j,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => de,
                    }));
                var o = r(363),
                    s = r.n(o),
                    d = r(533),
                    u = r.n(d);
                function m() {
                    return !1;
                }
                console.log;
                var c = r(174);
                function g(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function h(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const f = g('clientResized'),
                    v = g('self.onScaleUpdated'),
                    x = (e, t) => engine.on(e, t),
                    E = (e, t) => engine.off(e, t),
                    w = { down: g('mousedown'), up: g('mouseup'), move: g('mousemove') },
                    b = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && h(!1);
                        }
                        function r() {
                            e.enabled && h(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : h(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            l = w[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (l(),
                                                    window.removeEventListener(i, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
                            },
                            enableOutside() {
                                e.enabled && h(!0);
                            },
                            disableOutside() {
                                e.enabled && h(!1);
                            },
                        });
                    })();
                function L(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function S(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const H = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    _ = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    M = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    T = Object.keys(M).reduce((e, t) => ((e[t] = () => L(M[t])), e), {}),
                    I = { play: Object.assign({}, T, { sound: L }), setRTPC: S },
                    A = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    W = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function O(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function P(e, t, r) {
                    return `url(${O(e, t, r)})`;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
                        onTextureFrozen: g('self.onTextureFrozen'),
                        onTextureReady: g('self.onTextureReady'),
                        onDomBuilt: g('self.onDomBuilt'),
                        onLoaded: g('self.onLoaded'),
                        onDisplayChanged: g('self.onShowingStatusChanged'),
                        onFocusUpdated: g('self.onFocusChanged'),
                        children: {
                            onAdded: g('children.onAdded'),
                            onLoaded: g('children.onLoaded'),
                            onRemoved: g('children.onRemoved'),
                            onAttached: g('children.onAttached'),
                            onTextureReady: g('children.onTextureReady'),
                            onRequestPosition: g('children.requestPosition'),
                        },
                    },
                    G = ['args'],
                    $ = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, G);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    k = {
                        close(e) {
                            $('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            $(64);
                        },
                        move(e) {
                            $(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function z(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function j(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function U(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function B(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function X(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: K(t.x), y: K(t.y) };
                }
                function q() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function Q() {
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
                function re() {
                    viewEnv.forceTriggerMouseMove();
                }
                function ne() {
                    return viewEnv.getShowingStatus();
                }
                const ae = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    ie = function (e) {
                        let t = '';
                        for (let r = W.length - 1; r >= 0; r--) for (; e >= W[r];) ((t += A[r]), (e -= W[r]));
                        return t;
                    };
                function le() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const oe = Object.keys(D).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === D[t]), e), {}),
                    se = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    de = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function ue() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function me(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            r = t.top,
                            n = t.right,
                            a = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${r}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ce = { view: l, client: a, sound: I, intl: _ };
                function ge(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const he = (e) => (0 === e ? window : window.subViews.get(e)),
                    fe = ((e, t) => {
                        const r = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: a, mocks: i }) {
                                const l = (0, o.useRef)([]),
                                    d = (e, r, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = he,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = a.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const a = r(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const o = 'string' == typeof i ? `${n}.${i}` : n,
                                                            s = ce.view.addModelObserver(o, t, !0);
                                                        return (a.set(s, r), e && r(l(i)), s);
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
                                                                                    return ge(e, t);
                                                                                var r = Object.prototype.toString
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
                                                                                          ? ge(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = r()).done;
                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            o =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : o.readByPath(t),
                                            d = (e) => l.current.push(e),
                                            u = (({ observableModel: e }) => e.primitives(['isFinished']))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const r = s(t),
                                                            n = c.LO.box(r, { equals: m });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, c.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            a = c.LO.box(n, { equals: m });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, c.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            a = c.LO.box(n, { equals: m });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, c.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const n = s(r);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = c.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, c.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                i = Object.entries(a),
                                                                l = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = c.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, c.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                l[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                l
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            g = { mode: e, model: u, externalModel: o, cleanup: d };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && n ? n.controls(g) : t(g),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    u = (0, o.useRef)(!1),
                                    g = (0, o.useState)(e),
                                    h = g[0],
                                    f = g[1],
                                    v = (0, o.useState)(() => d(e, n, i)),
                                    x = v[0],
                                    E = v[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        u.current ? E(d(h, n, i)) : (u.current = !0);
                                    }, [i, h, n]),
                                    (0, o.useEffect)(() => {
                                        f(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (x.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [x],
                                    ),
                                    s().createElement(r.Provider, { value: x }, a)
                                );
                            },
                            () => (0, o.useContext)(r),
                        ];
                    })(0, function () {}),
                    ve = fe[0],
                    xe = fe[1];
                var Ee = r(515);
                const we = ({ headerText: e, descriptionText: t }) =>
                    s().createElement(
                        'div',
                        { className: 'Hint_base_b6' },
                        s().createElement('div', { className: 'Hint_header_3b' }, e),
                        s().createElement('div', { className: 'Hint_description_58' }, t),
                    );
                var be = r(483),
                    Le = r.n(be),
                    Se = r(30);
                const pe = {
                        base: 'HintButton_base_19',
                        base__small: 'HintButton_base__small_63',
                        btnInner: 'HintButton_btnInner_e4',
                        btnOuter: 'HintButton_btnOuter_f9',
                        btnOuter__blink: 'HintButton_btnOuter__blink_e7',
                        animationContainer: 'HintButton_animationContainer_c5',
                        buttonContainer: 'HintButton_buttonContainer_2a',
                        btnInner__blink: 'HintButton_btnInner__blink_75',
                    },
                    ye = ({ btnText: e, hasBlinkAnimation: t = !1, isBlinking: r = !1, isSmall: n = !1 }) => {
                        const a = (0, o.useState)(!1),
                            i = a[0],
                            l = a[1],
                            d = Le()(pe.btnOuter, pe.btnOuter__blink),
                            u = Le()(pe.btnInner, pe.btnInner__blink),
                            m = (0, Se.useSpring)({
                                loop: !0,
                                reset: i,
                                from: { opacity: 0, transform: 'scale(1)' },
                                to: i
                                    ? [
                                          { opacity: 0, transform: 'scale(1)', config: { duration: 150 } },
                                          { opacity: 1, transform: 'scale(1)', config: { duration: 150 } },
                                          { opacity: 0, transform: 'scale(1.4)', config: { duration: 250 } },
                                      ]
                                    : { opacity: 0, transform: 'scale(1)' },
                                delay: 700,
                            });
                        return (
                            (0, o.useEffect)(() => {
                                l(!!r);
                            }, [r]),
                            s().createElement(
                                'div',
                                { className: Le()(pe.base, n && pe.__small) },
                                s().createElement(
                                    'div',
                                    { className: pe.btnContainer },
                                    s().createElement(
                                        'div',
                                        { className: pe.btnOuter },
                                        s().createElement('div', { className: pe.btnInner }, e),
                                    ),
                                ),
                                t &&
                                    r &&
                                    s().createElement(
                                        Se.animated.div,
                                        { className: pe.animationContainer, style: m },
                                        s().createElement(
                                            'div',
                                            { className: d },
                                            s().createElement('div', { className: u }, e),
                                        ),
                                    ),
                            )
                        );
                    },
                    He = R.strings.ingame_gui.postmortem.tips.exitHangar,
                    _e = (0, Ee.Pi)(() => {
                        const e = xe().model.isFinished.get();
                        return s().createElement(
                            'div',
                            { className: 'App_base_8d' },
                            e &&
                                s().createElement(
                                    'div',
                                    { className: 'App_container_29' },
                                    s().createElement(
                                        'div',
                                        { className: 'App_btnContainer_e2' },
                                        s().createElement(ye, { btnText: He.button() }),
                                    ),
                                    s().createElement(we, { headerText: He.label(), descriptionText: He.text() }),
                                ),
                        );
                    }),
                    Me = (e, t, r) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && r.extraLarge) ||
                              (t.largeHeight && r.large) ||
                              (t.mediumHeight && r.medium) ||
                              (t.smallHeight && r.small) ||
                              (t.extraSmallHeight && r.extraSmall)
                                ? e
                                : null
                            : e,
                    Te = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var Re;
                function Ie(e = ce.client.getSize('rem')) {
                    const t = e.width,
                        r = e.height;
                    return Object.assign(
                        { width: t, height: r },
                        (function (e, t, r) {
                            const n = (function (e, t) {
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
                                a = (function (e, t) {
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
                                i = Math.min(n, a);
                            return {
                                extraLarge: i === r.extraLarge.weight,
                                large: i === r.large.weight,
                                medium: i === r.medium.weight,
                                small: i === r.small.weight,
                                extraSmall: i === r.extraSmall.weight,
                                extraLargeWidth: n === r.extraLarge.weight,
                                largeWidth: n === r.large.weight,
                                mediumWidth: n === r.medium.weight,
                                smallWidth: n === r.small.weight,
                                extraSmallWidth: n === r.extraSmall.weight,
                                extraLargeHeight: a === r.extraLarge.weight,
                                largeHeight: a === r.large.weight,
                                mediumHeight: a === r.medium.weight,
                                smallHeight: a === r.small.weight,
                                extraSmallHeight: a === r.extraSmall.weight,
                            };
                        })(t, r, Te),
                    );
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
                })(Re || (Re = {}));
                const Ae = Ie(),
                    We = (0, o.createContext)(Ae),
                    Oe = ['children'];
                (0, o.memo)((e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, Oe);
                    const n = (0, o.useContext)(We),
                        a = n.extraLarge,
                        i = n.large,
                        l = n.medium,
                        s = n.small,
                        d = n.extraSmall,
                        u = n.extraLargeWidth,
                        m = n.largeWidth,
                        c = n.mediumWidth,
                        g = n.smallWidth,
                        h = n.extraSmallWidth,
                        f = n.extraLargeHeight,
                        v = n.largeHeight,
                        x = n.mediumHeight,
                        E = n.smallHeight,
                        w = n.extraSmallHeight,
                        b = { extraLarge: f, large: v, medium: x, small: E, extraSmall: w };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && a) return t;
                        if (r.large && i) return t;
                        if (r.medium && l) return t;
                        if (r.small && s) return t;
                        if (r.extraSmall && d) return t;
                    } else {
                        if (r.extraLargeWidth && u) return Me(t, r, b);
                        if (r.largeWidth && m) return Me(t, r, b);
                        if (r.mediumWidth && c) return Me(t, r, b);
                        if (r.smallWidth && g) return Me(t, r, b);
                        if (r.extraSmallWidth && h) return Me(t, r, b);
                        if (!(
                            r.extraLargeWidth ||
                            r.largeWidth ||
                            r.mediumWidth ||
                            r.smallWidth ||
                            r.extraSmallWidth
                        )) {
                            if (r.extraLargeHeight && f) return t;
                            if (r.largeHeight && v) return t;
                            if (r.mediumHeight && x) return t;
                            if (r.smallHeight && E) return t;
                            if (r.extraSmallHeight && w) return t;
                        }
                    }
                    return null;
                });
                const Pe = ({ children: e }) => {
                    const t = (0, o.useState)(Ie),
                        r = t[0],
                        n = t[1],
                        a = (0, o.useState)(!1),
                        i = a[0],
                        l = a[1];
                    return (
                        (0, o.useLayoutEffect)(() => {
                            function e() {
                                n((e) => {
                                    const t = ce.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : Ie(t);
                                });
                            }
                            return (
                                e(),
                                l(!0),
                                ce.client.events.on('clientResized', e),
                                ce.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (ce.client.events.off('clientResized', e),
                                        ce.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        s().createElement(We.Provider, { value: r }, i && e)
                    );
                };
                var De = r(926),
                    Ce = r.n(De);
                let Ge, $e, ke;
                (!(function (e) {
                    ((e[(e.ExtraSmall = Te.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = Te.small.width)] = 'Small'),
                        (e[(e.Medium = Te.medium.width)] = 'Medium'),
                        (e[(e.Large = Te.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = Te.extraLarge.width)] = 'ExtraLarge'));
                })(Ge || (Ge = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = Te.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = Te.small.width)] = 'Small'),
                            (e[(e.Medium = Te.medium.width)] = 'Medium'),
                            (e[(e.Large = Te.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = Te.extraLarge.width)] = 'ExtraLarge'));
                    })($e || ($e = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = Te.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = Te.small.height)] = 'Small'),
                            (e[(e.Medium = Te.medium.height)] = 'Medium'),
                            (e[(e.Large = Te.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = Te.extraLarge.height)] = 'ExtraLarge'));
                    })(ke || (ke = {})));
                const ze = ['children', 'className'];
                function je() {
                    return (
                        (je =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        je.apply(this, arguments)
                    );
                }
                const Ue = {
                        [$e.ExtraSmall]: '',
                        [$e.Small]: Ce().SMALL_WIDTH,
                        [$e.Medium]: `${Ce().SMALL_WIDTH} ${Ce().MEDIUM_WIDTH}`,
                        [$e.Large]: `${Ce().SMALL_WIDTH} ${Ce().MEDIUM_WIDTH} ${Ce().LARGE_WIDTH}`,
                        [$e.ExtraLarge]: `${Ce().SMALL_WIDTH} ${Ce().MEDIUM_WIDTH} ${Ce().LARGE_WIDTH} ${Ce().EXTRA_LARGE_WIDTH}`,
                    },
                    Be = {
                        [ke.ExtraSmall]: '',
                        [ke.Small]: Ce().SMALL_HEIGHT,
                        [ke.Medium]: `${Ce().SMALL_HEIGHT} ${Ce().MEDIUM_HEIGHT}`,
                        [ke.Large]: `${Ce().SMALL_HEIGHT} ${Ce().MEDIUM_HEIGHT} ${Ce().LARGE_HEIGHT}`,
                        [ke.ExtraLarge]: `${Ce().SMALL_HEIGHT} ${Ce().MEDIUM_HEIGHT} ${Ce().LARGE_HEIGHT} ${Ce().EXTRA_LARGE_HEIGHT}`,
                    },
                    Fe = {
                        [Ge.ExtraSmall]: '',
                        [Ge.Small]: Ce().SMALL,
                        [Ge.Medium]: `${Ce().SMALL} ${Ce().MEDIUM}`,
                        [Ge.Large]: `${Ce().SMALL} ${Ce().MEDIUM} ${Ce().LARGE}`,
                        [Ge.ExtraLarge]: `${Ce().SMALL} ${Ce().MEDIUM} ${Ce().LARGE} ${Ce().EXTRA_LARGE}`,
                    },
                    Ne = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, ze);
                        const a = (() => {
                                const e = (0, o.useContext)(We),
                                    t = e.width,
                                    r = e.height,
                                    n = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return Ge.ExtraLarge;
                                            case e.large:
                                                return Ge.Large;
                                            case e.medium:
                                                return Ge.Medium;
                                            case e.small:
                                                return Ge.Small;
                                            case e.extraSmall:
                                                return Ge.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    Ge.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return $e.ExtraLarge;
                                            case e.largeWidth:
                                                return $e.Large;
                                            case e.mediumWidth:
                                                return $e.Medium;
                                            case e.smallWidth:
                                                return $e.Small;
                                            case e.extraSmallWidth:
                                                return $e.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    $e.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return ke.ExtraLarge;
                                            case e.largeHeight:
                                                return ke.Large;
                                            case e.mediumHeight:
                                                return ke.Medium;
                                            case e.smallHeight:
                                                return ke.Small;
                                            case e.extraSmallHeight:
                                                return ke.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'),
                                                    ke.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: n,
                                    mediaWidth: a,
                                    mediaHeight: i,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })(),
                            i = a.mediaWidth,
                            l = a.mediaHeight,
                            d = a.mediaSize;
                        return s().createElement('div', je({ className: Le()(r, Ue[i], Be[l], Fe[d]) }, n), t);
                    },
                    Ve = ['children'],
                    Xe = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, Ve);
                        return s().createElement(Pe, null, s().createElement(Ne, r, t));
                    };
                engine.whenReady.then(() => {
                    u().render(
                        s().createElement(Xe, null, s().createElement(ve, null, s().createElement(_e, null))),
                        document.getElementById('root'),
                    );
                });
            },
            363: (e) => {
                'use strict';
                e.exports = React;
            },
            533: (e) => {
                'use strict';
                e.exports = ReactDOM;
            },
        },
        r = {};
    function n(e) {
        var a = r[e];
        if (void 0 !== a) return a.exports;
        var i = (r[e] = { exports: {} });
        return (t[e](i, i.exports, n), i.exports);
    }
    ((n.m = t),
        (e = []),
        (n.O = (t, r, a, i) => {
            if (!r) {
                var l = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [r, a, i] = e[u], o = !0, s = 0; s < r.length; s++)
                        (!1 & i || l >= i) && Object.keys(n.O).every((e) => n.O[e](r[s]))
                            ? r.splice(s--, 1)
                            : ((o = !1), i < l && (l = i));
                    if (o) {
                        e.splice(u--, 1);
                        var d = a();
                        void 0 !== d && (t = d);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [r, a, i];
        }),
        (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (n.d(t, { a: t }), t);
        }),
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (n.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (n.j = 'battle/FallTanksPostmortemInfoView/FallTanksPostmortemInfoView'),
        (() => {
            var e = { 'battle/FallTanksPostmortemInfoView/FallTanksPostmortemInfoView': 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        i,
                        [l, o, s] = r,
                        d = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (a in o) n.o(o, a) && (n.m[a] = o[a]);
                        if (s) var u = s(n);
                    }
                    for (t && t(r); d < l.length; d++) ((i = l[d]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return n.O(u);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var a = n.O(void 0, ['lib/fall_tanks.vendors'], () => n(547));
    a = n.O(a);
})();
