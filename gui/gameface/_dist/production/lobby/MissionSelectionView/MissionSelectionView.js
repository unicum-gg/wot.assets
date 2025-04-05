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
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => s, on: () => o, onResize: () => i, onScaleUpdated: () => r });
                var n = u(2472),
                    a = u(1176);
                const i = (0, n.E)('clientResized'),
                    r = (0, n.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
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
                        const i = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            r = l[t]((e) => u([e, 'outside']));
                                        function o(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (r(),
                                                    window.removeEventListener(i, o),
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
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), n();
                            },
                            enable() {
                                (e.enabled = !0), n();
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
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => i,
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                    a = u(514);
                const i = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => r });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    r = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
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
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        arabic2roman: () => T,
                        children: () => a,
                        displayStatus: () => i.W,
                        displayStatusIs: () => S,
                        events: () => r.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => C,
                        getFontNames: () => y,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => v,
                        isFocused: () => f,
                        pxToRem: () => h,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => w,
                    });
                var n = u(9690),
                    a = u(3722),
                    i = u(6112),
                    r = u(6538),
                    o = u(8566);
                function s(e) {
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
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function A(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
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
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = n.cg,
                    S = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
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
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => i });
                const n = ['args'],
                    a = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    i = {
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
                u.d(t, { n: () => n }),
                    (function (e) {
                        (e[(e.NONE = -1)] = 'NONE'),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
                    (function (e) {
                        (e.ALT = 'Alt'),
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
                            (e.SYMBOL_LOCK = 'SymbolLock');
                    })(a || (a = {}));
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) (t += n[u]), (e -= a[u]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => i });
                var n = u(3138);
                class a {
                    constructor() {
                        (this._callbacks = void 0),
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
                            (this._updateHandler = void 0);
                    }
                    static get instance() {
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, u, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(i) : (this._views[u] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((e) => {
                                        e(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((e) => {
                                        this._addCallback(path + '.' + e);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(e) {
                        this.callbacks.add(e), null !== this.data && void 0 !== this.data && e(this.data);
                    }
                    unsubscribe(e) {
                        this.callbacks.delete(e);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(e) {
                        this.dataTracker.addCallback(e, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => i.Z, B3: () => l, Z5: () => r.Z5, B0: () => o, ry: () => h });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
                            this.removeMouseListener();
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
                var i = u(1358),
                    r = u(8613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const A = ['args'];
                function g(e, t, u, n, a, i, r) {
                    try {
                        var o = e[i](r),
                            s = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(s) : Promise.resolve(s).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    h = (function () {
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
                                        var i = e.apply(t, u);
                                        function r(e) {
                                            g(i, n, a, r, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(i, n, a, r, o, 'throw', e);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, A);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    D = () => p(o.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var B = u(7572);
                const v = a.instance,
                    b = {
                        DataTracker: i.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => p(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => p(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, a = R.invalid('resId'), i) => {
                            const r = m.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                d = s.width,
                                E = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + r.x,
                                    y: m.O.view.pxToRem(c) + r.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(E),
                                };
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: F(_),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, D);
                        },
                        handleViewEvent: p,
                        onBindingsReady: h,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: v,
                        SystemLocale: r.Z5,
                        UserLocale: r.cy,
                    };
                window.ViewEnvHelper = b;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => i, Z5: () => n, cy: () => a });
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
                    i = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            4994: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u.n(n);
                const i = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var r = u(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(e, t, u) {
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
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === u.extraLarge.weight,
                        large: i === u.large.weight,
                        medium: i === u.medium.weight,
                        small: i === u.small.weight,
                        extraSmall: i === u.extraSmall.weight,
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
                }
                !(function (e) {
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
                })(s || (s = {}));
                const c = r.O.client.getSize('rem'),
                    d = c.width,
                    E = c.height,
                    _ = Object.assign({ width: d, height: E }, l(d, E, o)),
                    m = (0, n.createContext)(_),
                    A = ['children'],
                    g = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, A);
                        const a = (0, n.useContext)(m),
                            r = a.extraLarge,
                            o = a.large,
                            s = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            d = a.extraLargeWidth,
                            E = a.largeWidth,
                            _ = a.mediumWidth,
                            g = a.smallWidth,
                            F = a.extraSmallWidth,
                            h = a.extraLargeHeight,
                            p = a.largeHeight,
                            D = a.mediumHeight,
                            f = a.smallHeight,
                            B = a.extraSmallHeight,
                            v = { extraLarge: h, large: p, medium: D, small: f, extraSmall: B };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && r) return t;
                            if (u.large && o) return t;
                            if (u.medium && s) return t;
                            if (u.small && l) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && d) return i(t, u, v);
                            if (u.largeWidth && E) return i(t, u, v);
                            if (u.mediumWidth && _) return i(t, u, v);
                            if (u.smallWidth && g) return i(t, u, v);
                            if (u.extraSmallWidth && F) return i(t, u, v);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && h) return t;
                                if (u.largeHeight && p) return t;
                                if (u.mediumHeight && D) return t;
                                if (u.smallHeight && f) return t;
                                if (u.extraSmallHeight && B) return t;
                            }
                        }
                        return null;
                    };
                (g.defaultProps = {
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
                    (0, n.memo)(g);
                const F = ({ children: e }) => {
                    const t = (0, n.useContext)(m),
                        u = (0, n.useState)(t),
                        i = u[0],
                        s = u[1],
                        c = (0, n.useCallback)((e, t) => {
                            const u = r.O.view.pxToRem(e),
                                n = r.O.view.pxToRem(t);
                            s(Object.assign({ width: u, height: n }, l(u, n, o)));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            const e = r.O.client.getSize('px');
                            c(e.width, e.height);
                        }, [c]);
                    ((e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        r.O.client.events.on('clientResized', c), r.O.client.events.on('self.onScaleUpdated', d);
                    }),
                        (0, n.useEffect)(
                            () => () => {
                                r.O.client.events.off('clientResized', c),
                                    r.O.client.events.off('self.onScaleUpdated', d);
                            },
                            [c, d],
                        );
                    const E = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                    return a().createElement(m.Provider, { value: E }, e);
                };
                var h = u(6483),
                    p = u.n(h),
                    D = u(926),
                    f = u.n(D);
                let B, v, b;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const C = () => {
                        const e = (0, n.useContext)(m),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return B.ExtraLarge;
                                    case e.large:
                                        return B.Large;
                                    case e.medium:
                                        return B.Medium;
                                    case e.small:
                                        return B.Small;
                                    case e.extraSmall:
                                        return B.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), B.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case e.largeWidth:
                                        return v.Large;
                                    case e.mediumWidth:
                                        return v.Medium;
                                    case e.smallWidth:
                                        return v.Small;
                                    case e.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return b.ExtraLarge;
                                    case e.largeHeight:
                                        return b.Large;
                                    case e.mediumHeight:
                                        return b.Medium;
                                    case e.smallHeight:
                                        return b.Small;
                                    case e.extraSmallHeight:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: r, remScreenWidth: t, remScreenHeight: u };
                    },
                    y = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL_WIDTH,
                        [v.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [v.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_HEIGHT,
                        [b.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [b.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    w = {
                        [B.ExtraSmall]: '',
                        [B.Small]: f().SMALL,
                        [B.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [B.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [B.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, y);
                        const i = C(),
                            r = i.mediaWidth,
                            o = i.mediaHeight,
                            s = i.mediaSize;
                        return a().createElement('div', T({ className: p()(u, S[r], k[o], w[s]) }, n), t);
                    },
                    x = ['children'],
                    L = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, x);
                        return a().createElement(F, null, a().createElement(O, u, t));
                    };
                var N = u(1533),
                    M = u.n(N);
                function I(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const P = {
                        playHighlight() {
                            I('highlight');
                        },
                        playClick() {
                            I('play');
                        },
                        playYes() {
                            I('yes1');
                        },
                    },
                    U = {
                        base: 'TextButton_base_b6',
                        base__right: 'TextButton_base__right_39',
                        icon: 'TextButton_icon_17',
                        icon__back: 'TextButton_icon__back_43',
                        icon__forward: 'TextButton_icon__forward_59',
                        icon__close: 'TextButton_icon__close_53',
                        icon__info: 'TextButton_icon__info_33',
                        glow: 'TextButton_glow_a4',
                        caption: 'TextButton_caption_82',
                        caption__back: 'TextButton_caption__back_b9',
                        caption__forward: 'TextButton_caption__forward_4e',
                        caption__close: 'TextButton_caption__close_36',
                        caption__info: 'TextButton_caption__info_23',
                        goto: 'TextButton_goto_e7',
                        base__left: 'TextButton_base__left_ff',
                        shine: 'TextButton_shine_e2',
                    },
                    H = [
                        'caption',
                        'onClick',
                        'goto',
                        'side',
                        'type',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'soundClick',
                        'soundHover',
                    ];
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class W extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            n = e.goto,
                            i = e.side,
                            r = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, H)),
                            _ = p()(U.base, U[`base__${r}`], U[`base__${i}`], null == o ? void 0 : o.base),
                            m = p()(U.icon, U[`icon__${r}`], U[`icon__${i}`], null == o ? void 0 : o.icon),
                            A = p()(U.glow, null == o ? void 0 : o.glow),
                            g = p()(U.caption, U[`caption__${r}`], null == o ? void 0 : o.caption),
                            F = p()(U.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            G(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                E,
                            ),
                            'info' !== r && a().createElement('div', { className: U.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: A })),
                            a().createElement('div', { className: g }, t),
                            n && a().createElement('div', { className: F }, n),
                        );
                    }
                }
                W.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var j = u(5521),
                    K = u(9916);
                const V = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = j.n.NONE, t = V, u = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== j.n.NONE)
                            return (
                                window.addEventListener('keydown', n, u),
                                () => {
                                    window.removeEventListener('keydown', n, u);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), t(n), u && n.stopPropagation();
                            }
                        }
                    }, [t, e, u, a]);
                }
                const z = (e) => {
                    (0, n.useEffect)(e, []);
                };
                var q = u(3403),
                    Y = u(7030);
                let X;
                !(function (e) {
                    (e[(e.NEWBIES = 0)] = 'NEWBIES'), (e[(e.EVENT = 1)] = 'EVENT');
                })(X || (X = {}));
                const Q = (0, n.memo)(
                    ({
                        className: e,
                        backgroundPath: t,
                        onLoaded: u,
                        showVignette: n = !0,
                        showBlur: i = !1,
                        grayscaleApplied: r = !1,
                    }) =>
                        a().createElement(
                            'div',
                            {
                                className: p()(
                                    'Background_base_94',
                                    i && 'Background_base__blur_69',
                                    r && 'Background_base__grayscale_1b',
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
                function Z() {}
                function J(e) {
                    return e;
                }
                function ee() {
                    return !1;
                }
                console.log;
                var te = u(9174);
                function ue(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const ne = (e) => (0 === e ? window : window.subViews.get(e));
                function ae(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                var ie = u(3946);
                const re = ((e, t) => {
                        const u = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: o, mocks: s }) {
                                const l = (0, n.useRef)([]),
                                    c = (e, u, n) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ne,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
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
                                                const o = (e) => {
                                                    const a = u(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (u, i) => {
                                                        const s = 'string' == typeof i ? `${n}.${i}` : n,
                                                            l = r.O.view.addModelObserver(s, t, !0);
                                                        return a.set(l, u), e && u(o(i)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const u = o(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
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
                                                                                    return ue(e, t);
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
                                                                                          ? ue(e, t)
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
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(u),
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
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.primitives([
                                                            'selectedTab',
                                                            'isTabsVisible',
                                                            'isParallaxEnabled',
                                                        ]),
                                                        missions: e.array('missions'),
                                                        selectedMission: e.object('selectedMission'),
                                                        tasks: e.array('tasks'),
                                                        parallax: e.array('parallax'),
                                                    },
                                                    u = (0, ie.Om)(() => {
                                                        const e = t.selectedMission.get(),
                                                            u = t.tasks.get(),
                                                            n = Boolean(u.find(({ isCompletedFirstTime: e }) => e));
                                                        return e.isCompleted && n;
                                                    }),
                                                    n = (0, ie.Om)(
                                                        () =>
                                                            t.root.isParallaxEnabled.get()
                                                                ? ae(JSON.parse(t.parallax.get().parallaxStructure), J)
                                                                : void 0,
                                                        { equals: ee },
                                                    ),
                                                    a = (0, ie.Om)(() => JSON.parse(t.parallax.get().atlas), {
                                                        equals: ee,
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
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, u) => {
                                                        const n = null != u ? u : s(t),
                                                            a = te.LO.box(n, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, te.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const n = null != u ? u : s(t),
                                                            a = te.LO.box(n, { equals: ee });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, te.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const n = s(u);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = te.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, te.aD)((e) => {
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
                                                                i = Object.entries(a),
                                                                r = i.reduce(
                                                                    (e, [t, u]) => ((e[u] = te.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            i.forEach(([t, u]) => {
                                                                                r[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: e, model: d, externalModel: o, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && n ? n.controls(E) : t(E),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    E = (0, n.useState)(e),
                                    _ = E[0],
                                    m = E[1],
                                    A = (0, n.useState)(() => c(e, i, s)),
                                    g = A[0],
                                    F = A[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? F(c(_, i, s)) : (d.current = !0);
                                    }, [s, _, i]),
                                    (0, n.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            g.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [g],
                                    ),
                                    a().createElement(u.Provider, { value: g }, o)
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
                    })),
                    oe = re[0],
                    se = re[1],
                    le = (0, n.memo)(function ({ onClick: e }) {
                        return a().createElement(
                            'div',
                            {
                                className: 'AboutButton_base_60',
                                onClick: () => {
                                    P.playClick(), e();
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
                    ce = { x: 0, y: 0, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    de = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' };
                let Ee;
                !(function (e) {
                    (e.Linear = 'linear'),
                        (e.EaseIn = 'easeIn'),
                        (e.EaseOut = 'easeOut'),
                        (e.EaseInOut = 'easeInOut'),
                        (e.EaseOutBack = 'easeOutBack'),
                        (e.EaseOutQuint = 'easeOutQuint'),
                        (e.EaseOutExpo = 'easeOutExpo');
                })(Ee || (Ee = {}));
                const _e = {
                        [Ee.Linear]: (e) => e,
                        [Ee.EaseIn]: (e) => e * e * e,
                        [Ee.EaseOut]: (e) => --e * e * e + 1,
                        [Ee.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                        [Ee.EaseOutBack]: (e) => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
                        [Ee.EaseOutQuint]: (e) => 1 - Math.pow(1 - e, 5),
                        [Ee.EaseOutExpo]: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
                    },
                    me = (0, n.memo)(function ({
                        children: e,
                        from: t = ce,
                        to: u = de,
                        config: i,
                        isCanceled: r = !1,
                        isDisabled: o = !1,
                        duration: s = 250,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: d = Ee.EaseInOut,
                        onRest: E,
                        onStart: _,
                        trigger: m,
                        className: A,
                        isReverse: g = !1,
                        playSoundOnStart: F,
                        playSoundOnFinish: h,
                    }) {
                        const p = _e[d],
                            D = (0, Y.useSpring)(() => t),
                            f = D[0],
                            B = D[1],
                            v = r && !o ? u : Object.assign({}, f, { transformOrigin: c });
                        return (
                            (0, n.useEffect)(() => {
                                B.start({
                                    from: t,
                                    to: u,
                                    delay: l,
                                    immediate: r,
                                    config: i ? Object.assign({}, i) : { duration: s, easing: p },
                                    cancel: r || o,
                                    reverse: g,
                                    onRest: (e) => {
                                        !0 === e.finished && (h && h(), E && E());
                                    },
                                    onStart: () => {
                                        F && F(), _ && _();
                                    },
                                });
                            }, [B, l, s, p, t, r, E, u, m, o, g, h, F, _, i]),
                            a().createElement(Y.animated.div, { className: A, style: v }, e)
                        );
                    });
                let Ae, ge, Fe;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Ae || (Ae = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(ge || (ge = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Fe || (Fe = {}));
                const he = { [Fe.NBSP]: Ae.NoBreakSymbol, [Fe.ZWNBSP]: Ae.NoBreakSymbol, [Fe.NEW_LINE]: Ae.LineBreak },
                    pe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    De = [
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
                function fe(e) {
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
                const Be = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: K.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    ve = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            r = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            E = void 0 !== d && d,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            h = void 0 === F ? 0 : F,
                            p = e.onShow,
                            D = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, De);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            n = R.invalid('resId'),
                                            a = '';
                                        var i;
                                        return (
                                            t &&
                                                ((a =
                                                    (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) ||
                                                    ''),
                                                (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (n = window.subViews[u].id)),
                                            { callerUrl: a, caller: u, stack: t, resId: n }
                                        );
                                    })().resId,
                                [h],
                            ),
                            b = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (Be(u, m, { isMouseEvent: !0, on: !0, arguments: fe(a) }, v),
                                    p && p(),
                                    (B.current.isVisible = !0));
                            }, [u, m, a, v, p]),
                            C = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        Be(u, m, { on: !1 }, v),
                                        B.current.isVisible && D && D(),
                                        (B.current.isVisible = !1);
                                }
                            }, [u, m, v, D]),
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
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
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
                                        window.removeEventListener('mouseleave', C), C();
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
                                                          ((B.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          i && i(e),
                                                          T && T(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  C(), null == r || r(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === E && C(), null == s || s(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === E && C(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : t
                        );
                        var T;
                    },
                    be = ['children'];
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                const ye = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, be);
                        return a().createElement(
                            ve,
                            Ce(
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
                    },
                    Te = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const ke = R.views.common.tooltip_window.simple_tooltip_content,
                    we = (e) => {
                        let t = e.children,
                            u = e.body,
                            i = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Te);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: i, note: r, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, i, r, s]);
                        return a().createElement(
                            ve,
                            Se(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? ke.SimpleTooltipHtmlContent('resId') : ke.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    };
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                const xe = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(we, t, n);
                    const i = t.contentId;
                    return i ? a().createElement(ve, Oe({}, t, { contentId: i }), n) : a().createElement(ye, t, n);
                };
                var Le = u(8045);
                const Ne = {
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
                let Re;
                function Me(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                u(1281),
                    (function (e) {
                        (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                    })(Re || (Re = {}));
                const Ie =
                        (new RegExp(
                            /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                .source +
                                '|' +
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu
                                    .source +
                                '|' +
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source +
                                '|' +
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu
                                    .source,
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
                    Pe = 'renderers_word_f3',
                    Ue = (e) => ({ color: `#${e}` }),
                    He = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? Ie[n]
                                ? a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: p()(Pe, Ie[n]) },
                                      e,
                                  )
                                : a().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: Pe, style: Ue(n) },
                                      e,
                                  )
                            : a().createElement('span', { key: u, 'data-block-type': t.blockType, className: Pe }, e);
                    },
                    Ge = {
                        [Ae.Word]: He,
                        [Ae.NoBreakSymbol]: He,
                        [Ae.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            a().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => a().createElement(a().Fragment, { key: u }, e)),
                            ),
                        [Ae.LineBreak]: ({ key: e }) =>
                            a().createElement('span', {
                                key: e,
                                'data-block-type': Ae.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Ae.NewLine]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                { key: t, 'data-block-type': Ae.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Ae.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            a().createElement(
                                'span',
                                {
                                    key: t,
                                    'data-block-type': Ae.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    We = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, i) => {
                                const r = `${u}_${i}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = We(e, Ge[t], r);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: r }));
                            }),
                            n
                        );
                    },
                    je = (e, t, u, n) => {
                        let a = t.exec(e),
                            i = 0;
                        for (; a; ) i !== a.index && u(e.slice(i, a.index)), n(a), (i = t.lastIndex), (a = t.exec(e));
                        i !== e.length && u(e.slice(i));
                    },
                    Ke = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Ve = pe
                        ? (e) => {
                              const t = [];
                              return (
                                  je(
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
                                                      je(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var u;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? t.push(...((u = e), u.match(Ke) || []))
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
                              let i = 0;
                              for (; n; ) {
                                  const r = t.justifyContent === ge.FlexEnd ? n.index : u.lastIndex;
                                  a.push(e.slice(i, r)), (i = r), (n = u.exec(e));
                              }
                              return i !== e.length && a.push(e.slice(i)), a;
                          },
                    $e = (e, t = '', u) => {
                        const n = [];
                        return (
                            je(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: Ae.Word, colorTag: t, childList: Ve(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = he[u.charAt(0)];
                                    a === Ae.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Ae.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: Ae.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    ze = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            je(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...$e(e, u, n));
                                },
                                (e) => {
                                    const i = e[1],
                                        r = void 0 === t[i] ? e[0] : t[i];
                                    'string' == typeof r || 'number' == typeof r
                                        ? a.push(...$e(String(r), u, n))
                                        : a.push({ blockType: Ae.Binding, colorTag: u, childList: [r] });
                                },
                            ),
                            a
                        );
                    },
                    qe = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Ae.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: Ae.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    Ye = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Ae.NoBreakSymbol
                                        ? ((u = !0), t.push(...qe(t.pop(), e)))
                                        : (u ? t.push(...qe(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    je(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...ze(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...ze(e[2] + e[3], t, e[1], u));
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
                                                a = Ge[n],
                                                i = We(e, a, t);
                                            return (
                                                n === Ae.NoBreakWrapper
                                                    ? u.push(a({ elementList: i, textBlock: e, key: `${t}` }))
                                                    : u.push(...i),
                                                u
                                            );
                                        })(e, u),
                                    );
                                }),
                                t
                            );
                        })(n);
                    },
                    Xe = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Qe = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    Ze = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Qe(e, t),
                            a = e.textContent.length,
                            i = e.offsetWidth / a,
                            r = Math.ceil(n / i);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / i);
                            return n >= u ? [!0, u + r] : [!1, n];
                        }
                        const o = Math.max(u + r, 0);
                        return a < o ? [!1, 0] : [!0, o];
                    },
                    Je = (e, t, u, n, i, r) => {
                        let o = -1,
                            s = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Ae.LineBreak || c === Ae.NewLine || c === Ae.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = Ze(u, n, i),
                                    c = e[0],
                                    E = e[1];
                                if (!c) {
                                    E > 0 && (i -= E);
                                    continue;
                                }
                                const _ = d.slice(0, d.length - E) + r,
                                    m = t[l];
                                (s = a().cloneElement(m, m.props, _)), (o = l);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    E = c.props.children,
                                    _ = Je(e, E, e.length - 1, n, i, r),
                                    m = _[0],
                                    A = _[1];
                                if (!(m < 0)) {
                                    const e = E.slice(0, m);
                                    (s = a().cloneElement(c, c.props, e, A)), (o = l);
                                    break;
                                }
                                i -= d.length;
                            }
                        }
                        return [o, s];
                    },
                    et = a().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: i,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: o = !1,
                            customTooltipArgs: s,
                            targetId: l,
                            justifyContent: c = ge.FlexStart,
                            alignContent: d = ge.FlexStart,
                            truncateIdentify: E = '...',
                        }) => {
                            const _ = (0, n.useRef)(null),
                                m = (0, n.useRef)({ height: 0, width: 0 }),
                                A = (0, n.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = A[0],
                                F = A[1],
                                h = (0, n.useMemo)(() => Ye(e, i, { justifyContent: c }), [i, c, e]),
                                D = (0, n.useMemo)(() => {
                                    if (
                                        r &&
                                        g.isTruncated &&
                                        (!i || !Object.values(i).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: i ? JSON.stringify(i) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [i, r, l, e, s, g.isTruncated]),
                                f = (0, n.useCallback)(
                                    (e) => {
                                        (m.current.width = e.contentRect.width),
                                            (m.current.height = e.contentRect.height);
                                        const t = ((e, t, u, n = '...') => {
                                                const a = [...t],
                                                    i = e.current;
                                                if (!i) return [a, !1];
                                                const r = u.height,
                                                    o = u.width,
                                                    s = i.lastElementChild;
                                                if (!Xe(s, r) && Qe(s, o) <= 0) return [a, !1];
                                                const l = i.children,
                                                    c = ((e, t) => {
                                                        let u = 0,
                                                            n = e.length - 1;
                                                        for (; n - u >= 0; ) {
                                                            const a = u + Math.ceil(0.5 * (n - u));
                                                            Xe(e[a], t) ? (n = a - 1) : (u = a + 1);
                                                        }
                                                        return u - 1;
                                                    })(l, r);
                                                if (c < 0) return [a, !1];
                                                const d = Je(l, a, c, o, n.length, n),
                                                    E = d[0],
                                                    _ = d[1];
                                                return _ && (a.splice(E, 1, _), a.splice(E + 1)), [a, !0];
                                            })(_, h, m.current, E),
                                            n = t[0],
                                            a = t[1];
                                        F({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a);
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
                                        const t = new Le.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, u, e]);
                                })(_, f, o),
                                a().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            Ne.base,
                                            t,
                                            Ne.base__zeroPadding,
                                            o && Ne.base__isTruncationAvailable,
                                        ),
                                        style: B,
                                    },
                                    a().createElement('div', { className: Ne.unTruncated, ref: _ }, h),
                                    a().createElement(
                                        xe,
                                        {
                                            tooltipArgs: D,
                                            className: p()(
                                                Ne.tooltip,
                                                Ne[`tooltip__justify-${c}`],
                                                Ne[`tooltip__align-${d}`],
                                            ),
                                        },
                                        a().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    Ne.truncated,
                                                    !g.isTruncateFinished && o && Ne.truncated__hide,
                                                ),
                                                style: B,
                                            },
                                            g.isTruncateFinished && o ? g.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let tt;
                !(function (e) {
                    (e.COUNTDOWN = 'countdown'),
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
                        (e.TASK_DESCRIPTION = 'taskDescription');
                })(tt || (tt = {}));
                const ut = { y: -5, opacity: 0 },
                    nt = { y: 0, opacity: 1 },
                    at = 350,
                    it = {
                        [tt.COUNTDOWN]: { from: ut, to: nt, delay: 150, duration: at },
                        [tt.TITLE]: { from: ut, to: nt, delay: 200, duration: at },
                        [tt.SUB_TITLE]: { from: ut, to: nt, delay: 350, duration: at },
                        [tt.TASK_SHOWING]: {
                            from: { x: 80, filter: 'blur(1px) brightness(5)', opacity: 0 },
                            to: { x: 0, filter: 'blur(0px) brightness(1)', opacity: 1 },
                            delay: 650,
                            easingType: Ee.EaseOut,
                            duration: 700,
                        },
                        [tt.TASK_OLD_STATE]: {
                            from: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            to: { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5, 0.5)' },
                            delay: 1350,
                            duration: 700,
                        },
                        [tt.TASK_NEW_STATE]: {
                            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(2, 2)' },
                            to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            delay: 1500,
                            duration: 700,
                        },
                        [tt.TASK_SWITCH_GLOW]: {
                            from: { opacity: 0, transform: 'translate(-50%, -50%) scale(10, 1.5)' },
                            to: [
                                { opacity: 0.6, transform: 'translate(-50%, -50%) scale(5, 1.2)' },
                                { opacity: 0, transform: 'translate(-50%, -50%) scale(1, 1)' },
                            ],
                            delay: 1350,
                            easingType: Ee.Linear,
                            duration: 525,
                        },
                        [tt.MISSION_STATE]: { from: { opacity: 1 }, to: { opacity: 0 }, delay: 1350, duration: at },
                        [tt.TASK_LOCKED]: {
                            from: { y: 0, opacity: 1 },
                            to: { y: 10, opacity: 0 },
                            delay: 1350,
                            duration: 1050,
                        },
                        [tt.TASK_UNLOCKED]: {
                            from: { y: -10, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 1700,
                            duration: 1050,
                        },
                        [tt.TASK_UNLOCK_GLOW]: {
                            from: { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
                            to: [
                                { x: 80, opacity: 0.8, transform: 'translate(-50%, -50%) scale(5, 1)' },
                                { x: 80, opacity: 0, transform: 'translate(-50%, -50%) scale(5, 1)' },
                            ],
                            delay: 1350,
                            easingType: Ee.Linear,
                            duration: 525,
                        },
                        [tt.MISSION_UNLOCKED]: {
                            from: { opacity: 1, transform: 'scale(1)' },
                            to: { opacity: 0, transform: 'scale(1.2)' },
                            delay: 0,
                            duration: at,
                        },
                        [tt.TASK_REWARDS]: {
                            from: { y: 10, opacity: 0 },
                            to: { opacity: 1, y: 0 },
                            delay: 0,
                            duration: at,
                        },
                        [tt.TASK_DESCRIPTION]: {
                            from: { opacity: 1, y: 0 },
                            to: { opacity: 0, y: -10 },
                            delay: 0,
                            duration: at,
                        },
                    };
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const ot = (0, n.memo)(
                        ({
                            missionName: e,
                            battlesToUnlock: t,
                            shouldPlayUnlockAnimation: u = !1,
                            onAnimationFinished: n,
                        }) =>
                            a().createElement(
                                me,
                                rt({ className: 'LockOverlay_base_6f' }, it[tt.MISSION_UNLOCKED], {
                                    isDisabled: !u,
                                    onRest: n,
                                }),
                                a().createElement('div', { className: 'LockOverlay_darkOverlay_c6' }),
                                a().createElement(
                                    'div',
                                    { className: 'LockOverlay_locker_8c' },
                                    a().createElement('div', { className: 'LockOverlay_ribbon_80' }),
                                    a().createElement(
                                        'div',
                                        { className: 'LockOverlay_envelope_d2' },
                                        a().createElement(et, {
                                            classMix: 'LockOverlay_mission_ab',
                                            justifyContent: ge.Center,
                                            text: e,
                                        }),
                                        a().createElement(
                                            'div',
                                            { className: 'LockOverlay_divider_50' },
                                            a().createElement('div', { className: 'LockOverlay_line_e1' }),
                                            a().createElement('div', { className: 'LockOverlay_lock_22' }),
                                        ),
                                        a().createElement(et, {
                                            classMix: 'LockOverlay_condition_56',
                                            text: R.strings.sm_lobby.missionSelection.unlockCondition(),
                                            binding: { numBattles: t },
                                            justifyContent: ge.Center,
                                        }),
                                    ),
                                ),
                            ),
                    ),
                    st = { x: 0, y: -10, opacity: 0, transform: 'scale(1) rotate(0deg)' },
                    lt = { x: 0, y: 0, opacity: 1, transform: 'scale(1) rotate(0deg)' },
                    ct = { x: 0, y: 10, opacity: 0, transform: 'scale(1) rotate(0deg)' };
                let dt;
                !(function (e) {
                    (e.Linear = 'linear'), (e.EaseIn = 'easeIn'), (e.EaseOut = 'easeOut'), (e.EaseInOut = 'easeInOut');
                })(dt || (dt = {}));
                const Et = {
                        [dt.Linear]: (e) => e,
                        [dt.EaseIn]: (e) => e * e * e,
                        [dt.EaseOut]: (e) => --e * e * e + 1,
                        [dt.EaseInOut]: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    },
                    _t = (0, n.memo)(function ({
                        children: e,
                        from: t = st,
                        enter: u = lt,
                        leave: i = ct,
                        isCanceled: r = !1,
                        isTransition: o = !0,
                        duration: s = 500,
                        delay: l = 0,
                        transformOrigin: c = '50% 50%',
                        easingType: d = dt.EaseInOut,
                        enterOnStart: E,
                        enterOnRest: _,
                        leaveOnStart: m,
                        leaveOnRest: A,
                        enterOnStartSound: g,
                        enterOnRestSound: F,
                        leaveOnStartSound: h,
                        leaveOnRestSound: p,
                        className: D,
                    }) {
                        const f = Et[d],
                            B = (0, Y.useSpringRef)(),
                            v = (0, Y.useTransition)(o, {
                                ref: B,
                                from: r ? u : t,
                                enter: Object.assign({}, u, {
                                    onStart: () => {
                                        o && (g && g(), E && E());
                                    },
                                    onRest: () => {
                                        o && (F && F(), _ && _());
                                    },
                                }),
                                leave: Object.assign({}, i, {
                                    onStart: () => {
                                        o || (h && h(), m && m());
                                    },
                                    onRest: () => {
                                        o || (p && p(), A && A());
                                    },
                                }),
                                delay: l,
                                config: { duration: s, easing: f },
                                immediate: r,
                                exitBeforeEnter: !0,
                                cancel: r,
                            });
                        return (
                            (0, n.useEffect)(() => {
                                B.start();
                            }, [B, o]),
                            v(
                                (t, u) =>
                                    u &&
                                    a().createElement(
                                        Y.animated.div,
                                        { className: D, style: Object.assign({}, t, { transformOrigin: c }) },
                                        e,
                                    ),
                            )
                        );
                    });
                var mt = u(8613);
                function At(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / 86400);
                    t -= 86400 * u;
                    const n = Math.trunc(t / 3600);
                    t -= 3600 * n;
                    const a = Math.trunc(t / 60);
                    return (t -= 60 * a), { days: u, hours: n, minutes: a, seconds: t };
                }
                Date.now(), mt.Ew.getRegionalDateTime, mt.Ew.getFormattedDateTime;
                const gt = () => {};
                let Ft;
                K.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(Ft || (Ft = {})),
                    K.Sw.instance;
                const ht = (e = 0, t, u = 0, a = gt) => {
                        const i = (0, n.useState)(e),
                            r = i[0],
                            o = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const n = Date.now(),
                                        i = setInterval(
                                            () => {
                                                const t = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== u && t <= u ? (o(u), a && a(), clearInterval(i)) : o(t);
                                            },
                                            1e3 * (t || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [e, t, u, a]),
                            r
                        );
                    },
                    pt = (e, t, u) => {
                        const n = e.days,
                            a = e.hours,
                            i = e.minutes;
                        return n >= 1
                            ? 0 === a
                                ? Me(R.strings.sm_lobby.countdown.days(), { days: n })
                                : Me(R.strings.sm_lobby.countdown.daysHours(), { days: n, hours: a })
                            : t && a < 1 && i < 5
                              ? Me(R.strings.sm_lobby.countdown.endsSoon(), { minutes: 5 })
                              : 0 === a
                                ? i < 1
                                    ? R.strings.sm_lobby.countdown.lessThanMinute()
                                    : Me(
                                          u
                                              ? R.strings.sm_lobby.countdown.minutesShort()
                                              : R.strings.sm_lobby.countdown.minutes(),
                                          { minutes: i },
                                      )
                                : 0 === i
                                  ? Me(R.strings.sm_lobby.countdown.hours(), { hours: a })
                                  : Me(
                                        u
                                            ? R.strings.sm_lobby.countdown.hoursMinutesShort()
                                            : R.strings.sm_lobby.countdown.hoursMinutes(),
                                        { hours: a, minutes: i },
                                    );
                    },
                    Dt = (e, t = !1, u = !1) => {
                        const n = ht(e, 1);
                        return { timeString: pt(At(n), t, u), secondsLeft: n, isEndingSoon: n < 300 };
                    },
                    ft = (0, q.Pi)(() => {
                        const e = se().model.selectedMission.get(),
                            t = Dt(e.secondsCountdown, !0, !0),
                            u = t.timeString,
                            n = t.isEndingSoon;
                        return a().createElement(
                            'div',
                            { className: 'Countdown_base_c1' },
                            a().createElement('div', {
                                className: p()('Countdown_bg_d6', n && 'Countdown_bg__endingSoon_99'),
                            }),
                            a().createElement(
                                'div',
                                { className: 'Countdown_timer_8c' },
                                a().createElement('div', { className: 'Countdown_icon_7e' }),
                                a().createElement('div', { className: 'Countdown_text_f0' }, u),
                            ),
                        );
                    });
                let Bt;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Bt || (Bt = {}));
                const vt = 'tooltip_watched';
                let bt;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(bt || (bt = {}));
                const Ct = ['action', 'timeLimit'],
                    yt = () => Date.now(),
                    Tt = (e, t) => {
                        const u = ((e, t) => {
                                const u = (0, n.useCallback)(
                                    (u, n = Bt.Info, a) => {
                                        a || (a = {}),
                                            Object.keys(a).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: u,
                                                    logLevel: n,
                                                    params: JSON.stringify(a),
                                                });
                                    },
                                    [e, t],
                                );
                                return (e, t, n) => u(e, t, n);
                            })(e, t),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            r = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, yt());
                                },
                                [a],
                            ),
                            o = (0, n.useCallback)(() => {
                                a.current.clear(), i.current.clear();
                            }, [a, i]),
                            s = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, yt());
                                },
                                [a, i],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const u = i.current.get(e);
                                    if (void 0 === u) return;
                                    i.current.delete(e);
                                    const n = yt() - u;
                                    a.current.set(e, t + n);
                                },
                                [a, i],
                            ),
                            c = (0, n.useCallback)(
                                (e, t = 0, n, r) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== i.current.get(e) && l(e), a.current.delete(e);
                                    const s = (yt() - o) / 1e3;
                                    s <= t ||
                                        ((r = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(r, s)),
                                        u(e, n, r));
                                },
                                [a, i, u, l],
                            );
                        return [(e) => r(e), (e, t, u, n) => c(e, t, u, n), () => o(), (e) => s(e), (e) => l(e)];
                    },
                    St = (e, t) => {
                        const u = ((e) => {
                                const t = Tt(e, 'metrics'),
                                    u = t[0],
                                    a = t[1],
                                    i = t[2],
                                    r = t[3],
                                    o = t[4],
                                    s = (0, n.useCallback)(
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
                                return [(e) => u(e), (e) => s(e), () => i(), (e) => r(e), (e) => o(e)];
                            })(e),
                            a = u[0],
                            i = u[1],
                            r = t.action,
                            o = t.timeLimit,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(t, Ct);
                        return (0, n.useMemo)(
                            () => ({
                                onShow: () => a(r || vt),
                                onHide: () => i(Object.assign({ action: r || vt, timeLimit: o || 2 }, s)),
                            }),
                            [r, o, s, a, i],
                        );
                    };
                let kt, wt, Ot, xt;
                !(function (e) {
                    (e[(e.UNCOMPLETED = 0)] = 'UNCOMPLETED'),
                        (e[(e.COMPLETED = 1)] = 'COMPLETED'),
                        (e[(e.LOCKED = 2)] = 'LOCKED');
                })(kt || (kt = {})),
                    (function (e) {
                        (e.StoryMode = 'story_mode'), (e.Onboarding = 'onboarding');
                    })(wt || (wt = {})),
                    (function (e) {
                        e.Watched = 'watched';
                    })(Ot || (Ot = {})),
                    (function (e) {
                        (e.MissionSelection = 'mission_selection_window'),
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
                            (e.PostBattleWindow = 'post_battle_window');
                    })(xt || (xt = {}));
                const Lt = 'TaskDescription_base_53',
                    Nt = 'TaskDescription_text_48';
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Mt = R.strings.sm_lobby.missionSelection,
                    It = (0, n.memo)(function ({
                        description: e,
                        taskState: t,
                        isUnlockedFirstTime: u,
                        timeString: n,
                        isShouldPlayAnimation: i,
                        onAnimationFinished: r,
                        isLockRunOut: o,
                    }) {
                        const s = t === kt.LOCKED && !o,
                            l = {
                                timer: a().createElement(
                                    'div',
                                    { className: 'TaskDescription_timer_bd' },
                                    a().createElement('div', { className: 'TaskDescription_clock_9f' }),
                                    a().createElement('div', { className: 'TaskDescription_time_82' }, n),
                                ),
                            };
                        return (u || o) && i
                            ? a().createElement(
                                  a().Fragment,
                                  null,
                                  a().createElement(
                                      me,
                                      Rt({ className: Lt }, it[tt.TASK_LOCKED]),
                                      a().createElement(et, {
                                          classMix: Nt,
                                          text: Mt.taskDescription.locked(),
                                          binding: l,
                                      }),
                                  ),
                                  a().createElement(
                                      me,
                                      Rt({ className: Lt }, it[tt.TASK_UNLOCKED], { onRest: r }),
                                      a().createElement(et, { classMix: Nt, text: e, binding: l }),
                                  ),
                              )
                            : a().createElement(
                                  'div',
                                  { className: Lt },
                                  a().createElement(et, {
                                      classMix: p()(Nt, !s && 'TaskDescription_text__notLocked_89'),
                                      text: s ? Mt.taskDescription.locked() : e,
                                      isTruncationAvailable: !0,
                                      binding: l,
                                  }),
                              );
                    }),
                    Pt = 'TaskIcon_base_50',
                    Ut = 'TaskIcon_glow_30',
                    Ht = 'TaskIcon_base__completed_f0',
                    Gt = 'TaskIcon_base__locked_0e',
                    Wt = 'TaskIcon_base__hover_88',
                    jt = 'TaskIcon_iconBody_aa',
                    Kt = 'TaskIcon_iconGlow_25';
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const $t = (0, n.memo)(function ({
                    taskState: e,
                    isCompletedFirstTime: t,
                    isUnlockedFirstTime: u,
                    isHover: n,
                    isShouldPlayAnimation: i,
                    onAnimationFinished: r,
                    onUnlockAnimationStart: o,
                    onCompletionAnimationStart: s,
                    isLockRunOut: l,
                }) {
                    return t && i
                        ? a().createElement(
                              a().Fragment,
                              null,
                              a().createElement(
                                  me,
                                  Vt({ className: Pt }, it[tt.TASK_OLD_STATE], { onStart: s }),
                                  a().createElement(
                                      'div',
                                      { className: Pt },
                                      a().createElement('div', { className: Ut }),
                                      a().createElement('div', { className: Kt }),
                                      a().createElement('div', { className: jt }),
                                  ),
                              ),
                              a().createElement(
                                  me,
                                  Vt({ className: Pt }, it[tt.TASK_NEW_STATE], { onRest: r }),
                                  a().createElement(
                                      'div',
                                      { className: p()(Pt, Ht, n && Wt) },
                                      a().createElement('div', { className: Ut }),
                                      a().createElement('div', { className: Kt }),
                                      a().createElement('div', { className: jt }),
                                  ),
                              ),
                              a().createElement(
                                  me,
                                  Vt({ className: Pt }, it[tt.TASK_SWITCH_GLOW]),
                                  a().createElement('div', { className: p()(Kt, 'TaskIcon_iconGlow__switch_62') }),
                              ),
                          )
                        : (u || l) && i
                          ? a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    me,
                                    Vt({ className: Pt }, it[tt.TASK_LOCKED], { onStart: o }),
                                    a().createElement(
                                        'div',
                                        { className: p()(Pt, Gt) },
                                        a().createElement('div', { className: Ut }),
                                        a().createElement('div', { className: Kt }),
                                        a().createElement('div', { className: jt }),
                                    ),
                                ),
                                a().createElement(
                                    me,
                                    Vt({ className: Pt }, it[tt.TASK_UNLOCKED], { onRest: r }),
                                    a().createElement(
                                        'div',
                                        { className: p()(Pt, n && Wt) },
                                        a().createElement('div', { className: Ut }),
                                        a().createElement('div', { className: Kt }),
                                        a().createElement('div', { className: jt }),
                                    ),
                                ),
                                a().createElement(
                                    me,
                                    Vt({ className: Pt }, it[tt.TASK_UNLOCK_GLOW]),
                                    a().createElement('div', { className: p()(Kt, 'TaskIcon_iconGlow__unlock_68') }),
                                ),
                            )
                          : a().createElement(
                                'div',
                                { className: p()(Pt, e === kt.COMPLETED && Ht, e === kt.LOCKED && !l && Gt, n && Wt) },
                                a().createElement('div', { className: Ut }),
                                a().createElement('div', { className: p()(Kt) }),
                                a().createElement('div', { className: p()(jt) }),
                            );
                });
                let zt, qt, Yt, Xt, Qt, Zt, Jt, eu;
                var tu;
                !(function (e) {
                    (e.Items = 'items'),
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
                        (e.BrCoin = 'brcoin');
                })(zt || (zt = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
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
                            (e.EquipCoin = 'equipCoin');
                    })(qt || (qt = {})),
                    ((tu = Yt || (Yt = {})).Big = 'big'),
                    (tu.Small = 'small'),
                    (tu.Mini = 'mini'),
                    (tu.S600x450 = 's600x450'),
                    (tu.S400x300 = 's400x300'),
                    (tu.S296x222 = 's296x222'),
                    (tu.S232x174 = 's232x174'),
                    (tu.S180x135 = 's180x135'),
                    (tu.S128x100 = 's128x100'),
                    (tu.S80x80 = 's80x80'),
                    (tu.S64x64 = 's64x64'),
                    (tu.S48x48 = 's48x48'),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Xt || (Xt = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Qt || (Qt = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Zt || (Zt = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Jt || (Jt = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(eu || (eu = {}));
                class uu extends a().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? K.B3.GOLD : K.B3.INTEGRAL;
                        const t = K.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                uu.defaultProps = { format: 'integral' };
                const nu = [
                        zt.Items,
                        zt.Equipment,
                        zt.Xp,
                        zt.XpFactor,
                        zt.Blueprints,
                        zt.BlueprintsAny,
                        zt.Goodies,
                        zt.Berths,
                        zt.Slots,
                        zt.Tokens,
                        zt.CrewSkins,
                        zt.CrewBooks,
                        zt.Customizations,
                        zt.CreditsFactor,
                        zt.TankmenXp,
                        zt.TankmenXpFactor,
                        zt.FreeXpFactor,
                        zt.BattleToken,
                        zt.LootBox,
                        zt.PremiumUniversal,
                        zt.NaturalCover,
                        zt.BpCoin,
                        zt.BattlePassSelectToken,
                        zt.BattlaPassFinalAchievement,
                        zt.BattleBadge,
                        zt.BattlePassTicket,
                        zt.BonusX5,
                        zt.CrewBonusX3,
                        zt.EpicSelectToken,
                        zt.Comp7TokenWeeklyReward,
                        zt.DeluxeGift,
                        zt.ModernizedDevicesT1Gift,
                        zt.ModernizedDevicesT2Gift,
                        zt.ModernizedDevicesT3Gift,
                        zt.BattleBoosterGift,
                        zt.OptionalDevice,
                    ],
                    au = [zt.Gold, zt.Credits, zt.Crystal, zt.FreeXp],
                    iu = [zt.BattlePassPoints, zt.EquipCoin],
                    ru = [zt.PremiumPlus, zt.Premium],
                    ou = (e, t, u) => {
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
                    su = [Yt.Small, Yt.Big],
                    lu = (e, t) => {
                        if (void 0 === e) return e;
                        switch (t) {
                            case Xt.MULTI:
                                return e.substring(1);
                            case Xt.CURRENCY:
                            case Xt.NUMBER:
                                return ((e) => e.replace(/\s+/g, '').replace(',', '').replace('.', ''))(e);
                            default:
                                return e;
                        }
                    },
                    cu = {
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
                    du = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: n = Yt.Big,
                        special: i,
                        value: r,
                        valueType: o,
                        title: s,
                        style: l,
                        className: c,
                        classNames: d,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const m = ((e, t) => {
                                if (void 0 === t || !su.includes(e)) return null;
                                switch (t) {
                                    case Qt.BATTLE_BOOSTER:
                                    case Qt.BATTLE_BOOSTER_REPLACE:
                                        return Zt.BATTLE_BOOSTER;
                                }
                            })(n, i),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Qt.BATTLE_BOOSTER:
                                        return Jt.BATTLE_BOOSTER;
                                    case Qt.BATTLE_BOOSTER_REPLACE:
                                        return Jt.BATTLE_BOOSTER_REPLACE;
                                    case Qt.BUILT_IN_EQUIPMENT:
                                        return Jt.BUILT_IN_EQUIPMENT;
                                    case Qt.EQUIPMENT_PLUS:
                                        return Jt.EQUIPMENT_PLUS;
                                    case Qt.EQUIPMENT_TROPHY_BASIC:
                                        return Jt.EQUIPMENT_TROPHY_BASIC;
                                    case Qt.EQUIPMENT_TROPHY_UPGRADED:
                                        return Jt.EQUIPMENT_TROPHY_UPGRADED;
                                    case Qt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Jt.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Qt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Jt.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Qt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Jt.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Qt.PROGRESSION_STYLE_UPGRADED_1:
                                        return Jt.PROGRESSION_STYLE_UPGRADED_1;
                                    case Qt.PROGRESSION_STYLE_UPGRADED_2:
                                        return Jt.PROGRESSION_STYLE_UPGRADED_2;
                                    case Qt.PROGRESSION_STYLE_UPGRADED_3:
                                        return Jt.PROGRESSION_STYLE_UPGRADED_3;
                                    case Qt.PROGRESSION_STYLE_UPGRADED_4:
                                        return Jt.PROGRESSION_STYLE_UPGRADED_4;
                                    case Qt.PROGRESSION_STYLE_UPGRADED_5:
                                        return Jt.PROGRESSION_STYLE_UPGRADED_5;
                                    case Qt.PROGRESSION_STYLE_UPGRADED_6:
                                        return Jt.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(i),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Xt.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Xt.CURRENCY:
                                    case Xt.NUMBER:
                                        return a().createElement(uu, { format: 'integral', value: Number(e) });
                                    case Xt.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, o);
                        return a().createElement(
                            'div',
                            { className: p()(cu.base, cu[`base__${n}`], c), style: l },
                            a().createElement(
                                xe,
                                { tooltipArgs: E, className: cu.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: p()(cu.image, null == d ? void 0 : d.image) },
                                        m &&
                                            a().createElement('div', {
                                                className: p()(cu.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: p()(cu.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        A &&
                                            a().createElement('div', {
                                                className: p()(cu.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: p()(
                                                    cu.info,
                                                    cu[`info__${e}`],
                                                    o === Xt.MULTI && cu.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    s && a().createElement('div', { className: cu.title }, s),
                                ),
                            ),
                            u &&
                                a().createElement(
                                    xe,
                                    { tooltipArgs: _ },
                                    a().createElement('div', {
                                        className: p()(cu.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Eu = ['missionId', 'taskId', 'rewardNum'];
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                const mu = (e) => {
                    let t = e.missionId,
                        u = e.taskId,
                        n = e.rewardNum,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, Eu);
                    const r = St(wt.StoryMode, {
                            action: Ot.Watched,
                            parentScreen: xt.MissionSelection,
                            timeLimit: 1,
                            item: xt.TaskRewardTooltip,
                            itemState: t.toString(),
                            info: JSON.stringify({ task_id: u, task_reward_item: i.name, task_reward_num: n }),
                        }),
                        o = Object.assign({}, i.tooltipArgs, r),
                        s = !i.value && !i.title;
                    return a().createElement(
                        du,
                        _u({ className: p()('TrackedReward_base_8a', s && 'TrackedReward_base__centered_43') }, i, {
                            tooltipArgs: o,
                        }),
                    );
                };
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
                const gu = (0, n.memo)(
                    ({ rewards: e, missionId: t, taskId: u }) => {
                        const n = C().mediaSize >= B.ExtraLarge ? Yt.Big : Yt.Small;
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
                                ae(e, (e, i) => {
                                    const r =
                                        ((o = e.name),
                                        nu.includes(o)
                                            ? Xt.MULTI
                                            : au.includes(o)
                                              ? Xt.CURRENCY
                                              : iu.includes(o)
                                                ? Xt.NUMBER
                                                : ru.includes(o)
                                                  ? Xt.PREMIUM_PLUS
                                                  : Xt.STRING);
                                    var o;
                                    return a().createElement(
                                        mu,
                                        Au({}, e, {
                                            key: i,
                                            value: lu(e.value, r),
                                            valueType: r,
                                            image: e.icon[n],
                                            size: n,
                                            missionId: t,
                                            taskId: u,
                                            rewardNum: i + 1,
                                            tooltipArgs: ou({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                        }),
                                    );
                                }),
                            ),
                        );
                    },
                    (e, t) => e.missionId === t.missionId && e.taskId === t.taskId,
                );
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
                const hu = ({
                    index: e,
                    missionId: t,
                    taskId: u,
                    description: i,
                    taskState: r,
                    isCompletedFirstTime: o,
                    secondsBeforeUnlock: s,
                    isUnlockedFirstTime: l,
                    onTaskUnlocked: c,
                    animationCounter: d,
                    rewards: E,
                    onAppearanceAnimationStart: _ = Z,
                    onAppearanceAnimationFinished: m = Z,
                    onUnlockAnimationStart: A = Z,
                    onCompletionAnimationStart: g = Z,
                    onAnimationFinished: F = Z,
                }) => {
                    const h = (0, n.useRef)(s),
                        D = (0, n.useState)(o || l),
                        f = D[0],
                        B = D[1],
                        v = (0, n.useState)(!1),
                        b = v[0],
                        C = v[1],
                        y = (0, n.useState)(!1),
                        T = y[0],
                        S = y[1],
                        k = (0, n.useState)(!1),
                        w = k[0],
                        O = k[1],
                        x = (0, n.useState)(void 0),
                        L = x[0],
                        N = x[1],
                        R = Dt(s),
                        M = R.timeString,
                        I = R.secondsLeft,
                        U = St(wt.StoryMode, {
                            action: Ot.Watched,
                            parentScreen: xt.MissionSelection,
                            timeLimit: 2,
                            item: xt.Task,
                            itemState: t.toString(),
                            info: JSON.stringify({ task_id: u }),
                        }),
                        H = U.onShow,
                        G = U.onHide;
                    (0, n.useEffect)(() => () => clearTimeout(L), [L]),
                        (0, n.useEffect)(() => {
                            0 !== h.current && 0 === I && (B(!0), C(!0), c(u));
                        }, [I, c, u, s]),
                        (0, n.useEffect)(() => {
                            B(!0);
                        }, [d]);
                    const W = (0, n.useCallback)(() => {
                            B(!1), F();
                        }, [F]),
                        j = r !== kt.LOCKED && E.length > 0;
                    return a().createElement(
                        me,
                        Fu(
                            { className: 'TaskListItem_base_d6', key: `${t}_${e}` },
                            Object.assign({}, it[tt.TASK_SHOWING], { delay: 650 + 150 * e }),
                            { onStart: _, onRest: m },
                        ),
                        a().createElement(
                            'div',
                            {
                                className: 'TaskListItem_frame_cb',
                                onMouseEnter: () => {
                                    N(
                                        window.setTimeout(() => {
                                            O(!0);
                                        }, 150),
                                    ),
                                        P.playHighlight(),
                                        S(!0),
                                        H();
                                },
                                onMouseLeave: () => {
                                    clearTimeout(L), O(!1), S(!1), G();
                                },
                            },
                            a().createElement('div', {
                                className: p()('TaskListItem_frameImg_d3', T && 'TaskListItem_frameImg__hover_24'),
                            }),
                            a().createElement($t, {
                                taskState: r,
                                isCompletedFirstTime: o,
                                isUnlockedFirstTime: l,
                                isLockRunOut: b,
                                isHover: T,
                                isShouldPlayAnimation: f,
                                onAnimationFinished: W,
                                onCompletionAnimationStart: g,
                                onUnlockAnimationStart: A,
                            }),
                            j &&
                                a().createElement(
                                    me,
                                    Fu({}, it[tt.TASK_REWARDS], { isReverse: !w }),
                                    a().createElement(gu, { rewards: E, missionId: t, taskId: u }),
                                ),
                            a().createElement(
                                me,
                                Fu({ className: 'TaskListItem_description_26' }, it[tt.TASK_DESCRIPTION], {
                                    isReverse: !!j && !w,
                                    isDisabled: !j,
                                }),
                                a().createElement(It, {
                                    description: i,
                                    taskState: r,
                                    isUnlockedFirstTime: l,
                                    isLockRunOut: b,
                                    timeString: M,
                                    isShouldPlayAnimation: f,
                                    onAnimationFinished: W,
                                }),
                            ),
                        ),
                    );
                };
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const Du = (0, q.Pi)(({ isChanging: e }) => {
                    const t = se(),
                        u = t.controls,
                        i = t.model,
                        r = (0, n.useRef)(!1),
                        o = (0, n.useRef)(!1),
                        s = i.selectedMission.get(),
                        l = i.tasks.get(),
                        c = (0, n.useCallback)(() => {
                            o.current || (I('dq_screen_quest_reroll'), (o.current = !0));
                        }, []),
                        d = (0, n.useCallback)(() => {
                            o.current || (I('dq_screen_premium_missions_complete'), (o.current = !0));
                        }, []),
                        E = (0, n.useCallback)(() => {
                            r.current || (I('dq_widget_slide_in'), (r.current = !0));
                        }, []),
                        _ = (0, n.useCallback)(() => {
                            r.current = !1;
                        }, []),
                        m = (0, n.useCallback)(() => {
                            o.current = !1;
                        }, []);
                    return e && r.current
                        ? null
                        : a().createElement(
                              'div',
                              { className: 'TaskList_base_fb' },
                              ae(l, (e, t) =>
                                  a().createElement(
                                      hu,
                                      pu(
                                          {
                                              key: `taskListItem_${e.taskId}_${t}`,
                                              missionId: s.missionId,
                                              index: t,
                                              onTaskUnlocked: u.selectedMissionTaskUnlocked,
                                          },
                                          e,
                                          {
                                              onUnlockAnimationStart: c,
                                              onCompletionAnimationStart: d,
                                              onAnimationFinished: m,
                                              onAppearanceAnimationStart: E,
                                              onAppearanceAnimationFinished: _,
                                          },
                                      ),
                                  ),
                              ),
                          );
                });
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
                const Bu = (0, q.Pi)(({ isChanged: e, durationTasks: t }) => {
                    const u = se().model,
                        n = u.root.selectedTab.get() === X.EVENT,
                        i = u.selectedMission.get(),
                        r = i.missionId,
                        o = u.tasks.get().length,
                        s = C().mediaSize > B.Large;
                    return a().createElement(
                        'div',
                        { className: p()('MissionInfo_base_ff', o > 1 && 'MissionInfo_base__center_dc') },
                        i.isCountdownVisible &&
                            a().createElement(
                                me,
                                fu({ key: n ? 'countdown' : `countdown_${r}` }, it[tt.COUNTDOWN]),
                                a().createElement(ft, null),
                            ),
                        a().createElement(
                            me,
                            fu({ key: n ? 'title' : `title_${r}` }, it[tt.TITLE], {
                                className: 'MissionInfo_title_af',
                            }),
                            R.strings.sm_lobby.missionSelection.missionName.$num(r),
                        ),
                        a().createElement(
                            me,
                            fu({ key: n ? 'subTitle' : `subTitle_${r}` }, it[tt.SUB_TITLE]),
                            a().createElement(et, {
                                classMix: 'MissionInfo_subTitle_64',
                                text: R.strings.sm_lobby.missionSelection.missionDescription.$num(r),
                                isTruncationAvailable: !0,
                                isTooltipEnable: !0,
                            }),
                        ),
                        a().createElement(
                            'div',
                            { style: { height: (s ? 86 : 76) * o + 'rem' } },
                            a().createElement(
                                _t,
                                { key: `taskList_${r}`, isTransition: e, duration: t },
                                a().createElement(Du, { isChanging: !e }),
                            ),
                        ),
                    );
                });
                var vu = u(6112);
                const bu = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const yu = (0, n.forwardRef)(function (e, t) {
                        let u = e.src,
                            i = e.className,
                            o = e.autoplay,
                            s = void 0 !== o && o,
                            l = e.style,
                            c = e.loop,
                            d = void 0 !== c && c,
                            E = e.isPrebufferKeyframes,
                            _ = e.keyframesNameConfig,
                            m = e.onClick,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (u = i[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, bu);
                        const g = t,
                            F = (0, n.useRef)(null);
                        return (
                            z(() =>
                                r.O.view.events.onDisplayChanged((e, t) => {
                                    var u, n;
                                    t === vu.W.hidden && (null == (u = F.current) || u.pause()),
                                        t === vu.W.shown && (null == (n = F.current) || n.play());
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
                                                    (u = null),
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
                                                        })());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                                            }
                                        );
                                    })(),
                                [E, g],
                            ),
                            (0, n.useEffect)(() => {
                                if (g && F.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: Z },
                                        t = () => {
                                            let t = 0;
                                            const u = (function (u) {
                                                    let n = 0;
                                                    return [
                                                        function u() {
                                                            (() => {
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
                                                                    const i = F.current.cohGetKeyframeTimestamps();
                                                                    i.forEach((t, u) => {
                                                                        n > i[u] - 0.02 &&
                                                                            n < i[u] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const n = Object.keys(
                                                                                    null != _ ? _ : {},
                                                                                )[u];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${_ ? n : `Point_${u}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (n = requestAnimationFrame(u));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(n);
                                                        },
                                                    ];
                                                })(),
                                                n = u[0],
                                                a = u[1];
                                            return n(), a;
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
                                        i = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.duration;
                                        },
                                        r = (e) => {
                                            var t, u;
                                            F.current &&
                                                (F.current.currentTime =
                                                    (0, (t = F.current.duration), (u = e) < 0 ? 0 : u > t ? t : u));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.play();
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = F.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            s(), r(0);
                                        },
                                        c = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = F.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            r(e), o();
                                        },
                                        m = (e) => {
                                            r(e), s();
                                        },
                                        A = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, t) => {
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
                                        p = (e, t) => {
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
                                            on: h,
                                            off: p,
                                            play: o,
                                            pause: s,
                                            stop: l,
                                            cleanup: A,
                                            getCurrentTime: a,
                                            getDuration: i,
                                            getCachedKeyframes: c,
                                            goToAndPlay: d,
                                            goToAndStop: m,
                                            setCurrentTime: r,
                                            domRef: F.current,
                                            onChangeTime: u,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            A(), (g.current = null);
                                        }
                                    );
                                }
                            }, [_, g, E]),
                            (0, n.useEffect)(() => {
                                F.current && s && F.current.play();
                            }, [s, d]),
                            (0, n.useEffect)(() => {
                                if (F.current)
                                    return () => {
                                        F.current && F.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                Cu({ src: u, className: i, style: l, loop: d, ref: F, onClick: m }, A),
                            )
                        );
                    }),
                    Tu = (0, n.memo)(yu);
                let Su;
                !(function (e) {
                    (e.UNDEFINED = ''), (e.NORMAL = 'normal'), (e.HARD = 'hard'), (e.VERY_HARD = 'very_hard');
                })(Su || (Su = {}));
                const ku = {
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
                function wu() {
                    return (
                        (wu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        wu.apply(this, arguments)
                    );
                }
                const Ou = (0, n.memo)(
                        ({
                            isSelected: e,
                            missionId: t,
                            selectedMissionId: u,
                            displayName: i,
                            difficulty: o,
                            locked: s,
                            onClick: l,
                        }) => {
                            const c = (0, n.useRef)(null),
                                d = St(wt.StoryMode, {
                                    action: Ot.Watched,
                                    parentScreen: xt.MissionSelection,
                                    timeLimit: 2,
                                    item: xt.SelectButtonTooltip,
                                    itemState: u.toString(),
                                    info: JSON.stringify({
                                        select_button_mission: t.toString(),
                                        select_button_state: s ? 'locked' : 'unlocked',
                                    }),
                                });
                            return (
                                (0, n.useEffect)(() => {
                                    const t = c.current;
                                    if (t) return e ? t.play() : t.pause();
                                }, [e, c]),
                                a().createElement(
                                    ve,
                                    wu(
                                        {
                                            contentId: R.views.story_mode.lobby.DifficultyTooltip('resId'),
                                            args: { difficulty: o, isSelected: e, missionId: t },
                                        },
                                        d,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: p()(ku.base, e && ku.base__selected, s && ku.base__locked) },
                                        a().createElement('div', { className: p()(ku.back, ku[`back__${o}`]) }),
                                        !s &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                a().createElement('div', {
                                                    className: p()(ku.backHover, ku[`backHover__${o}`]),
                                                }),
                                                a().createElement('div', {
                                                    className: p()(ku.backSelected, ku[`backSelected__${o}`]),
                                                }),
                                            ),
                                        s &&
                                            a().createElement('div', {
                                                className: p()(ku.backLocked, ku[`backLocked__${o}`]),
                                            }),
                                        a().createElement(
                                            'div',
                                            { className: p()(ku.video, ku.video__container) },
                                            r.O.client.graphicsQuality.isLow()
                                                ? a().createElement('div', {
                                                      className: p()(ku.video, ku.video__static, ku[`video__${o}`]),
                                                  })
                                                : a().createElement(Tu, {
                                                      className: p()(ku.video, ku[`video__${o}`]),
                                                      src: R.videos.story_mode.v_icon_fire(),
                                                      ref: c,
                                                      loop: !0,
                                                  }),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: p()(!s && ku.displayName, s && ku.displayNameLocked) },
                                            i,
                                        ),
                                        a().createElement('div', {
                                            className: ku.area,
                                            onClick: () => {
                                                e ||
                                                    s ||
                                                    (o === Su.HARD
                                                        ? I('gui_hangar_sm_difficulty_02')
                                                        : o === Su.VERY_HARD
                                                          ? I('gui_hangar_sm_difficulty_03')
                                                          : I('gui_hangar_sm_difficulty_01'),
                                                    l(t));
                                            },
                                            onMouseEnter: () => {
                                                e || P.playHighlight();
                                            },
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    xu = {
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
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const Nu = (0, n.memo)(
                        ({
                            isSelected: e,
                            missionId: t,
                            displayName: u,
                            isCompleted: i,
                            isCompletedFirstTime: o,
                            locked: s,
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
                                        className: p()(
                                            xu.base,
                                            e && xu.base__selected,
                                            i && xu.base__complete,
                                            s && xu.base__locked,
                                        ),
                                    },
                                    a().createElement('div', {
                                        className: xu.area,
                                        onClick: () => {
                                            e || (P.playClick(), l(t));
                                        },
                                        onMouseEnter: P.playHighlight,
                                    }),
                                    a().createElement('div', { className: xu.backNormal }),
                                    a().createElement('div', { className: xu.backSelected }),
                                    (!i || o || s) &&
                                        a().createElement(
                                            me,
                                            Lu({ className: xu.missionState }, it[tt.MISSION_STATE], {
                                                isDisabled: !o,
                                            }),
                                            a().createElement('div', { className: xu.iconShadow }),
                                            a().createElement('div', { className: xu.iconGlow }),
                                            a().createElement('div', { className: xu.icon }),
                                        ),
                                    a().createElement(
                                        'div',
                                        { className: xu.video },
                                        r.O.client.graphicsQuality.isLow()
                                            ? a().createElement('div', { className: p()(xu.video, xu.video__static) })
                                            : a().createElement(Tu, {
                                                  className: xu.video,
                                                  src: R.videos.story_mode.v_icon_fire(),
                                                  ref: c,
                                                  loop: !0,
                                              }),
                                    ),
                                    a().createElement('div', { className: xu.hover }),
                                    a().createElement('div', { className: xu.missionId }, u),
                                )
                            );
                        },
                    ),
                    Ru = (0, q.Pi)(({ onClick: e, className: t }) => {
                        const u = se().model,
                            n = u.missions.get(),
                            i = u.selectedMission.get().missionId,
                            r = u.computes.getIsSelectedMissionCompletedFirstTime();
                        return a().createElement(
                            'div',
                            { className: p()('MissionSelector_base_69', t) },
                            ae(n, (t, o) => {
                                const s = i === t.missionId,
                                    l = (function (e, t) {
                                        var u;
                                        if (!(t >= e.length))
                                            return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                                    })(n, o + 1),
                                    c = i === (null == l ? void 0 : l.missionId);
                                return a().createElement(
                                    a().Fragment,
                                    { key: t.missionId },
                                    u.root.selectedTab.get() === X.EVENT
                                        ? a().createElement(Ou, {
                                              onClick: e,
                                              isSelected: s,
                                              missionId: t.missionId,
                                              displayName: t.displayName,
                                              difficulty: t.difficulty,
                                              selectedMissionId: i,
                                              locked: t.locked,
                                          })
                                        : a().createElement(Nu, {
                                              onClick: e,
                                              isSelected: s,
                                              missionId: t.missionId,
                                              displayName: t.displayName,
                                              isCompleted: t.isCompleted,
                                              isCompletedFirstTime: s && r,
                                              locked: t.locked,
                                          }),
                                    u.root.selectedTab.get() !== X.EVENT &&
                                        o !== n.length - 1 &&
                                        a().createElement('div', {
                                            className: p()(
                                                'MissionSelector_line_e4',
                                                s && 'MissionSelector_line__left_9c',
                                                c && 'MissionSelector_line__right_dc',
                                                (s || c) && 'MissionSelector_line__selected_ff',
                                            ),
                                        }),
                                );
                            }),
                        );
                    });
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Iu = ({ className: e }) => {
                        const t = St(wt.StoryMode, {
                            action: Ot.Watched,
                            item: xt.MssVehicleTooltip,
                            parentScreen: xt.MissionSelection,
                            timeLimit: 2,
                        });
                        return a().createElement(
                            'div',
                            { className: p()('MissionVehicle_base_5d', e) },
                            a().createElement(
                                'div',
                                { className: 'MissionVehicle_text_ba' },
                                R.strings.sm_lobby.missionSelection.specialVehicle(),
                            ),
                            a().createElement(
                                ve,
                                Mu(
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
                    Pu = 360,
                    Uu = { tension: 210, friction: 240 },
                    Hu = { tension: 70, friction: 480 },
                    Gu = (e, t, u, n) => {
                        const a = t[e.spriteName].frameX,
                            i = t[e.spriteName].frameY,
                            r = t[e.spriteName].sourceName,
                            o = t[e.spriteName].sourceWidth,
                            s = t[e.spriteName].sourceHeight;
                        return {
                            style: {
                                width: e.width,
                                height: e.height,
                                opacity: e.opacity,
                                transform: e.transform,
                                transformOrigin: e.transformOrigin,
                                background: 'no-repeat 50% / 100% 100%',
                                backgroundImage: `url('${n}${r}${u}')`,
                                backgroundAttachment: 'fixed',
                                backgroundPosition: `-${a}rem -${i}rem`,
                                backgroundSize: `${o}rem ${s}rem`,
                                mixBlendMode: e.mixBlendMode,
                            },
                            source: { backgroundSource: `${n}${r}${u}` },
                        };
                    },
                    Wu = (0, q.Pi)(({ loadChecker: e, item: t }) => {
                        const u = se().model,
                            n = u.parallax.get(),
                            i = n.chunkFileExt,
                            r = n.chunksAssetsPath;
                        return a().createElement(
                            'div',
                            { className: 'AssetItem_base_bb' },
                            a().createElement('div', {
                                className: 'AssetItem_sprite_ee',
                                style: Object.assign({}, Gu(t, u.computes.atlasObj(), i, r).style),
                            }),
                            a().createElement('img', {
                                className: 'AssetItem_imgLoader_84',
                                alt: t.keyName,
                                src: Gu(t, u.computes.atlasObj(), i, r).source.backgroundSource,
                                onLoad: e,
                            }),
                        );
                    }),
                    ju = (0, q.Pi)(({ dioramaLoaded: e }) => {
                        const t = se().model.computes.parallaxStructureObj(),
                            u = t ? t.length : 0,
                            i = (0, n.useRef)(0),
                            r = (0, n.useCallback)(() => {
                                i.current++, i.current === u && (e && e(), (i.current = 0));
                            }, [e, u]);
                        return a().createElement(
                            'div',
                            { className: 'Assets_base_fd' },
                            t &&
                                t.map((e, u) =>
                                    a().createElement(Wu, {
                                        key: `${t.missionId}_${e.keyName}_${u}`,
                                        item: e,
                                        loadChecker: r,
                                    }),
                                ),
                        );
                    }),
                    Ku = 2560 / 1440,
                    Vu = (0, q.Pi)(({ children: e }) => {
                        const t = se().model.parallax.get(),
                            u = t.perspective,
                            i = t.overallScale,
                            o = t.perspectiveOriginX,
                            s = t.perspectiveOriginY,
                            l = t.wrapperHeight,
                            c = t.wrapperWidth,
                            d = (0, n.useState)(1),
                            E = d[0],
                            _ = d[1],
                            m = (0, n.useCallback)(() => {
                                const e = r.O.view.getSize('rem');
                                let t = 1;
                                e.width >= e.height * Ku
                                    ? (t = e.width / 2560)
                                    : e.height >= e.width / Ku && (t = e.height / 1440),
                                    _(t);
                            }, []);
                        return (
                            (0, n.useEffect)(
                                () => (
                                    r.O.client.events.on('screenResized', m),
                                    r.O.client.events.on('self.onScaleUpdated', m),
                                    m(),
                                    () => {
                                        r.O.client.events.off('screenResized', m),
                                            r.O.client.events.off('self.onScaleUpdated', m);
                                    }
                                ),
                                [m],
                            ),
                            a().createElement(
                                'div',
                                {
                                    style: {
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: `translate(-50%, -50%) scale(${i * E})`,
                                        perspective: `${u}rem`,
                                        perspectiveOrigin: `${o}% ${s}%`,
                                        width: `${c}rem`,
                                        height: `${l}rem`,
                                    },
                                },
                                e,
                            )
                        );
                    }),
                    $u = (0, q.Pi)(({ refParent: e, dioramaLoaded: t }) => {
                        const u = se().model.parallax.get(),
                            i = u.xTilt,
                            r = u.xTiltRange,
                            o = u.yTilt,
                            s = u.yTiltRange,
                            l = u.xSlide,
                            c = u.ySlide,
                            d = ((e, t) => {
                                const u = (0, n.useCallback)(
                                        (t, u, n) => {
                                            const a = Math.min(Math.max((t - n.x) / n.width, 0), 1),
                                                i = Math.min(Math.max((u - n.y) / n.height, 0), 1),
                                                r = e.yTilt + e.yTiltRange + Pu - (e.yTilt - e.yTiltRange + Pu),
                                                o = e.xTilt + e.xTiltRange + Pu - (e.xTilt - e.xTiltRange + Pu),
                                                s = -a * r + r / 2 + e.yTilt,
                                                l = i * o - o / 2 + e.xTilt;
                                            return {
                                                x: a * n.width - n.width / 2,
                                                y: i * n.height - n.height / 2,
                                                xR: l,
                                                yR: s,
                                            };
                                        },
                                        [e.xTilt, e.xTiltRange, e.yTilt, e.yTiltRange],
                                    ),
                                    a = (0, Y.useSpring)(() => ({ x: 0, y: 0, xR: e.xTilt, yR: e.yTilt }), []);
                                return (
                                    (0, n.useEffect)(() => {
                                        const n = ({ clientX: n, clientY: i }) => {
                                            if (t.current) {
                                                const r = t.current.getBoundingClientRect(),
                                                    o = a[1];
                                                if (
                                                    !((e, t, u) => {
                                                        const n = u.width + u.x,
                                                            a = u.height + u.y;
                                                        return e >= 2 + u.x && t >= 2 + u.y && e <= n - 2 && t <= a - 2;
                                                    })(n, i, r)
                                                )
                                                    return void o.start({
                                                        x: 0,
                                                        y: 0,
                                                        xR: e.xTilt,
                                                        yR: e.yTilt,
                                                        config: Hu,
                                                    });
                                                o.start(Object.assign({}, u(n, i, r), { config: Uu }));
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
                            })({ xTilt: i, xTiltRange: r, yTilt: o, yTiltRange: s }, e)[0];
                        return a().createElement(
                            Vu,
                            null,
                            a().createElement(
                                Y.animated.div,
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
                                    a().createElement(ju, { dioramaLoaded: t }),
                                ),
                            ),
                        );
                    }),
                    zu = 'TabItem_tab_ad',
                    qu = (0, n.memo)(function ({ tabText: e, isSelected: t, onClick: u }) {
                        return a().createElement(
                            'div',
                            { className: p()('TabItem_base_ba', t && 'TabItem_base__selected_bc') },
                            a().createElement(
                                'div',
                                {
                                    className: zu,
                                    onClick: () => {
                                        t || (P.playClick(), u());
                                    },
                                    onMouseEnter: () => {
                                        t || P.playHighlight();
                                    },
                                },
                                e,
                            ),
                            a().createElement('div', { className: p()(zu, 'TabItem_tab__hoverDecor_4c') }, e),
                        );
                    }),
                    Yu = (0, n.memo)(({ selectedTab: e, onChange: t }) =>
                        a().createElement(
                            'div',
                            { className: 'Tabs_base_cb' },
                            a().createElement('div', { className: 'Tabs_line_13' }),
                            a().createElement(qu, {
                                tabText: R.strings.sm_lobby.missionSelection.tab.newbies(),
                                onClick: () => t(X.NEWBIES),
                                isSelected: e === X.NEWBIES,
                            }),
                            a().createElement(qu, {
                                tabText: R.strings.sm_lobby.missionSelection.tab.event(),
                                onClick: () => t(X.EVENT),
                                isSelected: e === X.EVENT,
                            }),
                        ),
                    ),
                    Xu = 'MissionSelectionViewApp_blackScreen_8d',
                    Qu = 'MissionSelectionViewApp_blackScreen__overlay_b7',
                    Zu = (0, q.Pi)(() => {
                        const e = se(),
                            t = e.controls,
                            u = e.model,
                            i = (0, n.useState)({ id: void 0, isTab: !1 }),
                            r = i[0],
                            o = i[1],
                            s = u.selectedMission.get(),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)({ missionId: void 0, locked: !1 }),
                            d = (0, n.useState)(!1),
                            E = d[0],
                            _ = d[1],
                            m = u.root.selectedTab.get(),
                            A = m === X.EVENT,
                            g = r.isTab ? m : s.missionId,
                            F = (0, n.useState)(!1),
                            h = F[0],
                            D = F[1],
                            f = (0, Y.useSpring)(() => ({})),
                            B = f[0],
                            v = f[1];
                        (0, n.useEffect)(() => {
                            r.id !== s.missionId && o({ id: s.missionId, isTab: !1 });
                        }, [s.missionId]),
                            z(() => {
                                c.current = { missionId: s.missionId, locked: s.locked };
                            }),
                            (0, n.useEffect)(() => {
                                c.current.missionId === s.missionId && c.current.locked && !s.locked && _(!0),
                                    (c.current = { missionId: s.missionId, locked: s.locked });
                            }, [s, s.missionId, s.locked]);
                        const b = (0, n.useCallback)(() => {
                                _(!1);
                            }, []),
                            C = (0, n.useCallback)(
                                (e, u) => {
                                    h ||
                                        (D(!0),
                                        v.start({
                                            to: { opacity: 1 },
                                            onRest: () => (u ? t.changeTab(e) : t.missionSelect(e)),
                                            delay: 50,
                                            config: { duration: 200 },
                                        }),
                                        o({ id: e, isTab: u }),
                                        _(!1));
                                },
                                [v, t, h],
                            ),
                            y = (0, n.useCallback)(() => {
                                v.start({ to: { opacity: 0 }, config: { duration: 200 } }), t.loaded(), D(!1);
                            }, [v, t]);
                        return (
                            $(j.n.ESCAPE, t.exit),
                            a().createElement(
                                'div',
                                { className: 'MissionSelectionViewApp_base_fd', ref: l },
                                a().createElement('div', { className: Xu }),
                                !s.locked && u.root.isParallaxEnabled.get()
                                    ? a().createElement($u, { refParent: l, dioramaLoaded: y })
                                    : a().createElement(Q, {
                                          backgroundPath: R.images.story_mode.gui.maps.icons.common.backgrounds.$num(
                                              s.missionId,
                                          ),
                                          onLoaded: y,
                                          grayscaleApplied: s.locked,
                                          showVignette: !s.locked,
                                          showBlur: s.locked,
                                      }),
                                s.locked
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
                                          a().createElement('div', {
                                              className: 'MissionSelectionViewApp_shadowLeft_62',
                                          }),
                                      ),
                                a().createElement('div', { className: 'MissionSelectionViewApp_shadowTop_1a' }),
                                a().createElement('div', { className: 'MissionSelectionViewApp_shadowBottom_9c' }),
                                A && a().createElement('div', { className: 'MissionSelectionViewApp_logo_32' }),
                                a().createElement(Y.animated.div, { className: p()(Xu, Qu), style: B }),
                                !s.locked && a().createElement(Bu, { isChanged: g === r.id, durationTasks: 250 }),
                                (s.locked || E) &&
                                    a().createElement(ot, {
                                        shouldPlayUnlockAnimation: E,
                                        missionName: R.strings.sm_lobby.missionSelection.lockedMissionName.$num(
                                            s.missionId,
                                        ),
                                        battlesToUnlock: s.battlesToUnlock,
                                        onAnimationFinished: b,
                                    }),
                                !A && a().createElement(Y.animated.div, { className: p()(Xu, Qu), style: B }),
                                u.root.isTabsVisible.get() &&
                                    a().createElement(
                                        'div',
                                        { className: 'MissionSelectionViewApp_tabs_1b' },
                                        a().createElement(Yu, { selectedTab: m, onChange: (e) => C(e, !0) }),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: 'MissionSelectionViewApp_close_5b' },
                                    a().createElement(W, {
                                        caption: R.strings.sm_lobby.missionSelection.exitButton(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: t.exit,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'MissionSelectionViewApp_about_27' },
                                    a().createElement(le, { onClick: t.openAbout }),
                                ),
                                a().createElement(Ru, {
                                    onClick: (e) => C(e, !1),
                                    className: 'MissionSelectionViewApp_missionSelector_47',
                                }),
                                a().createElement(Iu, { className: 'MissionSelectionViewApp_specialVehicle_40' }),
                                r.isTab && a().createElement(Y.animated.div, { className: Xu, style: B }),
                                A &&
                                    !r.isTab &&
                                    a().createElement('div', {
                                        className: 'MissionSelectionViewApp_triggerHint_55',
                                        id: 'mission-selection-trigger-hint-id',
                                    }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    M().render(
                        a().createElement(oe, null, a().createElement(L, null, a().createElement(Zu, null))),
                        document.getElementById('root'),
                    );
                });
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
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], i = !0, r = 0; r < t.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[r]))
                            ? t.splice(r--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(s--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 'lobby/MissionSelectionView/MissionSelectionView'),
        (() => {
            var e = { 'lobby/MissionSelectionView/MissionSelectionView': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [i, r, o] = u,
                        s = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); s < i.length; s++)
                        (a = i[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/story_mode.vendors'], () =>
        __webpack_require__(4994),
    );
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
