(() => {
    var __webpack_modules__ = {
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
            527: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i }));
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : (0, a.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const r = `mouse${t}`,
                                            i = l[t]((e) => u([e, 'outside']));
                                        function s(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            n(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(u)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                ((e.enabled = !1), n());
                            },
                            enable() {
                                ((e.enabled = !0), n());
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, u) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => n });
            },
            2493: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, u) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => n });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => i });
                var n = u(5959),
                    a = u(7698),
                    r = u(514);
                const i = { view: u(7641), client: n, sound: r.ZP, intl: a.N };
            },
            7698: (e, t, u) => {
                'use strict';
                u.d(t, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => i });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
                const a = {
                    onTextureFrozen: (0, n.E)('self.onTextureFrozen'),
                    onTextureReady: (0, n.E)('self.onTextureReady'),
                    onDomBuilt: (0, n.E)('self.onDomBuilt'),
                    onLoaded: (0, n.E)('self.onLoaded'),
                    onDisplayChanged: (0, n.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, n.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, n.E)('children.onAdded'),
                        onLoaded: (0, n.E)('children.onLoaded'),
                        onRemoved: (0, n.E)('children.onRemoved'),
                        onAttached: (0, n.E)('children.onAttached'),
                        onTextureReady: (0, n.E)('children.onTextureReady'),
                        onRequestPosition: (0, n.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => T,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        enableFullScreenModeSupported: () => N,
                        events: () => i.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => C,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => y,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => A,
                        initExternalPaddings: () => L,
                        isEventHandled: () => b,
                        isFocused: () => f,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => O,
                    }));
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    i = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function A(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function B() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = n.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    k = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    O = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function N() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            a = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => r });
                const n = ['args'],
                    a = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    r = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                (u.d(t, { n: () => n }),
                    (function (e) {
                        ((e[(e.NONE = -1)] = 'NONE'),
                            (e[(e.ALT = 165)] = 'ALT'),
                            (e[(e.ENTER = 13)] = 'ENTER'),
                            (e[(e.ESCAPE = 27)] = 'ESCAPE'),
                            (e[(e.SPACE = 32)] = 'SPACE'),
                            (e[(e.END = 35)] = 'END'),
                            (e[(e.HOME = 36)] = 'HOME'),
                            (e[(e.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (e[(e.ARROW_UP = 38)] = 'ARROW_UP'),
                            (e[(e.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (e[(e.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (e[(e.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (e[(e.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (e[(e.PLUS = 187)] = 'PLUS'),
                            (e[(e.MINUS = 189)] = 'MINUS'),
                            (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
                            (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
                            (e[(e.DELETE = 46)] = 'DELETE'),
                            (e[(e.TAB = 9)] = 'TAB'),
                            (e[(e.KEY_N = 78)] = 'KEY_N'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.ALT = 'Alt'),
                            (e.ALT_GRAPH = 'AltGraph'),
                            (e.CAPS_LOCK = 'CapsLock'),
                            (e.CONTROL = 'Control'),
                            (e.FN = 'Fn'),
                            (e.FN_LOCK = 'FnLock'),
                            (e.META = 'Meta'),
                            (e.NUM_LOCK = 'NumLock'),
                            (e.SCROLL_LOCK = 'ScrollLock'),
                            (e.SHIFT = 'Shift'),
                            (e.SYMBOL = 'Symbol'),
                            (e.SYMBOL_LOCK = 'SymbolLock'));
                    })(a || (a = {})));
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
                class a {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (e) => {
                                this._views[e] &&
                                    (this._views[e].forEach((e) => {
                                        delete this._callbacks[e];
                                    }),
                                    delete this._views[e]);
                            }),
                            (this._callbacks = {}),
                            (this._views = {}),
                            (this._updateHandler = void 0));
                    }
                    static get instance() {
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        ((this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                ((this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(e) {
                        (this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data));
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => l, Z5: () => i.Z5, B0: () => s, ry: () => p });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
                            this.removeMouseListener());
                    }
                    addMouseListener() {
                        this._listenMouse ||
                            (document.addEventListener('mousedown', this.onMouseDown), (this._listenMouse = !0));
                    }
                    removeMouseListener() {
                        this._listenMouse &&
                            0 === this.entries.length &&
                            (document.removeEventListener('mousedown', this.onMouseDown), (this._listenMouse = !1));
                    }
                }
                n.__instance = void 0;
                const a = n;
                var r = u(1358),
                    i = u(8613);
                let s;
                var o;
                (((o = s || (s = {}))[(o.UNDEFINED = 0)] = 'UNDEFINED'),
                    (o[(o.TOOLTIP = 1)] = 'TOOLTIP'),
                    (o[(o.POP_OVER = 2)] = 'POP_OVER'),
                    (o[(o.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (o[(o.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (o[(o.MOVE = 16)] = 'MOVE'),
                    (o[(o.CLOSE = 32)] = 'CLOSE'),
                    (o[(o.MINIMIZE = 64)] = 'MINIMIZE'));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    _ = u(3138);
                const A = ['args'];
                function g(e, t, u, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
                        var e,
                            t =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var t = this,
                                        u = arguments;
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function i(e) {
                                            g(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    D = () => h(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var B = u(7572);
                const b = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), r) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: F(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, D);
                        },
                        handleViewEvent: h,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            1985: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u.n(n);
                const r = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var i = u(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(e = i.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign(
                        { width: t, height: u },
                        (function (e, t, u) {
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
                                })(e, u),
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
                                })(t, u),
                                r = Math.min(n, a);
                            return {
                                extraLarge: r === u.extraLarge.weight,
                                large: r === u.large.weight,
                                medium: r === u.medium.weight,
                                small: r === u.small.weight,
                                extraSmall: r === u.extraSmall.weight,
                                extraLargeWidth: n === u.extraLarge.weight,
                                largeWidth: n === u.large.weight,
                                mediumWidth: n === u.medium.weight,
                                smallWidth: n === u.small.weight,
                                extraSmallWidth: n === u.extraSmall.weight,
                                extraLargeHeight: a === u.extraLarge.weight,
                                largeHeight: a === u.large.weight,
                                mediumHeight: a === u.medium.weight,
                                smallHeight: a === u.small.weight,
                                extraSmallHeight: a === u.extraSmall.weight,
                            };
                        })(t, u, s),
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
                })(o || (o = {}));
                const c = l(),
                    d = (0, n.createContext)(c),
                    E = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, E);
                    const a = (0, n.useContext)(d),
                        i = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        m = a.extraLargeWidth,
                        _ = a.largeWidth,
                        A = a.mediumWidth,
                        g = a.smallWidth,
                        F = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        h = a.largeHeight,
                        D = a.mediumHeight,
                        f = a.smallHeight,
                        B = a.extraSmallHeight,
                        b = { extraLarge: p, large: h, medium: D, small: f, extraSmall: B };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && i) return t;
                        if (u.large && s) return t;
                        if (u.medium && o) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && m) return r(t, u, b);
                        if (u.largeWidth && _) return r(t, u, b);
                        if (u.mediumWidth && A) return r(t, u, b);
                        if (u.smallWidth && g) return r(t, u, b);
                        if (u.extraSmallWidth && F) return r(t, u, b);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && h) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && f) return t;
                            if (u.extraSmallHeight && B) return t;
                        }
                    }
                    return null;
                });
                const m = ({ children: e }) => {
                    const t = (0, n.useState)(l),
                        u = t[0],
                        r = t[1],
                        s = (0, n.useState)(!1),
                        o = s[0],
                        c = s[1];
                    return (
                        (0, n.useLayoutEffect)(() => {
                            function e() {
                                r((e) => {
                                    const t = i.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : l(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                i.O.client.events.on('clientResized', e),
                                i.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (i.O.client.events.off('clientResized', e),
                                        i.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        a().createElement(d.Provider, { value: u }, o && e)
                    );
                };
                var _ = u(6483),
                    A = u.n(_),
                    g = u(926),
                    F = u.n(g);
                let p, h, D;
                (!(function (e) {
                    ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                })(p || (p = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge'));
                    })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge'));
                    })(D || (D = {})));
                const f = () => {
                        const e = (0, n.useContext)(d),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return p.ExtraLarge;
                                    case e.large:
                                        return p.Large;
                                    case e.medium:
                                        return p.Medium;
                                    case e.small:
                                        return p.Small;
                                    case e.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), p.ExtraSmall);
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return h.ExtraLarge;
                                    case e.largeWidth:
                                        return h.Large;
                                    case e.mediumWidth:
                                        return h.Medium;
                                    case e.smallWidth:
                                        return h.Small;
                                    case e.extraSmallWidth:
                                        return h.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), h.ExtraSmall);
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return D.ExtraLarge;
                                    case e.largeHeight:
                                        return D.Large;
                                    case e.mediumHeight:
                                        return D.Medium;
                                    case e.smallHeight:
                                        return D.Small;
                                    case e.extraSmallHeight:
                                        return D.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), D.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: t, remScreenHeight: u };
                    },
                    B = ['children', 'className'];
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const v = {
                        [h.ExtraSmall]: '',
                        [h.Small]: F().SMALL_WIDTH,
                        [h.Medium]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH}`,
                        [h.Large]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH}`,
                        [h.ExtraLarge]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH} ${F().EXTRA_LARGE_WIDTH}`,
                    },
                    C = {
                        [D.ExtraSmall]: '',
                        [D.Small]: F().SMALL_HEIGHT,
                        [D.Medium]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT}`,
                        [D.Large]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT}`,
                        [D.ExtraLarge]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT} ${F().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [p.ExtraSmall]: '',
                        [p.Small]: F().SMALL,
                        [p.Medium]: `${F().SMALL} ${F().MEDIUM}`,
                        [p.Large]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE}`,
                        [p.ExtraLarge]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE} ${F().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, B);
                        const r = f(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return a().createElement('div', b({ className: A()(u, v[i], C[s], y[o]) }, n), t);
                    },
                    S = ['children'],
                    w = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, S);
                        return a().createElement(m, null, a().createElement(T, u, t));
                    };
                var k = u(1533),
                    O = u.n(k),
                    N = u(5521),
                    L = u(9916);
                const x = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function I(e = N.n.NONE, t = x, u = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== N.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && i.O.view.isEventHandled()) return;
                                (i.O.view.setEventHandled(), t(n), u && n.stopPropagation());
                            }
                        }
                    }, [t, e, u, a]);
                }
                const M = (e) => {
                    (0, n.useEffect)(e, []);
                };
                var P = u(3403);
                const U = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];
                function H(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const G = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: L.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    W = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            p = void 0 === F ? 0 : F,
                            h = e.onShow,
                            D = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, U);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var r;
                                        return (
                                            t &&
                                                ((a =
                                                    (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) ||
                                                    ''),
                                                (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { callerUrl: a, caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [p],
                            ),
                            v = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (G(u, _, { isMouseEvent: !0, on: !0, arguments: H(a) }, b),
                                    h && h(),
                                    (B.current.isVisible = !0));
                            }, [u, _, a, b, h]),
                            C = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        G(u, _, { on: !1 }, b),
                                        B.current.isVisible && D && D(),
                                        (B.current.isVisible = !1));
                                }
                            }, [u, _, b, D]),
                            y = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && C();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === g && C();
                            }, [g, C]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', C),
                                    () => {
                                        (window.removeEventListener('mouseleave', C), C());
                                    }
                                ),
                                [C],
                            ),
                            g
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(B.current.timeoutId),
                                                          (B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (C(), null == i || i(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === E && C(), null == o || o(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === E && C(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : t
                        );
                        var T;
                    },
                    j = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                const V = R.views.common.tooltip_window.simple_tooltip_content,
                    K = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            i = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, j);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: u, header: r, note: i, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, r, i, o]);
                        return a().createElement(
                            W,
                            $(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? V.SimpleTooltipHtmlContent('resId') : V.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    z = 'modeSelector',
                    Y = 'disabled',
                    q = {
                        base: 'MenuItem_base_2b',
                        base__modeSelectorName: 'MenuItem_base__modeSelectorName_36',
                        base__enabledState: 'MenuItem_base__enabledState_9c',
                        modeSelector: 'MenuItem_modeSelector_b8',
                        modeIcon: 'MenuItem_modeIcon_a5',
                        label: 'MenuItem_label_d9',
                        base__disabledState: 'MenuItem_base__disabledState_1a',
                        titleWrapper: 'MenuItem_titleWrapper_77',
                        title: 'MenuItem_title_17',
                        arrow: 'MenuItem_arrow_17',
                        arrow__verticalCenter: 'MenuItem_arrow__verticalCenter_21',
                        modeName: 'MenuItem_modeName_05',
                    };
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Q = R.strings,
                    Z = {
                        [z]: Q.tooltips.header.battleType,
                        tournament: Q.tooltips.header.buttons.tournaments,
                        achievements: Q.tooltips.header.buttons.profile,
                    };
                function J(e) {
                    return Q.menu.headerButtons.$dyn(e);
                }
                function ee(e) {
                    return 'string' == typeof e ? i.O.intl.toUpperCase(e) : e;
                }
                const te = ({
                    name: e,
                    state: t,
                    modeName: u,
                    modeId: r,
                    modeIcon: s,
                    onClick: o,
                    title: l,
                    withTooltip: c = !0,
                    withArrow: d = !1,
                    className: E,
                }) => {
                    const m = (0, n.useMemo)(() => {
                        if (c)
                            return (function (e) {
                                var t, u, n;
                                const a = null != (t = Z[e]) ? t : Q.tooltips.header.buttons.$dyn(e);
                                return {
                                    header: null != (u = a.$dyn('header')) ? u : '',
                                    body: null != (n = a.$dyn('body')) ? n : '',
                                };
                            })(e);
                    }, [c, e]);
                    return a().createElement(
                        K,
                        X({}, m, { isEnabled: c }),
                        a().createElement(
                            'div',
                            {
                                className: A()(q.base, q[`base__${t}State`], q[`base__${e}Name`], E),
                                onMouseEnter: function () {
                                    t !== Y && i.O.sound.play.sound('highlight');
                                },
                                onClick: () => {
                                    t !== Y && o(e);
                                },
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            e === z
                                ? a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement(
                                          'div',
                                          { className: q.modeSelector },
                                          a().createElement('div', { className: q.label }, ee(l || J(e))),
                                          u && a().createElement('div', { className: q.modeName }, ee(u)),
                                          a().createElement('div', {
                                              className: q.modeIcon,
                                              style: {
                                                  backgroundImage: `url(${null != s ? s : `R.images.gui.maps.icons.battleTypes.c_64x64.${r}`})`,
                                              },
                                          }),
                                      ),
                                      a().createElement(
                                          'svg',
                                          {
                                              className: q.arrow,
                                              width: '7',
                                              height: '18',
                                              viewBox: '0 0 7 18',
                                              fill: 'none',
                                              xmlns: 'http://www.w3.org/2000/svg',
                                          },
                                          a().createElement('path', {
                                              d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                                              fill: '#eeede9',
                                              fillOpacity: '0.9',
                                          }),
                                      ),
                                  )
                                : a().createElement(
                                      'div',
                                      { className: q.titleWrapper },
                                      a().createElement('div', { className: q.title }, ee(l || J(e))),
                                      d &&
                                          a().createElement(
                                              'svg',
                                              {
                                                  className: A()(q.arrow, q.arrow__verticalCenter),
                                                  width: '7',
                                                  height: '18',
                                                  viewBox: '0 0 7 18',
                                                  fill: 'none',
                                                  xmlns: 'http://www.w3.org/2000/svg',
                                              },
                                              a().createElement('path', {
                                                  d: 'M6.5 0H4.04686L0 9L4.04686 18H6.5L2.5 9L6.5 0Z',
                                                  fill: '#eeede9',
                                                  fillOpacity: '0.9',
                                              }),
                                          ),
                                  ),
                        ),
                    );
                };
                var ue = u(7030);
                let ne;
                !(function (e) {
                    ((e[(e.NEWBIES = 0)] = 'NEWBIES'), (e[(e.EVENT = 1)] = 'EVENT'));
                })(ne || (ne = {}));
                const ae = (0, n.memo)(
                    ({
                        className: e,
                        backgroundPath: t,
                        onLoaded: u,
                        showVignette: n = !0,
                        showBlur: r = !1,
                        grayscaleApplied: i = !1,
                    }) =>
                        a().createElement(
                            'div',
                            {
                                className: A()(
                                    'Background_base_94',
                                    r && 'Background_base__blur_69',
                                    i && 'Background_base__grayscale_1b',
                                    e,
                                ),
                                style: { backgroundImage: `url(${t})` },
                            },
                            n && a().createElement('div', { className: 'Background_vignette_79' }),
                            u &&
                                a().createElement('img', {
                                    className: 'Background_preloader_7d',
                                    onLoad: u,
                                    onError: u,
                                    src: t,
                                    alt: t,
                                }),
                        ),
                );
                function re() {}
                function ie(e) {
                    return e;
                }
                function se() {
                    return !1;
                }
                console.log;
                var oe = u(9174);
                function le(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const ce = (e) => (0 === e ? window : window.subViews.get(e));
                function de(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                var Ee = u(3946);
                const me = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: s, mocks: o }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, u, n) => {
                                        var a;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ce,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = a.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = u(t),
                                                        r = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const o = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = i.O.view.addModelObserver(o, t, !0);
                                                        return (a.set(l, u), e && u(s(r)), l);
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const u = s(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                u = (function (e, t) {
                                                                    var u =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (u) return (u = u.call(e)).next.bind(u);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (u = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return le(e, t);
                                                                                var u = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === u &&
                                                                                        e.constructor &&
                                                                                        (u = e.constructor.name),
                                                                                    'Map' === u || 'Set' === u
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === u ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                u,
                                                                                            )
                                                                                          ? le(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
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
                                                            !(e = u()).done;
                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(u),
                                            s =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (a = null == n ? void 0 : n.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            o = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : s.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const t = Object.assign(
                                                        {
                                                            root: e.primitives([
                                                                'selectedTab',
                                                                'isTabsVisible',
                                                                'isParallaxEnabled',
                                                            ]),
                                                            missions: e.array('missions'),
                                                            selectedMission: e.object('selectedMission'),
                                                            tasks: e.array('tasks'),
                                                            parallax: e.array('parallax'),
                                                            menuItems: e.array('menuItems'),
                                                        },
                                                        e.primitives(['modeName', 'modeId']),
                                                    ),
                                                    u = (0, Ee.Om)(() => {
                                                        const e = t.selectedMission.get(),
                                                            u = t.tasks.get(),
                                                            n = Boolean(u.find(({ isCompletedFirstTime: e }) => e));
                                                        return e.isCompleted && n;
                                                    }),
                                                    n = (0, Ee.Om)(
                                                        () =>
                                                            t.root.isParallaxEnabled.get()
                                                                ? de(JSON.parse(t.parallax.get().parallaxStructure), ie)
                                                                : void 0,
                                                        { equals: se },
                                                    ),
                                                    a = (0, Ee.Om)(() => JSON.parse(t.parallax.get().atlas), {
                                                        equals: se,
                                                    });
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getIsSelectedMissionCompletedFirstTime: u,
                                                        parallaxStructureObj: n,
                                                        atlasObj: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    dict: (t) => {
                                                        const u = o(t),
                                                            n = oe.LO.box(u, { equals: se });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, oe.aD)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    array: (t, u) => {
                                                        const n = null != u ? u : o(t),
                                                            a = oe.LO.box(n, { equals: se });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, oe.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const n = null != u ? u : o(t),
                                                            a = oe.LO.box(n, { equals: se });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, oe.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const n = o(u);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = oe.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, oe.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                r = Object.entries(a),
                                                                i = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = oe.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, oe.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                i[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: e, model: d, externalModel: s, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && n ? n.controls(E) : t(E),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    E = (0, n.useState)(e),
                                    m = E[0],
                                    _ = E[1],
                                    A = (0, n.useState)(() => c(e, r, o)),
                                    g = A[0],
                                    F = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? F(c(m, r, o)) : (d.current = !0);
                                    }, [o, m, r]),
                                    (0, n.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            (g.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [g],
                                    ),
                                    a().createElement(u.Provider, { value: g }, s)
                                );
                            },
                            () => (0, n.useContext)(u),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        exit: e.createCallbackNoArgs('onQuit'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                        missionSelect: e.createCallback((e) => ({ id: e }), 'onMissionSelect'),
                        changeTab: e.createCallback((e) => ({ id: e }), 'onChangeTab'),
                        selectedMissionTaskUnlocked: e.createCallback(
                            (e) => ({ taskId: e }),
                            'onSelectedMissionTaskUnlocked',
                        ),
                        openAbout: e.createCallbackNoArgs('onAboutClick'),
                        navigateTo: e.createCallback((e) => ({ name: e }), 'onNavigate'),
                    })),
                    _e = me[0],
                    Ae = me[1];
                function ge(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const Fe = {
                        playHighlight() {
                            ge('highlight');
                        },
                        playClick() {
                            ge('play');
                        },
                        playYes() {
                            ge('yes1');
                        },
                    },
                    pe = (0, n.memo)(function ({ onClick: e }) {
                        return a().createElement(
                            'div',
                            {
                                className: 'AboutButton_base_60',
                                onClick: () => {
                                    (Fe.playClick(), e());
                                },
                            },
                            a().createElement('div', { className: 'AboutButton_icon_d1' }),
                            a().createElement(
                                'div',
                                { className: 'AboutButton_text_77' },
                                R.strings.sm_lobby.missionSelection.about(),
                            ),
                        );
                    }),
                    he = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    De = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let fe;
                !(function (e) {
                    ((e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo'));
                })(fe || (fe = {}));
                const Be = {
                        [fe.Linear]: (e) => e,
                        [fe.EaseIn]: (e) => e * e * e,
                        [fe.EaseOut]: (e) => --e * e * e + 1,
                        [fe.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        [fe.EaseOutBack]: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        [fe.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [fe.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    be = (0, n.memo)(function ({
                        children: e,
                        from: t = he,
                        to: u = De,
                        config: r,
                        isCanceled: i = !1,
                        isDisabled: s = !1,
                        duration: o = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: d = fe.EaseInOut,
                        onRest: E,
                        onStart: m,
                        trigger: _,
                        className: A,
                        isReverse: g = !1,
                        playSoundOnStart: F,
                        playSoundOnFinish: p,
                    }) {
                        const h = Be[d],
                            D = (0, ue.useSpring)(() => t),
                            f = D[0],
                            B = D[1],
                            b = i && !s ? u : Object.assign({}, f, { transformOrigin: c });
                        return (
                            (0, n.useEffect)(() => {
                                B.start({
                                    from: t,
                                    to: u,
                                    delay: l,
                                    immediate: i,
                                    config: r ? Object.assign({}, r) : { duration: o, easing: h },
                                    cancel: i || s,
                                    reverse: g,
                                    onRest: (e) => {
                                        !0 === e.finished && (p && p(), E && E());
                                    },
                                    onStart: () => {
                                        (F && F(), m && m());
                                    },
                                });
                            }, [B, l, o, h, t, i, E, u, _, s, g, p, F, m, r]),
                            a().createElement(ue.animated.div, { className: A, style: b }, e)
                        );
                    });
                let ve, Ce, ye;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(ve || (ve = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Ce || (Ce = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(ye || (ye = {})));
                const Te = { [ye.NBSP]: ve.NoBreakSymbol, [ye.ZWNBSP]: ve.NoBreakSymbol, [ye.NEW_LINE]: ve.LineBreak },
                    Se = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    we = ['children'];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, we);
                    return a().createElement(
                        W,
                        ke(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            u,
                        ),
                        t,
                    );
                };
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Le = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(K, t, n);
                    const r = t.contentId;
                    return r ? a().createElement(W, Ne({}, t, { contentId: r }), n) : a().createElement(Oe, t, n);
                };
                var Re = u(8045);
                const xe = {
                    base: 'ExtendedText_base_71',
                    base__zeroPadding: 'ExtendedText_base__zeroPadding_25',
                    base__isTruncationAvailable: 'ExtendedText_base__isTruncationAvailable_5b',
                    truncated: 'ExtendedText_truncated_97',
                    truncated__hide: 'ExtendedText_truncated__hide_31',
                    unTruncated: 'ExtendedText_unTruncated_b8',
                    tooltip: 'ExtendedText_tooltip_91',
                    'tooltip__justify-flex-start': 'ExtendedText_tooltip__justify-flex-start_00',
                    'tooltip__justify-center': 'ExtendedText_tooltip__justify-center_08',
                    'tooltip__justify-flex-end': 'ExtendedText_tooltip__justify-flex-end_90',
                    'tooltip__align-flex-start': 'ExtendedText_tooltip__align-flex-start_40',
                    'tooltip__align-center': 'ExtendedText_tooltip__align-center_54',
                    'tooltip__align-flex-end': 'ExtendedText_tooltip__align-flex-end_d2',
                };
                let Ie;
                function Me(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                (u(1281),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(Ie || (Ie = {})));
                const Pe =
                        (new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((e) => e.source)
                                .join('|'),
                            'gum',
                        ),
                        {
                            blackReal: 'colors_blackReal_fc',
                            whiteReal: 'colors_whiteReal_31',
                            white: 'colors_white_45',
                            whiteOrange: 'colors_whiteOrange_81',
                            whiteSpanish: 'colors_whiteSpanish_c3',
                            par: 'colors_par_5b',
                            parSecondary: 'colors_parSecondary_fd',
                            parTertiary: 'colors_parTertiary_97',
                            red: 'colors_red_79',
                            redDark: 'colors_redDark_73',
                            yellow: 'colors_yellow_76',
                            orange: 'colors_orange_cd',
                            cream: 'colors_cream_0f',
                            brown: 'colors_brown_82',
                            greenBright: 'colors_greenBright_68',
                            green: 'colors_green_fa',
                            greenDark: 'colors_greenDark_a9',
                            blueBooster: 'colors_blueBooster_26',
                            blueTeamkiller: 'colors_blueTeamkiller_86',
                            cred: 'colors_cred_35',
                            gold: 'colors_gold_c3',
                            bond: 'colors_bond_ce',
                            prom: 'colors_prom_83',
                        }),
                    Ue = 'renderers_word_f3',
                    He = (e) => ({ color: `#${e}` }),
                    Ge = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? Pe[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: A()(Ue, Pe[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: Ue, style: He(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: u, 'data-block-type': t.blockType, className: Ue }, e);
                    },
                    We = {
                        [ve.Word]: Ge,
                        [ve.NoBreakSymbol]: Ge,
                        [ve.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: u }, e)),
                            ),
                        [ve.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': ve.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [ve.NewLine]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': ve.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [ve.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                {
                                    key: t,
                                    'data-block-type': ve.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    je = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const i = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = je(e, We[t], i);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: i }));
                            }),
                            n
                        );
                    },
                    $e = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) (r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e)));
                        r !== e.length && u(e.slice(r));
                    },
                    Ve = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Ke = Se
                        ? (e) => {
                              const t = [];
                              return (
                                  $e(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(
                                              ...((e) => {
                                                  const t = [];
                                                  return (
                                                      $e(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var u;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? t.push(...((u = e), u.match(Ve) || []))
                                                                  : t.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              t.push(e[0]);
                                                          },
                                                      ),
                                                      t
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const i = t.justifyContent === Ce.FlexEnd ? n.index : u.lastIndex;
                                  (a.push(e.slice(r, i)), (r = i), (n = u.exec(e)));
                              }
                              return (r !== e.length && a.push(e.slice(r)), a);
                          },
                    ze = (e, t = '', u) => {
                        const n = [];
                        return (
                            $e(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: ve.Word, colorTag: t, childList: Ke(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = Te[u.charAt(0)];
                                    a === ve.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: ve.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: ve.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u.replace(/\ufeff+/g, '')] });
                                },
                            ),
                            n
                        );
                    },
                    Ye = (e, t, u = '', n) => {
                        const a = [],
                            r = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            $e(
                                r,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...ze(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        i = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof i || 'number' == typeof i
                                        ? a.push(...ze(String(i), u, n))
                                        : a.push({ blockType: ve.Binding, colorTag: u, childList: [i] });
                                },
                            ),
                            a
                        );
                    },
                    qe = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === ve.NoBreakWrapper) (e.childList.push(n), u.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && u.push(e),
                                u.push({ blockType: ve.NoBreakWrapper, colorTag: '', childList: [t, n] }));
                        }
                        return (t.childList.length > 0 && u.push(t), u);
                    },
                    Xe = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === ve.NoBreakSymbol
                                        ? ((u = !0), t.push(...qe(t.pop(), e)))
                                        : (u ? t.push(...qe(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    $e(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...Ye(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...Ye(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })(((a = e), a.replace(/&nbsp;/g, ' ')).replace(/&zwnbsp;/g, '\ufeff'), t, u),
                        );
                        var a;
                        return ((e) => {
                            const t = [];
                            return (
                                e.forEach((e, u) => {
                                    t.push(
                                        ...((e, t) => {
                                            const u = [],
                                                n = e.blockType,
                                                a = We[n],
                                                r = je(e, a, t);
                                            return (
                                                n === ve.NoBreakWrapper
                                                    ? u.push(a({ elementList: r, textBlock: e, key: `${t}` }))
                                                    : u.push(...r),
                                                u
                                            );
                                        })(e, u),
                                    );
                                }),
                                t
                            );
                        })(n);
                    },
                    Qe = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Ze = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Je = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Ze(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            i = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const s = Math.max(u + i, 0);
                        return a < s ? [!1, 0] : [!0, s];
                    },
                    et = (e, t, u, n, r, i) => {
                        let s = -1,
                            o = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === ve.LineBreak || c === ve.NewLine || c === ve.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = Je(u, n, r),
                                    c = e[0],
                                    E = e[1];
                                if (!c) {
                                    E > 0 && (r -= E);
                                    continue;
                                }
                                const m = d.slice(0, d.length - E) + i,
                                    _ = t[l];
                                ((o = a().cloneElement(_, _.props, m)), (s = l));
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    E = c.props.children,
                                    m = et(e, E, e.length - 1, n, r, i),
                                    _ = m[0],
                                    A = m[1];
                                if (!(_ < 0)) {
                                    const e = E.slice(0, _);
                                    ((o = a().cloneElement(c, c.props, e, A)), (s = l));
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [s, o];
                    },
                    tt = a().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: r,
                            isTooltipEnable: i = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: o,
                            targetId: l,
                            justifyContent: c = Ce.FlexStart,
                            alignContent: d = Ce.FlexStart,
                            truncateIdentify: E = '...',
                        }) => {
                            const m = (0, n.useRef)(null),
                                _ = (0, n.useRef)({ height: 0, width: 0 }),
                                g = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                F = g[0],
                                p = g[1],
                                h = (0, n.useMemo)(() => Xe(e, r, { justifyContent: c }), [r, c, e]),
                                D = (0, n.useMemo)(() => {
                                    if (
                                        i &&
                                        F.isTruncated &&
                                        (!r || !Object.values(r).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: r ? JSON.stringify(r) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [r, i, l, e, o, F.isTruncated]),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        ((_.current.width = e.contentRect.width),
                                            (_.current.height = e.contentRect.height));
                                        const t = ((e, t, u, n = '...') => {
                                                const a = [...t],
                                                    r = e.current;
                                                if (!r) return [a, !1];
                                                const i = u.height,
                                                    s = u.width,
                                                    o = r.lastElementChild;
                                                if (!Qe(o, i) && Ze(o, s) <= 0) return [a, !1];
                                                const l = r.children,
                                                    c = ((e, t) => {
                                                        let u = 0,
                                                            n = e.length - 1;
                                                        for (; n - u >= 0; ) {
                                                            const a = u + Math.ceil(0.5 * (n - u));
                                                            Qe(e[a], t) ? (n = a - 1) : (u = a + 1);
                                                        }
                                                        return u - 1;
                                                    })(l, i);
                                                if (c < 0) return [a, !1];
                                                const d = et(l, a, c, s, n.length, n),
                                                    E = d[0],
                                                    m = d[1];
                                                return (m && (a.splice(E, 1, m), a.splice(E + 1)), [a, !0]);
                                            })(m, h, _.current, E),
                                            n = t[0],
                                            a = t[1];
                                        (p({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a));
                                    },
                                    [u, E, h],
                                ),
                                B = (0, n.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const a = (0, n.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, n.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new Re.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, u, e]);
                                })(m, f, s),
                                a().createElement(
                                    'div',
                                    {
                                        className: A()(
                                            xe.base,
                                            t,
                                            xe.base__zeroPadding,
                                            s && xe.base__isTruncationAvailable,
                                        ),
                                        style: B,
                                    },
                                    a().createElement('div', { className: xe.unTruncated, ref: m }, h),
                                    a().createElement(
                                        Le,
                                        {
                                            tooltipArgs: D,
                                            className: A()(
                                                xe.tooltip,
                                                xe[`tooltip__justify-${c}`],
                                                xe[`tooltip__align-${d}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: A()(
                                                    xe.truncated,
                                                    !F.isTruncateFinished && s && xe.truncated__hide,
                                                ),
                                                style: B,
                                            },
                                            F.isTruncateFinished && s ? F.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let ut;
                !(function (e) {
                    ((e.COUNTDOWN = 'countdown'),
                        (e.TITLE = 'title'),
                        (e.SUB_TITLE = 'subTitle'),
                        (e.TASK_SHOWING = 'taskShowing'),
                        (e.TASK_OLD_STATE = 'taskOldState'),
                        (e.TASK_SWITCH_GLOW = 'taskSwitchGlow'),
                        (e.TASK_NEW_STATE = 'taskNewState'),
                        (e.MISSION_STATE = 'missionState'),
                        (e.TASK_UNLOCK_GLOW = 'taskUnlockGlow'),
                        (e.TASK_LOCKED = 'taskLocked'),
                        (e.TASK_UNLOCKED = 'taskUnlocked'),
                        (e.MISSION_UNLOCKED = 'missionUnlocked'),
                        (e.TASK_REWARDS = 'taskRewards'),
                        (e.TASK_DESCRIPTION = 'taskDescription'));
                })(ut || (ut = {}));
                const nt = { y: -5, opacity: 0 },
                    at = { y: 0, opacity: 1 },
                    rt = 350,
                    it = {
                        [ut.COUNTDOWN]: { from: nt, to: at, delay: 150, duration: rt },
                        [ut.TITLE]: { from: nt, to: at, delay: 200, duration: rt },
                        [ut.SUB_TITLE]: { from: nt, to: at, delay: 350, duration: rt },
                        [ut.TASK_SHOWING]: {
                            from: { x: 80, filter: 'blur(1px) brightness(5)', opacity: 0 },
                            to: { x: 0, filter: 'blur(0px) brightness(1)', opacity: 1 },
                            delay: 650,
                            easingType: fe.EaseOut,
                            duration: 700,
                        },
                        [ut.TASK_OLD_STATE]: {
                            from: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            to: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5, 0.5)' },
                            delay: 1350,
                            duration: 700,
                        },
                        [ut.TASK_NEW_STATE]: {
                            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(2, 2)' },
                            to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            delay: 1500,
                            duration: 700,
                        },
                        [ut.TASK_SWITCH_GLOW]: {
                            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(10, 1.5)' },
                            to: [
                                { opacity: 0.6, transform: 'translate(-50%, -50%) scale(5, 1.2)' },
                                { opacity: 0, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            ],
                            delay: 1350,
                            easingType: fe.Linear,
                            duration: 525,
                        },
                        [ut.MISSION_STATE]: { from: { opacity: 1 }, to: { opacity: 0 }, delay: 1350, duration: rt },
                        [ut.TASK_LOCKED]: {
                            from: { y: 0, opacity: 1 },
                            to: { y: 10, opacity: 0 },
                            delay: 1350,
                            duration: 1050,
                        },
                        [ut.TASK_UNLOCKED]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1700,
                            duration: 1050,
                        },
                        [ut.TASK_UNLOCK_GLOW]: {
                            from: { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
                            to: [
                                { x: 80, opacity: 0.8, transform: 'translate(-50%, -50%) scale(5, 1)' },
                                { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
                            ],
                            delay: 1350,
                            easingType: fe.Linear,
                            duration: 525,
                        },
                        [ut.MISSION_UNLOCKED]: {
                            from: { opacity: 1, transform: 'scale(1)' },
                            to: { opacity: 0, transform: 'scale(1.2)' },
                            delay: 0,
                            duration: rt,
                        },
                        [ut.TASK_REWARDS]: {
                            from: { y: 10, opacity: 0 },
                            to: { opacity: 1, y: 0 },
                            delay: 0,
                            duration: rt,
                        },
                        [ut.TASK_DESCRIPTION]: {
                            from: { opacity: 1, y: 0 },
                            to: { opacity: 0, y: -10 },
                            delay: 0,
                            duration: rt,
                        },
                    };
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const ot = (0, n.memo)(
                        ({
                            missionName: e,
                            battlesToUnlock: t,
                            withTabs: u,
                            shouldPlayUnlockAnimation: n = !1,
                            onAnimationFinished: r,
                        }) =>
                            a().createElement(
                                be,
                                st({ className: 'LockOverlay_base_6f' }, it[ut.MISSION_UNLOCKED], {
                                    isDisabled: !n,
                                    onRest: r,
                                }),
                                a().createElement('div', { className: 'LockOverlay_darkOverlay_c6' }),
                                a().createElement(
                                    'div',
                                    { className: A()('LockOverlay_locker_8c', u && 'LockOverlay_locker__withTabs_02') },
                                    a().createElement('div', { className: 'LockOverlay_ribbon_80' }),
                                    a().createElement(
                                        'div',
                                        { className: 'LockOverlay_envelope_d2' },
                                        a().createElement(tt, {
                                            classMix: 'LockOverlay_mission_ab',
                                            justifyContent: Ce.Center,
                                            text: e,
                                        }),
                                        a().createElement(
                                            'div',
                                            { className: 'LockOverlay_divider_50' },
                                            a().createElement('div', { className: 'LockOverlay_line_e1' }),
                                            a().createElement('div', { className: 'LockOverlay_lock_22' }),
                                        ),
                                        a().createElement(tt, {
                                            classMix: 'LockOverlay_condition_56',
                                            text: R.strings.sm_lobby.missionSelection.unlockCondition(),
                                            binding: { numBattles: t },
                                            justifyContent: Ce.Center,
                                        }),
                                    ),
                                ),
                            ),
                    ),
                    lt = { x: 0, y: -10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    ct = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' },
                    dt = { x: 0, y: 10, opacity: 0, transform: 'scale(1) rotate(0deg)' };
                let Et;
                !(function (e) {
                    ((e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'));
                })(Et || (Et = {}));
                const mt = {
                        [Et.Linear]: (e) => e,
                        [Et.EaseIn]: (e) => e * e * e,
                        [Et.EaseOut]: (e) => --e * e * e + 1,
                        [Et.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    },
                    _t = (0, n.memo)(function ({
                        children: e,
                        from: t = lt,
                        enter: u = ct,
                        leave: r = dt,
                        isCanceled: i = !1,
                        isTransition: s = !0,
                        duration: o = 500,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: d = Et.EaseInOut,
                        enterOnStart: E,
                        enterOnRest: m,
                        leaveOnStart: _,
                        leaveOnRest: A,
                        enterOnStartSound: g,
                        enterOnRestSound: F,
                        leaveOnStartSound: p,
                        leaveOnRestSound: h,
                        className: D,
                    }) {
                        const f = mt[d],
                            B = (0, ue.useSpringRef)(),
                            b = (0, ue.useTransition)(s, {
                                ref: B,
                                from: i ? u : t,
                                enter: Object.assign({}, u, {
                                    onStart: () => {
                                        s && (g && g(), E && E());
                                    },
                                    onRest: () => {
                                        s && (F && F(), m && m());
                                    },
                                }),
                                leave: Object.assign({}, r, {
                                    onStart: () => {
                                        s || (p && p(), _ && _());
                                    },
                                    onRest: () => {
                                        s || (h && h(), A && A());
                                    },
                                }),
                                delay: l,
                                config: { duration: o, easing: f },
                                immediate: i,
                                exitBeforeEnter: !0,
                                cancel: i,
                            });
                        return (
                            (0, n.useEffect)(() => {
                                B.start();
                            }, [B, s]),
                            b(
                                (t, u) =>
                                    u &&
                                    a().createElement(
                                        ue.animated.div,
                                        { className: D, style: Object.assign({}, t, { transformOrigin: c }) },
                                        e,
                                    ),
                            )
                        );
                    });
                var At = u(8613);
                function gt(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / 86400);
                    t -= 86400 * u;
                    const n = Math.trunc(t / 3600);
                    t -= 3600 * n;
                    const a = Math.trunc(t / 60);
                    return ((t -= 60 * a), { days: u, hours: n, minutes: a, seconds: t });
                }
                (Date.now(), At.Ew.getRegionalDateTime, At.Ew.getFormattedDateTime);
                const Ft = () => {};
                let pt;
                (L.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(pt || (pt = {})),
                    L.Sw.instance);
                const ht = (e = 0, t, u = 0, a = Ft) => {
                        const r = (0, n.useState)(e),
                            i = r[0],
                            s = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    s(e);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== u && t <= u ? (s(u), a && a(), clearInterval(r)) : s(t);
                                            },
                                            1e3 * (t || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [e, t, u, a]),
                            i
                        );
                    },
                    Dt = (e, t, u) => {
                        const n = e.days,
                            a = e.hours,
                            r = e.minutes;
                        return n >= 1
                            ? 0 === a
                                ? Me(R.strings.sm_lobby.countdown.days(), { days: n })
                                : Me(R.strings.sm_lobby.countdown.daysHours(), { days: n, hours: a })
                            : t && a < 1 && r < 5
                              ? Me(R.strings.sm_lobby.countdown.endsSoon(), { minutes: 5 })
                              : 0 === a
                                ? r < 1
                                    ? R.strings.sm_lobby.countdown.lessThanMinute()
                                    : Me(
                                          u
                                              ? R.strings.sm_lobby.countdown.minutesShort()
                                              : R.strings.sm_lobby.countdown.minutes(),
                                          { minutes: r },
                                      )
                                : 0 === r
                                  ? Me(R.strings.sm_lobby.countdown.hours(), { hours: a })
                                  : Me(
                                        u
                                            ? R.strings.sm_lobby.countdown.hoursMinutesShort()
                                            : R.strings.sm_lobby.countdown.hoursMinutes(),
                                        { hours: a, minutes: r },
                                    );
                    },
                    ft = (e, t = !1, u = !1) => {
                        const n = ht(e, 1);
                        return { timeString: Dt(gt(n), t, u), secondsLeft: n, isEndingSoon: n < 300 };
                    },
                    Bt = (0, P.Pi)(() => {
                        const e = Ae().model.selectedMission.get(),
                            t = ft(e.secondsCountdown, !0, !0),
                            u = t.timeString,
                            n = t.isEndingSoon;
                        return a().createElement(
                            'div',
                            { className: 'Countdown_base_c1' },
                            a().createElement('div', {
                                className: A()('Countdown_bg_d6', n && 'Countdown_bg__endingSoon_99'),
                            }),
                            a().createElement(
                                'div',
                                { className: 'Countdown_timer_8c' },
                                a().createElement('div', { className: 'Countdown_icon_7e' }),
                                a().createElement('div', { className: 'Countdown_text_f0' }, u),
                            ),
                        );
                    });
                let bt;
                !(function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(bt || (bt = {}));
                const vt = 'tooltip_watched';
                let Ct;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'));
                })(Ct || (Ct = {}));
                const yt = ['action', 'timeLimit'],
                    Tt = () => Date.now(),
                    St = (e, t) => {
                        const u = ((e, t) => {
                                const u = (0, n.useCallback)(
                                    (u, n = bt.Info, a) => {
                                        (a || (a = {}),
                                            Object.keys(a).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: u,
                                                    logLevel: n,
                                                    params: JSON.stringify(a),
                                                }));
                                    },
                                    [e, t],
                                );
                                return (e, t, n) => u(e, t, n);
                            })(e, t),
                            a = (0, n.useRef)(new Map()),
                            r = (0, n.useRef)(new Map()),
                            i = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, Tt());
                                },
                                [a],
                            ),
                            s = (0, n.useCallback)(() => {
                                (a.current.clear(), r.current.clear());
                            }, [a, r]),
                            o = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === r.current.get(e) &&
                                        r.current.set(e, Tt());
                                },
                                [a, r],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const u = r.current.get(e);
                                    if (void 0 === u) return;
                                    r.current.delete(e);
                                    const n = Tt() - u;
                                    a.current.set(e, t + n);
                                },
                                [a, r],
                            ),
                            c = (0, n.useCallback)(
                                (e, t = 0, n, i) => {
                                    const s = a.current.get(e);
                                    if (void 0 === s) return;
                                    (void 0 !== r.current.get(e) && l(e), a.current.delete(e));
                                    const o = (Tt() - s) / 1e3;
                                    o <= t ||
                                        ((i = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(i, o)),
                                        u(e, n, i));
                                },
                                [a, r, u, l],
                            );
                        return [(e) => i(e), (e, t, u, n) => c(e, t, u, n), () => s(), (e) => o(e), (e) => l(e)];
                    },
                    wt = (e, t) => {
                        const u = ((e) => {
                                const t = St(e, 'metrics'),
                                    u = t[0],
                                    a = t[1],
                                    r = t[2],
                                    i = t[3],
                                    s = t[4],
                                    o = (0, n.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                u = e.timeLimit,
                                                n = e.logLevel;
                                            a(
                                                t,
                                                u,
                                                n,
                                                (({
                                                    partnerID: e,
                                                    item: t,
                                                    parentScreen: u,
                                                    itemState: n,
                                                    info: a,
                                                }) => ({
                                                    item: t,
                                                    partnerID: e || null,
                                                    parent_screen: u || null,
                                                    item_state: n || null,
                                                    additional_info: a || null,
                                                }))(e),
                                            );
                                        },
                                        [a],
                                    );
                                return [(e) => u(e), (e) => o(e), () => r(), (e) => i(e), (e) => s(e)];
                            })(e),
                            a = u[0],
                            r = u[1],
                            i = t.action,
                            s = t.timeLimit,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(t, yt);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => a(i || vt),
                                onHide: () => r(Object.assign({ action: i || vt, timeLimit: s || 2 }, o)),
                            }),
                            [i, s, o, a, r],
                        );
                    };
                let kt, Ot, Nt, Lt;
                (!(function (e) {
                    ((e[(e.UNCOMPLETED = 0)] = 'UNCOMPLETED'),
                        (e[(e.COMPLETED = 1)] = 'COMPLETED'),
                        (e[(e.LOCKED = 2)] = 'LOCKED'));
                })(kt || (kt = {})),
                    (function (e) {
                        ((e.StoryMode = 'story_mode'), (e.Onboarding = 'onboarding'));
                    })(Ot || (Ot = {})),
                    (function (e) {
                        e.Watched = 'watched';
                    })(Nt || (Nt = {})),
                    (function (e) {
                        ((e.MissionSelection = 'mission_selection_window'),
                            (e.MssVehicleTooltip = 'mss_vehicle_tooltip'),
                            (e.Congratulations = 'congratulations_window'),
                            (e.Achievement = 'achievement'),
                            (e.Badge = 'badge'),
                            (e.BattleResult = 'battle_result'),
                            (e.BattleResultStatTooltip = 'battle_result_stat_tooltip'),
                            (e.SelectButtonTooltip = 'select_button_tooltip'),
                            (e.Task = 'task'),
                            (e.TaskRewardTooltip = 'task_reward_tooltip'),
                            (e.TaskCompletedTooltip = 'tasks_completed_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.PostBattleWindow = 'post_battle_window'));
                    })(Lt || (Lt = {})));
                const Rt = 'TaskDescription_base_53',
                    xt = 'TaskDescription_text_48';
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Mt = R.strings.sm_lobby.missionSelection,
                    Pt = (0, n.memo)(function ({
                        description: e,
                        taskState: t,
                        isUnlockedFirstTime: u,
                        timeString: n,
                        isShouldPlayAnimation: r,
                        onAnimationFinished: i,
                        isLockRunOut: s,
                    }) {
                        const o = t === kt.LOCKED && !s,
                            l = {
                                timer: a().createElement(
                                    'div',
                                    { className: 'TaskDescription_timer_bd' },
                                    a().createElement('div', { className: 'TaskDescription_clock_9f' }),
                                    a().createElement('div', { className: 'TaskDescription_time_82' }, n),
                                ),
                            };
                        return (u || s) && r
                            ? a().createElement(
                                  a().Fragment,
                                  null,
                                  a().createElement(
                                      be,
                                      It({ className: Rt }, it[ut.TASK_LOCKED]),
                                      a().createElement(tt, {
                                          classMix: xt,
                                          text: Mt.taskDescription.locked(),
                                          binding: l,
                                      }),
                                  ),
                                  a().createElement(
                                      be,
                                      It({ className: Rt }, it[ut.TASK_UNLOCKED], { onRest: i }),
                                      a().createElement(tt, { classMix: xt, text: e, binding: l }),
                                  ),
                              )
                            : a().createElement(
                                  'div',
                                  { className: Rt },
                                  a().createElement(tt, {
                                      classMix: A()(xt, !o && 'TaskDescription_text__notLocked_89'),
                                      text: o ? Mt.taskDescription.locked() : e,
                                      isTruncationAvailable: !0,
                                      binding: l,
                                  }),
                              );
                    }),
                    Ut = 'TaskIcon_base_50',
                    Ht = 'TaskIcon_glow_30',
                    Gt = 'TaskIcon_base__completed_f0',
                    Wt = 'TaskIcon_base__locked_0e',
                    jt = 'TaskIcon_base__hover_88',
                    $t = 'TaskIcon_iconBody_aa',
                    Vt = 'TaskIcon_iconGlow_25';
                function Kt() {
                    return (
                        (Kt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Kt.apply(this, arguments)
                    );
                }
                const zt = (0, n.memo)(function ({
                    taskState: e,
                    isCompletedFirstTime: t,
                    isUnlockedFirstTime: u,
                    isHover: n,
                    isShouldPlayAnimation: r,
                    onAnimationFinished: i,
                    onUnlockAnimationStart: s,
                    onCompletionAnimationStart: o,
                    isLockRunOut: l,
                }) {
                    return t && r
                        ? a().createElement(
                              a().Fragment,
                              null,
                              a().createElement(
                                  be,
                                  Kt({ className: Ut }, it[ut.TASK_OLD_STATE], { onStart: o }),
                                  a().createElement(
                                      'div',
                                      { className: Ut },
                                      a().createElement('div', { className: Ht }),
                                      a().createElement('div', { className: Vt }),
                                      a().createElement('div', { className: $t }),
                                  ),
                              ),
                              a().createElement(
                                  be,
                                  Kt({ className: Ut }, it[ut.TASK_NEW_STATE], { onRest: i }),
                                  a().createElement(
                                      'div',
                                      { className: A()(Ut, Gt, n && jt) },
                                      a().createElement('div', { className: Ht }),
                                      a().createElement('div', { className: Vt }),
                                      a().createElement('div', { className: $t }),
                                  ),
                              ),
                              a().createElement(
                                  be,
                                  Kt({ className: Ut }, it[ut.TASK_SWITCH_GLOW]),
                                  a().createElement('div', { className: A()(Vt, 'TaskIcon_iconGlow__switch_62') }),
                              ),
                          )
                        : (u || l) && r
                          ? a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    be,
                                    Kt({ className: Ut }, it[ut.TASK_LOCKED], { onStart: s }),
                                    a().createElement(
                                        'div',
                                        { className: A()(Ut, Wt) },
                                        a().createElement('div', { className: Ht }),
                                        a().createElement('div', { className: Vt }),
                                        a().createElement('div', { className: $t }),
                                    ),
                                ),
                                a().createElement(
                                    be,
                                    Kt({ className: Ut }, it[ut.TASK_UNLOCKED], { onRest: i }),
                                    a().createElement(
                                        'div',
                                        { className: A()(Ut, n && jt) },
                                        a().createElement('div', { className: Ht }),
                                        a().createElement('div', { className: Vt }),
                                        a().createElement('div', { className: $t }),
                                    ),
                                ),
                                a().createElement(
                                    be,
                                    Kt({ className: Ut }, it[ut.TASK_UNLOCK_GLOW]),
                                    a().createElement('div', { className: A()(Vt, 'TaskIcon_iconGlow__unlock_68') }),
                                ),
                            )
                          : a().createElement(
                                'div',
                                { className: A()(Ut, e === kt.COMPLETED && Gt, e === kt.LOCKED && !l && Wt, n && jt) },
                                a().createElement('div', { className: Ht }),
                                a().createElement('div', { className: A()(Vt) }),
                                a().createElement('div', { className: A()($t) }),
                            );
                });
                let Yt, qt, Xt, Qt, Zt, Jt, eu, tu;
                var uu;
                (!(function (e) {
                    ((e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.BattlePassTicket = 'lootBox_commonTicket'),
                        (e.BattlePassTaler = 'bptaler'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                        (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                        (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin'),
                        (e.Attachment = 'attachment'));
                })(Yt || (Yt = {})),
                    (function (e) {
                        ((e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
                    })(qt || (qt = {})),
                    ((uu = Xt || (Xt = {})).Big = 'big'),
                    (uu.Small = 'small'),
                    (uu.Mini = 'mini'),
                    (uu.S600x450 = 's600x450'),
                    (uu.S400x300 = 's400x300'),
                    (uu.S296x222 = 's296x222'),
                    (uu.S232x174 = 's232x174'),
                    (uu.S180x135 = 's180x135'),
                    (uu.S128x100 = 's128x100'),
                    (uu.S80x80 = 's80x80'),
                    (uu.S64x64 = 's64x64'),
                    (uu.S48x48 = 's48x48'),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(Qt || (Qt = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(Zt || (Zt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Jt || (Jt = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(eu || (eu = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(tu || (tu = {})));
                const nu = [Yt.Attachment],
                    au = ({ value: e, format: t = 'integral' }) => {
                        const u = (function (e) {
                                return 'gold' === e ? L.B3.GOLD : L.B3.INTEGRAL;
                            })(t),
                            n = L.Z5.getNumberFormat(e, u);
                        return void 0 !== e && void 0 !== n ? n : null;
                    },
                    ru = [
                        Yt.Items,
                        Yt.Equipment,
                        Yt.Xp,
                        Yt.XpFactor,
                        Yt.Blueprints,
                        Yt.BlueprintsAny,
                        Yt.Goodies,
                        Yt.Berths,
                        Yt.Slots,
                        Yt.Tokens,
                        Yt.CrewSkins,
                        Yt.CrewBooks,
                        Yt.Customizations,
                        Yt.CreditsFactor,
                        Yt.TankmenXp,
                        Yt.TankmenXpFactor,
                        Yt.FreeXpFactor,
                        Yt.BattleToken,
                        Yt.LootBox,
                        Yt.PremiumUniversal,
                        Yt.NaturalCover,
                        Yt.BpCoin,
                        Yt.BattlePassSelectToken,
                        Yt.BattlaPassFinalAchievement,
                        Yt.BattleBadge,
                        Yt.BattlePassTicket,
                        Yt.BonusX5,
                        Yt.CrewBonusX3,
                        Yt.EpicSelectToken,
                        Yt.Comp7TokenWeeklyReward,
                        Yt.DeluxeGift,
                        Yt.ModernizedDevicesT1Gift,
                        Yt.ModernizedDevicesT2Gift,
                        Yt.ModernizedDevicesT3Gift,
                        Yt.BattleBoosterGift,
                        Yt.OptionalDevice,
                        Yt.Attachment,
                    ],
                    iu = [Yt.Gold, Yt.Credits, Yt.Crystal, Yt.FreeXp],
                    su = [Yt.BattlePassPoints, Yt.EquipCoin],
                    ou = [Yt.PremiumPlus, Yt.Premium],
                    lu = (e, t, u) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            u,
                        );
                    },
                    cu = [Xt.Small, Xt.Big],
                    du = (e, t) => {
                        if (void 0 === e) return e;
                        switch (t) {
                            case Qt.MULTI:
                                return e.substring(1);
                            case Qt.CURRENCY:
                            case Qt.NUMBER:
                                return ((e) => e.replace(/\s+/g, '').replace(',', '').replace('.', ''))(e);
                            default:
                                return e;
                        }
                    },
                    Eu = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        base__normalize: 'Reward_base__normalize_a6',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__bptaler: 'Reward_info__bptaler_82',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    mu = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = Xt.Big,
                        special: r,
                        value: i,
                        valueType: s,
                        title: o,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e, t) => {
                                if (void 0 === t || !cu.includes(e)) return null;
                                switch (t) {
                                    case Zt.BATTLE_BOOSTER:
                                    case Zt.BATTLE_BOOSTER_REPLACE:
                                        return Jt.BATTLE_BOOSTER;
                                }
                            })(n, r),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Zt.BATTLE_BOOSTER:
                                        return eu.BATTLE_BOOSTER;
                                    case Zt.BATTLE_BOOSTER_REPLACE:
                                        return eu.BATTLE_BOOSTER_REPLACE;
                                    case Zt.BUILT_IN_EQUIPMENT:
                                        return eu.BUILT_IN_EQUIPMENT;
                                    case Zt.EQUIPMENT_PLUS:
                                        return eu.EQUIPMENT_PLUS;
                                    case Zt.EQUIPMENT_TROPHY_BASIC:
                                        return eu.EQUIPMENT_TROPHY_BASIC;
                                    case Zt.EQUIPMENT_TROPHY_UPGRADED:
                                        return eu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Zt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return eu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Zt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return eu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Zt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return eu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Zt.PROGRESSION_STYLE_UPGRADED_1:
                                        return eu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Zt.PROGRESSION_STYLE_UPGRADED_2:
                                        return eu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Zt.PROGRESSION_STYLE_UPGRADED_3:
                                        return eu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Zt.PROGRESSION_STYLE_UPGRADED_4:
                                        return eu.PROGRESSION_STYLE_UPGRADED_4;
                                    case Zt.PROGRESSION_STYLE_UPGRADED_5:
                                        return eu.PROGRESSION_STYLE_UPGRADED_5;
                                    case Zt.PROGRESSION_STYLE_UPGRADED_6:
                                        return eu.PROGRESSION_STYLE_UPGRADED_6;
                                    case Zt.ATTACHMENT_RARE:
                                        return eu.ATTACHMENT_RARE;
                                    case Zt.ATTACHMENT_EPIC:
                                        return eu.ATTACHMENT_EPIC;
                                    case Zt.ATTACHMENT_LEGENDARY:
                                        return eu.ATTACHMENT_LEGENDARY;
                                }
                            })(r),
                            F = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Qt.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Qt.CURRENCY:
                                    case Qt.NUMBER:
                                        return a().createElement(au, { format: 'integral', value: Number(e) });
                                    case Qt.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(i, s);
                        return a().createElement(
                            'div',
                            {
                                className: A()(Eu.base, Eu[`base__${n}`], nu.includes(e) && Eu.base__normalize, c),
                                style: l,
                            },
                            a().createElement(
                                Le,
                                { tooltipArgs: E, className: Eu.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: A()(Eu.image, null == d ? void 0 : d.image) },
                                        _ &&
                                            a().createElement('div', {
                                                className: A()(Eu.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: A()(Eu.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        g &&
                                            a().createElement('div', {
                                                className: A()(Eu.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: A()(
                                                    Eu.info,
                                                    Eu[`info__${e}`],
                                                    s === Qt.MULTI && Eu.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    o && a().createElement('div', { className: Eu.title }, o),
                                ),
                            ),
                            u &&
                                a().createElement(
                                    Le,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: A()(Eu.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    _u = ['missionId', 'taskId', 'rewardNum'];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const gu = (e) => {
                    let t = e.missionId,
                        u = e.taskId,
                        n = e.rewardNum,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, _u);
                    const i = wt(Ot.StoryMode, {
                            action: Nt.Watched,
                            parentScreen: Lt.MissionSelection,
                            timeLimit: 1,
                            item: Lt.TaskRewardTooltip,
                            itemState: t.toString(),
                            info: JSON.stringify({ task_id: u, task_reward_item: r.name, task_reward_num: n }),
                        }),
                        s = Object.assign({}, r.tooltipArgs, i),
                        o = !r.value && !r.title;
                    return a().createElement(
                        mu,
                        Au({ className: A()('TrackedReward_base_8a', o && 'TrackedReward_base__centered_43') }, r, {
                            tooltipArgs: s,
                        }),
                    );
                };
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const pu = (0, n.memo)(
                    ({ rewards: e, missionId: t, taskId: u }) => {
                        const n = f().mediaSize >= p.ExtraLarge ? Xt.Big : Xt.Small;
                        return a().createElement(
                            'div',
                            { className: 'TaskRewards_base_04' },
                            a().createElement(
                                'div',
                                { className: 'TaskRewards_title_76' },
                                R.strings.sm_lobby.missionSelection.taskRewards(),
                            ),
                            a().createElement(
                                'div',
                                { className: 'TaskRewards_rewards_f5' },
                                de(e, (e, r) => {
                                    const i =
                                        ((s = e.name),
                                        ru.includes(s)
                                            ? Qt.MULTI
                                            : iu.includes(s)
                                              ? Qt.CURRENCY
                                              : su.includes(s)
                                                ? Qt.NUMBER
                                                : ou.includes(s)
                                                  ? Qt.PREMIUM_PLUS
                                                  : Qt.STRING);
                                    var s;
                                    return a().createElement(
                                        gu,
                                        Fu({}, e, {
                                            key: r,
                                            value: du(e.value, i),
                                            valueType: i,
                                            image: e.icon[n],
                                            size: n,
                                            missionId: t,
                                            taskId: u,
                                            rewardNum: r + 1,
                                            tooltipArgs: lu({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                        }),
                                    );
                                }),
                            ),
                        );
                    },
                    (e, t) => e.missionId === t.missionId && e.taskId === t.taskId,
                );
                function hu() {
                    return (
                        (hu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        hu.apply(this, arguments)
                    );
                }
                const Du = ({
                    index: e,
                    missionId: t,
                    taskId: u,
                    description: r,
                    taskState: i,
                    isCompletedFirstTime: s,
                    secondsBeforeUnlock: o,
                    isUnlockedFirstTime: l,
                    onTaskUnlocked: c,
                    animationCounter: d,
                    rewards: E,
                    onAppearanceAnimationStart: m = re,
                    onAppearanceAnimationFinished: _ = re,
                    onUnlockAnimationStart: g = re,
                    onCompletionAnimationStart: F = re,
                    onAnimationFinished: p = re,
                }) => {
                    const h = (0, n.useRef)(o),
                        D = (0, n.useState)(s || l),
                        f = D[0],
                        B = D[1],
                        b = (0, n.useState)(!1),
                        v = b[0],
                        C = b[1],
                        y = (0, n.useState)(!1),
                        T = y[0],
                        S = y[1],
                        w = (0, n.useState)(!1),
                        k = w[0],
                        O = w[1],
                        N = (0, n.useState)(void 0),
                        L = N[0],
                        R = N[1],
                        x = ft(o),
                        I = x.timeString,
                        M = x.secondsLeft,
                        P = wt(Ot.StoryMode, {
                            action: Nt.Watched,
                            parentScreen: Lt.MissionSelection,
                            timeLimit: 2,
                            item: Lt.Task,
                            itemState: t.toString(),
                            info: JSON.stringify({ task_id: u }),
                        }),
                        U = P.onShow,
                        H = P.onHide;
                    ((0, n.useEffect)(() => () => clearTimeout(L), [L]),
                        (0, n.useEffect)(() => {
                            0 !== h.current && 0 === M && (B(!0), C(!0), c(u));
                        }, [M, c, u, o]),
                        (0, n.useEffect)(() => {
                            B(!0);
                        }, [d]));
                    const G = (0, n.useCallback)(() => {
                            (B(!1), p());
                        }, [p]),
                        W = i !== kt.LOCKED && E.length > 0;
                    return a().createElement(
                        be,
                        hu(
                            { className: 'TaskListItem_base_d6', key: `${t}_${e}` },
                            Object.assign({}, it[ut.TASK_SHOWING], { delay: 650 + 150 * e }),
                            { onStart: m, onRest: _ },
                        ),
                        a().createElement(
                            'div',
                            {
                                className: 'TaskListItem_frame_cb',
                                onMouseEnter: () => {
                                    (R(
                                        window.setTimeout(() => {
                                            O(!0);
                                        }, 150),
                                    ),
                                        Fe.playHighlight(),
                                        S(!0),
                                        U());
                                },
                                onMouseLeave: () => {
                                    (clearTimeout(L), O(!1), S(!1), H());
                                },
                            },
                            a().createElement('div', {
                                className: A()('TaskListItem_frameImg_d3', T && 'TaskListItem_frameImg__hover_24'),
                            }),
                            a().createElement(zt, {
                                taskState: i,
                                isCompletedFirstTime: s,
                                isUnlockedFirstTime: l,
                                isLockRunOut: v,
                                isHover: T,
                                isShouldPlayAnimation: f,
                                onAnimationFinished: G,
                                onCompletionAnimationStart: F,
                                onUnlockAnimationStart: g,
                            }),
                            W &&
                                a().createElement(
                                    be,
                                    hu({}, it[ut.TASK_REWARDS], { isReverse: !k }),
                                    a().createElement(pu, { rewards: E, missionId: t, taskId: u }),
                                ),
                            a().createElement(
                                be,
                                hu({ className: 'TaskListItem_description_26' }, it[ut.TASK_DESCRIPTION], {
                                    isReverse: !!W && !k,
                                    isDisabled: !W,
                                }),
                                a().createElement(Pt, {
                                    description: r,
                                    taskState: i,
                                    isUnlockedFirstTime: l,
                                    isLockRunOut: v,
                                    timeString: I,
                                    isShouldPlayAnimation: f,
                                    onAnimationFinished: G,
                                }),
                            ),
                        ),
                    );
                };
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const Bu = (0, P.Pi)(({ isChanging: e }) => {
                    const t = Ae(),
                        u = t.controls,
                        r = t.model,
                        i = (0, n.useRef)(!1),
                        s = (0, n.useRef)(!1),
                        o = r.selectedMission.get(),
                        l = r.tasks.get(),
                        c = (0, n.useCallback)(() => {
                            s.current || (ge('dq_screen_quest_reroll'), (s.current = !0));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            s.current || (ge('dq_screen_premium_missions_complete'), (s.current = !0));
                        }, []),
                        E = (0, n.useCallback)(() => {
                            i.current || (ge('dq_widget_slide_in'), (i.current = !0));
                        }, []),
                        m = (0, n.useCallback)(() => {
                            i.current = !1;
                        }, []),
                        _ = (0, n.useCallback)(() => {
                            s.current = !1;
                        }, []);
                    return e && i.current
                        ? null
                        : a().createElement(
                              'div',
                              { className: 'TaskList_base_fb' },
                              de(l, (e, t) =>
                                  a().createElement(
                                      Du,
                                      fu(
                                          {
                                              key: `taskListItem_${e.taskId}_${t}`,
                                              missionId: o.missionId,
                                              index: t,
                                              onTaskUnlocked: u.selectedMissionTaskUnlocked,
                                          },
                                          e,
                                          {
                                              onUnlockAnimationStart: c,
                                              onCompletionAnimationStart: d,
                                              onAnimationFinished: _,
                                              onAppearanceAnimationStart: E,
                                              onAppearanceAnimationFinished: m,
                                          },
                                      ),
                                  ),
                              ),
                          );
                });
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const vu = (0, P.Pi)(({ isChanged: e, durationTasks: t }) => {
                    const u = Ae().model,
                        n = u.root.selectedTab.get() === ne.EVENT,
                        r = u.selectedMission.get(),
                        i = r.missionId,
                        s = u.tasks.get().length,
                        o = f().mediaSize > p.Large;
                    return a().createElement(
                        'div',
                        { className: A()('MissionInfo_base_ff', s > 1 && 'MissionInfo_base__center_dc') },
                        r.isCountdownVisible &&
                            a().createElement(
                                be,
                                bu({ key: n ? 'countdown' : `countdown_${i}` }, it[ut.COUNTDOWN]),
                                a().createElement(Bt, null),
                            ),
                        a().createElement(
                            be,
                            bu({ key: n ? 'title' : `title_${i}` }, it[ut.TITLE], {
                                className: 'MissionInfo_title_af',
                            }),
                            R.strings.sm_lobby.missionSelection.missionName.$num(i),
                        ),
                        a().createElement(
                            be,
                            bu({ key: n ? 'subTitle' : `subTitle_${i}` }, it[ut.SUB_TITLE]),
                            a().createElement(tt, {
                                classMix: 'MissionInfo_subTitle_64',
                                text: R.strings.sm_lobby.missionSelection.missionDescription.$num(i),
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                            }),
                        ),
                        a().createElement(
                            'div',
                            { style: { height: (o ? 86 : 76) * s + 'rem' } },
                            a().createElement(
                                _t,
                                { key: `taskList_${i}`, isTransition: e, duration: t },
                                a().createElement(Bu, { isChanging: !e }),
                            ),
                        ),
                    );
                });
                var Cu = u(6112);
                const yu = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Tu() {
                    return (
                        (Tu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Tu.apply(this, arguments)
                    );
                }
                const Su = (0, n.forwardRef)(function (e, t) {
                        let u = e.src,
                            r = e.className,
                            s = e.autoplay,
                            o = void 0 !== s && s,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            _ = e.onClick,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, yu);
                        const g = t,
                            F = (0, n.useRef)(null);
                        return (
                            M(() =>
                                i.O.view.events.onDisplayChanged((e, t) => {
                                    var u, n;
                                    (t === Cu.W.hidden && (null == (u = F.current) || u.pause()),
                                        t === Cu.W.shown && (null == (n = F.current) || n.play()));
                                }),
                            ),
                            (0, n.useEffect)(
                                () =>
                                    ((e) => {
                                        let t,
                                            u = null;
                                        return (
                                            (u = requestAnimationFrame(() => {
                                                u = requestAnimationFrame(() => {
                                                    ((u = null),
                                                        (t = (() => {
                                                            const e = F.current;
                                                            if (!g || !e || !E)
                                                                return void (
                                                                    null != e &&
                                                                    e.cohFastSeek &&
                                                                    (e.cohFastSeek = !1)
                                                                );
                                                            const t = e.cohGetKeyframeTimestamps();
                                                            t.length > 0
                                                                ? ((e.cohFastSeek = !0),
                                                                  t.map((t) => {
                                                                      null == e || e.cohPrebufferKeyframe(t);
                                                                  }))
                                                                : console.warn(
                                                                      "Can't prebuffered keyframes, keyframes was not found",
                                                                  );
                                                        })()));
                                                });
                                            })),
                                            () => {
                                                ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                                            }
                                        );
                                    })(),
                                [E, g],
                            ),
                            (0, n.useEffect)(() => {
                                if (g && F.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: re,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const u = (function (u) {
                                                    let n = 0;
                                                    return [
                                                        function u() {
                                                            ((() => {
                                                                if (F.current) {
                                                                    const u = F.current,
                                                                        n = u.currentTime,
                                                                        a = u.duration;
                                                                    if (
                                                                        (t !== n &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: n, duration: a }),
                                                                            ),
                                                                            (t = n)),
                                                                        F.current.paused || !g || !E)
                                                                    )
                                                                        return;
                                                                    const r = F.current.cohGetKeyframeTimestamps();
                                                                    r.forEach((t, u) => {
                                                                        n > r[u] - 0.02 &&
                                                                            n < r[u] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != m ? m : {},
                                                                                )[u];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${m ? n : `Point_${u}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(u)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = u[0],
                                                a = u[1];
                                            return (n(), a);
                                        };
                                    e.changeTimeLoop = t();
                                    const u = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const u = e.changeTimeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const u = e.changeKeyframeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.currentTime;
                                        },
                                        r = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            var t, u;
                                            F.current &&
                                                (F.current.currentTime =
                                                    (0, (t = F.current.duration), (u = e) < 0 ? 0 : u > t ? t : u));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (o(), i(0));
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = F.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            (i(e), s());
                                        },
                                        _ = (e) => {
                                            (i(e), o());
                                        },
                                        A = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        p = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = F.current) || u.addEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = F.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        h = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = F.current) || u.removeEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = F.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (g.current = {
                                            on: p,
                                            off: h,
                                            play: s,
                                            pause: o,
                                            stop: l,
                                            cleanup: A,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: _,
                                            setCurrentTime: i,
                                            domRef: F.current,
                                            onChangeTime: u,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (A(), (g.current = null));
                                        }
                                    );
                                }
                            }, [m, g, E]),
                            (0, n.useEffect)(() => {
                                F.current && o && F.current.play();
                            }, [o, d]),
                            (0, n.useEffect)(() => {
                                if (F.current)
                                    return () => {
                                        F.current && F.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                Tu({ src: u, className: r, style: l, loop: d, ref: F, onClick: _ }, A),
                            )
                        );
                    }),
                    wu = (0, n.memo)(Su);
                let ku;
                !(function (e) {
                    ((e.UNDEFINED = ''), (e.NORMAL = 'normal'), (e.HARD = 'hard'), (e.VERY_HARD = 'very_hard'));
                })(ku || (ku = {}));
                const Ou = {
                    base: 'DifficultyButton_base_d7',
                    backSelected: 'DifficultyButton_backSelected_4c',
                    backLocked: 'DifficultyButton_backLocked_70',
                    backHover: 'DifficultyButton_backHover_63',
                    back: 'DifficultyButton_back_ac',
                    backSelected__normal: 'DifficultyButton_backSelected__normal_82',
                    backLocked__normal: 'DifficultyButton_backLocked__normal_1f',
                    backHover__normal: 'DifficultyButton_backHover__normal_b7',
                    back__normal: 'DifficultyButton_back__normal_0e',
                    backSelected__hard: 'DifficultyButton_backSelected__hard_6c',
                    backLocked__hard: 'DifficultyButton_backLocked__hard_1a',
                    backHover__hard: 'DifficultyButton_backHover__hard_05',
                    back__hard: 'DifficultyButton_back__hard_bb',
                    backSelected__very_hard: 'DifficultyButton_backSelected__very_hard_d3',
                    backLocked__very_hard: 'DifficultyButton_backLocked__very_hard_b6',
                    backHover__very_hard: 'DifficultyButton_backHover__very_hard_46',
                    back__very_hard: 'DifficultyButton_back__very_hard_a2',
                    base__selected: 'DifficultyButton_base__selected_10',
                    base__locked: 'DifficultyButton_base__locked_d4',
                    area: 'DifficultyButton_area_6d',
                    displayName: 'DifficultyButton_displayName_81',
                    displayNameLocked: 'DifficultyButton_displayNameLocked_1f',
                    video: 'DifficultyButton_video_cd',
                    video__container: 'DifficultyButton_video__container_74',
                    video__static: 'DifficultyButton_video__static_83',
                    video__normal: 'DifficultyButton_video__normal_2b',
                    video__hard: 'DifficultyButton_video__hard_70',
                    video__very_hard: 'DifficultyButton_video__very_hard_50',
                };
                function Nu() {
                    return (
                        (Nu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Nu.apply(this, arguments)
                    );
                }
                const Lu = (0, n.memo)(
                        ({
                            isSelected: e,
                            missionId: t,
                            selectedMissionId: u,
                            displayName: r,
                            difficulty: s,
                            locked: o,
                            onClick: l,
                        }) => {
                            const c = (0, n.useRef)(null),
                                d = wt(Ot.StoryMode, {
                                    action: Nt.Watched,
                                    parentScreen: Lt.MissionSelection,
                                    timeLimit: 2,
                                    item: Lt.SelectButtonTooltip,
                                    itemState: u.toString(),
                                    info: JSON.stringify({
                                        select_button_mission: t.toString(),
                                        select_button_state: o ? 'locked' : 'unlocked',
                                    }),
                                });
                            return (
                                (0, n.useEffect)(() => {
                                    const t = c.current;
                                    if (t) return e ? t.play() : t.pause();
                                }, [e, c]),
                                a().createElement(
                                    W,
                                    Nu(
                                        {
                                            contentId: R.views.story_mode.lobby.DifficultyTooltip('resId'),
                                            args: { difficulty: s, isSelected: e, missionId: t },
                                        },
                                        d,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: A()(Ou.base, e && Ou.base__selected, o && Ou.base__locked) },
                                        a().createElement('div', { className: A()(Ou.back, Ou[`back__${s}`]) }),
                                        !o &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                !e &&
                                                    a().createElement('div', {
                                                        className: A()(Ou.backHover, Ou[`backHover__${s}`]),
                                                    }),
                                                a().createElement('div', {
                                                    className: A()(Ou.backSelected, Ou[`backSelected__${s}`]),
                                                }),
                                            ),
                                        o &&
                                            a().createElement('div', {
                                                className: A()(Ou.backLocked, Ou[`backLocked__${s}`]),
                                            }),
                                        a().createElement(
                                            'div',
                                            { className: A()(Ou.video, Ou.video__container) },
                                            i.O.client.graphicsQuality.isLow()
                                                ? a().createElement('div', {
                                                      className: A()(Ou.video, Ou.video__static, Ou[`video__${s}`]),
                                                  })
                                                : a().createElement(wu, {
                                                      className: A()(Ou.video, Ou[`video__${s}`]),
                                                      src: R.videos.story_mode.v_icon_fire(),
                                                      ref: c,
                                                      loop: !0,
                                                  }),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: A()(!o && Ou.displayName, o && Ou.displayNameLocked) },
                                            r,
                                        ),
                                        a().createElement('div', {
                                            className: Ou.area,
                                            onClick: () => {
                                                e ||
                                                    o ||
                                                    (s === ku.HARD
                                                        ? ge('gui_hangar_sm_difficulty_02')
                                                        : s === ku.VERY_HARD
                                                          ? ge('gui_hangar_sm_difficulty_03')
                                                          : ge('gui_hangar_sm_difficulty_01'),
                                                    l(t));
                                            },
                                            onMouseEnter: () => {
                                                e || Fe.playHighlight();
                                            },
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    Ru = {
                        base: 'MissionButton_base_d2',
                        base__locked: 'MissionButton_base__locked_bf',
                        area: 'MissionButton_area_92',
                        base__selected: 'MissionButton_base__selected_d4',
                        backNormal: 'MissionButton_backNormal_d2',
                        backSelected: 'MissionButton_backSelected_c4',
                        iconShadow: 'MissionButton_iconShadow_5f',
                        iconGlow: 'MissionButton_iconGlow_20',
                        icon: 'MissionButton_icon_96',
                        hover: 'MissionButton_hover_87',
                        missionId: 'MissionButton_missionId_97',
                        missionState: 'MissionButton_missionState_06',
                        video: 'MissionButton_video_5a',
                        video__static: 'MissionButton_video__static_74',
                    };
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Iu = (0, n.memo)(
                        ({
                            isSelected: e,
                            missionId: t,
                            displayName: u,
                            isCompleted: r,
                            isCompletedFirstTime: s,
                            locked: o,
                            onClick: l,
                        }) => {
                            const c = (0, n.useRef)(null);
                            return (
                                (0, n.useEffect)(() => {
                                    const t = c.current;
                                    if (t) return e ? t.play() : t.pause();
                                }, [e, c]),
                                a().createElement(
                                    'div',
                                    {
                                        className: A()(
                                            Ru.base,
                                            e && Ru.base__selected,
                                            r && Ru.base__complete,
                                            o && Ru.base__locked,
                                        ),
                                    },
                                    a().createElement('div', {
                                        className: Ru.area,
                                        onClick: () => {
                                            e || (Fe.playClick(), l(t));
                                        },
                                        onMouseEnter: Fe.playHighlight,
                                    }),
                                    a().createElement('div', { className: Ru.backNormal }),
                                    a().createElement('div', { className: Ru.backSelected }),
                                    (!r || s || o) &&
                                        a().createElement(
                                            be,
                                            xu({ className: Ru.missionState }, it[ut.MISSION_STATE], {
                                                isDisabled: !s,
                                            }),
                                            a().createElement('div', { className: Ru.iconShadow }),
                                            a().createElement('div', { className: Ru.iconGlow }),
                                            a().createElement('div', { className: Ru.icon }),
                                        ),
                                    a().createElement(
                                        'div',
                                        { className: Ru.video },
                                        i.O.client.graphicsQuality.isLow()
                                            ? a().createElement('div', { className: A()(Ru.video, Ru.video__static) })
                                            : a().createElement(wu, {
                                                  className: Ru.video,
                                                  src: R.videos.story_mode.v_icon_fire(),
                                                  ref: c,
                                                  loop: !0,
                                              }),
                                    ),
                                    a().createElement('div', { className: Ru.hover }),
                                    a().createElement('div', { className: Ru.missionId }, u),
                                )
                            );
                        },
                    ),
                    Mu = (0, P.Pi)(({ onClick: e, className: t }) => {
                        const u = Ae().model,
                            n = u.missions.get(),
                            r = u.selectedMission.get().missionId,
                            i = u.computes.getIsSelectedMissionCompletedFirstTime();
                        return a().createElement(
                            'div',
                            { className: A()('MissionSelector_base_69', t) },
                            de(n, (t, s) => {
                                const o = r === t.missionId,
                                    l = (function (e, t) {
                                        var u;
                                        if (!(t >= e.length))
                                            return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                                    })(n, s + 1),
                                    c = r === (null == l ? void 0 : l.missionId);
                                return a().createElement(
                                    a().Fragment,
                                    { key: t.missionId },
                                    u.root.selectedTab.get() === ne.EVENT
                                        ? a().createElement(Lu, {
                                              onClick: e,
                                              isSelected: o,
                                              missionId: t.missionId,
                                              displayName: t.displayName,
                                              difficulty: t.difficulty,
                                              selectedMissionId: r,
                                              locked: t.locked,
                                          })
                                        : a().createElement(Iu, {
                                              onClick: e,
                                              isSelected: o,
                                              missionId: t.missionId,
                                              displayName: t.displayName,
                                              isCompleted: t.isCompleted,
                                              isCompletedFirstTime: o && i,
                                              locked: t.locked,
                                          }),
                                    u.root.selectedTab.get() !== ne.EVENT &&
                                        s !== n.length - 1 &&
                                        a().createElement('div', {
                                            className: A()(
                                                'MissionSelector_line_e4',
                                                o && 'MissionSelector_line__left_9c',
                                                c && 'MissionSelector_line__right_dc',
                                                (o || c) && 'MissionSelector_line__selected_ff',
                                            ),
                                        }),
                                );
                            }),
                        );
                    });
                function Pu() {
                    return (
                        (Pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Pu.apply(this, arguments)
                    );
                }
                const Uu = ({ className: e }) => {
                        const t = wt(Ot.StoryMode, {
                            action: Nt.Watched,
                            item: Lt.MssVehicleTooltip,
                            parentScreen: Lt.MissionSelection,
                            timeLimit: 2,
                        });
                        return a().createElement(
                            'div',
                            { className: A()('MissionVehicle_base_5d', e) },
                            a().createElement(
                                'div',
                                { className: 'MissionVehicle_text_ba' },
                                R.strings.sm_lobby.missionSelection.specialVehicle(),
                            ),
                            a().createElement(
                                W,
                                Pu(
                                    {
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !0,
                                        contentId: R.views.story_mode.lobby.MissionTooltip('resId'),
                                    },
                                    t,
                                ),
                                a().createElement('div', { className: 'MissionVehicle_icon_bb' }),
                            ),
                        );
                    },
                    Hu = 360,
                    Gu = { tension: 210, friction: 240 },
                    Wu = { tension: 70, friction: 480 },
                    ju = (e, t, u, n) => {
                        const a = t[e.spriteName].frameX,
                            r = t[e.spriteName].frameY,
                            i = t[e.spriteName].sourceName,
                            s = t[e.spriteName].sourceWidth,
                            o = t[e.spriteName].sourceHeight;
                        return {
                            style: {
                                width: e.width,
                                height: e.height,
                                opacity: e.opacity,
                                transform: e.transform,
                                transformOrigin: e.transformOrigin,
                                background: 'no-repeat 50% / 100% 100%',
                                backgroundImage: `url('${n}${i}${u}')`,
                                backgroundAttachment: 'fixed',
                                backgroundPosition: `-${a}rem -${r}rem`,
                                backgroundSize: `${s}rem ${o}rem`,
                                mixBlendMode: e.mixBlendMode,
                            },
                            source: { backgroundSource: `${n}${i}${u}` },
                        };
                    },
                    $u = (0, P.Pi)(({ loadChecker: e, item: t }) => {
                        const u = Ae().model,
                            n = u.parallax.get(),
                            r = n.chunkFileExt,
                            i = n.chunksAssetsPath;
                        return a().createElement(
                            'div',
                            { className: 'AssetItem_base_bb' },
                            a().createElement('div', {
                                className: 'AssetItem_sprite_ee',
                                style: Object.assign({}, ju(t, u.computes.atlasObj(), r, i).style),
                            }),
                            a().createElement('img', {
                                className: 'AssetItem_imgLoader_84',
                                alt: t.keyName,
                                src: ju(t, u.computes.atlasObj(), r, i).source.backgroundSource,
                                onLoad: e,
                            }),
                        );
                    }),
                    Vu = (0, P.Pi)(({ dioramaLoaded: e }) => {
                        const t = Ae().model.computes.parallaxStructureObj(),
                            u = t ? t.length : 0,
                            r = (0, n.useRef)(0),
                            i = (0, n.useCallback)(() => {
                                (r.current++, r.current === u && (e && e(), (r.current = 0)));
                            }, [e, u]);
                        return a().createElement(
                            'div',
                            { className: 'Assets_base_fd' },
                            t &&
                                t.map((e, u) =>
                                    a().createElement($u, {
                                        key: `${t.missionId}_${e.keyName}_${u}`,
                                        item: e,
                                        loadChecker: i,
                                    }),
                                ),
                        );
                    }),
                    Ku = 2560 / 1440,
                    zu = (0, P.Pi)(({ children: e }) => {
                        const t = Ae().model.parallax.get(),
                            u = t.perspective,
                            r = t.overallScale,
                            s = t.perspectiveOriginX,
                            o = t.perspectiveOriginY,
                            l = t.wrapperHeight,
                            c = t.wrapperWidth,
                            d = (0, n.useState)(1),
                            E = d[0],
                            m = d[1],
                            _ = (0, n.useCallback)(() => {
                                const e = i.O.view.getSize('rem');
                                let t = 1;
                                (e.width >= e.height * Ku
                                    ? (t = e.width / 2560)
                                    : e.height >= e.width / Ku && (t = e.height / 1440),
                                    m(t));
                            }, []);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    i.O.client.events.on('screenResized', _),
                                    i.O.client.events.on('self.onScaleUpdated', _),
                                    _(),
                                    () => {
                                        (i.O.client.events.off('screenResized', _),
                                            i.O.client.events.off('self.onScaleUpdated', _));
                                    }
                                ),
                                [_],
                            ),
                            a().createElement(
                                'div',
                                {
                                    style: {
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: `translate(-50%, -50%) scale(${r * E})`,
                                        perspective: `${u}rem`,
                                        perspectiveOrigin: `${s}% ${o}%`,
                                        width: `${c}rem`,
                                        height: `${l}rem`,
                                    },
                                },
                                e,
                            )
                        );
                    }),
                    Yu = (0, P.Pi)(({ refParent: e, dioramaLoaded: t }) => {
                        const u = Ae().model.parallax.get(),
                            r = u.xTilt,
                            i = u.xTiltRange,
                            s = u.yTilt,
                            o = u.yTiltRange,
                            l = u.xSlide,
                            c = u.ySlide,
                            d = ((e, t) => {
                                const u = (0, n.useCallback)(
                                        (t, u, n) => {
                                            const a = Math.min(Math.max((t - n.x) / n.width, 0), 1),
                                                r = Math.min(Math.max((u - n.y) / n.height, 0), 1),
                                                i = e.yTilt + e.yTiltRange + Hu - (e.yTilt - e.yTiltRange + Hu),
                                                s = e.xTilt + e.xTiltRange + Hu - (e.xTilt - e.xTiltRange + Hu),
                                                o = -a * i + i / 2 + e.yTilt,
                                                l = r * s - s / 2 + e.xTilt;
                                            return {
                                                x: a * n.width - n.width / 2,
                                                y: r * n.height - n.height / 2,
                                                xR: l,
                                                yR: o,
                                            };
                                        },
                                        [e.xTilt, e.xTiltRange, e.yTilt, e.yTiltRange],
                                    ),
                                    a = (0, ue.useSpring)(() => ({ x: 0, y: 0, xR: e.xTilt, yR: e.yTilt }), []);
                                return (
                                    (0, n.useEffect)(() => {
                                        const n = ({ clientX: n, clientY: r }) => {
                                            if (t.current) {
                                                const i = t.current.getBoundingClientRect(),
                                                    s = a[1];
                                                if (
                                                    !((e, t, u) => {
                                                        const n = u.width + u.x,
                                                            a = u.height + u.y;
                                                        return e >= 2 + u.x && t >= 2 + u.y && e <= n - 2 && t <= a - 2;
                                                    })(n, r, i)
                                                )
                                                    return void s.start({
                                                        x: 0,
                                                        y: 0,
                                                        xR: e.xTilt,
                                                        yR: e.yTilt,
                                                        config: Wu,
                                                    });
                                                s.start(Object.assign({}, u(n, r, i), { config: Gu }));
                                            }
                                        };
                                        return (
                                            document.addEventListener('mousemove', n),
                                            () => {
                                                document.removeEventListener('mousemove', n);
                                            }
                                        );
                                    }, [a, u, e.xTilt, e.yTilt, t]),
                                    a
                                );
                            })({ xTilt: r, xTiltRange: i, yTilt: s, yTiltRange: o }, e)[0];
                        return a().createElement(
                            zu,
                            null,
                            a().createElement(
                                ue.animated.div,
                                {
                                    style: {
                                        x: d.x.to((e) => e * l),
                                        y: d.y.to((e) => e * c),
                                        rotateX: d.xR,
                                        rotateY: d.yR,
                                    },
                                    className: 'Parallax_base_12',
                                },
                                a().createElement(
                                    'div',
                                    { className: 'Parallax_asset_32' },
                                    a().createElement(Vu, { dioramaLoaded: t }),
                                ),
                            ),
                        );
                    }),
                    qu = 'TabItem_tab_ad',
                    Xu = (0, n.memo)(function ({ tabText: e, isSelected: t, onClick: u }) {
                        return a().createElement(
                            'div',
                            { className: A()('TabItem_base_ba', t && 'TabItem_base__selected_bc') },
                            a().createElement(
                                'div',
                                {
                                    className: qu,
                                    onClick: () => {
                                        t || (Fe.playClick(), u());
                                    },
                                    onMouseEnter: () => {
                                        t || Fe.playHighlight();
                                    },
                                },
                                e,
                            ),
                            a().createElement('div', { className: A()(qu, 'TabItem_tab__hoverDecor_4c') }, e),
                        );
                    }),
                    Qu = 'Tabs_line_13',
                    Zu = (0, n.memo)(({ selectedTab: e, onChange: t }) =>
                        a().createElement(
                            'div',
                            { className: 'Tabs_base_cb' },
                            a().createElement('div', { className: Qu }),
                            a().createElement('div', { className: A()(Qu, 'Tabs_line__second_47') }),
                            a().createElement(Xu, {
                                tabText: R.strings.sm_lobby.missionSelection.tab.newbies(),
                                onClick: () => t(ne.NEWBIES),
                                isSelected: e === ne.NEWBIES,
                            }),
                            a().createElement(Xu, {
                                tabText: R.strings.sm_lobby.missionSelection.tab.event(),
                                onClick: () => t(ne.EVENT),
                                isSelected: e === ne.EVENT,
                            }),
                        ),
                    ),
                    Ju = 'MissionSelectionViewApp_blackScreen_8d',
                    en = 'MissionSelectionViewApp_blackScreen__overlay_b7',
                    tn = (0, P.Pi)(() => {
                        const e = Ae(),
                            t = e.controls,
                            u = e.model,
                            r = (0, n.useState)({ id: void 0, isTab: !1 }),
                            i = r[0],
                            s = r[1],
                            o = u.selectedMission.get(),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)({ missionId: void 0, locked: !1 }),
                            d = (0, n.useState)(!1),
                            E = d[0],
                            m = d[1],
                            _ = u.root.isTabsVisible.get(),
                            g = u.root.selectedTab.get(),
                            F = g === ne.EVENT,
                            p = i.isTab ? g : o.missionId,
                            h = (0, n.useState)(!1),
                            D = h[0],
                            f = h[1],
                            B = (0, ue.useSpring)(() => ({})),
                            b = B[0],
                            v = B[1];
                        ((0, n.useEffect)(() => {
                            i.id !== o.missionId && s({ id: o.missionId, isTab: !1 });
                        }, [o.missionId]),
                            M(() => {
                                c.current = { missionId: o.missionId, locked: o.locked };
                            }),
                            (0, n.useEffect)(() => {
                                (c.current.missionId === o.missionId && c.current.locked && !o.locked && m(!0),
                                    (c.current = { missionId: o.missionId, locked: o.locked }));
                            }, [o, o.missionId, o.locked]));
                        const C = (0, n.useCallback)(() => {
                                m(!1);
                            }, []),
                            y = (0, n.useCallback)(
                                (e, u) => {
                                    D ||
                                        (f(!0),
                                        v.start({
                                            to: { opacity: 1 },
                                            onRest: () => (u ? t.changeTab(e) : t.missionSelect(e)),
                                            delay: 50,
                                            config: { duration: 200 },
                                        }),
                                        s({ id: e, isTab: u }),
                                        m(!1));
                                },
                                [v, t, D],
                            ),
                            T = (0, n.useCallback)(() => {
                                (v.start({ to: { opacity: 0 }, config: { duration: 200 } }), t.loaded(), f(!1));
                            }, [v, t]);
                        I(N.n.ESCAPE, t.exit);
                        const S = u.modeName.get(),
                            w = u.modeId.get();
                        return a().createElement(
                            'div',
                            { className: 'MissionSelectionViewApp_base_fd', ref: l },
                            a().createElement('div', { className: Ju }),
                            !o.locked && u.root.isParallaxEnabled.get()
                                ? a().createElement(Yu, { refParent: l, dioramaLoaded: T })
                                : a().createElement(ae, {
                                      backgroundPath: R.images.story_mode.gui.maps.icons.common.backgrounds.$num(
                                          o.missionId,
                                      ),
                                      onLoaded: T,
                                      grayscaleApplied: o.locked,
                                      showVignette: !o.locked,
                                      showBlur: o.locked,
                                  }),
                            o.locked
                                ? a().createElement('div', { className: 'MissionSelectionViewApp_vignette_fd' })
                                : a().createElement(
                                      n.Fragment,
                                      null,
                                      a().createElement('div', {
                                          className: 'MissionSelectionViewApp_leftSparkles_e6',
                                      }),
                                      a().createElement('div', {
                                          className: 'MissionSelectionViewApp_rightSparkles_84',
                                      }),
                                      a().createElement('div', { className: 'MissionSelectionViewApp_shadowLeft_62' }),
                                  ),
                            a().createElement('div', { className: 'MissionSelectionViewApp_shadowTop_1a' }),
                            a().createElement('div', { className: 'MissionSelectionViewApp_shadowBottom_9c' }),
                            _ && a().createElement('div', { className: 'MissionSelectionViewApp_shadowMissions_ca' }),
                            F && a().createElement('div', { className: 'MissionSelectionViewApp_logo_32' }),
                            a().createElement(ue.animated.div, { className: A()(Ju, en), style: b }),
                            !o.locked && a().createElement(vu, { isChanged: p === i.id, durationTasks: 250 }),
                            (o.locked || E) &&
                                a().createElement(ot, {
                                    shouldPlayUnlockAnimation: E,
                                    missionName: R.strings.sm_lobby.missionSelection.lockedMissionName.$num(
                                        o.missionId,
                                    ),
                                    battlesToUnlock: o.battlesToUnlock,
                                    onAnimationFinished: C,
                                    withTabs: _,
                                }),
                            !F && a().createElement(ue.animated.div, { className: A()(Ju, en), style: b }),
                            _ &&
                                a().createElement(
                                    'div',
                                    { className: 'MissionSelectionViewApp_tabs_1b' },
                                    a().createElement(Zu, { selectedTab: g, onChange: (e) => y(e, !0) }),
                                ),
                            a().createElement(
                                'div',
                                { className: 'MissionSelectionViewApp_menuItems_15' },
                                de(u.menuItems.get(), (e) =>
                                    a().createElement(te, {
                                        modeId: w,
                                        modeIcon: 'R.images.gui.maps.icons.mode_selector.mode.story_mode.icon_medium',
                                        key: e.name,
                                        name: e.name,
                                        state: e.state,
                                        modeName: S,
                                        onClick: () => {
                                            t.navigateTo(e.name);
                                        },
                                    }),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'MissionSelectionViewApp_about_27' },
                                a().createElement(pe, { onClick: t.openAbout }),
                            ),
                            a().createElement(Mu, {
                                onClick: (e) => y(e, !1),
                                className: A()(
                                    'MissionSelectionViewApp_missionSelector_47',
                                    !_ && 'MissionSelectionViewApp_missionSelector__withoutTabs_53',
                                ),
                            }),
                            a().createElement(Uu, { className: 'MissionSelectionViewApp_specialVehicle_40' }),
                            i.isTab && a().createElement(ue.animated.div, { className: Ju, style: b }),
                            F &&
                                !i.isTab &&
                                a().createElement('div', {
                                    className: 'MissionSelectionViewApp_triggerHint_55',
                                    id: 'mission-selection-trigger-hint-id',
                                }),
                        );
                    });
                engine.whenReady
                    .then(() => {
                        O().render(
                            a().createElement(_e, null, a().createElement(w, null, a().createElement(tn, null))),
                            document.getElementById('root'),
                        );
                    })
                    .then(() => i.O.view.enableFullScreenModeSupported())
                    .then(() => i.O.view.initExternalPaddings(document.getElementById('root')));
            },
            7363: (e) => {
                'use strict';
                e.exports = React;
            },
            1533: (e) => {
                'use strict';
                e.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 'lobby/MissionSelectionView/MissionSelectionView'),
        (() => {
            var e = { 'lobby/MissionSelectionView/MissionSelectionView': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, i, s] = u,
                        o = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); o < r.length; o++)
                        ((a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/story_mode.vendors'], () =>
        __webpack_require__(1985),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
