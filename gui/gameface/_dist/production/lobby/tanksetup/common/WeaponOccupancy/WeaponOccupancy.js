(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, n) => {
                n.d(t, { Y: () => l });
                var r = n(3138),
                    a = n(7363),
                    i = n(1043),
                    o = n(5262);
                const s = (function (e = r.O.client.getSize('rem')) {
                        const t = e.width,
                            n = e.height;
                        return Object.assign({ width: t, height: n }, (0, o.T)(t, n, i.j));
                    })(),
                    l = (0, a.createContext)(s);
            },
            1039: (e, t, n) => {
                (n(3138), n(7363), n(3495));
            },
            6010: (e, t, n) => {
                var r = n(7363),
                    a = n(7382),
                    i = n(3495);
                const o = ['children'];
                (0, r.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                            return a;
                        })(e, o);
                    const s = (0, r.useContext)(i.Y),
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
                        w = s.largeHeight,
                        S = s.mediumHeight,
                        y = s.smallHeight,
                        x = s.extraSmallHeight,
                        E = { extraLarge: b, large: w, medium: S, small: y, extraSmall: x };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && l) return t;
                        if (n.large && c) return t;
                        if (n.medium && u) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && g) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, a.H)(t, n, E);
                        if (n.largeWidth && h) return (0, a.H)(t, n, E);
                        if (n.mediumWidth && p) return (0, a.H)(t, n, E);
                        if (n.smallWidth && v) return (0, a.H)(t, n, E);
                        if (n.extraSmallWidth && f) return (0, a.H)(t, n, E);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && b) return t;
                            if (n.largeHeight && w) return t;
                            if (n.mediumHeight && S) return t;
                            if (n.smallHeight && y) return t;
                            if (n.extraSmallHeight && x) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, n) => {
                n.d(t, { H: () => r });
                const r = (e, t, n) =>
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
                n.d(t, { YN: () => r.Y });
                (n(6010), n(1039));
                var r = n(3495);
            },
            1043: (e, t, n) => {
                n.d(t, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                var r;
                function a(e, t, n) {
                    const r = (function (e, t) {
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
                        })(t, n),
                        i = Math.min(r, a);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
                    };
                }
                (n.d(t, { T: () => a }),
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
                    })(r || (r = {})));
            },
            8246: (e, t, n) => {
                n.d(t, { U: () => s });
                var r = n(3138);
                function a(e, t) {
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
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
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
                        const r = n(t),
                            a = i.split('.').reduce((e, t) => e[t], r);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, a);
                    };
                    return {
                        subscribe: (n, a) => {
                            const o = 'string' == typeof a ? `${i}.${a}` : i,
                                l = r.O.view.addModelObserver(o, t, !0);
                            return (s.set(l, n), e && n(c(a)), l);
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
                            for (var e, n = a(s.keys()); !(e = n()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, n) => {
                n.d(t, { q3: () => l });
                var r = n(4598),
                    a = n(9174),
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
                                                dict: (e) => {
                                                    const t = d(e),
                                                        i = a.LO.box(t, { equals: r.jv });
                                                    return (
                                                        'real' === n &&
                                                            u.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        o = a.LO.box(i, { equals: r.jv });
                                                    return (
                                                        'real' === n &&
                                                            u.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        o = a.LO.box(i, { equals: r.jv });
                                                    return (
                                                        'real' === n &&
                                                            u.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const r = d(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(r[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                u.subscribe(
                                                                    (0, a.aD)((t) => {
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
                                                                (e, [t, n]) => ((e[n] = a.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                u.subscribe(
                                                                    (0, a.aD)((e) => {
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
                                w = b[0],
                                S = b[1];
                            return (
                                (0, i.useEffect)(() => {
                                    h.current ? S(m(v, c, d)) : (h.current = !0);
                                }, [d, v, c]),
                                (0, i.useEffect)(() => {
                                    f(l);
                                }, [l]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (w.externalModel.dispose(), g.current.forEach((e) => e()));
                                    },
                                    [w],
                                ),
                                o().createElement(n.Provider, { value: w }, u)
                            );
                        },
                        () => (0, i.useContext)(n),
                    ];
                };
            },
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o }));
                var r = n(2472),
                    a = n(1176);
                const i = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
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
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var r = n(527),
                    a = n(2493);
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
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => a, G: () => r });
            },
            2472: (e, t, n) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => o });
                var r = n(5959),
                    a = n(7698),
                    i = n(514);
                const o = { view: n(7641), client: r, sound: i.ZP, intl: a.N };
            },
            7698: (e, t, n) => {
                n.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => o });
                var r = n(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, r.playSound)(a[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r }));
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => a });
                var r = n(2472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => j,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => R,
                        enableFullScreenModeSupported: () => L,
                        events: () => o.U,
                        extraSize: () => D,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => C,
                        getExternalPaddingsRem: () => P,
                        getFontNames: () => k,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => p,
                        initExternalPaddings: () => _,
                        isEventHandled: () => E,
                        isFocused: () => y,
                        pxToRem: () => b,
                        remToPx: () => w,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => S,
                        setEventHandled: () => x,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => g,
                        whenTutorialReady: () => A,
                    }));
                var r = n(9690),
                    a = n(3722),
                    i = n(6112),
                    o = n(6538),
                    s = n(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
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
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
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
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function S(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function x() {
                    return viewEnv.setEventHandled();
                }
                function E() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const k = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    j = r.cg;
                function P() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const R = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    D = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    A = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function L() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function _(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            a = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const r = ['args'];
                const a = 2,
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
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
                                    return a;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? a : o);
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
                n.d(t, { jv: () => a, yR: () => r });
                function r(e) {
                    return e;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            9480: (e, t, n) => {
                function r(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => r, UI: () => o, dF: () => l, hX: () => s, u4: () => c });
                const a = r;
                function i(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function o(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
                }
                function s(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        var r;
                        const i = null == (r = e[a]) ? void 0 : r.value;
                        t(i, a, e) && n.push(i);
                    }
                    return n;
                }
                function l(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const r = i(e[n]);
                        if (t(r, n, e)) return r;
                    }
                }
                function c(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let r = n;
                    for (let n = 0; n < e.length; n++) {
                        r = t(r, a(e, n), n, e);
                    }
                    return r;
                }
            },
            9690: (e, t, n) => {
                n.d(t, { cg: () => i });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = a.length - 1; n >= 0; n--) for (; e >= a[n]; ) ((t += r[n]), (e -= a[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1922: (e, t, n) => {
                n.d(t, { GS: () => o, cJ: () => i });
                n(6483);
                var r = n(7739),
                    a = n(7363);
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
                    const e = (0, a.useContext)(r.YN);
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
                var r = n(4598),
                    a = n(9480),
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
                        a.UI(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: a.UI(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: a.UI(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: a.UI(e.price.discount, (e) => Object.assign({}, e)),
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
                                        return a.UI(t, (e) =>
                                            Object.assign({}, e, {
                                                bonuses: Object.assign({}, e.bonuses, {
                                                    items: a.UI(e.bonuses.items, (e) =>
                                                        Object.assign({}, e, {
                                                            values: a.UI(e.values, (e) => Object.assign({}, e)),
                                                        }),
                                                    ),
                                                }),
                                                specializations: Object.assign({}, e.specializations, {
                                                    specializations: a.UI(e.specializations.specializations, (e) =>
                                                        Object.assign({}, e),
                                                    ),
                                                }),
                                            }),
                                        );
                                    })(t.optDevices.slots.get()),
                                { equals: r.jv },
                            ),
                            s = (0, i.Om)(() => n().length),
                            d = (0, i.Om)(
                                (e) => {
                                    const t = a.U2(n(), e);
                                    if (!t) throw Error(`No optional device found with index: ${e}`);
                                    return t;
                                },
                                { equals: r.jv },
                            ),
                            g = (0, i.Om)((e) => d(e).bonuses.items.length, { equals: r.jv }),
                            m = (0, i.Om)(
                                (e, t) => {
                                    const n = d(e),
                                        r = a.U2(n.bonuses.items, t);
                                    if (!r) throw Error(`No bonus defPrice found with index: ${t}`);
                                    return Object.assign({}, r);
                                },
                                { equals: r.jv },
                            ),
                            h = (0, i.Om)((e) => {
                                const t = g(e);
                                return d(e).effect ? (1 === t ? 2 : 1) : 0;
                            }),
                            p = (0, i.Om)((e, t, n) => {
                                const r = g(e),
                                    a = h(e);
                                let i = a ? n - a : n,
                                    o = null;
                                for (let e = 0; e <= t; e++) {
                                    if (!i) return null;
                                    ((o = r > 2 ? 1 : 2 === r ? (i > 2 ? 2 : 1) : i), (i -= o));
                                }
                                return o;
                            }),
                            v = (0, i.Om)(
                                (e, t) => {
                                    const n = m(e, t);
                                    return a.dF(n.values, ({ valueKey: e }) => e === n.localeName);
                                },
                                { equals: r.jv },
                            ),
                            f = (0, i.Om)(
                                (e, n) =>
                                    ((e, t, n) => {
                                        const r = n !== o.cJ.Tiny || t ? l : c,
                                            i = u(e),
                                            s = a.u4(
                                                i,
                                                (e, t) => {
                                                    const n = r.indexOf(t.itemName);
                                                    return ((e[-1 === n ? Math.max(e.length, c.length) : n] = t), e);
                                                },
                                                [],
                                            );
                                        return a.hX(s, (e) => Boolean(e));
                                    })(t.consumables.slots.get(), e, n),
                                { equals: r.jv },
                            ),
                            b = (0, i.Om)((e, t) => f(e, t).length),
                            w = (0, i.Om)(
                                (e, t, n) => {
                                    const r = a.U2(f(t, n), e);
                                    if (!r) throw Error(`No consumable found with index: ${r}`);
                                    return Object.assign({}, r);
                                },
                                { equals: r.jv },
                            ),
                            S = (0, i.Om)(
                                () => {
                                    return ((e = t.boosters.slots.get()), u(e));
                                    var e;
                                },
                                { equals: r.jv },
                            ),
                            y = (0, i.Om)(() => S().length),
                            x = (0, i.Om)(
                                (e) => {
                                    const t = a.U2(S(), e);
                                    if (!t) throw Error(`No battle booster found with index: ${e}`);
                                    return Object.assign({}, t);
                                },
                                { equals: r.jv },
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
                                consumables: { length: b, consumable: w },
                                boosters: { length: y, booster: x },
                            },
                        };
                    };
            },
            3028: (e, t, n) => {
                n.d(t, { t: () => u });
                var r = n(5344),
                    a = n(3215),
                    i = n(4598),
                    o = n(9480),
                    s = n(3946),
                    l = n(3522);
                const c = (0, a.q3)()(
                        ({ observableModel: e }) => {
                            const t = (0, l._)(e),
                                n = t.model,
                                a = t.computes,
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
                                w = (0, s.Om)(() => f(1).sort((e, t) => t.popularity - e.popularity)),
                                S = (0, s.Om)(
                                    (e) => {
                                        const t = o.U2(u.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: i.jv },
                                ),
                                y = (0, s.Om)(() => u.get().length),
                                x = (0, s.Om)(() => o.UI(u.get(), (e) => e.intCD), { equals: i.jv }),
                                E = (0, s.Om)((e) => S(e).specifications.length),
                                O = (0, s.Om)(
                                    (e, t) => {
                                        const n = S(e),
                                            r = o.U2(n.specifications, t);
                                        if (!r) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, r);
                                    },
                                    { equals: i.jv },
                                ),
                                C = (0, s.Om)(
                                    (e, t) => {
                                        const n = S(e),
                                            r = o.U2(n.price.price, t);
                                        if (!r) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, r);
                                    },
                                    { equals: i.jv },
                                ),
                                k = (0, s.Om)(
                                    (e, t) => {
                                        const n = S(e),
                                            r = o.U2(n.price.defPrice, t);
                                        if (!r) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, r);
                                    },
                                    { equals: i.jv },
                                ),
                                j = (0, s.Om)((e) => S(e).price.price.length),
                                P = (0, s.Om)((e) => S(e).price.defPrice.length),
                                R = (0, s.Om)(() => {
                                    const e = d.get().selectedSlot,
                                        t = o.U2(g.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const n = o.U2(t.sections, 0);
                                    if (!n) throw Error('No section found');
                                    const r = o.U2(n.slots, e);
                                    if (!r) throw Error(`No slot found with index: ${e}`);
                                    const a = o.U2(r.specializations.specializations, 0);
                                    return null == a ? void 0 : a.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), n, {
                                shellsSetup: c,
                                shellsSlots: u,
                                ammunitionPanel: d,
                                sectionGroups: g,
                                optionalDevicesAssistant: m,
                                selectedPreset: p,
                                computes: Object.assign({}, a, {
                                    getOptionalDevicesAssistantItemsByType: f,
                                    getSortedCommonItems: b,
                                    getSortedLegendaryItems: w,
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
                                        const t = r.d.Common || r.d.Legendary;
                                        return null == (e = v().find((e) => e.presetType.mType === t))
                                            ? void 0
                                            : e.modeType;
                                    },
                                    shells: {
                                        length: y,
                                        shell: S,
                                        specificationsLength: E,
                                        specification: O,
                                        price: C,
                                        priceLength: j,
                                        defPriceLength: P,
                                        defPrice: k,
                                        ids: x,
                                    },
                                    selectedSlotSpecialization: R,
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
                var r = n(6483),
                    a = n.n(r),
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
                        r = (0, c.t)().model.shellsSetup.get(),
                        i = r.installedCount,
                        o = r.maxCount,
                        d = i === o,
                        g = R.strings.tank_setup.shells,
                        m = d ? g.ammunitionFull() : g.ammunitionIncomplete();
                    return s().createElement(
                        'div',
                        { className: a()(u.base, !d && u.base__incomplete) },
                        !t && s().createElement('div', { className: u.tip }, m),
                        e
                            ? `${i}/${o}`
                            : s().createElement(
                                  'div',
                                  { className: a()(u.occupancy, !d && u.occupancy__incomplete, u[`occupancy__${n}`]) },
                                  `${i}/${o}`,
                              ),
                    );
                });
            },
            5344: (e, t, n) => {
                let r;
                (n.d(t, { d: () => r }),
                    (function (e) {
                        ((e[(e.Common = 0)] = 'Common'), (e[(e.Legendary = 1)] = 'Legendary'));
                    })(r || (r = {})));
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
    function r(e) {
        var a = n[e];
        if (void 0 !== a) return a.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, r), i.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, n, a, i) => {
            if (!n) {
                var o = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, a, i] = e[u], s = !0, l = 0; l < n.length; l++)
                        (!1 & i || o >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((s = !1), i < o && (o = i));
                    if (s) {
                        e.splice(u--, 1);
                        var c = a();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, a, i];
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
        (r.j = 553),
        (() => {
            var e = { 553: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        i,
                        [o, s, l] = n,
                        c = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (a in s) r.o(s, a) && (r.m[a] = s[a]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < o.length; c++) ((i = o[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var a = r.O(void 0, [727], () => r(5096));
    a = r.O(a);
})();
