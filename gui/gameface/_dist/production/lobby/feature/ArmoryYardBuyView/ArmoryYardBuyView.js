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
            3532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            9887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => o, onResize: () => n }));
                var a = t(2472),
                    r = t(1176);
                const n = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const n = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, i),
                                            a(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(n, i),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    }));
                var a = t(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                'use strict';
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var a = t(5959);
                const r = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                'use strict';
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => a }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
                var a = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => n.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => f,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => d,
                        isClientAccessible: () => p,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    }));
                var a = t(3722),
                    r = t(6112),
                    n = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function d(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.isClientAccessible();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => n });
                const a = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, a);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    n = {
                        close(e) {
                            r('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(e) {
                            r(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, r;
                (t.d(u, { n: () => a }),
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
                            (e[(e.KEY_0 = 48)] = 'KEY_0'),
                            (e[(e.KEY_1 = 49)] = 'KEY_1'),
                            (e[(e.KEY_2 = 50)] = 'KEY_2'),
                            (e[(e.KEY_3 = 51)] = 'KEY_3'),
                            (e[(e.KEY_4 = 52)] = 'KEY_4'),
                            (e[(e.KEY_5 = 53)] = 'KEY_5'),
                            (e[(e.KEY_6 = 54)] = 'KEY_6'),
                            (e[(e.KEY_7 = 55)] = 'KEY_7'),
                            (e[(e.KEY_8 = 56)] = 'KEY_8'),
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
                    })(a || (a = {})),
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
                    })(r || (r = {})));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var a = t(3138);
                class r {
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
                        return (window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => c, Z5: () => s, B0: () => i, ry: () => B });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                a.__instance = void 0;
                const r = a;
                var n = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                (((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, a, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(a, r);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function s(e) {
                                            D(n, a, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(n, a, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    p = () => C(i.CLOSE),
                    b = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const v = r.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: E,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                E = o.height,
                                m = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(E),
                                };
                            C(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: g(m),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = f;
            },
            4221: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    r = t.n(a);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
                    const a = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                })(i || (i = {}));
                const c = s.O.client.getSize('rem'),
                    _ = c.width,
                    E = c.height,
                    m = Object.assign({ width: _, height: E }, l(_, E, o)),
                    d = (0, a.createContext)(m),
                    A = ['children'],
                    F = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, A);
                        const r = (0, a.useContext)(d),
                            s = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            _ = r.extraLargeWidth,
                            E = r.largeWidth,
                            m = r.mediumWidth,
                            F = r.smallWidth,
                            D = r.extraSmallWidth,
                            g = r.extraLargeHeight,
                            B = r.largeHeight,
                            C = r.mediumHeight,
                            p = r.smallHeight,
                            b = r.extraSmallHeight,
                            h = { extraLarge: g, large: B, medium: C, small: p, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && o) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return n(u, t, h);
                            if (t.largeWidth && E) return n(u, t, h);
                            if (t.mediumWidth && m) return n(u, t, h);
                            if (t.smallWidth && F) return n(u, t, h);
                            if (t.extraSmallWidth && D) return n(u, t, h);
                            if (!(
                                t.extraLargeWidth ||
                                t.largeWidth ||
                                t.mediumWidth ||
                                t.smallWidth ||
                                t.extraSmallWidth
                            )) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                ((F.defaultProps = {
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
                    (0, a.memo)(F));
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(d),
                        t = (0, a.useState)(u),
                        n = t[0],
                        i = t[1],
                        c = (0, a.useCallback)((e, u) => {
                            const t = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(u);
                            i(Object.assign({ width: t, height: a }, l(t, a, o)));
                        }, []);
                    (((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const _ = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(d.Provider, { value: _ }, e);
                });
                var g = t(6483),
                    B = t.n(g),
                    C = t(926),
                    p = t.n(C);
                let b, h, v;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(b || (b = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                    })(h || (h = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge'));
                    })(v || (v = {})));
                const f = () => {
                        const e = (0, a.useContext)(d),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), b.ExtraSmall);
                                }
                            })(e),
                            n = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return (console.error('Unreachable media context resolution'), v.ExtraSmall);
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    w = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [h.ExtraSmall]: '',
                        [h.Small]: p().SMALL_WIDTH,
                        [h.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [h.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [h.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_HEIGHT,
                        [v.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [v.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL,
                        [b.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [b.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [b.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, w);
                        const n = f(),
                            s = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', S({ className: B()(t, y[s], x[o], P[i]) }, a), u);
                    },
                    M = ['children'],
                    L = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, M);
                        return r().createElement(D, null, r().createElement(T, t, u));
                    };
                var k = t(493),
                    N = t.n(k);
                function O(e) {
                    engine.call('PlaySound', e);
                }
                const I = {
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
                function U() {
                    return (
                        (U =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        U.apply(this, arguments)
                    );
                }
                class G extends r().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && O(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && O(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            a = e.goto,
                            n = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                    return r;
                                })(e, H)),
                            m = B()(I.base, I[`base__${s}`], I[`base__${n}`], null == o ? void 0 : o.base),
                            d = B()(I.icon, I[`icon__${s}`], I[`icon__${n}`], null == o ? void 0 : o.icon),
                            A = B()(I.glow, null == o ? void 0 : o.glow),
                            F = B()(I.caption, I[`caption__${s}`], null == o ? void 0 : o.caption),
                            D = B()(I.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            U(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && r().createElement('div', { className: I.shine }),
                            r().createElement('div', { className: d }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            a && r().createElement('div', { className: D }, a),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var $ = t(5521),
                    W = t(4179);
                const X = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(e = $.n.NONE, u = X, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                var z = t(3282);
                const q = (0, a.memo)(() =>
                    r().createElement(
                        'div',
                        { className: 'Vignette_base_22' },
                        r().createElement('div', { className: 'Vignette_layer1_3c' }),
                    ),
                );
                function V() {
                    return !1;
                }
                console.log;
                var Y = t(3915);
                function K(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, a = new Array(u); t < u; t++) a[t] = e[t];
                    return a;
                }
                const Q = (e) => (0 === e ? window : window.subViews.get(e));
                function Z(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, a) => u(null == e ? void 0 : e.value, t, a));
                }
                var J = t(6517);
                let ee, ue, te, ae, re, ne, se, oe, ie, le;
                (!(function (e) {
                    ((e.MainView = 'mainView'), (e.VehiclePreview = 'vehiclePreview'));
                })(ee || (ee = {})),
                    (function (e) {
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
                            (e.Currency = 'currency'),
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
                            (e.SelectableBonus = 'selectableBonus'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                            (e.NewYearFillers = 'ny22Fillers'),
                            (e.NewYearInvoice = 'newYearInvoice'),
                            (e.NewYearToyFragments = 'ny22ToyFragments'),
                            (e.NewYearSlot = 'newYearSlot'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.CollectionItem = 'collectionItem'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.CosmicLootboxSilver = 'lootBoxToken'),
                            (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                            (e.Branch = 'branch'),
                            (e.VehicleSelect = 'vehicleSelect'),
                            (e.StyleProgress = 'styleProgress'),
                            (e.ParagonsUnlocks = 'paragonsUnlocks'),
                            (e.LootBoxToken = 'lootBoxToken'),
                            (e.PostStamp = 'giftsystem_5_stamp'),
                            (e.Quests = 'quests'),
                            (e.ArmoryCoin = 'armory_coin'),
                            (e.PremiumPlusUniversal = 'premium_plus_universal'),
                            (e.DogTagType = 'dogTagComponents'),
                            (e.GoldenTicket = 'goldenticket'),
                            (e.LbStyleProgress = 'lbStyleProgress'),
                            (e.RewardsSlots = 'rewardsSlots'));
                    })(ue || (ue = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(te || (te = {})),
                    (function (e) {
                        ((e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S48x48 = 's48x48'));
                    })(ae || (ae = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(re || (re = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(ne || (ne = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(se || (se = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(oe || (oe = {})),
                    (function (e) {
                        ((e.Small = '400x300'), (e.Big = '600x450'));
                    })(ie || (ie = {})),
                    (function (e) {
                        e.ProgressionStyle = 'progressionStyle';
                    })(le || (le = {})));
                class ce extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? W.B3.GOLD : W.B3.INTEGRAL;
                        const u = W.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ce.defaultProps = { format: 'integral' };
                const _e = [
                        ue.Items,
                        ue.Equipment,
                        ue.Xp,
                        ue.XpFactor,
                        ue.Blueprints,
                        ue.BlueprintsAny,
                        ue.Goodies,
                        ue.Berths,
                        ue.Slots,
                        ue.Tokens,
                        ue.CrewSkins,
                        ue.CrewBooks,
                        ue.Customizations,
                        ue.CreditsFactor,
                        ue.TankmenXp,
                        ue.TankmenXpFactor,
                        ue.FreeXpFactor,
                        ue.BattleToken,
                        ue.PremiumUniversal,
                        ue.NaturalCover,
                        ue.BpCoin,
                        ue.BattlePassSelectToken,
                        ue.BattlaPassFinalAchievement,
                        ue.BattleBadge,
                        ue.BonusX5,
                        ue.CrewBonusX3,
                        ue.NewYearFillers,
                        ue.NewYearInvoice,
                        ue.EpicSelectToken,
                        ue.Comp7TokenWeeklyReward,
                        ue.Comp7TokenCouponReward,
                        ue.BattleBoosterGift,
                        ue.CosmicLootboxCommon,
                        ue.CosmicLootboxSilver,
                        ue.SelectableBonus,
                        ue.PostStamp,
                        ue.PremiumPlusUniversal,
                        ue.GoldenTicket,
                        ue.RewardsSlots,
                    ],
                    Ee = [ue.Gold, ue.Credits, ue.Crystal, ue.FreeXp],
                    me = [ue.BattlePassPoints],
                    de = [ue.PremiumPlus, ue.Premium];
                let Ae;
                !(function (e) {
                    ((e.s16 = '16'),
                        (e.s32 = '32'),
                        (e.s48 = '48'),
                        (e.s66 = '66'),
                        (e.s80 = '80'),
                        (e.s116 = '116'),
                        (e.s296 = '296'),
                        (e.s360 = '360'),
                        (e.s400 = '400'),
                        (e.s600 = '600'));
                })(Ae || (Ae = {}));
                const Fe = ['engravings', 'backgrounds'],
                    De = ['engraving', 'background'],
                    ge = (e, u = ae.Small) => {
                        const t = e.name,
                            a = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case ae.S600x450:
                                        return 'c_600x450';
                                    case ae.S400x300:
                                        return 'c_400x300';
                                    case ae.S296x222:
                                        return 'c_296x222';
                                    case ae.S232x174:
                                        return 'c_232x174';
                                    case ae.Big:
                                        return 'c_80x80';
                                    case ae.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${n}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case ae.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case ae.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${n}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const a = Fe[e];
                                    if (a) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(a),
                                            n = r.$dyn(t);
                                        return n ? `${n}` : `${r.$dyn(De[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case ae.S600x450:
                                            return 'c_600x450';
                                        case ae.S400x300:
                                            return 'c_400x300';
                                        case ae.S296x222:
                                            return 'c_296x222';
                                        case ae.S232x174:
                                            return 'c_232x174';
                                        case ae.S180x135:
                                            return 'big';
                                        case ae.Big:
                                        case ae.S80x80:
                                            return 'c_80x80';
                                        case ae.Small:
                                        case ae.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${n}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case ae.Mini:
                                            return Ae.s32;
                                        case ae.Small:
                                        case ae.S48x48:
                                            return Ae.s48;
                                        case ae.S80x80:
                                        case ae.Big:
                                            return Ae.s80;
                                        case ae.S128x100:
                                            return Ae.s116;
                                        case ae.S180x135:
                                        case ae.S232x174:
                                        case ae.S296x222:
                                            return Ae.s296;
                                        case ae.S400x300:
                                            return Ae.s400;
                                        case ae.S600x450:
                                            return Ae.s600;
                                    }
                                })(u)}`;
                            case ue.StyleProgress:
                            case ue.LbStyleProgress:
                                return Ce(n, u, le.ProgressionStyle);
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Be = (e, u, t) => {
                        const a = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            a,
                            t,
                        );
                    },
                    Ce = (e, u, t) => {
                        const a = R.images.gui.maps.icons.quests.bonuses.$dyn(u),
                            r = a.$dyn(e);
                        return String(null != r ? r : a.$dyn(t));
                    },
                    pe = 'RewardsList_reward__info_f1',
                    be = (e) => (e === b.ExtraSmall || e === b.Small ? 20 : e === b.Medium ? 28 : 35),
                    he = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: o, mocks: i }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Q,
                                                context: a = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const r = t(u),
                                                        n = a.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (t, n) => {
                                                        const i = 'string' == typeof n ? `${a}.${n}` : a,
                                                            l = s.O.view.addModelObserver(i, u, !0);
                                                        return (r.set(l, t), e && t(o(n)), l);
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, u) => {
                                                        const t = o(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = o(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return K(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? K(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
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
                                                                })(r.keys());
                                                            !(e = t()).done;
                                                        )
                                                            n(e.value, u);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(t),
                                            o =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(u)) : o.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            _ = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        rewards: e.array('rewards', []),
                                                        steps: e.array('steps', []),
                                                        finalReward: e.object('finalReward'),
                                                        prices: e.array('prices'),
                                                    },
                                                    t = (0, J.computedFn)(
                                                        (e) =>
                                                            Z(u.rewards.get(), (u) =>
                                                                Object.assign(
                                                                    {},
                                                                    ((e, u) => {
                                                                        const t = u === b.Small || u === b.ExtraSmall,
                                                                            a = t ? ae.Small : ae.Big,
                                                                            r = e.name === ue.Vehicles;
                                                                        return {
                                                                            name: e.name,
                                                                            size: a,
                                                                            image: ge(e, a),
                                                                            special: e.overlayType,
                                                                            value: r ? e.label : e.value,
                                                                            valueType:
                                                                                ((n = e.name),
                                                                                _e.includes(n)
                                                                                    ? re.MULTI
                                                                                    : Ee.includes(n)
                                                                                      ? re.CURRENCY
                                                                                      : me.includes(n)
                                                                                        ? re.NUMBER
                                                                                        : de.includes(n)
                                                                                          ? re.PREMIUM_PLUS
                                                                                          : re.STRING),
                                                                            tooltipArgs: Be(
                                                                                {
                                                                                    tooltipId: e.tooltipId,
                                                                                    tooltipType: 'mergedReward',
                                                                                },
                                                                                Number.parseInt(e.tooltipContentId),
                                                                            ),
                                                                            classNames: r && t ? { info: pe } : {},
                                                                        };
                                                                        var n;
                                                                    })(u, e),
                                                                ),
                                                            ),
                                                        { equals: V },
                                                    ),
                                                    a = (0, J.computedFn)(
                                                        () =>
                                                            Z(u.steps.get(), (e, t) =>
                                                                t >= u.root.get().stepsPassed
                                                                    ? e
                                                                    : {
                                                                          hasVehicleInReward: !1,
                                                                          vehicleRewardTooltipId: '',
                                                                          vehicleRewardTooltipContentId: '',
                                                                      },
                                                            ),
                                                        { equals: V },
                                                    ),
                                                    r = (0, J.computedFn)(() => a().length),
                                                    n = (0, J.computedFn)(
                                                        (e) =>
                                                            (function (e, u) {
                                                                var t;
                                                                if (!(u >= e.length))
                                                                    return Array.isArray(e)
                                                                        ? e[u]
                                                                        : null == (t = e[u])
                                                                          ? void 0
                                                                          : t.value;
                                                            })(a(), e),
                                                        { equals: V },
                                                    ),
                                                    s = (0, J.computedFn)(() =>
                                                        [
                                                            {
                                                                hasVehicleInReward: !1,
                                                                vehicleRewardTooltipId: '',
                                                                vehicleRewardTooltipContentId: '',
                                                            },
                                                        ].concat(a().slice(0, r() - 1)),
                                                    ),
                                                    o = (0, J.computedFn)(
                                                        () =>
                                                            Z(u.prices.get(), (e) =>
                                                                Object.assign({}, e, {
                                                                    price: Z(e.price, (e) => Object.assign({}, e)),
                                                                    defPrice: Z(e.defPrice, (e) =>
                                                                        Object.assign({}, e),
                                                                    ),
                                                                    discount: Z(e.discount, (e) =>
                                                                        Object.assign({}, e),
                                                                    ),
                                                                }),
                                                            ),
                                                        { equals: V },
                                                    );
                                                return Object.assign(
                                                    {
                                                        computes: {
                                                            getRewards: t,
                                                            getSteps: a,
                                                            getPrices: o,
                                                            getStepsLength: r,
                                                            getStep: n,
                                                            getStepsRewards: s,
                                                            getCurrentPrice: (e) =>
                                                                o().find((u) => u.price[0].name === e),
                                                        },
                                                    },
                                                    u,
                                                );
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = Y.observable.box(a, { equals: V });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Y.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const a = null != t ? t : i(u),
                                                            r = Y.observable.box(a, { equals: V });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Y.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const a = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = Y.observable.box(a[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Y.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = Y.observable.box(a[u], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Y.action)((e) => {
                                                                            n.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            E = { mode: e, model: _, externalModel: o, cleanup: c };
                                        return {
                                            model: _,
                                            controls: 'mocks' === e && a ? a.controls(E) : u(E),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    E = (0, a.useState)(e),
                                    m = E[0],
                                    d = E[1],
                                    A = (0, a.useState)(() => c(e, n, i)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? D(c(m, n, i)) : (_.current = !0);
                                    }, [i, m, n]),
                                    (0, a.useEffect)(() => {
                                        d(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    r().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        cancel: e.createCallbackNoArgs('onCancel'),
                        back: e.createCallbackNoArgs('onBack'),
                        buySteps: e.createCallback((e, u) => ({ steps: e, currency: u }), 'onBuySteps'),
                        onChangeSelectedStep: e.createCallback((e) => ({ count: e }), 'onChangeSelectedStep'),
                        onShowVehiclePreview: e.createCallbackNoArgs('onShowVehiclePreview'),
                        onShowStylePreview: e.createCallbackNoArgs('onShowStylePreview'),
                    })),
                    ve = he[0],
                    fe = he[1],
                    we = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Se = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'classNames',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                let xe;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(xe || (xe = {}));
                const Re = (0, a.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            n = void 0 !== t && t,
                            s = e.autofocus,
                            o = void 0 !== s && s,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            _ = void 0 === c ? 'play' : c,
                            E = e.size,
                            m = void 0 === E ? xe.NORMAL : E,
                            d = e.classNames,
                            A = e.onClick,
                            F = e.onMouseEnter,
                            D = e.onMouseLeave,
                            g = e.onMouseDown,
                            C = e.onMouseUp,
                            p = e.onFocus,
                            b = e.onBlur,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Se);
                        const v = (0, a.useState)(!1),
                            f = v[0],
                            w = v[1],
                            S = (0, a.useState)(!1),
                            y = S[0],
                            x = S[1],
                            R = (0, a.useState)(o),
                            P = R[0],
                            T = R[1],
                            M = (0, a.useRef)(null),
                            L = (0, a.useCallback)(() => {
                                M.current && (M.current.focus(), T(!0));
                            }, []),
                            k = (0, a.useCallback)(
                                (e) => {
                                    P && null !== M.current && !M.current.contains(e.target) && T(!1);
                                },
                                [P],
                            );
                        ((0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', k),
                                () => {
                                    document.removeEventListener('mousedown', k);
                                }
                            ),
                            [k],
                        ),
                            (0, a.useEffect)(() => {
                                T(o);
                            }, [o]));
                        const N = (0, a.useCallback)(
                                (e) => {
                                    A && A(e);
                                },
                                [A],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    (w(!0), g && g(e), _ && O(_), o && L());
                                },
                                [o, g, L, _],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    (w(!1), C && C(e));
                                },
                                [C],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    (F && F(e), l && O(l), x(!0));
                                },
                                [F, l],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    (w(!1), x(!1), D && D(e));
                                },
                                [D],
                            ),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    (T(!0), p && p(e));
                                },
                                [p],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    (T(!1), b && b(e));
                                },
                                [b],
                            ),
                            X = B()(
                                we.base,
                                n && we.base__visibleLabel,
                                f && we.base__mouseDown,
                                y && we.base__hovered,
                                P && we.base__focused,
                                null == d ? void 0 : d.base,
                            ),
                            j = B()(we.icon, we[`icon__${m}`], null == d ? void 0 : d.icon),
                            z = B()(we.label, null == d ? void 0 : d.label);
                        return r().createElement(
                            'div',
                            ye(
                                {
                                    ref: M,
                                    className: X,
                                    onClick: N,
                                    onMouseEnter: U,
                                    onMouseLeave: G,
                                    onMouseDown: I,
                                    onMouseUp: H,
                                    onFocus: $,
                                    onBlur: W,
                                },
                                h,
                            ),
                            r().createElement('div', { className: j }),
                            r().createElement('div', { className: z }, u),
                        );
                    }),
                    Pe = [
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
                function Te(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const Me = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Le = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            m = e.decoratorId,
                            d = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            B = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Pe);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, a.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: a }
                                        );
                                    })().resId,
                                [g],
                            ),
                            v = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Me(t, d, { isMouseEvent: !0, on: !0, arguments: Te(r) }, h),
                                    B && B(),
                                    (b.current.isVisible = !0));
                            }, [t, d, r, h, B]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        Me(t, d, { on: !1 }, h),
                                        b.current.isVisible && C && C(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, d, h, C]),
                            w = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (f(), null == s || s(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === E && f(), null == i || i(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === E && f(), null == o || o(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    ke = ['children'];
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ke);
                        return r().createElement(
                            Le,
                            Ne(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Ie = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Ue = R.views.common.tooltip_window.simple_tooltip_content,
                    Ge = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Ie);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, s, i]);
                        return r().createElement(
                            Le,
                            He(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? Ue.SimpleTooltipHtmlContent('resId') : Ue.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const We = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const a = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(Ge, u, a);
                        const n = u.contentId,
                            s = u.args,
                            o = null == s ? void 0 : s.contentId;
                        return n || o
                            ? r().createElement(Le, $e({}, u, { contentId: n || o }), a)
                            : r().createElement(Oe, u, a);
                    },
                    Xe = () => {
                        const e = (0, a.useState)(s.O.view.getScale()),
                            u = e[0],
                            t = e[1];
                        return (
                            (0, a.useEffect)(() => {
                                const e = () => {
                                    t(s.O.view.getScale());
                                };
                                return (
                                    window.addEventListener('resize', e),
                                    () => {
                                        window.removeEventListener('resize', e);
                                    }
                                );
                            }, []),
                            u
                        );
                    },
                    je = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    ze = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    qe = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let Ve;
                function Ye(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(Ve || (Ve = {}));
                const Ke = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Qe = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Ze = (e, u, t = Ve.left) => e.split(u).reduce(t === Ve.left ? Ke : Qe, []),
                    Je = (() => {
                        const e = new RegExp(
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
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    eu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    uu = {
                        base: 'TankName_base_32',
                        base__sizeMedium: 'TankName_base__sizeMedium_61',
                        base__typeWhite: 'TankName_base__typeWhite_82',
                        base__typeWhiteSpanish: 'TankName_base__typeWhiteSpanish_ae',
                        base__typeColored: 'TankName_base__typeColored_7b',
                        level: 'TankName_level_0d',
                        type: 'TankName_type_88',
                        type__elite: 'TankName_type__elite_1b',
                        name: 'TankName_name_58',
                    };
                let tu, au;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'));
                })(tu || (tu = {})),
                    (function (e) {
                        ((e.colored = 'colored'), (e.white = 'white'), (e.whiteSpanish = 'whiteSpanish'));
                    })(au || (au = {})));
                const ru = ({
                    isElite: e,
                    vehicleName: u,
                    type: t,
                    level: n,
                    size: s = tu.extraSmall,
                    labelType: o = au.colored,
                }) => {
                    const i = (0, a.useMemo)(() => {
                            const u = `${((a = t), a.replace(/-/g, '_'))}${e ? '_elite' : ''}`;
                            var a;
                            return { backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(u)})` };
                        }, [t, e]),
                        l = B()(uu.base, uu[`base__size${Ye(s)}`], uu[`base__type${Ye(o)}`]),
                        c = B()(uu.type, e && uu.type__elite);
                    return r().createElement(
                        'div',
                        { className: l },
                        r().createElement(
                            'div',
                            { className: uu.level },
                            ((_ = n),
                            qe
                                ? `${_}`
                                : (function (e) {
                                      let u = '';
                                      for (let t = ze.length - 1; t >= 0; t--)
                                          for (; e >= ze[t];) ((u += je[t]), (e -= ze[t]));
                                      return u;
                                  })(_)),
                        ),
                        r().createElement('div', { className: c, style: i }),
                        r().createElement('div', { className: uu.name }, u),
                    );
                    var _;
                };
                function nu() {
                    return (
                        (nu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        nu.apply(this, arguments)
                    );
                }
                const su = (0, a.memo)(({ reward: e, isFinalReward: u = !1 }) =>
                        r().createElement(
                            'div',
                            { className: 'FinalReward_base_a8' },
                            e.vehicleName &&
                                r().createElement(
                                    'div',
                                    { className: 'FinalReward_info_d0' },
                                    r().createElement(ru, nu({}, e, { labelType: au.colored })),
                                ),
                            r().createElement('div', {
                                className: B()('FinalReward_icon_b5', u && 'FinalReward_icon__main_42'),
                            }),
                        ),
                    ),
                    ou = [
                        'width',
                        'height',
                        'getImageSource',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'lastFrameIndex',
                        'loop',
                        'state',
                        'onAnimationDone',
                        'onAnimationComplete',
                        'poster',
                    ];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const lu = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            s = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? 0 : c,
                            E = e.lastFrameIndex,
                            m = void 0 === E ? s - 1 : E,
                            d = e.loop,
                            A = void 0 === d || d,
                            F = e.state,
                            D = void 0 === F ? 'play' : F,
                            g = e.onAnimationDone,
                            B = e.onAnimationComplete,
                            C = e.poster,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ou);
                        const b = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = Eu(_, m, n),
                                                u = cu(_, m),
                                                a = window.setInterval(() => {
                                                    const r = u(),
                                                        n = e.get(r);
                                                    n
                                                        ? (null == o || o(r, n),
                                                          t(n),
                                                          r === m &&
                                                              (null == B || B(),
                                                              A || (null == g || g(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && C ? { path: C, x: 0, y: 0 } : n(_),
                                                u = new Image();
                                            u.src = e.path;
                                            const a = () => t(_u(e, u));
                                            return (
                                                u.addEventListener('load', a),
                                                () => u.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, _, m, A, o, B, g, C, D]),
                            r().createElement('canvas', iu({}, p, { width: u, height: t, ref: b }))
                        );
                    }),
                    cu = (e, u) => {
                        let t = e;
                        return () => {
                            const a = t;
                            return ((t += 1), t > u && (t = e), a);
                        };
                    },
                    _u = (e, u) => Object.assign({}, e, { img: u }),
                    Eu = (e, u, t) => {
                        const a = new Map(),
                            r = {};
                        for (let n = e; n <= u; n++) {
                            const e = t(n),
                                u = r[e.path];
                            if (u) a.set(n, _u(e, u));
                            else {
                                const u = new Image();
                                ((r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${n})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(n, _u(e, u)));
                            }
                        }
                        return a;
                    };
                function mu(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (a) => {
                        const r = a % t,
                            n = (r % u.columns) * e.width,
                            s = Math.trunc(r / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / t)), x: n, y: s };
                    };
                }
                const du = { base: 'SequencedBg_base_a9', image: 'SequencedBg_image_09' },
                    Au = {
                        width: 280,
                        height: 280,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_',
                            (e) => `R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_${e}`),
                    };
                const Fu = r().memo(() =>
                        r().createElement(
                            'div',
                            { className: du.base },
                            s.O.client.graphicsQuality.isLow()
                                ? r().createElement('div', { className: du.image })
                                : r().createElement(lu, {
                                      frameTime: 50,
                                      state: 'play',
                                      width: Au.width,
                                      height: Au.height,
                                      frameCount: Au.frameCount,
                                      className: du.seq,
                                      getImageSource: mu(Au),
                                  }),
                        ),
                    ),
                    Du = R.strings.armory_yard.buyView.vehiclePreview,
                    gu = (e) => {
                        const u = Xe(),
                            t = e.isHighlighted,
                            a = e.onClick,
                            n = e.reward,
                            s = e.isPostProgressionState;
                        return r().createElement(
                            'div',
                            { className: 'FinalReward_base_25' },
                            t &&
                                r().createElement(
                                    'div',
                                    { className: 'FinalReward_sequence_02', style: { '--scale': `${u}` } },
                                    r().createElement(Fu, null),
                                ),
                            r().createElement(
                                We,
                                {
                                    tooltipArgs: Be(
                                        { tooltipId: n.tooltipId, tooltipType: 'finalReward' },
                                        Number.parseInt(n.tooltipContentId),
                                    ),
                                },
                                r().createElement(su, { reward: n, isFinalReward: s }),
                            ),
                            r().createElement(
                                Ge,
                                { body: Du.tooltip() },
                                r().createElement(
                                    'div',
                                    { className: 'FinalReward_preview_53' },
                                    r().createElement(Re, { label: Du.label(), onClick: a }),
                                ),
                            ),
                        );
                    },
                    Bu = {
                        base: 'CButton_base_40',
                        base__main: 'CButton_base__main_42',
                        base__primary: 'CButton_base__primary_7f',
                        base__primaryGreen: 'CButton_base__primaryGreen_6f',
                        base__primaryRed: 'CButton_base__primaryRed_ec',
                        base__secondary: 'CButton_base__secondary_50',
                        base__ghost: 'CButton_base__ghost_ed',
                        base__extraSmall: 'CButton_base__extraSmall_27',
                        base__small: 'CButton_base__small_df',
                        base__medium: 'CButton_base__medium_74',
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let Cu, pu;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(Cu || (Cu = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(pu || (pu = {})));
                const bu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: E,
                    onMouseUp: m,
                    onMouseLeave: d,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        g = D[0],
                        C = D[1],
                        p = (0, a.useState)(!1),
                        b = p[0],
                        h = p[1],
                        v = (0, a.useState)(!1),
                        f = v[0],
                        w = v[1],
                        S = (0, a.useCallback)(() => {
                            s || (F.current && (F.current.focus(), C(!0)));
                        }, [s]),
                        y = (0, a.useCallback)(
                            (e) => {
                                g && null !== F.current && !F.current.contains(e.target) && C(!1);
                            },
                            [g],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                s || (A && A(e));
                            },
                            [s, A],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                s || (null !== i && O(i), c && c(e), w(!0));
                            },
                            [s, i, c],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                s || (m && m(e), h(!1));
                            },
                            [s, m],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                s || (null !== l && O(l), E && E(e), t && S(), h(!0));
                            },
                            [s, l, E, S, t],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                s || (d && d(e), h(!1));
                            },
                            [s, d],
                        ),
                        N = B()(
                            Bu.base,
                            Bu[`base__${n}`],
                            {
                                [Bu.base__disabled]: s,
                                [Bu[`base__${u}`]]: u,
                                [Bu.base__focus]: g,
                                [Bu.base__highlightActive]: b,
                                [Bu.base__firstHover]: f,
                            },
                            o,
                        ),
                        I = B()(Bu.state, Bu.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: P,
                                onMouseMove: T,
                                onMouseUp: M,
                                onMouseDown: L,
                                onMouseLeave: k,
                                onClick: x,
                            },
                            n !== Cu.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: Bu.back }),
                                    r().createElement('span', { className: Bu.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: I },
                                r().createElement('span', { className: Bu.stateDisabled }),
                                r().createElement('span', { className: Bu.stateHighlightHover }),
                                r().createElement('span', { className: Bu.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: Bu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                bu.defaultProps = { type: Cu.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const hu = (0, a.memo)(bu);
                let vu, fu, wu;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(vu || (vu = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(fu || (fu = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(wu || (wu = {})));
                var Su = t(9887),
                    yu = t.n(Su);
                const xu = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ru = (e) => e.includes('_') && ((e) => xu.includes(e))(e.split('_').at(-1)),
                    Pu = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    Tu = (e, u) =>
                        Object.keys(e).reduce((t, a) => {
                            if (a in t) return t;
                            if (Ru(a)) {
                                const r = a.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const n = Pu.indexOf(u),
                                    s = (-1 !== n ? xu.slice(n) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    o = s ? e[s] : void 0;
                                return ((t[r] = void 0 !== o ? o : e[r]), t);
                            }
                            const r = e[a];
                            return (
                                void 0 === r ||
                                    ((e, u) => xu.some((t) => void 0 !== u[`${e}_${t}`]))(a, e) ||
                                    (t[a] = r),
                                t
                            );
                        }, {}),
                    Mu = (e, u = Tu) => {
                        const t = (
                            (e, u = Tu) =>
                            (t) => {
                                const n = f().mediaSize,
                                    s = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return r().createElement(e, s);
                            }
                        )(e, u);
                        return r().memo((u) =>
                            Object.keys(u).some((e) => Ru(e) && void 0 !== u[e])
                                ? r().createElement(t, u)
                                : r().createElement(e, u),
                        );
                    },
                    Lu = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    ku = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function Nu() {
                    return (
                        (Nu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Nu.apply(this, arguments)
                    );
                }
                Object.keys(yu());
                const Ou = {
                        XL: { mt: Lu.mt__XL, mr: Lu.mr__XL, mb: Lu.mb__XL, ml: Lu.ml__XL },
                        LG: { mt: Lu.mt__LG, mr: Lu.mr__LG, mb: Lu.mb__LG, ml: Lu.ml__LG },
                        MDp: { mt: Lu.mt__MDp, mr: Lu.mr__MDp, mb: Lu.mb__MDp, ml: Lu.ml__MDp },
                        MD: { mt: Lu.mt__MD, mr: Lu.mr__MD, mb: Lu.mb__MD, ml: Lu.ml__MD },
                        SMp: { mt: Lu.mt__SMp, mr: Lu.mr__SMp, mb: Lu.mb__SMp, ml: Lu.ml__SMp },
                        SM: { mt: Lu.mt__SM, mr: Lu.mr__SM, mb: Lu.mb__SM, ml: Lu.ml__SM },
                        XS: { mt: Lu.mt__XS, mr: Lu.mr__XS, mb: Lu.mb__XS, ml: Lu.ml__XS },
                    },
                    Iu = (Object.keys(Ou), ['mt', 'mr', 'mb', 'ml']),
                    Hu = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Uu = Mu((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            s = e.m,
                            o = e.mt,
                            i = void 0 === o ? s : o,
                            l = e.mr,
                            c = void 0 === l ? s : l,
                            _ = e.mb,
                            E = void 0 === _ ? s : _,
                            m = e.ml,
                            d = void 0 === m ? s : m,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            g = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            C = e.flexStart,
                            p = e.center,
                            b = e.flexEnd,
                            h = e.spaceBetween,
                            v = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (C ? 'flex-start' : p && 'center') ||
                                      (b && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            y = void 0 === S ? (C ? 'flex-start' : p && 'center') || (b && 'flex-end') || void 0 : S,
                            x = e.alignSelf,
                            R = e.wrap,
                            P = e.flexWrap,
                            T = void 0 === P ? (R ? 'wrap' : void 0) : P,
                            M = e.grow,
                            L = e.shrink,
                            k = e.flex,
                            N = void 0 === k ? (M || L ? `${M ? 1 : 0} ${L ? 1 : 0} auto` : void 0) : k,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ku);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: E, ml: d },
                                    u = ((e) =>
                                        Iu.reduce((u, t) => {
                                            const a = e[t];
                                            return a && 'number' != typeof a ? u.concat(Ou[!0 === a ? 'MD' : a][t]) : u;
                                        }, []))(e),
                                    a = ((e) =>
                                        Iu.reduce((u, t) => {
                                            const a = e[t];
                                            return ('number' == typeof a && (u[Hu[t]] = a + 'rem'), u);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, a, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: N,
                                        alignSelf: x,
                                        display: g || y ? 'flex' : void 0,
                                        flexDirection: g,
                                        flexWrap: T,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, i, c, E, d, O, N, x, g, T, w, y]),
                            G = U.computedStyle,
                            $ = U.computedClassNames;
                        return r().createElement('div', Nu({ className: B()(Lu.base, ...$, u), style: G }, H), I);
                    }),
                    Gu = ({ binding: e, text: u = '', classMix: t, alignment: n = Ve.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : r().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      r().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = Ve.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return eu.includes(t)
                                                                ? Je(e)
                                                                : ((e, u = Ve.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Ze(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Ze(e, a, Ve.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              r().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var $u = t(3532),
                    Wu = t.n($u);
                const Xu = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    ju = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                Object.keys(yu());
                const qu = Object.keys(Wu()),
                    Vu = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Yu = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ku = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Qu =
                        (Object.keys({
                            XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                            LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                            MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                            MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                            SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                            SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                            XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                        }),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': Vu,
                            'heading-H36': Vu,
                            'heading-H28': Yu,
                            'heading-H24': Yu,
                            'heading-H24R': Yu,
                            'heading-H22': Yu,
                            'heading-H20R': Yu,
                            'heading-H18': Yu,
                            'heading-H15': Ku,
                            'heading-H14': Ku,
                            'paragraph-P24': Yu,
                            'paragraph-P18': Yu,
                            'paragraph-P16': Yu,
                            'paragraph-P14': Ku,
                            'paragraph-P12': Ku,
                            'paragraph-P10': Ku,
                        }),
                    Zu =
                        (Object.keys(Qu),
                        (e) =>
                            e
                                ? ((e) => qu.includes(e))(e)
                                    ? { colorClassName: Xu[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Ju = Mu((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            s = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            _ = void 0 === c ? o : c,
                            E = e.mb,
                            m = void 0 === E ? o : E,
                            d = e.ml,
                            A = void 0 === d ? o : d,
                            F = e.style,
                            D = e.format,
                            g = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, ju);
                        const C = (0, a.useMemo)(() => {
                                const e = Zu(s),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    a = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, a), colorClassName: u };
                            }, [F, s]),
                            p = C.computedStyle,
                            b = C.colorClassName;
                        return r().createElement(
                            Uu,
                            zu(
                                {
                                    className: B()(Xu.base, t && Xu[t], b, n),
                                    style: p,
                                    mt: !0 === l ? Qu[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? Qu[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === m ? Qu[t || 'paragraph-P16'].mb : m,
                                    ml: !0 === A ? Qu[t || 'paragraph-P16'].ml : A,
                                },
                                g,
                            ),
                            void 0 !== D ? r().createElement(Gu, zu({}, D, { text: u })) : u,
                        );
                    });
                let et, ut;
                (!(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(et || (et = {})),
                    (function (e) {
                        ((e.Small = 'small'), (e.Medium = 'medium'));
                    })(ut || (ut = {})));
                const tt = {
                        base: 'RadioButton_base_d9',
                        base__disabled: 'RadioButton_base__disabled_84',
                        input: 'RadioButton_input_24',
                        base__small: 'RadioButton_base__small_71',
                        base__medium: 'RadioButton_base__medium_d8',
                        blank: 'RadioButton_blank_b5',
                        blankHover: 'RadioButton_blankHover_5e',
                        blankMousedown: 'RadioButton_blankMousedown_0e',
                        check: 'RadioButton_check_f2',
                        checkHover: 'RadioButton_checkHover_c6',
                        checkMousedown: 'RadioButton_checkMousedown_a7',
                        transition: 'RadioButton_transition_b3',
                        base__blank: 'RadioButton_base__blank_46',
                        base__blankHover: 'RadioButton_base__blankHover_9a',
                        base__blankMousedown: 'RadioButton_base__blankMousedown_cd',
                        base__check: 'RadioButton_base__check_fe',
                        base__checkHover: 'RadioButton_base__checkHover_2f',
                        base__checkMousedown: 'RadioButton_base__checkMousedown_83',
                        label: 'RadioButton_label_7f',
                    },
                    at = [
                        'children',
                        'labelRenderer',
                        'value',
                        'currentValue',
                        'autofocus',
                        'disabled',
                        'size',
                        'label',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                    ];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const nt = (0, a.memo)((e) => {
                        let u = e.children,
                            t = e.labelRenderer,
                            n = e.value,
                            s = e.currentValue,
                            o = e.autofocus,
                            i = void 0 !== o && o,
                            l = e.disabled,
                            c = void 0 !== l && l,
                            _ = e.size,
                            E = void 0 === _ ? ut.Medium : _,
                            m = e.label,
                            d = e.soundHover,
                            A = void 0 === d ? 'highlight' : d,
                            F = e.soundClick,
                            D = void 0 === F ? 'play' : F,
                            g = e.onMouseEnter,
                            C = e.onMouseLeave,
                            p = e.onMouseUp,
                            b = e.onMouseDown,
                            h = e.onClick,
                            v = e.onChange,
                            f = e.onFocus,
                            w = e.onBlur,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, at);
                        const y = n === s,
                            x = (0, a.useState)(!1),
                            R = x[0],
                            P = x[1],
                            T = (0, a.useState)(!1),
                            M = T[0],
                            L = T[1],
                            k = (0, a.useState)(i),
                            N = k[0],
                            I = k[1],
                            H = (0, a.useRef)(null),
                            U = (0, a.useCallback)(() => {
                                !c && H.current && (H.current.focus(), I(!0));
                            }, [c]),
                            G = (0, a.useCallback)(
                                (e) => {
                                    N && null !== H.current && !H.current.contains(e.target) && I(!1);
                                },
                                [N],
                            );
                        ((0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', G),
                                () => {
                                    document.removeEventListener('mousedown', G);
                                }
                            ),
                            [G],
                        ),
                            (0, a.useEffect)(() => {
                                I(i);
                            }, [i]));
                        const $ = (0, a.useCallback)(
                                (e) => {
                                    c || (v && v(n), h && h(n, e));
                                },
                                [c, v, h, n],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    if (!c) {
                                        const u = e.button === et.LEFT;
                                        (u && P(!0), u && b && b(n, e), D && O(D), i && U());
                                    }
                                },
                                [i, c, b, U, D, n],
                            ),
                            X = (0, a.useCallback)(
                                (e) => {
                                    c || (P(!1), p && p(n, e));
                                },
                                [c, p, n],
                            ),
                            j = (0, a.useCallback)(
                                (e) => {
                                    c || (g && g(n, e), A && O(A), L(!0));
                                },
                                [c, g, A, n],
                            ),
                            z = (0, a.useCallback)(
                                (e) => {
                                    c || (P(!1), L(!1), C && C(n, e));
                                },
                                [c, C, n],
                            ),
                            q = (0, a.useCallback)(
                                (e) => {
                                    c || (I(!0), f && f(n, e));
                                },
                                [c, f, n],
                            ),
                            V = (0, a.useCallback)(
                                (e) => {
                                    c || (I(!1), w && w(n, e));
                                },
                                [c, w, n],
                            ),
                            Y = B()(tt.base, tt[`base__${E}`], {
                                [tt.base__blank]: !y && !M,
                                [tt.base__blankHover]: !y && M && !R,
                                [tt.base__blankMousedown]: !y && M && R,
                                [tt.base__check]: y && !M,
                                [tt.base__checkHover]: y && M && !R,
                                [tt.base__checkMousedown]: y && M && R,
                                [tt.base__focused]: N,
                                [tt.base__disabled]: c,
                            }),
                            K = (0, a.useMemo)(
                                () => ({ isHovered: M, isMouseDown: R, isFocused: N, isChecked: y }),
                                [M, R, N, y],
                            ),
                            Q = (0, a.useRef)(tt.blank),
                            Z = (0, a.useRef)(tt.blankHover),
                            J = (0, a.useRef)(tt.blankMousedown),
                            ee = (0, a.useRef)(tt.check),
                            ue = (0, a.useRef)(tt.checkHover),
                            te = (0, a.useRef)(tt.checkMousedown);
                        return (
                            (0, a.useEffect)(
                                ((e) => {
                                    let u,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                ((t = null),
                                                    (Q.current = B()(tt.blank, tt.transition)),
                                                    (Z.current = B()(tt.blankHover, tt.transition)),
                                                    (J.current = B()(tt.blankMousedown, tt.transition)),
                                                    (ee.current = B()(tt.check, tt.transition)),
                                                    (ue.current = B()(tt.checkHover, tt.transition)),
                                                    (u = void (te.current = B()(tt.checkMousedown, tt.transition))));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                                        }
                                    );
                                })(),
                                [],
                            ),
                            r().createElement(
                                'div',
                                rt(
                                    {
                                        ref: H,
                                        className: Y,
                                        onClick: $,
                                        onMouseEnter: j,
                                        onMouseLeave: z,
                                        onMouseDown: W,
                                        onMouseUp: X,
                                        onFocus: q,
                                        onBlur: V,
                                    },
                                    S,
                                ),
                                r().createElement(
                                    'div',
                                    { className: tt.input },
                                    r().createElement('div', { className: Q.current }),
                                    r().createElement('div', { className: Z.current }),
                                    r().createElement('div', { className: J.current }),
                                    r().createElement('div', { className: ee.current }),
                                    r().createElement('div', { className: ue.current }),
                                    r().createElement('div', { className: te.current }),
                                ),
                                r().createElement('div', { className: tt.label }, m || u || (t && t(K))),
                            )
                        );
                    }),
                    st = {
                        base: 'ChangeCurrency_base_73',
                        checkbox: 'ChangeCurrency_checkbox_7f',
                        icon: 'ChangeCurrency_icon_ab',
                        icon__gold: 'ChangeCurrency_icon__gold_b5',
                        icon__crystal: 'ChangeCurrency_icon__crystal_11',
                        icon__scaled__crystal: 'ChangeCurrency_icon__scaled__crystal_ff',
                        orWrapper: 'ChangeCurrency_orWrapper_bf',
                        or: 'ChangeCurrency_or_5b',
                        substract: 'ChangeCurrency_substract_16',
                    },
                    ot = R.strings.armory_yard.buyView,
                    it = r().memo(({ prices: e, priceName: u, onSetPriceName: t }) => {
                        const n = 2 === Xe(),
                            s = (0, a.useCallback)(
                                (e) => {
                                    t(e);
                                },
                                [t],
                            );
                        return r().createElement(
                            'div',
                            { className: st.base },
                            e.map((t, a) => {
                                const o = t.price[0].name;
                                return r().createElement(
                                    r().Fragment,
                                    { key: o },
                                    r().createElement(
                                        'div',
                                        { className: st.checkbox },
                                        r().createElement(
                                            nt,
                                            { value: u, currentValue: o, onChange: () => s(o) },
                                            r().createElement(Ju, { text: ot.$dyn(o) }),
                                        ),
                                    ),
                                    r().createElement('div', {
                                        className: B()(st.icon, st[`icon__${o}`], n && st[`icon__scaled__${o}`]),
                                    }),
                                    a !== e.length - 1 &&
                                        r().createElement(
                                            'div',
                                            { className: st.orWrapper },
                                            r().createElement(Ju, { className: st.or, text: ot.separatorOr() }),
                                            r().createElement('div', { className: st.substract }),
                                        ),
                                );
                            }),
                        );
                    }),
                    lt = {
                        base: 'Currency_base_57',
                        icon: 'Currency_icon_c5',
                        base__small: 'Currency_base__small_af',
                        base__big: 'Currency_base__big_bc',
                        base__large: 'Currency_base__large_65',
                        base__extraLarge: 'Currency_base__extraLarge_4d',
                        'icon__credits-small': 'Currency_icon__credits-small_9b',
                        'icon__credits-big': 'Currency_icon__credits-big_96',
                        'icon__credits-large': 'Currency_icon__credits-large_ac',
                        'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                        'icon__gold-small': 'Currency_icon__gold-small_86',
                        'icon__gold-big': 'Currency_icon__gold-big_15',
                        'icon__gold-large': 'Currency_icon__gold-large_36',
                        'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                        'icon__crystal-small': 'Currency_icon__crystal-small_27',
                        'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                        'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                        'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                        'icon__xp-small': 'Currency_icon__xp-small_a7',
                        'icon__xp-big': 'Currency_icon__xp-big_97',
                        'icon__xp-large': 'Currency_icon__xp-large_6b',
                        'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                        'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                        'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                        'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                        'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                        'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                        'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                        'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                        'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                        value: 'Currency_value_e1',
                        value__freeXP: 'Currency_value__freeXP_cb',
                        value__credits: 'Currency_value__credits_76',
                        value__gold: 'Currency_value__gold_dd',
                        value__xp: 'Currency_value__xp_b0',
                        value__crystal: 'Currency_value__crystal_19',
                        value__equipCoin: 'Currency_value__equipCoin_d0',
                        value__notEnough: 'Currency_value__notEnough_56',
                        stock: 'Currency_stock_87',
                        stock__indent: 'Currency_stock__indent_a1',
                        stock__interactive: 'Currency_stock__interactive_93',
                        stockBackground: 'Currency_stockBackground_82',
                    },
                    ct = ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: a,
                        isEnough: n,
                        value: s,
                        discountValue: o,
                        showPlus: i,
                        stockBackgroundName: l = wu.Red,
                    }) => {
                        const c = B()(lt.value, lt[`value__${a}`], !n && lt.value__notEnough),
                            _ = B()(lt.icon, lt[`icon__${a}-${t}`]),
                            E = B()(lt.stock, o && lt.stock__indent, u && lt.stock__interactive),
                            m = i && s > 0 && '+',
                            d = B()(lt.base, lt[`base__${t}`]);
                        return r().createElement(
                            'span',
                            { className: d },
                            r().createElement(
                                'span',
                                { className: c },
                                m,
                                r().createElement(ce, { value: s, format: a === fu.gold ? 'gold' : 'integral' }),
                            ),
                            r().createElement('span', { className: _ }),
                            e &&
                                r().createElement(
                                    'span',
                                    { className: E },
                                    r().createElement('span', {
                                        className: lt.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(o) && o,
                                ),
                        );
                    };
                ct.defaultProps = { isEnough: !0 };
                const _t = r().memo(ct),
                    Et = r().memo(
                        ({
                            price: e,
                            defPrice: u,
                            priceSeparator: t = null,
                            showZero: n = !1,
                            bigSize: s = !1,
                            ignoreDiscount: o = !1,
                        }) => {
                            const i = !o && Boolean(u.length),
                                l = B()('Price_price_0b', i && 'Price_price__discount_54');
                            return r().createElement(
                                'div',
                                { className: 'Price_base_c6' },
                                e.map(
                                    (e, u) =>
                                        (n || Boolean(e.value)) &&
                                        r().createElement(
                                            a.Fragment,
                                            { key: `${e.name}${u}` },
                                            u > 0 && t,
                                            r().createElement(
                                                'div',
                                                { className: l },
                                                r().createElement(_t, {
                                                    isDiscount: i,
                                                    size: s ? vu.big : vu.small,
                                                    type: e.name,
                                                    value: e.value,
                                                    isEnough: e.name === fu.gold || e.isEnough,
                                                }),
                                            ),
                                        ),
                                ),
                            );
                        },
                    ),
                    mt = 'Footer_text_df',
                    dt = 'Footer_text__emphasized_1e',
                    At = 'Footer_button_ff';
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const Dt = R.strings.armory_yard.buyView,
                    gt = r().memo(
                        ({
                            stepsToBuy: e,
                            prices: u,
                            priceName: t,
                            isBuyBtnDisabled: a,
                            onApply: n,
                            onCancel: s,
                            onSetPriceName: o,
                            onGetCurrentPrice: i,
                        }) => {
                            const l = i(t),
                                c = null == l ? void 0 : l.price[0],
                                _ = l && {
                                    price: r().createElement(
                                        'div',
                                        { className: B()(mt, dt) },
                                        r().createElement(
                                            Et,
                                            Ft(
                                                {
                                                    ignoreDiscount: !0,
                                                    priceSeparator: r().createElement('div', {
                                                        className: 'Footer_plus_17',
                                                    }),
                                                },
                                                l,
                                            ),
                                        ),
                                    ),
                                    amount: r().createElement(Ju, { className: B()(mt, dt), text: String(e) }),
                                },
                                E = (!(null != c && c.isEnough) && (null == c ? void 0 : c.name) !== fu.gold) || a;
                            return r().createElement(
                                'div',
                                { className: 'Footer_base_83' },
                                u.length > 1 &&
                                    r().createElement(
                                        'div',
                                        { className: 'Footer_changeCurrencyWrapper_4e' },
                                        r().createElement(it, { priceName: t, onSetPriceName: o, prices: u }),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: 'Footer_texts_24' },
                                    r().createElement(Ju, {
                                        className: mt,
                                        text: Dt.selected(),
                                        format: { binding: _ },
                                    }),
                                    r().createElement(Ju, { className: mt, text: Dt.price(), format: { binding: _ } }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'Footer_buttons_7a' },
                                    r().createElement(
                                        'div',
                                        { className: At },
                                        r().createElement(
                                            hu,
                                            { size: pu.medium, type: Cu.main, onClick: n, disabled: E },
                                            r().createElement(Ju, { text: Dt.buyButton() }),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: At },
                                        r().createElement(
                                            hu,
                                            { size: pu.medium, type: Cu.primary, onClick: s },
                                            r().createElement(Ju, { text: Dt.cancelButton() }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Bt = R.strings.armory_yard.buyView,
                    Ct = r().memo(({ isPostProgression: e }) => {
                        const u = e ? Bt.title.postProgression.pageTtile() : Bt.title.pageTtile(),
                            t = e ? Bt.title.postProgression.subTtile() : Bt.title.subTtile();
                        return r().createElement(
                            'div',
                            { className: 'Header_base_aa' },
                            r().createElement(Ju, { className: 'Header_mainTitle_a0', text: Bt.title.mainTitle() }),
                            r().createElement(Ju, { className: 'Header_pageTtile_9f', text: u }),
                            r().createElement(Ju, { className: 'Header_subTtile_e2', text: t }),
                        );
                    }),
                    pt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    bt = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let ht, vt;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(ht || (ht = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(vt || (vt = {})));
                const ft = ({ size: e = ht.Default, classMix: u }) =>
                        r().createElement('div', { className: B()(bt.background, bt[`background__${e}`], u) }),
                    wt = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    St = ({ size: e }) => {
                        const u = B()(wt.base, wt[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    yt = {
                        base: 'ProgressLineImpose_base_80',
                        base__disabled: 'ProgressLineImpose_base__disabled_cc',
                        base__finished: 'ProgressLineImpose_base__finished_d4',
                        base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                        pattern: 'ProgressLineImpose_pattern_1c',
                        base__small: 'ProgressLineImpose_base__small_55',
                        gradient: 'ProgressLineImpose_gradient_35',
                        glow: 'ProgressLineImpose_glow_a5',
                        glow__left: 'ProgressLineImpose_glow__left_d8',
                    },
                    xt = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: a, isComplete: n, withoutBounce: s }) => {
                            const o = B()(
                                    yt.base,
                                    yt[`base__${e}`],
                                    t && yt.base__disabled,
                                    n && yt.base__finished,
                                    s && yt.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return r().createElement(
                                'div',
                                { className: o, style: a, ref: u },
                                r().createElement('div', { className: yt.pattern }),
                                r().createElement('div', { className: yt.gradient }),
                                i && r().createElement(St, { size: e }),
                            );
                        },
                    ),
                    Rt = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: s }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(xt, { size: e, disabled: n, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    Pt = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            ('function' == typeof t && t(), clearTimeout(a));
                        };
                    };
                let Tt, Mt;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Tt || (Tt = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(Mt || (Mt = {})));
                const Lt = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                _ = (0, a.useState)(Mt.Idle),
                                E = _[0],
                                m = _[1],
                                d = E === Mt.In,
                                A = E === Mt.End,
                                F = E === Mt.Idle,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (m(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (F && !t)
                                    return Pt(() => {
                                        D(Mt.In);
                                    }, u);
                            }, [D, t, F, u]),
                                (0, a.useEffect)(() => {
                                    if (d)
                                        return Pt(() => {
                                            (i && i(), D(Mt.End));
                                        }, e + u);
                                }, [D, d, i, u, e]));
                            const g = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return A
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: C },
                                      r().createElement(
                                          'div',
                                          { style: F ? g : B, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(St, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    kt = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const _ = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(xt, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                t >= 0 &&
                                    r().createElement(Lt, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Nt = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ot = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    It = (e) => ({ transitionDuration: `${e}ms` }),
                    Ht = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = o < n,
                                E = (0, a.useState)(Tt.Idle),
                                m = E[0],
                                d = E[1],
                                A = m === Tt.End,
                                F = m === Tt.Idle,
                                D = m === Tt.Grow,
                                g = m === Tt.Shrink,
                                C = (0, a.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                ),
                                p = (0, a.useCallback)(
                                    (e, u) =>
                                        Pt(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(Tt.Grow, u)
                                        : D
                                          ? p(Tt.Shrink, e)
                                          : g
                                            ? p(Tt.End, e)
                                            : void (A && i && i());
                            }, [p, t, A, D, F, g, i, u, e]);
                            const b = (0, a.useMemo)(() => Object.assign({ width: '100%' }, It(e), Nt(_)), [_, e]),
                                h = (0, a.useMemo)(() => Object.assign({ width: '0%' }, It(e), Nt(_)), [_, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Ot(_, n), It(e)), [n, _, e]),
                                f = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, Ot(_, n), It(e)),
                                    [n, _, o, e],
                                );
                            if (A) return null;
                            const w = B()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                _ && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: F ? v : f, className: w },
                                r().createElement(
                                    'div',
                                    { style: g ? h : b, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(St, { size: s }),
                                ),
                            );
                        },
                    ),
                    Ut = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < t,
                                E = (0, a.useState)(!1),
                                m = E[0],
                                d = E[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (e === Tt.Shrink && d(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                F = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(xt, {
                                    size: u,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: m ? D : F,
                                }),
                                t >= 0 &&
                                    r().createElement(Ht, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Gt = ['onComplete', 'onEndAnimation'];
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Wt = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                                return r;
                            })(e, Gt);
                        const s = (0, a.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                (e !== o && i(e), e && u && u(), t && t());
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case vt.Simple:
                                return r().createElement(kt, $t({}, n, { onEndAnimation: l, isComplete: o }));
                            case vt.Growing:
                                return r().createElement(Ut, $t({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Xt = ['onEndAnimation'];
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const zt = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                r = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) ((t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]));
                            return r;
                        })(e, Xt);
                    const n = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            ((n.current.from = void 0), u && u());
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        r().createElement(Wt, jt({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Vt = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: a,
                            deltaFrom: n,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return r().createElement(Rt, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: a,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? r().createElement(zt, c)
                                : r().createElement(Wt, qt({ key: `${n}-${u}` }, c));
                        },
                    ),
                    Yt = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    Kt = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    Qt = (e, u, t) => ('number' == typeof t ? (pt(0, u, t) / u) * 100 : e),
                    Zt = Kt,
                    Jt = {
                        freezed: !1,
                        withStack: !1,
                        type: vt.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ea =
                        ((0, a.memo)(
                            ({
                                maxValue: e = 100,
                                theme: u = Zt,
                                size: t = ht.Default,
                                animationSettings: n = Jt,
                                disabled: s = !1,
                                withoutBackground: o = !1,
                                progressBarBackgroundClassMix: i,
                                value: l,
                                deltaFrom: c,
                                lineRef: _,
                                onChangeAnimationState: E,
                                onEndAnimation: m,
                                onComplete: d,
                            }) => {
                                const A = ((e, u, t) =>
                                    (0, a.useMemo)(() => {
                                        const a = (pt(0, u, e) / u) * 100;
                                        return { value: a, deltaFrom: Qt(a, u, t) };
                                    }, [t, u, e]))(l, e, c);
                                return r().createElement(
                                    'div',
                                    { className: B()(bt.base, bt[`base__${t}`]), style: Yt(u) },
                                    !o && r().createElement(ft, { size: t, classMix: i }),
                                    r().createElement(Vt, {
                                        size: t,
                                        lineRef: _,
                                        disabled: s,
                                        value: A.value,
                                        deltaFrom: A.deltaFrom,
                                        animationSettings: n,
                                        onEndAnimation: m,
                                        onChangeAnimationState: E,
                                        onComplete: d,
                                    }),
                                );
                            },
                        ),
                        {
                            base: 'LevelProgressBar_base_75',
                            base__small: 'LevelProgressBar_base__small_68',
                            glowMask: 'LevelProgressBar_glowMask_e5',
                            glowMask__enabled: 'LevelProgressBar_glowMask__enabled_ef',
                            glow: 'LevelProgressBar_glow_75',
                            glow__left: 'LevelProgressBar_glow__left_21',
                            glow__right: 'LevelProgressBar_glow__right_80',
                            base__disabled: 'LevelProgressBar_base__disabled_d4',
                            base__finished: 'LevelProgressBar_base__finished_a5',
                            progressBar: 'LevelProgressBar_progressBar_0c',
                            delta: 'LevelProgressBar_delta_ac',
                            line: 'LevelProgressBar_line_1c',
                            pattern: 'LevelProgressBar_pattern_cc',
                            gradient: 'LevelProgressBar_gradient_d4',
                        }),
                    ua = (0, a.memo)(
                        ({
                            size: e = ht.Default,
                            value: u,
                            slideValue: t,
                            maximum: a,
                            allowSlide: n,
                            hasRightGlow: s,
                            theme: o = Kt,
                        }) => {
                            const i = u >= a ? a : u,
                                l = t - i,
                                c = B()(ea.base, ea[`base__${e}`], ea.progressBar),
                                _ = { width: (u / a) * 100 + '%' },
                                E = { left: (i / a) * 100 + '%', width: (l / a) * 100 + '%' },
                                m = ((e) => ({
                                    '--progress-base': `url('${e.bgImageBase}')`,
                                    '--progress-line-base': e.line.bgColorBase,
                                    '--progress-line-disabled': e.line.bgColorDisabled,
                                    '--progress-line-finished': e.line.bgColorFinished,
                                    '--progress-pattern-base': `url('${e.pattern.bgImageBase}')`,
                                    '--progress-pattern-disabled': `url('${e.pattern.bgImageDisabled}')`,
                                    '--progress-pattern-finished': `url('${e.pattern.bgImageFinished}')`,
                                    '--progress-glow': `url('${e.glow}')`,
                                    '--progress-glow-small': `url('${e.glowSmall}')`,
                                    '--progress-delta-color': e.delta.color,
                                    '--progress-delta-shadow': e.delta.shadow,
                                }))(o);
                            return r().createElement(
                                'div',
                                { className: c, style: m },
                                r().createElement(
                                    'div',
                                    { className: ea.line, style: _ },
                                    r().createElement('div', { className: ea.pattern }),
                                    r().createElement('div', { className: ea.gradient }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: B()(ea.delta, l > 0 && ea.delta__enter), style: E },
                                    r().createElement(
                                        'div',
                                        { className: B()(ea.glowMask, i < 1 && ea.glowMask__enabled) },
                                        r().createElement('div', { className: B()(ea.glow, ea.glow__left) }),
                                        !n &&
                                            s &&
                                            r().createElement('div', { className: B()(ea.glow, ea.glow__right) }),
                                    ),
                                ),
                            );
                        },
                    ),
                    ta = r().memo(
                        ({
                            levelsStart: e,
                            levelsTotal: u,
                            levelsPassed: t,
                            levelsSelected: a,
                            levelsPossiblySelected: n,
                            levelWidth: s,
                            levelLabelStep: o = 5,
                        }) => {
                            const i = Array.from(Array(u - e)).map((i, l) => {
                                const c = e + l,
                                    _ = c >= t && c >= a && c < n,
                                    E = !_,
                                    m = c === e || c === u - 1 || ((c + 1) % o == 0 && c + 1 !== u - 1) || c === a - 1,
                                    d = B()('Points_label_bf', {
                                        Points_label__passed_1e: E && c < t,
                                        Points_label__selected_8d: E && c >= t && c < a,
                                        Points_label__available_48: E && c >= t && c >= a,
                                        Points_label__possiblySelected_fa: _,
                                    }),
                                    A = m ? String(c + 1) : '',
                                    F = ((e, u) => ({ left: u * e + 'rem' }))(l, s);
                                return r().createElement(
                                    'div',
                                    { className: 'Points_labels_e9', style: { left: `${s}rem` }, key: `step-${l}` },
                                    r().createElement('div', { className: 'Points_labelSplitter_98', style: F }),
                                    r().createElement(
                                        'div',
                                        { className: d, style: F },
                                        r().createElement(Ju, { text: A }),
                                    ),
                                );
                            });
                            return r().createElement('div', { className: 'Points_base_e2' }, i);
                        },
                    ),
                    aa = r().memo(
                        ({
                            levelsStart: e = 0,
                            levelsTotal: u,
                            levelsPassed: t,
                            levelsSelected: n,
                            levelWidth: s,
                            levelLabelStep: o = 5,
                            allowSlide: i = !0,
                            isPostProgressionState: l,
                            onChangeSelectedLevels: c,
                        }) => {
                            const _ = (0, a.useState)(!1),
                                E = _[0],
                                m = _[1],
                                d = (0, a.useState)(n),
                                A = d[0],
                                F = d[1],
                                D = (0, a.useState)(t),
                                g = D[0],
                                C = D[1],
                                p = (0, a.useRef)(null),
                                b = { width: s * (u - e) + 'rem' },
                                h = { left: s * (A - e) + 'rem' },
                                v = (0, a.useCallback)(
                                    (a) => {
                                        if (!p.current) return A;
                                        const r = p.current.getBoundingClientRect(),
                                            n = r.width / (u - e),
                                            s = (a - r.left) / (n || 1),
                                            o = e + Math.round(s);
                                        return pt(t + 1, u, o);
                                    },
                                    [A, u, e, t],
                                ),
                                f = u - e,
                                w = 0 === t ? t : t - e,
                                S = A - e,
                                y = B()('LevelSlider_slider_35', E && 'LevelSlider_slider__down_68'),
                                x = B()('LevelSlider_base_3b', !i && 'LevelSlider_base__locked_37');
                            ((0, a.useEffect)(() => {
                                F(n);
                            }, [n]),
                                (0, a.useEffect)(() => {
                                    const e = (e) => {
                                            if (i && E) {
                                                const u = v(e.clientX);
                                                (F(u), m(!1), c(u - t));
                                            }
                                        },
                                        u = (e) => {
                                            if (i)
                                                if (E) {
                                                    const u = v(e.clientX);
                                                    A !== u && (O('bp_progress_bar_drag'), F(u), C(u));
                                                } else if (e.target === p.current) {
                                                    const u = v(e.clientX);
                                                    g !== u && C(u);
                                                }
                                        };
                                    return (
                                        document.addEventListener('mouseup', e),
                                        document.addEventListener('mousemove', u),
                                        () => {
                                            (document.removeEventListener('mouseup', e),
                                                document.removeEventListener('mousemove', u));
                                        }
                                    );
                                }, [i, E, A, g, t, c, v]));
                            const R = (0, a.useCallback)(
                                    (e) => {
                                        if (!i) return;
                                        const u = 0 === e.button;
                                        if (u) {
                                            O('bp_progress_bar_take');
                                            const t = v(e.clientX);
                                            (F(t), C(t), m(u));
                                        }
                                    },
                                    [i, v],
                                ),
                                P = (0, a.useCallback)(() => {
                                    i && C(A);
                                }, [i, A]);
                            return r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    'div',
                                    { className: x, style: b, ref: p, onMouseOut: P, onMouseDown: R },
                                    r().createElement(
                                        'div',
                                        { className: 'LevelSlider_points_e9' },
                                        r().createElement(ta, {
                                            levelsStart: e,
                                            levelsTotal: u,
                                            levelsPassed: t,
                                            levelsSelected: A,
                                            levelsPossiblySelected: g,
                                            levelWidth: s,
                                            levelLabelStep: o,
                                        }),
                                    ),
                                    r().createElement(ua, {
                                        value: w,
                                        maximum: f,
                                        allowSlide: i,
                                        slideValue: S,
                                        hasRightGlow: !l,
                                    }),
                                ),
                                i && r().createElement('div', { className: y, style: h, onMouseDown: R }),
                            );
                        },
                    ),
                    ra = (0, a.memo)(({ steps: e, stepWidth: u }) => {
                        const t = e.length,
                            n = (0, a.useCallback)((e) => ({ width: u - (e === t - 1 ? 1 : 0) + 'rem' }), [u, t]);
                        return r().createElement(
                            'div',
                            { className: 'RewardPoints_base_eb' },
                            e.map((e, u) =>
                                r().createElement(
                                    'div',
                                    { style: n(u), key: u },
                                    e.hasVehicleInReward &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(
                                                We,
                                                {
                                                    tooltipArgs: Be(
                                                        {
                                                            tooltipId: e.vehicleRewardTooltipId,
                                                            tooltipType: 'stepVehicle',
                                                        },
                                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                            'resId',
                                                        ),
                                                    ),
                                                },
                                                r().createElement('div', { className: 'RewardPoints_reward_ab' }),
                                            ),
                                            r().createElement('div', { className: 'RewardPoints_splitter_14' }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    na = {
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
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        timer: 'Reward_timer_d3',
                    },
                    sa = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: a = ae.Big,
                        special: n,
                        value: s,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: E,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ne.BATTLE_BOOSTER:
                                    case ne.BATTLE_BOOSTER_REPLACE:
                                        return se.BATTLE_BOOSTER;
                                }
                            })(n),
                            d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ne.BATTLE_BOOSTER:
                                        return oe.BATTLE_BOOSTER;
                                    case ne.BATTLE_BOOSTER_REPLACE:
                                        return oe.BATTLE_BOOSTER_REPLACE;
                                    case ne.BUILT_IN_EQUIPMENT:
                                        return oe.BUILT_IN_EQUIPMENT;
                                    case ne.EQUIPMENT_PLUS:
                                        return oe.EQUIPMENT_PLUS;
                                    case ne.EQUIPMENT_TROPHY_BASIC:
                                        return oe.EQUIPMENT_TROPHY_BASIC;
                                    case ne.EQUIPMENT_TROPHY_UPGRADED:
                                        return oe.EQUIPMENT_TROPHY_UPGRADED;
                                    case ne.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ne.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ne.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ne.PROGRESSION_STYLE_UPGRADED_1:
                                        return oe.PROGRESSION_STYLE_UPGRADED_1;
                                    case ne.PROGRESSION_STYLE_UPGRADED_2:
                                        return oe.PROGRESSION_STYLE_UPGRADED_2;
                                    case ne.PROGRESSION_STYLE_UPGRADED_3:
                                        return oe.PROGRESSION_STYLE_UPGRADED_3;
                                    case ne.PROGRESSION_STYLE_UPGRADED_4:
                                        return oe.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case re.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case re.CURRENCY:
                                    case re.NUMBER:
                                        return r().createElement(ce, { format: 'integral', value: Number(e) });
                                    case re.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            { className: B()(na.base, na[`base__${a}`], l), style: i },
                            r().createElement(
                                We,
                                { tooltipArgs: _, className: na.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: B()(na.image, null == c ? void 0 : c.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: B()(na.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: B()(na.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        d &&
                                            r().createElement('div', {
                                                className: B()(na.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    na.info,
                                                    na[`info__${e}`],
                                                    o === re.MULTI && na.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    We,
                                    { tooltipArgs: E },
                                    r().createElement('div', {
                                        className: B()(na.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    oa = 'GroupTitle_divider_d0',
                    ia = R.strings.armory_yard.buyView.rewards,
                    la = r().memo(({ steps: e, isPostProgressionState: u }) => {
                        const t = ((e, u, t) => {
                                const a = t ? ia.postProgress() : ia.mainProgress();
                                return e < u
                                    ? {
                                          title: a,
                                          completedSteps: ia
                                              .fromToFormat()
                                              .replace('{from}', e.toString())
                                              .replace('{to}', u.toString()),
                                      }
                                    : { title: a, completedSteps: `${u}` };
                            })(e.from, e.to, u),
                            a = t.title,
                            n = t.completedSteps;
                        return r().createElement(
                            'div',
                            { className: 'GroupTitle_base_6b' },
                            r().createElement('div', { className: B()(oa, 'GroupTitle_divider__left_77') }),
                            r().createElement(
                                'div',
                                { className: 'GroupTitle_inner_01' },
                                r().createElement('div', { className: 'GroupTitle_icon_eb' }),
                                r().createElement(Ju, {
                                    text: a,
                                    className: 'GroupTitle_text_d2',
                                    format: {
                                        binding: {
                                            completedSteps: r().createElement(Ju, {
                                                className: 'GroupTitle_completedSteps_29',
                                                text: n,
                                            }),
                                        },
                                    },
                                }),
                            ),
                            r().createElement('div', { className: B()(oa, 'GroupTitle_divider__right_aa') }),
                        );
                    }),
                    ca = r().memo(({ rewards: e, steps: u, isPostProgressionState: t }) =>
                        r().createElement(
                            'div',
                            { className: 'RewardsList_base_0b' },
                            r().createElement(la, { steps: u, isPostProgressionState: t }),
                            r().createElement(
                                'div',
                                { className: 'RewardsList_rewards_68' },
                                e.map((e, u) =>
                                    r().createElement(
                                        'div',
                                        { key: u, className: 'RewardsList_reward_6a' },
                                        r().createElement(sa, e),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    _a = (0, z.observer)(() => {
                        var e;
                        const u = fe(),
                            t = u.model,
                            n = u.controls,
                            s = t.root.get(),
                            o = s.stepSelected,
                            i = s.stepsPassed,
                            l = s.startStep,
                            c = s.finishStep,
                            _ = s.isPostProgressionState,
                            E = t.computes,
                            m = E.getRewards,
                            d = E.getStepsRewards,
                            A = E.getCurrentPrice,
                            F = E.getPrices,
                            D = t.finalReward.get(),
                            g = _ ? n.onShowStylePreview : n.onShowVehiclePreview,
                            B = d(),
                            C = F(),
                            p = f().mediaSize,
                            b = m(p),
                            h = (0, a.useState)(null == (e = C[0]) ? void 0 : e.price[0].name),
                            v = h[0],
                            w = h[1],
                            S = i === c,
                            y = (0, a.useCallback)(() => {
                                n.buySteps(o - i, v);
                            }, [n, v, o, i]);
                        return r().createElement(
                            'div',
                            { className: 'Content_base_92' },
                            r().createElement(
                                'div',
                                { className: 'Content_header_fa' },
                                r().createElement(Ct, { isPostProgression: _ }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Content_main_ee' },
                                r().createElement(
                                    'div',
                                    { className: 'Content_slider_80' },
                                    r().createElement(
                                        'div',
                                        { className: 'Content_stepRewards_68' },
                                        r().createElement(ra, { steps: B, stepWidth: be(p) }),
                                    ),
                                    r().createElement(aa, {
                                        levelsStart: l - 1,
                                        levelsTotal: c,
                                        levelsPassed: i,
                                        levelsSelected: o,
                                        levelWidth: be(p),
                                        onChangeSelectedLevels: n.onChangeSelectedStep,
                                        allowSlide: !S,
                                        isPostProgressionState: _,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'Content_finalReward_df' },
                                        r().createElement(gu, {
                                            reward: D,
                                            isHighlighted: o === c,
                                            onClick: g,
                                            isPostProgressionState: _,
                                        }),
                                    ),
                                ),
                                !S &&
                                    r().createElement(
                                        'div',
                                        { className: 'Content_rewards_e8' },
                                        r().createElement(ca, {
                                            rewards: b,
                                            steps: { from: i + 1, to: o },
                                            isPostProgressionState: _,
                                        }),
                                    ),
                                r().createElement('div', { className: 'Content_separator_39' }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'Content_footer_b2' },
                                r().createElement(gt, {
                                    onApply: y,
                                    onSetPriceName: w,
                                    onCancel: n.back,
                                    stepsToBuy: o - i,
                                    prices: C,
                                    priceName: v,
                                    onGetCurrentPrice: A,
                                    isBuyBtnDisabled: S,
                                }),
                            ),
                        );
                    }),
                    Ea = (0, z.observer)(() => {
                        viewEnv.clearInternalCacheAfterFinalize();
                        const e = fe(),
                            u = e.model,
                            t = e.controls,
                            a = u.root.get(),
                            n = a.parentAlias,
                            o = a.isBlurEnabled;
                        return (
                            (function ({
                                key: e = $.n.ESCAPE,
                                callback: u = () => s.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                j(e, u, t);
                            })({ callback: t.cancel }),
                            r().createElement(
                                'div',
                                { className: B()('App_base_42', !o && 'App_base__background_da') },
                                r().createElement(q, null),
                                r().createElement(
                                    'div',
                                    { className: 'App_back_df' },
                                    r().createElement(G, {
                                        caption: R.strings.menu.viewHeader.backBtn.label(),
                                        onClick: t.cancel,
                                        goto: R.strings.armory_yard.buyView.backButton.$dyn(n),
                                    }),
                                ),
                                r().createElement('div', { className: 'App_content_25' }, r().createElement(_a, null)),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        r().createElement(ve, null, r().createElement(L, null, r().createElement(Ea, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, a] = deferred[i], n = !0, s = 0; s < u.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, a];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 321),
        (() => {
            var e = { 321: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, s, o] = t,
                        i = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < n.length; i++)
                        ((r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4221));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
