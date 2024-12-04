(() => {
    'use strict';
    var e,
        t = {
            3495: (e, t, i) => {
                i.d(t, { Y: () => u });
                var r = i(3138),
                    n = i(6179),
                    a = i(1043),
                    l = i(5262);
                const o = r.O.client.getSize('rem'),
                    d = o.width,
                    g = o.height,
                    s = Object.assign({ width: d, height: g }, (0, l.T)(d, g, a.j)),
                    u = (0, n.createContext)(s);
            },
            1039: (e, t, i) => {
                i(3138), i(6536), i(6179), i(3495), i(1043), i(5262);
            },
            6010: (e, t, i) => {
                var r = i(6179),
                    n = i(7382),
                    a = i(3495);
                const l = ['children'];
                const o = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    i[r] = e[r];
                                }
                            return i;
                        })(e, l);
                    const o = (0, r.useContext)(a.Y),
                        d = o.extraLarge,
                        g = o.large,
                        s = o.medium,
                        u = o.small,
                        m = o.extraSmall,
                        h = o.extraLargeWidth,
                        c = o.largeWidth,
                        v = o.mediumWidth,
                        w = o.smallWidth,
                        f = o.extraSmallWidth,
                        x = o.extraLargeHeight,
                        E = o.largeHeight,
                        S = o.mediumHeight,
                        y = o.smallHeight,
                        p = o.extraSmallHeight,
                        L = { extraLarge: x, large: E, medium: S, small: y, extraSmall: p };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && d) return t;
                        if (i.large && g) return t;
                        if (i.medium && s) return t;
                        if (i.small && u) return t;
                        if (i.extraSmall && m) return t;
                    } else {
                        if (i.extraLargeWidth && h) return (0, n.H)(t, i, L);
                        if (i.largeWidth && c) return (0, n.H)(t, i, L);
                        if (i.mediumWidth && v) return (0, n.H)(t, i, L);
                        if (i.smallWidth && w) return (0, n.H)(t, i, L);
                        if (i.extraSmallWidth && f) return (0, n.H)(t, i, L);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && x) return t;
                            if (i.largeHeight && E) return t;
                            if (i.mediumHeight && S) return t;
                            if (i.smallHeight && y) return t;
                            if (i.extraSmallHeight && p) return t;
                        }
                    }
                    return null;
                };
                o.defaultProps = {
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
                (0, r.memo)(o);
            },
            7382: (e, t, i) => {
                i.d(t, { H: () => r });
                const r = (e, t, i) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && i.extraLarge) ||
                          (t.largeHeight && i.large) ||
                          (t.mediumHeight && i.medium) ||
                          (t.smallHeight && i.small) ||
                          (t.extraSmallHeight && i.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, i) => {
                i(6010), i(1039), i(3495);
            },
            1043: (e, t, i) => {
                i.d(t, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, i) => {
                var r;
                function n(e, t, i) {
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
                        })(e, i),
                        n = (function (e, t) {
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
                        })(t, i),
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === i.extraLarge.weight,
                        large: a === i.large.weight,
                        medium: a === i.medium.weight,
                        small: a === i.small.weight,
                        extraSmall: a === i.extraSmall.weight,
                        extraLargeWidth: r === i.extraLarge.weight,
                        largeWidth: r === i.large.weight,
                        mediumWidth: r === i.medium.weight,
                        smallWidth: r === i.small.weight,
                        extraSmallWidth: r === i.extraSmall.weight,
                        extraLargeHeight: n === i.extraLarge.weight,
                        largeHeight: n === i.large.weight,
                        mediumHeight: n === i.medium.weight,
                        smallHeight: n === i.small.weight,
                        extraSmallHeight: n === i.extraSmall.weight,
                    };
                }
                i.d(t, { T: () => n }),
                    (function (e) {
                        (e.extraLarge = 'extraLarge'),
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
                            (e.extraSmallHeight = 'extraSmallHeight');
                    })(r || (r = {}));
            },
            527: (e, t, i) => {
                i.r(t),
                    i.d(t, { mouse: () => s, off: () => d, on: () => o, onResize: () => a, onScaleUpdated: () => l });
                var r = i(2472),
                    n = i(1176);
                const a = (0, r.E)('clientResized'),
                    l = (0, r.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    d = (e, t) => engine.off(e, t),
                    g = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${t}`,
                                        l = g[t]((e) => i([e, 'outside']));
                                    function o(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            n &&
                                                (l(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(i)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
                        },
                        enableOutside() {
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => l,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var r = i(527),
                    n = i(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function l(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            2493: (e, t, i) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function n(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((i) => {
                        console.error(`setRTPC('${e}', '${t}'): `, i);
                    });
                }
                i.d(t, { E: () => n, G: () => r });
            },
            2472: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => a });
                var r = i(5959),
                    n = i(514);
                const a = { view: i(7641), client: r, sound: n.ZP };
            },
            514: (e, t, i) => {
                i.d(t, { ZP: () => l });
                var r = i(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, t) => ((e[t] = () => (0, r.playSound)(n[t])), e), {}),
                    l = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function n(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => n });
                var r = i(2472);
                const n = {
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
            7641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => d,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => T,
                        events: () => a.U,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => H,
                        getFontNames: () => P,
                        getScale: () => f,
                        getSize: () => h,
                        getViewGlobalPosition: () => v,
                        isEventHandled: () => L,
                        isFocused: () => y,
                        pxToRem: () => x,
                        remToPx: () => E,
                        resize: () => c,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => S,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => g,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => R,
                    });
                var r = i(3722),
                    n = i(6112),
                    a = i(6538),
                    l = i(8566);
                const o = 15;
                function d(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function g(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function s(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function u(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function c(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function v(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function x(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function S(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function H() {
                    return viewEnv.getShowingStatus();
                }
                const P = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    W = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => g });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    l = 32,
                    o = 64,
                    d = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                l = (function (e, t) {
                                    if (null == e) return {};
                                    var i = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            i[r] = e[r];
                                        }
                                    return i;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, l, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, l));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var n;
                    },
                    g = {
                        close(e) {
                            d('popover' === e ? n : l);
                        },
                        minimize() {
                            d(o);
                        },
                        move(e) {
                            d(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            6536: (e, t, i) => {
                i(6179);
            },
            5415: (e, t, i) => {
                i(6179), i(7739);
                var r = i(1043);
                let n, a, l;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(n || (n = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(a || (a = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(l || (l = {}));
            },
            9690: (e, t, i) => {
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            6845: (e, t, i) => {
                i(6483), i(5415), i(9690), i(6179), i(3905);
            },
            3905: (e, t, i) => {
                let r, n, a;
                !(function (e) {
                    (e.EntryPoint = 'ENTRY_POINT'),
                        (e.InfoPage = 'INFO_PAGE'),
                        (e.Rewards = 'REWARDS'),
                        (e.HasBoxesView = 'HAS_BOXES_VIEW');
                })(r || (r = {})),
                    (function (e) {
                        (e.Videos = 'videos'),
                            (e.Images = 'images'),
                            (e.Texts = 'texts'),
                            (e.DynamicVideos = 'dynamicVideos'),
                            (e.DynamicImages = 'dynamicImages'),
                            (e.DynamicTexts = 'dynamicTexts');
                    })(n || (n = {})),
                    (function (e) {
                        e.InfoPage = 'infoPage';
                    })(a || (a = {}));
            },
        },
        i = {};
    function r(e) {
        var n = i[e];
        if (void 0 !== n) return n.exports;
        var a = (i[e] = { exports: {} });
        return t[e](a, a.exports, r), a.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = (t, i, n, a) => {
            if (!i) {
                var l = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [i, n, a] = e[s], o = !0, d = 0; d < i.length; d++)
                        (!1 & a || l >= a) && Object.keys(r.O).every((e) => r.O[e](i[d]))
                            ? i.splice(d--, 1)
                            : ((o = !1), a < l && (l = a));
                    if (o) {
                        e.splice(s--, 1);
                        var g = n();
                        void 0 !== g && (t = g);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
            e[s] = [i, n, a];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, { a: t }), t;
        }),
        (r.d = (e, t) => {
            for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.j = 35),
        (() => {
            var e = { 35: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var n,
                        a,
                        [l, o, d] = i,
                        g = 0;
                    if (l.some((t) => 0 !== e[t])) {
                        for (n in o) r.o(o, n) && (r.m[n] = o[n]);
                        if (d) var s = d(r);
                    }
                    for (t && t(i); g < l.length; g++) (a = l[g]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return r.O(s);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var n = r.O(void 0, [866], () => r(6845));
    n = r.O(n);
})();
