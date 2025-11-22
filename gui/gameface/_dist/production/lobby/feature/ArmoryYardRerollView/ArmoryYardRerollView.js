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
            527: (e, t, u) => {
                'use strict';
                (u.r(t), u.d(t, { mouse: () => o, onResize: () => r }));
                var a = u(2472),
                    n = u(1176);
                const r = (0, a.E)('clientResized'),
                    s = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function u() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', u))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', u))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (t, u) => (
                                (t[u] = (function (t) {
                                    return (u) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${t}`,
                                            o = s[t]((e) => u([e, 'outside']));
                                        function i(e) {
                                            u([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, i),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(r, i),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
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
                                ((e.enabled = !1), a());
                            },
                            enable() {
                                ((e.enabled = !0), a());
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
            5959: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    }));
                var a = u(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
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
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => a });
            },
            2472: (e, t, u) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => a });
            },
            3138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => n });
                var a = u(5959);
                const n = { view: u(7641), client: a };
            },
            3722: (e, t, u) => {
                'use strict';
                function a(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function n(e, t, u) {
                    return `url(${a(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => n, getTextureUrl: () => a }));
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => n });
                var a = u(2472);
                const n = {
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
            7641: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => r.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => B,
                        isFocused: () => C,
                        pxToRem: () => g,
                        remToPx: () => F,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => S,
                    }));
                var a = u(3722),
                    n = u(6112),
                    r = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, a);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    w = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => r });
                const a = ['args'],
                    n = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, s, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    r = {
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
            5521: (e, t, u) => {
                'use strict';
                let a, n;
                (u.d(t, { n: () => a }),
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
                    })(n || (n = {})));
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var a = u(3138);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, u = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, u, n);
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
                            const a = this._callbacks[u];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
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
            4179: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => c,
                    Gr: () => _,
                    Z5: () => s,
                    lf: () => m,
                    B0: () => i,
                    ry: () => D,
                    Eu: () => C,
                    Sy: () => B,
                });
                class a {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    u();
                                });
                            }));
                    }
                    static get instance() {
                        return (a.__instance || (a.__instance = new a()), a.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const u = e,
                            a = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== a)),
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
                const n = a;
                var r = u(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
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
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = u(5521),
                    A = u(3138);
                const p = ['args'];
                function g(e, t, u, a, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, n);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(t, u);
                                        function s(e) {
                                            g(r, a, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(r, a, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    b = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(t, p);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    B = () => b(i.CLOSE),
                    h = (e, t) => {
                        e.keyCode === E.n.ESCAPE && t();
                    };
                var v = u(7572);
                const f = n.instance,
                    w = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => b(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => b(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            b(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, a, n = R.invalid('resId'), r) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                m = o.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(m),
                                };
                            b(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: F(d),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, B);
                        },
                        handleViewEvent: b,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        u[a] = [];
                                        for (let t = 0; t < n.length; t++) u[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[a] = e(t[a]))
                                            : (u[a] = t[a]);
                                }
                            return u;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            285: (e, t, u) => {
                'use strict';
                var a = u(6179),
                    n = u.n(a);
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
                var s = u(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, t, u) {
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
                        })(e, u),
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
                        })(t, u),
                        r = Math.min(a, n);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: a === u.extraLarge.weight,
                        largeWidth: a === u.large.weight,
                        mediumWidth: a === u.medium.weight,
                        smallWidth: a === u.small.weight,
                        extraSmallWidth: a === u.extraSmall.weight,
                        extraLargeHeight: n === u.extraLarge.weight,
                        largeHeight: n === u.large.weight,
                        mediumHeight: n === u.medium.weight,
                        smallHeight: n === u.small.weight,
                        extraSmallHeight: n === u.extraSmall.weight,
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
                    m = c.height,
                    d = Object.assign({ width: _, height: m }, l(_, m, o)),
                    E = (0, a.createContext)(d),
                    A = ['children'],
                    p = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, A);
                        const n = (0, a.useContext)(E),
                            s = n.extraLarge,
                            o = n.large,
                            i = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            _ = n.extraLargeWidth,
                            m = n.largeWidth,
                            d = n.mediumWidth,
                            p = n.smallWidth,
                            g = n.extraSmallWidth,
                            F = n.extraLargeHeight,
                            D = n.largeHeight,
                            C = n.mediumHeight,
                            b = n.smallHeight,
                            B = n.extraSmallHeight,
                            h = { extraLarge: F, large: D, medium: C, small: b, extraSmall: B };
                        if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                            if (u.extraLarge && s) return t;
                            if (u.large && o) return t;
                            if (u.medium && i) return t;
                            if (u.small && l) return t;
                            if (u.extraSmall && c) return t;
                        } else {
                            if (u.extraLargeWidth && _) return r(t, u, h);
                            if (u.largeWidth && m) return r(t, u, h);
                            if (u.mediumWidth && d) return r(t, u, h);
                            if (u.smallWidth && p) return r(t, u, h);
                            if (u.extraSmallWidth && g) return r(t, u, h);
                            if (
                                !(
                                    u.extraLargeWidth ||
                                    u.largeWidth ||
                                    u.mediumWidth ||
                                    u.smallWidth ||
                                    u.extraSmallWidth
                                )
                            ) {
                                if (u.extraLargeHeight && F) return t;
                                if (u.largeHeight && D) return t;
                                if (u.mediumHeight && C) return t;
                                if (u.smallHeight && b) return t;
                                if (u.extraSmallHeight && B) return t;
                            }
                        }
                        return null;
                    };
                ((p.defaultProps = {
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
                    (0, a.memo)(p));
                const g = (0, a.memo)(({ children: e }) => {
                    const t = (0, a.useContext)(E),
                        u = (0, a.useState)(t),
                        r = u[0],
                        i = u[1],
                        c = (0, a.useCallback)((e, t) => {
                            const u = s.O.view.pxToRem(e),
                                a = s.O.view.pxToRem(t);
                            i(Object.assign({ width: u, height: a }, l(u, a, o)));
                        }, []);
                    (((e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]));
                    const _ = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(E.Provider, { value: _ }, e);
                });
                var F = u(6483),
                    D = u.n(F),
                    C = u(926),
                    b = u.n(C);
                let B, h, v;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge'));
                })(B || (B = {})),
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
                        const e = (0, a.useContext)(E),
                            t = e.width,
                            u = e.height,
                            n = ((e) => {
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
                                        return (console.error('Unreachable media context resolution'), B.ExtraSmall);
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: t, remScreenHeight: u };
                    },
                    w = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const y = {
                        [h.ExtraSmall]: '',
                        [h.Small]: b().SMALL_WIDTH,
                        [h.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [h.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [h.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_HEIGHT,
                        [v.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [v.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    x = {
                        [B.ExtraSmall]: '',
                        [B.Small]: b().SMALL,
                        [B.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [B.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [B.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let t = e.children,
                            u = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, w);
                        const r = f(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return n().createElement('div', S({ className: D()(u, y[s], T[o], x[i]) }, a), t);
                    },
                    M = ['children'],
                    N = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, M);
                        return n().createElement(g, null, n().createElement(P, u, t));
                    };
                var k = u(493),
                    L = u.n(k),
                    I = u(9887),
                    O = u.n(I);
                const H = ['xl', 'lg', 'md', 'sm', 'xs'],
                    G = (e) => e.includes('_') && ((e) => H.includes(e))(e.split('_').at(-1)),
                    U = [B.ExtraLarge, B.Large, B.Medium, B.Small, B.ExtraSmall],
                    Q = (e, t) =>
                        Object.keys(e).reduce((u, a) => {
                            if (a in u) return u;
                            if (G(a)) {
                                const n = a.split('_').slice(0, -1).join('_');
                                if (n in u) return u;
                                const r = U.indexOf(t),
                                    s = (-1 !== r ? H.slice(r) : [])
                                        .map((e) => n + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return ((u[n] = void 0 !== o ? o : e[n]), u);
                            }
                            const n = e[a];
                            return (
                                void 0 === n ||
                                    ((e, t) => H.some((u) => void 0 !== t[`${e}_${u}`]))(a, e) ||
                                    (u[a] = n),
                                u
                            );
                        }, {}),
                    W = (e, t = Q) => {
                        const u = (
                            (e, t = Q) =>
                            (u) => {
                                const r = f().mediaSize,
                                    s = (0, a.useMemo)(() => t(u, r), [u, r]);
                                return n().createElement(e, s);
                            }
                        )(e, t);
                        return n().memo((t) =>
                            Object.keys(t).some((e) => G(e) && void 0 !== t[e])
                                ? n().createElement(u, t)
                                : n().createElement(e, t),
                        );
                    },
                    $ = {
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
                    q = [
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
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                Object.keys(O());
                const j = {
                        XL: { mt: $.mt__XL, mr: $.mr__XL, mb: $.mb__XL, ml: $.ml__XL },
                        LG: { mt: $.mt__LG, mr: $.mr__LG, mb: $.mb__LG, ml: $.ml__LG },
                        MDp: { mt: $.mt__MDp, mr: $.mr__MDp, mb: $.mb__MDp, ml: $.ml__MDp },
                        MD: { mt: $.mt__MD, mr: $.mr__MD, mb: $.mb__MD, ml: $.ml__MD },
                        SMp: { mt: $.mt__SMp, mr: $.mr__SMp, mb: $.mb__SMp, ml: $.ml__SMp },
                        SM: { mt: $.mt__SM, mr: $.mr__SM, mb: $.mb__SM, ml: $.ml__SM },
                        XS: { mt: $.mt__XS, mr: $.mr__XS, mb: $.mb__XS, ml: $.ml__XS },
                    },
                    X = (Object.keys(j), ['mt', 'mr', 'mb', 'ml']),
                    z = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Y = W((e) => {
                        let t = e.className,
                            u = e.width,
                            r = e.height,
                            s = e.m,
                            o = e.mt,
                            i = void 0 === o ? s : o,
                            l = e.mr,
                            c = void 0 === l ? s : l,
                            _ = e.mb,
                            m = void 0 === _ ? s : _,
                            d = e.ml,
                            E = void 0 === d ? s : d,
                            A = e.column,
                            p = e.row,
                            g = e.flexDirection,
                            F = void 0 === g ? (A ? 'column' : p && 'row') || void 0 : g,
                            C = e.flexStart,
                            b = e.center,
                            B = e.flexEnd,
                            h = e.spaceBetween,
                            v = e.spaceAround,
                            f = e.justifyContent,
                            w =
                                void 0 === f
                                    ? (C ? 'flex-start' : b && 'center') ||
                                      (B && 'flex-end') ||
                                      (h && 'space-between') ||
                                      (v && 'space-around') ||
                                      void 0
                                    : f,
                            S = e.alignItems,
                            y = void 0 === S ? (C ? 'flex-start' : b && 'center') || (B && 'flex-end') || void 0 : S,
                            T = e.alignSelf,
                            R = e.wrap,
                            x = e.flexWrap,
                            P = void 0 === x ? (R ? 'wrap' : void 0) : x,
                            M = e.grow,
                            N = e.shrink,
                            k = e.flex,
                            L = void 0 === k ? (M || N ? `${M ? 1 : 0} ${N ? 1 : 0} auto` : void 0) : k,
                            I = e.style,
                            O = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, q);
                        const G = (0, a.useMemo)(() => {
                                const e = { mt: i, mr: c, mb: m, ml: E },
                                    t = ((e) =>
                                        X.reduce((t, u) => {
                                            const a = e[u];
                                            return a && 'number' != typeof a ? t.concat(j[!0 === a ? 'MD' : a][u]) : t;
                                        }, []))(e),
                                    a = ((e) =>
                                        X.reduce((t, u) => {
                                            const a = e[u];
                                            return ('number' == typeof a && (t[z[u]] = a + 'rem'), t);
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, a, {
                                        width: void 0 !== u && 'number' == typeof u ? u + 'rem' : u,
                                        height: void 0 !== r && 'number' == typeof r ? r + 'rem' : r,
                                        flex: L,
                                        alignSelf: T,
                                        display: F || y ? 'flex' : void 0,
                                        flexDirection: F,
                                        flexWrap: P,
                                        justifyContent: w,
                                        alignItems: y,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [u, r, i, c, m, E, I, L, T, F, P, w, y]),
                            U = G.computedStyle,
                            Q = G.computedClassNames;
                        return n().createElement('div', V({ className: D()($.base, ...Q, t), style: U }, H), O);
                    });
                let K;
                function Z(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(K || (K = {}));
                const J = (e) => e.replace(/&nbsp;/g, ' '),
                    ee = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    te = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    ue = (e, t, u = K.left) => e.split(t).reduce(u === K.left ? ee : te, []),
                    ae = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    ne = ['zh_cn', 'zh_sg', 'zh_tw'],
                    re = ({ binding: e, text: t = '', classMix: u, alignment: r = K.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  t.split('\n').map((t, s) =>
                                      n().createElement(
                                          'div',
                                          { className: D()('FormatText_base_d0', u), key: `${t}-${s}` },
                                          ((e, t, u) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  u && e in u
                                                      ? u[e]
                                                      : ((e, t = K.left) => {
                                                            const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return ne.includes(u)
                                                                ? ae(e)
                                                                : ((e, t = K.left) => {
                                                                      let u = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = J(e);
                                                                      return (
                                                                          ue(n, /( )/, t).forEach(
                                                                              (e) => (u = u.concat(ue(e, a, K.left))),
                                                                          ),
                                                                          u
                                                                      );
                                                                  })(e, t);
                                                        })(e, t),
                                              ))(t, r, e).map((e, t) =>
                                              n().createElement(a.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var se = u(3532),
                    oe = u.n(se);
                const ie = {
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
                    le = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                Object.keys(O());
                const _e = Object.keys(oe()),
                    me = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    de = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ee = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Ae =
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
                            'heading-H56': me,
                            'heading-H36': me,
                            'heading-H28': de,
                            'heading-H24': de,
                            'heading-H24R': de,
                            'heading-H22': de,
                            'heading-H20R': de,
                            'heading-H18': de,
                            'heading-H15': Ee,
                            'heading-H14': Ee,
                            'paragraph-P24': de,
                            'paragraph-P18': de,
                            'paragraph-P16': de,
                            'paragraph-P14': Ee,
                            'paragraph-P12': Ee,
                            'paragraph-P10': Ee,
                        }),
                    pe =
                        (Object.keys(Ae),
                        (e) =>
                            e
                                ? ((e) => _e.includes(e))(e)
                                    ? { colorClassName: ie[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    ge = W((e) => {
                        let t = e.text,
                            u = e.variant,
                            r = e.className,
                            s = e.color,
                            o = e.m,
                            i = e.mt,
                            l = void 0 === i ? o : i,
                            c = e.mr,
                            _ = void 0 === c ? o : c,
                            m = e.mb,
                            d = void 0 === m ? o : m,
                            E = e.ml,
                            A = void 0 === E ? o : E,
                            p = e.style,
                            g = e.format,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, le);
                        const C = (0, a.useMemo)(() => {
                                const e = pe(s),
                                    t = e.colorClassName,
                                    u = e.colorStyle,
                                    a = void 0 === u ? {} : u;
                                return { computedStyle: Object.assign({}, p, a), colorClassName: t };
                            }, [p, s]),
                            b = C.computedStyle,
                            B = C.colorClassName;
                        return n().createElement(
                            Y,
                            ce(
                                {
                                    className: D()(ie.base, u && ie[u], B, r),
                                    style: b,
                                    mt: !0 === l ? Ae[u || 'paragraph-P16'].mt : l,
                                    mr: !0 === _ ? Ae[u || 'paragraph-P16'].mr : _,
                                    mb: !0 === d ? Ae[u || 'paragraph-P16'].mb : d,
                                    ml: !0 === A ? Ae[u || 'paragraph-P16'].ml : A,
                                },
                                F,
                            ),
                            void 0 !== g ? n().createElement(re, ce({}, g, { text: t })) : t,
                        );
                    }),
                    Fe = {
                        base: 'PhaseEnd_base_51',
                        show: 'PhaseEnd_show_2b',
                        icon: 'PhaseEnd_icon_fc',
                        text: 'PhaseEnd_text_66',
                        text__gold: 'PhaseEnd_text__gold_6e',
                        value: 'PhaseEnd_value_c1',
                        valueIcon: 'PhaseEnd_valueIcon_89',
                        value__credits: 'PhaseEnd_value__credits_1e',
                        value__gold: 'PhaseEnd_value__gold_0b',
                        value__crystal: 'PhaseEnd_value__crystal_e9',
                        value__freeXP: 'PhaseEnd_value__freeXP_bc',
                    },
                    De = R.strings.armory_yard.rerollView.footer,
                    Ce = (0, a.memo)(({ value: e, count: t }) =>
                        n().createElement(
                            'div',
                            { className: Fe.base },
                            n().createElement('div', { className: Fe.icon }),
                            n().createElement(ge, { className: Fe.text, text: De.phaseEnd.header() }),
                            e &&
                                n().createElement(ge, {
                                    text: e ? De.cashback.paid() : De.completeQuest.cashback.free(),
                                    format: {
                                        binding: {
                                            value: n().createElement(
                                                'div',
                                                { className: D()(Fe.value, Fe[`value__${e}`]) },
                                                n().createElement(ge, {
                                                    text: String(t),
                                                    className: D()(Fe.text, Fe.text__gold),
                                                }),
                                                n().createElement('div', { className: Fe.valueIcon }),
                                            ),
                                        },
                                    },
                                    className: Fe.text,
                                }),
                            n().createElement(ge, { className: Fe.text, text: De.phaseEnd.description() }),
                        ),
                    ),
                    be = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Be, he;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big'));
                })(Be || (Be = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(he || (he = {})));
                const ve = ({ size: e = Be.Default, classMix: t }) =>
                        n().createElement('div', { className: D()(be.background, be[`background__${e}`], t) }),
                    fe = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    we = ({ size: e }) => {
                        const t = D()(fe.base, fe[`base__${e}`]);
                        return n().createElement('div', { className: t });
                    },
                    Se = {
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
                    ye = (0, a.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: a, isComplete: r, withoutBounce: s }) => {
                            const o = D()(
                                    Se.base,
                                    Se[`base__${e}`],
                                    u && Se.base__disabled,
                                    r && Se.base__finished,
                                    s && Se.base__withoutBounce,
                                ),
                                i = !u && !r;
                            return n().createElement(
                                'div',
                                { className: o, style: a, ref: t },
                                n().createElement('div', { className: Se.pattern }),
                                n().createElement('div', { className: Se.gradient }),
                                i && n().createElement(we, { size: e }),
                            );
                        },
                    ),
                    Te = (e, t) => {
                        let u;
                        const a = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            ('function' == typeof u && u(), clearTimeout(a));
                        };
                    };
                let Re, xe;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(Re || (Re = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(xe || (xe = {})));
                const Pe = (e) => (e ? { left: 0 } : { right: 0 }),
                    Me = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Ne = (e) => ({ transitionDuration: `${e}ms` }),
                    ke = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const _ = o < r,
                                m = (0, a.useState)(Re.Idle),
                                d = m[0],
                                E = m[1],
                                A = d === Re.End,
                                p = d === Re.Idle,
                                g = d === Re.Grow,
                                F = d === Re.Shrink,
                                C = (0, a.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                ),
                                b = (0, a.useCallback)(
                                    (e, t) =>
                                        Te(() => {
                                            C(e);
                                        }, t),
                                    [C],
                                );
                            (0, a.useEffect)(() => {
                                if (!u)
                                    return p
                                        ? b(Re.Grow, t)
                                        : g
                                          ? b(Re.Shrink, e)
                                          : F
                                            ? b(Re.End, e)
                                            : void (A && i && i());
                            }, [b, u, A, g, p, F, i, t, e]);
                            const B = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Ne(e), Pe(_)), [_, e]),
                                h = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Ne(e), Pe(_)), [_, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Me(_, r), Ne(e)), [r, _, e]),
                                f = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, Me(_, r), Ne(e)),
                                    [r, _, o, e],
                                );
                            if (A) return null;
                            const w = D()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                _ && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return n().createElement(
                                'div',
                                { style: p ? v : f, className: w },
                                n().createElement(
                                    'div',
                                    { style: F ? h : B, className: 'ProgressBarDeltaGrow_glow_68' },
                                    n().createElement(we, { size: s }),
                                ),
                            );
                        },
                    ),
                    Le = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const _ = e < u,
                                m = (0, a.useState)(!1),
                                d = m[0],
                                E = m[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        (e === Re.Shrink && E(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                p = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(ye, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? g : p,
                                }),
                                u >= 0 &&
                                    n().createElement(ke, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ie = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: r,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                _ = (0, a.useState)(xe.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === xe.In,
                                A = m === xe.End,
                                p = m === xe.Idle,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        (d(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, a.useEffect)(() => {
                                if (p && !u)
                                    return Te(() => {
                                        g(xe.In);
                                    }, t);
                            }, [g, u, p, t]),
                                (0, a.useEffect)(() => {
                                    if (E)
                                        return Te(() => {
                                            (i && i(), g(xe.End));
                                        }, e + t);
                                }, [g, E, i, t, e]));
                            const F = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return A
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: C },
                                      n().createElement(
                                          'div',
                                          { style: p ? F : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          n().createElement(we, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Oe = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: r,
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
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(ye, {
                                    size: t,
                                    lineRef: r,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                u >= 0 &&
                                    n().createElement(Ie, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    He = ['onComplete', 'onEndAnimation'];
                function Ge() {
                    return (
                        (Ge =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ge.apply(this, arguments)
                    );
                }
                const Ue = (0, a.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, He);
                        const s = (0, a.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                (e !== o && i(e), e && t && t(), u && u());
                            }, [o, t, u, r.to]);
                        switch (r.animationSettings.type) {
                            case he.Simple:
                                return n().createElement(Oe, Ge({}, r, { onEndAnimation: l, isComplete: o }));
                            case he.Growing:
                                return n().createElement(Le, Ge({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Qe = ({ size: e, value: t, lineRef: u, disabled: r, onComplete: s }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, a.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            n().createElement(ye, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: u })
                        );
                    },
                    We = ['onEndAnimation'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const qe = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                            return n;
                        })(e, We);
                    const r = (0, a.useRef)({}),
                        s = (0, a.useCallback)(() => {
                            ((r.current.from = void 0), t && t());
                        }, [t]),
                        o = 'number' == typeof r.current.from ? r.current.from : u.from;
                    return (
                        (r.current.from = o),
                        n().createElement(Ue, $e({}, u, { onEndAnimation: s, key: `${o}-${u.to}`, from: o }))
                    );
                });
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const je = (0, a.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return n().createElement(Qe, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: a,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? n().createElement(qe, c)
                                : n().createElement(Ue, Ve({ key: `${r}-${t}` }, c));
                        },
                    ),
                    Xe = (e) => ({
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
                    ze = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Ye = (e, t, u) => ('number' == typeof u ? (ze(0, t, u) / t) * 100 : e),
                    Ke = {
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
                    Ze = {
                        freezed: !1,
                        withStack: !1,
                        type: he.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Je = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Ke,
                            size: u = Be.Default,
                            animationSettings: r = Ze,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            progressBarBackgroundClassMix: i,
                            value: l,
                            deltaFrom: c,
                            lineRef: _,
                            onChangeAnimationState: m,
                            onEndAnimation: d,
                            onComplete: E,
                        }) => {
                            const A = ((e, t, u) =>
                                (0, a.useMemo)(() => {
                                    const a = (ze(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: Ye(a, t, u) };
                                }, [u, t, e]))(l, e, c);
                            return n().createElement(
                                'div',
                                { className: D()(be.base, be[`base__${u}`]), style: Xe(t) },
                                !o && n().createElement(ve, { size: u, classMix: i }),
                                n().createElement(je, {
                                    size: u,
                                    lineRef: _,
                                    disabled: s,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: m,
                                    onComplete: E,
                                }),
                            );
                        },
                    ),
                    et = '';
                let tt, ut, at, nt, rt;
                (!(function (e) {
                    ((e.ProgressBarComplete = 'progressBarComplete'),
                        (e.SuggestedQuestsHide = 'suggestedQuestsHide'),
                        (e.CurrentQuestToMiddle = 'currentQuestToMiddle'),
                        (e.FooterShow = 'footerShow'));
                })(tt || (tt = {})),
                    (function (e) {
                        ((e.HideRerollConditions = 'hideRerollConditions'), (e.QuestShow = 'questShow'), (e.IDLE = ''));
                    })(ut || (ut = {})),
                    (function (e) {
                        ((e.ShowSuggestedQuests = 'showSuggestedQuests'), (e.IDLE = 'idle'));
                    })(at || (at = {})),
                    (function (e) {
                        ((e.HideSuggestedQuests = 'hideSuggestedQuests'), (e.IDLE = ''));
                    })(nt || (nt = {})),
                    (function (e) {
                        ((e.DisableAllQuests = 'disableAllQuests'),
                            (e.HideAllContent = 'hideAllContent'),
                            (e.ShowEndPhase = 'showEndPhase'),
                            (e.ShowEndPhaseFooter = 'showEndPhaseFooter'));
                    })(rt || (rt = {})));
                const st = {
                    COMPLETE_ANIMATION: {
                        [tt.ProgressBarComplete]: Ze.line.delay + Ze.line.duration + Ze.delta.delay + Ze.delta.duration,
                        [tt.SuggestedQuestsHide]: 400,
                        [tt.CurrentQuestToMiddle]: 400,
                        [tt.FooterShow]: 400,
                    },
                    SHOW_SUGGESTED_QUESTS_STEPS: { [ut.HideRerollConditions]: 400, [ut.QuestShow]: 400, [ut.IDLE]: 0 },
                    SIMPLE_SHOW_SUGGESTED_QUESTS_STEPS: { [at.ShowSuggestedQuests]: 400, [at.IDLE]: 0 },
                    HIDE_SUGGESTED_QUESTS_STEPS: { [nt.HideSuggestedQuests]: 500, [nt.IDLE]: 0 },
                    ACTIVE_PHASE_END_STEPS: {
                        [rt.DisableAllQuests]: 500,
                        [rt.HideAllContent]: 400,
                        [rt.ShowEndPhase]: 400,
                        [rt.ShowEndPhaseFooter]: 400,
                    },
                };
                let ot;
                !(function (e) {
                    ((e.Done = 'done'),
                        (e.UndoneSubscription = 'undoneSubscription'),
                        (e.Locked = 'notAvailable'),
                        (e.Active = ''));
                })(ot || (ot = {}));
                const it = 'mergedReward';
                let lt, ct, _t, mt, dt, Et, At, pt;
                (!(function (e) {
                    ((e.MainView = 'mainView'), (e.VehiclePreview = 'vehiclePreview'));
                })(lt || (lt = {})),
                    (function (e) {
                        ((e.BeforeProgression = 'beforeProgression'),
                            (e.Active = 'active'),
                            (e.PurchaseStage = 'purchaseStage'),
                            (e.Completed = 'completed'),
                            (e.Disabled = 'disabled'),
                            (e.Intro = 'intro'));
                    })(ct || (ct = {})),
                    (function (e) {
                        ((e[(e.Disabled = 0)] = 'Disabled'), (e[(e.Active = 1)] = 'Active'));
                    })(_t || (_t = {})),
                    (function (e) {
                        ((e[(e.EmptyRewards = 0)] = 'EmptyRewards'),
                            (e[(e.ReadyRewards = 1)] = 'ReadyRewards'),
                            (e[(e.AnimatedRewards = 2)] = 'AnimatedRewards'));
                    })(mt || (mt = {})),
                    (function (e) {
                        ((e[(e.Progress = 0)] = 'Progress'),
                            (e[(e.Quests = 1)] = 'Quests'),
                            (e[(e.Shop = 2)] = 'Shop'));
                    })(dt || (dt = {})),
                    (function (e) {
                        ((e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'));
                    })(Et || (Et = {})),
                    (function (e) {
                        ((e[(e.Tab = 0)] = 'Tab'),
                            (e[(e.Chapter = 1)] = 'Chapter'),
                            (e[(e.ShopInfo = 2)] = 'ShopInfo'),
                            (e[(e.Step = 3)] = 'Step'));
                    })(At || (At = {})),
                    (function (e) {
                        ((e[(e.Hidden = 0)] = 'Hidden'), (e[(e.Tokens = 1)] = 'Tokens'), (e[(e.Coins = 2)] = 'Coins'));
                    })(pt || (pt = {})));
                var gt = u(4179);
                const Ft = [
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
                function Dt(e) {
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
                const Ct = (e, t, u = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: gt.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                u,
                            ),
                        );
                    },
                    bt = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            p = void 0 === A || A,
                            g = e.targetId,
                            F = void 0 === g ? 0 : g,
                            D = e.onShow,
                            C = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Ft);
                        const B = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            h = (0, a.useMemo)(
                                () =>
                                    F ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            a = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (a = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: a }
                                        );
                                    })().resId,
                                [F],
                            ),
                            v = (0, a.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (Ct(u, E, { isMouseEvent: !0, on: !0, arguments: Dt(n) }, h),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [u, E, n, h, D]),
                            f = (0, a.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        Ct(u, E, { on: !1 }, h),
                                        B.current.isVisible && C && C(),
                                        (B.current.isVisible = !1));
                                }
                            }, [u, E, h, C]),
                            w = (0, a.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === p && f();
                            }, [p, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        (window.removeEventListener('mouseleave', f), f());
                                    }
                                ),
                                [f],
                            ),
                            p
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (f(), null == s || s(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === m && f(), null == i || i(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === m && f(), null == o || o(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : t
                        );
                        var S;
                    };
                let Bt, ht, vt, ft, wt, St, yt;
                var Tt, Rt;
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
                        (e.GoldenTicket = 'birthday2025_golden_ticket'),
                        (e.PostStamp = 'giftsystem_4_stamp'),
                        (e.Quests = 'quests'),
                        (e.BlankPersonalMissions_1 = 'freeTokens_0'),
                        (e.BlankPersonalMissions_2 = 'freeTokens_2'),
                        (e.SACoin = 'sacoin'),
                        (e.ArmoryCoin = 'armory_coin'),
                        (e.PremiumPlusUniversal = 'premium_plus_universal'),
                        (e.DogTagType = 'dogTagComponents'),
                        (e.NyPetGoodies = 'nyPetGoodies'),
                        (e.HiddenVehicle = 'hidden_vehicle'),
                        (e.NyStaticDogTag = 'nyStaticDogTag'),
                        (e.Ny26Toys = 'ny26Toys'));
                })(Bt || (Bt = {})),
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
                    })(ht || (ht = {})),
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
                    })(vt || (vt = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(ft || (ft = {})),
                    ((Rt = wt || (wt = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Rt.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Rt.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Rt.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Rt.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Rt.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Rt.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Rt.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Rt.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Rt.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Rt.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Rt.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Rt.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    ((St || (St = {})).BATTLE_BOOSTER = 'battleBooster'),
                    ((Tt = yt || (yt = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (Tt.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (Tt.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (Tt.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (Tt.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (Tt.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (Tt.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (Tt.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (Tt.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (Tt.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (Tt.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (Tt.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (Tt.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                class xt extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? gt.B3.GOLD : gt.B3.INTEGRAL;
                        const t = gt.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                xt.defaultProps = { format: 'integral' };
                const Pt = [
                        Bt.Items,
                        Bt.Equipment,
                        Bt.Xp,
                        Bt.XpFactor,
                        Bt.Blueprints,
                        Bt.BlueprintsAny,
                        Bt.Goodies,
                        Bt.Berths,
                        Bt.Slots,
                        Bt.Tokens,
                        Bt.CrewSkins,
                        Bt.CrewBooks,
                        Bt.Customizations,
                        Bt.CreditsFactor,
                        Bt.TankmenXp,
                        Bt.TankmenXpFactor,
                        Bt.FreeXpFactor,
                        Bt.BattleToken,
                        Bt.Entitlements,
                        Bt.PremiumUniversal,
                        Bt.NaturalCover,
                        Bt.BpCoin,
                        Bt.BattlePassSelectToken,
                        Bt.BattlaPassFinalAchievement,
                        Bt.BattleBadge,
                        Bt.BonusX5,
                        Bt.CrewBonusX3,
                        Bt.NewYearFillers,
                        Bt.NewYearInvoice,
                        Bt.EpicSelectToken,
                        Bt.Comp7TokenWeeklyReward,
                        Bt.Comp7TokenCouponReward,
                        Bt.BattleBoosterGift,
                        Bt.NewYearFillers,
                        Bt.NewYearInvoice,
                        Bt.LootBoxToken,
                        Bt.CosmicLootboxCommon,
                        Bt.CosmicLootboxSilver,
                        Bt.SelectableBonus,
                        Bt.GoldenTicket,
                        Bt.PostStamp,
                        Bt.BlankPersonalMissions_1,
                        Bt.BlankPersonalMissions_2,
                        Bt.SACoin,
                        Bt.PremiumPlusUniversal,
                        Bt.NyPetGoodies,
                        Bt.HiddenVehicle,
                    ],
                    Mt = [Bt.Gold, Bt.Credits, Bt.Crystal, Bt.FreeXp, Bt.NewYearToyFragments],
                    Nt = [Bt.BattlePassPoints],
                    kt = [Bt.PremiumPlus, Bt.Premium];
                let Lt;
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
                })(Lt || (Lt = {}));
                const It = (e) =>
                        Pt.includes(e)
                            ? ft.MULTI
                            : Mt.includes(e)
                              ? ft.CURRENCY
                              : Nt.includes(e)
                                ? ft.NUMBER
                                : kt.includes(e)
                                  ? ft.PREMIUM_PLUS
                                  : ft.STRING,
                    Ot = ['engravings', 'backgrounds'],
                    Ht = ['engraving', 'background'],
                    Gt = (e, t = vt.Small, u) => {
                        const a = e.name,
                            n = e.type,
                            r = e.value,
                            s = e.icon,
                            o = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case vt.S600x450:
                                        return 'c_600x450';
                                    case vt.S400x300:
                                        return 'c_400x300';
                                    case vt.S296x222:
                                        return 'c_296x222';
                                    case vt.S232x174:
                                        return 'c_232x174';
                                    case vt.Big:
                                        return 'c_80x80';
                                    case vt.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${s}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case vt.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case vt.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
                            case 'entitlements':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${s}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const a = Ot[e];
                                    if (a) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(a),
                                            r = n.$dyn(u);
                                        return r ? `${r}` : `${n.$dyn(Ht[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, t, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case vt.S600x450:
                                            return 'c_600x450';
                                        case vt.S400x300:
                                            return 'c_400x300';
                                        case vt.S296x222:
                                            return 'c_296x222';
                                        case vt.S232x174:
                                            return 'c_232x174';
                                        case vt.S180x135:
                                            return 'big';
                                        case vt.Big:
                                        case vt.S80x80:
                                            return 'c_80x80';
                                        case vt.Small:
                                        case vt.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(t)}.${s}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'nyPetGoodies':
                                return `R.images.new_year.gui.maps.icons.newYear.common.categoriesIcons.${t}.${s}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${s}`;
                            case 'premium_universal':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.premium_plus_universal`;
                            case 'armory_coin':
                                return `R.images.armory_yard.gui.maps.icons.token.sf${((e) => {
                                    switch (e) {
                                        case vt.Mini:
                                            return Lt.s32;
                                        case vt.Small:
                                        case vt.S48x48:
                                            return Lt.s48;
                                        case vt.S80x80:
                                        case vt.Big:
                                            return Lt.s80;
                                        case vt.S128x100:
                                            return Lt.s116;
                                        case vt.S180x135:
                                        case vt.S232x174:
                                        case vt.S296x222:
                                            return Lt.s296;
                                        case vt.S400x300:
                                            return Lt.s400;
                                        case vt.S600x450:
                                            return Lt.s600;
                                    }
                                })(t)}`;
                            case 'newYearAlbumsAccess':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.albumsAccess`;
                            case 'nyFillers':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.fillers`;
                            case 'nyToyFragments':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.shards`;
                            case 'newYearSlot':
                                return `R.images.new_year.gui.maps.icons.newYear.rewards.${t}.slot`;
                            case 'hidden_vehicle':
                                return 'R.images.new_year.gui.maps.icons.newYear.common.rewards.vehicles.hidden_vehicle';
                            case 'nyStaticDogTag':
                                return `R.images.new_year.gui.maps.icons.newYear.common.rewards.dogtags.${t}.dogtag_${u}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    Ut = (e, t, u) => {
                        const a = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            a,
                            u,
                        );
                    },
                    Qt = ['children'];
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                const $t = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Qt);
                        return n().createElement(
                            bt,
                            Wt(
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
                    qt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const jt = R.views.common.tooltip_window.simple_tooltip_content,
                    Xt = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, qt);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: u, header: r, note: s, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, r, s, i]);
                        return n().createElement(
                            bt,
                            Vt(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? jt.SimpleTooltipHtmlContent('resId') : jt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    };
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Yt = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const a = n().createElement('div', { className: u }, e);
                    if (t.header || t.body) return n().createElement(Xt, t, a);
                    const r = t.contentId,
                        s = t.args,
                        o = null == s ? void 0 : s.contentId;
                    return r || o
                        ? n().createElement(bt, zt({}, t, { contentId: r || o }), a)
                        : n().createElement($t, t, a);
                };
                function Kt(e) {
                    engine.call('PlaySound', e);
                }
                const Zt = {
                    playHighlight() {
                        Kt('highlight');
                    },
                    playClick() {
                        Kt('play');
                    },
                    playYes() {
                        Kt('yes1');
                    },
                };
                var Jt = u(8552);
                const eu = ot.Done,
                    tu = ot.Locked,
                    uu = ot.Active,
                    au =
                        (mt.EmptyRewards,
                        mt.ReadyRewards,
                        mt.AnimatedRewards,
                        (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1)),
                    nu = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 450, easing: au },
                    },
                    ru = { config: { duration: 450, easing: au } },
                    su = {
                        base: 'StepIcon_base_7b',
                        past: 'StepIcon_past_75',
                        present: 'StepIcon_present_b5',
                        future: 'StepIcon_future_5c',
                        hover: 'StepIcon_hover_44',
                        base__past: 'StepIcon_base__past_79',
                        base__present: 'StepIcon_base__present_ab',
                        step: 'StepIcon_step_24',
                        base__future: 'StepIcon_base__future_26',
                    },
                    ou = (0, a.memo)(({ step: e, state: t = Gu.Future, playStageSound: u }) => {
                        const r = (0, a.useState)(!1),
                            s = r[0],
                            o = r[1],
                            i = (0, a.useCallback)(() => {
                                u && u(e);
                            }, [u, e]),
                            l = (0, Jt.useSpring)({ opacity: t === Gu.Past ? 1 : 0, HIDE_CONFIG: ru }),
                            c = (0, Jt.useSpring)({ opacity: t === Gu.Present ? 1 : 0, HIDE_CONFIG: ru }),
                            _ = (0, Jt.useSpring)({ opacity: t === Gu.Future ? 1 : 0, HIDE_CONFIG: ru }),
                            m = (0, Jt.useTransition)(s, Object.assign({ key: s }, nu));
                        return n().createElement(
                            'div',
                            {
                                className: D()(su.base, su[`base__${t}`]),
                                onMouseEnter: () => {
                                    (Zt.playHighlight(), o(!0));
                                },
                                onMouseLeave: () => {
                                    o(!1);
                                },
                                onClick: i,
                            },
                            n().createElement(Jt.animated.div, { className: su.future, style: _ }),
                            n().createElement(Jt.animated.div, { className: su.past, style: l }),
                            n().createElement(Jt.animated.div, { className: su.present, style: c }),
                            m((e, t) => t && n().createElement(Jt.animated.div, { className: su.hover, style: e })),
                            n().createElement(ge, { text: String(e), className: su.step }),
                        );
                    }),
                    iu = {
                        base: 'MainReward_base_02',
                        sequence: 'MainReward_sequence_fa',
                        info: 'MainReward_info_ab',
                        icon: 'MainReward_icon_14',
                        icon__main: 'MainReward_icon__main_af',
                        preview: 'MainReward_preview_af',
                        step: 'MainReward_step_4f',
                        step__ave: 'MainReward_step__ave_13',
                        stepLabel: 'MainReward_stepLabel_53',
                        step__completed: 'MainReward_step__completed_66',
                        stepIcon: 'MainReward_stepIcon_fa',
                        rotation: 'MainReward_rotation_37',
                        reversedRotation: 'MainReward_reversedRotation_97',
                    },
                    lu = {
                        base: 'Preview_base_00',
                        base__hovered: 'Preview_base__hovered_df',
                        icon: 'Preview_icon_81',
                        icon__small: 'Preview_icon__small_5c',
                        icon__normal: 'Preview_icon__normal_93',
                        base__mouseDown: 'Preview_base__mouseDown_78',
                        label: 'Preview_label_44',
                        base__visibleLabel: 'Preview_base__visibleLabel_4d',
                    },
                    cu = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function _u() {
                    return (
                        (_u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        _u.apply(this, arguments)
                    );
                }
                let mu;
                !(function (e) {
                    ((e.SMALL = 'small'), (e.NORMAL = 'normal'));
                })(mu || (mu = {}));
                const du = (0, a.memo)((e) => {
                        let t = e.label,
                            u = e.isVisibleLabel,
                            r = void 0 !== u && u,
                            s = e.autofocus,
                            o = void 0 !== s && s,
                            i = e.soundHover,
                            l = void 0 === i ? 'highlight' : i,
                            c = e.soundClick,
                            _ = void 0 === c ? 'play' : c,
                            m = e.size,
                            d = void 0 === m ? mu.NORMAL : m,
                            E = e.onClick,
                            A = e.onMouseEnter,
                            p = e.onMouseLeave,
                            g = e.onMouseDown,
                            F = e.onMouseUp,
                            C = e.onFocus,
                            b = e.onBlur,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, cu);
                        const h = (0, a.useState)(!1),
                            v = h[0],
                            f = h[1],
                            w = (0, a.useState)(!1),
                            S = w[0],
                            y = w[1],
                            T = (0, a.useState)(o),
                            R = T[0],
                            x = T[1],
                            P = (0, a.useRef)(null),
                            M = (0, a.useCallback)(() => {
                                P.current && (P.current.focus(), x(!0));
                            }, []),
                            N = (0, a.useCallback)(
                                (e) => {
                                    R && null !== P.current && !P.current.contains(e.target) && x(!1);
                                },
                                [R],
                            );
                        ((0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', N),
                                () => {
                                    document.removeEventListener('mousedown', N);
                                }
                            ),
                            [N],
                        ),
                            (0, a.useEffect)(() => {
                                x(o);
                            }, [o]));
                        const k = (0, a.useCallback)(
                                (e) => {
                                    E && E(e);
                                },
                                [E],
                            ),
                            L = (0, a.useCallback)(
                                (e) => {
                                    (f(!0), g && g(e), _ && Kt(_), o && M());
                                },
                                [o, g, M, _],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    (f(!1), F && F(e));
                                },
                                [F],
                            ),
                            O = (0, a.useCallback)(
                                (e) => {
                                    (A && A(e), l && Kt(l), y(!0));
                                },
                                [A, l],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    (f(!1), y(!1), p && p(e));
                                },
                                [p],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    (x(!0), C && C(e));
                                },
                                [C],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    (x(!1), b && b(e));
                                },
                                [b],
                            ),
                            Q = D()(
                                lu.base,
                                r && lu.base__visibleLabel,
                                v && lu.base__mouseDown,
                                S && lu.base__hovered,
                                R && lu.base__focused,
                            ),
                            W = D()(lu.icon, lu[`icon__${d}`]);
                        return n().createElement(
                            'div',
                            _u(
                                {
                                    ref: P,
                                    className: Q,
                                    onClick: k,
                                    onMouseEnter: O,
                                    onMouseLeave: H,
                                    onMouseDown: L,
                                    onMouseUp: I,
                                    onFocus: G,
                                    onBlur: U,
                                },
                                B,
                            ),
                            n().createElement('div', { className: W }),
                            n().createElement('div', { className: lu.label }, t),
                        );
                    }),
                    Eu = [
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
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const pu = (0, a.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            s = e.frameCount,
                            o = e.onAnimate,
                            i = e.frameTime,
                            l = void 0 === i ? 33 : i,
                            c = e.initialFrameIndex,
                            _ = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            d = void 0 === m ? s - 1 : m,
                            E = e.loop,
                            A = void 0 === E || E,
                            p = e.state,
                            g = void 0 === p ? 'play' : p,
                            F = e.onAnimationDone,
                            D = e.onAnimationComplete,
                            C = e.poster,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Eu);
                        const B = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = B.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = Du(_, d, r),
                                                t = gu(_, d),
                                                a = window.setInterval(() => {
                                                    const n = t(),
                                                        r = e.get(n);
                                                    r
                                                        ? (null == o || o(n, r),
                                                          u(r),
                                                          n === d &&
                                                              (null == D || D(),
                                                              A || (null == F || F(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === _ && C ? { path: C, x: 0, y: 0 } : r(_),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => u(Fu(e, t));
                                            return (
                                                t.addEventListener('load', a),
                                                () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, _, d, A, o, D, F, C, g]),
                            n().createElement('canvas', Au({}, b, { width: t, height: u, ref: B }))
                        );
                    }),
                    gu = (e, t) => {
                        let u = e;
                        return () => {
                            const a = u;
                            return ((u += 1), u > t && (u = e), a);
                        };
                    },
                    Fu = (e, t) => Object.assign({}, e, { img: t }),
                    Du = (e, t, u) => {
                        const a = new Map(),
                            n = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = n[e.path];
                            if (t) a.set(r, Fu(e, t));
                            else {
                                const t = new Image();
                                ((n[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(r, Fu(e, t)));
                            }
                        }
                        return a;
                    };
                function Cu(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (a) => {
                        const n = a % u,
                            r = (n % t.columns) * e.width,
                            s = Math.trunc(n / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / u)), x: r, y: s };
                    };
                }
                const bu = { base: 'SequencedBg_base_9b', image: 'SequencedBg_image_31' },
                    Bu = {
                        width: 280,
                        height: 280,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_',
                            (e) => `R.images.armory_yard.gui.maps.icons.progress.finalRewardSprite_${e}`),
                    };
                const hu = n().memo(() =>
                        n().createElement(
                            'div',
                            { className: bu.base },
                            s.O.client.graphicsQuality.isLow()
                                ? n().createElement('div', { className: bu.image })
                                : n().createElement(pu, {
                                      frameTime: 50,
                                      state: 'play',
                                      width: Bu.width,
                                      height: Bu.height,
                                      frameCount: Bu.frameCount,
                                      className: bu.seq,
                                      getImageSource: Cu(Bu),
                                  }),
                        ),
                    ),
                    vu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    fu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function wu(e) {
                    let t = '';
                    for (let u = fu.length - 1; u >= 0; u--) for (; e >= fu[u]; ) ((t += vu[u]), (e -= fu[u]));
                    return t;
                }
                const Su = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    yu = (0, a.memo)(({ isElite: e, vehicleName: t, type: u, level: a }) => {
                        return n().createElement(
                            'div',
                            { className: 'TankName_base_24' },
                            n().createElement(ge, { text: ((r = a), Su ? `${r}` : wu(r)) }),
                            n().createElement('div', {
                                className: D()('TankName_type_aa', e && 'TankName_type__elite_ee'),
                                style: (() => {
                                    const t = `${Z(u)}${e ? '_elite' : ''}`;
                                    return {
                                        backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.big.$dyn(t)})`,
                                    };
                                })(),
                            }),
                            n().createElement(ge, { text: t, className: 'TankName_name_20' }),
                        );
                        var r;
                    }),
                    Tu = R.strings.armory_yard.mainView.mainReward,
                    Ru = (0, a.memo)(
                        ({ isHighlighted: e, onPreview: t, scale: u = 0, step: a, reward: r, isFinalReward: s = !1 }) =>
                            n().createElement(
                                'div',
                                { className: iu.base },
                                Boolean(e && u) &&
                                    n().createElement(
                                        'div',
                                        { className: iu.sequence, style: { '--scale': `${u}` } },
                                        n().createElement(hu, null),
                                    ),
                                n().createElement(
                                    Yt,
                                    {
                                        tooltipArgs: Ut(
                                            { tooltipId: r.tooltipId, tooltipType: it },
                                            Number.parseInt(r.tooltipContentId),
                                        ),
                                        className: iu.tooltipWrapper,
                                    },
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        r.name === Bt.Vehicles &&
                                            n().createElement('div', { className: iu.info }, n().createElement(yu, r)),
                                        n().createElement('div', { className: D()(iu.icon, s && iu.icon__main) }),
                                    ),
                                ),
                                n().createElement(
                                    Xt,
                                    {
                                        body: s
                                            ? R.strings.armory_yard.buyView.stylePreview.tooltip()
                                            : R.strings.armory_yard.buyView.vehiclePreview.tooltip(),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: iu.preview },
                                        n().createElement(du, {
                                            label: R.strings.armory_yard.buyView.vehiclePreview.label(),
                                            onClick: t,
                                            isVisibleLabel: !0,
                                        }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: D()(iu.step, s && iu.step__ave, e && iu.step__completed) },
                                    s
                                        ? n().createElement(ou, { step: a, state: e ? Gu.Present : Gu.Future })
                                        : n().createElement(
                                              'div',
                                              { className: iu.stepIcon },
                                              n().createElement(ge, { text: String(a) }),
                                          ),
                                    n().createElement(ge, { className: iu.stepLabel, text: Tu.completed() }),
                                ),
                            ),
                    ),
                    xu = {
                        base: 'Step_base_fa',
                        progress: 'Step_progress_c9',
                        progress__first: 'Step_progress__first_82',
                        progress__right: 'Step_progress__right_57',
                        progress__left: 'Step_progress__left_30',
                        icon: 'Step_icon_b0',
                        reward: 'Step_reward_df',
                        line: 'Step_line_c5',
                        mainReward: 'Step_mainReward_b6',
                    },
                    Pu = {
                        base: 'StepLine_base_1a',
                        base__past: 'StepLine_base__past_3b',
                        base__present: 'StepLine_base__present_22',
                        base__future: 'StepLine_base__future_c9',
                    },
                    Mu = n().memo(({ state: e }) =>
                        n().createElement('div', { className: D()(Pu.base, Pu[`base__${e}`]) }),
                    ),
                    Nu = {
                        base: 'StepProgressBar_base_b3',
                        base__first: 'StepProgressBar_base__first_41',
                        base__last: 'StepProgressBar_base__last_95',
                        base__left: 'StepProgressBar_base__left_47',
                        base__right: 'StepProgressBar_base__right_ae',
                        shadow: 'StepProgressBar_shadow_f3',
                        bg: 'StepProgressBar_bg_76',
                        progress: 'StepProgressBar_progress_11',
                        base__present: 'StepProgressBar_base__present_54',
                        pointer: 'StepProgressBar_pointer_a4',
                        animatedProgress: 'StepProgressBar_animatedProgress_8a',
                        completeProgress: 'StepProgressBar_completeProgress_0a',
                        animatedProgressFirstPositon: 'StepProgressBar_animatedProgressFirstPositon_d1',
                        completeProgressFirstPositon: 'StepProgressBar_completeProgressFirstPositon_77',
                        animatedPointer: 'StepProgressBar_animatedPointer_74',
                        completePointer: 'StepProgressBar_completePointer_a5',
                        animatedPointerFirstPositon: 'StepProgressBar_animatedPointerFirstPositon_cb',
                        completePointerFirstPosition: 'StepProgressBar_completePointerFirstPosition_7d',
                        pointerFlare1: 'StepProgressBar_pointerFlare1_37',
                        pointerFlare2: 'StepProgressBar_pointerFlare2_76',
                    },
                    ku = (0, a.memo)(
                        ({
                            state: e = Gu.Future,
                            levelDuration: t,
                            isEmpty: u,
                            isRunning: r,
                            position: s = Uu.Normal,
                        }) => {
                            const o = (0, a.useState)({}),
                                i = o[0],
                                l = o[1],
                                c = (0, a.useState)({}),
                                _ = c[0],
                                m = c[1],
                                d = (0, a.useState)(''),
                                E = d[0],
                                A = d[1],
                                p = (0, a.useState)(''),
                                g = p[0],
                                F = p[1];
                            return (
                                (0, a.useEffect)(() => {
                                    (r
                                        ? s === Uu.First
                                            ? (A(Nu.animatedProgressFirstPositon), F(Nu.animatedPointerFirstPositon))
                                            : (A(Nu.animatedProgress), F(Nu.animatedPointer))
                                        : (A(''), F('')),
                                        u || r
                                            ? u && r && t
                                                ? (l({ animationDuration: `${t}s` }), m({ animationDuration: `${t}s` }))
                                                : u &&
                                                  !r &&
                                                  (s === Uu.First
                                                      ? (l({ width: '20%' }), m({ left: '20%' }))
                                                      : (l({}), m({})))
                                            : (l({ width: '100%' }), m({ left: '100%' })));
                                }, [u, r, t, s]),
                                n().createElement(
                                    'div',
                                    { className: D()(Nu.base, Nu[`base__${s}`], Nu[`base__${e}`]) },
                                    n().createElement('div', { className: Nu.shadow }),
                                    n().createElement('div', { className: Nu.bg }),
                                    n().createElement('div', { className: D()(Nu.progress, E), style: i }),
                                    r ||
                                        (s === Uu.First &&
                                            n().createElement(
                                                'div',
                                                { className: D()(Nu.pointer, g), style: _ },
                                                n().createElement('div', { className: Nu.pointerFlare2 }),
                                                n().createElement('div', { className: Nu.pointerFlare1 }),
                                            )),
                                )
                            );
                        },
                    ),
                    Lu = {
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
                    Iu = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: a = vt.Big,
                        special: r,
                        value: s,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case wt.BATTLE_BOOSTER:
                                    case wt.BATTLE_BOOSTER_REPLACE:
                                        return St.BATTLE_BOOSTER;
                                }
                            })(r),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case wt.BATTLE_BOOSTER:
                                        return yt.BATTLE_BOOSTER;
                                    case wt.BATTLE_BOOSTER_REPLACE:
                                        return yt.BATTLE_BOOSTER_REPLACE;
                                    case wt.BUILT_IN_EQUIPMENT:
                                        return yt.BUILT_IN_EQUIPMENT;
                                    case wt.EQUIPMENT_PLUS:
                                        return yt.EQUIPMENT_PLUS;
                                    case wt.EQUIPMENT_TROPHY_BASIC:
                                        return yt.EQUIPMENT_TROPHY_BASIC;
                                    case wt.EQUIPMENT_TROPHY_UPGRADED:
                                        return yt.EQUIPMENT_TROPHY_UPGRADED;
                                    case wt.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return yt.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case wt.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return yt.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case wt.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return yt.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case wt.PROGRESSION_STYLE_UPGRADED_1:
                                        return yt.PROGRESSION_STYLE_UPGRADED_1;
                                    case wt.PROGRESSION_STYLE_UPGRADED_2:
                                        return yt.PROGRESSION_STYLE_UPGRADED_2;
                                    case wt.PROGRESSION_STYLE_UPGRADED_3:
                                        return yt.PROGRESSION_STYLE_UPGRADED_3;
                                    case wt.PROGRESSION_STYLE_UPGRADED_4:
                                        return yt.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            A = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ft.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ft.CURRENCY:
                                    case ft.NUMBER:
                                        return n().createElement(xt, { format: 'integral', value: Number(e) });
                                    case ft.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return n().createElement(
                            'div',
                            { className: D()(Lu.base, Lu[`base__${a}`], l), style: i },
                            n().createElement(
                                Yt,
                                { tooltipArgs: _, className: Lu.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: D()(Lu.image, null == c ? void 0 : c.image) },
                                        d &&
                                            n().createElement('div', {
                                                className: D()(Lu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            n().createElement('div', {
                                                className: D()(Lu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            n().createElement('div', {
                                                className: D()(Lu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: D()(
                                                    Lu.info,
                                                    Lu[`info__${e}`],
                                                    o === ft.MULTI && Lu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            u &&
                                n().createElement(
                                    Yt,
                                    { tooltipArgs: m },
                                    n().createElement('div', {
                                        className: D()(Lu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ou = {
                        base: 'StepReward_base_67',
                        pastField: 'StepReward_pastField_f1',
                        futureField: 'StepReward_futureField_c0',
                        base__first: 'StepReward_base__first_2d',
                        base__right: 'StepReward_base__right_e2',
                        base__last: 'StepReward_base__last_f7',
                        base__left: 'StepReward_base__left_9b',
                        presentField: 'StepReward_presentField_b8',
                        hover: 'StepReward_hover_d3',
                        base__future: 'StepReward_base__future_43',
                        presentLight: 'StepReward_presentLight_ed',
                        reward: 'StepReward_reward_51',
                        base__past: 'StepReward_base__past_f6',
                    },
                    Hu = n().memo(({ state: e, reward: t, position: u = Uu.Normal }) => {
                        const r = t && u !== Uu.Left && u !== Uu.Last,
                            s = (0, Jt.useSpring)({ opacity: e === Gu.Past ? 1 : 0, HIDE_CONFIG: ru }),
                            o = (0, Jt.useSpring)({ opacity: e === Gu.Present ? 1 : 0, HIDE_CONFIG: ru }),
                            i = (0, Jt.useSpring)({ opacity: e === Gu.Future ? 1 : 0, HIDE_CONFIG: ru }),
                            l = (0, a.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            m = (0, a.useCallback)(() => {
                                _(!0);
                            }, []),
                            d = (0, a.useCallback)(() => {
                                _(!1);
                            }, []),
                            E = (0, Jt.useTransition)(c, Object.assign({ key: c }, nu));
                        return n().createElement(
                            'div',
                            {
                                className: D()(Ou.base, Ou[`base__${e}`], Ou[`base__${u}`]),
                                onMouseEnter: m,
                                onMouseLeave: d,
                            },
                            n().createElement(
                                Jt.animated.div,
                                { style: s },
                                n().createElement('div', { className: Ou.pastField }),
                            ),
                            E((e, t) => t && n().createElement(Jt.animated.div, { className: Ou.hover, style: e })),
                            n().createElement(
                                Jt.animated.div,
                                { style: o },
                                n().createElement('div', { className: Ou.presentField }),
                                n().createElement('div', { className: Ou.presentLight }),
                            ),
                            n().createElement(
                                Jt.animated.div,
                                { style: i },
                                n().createElement('div', { className: Ou.futureField }),
                            ),
                            r && n().createElement('div', { className: Ou.reward }, n().createElement(Iu, t)),
                        );
                    });
                let Gu, Uu;
                var Qu;
                let Wu;
                (!(function (e) {
                    ((e.Past = 'past'), (e.Present = 'present'), (e.Future = 'future'));
                })(Gu || (Gu = {})),
                    ((Qu = Uu || (Uu = {})).First = 'first'),
                    (Qu.Last = 'last'),
                    (Qu.Normal = 'normal'),
                    (Qu.Left = 'left'),
                    (Qu.Right = 'right'),
                    (0, a.memo)(
                        ({
                            step: e,
                            state: t,
                            reward: u,
                            levelDuration: a,
                            isEmpty: r,
                            isRunning: s,
                            position: o = Uu.Normal,
                            isMainReward: i = !1,
                            playStageSound: l,
                            onPreview: c,
                        }) => {
                            const _ = o !== Uu.Last && !i;
                            return n().createElement(
                                'div',
                                { className: xu.base },
                                _ &&
                                    n().createElement(
                                        'div',
                                        { className: xu.line },
                                        n().createElement(Mu, { state: t }),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: D()(xu.progress, xu[`progress__${o}`]) },
                                    n().createElement(ku, {
                                        state: t,
                                        position: o,
                                        levelDuration: a,
                                        isEmpty: r,
                                        isRunning: s,
                                    }),
                                ),
                                _ &&
                                    n().createElement(
                                        'div',
                                        { className: xu.icon },
                                        n().createElement(
                                            bt,
                                            {
                                                contentId:
                                                    R.views.armory_yard.lobby.feature.tooltips.ArmoryYardSimpleTooltipView(
                                                        'resId',
                                                    ),
                                                args: { state: At.Step, step: e },
                                                ignoreShowDelay: !0,
                                            },
                                            n().createElement(
                                                'div',
                                                null,
                                                n().createElement(ou, { step: e, state: t, playStageSound: l }),
                                            ),
                                        ),
                                    ),
                                i &&
                                    n().createElement(
                                        'div',
                                        { className: xu.mainReward },
                                        n().createElement(Ru, {
                                            step: e,
                                            reward: u,
                                            isHighlighted: t === Gu.Past || t === Gu.Present,
                                            onPreview: c,
                                        }),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: xu.reward },
                                    n().createElement(Hu, { state: t, reward: u, position: o }),
                                ),
                            );
                        },
                    ),
                    (function (e) {
                        ((e.Disabled = 'disabled'), (e.Active = 'active'), (e.Completed = 'completed'));
                    })(Wu || (Wu = {})),
                    Wu.Active);
                const $u = Wu.Disabled;
                let qu, Vu;
                (Wu.Completed,
                    (function (e) {
                        e.C_360x270 = 'c_360x270';
                    })(qu || (qu = {})),
                    (function (e) {
                        ((e.OR = 'or'), (e.AND = 'and'));
                    })(Vu || (Vu = {})));
                const ju = (e) => ({
                    name: e.name,
                    image: Gt(e, vt.Big),
                    value: e.value,
                    valueType: It(e.name),
                    bonusType: It(e.name),
                    tooltipArgs: Ut({ tooltipId: e.tooltipId, tooltipType: it }, Number.parseInt(e.tooltipContentId)),
                });
                let Xu;
                var zu;
                (((zu = Xu || (Xu = {})).SHORT_DATE = 'short-date'),
                    (zu.SHORT_TIME = 'short-time'),
                    (zu.SHORT_DATE_TIME = 'short-date-time'),
                    (zu.FULL_DATE = 'full-date'),
                    (zu.FULL_DATE_TIME = 'full-date-time'),
                    (zu.MONTH = 'month'),
                    (zu.MONTH_DATE = 'month-date'),
                    (zu.DATE_MONTH = 'date-month'),
                    (zu.MONTH_YEAR = 'month-year'),
                    (zu.WEEK_DAY = 'week-day'),
                    (zu.WEEK_DAY_TIME = 'week-day-time'),
                    (zu.YEAR = 'year'),
                    (zu.DATE_YEAR = 'date-year'));
                let Yu;
                (Date.now(),
                    gt.Sw.instance,
                    (function (e) {
                        ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                    })(Yu || (Yu = {})),
                    gt.Sw.instance);
                const Ku = (e) => {
                    const t = (0, a.useRef)();
                    return (
                        (0, a.useEffect)(() => {
                            t.current = e;
                        }, [e]),
                        t.current
                    );
                };
                ('undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector),
                    'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
                const Zu = {
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
                    Ju = [
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
                function ea() {
                    return (
                        (ea =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        ea.apply(this, arguments)
                    );
                }
                class ta extends n().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Kt(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                (e && e(t), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                (e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Kt(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                (e && e(t), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            a = e.goto,
                            r = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                    return n;
                                })(e, Ju)),
                            d = D()(Zu.base, Zu[`base__${s}`], Zu[`base__${r}`], null == o ? void 0 : o.base),
                            E = D()(Zu.icon, Zu[`icon__${s}`], Zu[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = D()(Zu.glow, null == o ? void 0 : o.glow),
                            p = D()(Zu.caption, Zu[`caption__${s}`], null == o ? void 0 : o.caption),
                            g = D()(Zu.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            ea(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== s && n().createElement('div', { className: Zu.shine }),
                            n().createElement('div', { className: E }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: p }, t),
                            a && n().createElement('div', { className: g }, a),
                        );
                    }
                }
                ta.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ua = u(5521);
                const aa = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function na(e = ua.n.NONE, t = aa, u = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== ua.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                (s.O.view.setEventHandled(), t(a), u && a.stopPropagation());
                            }
                        }
                    }, [t, e, u]);
                }
                const ra = (e) => {
                    if (!e) return !1;
                    const t = e.getBoundingClientRect(),
                        u = t.width,
                        a = t.height;
                    return 0 !== u && 0 !== a;
                };
                var sa = u(3282);
                const oa = R.strings.armory_yard,
                    ia = R.strings.menu.dateTime.months,
                    la = (e) => {
                        switch (e) {
                            case ct.PurchaseStage:
                                return oa.mainView.state.purchaseStage();
                            case ct.Intro:
                                return oa.rerollView.state.intro();
                            default:
                                return oa.mainView.state.progression();
                        }
                    },
                    ca = (0, a.memo)(
                        ({
                            fromTimestamp: e,
                            toTimestamp: t,
                            title: u,
                            subtitle: a = '',
                            state: r,
                            displayFeatureName: s = !0,
                        }) => {
                            const o = gt.Z5.getTimeFormat(t, gt.lf.SHORT_FORMAT),
                                i = ((e, t) => {
                                    const u = new Date(1e3 * e),
                                        a = new Date(1e3 * t),
                                        n = String(ia.$num(u.getMonth() + 1)).toUpperCase(),
                                        r = String(ia.$num(a.getMonth() + 1)).toUpperCase();
                                    return { fromDate: u.getDate() + ' ' + n, toDate: a.getDate() + ' ' + r };
                                })(e, t);
                            return n().createElement(
                                'div',
                                { className: 'Header_base_2a' },
                                n().createElement(
                                    'div',
                                    { className: 'Header_subtitle_b0' },
                                    n().createElement(ge, {
                                        className: 'Header_featureName_c8',
                                        text: s ? oa.featureName() : la(r),
                                    }),
                                    n().createElement('div', { className: 'Header_separator_0b' }),
                                    n().createElement(
                                        'div',
                                        { className: 'Header_date_d0' },
                                        a.length > 0
                                            ? n().createElement(ge, { text: a })
                                            : n().createElement(ge, {
                                                  text: oa.mainView.dateFormat(),
                                                  format: { binding: Object.assign({}, i, { toTime: o }) },
                                              }),
                                    ),
                                ),
                                n().createElement(ge, { className: 'Header_title_3e', text: u }),
                            );
                        },
                    ),
                    _a = (0, a.memo)(({ text: e }) =>
                        n().createElement(
                            'div',
                            { className: 'Hint_base_73' },
                            n().createElement('div', { className: 'Hint_border_2f' }),
                            n().createElement(
                                'div',
                                { className: 'Hint_hint_dc' },
                                n().createElement('div', { className: 'Hint_hintSubstrate_cd' }),
                                n().createElement('div', { className: 'Hint_hintArrow_23' }),
                                n().createElement(ge, { text: e, className: 'Hint_hintText_fa' }),
                            ),
                        ),
                    ),
                    ma = {
                        base: 'RerollButton_base_73',
                        base__disabled: 'RerollButton_base__disabled_b6',
                        iconWrapper: 'RerollButton_iconWrapper_ce',
                        base__small: 'RerollButton_base__small_0b',
                        base__medium: 'RerollButton_base__medium_cc',
                        base__large: 'RerollButton_base__large_a8',
                        base__extraLarge: 'RerollButton_base__extraLarge_34',
                        icon: 'RerollButton_icon_ee',
                        iconHover: 'RerollButton_iconHover_7d',
                        iconDisabled: 'RerollButton_iconDisabled_67',
                        text: 'RerollButton_text_91',
                        shine: 'RerollButton_shine_c9',
                    };
                let da, Ea;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large'), (e.ExtraLarge = 'extraLarge'));
                })(da || (da = {})),
                    (function (e) {
                        ((e.Left = 'left'), (e.Right = 'right'));
                    })(Ea || (Ea = {})));
                const Aa = R.strings.armory_yard.mainView.quest.rerollButton,
                    pa = (0, sa.observer)(
                        ({
                            onReroll: e,
                            text: t = '',
                            className: u,
                            disabled: a = !1,
                            size: r = da.Medium,
                            textPosition: s = Ea.Right,
                            hasTrigger: o = !1,
                        }) => {
                            const i = s === Ea.Left && Boolean(t),
                                l = s === Ea.Right && Boolean(t);
                            return n().createElement(
                                'div',
                                {
                                    className: D()(ma.base, u, a && ma.base__disabled, ma[`base__${r}`]),
                                    onClick: () => {
                                        a || (Kt(R.sounds.play()), e());
                                    },
                                    onMouseEnter: () => {
                                        !a && Kt(R.sounds.highlight());
                                    },
                                },
                                i && n().createElement(ge, { className: ma.text, text: t || '' }),
                                n().createElement(
                                    'div',
                                    { className: ma.iconWrapper },
                                    a
                                        ? n().createElement('div', { className: ma.iconDisabled })
                                        : n().createElement(
                                              n().Fragment,
                                              null,
                                              n().createElement('div', { className: ma.icon }),
                                              n().createElement('div', { className: ma.iconHover }),
                                              n().createElement('div', { className: ma.shine }),
                                              o && n().createElement(_a, { text: Aa.hint() }),
                                          ),
                                ),
                                l && n().createElement(ge, { className: ma.text, text: t || '' }),
                            );
                        },
                    );
                let ga;
                !(function (e) {
                    ((e.Done = 'done'),
                        (e.UndoneSubscription = 'undoneSubscription'),
                        (e.Locked = 'notAvailable'),
                        (e.Active = ''));
                })(ga || (ga = {}));
                var Fa = u(3915);
                const Da = {
                        tokenQuestID: 'armory_yard_cycle_20250501_postBattle6',
                        conditionID: 1111111,
                        status: ot.Active,
                        quests: [
                            {
                                earned: 0,
                                iconKey: 'battles',
                                total: 1,
                                current: 0,
                                battleTypes: [1],
                                vehicleNations: [],
                                vehicleTypes: ['lightTank', 'mediumTank', 'heavyTank', 'AT-SPG', 'SPG'],
                                showLevelsAsRange: !0,
                                levels: [1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11],
                                chapterId: 20250501,
                                bonuses: [
                                    {
                                        label: '',
                                        tooltipContentId: '',
                                        tooltipId: '0',
                                        isCompensation: !1,
                                        value: '',
                                        name: 'battleToken',
                                        index: 0,
                                    },
                                    {
                                        label: 'Дополнительный свободный опыт и опыт экипажа за бой',
                                        tooltipContentId: '',
                                        tooltipId: '1',
                                        isCompensation: !1,
                                        value: '2',
                                        name: 'goodies',
                                        index: 1,
                                    },
                                ],
                                postBattleCondition: {
                                    items: [
                                        {
                                            sortKey: 'damageDealt',
                                            progressType: '',
                                            earned: 0,
                                            total: 10,
                                            current: 0,
                                            iconKey: 'easter_egg',
                                            descrData: 'Нанесённый урон',
                                            titleData: ' 3 000',
                                            conditionType: 'results',
                                        },
                                        {
                                            sortKey: 'damageBlockedByArmor',
                                            progressType: '',
                                            earned: 0,
                                            total: 0,
                                            current: 0,
                                            iconKey: 'damage_block',
                                            descrData: 'Заблокированный урон',
                                            titleData: ' 3 000',
                                            conditionType: 'results',
                                        },
                                    ],
                                    conditionType: 'and',
                                },
                                bonusCondition: { items: [], conditionType: '' },
                                preBattleCondition: { items: [], conditionType: '' },
                                status: ga.Locked,
                                decoration: 0,
                                description: 'Съесть ещё этих мягких французских булок, да выпить же чаю',
                                title: 'Глава 1: Проектирование',
                                type: 6,
                                groupId: 'armory_yard_cycle_20250501',
                                id: 'armory_yard_condition:6:1',
                            },
                        ],
                    },
                    Ca = {
                        fromTimestamp: 1e7,
                        toTimestamp: 1e9,
                        currentQuest: Da,
                        suggestedQuests: [
                            Da,
                            {
                                tokenQuestID: 'armory_yard_cycle_20250501_postBattle1',
                                conditionID: 2222222,
                                status: ot.Active,
                                quests: [
                                    {
                                        earned: 0,
                                        iconKey: 'battles',
                                        total: 1,
                                        current: 0,
                                        battleTypes: [1],
                                        vehicleNations: [],
                                        vehicleTypes: ['lightTank', 'mediumTank', 'heavyTank', 'AT-SPG', 'SPG'],
                                        showLevelsAsRange: !0,
                                        levels: [1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11],
                                        chapterId: 20250501,
                                        bonuses: [
                                            {
                                                label: '',
                                                tooltipContentId: '',
                                                tooltipId: '0',
                                                isCompensation: !1,
                                                value: '',
                                                name: 'battleToken',
                                                index: 0,
                                            },
                                            {
                                                label: 'Дополнительный свободный опыт и опыт экипажа за бой',
                                                tooltipContentId: '',
                                                tooltipId: '1',
                                                isCompensation: !1,
                                                value: '2',
                                                name: 'goodies',
                                                index: 1,
                                            },
                                        ],
                                        postBattleCondition: {
                                            items: [
                                                {
                                                    sortKey: 'damageDealt',
                                                    progressType: '',
                                                    earned: 0,
                                                    total: 10,
                                                    current: 0,
                                                    iconKey: 'easter_egg',
                                                    descrData: 'Нанесённый урон',
                                                    titleData: ' 3 000',
                                                    conditionType: 'results',
                                                },
                                                {
                                                    sortKey: 'damageBlockedByArmor',
                                                    progressType: '',
                                                    earned: 0,
                                                    total: 0,
                                                    current: 0,
                                                    iconKey: 'damage_block',
                                                    descrData: 'Заблокированный урон',
                                                    titleData: ' 3 000',
                                                    conditionType: 'results',
                                                },
                                            ],
                                            conditionType: 'and',
                                        },
                                        bonusCondition: { items: [], conditionType: '' },
                                        preBattleCondition: { items: [], conditionType: '' },
                                        status: ga.Locked,
                                        decoration: 0,
                                        description:
                                            'Прочитать все описания новогодних украшений и подготовиться к изложению',
                                        title: 'Глава 1: Проектирование',
                                        type: 6,
                                        groupId: 'armory_yard_cycle_20250501',
                                        id: 'armory_yard_condition:6:1',
                                    },
                                ],
                            },
                            {
                                tokenQuestID: 'armory_yard_cycle_20250501_postBattle2',
                                conditionID: 3333333,
                                status: ot.Active,
                                quests: [
                                    {
                                        earned: 0,
                                        iconKey: 'battles',
                                        total: 1,
                                        current: 0,
                                        battleTypes: [1],
                                        vehicleNations: [],
                                        vehicleTypes: ['lightTank', 'mediumTank', 'heavyTank', 'AT-SPG', 'SPG'],
                                        showLevelsAsRange: !0,
                                        levels: [1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11],
                                        chapterId: 20250501,
                                        bonuses: [
                                            {
                                                label: '',
                                                tooltipContentId: '',
                                                tooltipId: '0',
                                                isCompensation: !1,
                                                value: '',
                                                name: 'battleToken',
                                                index: 0,
                                            },
                                            {
                                                label: 'Дополнительный свободный опыт и опыт экипажа за бой',
                                                tooltipContentId: '',
                                                tooltipId: '1',
                                                isCompensation: !1,
                                                value: '2',
                                                name: 'goodies',
                                                index: 1,
                                            },
                                        ],
                                        postBattleCondition: {
                                            items: [
                                                {
                                                    sortKey: 'damageDealt',
                                                    progressType: '',
                                                    earned: 0,
                                                    total: 10,
                                                    current: 0,
                                                    iconKey: 'easter_egg',
                                                    descrData: 'Нанесённый урон',
                                                    titleData: ' 3 000',
                                                    conditionType: 'results',
                                                },
                                                {
                                                    sortKey: 'damageBlockedByArmor',
                                                    progressType: '',
                                                    earned: 0,
                                                    total: 0,
                                                    current: 0,
                                                    iconKey: 'damage_block',
                                                    descrData: 'Заблокированный урон',
                                                    titleData: ' 3 000',
                                                    conditionType: 'results',
                                                },
                                            ],
                                            conditionType: 'and',
                                        },
                                        bonusCondition: { items: [], conditionType: '' },
                                        preBattleCondition: { items: [], conditionType: '' },
                                        status: ga.Locked,
                                        decoration: 0,
                                        description:
                                            'Позвонить близким и друзьям, справиться об их здоровье и настроении',
                                        title: 'Глава 1: Проектирование',
                                        type: 6,
                                        groupId: 'armory_yard_cycle_20250501',
                                        id: 'armory_yard_condition:6:1',
                                    },
                                ],
                            },
                        ],
                        freeRerollCount: 2,
                        canCloseWindow: !0,
                        isPaymentError: !0,
                        isIntroScreenVisited: !0,
                        hasIntroScreen: !0,
                        rerollCountdown: 1e4,
                        price: {
                            priceID: '',
                            defPrice: [],
                            discount: [],
                            price: [
                                { name: 'credits', value: 1250, isEnough: !0 },
                                { name: 'gold', value: 1250, isEnough: !1 },
                                { name: 'crystal', value: 1100, isEnough: !1 },
                                { name: 'freeXP', value: 500, isEnough: !1 },
                            ],
                        },
                    };
                function ba() {
                    return !1;
                }
                function Ba(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, a = new Array(t); u < t; u++) a[u] = e[u];
                    return a;
                }
                console.log;
                const ha = (e) => (0 === e ? window : window.subViews.get(e)),
                    va = (e) => {
                        return null !== e && 'object' == typeof e
                            ? 'CoherentArrayProxy' === e.constructor.name
                                ? ((t = e),
                                  (u = (e) => ('object' == typeof e ? va(e) : e)),
                                  Array.isArray(t) ? t.map(u) : t.map((e, t, a) => u(null == e ? void 0 : e.value)))
                                : Array.isArray(e)
                                  ? e.map((e) => ('object' == typeof e ? va(e) : e))
                                  : Object.fromEntries(
                                        Object.entries(e).map(([e, t]) => [e, 'object' == typeof t ? va(t) : t]),
                                    )
                            : e;
                        var t, u;
                    },
                    fa = (e) => va(e);
                var wa = u(6517);
                const Sa = ((e, t) => {
                        const u = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: i }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, u, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = ha,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = n.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const n = u(t),
                                                        r = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const i = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = s.O.view.addModelObserver(i, t, !0);
                                                        return (n.set(l, u), e && u(o(r)), l);
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
                                                                                    return Ba(e, t);
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
                                                                                          ? Ba(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        u && (e = u);
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
                                                                })(n.keys());
                                                            !(e = u()).done;

                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(u),
                                            o =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            _ = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.object(),
                                                        currentQuest: e.object('currentQuest'),
                                                        price: e.object('price'),
                                                        priceItem: e.array('price.price'),
                                                        suggestedQuests: e.array('suggestedQuests'),
                                                        moneyBalance: e.object('moneyBalance'),
                                                    },
                                                    u = (0, wa.computedFn)(() => fa(t.currentQuest.get()), {
                                                        equals: ba,
                                                    }),
                                                    a = (0, wa.computedFn)(() => fa(t.priceItem.get()), { equals: ba }),
                                                    n = (0, wa.computedFn)(() => fa(t.price.get()).priceID, {
                                                        equals: ba,
                                                    }),
                                                    r = (0, wa.computedFn)(
                                                        () => {
                                                            const e = fa(t.suggestedQuests.get());
                                                            return e.length ? e : Ca.suggestedQuests;
                                                        },
                                                        { equals: ba },
                                                    ),
                                                    s = (0, wa.computedFn)(
                                                        () => {
                                                            const e = fa(t.suggestedQuests.get());
                                                            return Boolean(e.length);
                                                        },
                                                        { equals: ba },
                                                    ),
                                                    o = (0, wa.computedFn)(
                                                        (e) => e.filter((e) => !(e.label || e.value)).length,
                                                        { equals: ba },
                                                    ),
                                                    i = (0, wa.computedFn)(() => fa(t.moneyBalance.get()), {
                                                        equals: ba,
                                                    });
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getCurrentQuest: u,
                                                        getPriceConditions: a,
                                                        getSelectedCurrency: n,
                                                        getSuggestedQuest: r,
                                                        getQuestTokensCount: o,
                                                        getIsLoadQuests: s,
                                                        getMoneyBalance: i,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, u) => {
                                                        const a = null != u ? u : i(t),
                                                            n = Fa.observable.box(a, { equals: ba });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Fa.action)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (t, u) => {
                                                        const a = null != u ? u : i(t),
                                                            n = Fa.observable.box(a, { equals: ba });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Fa.action)((e) => n.set(e)),
                                                                    t,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (t, u) => {
                                                        const a = i(u);
                                                        if (Array.isArray(t)) {
                                                            const n = t.reduce(
                                                                (e, t) => ((e[t] = Fa.observable.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Fa.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                n[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = t,
                                                                r = Object.entries(n),
                                                                s = r.reduce(
                                                                    (e, [t, u]) => (
                                                                        (e[u] = Fa.observable.box(a[t], {})),
                                                                        e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Fa.action)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                s[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: _, externalModel: o, cleanup: c };
                                        return {
                                            model: _,
                                            controls: 'mocks' === e && a ? a.controls(m) : t(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    m = (0, a.useState)(e),
                                    d = m[0],
                                    E = m[1],
                                    A = (0, a.useState)(() => c(e, r, i)),
                                    p = A[0],
                                    g = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? g(c(d, r, i)) : (_.current = !0);
                                    }, [i, d, r]),
                                    (0, a.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            (p.externalModel.dispose(), l.current.forEach((e) => e()));
                                        },
                                        [p],
                                    ),
                                    n().createElement(u.Provider, { value: p }, o)
                                );
                            },
                            () => (0, a.useContext)(u),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        onClose: e.createCallbackNoArgs('onClose'),
                        onReroll: e.createCallback((e) => ({ currency: e }), 'onReroll'),
                        onConfirm: e.createCallback((e) => ({ conditionQuestID: e }), 'onConfirm'),
                    })),
                    ya = Sa[0],
                    Ta = Sa[1];
                let Ra, xa, Pa;
                (!(function (e) {
                    ((e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(Ra || (Ra = {})),
                    (function (e) {
                        ((e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin'));
                    })(xa || (xa = {})),
                    (function (e) {
                        ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'));
                    })(Pa || (Pa = {})));
                const Ma = () =>
                    n().createElement(
                        n().Fragment,
                        null,
                        n().createElement(
                            'span',
                            { className: 'Waiting_waiting_3b' },
                            n().createElement('span', { className: 'Waiting_frame1_3a' }, '- '),
                            n().createElement('span', { className: 'Waiting_frame2_df' }, '- '),
                            n().createElement('span', { className: 'Waiting_frame3_aa' }, '- '),
                        ),
                        n().createElement('span', { className: 'Waiting_alertIcon_80' }),
                    );
                let Na;
                !(function (e) {
                    ((e.backport = 'backport'), (e.normal = 'normal'), (e.absent = 'absent'));
                })(Na || (Na = {}));
                const ka = {
                        base: 'CurrencyItem_base_bf',
                        base__credits: 'CurrencyItem_base__credits_81',
                        base__gold: 'CurrencyItem_base__gold_e5',
                        icon: 'CurrencyItem_icon_c3',
                        base__crystal: 'CurrencyItem_base__crystal_ef',
                        base__freeXP: 'CurrencyItem_base__freeXP_d5',
                        base__equipCoin: 'CurrencyItem_base__equipCoin_21',
                    },
                    La = ({ value: e, currencyType: t, isWGMAvailable: u, tooltip: a }) => {
                        const r = t === xa.gold ? 'gold' : 'integral',
                            s =
                                ((i = { currency: t }),
                                {
                                    isEnabled: (o = a.type) !== Na.absent,
                                    args: i,
                                    contentId: R.views.dialogs.common.DialogTemplateGenericTooltip('resId'),
                                    decoratorId:
                                        o === Na.normal
                                            ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                            : void 0,
                                    ignoreShowDelay: o === Na.backport,
                                    ignoreMouseClick: !0,
                                });
                        var o, i;
                        return n().createElement(
                            bt,
                            s,
                            n().createElement(
                                'span',
                                { className: D()(ka.base, ka[`base__${t}`]) },
                                n().createElement('div', { className: ka.icon }),
                                u ? n().createElement(xt, { value: e, format: r }) : n().createElement(Ma, null),
                            ),
                        );
                    },
                    Ia = (0, sa.observer)(() => {
                        const e = Ta().model.computes.getMoneyBalance(),
                            t = e.gold,
                            u = e.credits,
                            a = e.crystals,
                            r = e.freeExp,
                            s = e.equipCoin,
                            o = e.isWGMAvailable,
                            i = e.crystalsTooltip,
                            l = e.goldTooltip,
                            c = e.creditsTooltip,
                            _ = e.freeExpTooltip,
                            m = e.equipCoinTooltip;
                        return n().createElement(
                            'div',
                            { className: 'MoneyBalance_base_db' },
                            -1 !== a &&
                                n().createElement(La, {
                                    key: xa.crystal,
                                    value: a,
                                    currencyType: xa.crystal,
                                    isWGMAvailable: o,
                                    tooltip: i,
                                }),
                            -1 !== t &&
                                n().createElement(La, {
                                    key: xa.gold,
                                    value: t,
                                    currencyType: xa.gold,
                                    isWGMAvailable: o,
                                    tooltip: l,
                                }),
                            -1 !== u &&
                                n().createElement(La, {
                                    key: xa.credits,
                                    value: u,
                                    currencyType: xa.credits,
                                    isWGMAvailable: o,
                                    tooltip: c,
                                }),
                            -1 !== r &&
                                n().createElement(La, {
                                    key: xa.freeXP,
                                    value: r,
                                    currencyType: xa.freeXP,
                                    isWGMAvailable: o,
                                    tooltip: _,
                                }),
                            -1 !== s &&
                                n().createElement(La, {
                                    key: xa.equipCoin,
                                    value: s,
                                    currencyType: xa.equipCoin,
                                    isWGMAvailable: o,
                                    tooltip: m,
                                }),
                        );
                    }),
                    Oa = {
                        base: 'App_base_43',
                        topRight: 'App_topRight_54',
                        close: 'App_close_42',
                        headerBackground: 'App_headerBackground_5a',
                        vignette: 'App_vignette_a0',
                        header: 'App_header_d1',
                        content: 'App_content_71',
                        base__currentQuestToMiddle: 'App_base__currentQuestToMiddle_a0',
                        base__footerShow: 'App_base__footerShow_9a',
                        base__disableAllQuests: 'App_base__disableAllQuests_c8',
                        base__hideAllContent: 'App_base__hideAllContent_32',
                        base__instantAnimation: 'App_base__instantAnimation_2b',
                        questContainer: 'App_questContainer_2c',
                        base__suggestedQuestsHide: 'App_base__suggestedQuestsHide_c4',
                        questContainer__suggestedQuests: 'App_questContainer__suggestedQuests_ea',
                        blockHeader: 'App_blockHeader_20',
                        rerollDescription: 'App_rerollDescription_07',
                        infoIcon: 'App_infoIcon_5d',
                        separator: 'App_separator_08',
                        rewardsListWrapper: 'App_rewardsListWrapper_61',
                        rewardsHeader: 'App_rewardsHeader_9b',
                        quest: 'App_quest_4c',
                        rerollContainer: 'App_rerollContainer_4a',
                        reroll: 'App_reroll_7b',
                        rerollButton: 'App_rerollButton_19',
                        blurContainer: 'App_blurContainer_37',
                        blurContainer__visible: 'App_blurContainer__visible_7e',
                        showConditions: 'App_showConditions_d1',
                        btn: 'App_btn_9b',
                        showConditionsText: 'App_showConditionsText_b9',
                        chooseValue: 'App_chooseValue_99',
                        rerollIcon: 'App_rerollIcon_48',
                        freeRerollsText: 'App_freeRerollsText_6a',
                        value: 'App_value_52',
                        footer: 'App_footer_29',
                    },
                    Ha = (0, a.memo)(({ children: e, isBlur: t }) =>
                        n().createElement(
                            'div',
                            { className: D()('BlurContainer_base_52', t && 'BlurContainer_base__blur_e2') },
                            e,
                        ),
                    );
                let Ga;
                !(function (e) {
                    ((e.ArmoryCoin = 'armory_coin'), (e.ProgressionToken = 'progression_token'));
                })(Ga || (Ga = {}));
                const Ua = R.strings.armory_yard.tooltip.mainView.postProgressionToken,
                    Qa = (0, a.memo)(({ tokensCount: e = 0, isMainView: t = !0, isPostProgression: u = !1 }) =>
                        n().createElement(
                            'div',
                            { className: D()('QuestToken_base_45', t && 'QuestToken_base__main_7a') },
                            t && n().createElement('div', { className: 'QuestToken_glow_73' }),
                            n().createElement(
                                Xt,
                                { header: Ua.header(), body: Ua.body(), ignoreShowDelay: !0, isEnabled: u },
                                n().createElement(
                                    'div',
                                    { className: 'QuestToken_token_5a' },
                                    n().createElement(ge, {
                                        text: u
                                            ? R.strings.armory_yard.mainView.quest.postProgressionToken.label()
                                            : R.strings.armory_yard.mainView.quest.progressionToken.label(),
                                        className: 'QuestToken_label_10',
                                    }),
                                    !u &&
                                        n().createElement(
                                            n().Fragment,
                                            null,
                                            n().createElement('div', { className: 'QuestToken_tokensCount_c1' }, e),
                                            n().createElement(
                                                bt,
                                                {
                                                    contentId:
                                                        R.views.armory_yard.lobby.feature.tooltips.ArmoryYardCurrencyTooltipView(
                                                            'resId',
                                                        ),
                                                    args: { currency: Ga.ProgressionToken },
                                                    ignoreShowDelay: !0,
                                                },
                                                n().createElement('div', { className: 'QuestToken_icon_c7' }),
                                            ),
                                        ),
                                ),
                            ),
                        ),
                    );
                function Wa() {
                    return (
                        (Wa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        Wa.apply(this, arguments)
                    );
                }
                const $a = (0, a.memo)(({ data: e, size: t = vt.Small }) =>
                        n().createElement(
                            'div',
                            { className: 'RewardsList_base_87' },
                            e.map((e, u) =>
                                n().createElement(
                                    'div',
                                    { key: u, className: 'RewardsList_reward_64' },
                                    n().createElement(
                                        Iu,
                                        Wa({ size: t, classNames: { info: 'RewardsList_info_69' } }, e),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    qa = {
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
                    Va = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    ja = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Xa = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    za = (0, a.memo)(({ text: e, binding: t, classMix: u }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, a.useMemo)(() => t || {}, [t]);
                        let o = Va.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const u = o[0],
                                a = ja.exec(u),
                                c = Xa.exec(u),
                                _ = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                ((i = i.replace(u, `%(${o})`)),
                                    (s[o] = qa[e]
                                        ? n().createElement(
                                              'span',
                                              { className: qa[e] },
                                              n().createElement(re, { text: _, binding: t }),
                                          )
                                        : n().createElement(
                                              'span',
                                              { style: r(e) },
                                              n().createElement(re, { text: _, binding: t }),
                                          )));
                            }
                            o = Va.exec(e);
                        }
                        return n().createElement(re, { text: i, classMix: u, binding: s });
                    });
                let Ya;
                !(function (e) {
                    ((e.Progression = 'progression'),
                        (e.PostProgression = 'postProgression'),
                        (e.Completed = 'completed'));
                })(Ya || (Ya = {}));
                const Ka = R.strings.armory_yard.mainView.quest,
                    Za = {
                        bgImageBase: 'R.images.armory_yard.gui.maps.icons.quests.progress_bar.bg',
                        line: {
                            bgColorBase: 'transparent',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'transparent',
                        },
                        pattern: {
                            bgImageBase: 'R.images.armory_yard.gui.maps.icons.quests.progress_bar.pattern_orange',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.armory_yard.gui.maps.icons.quests.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                        delta: {
                            color: '#ffc',
                            shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                        },
                    },
                    Ja = (e, t, u) =>
                        u
                            ? e.map((e) => wu(e)).join(Ka.levelSeparator())
                            : e
                                  .map((e) => wu(e))
                                  .slice(0, t ? 3 : e.length)
                                  .join(Ka.levelSeparator()),
                    en = ({ rewardsCount: e }) =>
                        n().createElement(
                            'div',
                            { className: 'QuestCompleted_base_56' },
                            n().createElement('div', { className: 'QuestCompleted_bg_fc' }),
                            n().createElement('div', { className: 'QuestCompleted_stroke_86' }),
                            n().createElement('div', { className: 'QuestCompleted_icon_8d' }),
                            n().createElement(re, {
                                text: R.strings.armory_yard.mainView.quest.progressionToken.rewardReceived(e - 1),
                                classMix: 'QuestCompleted_label_5a',
                            }),
                        ),
                    tn = 'VehicleDescirption_levelWrapper_0c',
                    un = 'VehicleDescirption_level_fe',
                    an = 'VehicleDescirption_conditionSeparator_6e',
                    nn = R.strings.armory_yard.mainView.quest,
                    rn = R.images.gui.maps.icons,
                    sn = (0, a.memo)(
                        ({
                            vehicleTypes: e = [],
                            battleTypes: t = [],
                            levels: u,
                            showLevelsAsRange: a,
                            vehicleNations: r,
                        }) => {
                            const s = f().mediaSize,
                                o = 1 === u.length,
                                i = a && !o,
                                l = u.length > 3 && !i,
                                c = Ja(u, l, !1),
                                _ = t.slice(0, 4),
                                m = { from: wu(u[0]), to: wu(u[u.length - 1]) },
                                d = ((e) => {
                                    const t = R.images.gui.maps.icons.vehicleTypes;
                                    return e >= B.Medium ? t.$dyn('c_24x24') : t;
                                })(s),
                                E = i ? `${m.from}${nn.levelRangeSeparator()}${m.to}` : Ja(u, l, !0);
                            return n().createElement(
                                bt,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.TaskConditionTooltipView('resId'),
                                    args: { vehicleLevels: E, vehicleTypes: e, battleTypes: t, vehicleNations: r },
                                    ignoreShowDelay: !0,
                                },
                                n().createElement(
                                    'div',
                                    { className: 'VehicleDescirption_base_c2' },
                                    n().createElement(
                                        'div',
                                        { className: 'VehicleDescirption_conditions_e4' },
                                        _.map((e, t) =>
                                            n().createElement('div', {
                                                className: D()(
                                                    'VehicleDescirption_battleTypeIcon_d6',
                                                    t === _.length - 1 && 'VehicleDescirption_battleTypeIcon__last_90',
                                                ),
                                                key: e,
                                                style: {
                                                    backgroundImage: `url(${rn.quests.prebattleConditions.$num(e)})`,
                                                },
                                            }),
                                        ),
                                        t.length > 4 &&
                                            n().createElement(ge, {
                                                className: 'VehicleDescirption_ellipsis_ae',
                                                text: nn.battleType.ellipsis(),
                                            }),
                                        r &&
                                            r.length > 0 &&
                                            n().createElement(
                                                n().Fragment,
                                                null,
                                                n().createElement('div', { className: an }),
                                                r.map((e, t) =>
                                                    n().createElement('div', {
                                                        className: D()(
                                                            'VehicleDescirption_nation_7e',
                                                            t === r.length - 1 && 'VehicleDescirption_nation__last_7d',
                                                        ),
                                                        key: e,
                                                        style: {
                                                            backgroundImage: `url(${rn.filters.nations.$dyn(e)})`,
                                                        },
                                                    }),
                                                ),
                                            ),
                                        n().createElement('div', { className: an }),
                                        i
                                            ? n().createElement(ge, {
                                                  text: nn.vehicleType.levelsRange(),
                                                  className: D()(tn, un),
                                                  format: {
                                                      binding: {
                                                          from: m.from,
                                                          to: n().createElement(ge, { text: m.to }),
                                                          separator: n().createElement('div', {
                                                              className: 'VehicleDescirption_levelSeparator_ef',
                                                          }),
                                                      },
                                                      classMix: tn,
                                                  },
                                              })
                                            : n().createElement(ge, { text: c, className: un }),
                                        e[0] &&
                                            n().createElement(
                                                n().Fragment,
                                                null,
                                                n().createElement('div', {
                                                    className: D()(
                                                        an,
                                                        'VehicleDescirption_conditionSeparator__onlyLeft_40',
                                                    ),
                                                }),
                                                n().createElement(
                                                    'div',
                                                    { className: 'VehicleDescirption_vehicleTypes_e6' },
                                                    e.map((e) =>
                                                        n().createElement('div', {
                                                            key: e,
                                                            className: 'VehicleDescirption_vehicleTypeIcon_37',
                                                            style: { backgroundImage: `url(${d.$dyn(Z(e))})` },
                                                        }),
                                                    ),
                                                ),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    on = {
                        base: 'QuestProgress_base_12',
                        conditionSeparator: 'QuestProgress_conditionSeparator_b5',
                        condition: 'QuestProgress_condition_c9',
                        base__notAvailable: 'QuestProgress_base__notAvailable_d4',
                        conditionText: 'QuestProgress_conditionText_f7',
                        progressTotal: 'QuestProgress_progressTotal_d5',
                        conditionIcon: 'QuestProgress_conditionIcon_36',
                        progressBar: 'QuestProgress_progressBar_03',
                        progressBg: 'QuestProgress_progressBg_c9',
                    },
                    ln = R.strings.armory_yard.mainView.quest,
                    cn = (0, a.memo)(({ state: e, current: t, total: u, earned: a, iconKey: r }) => {
                        const s = {
                            backgroundImage: `url('R.images.gui.maps.icons.quests.battleCondition.c_90.${'icon_battle_condition_' + r + '_90x90'}')`,
                        };
                        return n().createElement(
                            'div',
                            { className: D()(on.base, on[`base__${e}`]) },
                            n().createElement(
                                'div',
                                { className: on.condition },
                                n().createElement('div', { className: on.conditionIcon, style: s }),
                                n().createElement(ge, {
                                    text: ln.progress(),
                                    className: on.conditionText,
                                    format: {
                                        binding: {
                                            current: gt.Z5.getRealFormat(t, gt.Gr.WO_ZERO_DIGITS),
                                            total: n().createElement(ge, {
                                                className: on.progressTotal,
                                                text: gt.Z5.getRealFormat(u, gt.Gr.WO_ZERO_DIGITS),
                                            }),
                                        },
                                    },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: on.progressBar },
                                n().createElement(Je, {
                                    size: Be.Small,
                                    maxValue: u,
                                    value: t,
                                    disabled: e === tu,
                                    theme: Za,
                                    deltaFrom: t - a,
                                }),
                                n().createElement('div', { className: on.progressBg }),
                            ),
                        );
                    }),
                    _n = 'QuestSeparator_separatorLine_8f',
                    mn = 'QuestSeparator_separatorLine__hideRewards_bc',
                    dn = (0, a.memo)(({ conditionType: e, isShowReward: t = !0 }) => {
                        const u = e === Vu.OR,
                            a = D()(
                                _n,
                                u
                                    ? 'QuestSeparator_separatorLine__bottomOr_8a'
                                    : 'QuestSeparator_separatorLine__bottom_20',
                                !t && mn,
                            );
                        return n().createElement(
                            'div',
                            { className: D()('QuestSeparator_base_64', u && 'QuestSeparator_base__or_45') },
                            n().createElement('div', { className: D()(_n, !t && mn) }),
                            n().createElement('div', { className: D()('QuestSeparator_separatorText_00') }),
                            n().createElement('div', { className: a }),
                        );
                    }),
                    En = {
                        base: 'QuestCondition_base_25',
                        quest: 'QuestCondition_quest_16',
                        quest__multi: 'QuestCondition_quest__multi_4f',
                        base__hideRewards: 'QuestCondition_base__hideRewards_a6',
                        description: 'QuestCondition_description_1d',
                        progressContainer: 'QuestCondition_progressContainer_63',
                        questProgress: 'QuestCondition_questProgress_1a',
                    },
                    An = (0, a.memo)(
                        ({
                            state: e,
                            condition: t,
                            isOneCondition: u,
                            conditionType: a,
                            isFirst: r,
                            isMultiTypesConditions: s,
                            isShowReward: o = !0,
                            levels: i,
                            showLevelsAsRange: l,
                            vehicleTypes: c,
                            battleTypes: _,
                            description: m,
                            vehicleNations: d,
                        }) => {
                            const E = t.current,
                                A = t.total,
                                p = t.earned,
                                g = r || u || s,
                                F = m || t.descrData;
                            return n().createElement(
                                'div',
                                { className: D()(En.base, g && En.base__first, !o && En.base__hideRewards) },
                                n().createElement(
                                    'div',
                                    { className: D()(En.quest, !u && En.quest__multi) },
                                    n().createElement(ge, { className: En.description, text: F }),
                                    n().createElement(
                                        'div',
                                        { className: En.progressContainer },
                                        n().createElement(
                                            'div',
                                            { className: En.questProgress },
                                            n().createElement(cn, {
                                                state: e,
                                                current: E,
                                                total: A,
                                                iconKey: t.iconKey,
                                                earned: p,
                                            }),
                                        ),
                                        n().createElement(sn, {
                                            levels: i,
                                            showLevelsAsRange: l,
                                            vehicleTypes: c,
                                            battleTypes: _,
                                            vehicleNations: d,
                                        }),
                                    ),
                                ),
                                r && !u && n().createElement(dn, { conditionType: a, isShowReward: o }),
                            );
                        },
                    ),
                    pn = {
                        base: 'Quest_base_71',
                        borderLayer: 'Quest_borderLayer_4e',
                        fadeIn: 'Quest_fadeIn_91',
                        fadeOut: 'Quest_fadeOut_b2',
                        questCard: 'Quest_questCard_9a',
                        questCard__hideRewards: 'Quest_questCard__hideRewards_2d',
                        questCard__selected: 'Quest_questCard__selected_2e',
                        background: 'Quest_background_48',
                        borderSelected: 'Quest_borderSelected_37',
                        state: 'Quest_state_8b',
                        content: 'Quest_content_3c',
                        questCard__notAvailable: 'Quest_questCard__notAvailable_99',
                        questCard__disableAllQuests: 'Quest_questCard__disableAllQuests_20',
                        questCard__hideAllContent: 'Quest_questCard__hideAllContent_fb',
                        quests: 'Quest_quests_a0',
                        rewards: 'Quest_rewards_a5',
                        separator: 'Quest_separator_5d',
                        checkIcon: 'Quest_checkIcon_57',
                        glow: 'Quest_glow_59',
                        rerollButtonContainer: 'Quest_rerollButtonContainer_48',
                        rerollButtonText: 'Quest_rerollButtonText_a5',
                        rerollButtonText__active: 'Quest_rerollButtonText__active_2c',
                        postprogressionDisabledQuest: 'Quest_postprogressionDisabledQuest_2c',
                    };
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const Fn = R.strings.armory_yard.mainView.quests,
                    Dn = R.images.armory_yard.gui.maps.icons.quests.quest,
                    Cn = (0, a.memo)(
                        ({
                            tokensCount: e,
                            chapterState: t,
                            quests: u,
                            status: r,
                            progressionState: s,
                            isShowReward: o = !0,
                            isSelected: i = !1,
                            isRerollEnabled: l = !1,
                            hasRerollTrigger: c = !1,
                            isPostProgression: _ = !1,
                            animationState: m,
                            onReroll: d,
                        }) => {
                            const E = (0, a.useState)(null),
                                A = E[0],
                                p = E[1],
                                g = (0, a.useState)(r),
                                F = g[0],
                                C = g[1],
                                b = (0, a.useState)(!1),
                                h = b[0],
                                v = b[1],
                                w = f().mediaSize,
                                S = ((e) => {
                                    switch (e) {
                                        case B.ExtraSmall:
                                        case B.Small:
                                            return 'small';
                                        default:
                                            return 'big';
                                    }
                                })(w),
                                y = w >= B.Medium ? vt.Big : vt.Small,
                                T = w < B.Medium ? da.Small : da.Large,
                                x = Dn.$dyn(S),
                                P = _ && r === ot.Locked,
                                M = Boolean(
                                    r !== ot.Locked && r !== eu && t !== $u && o && (e || (_ && s !== Ya.Completed)),
                                ),
                                N = ((e) => {
                                    if (e && e.length)
                                        return e.length > 1
                                            ? Vu.OR
                                            : e[0].bonusCondition.items.length > 1
                                              ? Vu.AND
                                              : void 0;
                                })(u),
                                k = r === uu && d && l,
                                L = (0, a.useMemo)(
                                    () =>
                                        u[0].bonuses
                                            .filter((e) => e.label.length > 0 || e.value.length > 0)
                                            .map((e) => ju(e)),
                                    [u],
                                );
                            return (
                                (0, a.useEffect)(() => {
                                    if (r !== F)
                                        return (
                                            p(F),
                                            C(r),
                                            Te(() => {
                                                p(null);
                                            }, st.ACTIVE_PHASE_END_STEPS[rt.DisableAllQuests])
                                        );
                                }, [F, r]),
                                n().createElement(
                                    'div',
                                    { className: pn.base },
                                    A &&
                                        n().createElement('div', {
                                            className: D()(pn.borderLayer, pn.fadeOut),
                                            style: { borderImageSource: `url(${x.$dyn('bg_' + A)})` },
                                        }),
                                    n().createElement(
                                        'div',
                                        {
                                            className: D()(
                                                pn.questCard,
                                                pn[`questCard__${r}`],
                                                !o && pn.questCard__hideRewards,
                                                i && pn.questCard__selected,
                                                pn.borderLayer,
                                                pn.fadeIn,
                                                pn[`questCard__${m}`],
                                            ),
                                            style: { borderImageSource: `url(${x.$dyn('bg_' + r)})` },
                                        },
                                        P &&
                                            n().createElement(
                                                Xt,
                                                {
                                                    header: Fn.disabledQuest.tooltip.header(),
                                                    body: Fn.disabledQuest.tooltip.body(),
                                                },
                                                n().createElement(
                                                    'div',
                                                    { className: pn.postprogressionDisabledQuest },
                                                    n().createElement(ge, { text: Fn.disabledQuest.title() }),
                                                ),
                                            ),
                                        n().createElement('div', { className: pn.background }),
                                        n().createElement('div', { className: pn.borderSelected }),
                                        n().createElement(
                                            'div',
                                            { className: pn.state },
                                            r === eu &&
                                                o &&
                                                n().createElement(en, { rewardsCount: u[0].bonuses.length }),
                                            M &&
                                                n().createElement(Qa, {
                                                    tokensCount: null != e ? e : 0,
                                                    isPostProgression: _,
                                                }),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: pn.content },
                                            n().createElement(
                                                'div',
                                                { className: D()(pn.quests, N === Vu.OR && pn.quests__orCondition) },
                                                u.map((e, t) => {
                                                    const u = ((e, t) => {
                                                        const u = e.bonusCondition.items.length
                                                                ? e.bonusCondition.items[0]
                                                                : null,
                                                            a = e.postBattleCondition.items.length
                                                                ? e.postBattleCondition.items[0]
                                                                : null;
                                                        return (t !== Vu.AND && t) || !u
                                                            ? [u, a]
                                                            : [...e.bonusCondition.items];
                                                    })(e, N).filter((e) => e);
                                                    return u.map((u, a) =>
                                                        n().createElement(
                                                            An,
                                                            gn(
                                                                {
                                                                    key: u.descrData,
                                                                    state: r,
                                                                    condition: u,
                                                                    isOneCondition: Boolean(!N),
                                                                    conditionType: N,
                                                                    isFirst: 0 === a && 0 === t,
                                                                    isMultiTypesConditions: Boolean(N),
                                                                    isShowReward: o,
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    );
                                                }),
                                            ),
                                        ),
                                        o &&
                                            L &&
                                            n().createElement(
                                                'div',
                                                { className: pn.rewards },
                                                n().createElement('div', { className: pn.separator }),
                                                k &&
                                                    d &&
                                                    n().createElement(
                                                        'div',
                                                        { className: pn.rerollButtonContainer },
                                                        !c &&
                                                            n().createElement(ge, {
                                                                className: D()(
                                                                    pn.rerollButtonText,
                                                                    h && pn.rerollButtonText__active,
                                                                ),
                                                                text: Fn.rerollButtonText(),
                                                            }),
                                                        n().createElement(
                                                            bt,
                                                            {
                                                                contentId:
                                                                    R.views.armory_yard.lobby.feature.tooltips.RerollButtonTooltip(
                                                                        'resId',
                                                                    ),
                                                            },
                                                            n().createElement(
                                                                'div',
                                                                {
                                                                    onMouseEnter: () => v(!0),
                                                                    onMouseLeave: () => v(!1),
                                                                    className: pn.rerollButton,
                                                                },
                                                                n().createElement(pa, {
                                                                    onReroll: d,
                                                                    size: T,
                                                                    hasTrigger: c,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                n().createElement($a, { size: y, data: L }),
                                            ),
                                        i &&
                                            n().createElement(
                                                n().Fragment,
                                                null,
                                                n().createElement('div', { className: pn.glow }),
                                                n().createElement('div', { className: pn.checkIcon }),
                                            ),
                                    ),
                                )
                            );
                        },
                    ),
                    bn = {
                        base: 'CurrentQuest_base_88',
                        base__currentQuestToMiddle: 'CurrentQuest_base__currentQuestToMiddle_0b',
                        base__footerShow: 'CurrentQuest_base__footerShow_d6',
                        blockHeader: 'CurrentQuest_blockHeader_d9',
                        rerollDescription: 'CurrentQuest_rerollDescription_5e',
                        infoIcon: 'CurrentQuest_infoIcon_bd',
                        separator: 'CurrentQuest_separator_a4',
                        rewardsListWrapper: 'CurrentQuest_rewardsListWrapper_1c',
                        rewards: 'CurrentQuest_rewards_83',
                        rewardsHeader: 'CurrentQuest_rewardsHeader_83',
                        rerollQuest: 'CurrentQuest_rerollQuest_b0',
                        quest: 'CurrentQuest_quest_b7',
                        base__instantAnimation: 'CurrentQuest_base__instantAnimation_27',
                        rerollContainer: 'CurrentQuest_rerollContainer_4f',
                        reroll: 'CurrentQuest_reroll_69',
                    },
                    Bn = R.strings.armory_yard.rerollView,
                    hn = (0, a.memo)(
                        ({
                            quest: e,
                            tokensCount: t,
                            animationState: u,
                            isInstantAnimation: a,
                            isPostProgressionFinished: r,
                            isPostProgression: s = !1,
                        }) => {
                            const o = f().mediaSize >= B.Medium ? vt.Big : vt.Small,
                                i = e.quests[0].bonuses
                                    .filter((e) => e.label.length > 0 || e.value.length > 0)
                                    .map((e) => ju(e)),
                                l = Boolean(t || (s && !r));
                            return n().createElement(
                                'div',
                                { className: D()(bn.base, bn[`base__${u}`], a && bn.base__instantAnimation) },
                                n().createElement(
                                    bt,
                                    {
                                        contentId:
                                            R.views.armory_yard.lobby.feature.tooltips.RerollDescriptionTooltipView(
                                                'resId',
                                            ),
                                    },
                                    n().createElement(
                                        'div',
                                        { className: bn.blockHeader },
                                        n().createElement(za, {
                                            text: Bn.content.description(),
                                            classMix: bn.rerollDescription,
                                        }),
                                        n().createElement('div', { className: bn.infoIcon }),
                                        n().createElement('div', { className: bn.separator }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: bn.quest },
                                    n().createElement(Cn, {
                                        status: e.status,
                                        quests: e.quests,
                                        isShowReward: !1,
                                        animationState: u,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: bn.rewards },
                                    n().createElement(ge, {
                                        text: Bn.content.reward.header(),
                                        className: bn.rewardsHeader,
                                    }),
                                    n().createElement(
                                        'div',
                                        { className: bn.rewardsListWrapper },
                                        n().createElement($a, { data: i, size: o }),
                                    ),
                                    l &&
                                        n().createElement(Qa, {
                                            tokensCount: null != t ? t : 0,
                                            isPostProgression: s,
                                            isMainView: !1,
                                        }),
                                ),
                            );
                        },
                    ),
                    vn = {
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
                let fn, wn;
                (!(function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(fn || (fn = {})),
                    (function (e) {
                        ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'));
                    })(wn || (wn = {})));
                const Sn = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: r,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: d,
                    onMouseLeave: E,
                    onClick: A,
                }) => {
                    const p = (0, a.useRef)(null),
                        g = (0, a.useState)(u),
                        F = g[0],
                        C = g[1],
                        b = (0, a.useState)(!1),
                        B = b[0],
                        h = b[1],
                        v = (0, a.useState)(!1),
                        f = v[0],
                        w = v[1],
                        S = (0, a.useCallback)(() => {
                            s || (p.current && (p.current.focus(), C(!0)));
                        }, [s]),
                        y = (0, a.useCallback)(
                            (e) => {
                                F && null !== p.current && !p.current.contains(e.target) && C(!1);
                            },
                            [F],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                s || (A && A(e));
                            },
                            [s, A],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                s || (null !== i && Kt(i), c && c(e), w(!0));
                            },
                            [s, i, c],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                s || (d && d(e), h(!1));
                            },
                            [s, d],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                s || (null !== l && Kt(l), m && m(e), u && S(), h(!0));
                            },
                            [s, l, m, S, u],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                s || (E && E(e), h(!1));
                            },
                            [s, E],
                        ),
                        L = D()(
                            vn.base,
                            vn[`base__${r}`],
                            {
                                [vn.base__disabled]: s,
                                [vn[`base__${t}`]]: t,
                                [vn.base__focus]: F,
                                [vn.base__highlightActive]: B,
                                [vn.base__firstHover]: f,
                            },
                            o,
                        ),
                        I = D()(vn.state, vn.state__default);
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
                            C(u);
                        }, [u]),
                        n().createElement(
                            'div',
                            {
                                ref: p,
                                className: L,
                                onMouseEnter: x,
                                onMouseMove: P,
                                onMouseUp: M,
                                onMouseDown: N,
                                onMouseLeave: k,
                                onClick: T,
                            },
                            r !== fn.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: vn.back }),
                                    n().createElement('span', { className: vn.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: I },
                                n().createElement('span', { className: vn.stateDisabled }),
                                n().createElement('span', { className: vn.stateHighlightHover }),
                                n().createElement('span', { className: vn.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: vn.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Sn.defaultProps = { type: fn.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const yn = (0, a.memo)(Sn),
                    Tn = {
                        base: 'Footer_base_e1',
                        base__disableAllQuests: 'Footer_base__disableAllQuests_7f',
                        base__hideAllContent: 'Footer_base__hideAllContent_a4',
                        base__showEndPhase: 'Footer_base__showEndPhase_e5',
                        compensationText: 'Footer_compensationText_67',
                        compensationText__gold: 'Footer_compensationText__gold_f8',
                        value: 'Footer_value_0f',
                        valueIcon: 'Footer_valueIcon_ef',
                        value__credits: 'Footer_value__credits_cc',
                        value__gold: 'Footer_value__gold_5f',
                        value__crystal: 'Footer_value__crystal_b1',
                        value__freeXP: 'Footer_value__freeXP_01',
                        btnsContainer: 'Footer_btnsContainer_97',
                        button: 'Footer_button_c6',
                        buttonText: 'Footer_buttonText_1d',
                    },
                    Rn = R.strings.armory_yard.rerollView.footer,
                    xn = (0, a.memo)(
                        ({
                            isDisabled: e,
                            animationState: t,
                            currentStage: u,
                            selectedRerollCondition: a,
                            selectedValueCount: r,
                            onConfirm: s,
                            onClose: o,
                        }) => {
                            const i = t === tt.FooterShow,
                                l = t === rt.ShowEndPhaseFooter;
                            return n().createElement(
                                Ha,
                                { isBlur: e && !i && !l },
                                n().createElement(
                                    'div',
                                    { className: D()(Tn.base, Tn[`base__${t}`]) },
                                    i &&
                                        n().createElement(
                                            'div',
                                            null,
                                            n().createElement(ge, {
                                                text: Rn.completeQuest.description(),
                                                className: Tn.compensationText,
                                            }),
                                            u === rr.SelectQuest &&
                                                n().createElement(za, {
                                                    text: a ? Rn.cashback.paid() : Rn.completeQuest.cashback.free(),
                                                    binding: {
                                                        value: n().createElement(
                                                            'div',
                                                            { className: D()(Tn.value, Tn[`value__${a}`]) },
                                                            n().createElement(ge, {
                                                                text: String(r),
                                                                className: D()(
                                                                    Tn.compensationText,
                                                                    Tn.compensationText__gold,
                                                                ),
                                                            }),
                                                            n().createElement('div', { className: Tn.valueIcon }),
                                                        ),
                                                    },
                                                    classMix: Tn.compensationText,
                                                }),
                                        ),
                                    n().createElement(
                                        'div',
                                        { className: Tn.btnsContainer },
                                        !i &&
                                            !l &&
                                            n().createElement(
                                                yn,
                                                { type: fn.secondary, mixClass: Tn.button, onClick: o, disabled: e },
                                                n().createElement(ge, { text: Rn.cancel(), className: Tn.buttonText }),
                                            ),
                                        n().createElement(
                                            yn,
                                            {
                                                type: fn.primary,
                                                mixClass: Tn.button,
                                                onClick: i || l ? o : s,
                                                disabled: e && !i && !l,
                                            },
                                            n().createElement(ge, {
                                                text: i || l ? Rn.confirmOnly() : Rn.confirm(),
                                                className: Tn.buttonText,
                                            }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Pn = 'Timer_timerText_f4',
                    Mn = 'Timer_timerText__alert_90',
                    Nn = 'Timer_timer_db',
                    kn = R.strings.armory_yard.bundles,
                    Ln = (0, a.memo)(({ timeUpdate: e }) => {
                        const t = (function (e = 0) {
                            let t = e;
                            const u = Math.trunc(t / 86400);
                            t -= 86400 * u;
                            const a = Math.trunc(t / 3600);
                            t -= 3600 * a;
                            const n = Math.trunc(t / 60);
                            return ((t -= 60 * n), { days: u, hours: a, minutes: n, seconds: t });
                        })(e);
                        return t.days > 0
                            ? n().createElement(ge, {
                                  text: t.hours > 0 ? kn.countdown.daysWithHours() : kn.countdown.days(),
                                  className: Pn,
                                  format: {
                                      binding: {
                                          day: n().createElement(ge, { text: String(t.days) }),
                                          hour: n().createElement(ge, { text: String(t.hours) }),
                                      },
                                  },
                              })
                            : t.hours > 0
                              ? n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Nn }),
                                    n().createElement(ge, {
                                        text: t.minutes > 0 ? kn.countdown.hoursWithMinutes() : kn.countdown.hours(),
                                        className: D()(Pn, Mn),
                                        format: {
                                            binding: {
                                                hour: n().createElement(ge, { text: String(t.hours) }),
                                                min: n().createElement(ge, { text: String(t.minutes) }),
                                            },
                                        },
                                    }),
                                )
                              : t.minutes > 0
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', { className: Nn }),
                                      n().createElement(ge, {
                                          text: kn.countdown.min(),
                                          className: D()(Pn, Mn),
                                          format: {
                                              binding: { min: n().createElement(ge, { text: String(t.minutes) }) },
                                          },
                                      }),
                                  )
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      n().createElement('div', { className: Nn }),
                                      n().createElement(ge, { text: kn.countdown.sec(), className: D()(Pn, Mn) }),
                                  );
                    });
                let In;
                !(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'));
                })(In || (In = {}));
                const On = {
                        base: 'ConditionLabel_base_9c',
                        text: 'ConditionLabel_text_b0',
                        base__selected: 'ConditionLabel_base__selected_23',
                        base__notEnabled: 'ConditionLabel_base__notEnabled_2f',
                        icon: 'ConditionLabel_icon_89',
                        base__credits: 'ConditionLabel_base__credits_15',
                        base__gold: 'ConditionLabel_base__gold_db',
                        base__crystal: 'ConditionLabel_base__crystal_72',
                        base__freeXP: 'ConditionLabel_base__freeXP_40',
                    },
                    Hn = (0, a.memo)(({ value: e, count: t, isSelected: u = !1, isEnabled: a = !0 }) =>
                        n().createElement(
                            'div',
                            {
                                className: D()(
                                    On.base,
                                    On[`base__${e}`],
                                    !a && On.base__notEnabled,
                                    u && On.base__selected,
                                ),
                            },
                            n().createElement(ge, { text: String(t), className: On.text }),
                            n().createElement('div', { className: On.icon }),
                        ),
                    );
                let Gn;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Gn || (Gn = {}));
                const Un = {
                    base: 'RadioButton_base_5e',
                    base__disabled: 'RadioButton_base__disabled_28',
                    input: 'RadioButton_input_1b',
                    base__small: 'RadioButton_base__small_9c',
                    base__medium: 'RadioButton_base__medium_ce',
                    blank: 'RadioButton_blank_65',
                    blankHover: 'RadioButton_blankHover_bb',
                    blankMousedown: 'RadioButton_blankMousedown_d1',
                    check: 'RadioButton_check_9d',
                    checkHover: 'RadioButton_checkHover_61',
                    checkMousedown: 'RadioButton_checkMousedown_48',
                    transition: 'RadioButton_transition_24',
                    base__blank: 'RadioButton_base__blank_9b',
                    base__blankHover: 'RadioButton_base__blankHover_c0',
                    base__blankMousedown: 'RadioButton_base__blankMousedown_a3',
                    base__check: 'RadioButton_base__check_d9',
                    base__checkHover: 'RadioButton_base__checkHover_21',
                    base__checkMousedown: 'RadioButton_base__checkMousedown_1a',
                    label: 'RadioButton_label_35',
                };
                let Qn;
                !(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'));
                })(Qn || (Qn = {}));
                const Wn = [
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
                function $n() {
                    return (
                        ($n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var a in u) Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
                                }
                                return e;
                            }),
                        $n.apply(this, arguments)
                    );
                }
                const qn = (0, a.memo)((e) => {
                        let t = e.children,
                            u = e.labelRenderer,
                            r = e.value,
                            s = e.currentValue,
                            o = e.autofocus,
                            i = void 0 !== o && o,
                            l = e.disabled,
                            c = void 0 !== l && l,
                            _ = e.size,
                            m = void 0 === _ ? Qn.Medium : _,
                            d = e.label,
                            E = e.soundHover,
                            A = void 0 === E ? 'highlight' : E,
                            p = e.soundClick,
                            g = void 0 === p ? 'play' : p,
                            F = e.onMouseEnter,
                            C = e.onMouseLeave,
                            b = e.onMouseUp,
                            B = e.onMouseDown,
                            h = e.onClick,
                            v = e.onChange,
                            f = e.onFocus,
                            w = e.onBlur,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) ((u = r[a]), t.indexOf(u) >= 0 || (n[u] = e[u]));
                                return n;
                            })(e, Wn);
                        const y = r === s,
                            T = (0, a.useState)(!1),
                            R = T[0],
                            x = T[1],
                            P = (0, a.useState)(!1),
                            M = P[0],
                            N = P[1],
                            k = (0, a.useState)(i),
                            L = k[0],
                            I = k[1],
                            O = (0, a.useRef)(null),
                            H = (0, a.useCallback)(() => {
                                !c && O.current && (O.current.focus(), I(!0));
                            }, [c]),
                            G = (0, a.useCallback)(
                                (e) => {
                                    L && null !== O.current && !O.current.contains(e.target) && I(!1);
                                },
                                [L],
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
                        const U = (0, a.useCallback)(
                                (e) => {
                                    c || (v && v(r), h && h(r, e));
                                },
                                [c, v, h, r],
                            ),
                            Q = (0, a.useCallback)(
                                (e) => {
                                    if (!c) {
                                        const t = e.button === Gn.LEFT;
                                        (t && x(!0), t && B && B(r, e), g && Kt(g), i && H());
                                    }
                                },
                                [i, c, B, H, g, r],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    c || (x(!1), b && b(r, e));
                                },
                                [c, b, r],
                            ),
                            $ = (0, a.useCallback)(
                                (e) => {
                                    c || (F && F(r, e), A && Kt(A), N(!0));
                                },
                                [c, F, A, r],
                            ),
                            q = (0, a.useCallback)(
                                (e) => {
                                    c || (x(!1), N(!1), C && C(r, e));
                                },
                                [c, C, r],
                            ),
                            V = (0, a.useCallback)(
                                (e) => {
                                    c || (I(!0), f && f(r, e));
                                },
                                [c, f, r],
                            ),
                            j = (0, a.useCallback)(
                                (e) => {
                                    c || (I(!1), w && w(r, e));
                                },
                                [c, w, r],
                            ),
                            X = D()(Un.base, Un[`base__${m}`], {
                                [Un.base__blank]: !y && !M,
                                [Un.base__blankHover]: !y && M && !R,
                                [Un.base__blankMousedown]: !y && M && R,
                                [Un.base__check]: y && !M,
                                [Un.base__checkHover]: y && M && !R,
                                [Un.base__checkMousedown]: y && M && R,
                                [Un.base__focused]: L,
                                [Un.base__disabled]: c,
                            }),
                            z = (0, a.useMemo)(
                                () => ({ isHovered: M, isMouseDown: R, isFocused: L, isChecked: y }),
                                [M, R, L, y],
                            ),
                            Y = (0, a.useRef)(Un.blank),
                            K = (0, a.useRef)(Un.blankHover),
                            Z = (0, a.useRef)(Un.blankMousedown),
                            J = (0, a.useRef)(Un.check),
                            ee = (0, a.useRef)(Un.checkHover),
                            te = (0, a.useRef)(Un.checkMousedown);
                        return (
                            (0, a.useEffect)(
                                ((e) => {
                                    let t,
                                        u = null;
                                    return (
                                        (u = requestAnimationFrame(() => {
                                            u = requestAnimationFrame(() => {
                                                ((u = null),
                                                    (Y.current = D()(Un.blank, Un.transition)),
                                                    (K.current = D()(Un.blankHover, Un.transition)),
                                                    (Z.current = D()(Un.blankMousedown, Un.transition)),
                                                    (J.current = D()(Un.check, Un.transition)),
                                                    (ee.current = D()(Un.checkHover, Un.transition)),
                                                    (t = void (te.current = D()(Un.checkMousedown, Un.transition))));
                                            });
                                        })),
                                        () => {
                                            ('function' == typeof t && t(), null !== u && cancelAnimationFrame(u));
                                        }
                                    );
                                })(),
                                [],
                            ),
                            n().createElement(
                                'div',
                                $n(
                                    {
                                        ref: O,
                                        className: X,
                                        onClick: U,
                                        onMouseEnter: $,
                                        onMouseLeave: q,
                                        onMouseDown: Q,
                                        onMouseUp: W,
                                        onFocus: V,
                                        onBlur: j,
                                    },
                                    S,
                                ),
                                n().createElement(
                                    'div',
                                    { className: Un.input },
                                    n().createElement('div', { className: Y.current }),
                                    n().createElement('div', { className: K.current }),
                                    n().createElement('div', { className: Z.current }),
                                    n().createElement('div', { className: J.current }),
                                    n().createElement('div', { className: ee.current }),
                                    n().createElement('div', { className: te.current }),
                                ),
                                n().createElement('div', { className: Un.label }, d || t || (u && u(z))),
                            )
                        );
                    }),
                    Vn = {
                        base: 'RerollConditions_base_18',
                        base__hideRerollConditions: 'RerollConditions_base__hideRerollConditions_6d',
                        animationWrapper: 'RerollConditions_animationWrapper_ca',
                        slideAndHide: 'RerollConditions_slideAndHide_cc',
                        base__hideSuggestedQuests: 'RerollConditions_base__hideSuggestedQuests_ba',
                        show: 'RerollConditions_show_7a',
                        base__showSuggestedQuests: 'RerollConditions_base__showSuggestedQuests_92',
                        hide: 'RerollConditions_hide_39',
                        btn: 'RerollConditions_btn_87',
                        showConditionsText: 'RerollConditions_showConditionsText_49',
                        separator: 'RerollConditions_separator_39',
                        price: 'RerollConditions_price_ab',
                        chooseValue: 'RerollConditions_chooseValue_61',
                        freeRerollsText: 'RerollConditions_freeRerollsText_9c',
                        value: 'RerollConditions_value_f1',
                        btnContainer: 'RerollConditions_btnContainer_49',
                        timerContainer: 'RerollConditions_timerContainer_b5',
                        timerText: 'RerollConditions_timerText_70',
                        errorContainer: 'RerollConditions_errorContainer_57',
                        errorText: 'RerollConditions_errorText_9e',
                    },
                    jn = R.strings.armory_yard.rerollView.content.reroll,
                    Xn = (0, a.memo)(
                        ({
                            currentStage: e,
                            priceConditions: t,
                            selectedRerollCondition: u,
                            onCondition: r,
                            handleShow: s,
                            rerollCountdown: o,
                            animationState: i,
                            isPaymentError: l,
                            onCancel: c,
                        }) => {
                            const _ = (0, a.useMemo)(() => Boolean(!t.find((e) => e.isEnough)), [t]),
                                m = e === rr.FreeReroll,
                                d = e === rr.PaidReroll;
                            return n().createElement(
                                'div',
                                { className: D()(Vn.base, Vn[`base__${i}`]) },
                                n().createElement(
                                    'div',
                                    { className: Vn.animationWrapper },
                                    n().createElement(za, { text: jn.conditions(), classMix: Vn.showConditionsText }),
                                    n().createElement('div', { className: Vn.separator }),
                                    n().createElement(ge, { text: jn.price(), className: Vn.price }),
                                    m &&
                                        n().createElement(
                                            'div',
                                            { className: Vn.chooseValue },
                                            n().createElement(ge, {
                                                text: jn.free(),
                                                format: { binding: { count: 1 } },
                                                className: Vn.freeRerollsText,
                                            }),
                                        ),
                                    d &&
                                        n().createElement(
                                            'div',
                                            { className: Vn.chooseValue },
                                            t.map(({ name: e, value: t, isEnough: a }, s) =>
                                                n().createElement(
                                                    'div',
                                                    { className: Vn.value, key: s },
                                                    n().createElement(qn, {
                                                        size: In.Medium,
                                                        label: n().createElement(Hn, {
                                                            value: e,
                                                            count: t,
                                                            isEnabled: a,
                                                            isSelected: e === u,
                                                        }),
                                                        value: e,
                                                        disabled: !a,
                                                        currentValue: u,
                                                        onClick: () => r(e),
                                                    }),
                                                ),
                                            ),
                                        ),
                                    n().createElement('div', { className: Vn.separator }),
                                    n().createElement(
                                        'div',
                                        { className: Vn.btnContainer },
                                        n().createElement(
                                            yn,
                                            { type: fn.secondary, mixClass: Vn.btn, onClick: c },
                                            n().createElement(ge, { text: jn.cancel(), className: Vn.buttonText }),
                                        ),
                                        n().createElement(
                                            yn,
                                            { type: fn.main, mixClass: Vn.btn, onClick: s, disabled: !m && !u },
                                            n().createElement(ge, { text: jn.confirm(), className: Vn.buttonText }),
                                        ),
                                    ),
                                    _ &&
                                        n().createElement(
                                            'div',
                                            { className: Vn.timerContainer },
                                            n().createElement(ge, { className: Vn.timerText, text: jn.timer() }),
                                            n().createElement(Ln, { timeUpdate: o }),
                                        ),
                                    l &&
                                        n().createElement(
                                            'div',
                                            { className: Vn.errorContainer },
                                            n().createElement(ge, { className: Vn.errorText, text: jn.error() }),
                                        ),
                                ),
                            );
                        },
                    ),
                    zn = (0, a.memo)(() =>
                        n().createElement(
                            'div',
                            { className: 'Vignette_base_22' },
                            n().createElement('div', { className: 'Vignette_layer1_3c' }),
                            n().createElement('div', { className: 'Vignette_layer2_7a' }),
                        ),
                    ),
                    Yn = 'RerollIntroScreen_arrowImage_ad',
                    Kn = (0, a.memo)(({ title: e, description: t, image: u }) =>
                        n().createElement(
                            'div',
                            { className: 'TextBlock_base_4b' },
                            n().createElement('div', {
                                className: 'TextBlock_introImage_51',
                                style: { backgroundImage: `url(${u})` },
                            }),
                            n().createElement(ge, { className: 'TextBlock_title_c9', text: e }),
                            n().createElement(ge, { className: 'TextBlock_description_f5', text: J(t) }),
                        ),
                    ),
                    Zn = R.strings.armory_yard.rerollView;
                var Jn;
                !(function (e) {
                    ((e.Stamp = 'tip_1'), (e.Presents = 'tip_2'), (e.Reward = 'tip_3'));
                })(Jn || (Jn = {}));
                const er = Object.keys(Jn),
                    tr = (0, a.memo)(({ fromTimestamp: e, toTimestamp: t, onClose: u }) =>
                        n().createElement(
                            'div',
                            { className: 'RerollIntroScreen_base_e6' },
                            n().createElement(
                                'div',
                                { className: 'RerollIntroScreen_vignette_d3' },
                                n().createElement(zn, null),
                            ),
                            n().createElement('div', { className: 'RerollIntroScreen_headerBackground_ac' }),
                            n().createElement(
                                'div',
                                { className: 'RerollIntroScreen_titleBlock_16' },
                                n().createElement(ca, {
                                    fromTimestamp: e,
                                    toTimestamp: t,
                                    title: Zn.intro.title(),
                                    state: ct.Intro,
                                    displayFeatureName: !0,
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'RerollIntroScreen_content_b5' },
                                n().createElement(
                                    'div',
                                    { className: 'RerollIntroScreen_arrowsBlock_25' },
                                    n().createElement('div', { className: Yn }),
                                    n().createElement('div', { className: Yn }),
                                ),
                                er.map((e) =>
                                    n().createElement(Kn, {
                                        key: e,
                                        title: Zn.intro.tips[Jn[e]].title(),
                                        description: Zn.intro.tips[Jn[e]].description(),
                                        image: 'R.images.armory_yard.gui.maps.icons.reroll.intro.' + Jn[e],
                                    }),
                                ),
                            ),
                            n().createElement(
                                yn,
                                {
                                    type: fn.primary,
                                    size: wn.medium,
                                    onClick: u,
                                    mixClass: 'RerollIntroScreen_button_47',
                                },
                                n().createElement(ge, { text: Zn.accept() }),
                            ),
                        ),
                    ),
                    ur = (0, a.memo)(
                        ({
                            quests: e,
                            selectedQuest: t,
                            isSelectedQuestStage: u,
                            isBlur: r,
                            animationState: s,
                            activeQuestIndex: o,
                            onQuest: i,
                        }) => {
                            const l = (0, a.useCallback)(
                                    (e) => () => {
                                        e || Zt.playHighlight();
                                    },
                                    [],
                                ),
                                c = (0, a.useCallback)(
                                    (e, t) => () => {
                                        t || (Zt.playClick(), i(e));
                                    },
                                    [i],
                                );
                            return n().createElement(
                                'div',
                                { className: 'SuggestedQuests_base_d0' },
                                e.map((e, a) => {
                                    const i = u && t === e.conditionID,
                                        _ = o > a;
                                    return n().createElement(
                                        'div',
                                        {
                                            className: D()(
                                                'SuggestedQuests_quest_d3',
                                                i && 'SuggestedQuests_quest__selected_c0',
                                                s === ut.QuestShow && 'SuggestedQuests_quest__visible_17',
                                            ),
                                            style: { animationDelay: 200 * a + 'ms' },
                                            onClick: c(e.conditionID, i),
                                            onMouseEnter: l(i),
                                            key: e.conditionID,
                                        },
                                        n().createElement(
                                            Ha,
                                            { isBlur: (r && s !== ut.QuestShow) || !_ },
                                            n().createElement(Cn, {
                                                quests: e.quests,
                                                status: e.status,
                                                isShowReward: !1,
                                                isSelected: i,
                                                animationState: s,
                                            }),
                                        ),
                                    );
                                }),
                            );
                        },
                    );
                function ar(e, t, u, a, n, r, s) {
                    try {
                        var o = e[r](s),
                            i = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(a, n);
                }
                function nr(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (a, n) {
                            var r = e.apply(t, u);
                            function s(e) {
                                ar(r, a, n, s, o, 'next', e);
                            }
                            function o(e) {
                                ar(r, a, n, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let rr;
                !(function (e) {
                    ((e.FreeReroll = 'free_reroll'), (e.PaidReroll = 'paid_reroll'), (e.SelectQuest = 'select_quest'));
                })(rr || (rr = {}));
                const sr = R.strings.armory_yard.rerollView,
                    or = (0, sa.observer)(() => {
                        const e = Ta(),
                            t = e.controls,
                            u = e.model,
                            r = u.root.get(),
                            o = r.fromTimestamp,
                            i = r.toTimestamp,
                            l = r.freeRerollCount,
                            c = r.rerollCountdown,
                            _ = r.canCloseWindow,
                            m = r.isIntroScreenVisited,
                            d = r.isPaymentError,
                            E = r.isPostProgressionQuest,
                            A = r.isPostProgressionFinished,
                            p = u.computes.getCurrentQuest(),
                            g = u.computes.getSuggestedQuest(),
                            F = u.computes.getPriceConditions(),
                            C = u.computes.getSelectedCurrency(),
                            b = u.computes.getIsLoadQuests(),
                            h = (0, a.useRef)(null),
                            v = ((e) => {
                                const t = (0, a.useState)(ra(e ? e.current : null)),
                                    u = t[0],
                                    n = t[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        let t = 0;
                                        const u = () => {
                                            t = requestAnimationFrame(() => {
                                                ra(e ? e.current : null) ? n(!0) : u();
                                            });
                                        };
                                        return (
                                            u(),
                                            () => {
                                                cancelAnimationFrame(t);
                                            }
                                        );
                                    }, [e]),
                                    (0, a.useEffect)(() => () => n(!1), [e]),
                                    u
                                );
                            })(h),
                            w = (0, a.useState)(0),
                            S = w[0],
                            y = w[1],
                            T = (0, a.useState)(!1),
                            R = T[0],
                            x = T[1],
                            P = (0, a.useState)(b),
                            M = P[0],
                            N = P[1],
                            k = u.computes.getQuestTokensCount(p.quests[0].bonuses),
                            L = (0, a.useState)(b ? rr.SelectQuest : rr.FreeReroll),
                            I = L[0],
                            O = L[1],
                            H = (0, a.useState)(l),
                            G = H[0],
                            U = H[1],
                            Q = (0, a.useState)(g),
                            W = Q[0],
                            $ = Q[1],
                            q = (0, a.useState)(!1),
                            V = q[0],
                            j = q[1],
                            X = (0, a.useState)(W.length ? W[0].conditionID : void 0),
                            z = X[0],
                            Y = X[1],
                            K = (0, a.useState)(C),
                            Z = K[0],
                            J = K[1],
                            ee = (0, a.useState)(m),
                            te = ee[0],
                            ue = ee[1],
                            ae = (0, a.useState)(0),
                            ne = ae[0],
                            re = ae[1],
                            se = (0, a.useState)(!1),
                            oe = se[0],
                            ie = se[1],
                            le = f().mediaSize < B.Medium ? da.Small : da.Medium,
                            ce = I === rr.SelectQuest,
                            _e = ((e, t, u) => {
                                const n = Ku(e),
                                    r = Ku(t),
                                    s = (0, a.useState)(null),
                                    o = s[0],
                                    i = s[1],
                                    l = (0, a.useState)(et),
                                    c = l[0],
                                    _ = l[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        (n !== ot.Done &&
                                            (e === ot.Done
                                                ? (i(st.COMPLETE_ANIMATION), _(et))
                                                : e !== ot.Locked && (i(null), _(et))),
                                            n !== ot.Locked &&
                                                (e === ot.Locked
                                                    ? (i(st.ACTIVE_PHASE_END_STEPS), _(et))
                                                    : e !== ot.Done && (i(null), _(et))));
                                    }, [n, e]),
                                    (0, a.useEffect)(() => {
                                        r || o === st.SHOW_SUGGESTED_QUESTS_STEPS
                                            ? c && (t ? (i(null), _(et)) : (i(st.HIDE_SUGGESTED_QUESTS_STEPS), _(et)))
                                            : t &&
                                              (u
                                                  ? (i(st.SIMPLE_SHOW_SUGGESTED_QUESTS_STEPS), _(et))
                                                  : (i(st.SHOW_SUGGESTED_QUESTS_STEPS), _(et)));
                                    }, [r, t]),
                                    (0, a.useEffect)(() => {
                                        if (o && c === et) {
                                            const e = Object.keys(o);
                                            _(e[0]);
                                        }
                                    }, [c, o]),
                                    (0, a.useEffect)(() => {
                                        if (!o || c === et) return;
                                        const e = Object.keys(o),
                                            t = o[c],
                                            u = ((e, t) => {
                                                const u = t.indexOf(e);
                                                return -1 === u || u === t.length - 1 ? null : t[u + 1];
                                            })(c, e);
                                        return Te(() => {
                                            u ? _(u) : i(null);
                                        }, t);
                                    }, [c, o]),
                                    { animationState: c }
                                );
                            })(p.status, ce, V),
                            me = _e.animationState,
                            de = (0, a.useState)(rr.FreeReroll),
                            Ee = de[0],
                            Ae = de[1],
                            pe = me === rt.ShowEndPhase || me === rt.ShowEndPhaseFooter,
                            Fe = (b && M) || (ce && me !== ut.HideRerollConditions && me !== at.ShowSuggestedQuests),
                            De = (0, a.useMemo)(() => {
                                var e;
                                return (null == (e = F.find((e) => e.name === Z)) ? void 0 : e.value) || 0;
                            }, [F, Z]),
                            be = (0, a.useCallback)(() => {
                                _ && te && !ce && !R && t.onClose();
                            }, [t, _, te, ce, R]),
                            Be = (0, a.useCallback)(() => {
                                t.onReroll(Z || '');
                            }, [t, Z]);
                        ((0, a.useEffect)(() => {
                            var e;
                            const t = null != (e = F.find((e) => e.name === Z)) && e.isEnough ? Z : null;
                            !t && J(t);
                        }, [F, Z]),
                            (0, a.useEffect)(() => {
                                I !== rr.SelectQuest && Ae(I);
                            }, [I]),
                            (0, a.useEffect)(() => {
                                U(l);
                            }, [l]),
                            (0, a.useEffect)(() => {
                                W !== g && (l && U(l), O(rr.SelectQuest), re(0), j(!1), x(!1));
                            }, [l, W, g]),
                            (0, a.useEffect)(() => {
                                (Y(W.length ? W[0].conditionID : void 0), $(g));
                            }, [W, g]),
                            (0, a.useEffect)(() => {
                                !b || R
                                    ? O(G ? rr.FreeReroll : rr.PaidReroll)
                                    : (re(W.length + 1), j(!1), O(rr.SelectQuest), x(!1));
                            }, [G, b, W, R]),
                            (function ({
                                key: e = ua.n.ESCAPE,
                                callback: t = () => s.O.view.sendEvent.close(),
                                preventPropagation: u = !0,
                            } = {}) {
                                na(e, t, u);
                            })({ callback: be }),
                            (0, a.useEffect)(() => {
                                h.current && v && y(viewEnv.pxToRem(h.current.getBoundingClientRect().width / 2));
                            }, [v, h]));
                        const he = (0, a.useCallback)(
                            nr(function* () {
                                (ie(!0),
                                    yield (0, gt.Eu)(),
                                    yield new Promise((e) => {
                                        requestAnimationFrame(() => {
                                            requestAnimationFrame(() => {
                                                e();
                                            });
                                        });
                                    }));
                                const e = h.current;
                                return (
                                    e && y(viewEnv.pxToRem(e.getBoundingClientRect().width / 2)),
                                    Te(() => {
                                        ie(!1);
                                    }, 0)
                                );
                            }),
                            [],
                        );
                        return (
                            (0, a.useEffect)(
                                () => (
                                    engine.on('clientResized', he),
                                    () => {
                                        engine.off('clientResized', he);
                                    }
                                ),
                                [he],
                            ),
                            (0, a.useEffect)(() => {
                                if (me === ut.QuestShow)
                                    return (
                                        W.map((e, t) =>
                                            Te(() => {
                                                re(t + 1);
                                            }, 200 * t),
                                        ),
                                        Te(() => {
                                            re(W.length + 1);
                                        }, 200 * W.length)
                                    );
                            }, [me, W]),
                            n().createElement(
                                'div',
                                { className: D()(Oa.base, Oa[`base__${me}`], oe && Oa.base__instantAnimation) },
                                te
                                    ? n().createElement(
                                          n().Fragment,
                                          null,
                                          _ &&
                                              !ce &&
                                              !R &&
                                              n().createElement(
                                                  'div',
                                                  { className: Oa.close },
                                                  n().createElement(ta, {
                                                      caption: sr.close(),
                                                      type: 'close',
                                                      side: 'right',
                                                      onClick: t.onClose,
                                                  }),
                                              ),
                                          n().createElement('div', { className: Oa.headerBackground }),
                                          n().createElement('div', { className: Oa.vignette }),
                                          n().createElement(
                                              'div',
                                              { className: Oa.topRight },
                                              n().createElement(Ia, null),
                                          ),
                                          n().createElement(
                                              'div',
                                              { className: Oa.header },
                                              n().createElement(ca, {
                                                  fromTimestamp: o,
                                                  toTimestamp: i,
                                                  title: sr.header.title(),
                                              }),
                                          ),
                                          pe
                                              ? n().createElement(Ce, { value: Z, count: De })
                                              : n().createElement(
                                                    'div',
                                                    { className: Oa.content },
                                                    n().createElement(
                                                        'div',
                                                        {
                                                            className: Oa.questContainer,
                                                            style: {
                                                                transform: `translateX(${me === tt.CurrentQuestToMiddle || me === tt.FooterShow ? S : 0}rem)`,
                                                            },
                                                        },
                                                        n().createElement(hn, {
                                                            quest: p,
                                                            animationState: me,
                                                            tokensCount: k,
                                                            isInstantAnimation: oe,
                                                            isPostProgression: E,
                                                            isPostProgressionFinished: A,
                                                        }),
                                                    ),
                                                    n().createElement(
                                                        'div',
                                                        {
                                                            className: D()(
                                                                Oa.questContainer,
                                                                Oa.questContainer__suggestedQuests,
                                                            ),
                                                            ref: h,
                                                        },
                                                        n().createElement(
                                                            'div',
                                                            { className: Oa.blockHeader },
                                                            n().createElement(ge, {
                                                                text: sr.content.reroll.description(),
                                                                className: Oa.rerollDescription,
                                                            }),
                                                            n().createElement('div', { className: Oa.separator }),
                                                        ),
                                                        n().createElement(
                                                            'div',
                                                            { className: Oa.rerollContainer },
                                                            z &&
                                                                n().createElement(ur, {
                                                                    quests: W,
                                                                    selectedQuest: z,
                                                                    isSelectedQuestStage: Fe,
                                                                    onQuest: Y,
                                                                    isBlur: !Fe,
                                                                    animationState: me,
                                                                    activeQuestIndex: ne,
                                                                }),
                                                            n().createElement(
                                                                Ha,
                                                                {
                                                                    isBlur:
                                                                        (!Fe && me !== ut.QuestShow) ||
                                                                        ne < W.length + 1,
                                                                },
                                                                n().createElement(
                                                                    'div',
                                                                    { className: Oa.reroll },
                                                                    n().createElement(pa, {
                                                                        onReroll: () => {
                                                                            (O(G ? rr.FreeReroll : rr.PaidReroll),
                                                                                re(0),
                                                                                x(!0),
                                                                                N(!1));
                                                                        },
                                                                        size: le,
                                                                        text: sr.content.reroll.more(),
                                                                        className: Oa.rerollButton,
                                                                    }),
                                                                ),
                                                            ),
                                                            (!Fe || R) &&
                                                                n().createElement(Xn, {
                                                                    currentStage: I,
                                                                    priceConditions: F,
                                                                    selectedRerollCondition: Z,
                                                                    onCondition: J,
                                                                    handleShow: Be,
                                                                    rerollCountdown: c,
                                                                    animationState: me,
                                                                    isPaymentError: d,
                                                                    onCancel: () => {
                                                                        R
                                                                            ? (O(rr.SelectQuest),
                                                                              j(!0),
                                                                              re(g.length + 1),
                                                                              x(!1),
                                                                              N(!1))
                                                                            : t.onClose();
                                                                    },
                                                                }),
                                                        ),
                                                    ),
                                                ),
                                          n().createElement(
                                              'div',
                                              { className: Oa.footer },
                                              n().createElement(xn, {
                                                  animationState: me,
                                                  isDisabled: !ce || !z,
                                                  currentStage: I,
                                                  selectedRerollCondition: Ee === rr.PaidReroll ? Z : null,
                                                  selectedValueCount: De,
                                                  onClose: () => t.onConfirm(p.conditionID),
                                                  onConfirm: () => z && t.onConfirm(z),
                                              }),
                                          ),
                                      )
                                    : n().createElement(tr, {
                                          onClose: () => ue(!0),
                                          fromTimestamp: o,
                                          toTimestamp: i,
                                      }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    L().render(
                        n().createElement(ya, null, n().createElement(N, null, n().createElement(or, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e].call(u.exports, u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, a) => {
            if (!t) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, a] = deferred[i], r = !0, s = 0; s < t.length; s++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(i--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > a; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, a];
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
        (__webpack_require__.j = 338),
        (() => {
            var e = { 338: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var a,
                        n,
                        [r, s, o] = u,
                        i = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); i < r.length; i++)
                        ((n = r[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(285));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
