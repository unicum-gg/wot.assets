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
                t.r(u), t.d(u, { mouse: () => s, onResize: () => a });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const a = `mouse${u}`,
                                            s = o[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            r(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    });
                var r = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => x,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    o = t(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
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
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: C(u.x), y: C(u.y) };
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
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const r = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    a = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
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
                            (e[(e.PERIOD = 190)] = 'PERIOD');
                    })(r || (r = {})),
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
                    })(n || (n = {}));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var r = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, {
                    B3: () => c,
                    Z5: () => o,
                    B0: () => i,
                    wU: () => f,
                    ry: () => B,
                    Eu: () => g,
                    SW: () => v,
                    P3: () => b,
                });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                ((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    A = t(3138);
                const F = ['args'];
                function D(e, u, t, r, n, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const C = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            D(a, r, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            D(a, r, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    h = () => p(i.CLOSE),
                    v = () => p(i.POP_OVER, { on: !1 }),
                    b = (e, u, t, r, n = R.invalid('resId'), a) => {
                        const o = A.O.view.getViewGlobalPosition(),
                            s = t.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            _ = s.width,
                            E = s.height,
                            d = {
                                x: A.O.view.pxToRem(l) + o.x,
                                y: A.O.view.pxToRem(c) + o.y,
                                width: A.O.view.pxToRem(_),
                                height: A.O.view.pxToRem(E),
                            };
                        p(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: r || R.invalid('resId'),
                            targetID: n,
                            direction: u,
                            bbox: C(d),
                            on: !0,
                            args: a,
                        });
                    },
                    f = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    w = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var x = t(7572);
                const S = n.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: x.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (e) => p(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: v,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: b,
                        addEscapeListener: (e) => {
                            const u = (u) => w(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, h);
                        },
                        handleViewEvent: p,
                        onBindingsReady: B,
                        onLayoutReady: g,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: f,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = y;
            },
            2315: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => qt,
                        Bar: () => jt,
                        DefaultScroll: () => $t,
                        Direction: () => Ot,
                        defaultSettings: () => kt,
                        useHorizontalScrollApi: () => It,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => or, Bar: () => rr, Default: () => ar, useVerticalScrollApi: () => Yt });
                var a = t(6179),
                    o = t.n(a);
                const s = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, u, t) {
                    const r = (function (e, u) {
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
                        n = (function (e, u) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
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
                })(c || (c = {}));
                const E = i.O.client.getSize('rem'),
                    d = E.width,
                    m = E.height,
                    A = Object.assign({ width: d, height: m }, _(d, m, l)),
                    F = (0, a.createContext)(A),
                    D = ['children'],
                    C = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, D);
                        const r = (0, a.useContext)(F),
                            n = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            _ = r.extraLargeWidth,
                            E = r.largeWidth,
                            d = r.mediumWidth,
                            m = r.smallWidth,
                            A = r.extraSmallWidth,
                            C = r.extraLargeHeight,
                            B = r.largeHeight,
                            g = r.mediumHeight,
                            p = r.smallHeight,
                            h = r.extraSmallHeight,
                            v = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && o) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return s(u, t, v);
                            if (t.largeWidth && E) return s(u, t, v);
                            if (t.mediumWidth && d) return s(u, t, v);
                            if (t.smallWidth && m) return s(u, t, v);
                            if (t.extraSmallWidth && A) return s(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                (C.defaultProps = {
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
                    (0, a.memo)(C);
                const B = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        s = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                r = i.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, _(t, r, l)));
                        }, []);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', s);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]);
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return o().createElement(F.Provider, { value: c }, e);
                });
                var g = t(6483),
                    p = t.n(g),
                    h = t(926),
                    v = t.n(h);
                let b, f, w;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const x = () => {
                        const e = (0, a.useContext)(F),
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
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case e.largeWidth:
                                        return f.Large;
                                    case e.mediumWidth:
                                        return f.Medium;
                                    case e.smallWidth:
                                        return f.Small;
                                    case e.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case e.largeHeight:
                                        return w.Large;
                                    case e.mediumHeight:
                                        return w.Medium;
                                    case e.smallHeight:
                                        return w.Small;
                                    case e.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const T = {
                        [f.ExtraSmall]: '',
                        [f.Small]: v().SMALL_WIDTH,
                        [f.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [f.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_HEIGHT,
                        [w.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [w.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, S);
                        const n = x(),
                            a = n.mediaWidth,
                            s = n.mediaHeight,
                            i = n.mediaSize;
                        return o().createElement('div', y({ className: p()(t, T[a], M[s], L[i]) }, r), u);
                    },
                    O = ['children'],
                    k = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, O);
                        return o().createElement(B, null, o().createElement(N, t, u));
                    };
                var P = t(493),
                    I = t.n(P);
                function H(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
                        playHighlight() {
                            H('highlight');
                        },
                        playClick() {
                            H('play');
                        },
                        playYes() {
                            H('yes1');
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
                    G = [
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
                function z() {
                    return (
                        (z =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        z.apply(this, arguments)
                    );
                }
                class X extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            s = e.classNames,
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
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, G)),
                            d = p()(U.base, U[`base__${a}`], U[`base__${n}`], null == s ? void 0 : s.base),
                            m = p()(U.icon, U[`icon__${a}`], U[`icon__${n}`], null == s ? void 0 : s.icon),
                            A = p()(U.glow, null == s ? void 0 : s.glow),
                            F = p()(U.caption, U[`caption__${a}`], null == s ? void 0 : s.caption),
                            D = p()(U.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            z(
                                {
                                    className: d,
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
                            'info' !== a && o().createElement('div', { className: U.shine }),
                            o().createElement('div', { className: m }, o().createElement('div', { className: A })),
                            o().createElement('div', { className: F }, u),
                            r && o().createElement('div', { className: D }, r),
                        );
                    }
                }
                X.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const j = (e, u) => {
                    let t;
                    const r = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(r);
                    };
                };
                var V = t(5521),
                    $ = t(4179);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = V.n.NONE, u = q, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                const K = (e) => {
                    (0, a.useEffect)(e, []);
                };
                var Q = t(3403);
                function Z() {
                    return !1;
                }
                console.log;
                var J = t(9174);
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                function te(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var re = t(3946);
                const ne = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ue,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const n = t(u),
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = i.O.view.addModelObserver(s, u, !0);
                                                        return n.set(l, t), e && t(o(a)), l;
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
                                                                                    return ee(e, u);
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
                                                                                          ? ee(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
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
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            o =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            s = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : o.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            _ = (({ observableModel: e }) => {
                                                const u = {
                                                        primitives: e.primitives([
                                                            'totalRewardsCount',
                                                            'selectedRewardsCount',
                                                        ]),
                                                        categories: e.array('categories'),
                                                        selectableRewards: e.array('selectableRewards'),
                                                        filterQuery: J.LO.box(''),
                                                    },
                                                    t = (0, re.Om)(
                                                        () => te(u.categories.get(), (e) => Object.assign({}, e)),
                                                        { equals: Z },
                                                    ),
                                                    r = (0, re.Om)(
                                                        () =>
                                                            te(u.selectableRewards.get(), (e) => Object.assign({}, e)),
                                                        { equals: Z },
                                                    ),
                                                    n = (0, re.Om)(() => t().length, { equals: Z }),
                                                    a = (0, re.Om)(() => t().find((e) => e.isSelected), { equals: Z }),
                                                    o = (0, re.Om)(() => {
                                                        if (a().isCompensation) return r();
                                                        const e = u.filterQuery.get();
                                                        return (function (e, u) {
                                                            if (Array.isArray(e)) return e.filter(u);
                                                            const t = [];
                                                            for (let n = 0; n < e.length; n++) {
                                                                var r;
                                                                const a = null == (r = e[n]) ? void 0 : r.value;
                                                                u(a, n, e) && t.push(a);
                                                            }
                                                            return t;
                                                        })(r(), (u) =>
                                                            systemLocale
                                                                .toLowerCase(u.userName)
                                                                .includes(e && systemLocale.toLowerCase(e)),
                                                        );
                                                    }),
                                                    s = (0, re.Om)(() => o().filter((e) => e.isSelected), {
                                                        equals: Z,
                                                    }),
                                                    i = (0, re.Om)(() => o().length),
                                                    l = (0, re.Om)(() => i() < u.primitives.totalRewardsCount.get());
                                                return Object.assign({}, u.primitives, {
                                                    categories: u.categories,
                                                    filterQuery: u.filterQuery,
                                                    computes: {
                                                        getCategories: t,
                                                        getCategoriesLength: n,
                                                        selectedCategory: a,
                                                        selectableRewards: o,
                                                        selectableRewardsLength: i,
                                                        isFilterApplied: l,
                                                        getSelectedVehicle: s,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            n = J.LO.box(r, { equals: Z });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, J.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : s(u),
                                                            n = J.LO.box(r, { equals: Z });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, J.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = s(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = J.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, J.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                a = Object.entries(n),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = J.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, J.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
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
                                            controls: 'mocks' === e && r ? r.controls(E) : u(E),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    E = (0, a.useState)(e),
                                    d = E[0],
                                    m = E[1],
                                    A = (0, a.useState)(() => c(e, r, s)),
                                    F = A[0],
                                    D = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? D(c(d, r, s)) : (_.current = !0);
                                    }, [s, d, r]),
                                    (0, a.useEffect)(() => {
                                        m(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    o().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e, model: u }) => {
                        const t = e.createCallback((e) => ({ tabIndex: e }), 'onCategorySelect'),
                            r = e.createCallbackNoArgs('onFilterReset');
                        return {
                            handleCategorySelect: (0, J.aD)((e) => {
                                u.filterQuery.set(''), t(e);
                            }),
                            selectReward: e.createCallback((e) => ({ rewardIndex: e }), 'onSelectReward'),
                            onClose: e.createCallbackNoArgs('onClose'),
                            confirm: e.createCallbackNoArgs('onConfirm'),
                            setFilterQuery: (0, J.aD)((e) => u.filterQuery.set(e)),
                            resetFilter: (0, J.aD)(() => {
                                u.filterQuery.set(''), r();
                            }),
                        };
                    }),
                    ae = ne[0],
                    oe = ne[1],
                    se = {
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
                let ie, le;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ie || (ie = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(le || (le = {}));
                const ce = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: n,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: E,
                    onMouseUp: d,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        C = D[0],
                        B = D[1],
                        g = (0, a.useState)(!1),
                        h = g[0],
                        v = g[1],
                        b = (0, a.useState)(!1),
                        f = b[0],
                        w = b[1],
                        x = (0, a.useCallback)(() => {
                            n || (F.current && (F.current.focus(), B(!0)));
                        }, [n]),
                        S = (0, a.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && B(!1);
                            },
                            [C],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                n || (A && A(e));
                            },
                            [n, A],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                n || (null !== i && H(i), c && c(e), w(!0));
                            },
                            [n, i, c],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                n || (d && d(e), v(!1));
                            },
                            [n, d],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                n || (null !== l && H(l), E && E(e), t && x(), v(!0));
                            },
                            [n, l, E, x, t],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                n || (m && m(e), v(!1));
                            },
                            [n, m],
                        ),
                        k = p()(
                            se.base,
                            se[`base__${r}`],
                            {
                                [se.base__disabled]: n,
                                [se[`base__${u}`]]: u,
                                [se.base__focus]: C,
                                [se.base__highlightActive]: h,
                                [se.base__firstHover]: f,
                            },
                            s,
                        ),
                        P = p()(se.state, se.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: F,
                                className: k,
                                onMouseEnter: T,
                                onMouseMove: M,
                                onMouseUp: L,
                                onMouseDown: N,
                                onMouseLeave: O,
                                onClick: y,
                            },
                            r !== ie.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: se.back }),
                                    o().createElement('span', { className: se.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: P },
                                o().createElement('span', { className: se.stateDisabled }),
                                o().createElement('span', { className: se.stateHighlightHover }),
                                o().createElement('span', { className: se.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: se.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ce.defaultProps = { type: ie.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _e = (0, a.memo)(ce);
                var Ee = t(9887),
                    de = t.n(Ee);
                const me = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Ae = (e) => e.includes('_') && ((e) => me.includes(e))(e.split('_').at(-1)),
                    Fe = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    De = (e, u) =>
                        Object.keys(e).reduce((t, r) => {
                            if (r in t) return t;
                            if (Ae(r)) {
                                const n = r.split('_').slice(0, -1).join('_');
                                if (n in t) return t;
                                const a = Fe.indexOf(u),
                                    o = (-1 !== a ? me.slice(a) : [])
                                        .map((e) => n + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = o ? e[o] : void 0;
                                return (t[n] = void 0 !== s ? s : e[n]), t;
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, u) => me.some((t) => void 0 !== u[`${e}_${t}`]))(r, e) ||
                                    (t[r] = n),
                                t
                            );
                        }, {}),
                    Ce = (e, u = De) => {
                        const t = (
                            (e, u = De) =>
                            (t) => {
                                const r = x().mediaSize,
                                    n = (0, a.useMemo)(() => u(t, r), [t, r]);
                                return o().createElement(e, n);
                            }
                        )(e, u);
                        return o().memo((u) =>
                            Object.keys(u).some((e) => Ae(e) && void 0 !== u[e])
                                ? o().createElement(t, u)
                                : o().createElement(e, u),
                        );
                    },
                    Be = {
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
                    ge = [
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
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                Object.keys(de());
                const he = {
                        XL: { mt: Be.mt__XL, mr: Be.mr__XL, mb: Be.mb__XL, ml: Be.ml__XL },
                        LG: { mt: Be.mt__LG, mr: Be.mr__LG, mb: Be.mb__LG, ml: Be.ml__LG },
                        MDp: { mt: Be.mt__MDp, mr: Be.mr__MDp, mb: Be.mb__MDp, ml: Be.ml__MDp },
                        MD: { mt: Be.mt__MD, mr: Be.mr__MD, mb: Be.mb__MD, ml: Be.ml__MD },
                        SMp: { mt: Be.mt__SMp, mr: Be.mr__SMp, mb: Be.mb__SMp, ml: Be.ml__SMp },
                        SM: { mt: Be.mt__SM, mr: Be.mr__SM, mb: Be.mb__SM, ml: Be.ml__SM },
                        XS: { mt: Be.mt__XS, mr: Be.mr__XS, mb: Be.mb__XS, ml: Be.ml__XS },
                    },
                    ve = (Object.keys(he), ['mt', 'mr', 'mb', 'ml']),
                    be = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    fe = Ce((e) => {
                        let u = e.className,
                            t = e.width,
                            r = e.height,
                            n = e.m,
                            s = e.mt,
                            i = void 0 === s ? n : s,
                            l = e.mr,
                            c = void 0 === l ? n : l,
                            _ = e.mb,
                            E = void 0 === _ ? n : _,
                            d = e.ml,
                            m = void 0 === d ? n : d,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            C = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            B = e.flexStart,
                            g = e.center,
                            h = e.flexEnd,
                            v = e.spaceBetween,
                            b = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (B ? 'flex-start' : g && 'center') ||
                                      (h && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (b && 'space-around') ||
                                      void 0
                                    : f,
                            x = e.alignItems,
                            S = void 0 === x ? (B ? 'flex-start' : g && 'center') || (h && 'flex-end') || void 0 : x,
                            y = e.alignSelf,
                            T = e.wrap,
                            M = e.flexWrap,
                            R = void 0 === M ? (T ? 'wrap' : void 0) : M,
                            L = e.grow,
                            N = e.shrink,
                            O = e.flex,
                            k = void 0 === O ? (L || N ? `${L ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : O,
                            P = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ge);
                        const W = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: E, ml: m },
                                    u = ((e) =>
                                        ve.reduce((u, t) => {
                                            const r = e[t];
                                            return r && 'number' != typeof r ? u.concat(he[!0 === r ? 'MD' : r][t]) : u;
                                        }, []))(e),
                                    n = ((e) =>
                                        ve.reduce((u, t) => {
                                            const r = e[t];
                                            return 'number' == typeof r && (u[be[t]] = r + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, P, n, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: k,
                                        alignSelf: y,
                                        display: C || S ? 'flex' : void 0,
                                        flexDirection: C,
                                        flexWrap: R,
                                        justifyContent: w,
                                        alignItems: S,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, r, i, c, E, m, P, k, y, C, R, w, S]),
                            U = W.computedStyle,
                            G = W.computedClassNames;
                        return o().createElement('div', pe({ className: p()(Be.base, ...G, u), style: U }, H), I);
                    });
                let we;
                function xe(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(we || (we = {}));
                const Se = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ye = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Te = (e, u, t = we.left) => e.split(u).reduce(t === we.left ? Se : ye, []),
                    Me = (() => {
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
                    Re = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Le = ({ binding: e, text: u = '', classMix: t, alignment: r = we.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : o().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      o().createElement(
                                          'div',
                                          { className: p()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = we.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Re.includes(t)
                                                                ? Me(e)
                                                                : ((e, u = we.left) => {
                                                                      let t = [];
                                                                      const r =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Te(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Te(e, r, we.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              o().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Ne = t(3532),
                    Oe = t.n(Ne);
                const ke = {
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
                    Pe = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                Object.keys(de());
                const He = Object.keys(Oe()),
                    We = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    Ue = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ge = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    ze =
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
                            'heading-H56': We,
                            'heading-H36': We,
                            'heading-H28': Ue,
                            'heading-H24': Ue,
                            'heading-H24R': Ue,
                            'heading-H22': Ue,
                            'heading-H20R': Ue,
                            'heading-H18': Ue,
                            'heading-H15': Ge,
                            'heading-H14': Ge,
                            'paragraph-P24': Ue,
                            'paragraph-P18': Ue,
                            'paragraph-P16': Ue,
                            'paragraph-P14': Ge,
                            'paragraph-P12': Ge,
                            'paragraph-P10': Ge,
                        }),
                    Xe =
                        (Object.keys(ze),
                        (e) =>
                            e
                                ? ((e) => He.includes(e))(e)
                                    ? { colorClassName: ke[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    je = Ce((e) => {
                        let u = e.text,
                            t = e.variant,
                            r = e.className,
                            n = e.color,
                            s = e.m,
                            i = e.mt,
                            l = void 0 === i ? s : i,
                            c = e.mr,
                            _ = void 0 === c ? s : c,
                            E = e.mb,
                            d = void 0 === E ? s : E,
                            m = e.ml,
                            A = void 0 === m ? s : m,
                            F = e.style,
                            D = e.format,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Pe);
                        const B = (0, a.useMemo)(() => {
                                const e = Xe(n),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    r = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, r), colorClassName: u };
                            }, [F, n]),
                            g = B.computedStyle,
                            h = B.colorClassName;
                        return o().createElement(
                            fe,
                            Ie(
                                {
                                    className: p()(ke.base, t && ke[t], h, r),
                                    style: g,
                                    mt: !0 === l ? ze[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? ze[t || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? ze[t || 'paragraph-P16'].mb : d,
                                    ml: !0 === A ? ze[t || 'paragraph-P16'].ml : A,
                                },
                                C,
                            ),
                            void 0 !== D ? o().createElement(Le, Ie({}, D, { text: u })) : u,
                        );
                    }),
                    Ve = R.strings.ny,
                    $e = Ve.selectVehicles.error,
                    qe = (0, a.memo)(({ closeClick: e }) =>
                        o().createElement(
                            'div',
                            { className: 'ErrorScreen_base_c4' },
                            o().createElement('div', { className: 'ErrorScreen_icon_de' }),
                            o().createElement(je, { className: 'ErrorScreen_title_54', text: $e.title() }),
                            o().createElement(je, { className: 'ErrorScreen_description_d3', text: $e.subTitle() }),
                            o().createElement(
                                _e,
                                { mixClass: 'ErrorScreen_button_ab', onClick: e },
                                o().createElement(je, { text: Ve.button.submit() }),
                            ),
                        ),
                    ),
                    Ye = [
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
                function Ke(e) {
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
                const Qe = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    Ze = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            d = e.decoratorId,
                            m = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ye);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    C ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [C],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Qe(t, m, { isMouseEvent: !0, on: !0, arguments: Ke(r) }, v),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, m, r, v, B]),
                            f = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Qe(t, m, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, m, v, g]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
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
                                        window.removeEventListener('mouseleave', f), f();
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
                                                  ((x = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                          n && n(e),
                                                          x && x(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  f(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === E && f(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === E && f(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var x;
                    },
                    Je = 'Footer_button_41',
                    eu = (0, a.memo)(({ selectedRewardsCount: e, className: u, onCloseClick: t, onConfirmClick: r }) =>
                        o().createElement(
                            'div',
                            { className: p()('Footer_base_25', u) },
                            o().createElement(
                                'div',
                                { className: 'Footer_textContainer_80' },
                                e > 0 &&
                                    o().createElement(je, {
                                        text: Or.footer.actionText.active(),
                                        format: {
                                            binding: {
                                                infoIcon: o().createElement(
                                                    Ze,
                                                    {
                                                        contentId:
                                                            R.views.new_year.lobby.new_year.tooltips.SelectedRewardsTooltip(
                                                                'resId',
                                                            ),
                                                    },
                                                    o().createElement('div', { className: 'Footer_infoIcon_17' }),
                                                ),
                                                amountRewards: o().createElement(
                                                    'div',
                                                    { className: 'Footer_amountRewards_23' },
                                                    e,
                                                ),
                                            },
                                            classMix: 'Footer_formatText_43',
                                        },
                                        className: p()('Footer_text_8b', Boolean(e) && 'Footer_text__active_98'),
                                    }),
                            ),
                            o().createElement(
                                'div',
                                { className: 'Footer_actions_b3' },
                                o().createElement(
                                    _e,
                                    { size: le.medium, mixClass: Je, type: ie.primary, disabled: !e, onClick: r },
                                    o().createElement(je, { text: Or.claim() }),
                                ),
                                o().createElement(
                                    _e,
                                    { size: le.medium, mixClass: Je, type: ie.secondary, onClick: t },
                                    o().createElement(je, { text: Or.cancel() }),
                                ),
                            ),
                        ),
                    ),
                    uu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const ru = R.views.common.tooltip_window.simple_tooltip_content,
                    nu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, uu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, r, n, i]);
                        return o().createElement(
                            Ze,
                            tu(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? ru.SimpleTooltipHtmlContent('resId') : ru.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    au = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    ou = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var su;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(su || (su = {}));
                const iu = ['__left', '__right', '__top', '__bottom'],
                    lu =
                        ((0, a.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: r = {} }, n) => {
                                const s = (0, a.useRef)(null),
                                    l = (0, a.useRef)(null),
                                    c = (0, a.useRef)(null),
                                    _ = (0, a.useState)(window.decorator && window.decorator.directionType),
                                    E = _[0],
                                    d = _[1],
                                    m = (0, a.useCallback)(() => {
                                        W.playClick(), i.O.view.sendEvent.close();
                                    }, []),
                                    A = (0, a.useCallback)(() => {
                                        W.playHighlight();
                                    }, []),
                                    F = p()(ou.arrow, ou[`arrow${iu[E]}`]);
                                K(
                                    () => (
                                        i.O.client.events.mouse.enableOutside(),
                                        i.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (t ? t() : i.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const D = (0, a.useCallback)(
                                        (e) => {
                                            let u = e.target;
                                            do {
                                                if (u === s.current || u === c.current) return;
                                                u = u.parentNode;
                                            } while (u);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = i.O.client.getMouseGlobalPosition(),
                                                    u = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        e.x < r.boundX ||
                                                        e.x > r.boundX + r.boundWidth ||
                                                        e.y > r.boundY + r.boundHeight ||
                                                        e.y < r.boundY;
                                                if (u && !t) return;
                                            }
                                            t ? t() : i.O.view.sendEvent.close('popover');
                                        },
                                        [s, c, t],
                                    ),
                                    C = (0, a.useCallback)(
                                        () => (
                                            i.O.view.freezeTextureBeforeResize(),
                                            au(() => {
                                                if (l.current) {
                                                    const e = l.current.scrollWidth,
                                                        u = l.current.scrollHeight;
                                                    i.O.view.resize(e, u), d(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, a.useImperativeHandle)(n, () => ({ updateSize: C })),
                                    K(() => {
                                        i.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, a.useEffect)(() => {
                                        document.addEventListener('mousedown', D, { capture: !0 });
                                        const e = ((e) => {
                                            let u = !1;
                                            return {
                                                promise: new Promise((t, r) => {
                                                    e.then((e) => !u && t(e)).catch((e) => !u && r(e));
                                                }),
                                                cancel() {
                                                    u = !0;
                                                },
                                            };
                                        })((0, $.Eu)());
                                        return (
                                            !u && e.promise.then(() => C()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', D);
                                            }
                                        );
                                    }, [C, D, u]),
                                    o().createElement(
                                        'div',
                                        { className: ou.base, ref: l },
                                        o().createElement(
                                            'div',
                                            { className: ou.decorator },
                                            o().createElement(
                                                'div',
                                                { className: ou.content, ref: s },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    o().createElement(
                                                        nu,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        o().createElement('div', {
                                                            className: ou.closeBtn,
                                                            onClick: m,
                                                            onMouseEnter: A,
                                                            ref: c,
                                                        }),
                                                    ),
                                            ),
                                            o().createElement('div', { className: F, style: r.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function cu() {
                    return (
                        (cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        cu.apply(this, arguments)
                    );
                }
                const _u = (e) => {
                        let u = e.contentId,
                            t = e.decoratorId,
                            r = e.direction,
                            n = void 0 === r ? su.Top : r,
                            s = e.targetId,
                            i = e.args,
                            l = e.onClick,
                            c = e.children,
                            _ = e.isEnabled,
                            E = void 0 === _ || _,
                            d = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, lu);
                        const m = (0, a.useRef)(null),
                            A = (0, a.useCallback)(() => {
                                if ((0, $.wU)()) return (0, $.SW)();
                                m.current && (0, $.P3)(u, n, m.current, t, s, i);
                            }, [u, n, i, t, s]);
                        return o().createElement(
                            'div',
                            cu(
                                {
                                    ref: m,
                                    onClick:
                                        ((F = c.props.onClick),
                                        (e) => {
                                            E && (A(), l && l(e), F && F(e));
                                        }),
                                },
                                d,
                            ),
                            c,
                        );
                        var F;
                    },
                    Eu = ['children'];
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const mu = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Eu);
                        return o().createElement(
                            _u,
                            du(
                                {
                                    decoratorId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                    contentId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent(
                                            'resId',
                                        ),
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Au = 'NYSelectVehicleForDiscountPopover';
                let Fu, Du, Cu, Bu, gu, pu, hu;
                var vu, bu, fu, wu;
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
                        (e.Currency = 'currency'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.Entitlements = 'entitlements'),
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
                        (e.NewYearToyFragments = 'nyToyFragments'),
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
                        (e.LootBoxToken = 'lootBoxToken');
                })(Fu || (Fu = {})),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(Du || (Du = {})),
                    ((wu = Cu || (Cu = {})).Big = 'big'),
                    (wu.Small = 'small'),
                    (wu.Mini = 'mini'),
                    (wu.S600x450 = 's600x450'),
                    (wu.S400x300 = 's400x300'),
                    (wu.S296x222 = 's296x222'),
                    (wu.S232x174 = 's232x174'),
                    (wu.S180x135 = 's180x135'),
                    (wu.S128x100 = 's128x100'),
                    (wu.S80x80 = 's80x80'),
                    (wu.S48x48 = 's48x48'),
                    ((fu = Bu || (Bu = {})).MULTI = 'multi'),
                    (fu.CURRENCY = 'currency'),
                    (fu.PREMIUM_PLUS = 'premium_plus'),
                    (fu.NUMBER = 'number'),
                    (fu.STRING = 'string'),
                    ((bu = gu || (gu = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (bu.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (bu.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (bu.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (bu.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (bu.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (bu.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (bu.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (bu.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (bu.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (bu.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (bu.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (bu.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((pu || (pu = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((vu = hu || (hu = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (vu.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (vu.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (vu.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (vu.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (vu.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (vu.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (vu.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (vu.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (vu.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (vu.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (vu.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (vu.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                class xu extends o().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? $.B3.GOLD : $.B3.INTEGRAL;
                        const u = $.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                (xu.defaultProps = { format: 'integral' }),
                    Fu.Items,
                    Fu.Equipment,
                    Fu.Xp,
                    Fu.XpFactor,
                    Fu.Blueprints,
                    Fu.BlueprintsAny,
                    Fu.Goodies,
                    Fu.Berths,
                    Fu.Slots,
                    Fu.Tokens,
                    Fu.CrewSkins,
                    Fu.CrewBooks,
                    Fu.Customizations,
                    Fu.CreditsFactor,
                    Fu.TankmenXp,
                    Fu.TankmenXpFactor,
                    Fu.FreeXpFactor,
                    Fu.BattleToken,
                    Fu.Entitlements,
                    Fu.PremiumUniversal,
                    Fu.NaturalCover,
                    Fu.BpCoin,
                    Fu.BattlePassSelectToken,
                    Fu.BattlaPassFinalAchievement,
                    Fu.BattleBadge,
                    Fu.BonusX5,
                    Fu.CrewBonusX3,
                    Fu.NewYearFillers,
                    Fu.NewYearInvoice,
                    Fu.EpicSelectToken,
                    Fu.Comp7TokenWeeklyReward,
                    Fu.Comp7TokenCouponReward,
                    Fu.BattleBoosterGift,
                    Fu.NewYearFillers,
                    Fu.NewYearInvoice,
                    Fu.LootBoxToken,
                    Fu.SelectableBonus,
                    Fu.Gold,
                    Fu.Credits,
                    Fu.Crystal,
                    Fu.FreeXp,
                    Fu.NewYearToyFragments,
                    Fu.BattlePassPoints,
                    Fu.PremiumPlus,
                    Fu.Premium;
                const Su = (e, u, t) => {
                    const r = u && { contentId: u };
                    return Object.assign(
                        {
                            args: e,
                            isEnabled: Boolean((e && e.tooltipId) || u),
                            ignoreMouseClick: !0,
                            ignoreShowDelay: !u,
                        },
                        r,
                        t,
                    );
                };
                let yu, Tu, Mu, Ru;
                var Lu, Nu;
                ((Nu = yu || (yu = {})).Small = 'small'),
                    (Nu.Medium = 'medium'),
                    (Nu.Big = 'big'),
                    (Nu.ExtraBig = 'extraBig'),
                    (Nu.Huge = 'huge'),
                    (function (e) {
                        (e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation');
                    })(Tu || (Tu = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Big = 'Big');
                    })(Mu || (Mu = {})),
                    ((Lu = Ru || (Ru = {})).ExtraSlot = 'ny22:extraSlot'),
                    (Lu.ToyFragments = 'ny22ToyFragments'),
                    (Lu.Tman = 'tmanToken'),
                    (Lu.AchievementReward = 'dossier_achievement'),
                    (Lu.Customizations = 'customizations'),
                    (Lu.VariadicDiscount = 'variadicDiscount'),
                    (Lu.MarketplaceUnlock = 'ny25_marketplace_unlock'),
                    (Lu.LootBoxToken = 'lootBoxToken');
                const Ou = ['ko', 'no'],
                    ku = R.strings.settings.LANGUAGE_CODE(),
                    Pu = {
                        base: 'DiscountReward_base_3a',
                        discountReward: 'DiscountReward_discountReward_fc',
                        base__small: 'DiscountReward_base__small_3f',
                        base__medium: 'DiscountReward_base__medium_4b',
                        base__big: 'DiscountReward_base__big_85',
                        base__extraBig: 'DiscountReward_base__extraBig_d4',
                        base__huge: 'DiscountReward_base__huge_c2',
                        base__bright: 'DiscountReward_base__bright_18',
                        vehicleLevel: 'DiscountReward_vehicleLevel_d5',
                        base__applied: 'DiscountReward_base__applied_f8',
                        vehicleLevel__visible: 'DiscountReward_vehicleLevel__visible_e4',
                        discountWrapper: 'DiscountReward_discountWrapper_20',
                        discountAmount: 'DiscountReward_discountAmount_79',
                        discountAmountValue: 'DiscountReward_discountAmountValue_0d',
                        discountAmountValue__visible: 'DiscountReward_discountAmountValue__visible_13',
                        discountAmountIcon: 'DiscountReward_discountAmountIcon_12',
                        shine: 'DiscountReward_shine_dc',
                        base__disabled: 'DiscountReward_base__disabled_8e',
                        base__onlyTextAnimation: 'DiscountReward_base__onlyTextAnimation_d1',
                        discountApplied: 'DiscountReward_discountApplied_63',
                        buttonContainer: 'DiscountReward_buttonContainer_44',
                        base__defaultAnimation: 'DiscountReward_base__defaultAnimation_d5',
                        buttonWrapper: 'DiscountReward_buttonWrapper_1e',
                        base__onlyButtonAnimation: 'DiscountReward_base__onlyButtonAnimation_21',
                        button: 'DiscountReward_button_9d',
                        button__label: 'DiscountReward_button__label_6e',
                    },
                    Iu = R.images.gui.maps.icons.vehicle,
                    Hu = R.images.gui.maps.shop.vehicles.c_360x270,
                    Wu = R.strings.quests.bonuses.variadicDiscount.buttonLabel(),
                    Uu = R.strings.roman_numerals,
                    Gu = (0, a.memo)(
                        ({ bonus: e, options: u, size: t = yu.Medium, hasTooltip: r = !1, onSelectReward: n }) => {
                            const s = e.level,
                                i = e.discount,
                                l = e.selectedVehicle,
                                c = e.variadicID,
                                _ = u || {},
                                E = _.animation,
                                d = _.disabled,
                                m = _.iconType,
                                A = _.isBrightOnHover,
                                F = _.isButtonHidden,
                                D = _.isLevelHidden,
                                C = void 0 !== D && D,
                                B = _.useCoverIconWhenSelected,
                                g = (0, a.useRef)(null),
                                h = `${((e, u) => {
                                    const t = 'R.images.gui.maps.icons';
                                    return `${t}.${e !== Ru.AchievementReward || (u !== yu.Small && u !== yu.Medium) ? 'quests.bonuses' : `${t}.achievement.big`}.${(() => {
                                        switch (u) {
                                            case yu.Small:
                                            case yu.Medium:
                                                return 'big';
                                            case yu.Big:
                                                return 's180x135';
                                            case yu.ExtraBig:
                                                return 's232x174';
                                            case yu.Huge:
                                                return 's296x222';
                                        }
                                    })()}`;
                                })(Ru.VariadicDiscount, t)}.${Ru.VariadicDiscount}`,
                                v = m === Mu.Big,
                                b = v ? Hu : Iu,
                                f = (0, a.useMemo)(() => (l && v ? l.split(':')[1] : l), [v, l]),
                                w = f && !B ? b.$dyn(xe(f)) : h,
                                x = Ou.includes(ku) ? s : Uu.$dyn(`n_${s}`),
                                S = (0, a.useState)(!1),
                                y = S[0],
                                T = S[1],
                                M = E !== Tu.None,
                                L = { variadicID: c, discount: i },
                                N = { popoverId: Au, variadicID: c },
                                O = { backgroundImage: `url('${w}')` };
                            var k, P;
                            (0, a.useEffect)(() => {
                                !M && y && T(!1);
                            }, [M, y]),
                                (k = () => {
                                    !g.current ||
                                        l ||
                                        d ||
                                        E === Tu.OnlyText ||
                                        E === Tu.None ||
                                        (g.current.style.backgroundImage =
                                            "url('swf://gui/flash/animations/newYear/godRaysSmall.swf')");
                                }),
                                (P = [E, d, l]),
                                (0, a.useEffect)(() => {
                                    let e = null;
                                    return (
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                (e = null), k();
                                            });
                                        })),
                                        () => {
                                            null !== e && cancelAnimationFrame(e);
                                        }
                                    );
                                }, P);
                            const I = p()(
                                    Pu.base,
                                    Pu[`base__${t}`],
                                    d && Pu.base__disabled,
                                    A && Pu.base__bright,
                                    l && Pu.base__applied,
                                ),
                                H = i > 0 ? `-${i}` : '',
                                W = o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        Ze,
                                        {
                                            contentId:
                                                R.views.new_year.lobby.new_year.tooltips.NyDiscountRewardTooltip(
                                                    'resId',
                                                ),
                                            args: L,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: Pu.discountReward, style: O },
                                            o().createElement(
                                                'div',
                                                { className: p()(Pu.vehicleLevel, !C && Pu.vehicleLevel__visible) },
                                                x,
                                            ),
                                            o().createElement(
                                                'div',
                                                { className: Pu.discountWrapper },
                                                o().createElement(
                                                    'div',
                                                    { className: Pu.discountAmount },
                                                    o().createElement('div', { className: Pu.discountAmountIcon }, '%'),
                                                    o().createElement(
                                                        'div',
                                                        {
                                                            className: p()(
                                                                Pu.discountAmountValue,
                                                                !C && Pu.discountAmountValue__visible,
                                                            ),
                                                        },
                                                        H,
                                                    ),
                                                ),
                                            ),
                                            o().createElement('div', { className: Pu.shine, ref: g }),
                                            o().createElement('div', { className: Pu.discountApplied }),
                                        ),
                                    ),
                                    !F &&
                                        o().createElement(
                                            'div',
                                            { className: Pu.buttonContainer },
                                            o().createElement(
                                                'div',
                                                { className: Pu.buttonWrapper },
                                                o().createElement(
                                                    'div',
                                                    null,
                                                    o().createElement(
                                                        _e,
                                                        {
                                                            size: le.small,
                                                            type: ie.main,
                                                            mixClass: Pu.button,
                                                            onClick: n,
                                                        },
                                                        o().createElement('div', { className: Pu.button__label }, Wu),
                                                    ),
                                                ),
                                            ),
                                        ),
                                );
                            return o().createElement(
                                'div',
                                {
                                    className: I,
                                    onMouseEnter: () => {
                                        M && T(!0);
                                    },
                                    onMouseLeave: () => {
                                        y && T(!1);
                                    },
                                },
                                (!d && !l) || r ? o().createElement(mu, { args: N }, W) : W,
                            );
                        },
                    ),
                    zu = {
                        animation: Tu.None,
                        disabled: !1,
                        iconType: Mu.Big,
                        animationType: Tu.None,
                        isButtonHidden: !1,
                        isPopoverOpened: !1,
                        useCoverIconWhenSelected: !0,
                    },
                    Xu = (0, a.memo)(
                        ({
                            discount: e,
                            level: u,
                            variadicID: t,
                            tabIndex: r,
                            isSelected: n,
                            selectedVehicle: s,
                            onClick: i,
                        }) => {
                            const l = x().mediaSize > b.Medium ? yu.Medium : yu.Small,
                                c = (0, a.useState)(!1),
                                _ = c[0],
                                E = c[1],
                                d = s.length > 0;
                            (0, a.useEffect)(
                                () =>
                                    au(() => {
                                        E(!0);
                                    }),
                                [],
                            );
                            const m = p()(
                                    'Category_base_2a',
                                    _ && 'Category_base__viewReady_38',
                                    n && 'Category_base__selected_26',
                                ),
                                A = { NEW_YEAR_DISCOUNT_APPLY_POPOVER_ID: Au, variadicID: t };
                            return o().createElement(
                                'div',
                                {
                                    className: m,
                                    onClick: () => {
                                        W.playClick(), i(r);
                                    },
                                    onMouseEnter: () => {
                                        W.playHighlight();
                                    },
                                },
                                d &&
                                    o().createElement(
                                        mu,
                                        { args: A },
                                        o().createElement(
                                            'div',
                                            { className: 'Category_rewardWrapper_3c' },
                                            o().createElement('div', { className: 'Category_completed_72' }),
                                        ),
                                    ),
                                o().createElement(
                                    'div',
                                    {
                                        className: p()(
                                            'Category_rewardContainer_34',
                                            d && 'Category_rewardContainer__accepting_21',
                                        ),
                                    },
                                    o().createElement(Gu, {
                                        bonus: { level: u, discount: e, variadicID: t },
                                        options: Object.assign({}, zu, { isButtonHidden: !0 }),
                                        size: l,
                                        hasTooltip: !0,
                                    }),
                                ),
                                o().createElement('div', { className: 'Category_glow_4c' }),
                            );
                        },
                    );
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const Vu = (0, Q.Pi)(({ className: e }) => {
                        const u = oe(),
                            t = u.model,
                            r = u.controls,
                            n = t.computes.getCategories(),
                            a = (e) => {
                                r.handleCategorySelect(e);
                            };
                        return o().createElement(
                            'div',
                            { className: p()('Categories_base_f8', e) },
                            n.map((e, u) =>
                                o().createElement(
                                    o().Fragment,
                                    { key: e.variadicID },
                                    o().createElement(Xu, ju({}, e, { isSelected: e.isSelected, onClick: a })),
                                    u < n.length - 1 &&
                                        o().createElement('div', { className: 'Categories_divider_66' }),
                                ),
                            ),
                        );
                    }),
                    $u = ['children'];
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const Yu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, $u);
                    return o().createElement(
                        Ze,
                        qu(
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
                };
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const Qu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const r = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(nu, u, r);
                        const n = u.contentId,
                            a = u.args,
                            s = null == a ? void 0 : a.contentId;
                        return n || s
                            ? o().createElement(Ze, Ku({}, u, { contentId: n || s }), r)
                            : o().createElement(Yu, u, r);
                    },
                    Zu = ['children', 'tooltipType', 'wrap'],
                    Ju = ['contentId'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                function ut(e, u) {
                    if (null == e) return {};
                    var t,
                        r,
                        n = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                let tt;
                !(function (e) {
                    (e.Base = 'base'), (e.Backport = 'backport'), (e.Simple = 'simple');
                })(tt || (tt = {}));
                const rt = (e) => {
                        let u = e.children,
                            t = e.tooltipType,
                            r = e.wrap,
                            n = void 0 !== r && r,
                            a = ut(e, Zu);
                        if (!a) return u;
                        const s = n && (a.isEnabled || void 0 === a.isEnabled) ? o().createElement('div', null, u) : u,
                            i = a.contentId,
                            l = ut(a, Ju);
                        switch (t) {
                            case tt.Base:
                                return (
                                    !i && console.error('`contentId` field is required for a base Tooltip'),
                                    i ? o().createElement(Ze, et({}, l, { contentId: i }), s) : s
                                );
                            case tt.Simple:
                                return o().createElement(nu, l, s);
                            case tt.Backport:
                                return o().createElement(Yu, l, s);
                            default:
                                return o().createElement(Qu, { tooltipArgs: a }, s);
                        }
                    },
                    nt = 'default',
                    at = 'search',
                    ot = 'email',
                    st = 'password',
                    it = 'normal',
                    lt = 'medium',
                    ct = {
                        [nt]: '',
                        [ot]: R.strings.common.input.placeholder.email(),
                        [at]: R.strings.common.input.placeholder.search(),
                        [st]: R.strings.common.input.placeholder.password(),
                    },
                    _t = { [nt]: 'text', [ot]: 'text', [at]: 'text', [st]: 'password' },
                    Et = { [nt]: '', [ot]: 'Invalid email', [at]: '', [st]: '' },
                    dt = R.images.gui.maps.icons.components.input;
                const mt = {
                        base: 'InputControl_base_68',
                        base__focused: 'InputControl_base__focused_aa',
                        base__alert: 'InputControl_base__alert_22',
                        base__error: 'InputControl_base__error_ff',
                        base__done: 'InputControl_base__done_a7',
                        base__disabled: 'InputControl_base__disabled_f8',
                        input: 'InputControl_input_93',
                        base__small: 'InputControl_base__small_85',
                        base__medium: 'InputControl_base__medium_a2',
                        base__large: 'InputControl_base__large_32',
                        base__withIcon: 'InputControl_base__withIcon_9e',
                        input__search: 'InputControl_input__search_85',
                        disabled: 'InputControl_disabled_78',
                        placeholder: 'InputControl_placeholder_e3',
                        placeholder__search: 'InputControl_placeholder__search_d5',
                        icon: 'InputControl_icon_13',
                        icon__search: 'InputControl_icon__search_57',
                        clear: 'InputControl_clear_bb',
                    },
                    At = o().memo(
                        ({
                            componentId: e,
                            value: u = '',
                            type: t = 'default',
                            size: r = 'medium',
                            variant: n = 'normal',
                            placeholder: s = '',
                            highlighted: i,
                            withClear: l,
                            selectOnFocus: c = !0,
                            maxLength: _,
                            iconSource: E,
                            classMix: d,
                            onMouseEnter: m,
                            onMouseLeave: A,
                            onMouseDown: F,
                            onMouseUp: D,
                            onClick: C,
                            onChange: B,
                            onClear: g,
                            onFocus: h,
                            onBlur: v,
                        }) => {
                            const b = (0, a.useState)(!1),
                                f = b[0],
                                w = b[1],
                                x = (0, a.useRef)(null),
                                S = (0, a.useRef)({ mouseOver: !1, mouseDown: !1 }),
                                y = 'disabled' !== n,
                                T = (0, a.useCallback)(
                                    (e) => {
                                        y && (w(!0), h && h(e));
                                    },
                                    [y, h],
                                ),
                                M = (0, a.useCallback)(
                                    (e) => {
                                        y && !S.current.mouseOver && (w(!1), v && v(e));
                                    },
                                    [y, v],
                                );
                            (0, a.useEffect)(() => {
                                y && f && c && x.current && x.current.select();
                            }, [c, f, y]);
                            const R = (0, a.useCallback)(
                                    (e) => {
                                        y && B && B(e.target.value);
                                    },
                                    [y, B],
                                ),
                                L = (0, a.useCallback)(
                                    (e) => {
                                        y && ((S.current.mouseOver = !0), m && m(e));
                                    },
                                    [y, m],
                                ),
                                N = (0, a.useCallback)(
                                    (e) => {
                                        y &&
                                            x.current &&
                                            (S.current.mouseDown && x.current.focus(),
                                            (S.current.mouseOver = !1),
                                            A && A(e));
                                    },
                                    [y, A],
                                ),
                                O = (0, a.useCallback)(
                                    (e) => {
                                        y && ((S.current.mouseDown = !0), F && F(e));
                                    },
                                    [y, F],
                                ),
                                k = (0, a.useCallback)(
                                    (e) => {
                                        y && ((S.current.mouseDown = !1), D && D(e));
                                    },
                                    [y, D],
                                ),
                                P = (0, a.useCallback)(
                                    (e) => {
                                        y &&
                                            x.current &&
                                            ((!f || (f && e.target !== x.current)) && x.current.focus(), C && C(e));
                                    },
                                    [f, y, C],
                                ),
                                I = s || ct[t],
                                H = Boolean(E),
                                U = p()(
                                    mt.base,
                                    mt[`base__${r}`],
                                    i && mt[`base__${n}`],
                                    f && mt.base__focused,
                                    H && mt.base__withIcon,
                                    d,
                                ),
                                G = (0, a.useMemo)(() => (E ? { backgroundImage: `url(${E})` } : null), [E]),
                                z = p()(mt.input, mt[`input__${t}`]),
                                X = p()(mt.icon, mt[`icon__${t}`]),
                                j = p()(mt.placeholder, mt[`placeholder__${t}`]);
                            return o().createElement(
                                'div',
                                {
                                    id: e,
                                    className: U,
                                    onMouseEnter: L,
                                    onMouseDown: O,
                                    onMouseUp: k,
                                    onMouseLeave: N,
                                    onClick: P,
                                },
                                !y && o().createElement('div', { className: mt.disabled }),
                                G && o().createElement('div', { style: G, className: X }),
                                o().createElement('input', {
                                    ref: x,
                                    className: z,
                                    type: _t[t],
                                    value: u,
                                    onChange: R,
                                    disabled: !y,
                                    onFocus: T,
                                    onBlur: M,
                                    maxLength: _,
                                }),
                                I && !u && !f && o().createElement('div', { className: j }, I),
                                l &&
                                    o().createElement('div', {
                                        className: mt.clear,
                                        onClick: (e) => {
                                            W.playClick(), g && g(e);
                                        },
                                        onMouseEnter: W.playHighlight,
                                    }),
                            );
                        },
                    ),
                    Ft = {
                        base: 'HelperMessage_base_1e',
                        base__shown: 'HelperMessage_base__shown_ab',
                        icon: 'HelperMessage_icon_10',
                        message: 'HelperMessage_message_f4',
                        message__alert: 'HelperMessage_message__alert_b5',
                        message__error: 'HelperMessage_message__error_45',
                        message__done: 'HelperMessage_message__done_2b',
                    },
                    Dt = ({ variant: e, show: u = !0, helperText: t, helperIcon: r, classMix: n }) => {
                        const s = (0, a.useMemo)(() => {
                                const u =
                                    r ||
                                    (function (e) {
                                        return 'alert' === e ? R.images.gui.maps.icons.library.alertIcon() : '';
                                    })(e);
                                return u && { backgroundImage: `url(${u})` };
                            }, [r, e]),
                            i = p()(Ft.base, u && Ft.base__shown),
                            l = p()(Ft.message, Ft[`message__${e}`], n);
                        return o().createElement(
                            'div',
                            { className: i },
                            s && o().createElement('div', { className: Ft.icon, style: s }),
                            o().createElement('div', { className: l }, t),
                        );
                    },
                    Ct = {
                        base: 'Input_base_cd',
                        base__small: 'Input_base__small_c7',
                        base__medium: 'Input_base__medium_1f',
                        base__large: 'Input_base__large_11',
                        helper: 'Input_helper_ea',
                    },
                    Bt = [
                        'componentId',
                        'type',
                        'variant',
                        'size',
                        'value',
                        'tooltipArgs',
                        'helperText',
                        'isValidated',
                        'showHelper',
                        'error',
                        'options',
                        'onFocus',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onChange',
                        'classMix',
                        'controlClassMix',
                        'helperClassMix',
                    ];
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                const pt = {
                        debounceTime: 200,
                        performChangeValidation: !0,
                        selectOnFocus: !0,
                        withTypeIcon: !0,
                        disableHighlightOnFocus: !0,
                    },
                    ht = (e) => {
                        let u = e.componentId,
                            t = e.type,
                            r = void 0 === t ? nt : t,
                            n = e.variant,
                            s = void 0 === n ? it : n,
                            i = e.size,
                            l = void 0 === i ? lt : i,
                            c = e.value,
                            _ = e.tooltipArgs,
                            E = e.helperText,
                            d = void 0 === E ? '' : E,
                            m = e.isValidated,
                            A = void 0 === m || m,
                            F = e.showHelper,
                            D = void 0 === F || F,
                            C = e.error,
                            B = e.options,
                            g = e.onFocus,
                            h = e.onMouseEnter,
                            v = e.onMouseLeave,
                            b = e.onMouseUp,
                            f = e.onMouseDown,
                            w = e.onChange,
                            x = e.classMix,
                            S = e.controlClassMix,
                            y = e.helperClassMix,
                            T = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Bt);
                        const M = (0, a.useState)(c),
                            R = M[0],
                            L = M[1],
                            N = (0, a.useState)(A),
                            O = N[0],
                            k = N[1],
                            P = (0, a.useMemo)(() => Object.assign({}, pt, B), [B]),
                            I = (0, a.useRef)({ debounceTimeout: 0, isChangeHandled: !0, value: c, type: r }),
                            H = (0, a.useCallback)((e) => {
                                e !== I.current.value &&
                                    ((I.current.value = e), (I.current.isChangeHandled = !1), L(e));
                            }, []),
                            W = (0, a.useCallback)(
                                (e) => {
                                    let u = !0;
                                    P.performChangeValidation &&
                                        (u = P.changesValidator
                                            ? P.changesValidator(e)
                                            : (function (e, u) {
                                                  return (
                                                      u !== ot ||
                                                      (function (e) {
                                                          const u = e.match(
                                                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                                          );
                                                          return Boolean(u);
                                                      })(e)
                                                  );
                                              })(e, I.current.type)),
                                        w && w(e, u);
                                },
                                [w, P],
                            ),
                            U = (0, a.useCallback)(() => {
                                I.current.debounceTimeout &&
                                    (window.clearTimeout(I.current.debounceTimeout), (I.current.debounceTimeout = 0));
                            }, []),
                            G = (0, a.useCallback)(() => H(''), [H]);
                        (0, a.useEffect)(() => () => U(), [U]);
                        const z = (0, a.useCallback)(
                            (e) => {
                                U(),
                                    P.debounceTime
                                        ? (I.current.debounceTimeout = window.setTimeout(() => {
                                              W(e);
                                          }, P.debounceTime))
                                        : W(e);
                            },
                            [W, U, P.debounceTime],
                        );
                        (0, a.useEffect)(() => {
                            I.current.isChangeHandled ||
                                I.current.value !== R ||
                                (z(I.current.value), (I.current.isChangeHandled = !0));
                        }, [R, z]),
                            (0, a.useEffect)(() => {
                                I.current.isChangeHandled && c !== I.current.value && ((I.current.value = c), L(c)),
                                    (I.current.type = r);
                            }, [c, r]),
                            (0, a.useEffect)(() => {
                                k(A);
                            }, [A, s]);
                        const X = (0, a.useCallback)((e) => h && h(e), [h]),
                            j = (0, a.useCallback)(
                                (e) => {
                                    P.disableHighlightOnFocus && O && k(!1), g && g(e);
                                },
                                [O, g, P.disableHighlightOnFocus],
                            ),
                            V = (0, a.useCallback)((e) => b && b(e), [b]),
                            $ = (0, a.useCallback)((e) => f && f(e), [f]),
                            q = (0, a.useCallback)((e) => v && v(e), [v]),
                            Y = (0, a.useMemo)(
                                () =>
                                    P.withTypeIcon
                                        ? (function (e, u) {
                                              return e === at ? dt.$dyn(`search_${u}`) : '';
                                          })(r, l)
                                        : '',
                                [r, l, P.withTypeIcon],
                            ),
                            K = d || Et[r],
                            Q = Boolean(R),
                            Z = C ? 'error' : s,
                            J = Boolean(C) || O,
                            ee = (0, a.useMemo)(
                                () => ('boolean' == typeof P.withClear ? Q && P.withClear : Q && r === at),
                                [r, Q, P],
                            ),
                            ue = p()(Ct.base, Ct[`base__${l}`], Ct[`base__${s}`], x);
                        return o().createElement(
                            'div',
                            { id: u, className: ue, onMouseEnter: X, onMouseDown: $, onMouseUp: V, onMouseLeave: q },
                            o().createElement(
                                rt,
                                gt({ wrap: !0 }, _),
                                o().createElement(
                                    At,
                                    gt(
                                        {
                                            componentId: u ? `${u}-inputControl` : void 0,
                                            iconSource: Y,
                                            size: l,
                                            type: r,
                                            variant: Z,
                                            value: R,
                                            withClear: ee,
                                            highlighted: J,
                                            selectOnFocus: P.selectOnFocus,
                                            maxLength: P.maxLength,
                                            classMix: S,
                                            onFocus: j,
                                            onChange: H,
                                            onClear: G,
                                        },
                                        T,
                                    ),
                                ),
                            ),
                            K &&
                                o().createElement(
                                    'div',
                                    { className: Ct.helper },
                                    o().createElement(Dt, {
                                        variant: Z,
                                        show: D && (P.isPermanentHelper || J),
                                        helperText: C || K,
                                        helperIcon: P.helperIconSource,
                                        classMix: y,
                                    }),
                                ),
                        );
                    },
                    vt = 'SearchDetails_shownCount_8d',
                    bt = 'SearchDetails_shownCount__zero_a1',
                    ft = (0, a.memo)(
                        ({ itemsAvailable: e, filteredRewardsCount: u, isFilterApplied: t, resetFilter: r }) =>
                            o().createElement(
                                'div',
                                { className: 'SearchDetails_base_6d' },
                                o().createElement(je, { className: 'SearchDetails_shown_24', text: Or.shownCount() }),
                                o().createElement(
                                    'div',
                                    { className: 'SearchDetails_searchResults_c3' },
                                    t
                                        ? o().createElement(
                                              o().Fragment,
                                              null,
                                              o().createElement(je, { text: String(u), className: p()(vt, !u && bt) }),
                                              o().createElement(je, {
                                                  text: Or.shownCountDivider(),
                                                  format: { binding: { count: e } },
                                                  className: 'SearchDetails_shownCount__divider_68',
                                              }),
                                          )
                                        : o().createElement(je, { text: String(e), className: p()(vt, !u && bt) }),
                                    o().createElement('div', {
                                        className: p()('SearchDetails_glow_96', t && 'SearchDetails_glow__shown_19'),
                                    }),
                                ),
                                t &&
                                    o().createElement(
                                        nu,
                                        {
                                            header: Or.tooltip.clearFilter.header(),
                                            body: Or.tooltip.clearFilter.body(),
                                        },
                                        o().createElement(
                                            'div',
                                            {
                                                className: 'SearchDetails_button_c4',
                                                onClick: () => {
                                                    W.playClick(), r();
                                                },
                                                onMouseEnter: W.playHighlight,
                                            },
                                            o().createElement('div', { className: 'SearchDetails_buttonGradient_52' }),
                                            o().createElement('div', { className: 'SearchDetails_buttonIcon_4a' }),
                                        ),
                                    ),
                            ),
                    ),
                    wt = (0, Q.Pi)(() => {
                        const e = oe(),
                            u = e.model,
                            t = e.controls,
                            r = u.filterQuery.get(),
                            n = u.totalRewardsCount.get(),
                            a = u.computes.isFilterApplied(),
                            s = u.computes.selectableRewardsLength();
                        return o().createElement(
                            'div',
                            { className: 'Filter_base_d0' },
                            o().createElement(
                                'div',
                                { className: 'Filter_wrapper_d7' },
                                o().createElement(ft, {
                                    itemsAvailable: n,
                                    isFilterApplied: a,
                                    filteredRewardsCount: s,
                                    resetFilter: t.resetFilter,
                                }),
                                o().createElement(
                                    'div',
                                    { className: 'Filter_controls_91' },
                                    o().createElement(ht, {
                                        value: r,
                                        type: at,
                                        placeholder: Or.vehicleNameSearch(),
                                        classMix: 'Filter_input_90',
                                        onChange: t.setFilterQuery,
                                    }),
                                    o().createElement(
                                        _u,
                                        {
                                            contentId:
                                                R.views.new_year.lobby.new_year.popovers.VehicleFilterPopover('resId'),
                                            direction: su.Bottom,
                                        },
                                        o().createElement(
                                            _e,
                                            { mixClass: 'Filter_button_73' },
                                            o().createElement('div', { className: 'Filter_buttonIcon_9c' }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    xt = (0, a.memo)(({ className: e }) =>
                        o().createElement(
                            'div',
                            { className: p()('Title_base_93', e) },
                            o().createElement(je, { className: 'Title_title_e2', text: Or.title() }),
                            o().createElement(je, { className: 'Title_additionTitle_57', text: Or.subTitle() }),
                        ),
                    ),
                    St = (0, a.memo)(() =>
                        o().createElement(
                            'div',
                            { className: 'Header_base_be' },
                            o().createElement(xt, { className: 'Header_title_f5' }),
                            o().createElement(Vu, { className: 'Header_categories_1f' }),
                            o().createElement(wt, null),
                        ),
                    ),
                    yt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Tt = [];
                function Mt(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Tt)
                    );
                }
                function Rt(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, o),
                        n,
                    ];
                }
                function Lt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                var Nt = t(7030);
                let Ot;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ot || (Ot = {}));
                const kt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Pt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return yt(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? kt : c,
                                E = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                m = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Lt(e, u);
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
                                                                              ? Lt(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
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
                                                    })(u(e).values());
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    o = 0;
                                                function s() {
                                                    n && clearTimeout(n);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - o;
                                                    function _() {
                                                        (o = Date.now()), t.apply(l, i);
                                                    }
                                                    a ||
                                                        (r && !n && _(),
                                                        s(),
                                                        void 0 === r && c > e
                                                            ? _()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        s(), (a = !0);
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Nt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), m.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return s(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            C.start({
                                                scrollPosition: s(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: _.animationConfig,
                                                from: { scrollPosition: s(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, _.animationConfig, D.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, _.step),
                                            a = B(u, e, r);
                                        g(a);
                                    },
                                    [g, B, _.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(r(e)),
                                            E.current && m.trigger('mouseWheel', e, D.scrollPosition, u(E.current));
                                    },
                                    [D.scrollPosition, p, m],
                                ),
                                v = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        au(() => {
                                            const e = E.current;
                                            e &&
                                                (g(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                b = Mt(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', v),
                                        () => {
                                            window.removeEventListener('resize', v);
                                        }
                                    ),
                                    [v],
                                ),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                        getContainerSize: () => (E.current ? e(E.current) : void 0),
                                        getBounds: () =>
                                            E.current
                                                ? u(E.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: _.step.clampedArrowStepTimeout,
                                        clampPosition: s,
                                        handleMouseWheel: h,
                                        applyScroll: g,
                                        applyStepTo: p,
                                        contentRef: E,
                                        wrapperRef: d,
                                        scrollPosition: C,
                                        animationScroll: D,
                                        recalculateContent: b,
                                        events: { on: m.on, off: m.off },
                                    }),
                                    [D.scrollPosition, g, p, m.off, m.on, b, h, C, _.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    It = Pt({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ot.Next : Ot.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ht = 'HorizontalBar_base__nonActive_82',
                    Wt = 'disable',
                    Ut = { pending: !1, offset: 0 },
                    Gt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    zt = () => {},
                    Xt = (e, u) => Math.max(20, e.offsetWidth * u),
                    jt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Gt, onDrag: r = zt }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, a.useState)(Ut),
                            d = E[0],
                            m = E[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    m(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    _ = yt(0, 1, a / (n - r)),
                                    E = (u.offsetWidth - Xt(u, o)) * _;
                                (t.style.transform = `translateX(${0 | E}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Wt), void i.current.classList.remove(Wt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Wt), void i.current.classList.add(Wt);
                                            var u, t;
                                            s.current.classList.remove(Wt), i.current.classList.remove(Wt);
                                        }
                                    })(E);
                            },
                            D = Mt(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const o = Math.min(1, r / a);
                                    (u.style.width = `${Xt(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === o ? n.current.classList.add(Ht) : n.current.classList.remove(Ht));
                                })(),
                                    F();
                            });
                        (0, a.useEffect)(() => au(D)),
                            (0, a.useEffect)(
                                () =>
                                    au(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = zt;
                                        const r = () => {
                                            t(), (t = au(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            o = c.current;
                                        if (!n || !a || !o) return;
                                        const s = u.screenX - d.offset - a.getBoundingClientRect().x,
                                            i = (s / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Ut);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, d.offset, d.pending, r, A]);
                        const C = Rt((u) => e.applyStepTo(u), _, [e]),
                            B = C[0],
                            g = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const h = (e) => {
                            e.target.classList.contains(Wt) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Wt) || 0 !== e.button || (H('play'), B(Ot.Next));
                                },
                                onMouseUp: g,
                                ref: s,
                                onMouseEnter: h,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? Ot.Prev : Ot.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                o().createElement('div', { ref: c, className: p()('HorizontalBar_thumb_fd', u.thumb) }),
                                o().createElement('div', { className: p()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Wt) || 0 !== e.button || (H('play'), B(Ot.Prev));
                                },
                                onMouseUp: g,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Vt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    $t = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(Vt.base, e.base) });
                            }, [r]),
                            E = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(Vt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(Vt.defaultScrollArea, n) },
                                o().createElement(qt, { className: i, api: E, classNames: s }, e),
                            ),
                            o().createElement(jt, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    qt = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, a.useEffect)(() => au(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Vt.base, u), style: n },
                            o().createElement(
                                'div',
                                {
                                    className: p()(Vt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: p()(Vt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (qt.Bar = jt),
                    (qt.Default = $t),
                    (qt.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => au(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(Vt.base, u) },
                            o().createElement(
                                'div',
                                { className: p()(Vt.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                o().createElement(
                                    'div',
                                    { className: p()(Vt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const Yt = Pt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ot.Next : Ot.Prev),
                    }),
                    Kt = 'VerticalBar_base__nonActive_42',
                    Qt = 'disable',
                    Zt = () => {},
                    Jt = { pending: !1, offset: 0 },
                    er = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    ur = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    tr = (e, u) => Math.max(20, e.offsetHeight * u),
                    rr = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = er, onDrag: r = Zt }) => {
                        const n = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, a.useState)(Jt),
                            d = E[0],
                            m = E[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    m(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            F = Mt(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const o = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${tr(t, o)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === o ? n.current.classList.add(Kt) : n.current.classList.remove(Kt)),
                                    o
                                );
                            }),
                            D = Mt(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, r / n),
                                    _ = yt(0, 1, a / (n - r)),
                                    E = (u.offsetHeight - tr(u, o)) * _;
                                (t.style.transform = `translateY(${0 | E}px)`),
                                    ((e) => {
                                        if (s.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Qt), void i.current.classList.remove(Qt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Qt), void i.current.classList.add(Qt);
                                            var u, t;
                                            s.current.classList.remove(Qt), i.current.classList.remove(Qt);
                                        }
                                    })(E);
                            }),
                            C = Mt(() => {
                                ur(e, () => {
                                    F(), D();
                                });
                            });
                        (0, a.useEffect)(() => au(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    ur(e, () => {
                                        D();
                                    });
                                };
                                let t = Zt;
                                const r = () => {
                                    t(), (t = au(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        ur(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                o = e.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const s = u.screenY - d.offset - n.getBoundingClientRect().y,
                                                i = (s / n.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Jt);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, d.offset, d.pending, r, A]);
                        const B = Rt((u) => e.applyStepTo(u), _, [e]),
                            g = B[0],
                            h = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Qt) || H('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: p()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: p()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qt) || 0 !== e.button || (H('play'), g(Ot.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: p()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (H('play'),
                                            u.target === r
                                                ? A({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y })
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? Ot.Prev : Ot.Next),
                                                  c.current &&
                                                      ur(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: c, className: u.thumb }),
                                o().createElement('div', { className: p()('VerticalBar_rail_43', u.rail) }),
                            ),
                            o().createElement('div', {
                                className: p()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Qt) || 0 !== e.button || (H('play'), g(Ot.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    nr = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ar = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: p()(nr.base, e.base) });
                            }, [r]),
                            E = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: p()(nr.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(nr.area, n) },
                                o().createElement(or, { className: s, classNames: i, api: E }, e),
                            ),
                            o().createElement(rr, { getStepByRailClick: l, api: u, onDrag: c, classNames: _ }),
                        );
                    },
                    or = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => au(r.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: p()(nr.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: p()(nr.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                or.Default = ar;
                const sr = { Vertical: n, Horizontal: r },
                    ir = (0, Q.Pi)(({ className: e, onFilterReset: u }) => {
                        const t = oe().model.computes.isFilterApplied(),
                            r = t ? Or.searchEmptyWarning() : Or.noItemsText();
                        return o().createElement(
                            'div',
                            { className: p()('NoFilteredVehicles_base_50', e) },
                            o().createElement(
                                'div',
                                { className: 'NoFilteredVehicles_info_6e' },
                                o().createElement('div', { className: 'NoFilteredVehicles_alertIcon_d4' }),
                                o().createElement(je, { text: r, className: 'NoFilteredVehicles_text_3d' }),
                            ),
                            t &&
                                o().createElement(
                                    _e,
                                    {
                                        size: le.medium,
                                        mixClass: 'NoFilteredVehicles_button_78',
                                        type: ie.secondary,
                                        onClick: u,
                                    },
                                    o().createElement(je, { text: Or.clearFilter() }),
                                ),
                        );
                    });
                let lr, cr, _r;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(lr || (lr = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(cr || (cr = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(_r || (_r = {}));
                const Er = {
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
                    dr = ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: r,
                        isEnough: n,
                        value: a,
                        discountValue: s,
                        showPlus: i,
                        stockBackgroundName: l = _r.Red,
                    }) => {
                        const c = p()(Er.value, Er[`value__${r}`], !n && Er.value__notEnough),
                            _ = p()(Er.icon, Er[`icon__${r}-${t}`]),
                            E = p()(Er.stock, s && Er.stock__indent, u && Er.stock__interactive),
                            d = i && a > 0 && '+',
                            m = p()(Er.base, Er[`base__${t}`]);
                        return o().createElement(
                            'span',
                            { className: m },
                            o().createElement(
                                'span',
                                { className: c },
                                d,
                                o().createElement(xu, { value: a, format: r === cr.gold ? 'gold' : 'integral' }),
                            ),
                            o().createElement('span', { className: _ }),
                            e &&
                                o().createElement(
                                    'span',
                                    { className: E },
                                    o().createElement('span', {
                                        className: Er.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                    }),
                                    Boolean(s) && s,
                                ),
                        );
                    };
                dr.defaultProps = { isEnough: !0 };
                const mr = o().memo(dr),
                    Ar = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Fr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Dr = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    Cr = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                    },
                    Br = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    gr = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    pr = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    hr = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => u || {}, [u]);
                        let s = Br.exec(e),
                            i = e,
                            l = 0;
                        for (; s; ) {
                            const t = s[0],
                                a = gr.exec(t),
                                c = pr.exec(t),
                                _ = s[1];
                            if (a && c) {
                                const e = a[0],
                                    s = e + l++ + e;
                                (i = i.replace(t, `%(${s})`)),
                                    (n[s] = Cr[e]
                                        ? o().createElement(
                                              'span',
                                              { className: Cr[e] },
                                              o().createElement(Le, { text: _, binding: u }),
                                          )
                                        : o().createElement(
                                              'span',
                                              { style: r(e) },
                                              o().createElement(Le, { text: _, binding: u }),
                                          ));
                            }
                            s = Br.exec(e);
                        }
                        return o().createElement(Le, { text: i, classMix: t, binding: n });
                    }),
                    vr = (0, a.memo)(({ vehicle: e, price: u, className: t }) => {
                        return o().createElement(
                            'div',
                            { className: t },
                            o().createElement(
                                'div',
                                { className: 'Discount_contentTitle_af' },
                                o().createElement(hr, {
                                    text: Or.vehicleName(),
                                    binding: {
                                        type: Or.vehicleType.$dyn(xe(e.type)),
                                        level:
                                            ((r = e.level),
                                            Dr
                                                ? `${r}`
                                                : (function (e) {
                                                      let u = '';
                                                      for (let t = Fr.length - 1; t >= 0; t--)
                                                          for (; e >= Fr[t]; ) (u += Ar[t]), (e -= Fr[t]);
                                                      return u;
                                                  })(r)),
                                        name: e.userName,
                                    },
                                    classMix: 'Discount_vehicleName_b2',
                                }),
                            ),
                            o().createElement(
                                'div',
                                { className: 'Discount_columns_91' },
                                o().createElement(
                                    'div',
                                    { className: 'Discount_column_6a' },
                                    o().createElement(
                                        'div',
                                        { className: 'Discount_customCurrency_13' },
                                        o().createElement(mr, {
                                            value: u.new,
                                            size: lr.small,
                                            type: cr.credits,
                                            isEnough: !0,
                                            isDiscount: !0,
                                        }),
                                    ),
                                    o().createElement(
                                        'div',
                                        { className: 'Discount_oldData_99' },
                                        o().createElement(xu, { value: u.old }),
                                        o().createElement('span', { className: 'Discount_strikethrough_0c' }),
                                    ),
                                ),
                            ),
                        );
                        var r;
                    }),
                    br = (0, a.memo)(({ children: e, isSelected: u, index: t, classNames: r, selectReward: n }) =>
                        o().createElement(
                            'div',
                            {
                                className: p()('Card_base_66', r, u && 'Card_base__active_42'),
                                onClick: () => {
                                    W.playClick(), n(t);
                                },
                                onMouseEnter: W.playHighlight,
                            },
                            e,
                        ),
                    ),
                    fr = (e) => {
                        switch (!0) {
                            case e >= b.ExtraLarge:
                                return 6;
                            case e >= b.Medium:
                                return 5;
                            case e >= b.Small:
                                return 4;
                            default:
                                return 3;
                        }
                    },
                    wr = (0, a.memo)(
                        ({
                            children: e,
                            tooltipId: u,
                            tooltipContentId: t,
                            vehicle: r,
                            isSelected: n,
                            index: a,
                            selectReward: s,
                        }) => {
                            const i = x().mediaSize,
                                l = R.images.gui.maps.shop.vehicles.c_360x270.$dyn(xe(r.name)),
                                c = R.images.gui.maps.shop.nations.$dyn(`flag_${r.nation}`),
                                _ = (a + 1) % fr(i) == 0;
                            return o().createElement(
                                Qu,
                                { tooltipArgs: Su({ tooltipId: u }, Number(t), { ignoreShowDelay: !0 }) },
                                o().createElement(
                                    br,
                                    {
                                        isSelected: n,
                                        index: a,
                                        selectReward: s,
                                        classNames: p()(
                                            'VehicleReward_card_6f',
                                            _ && 'VehicleReward_card__lastInRow_77',
                                        ),
                                    },
                                    o().createElement('div', {
                                        className: 'VehicleReward_nationImage_3a',
                                        style: { backgroundImage: `url(${c})` },
                                    }),
                                    o().createElement('div', {
                                        className: 'VehicleReward_vehicleImage_5e',
                                        style: { backgroundImage: `url(${l})` },
                                    }),
                                    e,
                                ),
                            );
                        },
                    ),
                    xr = (e) => ({ old: e.oldPrice, new: e.newPrice }),
                    Sr = (0, a.memo)(({ className: e, rewards: u, selectReward: t }) =>
                        o().createElement(
                            'div',
                            { className: p()('Cards_base_fc', e) },
                            u.map((e) => {
                                const u = {
                                    name: (r = e).vehicleName,
                                    type: r.vehicleType,
                                    nation: r.nation,
                                    level: r.vehicleLvl,
                                    userName: r.userName,
                                };
                                var r;
                                return o().createElement(
                                    wr,
                                    {
                                        key: u.name,
                                        tooltipId: e.tooltipId,
                                        tooltipContentId: e.tooltipContentId,
                                        vehicle: u,
                                        isSelected: e.isSelected,
                                        index: e.rewardIndex,
                                        selectReward: t,
                                    },
                                    o().createElement(vr, { vehicle: u, price: xr(e), className: 'Cards_discount_3b' }),
                                );
                            }),
                        ),
                    ),
                    yr = 'ScrollableCards_shadow_95',
                    Tr = 'ScrollableCards_shadow__visible_b1';
                let Mr;
                !(function (e) {
                    (e[(e.WithoutScroll = 0)] = 'WithoutScroll'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End');
                })(Mr || (Mr = {}));
                const Rr = [Mr.Start, Mr.WithoutScroll],
                    Lr = [Mr.End, Mr.WithoutScroll],
                    Nr = (0, Q.Pi)(() => {
                        const e = oe(),
                            u = e.model,
                            t = e.controls,
                            r = x(),
                            n = r.remScreenWidth,
                            s = r.remScreenHeight,
                            l = r.mediaSize,
                            c = (() => {
                                const e = (0, a.useState)(i.O.view.getScale()),
                                    u = e[0],
                                    t = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            t(i.O.view.getScale());
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
                            })(),
                            _ = Yt(),
                            E = u.computes.selectableRewards(),
                            d = u.computes.getSelectedVehicle(),
                            m = u.computes.selectedCategory().variadicID,
                            A = (0, a.useState)(m),
                            F = A[0],
                            D = A[1],
                            C = E.length,
                            B = ((e, u = []) => {
                                const t = e.animationScroll,
                                    r = e.getContainerSize,
                                    n = e.getWrapperSize,
                                    o = e.events,
                                    s = (0, a.useState)(Mr.WithoutScroll),
                                    i = s[0],
                                    l = s[1],
                                    c = (0, a.useCallback)(() => {
                                        const e = t.scrollPosition.get(),
                                            u = r(),
                                            a = n();
                                        l(
                                            !u || !a || u <= a
                                                ? Mr.WithoutScroll
                                                : e <= 10
                                                  ? Mr.Start
                                                  : e >= u - a - 10
                                                    ? Mr.End
                                                    : Mr.Between,
                                        );
                                    }, [t.scrollPosition, r, n]);
                                return (
                                    (0, a.useEffect)(() => (o.on('change', c), () => o.off('change', c)), [o, c]),
                                    (0, a.useEffect)(() => au(c), [c, ...u]),
                                    i
                                );
                            })(_, [C, n, s]),
                            g = !Rr.includes(B),
                            h = !Lr.includes(B),
                            v = (0, a.useCallback)(() => {
                                if (d.length) {
                                    const e = d[0].rewardIndex + 1,
                                        u = fr(l),
                                        t = Math.ceil((e + 1) / u) - 1;
                                    _.applyScroll(264 * t * c);
                                }
                            }, [l, c, d, _]);
                        return (
                            (0, a.useEffect)(
                                () =>
                                    j(() => {
                                        m !== F ? (D(m), d.length ? v() : _.applyScroll(0)) : d.length && v();
                                    }, 100),
                                [m, _, d, v, F],
                            ),
                            o().createElement(
                                'div',
                                { className: 'ScrollableCards_base_5e' },
                                o().createElement('div', {
                                    className: p()(yr, 'ScrollableCards_shadow__top_4d', g && Tr),
                                }),
                                0 === C
                                    ? o().createElement(ir, {
                                          className: 'ScrollableCards_noFilteredVehicles_de',
                                          onFilterReset: t.resetFilter,
                                      })
                                    : o().createElement(
                                          o().Fragment,
                                          null,
                                          o().createElement(
                                              sr.Vertical.Area,
                                              { api: _ },
                                              o().createElement(Sr, {
                                                  className: 'ScrollableCards_cards_a1',
                                                  rewards: E,
                                                  selectReward: t.selectReward,
                                              }),
                                          ),
                                          o().createElement(sr.Vertical.Bar, {
                                              api: _,
                                              classNames: {
                                                  base: 'ScrollableCards_scrollBar_f0',
                                                  thumb: 'ScrollableCards_barThumb_f1',
                                                  rail: 'ScrollableCards_barRail_7f',
                                              },
                                          }),
                                      ),
                                o().createElement('div', {
                                    className: p()(yr, 'ScrollableCards_shadow__bottom_36', h && Tr),
                                }),
                            )
                        );
                    }),
                    Or = R.strings.ny.selectVehicles,
                    kr = (0, Q.Pi)(() => {
                        const e = oe(),
                            u = e.controls,
                            t = e.model,
                            r = (0, a.useState)(!1),
                            n = r[0],
                            s = r[1],
                            i = t.selectedRewardsCount.get(),
                            l = !t.computes.getCategoriesLength(),
                            c = (0, a.useCallback)(() => {
                                if (!n) return s(!0), j(u.onClose, 200);
                            }, [u.onClose, n]);
                        var _, E;
                        return (
                            (_ = () => c),
                            (0, a.useEffect)(() => _, []),
                            (E = c),
                            Y(V.n.ESCAPE, E),
                            o().createElement(
                                'div',
                                { className: p()('App_base_0a', n && 'App_base__hidden_31') },
                                o().createElement('div', { className: 'App_background_27' }),
                                o().createElement(
                                    'div',
                                    { className: 'App_close_d3' },
                                    o().createElement(X, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: c,
                                    }),
                                ),
                                l
                                    ? o().createElement(qe, { closeClick: u.close })
                                    : o().createElement(
                                          'div',
                                          { className: 'App_container_f9' },
                                          o().createElement(St, null),
                                          o().createElement(
                                              'div',
                                              { className: 'App_content_db' },
                                              o().createElement(Nr, null),
                                          ),
                                          o().createElement(eu, {
                                              className: 'App_footer_e5',
                                              onCloseClick: c,
                                              onConfirmClick: u.confirm,
                                              selectedRewardsCount: i,
                                          }),
                                      ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        o().createElement(ae, null, o().createElement(k, null, o().createElement(kr, null))),
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
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, r] = deferred[i], a = !0, o = 0; o < u.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, r];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 213),
        (() => {
            var e = { 213: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [4503], () => __webpack_require__(2315));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
