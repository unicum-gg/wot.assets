(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, n) => {
                n.d(t, { Y: () => d });
                var a = n(3138),
                    r = n(7363),
                    i = n(1043),
                    o = n(5262);
                const s = a.O.client.getSize('rem'),
                    l = s.width,
                    c = s.height,
                    u = Object.assign({ width: l, height: c }, (0, o.T)(l, c, i.j)),
                    d = (0, r.createContext)(u);
            },
            1039: (e, t, n) => {
                (n(3138), n(6536), n(7363), n(3495), n(1043), n(5262));
            },
            6010: (e, t, n) => {
                var a = n(7363),
                    r = n(7382),
                    i = n(3495);
                const o = ['children'];
                const s = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, o);
                    const s = (0, a.useContext)(i.Y),
                        l = s.extraLarge,
                        c = s.large,
                        u = s.medium,
                        d = s.small,
                        g = s.extraSmall,
                        m = s.extraLargeWidth,
                        h = s.largeWidth,
                        p = s.mediumWidth,
                        v = s.smallWidth,
                        f = s.extraSmallWidth,
                        b = s.extraLargeHeight,
                        S = s.largeHeight,
                        w = s.mediumHeight,
                        y = s.smallHeight,
                        x = s.extraSmallHeight,
                        O = { extraLarge: b, large: S, medium: w, small: y, extraSmall: x };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && l) return t;
                        if (n.large && c) return t;
                        if (n.medium && u) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && g) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, r.H)(t, n, O);
                        if (n.largeWidth && h) return (0, r.H)(t, n, O);
                        if (n.mediumWidth && p) return (0, r.H)(t, n, O);
                        if (n.smallWidth && v) return (0, r.H)(t, n, O);
                        if (n.extraSmallWidth && f) return (0, r.H)(t, n, O);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && S) return t;
                            if (n.mediumHeight && w) return t;
                            if (n.smallHeight && y) return t;
                            if (n.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                };
                (0, a.memo)(s);
            },
            7382: (e, t, n) => {
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                n.d(t, { YN: () => a.Y });
                (n(6010), n(1039));
                var a = n(3495);
            },
            1043: (e, t, n) => {
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                var a;
                function r(e, t, n) {
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
                        })(e, n),
                        r = (function (e, t) {
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
                        })(t, n),
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: r === n.extraLarge.weight,
                        largeHeight: r === n.large.weight,
                        mediumHeight: r === n.medium.weight,
                        smallHeight: r === n.small.weight,
                        extraSmallHeight: r === n.extraSmall.weight,
                    };
                }
                (n.d(t, { T: () => r }),
                    (function (e) {
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
                    })(a || (a = {})));
            },
            8246: (e, t, n) => {
                n.d(t, { U: () => s });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: n = o, context: i = 'model' } = {}) {
                    const s = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = s.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const c = (e) => {
                        const a = n(t),
                            r = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const o = 'string' == typeof r ? `${i}.${r}` : i,
                                l = a.O.view.addModelObserver(o, t, !0);
                            return (s.set(l, n), e && n(c(r)), l);
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const n = c(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(s.keys()); !(e = n()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, n) => {
                n.d(t, { q3: () => l });
                var a = n(4598),
                    r = n(9174),
                    i = n(7363),
                    o = n.n(i),
                    s = n(8246);
                const l = () => (e, t) => {
                    const n = (0, i.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: c, children: u, mocks: d }) {
                            const g = (0, i.useRef)([]),
                                m = (n, i, o) => {
                                    var l;
                                    const c = s.U(i),
                                        u =
                                            'real' === n
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (l = null == o ? void 0 : o.getter) ? l : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == o ? void 0 : o.getter(e)) : u.readByPath(e),
                                        m = (e) => g.current.push(e),
                                        h = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: u,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        o = r.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            u.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        o = r.LO.box(i, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            u.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                u.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            o = Object.entries(i),
                                                            s = o.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                u.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        o.forEach(([t, n]) => {
                                                                            s[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        p = { mode: n, model: h, externalModel: u, cleanup: m };
                                    return {
                                        model: h,
                                        controls: 'mocks' === n && o ? o.controls(p) : t(p),
                                        externalModel: u,
                                        mode: n,
                                    };
                                },
                                h = (0, i.useRef)(!1),
                                p = (0, i.useState)(l),
                                v = p[0],
                                f = p[1],
                                b = (0, i.useState)(() => m(l, c, d)),
                                S = b[0],
                                w = b[1];
                            return (
                                (0, i.useEffect)(() => {
                                    h.current ? w(m(v, c, d)) : (h.current = !0);
                                }, [d, v, c]),
                                (0, i.useEffect)(() => {
                                    f(l);
                                }, [l]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (S.externalModel.dispose(), g.current.forEach((e) => e()));
                                    },
                                    [S],
                                ),
                                o().createElement(n.Provider, { value: S }, u)
                            );
                        },
                        () => (0, i.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o }));
                var a = n(2472),
                    r = n(1176);
                const i = (0, a.E)('clientResized'),
                    o = (0, a.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
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
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = n(527),
                    r = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function r(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => r, G: () => a });
            },
            2472: (e, t, n) => {
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => i });
                var a = n(5959),
                    r = n(514);
                const i = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => o });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var a = n(2472);
                const r = {
                    onTextureFrozen: (0, a.E)('self.onTextureFrozen'),
                    onTextureReady: (0, a.E)('self.onTextureReady'),
                    onDomBuilt: (0, a.E)('self.onDomBuilt'),
                    onLoaded: (0, a.E)('self.onLoaded'),
                    onDisplayChanged: (0, a.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, a.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, a.E)('children.onAdded'),
                        onLoaded: (0, a.E)('children.onLoaded'),
                        onRemoved: (0, a.E)('children.onRemoved'),
                        onAttached: (0, a.E)('children.onAttached'),
                        onTextureReady: (0, a.E)('children.onTextureReady'),
                        onRequestPosition: (0, a.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => j,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => R,
                        events: () => o.U,
                        extraSize: () => A,
                        forceTriggerMouseMove: () => E,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => k,
                        getFontNames: () => C,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => p,
                        isEventHandled: () => O,
                        isFocused: () => y,
                        pxToRem: () => b,
                        remToPx: () => S,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => g,
                        whenTutorialReady: () => D,
                    }));
                var a = n(9690),
                    r = n(3722),
                    i = n(6112),
                    o = n(6538),
                    s = n(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function g(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function p(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: S(t.x), y: S(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function S(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function x() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function E() {
                    viewEnv.forceTriggerMouseMove();
                }
                function k() {
                    return viewEnv.getShowingStatus();
                }
                const C = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    j = a.cg,
                    R = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    A = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    D = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const a = ['args'];
                const r = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? r : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                n.d(t, { jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
                    return !1;
                }
                console.log;
            },
            6536: (e, t, n) => {
                n(7363);
            },
            9480: (e, t, n) => {
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => o, dF: () => l, hX: () => s, u4: () => c });
                const r = a;
                function i(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function s(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let r = 0; r < e.length; r++) {
                        var a;
                        const i = null == (a = e[r]) ? void 0 : a.value;
                        t(i, r, e) && n.push(i);
                    }
                    return n;
                }
                function l(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = i(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function c(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) {
                        a = t(a, r(e, n), n, e);
                    }
                    return a;
                }
            },
            9690: (e, t, n) => {
                n.d(t, { cg: () => i });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += a[n]), (e -= r[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1922: (e, t, n) => {
                n.d(t, { GS: () => o, cJ: () => i });
                n(6483);
                var a = n(7739),
                    r = n(7363);
                n(1960);
                let i;
                !(function (e) {
                    ((e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(i || (i = {}));
                const o = () => {
                    const e = (0, r.useContext)(a.YN);
                    return e.extraSmall
                        ? i.Tiny
                        : e.small
                          ? i.Small
                          : e.medium || 1080 === e.height
                            ? i.Medium
                            : e.large
                              ? i.Large
                              : e.extraLarge
                                ? i.Huge
                                : i.None;
                };
            },
            3522: (e, t, n) => {
                n.d(t, { _: () => d });
                var a = n(4598),
                    r = n(9480),
                    i = n(3946),
                    o = n(1922);
                const s = [
                        'qualityFuel',
                        'excellentFuel',
                        'ration',
                        'chocolate',
                        'cocacola',
                        'hotCoffee',
                        'ration_uk',
                        'ration_czech',
                        'ration_china',
                        'ration_japan',
                        'ration_poland',
                        'ration_sweden',
                        'ration_italy',
                    ],
                    l = [
                        'smallRepairkit',
                        'smallMedkit',
                        'handExtinguishers',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'largeMedkit',
                        'autoExtinguishers',
                        ...s,
                    ],
                    c = [
                        'smallRepairkit',
                        'largeRepairkit',
                        'builtinRepairkit',
                        'smallMedkit',
                        'largeMedkit',
                        'handExtinguishers',
                        'autoExtinguishers',
                        ...s,
                    ],
                    u = (e) =>
                        r.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: r.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: r.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: r.UI(e.price.discount, (e) => Object.assign({}, e)),
                                }),
                            }),
                        ),
                    d = (e) => {
                        const t = {
                                root: e.object(),
                                tankSetup: e.object('tankSetup'),
                                vehicleInfo: e.object('vehicleInfo'),
                                lastSlotAction: e.object('lastSlotAction'),
                                optDevices: {
                                    slots: e.array('tankSetup.optDevicesSetup.slots'),
                                    setup: e.object('tankSetup.optDevicesSetup'),
                                    filter: e.array('tankSetup.optDevicesSetup.filter'),
                                    tabs: e.array('tankSetup.optDevicesSetup.tabs'),
                                    specialCurrency: e.array('tankSetup.optDevicesSetup.specialCurrency'),
                                },
                                consumables: {
                                    consumables: e.object('tankSetup.consumablesSetup'),
                                    slots: e.array('tankSetup.consumablesSetup.slots'),
                                },
                                boosters: {
                                    tabs: e.object('tankSetup.battleBoostersSetup.tabs'),
                                    slots: e.array('tankSetup.battleBoostersSetup.slots'),
                                },
                            },
                            n = (0, i.Om)(
                                () =>
                                    ((e) => {
                                        const t = u(e);
                                        return r.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: r.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: r.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: r.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: a.jv },
                            ),
                            s = (0, i.Om)(() => n().length),
                            d = (0, i.Om)(
                                (e) => {
                                    const t = r.U2(n(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: a.jv },
                            ),
                            g = (0, i.Om)((e) => d(e).bonuses.items.length, { equals: a.jv }),
                            m = (0, i.Om)(
                                (e, t) => {
                                    const n = d(e),
                                        a = r.U2(n.bonuses.items, t);
                                    if (!a) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            h = (0, i.Om)((e) => {
                                const t = g(e);
                                return d(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            p = (0, i.Om)((e, t, n) => {
                                const a = g(e),
                                    r = h(e);
                                let i = r ? n - r : n,
                                    o = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!i) return null;
                                    ((o = a > 2 ? 1 : 2 === a ? (i > 2 ? 2 : 1) : i), (i -= o));
                                }
                                return o;
                            }),
                            v = (0, i.Om)(
                                (e, t) => {
                                    const n = m(e, t);
                                    return r.dF(n.values, ({ valueKey: e }) => e === n.localeName);
                                },
                                { equals: a.jv },
                            ),
                            f = (0, i.Om)(
                                (e, n) =>
                                    ((e, t, n) => {
                                        const a = n !== o.cJ.Tiny || t ? l : c,
                                            i = u(e),
                                            s = r.u4(
                                                i,
                                                (e, t) => {
                                                    const n = a.indexOf(t.itemName);
                                                    return ((e[-1 === n ? Math.max(e.length, c.length) : n] = t), e);
                                                },
                                                [],
                                            );
                                        return r.hX(s, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, n),
                                { equals: a.jv },
                            ),
                            b = (0, i.Om)((e, t) => f(e, t).length),
                            S = (0, i.Om)(
                                (e, t, n) => {
                                    const a = r.U2(f(t, n), e);
                                    if (!a) throw Error(`No consumable found with index: ${a}`);
                                    return Object.assign({}, a);
                                },
                                { equals: a.jv },
                            ),
                            w = (0, i.Om)(
                                () => {
                                    return ((e = t.boosters.slots.get()), u(e));
                                    var e;
                                },
                                { equals: a.jv },
                            ),
                            y = (0, i.Om)(() => w().length),
                            x = (0, i.Om)(
                                (e) => {
                                    const t = r.U2(w(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: a.jv },
                            );
                        return {
                            model: t,
                            computes: {
                                optDevices: {
                                    slotsLength: s,
                                    device: d,
                                    bonusesLength: g,
                                    bonus: m,
                                    bonusEffectLinesCount: h,
                                    bonusVisibleLinesCount: p,
                                    bonusValue: v,
                                },
                                consumables: { length: b, consumable: S },
                                boosters: { length: y, booster: x },
                            },
                        };
                    };
            },
            3028: (e, t, n) => {
                n.d(t, { t: () => u });
                var a = n(5344),
                    r = n(3215),
                    i = n(4598),
                    o = n(9480),
                    s = n(3946),
                    l = n(3522);
                const c = (0, r.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, l._)(e),
                                n = t.model,
                                r = t.computes,
                                c = e.object('tankSetup.shellsSetup'),
                                u = e.array('tankSetup.shellsSetup.slots'),
                                d = e.object('ammunitionPanel'),
                                g = e.array('ammunitionPanel.sectionGroups'),
                                m = e.object('optionalDevicesAssistant'),
                                h = e.array('optionalDevicesAssistant.optionalDevicesAssistantPresets'),
                                p = e.object('optionalDevicesAssistant.selectedPreset'),
                                v = () =>
                                    o.UI(h.get(), (e) =>
                                        Object.assign({}, e, {
                                            optionalDevicesAssistantItems: o.UI(e.optionalDevicesAssistantItems, (e) =>
                                                Object.assign({}, e, { items: o.UI(e.items, i.yR) }),
                                            ),
                                        }),
                                    ),
                                f = (e) =>
                                    o.u4(
                                        h.get(),
                                        (t, n) => {
                                            if (n.presetType.mType === e) {
                                                const e = o.UI(n.optionalDevicesAssistantItems, (e) =>
                                                    Object.assign({}, e, { items: o.UI(e.items, i.yR) }),
                                                );
                                                t.push(...e);
                                            }
                                            return t;
                                        },
                                        [],
                                    ),
                                b = (0, s.Om)(() => f(0).sort((e, t) => t.popularity - e.popularity)),
                                S = (0, s.Om)(() => f(1).sort((e, t) => t.popularity - e.popularity)),
                                w = (0, s.Om)(
                                    (e) => {
                                        const t = o.U2(u.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: i.jv },
                                ),
                                y = (0, s.Om)(() => u.get().length),
                                x = (0, s.Om)(() => o.UI(u.get(), (e) => e.intCD), { equals: i.jv }),
                                O = (0, s.Om)((e) => w(e).specifications.length),
                                E = (0, s.Om)(
                                    (e, t) => {
                                        const n = w(e),
                                            a = o.U2(n.specifications, t);
                                        if (!a) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: i.jv },
                                ),
                                k = (0, s.Om)(
                                    (e, t) => {
                                        const n = w(e),
                                            a = o.U2(n.price.price, t);
                                        if (!a) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: i.jv },
                                ),
                                C = (0, s.Om)(
                                    (e, t) => {
                                        const n = w(e),
                                            a = o.U2(n.price.defPrice, t);
                                        if (!a) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, a);
                                    },
                                    { equals: i.jv },
                                ),
                                j = (0, s.Om)((e) => w(e).price.price.length),
                                R = (0, s.Om)((e) => w(e).price.defPrice.length),
                                A = (0, s.Om)(() => {
                                    const e = d.get().selectedSlot,
                                        t = o.U2(g.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const n = o.U2(t.sections, 0);
                                    if (!n) throw Error('No section found');
                                    const a = o.U2(n.slots, e);
                                    if (!a) throw Error(`No slot found with index: ${e}`);
                                    const r = o.U2(a.specializations.specializations, 0);
                                    return null == r ? void 0 : r.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), n, {
                                shellsSetup: c,
                                shellsSlots: u,
                                ammunitionPanel: d,
                                sectionGroups: g,
                                optionalDevicesAssistant: m,
                                selectedPreset: p,
                                computes: Object.assign({}, r, {
                                    getOptionalDevicesAssistantItemsByType: f,
                                    getSortedCommonItems: b,
                                    getSortedLegendaryItems: S,
                                    getOptionalDevicesAssistantPresets: v,
                                    getSourceVehicleCompDescrForPreset: (e) => {
                                        const t = v().find((t) => t.presetType.mType === e);
                                        return t ? t.sourceVehicleCompDescr : null;
                                    },
                                    getOptionalDevicesResultTypeForPreset: (e) => {
                                        const t = v().find((t) => t.presetType.mType === e);
                                        return t ? t.optionalDevicesResultType : 0;
                                    },
                                    getModeType: () => {
                                        var e;
                                        const t = a.d.Common || a.d.Legendary;
                                        return null == (e = v().find((e) => e.presetType.mType === t))
                                            ? void 0
                                            : e.modeType;
                                    },
                                    shells: {
                                        length: y,
                                        shell: w,
                                        specificationsLength: O,
                                        specification: E,
                                        price: k,
                                        priceLength: j,
                                        defPriceLength: R,
                                        defPrice: C,
                                        ids: x,
                                    },
                                    selectedSlotSpecialization: A,
                                }),
                            });
                        },
                        ({ externalModel: e }) => ({
                            onHintShown: e.createCallback(
                                () => ({ value: !0 }),
                                'optionalDevicesAssistant.onHintShown',
                            ),
                            onPresetSelected: e.createCallback(
                                (e) => ({ presetType: e }),
                                'optionalDevicesAssistant.onPresetSelected',
                            ),
                            close: e.createCallbackNoArgs('onClose'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            moreCurrencyGot: e.createCallbackNoArgs(
                                'tankSetup.optDevicesSetup.specialCurrency.onGetMoreCurrency',
                            ),
                            introPassed: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onIntroPassed'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                                confirmDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.optDevicesSetup.onAutoRenewalChanged',
                                ),
                            },
                            shells: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.shellsSetup.onAutoRenewalChanged',
                                ),
                                updateSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onShellUpdate',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onSlotAction',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    u = (c[0], c[1]);
            },
            5096: (e, t, n) => {
                var a = n(6483),
                    r = n.n(a),
                    i = n(3403),
                    o = n(7363),
                    s = n.n(o),
                    l = n(1922),
                    c = n(3028);
                const u = {
                    base: 'WeaponOccupancy_base_19',
                    base__incomplete: 'WeaponOccupancy_base__incomplete_e0',
                    tip: 'WeaponOccupancy_tip_18',
                    occupancy: 'WeaponOccupancy_occupancy_6e',
                    occupancy__incomplete: 'WeaponOccupancy_occupancy__incomplete_e1',
                    occupancy__large: 'WeaponOccupancy_occupancy__large_37',
                    occupancy__huge: 'WeaponOccupancy_occupancy__huge_a5',
                };
                (0, i.Pi)(({ isDetailed: e = !1, isShortened: t = !1 }) => {
                    const n = (0, l.GS)(),
                        a = (0, c.t)().model.shellsSetup.get(),
                        i = a.installedCount,
                        o = a.maxCount,
                        d = i === o,
                        g = R.strings.tank_setup.shells,
                        m = d ? g.ammunitionFull() : g.ammunitionIncomplete();
                    return s().createElement(
                        'div',
                        { className: r()(u.base, !d && u.base__incomplete) },
                        !t && s().createElement('div', { className: u.tip }, m),
                        e
                            ? `${i}/${o}`
                            : s().createElement(
                                  'div',
                                  { className: r()(u.occupancy, !d && u.occupancy__incomplete, u[`occupancy__${n}`]) },
                                  `${i}/${o}`,
                              ),
                    );
                });
            },
            5344: (e, t, n) => {
                let a;
                (n.d(t, { d: () => a }),
                    (function (e) {
                        ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'));
                    })(a || (a = {})));
            },
            1960: () => {},
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        n = {};
    function a(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, a), i.exports);
    }
    ((a.m = t),
        (e = []),
        (a.O = (t, n, r, i) => {
            if (!n) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, r, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || o >= i) && Object.keys(a.O).every((e) => a.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < o && (o = i));
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
        (a.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (a.d(t, { a: t }), t);
        }),
        (a.d = (e, t) => {
            for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (a.j = 553),
        (() => {
            var e = { 553: 0 };
            a.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [o, s, l] = n,
                        c = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (r in s) a.o(s, r) && (a.m[r] = s[r]);
                        if (l) var u = l(a);
                    }
                    for (t && t(n); c < o.length; c++) ((i = o[c]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return a.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var r = a.O(void 0, [727], () => a(5096));
    r = a.O(r);
})();
